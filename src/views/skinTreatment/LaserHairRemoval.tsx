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
  Moon,
  Lightbulb,
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
interface LaserHairRemovalProps {
  locale: string;
}

export default function LaserHairRemovalLanding({ locale }: LaserHairRemovalProps) {
  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-laser-hair-removal1.webp",
      after: "/images/B&A-skin/B&A-laser-hair-removal1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-laser-hair-removal2.webp",
      after: "/images/B&A-skin/B&A-laser-hair-removal2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-laser-hair-removal3.webp",
      after: "/images/B&A-skin/B&A-laser-hair-removal3.webp",
    },
  ];

  const wavelengthData = [
    { wavelength: "755nm Alexandrite Laser", suitability: "Types I to III (fair to light olive skin tones); NOT recommended for typical Malaysian skin", pihRisk: "High: highest melanin absorption; significant burn and PIH risk", efficacy: "Excellent for fine and dark hair on light to medium skin", recommendation: "Not recommended for most Malaysian patients (Fitzpatrick III-V)" },
    { wavelength: "808nm Diode Laser", suitability: "Types I to IV; suitable for lighter Malaysian skin (Fitzpatrick III to IV)", pihRisk: "Moderate: safer than 755nm but still carries PIH risk for darker skin", efficacy: "Good for medium to coarse dark hair; effective on body hair", recommendation: "Suitable for lighter Malaysian Fitzpatrick III patients; NOT recommended for Fitzpatrick V" },
    { wavelength: "1064nm Nd:YAG", suitability: "Types I to VI; the only wavelength suitable for all Malaysian skin types", pihRisk: "Low: lowest melanin absorption; minimal competition with epidermal melanin", efficacy: "Very good for coarse dark hair; deeper penetration targets follicles at depth", recommendation: "Recommended first-line for most Malaysian patients; gold standard for darker skin tones" },
    { wavelength: "IPL (Intense Pulsed Light)", suitability: "Types I to III ideally; NOT recommended for darker skin tones", pihRisk: "High for darker skin tones: broad spectrum includes shorter wavelengths", efficacy: "Lower per-session efficacy than true lasers; results more variable", recommendation: "Not recommended for most Malaysian patients; suitable only for very light-skinned patients" },
  ];

  const hairGrowthCycleData = [
    { phase: "Anagen (Active Growth)", whatIsHappening: "Hair shaft is actively forming; follicle is metabolically active; melanin being produced; bulb attached to papilla", laserResponse: "MAXIMUM RESPONSE: laser energy efficiently absorbed by melanin in active follicle; thermal damage prevents future hair growth", clinicalImplication: "Sessions timed to target anagen follicles simultaneously; 20-30% of facial follicles in anagen at any time; 20-25% on legs; up to 30% on underarms" },
    { phase: "Catagen (Regression)", whatIsHappening: "Hair shaft detaching from papilla; follicle shrinking; metabolic activity reducing", laserResponse: "POOR RESPONSE: follicle disconnecting from blood supply; melanin production slowing; laser cannot reliably reach regenerative papilla", clinicalImplication: "Hairs in catagen during session will regrow at next anagen cycle; represents approximately 2-3% of all hairs at any time" },
    { phase: "Telogen (Resting)", whatIsHappening: "Hair shaft fully detached; follicle dormant; no melanin production; old hair shed", laserResponse: "NO RESPONSE: no melanin target present in dormant follicle; laser passes without follicle damage", clinicalImplication: "Telogen hairs enter new anagen cycle weeks to months after session; new hairs between sessions are NOT treatment failure" },
  ];

  const bodyAreasData = [
    { area: "Upper Lip (Facial Hair)", duration: "Under 5 minutes", sessions: "6 to 10", interval: "6 to 8 weeks", notes: "Facial hair cycles more slowly; hormonal drive common in Malaysian women; numbing not usually required" },
    { area: "Chin and Jawline (Facial Hair)", duration: "5 to 10 minutes", sessions: "8 to 12", interval: "6 to 8 weeks", notes: "Among the most hormonally driven hair areas; PCOS patients may need annual maintenance; screening recommended for dense facial hair" },
    { area: "Underarms", duration: "10 to 15 minutes", sessions: "6 to 8", interval: "4 to 6 weeks", notes: "Most popular area; high anagen synchrony; ingrown hairs resolve after treatment; results visible from session 2 to 3" },
    { area: "Bikini (Standard and Extended Brazilian)", duration: "15 to 25 minutes", sessions: "6 to 8", interval: "4 to 6 weeks", notes: "Extended Brazilian high-demand service; Nd:YAG recommended for darker Malaysian skin; topical numbing provided" },
    { area: "Lower Legs and Calves", duration: "30 to 45 minutes", sessions: "6 to 8", interval: "4 to 6 weeks", notes: "Lower legs respond well; coarser hair absorbs Nd:YAG energy efficiently; avoid tanning 2-4 weeks before sessions" },
    { area: "Back and Chest Body Hair (Men)", duration: "45 to 75 minutes", sessions: "6 to 10", interval: "4 to 6 weeks", notes: "Increasingly popular among Malaysian men; coarse terminal hair responds well; androgen-driven areas may require more sessions" },
  ];

  const pricingTiers = [
    { area: "Upper Lip (Facial Hair)", duration: "Under 5 minutes", sessions: "6 to 10", price: "RM 150 – RM 280 / session" },
    { area: "Chin or Jawline (Facial Hair)", duration: "5 to 10 minutes", sessions: "8 to 12", price: "RM 200 – RM 350 / session" },
    { area: "Underarms (Bilateral)", duration: "10 to 15 minutes", sessions: "6 to 8", price: "RM 300 – RM 500 / session" },
    { area: "Standard Bikini Line", duration: "15 to 20 minutes", sessions: "6 to 8", price: "RM 350 – RM 600 / session" },
    { area: "Extended Brazilian (Full Bikini)", duration: "20 to 30 minutes", sessions: "6 to 8", price: "RM 500 – RM 800 / session" },
    { area: "Lower Legs (Half)", duration: "30 to 45 minutes", sessions: "6 to 8", price: "RM 500 – RM 900 / session" },
    { area: "Full Legs", duration: "60 to 80 minutes", sessions: "6 to 8", price: "RM 900 – RM 1,600 / session" },
    { area: "Back (Men)", duration: "45 to 75 minutes", sessions: "6 to 10", price: "RM 700 – RM 1,400 / session" },
    { area: "Chest (Men)", duration: "30 to 50 minutes", sessions: "6 to 10", price: "RM 500 – RM 1,000 / session" },
  ];

  const faqData = [
    { q: "How many sessions do I need for laser hair removal?", a: "Most people need multiple sessions. The AAD notes 2-6 treatments for many patients, while Nexus Clinic protocols plan 6-8 sessions for optimal results. Face areas may require 8-12 sessions due to slower hair cycles. Sessions are spaced 4-6 weeks apart for body areas and 6-8 weeks for facial hair." },
    { q: "Is laser hair removal permanent?", a: "Laser hair removal provides long-lasting hair reduction, not total permanent removal for every follicle. Most patients achieve 80-90% permanent hair reduction after a full course. Regrowth is usually finer and lighter. Maintenance sessions may be needed every 12-24 months, especially for hormonally driven areas like the female chin." },
    { q: "Does laser hair removal hurt?", a: "Most people describe the sensation as warm pinpricks or a rubber band snap. The Nd:YAG laser with integrated cryogen cooling significantly reduces discomfort. Numbing gel may be used for sensitive areas like the bikini line and face. Most patients rate discomfort at 2 to 4 out of 10." },
    { q: "Can laser hair removal work on dark skin in Malaysia?", a: "Yes, with the right laser technology. The 1064nm Nd:YAG laser is specifically designed for darker skin tones (Fitzpatrick IV to VI) because it bypasses the melanin-rich epidermis. Published studies confirm Nd:YAG is safe for Fitzpatrick IV to VI skin tones. At Nexus Clinic KL, this is the primary laser used for Malaysian patients." },
    { q: "What should I avoid before my laser session?", a: "Avoid waxing, threading, or plucking for at least 4 weeks before treatment as these remove the root that the laser targets. Avoid sun exposure and tanning for 2-4 weeks before. Shave the area 1-2 days before your session. Avoid using fake tan products. Inform your doctor about any photosensitizing medications." },
    { q: "Can I shave between sessions?", a: "Yes. Shaving is recommended between sessions because it keeps the follicle intact while removing surface hair. Never wax, thread, or pluck between sessions as this removes the hair root that the laser needs to target. Shaving is permitted at any time between your scheduled appointments." },
    { q: "How soon will I see results?", a: "The AAD notes many people see a 10-25% reduction after the first treatment. Underarms often show visible reduction from session 2 to 3. Legs and larger areas show meaningful results from session 3 to 4. Maximum results are assessed after completing the full 6-8 session course plus 3-6 months of collagen remodelling." },
    { q: "What are the side effects?", a: "Common short-term side effects include redness and mild swelling lasting a few hours to 48 hours. Pigment changes can occur but are rare with correct wavelength selection. Blistering or scarring is very rare when performed by qualified doctors. Paradoxical hair growth (increased hair in treated areas) is rare but documented, especially on darker skin." },
    { q: "Why is my hair growing back after laser?", a: "Hair grows in cycles. Only hairs in the active anagen phase are effectively treated. New hair appearing between sessions is hair that was in telogen or catagen during the previous session, now entering its next anagen phase. This is not treatment failure—it is why multiple sessions are needed." },
    { q: "How much does laser hair removal cost in Kuala Lumpur?", a: "Cost varies by area size, number of sessions, technology used, and clinic location. At Nexus Clinic KL, upper lip starts from RM150-280 per session, underarms RM300-500, bikini RM350-600, full legs RM900-1,600. Package pricing for 6-8 session programmes is available and reduces per-session cost." },
    { q: "Is IPL the same as laser hair removal?", a: "No. IPL uses broad-spectrum light while laser uses a single precise wavelength. Laser is more precise, more effective per session, and safer for darker skin tones. IPL carries higher PIH risk for Malaysian Fitzpatrick III-V skin. Professional laser hair removal is the gold standard for permanent hair reduction." },
    { q: "Should I do laser hair removal at a salon or a medical clinic?", a: "The AAD and Mayo Clinic both caution that complications like burns and pigment changes are more likely in inexperienced hands. Medical supervision matters. Under Malaysia's Private Healthcare Facilities and Services Act, medical aesthetic laser procedures must be performed by LCP-certified doctors. Salon IPL operates in a regulatory grey area." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Doctor-Led Laser Hair Removal • MOH Registered Clinic"
        title="Safe Laser Hair Removal in Kuala Lumpur for"
        highlight="All Malaysian Skin Types"
        description="The best laser hair removal clinic in Malaysia for permanent laser hair removal treatment. Remove unwanted hair safely using diode laser and Nd:YAG technology calibrated for Malaysian skin in Kuala Lumpur and Selangor."
        details="Waxing every three weeks. Shaving every few days. Ingrown hairs that leave dark marks. For most patients, the question is not whether to start laser hair removal but which clinic to trust with a procedure that, done correctly, delivers safe and permanent hair reduction."
        note="Over 5,000 Aesthetic Procedures Completed — Our doctors have more than 15 years of combined experience treating laser hair removal as the medical procedure it is: assessed per skin type, calibrated per session and honest about realistic results."
        image="/images/skin/laser-hair-removal.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Laser Hair Removal"
        ctaText="Book Free Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in laser hair removal at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Safe for All Skin Types"
        floatingSubtitle="Nd:YAG 1064nm • Diode 808nm"
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">All laser devices MOH-approved and FDA-cleared</p>
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">1064nm Nd:YAG • 808nm Diode</p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Laser Hair Removal in Malaysia at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Laser Technology", value: "Long-pulsed Nd:YAG 1064nm, Diode 808nm with integrated cryogen cooling" },
              { icon: Clock, label: "Session Duration", value: "Under 5 min (upper lip) to 75 min (full back)" },
              { icon: Heart, label: "Sessions Required", value: "6 to 8 for most body areas; 6 to 10 for facial hair" },
              { icon: Zap, label: "Outcome Expectation", value: "80-90% permanent hair reduction after full course" },
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
                <p className="font-inter text-sm text-taupe">Session Spacing</p>
                <p className="font-georgia text-brown font-semibold">Body: 4 to 6 weeks | Face: 6 to 8 weeks</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Who Is Not Suitable</p>
                <p className="font-georgia text-brown">Pregnancy; breastfeeding; tanned skin; grey/white/blonde hair</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">MOH Approved</p>
                <p className="font-georgia text-brown">Yes. All procedures doctor-supervised by LCP-certified doctors</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Laser Hair Removal | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Wavelength Selection Safety Table */}
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
              { key: "suitability", header: "Fitzpatrick Suitability" },
              { key: "pihRisk", header: "PIH Risk for Malaysian Skin" },
              { key: "efficacy", header: "Hair Type Efficacy" },
              { key: "recommendation", header: "Recommendation" },
            ]}
            data={wavelengthData.map(item => ({
              wavelength: item.wavelength,
              suitability: item.suitability,
              pihRisk: item.pihRisk,
              efficacy: item.efficacy,
              recommendation: item.recommendation,
            }))}
            title="Why Wavelength Selection Determines Safe Laser Hair Removal Results"
            subtitle="Understanding which laser is safe for your Malaysian skin type"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              The Alexandrite laser is not recommended for most Malaysian patients (Fitzpatrick III-V). The 1064nm Nd:YAG is the gold standard for darker skin tones and what Nexus Clinic KL uses for most Malaysian patients.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Hair Growth Cycle Slider Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Hair Growth Cycle: Why Multiple Sessions Are Needed</h2>
            <p className="text-taupe font-inter">Understanding how laser hair removal works for different hair phases</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {hairGrowthCycleData.map((item, idx) => (
              <motion.div key={idx} variants={scaleIn} className="bg-light p-6 rounded-xl shadow-lg">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  idx === 0 ? 'bg-green-100 text-green-600' : idx === 1 ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {idx === 0 ? <Zap className="w-6 h-6" /> : idx === 1 ? <Moon className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                </div>
                <h3 className="font-georgia text-xl text-brown mb-3">{item.phase}</h3>
                <div className="mb-3">
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">What Is Happening</p>
                  <p className="font-inter text-sm text-brown">{item.whatIsHappening}</p>
                </div>
                <div className="mb-3">
                  <p className="font-inter text-xs text-wine uppercase tracking-wide">Laser Response</p>
                  <p className="font-inter text-sm text-brown">{item.laserResponse}</p>
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Clinical Implication</p>
                  <p className="font-inter text-sm text-brown">{item.clinicalImplication}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              New hair appearing between sessions is NOT treatment failure. It is hair that was in telogen during the previous session, now entering its next anagen phase. This is why session spacing of 4-6 weeks for body and 6-8 weeks for face is clinically optimal.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Body Areas Treatment Table */}
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
              { key: "area", header: "Body Area", className: "font-semibold text-brown" },
              { key: "duration", header: "Session Duration" },
              { key: "sessions", header: "Sessions Needed" },
              { key: "interval", header: "Interval Between Sessions" },
              { key: "notes", header: "Clinical Notes" },
            ]}
            data={bodyAreasData.map(item => ({
              area: item.area,
              duration: item.duration,
              sessions: item.sessions,
              interval: item.interval,
              notes: item.notes,
            }))}
            title="Laser Hair Removal Services by Body Areas"
            subtitle="Area-specific protocols at Nexus Clinic KL"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
        </motion.div>
      </section>

      {/* Medical Laser vs Salon IPL Comparison */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Medical Laser vs Salon IPL vs Home Devices</h2>
            <p className="text-taupe font-inter">Safety comparison for Malaysian patients</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={scaleIn} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-wine mb-4">Medical Laser (Nd:YAG / Diode)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-brown"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />Single precise wavelength</li>
                <li className="flex items-start gap-2 text-sm text-brown"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />Low PIH risk with correct wavelength</li>
                <li className="flex items-start gap-2 text-sm text-brown"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />High efficacy per session</li>
                <li className="flex items-start gap-2 text-sm text-brown"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />LCP-certified doctor performed</li>
                <li className="flex items-start gap-2 text-sm text-brown"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />MOH-regulated medical device</li>
              </ul>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-amber-600 mb-4">Salon IPL Machine</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-brown"><AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />Broad spectrum light</li>
                <li className="flex items-start gap-2 text-sm text-brown"><AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />Moderate to high PIH risk for darker skin</li>
                <li className="flex items-start gap-2 text-sm text-brown"><AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />Moderate per-session efficacy</li>
                <li className="flex items-start gap-2 text-sm text-brown"><AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />Salon therapist, no medical training</li>
                <li className="flex items-start gap-2 text-sm text-brown"><AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />Largely unregulated sector</li>
              </ul>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-gray-500 mb-4">Home IPL Device</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-brown"><XCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />Very broad spectrum at low intensity</li>
                <li className="flex items-start gap-2 text-sm text-brown"><XCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />Variable PIH risk; often restricted on darker skin</li>
                <li className="flex items-start gap-2 text-sm text-brown"><XCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />Low per-session efficacy</li>
                <li className="flex items-start gap-2 text-sm text-brown"><XCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />Consumer self-administration</li>
                <li className="flex items-start gap-2 text-sm text-brown"><XCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />Regulated as consumer electronics</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              Under Malaysia's Private Healthcare Facilities and Services Act, medical aesthetic laser procedures must be performed by LCP-certified doctors. At Nexus Clinic KL, every patient receives a skin type assessment and contraindication review before any session.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Step by Step Process Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Laser Hair Removal Treatment Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by Step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Clinical Assessment", desc: "Doctor assesses skin type using Fitzpatrick classification, confirms appropriate laser wavelength, identifies contraindications, and confirms body areas to be treated." },
              { step: "02", title: "Preparation", desc: "Treatment area shaved 1-2 days before session. Topical numbing cream applied for sensitive areas 20-30 minutes before session if indicated." },
              { step: "03", title: "Laser Session", desc: "Laser handpiece applied to skin surface. Integrated cryogen spray cools skin before and after each pulse. Sensation: brief snapping or mild stinging followed by warmth." },
              { step: "04", title: "Immediate Aftercare", desc: "Soothing aloe vera gel applied. Written aftercare instructions provided including SPF50 daily use, avoidance of heat for 24 hours, and no waxing between sessions." },
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
                { key: "area", header: "Treatment Area", className: "font-semibold text-brown" },
                { key: "duration", header: "Session Duration" },
                { key: "sessions", header: "Sessions" },
                { key: "price", header: "Price Range (RM) 2026 / Session", className: "font-semibold text-wine" },
              ]}
              data={pricingTiers.map(tier => ({
                area: tier.area,
                duration: tier.duration,
                sessions: tier.sessions,
                price: tier.price,
              }))}
              title="Cost of Laser Hair Removal in Malaysia 2026"
              subtitle="Transparent pricing at Nexus Clinic KL"
              variant="default"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />

            <motion.div variants={fadeInUp} className="text-center mt-4">
              <p className="text-taupe font-inter text-sm italic">
                Package pricing for 6 to 8 session programmes is available for all body areas. Full body programmes covering multiple areas available at combined programme pricing.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare for Laser Hair Removal</h2>
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
                  <span>Mild redness and swelling lasting a few hours to 48 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Warm sensation that dissipates within seconds</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Treated hairs appear to fall out over 1 to 3 weeks</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Sunburn-like sensation that resolves quickly</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Aftercare Instructions
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Avoid heat exposure (saunas, steam rooms, hot baths) for 24-48 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>SPF50 sunscreen daily on treated areas exposed to sun</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Do not wax, thread, or pluck between sessions</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Shaving is permitted between sessions</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Apply fragrance-free moisturiser to treated area</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Who Is a Good Candidate for Laser Hair Removal?</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-wine" />
                You are a good candidate if:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Your hair is dark (black or dark brown)</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You want reduction on underarms, legs, bikini, face, back, or chest</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You get ingrown hairs or razor bumps</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You want a cleaner, low-maintenance routine</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-wine" />
                Important Considerations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Light hair (blonde, red, white, grey): laser is often less effective</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Avoid if recently tanned or sun-exposed (wait 2-4 weeks)</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Pregnancy: many clinics prefer to postpone treatment</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Certain medications that increase light sensitivity</span>
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
              Safe, Effective Laser Hair Removal at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Laser hair removal in Malaysia is safe, effective and one of the highest-satisfaction aesthetic treatments when performed with the correct technology on the correctly assessed skin type by a licensed doctor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Free Laser Hair Removal Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for laser hair removal at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Explore Underarm Hair Removal</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Bikini Laser</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Facial Hair Removal</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}