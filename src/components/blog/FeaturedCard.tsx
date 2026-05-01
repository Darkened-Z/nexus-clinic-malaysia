import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Post } from "../../types/blog";
import { TagBadge } from "./TagBadge";
import { scaleIn } from "../../lib/animations";

interface FeaturedCardProps {
  post: Post;
}

export function FeaturedCard({ post }: FeaturedCardProps) {
  const slug = post.href.split('/').filter(Boolean).pop() || post.id.toString();
  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
      style={{ background: "var(--color-cream)" }}
    >
      <Link href={`/blogs/${slug}/`} className="block">
        <div className="relative overflow-hidden h-72 lg:h-80">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <TagBadge tag={post.tag} />
          </div>

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest text-taupe border border-taupe/40 bg-white/10 backdrop-blur-sm uppercase">
              Featured
            </span>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4" style={{ color: "var(--color-taupe)" }}>
            <span className="flex items-center gap-1.5 text-sm">
              <Calendar size={13} />
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-current opacity-40" />
            <span className="flex items-center gap-1.5 text-sm">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          <h2
            className="text-xl lg:text-2xl font-bold leading-snug mb-4 transition-colors duration-200 group-hover:text-wine"
            style={{ fontFamily: "Georgia, serif", color: "var(--color-brown)" }}
          >
            <span dangerouslySetInnerHTML={{ __html: post.title }} />
          </h2>

          <div
            className="flex items-center gap-2 font-semibold text-sm tracking-wide transition-all duration-200 group-hover:gap-3"
            style={{ color: "var(--color-wine)" }}
          >
            Read Article
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}