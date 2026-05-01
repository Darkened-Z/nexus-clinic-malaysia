"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Droplets,
  Sparkles,
  Shield,
  Heart,
  CheckCircle2,
  AlertCircle,
  Syringe,
  Award,
  FileText,
  Users,
  XCircle,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";

// Import icon mapping for dynamic icons
const iconMap: Record<string, any> = {
  Shield,
  Award,
  Syringe,
  Heart,
  Droplets,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Clock,
  FileText,
  Users,
};

const LipFillerLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "face/lipFiller");

  // Helper to get icon component
  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Shield;
  };

  // Get data from translation with fallbacks
  const heroData = t("hero", { returnObjects: true }) as any;
  const treatmentOverview = t("treatmentOverview", { returnObjects: true }) as any;
  const whatIsLipFiller = t("whatIsLipFiller", { returnObjects: true }) as any;
  const lipEnhancementStyles = t("lipEnhancementStyles", { returnObjects: true }) as any;
  const lipFillerVsLipFlip = t("lipFillerVsLipFlip", { returnObjects: true }) as any;
  const whoIsItFor = t("whoIsItFor", { returnObjects: true }) as any;
  const commonMistakes = t("commonMistakes", { returnObjects: true }) as any;
  const notSuitableFor = t("notSuitableFor", { returnObjects: true }) as any;
  const whyNexus = t("whyNexus", { returnObjects: true }) as any;
  const procedure = t("procedure", { returnObjects: true }) as any;
  const pricing = t("pricing", { returnObjects: true }) as any;
  const sideEffectsAndAftercare = t("sideEffectsAndAftercare", { returnObjects: true }) as any;
  const faqData = t("faq", { returnObjects: true }) as any;
  const finalCta = t("finalCta", { returnObjects: true }) as any;

  // Format FAQs for FAQ component
  const faqs = faqData?.items?.map((item: any) => ({
    q: item.question,
    a: item.answer,
  })) || [];

  return (
    <main className="w-full overflow-hidden bg-light">
      {/* Hero Section */}
      <AllPagesHero
        badge={heroData?.badge || "Lip Enhancement"}
        title={heroData?.title || "Lip Filler in Malaysia for "}
        highlight={heroData?.title2 || "Natural, Beautiful Lips"}
        description={heroData?.description || "Expert lip enhancement tailored to your facial proportions."}
        details="Our award-winning injectors specialize in creating natural-looking lip results that enhance your natural beauty without looking overdone."
        note="Lip filler requires an artistic eye and precise technique. Always choose an experienced injector who understands facial harmony."
        image="/images/face/Lip Filler.webp"
        imageAlt={heroData?.imageAlt || "Lip filler treatment at Nexus Clinic Kuala Lumpur"}
        ctaText="Book a Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi! can i get more information about lip filler treatment?"
        floatingTitle={heroData?.floatingCard?.text || "✨ Natural Results"}
        floatingSubtitle={heroData?.floatingCard?.location || "Expert lip enhancement"}
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />
    <section className="relative px-4 py-12 overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {heroData?.trustItems?.map((item: any, index: number) => {
          const IconComponent = getIcon(item.icon);
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-cream hover:border-rose/20"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 bg-rose/10 rounded-full flex items-center justify-center group-hover:bg-rose group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-rose group-hover:text-white transition-colors" />
                </div>
                <p className="text-brown font-medium text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
    {/* Treatment Overview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="font-georgia text-4xl text-brown mb-6">
                {treatmentOverview?.title}
              </h2>
              <p className="text-taupe text-lg">
                {treatmentOverview?.description}
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              {treatmentOverview?.stats && (
                <>
                  <motion.div
                    variants={scaleIn}
                    className="bg-cream p-6 rounded-xl text-center"
                  >
                    <div className="text-4xl font-bold text-wine mb-2">
                      {treatmentOverview.stats.procedures}
                    </div>
                    <p className="text-brown">{treatmentOverview.stats.proceduresLabel}</p>
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    className="bg-cream p-6 rounded-xl text-center"
                  >
                    <div className="text-4xl font-bold text-wine mb-2">
                      {treatmentOverview.stats.experience}
                    </div>
                    <p className="text-brown">{treatmentOverview.stats.experienceLabel}</p>
                  </motion.div>
                </>
              )}
            </motion.div>

            {/* Overview Table - Converted to TableForPages */}
            <TableForPages
              columns={[
                { key: "label", header: "Treatment Information", className: "font-semibold" },
                { key: "value", header: "Details" },
              ]}
              data={Object.entries(treatmentOverview?.overviewTable || {}).map(([key, value]: [string, any]) => ({
                label: value.label,
                value: value.value,
              }))}
              variant="compact"
              fadeInUp={fadeInUp}
              className="max-w-4xl mx-auto"
            />
            {treatmentOverview?.cta && (
              <motion.div variants={fadeInUp} className="text-center">
                <Link href="/contact-us/" className="inline-block bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-wine/90 transition-colors">
                  {treatmentOverview.cta.text}
                </Link>
                <p className="text-sm text-taupe mt-2">{treatmentOverview.cta.subtext}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* What is Lip Filler Section */}
      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                {whatIsLipFiller?.title}
              </h2>
              <p className="text-taupe">
                {whatIsLipFiller?.description}
              </p>
              <p className="text-brown">
                {whatIsLipFiller?.process}
              </p>
              <p className="text-brown">
                {whatIsLipFiller?.products}
              </p>
              {whatIsLipFiller?.cta && (
                <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-wine/90 transition-colors">
                  {whatIsLipFiller.cta.text}
                </Link>
              )}
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/face/lip-filler.jpeg"
                  alt={whatIsLipFiller?.imageAlt || "Lip filler injection procedure at Nexus Clinic KL"}
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                variants={scaleIn}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <p className="text-brown font-semibold">
                  {whatIsLipFiller?.floatingCard?.title}
                </p>
                <p className="text-sm text-taupe">
                  {whatIsLipFiller?.floatingCard?.subtitle}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lip Enhancement Styles Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="font-georgia text-4xl text-brown mb-6">
                {lipEnhancementStyles?.title}
              </h2>
              <p className="text-taupe mb-4">
                {lipEnhancementStyles?.description}
              </p>
              <p className="text-sm text-wine">
                {lipEnhancementStyles?.note}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lipEnhancementStyles?.styles?.map((style: any, index: number) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-lg border border-cream hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-wine mb-3">{style.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-brown">Best for:</span> <span className="text-taupe">{style.bestFor}</span></p>
                    <p><span className="font-semibold text-brown">Volume:</span> <span className="text-taupe">{style.volumeNeeded}</span></p>
                    <p><span className="font-semibold text-brown">Technique:</span> <span className="text-taupe">{style.technique}</span></p>
                  </div>
                </motion.div>
              ))}
            </div>

            {lipEnhancementStyles?.cta && (
              <motion.div variants={fadeInUp} className="text-center">
                <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-wine/90 transition-colors">
                  {lipEnhancementStyles.cta.text}
                </Link>
                <p className="text-sm text-taupe mt-2">{lipEnhancementStyles.cta.subtext}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Lip Filler vs Lip Flip Section */}
      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <TableForPages
              columns={[
                { key: "factor", header: lipFillerVsLipFlip?.comparisonTable?.factor || "Factor", className: "font-semibold" },
                { key: "lipFiller", header: lipFillerVsLipFlip?.comparisonTable?.lipFiller || "Lip Filler" },
                { key: "lipFlip", header: lipFillerVsLipFlip?.comparisonTable?.lipFlip || "Lip Flip (Botox)" },
              ]}
              data={lipFillerVsLipFlip?.comparisonTable?.rows?.map((row: any) => ({
                factor: row.factor,
                lipFiller: row.lipFiller,
                lipFlip: row.lipFlip,
              })) || []}
              title={lipFillerVsLipFlip?.title}
              subtitle={lipFillerVsLipFlip?.description}
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

            <motion.div
              variants={fadeInUp}
              className="bg-wine/10 p-6 rounded-xl text-center max-w-3xl mx-auto"
            >
              <p className="text-brown">{lipFillerVsLipFlip?.conclusion}</p>
            </motion.div>

            {lipFillerVsLipFlip?.cta && (
              <motion.div variants={fadeInUp} className="text-center">
                <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-wine/90 transition-colors">
                  {lipFillerVsLipFlip.cta.text}
                </Link>
                <p className="text-sm text-taupe mt-2">{lipFillerVsLipFlip.cta.subtext}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                {whoIsItFor?.title}
              </h2>
              <p className="text-taupe">
                {whoIsItFor?.description}
              </p>
              <div className="space-y-3">
                {whoIsItFor?.items?.map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                    <span className="text-brown">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-taupe">
                {whoIsItFor?.suitability}
              </p>
              <p className="text-sm text-wine" dangerouslySetInnerHTML={{ __html: whoIsItFor?.combinationNote }}/>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-wine p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">{notSuitableFor?.title}</h3>
              <div className="space-y-4">
                {notSuitableFor?.items?.map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm opacity-90">
                {notSuitableFor?.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="font-georgia text-4xl text-brown mb-6">
                {commonMistakes?.title}
              </h2>
              <p className="text-taupe">
                {commonMistakes?.disclaimer}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes?.mistakes?.map((mistake: any, index: number) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-bold text-brown mb-2">{mistake.title}</h3>
                      <p className="text-taupe">{mistake.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="bg-wine p-6 rounded-xl text-white text-center">
              <p className="text-lg">{commonMistakes?.conclusion}</p>
            </motion.div>

            {commonMistakes?.cta && (
              <motion.div variants={fadeInUp} className="text-center">
                 <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-wine/90 transition-colors">
                  {commonMistakes.cta.text}
                </Link>
                <p className="text-sm text-taupe mt-2">{commonMistakes.cta.subtext}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Nexus Section */}
      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="font-georgia text-4xl text-brown mb-6">
                {whyNexus?.title}
              </h2>
              <p className="text-taupe">
                {whyNexus?.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyNexus?.stats?.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl text-center shadow-lg"
                >
                  <div className="text-4xl font-bold text-wine mb-2">{stat.value}</div>
                  <p className="text-brown">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyNexus?.features?.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream p-4 rounded-xl flex items-start space-x-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span className="text-brown text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/10 p-6 rounded-xl"
            >
              <p className="text-brown italic" dangerouslySetInnerHTML={{ __html: whyNexus?.citation }} />
              <p className="text-sm text-taupe mt-2">— {whyNexus?.citationSource}</p>
               <p className="text-sm text-wine" dangerouslySetInnerHTML={{ __html: whyNexus?.combinationNote }}/>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-wine/90 transition-colors">
                {whyNexus?.cta?.text}
              </Link>
              <p className="text-sm text-taupe mt-2">{whyNexus?.cta?.subtext}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center"
            >
              {procedure?.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {procedure?.steps?.map((step: any, index: number) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative p-6 bg-white rounded-xl shadow-lg border border-cream"
                >
                  <div className="absolute -top-3 left-6 bg-wine text-white px-4 py-1 rounded-full text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-brown mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-taupe text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {procedure?.cta && (
              <motion.div variants={fadeInUp} className="text-center">
                <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-wine/90 transition-colors">
                  {procedure.cta.text}
                </Link>
                <p className="text-sm text-taupe mt-2">{procedure.cta.subtext}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="font-georgia text-4xl text-brown mb-6">
                {pricing?.title}
              </h2>
              <p className="text-taupe">
                {pricing?.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing?.priceTable?.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <h3 className="text-xl font-bold text-wine mb-2">{item.treatmentType}</h3>
                  <p className="text-2xl font-bold text-brown mb-2">{item.priceRange}</p>
                  <p className="text-sm text-taupe">{item.typicalVolume}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-wine mb-4">{pricing?.factors?.title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {pricing?.factors?.items?.map((factor: any, index: number) => (
                  <div key={index}>
                    <p className="font-semibold text-brown">{factor.title}</p>
                    <p className="text-sm text-taupe" dangerouslySetInnerHTML={{ __html: factor.description }} />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/10 p-6 rounded-xl text-center"
            >
              <p className="text-brown italic">{pricing?.citation}</p>
              <p className="text-sm text-taupe mt-2">— {pricing?.citationSource}</p>
            </motion.div>

            {pricing?.cta && (
              <motion.div variants={fadeInUp} className="text-center">
                <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-wine/90 transition-colors">
                  {pricing.cta.text}
                </Link>
                <p className="text-sm text-taupe mt-2">{pricing.cta.subtext}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Side Effects and Aftercare Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center"
            >
              {sideEffectsAndAftercare?.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInLeft} className="bg-cream p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-wine mb-4">
                  {sideEffectsAndAftercare?.commonSideEffects?.title}
                </h3>
                <p className="text-brown">
                  {sideEffectsAndAftercare?.commonSideEffects?.description}
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="bg-wine p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">
                  {sideEffectsAndAftercare?.seriousRisks?.title}
                </h3>
                <p>{sideEffectsAndAftercare?.seriousRisks?.description}</p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg border border-cream"
            >
              <h3 className="text-2xl font-bold text-wine mb-4">
                {sideEffectsAndAftercare?.aftercareInstructions?.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {sideEffectsAndAftercare?.aftercareInstructions?.items?.map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                    <span className="text-brown">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-center text-taupe" dangerouslySetInnerHTML={{ __html: sideEffectsAndAftercare?.combinationNote }} />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema data={faqs} />

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-wine">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="font-georgia text-4xl text-white">
              {finalCta?.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/90 text-lg">
              {finalCta?.description}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-white font-medium">
              {finalCta?.stats}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact-us/" className="bg-white text-wine px-8 py-3 rounded-full font-medium hover:bg-cream transition-colors">
                {finalCta?.cta?.text}
              </Link>
              <p className="text-white/80 text-sm mt-2">{finalCta?.cta?.subtext}</p>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-white/70 text-sm">
              {finalCta?.exploreMore}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LipFillerLanding;