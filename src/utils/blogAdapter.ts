import type { WordPressPost } from '../types/wordpress';
import type { Post, CategoryValue } from '../types/blog';
import { processFAQs } from './faqExtractor';

// Strip WordPress page-builder shortcodes (Visual Composer, Divi, Elementor, etc.)
// that occasionally leak into the rendered content. We deliberately only target
// shortcode tags whose name contains an underscore (e.g. [vc_row], [/vc_column_text],
// [et_pb_section ...]). This avoids stripping legitimate bracketed text such as
// footnotes "[1]" or simple tokens "[note]".
function stripBuilderShortcodes(html: string): string {
  return html.replace(/\[\/?[a-z][a-z0-9]*_[a-z0-9_]*(?:\s[^\]]*)?\]/gi, '');
}

const categoryMapping: Record<string, CategoryValue> = {
  'skincare': 'skincare',
  'weight-loss': 'weight',
  'anti-aging': 'aging',
  'treatments': 'treatments',
};

function getCategoryFromWordPress(post: WordPressPost): Omit<CategoryValue, "all"> {
  const terms = post._embedded?.['wp:term'] || [];
  const categories = terms.flat().filter(term => term.taxonomy === 'category');
  
  for (const category of categories) {
    const mappedCategory = categoryMapping[category.slug];
    if (mappedCategory && mappedCategory !== 'all') {
      return mappedCategory;
    }
  }
  
  return 'skincare';
}

function getTagFromWordPress(post: WordPressPost): string {
  const terms = post._embedded?.['wp:term'] || [];
  const tags = terms.flat().filter(term => term.taxonomy === 'post_tag');
  return tags[0]?.name || 'Article';
}

function getReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function adaptWordPressPost(post: WordPressPost, index: number): Post {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||  post.jetpack_featured_media_url || '/images/blog-default.png';
  

  const seo = post.yoast_head_json ? {
    title: post.yoast_head_json.title || post.title.rendered.replace(/<[^>]*>/g, ''),
    description: post.yoast_head_json.description || post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
    canonical: post.yoast_head_json.canonical || '',
    ogTitle: post.yoast_head_json.og_title || post.title.rendered.replace(/<[^>]*>/g, ''),
    ogDescription: post.yoast_head_json.og_description || post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200),
    ogImage: post.yoast_head_json.og_image?.[0]?.url || featuredImage,
    twitterTitle: post.yoast_head_json.twitter_title || post.title.rendered.replace(/<[^>]*>/g, ''),
    twitterDescription: post.yoast_head_json.twitter_description || post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200),
    twitterImage: post.yoast_head_json.twitter_image || featuredImage,
    robots: post.yoast_head_json.robots ? `${post.yoast_head_json.robots.index}, ${post.yoast_head_json.robots.follow}` : 'index, follow'
  } : undefined;
    const { items: faqs, html: contentWithProcessedFAQs } = processFAQs(post.content.rendered);
    const cleanedContent = stripBuilderShortcodes(contentWithProcessedFAQs);
    // console.log(faqs);
  return {
    id: post.id,
    category: getCategoryFromWordPress(post),
    tag: getTagFromWordPress(post),
    title: post.title.rendered,
    content: cleanedContent,
    date: formatDate(post.date),
    readTime: getReadTime(post.content.rendered),
    image: featuredImage,
    href: `https://www.nexus-clinic.com/${post.slug}/`,
    featured: index === 0,
    seo,
    faqs: faqs.length > 0 ? faqs : undefined
  };
}

export function adaptWordPressPosts(posts: WordPressPost[]): Post[] {
  return posts.map((post, index) => adaptWordPressPost(post, index));
}

