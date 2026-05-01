"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Zap, Eye, ArrowUp, Droplets, Calendar, TrendingUp, Activity, Leaf, Recycle, Award } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface SculptraMalaysiaProps {
  locale: string;
}

export default function SculptraMalaysia({ locale }: SculptraMalaysiaProps) {
  const treatmentOverview = [
    { icon: Syringe, label: "Treatment Type", value: "Collagen-stimulating injectable made with poly-L-lactic acid (PLLA)" },
    { icon: Activity, label: "Common Areas", value: "Cheek region, smile lines, marionette lines" },
    { icon: Clock, label: "Session Time", value: "30 to 45 minutes" },
    { icon: Heart, label: "Downtime", value: "Minimal, mild swelling and redness temporary" },
  ];

  const protocolInfo = [
    { label: "Recommended Sessions", value: "2 to 3 sessions spaced several weeks apart" },
    { label: "When Results Start", value: "Gradual improvement from around 1 month" },
    { label: "Longevity", value: "Up to 2 years" },
    { label: "Suitable For", value: "Age-related volume loss, flatter cheeks, smile lines, thinning skin" },
  ];

  const sculptraBenefits = [
    {
      title: "Sunken or Flatter Cheeks",
      description: "As cheek support reduces with age, the face can start looking tired or less lifted. Treatment in the cheek region can help restore collagen, improve skin quality and help tighten skin along the cheeks and jawline.",
      icon: Eye
    },
    {
      title: "Smile Lines",
      description: "Sculptra is indicated for correction of shallow to deep nasolabial fold contour deficiencies, making it relevant for patients whose smile lines are linked to deeper structural loss rather than just surface creasing.",
      icon: Sparkles
    },
    {
      title: "Marionette Lines",
      description: "When the lower face starts losing support, lines that run downward from the corners of the mouth can become more noticeable. Sculptra is commonly used in full-face rejuvenation plans.",
      icon: TrendingUp
    },
    {
      title: "Skin That Looks Thinner or Less Firm",
      description: "Sculptra is chosen by patients who feel their skin looks weaker, less firm or less fresh. The official brand positioning highlights improved skin quality, glow and firmness.",
      icon: Droplets
    },
    {
      title: "Natural Ageing Correction",
      description: "Patients who do not want the look of 'done' filler often prefer Sculptra because change happens gradually as collagen rebuilds, making the outcome look more like natural improvement.",
      icon: Leaf
    },
  ];

  const treatmentAreas = [
    { area: "Cheeks", description: "Restore volume and lift to sunken or flattened cheeks" },
    { area: "Smile Lines", description: "Correct nasolabial fold contour deficiencies" },
    { area: "Marionette Lines", description: "Soften downward lines from mouth corners" },
    { area: "Full Face", description: "Broader collagen support and rejuvenation" },
  ];

  const comparisonData = [
    {
      type: "Sculptra",
      concerns: "collagen loss, flatter cheeks, early facial hollowing, softening jawline, tired-looking face, natural results that build slowly",
      action: "Stimulates collagen production gradually",
    },
    {
      type: "Filler",
      concerns: "immediate lip volume, instant cheek projection, chin shaping, jawline definition in one session, quick correction of specific hollows",
      action: "Places volume directly into the area",
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Full Facial Assessment",
      desc: "Your doctor reviews facial volume loss, collagen decline, skin quality and structural support. Not every tired face needs Sculptra."
    },
    {
      step: "2",
      title: "Personalised Treatment Plan",
      desc: "Based on correction needed, vials required, and whether treatment should be staged. Multiple sessions are common."
    },
    {
      step: "3",
      title: "Injection Session",
      desc: "Product injected into selected facial areas by a trained medical professional. Takes 30 to 45 minutes."
    },
    {
      step: "4",
      title: "Gradual Collagen Response",
      desc: "Unlike filler, results don't show on the same day. Improvement develops progressively as collagen rebuilds."
    },
    {
      step: "5",
      title: "Follow-Up and Repeat Sessions",
      desc: "Most patients need 2 to 3 sessions for a fuller collagen-building result, spaced weeks apart."
    },
  ];

  const pricingTiers = [
    { treatment: "1 vial", volume: "Single session", price: "RM 2,500 – RM 3,200" },
    { treatment: "2 vials", volume: "Standard protocol", price: "RM 5,000 – RM 6,400" },
    { treatment: "3-session plan", volume: "Full treatment course", price: "RM 7,500 – RM 9,000+" },
  ];

  const priceFactors = [
    "Number of vials needed: Patients with greater collagen loss usually need more product",
    "Number of sessions: Many patients need 2 to 3 sessions rather than just one",
    "Area and treatment complexity: Broader full-face correction costs more than a smaller plan",
    "Doctor experience: Experienced injectors often charge more",
    "Authenticity and proper handling of product: Extremely cheap pricing should be treated carefully",
  ];

  const benefitsList = [
    "Stimulates your own natural collagen production rather than only adding temporary direct volume",
    "Helps improve skin quality, firmness and overall facial support over time",
    "Results are gradual and natural-looking rather than suddenly obvious",
    "Can improve the appearance of wrinkles and contour deficiencies linked to collagen loss",
    "Results may last up to 2 years according to the official brand information",
    "Often suitable for patients who want longer-term structural rejuvenation",
  ];

  const limitationsList = [
    "It is not an instant-result treatment",
    "Most patients need more than one session for best results",
    "It is not designed like a lip filler or under-eye filler",
    "It requires correct technique and trained injectors because it has unique injection requirements",
    "It should not be overdone because improvement is meant to build gradually",
    "Patients prone to keloids or hypertrophic scarring may not be suitable",
  ];

  const sideEffects = {
    common: [
      "swelling",
      "redness",
      "tenderness",
      "bruising",
      "mild pain",
      "itching",
      "temporary lumps at injection points",
    ],
    rare: [
      "delayed nodules or larger lumps",
      "vascular complications if injected into blood vessels",
      "inflammation",
      "infection if injected through compromised skin",
      "unsuitable reactions in patients with certain scarring tendencies",
    ],
  };

  const aftercareInstructions = [
    "Avoid pressing or massaging the treated area unless your doctor specifically instructs you to",
    "Avoid intense exercise for the first 24 hours",
    "Avoid alcohol for the first day if possible",
    "Avoid strong heat exposure, sauna or steam for the first 24 to 48 hours",
    "Follow your doctor's aftercare guidance closely because Sculptra protocols can differ from standard filler",
    "Allow time for collagen rebuilding before judging the final result",
  ];

  const faqData = [
    { q: "How much does Sculptra cost in Malaysia?", a: "Public clinic pricing in Malaysia commonly places Sculptra at about RM 2,500 to RM 3,200 per vial, with total treatment cost depending on how many vials and sessions are needed." },
    { q: "How many Sculptra sessions do I need?", a: "Many patients need 2 to 3 sessions, often spaced several weeks apart, depending on the level of collagen loss and the treatment goal." },
    { q: "How long does Sculptra last?", a: "The official Sculptra site says results can last up to 2 years." },
    { q: "Is Sculptra the same as filler?", a: "No. Standard filler usually gives direct immediate volume. Sculptra works by stimulating collagen gradually over time." },
    { q: "Is Sculptra painful?", a: "Most patients describe it as manageable. A treatment session is usually fairly quick, often around 30 to 45 minutes." },
    { q: "When will I see results from Sculptra?", a: "Results are gradual. The official site says results may be seen as early as 1 month after treatment." },
    { q: "Is Sculptra better than filler?", a: "Neither is automatically better. Sculptra is better for collagen rebuilding and gradual structural improvement. Filler is better when immediate shape or volume correction is needed." },
    { q: "Who is not suitable for Sculptra?", a: "According to official safety information, Sculptra should not be used by people allergic to its ingredients or with a history of keloid formation or hypertrophic scarring. Safety has also not been established in people who are pregnant, breastfeeding, lactating, or under 18." },
    { q: "Can Sculptra be used under the eyes or in the lips?", a: "The official safety information says Sculptra should not be injected into the red area of the lip or in the peri-orbital area." },
    { q: "Is Sculptra safe in Malaysia?", a: "Sculptra can be safe when used by a trained licensed practitioner following correct injection technique and safety protocols. The official brand information stresses that it has unique injection requirements." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Collagen-Stimulating Treatment"
        title="Sculptra | Collagen-Stimulating Treatment"
        highlight="at Nexus Clinic Kuala Lumpur"
        description="Restore facial volume and improve skin firmness with Sculptra in Malaysia. Nexus Clinic KL offers doctor-led Sculptra treatment for natural, gradual, long-lasting results."
        details="Your face rarely changes all at once. It happens slowly. The cheeks flatten. The skin looks thinner. Smile lines stay longer. The jawline softens. You still look like yourself, but a more tired version. Most people try to fix this with skincare, facials or regular fillers. Sometimes that helps. Sometimes it does not. That is because the issue is no longer just hydration or surface texture. It is collagen loss."
        note="Sculptra is not a standard filler. It is a poly-L-lactic acid (PLLA) biostimulatory injectable that works by stimulating your own natural collagen production over time."
        image="/images/face/Sculptra/sculptra malaysia.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Sculptra Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in Sculptra treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Collagen Rebuilding"
        floatingSubtitle="Gradual • Natural • Long-lasting"
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Sculptra Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know about this collagen-stimulating treatment</p>
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
              Speak to a Doctor About Sculptra
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is Sculptra Section */}
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
                What Is Sculptra and <span className="text-wine italic">How It Works</span>
              </h2>
              <p className="text-brown font-inter">
                Sculptra is a collagen biostimulator. That means it does not work like a normal hyaluronic acid filler 
                that gives immediate visible volume. Instead, it is injected beneath the skin to stimulate your body's 
                natural collagen production over time.
              </p>
              <p className="text-brown font-inter">
                As collagen builds, the skin and facial structure can look firmer, smoother and less hollow. This is what 
                makes Sculptra different. It is not mainly about instant change. It is about rebuilding what ageing slowly reduced.
              </p>
              <p className="text-brown font-inter">
                Sculptra is especially popular for facial ageing linked to collagen loss. The official Sculptra site describes it 
                as the first and original FDA-approved PLLA facial injectable that targets fine lines, wrinkles, sagging and 
                other visible signs of ageing due to collagen loss.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">"Sculptra works by stimulating collagen. Filler works by placing volume directly into the area."</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Sculptra/areas treated with sculptr.webp"
                  alt="Sculptra collagen-stimulating treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <Link className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                href="/contact-us/">
                Find Out If Sculptra Is Right for You
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Sculptra Helps Improve Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Sculptra Helps Improve</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">At Nexus Clinic KL, Sculptra is generally suited for patients who need structural support and collagen restoration</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {sculptraBenefits.map((item, idx) => (
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
              Book a Consultation to See If Sculptra Matches Your Goals
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas Commonly Treated With Sculptra</h2>
            <p className="text-taupe font-inter">Facial areas affected by collagen loss and structural ageing</p>
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
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              <span className="font-semibold">Note:</span> Sculptra should not be injected into the red part of the lip or the peri-orbital area according to official safety information.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Sculptra vs Filler Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Why Patients Choose Sculptra Instead of Regular Filler</h2>
            <p className="text-taupe font-inter">Sculptra and filler are not the same treatment</p>
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
              Some patients are better suited for one. Some need a combination plan. The right answer depends on whether the issue 
              is true collagen loss, structural hollowing, shape deficiency, or all three.
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
                  src="/images/face/Sculptra/dr-led.jpeg"
                  alt="Doctor-led Sculptra treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="space-y-6 order-1 md:order-2">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Nexus Clinic KL | <span className="text-wine italic">Doctor-Led Sculptra Treatment</span> in Malaysia
              </h2>
              <p className="text-brown font-inter">
                Many clinics offer Sculptra in Kuala Lumpur, but Sculptra is not a treatment that should be done casually. 
                The official safety information states that it has unique injection requirements and should only be used by 
                a trained healthcare practitioner.
              </p>
              <p className="text-brown font-inter font-semibold">What separates Nexus Clinic KL from other clinics:</p>
              <ul className="space-y-2">
                {[
                  "Doctor-led consultation before treatment",
                  "Careful patient selection based on collagen loss and facial structure",
                  "Natural approach focused on gradual improvement",
                  "Clear treatment planning around vials, sessions and realistic expectations",
                  "Proper aftercare guidance and follow-up support",
                  "Authentic product used in a clinical setting",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brown font-inter text-sm italic">
                Sculptra gives the best results when the injector understands where support has been lost, how much collagen 
                rebuilding is realistically needed, and how to pace treatment correctly.
              </p>
              <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
                href="/contact-us/">
                Book Your Sculptra Consultation at Nexus Clinic KL
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Sculptra Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — gradual collagen rebuilding</p>
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
              Book Your Sculptra Appointment
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
            title="Sculptra Cost in Malaysia"
            subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="font-georgia text-xl text-brown mb-3">Factors That Affect Your Sculptra Price</h3>
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
              At Nexus Clinic KL, pricing is discussed before treatment begins. No hidden charges. No pressure to proceed.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Get Your Personalised Sculptra Quote
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
                Benefits of Sculptra
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
                Limitations of Sculptra
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
              This is why a proper consultation matters. Sculptra is a strong treatment, but only when it matches the actual problem.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Sculptra Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">Temporary, rare and important to explain properly</p>
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
                Rare or More Serious Risks
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
            <h3 className="font-georgia text-xl text-brown mb-4">Sculptra Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">
              Because Sculptra is a gradual collagen treatment, the best results are judged over weeks and months, not just the first few days.
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
              Book Sculptra in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If your face looks flatter, thinner, less supported or more tired than before, Sculptra may help rebuild what ageing slowly reduced.
            </p>
            <p className="text-cream/90 font-inter">
              No fake fullness. No sudden overfilled look. No rushed correction. Just gradual collagen support, softer structure, and a fresher face that still looks like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Sculptra Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for Sculptra treatment at Nexus Clinic KL. Please let me know available slots."
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