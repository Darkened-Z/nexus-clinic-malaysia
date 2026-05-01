"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Eye, ArrowUp, Droplets, Calendar, TrendingUp, Activity, Leaf, Award, Waves, Sun, Wind } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface NewestMalaysiaProps {
  locale: string;
}

export default function NewestMalaysia({ locale }: NewestMalaysiaProps) {
  const treatmentOverview = [
    { icon: Syringe, label: "Treatment Type", value: "PN-HPT polynucleotide skin booster with hyaluronic acid" },
    { icon: Activity, label: "Common Helps With", value: "Hydration, elasticity, radiance, collagen support, regeneration" },
    { icon: Clock, label: "Session Time", value: "20 to 45 minutes" },
    { icon: Heart, label: "Downtime", value: "Low, mild temporary redness or swelling" },
  ];

  const protocolInfo = [
    { label: "Recommended Sessions", value: "3 to 4 sessions" },
    { label: "Results Duration", value: "Up to 12 months" },
    { label: "Common Areas", value: "Face, neck, décolleté, under-eyes, hands" },
    { label: "Suitable For", value: "Dull skin, dehydration, reduced elasticity, early ageing" },
  ];

  const newestBenefits = [
    {
      title: "Dehydrated Skin",
      description: "Malaysia clinic sources specifically highlight hyaluronic acid within NEWEST as a reason it supports better hydration, plumper texture and improved moisture retention.",
      icon: Droplets
    },
    {
      title: "Reduced Elasticity",
      description: "Reduced elasticity is one of the most repeated treatment themes across NEWEST clinic pages. The treatment restores rigidity and elasticity while supporting fibroblast activity.",
      icon: TrendingUp
    },
    {
      title: "Dull and Tired-Looking Skin",
      description: "Glowing, radiant, brighter-looking skin is a repeated theme. When skin loses radiance, NEWEST helps improve that overall look.",
      icon: Sun
    },
    {
      title: "Early Ageing and Fine Texture",
      description: "Positioned for reversing visible signs of ageing from within through bio-revitalisation and collagen support for thinner, finer-lined skin.",
      icon: Leaf
    },
    {
      title: "Fragile or Ageing-Prone Areas",
      description: "Specifically used in delicate areas such as the neck, décolleté, under-eyes and hands for broader skin-quality treatment.",
      icon: Wind
    },
  ];

  const treatmentAreas = [
    { area: "Face", description: "Hydration, glow, elasticity and general rejuvenation" },
    { area: "Neck", description: "Thinner, ageing or less elastic skin" },
    { area: "Under-Eyes", description: "Selected rejuvenation plans" },
    { area: "Hands", description: "Ageing-prone thinner skin" },
    { area: "Décolleté", description: "Crepey or sun-damaged-looking texture" },
  ];

  const comparisonData = [
    {
      type: "NEWEST",
      concerns: "dehydration, dull skin, reduced elasticity, weaker skin quality, early ageing, crepey skin, natural improvement",
      action: "Regenerative PN + hydrating HA support",
    },
    {
      type: "Filler",
      concerns: "lip volume, cheek projection, chin enhancement, jawline definition, immediate structural change",
      action: "Adds volume and creates shape",
    },
    {
      type: "Simple Skin Booster",
      concerns: "mild hydration, early maintenance, lighter treatment approach",
      action: "Adds basic hydration",
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Full Skin Assessment",
      desc: "Doctor reviews skin hydration, elasticity, texture, radiance and treatment history."
    },
    {
      step: "2",
      title: "Personalised Treatment Plan",
      desc: "Doctor decides if NEWEST is suitable and how many sessions are needed."
    },
    {
      step: "3",
      title: "Injection Session",
      desc: "NEWEST injected into planned areas using intradermal skin-booster technique."
    },
    {
      step: "4",
      title: "Early Recovery",
      desc: "Mild temporary redness, swelling or small bumps may occur."
    },
    {
      step: "5",
      title: "Gradual Improvement",
      desc: "Hydration and glow appear earlier; elasticity builds over treatment course."
    },
    {
      step: "6",
      title: "Maintenance",
      desc: "Maintenance recommended based on age, skin quality and response."
    },
  ];

  const pricingTiers = [
    { treatment: "Per session", volume: "Single session", price: "Price varies by clinic and treatment area" },
    { treatment: "Recommended treatment course", volume: "3 to 4 sessions", price: "Confirmed after consultation" },
    { treatment: "Maintenance", volume: "Based on skin response", price: "Discussed during follow-up" },
  ];

  const priceFactors = [
    "Number of sessions needed, since treatment is commonly described as a course rather than a one-off session",
    "Area treated, because face-only treatment is different from adding neck, under-eyes, hands or décolleté",
    "Amount of product used and the complexity of the injection plan",
    "Injector's experience and the clinic setting",
    "Whether NEWEST is used alone or as part of a broader rejuvenation plan",
  ];

  const benefitsList = [
    "Improved hydration and plumper-looking skin texture",
    "Better skin elasticity and restored skin rigidity",
    "Fibroblast and collagen stimulation for healthier tissue support",
    "Brighter, more radiant and healthier-looking skin",
    "Support for bio-revitalisation and repair of damaged skin",
    "Natural-looking improvement without obvious heavy filler volume",
  ];

  const limitationsList = [
    "It is not a classic contouring filler for lips, chin or dramatic facial reshaping",
    "It usually works best as a course of sessions, not as a one-time quick fix",
    "Results are likely to be gradual, especially for regeneration and elasticity improvement",
    "Maintenance may be required depending on age, skin condition and goals",
    "It is best for skin quality, hydration and resilience, not for every form of volume loss",
  ];

  const sideEffects = {
    common: [
      "mild redness",
      "slight swelling",
      "temporary tenderness",
      "small bumps at the injection points",
      "light bruising in some patients",
    ],
    rare: [
      "infection (general injection-related risk)",
      "lumps (general injection-related risk)",
      "vascular complications (general injection-related risk)",
    ],
  };

  const aftercareInstructions = [
    "Avoid rubbing or pressing the treated area unless advised",
    "Avoid intense exercise for the first 24 hours",
    "Avoid sauna, steam and strong heat exposure right after treatment",
    "Avoid alcohol for the first day if possible",
    "Keep follow-up appointments if a full treatment course is planned",
    "Allow time for the treatment to work before judging the final result",
  ];

  const faqData = [
    { q: "What is NEWEST treatment?", a: "NEWEST is described by multiple Malaysia clinic sources as a polynucleotide injectable skin booster from Mastelli that supports hydration, elasticity, fibroblast activity, collagen stimulation and overall skin rejuvenation." },
    { q: "Is NEWEST a filler?", a: "Not in the usual contouring sense. NEWEST is better positioned as a regenerative and hydrating skin-quality treatment rather than a product used mainly for shaping lips, cheeks, chin or jawline." },
    { q: "What is the difference between NEWEST and Plinest?", a: "Malaysia clinic sources commonly present both as Mastelli polynucleotide treatments, but NEWEST is frequently described as having an added hydration-focused element through hyaluronic acid, while Plinest is positioned more around pure regenerative repair." },
    { q: "How many NEWEST sessions do I need?", a: "A Malaysia clinic summary lists NEWEST as commonly done in 3 to 4 sessions, though the exact plan depends on the area treated and your skin condition." },
    { q: "How long do NEWEST results last?", a: "One Malaysia clinic source describes results lasting up to 12 months, but actual duration depends on the treatment course, maintenance plan and patient factors." },
    { q: "What does NEWEST help with?", a: "NEWEST is commonly positioned for hydration, elasticity, radiance, skin quality, collagen support, regeneration and ageing-prone fragile skin areas." },
    { q: "Is NEWEST good for under-eyes and neck?", a: "Malaysia clinic sources do list under-eyes, neck, hands and décolleté among the commonly treated areas, but final suitability should always be assessed by the doctor." },
    { q: "Is there downtime after NEWEST?", a: "Downtime is generally expected to be low, though mild temporary redness, swelling, tenderness or small bumps can happen after injection." },
    { q: "Is NEWEST the same as Rejuran or Profhilo?", a: "No. They are different injectable categories and formulations, even though they may overlap in the broader skin-rejuvenation space." },
    { q: "Who is suitable for NEWEST?", a: "NEWEST is generally more suitable for patients whose main concern is poor hydration, dullness, reduced elasticity, early skin ageing or weaker skin quality rather than major contour change. Final suitability should always be confirmed during consultation." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Polynucleotide Skin Booster"
        title="NEWEST Malaysia | Polynucleotide Skin Booster Treatment"
        highlight="at Nexus Clinic KL"
        description="Improve skin hydration, elasticity, glow and overall skin quality with NEWEST in Malaysia. Nexus Clinic KL offers doctor-led NEWEST polynucleotide treatment for smoother, firmer and healthier-looking skin."
        details="Your skin can start feeling different long before it looks obviously old. It becomes drier, thinner and less elastic. Fine lines stay longer. Makeup stops sitting smoothly. The glow fades, and the skin begins to look flat, tired or slightly crepey even when you are taking care of it properly. That is usually the point where skincare alone stops giving enough support."
        note="NEWEST is a PN-HPT injectable skin booster that supports fibroblast activity, collagen renewal, hydration and elasticity, enhanced with hyaluronic acid for stronger hydration and plumper skin texture."
        image="/images/face/Newest/Newest Treatment malaysia.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - NEWEST Skin Booster Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in NEWEST skin booster at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Hydration + Regeneration"
        floatingSubtitle="Natural glow • Long-lasting"
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">NEWEST Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know about this polynucleotide skin booster</p>
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
              Speak to a Doctor About NEWEST
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is NEWEST Section */}
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
                What Is NEWEST and <span className="text-wine italic">How It Works</span>
              </h2>
              <p className="text-brown font-inter">
                NEWEST is best understood as a polynucleotide-based skin rejuvenation injectable designed to improve overall 
                skin health rather than simply add direct volume. Malaysia clinic sources repeatedly describe it as a PN-HPT 
                treatment that helps restore skin rigidity, elasticity and radiance by improving skin health from within.
              </p>
              <p className="text-brown font-inter">
                What makes NEWEST stand out from basic hydration injectables is that it is often described as combining the 
                regenerative role of polynucleotides with the moisturising and plumping effect of hyaluronic acid. This 
                combination supports deep hydration, tissue repair, firmer texture and better elasticity.
              </p>
              <p className="text-brown font-inter">
                In practical terms, this means NEWEST is usually chosen when the skin itself looks like the problem. The 
                patient may not need bigger cheeks or a sharper jawline. Instead, the skin may need better hydration, 
                stronger support, smoother texture and improved resilience.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">"NEWEST combines regenerative polynucleotides with hydrating hyaluronic acid for comprehensive skin rejuvenation."</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Newest/areas for newest.webp"
                  alt="NEWEST polynucleotide skin booster treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
              <Link className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                href="/contact-us/">
                Find Out If NEWEST Is Right for You
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What NEWEST Helps Improve Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What NEWEST Helps Improve</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">At Nexus Clinic KL, NEWEST is most relevant for patients whose concern is skin quality</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {newestBenefits.map((item, idx) => (
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
              Book a Consultation to See If NEWEST Matches Your Skin Goals
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas Commonly Treated With NEWEST</h2>
            <p className="text-taupe font-inter">Skin quality improvement across multiple zones</p>
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {treatmentAreas.map((area, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-4 rounded-xl border border-taupe/20 text-center hover:shadow-md transition-shadow">
                <Award className="w-8 h-8 text-wine mx-auto mb-2" />
                <h3 className="font-georgia text-md text-brown font-semibold mb-1">{area.area}</h3>
                <p className="text-taupe font-inter text-xs">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* NEWEST vs Filler vs Skin Booster Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">NEWEST vs Filler vs Skin Booster</h2>
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
              NEWEST combines regenerative PN support with hydration-focused HA support, giving it a position between classic 
              polynucleotide repair and obvious hydrating skin boosters.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The NEWEST Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — regenerative skin hydration</p>
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
              Book Your NEWEST Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">20-45 minute sessions at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-cream">
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
            title="NEWEST Cost in Malaysia"
            subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="font-georgia text-xl text-brown mb-3">Factors That Affect Your NEWEST Price</h3>
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
              Get Your Personalised NEWEST Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits & Limitations Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Gem className="w-5 h-5 text-wine" />
                Benefits of NEWEST
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
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Limitations of NEWEST
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
              A treatment can be excellent and still be the wrong choice if it does not match the real problem. This is why consultation matters.
            </p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">NEWEST Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">Temporary, rare and usually mild</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
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
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
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
                Because NEWEST is an injectable treatment, broader injection-related risks still matter in principle.
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">NEWEST Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">
              Aftercare should always follow the treating doctor's exact advice.
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
              Book NEWEST in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If your skin looks dry, dull, weaker or less elastic than before, NEWEST may be the treatment that helps bring back a fresher, more hydrated and healthier-looking version of your skin from within.
            </p>
            <p className="text-cream/90 font-inter">
              No heavy filler look. No fake change. No unnecessary volume. Just better skin quality, stronger hydration support and a more refined result that still looks like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free NEWEST Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for NEWEST skin booster at Nexus Clinic KL. Please let me know available slots."
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