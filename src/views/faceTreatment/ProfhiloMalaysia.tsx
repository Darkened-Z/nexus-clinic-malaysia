"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Zap, Eye, ArrowUp, Droplets, Calendar, TrendingUp, Activity } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface ProfhiloMalaysiaProps {
  locale: string;
}

export default function ProfhiloMalaysia({ locale }: ProfhiloMalaysiaProps) {
  const treatmentOverview = [
    { icon: Syringe, label: "Treatment Type", value: "Injectable skin remodelling treatment using stabilised hyaluronic acid" },
    { icon: Activity, label: "Common Areas", value: "Face, neck, décolletage and hands" },
    { icon: Clock, label: "Session Time", value: "15 to 30 minutes" },
    { icon: Heart, label: "Downtime", value: "Minimal, return to normal routine same day" },
  ];

  const protocolInfo = [
    { label: "Recommended Protocol", value: "2 sessions, 4 weeks apart" },
    { label: "When Results Start", value: "Hydration first, firmness builds over weeks" },
    { label: "Longevity", value: "6 to 9 months" },
    { label: "Suitable For", value: "Dull skin, fine lines, crepey texture, early laxity, dehydration, loss of bounce" },
  ];

  const profhiloBenefits = [
    {
      title: "Dull Skin",
      description: "When skin loses hydration, it loses light reflection too. Profhilo helps improve moisture from within, which can make the skin look fresher and more radiant.",
      icon: Sparkles
    },
    {
      title: "Fine Lines",
      description: "Fine lines caused by dryness and thinning skin often become more visible with age. Profhilo is used to improve overall skin texture and softness, which can make these lines less obvious over time.",
      icon: Eye
    },
    {
      title: "Loss of Skin Firmness",
      description: "When the skin starts looking loose or less tight, especially on the cheeks, lower face or neck, Profhilo may help support firmer-looking skin through skin remodelling.",
      icon: TrendingUp
    },
    {
      title: "Crepey Skin",
      description: "Profhilo is widely used for skin that feels thin, fragile or crepey, especially on the face, neck and hands.",
      icon: Droplets
    },
    {
      title: "Early Ageing",
      description: "Some patients are not ready for filler or more advanced procedures. Profhilo is often chosen earlier, when the goal is prevention, hydration and skin quality maintenance.",
      icon: Calendar
    },
  ];

  const treatmentAreas = [
    { area: "Face", description: "For hydration, smoother texture and better skin quality" },
    { area: "Neck", description: "For thin, crepey or ageing skin" },
    { area: "Décolletage", description: "For fine lines and loss of smoothness" },
    { area: "Hands", description: "For ageing, dry or thinning skin" },
  ];

  const comparisonData = [
    {
      type: "Profhilo",
      concerns: "tired-looking skin, loss of glow, fine lines, thin or crepey skin, early skin laxity, poor skin texture",
      action: "Improves skin quality",
    },
    {
      type: "Filler",
      concerns: "sunken cheeks, lip volume, chin projection, jawline definition, structural contouring",
      action: "Changes volume and shape",
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Full Skin Assessment",
      desc: "Your doctor examines skin texture, hydration, elasticity and laxity. This matters because not every patient who asks for Profhilo is actually the right fit for it."
    },
    {
      step: "2",
      title: "Personalised Treatment Planning",
      desc: "The doctor confirms whether Profhilo should be used alone or combined with something else. If your concern is volume loss rather than skin quality, you will be told clearly before treatment starts."
    },
    {
      step: "3",
      title: "Injection Session",
      desc: "Profhilo is usually injected using specific points designed for safe and even spread. On the face, the common protocol is 5 injection points per side."
    },
    {
      step: "4",
      title: "Second Session",
      desc: "Most patients need a second session around 4 weeks later for the standard treatment course."
    },
    {
      step: "5",
      title: "Review",
      desc: "Your skin is reviewed over the following weeks as hydration and firmness continue to build."
    },
  ];

  const pricingTiers = [
    { treatment: "1 session", volume: "Per session", price: "RM 2,000 – RM 3,500" },
    { treatment: "Recommended 2-session course", volume: "Full protocol", price: "RM 4,000 – RM 7,000" },
    { treatment: "Neck / hands / add-on areas", volume: "Additional areas", price: "Priced separately" },
  ];

  const priceFactors = [
    "Number of sessions needed: Most patients start with 2 sessions",
    "Treatment area: Face, neck, hands and décolletage may be priced differently",
    "Doctor experience: More experienced injectors often charge more",
    "Authenticity of product: Real Profhilo from proper sources costs more than questionable alternatives",
    "Combination plans: Some patients combine Profhilo with other treatments for stronger results",
  ];

  const benefitsList = [
    "Improves skin hydration from within",
    "Helps skin look smoother, fresher and more radiant",
    "Supports firmer-looking skin over time",
    "Softens the look of fine lines caused by dryness and thinning skin",
    "Does not change facial shape",
    "Very natural-looking outcome",
    "Minimal downtime for most patients",
    "Suitable for face, neck, hands and other areas depending on assessment",
  ];

  const limitationsList = [
    "It is not a filler and does not replace lost facial volume",
    "It does not lift severe sagging skin",
    "Results are not instant in the same way filler is",
    "Most patients need 2 sessions for best results",
    "Maintenance is needed because results are not permanent",
    "It is not suitable for every patient or every skin concern",
  ];

  const sideEffects = {
    common: [
      "small raised bumps at injection points",
      "mild redness",
      "slight swelling",
      "light bruising",
      "tenderness for 1 to 3 days",
    ],
    rare: [
      "infection",
      "allergic or hypersensitivity reaction",
      "prolonged lumpiness",
      "vascular complications, which are uncommon but serious with injectable treatments and require proper medical management",
    ],
  };

  const aftercareInstructions = [
    "Do not press or massage the treated area unless your doctor tells you to",
    "Avoid intense exercise for 24 hours",
    "Avoid alcohol for the first 24 hours if possible",
    "Avoid sauna, steam and strong heat for 24 to 48 hours",
    "Do not schedule facials or aggressive skin treatments immediately after",
    "Give the treatment time to settle before judging the result",
  ];

  const faqData = [
    { q: "How much does Profhilo cost in Malaysia?", a: "Profhilo in Malaysia commonly falls around RM 2,000 to RM 3,500 per session, depending on clinic, area and doctor experience. A full 2-session course usually costs more overall." },
    { q: "How many Profhilo sessions do I need?", a: "Most patients start with 2 sessions about 4 weeks apart. Some later continue with maintenance based on how their skin responds." },
    { q: "How long does Profhilo last?", a: "Results commonly last around 6 to 9 months, though this varies from person to person." },
    { q: "Is Profhilo the same as filler?", a: "No. Profhilo is mainly used to improve skin quality, hydration and firmness. Filler is used to add volume and shape." },
    { q: "Is Profhilo painful?", a: "Most patients describe it as very manageable. You may feel brief stinging or pressure during the injections, but the procedure is quick." },
    { q: "When will I see results from Profhilo?", a: "Some patients notice better hydration and glow first. Firmer, smoother improvement usually builds over the next few weeks." },
    { q: "What age is best for Profhilo?", a: "There is no single best age. It is often chosen by adults who notice dullness, fine lines, dehydration or early skin laxity and want a natural improvement." },
    { q: "Can Profhilo lift sagging skin?", a: "Profhilo can improve skin quality and mild laxity, but it does not replace a true lifting treatment when sagging is more advanced." },
    { q: "Is there downtime after Profhilo?", a: "Downtime is usually minimal. Small bumps, redness or mild bruising can happen, but these are usually temporary." },
    { q: "Who is not suitable for Profhilo?", a: "Suitability should be decided by a doctor. In general, injectable treatments may be postponed or avoided in people with active skin infection, certain medical issues, pregnancy, or other factors that need assessment first." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Non-Surgical Skin Remodelling"
        title="Profhilo | Skin Hydration & Firmness Treatment"
        highlight="at Nexus Clinic KL"
        description="Improve skin hydration, firmness and glow with Profhilo in Malaysia. Nexus Clinic KL offers doctor-led Profhilo treatment for dull, thin and ageing skin."
        details="Your skin can look tired even when you are not. It starts to feel thinner. Fine lines show more easily. Makeup stops sitting well. The glow fades. Skin loses bounce, and no cream seems to fix it for long. That is usually the point where skincare alone is no longer enough."
        note="Profhilo is not a filler. It does not change your facial shape. It works by spreading under the skin to improve hydration, elasticity and overall skin texture."
        image="/images/face/Profhilo/Profhilo Malaysia.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Profhilo Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in Profhilo treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Skin Remodelling"
        floatingSubtitle="No filler • Natural glow"
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Profhilo Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know about this skin remodelling treatment</p>
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
              Speak to a Doctor About Profhilo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is Profhilo Section */}
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
                What Is Profhilo and <span className="text-wine italic">How It Works</span>
              </h2>
              <p className="text-brown font-inter">
                Profhilo is an injectable skin remodelling treatment made with high-purity hyaluronic acid. Unlike dermal filler, 
                it is not used to build cheeks, shape the chin or add volume to the lips. Instead, it spreads through the tissue 
                to improve hydration and support better skin quality.
              </p>
              <p className="text-brown font-inter">
                It is often described as a bio-remodelling treatment because the goal is not to fill a line, but to improve the 
                condition of the skin itself. Patients usually choose Profhilo when they feel their skin has become thin, tired, 
                loose or less fresh than before.
              </p>
              <p className="text-brown font-inter">
                One of the reasons Profhilo became so popular is that it treats skin quality in a very natural-looking way. 
                Skin still looks like your skin, just healthier, more hydrated and more refined.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">"Profhilo improves skin quality. Filler changes volume and shape."</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Profhilo/Profhilo Treatments.webp"
                  alt="Profhilo skin remodelling treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <Link className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                href="/contact-us/">
                Find Out If Profhilo Is Right for You
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Profhilo Helps Improve Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Profhilo Helps Improve</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">At Nexus Clinic KL, Profhilo is commonly used for patients who want skin improvement without adding facial volume</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {profhiloBenefits.map((item, idx) => (
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
              Book a Consultation to See If Profhilo Matches Your Skin Goals
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas Commonly Treated With Profhilo</h2>
            <p className="text-taupe font-inter">For the face, the treatment is commonly delivered using the BAP technique</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentAreas.map((area, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/20 text-center hover:shadow-md transition-shadow">
                <Droplet className="w-10 h-10 text-wine mx-auto mb-3" />
                <h3 className="font-georgia text-lg text-brown font-semibold mb-2">{area.area}</h3>
                <p className="text-taupe font-inter text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Profhilo vs Filler Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Why Patients Choose Profhilo Instead of Filler</h2>
            <p className="text-taupe font-inter">Profhilo and filler are not the same thing</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {comparisonData.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className={`rounded-2xl p-6 ${idx === 0 ? 'bg-wine/5 border border-wine/20' : 'bg-rose/5 border border-rose/20'} hover:shadow-xl transition-shadow`}
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">{item.type}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-inter font-semibold text-brown">Choose if your main concern is:</span>
                    <p className="text-taupe mt-1">{item.concerns}</p>
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-brown">What it does:</span>
                    <p className="text-taupe mt-1">{item.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 p-5 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter">
              Some patients need one. Some need both. The right answer depends on what is actually causing the concern.
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
                  src="/images/face/Profhilo/doctor-led.jpeg"
                  alt="Doctor-led Profhilo treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="space-y-6 order-1 md:order-2">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Nexus Clinic KL | <span className="text-wine italic">Doctor-Led Profhilo Treatment</span> in Malaysia
              </h2>
              <p className="text-brown font-inter">
                Many clinics offer Profhilo in Kuala Lumpur. The product matters, but the assessment and injection technique 
                matter just as much.
              </p>
              <p className="text-brown font-inter font-semibold">What separates Nexus Clinic KL from other clinics:</p>
              <ul className="space-y-2">
                {[
                  "Doctor-led assessment before treatment",
                  "Personalised plan based on your skin quality and degree of ageing",
                  "Focus on natural improvement, not over-treatment",
                  "Suitable treatment combinations discussed honestly when needed",
                  "Full aftercare guidance and follow-up support",
                  "Authentic product used in a clinical setting",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brown font-inter text-sm italic">
                Profhilo should never be treated like a quick beauty add-on. It works best when the right patient is selected, 
                the right protocol is used, and expectations are set properly from the start.
              </p>
              <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
                href="/contact-us/">
                Book Your Profhilo Consultation at Nexus Clinic KL
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Profhilo Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — safe, precise, and personalized</p>
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
              Book Your Profhilo Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">15-30 minute sessions at Nexus Clinic KL</p>
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
            title="Profhilo Cost in Malaysia"
            subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="font-georgia text-xl text-brown mb-3">Factors That Affect Your Profhilo Price</h3>
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
              At Nexus Clinic KL, your confirmed price is discussed before treatment begins. No pressure. No hidden charges.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Get Your Personalised Profhilo Quote
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
                Benefits of Profhilo
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
                Limitations of Profhilo
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
              This is why proper assessment matters. If the real issue is volume loss, hollowing or heaviness, another treatment may be more effective.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Profhilo Side Effects and Aftercare</h2>
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
                Rare Risks
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
            <h3 className="font-georgia text-xl text-brown mb-4">Profhilo Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">
              Most small injection-point bumps settle quickly. Skin improvement continues to develop over the following weeks.
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
              Book Profhilo in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If your skin looks dull, tired, thin or less firm than it used to, Profhilo may be the treatment that brings it back to life without changing your face.
            </p>
            <p className="text-cream/90 font-inter">
              No heavy look. No fake volume. No surgery. Just better skin quality, better hydration and a fresher version of you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Profhilo Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for Profhilo treatment at Nexus Clinic KL. Please let me know available slots."
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