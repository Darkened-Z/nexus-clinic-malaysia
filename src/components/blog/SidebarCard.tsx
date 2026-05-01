import { motion } from "framer-motion";
import type { Post } from "../../types/blog";
import { TagBadge } from "./TagBadge";
import { fadeInRight } from "../../lib/animations";
import Link from "next/link";

interface SidebarCardProps {
  post: Post;
}

export function SidebarCard({ post }: SidebarCardProps) {
  const slug = post.href.split('/').filter(Boolean).pop() || post.id.toString();
  return (
    <motion.article
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      className="group flex gap-4 p-4 rounded-2xl border cursor-pointer"
      style={{
        background: "var(--color-light)",
        borderColor: "rgba(172,153,144,0.2)",
      }}
    >
      <Link href={`/blogs/${slug}/`} className="flex gap-4 w-full"> 
        <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <TagBadge tag={post.tag} />
          <h3
            className="text-sm font-bold leading-snug line-clamp-2 transition-colors group-hover:text-wine"
            style={{ fontFamily: "Georgia, serif", color: "var(--color-brown)" }}
          >
            <span dangerouslySetInnerHTML={{ __html: post.title }} />
          </h3>
          <span className="text-xs" style={{ color: "var(--color-taupe)" }}>
            {post.date}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}