"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Star,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Syringe,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  Award,
  MapPin,
  Calendar,
  Eye,
  ArrowUp,
  Gem,
  Zap,
  Droplet,
  User,
  Scissors,
  Activity,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  containerVariants,
  rowVariants,
} from "@/src/lib/animations";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
interface ChinFillerProps {
  locale: string;
}

export default function ChinFillerLanding({ locale }: ChinFillerProps) {
  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-pigmentation-treatment2.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-pigmentation-treatment3.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment3.webp",
    },
  ];

  const faqData = [
    { q: "How long does chin filler last in Malaysia?", a: "Chin filler results typically last 12 to 18 months. Juvederm Voluma lasts 12-18 months, while Radiesse can last up to 24 months. Metabolism and lifestyle affect longevity. Most patients schedule a top-up around the 12-month mark." },
    { q: "How much does chin filler cost in Malaysia in 2026?", a: "Chin filler treatments at Nexus Clinic KL typically range from RM 1,500 to RM 3,500+ per session, depending on the filler used, volume required, and the level of projection or contouring needed. Final pricing is confirmed after consultation." },
    { q: "How much filler is needed for the chin?", a: "Most patients need 0.5 to 1.5ml for a natural, proportionate chin filler result. First-time patients with mild underprojection may need 0.5-1ml. Patients with significant recession or asymmetry may require 1.5-2ml. The doctor confirms the right volume at consultation." },
    { q: "Will chin filler make my face look unnatural?", a: "Correctly placed chin filler creates structural definition, not an obvious augmented look. Overfilling is the most common cause of an unnatural result. At Nexus Clinic KL, we use a restrained, anatomy-first approach where the right amount always outperforms excess volume placed carelessly." },
    { q: "Can chin filler help with a double chin?", a: "Chin filler does not remove fat, but it can improve the profile line by adding forward projection. This often reduces the appearance of a double chin in photos and profile views by creating better definition between the chin and neck." },
    { q: "Is chin filler reversible?", a: "Hyaluronic acid chin fillers are fully dissolvable with hyaluronidase. This is a key safety advantage of HA-based products. If you are unhappy with the outcome, the filler can be completely removed. Radiesse is not reversible and requires more thorough patient screening." },
    { q: "Can chin filler be combined with jawline filler?", a: "Yes. Chin filler is regularly combined with jawline filler, lip filler, or nose filler as part of full lower face balancing. Treating the chin in isolation when surrounding areas also contribute to the imbalance produces a partial result. Your doctor will recommend the best approach." },
    { q: "Is chin filler safe for men?", a: "Yes. Chin filler for men focuses on stronger projection and angular definition rather than a narrow V-shape. The product selection, injection depth, and placement zones differ from female technique. Juvederm Volux and Radiesse are often preferred for male patients due to their firmer structural profile." },
    { q: "How soon will I see results from chin filler?", a: "Results are visible immediately after treatment. Mild swelling in the first 24-48 hours may slightly soften the appearance. The final result is typically clear within 5 to 7 days. Most patients see their best outcome within one week." },
    { q: "Who is not suitable for chin filler?", a: "Chin filler is not suitable for patients who are pregnant or breastfeeding, have active skin infections in the area, have a known allergy to hyaluronic acid or lidocaine, or have certain autoimmune conditions. Patients with severe skeletal underdevelopment may need surgical assessment." },
  ];

  const comparisonData = [
    { aspect: "Procedure", chinFiller: "Non-surgical injection", implant: "Surgery under general anaesthesia", thread: "Non-surgical" },
    { aspect: "Downtime", chinFiller: "Same day return", implant: "1-2 weeks recovery", thread: "2-5 days" },
    { aspect: "Duration", chinFiller: "12-18 months", implant: "Permanent", thread: "6-12 months" },
    { aspect: "Reversible", chinFiller: "Yes (HA fillers)", implant: "No. Surgery required", thread: "Partially" },
    { aspect: "Anaesthesia", chinFiller: "Topical numbing cream", implant: "General anaesthesia", thread: "Local anaesthesia" },
    { aspect: "Scarring", chinFiller: "None", implant: "Small incision scar", thread: "Minimal entry points" },
    { aspect: "Correction Level", chinFiller: "Mild to moderate", implant: "Moderate to significant", thread: "Limited" },
    { aspect: "Cost (2026)", chinFiller: "RM 1,500 - RM 3,500", implant: "RM 8,000 - RM 20,000+", thread: "RM 2,000 - RM 4,500" },
    { aspect: "Best For", chinFiller: "First-timers, non-surgical", implant: "Permanent change", thread: "Soft tissue lifting only" },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge="Non-Surgical Chin Augmentation"
        title="Chin Dermal Filler in Malaysia for a"
        highlight="Sharper, Defined Profile"
        description="Your side profile is the one angle you cannot control. A chin that sits too far back makes your nose look bigger, your jaw look softer, and your entire face look off."
        details="Chin filler at Nexus Clinic Kuala Lumpur fixes it. One session, 20 to 30 minutes, zero surgery. Our award-winning injectors have performed over 5,000 facial filler procedures using technique built for Southeast Asian bone structure. The result looks like you. Just sharper."
        note="Chin filler requires precise placement to avoid looking unnatural. Always choose an experienced injector who understands Asian facial proportions."
        image="/images/face/chin.jpeg"
        imageAlt="Nexus Clinic Kuala Lumpur - Chin Filler Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in chin filler at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Sharper Profile"
        floatingSubtitle="Immediate results • Zero surgery"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-taupe/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-wine" />
                </div>
                <h2 className="font-georgia text-2xl md:text-3xl text-brown">
                  Trust at a glance
                </h2>
              </div>
              <div className="hidden sm:block w-px h-8 bg-taupe/20" />
              <p className="text-taupe font-inter text-sm">
                Nexus Clinic Kuala Lumpur — Excellence in Aesthetic Medicine
              </p>
            </div>

            {/* Key Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-y border-taupe/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Established</p>
                  <p className="font-georgia text-brown font-bold text-lg">2001</p>
                  <p className="font-inter text-taupe text-xs">Over 20 years of excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Location</p>
                  <p className="font-georgia text-brown font-bold text-sm">Wisma UOA II, Jalan Pinang</p>
                  <p className="font-inter text-taupe text-xs">KLCC, 50450 Kuala Lumpur</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Opening Hours</p>
                  <p className="font-georgia text-brown font-bold text-sm">Monday - Saturday</p>
                  <p className="font-inter text-taupe text-xs">9:00am – 6:00pm | Closed Sundays & PH</p>
                </div>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">20+ Years of Excellence</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Trusted aesthetic care since 2001 with proven results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Performed by licensed aesthetic doctors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">MOH-Approved Products</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Premium, medical-grade fillers only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional: Contact Badge */}
            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Award-winning practitioners</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Doctor-led consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Emergency complication protocols</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Treatment Overview Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Chin Filler Treatment Overview</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know at a glance</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatment", value: "Non-surgical chin augmentation" },
              { icon: Clock, label: "Session Time", value: "20 to 30 minutes" },
              { icon: Heart, label: "Downtime", value: "Minimal, same day return" },
              { icon: Zap, label: "Results", value: "Immediate, settled in 5-7 days" },
            ].map((item, idx) => (
              <div key={idx} className="bg-light p-5 rounded-xl border border-taupe/10 shadow-sm">
                <item.icon className="w-8 h-8 text-wine mb-3" />
                <p className="font-inter text-sm text-taupe">{item.label}</p>
                <p className="font-georgia text-md text-brown font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 rounded-2xl p-6 border border-wine/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="font-inter text-sm text-taupe">Longevity</p>
                <p className="font-georgia text-brown font-semibold">12-18 months average<br />Radiesse: up to 24 months</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Reversible</p>
                <p className="font-georgia text-brown font-semibold">Yes for HA fillers<br />Fully dissolvable with hyaluronidase</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Volume Used</p>
                <p className="font-georgia text-brown font-semibold">0.5 to 1.5ml per session</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown font-semibold">Topical numbing cream only</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/"className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Chin Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Profile Problem Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                The Side Profile Problem <span className="text-wine italic">Most Patients Get Wrong</span>
              </h2>
              <p className="text-brown font-inter">
                Most patients arriving at Nexus Clinic KL thinking they need a nose job leave with a chin filler plan instead. 
                This is not misdirection. It is proportion.
              </p>
              <p className="text-brown font-inter">
                When the chin sits too far back, the nose reads as large even if it is perfectly average. 
                The jaw blurs into the neck. Fixing the chin restores proportion without touching the nose. 
                Faster, cheaper, and with no recovery time.
              </p>
              <p className="text-brown font-inter">
                A significant portion of patients in Malaysia have genetic chin underprojection. 
                Others see the change from their mid-twenties as fat pads thin and bone density decreases.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">
                  "The <a href='https://www.isaps.org/medical-professionals/isaps-global-statistics/' rel='nofollow' target='_blank' className='text-brown hover:underline font-bold'>International Society of Aesthetic Plastic Surgery (ISAPS)</a> reported in 2024 that non-surgical chin and jawline augmentation saw a 34% increase across Southeast Asia."
                </p>               
                 <p className="text-taupe text-xs mt-2">[ISAPS Global Statistics Report 2024]</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Chin Dermal Filler.webp"
                  alt="Chin Dermal Filler Treatment at Nexus Clinic Kuala Lumpur"
                  fill
                  className="object-cover"
                />
              </div>
              <Link href="/contact-us/" className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Book a Consultation | Find Out If Chin Filler Is Right for You
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Patients Who Benefit Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Patients Who Benefit Most from Chin Filler in KL</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Chin filler addresses a range of aesthetic concerns</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Side profile looks flat or recessed in photos and video calls",
              "Nose appears larger because the chin does not balance it",
              "Jawline blurs into the neck from certain angles",
              "Double chin appearance caused by underprojection rather than excess weight",
              "Facial asymmetry stemming from the chin area",
              "Age-related lower face volume loss that softens definition",
              "Patients who want to trial improvement before committing to surgery",
            ].map((text, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-light p-4 rounded-xl border border-taupe/10 flex items-start gap-3 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown font-inter text-sm">{text}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Not Sure If You Are a Candidate? Book a Free Clinical Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Nexus Clinic Difference Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">Nexus Clinic KL | <span className="text-wine">Award-Winning Injectors</span> for Chin Filler</h2>
              <p className="text-brown font-inter">
                There are many aesthetic clinics in Kuala Lumpur. The filler brands across most of them are nearly identical. 
                The experience of the hands placing those products is not.
              </p>
              <h3 className="font-georgia text-xl text-brown">What makes Nexus Clinic KL different:</h3>
              <ul className="space-y-3">
                {[
                  "Over 5,000 facial filler procedures completed by licensed aesthetic doctors",
                  "15+ years of combined aesthetic medicine experience across the clinical team",
                  "Specialist training in Southeast Asian facial anatomy and injection technique",
                  "Award-winning practitioners recognised for safety, precision and natural outcomes",
                  "Anatomy-first approach: the right amount placed correctly always outperforms excess volume",
                  "Honest consultations: if chin filler is not right, you will be told clearly",
                  "Full aftercare support and structured follow-up included as standard",
                  "MOH-approved products used for every treatment without exception",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-taupe font-inter text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-4 rounded-xl border-l-4 border-wine">
                <p className="text-brown font-inter text-sm">
                  Allergan/AbbVie Malaysia reported in 2023 that Juvederm Voluma remains the most prescribed chin and <a href='/face/cheek-filler-malaysia/' className='font-bold text-wine italic'>cheek filler </a> brand in Malaysia.
                </p>
                <p className="text-taupe text-xs mt-1">[AbbVie Malaysia Aesthetic Market Summary Report, 2023]</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-cream p-6 rounded-2xl border border-taupe/20">
                <h3 className="font-georgia text-2xl text-brown mb-4">Filler Products Used for Chin Augmentation</h3>
                <p className="text-taupe font-inter text-sm mb-6">
                  All chin filler treatments use MOH-approved hyaluronic acid dermal fillers from internationally recognised brands.
                </p>
                <div className="space-y-4">
                  {[
                    { name: "Juvederm Voluma", desc: "High-density HA engineered for structural support. Most prescribed chin filler in Malaysia. Results last 12-18 months." },
                    { name: "Restylane Lyft", desc: "Firm-consistency filler with strong lift and projection capacity. Great for structural correction." },
                    { name: "Belotero Volume", desc: "Softer HA that integrates naturally. Preferred for lighter corrections or first-time patients." },
                    { name: "Radiesse", desc: "Biostimulatory filler. Adds immediate volume and stimulates collagen. Results last 12-24 months. Not reversible." },
                  ].map((product, idx) => (
                    <div key={idx} className="border-l-4 border-wine pl-4">
                      <p className="font-georgia text-brown font-semibold">{product.name}</p>
                      <p className="text-taupe font-inter text-sm">{product.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact-us/" className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Find Out Which Filler Suits Your Chin
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Chin Filler Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — safe, precise, and personalized</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Full Facial Assessment", desc: "Doctor reviews chin in context of entire lower face. Front, 45-degree oblique, and side profile are all assessed." },
              { step: "02", title: "Personalised Treatment Plan", desc: "Exact placement, volume and product mapped for your anatomy. Most patients need 0.5 to 1.5ml." },
              { step: "03", title: "Numbing & Precise Injection", desc: "Topical numbing cream applied. Filler placed using fine needles or cannula. 20-30 minutes." },
              { step: "04", title: "Review & Aftercare", desc: "Result reviewed immediately. Full aftercare provided. Shape refines over 5-7 days." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link href="/contact-us/" className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Book Your Chin Filler Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Same-day results at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <TableForPages
            columns={[
              { key: "aspect", header: "Aspect", className: "font-semibold" },
              { key: "chinFiller", header: "Chin Filler" },
              { key: "implant", header: "Chin Implant (Surgery)" },
              { key: "thread", header: "Thread Lift" },
            ]}
            data={comparisonData.map(row => ({
              aspect: row.aspect,
              chinFiller: row.chinFiller,
              implant: row.implant,
              thread: row.thread,
            }))}
            title="Chin Filler vs Alternatives"
            subtitle="Compare your options for chin augmentation"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
      </motion.div>
      </section>

      {/* Advantages & Limitations Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-2xl text-brown mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-wine" />
                Advantages
              </h3>
              <ul className="space-y-2">
                {[
                  "No surgery, no stitches, no scarring, no general anaesthesia",
                  "Visible improvement immediately after treatment",
                  "Fully reversible with hyaluronidase for HA-based fillers",
                  "Temporary result lets you experience improvement before committing",
                  "Can be combined with <a href='/face/jawline-filler-malaysia/' class='text-wine font-bold italic'>jawline filler  </a> or lip filler",
                  "Natural-looking results with right volume and technique",
                  "Minimal downtime. Most patients return to work same day",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-2xl text-brown mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-wine" />
                Limitations
              </h3>
              <ul className="space-y-2">
                {[
                  "Results not permanent. Top-ups needed every 12-18 months",
                  "Injector experience matters significantly",
                  "Not suitable for severe skeletal underdevelopment",
                  "Radiesse is not dissolvable",
                  "Mild bruising or swelling may be visible for several days",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          
          <section className="py-20 px-4 bg-cream">
            <div className="container mx-auto max-w-4xl">
              <TableForPages
                columns={[
                  { key: "brand", header: "Filler Brand / Type" },
                  { key: "volume", header: "Volume" },
                  { key: "price", header: "Est. Price (RM)" },
                ]}
                data={[
                  { brand: "Juvederm Voluma (Premium HA)", volume: "1 cc", price: "RM 2,200 – RM 3,000" },
                  { brand: "Juvederm Voluma (Premium HA)", volume: "1.5 cc", price: "RM 3,000 – RM 3,500" },
                  { brand: "Restylane Lyft (Premium HA)", volume: "1 cc", price: "RM 2,000 – RM 2,800" },
                  { brand: "Belotero Volume (HA)", volume: "1 cc", price: "RM 1,500 – RM 2,200" },
                  { brand: "Radiesse (Biostimulator)", volume: "1.5 cc", price: "RM 2,500 – RM 3,500" },
                  { brand: "Subtle / First-Timer Correction", volume: "0.5 cc", price: "RM 1,500 – RM 2,000" },
                ]}
                title="Chin Filler Price in Malaysia"
                subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
                variant="compact"
                fadeInUp={fadeInUp}
              />
              
              {/* Footnote */}
              <motion.p 
                variants={fadeInUp}
                className="text-center text-taupe font-inter text-sm italic mt-4"
              >
                
                  For patients comparing non-surgical options, our<a href='/face/dermal-filler-malaysia/' className='font-bold text-wine italic'> dermal filler Malaysia </a> page covers the full range of HA filler treatments available at Nexus Clinic KL.
              </motion.p>
            </div>
          </section>
          
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Personalised Chin Filler Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects & Aftercare Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">What to expect and how to care for your results</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {[
                  "Mild swelling at injection site, resolving within 2-4 days",
                  "Light bruising, fading within 5-7 days",
                  "Tenderness or sensitivity for 24-48 hours",
                  "Mild redness immediately after, settling within hours",
                ].map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Rare Risks
              </h3>
              <ul className="space-y-2">
                {[
                  "Lumpiness or irregular texture if filler placed incorrectly",
                  "Infection at injection site, extremely rare with sterile technique",
                  "Allergic reaction to filler, very rare with HA products",
                  "Vascular occlusion, requires injector trained in complication management",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Avoid pressing, rubbing or massaging chin area for 48 hours",
                "Avoid sleeping face-down for first two nights",
                "Skip intense exercise for first 24 hours",
                "Stay away from saunas and heat exposure for 48 hours",
                "Avoid alcohol for first 24 hours",
                "No facial massages or skin treatments for two weeks",
                "Allow 5-7 days for filler to fully settle",
              ].map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema data={faqData} />
      
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
              Book Chin Filler Consultation at Nexus Clinic Kuala Lumpur Today
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              One consultation is all it takes to understand exactly what chin filler can do for your profile.
              No pressure. No upselling. Just a clinical assessment and an honest plan.
            </p>
            <p className="text-cream/90 font-inter">
              Over 5,000 procedures. Award-winning injectors. Results that look like you at your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for chin filler at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}