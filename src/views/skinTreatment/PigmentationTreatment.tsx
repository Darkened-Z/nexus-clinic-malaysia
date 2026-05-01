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
  Thermometer,
  Flower2,
  Layers,
  Target,
  ChevronRight,
  XCircle,
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
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import Image from "next/image";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";

interface PigmentationTreatmentProps {
  locale: string;
}

export default function PigmentationLanding({ locale }: PigmentationTreatmentProps) {
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

  const pigmentationTypes = [
    { type: "Melasma (patchy, hormonal pigment)", description: "Usually looks like brown or greyish patches on cheeks, forehead, or upper lip. It often comes and goes, and it can be triggered by sun and hormones." },
    { type: "Sunspots and age spots", description: "More common as we age or after years of UV exposure. They can appear as small, defined brown spots." },
    { type: "Freckles", description: "Often genetic and more visible after sun exposure. They can be treated, but they may return if you do not protect from sun." },
    { type: "Post-inflammatory hyperpigmentation (PIH)", description: "Dark marks after acne, rash, scratching, or harsh products. PIH is very common in Asian skin and can worsen if skin is irritated again." },
  ];

  const pigmentationDepthData = [
    { depth: "Epidermal Pigmentation", location: "Outer layer (epidermis) only", identification: "Appears clearly defined, flat, and darkens under Wood's lamp", approach: "Pico Laser or Chemical Peel; responds fastest" },
    { depth: "Dermal Pigmentation", location: "Mid to deep dermis", identification: "Blue-grey tone, less defined borders, does not darken under Wood's lamp", approach: "Low-fluence Pico Laser over multiple sessions; longer timeline" },
    { depth: "Mixed Pigmentation", location: "Both epidermal and dermal layers", identification: "Irregular colour (brown and grey zones in same patch)", approach: "Combination of Sylfirm X and Pico Laser; most complex" },
    { depth: "Vascular Pigmentation", location: "Blood vessel involvement in dermis", identification: "Reddish-brown tone, flush-like appearance, worsens with heat", approach: "Dual Yellow Laser or Sylfirm X to address vascular component" },
  ];

  const treatmentModalities = [
    { name: "Pico Laser", desc: "Delivers ultra-short pulses of laser energy in picoseconds, shattering melanin particles through photoacoustic pressure rather than heat. This significantly reduces the risk of post-laser PIH for Fitzpatrick III to V skin. Effective for sunspots, freckles, PIH and ABNOM. Downtime: mild redness for 24 to 48 hours." },
    { name: "Sylfirm X Radiofrequency Microneedling", desc: "The only device with dual wave radiofrequency technology targeting both abnormal blood vessels and the basement membrane. For melasma patients, this is a significant advantage as it suppresses vascular inflammation and stabilises melanocytes responsible for recurrence." },
    { name: "Dual Yellow Laser", desc: "Combines 577nm yellow and 511nm green wavelengths absorbed by melanin and oxyhaemoglobin. Effective for pigmentation with redness or flushing component, including vascular melasma. Minimal heat transfer makes it safe for sensitive skin." },
    { name: "Medical-Grade Chemical Peels", desc: "Glycolic acid, lactic acid or TCA at medical concentrations accelerate epidermal cell turnover. Most effective for epidermal pigmentation including mild melasma, PIH and general dullness. Prescribed at specific concentrations based on skin type." },
    { name: "Oral Tranexamic Acid Programme", desc: "Prescription medication that blocks the pathway through which UV and hormonal signals trigger melanocyte activation. Particularly effective for melasma. Prescribed as part of a managed programme with monthly reviews." },
    { name: "Skin Booster (Rejuran and Polynucleotide)", desc: "Integrated into pigmentation protocols to support post-laser skin recovery, strengthen the dermal matrix and reduce inflammatory response that can trigger rebound pigmentation." },
  ];

  const faqData = [
    { q: "What causes pigmentation on the face?", a: "Pigmentation can come from sun exposure, hormonal changes, genetics, ageing, and skin injury or inflammation. In Malaysia, sun exposure and inflammation from acne or irritation are common triggers. The key is identifying your pigment pattern first, because melasma behaves differently from sunspots or post-acne marks. Once we know the trigger, treatment becomes easier to choose and safer to plan." },
    { q: "Can pigmentation be removed permanently?", a: "Some pigmentation can fade for a long time, but 'permanent' is tricky, especially if the trigger is still present. Many clinics note that relying only on topical products can be limiting, while treatments like laser and chemical peels can improve the chance of longer-lasting results. Maintenance is the difference-maker. Without sun protection and the right homecare, pigment can return." },
    { q: "What is the best treatment for pigmentation in Malaysia?", a: "It depends on the type and depth of pigment. Malaysian clinics commonly discuss options like pico laser, Q-switched laser, IPL, and chemical peels for hyperpigmentation concerns. A plan is 'best' when it improves pigment without triggering rebound or irritation, especially for Asian skin tones. That is why assessment matters before choosing a device." },
    { q: "Is laser treatment safe for melasma?", a: "Laser can be safe when performed by trained doctors using appropriate technology and settings, but melasma needs extra care. Some clinics specifically note that aggressive laser approaches can worsen pigmentation if not used carefully. If your melasma is hormonal and reactive, the plan often includes strict sun protection and maintenance, not only laser sessions." },
    { q: "Can melasma go away on its own?", a: "Melasma may fade slightly over time in some cases, especially if it was triggered by pregnancy, but many people find it persists without treatment. The more sun exposure and heat exposure you get, the more it tends to linger. A proper melasma plan usually focuses on control and long-term management, not a quick 'one time' fix." },
    { q: "Are pigmentation treatments safe?", a: "Most pigmentation treatments are safe when performed by experienced medical professionals using suitable techniques for your skin type. Clinics commonly emphasise tailored treatment selection and appropriate aftercare to reduce unwanted side effects. The biggest risk usually comes from over-treating or mixing too many harsh steps at the same time." },
    { q: "How many sessions will I need for pigmentation removal?", a: "There is no single number. Some people see visible improvement after a few sessions, while deeper or recurring pigment patterns take more time. Many KL clinics mention that multiple sessions are typical for pico laser style pigment programs, often in a multi-session plan depending on severity. Your lifestyle also matters. Sun exposure can slow progress." },
    { q: "How much does pigmentation laser treatment cost in Kuala Lumpur?", a: "Costs vary by clinic, device, and area size. Some KL clinics list laser pigmentation costs around RM500 to RM1,000 depending on sessions and treatment area, while other Malaysia price guides estimate pico laser pigment sessions around RM400 to RM900. Treat these as ranges only. A proper quote depends on your pigment map." },
    { q: "What is the difference between melasma and hyperpigmentation?", a: "Hyperpigmentation is a broad term for darkening of skin. Melasma is a specific type that often appears as patches and is commonly linked with hormonal triggers and sun sensitivity. Many educational resources explain that different pigment conditions need different strategies, and that is why diagnosis matters before treatment." },
    { q: "Is pico laser good for pigmentation?", a: "Many Malaysian clinics describe pico laser as effective for pigment concerns because it uses ultra-short pulses to break down melanin particles, often with minimal downtime when used appropriately. That said, your pigment type still matters. A good outcome comes from matching the right laser approach to your pigment pattern and your skin tone." },
  ];

  const pricingTiers = [
    { treatment: "Pico Laser (Full Face)", bestFor: "Sunspots, freckles, PIH, ABNOM", sessions: "3 to 6", price: "RM 700 – RM 1,300 / session" },
    { treatment: "Sylfirm X RF (Full Face)", bestFor: "Melasma, mixed pigmentation, vascular redness", sessions: "3 to 5", price: "RM 1,000 – RM 1,800 / session" },
    { treatment: "Dual Yellow Laser", bestFor: "Melasma, vascular pigmentation, redness", sessions: "4 to 6", price: "RM 800 – RM 1,400 / session" },
    { treatment: "Chemical Peel (Medical Grade)", bestFor: "PIH, surface melasma, general dullness", sessions: "3 to 5", price: "RM 300 – RM 600 / session" },
    { treatment: "Skin Booster (Rejuran / Skinboosters)", bestFor: "Skin repair and brightening support post-laser", sessions: "2 to 3", price: "RM 900 – RM 1,500 / session" },
    { treatment: "Oral Tranexamic Acid Programme", bestFor: "Melasma maintenance, hormonal pigmentation", sessions: "Ongoing (monthly review)", price: "From RM 150 / month" },
    { treatment: "Combination Pigmentation Programme", bestFor: "Mixed or stubborn pigmentation (2 or more modalities)", sessions: "4 to 6 total", price: "From RM 3,200 (package pricing available)" },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
        <AllPagesHero
          badge="Doctor-Led Pigmentation Treatment • MOH Registered Clinic"
          title="Stop chasing 'brightening.'"
          highlight="Start treating the cause of your dark spots."
          description="Seven types of skin pigmentation. One wrong treatment can make it worse. Nexus Clinic KL diagnoses your exact pigmentation type and builds a precise, doctor-led plan using Pico Laser, Sylfirm X and proven brightening protocols."
          details="Dark spots, uneven patches, stubborn freckles and melasma that fades then returns. Pigmentation is one of the most searched skin concerns among Malaysians, and also one of the most frequently mistreated. At Nexus Clinic KL, our licensed aesthetic doctors do not treat pigmentation as a single condition but rather as a spectrum requiring tailored approaches."
          note="Over 5,000 Aesthetic Procedures Completed — Our doctors are trained in Southeast Asian skin physiology using MOH-approved technologies including Pico Laser, Sylfirm X, Dual Yellow Laser and medical-grade brightening protocols."
          image="/images/skin/pigmentation-treatment.webp"
          imageAlt="Nexus Clinic Kuala Lumpur - Pigmentation Treatment"
          ctaText="Book Free Assessment"
          ctaLink="/contact-us"
          whatsappMessage="Hi, I'm interested in pigmentation treatment at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle="Precise Diagnosis"
          floatingSubtitle="Type • Depth • Trigger • Skin Tone"
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
                <h2 className="font-georgia text-2xl md:text-3xl text-brown">Trust at a glance</h2>
              </div>
              <div className="hidden sm:block w-px h-8 bg-taupe/20" />
              <p className="text-taupe font-inter text-sm">Nexus Clinic Kuala Lumpur — Excellence in Medical Aesthetics</p>
            </div>

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

            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">MOH Registered & Compliant</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">All devices and products MOH-approved</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Licensed Aesthetic Doctors</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Trained in Southeast Asian skin physiology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Pigmentation-Type-to-Treatment Mapping</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">No one-size-fits-all approach</p>
                  </div>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Pigmentation Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatments Available", value: "Pico Laser, Sylfirm X RF, Dual Yellow Laser, Chemical Peel, Oral Tranexamic Acid, Medical-Grade Topicals, Skin Booster" },
              { icon: Clock, label: "Session Time", value: "30 to 60 minutes depending on modality and area" },
              { icon: Heart, label: "Downtime", value: "Pico Laser: minimal (0 to 48 hours); Chemical Peel: 3 to 7 days" },
              { icon: Zap, label: "First Results", value: "Initial brightening within 1 to 2 weeks; full clearance over 2 to 4 months" },
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
                <p className="font-inter text-sm text-taupe">Sessions Required</p>
                <p className="font-georgia text-brown font-semibold">3 to 6 for most pigmentation types; melasma may require ongoing maintenance</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown font-semibold">None required for most treatments; topical numbing cream available</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Melasma, sunspots, freckles, PIH, ABNOM, Hori's nevus, uneven skin tone</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Skin | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Malaysia Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">If you live in Malaysia, here is why pigmentation feels extra stubborn</h2>
            <p className="text-taupe font-inter">Pigmentation does not just show up. It builds.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Sun, text: "Sun exposure (even short daily exposure)" },
              { icon: Heart, text: "Hormonal shifts" },
              { icon: Thermometer, text: "Skin inflammation (acne, irritation, aggressive skincare)" },
              { icon: Flower2, text: "Genetics and ageing" },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-6 rounded-xl text-center shadow-lg">
                <item.icon className="w-10 h-10 text-wine mx-auto mb-3" />
                <p className="text-brown font-inter text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="bg-wine/5 p-6 rounded-xl">
            <p className="text-taupe font-inter text-center">
              Pigmentation recurrence is the single most frustrating outcome for Malaysian patients. UV exposure is the dominant trigger. Malaysia has one of the highest year-round UV indices in the world. SPF50 or higher, applied every two hours during outdoor activity, is not optional — it is a clinical requirement.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pigmentation-Type-to-Treatment Matrix */}
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
                { key: "type", header: "Pigmentation Type", className: "font-semibold text-brown" },
                { key: "trigger", header: "Key Trigger" },
                { key: "layer", header: "Skin Layer" },
                { key: "selfCare", header: "Responds to Self-Care?" },
                { key: "treatment", header: "Best Treatment at Nexus Clinic KL" },
              ]}
              data={[
                {
                  type: "Melasma",
                  trigger: "Hormones, UV, heat",
                  layer: "Mixed (epidermal and dermal)",
                  selfCare: "Partially only",
                  treatment: "Sylfirm X + Pico Laser + Oral Tranexamic Acid",
                },
                {
                  type: "Sunspots / Solar Lentigines",
                  trigger: "Cumulative UV exposure",
                  layer: "Epidermal",
                  selfCare: "No",
                  treatment: "Pico Laser (1 to 3 sessions)",
                },
                {
                  type: "Freckles",
                  trigger: "Genetics plus UV",
                  layer: "Epidermal",
                  selfCare: "No; returns with sun",
                  treatment: "Pico Laser + SPF50 maintenance",
                },
                {
                  type: "Post-Inflammatory Hyperpigmentation (PIH)",
                  trigger: "Acne, eczema, injury, inflammation",
                  layer: "Epidermal to superficial dermal",
                  selfCare: "Slowly, over months",
                  treatment: "Pico Laser + Chemical Peel + Brightening Topicals",
                },
                {
                  type: "ABNOM / Hori's Nevus",
                  trigger: "Genetic, hormone influence",
                  layer: "Deep dermal",
                  selfCare: "No",
                  treatment: "Pico Laser (multiple sessions, low-fluence protocol)",
                },
                {
                  type: "Age Spots / Liver Spots",
                  trigger: "Ageing plus UV accumulation",
                  layer: "Epidermal",
                  selfCare: "No",
                  treatment: "Pico Laser or Dual Yellow Laser",
                },
              ]}
              title="Pigmentation-Type-to-Treatment Decision Matrix"
              subtitle="Used at every initial pigmentation consultation at Nexus Clinic KL"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              Melasma sits in both epidermal and dermal layers and is driven by hormonal activity and heat. Applying an aggressive ablative laser without addressing the hormonal trigger and vascular component is the most common reason patients report their melasma worsening.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Types of Pigmentation Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Types of Pigmentation We Commonly See in Kuala Lumpur</h2>
            <p className="text-taupe font-inter">Not all "dark spots" are the same. Most patients have more than one type.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {pigmentationTypes.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10">
                <h3 className="font-georgia text-xl text-brown mb-3">{item.type}</h3>
                <p className="text-taupe font-inter text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl border-l-4 border-wine">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-wine shrink-0 mt-1" />
              <p className="text-brown font-inter">
                <span className="font-bold">"Is it pigmentation or something else?"</span> If a spot is changing fast, bleeding, ulcerating, or looks very different from other spots, do not treat it like cosmetic pigmentation. Get it assessed medically first.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* Treatments and Technologies Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Treatments and Technologies for Pigmentation at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">MOH-approved devices and prescription products</p>
          </motion.div>
          
          <div className="space-y-6">
            {treatmentModalities.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10">
                <h3 className="font-georgia text-xl text-brown mb-3">{item.name}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Three-Layer Management System */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Three-Layer Pigmentation Management System at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Every pigmentation plan incorporates all three layers</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-wine" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-3">Layer 1: Energy-Based Clinical Treatment</h3>
              <p className="text-taupe font-inter text-sm">Pico Laser, Sylfirm X, Dual Yellow Laser and chemical peels address existing pigment deposits. These modalities produce the visible improvements patients are seeking.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-8 h-8 text-wine" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-3">Layer 2: Systemic or Topical Medical Management</h3>
              <p className="text-taupe font-inter text-sm">Oral tranexamic acid suppresses melanocyte activation. Medical-grade topical brighteners containing tranexamic acid, azelaic acid, kojic acid, niacinamide maintain skin-clearing effect.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-wine" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-3">Layer 3: Daily Photoprotection</h3>
              <p className="text-taupe font-inter text-sm">Broad-spectrum SPF50 sunscreen applied every morning and reapplied every two hours during outdoor exposure is the foundational maintenance step that determines how long any pigmentation result lasts.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Step-by-Step: The Pigmentation Treatment Process at Nexus Clinic KL</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Skin Diagnosis and Pigmentation Mapping", desc: "Doctor examines skin under standard and Wood's lamp lighting to determine type, depth and distribution. Medical history, hormonal status, medication use documented." },
              { step: "02", title: "Treatment Planning and Expectation Setting", desc: "Doctor explains which pigmentation types you have, which layers they are in, which modalities recommended, and realistic improvement timeline." },
              { step: "03", title: "Treatment Session", desc: "Doctor applies laser, RF device or chemical peel to mapped pigmentation zones. Sessions typically take 30 to 60 minutes." },
              { step: "04", title: "Post-Treatment Care and Review", desc: "Soothing serums applied. Written aftercare instructions provided. Next session scheduled at appropriate interval, typically 3 to 4 weeks." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-6 rounded-xl">
                <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2">{item.title}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Before & After Section */}
      <SectionBeforeAfter transformations={transformations} />

      {/* Pricing Section */}
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
                { key: "depth", header: "Depth Classification", className: "font-semibold text-brown" },
                { key: "location", header: "Location in Skin" },
                { key: "identification", header: "How to Identify" },
                { key: "approach", header: "Treatment Approach" },
              ]}
              data={pigmentationDepthData.map(item => ({
                depth: item.depth,
                location: item.location,
                identification: item.identification,
                approach: item.approach,
              }))}
              title="Pigmentation Depth Determines Treatment Choice"
              subtitle="Beyond the type of pigmentation, its depth within the skin layers is the second most important factor"
              variant="default"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
            <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              Wood's lamp examination is a standard assessment tool at Nexus Clinic KL. Epidermal pigmentation shows strongly enhanced contrast under Wood's lamp. Dermal pigmentation shows little to no enhancement. This single diagnostic step prevents treating deep dermal pigmentation with surface-only protocols.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects and Aftercare Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare for Pigmentation Treatment</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Expected Side Effects
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Mild redness and warmth in treated area, resolving within hours to 48 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Temporary darkening of pigmented spots in first week as fragmented melanin rises to surface</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Sylfirm X sessions: 24 to 48 hours of mild redness</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Chemical peels: 3 to 7 days of visible peeling</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-wine" />
                Aftercare Instructions
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>SPF50 applied every morning and reapplied every two hours during outdoor activity</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Pause retinol and strong active exfoliants for 5 to 7 days around treatment</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Avoid steam rooms, hot yoga, prolonged cooking heat for 3 to 5 days post-laser</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Full aftercare guidance provided in writing at Nexus Clinic KL</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Who Pigmentation Treatment Is For (And Who Should Pause)</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-wine" />
                You are likely a good fit if:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have dark spots, melasma patches, uneven tone, or stubborn marks that do not fade</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Your pigment gets worse after sun exposure</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You want a plan that balances results with skin safety</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-wine" />
                You may need to pause or adjust if:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Your skin is actively inflamed (eczema flare, severe acne, irritated barrier)</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You are pregnant or breastfeeding (many pigment treatments are postponed)</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You are using strong prescriptions without guidance</span>
                </li>
              </ul>
            </motion.div>
          </div>
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
              Take Control of Your Pigmentation at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Pigmentation does not have to be permanent. The right diagnosis, the right combination of treatments and a consistent maintenance plan can produce visible, lasting improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Pigmentation Assessment Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for pigmentation treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Explore Melasma Treatment</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Pico Laser</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Skin Whitening Treatment</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}