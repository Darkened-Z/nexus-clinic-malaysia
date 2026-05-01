"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
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
  DollarSign,
  ThermometerSnowflake,
  Layers,
  Users,
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
interface KeloidTreatmentProps {
  locale: string;
}

export default function KeloidLandingPage({ locale }: KeloidTreatmentProps) {
  const keloidVsHypertrophic = [
    { feature: "Growth Pattern", keloid: "Extends BEYOND the original wound margin into surrounding healthy skin", hypertrophic: "Remains WITHIN the original wound boundary; does not invade surrounding tissue", significance: "The defining clinical distinction; patients who describe their scar as 'growing' beyond original injury site likely have a keloid" },
    { feature: "Spontaneous Regression", keloid: "Does not resolve on its own; typically continues to grow slowly for months to years", hypertrophic: "May flatten and reduce spontaneously over 12 to 24 months, especially in younger patients", significance: "Hypertrophic scars can be observed before committing to treatment; keloids should be treated as soon as practical" },
    { feature: "Symptoms", keloid: "Often itchy and painful; may cause tightness if over joints; continues to grow", hypertrophic: "May be itchy or uncomfortable but tends to reduce over time as scar matures", significance: "Itching and pain in a scar getting larger over time is a strong indicator of keloid" },
    { feature: "Response to Treatment", keloid: "Requires multiple sessions; higher recurrence rate; combination therapy needed", hypertrophic: "Responds more readily to treatment; lower recurrence; fewer sessions often needed", significance: "Accurate diagnosis prevents over-treatment of hypertrophic scars and under-treatment of true keloids" },
    { feature: "Skin Type Risk", keloid: "Disproportionately affects Fitzpatrick Types III to VI; higher prevalence in Malaysian patients", hypertrophic: "Affects all skin types; slightly more common in darker skin but not as strongly associated", significance: "Malaysian patients with darker skin phototypes are at significantly elevated risk of keloid formation" },
    { feature: "Common Locations", keloid: "Chest, shoulders, upper back, earlobes, jawline, lower abdomen, BCG vaccination site", hypertrophic: "Any surgical scar, acne scar or injury site; more common on face than true keloids", significance: "Scars on chest and shoulders in darker-skinned patients should be assessed with keloid strongly in differential" },
  ];

  const recurrenceData = [
    { treatment: "Steroid Injection Alone (Triamcinolone)", recurrence: "9 to 50% recurrence", sessions: "3 to 6 sessions at 4 to 8 week intervals", recommendedFor: "Early, small to medium keloids; patients with no prior treatment; first-line approach" },
    { treatment: "Steroid Injection plus Cryotherapy", recurrence: "Superior to either alone; lower recurrence than injection monotherapy", sessions: "3 to 5 sessions; cryotherapy applied immediately before injection", recommendedFor: "Small to medium keloids; patients not fully responding to injection alone" },
    { treatment: "Laser (PDL or Fractional) plus Steroid Injection", recurrence: "Significant improvement with lower PIH risk for Fitzpatrick III to V", sessions: "3 to 5 combined sessions; laser first then injection", recommendedFor: "Active red or pink keloids; darker-skinned Malaysian patients where cryotherapy PIH risk is higher" },
    { treatment: "Surgery Alone (No Adjuvant)", recurrence: "45 to 100% recurrence", sessions: "Single procedure; high need for repeat treatment", recommendedFor: "Not recommended as monotherapy; only offered with post-excision injection protocol" },
    { treatment: "Surgery plus Steroid plus Silicone (Triple Therapy)", recurrence: "12.5% recurrence at 13 months (AAFP)", sessions: "Surgery plus immediate post-excision injection; repeat injections weekly for 2-5 weeks then monthly for 3-6 months", recommendedFor: "Large, resistant keloids that have failed injection and laser series; earlobe keloids post-excision" },
  ];

  const siteSpecificProtocols = [
    { site: "Earlobe", typicalCause: "Ear piercing; most common keloid site in Malaysian women", clinicalNotes: "Earlobe keloids respond well to excision combined with post-excision steroid injection; low-tension skin", protocol: "Steroid injection series (3 to 4 sessions) first-line; if inadequate response: excision plus immediate post-excision triamcinolone injection plus pressure earring for 6 months" },
    { site: "Chest and Sternum", typicalCause: "Chest surgery, acne, chickenpox, BCG vaccination scar", clinicalNotes: "Presternal keloids are among the most treatment-resistant and highest-recurrence due to high skin tension", protocol: "Steroid injection series as primary approach; if slow response: add laser; if large resistant: triple therapy with dermatologist coordination" },
    { site: "Shoulder and Upper Arm", typicalCause: "BCG vaccination scar (uniquely Malaysian); injury, surgery", clinicalNotes: "BCG keloids on left upper arm extremely common; require longer courses due to higher skin tension", protocol: "Steroid injection first-line; 4 to 6 sessions; longer intervals (6 to 8 weeks); silicone sheeting between sessions; pressure garment if large" },
    { site: "Jawline and Lower Face", typicalCause: "Acne, especially acne keloidalis nuchae; surgery; shaving injuries", clinicalNotes: "Facial keloids require lower triamcinolone concentrations to reduce skin atrophy and hypopigmentation risk", protocol: "Lower-concentration steroid injection (10mg per mL); laser (PDL or fractional) often preferred as first-line due to lower complication risk" },
    { site: "Back and Abdomen", typicalCause: "Surgery, acne, chickenpox, trauma", clinicalNotes: "Large back and abdominal keloids most challenging due to size and difficulty applying consistent pressure therapy", protocol: "Steroid injection series; fractional laser for large surface-area keloids; silicone sheeting mandatory between sessions; realistic timeline of 6 to 12 months" },
  ];

  const preventionMeasures = [
    { measure: "Silicone Sheeting or Gel", when: "Begin as soon as wound is fully closed (2 to 3 weeks after surgery or injury)", instructions: "Apply 12 to 24 hours daily for 3 to 6 months minimum; most evidence-backed preventive measure for keloid-prone patients" },
    { measure: "Prophylactic Steroid Injection", when: "Consider at first post-surgical review (2 to 4 weeks) for high-risk wounds", instructions: "Low-dose triamcinolone injection at wound edge before keloid develops; discuss with doctor before any planned procedure if you have prior keloid history" },
    { measure: "Pressure Therapy", when: "Post-surgical or post-piercing on high-risk sites", instructions: "Compression garment or pressure earring applies 24 to 40 mmHg of constant pressure; must be worn consistently for at least 6 months to be effective" },
    { measure: "Wound Care Optimisation", when: "Immediately after injury or surgery", instructions: "Keep wound clean, moist and protected; use micropore tape across scar for first 6 to 12 months to reduce mechanical tension; avoid sun exposure on healing wounds" },
  ];

  const pricingTiers = [
    { treatment: "Intralesional Steroid Injection", bestFor: "Early keloids; small to medium keloids; all sites; first-line treatment", sessions: "3 to 6 at 4 to 8 week intervals", price: "RM 150 to RM 450 per session" },
    { treatment: "Cryotherapy (per session)", bestFor: "Small keloids; combined with steroid injection for enhanced outcome", sessions: "3 to 5 combined sessions", price: "RM 200 to RM 500 per session" },
    { treatment: "Pulsed Dye Laser (PDL) for Keloid", bestFor: "Red or active keloids; facial keloids; combined with injection", sessions: "3 to 5 sessions", price: "RM 600 to RM 1,200 per session" },
    { treatment: "Fractional Laser for Keloid Texture", bestFor: "Keloids with significant texture or surface irregularity; large body area keloids", sessions: "3 to 5 sessions", price: "RM 700 to RM 1,500 per session" },
    { treatment: "Combination Programme (Injection plus Laser)", bestFor: "Moderate to large keloids; treatment-resistant keloids", sessions: "3 to 5 combined sessions", price: "From RM 1,500 per session or RM 5,000 to RM 8,000 per programme" },
    { treatment: "Silicone Sheeting / Gel (Prescription)", bestFor: "Post-treatment maintenance; prevention in keloid-prone patients", sessions: "Ongoing: daily use for 3 to 6 months", price: "RM 80 to RM 200 per silicone sheet set" },
  ];

  const faqData = [
    { q: "Can keloids be permanently removed?", a: "No treatment offers guaranteed permanent keloid removal. Keloids result from a genetic predisposition to abnormal wound healing that persists throughout a patient's lifetime. What treatment achieves is significant flattening, reduction in size, symptom relief and the lowest achievable recurrence risk through combination therapy and ongoing maintenance. The 12.5 percent recurrence rate achievable with triple therapy (surgery plus injection plus silicone sheeting) is the lowest documented in published literature but still represents meaningful recurrence risk. At Nexus Clinic KL, patients are told this clearly before treatment begins, and a long-term management programme including 12-month post-treatment monitoring is part of every keloid care plan." },
    { q: "Why do keloids come back after treatment?", a: "Keloid recurrence occurs because the treatment addresses the existing scar tissue but not the underlying predisposition of keloid-prone fibroblasts to overrespond to any new stimulus at the treated site. The inflammatory healing process at the treated area can itself trigger renewed fibroblast activation and collagen overproduction, especially if treatment ends abruptly without a post-treatment maintenance protocol. This is why steroid injection alone has a recurrence rate of 9 to 50 percent and surgery alone has a recurrence rate of 45 to 100 percent. The addition of silicone sheeting after treatment, the use of combination rather than single-modality therapy, and 12-month monitoring for early re-treatment are the strategies that collectively minimise long-term recurrence at Nexus Clinic KL." },
    { q: "Is surgery the best treatment for large keloids?", a: "Surgery alone is the worst treatment for keloids as a monotherapy, with published recurrence rates of 45 to 100 percent. Surgery creates a new wound at the same high-risk site, and in keloid-prone patients, this new wound can trigger a new and often larger keloid formation. When surgery is indicated for very large or resistant keloids that have failed a full injection and laser series, it must be combined with post-excision steroid injections administered immediately after closure and continued weekly for 2 to 5 weeks and then monthly for 3 to 6 months, silicone sheeting and potentially pressure therapy. This triple therapy reduces recurrence to approximately 12.5 percent. At Nexus Clinic KL, surgical excision for keloids is offered only within a planned combination protocol." },
    { q: "Are steroid injections safe for Malaysian skin?", a: "Intralesional steroid injections with triamcinolone acetonide are safe for Malaysian patients when performed correctly by trained doctors. The primary risk specific to darker Fitzpatrick skin types is hypopigmentation at the injection site, which is more visible in Malaysian Malay, Chinese and Indian patients than in lighter-skinned patients. At Nexus Clinic KL, this risk is managed through careful concentration calibration by site, conservative injection volumes per session and monitoring at every follow-up. For facial keloids where any pigmentation change would be highly visible, lower concentrations are used and laser is considered as a preferred primary modality." },
    { q: "Why is my BCG vaccination scar growing?", a: "The BCG vaccination given in early childhood is administered into the left upper deltoid and creates a deliberate skin wound. In keloid-prone patients, this wound can trigger keloid formation that begins months to years after vaccination. BCG keloids on the left upper arm are extremely common in Malaysian and Southeast Asian patients due to the near-universal childhood BCG vaccination programme and the elevated keloid predisposition in the Malaysian population. They typically present as a round or oval raised red or purplish nodule at the vaccination site that may have been slowly growing for years. BCG keloids respond well to the steroid injection series using the deltoid protocol and are among the more manageable keloid presentations at Nexus Clinic KL." },
    { q: "How many sessions does keloid injection take?", a: "Most keloids require 3 to 6 injection sessions at 4 to 8 week intervals before optimal results are achieved. Smaller, early keloids may respond significantly within 3 sessions. Larger, older, or more fibrous keloids require the full 6 session course and sometimes more. The injection interval is important: too frequent sessions increase side effect risk without improving outcomes, while too infrequent sessions allow the keloid to partially re-expand between treatments. At Nexus Clinic KL, the interval is adjusted based on the keloid's response at each session. The first injection tends to produce the most noticeable initial softening." },
    { q: "Can keloid treatment leave a scar or mark?", a: "Keloid treatment with steroid injection or cryotherapy can produce temporary changes at the treatment site. Hypopigmentation (lightening) is the most common visible side effect in darker Malaysian skin and typically fades over weeks to months. Skin atrophy (a slight depression) can occur with excessive triamcinolone concentration and is prevented through careful dosing at Nexus Clinic KL. The goal of treatment is a flat, softer, less symptomatic scar that is less visible than the active keloid. In most patients the treated site is significantly improved in appearance even accounting for any minor side effects from the treatment." },
    { q: "Should I get my keloid on my earlobe removed?", a: "Earlobe keloids are among the most successfully manageable keloid presentations because the earlobe is low-tension skin with good blood supply. At Nexus Clinic KL, the first approach is always a series of 3 to 4 steroid injection sessions. If the keloid responds well but incompletely, injection sessions can be continued. If the keloid does not respond adequately, surgical excision of the earlobe keloid combined with immediate post-excision triamcinolone injection and wearing a pressure earring for 6 months afterwards produces very good outcomes with recurrence rates significantly lower than chest or shoulder keloids. Patients should not have earlobe keloids excised without a post-excision protocol planned, as excision alone still carries 50 to 80 percent recurrence risk." },
    { q: "Is keloid treatment painful?", a: "Intralesional steroid injection into a keloid is uncomfortable rather than painful for most patients. The injection itself involves penetrating the dense, firm keloid tissue, which requires more pressure than a standard injection. At Nexus Clinic KL, lidocaine is routinely mixed with the triamcinolone to reduce pain during and immediately after the injection. The injection takes one to three minutes per keloid. Patients typically rate the discomfort as 3 to 5 out of 10 with lidocaine pretreatment. Cryotherapy produces a brief intense cold sensation that passes quickly. Laser treatment produces a warm snapping sensation managed with cooling. No keloid treatment at Nexus Clinic KL requires sedation." },
    { q: "Is the keloid assessment at Nexus Clinic KL free?", a: "The keloid assessment and treatment consultation at Nexus Clinic KL is included within the initial consultation fee. The consultation includes clinical assessment and measurement of the keloid, confirmation of diagnosis as true keloid versus hypertrophic scar, identification of the most appropriate treatment protocol based on site and size, full transparent pricing for the recommended treatment programme, realistic outcome expectations based on published recurrence data and written prevention guidance for future wounds. If your keloid has already been treated elsewhere and recurred, our doctors will review the previous treatment approach and explain what a different combination protocol could achieve." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-keloid-treatment1.webp",
      after: "/images/B&A-skin/B&A-keloid-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-keloid-treatment2.webp",
      after: "/images/B&A-skin/B&A-keloid-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-keloid-treatment3.webp",
      after: "/images/B&A-skin/B&A-keloid-treatment3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Combination Therapy • Doctor-Only"
        title="Effective Keloid Removal Treatment in Malaysia for"
        highlight="Lasting Keloid Scar Control"
        description="Raised, itchy scars that keep growing and do not respond to creams alone. Keloids are one of the most difficult skin conditions to manage because they resist simple solutions and frequently recur after treatment."
        details="Malaysian patients of Malay, Chinese and Indian ethnicity carry a significantly elevated genetic risk of keloid formation. At Nexus Clinic KL, keloid management begins with accurate diagnosis whether your scar is a true keloid, a hypertrophic scar, or a BCG vaccination keloid on your deltoid."
        note="The BCG vaccination scar on the left upper arm is one of the most uniquely prevalent keloid presentations in Malaysia. Thousands of Malaysians have keloids from their childhood immunisation triggering excessive collagen deposition."
        image="/images/skin/keloid-treatment.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Keloid Treatment"
        ctaText="Free Assessment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in keloid treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Evidence-Based Protocols"
        floatingSubtitle="Over 5,000 procedures completed"
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
              <p className="text-taupe font-inter text-sm">Nexus Clinic Kuala Lumpur — Excellence in Aesthetic Medicine</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-y border-taupe/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Experience</p>
                  <p className="font-georgia text-brown font-bold text-lg">Over 15 Years</p>
                  <p className="font-inter text-taupe text-xs">Combined clinical experience</p>
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
                    <p className="font-inter font-semibold text-brown text-sm">MOH Approved</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">All treatments use MOH-approved medications and devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Only Treatment</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">LCP-certified doctors perform every session</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in keloid management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Intralesional Steroid Injection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">PDL + Fractional Laser</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Silicone Sheeting Protocol</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Keloid Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Evidence-based protocols for lasting scar control</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: "Treatment Options", value: "Steroid injection, laser, cryotherapy, silicone" },
              { icon: Clock, label: "Session Time", value: "15 to 45 minutes depending on modality" },
              { icon: Heart, label: "Downtime", value: "Minimal to 2 days for most treatments" },
              { icon: Activity, label: "Session Spacing", value: "4 to 8 weeks between sessions" },
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
                <p className="font-inter text-sm text-taupe">First-Line Treatment</p>
                <p className="font-georgia text-brown font-semibold">Intralesional triamcinolone acetonide injection</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Who Is at Higher Risk</p>
                <p className="font-georgia text-brown font-semibold">Fitzpatrick Types III to VI; Malaysian Malay, Chinese, Indian</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Realistic Outcome</p>
                <p className="font-georgia text-brown">Significant flattening, symptom relief, lowest achievable recurrence</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">MOH Approved</p>
                <p className="font-georgia text-brown">Yes. All treatments MOH-approved</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Keloid | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Keloid vs Hypertrophic Scar Table */}
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
              { key: "feature", header: "Feature", className: "font-semibold text-brown" },
              { key: "keloid", header: "Keloid" },
              { key: "hypertrophic", header: "Hypertrophic Scar" },
              { key: "significance", header: "Clinical Significance" },
            ]}
            data={keloidVsHypertrophic.map(item => ({
              feature: item.feature,
              keloid: item.keloid,
              hypertrophic: item.hypertrophic,
              significance: item.significance,
            }))}
            title="Keloid vs Hypertrophic Scar"
            subtitle="The diagnosis that changes your treatment plan"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              The growth pattern is the single most reliable distinguishing feature. If the raised scar has expanded beyond the area of the original wound into surrounding skin, it is a keloid. At Nexus Clinic KL, this distinction is confirmed clinically at the initial assessment.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Recurrence Rate Data Table */}
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
                  { key: "treatment", header: "Treatment Approach", className: "font-semibold text-brown" },
                  { key: "recurrence", header: "Published Recurrence Rate" },
                  { key: "sessions", header: "Sessions Required" },
                  { key: "recommendedFor", header: "Recommended For" },
                ]}
                data={recurrenceData.map(item => ({
                  treatment: item.treatment,
                  recurrence: item.recurrence,
                  sessions: item.sessions,
                  recommendedFor: item.recommendedFor,
                }))}
                title="Honest Keloid Treatment Recurrence Rate Data"
                subtitle="Published evidence for each treatment approach"
                variant="default"
                fadeInUp={fadeInUp}
                className="py-12 px-4"
              />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              Surgery alone is the treatment with the highest recurrence rate at 45 to 100 percent. At Nexus Clinic KL, surgical excision is only offered for keloids that have failed a full injection plus laser series, and all surgery is coordinated with a post-excision steroid injection protocol and silicone sheeting programme.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Site-Specific Treatment Protocols Table */}
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
                { key: "site", header: "Keloid Site", className: "font-semibold text-brown" },
                { key: "typicalCause", header: "Typical Cause in Malaysia" },
                { key: "clinicalNotes", header: "Site-Specific Clinical Notes" },
                { key: "protocol", header: "Recommended Protocol at Nexus Clinic KL" },
              ]}
              data={siteSpecificProtocols.map(item => ({
                site: item.site,
                typicalCause: item.typicalCause,
                clinicalNotes: item.clinicalNotes,
                protocol: item.protocol,
              }))}
              title="Keloid Site-Specific Treatment Protocols"
              subtitle="Protocols differ meaningfully by location"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
        </motion.div>
      </section>

      {/* Recurrence Rate Slider Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Keloid Recurrence Risk by Treatment</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Understanding your recurrence risk before starting treatment</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Recurrence</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Keloid site (chest and shoulders have highest recurrence)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Treatment modality (combination therapy has lowest recurrence)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Post-treatment maintenance (silicone sheeting reduces recurrence)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Completion of full treatment course (partial treatment increases recurrence)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Genetic predisposition severity varies between individuals</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Keloids have no guaranteed permanent cure. The goal is meaningful flattening, symptom relief and the lowest achievable recurrence rate through combination therapy.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-wine p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">Recurrence Rate by Treatment</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Triple Therapy (Surgery + Steroid + Silicone)</span>
                    <span className="font-georgia text-2xl font-bold text-white">12.5%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "12.5%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Lowest documented recurrence rate (AAFP)</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Steroid Injection Alone</span>
                    <span className="font-georgia text-2xl font-bold text-white">9 to 50%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "30%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">First-line for early, small to medium keloids</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Surgery Alone (No Adjuvant)</span>
                    <span className="font-georgia text-2xl font-bold text-white">45 to 100%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Not recommended as monotherapy</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Steroid + Cryotherapy or Laser</span>
                    <span className="font-georgia text-2xl font-bold text-white">Superior to alone</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Combination therapy produces better outcomes</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Published recurrence data from AAFP, Ojeh et al. 2020, and Shah et al. 2025
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ 12-month post-treatment monitoring is recommended for all keloid patients to detect early recurrence and initiate re-treatment promptly.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Keloid Prevention Protocol Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <TableForPages
            columns={[
              { key: "measure", header: "Prevention Measure", className: "font-semibold text-brown" },
              { key: "when", header: "When to Apply" },
              { key: "instructions", header: "Instructions and Evidence" },
            ]}
            data={preventionMeasures.map(item => ({
              measure: item.measure,
              when: item.when,
              instructions: item.instructions,
            }))}
            title="Keloid Prevention Protocol"
            subtitle="For keloid-prone patients before the next wound occurs"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />

          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl border-l-4 border-wine">
            <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Critical for Keloid-Prone Patients
            </p>
            <p className="text-taupe font-inter text-sm mt-1">
              Malaysian patients with a known keloid history who present for elective procedures including ear piercing, tattoos, mole removal, or any surgery on the chest or shoulders should disclose their keloid history to their treating doctor before the procedure is performed.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* The Treatment Process Steps */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Keloid Treatment Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Clinical Assessment and Diagnosis", desc: "Doctor examines the scar, measures dimensions, confirms keloid vs hypertrophic scar, evaluates activity level, identifies site-specific considerations." },
              { step: "02", title: "Treatment Planning", desc: "Doctor explains selected treatment approach, recurrence rate for recommended protocol, realistic outcome, number of sessions required, and maintenance programme." },
              { step: "03", title: "Treatment Session", desc: "Lidocaine mixed with triamcinolone injected into keloid tissue in fanning pattern. Cryotherapy or laser applied as needed. Session takes 15 to 45 minutes." },
              { step: "04", title: "Aftercare and Follow-Up", desc: "Written aftercare instructions provided. Silicone sheeting application demonstrated. 12-month post-completion follow-up recommended for recurrence monitoring." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link href="/contact-us/" className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Book Your Keloid Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Evidence-based keloid management at Nexus Clinic KL</p>
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
          className="container mx-auto max-w-5xl"
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
            title="Keloid Treatment Cost in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
            <motion.div variants={fadeInUp} className="text-center mt-4">
              <p className="text-taupe font-inter text-sm italic">
                Combination programmes that incorporate steroid injection plus laser across a 3 to 5 session series offer the best-evidence approach for moderate to large or treatment-resistant keloids. All pricing disclosed at initial assessment.
              </p>
            </motion.div>
        </motion.div>
      </section>

      {/* Common Areas Treated Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Common Keloid Locations We Treat</h2>
            <p className="text-taupe font-inter">Site-specific protocols for each location</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Earlobes (post-piercing keloids)",
              "Chest and sternum",
              "Shoulders and upper arms (BCG vaccination scars)",
              "Jawline and lower face (acne keloidalis)",
              "Back and abdomen",
              "Upper back and scapula",
              "Knees and elbows (post-injury)",
              "C-section scars",
              "Acne scars on chest and back",
            ].map((area, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-4 rounded-xl flex items-center gap-3 border border-taupe/10">
                <CheckCircle className="w-5 h-5 text-wine shrink-0" />
                <span className="text-brown font-inter">{area}</span>
              </motion.div>
            ))}
          </div>
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
              Structured Keloid Management at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Keloids require honest clinical management, not optimistic promises. At Nexus Clinic KL, every keloid patient receives accurate diagnosis, a combination treatment protocol matched to their specific scar's site, size and age, and a post-treatment maintenance programme designed to achieve the lowest achievable recurrence rate.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed aesthetic doctors bring over 15 years of combined experience treating Malaysian Fitzpatrick III to V skin, have performed over 5,000 procedures and follow evidence-based protocols calibrated specifically for the keloid predisposition profile of the Malaysian patient population.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Free Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a consultation for keloid treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available | Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Call: 016-7025699</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">WhatsApp: 03-21635699</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}