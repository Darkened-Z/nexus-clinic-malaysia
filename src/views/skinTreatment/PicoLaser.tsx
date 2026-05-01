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
  Phone,
  MessageCircle,
  Users,
  FileText,
  Flame,
  Snowflake,
  HelpCircle,
  Camera,
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

interface PicoLaserProps {
  locale: string;
}

export default function PicoLaserLanding({ locale }: PicoLaserProps) {
  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-pico-laser1.webp",
      after: "/images/B&A-skin/B&A-pico-laser1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-pico-laser2.webp",
      after: "/images/B&A-skin/B&A-pico-laser2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-pico-laser3.webp",
      after: "/images/B&A-skin/B&A-pico-laser3.webp",
    },
  ];

  const wavelengthData = [
    { wavelength: "532nm (Green)", penetration: "Epidermis only (superficial)", target: "Melanin and haemoglobin (red pigment)", concerns: "Red and orange pigmentation, vascular lesions, superficial sunspots, red acne marks", suitability: "Types I to III; higher PIH risk in Types IV to V; used with caution in darker Malaysian skin" },
    { wavelength: "755nm (Alexandrite)", penetration: "Epidermis to superficial dermis", target: "Melanin (high absorption)", concerns: "Freckles, sunspots, mild melasma (epidermal), uneven skin tone, blue and green tattoo ink", suitability: "Types I to IV; sweet spot for medium-tone Malaysian skin (Fitzpatrick III to IV)" },
    { wavelength: "1064nm (Nd:YAG)", penetration: "Dermis (deep)", target: "Melanin (low absorption at surface; bypasses epidermis)", concerns: "Deep melasma, ABNOM, Hori's nevus, dermal pigmentation, acne scars, pores, skin toning", suitability: "Types I to VI; safest wavelength for dark Malaysian skin (Types IV to V)" },
  ];

  const deliveryModes = [
    { mode: "Toning Mode (Full-Face Low-Fluence)", mechanism: "Uniform low-energy passes over the full face; breaks surface and mid-dermal pigment particles gradually", bestFor: "Melasma management, PIH, general brightening, skin tone evening, maintenance", downtime: "Minimal; mild redness for a few hours", sessions: "4 to 8 sessions monthly; ongoing maintenance" },
    { mode: "Fractional LIOB Mode (Focus Lens Array)", mechanism: "Focused lens concentrates energy into micro-columns creating Laser-Induced Optical Breakdown; triggers deep collagen remodelling", bestFor: "Acne scars (rolling, boxcar), enlarged pores, skin texture, fine lines, wrinkle reduction", downtime: "24 to 48 hours redness; occasional pinpoint marks resolving in 2 to 3 days", sessions: "3 to 6 sessions at 4 to 6 week intervals" },
    { mode: "Spot Mode (Targeted High-Fluence)", mechanism: "High-energy pulse concentrated on individual lesion; immediate photoacoustic shattering of target pigment", bestFor: "Sunspots, freckles, age spots, seborrhoeic keratoses, individual moles (benign), tattoo ink", downtime: "Pigment darkens and sheds over 5 to 7 days; flat scar-free healing", sessions: "1 to 3 sessions per lesion depending on depth" },
  ];

  const comparisonData = [
    { factor: "Pulse Duration", pico: "Picoseconds (trillionths of a second)", qs: "Nanoseconds (billionths of a second)", co2: "Milliseconds (continuous ablative)" },
    { factor: "Mechanism", pico: "Photoacoustic (pressure-based); minimal heat", qs: "Photothermal (heat-based); more thermal spread", co2: "Ablative (vaporises tissue layers); significant heat" },
    { factor: "Best For", pico: "Pigmentation (all types), acne scars, pores, rejuvenation, tattoo removal; all-rounder", qs: "Skin toning, mild pigmentation, maintenance; lower cost option", co2: "Moderate to deep acne scars, skin resurfacing, significant texture correction" },
    { factor: "PIH Risk for Malaysian Skin", pico: "Low; photoacoustic mechanism reduces thermal PIH trigger", qs: "Moderate; heat generation increases PIH risk in Types IV to V", co2: "Moderate to high; surface ablation carries significant PIH risk" },
    { factor: "Downtime", pico: "Minimal; 24 to 48 hours redness; no open wound", qs: "Minimal; mild redness for hours", co2: "5 to 7 days; visible healing process; social downtime required" },
    { factor: "Sessions to Visible Result", pico: "Fewer; results visible from session 1 to 2", qs: "More; gradual improvement over more sessions", co2: "Fewer sessions but longer recovery per session" },
    { factor: "Price Per Session Malaysia", pico: "RM 700 to RM 1,500", qs: "RM 200 to RM 500", co2: "RM 1,200 to RM 2,500" },
  ];

  const pricingTiers = [
    { treatment: "Full Face Toning (Brightening / Maintenance)", mode: "Toning Mode (1064nm)", sessions: "4 to 8 monthly", price: "RM 700 – RM 1,000 / session" },
    { treatment: "Pigmentation Removal (Sunspots, Freckles, PIH)", mode: "Spot Mode + Toning (532nm or 755nm)", sessions: "3 to 5", price: "RM 700 – RM 1,200 / session" },
    { treatment: "Melasma Management", mode: "Toning Mode (1064nm low fluence)", sessions: "4 to 8 + maintenance", price: "RM 700 – RM 1,100 / session" },
    { treatment: "Acne Scar Treatment (Fractional Collagen)", mode: "Fractional LIOB Mode (755nm or 1064nm)", sessions: "4 to 8", price: "RM 900 – RM 1,500 / session" },
    { treatment: "Skin Rejuvenation and Pore Refinement", mode: "Fractional LIOB Mode + Toning", sessions: "3 to 5", price: "RM 800 – RM 1,300 / session" },
    { treatment: "Tattoo Removal (per session)", mode: "Spot Mode (wavelength per ink colour)", sessions: "4 to 10", price: "RM 300 – RM 1,200 per session (size-dependent)" },
    { treatment: "Combination Programme (Pigmentation + Scars)", mode: "Multi-mode per session; tailored protocol", sessions: "5 to 8 total", price: "From RM 3,500 (package pricing available)" },
  ];

  const faqData = [
    { q: "What is the difference between Pico Laser and Q-Switched laser?", a: "Pico Laser delivers energy in picoseconds using photoacoustic pressure to shatter pigment with minimal heat. Q-Switched laser delivers energy in nanoseconds using a photothermal mechanism that generates more heat. For Malaysian patients, Pico Laser requires fewer sessions, carries lower PIH risk, and is effective across a broader range of concerns including deep acne scars." },
    { q: "How many sessions of Pico Laser do I need?", a: "Surface pigmentation: 3 to 5 Spot mode sessions. PIH and mild melasma: 4 to 8 Toning mode sessions. Acne scars: 4 to 8 Fractional LIOB mode sessions spaced 4 to 6 weeks apart. Tattoo removal: 4 to 10 sessions depending on ink depth and colour. Your doctor will estimate your specific requirement at consultation." },
    { q: "Is Pico Laser safe for dark Malaysian skin?", a: "Yes, when the correct wavelength and settings are used. The 1064nm wavelength is designed for darker Fitzpatrick skin types because it bypasses the melanin-rich epidermis. At Nexus Clinic KL, doctors use conservative fluence settings and select 1064nm as the primary wavelength for Fitzpatrick Types IV and V patients." },
    { q: "Will my pigmentation come back after Pico Laser?", a: "Sunspots and freckles can recur with continued unprotected sun exposure. Melasma requires ongoing management as triggers remain present. Consistent daily SPF50 use after treatment is the most effective preventive step." },
    { q: "Why do my pigment spots look darker after Pico Laser?", a: "Darkening in the first 3 to 7 days is expected and a sign the laser worked correctly. Fragmented melanin particles rise towards the skin surface before shedding naturally. Do not pick or scratch the darkened spots during this period." },
    { q: "Can Pico Laser be used on the body?", a: "Yes. Pico Laser is used on the neck, chest, shoulders, back, hands and arms for pigmentation, tattoo removal and skin rejuvenation. Body skin is thicker and may require different energy settings." },
    { q: "Can Pico Laser treat acne scars on darker skin?", a: "Yes. Fractional LIOB mode using 1064nm is suited for acne scar treatment in Fitzpatrick Types IV and V. The 1064nm wavelength delivers collagen-inducing energy to the dermis without surface thermal injury that triggers PIH." },
    { q: "How is Pico Laser different from Pico Toning?", a: "Pico Toning refers specifically to low-fluence, full-face Toning mode delivery. It is one of three delivery modes. If your concern is acne scarring, Fractional mode is required. If you have individual lesions, Spot mode is indicated." },
    { q: "Does Pico Laser hurt?", a: "With topical numbing cream, the treatment feels like mild rubber band snaps or warm tingling. Most patients find it entirely tolerable. Spot mode sessions produce a slightly more intense sensation at each pulse which passes immediately." },
    { q: "Is the Pico Laser consultation at Nexus Clinic KL free?", a: "Yes. Your initial consultation is complimentary and includes full skin type assessment, Fitzpatrick classification, identification of your specific concern, selection of appropriate wavelength and delivery mode, realistic session estimate, and transparent pricing." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Doctor-Led Pico Laser • MOH Registered Clinic"
        title="Sharper Pico Laser in Kuala Lumpur for"
        highlight="Pigmentation, Acne Scars and Lasting Skin Clarity"
        description="Skin that has cycled through whitening creams and toning lasers without lasting results needs a different approach. Nexus Clinic KL uses calibrated wavelengths and targeted delivery modes to treat your specific concern precisely."
        details="Pico Laser is not a single treatment. It is a platform with multiple wavelengths, multiple delivery modes and multiple clinical applications. The results you achieve depend on whether the correct wavelength and mode are matched to your specific skin concern."
        note="Over 5,000 Aesthetic Procedures Completed — Our doctors bring more than 15 years of combined clinical experience treating Malaysian Fitzpatrick III to V skin."
        image="/images/skin/pico-laser.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Pico Laser Treatment"
        ctaText="Book Free Pico Laser Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in Pico Laser treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Calibrated Treatment"
        floatingSubtitle="Wavelength • Mode • Energy • Your Skin Type"
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">FDA-cleared picosecond laser device</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Licensed Aesthetic Doctors</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">15+ years combined experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Wavelength-Calibrated Protocols</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">532nm • 755nm • 1064nm selected per concern</p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Pico Laser Treatment at Nexus Clinic KL at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatment", value: "Pico Laser: Toning Mode, Fractional LIOB Mode, Spot Mode; wavelengths 532nm, 755nm, 1064nm" },
              { icon: Clock, label: "Session Time", value: "20 to 45 minutes depending on treatment area, mode and passes" },
              { icon: Heart, label: "Downtime", value: "Minimal; 24 to 48 hours mild redness; pigment spots may darken for 5 to 7 days" },
              { icon: Zap, label: "Sessions Required", value: "Pigmentation: 3 to 6 | Acne scars: 4 to 8 | Rejuvenation: 3 to 5 | Tattoo: 4 to 10" },
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
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown font-semibold">Topical numbing cream applied 20 to 30 minutes before session</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Pigmentation, melasma, PIH, sunspots, freckles, acne scars, enlarged pores, rejuvenation, tattoo removal</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Fitzpatrick Types</p>
                <p className="font-georgia text-brown">Types I to V; protocols calibrated for Malaysian skin</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Skin Concern 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Wavelength Clinical Decision Framework */}
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
                { key: "wavelength", header: "Wavelength", className: "font-semibold text-brown" },
                { key: "penetration", header: "Penetration Depth" },
                { key: "target", header: "Primary Target" },
                { key: "concerns", header: "Skin Concerns Treated" },
                { key: "suitability", header: "Fitzpatrick Suitability" },
              ]}
              data={wavelengthData.map(item => ({
                wavelength: item.wavelength,
                penetration: item.penetration,
                target: item.target,
                concerns: item.concerns,
                suitability: item.suitability,
              }))}
              title="The Pico Laser Wavelength Clinical Decision Framework"
              subtitle="Used at every initial Pico Laser consultation at Nexus Clinic KL"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />

          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              532nm carries the highest risk of post-inflammatory hyperpigmentation in Fitzpatrick Type IV and V skin. At Nexus Clinic KL, 1064nm is the safest and most versatile wavelength for the broadest range of Malaysian skin types.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Three Pico Laser Delivery Modes */}
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
                { key: "mode", header: "Delivery Mode", className: "font-semibold text-brown" },
                { key: "mechanism", header: "Mechanism" },
                { key: "bestFor", header: "Best For" },
                { key: "downtime", header: "Downtime" },
                { key: "sessions", header: "Sessions Needed" },
              ]}
              data={deliveryModes.map(item => ({
                mode: item.mode,
                mechanism: item.mechanism,
                bestFor: item.bestFor,
                downtime: item.downtime,
                sessions: item.sessions,
              }))}
              title="The Three Pico Laser Delivery Modes Used at Nexus Clinic KL"
              subtitle="Different modes for different clinical applications"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              Acne scar treatment requires Fractional LIOB mode, not Toning mode. Patients whose acne scar treatment has consisted exclusively of toning mode sessions have been receiving the mode designed for pigmentation maintenance applied to a concern that requires fractional collagen induction.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pico Laser vs Q-Switched vs Fractional CO2 */}
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
                { key: "factor", header: "Factor", className: "font-semibold text-brown" },
                { key: "pico", header: "Pico Laser" },
                { key: "qs", header: "Q-Switched Nd:YAG" },
                { key: "co2", header: "Fractional CO2 Laser" },
              ]}
              data={comparisonData.map(item => ({
                factor: item.factor,
                pico: item.pico,
                qs: item.qs,
                co2: item.co2,
              }))}
              title="Pico Laser vs Q-Switched Laser vs Fractional CO2"
              subtitle="Which is right for your concern?"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              Pico Laser is the most versatile, safest and lowest-downtime option across the broadest range of skin concerns for Fitzpatrick III to V skin. At Nexus Clinic KL, our doctors make recommendations based on your clinical picture rather than defaulting to whichever laser the clinic owns.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* What to Expect Session by Session */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What to Realistically Expect Session by Session</h2>
            <p className="text-taupe font-inter">From Pico Laser at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-wine mb-3">After Session One</h3>
              <p className="text-taupe font-inter">Pigmentation patients: treated spots appear mildly darker in first 3 to 7 days before gradually lightening. Acne scar patients: minimal visible change expected; collagen remodelling takes 4 to 6 weeks.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-wine mb-3">After Sessions Two and Three</h3>
              <p className="text-taupe font-inter">Pigmentation patients: meaningful visible lightening and overall skin brightness improvement. Acne scar patients: first noticeable textural improvement as new collagen begins to fill scar floor.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-wine mb-3">After Sessions Four to Six</h3>
              <p className="text-taupe font-inter">Melasma patients: reach maintenance phase. Acne scar patients: most significant textural improvement as cumulative collagen remodelling matures. Maximum improvement assessed at 3 to 6 months after final session.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Pico Laser Treats Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Pico Laser Treats at Nexus Clinic KL</h2>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-wine mb-3">Pigmentation: Melasma, Sunspots, Freckles and PIH</h3>
              <p className="text-taupe font-inter">Photoacoustic mechanism shatters melanin clusters without generating surface heat. 1064nm for deep melasma, 755nm for epidermal sunspots, combination for mixed pigmentation. Oral tranexamic acid prescribed alongside for melasma patients.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-wine mb-3">Acne Scars: Rolling, Boxcar and Ice Pick</h3>
              <p className="text-taupe font-inter">Fractional LIOB mode triggers deep dermal collagen remodelling. Rolling scars respond particularly well. Boxcar scars improve meaningfully. Ice pick scars may require combination with TCA CROSS. Session intervals of 4 to 6 weeks allow collagen remodelling to mature.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-wine mb-3">Skin Rejuvenation, Enlarged Pores and Early Ageing</h3>
              <p className="text-taupe font-inter">Fractional LIOB mode's collagen induction extends to general skin texture improvement, pore refinement and fine line reduction. Combination protocols combine Toning mode for brightness with Fractional mode for collagen stimulation.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-wine mb-3">Tattoo Removal</h3>
              <p className="text-taupe font-inter">Photoacoustic shockwave shatters ink particles into finer fragments for more efficient clearance. Black ink responds to 1064nm. Blue and green respond to 755nm. Red and orange respond to 532nm. Session intervals of 6 to 8 weeks allow immune clearance.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Step by Step Process Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Pico Laser Treatment Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by Step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Skin Assessment & Treatment Planning", desc: "Doctor reviews skin concern, Fitzpatrick type, previous laser history. Wavelength, delivery mode, energy settings determined. Wood's lamp examination for pigmentation concerns." },
              { step: "02", title: "Numbing Cream Application", desc: "Medical-grade topical anaesthetic applied to treatment area for 20 to 30 minutes. Treatment feels like mild rubber band snaps across the skin surface." },
              { step: "03", title: "The Laser Session", desc: "Doctor applies Pico Laser handpiece in methodical pattern matched to delivery mode. Total treatment time: 20 to 45 minutes depending on mode and area." },
              { step: "04", title: "Immediate Post-Treatment Care", desc: "Cooling mist or soothing serum applied. SPF50 sunscreen applied before leaving. Written aftercare instructions provided. Next session scheduled at appropriate interval." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl">
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
              { key: "treatment", header: "Treatment / Concern", className: "font-semibold text-brown" },
              { key: "mode", header: "Mode Used" },
              { key: "sessions", header: "Sessions" },
              { key: "price", header: "Price Range (RM) 2026", className: "font-semibold text-wine" },
            ]}
            data={pricingTiers.map(tier => ({
              treatment: tier.treatment,
              mode: tier.mode,
              sessions: tier.sessions,
              price: tier.price,
            }))}
            title="Pico Laser Price in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />

          <motion.div variants={fadeInUp} className="text-center mt-4">
            <p className="text-taupe font-inter text-sm italic">
              Combination programmes covering both pigmentation and acne scar concerns available at package pricing. All session pricing includes pre-treatment numbing cream, doctor-performed session, and post-treatment care.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects and Aftercare Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare for Pico Laser Treatment</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Expected Side Effects
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Mild redness and warm sensation for a few hours to 48 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Toning mode: patients return to normal activities same day</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Fractional LIOB mode: small pinpoint redness for 1 to 3 days</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Spot mode: pigment darkens in first 3 to 7 days before shedding</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Aftercare Instructions
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>SPF50 broad-spectrum sunscreen every morning, reapplied every two hours for minimum 2 weeks</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Pause active exfoliants (retinol, AHA, BHA) for 5 to 7 days after Fractional and Spot mode</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Gentle cleanser and ceramide-rich moisturiser for barrier recovery</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Avoid steam rooms, saunas, heavy exercise for 48 hours post-session</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Who Pico Laser Is For (And Who Should Pause)</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-wine" />
                You are a good candidate if:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have stubborn pigmentation, sunspots, freckles, or PIH</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have acne scars affecting skin texture and confidence</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You want overall skin rejuvenation with minimal downtime</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have darker skin and want a laser with lower PIH risk</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-wine" />
                You may need to pause or adjust if:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You are pregnant or breastfeeding (laser treatments postponed)</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have active skin infections, open wounds, or severe acne inflammation</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have taken isotretinoin within the past 6 months</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have a history of keloid scarring (requires careful planning)</span>
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
              Precise Pico Laser Treatment at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Pico Laser delivers its best results when wavelength, mode and energy settings are calibrated to the individual patient's skin concern, Fitzpatrick type and treatment history. The same device used at the wrong wavelength delivers no meaningful result regardless of how many sessions are completed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Pico Laser Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for Pico Laser treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Explore Pigmentation Treatment</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Acne Scar Treatment</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Melasma Treatment</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}