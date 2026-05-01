"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Clock,
  Layers,
} from "lucide-react";
import Image from "next/image";
import {
  galleryItems,
  GALLERY_CATEGORIES,
  type GalleryItem,
  type GalleryCategory,
} from "@/src/lib/data";
function BeforeAfterSlider({
  item,
  priority = false,
}: {
  item: GalleryItem;
  priority?: boolean;
}) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden cursor-col-resize select-none"
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={(e) => dragging && update(e.clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
      role="img"
      aria-label={`Before and after comparison: ${item.title}`}
    >
      {/* AFTER */}
      <figure className="absolute inset-0 m-0">
        <Image
          src={item.afterSrc}
          alt={item.altAfter}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <figcaption className="sr-only">{item.altAfter}</figcaption>
      </figure>

      {/* BEFORE — clip */}
      <figure
        className="absolute inset-0 m-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={item.beforeSrc}
          alt={item.altBefore}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <figcaption className="sr-only">{item.altBefore}</figcaption>
      </figure>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-widest uppercase bg-brown/90 text-cream px-2.5 py-1 rounded-full pointer-events-none">
        Before
      </span>
      <span className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-widest uppercase bg-wine/90 text-cream px-2.5 py-1 rounded-full pointer-events-none">
        After
      </span>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-lg pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center gap-0.5">
          <ChevronLeft className="w-3 h-3 text-wine" />
          <ChevronRight className="w-3 h-3 text-wine" />
        </div>
      </div>
    </div>
  );
}

function GalleryCard({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (item: GalleryItem) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: (index % 6) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group bg-light rounded-2xl overflow-hidden border border-taupe/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
    >
      {/* Image area */}
      <div className="relative w-full aspect-[4/3]">
        <BeforeAfterSlider item={item} priority={index < 4} />

        {/* Tag badge */}
        {item.tag && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase bg-wine text-cream px-2.5 py-1 rounded-full z-10">
            {item.tag}
          </span>
        )}

        {/* Expand button */}
        <button
          onClick={() => onOpen(item)}
          aria-label={`View full details for ${item.title}`}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-glass backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-white"
        >
          <ZoomIn className="w-4 h-4 text-brown" />
        </button>
      </div>

      {/* Text */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[10px] uppercase tracking-[0.2em] text-wine font-semibold mb-1">
          {item.category}
        </span>
        <h3 className="font-georgia text-brown text-base leading-snug mb-2">
          {item.title}
        </h3>
        <p className="text-taupe text-xs leading-relaxed mb-4 flex-1">
          {item.treatment}
        </p>
        <div className="flex items-center gap-4 border-t border-taupe/15 pt-3">
          <div className="flex items-center gap-1.5 text-taupe text-xs">
            <Layers className="w-3.5 h-3.5 text-wine" />
            <span>
              {item.sessionsN} session{item.sessions > 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-taupe text-xs">
            <Clock className="w-3.5 h-3.5 text-wine" />
            <span>
              {item.durationWeeks}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function LightboxModal({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-brown/80 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-light rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Slider panel */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto shrink-0">
            <BeforeAfterSlider item={item} priority />
          </div>

          {/* Info panel */}
          <div className="p-8 flex flex-col overflow-y-auto">
            <span className="text-[10px] uppercase tracking-[0.2em] text-wine font-semibold mb-2">
              {item.category}
            </span>
            <h2 className="font-georgia text-brown text-2xl leading-tight mb-1">
              {item.title}
            </h2>
            <p className="text-taupe text-sm mb-6">{item.treatment}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="font-georgia text-wine text-2xl">
                  {item.sessions} {item.sessions > 1 ? " Sessions" : " Session"}
                </p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="font-georgia text-wine text-2xl">
                  {item.durationWeeks}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-brown text-xs font-semibold uppercase tracking-wider mb-2">
                Before
              </h4>
              <p className="text-taupe text-sm leading-relaxed">
                {item.altBefore}
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-brown text-xs font-semibold uppercase tracking-wider mb-2">
                After
              </h4>
              <p className="text-taupe text-sm leading-relaxed">
                {item.altAfter}
              </p>
            </div>

            <a
              href="/consultation/"
              className="mt-auto block text-center bg-wine hover:bg-brown transition-colors text-cream font-semibold text-sm py-3 rounded-full"
              onClick={onClose}
            >
              Book a Consultation
            </a>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close gallery detail"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center hover:bg-wine hover:text-cream transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Prev / Next */}
          <button
            onClick={onPrev}
            aria-label="Previous result"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center hover:bg-wine hover:text-cream transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            aria-label="Next result"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center hover:bg-wine hover:text-cream transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i: any) => i.category === activeCategory);

  const openLightbox = (item: GalleryItem) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);
  const goPrev = () => {
    if (!lightboxItem) return;
    const idx = filtered.findIndex((i: any) => i.id === lightboxItem.id);
    setLightboxItem(filtered[(idx - 1 + filtered.length) % filtered.length]);
  };
  const goNext = () => {
    if (!lightboxItem) return;
    const idx = filtered.findIndex((i: any) => i.id === lightboxItem.id);
    setLightboxItem(filtered[(idx + 1) % filtered.length]);
  };

  return (
    <>
      <main className="bg-cream min-h-screen" id="gallery">
        {/* ── PAGE HERO ── */}
        <section
          className="relative bg-light overflow-hidden py-28 md:py-36"
          aria-labelledby="gallery-hero-heading"
        >
          {/* Decorative rings */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-wine/20" />
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-wine/10" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-taupe/20" />

          <div
            ref={headerRef}
            className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-wine uppercase tracking-[0.3em] text-xs font-semibold mb-4"
            >
              Before &amp; After Gallery
            </motion.p>
            <motion.h1
              id="gallery-hero-heading"
              initial={{ opacity: 0, y: 28 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-georgia text-brown text-5xl md:text-6xl leading-tight mb-6"
            >
              Real Results,
              <br />
              <em className="text-wine italic">Real People</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-taupe max-w-lg mx-auto text-base leading-relaxed"
            >
              Every transformation you see was achieved by our certified
              physicians using evidence-based treatments. Drag each slider to
              reveal the journey.
            </motion.p>
          </div>
        </section>

        {/* ── CATEGORY FILTER ── */}
        <nav
          aria-label="Filter gallery by treatment category"
          className="sticky top-0 z-30 bg-cream/95 backdrop-blur-sm border-b border-taupe/15 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {GALLERY_CATEGORIES.map((cat: any) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-wine text-cream shadow-md"
                      : "bg-light text-taupe border border-taupe/20 hover:border-wine hover:text-wine"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1.5 opacity-60">
                      (
                      {
                        galleryItems.filter((i: any) => i.category === cat)
                          .length
                      }
                      )
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ── GRID ── */}
        <section
          className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
          aria-label={`Gallery results for ${activeCategory}`}
        >
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-taupe text-sm">
              Showing{" "}
              <span className="text-brown font-semibold">
                {filtered.length}
              </span>{" "}
              results
              {activeCategory !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <span className="text-wine font-semibold">
                    {activeCategory}
                  </span>
                </>
              )}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7"
            >
              {filtered.map((item: any, i: number) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={i}
                  onOpen={openLightbox}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-taupe text-lg">
                No results found for this category.
              </p>
            </div>
          )}
        </section>

        {/* Disclaimer */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <p className="text-center text-taupe/60 text-xs">
            * Individual results may vary. All treatments are performed by
            certified medical professionals at Nexus Clinic Malaysia. Images are
            real patient cases with consent.
          </p>
        </div>
      </main>

      {/* ── LIGHTBOX ── */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}