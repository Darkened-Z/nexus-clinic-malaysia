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
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
interface NoseFillerProps {
  locale: string;
}

export default function NoseFiller({ locale }: NoseFillerProps) {
  const nasalZones = [
    { zone: "Nasal bridge (dorsum)", what: "Raises bridge height, camouflages dorsal hump, improves side profile", risk: "Moderate to high", technique: "Blunt cannula preferred. Small aliquots, deep supraperiosteal plane" },
    { zone: "Nasal tip", what: "Adds projection and definition to the tip", risk: "Moderate", technique: "Fine needle, very small volume, precise central placement" },
    { zone: "Columella", what: "Lifts tip rotation, improves tip to lip angle", risk: "Moderate", technique: "Very small volume, experienced injector only" },
    { zone: "Radix (nasal root)", what: "Softens transition between forehead and bridge", risk: "High", technique: "Experienced injector only. Strict volume limits" },
    { zone: "Nasal sidewalls", what: "Corrects lateral contour irregularities", risk: "Moderate", technique: "Small volume, superficial to bone, careful placement" },
    { zone: "Base and alar region", what: "Corrects mild asymmetry", risk: "High", technique: "Only where clinically necessary. Very small volume" },
  ];

  const comparisonData = [
    { factor: "Primary effect", filler: "Volume addition and profile smoothing", thread: "Structural lift of existing tissue", surgery: "Permanent structural change to bone and cartilage" },
    { factor: "Best for", filler: "Low bridge, hump camouflage, mild tip correction", thread: "Low bridge, drooping tip, profile lift", surgery: "Major structural change, breathing issues, large humps" },
    { factor: "Results", filler: "Immediate. Visible same day", thread: "Immediate lift. Improves over 6-8 weeks", surgery: "Final result after 6-12 months of healing" },
    { factor: "Longevity", filler: "12 to 18 months", thread: "PDO: 12-18 months. PCL: 24-36 months", surgery: "Permanent" },
    { factor: "Reversible", filler: "Yes. Fully dissolvable with hyaluronidase", thread: "No. Dissolves naturally over time", surgery: "No. Revision surgery possible but complex" },
    { factor: "Vascular risk", filler: "Moderate to high", thread: "Very low. No vascular involvement", surgery: "Standard surgical risks apply" },
    { factor: "Downtime", filler: "1 to 3 days mild swelling", thread: "2 to 5 days mild swelling", surgery: "2 to 4 weeks. Significant bruising" },
    { factor: "Cost in KL (2026)", filler: "RM 1,200 – RM 2,500", thread: "RM 2,000 – RM 4,500", surgery: "RM 15,000 – RM 35,000+" },
  ];

  const pricingTiers = [
    { treatment: "Nose filler (bridge or tip enhancement)", volume: "0.5 to 1 ml", price: "RM 2,200 – RM 3,000" },
    { treatment: "Nose reshaping / contour correction", volume: "0.5 to 1.5 ml", price: "RM 2,500 – RM 3,500+" },
  ];

  const faqData = [
    { q: "How long does nose filler last in Malaysia?", a: "Nose filler in Malaysia typically lasts 12 to 18 months depending on the product used and the patient's individual metabolism. The nose is a relatively high-mobility area compared to the cheeks but lower than the lips. Most patients schedule a maintenance top-up between 12 and 15 months after their initial treatment. Combining nose filler with nose thread lift often extends the overall result because the threads provide structural support that reduces filler breakdown rate." },
    { q: "How much does nose filler cost in Malaysia in 2026?", a: "Nose filler treatments in Malaysia typically range from RM 1,800 to RM 3,000+ at Nexus Clinic KL in 2026, depending on the product used, volume required and the level of correction needed. Final pricing is confirmed after consultation based on your facial structure and treatment plan." },
    { q: "Is nose filler safe in Malaysia?", a: "Nose filler is safe when performed by a licensed medical doctor trained in nasal vascular anatomy, using MOH-approved HA products, with hyaluronidase available for emergency use. The nose is the highest-risk filler area on the face due to its proximity to the ophthalmic circulation. The treatment is significantly more dangerous when performed by unregistered practitioners, in non-clinical settings or with cheap unregistered products. At Nexus Clinic KL, all nose filler treatments follow strict vascular safety protocols." },
    { q: "Can nose filler be dissolved if I do not like the result?", a: "Yes. Hyaluronic acid nose filler is fully dissolvable with hyaluronidase. If you are unhappy with the shape, volume or symmetry of the result, the filler can be partially or completely removed at a follow-up appointment. This is one of the primary reasons HA filler is the standard choice for non-surgical rhinoplasty. Permanent fillers and non-HA products used for the nose cannot be dissolved and carry significantly higher complication risk." },
    { q: "How much filler is appropriate for the nose?", a: "Most nose filler treatments use 0.5 to 1ml for natural, proportionate results. Volume above 1.5ml in a single nose session increases compression risk to nasal vasculature and the risk of skin necrosis from pressure on blood vessels. If a clinic recommends more than 1.5ml of nose filler in a single session without strong clinical justification, this warrants a careful second opinion. The nose responds well to precise, conservative volumes placed at the right depth." },
    { q: "What is the difference between nose filler and a non-surgical nose thread lift?", a: "Nose filler adds volume using hyaluronic acid gel to raise the bridge, smooth a hump or refine the tip. The result is immediate and the treatment is reversible. Nose thread lift inserts dissolvable PDO or PCL threads that lift and reposition existing nasal tissue without adding volume. Threads carry a significantly lower vascular risk than filler because no injection of a foreign substance into blood vessel proximity is involved. Many patients get the best overall result by combining both at the same appointment." },
    { q: "Can I have nose filler after rhinoplasty?", a: "Yes, but with important precautions. Post-rhinoplasty nose filler can address minor contour irregularities, depressions or asymmetries in healed surgical noses. The altered vascular anatomy after rhinoplasty increases the complication risk slightly compared to a non-operated nose. The doctor needs to assess the surgical history, scarring pattern and skin thickness carefully before planning treatment. A minimum of 12 months post-surgery healing is required before filler can be safely considered." },
    { q: "Will nose filler make my nose look bigger?", a: "Correctly placed nose filler creates the visual impression of a more defined, narrower nose, not a larger one. Adding height to a flat bridge draws the nose upward rather than outward and creates the proportional definition that makes the nose look narrower in context. The most common cause of an overfilled, wider-looking nose is too much volume placed at too superficial a depth, especially around the bridge or tip. Correct technique with the right volume should produce the opposite visual effect." },
    { q: "How painful is nose filler?", a: "Most patients describe the nose filler experience as manageable pressure rather than significant pain. Topical numbing cream is applied before treatment and most HA products used at Nexus Clinic KL contain built-in lidocaine. The injection itself takes 15 to 20 minutes. The bridge area is generally comfortable. The columella and tip areas are slightly more sensitive but still well tolerated." },
    { q: "Who is not suitable for nose filler?", a: "Nose filler is not suitable for patients who are pregnant or breastfeeding, have an active skin infection in the nasal area, have previously had rhinoplasty within the last 12 months, have a known allergy to HA or lidocaine, have an autoimmune condition affecting healing, or have had previous permanent filler placed in the nose that has not been fully removed. Patients with severe structural deformity or significant dorsal humps are better served by surgical rhinoplasty." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge="Highest-Risk Filler Area • Doctor-Only Treatment"
        title="Precise Nose Filler in Malaysia for a"
        highlight="Higher Bridge, Sharper Tip and Balanced Profile"
        description="The nose is the most structurally central feature on the face. A flat bridge draws the eyes apart and makes the face look wider. A drooping tip ages the profile."
        details="Nose filler at Nexus Clinic Kuala Lumpur is performed by licensed aesthetic doctors with specific training in nasal vascular anatomy and emergency complication management. Every nose filler treatment is performed with hyaluronidase on hand, precise low-volume technique, and clear emergency protocols in place before the first injection."
        note="The nose is the highest-risk area for filler injection on the entire face due to its proximity to the ophthalmic artery. All nose filler treatments at Nexus Clinic KL follow strict vascular safety protocols."
        image="/images/face/Nose Filler Treatment.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Nose Filler Treatment"
        ctaText="Book Free Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in nose filler at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Precise Results"
        floatingSubtitle="Immediate • Reversible • Doctor-led"
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
                    <p className="font-inter font-semibold text-brown text-sm">Hyaluronidase On Hand</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Emergency reversal ready for every treatment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Only Treatment</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Licensed doctors trained in nasal vascular anatomy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Low-Volume Technique</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Maximum 0.1ml per injection point for safety</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Vascular emergency protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">MOH-approved HA fillers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Blunt cannula preferred technique</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Nose Filler Treatment Overview</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatment", value: "HA filler injection for nose reshaping" },
              { icon: Clock, label: "Session Time", value: "15 to 30 minutes" },
              { icon: Heart, label: "Downtime", value: "Minimal, 1-3 days" },
              { icon: Zap, label: "Results", value: "Immediate, final at 7-14 days" },
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
                <p className="font-inter text-sm text-taupe">Longevity</p>
                <p className="font-georgia text-brown font-semibold">12 to 18 months</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Reversible</p>
                <p className="font-georgia text-brown font-semibold">Yes. Fully dissolvable with hyaluronidase</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Risk Level</p>
                <p className="font-georgia text-brown font-semibold text-wine">Higher than other facial areas</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Low bridge, dorsal hump, drooping tip, asymmetry</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Nose Filler Can and Cannot Achieve Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Nose Filler Can Change and What It Cannot</h2>
            <p className="text-taupe font-inter">An honest guide to expectations</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-wine" />
                What Nose Filler Can Achieve
              </h3>
              <ul className="space-y-2">
                {[
                  "Raising a flat or low nasal bridge to create more height and projection",
                  "Camouflaging a dorsal hump by filling above it to create a straight profile line",
                  "Refining the nasal tip by adding small amounts of filler to project or define",
                  "Correcting mild asymmetry by adding volume selectively to the deficient side",
                  "Improving the side profile by creating a cleaner, more defined line",
                  "Softening post-rhinoplasty irregularities or contour defects",
                  "Creating the visual impression of a narrower nose",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-wine" />
                What Nose Filler Cannot Achieve
              </h3>
              <ul className="space-y-2">
                {[
                  "Narrowing the actual width of the nose. Filler adds volume",
                  "Fixing a significantly deviated septum. Requires surgical correction",
                  "Addressing breathing obstruction or functional nasal issues",
                  "Creating the same range of change as surgical rhinoplasty",
                  "Producing a permanent result. Requires maintenance every 12-18 months",
                  "Correcting very large dorsal humps safely",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get an Honest Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      {/* Longevity Reality Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Nose Filler Longevity Reality</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect and what influences your results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Factors Affecting Longevity Card */}
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Longevity</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Filler brand and formulation: Premium structural HA products last longer",
                  "Individual metabolism: Faster metabolism breaks down filler more quickly",
                  "Lifestyle factors: UV exposure, exercise intensity, and skincare routine",
                  "Combination treatments: Nose thread lift can extend overall result",
                  "Initial volume: Conservative volumes may require earlier touch-ups",
                ].map((factor, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-taupe font-inter text-sm">
                    <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Most patients schedule maintenance top-ups between 12 and 15 months to maintain optimal results.
                </p>
              </div>
            </motion.div>

            {/* Longevity Range Card */}
            <motion.div
              variants={fadeInRight}
              className="bg-wine  p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">Nose Filler Longevity</h3>
              </div>
              
              <div className="space-y-8">
                {/* Minimum */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Minimum</span>
                    <span className="font-georgia text-2xl font-bold text-white">12 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">First-time patients or fast metabolism</p>
                </div>
                
                {/* Average */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Average</span>
                    <span className="font-georgia text-2xl font-bold text-white">15 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Most patients with standard metabolism</p>
                </div>
                
                {/* Maximum */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Maximum</span>
                    <span className="font-georgia text-2xl font-bold text-white">18+ months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Premium products, optimal metabolism</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Results vary by product brand, individual metabolism, and lifestyle factors.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Note */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 text-center"
          >
            <p className="text-taupe font-inter text-sm">
              ✨ Regular maintenance every 12-15 months helps maintain your ideal nose shape and prolongs results
            </p>
          </motion.div>
        </motion.div>
      </section>
      {/* Safety Reality Section */}
      <section className="py-20 px-4 bg-cream">
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
                The Safety Reality of Nose Filler
              </h2>
              <p className="text-2xl text-wine font-georgia">Why This Treatment Requires a Trained Doctor</p>
              <p className="text-brown font-inter">
                The nose has one of the most complex and dangerous vascular environments on the face. 
                The dorsal nasal artery, lateral nasal artery and columellar artery all run in close proximity 
                to areas where filler is typically injected.
              </p>
              <div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                <p className="text-wine font-inter font-semibold text-sm">2024 Systematic Review Finding:</p>
                <p className="text-taupe font-inter text-sm mt-1">
                  Analysis of 9,657 non‑surgical rhinoplasty patients found that, while most complications were mild (such as swelling and erythema), serious vascular events including arterial occlusion, skin necrosis, and vision loss were reported in a small proportion of cases — with severe vascular complications occurring in up to 0.27 % of procedures in pooled analyses. <a href="https://www.researchgate.net/publication/381331318_Nonsurgical_Rhinoplasty_An_Updated_Systematic_Review_of_Technique_Outcomes_Complications_and_Its_Treatments" rel="nofollow" target="_blank" className="text-taupe hover:underline font-bold">Nonsurgical rhinoplasty systematic review</a> highlights these rare but significant risks.
                </p>
                <p className="text-taupe text-xs mt-2">Multiple systematic analyses, 2023–2026</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="space-y-4">
              <h3 className="font-georgia text-xl text-brown">How Nexus Clinic KL Manages This Risk</h3>
              <ul className="space-y-2">
                {[
                  "Doctor-only treatments by licensed medical doctors",
                  "Hyaluronidase on hand and prepared for every appointment",
                  "Low-volume technique: maximum 0.1ml per injection point",
                  "Careful aspiration technique and slow delivery",
                  "Emergency vascular occlusion protocol in place",
                  "Blunt cannula preferred for dorsal bridge augmentation",
                  "Patient pre-treatment assessment including medical history",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-wine/5 p-3 rounded-lg mt-4">
                <p className="text-taupe font-inter text-xs">
                  The risk of complications is directly proportional to injector inexperience, high injection volumes 
                  and use of non-HA products that cannot be dissolved. Nose filler performed by a trained doctor at a 
                  licensed clinical facility with emergency protocols is a safe treatment.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Book at a Clinic 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Nasal Injection Zones Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          
              {/* Nasal Zones & Filler Application Table */}
              <TableForPages
                columns={[
                  { key: "zone", header: "Nasal Zone", className: "font-semibold" },
                  { key: "what", header: "What Filler Achieves" },
                  { key: "risk", header: "Relative Risk" },
                  { key: "technique", header: "Technique Used" },
                ]}
                data={nasalZones.map((zone) => ({
                  zone: zone.zone,
                  what: zone.what,
                  risk: zone.risk,
                  technique: zone.technique,
                }))}
                title="Nasal Injection Zones"
                subtitle="Where filler is placed and what changes in each area"
                variant="detailed"
                fadeInUp={fadeInUp}
                className="py-20 px-4"
              />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
                The radix zone at the nasal root between the eyes carries the highest risk of serious vascular complication due to its proximity to the vessels supplying the ophthalmic circulation. At Nexus Clinic KL, this zone is approached with extreme caution and only injected when clinically indicated with strict volume control.
                
                Patients who want nose reshaping with a lower vascular risk profile often consider <Link  href='/face/nose-thread-lift-malaysia/' className='font-bold text-wine italic'>nose thread lift </Link>as an alternative or complementary treatment at Nexus Clinic KL.

            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Common Nose Concerns Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Common Nose Concerns Treated with Filler</h2>
            <p className="text-taupe font-inter">At Nexus Clinic KL</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Low Nasal Bridge", desc: "The most common nose filler request in Malaysia. A flat bridge with minimal height and projection makes the face look broader and the nose less defined. Small volumes of firm HA filler placed along the dorsum create immediate height and projection. This is the most predictable and straightforward nose filler application with a high satisfaction rate when technique and volume are correct." },
              { title: "Dorsal Hump Camouflage", desc: "A dorsal hump is a bony or cartilaginous prominence visible as a bump on the nose profile. Filler cannot remove the hump but can be placed above and below it to create a straight or slightly concave profile line. This optical correction is effective for mild to moderate humps. Very large humps reduce the safe available injection volume for the non-surgical nose job and may be better addressed surgically. The doctor assesses this at consultation." },
              { title: "Drooping Nasal Tip", desc: "A tip that points downward or droops at rest makes the nose look longer and older. Small amounts of filler placed at the columella or tip can lift the projection angle slightly and create a cleaner nasal tip appearance. This is a technically demanding zone due to the columellar vasculature and is performed with very precise, very small volume injections." },
              { title: "Mild Nasal Asymmetry", desc: "Natural asymmetry in the nose, whether from development, previous injury or post-surgical irregularity, can often be improved with selective filler placement on the deficient side. The doctor maps the asymmetry at consultation and confirms a realistic degree of correction achievable with filler before proceeding." },
              { title: "Post-Rhinoplasty Refinement", desc: "Patients who have had surgical rhinoplasty sometimes develop contour irregularities, small depressions or minor asymmetries as the surgical outcome matures. Filler can address these secondary concerns in healed post-rhinoplasty noses, providing a refined look without surgery. This is a specialist application requiring careful assessment of the changed vascular anatomy in the post-surgical nose." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-5 rounded-xl border border-taupe/10">
                <h3 className="font-georgia text-lg text-brown mb-2">{item.title}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p>Patients who combine nose filler with facial contouring often explore <Link  href='/face/chin-filler-malaysia/' className='font-bold text-wine italic'> chin filler in Malaysia </Link>to improve both the nose-chin profile balance at Nexus Clinic KL.</p>
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Find Out If Your Nose Concern
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          {/* Nose Filler vs Nose Thread Lift vs Rhinoplasty Comparison Table */}
          <TableForPages
            columns={[
              { key: "factor", header: "Factor", className: "font-semibold" },
              { key: "filler", header: "Nose Filler" },
              { key: "thread", header: "Nose Thread Lift" },
              { key: "surgery", header: "Rhinoplasty (Surgery)" },
            ]}
            data={comparisonData.map((row) => ({
              factor: row.factor,
              filler: row.filler,
              thread: row.thread,
              surgery: row.surgery,
            }))}
            title="Nose Filler Compared to Nose Thread Lift and Rhinoplasty"
            subtitle="Understanding your options"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter">
              The most effective non-surgical nose result is often achieved by combining nose filler and nose thread lift. 
              Filler addresses bridge height and hump camouflage while threads lift the tip and provide structural support.
            </p>
          </motion.div>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Nose Filler Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Nasal Profile and Facial Assessment", desc: "Doctor reviews nose from front, side and 45-degree angles. Vascular risk assessed. Medical history reviewed." },
              { step: "02", title: "Product and Volume Confirmation", desc: "Doctor confirms filler product, total volume and injection technique. Most treatments use 0.5 to 1ml." },
              { step: "03", title: "Numbing and Precise Injection", desc: "Topical numbing applied. Filler placed using blunt cannula for bridge, fine needle for tip. 15-20 minutes." },
              { step: "04", title: "Immediate Review and Aftercare", desc: "Result reviewed from multiple angles. Full aftercare provided. Two-week follow-up scheduled." },
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
              Book  Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Same-day results at Nexus Clinic KL</p>
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
                { key: "volume", header: "Typical Volume" },
                { key: "price", header: "Price Range (2026)" },
              ]}
              data={pricingTiers.map((tier) => ({
                treatment: tier.treatment,
                volume: tier.volume,
                price: tier.price,
              }))}
              title="Nose Filler Price in Malaysia"
              subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
              variant="compact"
              fadeInUp={fadeInUp}
            />

          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-taupe text-sm">
              According to the International Society of Aesthetic Plastic Surgery 2024 Global Statistics Report, 
              non-surgical rhinoplasty was the fastest-growing individual facial filler procedure in Southeast Asia, 
              with a 36% year-on-year increase in procedure volume.
            </p>
            <p className="text-taupe text-xs mt-1">[ISAPS Global Statistics Report 2024]</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Personalised Nose Filler Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">What to expect after treatment</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {[
                  "Mild swelling at injection points resolving within 1 to 3 days",
                  "Light bruising possible, fading within 3 to 7 days",
                  "Mild tenderness along the bridge for 24 to 48 hours",
                  "Slight redness at entry points, settling within a few hours",
                ].map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-wine" />
                Rare but Serious Risks
              </h3>
              <ul className="space-y-2">
                {[
                  "Vascular occlusion: accidental intravascular injection requiring immediate hyaluronidase",
                  "Skin necrosis: tissue death from compressive or intravascular occlusion",
                  "Vision changes: extremely rare but demands immediate emergency response",
                  "Filler migration or lumpiness: more common with excessive volume",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Avoid pressing, squeezing or massaging the nose for at least two weeks",
                "Sleep on your back for the first two nights",
                "Avoid glasses that rest on the bridge for two weeks",
                "Skip intense exercise for 48 hours",
                "Avoid saunas, steam rooms and prolonged heat for 48 hours",
                "Do not blow your nose forcefully for one week",
                "Apply SPF daily from the day after treatment",
              ].map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
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
              Book Nose Filler in Malaysia at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              A better nose profile does not always require surgery. For most patients in Malaysia who want a higher bridge, 
              a smoother profile or a more defined tip, precise nose filler at Nexus Clinic KL delivers the result they want.
            </p>
            <p className="text-cream/90 font-inter">
              One consultation is all it takes to know exactly what your nose can achieve with filler, which zones will be treated, 
              and what the expected outcome looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for nose filler at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="/face/nose-thread-lift-malaysia/" className="hover:text-cream transition-colors">Explore Nose Thread Lift</a>
              <span>•</span>
              <a href="/face/chin-filler-malaysia/" className="hover:text-cream transition-colors">Explore Chin Filler</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}