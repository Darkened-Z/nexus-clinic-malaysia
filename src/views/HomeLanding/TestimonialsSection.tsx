import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/50 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
  >
    {children}
  </div>
);

const TestimonialsSection = ({ t }: { t: (key: string) => string }) => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      quote: t("testimonials.items.0.quote"),
      author: t("testimonials.items.0.author"),
      role: t("testimonials.items.0.role"),
    },
    {
      quote: t("testimonials.items.1.quote"),
      author: t("testimonials.items.1.author"),
      role: t("testimonials.items.1.role"),
    },
    {
      quote: t("testimonials.items.2.quote"),
      author: t("testimonials.items.2.author"),
      role: t("testimonials.items.2.role"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="animate-fade-in-left">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
              {t("testimonials.subtitle")}
            </span>
            <h2 className="text-3xl lg:text-5xl mb-12 font-georgia text-brown">
              {t("testimonials.title")}{" "}
              <span className="text-wine">
                {t("testimonials.titleHighlight")}
              </span>{" "}
              {t("testimonials.titleEnd")}
            </h2>

            {/* Testimonial Content - CSS-based fade transition */}
            <div className="relative min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 absolute inset-0 ${
                    current === index
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-8 invisible"
                  }`}
                >
                  <Quote size={48} className="text-wine mb-6 opacity-30" />
                  <p className="text-xl lg:text-2xl mb-8 leading-relaxed font-georgia text-brown">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-brown">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-taupe">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-12 h-1 rounded-full transition-all duration-300 hover:scale-110 ${
                    current === index ? "bg-wine" : "bg-taupe/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative animate-fade-in-right">
            <div className="rounded-3xl lg:rounded-[40px] overflow-hidden">
              <Image
                src="/images/treatment/happy-patient.webp"
                alt="Happy Patient"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                priority={false}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Rating Card */}
            <GlassCard className="absolute -bottom-6 left-6 lg:left-12 p-5 animate-fade-in-up">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-wine fill-wine" />
                  ))}
                </div>
                <span className="font-semibold text-brown">5.0</span>
                <span className="text-sm text-taupe">
                  {t("testimonials.reviews")}
                </span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;