"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Zap, Eye, ArrowUp, Droplets, Calendar, TrendingUp, Activity, Leaf, Recycle, Award, Sparkle, Waves, Laugh, Smile, Scissors, Ban, Flower2, Sun, Moon, Thermometer, Wind, DropletIcon, Filter, Brush, Paintbrush } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface ChemicalPeelMalaysiaProps {
  locale: string;
}

export default function ChemicalPeelMalaysia({ locale }: ChemicalPeelMalaysiaProps) {
  const treatmentOverview = [
    { icon: Brush, label: "Treatment Type", value: "Skin-resurfacing using chemical solution" },
    { icon: Activity, label: "Common Concerns", value: "Acne, dull skin, pigmentation, fine lines, rough texture" },
    { icon: Clock, label: "Session Time", value: "20 to 30 minutes (light peels)" },
    { icon: Heart, label: "Downtime", value: "Light: mild flaking | Deep: longer recovery" },
  ];

  const protocolInfo = [
    { label: "Recommended Sessions", value: "Light peels often as a series" },
    { label: "When Results Start", value: "Once peeling settles" },
    { label: "Peel Depths", value: "Light, medium and deep" },
    { label: "Suitable For", value: "Dull skin, acne, post-acne marks, uneven tone, fine lines" },
  ];

  const peelBenefits = [
    {
      title: "Acne and Congested Skin",
      description: "Light chemical peels can help with acne and clogged pores by exfoliating the outer layer and improving skin turnover.",
      icon: Filter
    },
    {
      title: "Post-Acne Marks",
      description: "Peels are often used to improve uneven pigmentation and post-inflammatory marks left behind after acne.",
      icon: Sparkle
    },
    {
      title: "Dull Skin",
      description: "When the surface of the skin builds up with dead skin cells, the complexion can look flat and tired. A peel helps remove that outer layer so skin looks fresher and healthier.",
      icon: Sun
    },
    {
      title: "Uneven Skin Tone",
      description: "Pigmentation and patchy skin tone are common reasons patients choose superficial or medium peels.",
      icon: Droplet
    },
    {
      title: "Fine Lines and Rough Texture",
      description: "Light peels may help fine wrinkling and rough skin texture. More intensive peels may be used for more chronic sun damage.",
      icon: Waves
    },
  ];

  const peelTypes = [
    { 
      type: "Light Chemical Peel", 
      description: "Removes only the outer layer of skin. Used for acne, uneven pigmentation, dryness and fine wrinkling.",
      downtime: "Mild redness, stinging and flaking"
    },
    { 
      type: "Medium Chemical Peel", 
      description: "Goes deeper than a light peel. Used when more visible resurfacing is needed.",
      downtime: "Longer recovery than superficial peel"
    },
    { 
      type: "Deep Chemical Peel", 
      description: "Works much further into the skin. Used for more severe sun damage or deeper wrinkles.",
      downtime: "Peeling, crusting, swelling, redness may last weeks"
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Skin Assessment",
      desc: "Your doctor reviews skin type, pigmentation tendency, acne history, sensitivity and treatment goals."
    },
    {
      step: "2",
      title: "Pre-Peel Planning",
      desc: "Pre-peel priming for 2 to 4 weeks may be recommended in some cases with topical agents or medication."
    },
    {
      step: "3",
      title: "Peel Application",
      desc: "The peel solution is applied in a controlled manner based on the chosen depth and treatment plan."
    },
    {
      step: "4",
      title: "Recovery and Peeling",
      desc: "Redness, flaking and sensitivity happen after lighter peels. Deeper peels involve more significant peeling."
    },
    {
      step: "5",
      title: "Review and Maintenance",
      desc: "Many light peels work best as part of a series for ongoing results."
    },
  ];

  const pricingTiers = [
    { treatment: "Light / superficial chemical peel", volume: "Single session", price: "RM 350 – RM 800" },
    { treatment: "Medium chemical peel", volume: "Single session", price: "RM 800 – RM 1,800+" },
    { treatment: "Stronger doctor-led peel protocols", volume: "Single session", price: "RM 1,500 – RM 3,000+" },
    { treatment: "Series packages", volume: "Multiple sessions", price: "Priced based on number of sessions" },
  ];

  const priceFactors = [
    "Peel strength: Light peels cost less than deeper or more advanced peels",
    "Doctor involvement: Doctor-led treatment often costs more than a basic facial-style peel",
    "Skin concern: Acne, pigmentation, texture and anti-ageing plans may require different protocols",
    "Number of sessions: Superficial peels are often repeated as a series for stronger results",
    "Pre- and post-care products: Some patients need priming or targeted aftercare",
  ];

  const benefitsList = [
    "Helps brighten dull skin and improve glow",
    "Can improve acne, clogged pores and surface congestion",
    "Helps reduce uneven pigmentation and post-acne marks",
    "Can smooth rough texture and soften fine wrinkling",
    "Light peels usually involve relatively short recovery",
    "Can be tailored by depth depending on how much correction is needed",
  ];

  const limitationsList = [
    "Results vary depending on peel depth and the skin concern",
    "Light peels may need multiple sessions for best results",
    "Deeper peels involve much more downtime and recovery",
    "Not every peel is suitable for every skin tone or skin condition",
    "Sun protection and aftercare are important or results may be reduced",
  ];

  const sideEffects = {
    common: [
      "redness",
      "stinging",
      "flaking",
      "irritation",
      "dryness",
      "sensitivity after treatment",
    ],
    rare: [
      "temporary darkening of the skin",
      "lighter skin colour, especially with medium or deep peels",
      "infection",
      "scarring, which is rare in expert hands",
      "higher pigment risk in some darker skin tones if the wrong peel is chosen",
    ],
  };

  const aftercareInstructions = [
    "Avoid sun exposure and use daily high-protection sunscreen",
    "Do not pick, scratch or peel the flaking skin",
    "Avoid harsh exfoliants, retinoids or strong active skincare unless advised",
    "Keep the skin moisturised and follow your doctor's aftercare exactly",
    "Avoid unnecessary heat and irritation during early recovery",
    "Give the skin time to heal before judging the final result",
  ];

  const faqData = [
    { q: "How much does a chemical peel cost in Malaysia?", a: "Chemical peel prices in Malaysia commonly start from around RM 350 for lighter options, while more advanced medical peels can cost much more depending on strength and clinic." },
    { q: "Is chemical peel good for acne marks?", a: "It can help some acne marks, especially post-inflammatory pigmentation and uneven texture. Suitability depends on the type of marks and your skin type." },
    { q: "How many chemical peel sessions do I need?", a: "Many light peels work best as a series rather than a single treatment, especially for acne, pigmentation and dullness." },
    { q: "Is chemical peel painful?", a: "Most light peels cause stinging, warmth or mild irritation rather than severe pain. Deeper peels are more intense and require more recovery." },
    { q: "How long does it take to recover from a chemical peel?", a: "Recovery depends on depth. Light peels usually involve short-term redness and flaking. Deep peels can cause peeling, crusting, redness and discomfort for days to weeks, with redness sometimes lasting up to three months." },
    { q: "Is chemical peel safe for darker skin?", a: "It can be, but careful selection matters. The AAD specifically notes that people with darker skin tones can develop dark marks or light spots if treatments are not chosen properly." },
    { q: "What is the difference between a light and deep chemical peel?", a: "A light peel treats the outer skin layer and has shorter downtime. A deep peel reaches further, gives stronger resurfacing, and comes with much longer recovery." },
    { q: "Can chemical peel remove pigmentation?", a: "It can improve some types of superficial pigmentation and uneven tone, but results depend on the cause and depth of the pigment." },
    { q: "Who is not suitable for a chemical peel?", a: "Suitability depends on skin type, skin condition, infection risk, active irritation, medical history and pigmentation risk. This should be assessed during consultation." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Skin Resurfacing Treatment"
        title="Chemical Peel | Clearer, Brighter Skin Treatment"
        highlight="at Nexus Clinic Kuala Lumpur"
        description="Improve acne marks, dull skin, uneven tone and fine lines with chemical peel treatment in Malaysia. Nexus Clinic KL offers doctor-led peels for smoother, brighter skin."
        details="Your skin can start looking tired before you realise why. It loses glow. Acne marks stay longer. Pores look rougher. Fine lines show more clearly. The skin tone becomes uneven, and regular facials stop doing enough. That is often the point where a chemical peel starts making sense."
        note="A chemical peel is generally considered safe when performed by a qualified and experienced clinician, but the right peel depth and aftercare matter."
        image="/images/skin/Chemical Peel/Chemical Peel.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Chemical Peel Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in chemical peel treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Skin Renewal"
        floatingSubtitle="Brighter • Smoother • Clearer"
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Chemical Peel Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know about this skin-resurfacing treatment</p>
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
              Speak to a Doctor About Your Skin Goals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is Chemical Peel Section */}
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
                What Is a Chemical Peel and <span className="text-wine italic">How It Works</span>
              </h2>
              <p className="text-brown font-inter">
                A chemical peel is a skin treatment that applies a controlled chemical solution to the skin so the damaged 
                outer layers can shed and renew. As the old skin peels away, the newer skin underneath can look smoother, 
                brighter and more even.
              </p>
              <p className="text-brown font-inter">
                Peels can range from light exfoliating treatments to medium and deep resurfacing procedures, depending on 
                how much correction is needed. That is why chemical peels are used for very different concerns.
              </p>
              <p className="text-brown font-inter">
                A lighter peel may help with clogged pores, dullness and superficial pigmentation. A deeper peel may be 
                considered for more advanced sun damage and more visible texture issues, but it also comes with much more 
                recovery. The key is choosing the right strength for the right skin.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">"The right peel is always better than the strongest peel."</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/skin/Chemical Peel/Areas Treated With Chemical peel.webp"
                  alt="Chemical peel skin resurfacing treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <Link className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                href="/contact-us/">
                Find Out If a Chemical Peel Is Right for You
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Chemical Peel Helps Improve Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Chemical Peel Helps Improve</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">At Nexus Clinic KL, chemical peels are commonly considered for clearer, smoother skin</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {peelBenefits.map((item, idx) => (
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
              Book a Consultation to See If a Peel Matches Your Skin Goals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Types of Chemical Peels Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Types of Chemical Peels Used in Malaysia</h2>
            <p className="text-taupe font-inter">Not all chemical peels are the same. The right option depends on your skin type and concern.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {peelTypes.map((peel, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/20 hover:shadow-md transition-shadow">
                <h3 className="font-georgia text-xl text-brown font-semibold mb-3">{peel.type}</h3>
                <p className="text-taupe font-inter text-sm mb-3">{peel.description}</p>
                <div className="mt-3 pt-3 border-t border-taupe/10">
                  <p className="text-taupe font-inter text-xs">
                    <span className="font-semibold text-brown">Downtime:</span> {peel.downtime}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              <span className="font-semibold">Note:</span> For most aesthetic clinic patients in Malaysia, superficial and selected medium-depth peels are the more common choice because they offer improvement with less downtime than deep resurfacing.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Nexus Clinic Difference Section */}
      <section className="py-20 px-4 bg-cream">
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
                  src="/images/nexus-clinic.jpeg"
                  alt="Doctor-led chemical peel treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="space-y-6 order-1 md:order-2">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Nexus Clinic KL | <span className="text-wine italic">Doctor-Led Chemical Peel Treatment</span> in Malaysia
              </h2>
              <p className="text-brown font-inter">
                Many clinics offer chemical peels in Kuala Lumpur. The treatment may look simple, but proper assessment 
                matters more than most people think.
              </p>
              <p className="text-brown font-inter">
                The American Academy of Dermatology recommends a consultation before a peel and specifically advises patients 
                to ask whether the doctor has experience performing peels on people with their skin colouring. That matters 
                because darker skin tones can carry a higher risk of unwanted dark marks or light spots.
              </p>
              <p className="text-brown font-inter font-semibold">What separates Nexus Clinic KL from other clinics:</p>
              <ul className="space-y-2">
                {[
                  "Doctor-led skin assessment before treatment",
                  "Peel strength selected based on your skin type and concern",
                  "Safer planning for acne marks, pigmentation and sensitive skin",
                  "Honest advice if another treatment would work better",
                  "Full aftercare guidance and product advice",
                  "Treatment designed for natural skin improvement, not over-aggressive peeling",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
                href="/contact-us/">
                Book Your Chemical Peel Consultation at Nexus Clinic KL
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Chemical Peel Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — controlled skin renewal</p>
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-6">
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
              Book Your Chemical Peel Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">20-30 minute sessions at Nexus Clinic KL</p>
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
            title="Chemical Peel Cost in Malaysia"
            subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="font-georgia text-xl text-brown mb-3">Factors That Affect Your Chemical Peel Price</h3>
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
              At Nexus Clinic KL, your skin is assessed first and the treatment plan is explained clearly before anything begins.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Get Your Personalised Chemical Peel Quote
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
                Benefits of Chemical Peel
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
                Limitations of Chemical Peel
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
              This is why the right peel is always better than the strongest peel.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Chemical Peel Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">Temporary, rare and important to explain properly</p>
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
                Risks That Need Proper Screening
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
            <h3 className="font-georgia text-xl text-brown mb-4">Chemical Peel Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">
              Sun protection is especially important after skin treatments because ongoing UV exposure can reduce results and increase the chance of side effects.
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
              Book Chemical Peel Treatment in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If your skin looks dull, rough, acne-prone or uneven, a chemical peel may help reveal a smoother, brighter and clearer version of your skin.
            </p>
            <p className="text-cream/90 font-inter">
              No fake look. No unnecessary heaviness. Just fresher skin, better texture and a more even glow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Chemical Peel Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for chemical peel treatment at Nexus Clinic KL. Please let me know available slots."
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