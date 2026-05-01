"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Zap, Eye, ArrowUp, Droplets, Calendar, TrendingUp, Activity, Leaf, Recycle, Award, Sparkle } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface KarismaMalaysiaProps {
  locale: string;
}

export default function KarismaMalaysia({ locale }: KarismaMalaysiaProps) {
  const treatmentOverview = [
    { icon: Syringe, label: "Treatment Type", value: "Injectable collagen-based skin rejuvenation treatment" },
    { icon: Activity, label: "Common Concerns", value: "Fine lines, reduced elasticity, skin laxity, dullness" },
    { icon: Clock, label: "Session Time", value: "20 to 30 minutes" },
    { icon: Heart, label: "Downtime", value: "Minimal, mild redness or swelling short-lived" },
  ];

  const protocolInfo = [
    { label: "Recommended Sessions", value: "2 sessions, 1 month apart" },
    { label: "When Results Start", value: "Visible improvement from around a few weeks" },
    { label: "Maintenance", value: "Every 6 to 9 months" },
    { label: "Suitable For", value: "Loss of firmness, fine lines, reduced elasticity, skin ageing" },
  ];

  const karismaBenefits = [
    {
      title: "Fine Lines",
      description: "Official and clinic sources describe Karisma as helpful for flattening fine lines and smoothing skin texture with repeated treatment.",
      icon: Eye
    },
    {
      title: "Skin Firmness",
      description: "Official product information says Karisma helps restore firmness and structure to the skin and is used against skin laxity.",
      icon: TrendingUp
    },
    {
      title: "Reduced Elasticity",
      description: "Malaysia clinic pages describe Karisma as improving density, elasticity and overall skin resilience.",
      icon: Activity
    },
    {
      title: "Dull, Tired Skin",
      description: "Clinic and official pages position Karisma as a skin quality treatment that supports a fresher, more rejuvenated appearance.",
      icon: Sparkle
    },
    {
      title: "Acne Scars or Uneven Texture",
      description: "Some clinic sources also market Karisma for light acne scars, stretch marks and uneven skin texture.",
      icon: Droplets
    },
  ];

  const treatmentAreas = [
    { area: "Face", description: "Firmness, elasticity and fine lines" },
    { area: "Neck", description: "Thinning or ageing skin" },
    { area: "Hands", description: "Rejuvenation plans" },
    { area: "Selected Textural Concerns", description: "Light acne scars, depending on assessment" },
  ];

  const comparisonData = [
    {
      type: "Karisma",
      concerns: "weaker skin structure, fine lines, reduced elasticity, mild skin laxity, dull ageing skin, natural rejuvenation without obvious volume",
      action: "Collagen-supporting bio-restorative injectable",
    },
    {
      type: "Filler",
      concerns: "lip volume, cheek projection, chin shaping, jawline definition, deeper direct contour correction",
      action: "Adds volume and creates shape",
    },
    {
      type: "Hydration Skin Booster",
      concerns: "glow, dryness, mild skin freshness",
      action: "Adds hydration",
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Full Skin Assessment",
      desc: "Your doctor reviews your skin quality, firmness, elasticity, texture and degree of ageing."
    },
    {
      step: "2",
      title: "Personalised Treatment Plan",
      desc: "Common protocol is 2 sessions about 1 month apart, depending on your skin and goals."
    },
    {
      step: "3",
      title: "Injection Session",
      desc: "Karisma is injected into targeted areas to support skin rejuvenation and collagen response. 20-30 minutes."
    },
    {
      step: "4",
      title: "Recovery and Skin Response",
      desc: "Mild swelling or redness may happen shortly after injection, downtime is minimal."
    },
    {
      step: "5",
      title: "Repeat Session and Maintenance",
      desc: "Repeat the 2-session course every 6 to 9 months for ongoing results."
    },
  ];

  const pricingTiers = [
    { treatment: "Per session", volume: "Single session", price: "Price varies by clinic, treatment area and plan" },
    { treatment: "Recommended course", volume: "2 sessions, 1 month apart", price: "Confirmed after consultation" },
    { treatment: "Maintenance", volume: "Every 6-9 months", price: "Depends on skin condition and goals" },
  ];

  const priceFactors = [
    "Number of sessions needed",
    "Treatment area",
    "Doctor experience",
    "Product authenticity",
    "Whether Karisma is used alone or as part of a broader rejuvenation plan",
  ];

  const benefitsList = [
    "Helps improve skin firmness and structure over time",
    "Supports better elasticity and denser-looking skin",
    "Can smooth fine lines and improve texture",
    "Designed for natural-looking rejuvenation rather than heavy volume",
    "Often described as highly biocompatible with strong similarity to natural human collagen",
    "Minimal downtime in most clinic descriptions",
  ];

  const limitationsList = [
    "It is not a classic shaping filler for lips, chin or sharp contouring",
    "Results are gradual, not instant",
    "Usually requires more than 1 session for best results",
    "Maintenance is often needed every 6 to 9 months according to clinic protocols",
    "It is best for skin quality and collagen support, not every type of volume loss",
  ];

  const sideEffects = {
    common: [
      "mild redness",
      "slight swelling",
      "brief tenderness at injection points",
    ],
    rare: [
      "bruising",
      "infection",
      "lumps (general injection-related risks)",
    ],
  };

  const aftercareInstructions = [
    "Avoid rubbing or pressing the treated area unless your doctor advises otherwise",
    "Avoid intense exercise for 24 hours",
    "Avoid heat exposure, sauna and steam for the first day",
    "Avoid alcohol for 24 hours if possible",
    "Follow your clinic's aftercare closely",
    "Give the skin time to respond before judging the final result",
  ];

  const faqData = [
    { q: "What is Karisma treatment?", a: "Karisma is generally described as a collagen-focused injectable skin rejuvenation treatment, often called Karisma Rh Collagen, designed to improve firmness, elasticity, texture and overall skin quality." },
    { q: "Is Karisma a filler?", a: "It is often described as a bio-restorative soft filler, but it is positioned differently from standard volumising fillers because its main goal is skin restoration and collagen support rather than obvious shape change." },
    { q: "How many Karisma sessions are needed?", a: "A common clinic recommendation is 2 sessions, 1 month apart, with repeat treatment every 6 to 9 months depending on your skin and goals." },
    { q: "How long does Karisma last?", a: "Clinic guidance commonly suggests repeating treatment every 6 to 9 months. Official marketing also describes results as long-lasting, though the exact duration varies." },
    { q: "What does Karisma help with?", a: "It is commonly used for fine lines, firmness, elasticity, skin texture, dullness and mild skin laxity. Some clinics also mention scars and stretch marks." },
    { q: "Is there downtime after Karisma?", a: "Most clinic descriptions say downtime is minimal, with only mild redness or swelling that usually settles quickly." },
    { q: "Is Karisma the same as Profhilo?", a: "No. Based on product descriptions, Karisma is more collagen-focused and bio-restorative, while Profhilo is usually positioned more as a hyaluronic-acid skin remodelling treatment." },
    { q: "Is Karisma suitable for everyone?", a: "Suitability should be decided after a medical consultation, especially because different skin concerns may be better treated with filler, skin boosters, collagen stimulators or other procedures." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Collagen Skin Booster"
        title="Karisma | Collagen Skin Booster Treatment"
        highlight="at Nexus Clinic Kuala Lumpur"
        description="Improve skin firmness, elasticity and glow with Karisma in Malaysia. Nexus Clinic KL offers doctor-led Karisma Rh Collagen treatment for natural skin rejuvenation."
        details="Your skin can start changing before people notice it. It looks thinner. Less firm. Less bright. Fine lines stay longer. The face loses that fresh, healthy look even when you are sleeping well and using good skincare. That is usually the point where surface products stop being enough."
        note="Karisma Rh Collagen is a collagen-focused injectable treatment that helps improve skin quality, firmness, elasticity and texture by supporting collagen renewal."
        image="/images/face/Karisma/Karsima Malaysia.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Karisma Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in Karisma treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Collagen Renewal"
        floatingSubtitle="Natural • Gradual • Bio-restorative"
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Karisma Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know about this collagen skin booster</p>
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
              Speak to a Doctor About Karisma
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is Karisma Section */}
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
                What Is Karisma and <span className="text-wine italic">How It Works</span>
              </h2>
              <p className="text-brown font-inter">
                Karisma is not a classic hyaluronic acid filler used mainly for shaping lips, cheeks or chin. It is generally 
                marketed as a collagen-stimulating, skin-restoring injectable designed to improve the quality of the skin itself.
              </p>
              <p className="text-brown font-inter">
                Official product information says Karisma FACE Rh Collagen promotes production of type I collagen in fibroblasts 
                and helps improve firmness and structure with gradual, visible improvement.
              </p>
              <p className="text-brown font-inter">
                Its formula is described as a combination of recombinant collagen-related polypeptide technology, high molecular 
                weight hyaluronic acid and carboxymethyl cellulose. This combination is intended to fight skin laxity, support 
                tightening and improve tissue quality over time.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">"Karisma helps restore firmness and structure to the skin without obvious filler volume."</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Karisma/Karisma Treatment KL.webp"
                  alt="Karisma collagen skin booster treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <Link className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                href="/contact-us/">
                Find Out If Karisma Is Right for You
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Karisma Helps Improve Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Karisma Helps Improve</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Natural rejuvenation without heavy volume or obvious treated look</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {karismaBenefits.map((item, idx) => (
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
              Book a Consultation to See If Karisma Matches Your Skin Goals
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas Commonly Treated With Karisma</h2>
            <p className="text-taupe font-inter">Facial skin rejuvenation and more</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentAreas.map((area, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/20 text-center hover:shadow-md transition-shadow">
                <Award className="w-10 h-10 text-wine mx-auto mb-3" />
                <h3 className="font-georgia text-lg text-brown font-semibold mb-2">{area.area}</h3>
                <p className="text-taupe font-inter text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Karisma vs Filler vs Skin Booster Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Karisma vs Filler vs Skin Booster</h2>
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
              Karisma is better positioned as a collagen-supporting bio-restorative injectable that aims to improve the skin itself, 
              not just add water or create shape.
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
                  src="/images/face/Karisma/Skin Booster Treatment.webp"
                  alt="Doctor-led Karisma treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="space-y-6 order-1 md:order-2">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Nexus Clinic KL | <span className="text-wine italic">Doctor-Led Karisma Treatment</span> in Malaysia
              </h2>
              <p className="text-brown font-inter">
                Many clinics now offer Karisma in Malaysia, but the product alone is not the whole treatment. The result still 
                depends on assessment, injection technique and whether the patient's concern is actually skin quality, collagen 
                loss or something else.
              </p>
              <p className="text-brown font-inter font-semibold">What separates Nexus Clinic KL from other clinics:</p>
              <ul className="space-y-2">
                {[
                  "Doctor-led consultation before treatment",
                  "Treatment planning based on skin quality and ageing pattern",
                  "Natural improvement rather than overcorrection",
                  "Clear explanation of expected sessions and maintenance",
                  "Full aftercare support",
                  "Authentic product used in a proper clinical setting",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
                href="/contact-us/">
                Book Your Karisma Consultation at Nexus Clinic KL
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Karisma Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — collagen-focused skin rejuvenation</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
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
              Book Your Karisma Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">20-30 minute sessions at Nexus Clinic KL</p>
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
            title="Karisma Cost in Malaysia"
            subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="font-georgia text-xl text-brown mb-3">Factors That Affect Your Karisma Price</h3>
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
              Final pricing is confirmed after consultation based on your skin condition, treatment area and doctor recommendation.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Get Your Personalised Karisma Quote
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
                Benefits of Karisma
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
                Limitations of Karisma
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Karisma Side Effects and Aftercare</h2>
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
                Possible Injectable Risks
              </h3>
              <ul className="space-y-2">
                {sideEffects.rare.map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <span className="text-wine text-lg">⚠️</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">Karisma Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">
              The minimal downtime and short-lived redness/swelling is supported by clinic guidance.
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
              Book Karisma in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If your skin looks thinner, duller, less firm or less youthful than before, Karisma may be the treatment that helps bring back stronger, healthier-looking skin in a natural way.
            </p>
            <p className="text-cream/90 font-inter">
              No heavy look. No obvious overfilling. No harsh change. Just better skin quality, better support and a fresher version of you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Karisma Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for Karisma treatment at Nexus Clinic KL. Please let me know available slots."
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