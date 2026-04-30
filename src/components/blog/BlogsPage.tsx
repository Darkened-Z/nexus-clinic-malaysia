'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import { HeroBanner } from "../blog/HeroBanner";
import { CategoryFilter } from "../blog/CategoryFilter";
import { FeaturedCard } from "../blog/FeaturedCard";
import { BlogCard } from "../blog/BlogCard";
import { SidebarCard } from "../blog/SidebarCard";
import { PromoCard } from "../blog/PromoCard";
import { NewsletterStrip } from "../blog/NewsletterStrip";
import { SectionHeader } from "../blog/SectionHeader";
import { LoadMoreButton } from "../blog/LoadMoreButton";
import { EmptyState } from "../blog/EmptyState";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-24">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wine"></div>
    </div>
  );
}
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <AlertCircle size={48} className="mb-4 text-red-500" />
      <p className="text-lg font-semibold text-brown mb-2">Oops! Something went wrong</p>
      <p className="text-sm text-taupe mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-wine text-white hover:bg-opacity-90 transition-all"
      >
        <RefreshCw size={18} />
        Try Again
      </button>
    </div>
  );
}
// Data & Constants
import { categories } from '../../constants/blog';
import type { CategoryValue } from "../../types/blog";
import type { WordPressPost } from "../../types/wordpress";
import { useBlogData } from "../../hooks/useBlogData";

interface BlogsPageProps {
  initialPosts?: WordPressPost[];
}

export default function BlogsPage({ initialPosts }: BlogsPageProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchFocused, setSearchFocused] = useState<boolean>(false);

  const {
    posts,
    featuredPost,
    loading,
    error,
    loadMore,
    hasMore,
    refetch,
  } = useBlogData(activeCategory, searchQuery, 1, 9, initialPosts);

  // Filter out featured post from the list if it exists
  const filteredPosts = posts.filter(p => p.id !== featuredPost?.id);

  const activeSectionNumber = activeCategory === "all" && !searchQuery ? "02" : "01";

  const sectionTitle = searchQuery
    ? `Results for "${searchQuery}"`
    : activeCategory === "all"
    ? "Latest Articles"
    : (categories.find((c) => c.value === activeCategory)?.label ?? "Articles");

  if (error) {
    return (
      <>
        <ErrorMessage message={error} onRetry={refetch} />
      </>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <main
        className="min-h-screen"
      >
        <HeroBanner
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchFocused={searchFocused}
          setSearchFocused={setSearchFocused}
        />

        {/* <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        /> */}

        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          {loading && posts.length === 0 && <LoadingSpinner />}

          {/* Featured Section */}
          {!loading && activeCategory === "all" && !searchQuery && featuredPost && (
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-20"
            >
              <SectionHeader number="01" title="Featured Story" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                  <FeaturedCard post={featuredPost} />
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4">
                  {posts.slice(1, 3).map((p) => (
                    <SidebarCard key={p.id} post={p} />
                  ))}
                  <PromoCard />
                </div>
              </div>
            </motion.section>
          )}

          {/* All Articles Grid */}
          <section>
            <SectionHeader 
              number={activeSectionNumber} 
              title={sectionTitle} 
              count={filteredPosts.length} 
            />

            <AnimatePresence mode="wait">
              {!loading && filteredPosts.length > 0 ? (
                <motion.div
                  key={activeCategory + searchQuery}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 10 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredPosts.map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} />
                  ))}
                </motion.div>
              ) : !loading && (
                <EmptyState />
              )}
            </AnimatePresence>
          </section>

          {/* Load More */}
          {!loading && filteredPosts.length > 0 && hasMore && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center mt-16"
            >
              <LoadMoreButton onClick={loadMore} />
            </motion.div>
          )}
        </section>

        <NewsletterStrip />
      </main>
    </>
  );
}