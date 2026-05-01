import { motion } from "framer-motion";
import {ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Post } from "../../types/blog";
import { TagBadge } from "./TagBadge";
import { fadeInUp } from "../../lib/animations";

interface BlogCardProps {
  post: Post;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const slug = post.href.split('/').filter(Boolean).pop() || post.id.toString();

  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer border"
      style={{
        background: "var(--color-light)",
        borderColor: "rgba(172,153,144,0.2)",
      }}
    >
      <Link href={`/blogs/${slug}/`}
          className="flex flex-col h-full">
        {/* Rest of your component remains the same */}
        <div className="relative overflow-hidden h-48">
          <img
            src={post.image}
            alt={post.title.replace(/<[^>]*>/g, '')}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          <div className="absolute top-3 left-3">
            <TagBadge tag={post.tag} />
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3" style={{ color: "var(--color-taupe)" }}>
            <span className="flex items-center gap-1 text-xs">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-current opacity-50" />
            <span className="flex items-center gap-1 text-xs">{post.readTime}</span>
          </div>

          <h3
            className="text-base font-bold leading-snug mb-4 flex-1 transition-colors duration-200 group-hover:text-wine line-clamp-3"
            style={{ fontFamily: "Georgia, serif", color: "var(--color-brown)" }}
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          <div
            className="flex items-center gap-1.5 text-xs font-semibold tracking-wide mt-auto pt-3 border-t transition-all duration-200 group-hover:gap-2.5"
            style={{
              color: "var(--color-wine)",
              borderColor: "rgba(172,153,144,0.2)",
            }}
          >
            Read More
            <ChevronRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}