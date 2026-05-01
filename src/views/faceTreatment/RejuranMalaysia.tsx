"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Zap, Eye, ArrowUp, Droplets, Calendar, TrendingUp, Activity, Leaf, Recycle, Award, Sparkle, Waves, Laugh, Smile, Scissors, Ban, Flower2 } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface RejuranMalaysiaProps {
  locale: string;
}

export default function RejuranMalaysia({ locale }: RejuranMalaysiaProps) {
  const treatmentOverview = [
    { icon: Syringe, label: "Treatment Type", value: "Polynucleotide-based regenerative skin treatment" },
    { icon: Activity, label: "Common Helps With", value: "Acne scars, enlarged pores, fine lines, rough texture" },
    { icon: Clock, label: "Session Time", value: "30 to 45 minutes" },
    { icon: Heart, label: "Downtime", value: "Low, temporary redness/swelling/bumps" },
  ];

  const protocolInfo = [
    { label: "Recommended Sessions", value: "3 sessions spaced 2-4 weeks apart" },
    { label: "When Results Start", value: "Improvements building over 2-4 weeks and beyond" },
    { label: "Maintenance", value: "Every 6 to 12 months" },
    { label: "Suitable For", value: "Acne scars, enlarged pores, fine lines, rough texture, dullness" },
  ];

  const rejuranBenefits = [
    {
      title: "Acne Scars",
      description: "Acne scars are one of the most common reasons patients look into Rejuran. Clinic and brochure materials consistently mention scars and acne-scarred skin among the concerns Rejuran can help improve.",
      icon: Sparkle
    },
    {
      title: "Enlarged Pores",
      description: "Large pores are regularly mentioned in Rejuran education material. As skin quality and elasticity improve, pore appearance may also improve, particularly when large pores are linked to weaker or damaged skin.",
      icon: Waves
    },
    {
      title: "Fine Lines and Early Ageing",
      description: "Public brochures describe Rejuran as helping improve fine wrinkles and skin elasticity by supporting collagen secretion and recovery of damaged skin.",
      icon: Eye
    },
    {
      title: "Rough or Dull Skin",
      description: "When the skin surface looks tired, uneven or less refined, Rejuran is commonly positioned as helping improve texture, hydration and glow.",
      icon: Droplets
    },
    {
      title: "Under-Eye Skin Quality",
      description: "Some clinics specifically position Rejuran for fragile under-eye skin and dark, tired-looking eye areas. Under-eye suitability should always be assessed carefully.",
      icon: Eye
    },
    {
      title: "Skin Barrier and Recovery",
      description: "Rejuran is widely described as a treatment that helps the skin recover and repair from within, marketed as a skin healer rather than simply an anti-ageing injectable.",
      icon: Shield
    },
  ];

  const treatmentAreas = [
    { area: "Full Face", description: "Skin texture, fine lines, pores and overall quality" },
    { area: "Acne Scar Areas", description: "Regenerative support for scarred skin" },
    { area: "Under-Eye Skin", description: "Selected protocols for fragile skin" },
    { area: "Targeted Areas", description: "Rough, damaged or ageing skin" },
  ];

  const comparisonData = [
    {
      type: "Rejuran",
      concerns: "acne scars, enlarged pores, fine lines, rough texture, dullness, thinning skin, under-eye quality",
      action: "Regenerative skin healing from within",
    },
    {
      type: "Filler",
      concerns: "lip volume, cheek projection, chin enhancement, jawline contour, visible same-day change",
      action: "Adds volume and creates shape",
    },
    {
      type: "Simple Skin Booster",
      concerns: "light hydration, mild glow support, very early maintenance",
      action: "Adds hydration",
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Full Skin Assessment",
      desc: "Your doctor reviews skin texture, scarring, pore pattern, fine lines, under-eye quality and overall damage."
    },
    {
      step: "2",
      title: "Personalised Treatment Plan",
      desc: "Doctor decides if Rejuran is suitable, which type is best, and how many sessions are likely needed."
    },
    {
      step: "3",
      title: "Injection Session",
      desc: "Rejuran is injected into targeted skin areas using a controlled technique. Fits into a normal clinic visit."
    },
    {
      step: "4",
      title: "Early Recovery",
      desc: "Temporary redness, swelling, tenderness, small bumps or bruising may occur but are usually short-lived."
    },
    {
      step: "5",
      title: "Gradual Improvement",
      desc: "Smoother hydration shows earlier; benefits in elasticity, fine lines and pores build over weeks."
    },
    {
      step: "6",
      title: "Maintenance",
      desc: "Maintenance sessions commonly every 6 to 12 months depending on patient and skin condition."
    },
  ];

  const pricingTiers = [
    { treatment: "Single Rejuran session", volume: "Per session", price: "RM 600 – RM 1,200" },
    { treatment: "Eye-area or scar-focused variants", volume: "Per session", price: "Priced based on product type" },
    { treatment: "Course of 3 sessions", volume: "Full protocol", price: "Package savings available" },
  ];

  const priceFactors = [
    "Product type used, because standard Rejuran, scar-focused versions and eye-area versions may be priced differently",
    "Number of sessions needed, since Rejuran is commonly done as a course rather than a single session",
    "Area treated, because full-face treatment is different from small targeted zones",
    "Clinic and injector experience, which often affects pricing in aesthetic treatments",
    "Whether treatment is charged per syringe or as a flat area-based procedure",
  ];

  const benefitsList = [
    "Improvement in skin elasticity and fine wrinkles",
    "Support for collagen-related skin recovery and extracellular matrix restoration",
    "Smoother skin texture and healthier overall skin quality",
    "Reduction in the appearance of scars, including acne scars",
    "Improvement in enlarged pores and rough skin appearance",
    "More natural-looking improvement because the focus is skin repair rather than obvious contour change",
  ];

  const limitationsList = [
    "It is not a classic filler for lips, chin or strong contouring",
    "It usually works best as a course of treatment, not as a single quick fix",
    "Results are gradual, so patients expecting instant dramatic change may be disappointed",
    "Maintenance is commonly needed after the initial course",
    "It is best for skin quality concerns, not every kind of volume loss or sagging",
  ];

  const sideEffects = {
    common: [
      "mild redness",
      "slight swelling",
      "tenderness",
      "small bumps at injection sites",
      "light bruising",
    ],
    rare: [
      "infection (general injection-related risk)",
      "lumps (general injection-related risk)",
      "vascular complications (general injection-related risk)",
    ],
  };

  const aftercareInstructions = [
    "Avoid rubbing or pressing the treated area unless your doctor advises otherwise",
    "Avoid intense exercise for the first 24 hours",
    "Avoid sauna, steam and strong heat exposure right after treatment",
    "Avoid alcohol for the first day if possible",
    "Follow your doctor's skincare and recovery advice closely",
    "Allow the treatment course time to work before judging final results",
  ];

  const faqData = [
    { q: "What is Rejuran treatment?", a: "Rejuran is a polynucleotide-based injectable skin rejuvenation treatment commonly used to improve skin quality, pores, scars, fine lines and overall skin recovery. It is usually positioned as a skin healer or regenerative treatment rather than a contouring filler." },
    { q: "Is Rejuran a filler?", a: "Not in the usual shaping sense. Rejuran is better described as a regenerative skin treatment. Its main role is improving skin quality rather than creating facial volume or contour." },
    { q: "How much does Rejuran cost in Malaysia?", a: "Malaysia clinic guidance suggests that a single Rejuran session in Kuala Lumpur commonly falls around RM 600 to RM 1,200, though price can vary by clinic, doctor, product type and syringe use." },
    { q: "How many Rejuran sessions do I need?", a: "A course of around 3 sessions, usually spaced 2 to 4 weeks apart, is commonly described in public Rejuran treatment materials, followed by maintenance later on." },
    { q: "When will I see Rejuran results?", a: "Early smoothness and hydration changes may be noticed sooner, while improvements in elasticity, pores and fine lines are commonly described as becoming clearer over 2 to 4 weeks and beyond." },
    { q: "What does Rejuran help with?", a: "Rejuran is commonly used for acne scars, enlarged pores, fine lines, rough texture, dull skin, under-eye skin quality and overall skin recovery." },
    { q: "Is Rejuran good for acne scars?", a: "Yes, acne scars are one of the most commonly mentioned uses for Rejuran across clinic and brochure materials." },
    { q: "Is there downtime after Rejuran?", a: "Downtime is usually mild, but temporary redness, swelling, tenderness, bumps or bruising can occur after treatment." },
    { q: "How long does Rejuran last?", a: "Rejuran is commonly done as an initial series, followed by maintenance every 6 to 12 months depending on the patient and skin condition." },
    { q: "Is Rejuran the same as Plinest or Profhilo?", a: "No. They are different injectable categories with different compositions and treatment goals. Rejuran is positioned around polynucleotide-based skin healing and regeneration." },
    { q: "Who is suitable for Rejuran?", a: "Rejuran is generally most suitable for patients whose main concern is poor skin quality, acne scars, pores, early ageing or texture damage rather than major contour loss. Final suitability should always be decided after consultation." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Polynucleotide Skin Healing"
        title="Best Rejuran | Polynucleotide Skin Healing Treatment"
        highlight="at Nexus Clinic KL"
        description="Improve skin texture, pores, acne scars and fine lines with Rejuran in Malaysia. Nexus Clinic KL offers doctor-led Rejuran treatment for smoother, healthier and more youthful-looking skin."
        details="Your skin can look tired even when your face still looks young. The pores appear larger. Acne scars stay visible. Fine lines start showing more clearly. The skin feels thinner, rougher and less fresh than before. Sometimes the problem is not volume loss. It is the condition of the skin itself."
        note="Rejuran is a polynucleotide-based injectable treatment that helps stimulate skin repair, collagen support, elasticity improvement and better overall texture."
        image="/images/face/Rejuran/Rejuran Treatment Malaysia.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Rejuran Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in Rejuran treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Skin Healing"
        floatingSubtitle="Regenerative • Natural • Effective"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Treatment at a Glance Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Rejuran Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know about this polynucleotide skin healing treatment</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {treatmentOverview.map((item, idx) => (
              <div key={idx} className="bg-light p-5 rounded-xl border border-taupe/10 shadow-sm">
                <item.icon className="w-8 h-8 text-wine mb-3" />
                <p className="font-inter text-sm text-taupe">{item.label}</p>
                <p className="font-georgia text-md text-brown font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 rounded-2xl p-6 border border-wine/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {protocolInfo.map((item, idx) => (
                <div key={idx}>
                  <p className="font-inter text-sm text-taupe">{item.label}</p>
                  <p className="font-georgia text-brown font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Speak to a Doctor About Rejuran
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is Rejuran Section */}
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
                What Is Rejuran and <span className="text-wine italic">How It Works</span>
              </h2>
              <p className="text-brown font-inter">
                Rejuran is best understood as a skin-healing and regenerative injectable, not a standard filler. It contains 
                polynucleotides that are described in clinic and brochure materials as supporting the skin's self-repair processes, 
                restoring extracellular matrix support and encouraging collagen-related improvement in damaged or ageing skin.
              </p>
              <p className="text-brown font-inter">
                That difference matters. A filler creates shape or direct volume. Rejuran is chosen when the bigger problem is 
                poor skin condition. The goal is not mainly to make the face larger or sharper. The goal is to help the skin 
                become smoother, stronger, more elastic and healthier-looking over time.
              </p>
              <p className="text-brown font-inter">
                This is one reason Rejuran has become popular for people who feel their skin quality has declined even when 
                they do not actually need filler. Acne-scarred skin, pore-prone skin, fragile under-eye tissue and early ageing 
                skin are all concerns where regenerative improvement can matter more than added volume.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">"Rejuran helps the skin become smoother, stronger, more elastic and healthier-looking over time."</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Rejuran/rejuran areas treated.webp"
                  alt="Rejuran polynucleotide skin healing treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <Link className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                href="/contact-us/">
                Find Out If Rejuran Is Right for You
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Rejuran Helps Improve Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Rejuran Helps Improve</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">At Nexus Clinic KL, Rejuran is most relevant for patients whose main issue is skin quality</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {rejuranBenefits.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl shadow-md border border-taupe/10 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-xl text-brown mb-3">{item.title}</h3>
                <p className="text-taupe font-inter">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Book a Consultation to See If Rejuran Matches Your Skin Goals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Areas Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas Commonly Treated With Rejuran</h2>
            <p className="text-taupe font-inter">Skin quality improvement across multiple zones</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentAreas.map((area, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/20 text-center hover:shadow-md transition-shadow">
                <Flower2 className="w-10 h-10 text-wine mx-auto mb-3" />
                <h3 className="font-georgia text-lg text-brown font-semibold mb-2">{area.area}</h3>
                <p className="text-taupe font-inter text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              <span className="font-semibold">Note:</span> The exact product type and injection method can vary, because Rejuran has different versions that clinics may use for broader skin quality, scar-focused areas or the eye area.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Rejuran vs Filler vs Skin Booster Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Rejuran vs Filler vs Skin Booster</h2>
            <p className="text-taupe font-inter">Understanding the difference</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {comparisonData.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className={`rounded-2xl p-6 ${
                  idx === 0 ? 'bg-wine/5 border border-wine/20' : 
                  idx === 1 ? 'bg-rose/5 border border-rose/20' : 
                  'bg-gold/5 border border-gold/20'
                } hover:shadow-xl transition-shadow`}
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">{item.type}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-inter font-semibold text-brown">Choose if your main concern is:</span>
                    <p className="text-taupe mt-1 text-sm">{item.concerns}</p>
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-brown">What it does:</span>
                    <p className="text-taupe mt-1 text-sm">{item.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 p-5 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter">
              Rejuran is better positioned for people who want the skin itself to behave better and look healthier over time. 
              That distinction is strongly reflected in the way clinics and brochures describe it as a skin healer or regenerative 
              injectable rather than a contouring product.
            </p>
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
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/doctor-led.jpeg"
                  alt="Doctor-led Rejuran treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="space-y-6 order-1 md:order-2">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Nexus Clinic KL | <span className="text-wine italic">Doctor-Led Rejuran Treatment</span> in Malaysia
              </h2>
              <p className="text-brown font-inter">
                Many clinics in Kuala Lumpur now offer Rejuran, but regenerative injectables still depend heavily on diagnosis, 
                technique and patient selection. Not every patient with tired-looking skin needs Rejuran.
              </p>
              <p className="text-brown font-inter font-semibold">What separates Nexus Clinic KL from other clinics:</p>
              <ul className="space-y-2">
                {[
                  "Doctor-led consultation before treatment",
                  "Proper assessment of whether Rejuran is the right fit",
                  "Personalized planning based on skin quality, scarring and ageing pattern",
                  "Natural-looking improvement rather than over-treatment",
                  "Full aftercare support and maintenance guidance",
                  "Authentic product used in a proper clinical environment",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
                href="/contact-us/">
                Book Your Rejuran Consultation at Nexus Clinic KL
                <ArrowRight className="w-4 h-4" />
              </Link>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Rejuran Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — regenerative skin healing</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {procedureSteps.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-md text-brown mb-2 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2"
              href="/contact-us/">
              Book Your Rejuran Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">30-45 minute sessions at Nexus Clinic KL</p>
          </motion.div>
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
          <TableForPages
            columns={[
              { key: "treatment", header: "Treatment" },
              { key: "volume", header: "Protocol" },
              { key: "price", header: "Price Range (2026)" },
            ]}
            data={pricingTiers.map(tier => ({
              treatment: tier.treatment,
              volume: tier.volume,
              price: tier.price,
            }))}
            title="Rejuran Cost in Malaysia"
            subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="font-georgia text-xl text-brown mb-3">Factors That Affect Your Rejuran Price</h3>
            <ul className="space-y-2">
              {priceFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <span className="text-wine">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              At Nexus Clinic KL, pricing should always be explained clearly before treatment starts. No hidden charges. No rushed upselling.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Get Your Personalised Rejuran Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits & Limitations Section */}
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
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Gem className="w-5 h-5 text-wine" />
                Benefits of Rejuran
              </h3>
              <ul className="space-y-2">
                {benefitsList.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Limitations of Rejuran
              </h3>
              <ul className="space-y-2">
                {limitationsList.map((limitation, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <span className="text-wine text-lg">⚠️</span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              This is why proper consultation matters. A trendy injectable is never enough on its own. The treatment has to match the problem.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects & Aftercare Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Rejuran Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">Temporary, rare and usually mild</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {sideEffects.common.map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Important Notes on Risk
              </h3>
              <ul className="space-y-2">
                {sideEffects.rare.map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <span className="text-wine text-lg">⚠️</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
              <p className="text-taupe font-inter text-xs mt-3 italic">
                Because Rejuran is an injectable treatment, broader injection-related risks still matter in principle.
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">Rejuran Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">
              Aftercare should always follow the treating doctor's advice.
            </p>
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
              Book Rejuran in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If your skin looks porous, scarred, rough, tired or less healthy than before, Rejuran may be the treatment that helps rebuild smoother, stronger and more refined skin from within.
            </p>
            <p className="text-cream/90 font-inter">
              No heavy filler look. No fake change. No unnecessary volume. Just better skin quality, better recovery and a fresher version of your skin that still looks like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Rejuran Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for Rejuran treatment at Nexus Clinic KL. Please let me know available slots."
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