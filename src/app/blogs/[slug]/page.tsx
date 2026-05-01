import { wordpressService } from "@/src/services/wordpress";
import { adaptWordPressPost } from "@/src/utils/blogAdapter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SingleBlogPost } from "@/src/components/blog/SingleBlogPost";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/src/components/blog/ShareButton";
import { FloatingWhatsapp } from "@/src/components/Whatsapp";
import Image from "next/image";
import { generateFAQSchema } from "@/src/utils/faqExtractor";
import Script from "next/script";
import { cache } from "react";

const baseUrl = process.env.BASE_URL || "https://www.nexus-clinic.com";

export const revalidate = 3600;
export const dynamicParams = true;

// ✅ CACHE
const getPostCached = cache(async (slug: string) => {
  return wordpressService.getPost(slug);
});

// ✅ PREBUILD TOP POSTS ONLY
export async function generateStaticParams() {
  try {
    const posts = await wordpressService.getAllPosts();
    return posts.slice(0, 50).map((p) => ({
      slug: p.slug,
    }));
  } catch {
    return [];
  }
}

// ✅ METADATA (FIXED FOR NEXT 15)
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  try {
    const { slug } = await params;

    const wpPost = await getPostCached(slug);
    if (!wpPost) return { title: "Blog Not Found" };

    const post = adaptWordPressPost(wpPost, 0);

    const cleanTitle = post.title.replace(/<[^>]*>/g, "");
    const description =
      post.seo?.description ||
      post.content?.replace(/<[^>]*>/g, "").slice(0, 160) ||
      "Read our latest blog post";

    return {
      metadataBase: new URL(baseUrl),
      title: post.seo?.title || cleanTitle,
      description,
      alternates: {
        canonical: `${baseUrl}/blogs/${slug}`,
      },
      openGraph: {
        title: post.seo?.ogTitle || cleanTitle,
        description,
        url: `${baseUrl}/blogs/${slug}`,
        siteName: "Nexus Clinic",
        images: post.image ? [{ url: post.image }] : [],
        type: "article",
        publishedTime: wpPost.date,
        modifiedTime: wpPost.modified,
      },
      twitter: {
        card: "summary_large_image",
        title: post.seo?.twitterTitle || cleanTitle,
        description,
        images: post.image ? [post.image] : [],
      },
      robots: post.seo?.robots || "index, follow",
    };
  } catch {
    return { title: "Blog Not Found" };
  }
}

// ✅ PAGE (FIXED FOR NEXT 15)
export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const wpPost = await getPostCached(slug);
  if (!wpPost) return notFound();

  const post = adaptWordPressPost(wpPost, 0);
  if (!post?.title || !post?.content) return notFound();

  const cleanTitle = post.title.replace(/<[^>]*>/g, "");

  // ✅ SCHEMA
  const faqSchema = post.faqs?.length
    ? generateFAQSchema(post.faqs, `${baseUrl}/blogs/${slug}`)
    : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cleanTitle,
    description: post.seo?.description,
    image: post.image,
    datePublished: wpPost.date,
    dateModified: wpPost.modified,
    author: {
      "@type": "Person",
      name: "Dr. Anum Jawed",
    },
    mainEntityOfPage: `${baseUrl}/blogs/${slug}`,
  };

  return (
    <>
      {/* ✅ STRUCTURED DATA */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main className="min-h-screen bg-cream">
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src={post.image || "/default-image.jpg"}
            alt={cleanTitle}
            fill
            loading="lazy"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 lg:px-12 pb-16">
            <div className="flex justify-between items-center">
              <Link href="/blogs/" className="flex items-center gap-2 text-white/80 hover:text-white">
                <ArrowLeft size={18} />
                Back to all articles
              </Link>

              <span className="px-4 py-2 bg-wine text-white text-xs rounded-full">
                {post.tag}
              </span>
            </div>

            <div className="flex items-center gap-4 text-white/70 mt-4">
              <span className="flex items-center gap-1 text-sm">
                <Calendar size={14} />
                {post.date}
              </span>

              <span className="w-1 h-1 bg-white/40 rounded-full" />

              <span className="flex items-center gap-1 text-sm">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            <h1
              className="text-4xl lg:text-5xl font-bold text-white mt-4"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />

            <div className="mt-8">
              <Link href="/author/anum-jawed">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src="/images/Anum_img.png"
                      alt="Dr. Anum Jawed"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">Dr. Anum Jawed</h4>
                    <p className="text-white text-sm">Pharm-D, MPhil</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <article>
            <SingleBlogPost content={post.content} postSlug={slug} />
          </article>
        </section>
      </main>

      <FloatingWhatsapp isActive hideOnMobile={false} />
    </>
  );
}