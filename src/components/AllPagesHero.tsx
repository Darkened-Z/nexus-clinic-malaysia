"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, AlertCircle, ArrowRight } from "lucide-react";
import Whatsapp from "./Whatsapp";
import Link from "next/link";

interface TreatmentHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  details?: string;
  note?: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaLink?: string; 
  whatsappMessage: string;
  floatingTitle?: string;
  floatingSubtitle?: string;
  staggerContainer: any;
  fadeInLeft: any;
  fadeInRight: any;
  fadeInUp: any;
}

export default function AllPagesHero({
  badge,
  title,
  highlight,
  description,
  details,
  note,
  image,
  imageAlt,
  ctaText,
  whatsappMessage,
  floatingTitle = "Refreshed Look",
  floatingSubtitle = "Restored brightness • Natural results",
  ctaLink = "/contact-us",
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
}: TreatmentHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop: Original gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15 hidden lg:block" />
      
      {/* Mobile: Image as background with overlay */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Strong overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto max-w-6xl relative z-10 px-4 py-12 md:py-20 lg:py-28"
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div variants={fadeInLeft} className="space-y-5 md:space-y-6">
            {/* Badge - Different styles for mobile vs desktop */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full lg:bg-rose/10 bg-white/10 backdrop-blur-md lg:backdrop-blur-none border border-white/20 lg:border-none"
            >
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-white lg:text-wine" />
              <span className="text-xs md:text-sm font-inter text-white lg:text-wine font-medium">
                {badge}
              </span>
            </motion.div>

            {/* Title - White on mobile, Brown on desktop */}
            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white lg:text-brown leading-tight drop-shadow-lg lg:drop-shadow-none"
            >
              {title}{" "}
              <span className="text-rose-200 italic lg:text-wine block sm:inline">
                {highlight}
              </span>
            </motion.h1>

            {/* Description - White on mobile, Taupe on desktop */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-white lg:text-taupe font-inter leading-relaxed drop-shadow-md lg:drop-shadow-none"
            >
              {description}
            </motion.p>

            {/* Details - White on mobile, Brown on desktop */}
            {details && (
              <motion.p
                variants={fadeInUp}
                className="text-sm md:text-base text-white lg:text-brown font-inter drop-shadow-md lg:drop-shadow-none"
              >
                {details}
              </motion.p>
            )}

            {/* Note - Hidden on mobile, visible on desktop with original styling */}
            {note && (
              <motion.div className="bg-wine/5 p-3 md:p-4 rounded-xl border-l-4 border-wine hidden lg:block">
                <p className="text-wine font-inter font-semibold text-xs md:text-sm flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Important Clinical Note
                </p>
                <p className="text-taupe font-inter text-xs md:text-sm mt-1 leading-relaxed">
                  {note}
                </p>
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInLeft}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center justify-start pt-4"
            >
              {/* Primary Button - Different styling on mobile */}
              <Link
                href={ctaLink || "#"} 
                className="transition-transform duration-200 hover:translate-x-1 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-georgia text-base md:text-lg transition-all shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto lg:bg-wine lg:text-light bg-white text-wine font-semibold lg:font-normal"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>

                <Whatsapp message={whatsappMessage} variant="light" />
            </motion.div>
          </motion.div>

          {/* DESKTOP IMAGE - ORIGINAL DESIGN */}
          <motion.div
            variants={fadeInRight}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-xl shadow-lg">
              <p className="font-inter font-bold text-brown">
                {floatingTitle}
              </p>
              <p className="font-inter text-sm text-taupe">
                {floatingSubtitle}
              </p>
            </div>
          </motion.div>
        </div>

        {/* MOBILE FLOATING CARD - White text with glass effect */}
        <motion.div
          variants={fadeInUp}
          className="lg:hidden mt-6 bg-white/15 backdrop-blur-lg rounded-xl p-4 border border-white/30 shadow-xl"
        >
          <p className="font-inter font-bold text-white text-base">
            {floatingTitle}
          </p>
          <p className="font-inter text-white/90 text-xs mt-1">
            {floatingSubtitle}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}