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
  SunDim,
  Gem,
  Leaf,
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
interface MelasmaTreatmentProps {
  locale: string;
}

export default function MelasmaLanding({ locale }: MelasmaTreatmentProps) {
  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-melasma-treatment1.webp",
      after: "/images/B&A-skin/B&A-melasma-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-melasma-treatment2.webp",
      after: "/images/B&A-skin/B&A-melasma-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-melasma-treatment3.webp",
      after: "/images/B&A-skin/B&A-melasma-treatment3.webp",
    },
  ];

  const melasmaSubtypes = [
    { subtype: "Epidermal Melasma", triggers: "UV exposure, mild hormonal changes", layer: "Epidermis (surface)", appearance: "Brown, clearly defined patches; darkens under Wood's lamp", treatment: "Pico Laser + Prescription Topicals + SPF50" },
    { subtype: "Dermal Melasma", triggers: "Genetic predisposition, chronic UV exposure, aging", layer: "Dermis (deep)", appearance: "Blue-grey tone, diffuse borders; minimal change under Wood's lamp", treatment: "Sylfirm X (Pulsed Wave RF) + Oral Tranexamic Acid; longer timeline" },
    { subtype: "Mixed Melasma", triggers: "UV plus hormones (pregnancy, OCP, HRT)", layer: "Both epidermal and dermal", appearance: "Brown and grey zones within the same patch", treatment: "Sylfirm X + Pico Laser combination + Oral Tranexamic Acid" },
    { subtype: "Vascular Melasma", triggers: "Abnormal blood vessels, heat, inflammation", layer: "Dermal vascular layer", appearance: "Reddish-brown patches that flush or darken with heat", treatment: "Sylfirm X (Pulsed Wave RF to target vessels) + Dual Yellow Laser" },
    { subtype: "Rebound Melasma (Post-Laser)", triggers: "Over-aggressive laser, inadequate SPF post-treatment, inflammation", layer: "Variable", appearance: "Rapid darkening within 2 to 4 weeks after treatment", treatment: "Skin barrier repair first; then gentle Sylfirm X + Oral TXA" },
  ];

  const programmePhases = [
    { phase: "1: Diagnosis and Baseline", timeline: "Month 1 (Consultation)", treatments: "Wood's lamp assessment, subtype mapping, oral tranexamic acid prescribed, SPF protocol established", goal: "Confirm subtype and depth; suppress melanocyte activation systemically before first energy session" },
    { phase: "2: Active Clearance", timeline: "Months 2 to 5", treatments: "Sylfirm X sessions (3 to 4 sessions) combined with conservative pigment laser for epidermal component; ongoing oral TXA and topical creams", goal: "Reduce existing melanin deposits; suppress vascular trigger; begin basement membrane repair" },
    { phase: "3: Consolidation", timeline: "Months 5 to 7", treatments: "Skin booster session (Rejuran or polynucleotide); prescription brightening topicals; monthly Dual Yellow Laser maintenance", goal: "Strengthen skin barrier, reduce inflammatory response, maintain lightening achieved during active clearance" },
    { phase: "4: Maintenance", timeline: "Months 8 to 12 and beyond", treatments: "Quarterly Sylfirm X or Pico Laser top-up; continued oral TXA if hormonal trigger present; daily SPF50 non-negotiable", goal: "Prevent reactivation; manage seasonal flare-ups; sustain improvement achieved in active phase" },
  ];

  const pricingTiers = [
    { treatment: "Sylfirm X RF Microneedling (Full Face)", bestFor: "Vascular, dermal and mixed melasma; recurrent melasma", sessions: "3 to 6", price: "RM 1,000 – RM 1,800 / session" },
    { treatment: "Pico Laser (Full Face)", bestFor: "Epidermal and mixed melasma; surface pigment clearance", sessions: "4 to 8", price: "RM 700 – RM 1,300 / session" },
    { treatment: "Dual Yellow Laser", bestFor: "Vascular component of melasma; maintenance sessions", sessions: "4 to 6", price: "RM 800 – RM 1,400 / session" },
    { treatment: "Oral Tranexamic Acid Programme", bestFor: "All melasma types; hormonal trigger suppression", sessions: "Ongoing (monthly review)", price: "From RM 150 / month" },
    { treatment: "Medical-Grade Chemical Peel", bestFor: "Epidermal melasma; surface exfoliation and cell turnover", sessions: "3 to 5", price: "RM 300 – RM 600 / session" },
    { treatment: "Skin Booster (Rejuran / Polynucleotide)", bestFor: "Post-laser skin barrier repair; anti-inflammatory support", sessions: "2 to 3", price: "RM 900 – RM 1,500 / session" },
    { treatment: "Combination Melasma Programme", bestFor: "Mixed, dermal or rebound melasma (2 or more modalities)", sessions: "5 to 8 total", price: "From RM 3,800 (package pricing available)" },
  ];

  const faqData = [
    { q: "Can melasma be permanently cured?", a: "Melasma cannot be permanently eliminated in the way that a sunspot or freckle can be cleared with laser. It is a chronic, relapsing condition driven by ongoing triggers including UV, hormones and heat. The clinically accurate way to describe successful melasma management is sustained suppression. With the right combination programme and consistent maintenance, patches can be kept visibly clear for extended periods." },
    { q: "Why does my melasma keep coming back after treatment?", a: "Melasma recurrence after treatment almost always traces back to one of four factors: insufficient UV protection, ongoing hormonal activity, heat exposure activating the vascular component, or stopping the maintenance programme too soon. At Nexus Clinic KL, our structured programme addresses all four factors explicitly." },
    { q: "Is Sylfirm X better than Pico Laser for melasma?", a: "For most Malaysian melasma patients, neither technology alone is the complete answer. Sylfirm X is superior for addressing the vascular and dermal components. Pico Laser is more effective at fragmenting visible epidermal melanin deposits. The majority of patients achieve the best outcomes from both technologies used in combination." },
    { q: "How long does melasma treatment take to show results?", a: "Most patients notice mild brightening from the second or third session onwards, typically at 6 to 8 weeks. More meaningful visible patch reduction becomes apparent between months 3 and 5. Full programme results are assessed at the end of the active clearance phase at approximately 5 to 6 months." },
    { q: "Is melasma treatment safe during pregnancy or breastfeeding?", a: "Most energy-based melasma treatments are not recommended during pregnancy or breastfeeding as a precaution. Pregnant patients are advised to focus on daily SPF50 protection and gentle, pregnancy-safe brightening topicals, and to begin a full clinical programme after delivery and the completion of breastfeeding." },
    { q: "What is the difference between melasma and PIH?", a: "Melasma appears as symmetrical, diffuse brown or grey patches typically across the cheeks, forehead, upper lip and nose bridge, driven by hormones, UV and vascular inflammation. PIH appears as spot-like dark marks in specific locations where previous acne lesions or injuries occurred, driven purely by inflammation." },
    { q: "Can men get melasma treatment in Malaysia?", a: "Yes. Melasma in men is a genuine and treatable clinical condition that is underrecognised in Malaysia. Male melasma typically presents in men with outdoor occupational UV exposure, genetic predisposition or thyroid-related hormonal changes. The treatment protocol follows the same subtype-driven approach." },
    { q: "Does oral tranexamic acid have side effects?", a: "Oral tranexamic acid at the doses prescribed for melasma management is generally very well-tolerated. The most commonly reported side effects are mild gastrointestinal symptoms in a minority of patients, which usually resolve within the first week. All patients are assessed for contraindications and reviewed monthly." },
    { q: "How many sessions of Sylfirm X do I need for melasma?", a: "Most patients with moderate melasma require 4 to 6 Sylfirm X sessions during the active clearance phase, spaced 3 to 4 weeks apart. Patients with severe or long-standing dermal melasma may require 6 to 8 sessions. Maintenance sessions are recommended every 2 to 3 months." },
    { q: "Is the melasma consultation at Nexus Clinic KL free?", a: "Yes. Your initial melasma consultation at Nexus Clinic KL is complimentary and includes Wood's lamp examination, melasma subtype and depth assessment, full programme planning with treatment sequence, complete pricing transparency, and prescription initiation if oral tranexamic acid is indicated." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
          badge="Doctor-Led Melasma Treatment • MOH Registered Clinic"
          title="Precise Melasma Treatment in Malaysia for"
          highlight="Lasting Clarity Without Rebound"
          description="Brown patches that fade then return, darken with heat and resist every cream. Nexus Clinic KL identifies your exact melasma subtype and builds a structured programme using Sylfirm X, Pico Laser and oral tranexamic acid."
          details="Melasma in Malaysia is driven by a combination of UV exposure, hormonal activity, vascular inflammation and a damaged skin basement membrane. Treating only the melanin on the surface while these four factors remain active is the reason so many patients experience treatment-resistant and recurrent melasma."
          note="Over 5,000 Aesthetic Procedures Completed — Our doctors have more than 15 years of combined clinical experience managing even the most stubborn and previously worsened melasma cases safely and effectively."
          image="/images/skin/melasma-treatment.webp"
          imageAlt="Nexus Clinic Kuala Lumpur - Melasma Treatment"
          ctaText="Book Free Melasma Assessment"
          ctaLink="/contact-us"
          whatsappMessage="Hi, I'm interested in melasma treatment at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle="Subtype Assessment"
          floatingSubtitle="Wood's Lamp • Trigger Mapping • Phased Programme"
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">15+ years combined experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Subtype-Specific Protocols</p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Melasma Treatment at Nexus Clinic KL at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatments Available", value: "Sylfirm X RF, Pico Laser, Dual Yellow Laser, Chemical Peel, Oral Tranexamic Acid, Prescription Topicals, Skin Booster" },
              { icon: Clock, label: "Session Time", value: "30 to 60 minutes depending on modality" },
              { icon: Heart, label: "Downtime", value: "Minimal; 24 to 48 hours mild redness for Sylfirm X and Pico Laser" },
              { icon: Zap, label: "First Results", value: "Mild brightening visible from session 2 to 3; meaningful patch lightening over 2 to 4 months" },
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
                <p className="font-georgia text-brown font-semibold">4 to 8 sessions for initial clearance; ongoing maintenance every 2 to 3 months</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown font-semibold">Topical numbing cream available on request; most sessions comfortable without</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">All melasma subtypes; Fitzpatrick types III to V; men and women; hormonal and UV-triggered cases</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Melasma | Free Skin Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What is Melasma Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl md:text-5xl text-brown">
                What is <span className="text-wine">Melasma</span>?
              </h2>
              <p className="text-taupe font-inter leading-relaxed">
                Melasma is a type of pigmentation that appears as brown or grey-brown patches, usually on the face. It is common, especially in women, and often linked with hormones and sun exposure.
              </p>
              <div className="bg-cream p-6 rounded-2xl border border-taupe/10">
                <h3 className="font-georgia text-xl text-brown mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-wine" />
                  Important thing to know:
                </h3>
                <p className="text-taupe font-inter">
                  Melasma is not dangerous to your health. But it can feel heavy emotionally, and it's completely valid to want treatment.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/skin/melasma.jpeg"
                  alt="Melasma Consultation at Nexus Clinic KL"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/50 via-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Melasma is Common in Malaysia Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
              Why melasma is so common in{" "}
              <span className="text-wine">Malaysia</span>
            </h2>
            <p className="text-lg text-taupe">
              Malaysia has year-round strong UV levels and a hot, humid climate. Melasma is triggered not only by sunlight, but also by heat and inflammation for many people.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sun, title: "Sun exposure", desc: "and tanning habits" },
              { icon: Heart, title: "Pregnancy related melasma", desc: "(sometimes called 'mask of pregnancy')" },
              { icon: Droplet, title: "Birth control pills", desc: "or hormone shifts" },
              { icon: AlertTriangle, title: "Using strong acids", desc: "or 'whitening' products that irritate your skin barrier" },
              { icon: Zap, title: "Post inflammation", desc: "(after acne, waxing, or aggressive facials)" },
              { icon: Thermometer, title: "Heat triggers", desc: "common in KL climate" },
            ].map((item, idx) => (
              <motion.div key={idx} variants={scaleIn} className="bg-light p-6 rounded-xl border border-taupe/10 hover:border-wine/30 transition-all">
                <div className="w-12 h-12 bg-wine/10 rounded-lg flex items-center justify-center text-wine mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2">{item.title}</h3>
                <p className="text-sm text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Melasma Subtype Matrix Section */}
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
              { key: "subtype", header: "Melasma Subtype", className: "font-semibold text-brown" },
              { key: "triggers", header: "Primary Triggers" },
              { key: "layer", header: "Skin Layer" },
              { key: "appearance", header: "Visual Appearance" },
              { key: "treatment", header: "Recommended Treatment" },
            ]}
            data={melasmaSubtypes.map(item => ({
              subtype: item.subtype,
              triggers: item.triggers,
              layer: item.layer,
              appearance: item.appearance,
              treatment: item.treatment,
            }))}
            title="The Melasma Subtype-Trigger-Treatment Matrix"
            subtitle="Used at every initial consultation at Nexus Clinic KL"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              Mixed melasma, the most prevalent subtype in Malaysian patients, involves both epidermal and dermal pigment and requires at least two modalities to address both layers simultaneously. Vascular melasma requires treating the vascular component through Sylfirm X or Dual Yellow Laser.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Melasma Worsens After Laser Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Why Melasma Sometimes Worsens After Laser Treatment</h2>
            <p className="text-taupe font-inter">And how Nexus Clinic KL prevents this</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-wine" />
                Thermal Activation
              </h3>
              <p className="text-taupe font-inter text-sm">
                Lasers that deliver significant heat to the dermis can activate heat-sensitive melanocytes. Adding thermal energy to an already-inflamed vascular bed causes an acute inflammatory response that triggers melanin overproduction.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-wine" />
                Post-Inflammatory Hyperpigmentation
              </h3>
              <p className="text-taupe font-inter text-sm">
                In Fitzpatrick III to V skin types, any inflammatory event can cause melanocytes to produce excess protective melanin as a healing response, resulting in darker, more difficult to treat pigmentation.
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 bg-wine/5 p-6 rounded-xl border-l-4 border-wine">
            <p className="text-brown font-inter">
              The Nexus Clinic KL protocol uses low-fluence, non-ablative Pico Laser settings, Sylfirm X in Pulsed Wave mode, and oral tranexamic acid initiated before the first laser session to suppress melanocyte signalling at the cellular level.
            </p>
          </motion.div>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Treatments for Melasma at Nexus Clinic KL</h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              { name: "Sylfirm X Radiofrequency Microneedling", desc: "Dual-wave RF technology in Pulsed Wave mode selectively coagulates abnormal dermal blood vessels feeding melasma activity without overheating the melanin-rich epidermis. Continuous Wave RF remodels collagen and repairs the damaged basement membrane. Addresses vascular and structural components simultaneously." },
              { name: "Pico Laser", desc: "Addresses epidermal and superficial dermal melanin deposits through photoacoustic fragmentation. Ultra-short pulses shatter pigment clusters into particles small enough for the body's lymphatic system to clear naturally. Used at conservative, low-fluence settings calibrated to Malaysian skin phototypes." },
              { name: "Dual Yellow Laser", desc: "Combines 577nm yellow and 511nm green wavelengths absorbed by melanin and oxyhaemoglobin. Targets oxyhaemoglobin in abnormal vessels with minimal heat transfer to the epidermis. Frequently used as a maintenance modality between Sylfirm X sessions." },
              { name: "Oral Tranexamic Acid", desc: "Prescription medication that blocks the plasmin-mediated pathway through which UV, hormonal and inflammatory signals activate tyrosinase. Suppresses melanin production at the cellular level. Prescribed as first step in virtually every melasma treatment programme." },
              { name: "Medical-Grade Prescription Topicals", desc: "Formulations containing azelaic acid, kojic acid, niacinamide, tranexamic acid serum and vitamin C derivatives suppress pigment production between clinical sessions. Prescribed based on skin type, melasma subtype and sensitivity." },
              { name: "Skin Booster (Rejuran and Polynucleotide)", desc: "PDRN molecules suppress pro-inflammatory cytokines, accelerate basement membrane repair and improve dermal structural integrity. Reduces likelihood of post-treatment reactivation. Particularly beneficial for previously worsened melasma cases." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10">
                <h3 className="font-georgia text-xl text-brown mb-3">{item.name}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Structured 12-Month Programme Section */}
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
                { key: "phase", header: "Phase", className: "font-semibold text-brown" },
                { key: "timeline", header: "Timeline" },
                { key: "treatments", header: "Treatments" },
                { key: "goal", header: "Goal" },
              ]}
              data={programmePhases.map(item => ({
                phase: item.phase,
                timeline: item.timeline,
                treatments: item.treatments,
                goal: item.goal,
              }))}
              title="The Structured 12-Month Melasma Management Programme"
              subtitle="At Nexus Clinic KL"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              Stopping treatment at the end of Phase 2 when patches have visibly lightened is the single most predictable path to relapse. The consolidation and maintenance phases are the clinical mechanism by which improvement is stabilised and protected.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Melasma in Men Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
                Melasma in Men:{" "}
                <span className="text-wine">A Frequently Overlooked Presentation</span>
              </h2>
              <p className="text-taupe font-inter mb-4">
                Approximately 10 percent of melasma cases worldwide occur in men, and in Malaysia's high-UV environment this proportion is clinically significant, particularly among men who work outdoors.
              </p>
              <p className="text-taupe font-inter mb-4">
                Male melasma shares the same clinical characteristics but has a different trigger profile: cumulative UV exposure, genetic predisposition, heat stress, and in some cases thyroid disorders or testosterone-related hormonal changes.
              </p>
              <div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                <p className="text-wine font-inter text-sm">
                  At Nexus Clinic KL, male melasma is assessed and treated using the same subtype-driven protocol as female melasma. Melasma in men is manageable.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-12 h-12 text-wine" />
                <h3 className="font-georgia text-2xl text-brown">Men Welcome</h3>
              </div>
              <p className="text-taupe font-inter">
                Male patients often find that their melasma has been previously dismissed as general tanning or sun damage. A proper clinical assessment identifies the condition and builds a targeted management plan.
              </p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Melasma Treatment Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by Step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Diagnostic Assessment", desc: "Doctor examines melasma patches under standard and Wood's lamp lighting to determine subtype, depth and distribution. Medical history, hormonal status, sun exposure habits reviewed." },
              { step: "02", title: "Programme Planning", desc: "Doctor confirms melasma subtype, explains treatment sequence, prescribes oral tranexamic acid. Structured daily routine covering cleanser, topical brightener and SPF50 established." },
              { step: "03", title: "Treatment Session", desc: "Sylfirm X sessions take 30 to 40 minutes. Pico Laser sessions take 20 to 30 minutes. Sessions spaced 3 to 4 weeks apart to allow pigment clearance without inflammatory response." },
              { step: "04", title: "Structured Follow-up", desc: "Doctor assesses skin response, adjusts energy parameters, oral TXA dose and topical prescription based on observed improvement. Progress documented with standardised photography." },
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
              { key: "treatment", header: "Treatment", className: "font-semibold text-brown" },
              { key: "bestFor", header: "Best For" },
              { key: "sessions", header: "Sessions" },
              { key: "price", header: "Price Range (RM) 2026", className: "font-semibold text-wine" },
            ]}
            data={pricingTiers.map(tier => ({
              treatment: tier.treatment,
              bestFor: tier.bestFor,
              sessions: tier.sessions,
              price: tier.price,
            }))}
            title="Melasma Treatment Cost in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />

          <motion.div variants={fadeInUp} className="text-center mt-4">
            <p className="text-taupe font-inter text-sm italic">
              Combination melasma programmes deliver the most durable outcomes. Package pricing available for committed multi-session programmes.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare for Melasma Treatment</h2>
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
                  <span>Sylfirm X: mild redness and warm sensation for 24 to 48 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Tiny pinpoint marks from microneedle channels resolve within 1 to 2 days</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Pico Laser: mild redness for a few hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Brief darkening of patches in first 7 to 10 days as fragmented melanin rises to surface</span>
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
                  <span>SPF50 broad-spectrum sunscreen every morning, reapplied every two hours during outdoor exposure</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Physical sunscreens with zinc oxide or titanium dioxide preferred</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Avoid saunas, hot yoga, cooking heat for 5 to 7 days post-session</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Avoid physical and chemical exfoliants for 5 to 7 days post-Pico Laser</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Continue oral tranexamic acid as prescribed</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Who Melasma Treatment Is For (And Who Should Pause)</h2>
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
                  <span>You have facial patches that darken with sun or heat</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Your pigmentation keeps coming back even after skincare</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You want a plan that includes prevention, not only procedures</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have Asian skin prone to rebound pigmentation and want careful settings</span>
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
                  <span>You are pregnant or breastfeeding (many options are limited)</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Your skin is currently irritated, peeling, or over-exfoliated</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have active eczema or uncontrolled skin inflammation</span>
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
              Take Control of Your Melasma at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Melasma is one of the most challenging skin conditions to manage in Malaysia's climate. But it is manageable. The right subtype diagnosis, the right combination of modalities, a structured annual programme and consistent photoprotection produce results that last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Melasma Assessment Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for melasma treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Explore Pigmentation Treatment</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Pico Laser</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Sylfirm X</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}