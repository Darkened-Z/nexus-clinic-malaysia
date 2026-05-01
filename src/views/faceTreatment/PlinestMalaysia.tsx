"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Zap, Eye, ArrowUp, Droplets, Calendar, TrendingUp, Activity, Leaf, Recycle, Award, Sparkle, Waves, Laugh, Smile } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface PlinestMalaysiaProps {
  locale: string;
}

export default function PlinestMalaysia({ locale }: PlinestMalaysiaProps) {
  const treatmentOverview = [
    { icon: Syringe, label: "Treatment Type", value: "Polynucleotide-based injectable treatment" },
    { icon: Activity, label: "Common Uses", value: "Skin texture, fine lines, hydration, elasticity, acne scars" },
    { icon: Clock, label: "Session Time", value: "30 to 45 minutes" },
    { icon: Heart, label: "Downtime", value: "Low, mild swelling/redness temporary" },
  ];

  const protocolInfo = [
    { label: "Recommended Sessions", value: "3 to 4 sessions spaced 2-3 weeks apart" },
    { label: "When Results Start", value: "Visible improvement over 2 to 8 weeks" },
    { label: "Maintenance", value: "Around 6 to 9 months" },
    { label: "Suitable For", value: "Fine lines, dullness, dehydration, reduced elasticity, acne scars" },
  ];

  const plinestBenefits = [
    {
      title: "Fine Lines and Early Ageing",
      description: "Published clinic guidance describes Plinest and polynucleotide treatments as helping smooth fine lines and wrinkles by supporting regeneration, hydration and collagen activity.",
      icon: Eye
    },
    {
      title: "Dehydrated and Dull Skin",
      description: "Plinest is regularly positioned as a treatment that improves hydration and restores radiance, supporting more luminous skin and a firmer texture.",
      icon: Droplets
    },
    {
      title: "Loss of Elasticity and Crepey Skin",
      description: "Multiple clinic sources describe polynucleotides as useful where there is loss of elasticity, crepiness and weaker tissue quality.",
      icon: TrendingUp
    },
    {
      title: "Acne Scars and Rough Texture",
      description: "The 2024 review on polynucleotides for Asian skin regeneration identifies acne scars and rough texture-related concerns among treated indications.",
      icon: Sparkle
    },
    {
      title: "Under-Eye Skin Quality",
      description: "Some clinic sources specifically mention fragile under-eye tissue, dark circles and hollowness among areas polynucleotide treatments can target.",
      icon: Eye
    },
    {
      title: "Pores and Skin Surface Quality",
      description: "The Asian skin regeneration review mentions enlarged pores among main indications described in clinical use of polynucleotides.",
      icon: Waves
    },
  ];

  const treatmentAreas = [
    { area: "Face", description: "Texture, hydration, elasticity and fine lines" },
    { area: "Under-Eye Area", description: "Fragile or tired-looking skin" },
    { area: "Neck", description: "Thinner, ageing skin" },
    { area: "Targeted Areas", description: "Acne scarring or poor texture" },
  ];

  const comparisonData = [
    {
      type: "Plinest",
      concerns: "weakened skin quality, fine lines, dullness, dehydration, early loss of elasticity, acne scars, fragile under-eye skin",
      action: "Regenerative polynucleotide treatment for the skin itself",
    },
    {
      type: "Filler",
      concerns: "lip volume, cheek projection, chin enhancement, jawline contour, immediate structural change",
      action: "Adds volume and creates shape",
    },
    {
      type: "Simple Skin Booster",
      concerns: "light hydration support, mild glow improvement, very early maintenance",
      action: "Adds hydration",
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Full Skin Assessment",
      desc: "Your doctor reviews skin texture, hydration, elasticity, pore quality, fine lines, acne marks and tissue weakness."
    },
    {
      step: "2",
      title: "Personalised Treatment Plan",
      desc: "Doctor decides if Plinest is the right fit and how many sessions are likely useful based on your skin condition."
    },
    {
      step: "3",
      title: "Injection Session",
      desc: "Plinest is placed through superficial injections into planned treatment areas. 30-45 minutes with topical anaesthetic."
    },
    {
      step: "4",
      title: "Early Recovery",
      desc: "Mild swelling, redness, tenderness or slight bruising may occur depending on area treated."
    },
    {
      step: "5",
      title: "Gradual Skin Improvement",
      desc: "Improvement builds over time with visible changes developing over roughly 2 to 8 weeks."
    },
    {
      step: "6",
      title: "Maintenance",
      desc: "Maintenance may be advised after initial course, typically around 6 to 9 months."
    },
  ];

  const pricingTiers = [
    { treatment: "Per syringe / per session", volume: "Single session", price: "RM 1,800 – RM 2,500" },
    { treatment: "Broader market range", volume: "Per session", price: "RM 1,500 – RM 3,500" },
    { treatment: "Course of multiple sessions", volume: "Full protocol", price: "Priced based on recommended sessions" },
  ];

  const priceFactors = [
    "Number of sessions required, because regenerative protocols commonly involve a course rather than a one-off treatment",
    "Treatment area, since a full-face plan is different from a more focused under-eye or scar protocol",
    "Number of syringes used, which directly affects total product cost",
    "Clinic and doctor experience, which varies across providers and influences public price bands",
    "Whether Plinest is used alone or in combination with another rejuvenation plan",
  ];

  const benefitsList = [
    "Improved skin hydration and moisture balance",
    "Better elasticity and stronger-looking skin quality",
    "Softer fine lines and a smoother skin surface",
    "Improvement in rough texture and acne scarring in suitable patients",
    "Support for tissue repair and regeneration rather than only superficial plumping",
    "Natural-looking improvement that develops over time rather than an obvious instant filler look",
  ];

  const limitationsList = [
    "It is not a classic shaping filler for lips, chin or dramatic contouring",
    "It usually works best as a course of treatment, not a single quick fix",
    "Results are gradual, so patients wanting an immediate transformation may need a different treatment plan",
    "Maintenance is often required to preserve results over time",
    "The final outcome depends on skin condition, age, area treated and treatment consistency",
  ];

  const sideEffects = {
    common: [
      "mild redness at the injection sites",
      "slight swelling",
      "tenderness",
      "light bruising",
      "temporary sensitivity in the treated area",
    ],
    rare: [
      "infection (general injection-related risk)",
      "lumps (general injection-related risk)",
      "vascular issues (general injection-related risk)",
    ],
  };

  const aftercareInstructions = [
    "Avoid rubbing or pressing the treated area unless your doctor advises otherwise",
    "Avoid intense exercise for the first 24 hours",
    "Avoid sauna, steam and strong heat exposure right after treatment",
    "Avoid alcohol for the first day if possible",
    "Follow your post-treatment skincare advice carefully",
    "Allow time for the treatment course to work before judging the final outcome",
  ];

  const faqData = [
    { q: "What is Plinest treatment?", a: "Plinest is a polynucleotide-based injectable treatment within Mastelli's aesthetic medicine range, commonly positioned for skin regeneration, hydration, elasticity and overall skin quality improvement." },
    { q: "Is Plinest a filler?", a: "Not in the usual contouring sense. Plinest is generally positioned more as a regenerative skin treatment than a classic volumising filler. It focuses more on tissue support and skin quality than on reshaping facial features." },
    { q: "How much does Plinest cost in Malaysia?", a: "Public clinic examples in Malaysia place Plinest around RM 1,800 to RM 2,500 per syringe or session, with broader market listings ranging roughly from RM 1,500 to RM 3,500 per session depending on the clinic and treatment area." },
    { q: "How many Plinest sessions do I need?", a: "Protocols vary. Mastelli's ageing-skin fact sheet describes 4 sessions every 1 to 2 weeks, while clinic guidance often uses 3 to 4 sessions spaced 2 to 3 weeks apart." },
    { q: "When will I see Plinest results?", a: "Visible improvement usually develops gradually rather than instantly. Clinic education sources describe improvements building over about 2 to 8 weeks, with more noticeable results after a full course." },
    { q: "What does Plinest help with?", a: "Plinest is commonly used for fine lines, dullness, dehydration, reduced elasticity, rough texture, enlarged pores, acne scars and fragile under-eye skin quality." },
    { q: "Is Plinest good for acne scars?", a: "Published review and clinic sources suggest polynucleotides, including Plinest-based treatments, are used for acne scars and textural improvement in appropriate patients." },
    { q: "Is there downtime after Plinest?", a: "Downtime is usually limited, but mild swelling, redness, tenderness or bruising may happen temporarily after injections." },
    { q: "How long does Plinest last?", a: "Plinest is often done as a course, followed by maintenance, with some clinic guidance mentioning maintenance at around 6 to 9 months." },
    { q: "Is Plinest the same as Profhilo or Nucleofill?", a: "No. They are different injectable categories and formulations. Plinest is positioned around polynucleotide-based regeneration, while other products are framed differently depending on their composition and intended effect." },
    { q: "Who is suitable for Plinest?", a: "Plinest is generally more suitable for patients whose main concern is skin quality, fine lines, dehydration, early ageing, reduced elasticity or textural damage, rather than those wanting major contour changes. Final suitability should always be decided after consultation." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Polynucleotide Skin Rejuvenation"
        title="Best Plinest | Polynucleotide Skin Rejuvenation"
        highlight="at Nexus Clinic KL"
        description="Improve skin texture, hydration, elasticity and overall skin quality with Plinest in Malaysia. Nexus Clinic KL offers doctor-led Plinest polynucleotide treatment for natural skin rejuvenation."
        details="Your skin does not suddenly become dull, thin or tired overnight. It happens little by little. The glow becomes harder to maintain. Fine lines begin to show more clearly. The skin starts feeling weaker, less elastic and less fresh. Pores may look rougher. Old acne marks stay longer. That is often the point where regenerative injectables become more relevant."
        note="Plinest is a polynucleotide-based treatment that supports hydration, tissue repair, collagen response and better skin quality over time."
        image="/images/face/Plinest/Plinest Treatment Malaysia.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Plinest Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in Plinest treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Polynucleotide Regeneration"
        floatingSubtitle="Natural • Gradual • Restorative"
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Plinest Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know about this polynucleotide regenerative treatment</p>
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
              Speak to a Doctor About Plinest
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is Plinest Section */}
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
                What Is Plinest and <span className="text-wine italic">How It Works</span>
              </h2>
              <p className="text-brown font-inter">
                Plinest is generally positioned as a polynucleotide regenerative treatment rather than a standard dermal filler. 
                In simple terms, it is used to support better-quality skin by helping the tissue recover, hydrate and function 
                more effectively.
              </p>
              <p className="text-brown font-inter">
                Polynucleotides are commonly described in the literature as regenerative molecules that support fibroblast activity, 
                tissue repair and the skin environment. The 2024 review focused on Asian skin regeneration reports that ageing and 
                dry skin, big pores, skin laxity and acne scars were among the main treatment indications.
              </p>
              <p className="text-brown font-inter">
                Plinest is therefore best understood as a treatment for skin quality. It is not mainly about changing the shape 
                of your face. It is more about helping the skin look stronger, smoother, fresher and more elastic over time.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">"Plinest helps the skin look stronger, smoother, fresher and more elastic over time."</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Plinest/Areas treated with plinest.webp"
                  alt="Plinest polynucleotide skin rejuvenation treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <Link className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                href="/contact-us/">
                Find Out If Plinest Is Right for You
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Plinest Helps Improve Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Plinest Helps Improve</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Regenerative treatment approach for healthier-looking skin</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {plinestBenefits.map((item, idx) => (
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
              Book a Consultation to See If Plinest Matches Your Skin Goals
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas Commonly Treated With Plinest</h2>
            <p className="text-taupe font-inter">Facial rejuvenation and targeted skin improvement</p>
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

      {/* Plinest vs Filler vs Skin Booster Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Plinest vs Filler vs Skin Booster</h2>
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
              Plinest is better positioned as a regenerative polynucleotide treatment for the skin itself. It is chosen when the 
              goal is not just plumping, but improvement in the tissue environment, elasticity, hydration and surface quality.
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
                  alt="Doctor-led Plinest treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="space-y-6 order-1 md:order-2">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Nexus Clinic KL | <span className="text-wine italic">Doctor-Led Plinest Treatment</span> in Malaysia
              </h2>
              <p className="text-brown font-inter">
                Many clinics now offer Plinest in Malaysia, but injectable regenerative treatments still depend heavily on 
                assessment, patient selection and technique. The product alone does not decide the result.
              </p>
              <p className="text-brown font-inter font-semibold">What separates Nexus Clinic KL from other clinics:</p>
              <ul className="space-y-2">
                {[
                  "Doctor-led consultation before treatment",
                  "Proper evaluation of whether your concern is best treated with Plinest, filler, Profhilo, Sculptra or another option",
                  "Personalised treatment planning based on skin quality and regenerative goals",
                  "Natural-looking improvement rather than over-treatment",
                  "Full aftercare support and clear maintenance planning",
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
                Book Your Plinest Consultation at Nexus Clinic KL
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Plinest Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — regenerative skin rejuvenation</p>
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
              Book Your Plinest Appointment
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
            title="Plinest Cost in Malaysia"
            subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="font-georgia text-xl text-brown mb-3">Factors That Affect Your Plinest Price</h3>
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
              At Nexus Clinic KL, pricing should always be explained clearly before treatment begins. No hidden charges. No rushed decisions.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Get Your Personalised Plinest Quote
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
                Benefits of Plinest
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
                Limitations of Plinest
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
              This is why proper consultation matters. A good treatment plan is always more important than chasing a trendy injectable.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Plinest Side Effects and Aftercare</h2>
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
                Because Plinest is an injectable treatment, general injection-related risks still matter in principle.
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">Plinest Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">
              Aftercare guidance should always follow the treating doctor's instructions.
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
              Book Plinest in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If your skin looks dull, weaker, less elastic or more textured than before, Plinest may be the treatment that helps rebuild a fresher and healthier-looking version of your skin.
            </p>
            <p className="text-cream/90 font-inter">
              No heavy filler look. No fake change. No unnecessary volume. Just better skin quality, stronger tissue support and a more refined result that still looks like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Plinest Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for Plinest treatment at Nexus Clinic KL. Please let me know available slots."
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