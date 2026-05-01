import type { WordPressPost, WordPressCategory, WordPressTag } from '../types/wordpress';

const API_BASE_URL = 'https://blog.nexus-clinic.com/wp-json/wp/v2';

class WordPressService {
  private async fetchWithEmbedded<T>(endpoint: string): Promise<{ data: T; total: number }> {
    // Add yoast_head=1 to include Yoast SEO data in the response
    const separator = endpoint.includes('?') ? '&' : '?';
    const url = `${API_BASE_URL}${endpoint}${separator}_embed=true&yoast_head=1`;
    // console.log('Fetching from WordPress:', url);
    
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.statusText}`);
    }
    
    const total = parseInt(response.headers.get('X-WP-Total') || '0');
    const data = await response.json();
    
    return { data, total };
  }

  async getPosts(params?: {
    page?: number;
    perPage?: number;
    categories?: number[];
    search?: string;
  }): Promise<WordPressPost[]> {
    const { page = 1, perPage = 10, categories, search } = params || {};
    
    let endpoint = `/posts?page=${page}&per_page=${perPage}`;
    
    if (categories?.length) {
      endpoint += `&categories=${categories.join(',')}`;
    }
    
    if (search && search.trim() !== '') {
      endpoint += `&search=${encodeURIComponent(search.trim())}`;
    }
    
    const { data } = await this.fetchWithEmbedded<WordPressPost[]>(endpoint);
    if (!Array.isArray(data) || data.length === 0) {
      console.warn(`[wordpress] /posts returned 0 items. endpoint=${endpoint}`);
    }
    return data;
  }

  async getPost(slug: string): Promise<WordPressPost> {
    const { data } = await this.fetchWithEmbedded<WordPressPost[]>(`/posts?slug=${slug}`);
    return data[0];
  }

  async getPostById(id: number): Promise<WordPressPost> {
    const { data } = await this.fetchWithEmbedded<WordPressPost[]>(`/posts?include=${id}`);
    return data[0];
  }

  async getCategories(): Promise<WordPressCategory[]> {
    const response = await fetch(`${API_BASE_URL}/categories?per_page=100`);
    return response.json();
  }

  async getTags(): Promise<WordPressTag[]> {
    const response = await fetch(`${API_BASE_URL}/tags?per_page=100`);
    return response.json();
  }

  async getPostsByCategory(categorySlug: string, params?: { page?: number; perPage?: number; search?: string }): Promise<WordPressPost[]> {
    const categories = await this.getCategories();
    const category = categories.find(c => c.slug === categorySlug);
    
    if (!category) {
      return [];
    }
    
    return this.getPosts({ ...params, categories: [category.id] });
  }
  //  for SEO sitemap generation
  async getAllPosts(): Promise<Pick<WordPressPost, "slug" | "modified" | "date">[]> {
    const perPage = 100;

    const firstResponse = await fetch(
      `${API_BASE_URL}/posts?page=1&per_page=${perPage}&_fields=slug,modified,date`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!firstResponse.ok) return [];

    const totalPages = Number(firstResponse.headers.get("X-WP-TotalPages") || 1);
    const allPosts = await firstResponse.json();

    for (let page = 2; page <= totalPages; page++) {
      const response = await fetch(
        `${API_BASE_URL}/posts?page=${page}&per_page=${perPage}&_fields=slug,modified,date`,
        {
          next: { revalidate: 3600 },
        }
      );

      if (!response.ok) continue;

      const data = await response.json();
      allPosts.push(...data);
    }

    return allPosts;
  }

}

export const wordpressService = new WordPressService();