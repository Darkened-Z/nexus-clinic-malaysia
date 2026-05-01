"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Whatsapp from "@/src/components/Whatsapp";
import {
  Sparkles,
  Clock,
  Shield,
  Heart,
  ChevronRight,
  Droplets,
  Sparkle,
  Award,
  Calendar,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  Target,
  Feather,
  Gem,
  Activity,
  Sun,
  Eye,
  Smile,
  UserCheck,
  RefreshCw,
  PlusCircle,
  ArrowRight,
  Quote,
  MapPin,
  Syringe,
  Brain,
  Gauge,
  FlaskConical,
  BadgeCheck,
  HandMetal,
  Zap,
  Hourglass,
  Ban,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  Table,
  List,
  Layers,
  Syringe as SyringeIcon,
} from "lucide-react";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

// Import icon mapping for dynamic icons
const iconMap: Record<string, any> = {
  UserCheck,
  Award,
  Feather,
  Shield,
  MapPin,
  Target,
  Gem,
  PlusCircle,
  Droplets,
  Sparkle,
  Heart,
  Activity,
  Sun,
  Eye,
  Smile,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  Clock,
  ChevronRight,
  ArrowRight,
  Quote,
  RefreshCw,
  Calendar,
  Syringe,
  Brain,
  Gauge,
  FlaskConical,
  BadgeCheck,
  HandMetal,
  Zap,
  Hourglass,
  Ban,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  Table,
  List,
  Layers,
  SyringeIcon,
};

const DermalFillersLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "face/dermalFiller");

  // Helper function to render text with HTML tags
  const renderWithTags = (text: string) => {
    if (!text) return text;
    return text
      .replace(/<italic>(.*?)<\/italic>/g, '<span class="text-wine italic">$1</span>')
      .replace(/<bold>(.*?)<\/bold>/g, '<span class="font-bold">$1</span>');
  };

  // Helper to get icon component
  const getIcon = (iconName: string) => {
    return iconMap[iconName] || ArrowRight;
  };

  // Get data from translation with fallbacks
  const heroData = t("hero", { returnObjects: true }) as any;
  const treatmentAtGlance = t("treatmentAtGlance", { returnObjects: true }) as any;
  const howItWorks = t("howItWorks", { returnObjects: true }) as any;
  const faceAreas = t("faceAreas", { returnObjects: true }) as any;
  const products = t("products", { returnObjects: true }) as any;
  const whyNexus = t("whyNexus", { returnObjects: true }) as any;
  const procedure = t("procedure", { returnObjects: true }) as any;
  const pricing = t("pricing", { returnObjects: true }) as any;
  const advantagesLimitations = t("advantagesLimitations", { returnObjects: true }) as any;
  const sideEffects = t("sideEffects", { returnObjects: true }) as any;
  const aftercare = t("aftercare", { returnObjects: true }) as any;
  const faqData = t("faq", { returnObjects: true }) as any;
  const finalCta = t("finalCta", { returnObjects: true }) as any;

  // Format FAQs for FAQ component
  const faqs = faqData?.items?.map((item: any) => ({
    q: item.question,
    a: item.answer,
  })) || [];

  return (
    <>
      <main className="bg-light min-h-screen font-inter overflow-x-hidden">
        <AllPagesHero
          badge="Nexus Clinic Kuala Lumpur"
          title={heroData?.title || "Dermal Filler in Malaysia for "}
          highlight={heroData?.title2 || "Natural, Youthful Restoration"}
          description={heroData?.description || "Advanced dermal filler treatments tailored to your unique facial anatomy."}
          details={heroData?.experience || "Our award-winning injectors have performed over 5,000 facial filler procedures using technique built for Southeast Asian bone structure."}
          note="Always choose a licensed medical professional for dermal filler treatments. Results vary based on individual anatomy and product choice."
          image="/images/face/dermal-filler.jpeg"
          imageAlt="Dermal filler treatment at Nexus Clinic Kuala Lumpur"
          ctaText={heroData?.cta || "Book Your Free Dermal Filler Consultation"}
          ctaLink="/contact-us"
          whatsappMessage="Hi, I'm interested in dermal filler at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle=" Expert Care"
          floatingSubtitle="5,000+ procedures • Natural results"
          staggerContainer={staggerContainer}
          fadeInLeft={fadeInLeft}
          fadeInRight={fadeInRight}
          fadeInUp={fadeInUp}
        />
        {/* Treatment at a Glance Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                {treatmentAtGlance?.title}
              </h2>
              <motion.p
                variants={fadeInUp}
                className="text-md text-brown mb-6 leading-relaxed font-medium max-w-3xl mx-auto"
              >
                {treatmentAtGlance?.clinicStatement}
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {treatmentAtGlance?.items?.map((item: any, index: number) => {
                const IconMap: Record<string, any> = {
                  "Treatment Types": Syringe,
                  "Session Time": Clock,
                  "Downtime": Hourglass,
                  "Results": Eye,
                  "Longevity": Calendar,
                  "Reversible": RefreshCw,
                  "Anaesthesia": Shield,
                  "Suitable For": Target,
                };
                const Icon = IconMap[item.label] || Info;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-cream/30 border border-taupe/10 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center">
                        <Icon size={18} className="text-wine" />
                      </div>
                      <span className="text-sm font-semibold text-brown">{item.label}</span>
                    </div>
                    <p className="text-taupe text-sm leading-relaxed">{item.value}</p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-10">
              <Link href="/contact-us/" className="text-wine font-semibold hover:underline flex items-center gap-2 mx-auto">
                {treatmentAtGlance?.cta || "Speak to a Doctor About Your Goals | Book a Free Assessment"}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-b from-cream to-light"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                {howItWorks?.title || "Dermal Filler | How It Restores Structure and Volume"}
              </h2>
              <p className="text-taupe text-lg max-w-3xl mx-auto leading-relaxed">
                {howItWorks?.description}
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <div className="bg-white p-8 rounded-2xl shadow-md mb-6">
                  <h3 className="font-georgia text-xl text-brown mb-4">
                    {howItWorks?.levels?.title}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-wine shrink-0 mt-0.5" />
                      <span className="text-taupe">{howItWorks?.levels?.first}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-wine shrink-0 mt-0.5" />
                      <span className="text-taupe">{howItWorks?.levels?.second}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-wine/5 p-6 rounded-xl border-l-4 border-wine">
                    <p className="text-taupe text-sm italic" dangerouslySetInnerHTML={{ __html: howItWorks?.statistics }} />
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute -inset-4 bg-wine/10 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src="/images/face/dermal-filler-malaysia.jpeg"
                    alt="How dermal filler works"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">
                  <p className="text-brown text-sm">
                    <Quote size={16} className="inline text-wine mr-2" />
                    HA filler ranked #2 most performed non-surgical procedure worldwide - ISAPS 2024
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Face Areas Treated Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                {faceAreas?.title || "Face Areas Treated with Dermal Filler at Nexus Clinic KL"}
              </h2>
              <p className="text-taupe max-w-3xl mx-auto">
                {faceAreas?.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faceAreas?.areas?.map((area: any, index: number) => {
                const AreaIconMap: Record<string, any> = {
                  "Lip Filler": Heart,
                  "Cheek Filler": Sun,
                  "Chin Filler": UserCheck,
                  "Jawline Filler": Activity,
                  "Nose Filler": Eye,
                  "Tear Trough and Under-Eye Filler": Eye,
                  "Nasolabial Fold and Line Softening": Smile,
                };
                const Icon = AreaIconMap[area.name] || Sparkle;
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="group p-6 rounded-2xl bg-cream/30 hover:bg-cream border border-taupe/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-wine/20 transition-colors">
                      <Icon className="text-wine" size={24} />
                    </div>
                    <h3 className="font-georgia text-xl text-brown mb-2">
                      {area.name}
                    </h3>
                    <p className="text-taupe text-sm leading-relaxed">{area.description}</p>
                    {area.cta && (
                      <Link href={area.cta} className="text-wine text-sm font-medium hover:underline flex items-center gap-1 mt-3">
                        Learn More <ArrowRight size={12} />
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Link href="/contact-us/" className="bg-wine/10 text-wine px-8 py-3 rounded-full hover:bg-wine/20 transition-all duration-300 font-semibold">
                {faceAreas?.cta || "Book a Consultation to Map Your Treatment Areas | Free Assessment Available"}
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Products Table Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-b from-cream to-light"
        >
          <div className="container mx-auto max-w-7xl">

            <TableForPages
              columns={[
                { key: "name", header: products?.tableColumns?.[0] || "Product Name", className: "font-medium" },
                { key: "type", header: products?.tableColumns?.[1] || "Type" },
                { key: "bestArea", header: products?.tableColumns?.[2] || "Best For Area" },
                { key: "longevity", header: products?.tableColumns?.[3] || "Longevity" },
              ]}
              data={products?.products?.map((product: any) => ({
                name: product.name,
                type: product.type,
                bestArea: product.bestArea,
                longevity: product.longevity,
              })) || []}
              title={products?.title || "Dermal Filler Products Used at Nexus Clinic KL"}
              subtitle= {products?.description}
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

            <motion.div variants={fadeInUp} className="mt-8">
              <div className="bg-wine/5 p-6 rounded-xl border-l-4 border-wine">
                <p className="text-taupe text-sm italic">
                  {products?.statistics}
                </p>
              </div>
              <div className="text-center mt-6">
                <Link href="/contact-us/" className="text-wine font-semibold hover:underline">
                  {products?.cta || "Ask a Doctor About the Right Product for Your Face | Book a Free Consultation"}
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Nexus Section - Fixed Symmetrical Layout */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                  {whyNexus?.title || "Nexus Clinic KL | Award-Winning Aesthetic Doctors for Dermal Filler"}
                </h2>
                <p className="text-taupe mb-6 leading-relaxed">
                  {whyNexus?.description}
                </p>
                <div className="space-y-3">
                  {whyNexus?.differentiators?.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <BadgeCheck size={20} className="text-wine shrink-0 mt-0.5" />
                      <span className="text-brown text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <motion.div variants={fadeInUp} className="mt-8">
                  <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full hover:bg-rose transition-all duration-300">
                    {whyNexus?.cta || "Book Your Consultation at Nexus Clinic KL"}
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative order-1 lg:order-2">
                <div className="absolute inset-0 bg-linear-to-r from-wine/10 to-rose/10 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src="/images/face/Dermal Filler Area.webp"
                    alt="Nexus Clinic KL Award-Winning Aesthetic Doctors"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Procedure Steps Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-b from-cream to-light"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                {procedure?.title || "The Dermal Filler Procedure at Nexus Clinic KL"}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {procedure?.steps?.map((step: any, idx: number) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-wine rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="font-georgia text-lg text-brown mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-taupe text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full hover:bg-rose transition-all duration-300">
                {procedure?.cta || "Ready to Book | Secure Your Appointment at Nexus Clinic KL"}
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        >
          <div className="container mx-auto max-w-7xl">
            <section className="py-20 px-4 bg-cream">
              <div className="container mx-auto max-w-4xl">
                <TableForPages
                  columns={[
                    { key: "area", header: pricing?.tableColumns?.[0] || "Treatment Area" },
                    { key: "volume", header: pricing?.tableColumns?.[1] || "Typical Volume" },
                    { key: "price", header: pricing?.tableColumns?.[2] || "Price Range (RM)" },
                  ]}
                  data={pricing?.prices?.map((item: any) => ({
                    area: item.area,
                    volume: item.volume,
                    price: item.price,
                  })) || []}
                  title= {pricing?.title || "Dermal Filler Cost in Malaysia | Transparent 2026 Pricing"}
                  subtitle={pricing?.description}
                  variant="detailed"
                  fadeInUp={fadeInUp}
                />
              </div>
            </section>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl mb-6">
              <p className="text-brown text-center italic mb-4">
                {pricing?.note}
              </p>
              <h3 className="font-georgia text-xl text-brown mb-4">
                {pricing?.factors?.title}
              </h3>
              <ul className="space-y-2">
                {pricing?.factors?.items?.map((factor: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe text-sm">
                    <ChevronRight size={14} className="text-wine shrink-0 mt-0.5" />
                    {factor}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg border border-taupe/20">
                <p className="text-brown text-sm">
                  <Info size={16} className="inline text-wine mr-2" />
                  {pricing?.transparencyNote}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <Link href="/contact-us/" className="bg-wine text-white px-8 py-3 rounded-full hover:bg-rose transition-all duration-300">
                {pricing?.cta || "Get Your Personalised Quote | Book a Free Consultation at Nexus Clinic KL"}
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Advantages and Limitations Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-b from-cream to-light"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="p-8 rounded-3xl bg-green-50/30 border border-green-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <ThumbsUp className="text-green-600" size={28} />
                  <h3 className="font-georgia text-2xl text-brown">
                    {advantagesLimitations?.advantages?.title || "Advantages"}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {advantagesLimitations?.advantages?.items?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-taupe">
                      <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="p-8 rounded-3xl bg-amber-50/30 border border-amber-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <ThumbsDown className="text-amber-600" size={28} />
                  <h3 className="font-georgia text-2xl text-brown">
                    {advantagesLimitations?.limitations?.title || "Limitations"}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {advantagesLimitations?.limitations?.items?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-taupe">
                      <XCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Side Effects Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <AlertCircle className="text-wine mx-auto mb-4" size={48} />
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                {sideEffects?.title || "Dermal Filler Side Effects | Temporary, Rare and Manageable"}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream/30 p-6 rounded-xl border border-taupe/10"
              >
                <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-wine" />
                  {sideEffects?.common?.title || "Common temporary effects"}
                </h3>
                <ul className="space-y-2">
                  {sideEffects?.common?.items?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-taupe text-sm">
                      <span className="text-wine">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-amber-50/30 p-6 rounded-xl border border-amber-200"
              >
                <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-amber-600" />
                  {sideEffects?.rare?.title || "Rare Risks"}
                </h3>
                <ul className="space-y-2">
                  {sideEffects?.rare?.items?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-taupe text-sm">
                      <AlertCircle size={14} className="text-amber-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-4 bg-wine/5 rounded-xl border-l-4 border-wine"
            >
              <p className="text-brown text-sm">
                <Shield size={16} className="inline text-wine mr-2" />
                {sideEffects?.safetyNote}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Aftercare Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-b from-cream to-light"
        >
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <HandMetal className="text-wine mx-auto mb-4" size={48} />
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                {aftercare?.title || "Dermal Filler Aftercare Instructions"}
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {aftercare?.items?.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-wine shrink-0 mt-0.5" />
                    <span className="text-taupe text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-cream/50 rounded-lg text-center">
                <p className="text-brown text-sm italic">
                  {aftercare?.note}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <FAQWithSchema data={faqs} />
        {/* Final CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-wine to-rose text-white"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-4xl mb-6"
            >
              {finalCta?.title || "Book the Best Dermal Filler in Kuala Lumpur at Nexus Clinic KL"}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg mb-4 text-white/90"
            >
              {finalCta?.description}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 font-semibold text-white"
            >
              {finalCta?.experience}
            </motion.p>
            <motion.a
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact-us/"
              className="bg-white text-wine px-12 py-4 rounded-full font-semibold hover:bg-cream transition-colors shadow-xl inline-flex items-center gap-2"
            >
              {finalCta?.cta || "Book Your Free Consultation Now | Limited Slots Available This Week"}
              <Calendar size={18} />
            </motion.a>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default DermalFillersLanding;