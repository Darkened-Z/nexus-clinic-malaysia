"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { getReviews } from "@/src/utils/googleReviews";
import Image from "next/image";
interface Review {
  author_name: string;
  text: string;
  rating: number;
  time: number;
  profile_photo_url?: string;
}

const CARD_WIDTH = 380;

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set()); // Changed to Set<string>
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    let mounted = true;

    const loadReviews = async () => {
      try {
        const data = await getReviews();
        const apiReviews = data?.reviews || [];

        if (mounted && apiReviews.length) {
          setReviews([...apiReviews, ...apiReviews, ...apiReviews]);
        }
      } catch (error) {
        console.error("Failed to load reviews", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadReviews();
    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const normalizeInfiniteScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider || reviews.length === 0) return;

    const oneSetWidth = slider.scrollWidth / 3;

    if (slider.scrollLeft >= oneSetWidth * 2) {
      slider.scrollLeft -= oneSetWidth;
    } else if (slider.scrollLeft <= 0) {
      slider.scrollLeft += oneSetWidth;
    }
  }, [reviews.length]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || loading || reviews.length === 0) return;

    const animate = () => {
      if (!isPaused && !dragState.current.isDragging) {
        slider.scrollLeft += 0.6;
        normalizeInfiniteScroll();
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loading, reviews.length, isPaused, normalizeInfiniteScroll]);

  const scroll = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;

    dragState.current = {
      isDragging: true,
      startX: e.pageX - slider.offsetLeft,
      scrollLeft: slider.scrollLeft,
    };

    slider.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider || !dragState.current.isDragging) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.2;
    slider.scrollLeft = dragState.current.scrollLeft - walk;
    normalizeInfiniteScroll();
  };

  const onMouseUp = () => {
    dragState.current.isDragging = false;
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
  };

  const toggleExpand = (uniqueId: string) => { // Changed to accept string
    setExpandedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(uniqueId)) {
        newSet.delete(uniqueId);
      } else {
        newSet.add(uniqueId);
      }
      return newSet;
    });
  };

  const displayReviews = useMemo(() => reviews, [reviews]);

  if (loading) {
    return (
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="w-12 h-12 border-3 border-wine/20 border-t-wine rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (!displayReviews.length) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-light via-cream to-rose/10 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-wine/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-inter font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Client Stories
          </span>
          <h2 className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown mb-4">
            What Our <span className="italic text-wine">Patients Say</span>
          </h2>
          <p className="text-taupe font-inter max-w-2xl mx-auto">
            Real experiences from real people who transformed their lives with us
          </p>
        </div>

        <div className="flex justify-end gap-3 mb-6">
          <button onClick={() => scroll("left")} className="p-2 rounded-full bg-white shadow-md hover:bg-wine transition-all duration-300 group" aria-label="Previous reviews">
            <ChevronLeft className="w-5 h-5 text-brown group-hover:text-light" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded-full bg-white shadow-md hover:bg-wine transition-all duration-300 group" aria-label="Next reviews">
            <ChevronRight className="w-5 h-5 text-brown group-hover:text-light" />
          </button>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", cursor: "grab" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
            {displayReviews.map((review, index) => {
              const uniqueId = `${review.time}-${index}`;
             
              return (
                <div className="flex-none w-[320px] md:w-[360px] lg:w-[380px] animate-scale-in" style={{ animationDelay: `${(index % 6) * 0.04}s` }}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe/10 h-full flex flex-col">
                    
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <Quote className="w-7 h-7 text-wine/30" />
                    </div>

                    {/* Review text */}
                    <p className={`text-brown font-inter leading-relaxed mb-2 flex-grow ${
                      !expandedReviews.has(uniqueId) ? "line-clamp-4" : ""
                    }`}>
                      &quot;{review.text}&quot;
                    </p>

                    {review.text.split(" ").length > 20 && (
                      <button
                        onClick={() => toggleExpand(uniqueId)}
                        className="text-wine font-semibold text-sm mt-1 hover:underline"
                      >
                        {expandedReviews.has(uniqueId) ? "Read Less" : "Read More"}
                      </button>
                    )}

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-taupe/10">
                      {/* <div className="relative">
                        <Image
                          src={review.profile_photo_url || ""}
                          alt={review.author_name}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          width={44}
                          height={44}
                          className="h-full w-full rounded-full object-cover border border-taupe/10"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        <div
                          className="hidden w-11 h-11 rounded-full bg-gradient-to-br from-wine to-rose items-center justify-center absolute inset-0"
                        >
                          <span className="text-light font-semibold text-sm">
                            {review.author_name
                              ?.split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")}
                          </span>
                        </div>
                      </div> */}

                      <div className="min-w-0">
                        <p className="font-georgia font-semibold text-brown truncate">
                          {review.author_name}
                        </p>
                        <p className="text-taupe text-xs font-inter">
                          Google Verified Review
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}