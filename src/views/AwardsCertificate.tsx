"use client";
import { motion } from "framer-motion";
import {ArrowRight} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/src/lib/animations";
import AllPagesHero from "@/src/components/AllPagesHero";
import Whatsapp from "@/src/components/Whatsapp";
import Link from "next/link";
import Image from "next/image";

interface AwardsCertificatesProps {
  locale: string;
}

export default function AwardsCertificates({ locale }: AwardsCertificatesProps) {
  const awards = [
    {
      title: "Nexus Clinic Award for Body Contouring Excellence | Aesthetic Clinic Malaysia",
      year: "2022",
      category: "Body Contouring Excellence",
      description:
        "Nexus Clinic proudly receives the Allergan Aesthetics Body Contouring Gold Award 2022, recognising its excellence in advanced body contouring treatments in Malaysia. As a leading aesthetic clinic in Kuala Lumpur, Nexus Clinic is known for delivering safe and effective non-surgical body contouring, fat reduction treatments, and personalised aesthetic care. With a strong focus on innovation, patient safety, and natural-looking results, the clinic continues to set high standards in cosmetic treatments in Malaysia, helping clients achieve refined body shape and long-term confidence.",
      image: "/images/awards/N1.webp",
    },
    {
      title: " Nexus Clinic CoolSculpting Club 200 Award | Fat Freezing Treatment Malaysia",
      year: "2023",
      category: "Fat Freezing Excellence",
      description:
        "Nexus Clinic is recognised as a CoolSculpting Club 200 member, marking its expertise in advanced fat freezing treatments in Malaysia. As a trusted aesthetic clinic in Kuala Lumpur, Nexus Clinic has successfully delivered over 200 CoolSculpting treatments, helping clients achieve safe, non-invasive body contouring and fat reduction results. Known for its personalised approach and medically guided care, the clinic continues to lead in non-surgical body sculpting and modern aesthetic treatments in Malaysia, ensuring effective results with minimal downtime.",
      image: "/images/awards/N2.webp",
    },
    {
      title: " Nexus Clinic Platinum Body Contouring Award 2024 | Top Aesthetic Clinic Malaysia",
      year: "2024",
      category: "Body Contouring Excellence",
      description:
        "Nexus Clinic receives the prestigious Allergan Aesthetics Platinum Award 2024 for excellence in body contouring treatments in Malaysia, reinforcing its position as a leading aesthetic clinic in Kuala Lumpur. Known for advanced non-surgical body contouring, fat reduction treatments, and clinically proven technologies, Nexus Clinic delivers safe, personalised solutions for body sculpting. With a strong track record in CoolSculpting, fat freezing, and modern aesthetic treatments in Malaysia, the clinic continues to set industry benchmarks for quality, innovation, and natural-looking results.",
      image: "/images/awards/N3.webp",
    },
    {
      title: "Nexus Clinic Biolyph Partner Clinic Award | Advanced Aesthetic Treatments Malaysia",
      year: "2024",
      category: "Advanced Aesthetic Partnership",
      description:
        "Nexus Clinic is recognised as an official Biolyph Partner Clinic, highlighting its commitment to advanced aesthetic treatments in Malaysia. As a leading aesthetic clinic in Kuala Lumpur, Nexus Clinic offers innovative, medically guided solutions including skin rejuvenation, anti-aging treatments, and personalised aesthetic care. This recognition reflects the clinic's dedication to quality, safety, and consistent results, strengthening its reputation for delivering trusted cosmetic treatments in Malaysia with a patient-focused approach.",
      image: "/images/awards/N4.webp",
    },
    {
      title: "Nexus Clinic Star Injector Award 2024 | Expert Aesthetic Injectables Malaysia",
      year: "2024",
      category: "Expert Aesthetic Injectables",
      description:
        "Nexus Clinic earns the prestigious Star Injector Award 2024, recognising its expertise in advanced aesthetic injectables in Malaysia. As a trusted aesthetic clinic in Kuala Lumpur, Nexus Clinic specialises in precision-based botox treatments, dermal fillers, and non-surgical facial contouring for natural-looking results. With a strong focus on safety, technique, and personalised care, the clinic continues to lead in anti-aging treatments in Malaysia, delivering refined outcomes through expert injector skills and modern aesthetic solutions.",
      image: "/images/awards/N5.webp",
    },
    {
      title: "Nexus Clinic Sculptra Star Injector Award 2025 | Leading Aesthetic Injectables Malaysia",
      year: "2025",
      category: "Leading Aesthetic Injectables",
      description:
        "Nexus Clinic is honoured with the Sculptra Star Injector Award 2025, recognising its excellence in advanced aesthetic injectables in Malaysia. As a leading aesthetic clinic in Kuala Lumpur, Nexus Clinic specialises in Sculptra treatments, collagen stimulation therapy, and precision-based dermal fillers for natural, long-lasting results. With expert injectors and a strong focus on safety and personalised care, the clinic continues to set benchmarks in anti-aging treatments in Malaysia, offering innovative, non-surgical solutions for facial rejuvenation and skin enhancement.",
      image: "/images/awards/N6.webp",
    },
    {
      title: "Nexus Clinic Body Contouring Appreciation Award 2023 | Aesthetic Clinic Malaysia",
      year: "2023",
      category: "Body Contouring Excellence",
      description:
        "Nexus Clinic receives the Allergan Aesthetics Body Contouring Appreciation Award 2023, recognising its excellence in body contouring treatments in Malaysia. As a trusted aesthetic clinic in Kuala Lumpur, Nexus Clinic is known for delivering effective non-surgical body contouring, fat reduction treatments, and personalised aesthetic solutions. With a strong focus on innovation, patient safety, and natural results, the clinic continues to lead in cosmetic treatments in Malaysia, helping clients achieve refined body shape and long-term confidence.",
      image: "/images/awards/N7.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge="Recognition • Excellence • Innovation"
        title="Awards & Certifications"
        highlight="Nexus Clinic Kuala Lumpur"
        description="Quality assurance through industry recognition. Every award received by Nexus Clinic reflects our commitment to safe, effective, and innovative aesthetic treatments in Malaysia."
        details="From Allergan Aesthetics' highest honours to CoolSculpting excellence and advanced injectable certifications, our growing collection of awards represents decades of clinical expertise and patient-centred care at our KLCC clinic."
        note="All awards are presented by independent industry bodies including Allergan Aesthetics, CoolSculpting, and Biolyph, recognising clinical excellence and patient safety standards."
        image="/images/awards/award.png"
        imageAlt="Nexus Clinic Kuala Lumpur - Awards and Certifications"
        ctaText="Book a Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in learning more about Nexus Clinic's award-winning treatments. I'd like to book a consultation."
        floatingTitle="🏆 Industry Recognised"
        floatingSubtitle="Excellence Since 2001"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Awards Grid Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              Our Awards & Recognitions
            </h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">
              Each award represents our commitment to excellence, patient safety,
              and outstanding clinical outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-light rounded-2xl overflow-hidden border border-taupe/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-110 bg-wine/5 overflow-hidden">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-contain" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-wine/10 rounded-full text-xs font-inter text-wine font-semibold">
                      {award.year}
                    </span>
                    <span className="text-xs font-inter text-taupe/70">
                      {award.category}
                    </span>
                  </div>
                  <h3 className="font-georgia text-lg text-brown font-bold leading-tight mb-3">
                    {award.title}
                  </h3>
                  <p className="text-taupe font-inter text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-3xl md:text-5xl text-light">
              Experience Award-Winning Care at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Our awards reflect our dedication to excellence. Let us show you why
              Nexus Clinic is recognised as a leader in aesthetic medicine in
              Malaysia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp
                message="Hi, I'm interested in learning more about Nexus Clinic's award-winning treatments. I'd like to book a consultation."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since
              2001
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}