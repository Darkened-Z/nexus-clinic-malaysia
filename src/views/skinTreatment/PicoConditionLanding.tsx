"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Syringe,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  Zap,
  ChevronRight,
  XCircle,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Image from "next/image";
import Link from "next/link";
import {
  picoLaserConditions,
  PicoConditionContent,
} from "@/src/config/picoLaserConditions";

interface PicoConditionLandingProps {
  locale: string;
  condition: string;
}

export default function PicoConditionLanding({
  condition,
}: PicoConditionLandingProps) {
  const content: PicoConditionContent | undefined =
    picoLaserConditions[condition];

  if (!content) return null;

  const quickFactIcons = [Syringe, Clock, Heart, Zap];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge={content.heroBadge}
        title={content.heroTitle}
        highlight={content.heroHighlight}
        description={content.heroDescription}
        details={content.heroDetails}
        note={content.heroNote}
        image={content.heroImage}
        imageAlt={content.heroImageAlt}
        ctaText={content.heroCtaText}
        ctaLink="/contact-us"
        whatsappMessage={content.heroWhatsapp}
        floatingTitle={content.heroFloatingTitle}
        floatingSubtitle={content.heroFloatingSubtitle}
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Overview Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              {content.overviewHeading}
            </h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">
              {content.overviewSubheading}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {content.quickFacts.map((fact, idx) => {
              const Icon = quickFactIcons[idx % quickFactIcons.length];
              return (
                <div
                  key={idx}
                  className="bg-light p-5 rounded-xl border border-taupe/10 shadow-sm"
                >
                  <Icon className="w-8 h-8 text-wine mb-3" />
                  <p className="font-inter text-sm text-taupe">{fact.label}</p>
                  <p className="font-georgia text-md text-brown font-semibold">
                    {fact.value}
                  </p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-wine/5 rounded-2xl p-6 border border-wine/10"
          >
            <p className="font-inter text-brown text-center max-w-3xl mx-auto">
              {content.overviewSummary}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
            >
              Speak to a Doctor About Your Skin Concern
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Condition Explainer */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              {content.conditionHeading}
            </h2>
          </motion.div>
          <div className="space-y-6">
            {content.conditionParagraphs.map((para, idx) => (
              <motion.p
                key={idx}
                variants={fadeInUp}
                className="text-taupe font-inter text-base md:text-lg leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mechanism Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-3">
              {content.mechanismHeading}
            </h2>
            <p className="text-taupe font-inter">
              {content.mechanismSubheading}
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {content.mechanismParagraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  variants={fadeInUp}
                  className="text-taupe font-inter text-base md:text-lg leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
            <motion.div
              variants={fadeInRight}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-taupe/10"
            >
              <Image
                src={content.secondImage}
                alt={content.secondImageAlt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            variants={fadeInUp}
            className="mt-8 p-5 bg-wine/5 rounded-xl border border-wine/10 max-w-4xl mx-auto"
          >
            <p className="text-brown font-inter text-sm text-center">
              {content.mechanismCallout}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Session Expectations */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              {content.expectationsHeading}
            </h2>
          </motion.div>
          <div className="space-y-6">
            {content.expectations.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="font-georgia text-xl text-wine mb-3">
                  {exp.heading}
                </h3>
                <p className="text-taupe font-inter">{exp.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-7xl"
        >
          <TableForPages
            columns={[
              { key: "treatment", header: "Treatment / Option" },
              { key: "area", header: "Area" },
              { key: "unit", header: "Unit / Duration" },
              { key: "normalPrice", header: "Normal Price RM" },
              { key: "sellingPrice", header: "Selling Price RM" },
              { key: "promoPrice", header: "Promo Price RM" },
              { key: "packageNotes", header: "Package / Notes" },
            ]}
            data={content.pricingRows}
            title={content.pricingHeading}
            subtitle={content.pricingSubheading}
            variant="detailed"
            fadeInUp={fadeInUp}
          />
        </motion.div>
      </section>

      {/* Side Effects & Aftercare */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              {content.aftercareHeading}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Expected Side Effects
              </h3>
              <ul className="space-y-2">
                {content.expectedSideEffects.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-taupe font-inter text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="bg-cream p-6 rounded-xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Aftercare Instructions
              </h3>
              <ul className="space-y-2">
                {content.aftercareInstructions.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-taupe font-inter text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Candidacy */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              {content.candidacyHeading}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-6 rounded-xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-wine" />
                You are a good candidate if:
              </h3>
              <ul className="space-y-3">
                {content.goodCandidate.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-taupe font-inter text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="bg-light p-6 rounded-xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-wine" />
                You may need to pause or adjust if:
              </h3>
              <ul className="space-y-3">
                {content.pauseIf.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-taupe font-inter text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <FAQWithSchema data={content.faqs} />

      {/* CTA */}
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
              {content.ctaHeading}
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              {content.ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {content.ctaPrimaryText}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp
                message={content.heroWhatsapp}
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan
              Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              {content.relatedLinks.map((link, idx) => (
                <span key={idx} className="flex items-center gap-3">
                  {idx > 0 && <span>•</span>}
                  <a
                    href={link.href}
                    className="hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
