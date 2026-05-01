"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  Syringe,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  AlertCircle,
  Activity,
  Zap,
  Eye,
  AlertTriangle,
  Droplet,
  Scissors,
  TrendingUp,
  Sun,
  Map,
  Layers,
  Target,
  Info,
  ChevronRight,
  Star,
} from "lucide-react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "@/src/lib/animations";

import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";

interface AcneScarLandingProps {
  locale: string;
}

export default function AcneScarLanding({ locale }: AcneScarLandingProps) {
  const scarTypeData = [
    {
      type: "Ice pick scars",
      appearance: "Deep, narrow pits like pin holes in the skin",
      depth: "Deep",
      bestTreatment: "TCA CROSS Chemical Peel + Pico Laser",
    },
    {
      type: "Rolling scars",
      appearance: "Broad, wavy depressions with sloped edges",
      depth: "Moderate to deep",
      bestTreatment: "Subcision + Fractional CO2 Laser + Rejuran S",
    },
    {
      type: "Boxcar scars",
      appearance: "Wider pits with sharp, defined vertical edges",
      depth: "Shallow to moderate",
      bestTreatment: "RF Microneedling + Fractional CO2 Laser",
    },
    {
      type: "Hypertrophic / Keloid",
      appearance: "Raised, thickened scar tissue above skin surface",
      depth: "Raised",
      bestTreatment: "Steroid Injection + Silicone Gel + Pico Laser",
    },
    {
      type: "Post-Inflammatory Hyperpigmentation (PIH)",
      appearance: "Flat dark marks left after active acne",
      depth: "Surface",
      bestTreatment: "Pico Laser + Skin Booster + Topical Brighteners",
    },
    {
      type: "Mixed / Combination",
      appearance: "Multiple scar types across the face",
      depth: "Varied",
      bestTreatment: "Custom combination protocol (minimum 2 modalities)",
    },
  ];

  const comparisonData = [
    {
      factor: "Primary mechanism",
      subcision:
        "Releases tethered scars by cutting fibrous bands beneath the skin",
      laser: "Resurfaces skin texture through controlled micro-injuries",
      microneedling:
        "Stimulates collagen via controlled micro-punctures",
    },
    {
      factor: "Best for",
      subcision:
        "Rolling scars, tethered depressions, scars that don't lift with surface treatments",
      laser: "Boxcar scars, overall texture improvement, moderate to deep atrophic scars",
      microneedling:
        "Mild to moderate scarring, shallow boxcar, maintenance between stronger procedures",
    },
    {
      factor: "Downtime",
      subcision:
        "Mild swelling or bruising for a few days, improvement over 2-3 months",
      laser: "5 to 7 days for Fractional CO2; minimal for Pico Laser",
      microneedling:
        "24 to 48 hours of mild redness and swelling",
    },
    {
      factor: "Sessions needed",
      subcision: "1 to 3 sessions",
      laser: "3 to 5 sessions (spaced 4-6 weeks apart)",
      microneedling: "3 to 5 sessions",
    },
    {
      factor: "Pigment risk for Malaysian skin",
      subcision: "Low (no thermal energy)",
      laser: "Moderate to high (requires careful settings and aftercare)",
      microneedling: "Low",
    },
  ];

  const pricingTiers = [
    {
      treatment: "Pico Laser (Full Face)",
      target: "PIH, mild texture, early scarring",
      sessions: "3 to 5",
      price: "RM 700 – RM 1,200 / session",
    },
    {
      treatment: "Fractional CO2 Laser (Full Face)",
      target: "Boxcar, rolling, moderate to deep atrophic",
      sessions: "2 to 4",
      price: "RM 1,200 – RM 2,500 / session",
    },
    {
      treatment: "RF Microneedling (Sylfirm X / Potenza)",
      target: "Rolling, boxcar, skin texture",
      sessions: "3 to 5",
      price: "RM 1,000 – RM 1,800 / session",
    },
    {
      treatment: "Subcision",
      target: "Tethered rolling scars",
      sessions: "1 to 3",
      price: "RM 500 – RM 900 / session",
    },
    {
      treatment: "TCA CROSS Chemical Peel",
      target: "Ice pick scars",
      sessions: "2 to 4",
      price: "RM 400 – RM 700 / session",
    },
    {
      treatment: "Rejuran S Skin Booster",
      target: "Skin repair, post-treatment recovery",
      sessions: "2 to 3",
      price: "RM 900 – RM 1,500 / session",
    },
    {
      treatment: "Combination Scar Programme",
      target: "Mixed / severe scarring (2 to 3 modalities)",
      sessions: "4 to 6 total",
      price: "From RM 3,500 (package pricing available)",
    },
  ];

  const faqData = [
    {
      q: "How many sessions of fractional CO2 laser are needed for acne scars?",
      a: "Most patients require 3 to 5 sessions of Fractional CO2 laser, spaced 4 to 6 weeks apart, depending on scar depth and treatment goals. Your doctor at Nexus Clinic KL will assess your specific scarring and provide a personalised session estimate at your consultation.",
    },
    {
      q: "How long does it take to see results after acne scar treatment?",
      a: "Initial improvement can be noticed within 2 to 4 weeks, but the most dramatic visible changes typically occur between 3 and 6 months as new collagen matures. Collagen remodelling is a slow biological process, which is why patience and completing the full protocol are essential for optimal results.",
    },
    {
      q: "Is laser acne scar treatment safe for darker skin tones (Malaysian skin)?",
      a: "Yes, when performed by a licensed doctor experienced with Fitzpatrick skin types III to V. At Nexus Clinic KL, we use conservative energy settings on first sessions, incorporate non-ablative modalities like Pico Laser and RF Microneedling, and prescribe structured post-treatment sun protection to minimise the risk of post-inflammatory hyperpigmentation. Aggressive settings designed for lighter skin can trigger darkening on Asian skin, which is why our protocols are specifically calibrated for Malaysian patients.",
    },
    {
      q: "What is the difference between Pico Laser and Fractional CO2 for acne scars?",
      a: "Pico Laser targets surface and mid-dermal concerns using photoacoustic pressure without significant surface ablation. It excels at post-inflammatory hyperpigmentation, early shallow scars, and improving skin tone with minimal downtime. Fractional CO2 Laser performs ablative resurfacing, creating controlled micro-wounds that trigger deep collagen remodelling and physically alter scar morphology. It is more effective for moderate to deep atrophic scarring but involves 5 to 7 days of recovery. Many patients benefit from both technologies in sequence.",
    },
    {
      q: "What is subcision and what scars is it for?",
      a: "Subcision is a minor surgical procedure performed under local anaesthetic where a specialised bevelled needle is inserted beneath a rolling or tethered scar. The needle is swept in a fanning motion to physically sever the fibrous bands anchoring the scar floor to deeper tissue. Once released, the depressed skin rises naturally and the created space fills with new collagen over weeks. Subcision is a prerequisite for true rolling scar correction and is often overlooked by patients who have tried laser alone without result.",
    },
    {
      q: "How much does acne scar treatment cost in Malaysia in 2026?",
      a: "Pricing varies by scar severity, treatment type, and number of sessions. At Nexus Clinic KL in 2026, Pico Laser ranges from RM 700 to RM 1,200 per session, Fractional CO2 Laser from RM 1,200 to RM 2,500 per session, RF Microneedling from RM 1,000 to RM 1,800 per session, and Subcision from RM 500 to RM 900 per session. Combination scar programmes start from RM 3,500 for 4 to 6 sessions across multiple modalities. Final pricing is confirmed after your scar mapping consultation.",
    },
    {
      q: "Can acne scars be fully removed?",
      a: "Clinically meaningful and visible improvement, typically a 50 to 80 percent reduction in scar depth and pigmentation, is achievable for most scar types with a properly designed combination programme. Complete removal to a level indistinguishable from unaffected skin is not always possible, particularly for deep ice pick scars or longstanding hypertrophic scars. What patients consistently achieve is a significant improvement in skin texture and tone that makes scars far less visible in natural lighting and reduces dependence on heavy-coverage makeup.",
    },
    {
      q: "How many subcision sessions do I need?",
      a: "Most patients require 1 to 3 subcision sessions, depending on the severity and number of tethered rolling scars. The procedure takes 30 to 60 minutes, and improvement builds gradually over 2 to 3 months as new collagen fills the space created by releasing the scar tissue.",
    },
    {
      q: "Can I treat acne scars if I still have active breakouts?",
      a: "Our doctors recommend waiting until active acne is either resolved or well-controlled before beginning aggressive scar treatment. Active inflammation can worsen scar formation and compromise healing after laser or needling procedures. A period of 3 to 6 months of acne stability is generally preferred before beginning fractional resurfacing. For patients with active acne alongside established scarring, our doctors will assess whether simultaneous management is feasible or if treating active acne first produces the best outcome.",
    },
    {
      q: "What is the difference between fractional laser and non-fractional laser?",
      a: "Fractional laser treats the skin in fractions, leaving healthy tissue between treated micro-zones. This supports faster healing and reduces side effect risk compared to older non-fractional approaches that treated the entire surface at once. Fractional CO2 and fractional Pico lasers are the modern standards for acne scar treatment because they balance efficacy with manageable downtime.",
    },
    {
      q: "What is a realistic acne scar improvement goal?",
      a: "The most realistic goal is visible improvement in texture and depth that makes scars less noticeable in everyday lighting and reduces reliance on makeup. Most patients do not need 'perfect' skin; they want smoother skin in real lighting. Combination plans using 2 to 3 modalities tailored to your specific scar types deliver the best outcomes, and your doctor at Nexus Clinic KL will provide an honest expectation at your consultation.",
    },
    {
      q: "What aftercare is required after acne scar treatment?",
      a: "Aftercare is critical for protecting your results. For the first 48 hours, keep the skin gentle, avoid heat, saunas, and heavy workouts. For the first week, apply SPF50 daily even indoors, pause harsh actives like retinoids and strong acids, and keep skin hydrated. Between sessions, do not rush; your skin needs time to rebuild collagen. Full aftercare guidance is provided in writing at Nexus Clinic KL.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-acne-scar-treatment1.webp",
      after: "/images/B&A-skin/B&A-acne-scar-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-acne-scar-treatment2.webp",
      after: "/images/B&A-skin/B&A-acne-scar-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-acne-scar-treatment3.webp",
      after: "/images/B&A-skin/B&A-acne-scar-treatment3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Doctor-Performed • Scar Mapping Approach"
        title="Best Acne Scar Treatment in Malaysia for"
        highlight="Smoother, Clearer Skin"
        description="Stubborn pits, dark marks, and uneven skin texture. Nexus Clinic KL treats every scar type with doctor-performed CO2 Laser, Pico Laser, RF Microneedling and Subcision. Personalised for Malaysian skin."
        details="Your skin healed from acne years ago. The scars did not. They sit in the mirror every morning, pitted, dark, or raised, a constant reminder of breakouts that should belong in the past. The reality is that acne scars do not resolve on their own, and no amount of serum or filter changes the texture underneath. At Nexus Clinic KL, our licensed aesthetic doctors assess every scar type individually and build a treatment plan using clinically proven modalities matched precisely to your scarring, skin tone and healing capacity."
        note="Malaysia's Fitzpatrick skin types III to V require a different clinical approach than protocols used in Western markets. At Nexus Clinic KL, our doctors are trained in Southeast Asian facial anatomy and skin physiology, meaning every treatment setting and aftercare recommendation is calibrated for Malaysian patients."
        image="/images/skin/acne-scar-treatment.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Acne Scar Treatment Consultation"
        ctaText="Book Free Assessment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in acne scar treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Scar Mapping Process"
        floatingSubtitle="Doctor-led • Personalised Plan"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Trust Section */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-taupe/20 shadow-xl hover:shadow-2xl transition-all duration-300">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-y border-taupe/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">
                    Established
                  </p>
                  <p className="font-georgia text-brown font-bold text-lg">
                    2001
                  </p>
                  <p className="font-inter text-taupe text-xs">
                    Over 20 years of excellence
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">
                    Location
                  </p>
                  <p className="font-georgia text-brown font-bold text-sm">
                    Wisma UOA II, Jalan Pinang
                  </p>
                  <p className="font-inter text-taupe text-xs">
                    KLCC, 50450 Kuala Lumpur
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">
                    Opening Hours
                  </p>
                  <p className="font-georgia text-brown font-bold text-sm">
                    Monday - Saturday
                  </p>
                  <p className="font-inter text-taupe text-xs">
                    9:00am – 6:00pm | Closed Sundays & PH
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">
                      Scar Mapping Process
                    </p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">
                      Every scar type assessed individually before treatment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">
                      Doctor-Performed Only
                    </p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">
                      Licensed doctors trained in Malaysian skin types
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">
                      Combination Protocols
                    </p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">
                      2-3 modalities for mixed scar types
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">
                    MOH-approved devices
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">
                    Fractional CO2 Laser
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">
                    Pico Laser • RF Microneedling • Subcision
                  </span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              Acne Scar Treatment at a Glance
            </h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">
              Everything you need to know
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              {
                icon: Syringe,
                label: "Treatment",
                value:
                  "Fractional CO2 Laser, Pico Laser, RF Microneedling, Subcision, Rejuran S, Chemical Peels",
              },
              {
                icon: Clock,
                label: "Session Time",
                value: "30 to 90 minutes depending on modality",
              },
              {
                icon: Heart,
                label: "Downtime",
                value: "0 to 7 days depending on treatment intensity",
              },
              {
                icon: Zap,
                label: "Visible Results",
                value: "2 to 4 weeks; full remodelling at 3 to 6 months",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-light p-5 rounded-xl border border-taupe/10 shadow-sm"
              >
                <item.icon className="w-8 h-8 text-wine mb-3" />
                <p className="font-inter text-sm text-taupe">{item.label}</p>
                <p className="font-georgia text-md text-brown font-semibold">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-wine/5 rounded-2xl p-6 border border-wine/10"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="font-inter text-sm text-taupe">Sessions Required</p>
                <p className="font-georgia text-brown font-semibold">
                  3 to 6 sessions on average
                </p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Spacing</p>
                <p className="font-georgia text-brown font-semibold">
                  4 to 6 weeks apart
                </p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown font-semibold">
                  Ice pick, rolling, boxcar, hypertrophic scars, PIH
                </p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown">
                  Topical numbing cream (30 to 45 minutes)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Scar Type | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Scar Type Matrix Section */}
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
                { key: "type", header: "Scar Type", className: "font-semibold text-brown" },
                { key: "appearance", header: "Appearance" },
                { key: "depth", header: "Depth" },
                { key: "bestTreatment", header: "Best Treatment at Nexus Clinic KL" },
              ]}
              data={scarTypeData.map(scar => ({
                type: scar.type,
                appearance: scar.appearance,
                depth: scar.depth,
                bestTreatment: scar.bestTreatment,
              }))}
              title="The Scar-Type-to-Treatment Decision Matrix"
              subtitle="Used at Nexus Clinic KL for every initial consultation"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />

          <motion.div
            variants={fadeInUp}
            className="mt-6 p-4 bg-wine/5 rounded-xl text-center"
          >
            <p className="text-brown font-inter text-sm">
              Ice pick scars respond poorly to surface lasers alone. Rolling
              scars require subcision to release tethers before resurfacing.
              Understanding these distinctions before treatment is the
              difference between money well spent and multiple rounds that never
              addressed the actual problem.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Malaysian Skin Protocol Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              Acne Scar Treatment for Malaysian Skin
            </h2>
            <p className="text-taupe font-inter">
              A different clinical protocol is required for Fitzpatrick types III to V
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-6 rounded-xl border border-taupe/10"
            >
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Why Malaysian Skin Needs Specialised Care
              </h3>
              <p className="text-taupe font-inter text-sm mb-4">
                Malaysian skin sits predominantly in Fitzpatrick types III to V.
                Darker skin types carry a significantly higher risk of
                post-inflammatory hyperpigmentation after laser and needle-based
                procedures. Aggressive ablative laser settings that deliver
                excellent results on lighter Caucasian skin can trigger
                darkening, prolonged redness or uneven healing when applied
                without adjustment to Asian skin.
              </p>
              <ul className="space-y-2">
                {[
                  "Conservative energy settings on first treatment sessions",
                  "Combination sessions using non-ablative modalities first",
                  "Rejuran S incorporated as standard repair step",
                  "Broad-spectrum SPF50 is non-negotiable after every session",
                  "Climate-specific aftercare for Malaysia's tropical humidity",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-taupe font-inter text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-light p-6 rounded-xl border border-taupe/10"
            >
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-wine" />
                Humidity and Healing Factors
              </h3>
              <p className="text-taupe font-inter text-sm">
                Malaysia's tropical humidity affects healing. The moist
                environment can support faster superficial recovery, but it also
                increases the risk of bacterial contamination on open or
                sensitized post-laser skin. Our post-treatment protocols account
                for this with clear, evidence-based wound care guidance that
                reflects the local climate rather than instructions written for
                patients in cooler or drier countries.
              </p>
              <div className="mt-6 bg-wine/5 p-4 rounded-lg">
                <p className="text-wine font-inter text-sm font-semibold">
                  ISAPS Global Statistics Report 2023:
                </p>
                <p className="text-taupe text-sm mt-1">
                  Non-surgical skin resurfacing procedures in Southeast Asia grew
                  by 28% year-on-year, with Malaysia showing above-average
                  demand for combination scar protocols.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              Treatments and Technologies Used at Nexus Clinic KL
            </h2>
            <p className="text-taupe font-inter">
              Evidence-based modalities for every scar type
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Fractional CO2 Laser",
                desc: "The gold standard for moderate to severe atrophic scarring. Fractional CO2 laser delivers precise columns of carbon dioxide laser energy deep into the dermis, vaporising damaged scar tissue and triggering a robust collagen remodelling response. Results improve progressively over 3 to 6 months as new collagen fills depressed scar floors.",
                bestFor: "Boxcar scars, rolling scars, deep atrophic scarring",
                downtime: "5 to 7 days",
                sessions: "2 to 4",
              },
              {
                title: "Pico Laser",
                desc: "Delivers ultra-short picosecond pulses that shatter pigment and stimulate collagen through photoacoustic pressure rather than heat. This makes it the preferred tool for post-inflammatory hyperpigmentation, early-stage scarring, and skin texture refinement in darker skin types where thermal lasers carry higher PIH risk.",
                bestFor: "PIH, mild texture, early scarring",
                downtime: "Minimal (24-48 hours redness)",
                sessions: "3 to 5",
              },
              {
                title: "RF Microneedling (Sylfirm X / Potenza)",
                desc: "Combines controlled micro-needling with targeted RF energy to remodel collagen in the mid-dermis without significant surface injury. Particularly effective for rolling and boxcar scars, open pores, and overall skin texture.",
                bestFor: "Rolling scars, boxcar scars, skin texture",
                downtime: "24 to 48 hours mild redness",
                sessions: "3 to 5",
              },
              {
                title: "Subcision",
                desc: "A minor surgical procedure performed under local anaesthetic where a specialised bevelled needle is inserted beneath a rolling or tethered scar to physically sever the fibrous bands anchoring the scar floor. Once released, the depressed skin rises naturally and the created space fills with new collagen.",
                bestFor: "Rolling scars, tethered depressions",
                downtime: "Mild bruising for 7-10 days",
                sessions: "1 to 3",
              },
              {
                title: "TCA CROSS Chemical Peel",
                desc: "Trichloroacetic Acid Chemical Reconstruction of Skin Scars involves precise application of high-concentration TCA directly into individual ice pick scar channels. The focal chemical reaction stimulates scar wall fibroblasts and gradually converts the deep channel into a broader, shallower depression.",
                bestFor: "Ice pick scars",
                downtime: "5 to 7 days crusting",
                sessions: "2 to 4",
              },
              {
                title: "Rejuran S Skin Booster",
                desc: "A polynucleotide-based injectable specifically formulated for scar removal. Its PDRN molecules activate dermal fibroblasts, reduce inflammatory cytokines, and stimulate production of new extracellular matrix components. Integrated into the recovery phase of most combination scar protocols.",
                bestFor: "Skin repair, post-treatment recovery",
                downtime: "Minimal (24 hours redness)",
                sessions: "2 to 3",
              },
            ].map((treatment, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl border border-taupe/10"
              >
                <h3 className="font-georgia text-xl text-brown mb-2">
                  {treatment.title}
                </h3>
                <p className="text-taupe font-inter text-sm mb-3">
                  {treatment.desc}
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4 pt-3 border-t border-taupe/10">
                  <div>
                    <p className="font-inter text-xs text-taupe">Best for</p>
                    <p className="font-inter text-sm text-brown font-medium">
                      {treatment.bestFor}
                    </p>
                  </div>
                  <div>
                    <p className="font-inter text-xs text-taupe">Downtime</p>
                    <p className="font-inter text-sm text-brown font-medium">
                      {treatment.downtime}
                    </p>
                  </div>
                  <div>
                    <p className="font-inter text-xs text-taupe">
                      Sessions needed
                    </p>
                    <p className="font-inter text-sm text-brown font-medium">
                      {treatment.sessions}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <TableForPages
            columns={[
              { key: "factor", header: "Factor", className: "font-semibold text-brown" },
              { key: "subcision", header: "Subcision" },
              { key: "laser", header: "Laser" },
              { key: "microneedling", header: "Microneedling" },
            ]}
            data={comparisonData.map(row => ({
              factor: row.factor,
              subcision: row.subcision,
              laser: row.laser,
              microneedling: row.microneedling,
            }))}
            title="Subcision vs Laser vs Microneedling"
            subtitle="Which is better? The answer depends on your scar type"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />

          <motion.div
            variants={fadeInUp}
            className="mt-6 p-4 bg-wine/5 rounded-xl text-center"
          >
            <p className="text-brown font-inter">
              In real practice, many patients benefit from blending these
              modalities. Rolling scars often need subcision first, then
              resurfacing. Boxcar scars respond well to laser or microneedling.
              Mixed scarring requires a combination approach.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              The Acne Scar Treatment Process at Nexus Clinic KL
            </h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Skin Consultation & Scar Mapping",
                desc: "Your doctor examines the distribution, depth, type and density of your scarring under specialised lighting. This step determines which modalities are indicated and in which order.",
              },
              {
                step: "02",
                title: "Skin Preparation & Numbing",
                desc: "Medical-grade topical anaesthetic cream is applied for 30 to 45 minutes. For subcision, targeted local anaesthetic ensures full comfort.",
              },
              {
                step: "03",
                title: "Treatment Session",
                desc: "Your doctor applies the laser, RF microneedling device, or needling instrument to mapped scar zones. Sessions range from 30 to 90 minutes.",
              },
              {
                step: "04",
                title: "Post-Treatment Care & Follow-up",
                desc: "Soothing serums and barrier creams are applied. Written aftercare instructions provided. Review appointment at 4 to 6 weeks to assess healing and adjust next session parameters.",
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">
                  {item.title}
                </h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link href="/contact-us/" className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Book Your Acne Scar Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">
              Personalised scar mapping at Nexus Clinic KL
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Month-by-Month Roadmap */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              The Acne Scar Treatment Journey
            </h2>
            <p className="text-taupe font-inter">
              A realistic month-by-month roadmap for moderate to severe mixed
              scarring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                phase: "Month 1",
                title: "Consultation + First Session",
                treatments: "Skin assessment, scar mapping, targeted treatment (Pico Laser or Subcision)",
                goal: "Identify scar types and begin collagen stimulation",
              },
              {
                phase: "Month 2 to 3",
                title: "Core Treatment",
                treatments: "Fractional CO2 Laser or RF Microneedling",
                goal: "Deep remodelling of scar tissue and collagen rebuilding",
              },
              {
                phase: "Month 3 to 4",
                title: "Skin Repair",
                treatments: "Rejuran S Skin Booster",
                goal: "Accelerate recovery, hydrate, reduce PIH",
              },
              {
                phase: "Month 5 to 6",
                title: "Refinement",
                treatments: "Pico Laser for residual pigmentation; maintenance session",
                goal: "Even skin tone, refine texture",
              },
              {
                phase: "Month 6+",
                title: "Maintenance",
                treatments: "Annual or biannual touch-up as required",
                goal: "Preserve results and manage new marks",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-light p-4 rounded-xl border border-taupe/10 text-center"
              >
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-wine font-bold">{item.phase.split(" ")[1]}</span>
                </div>
                <p className="font-inter font-semibold text-brown text-sm">
                  {item.title}
                </p>
                <p className="font-inter text-taupe text-xs mt-1">
                  {item.treatments}
                </p>
                <p className="font-inter text-wine text-xs mt-2 font-medium">
                  {item.goal}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 p-4 bg-wine/5 rounded-xl text-center"
          >
            <p className="text-brown font-inter text-sm">
              Collagen remodelling is a slow biological process. Most patients
              notice the most dramatic visible changes between months 3 and 6 as
              the new collagen matrix matures. Planning a realistic timeline
              before beginning protects patients from disappointment.
            </p>
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
          className="container mx-auto max-w-6xl"
        >
        <TableForPages
          columns={[
            { key: "treatment", header: "Treatment", className: "font-semibold text-brown" },
            { key: "target", header: "Target Scar Type" },
            { key: "sessions", header: "Sessions Needed" },
            { key: "price", header: "Price Range (RM)", className: "font-semibold text-wine" },
          ]}
          data={pricingTiers.map(tier => ({
            treatment: tier.treatment,
            target: tier.target,
            sessions: tier.sessions,
            price: tier.price,
          }))}
          title="Acne Scar Treatment Cost in Malaysia 2026"
          subtitle="Transparent pricing at Nexus Clinic KL"
          variant="compact"
          fadeInUp={fadeInUp}
          className="py-12 px-4"
        />
        </motion.div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              Common Mistakes Malaysian Patients Make
            </h2>
            <p className="text-taupe font-inter">When treating acne scars</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Treating only pigmentation, not texture",
                desc: "Dark marks left by acne and physical scar depressions look similar but are biologically different. Pico Laser clears PIH effectively but does not remodel collagen in ice pick or rolling scar channels.",
              },
              {
                title: "Using beauty-salon lasers that lack depth",
                desc: "Low-powered LED-based or pulsed light devices cannot reach scar depth. Under Ministry of Health Malaysia guidelines, medical-grade laser procedures must be performed by licensed doctors.",
              },
              {
                title: "Stopping after one or two sessions",
                desc: "The scar-filling collagen continues to mature for 3 to 6 months post-treatment. Stopping mid-protocol misses the majority of the result.",
              },
              {
                title: "Not addressing active acne first",
                desc: "Treating established scars while new breakouts are still forming is a losing battle. Each new inflammatory lesion adds to the scar burden.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl border-l-4 border-wine"
              >
                <h3 className="font-georgia text-lg text-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              Side Effects and Aftercare
            </h2>
            <p className="text-taupe font-inter">What to expect after treatment</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl border border-taupe/10"
            >
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {[
                  "Redness, swelling, warmth (24-72 hours for Pico/RF; 5-7 days for CO2)",
                  "Peeling or dryness after resurfacing procedures",
                  "Mild bruising after subcision (resolves in 7-10 days)",
                  "Temporary darkening or lightening of skin (pigment shift risk higher in darker skin tones)",
                ].map((effect, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-taupe font-inter text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-6 rounded-xl border border-taupe/10"
            >
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-wine" />
                Rare but Serious Risks
              </h3>
              <ul className="space-y-2">
                {[
                  "Post-inflammatory hyperpigmentation (preventable with proper settings and SPF)",
                  "Infection (rare with proper aftercare)",
                  "Scarring (extremely rare with experienced injectors)",
                  "Prolonged redness or delayed healing",
                ].map((risk, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-taupe font-inter text-sm"
                  >
                    <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-wine/5 p-6 rounded-xl"
          >
            <h3 className="font-georgia text-xl text-brown mb-4">
              Aftercare Instructions
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Apply SPF50 every 2 hours when outdoors",
                "Pause retinols, AHAs, BHAs for at least 5 days before and after",
                "Avoid heavy exercise, saunas, swimming for 3-5 days",
                "Use gentle, non-stripping cleansers",
                "Apply ceramide or hyaluronic acid moisturisers",
                "Do not pick at peeling skin",
                "Sleep on your back for the first few nights after resurfacing",
                "Attend follow-up appointment at 4-6 weeks",
              ].map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span className="text-taupe font-inter text-sm">
                    {instruction}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Before After Section */}
      <SectionBeforeAfter transformations={transformations} />

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
              Start Your Acne Scar Journey at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Acne scars respond to treatment. The texture your skin has today
              is not the texture it has to keep. What changes outcomes is the
              precision of the approach: matching the right treatment to the
              right scar type, calibrating every session to your skin's specific
              response, and committing to a realistic programme.
            </p>
            <p className="text-cream/90 font-inter">
              At Nexus Clinic KL, our licensed aesthetic doctors have performed
              over 5,000 aesthetic procedures, bring more than 15 years of
              combined experience to every consultation, and work exclusively
              with MOH-approved devices and injectables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Acne Scar Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp
                message="Hi, I'd like to book a free consultation for acne scar treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan
              Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">
                Explore Pico Laser Treatment
              </a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">
                Explore Fractional CO2 Laser
              </a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">
                Explore RF Microneedling
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}