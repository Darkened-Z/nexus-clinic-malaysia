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
  Sun,
  TrendingUp,
  DollarSign,
  Layers,
  Users,
  Info,
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

interface SkinWhiteningProps {
  locale: string;
}

export default function SkinWhiteningLanding({ locale }: SkinWhiteningProps) {
  const whiteningGoals = [
    { goal: "Overall Face Brightening and Glow", treatment: "Pico Laser toning + HydraFacial with Britenol booster + Oral brightening supplements", mechanism: "Laser clears accumulated surface and dermal melanin; HydraFacial infuses brightening actives; supplements suppress melanocyte activation", timeline: "Visible glow from session 1 to 2; sustained brightness at 4 to 6 sessions", sessions: "3 to 6 monthly" },
    { goal: "Targeted Spot and Pigmentation Removal", treatment: "Pico Laser Spot Mode (532nm or 755nm) for individual lesions", mechanism: "High-energy photoacoustic shockwave shatters specific melanin clusters; spot fades as fragmented particles clear", timeline: "Darkening then clearing in 7 to 10 days per spot", sessions: "1 to 3 per spot" },
    { goal: "Systemic Skin Brightening from Within", treatment: "Glutathione IV Drip (with Vitamin C and Alpha Lipoic Acid)", mechanism: "IV glutathione inhibits tyrosinase enzyme to reduce melanin production systemically", timeline: "Visible brightening at 6 to 8 sessions", sessions: "6 to 12 weekly, then monthly" },
    { goal: "Body Skin Whitening (Underarms, Knees, Inner Thighs)", treatment: "Pico Laser body toning + Prescription brightening topicals + SPF30 daily", mechanism: "Laser addresses post-inflammatory hyperpigmentation from friction; topicals maintain results", timeline: "Progressive improvement at 3 to 4 sessions", sessions: "5 to 8 sessions" },
    { goal: "Melasma Management and Brightening", treatment: "Pico Laser toning (1064nm) + Oral Tranexamic Acid + SPF50 daily", mechanism: "Low-fluence laser clears existing melanin; oral TXA suppresses new melanin production", timeline: "Improvement visible at 4 to 6 sessions", sessions: "4 to 8 + maintenance" },
    { goal: "Post-Acne Marks and PIH Brightening", treatment: "Pico Laser toning + Medical-Grade Chemical Peel (alternating sessions)", mechanism: "Laser fragments deeper PIH deposits; peel accelerates surface cell turnover", timeline: "Visible improvement from session 2", sessions: "4 to 6 sessions" },
  ];

  const evidenceComparison = [
    { treatment: "Pico Laser", evidence: "Strong clinical evidence; FDA-cleared technology; multiple published RCTs", achieves: "Meaningful, lasting pigmentation clearance; skin brightness improvement; collagen stimulation", limitation: "Does not change natural skin colour; treats pigmentation only; requires maintenance" },
    { treatment: "Glutathione IV Drip", evidence: "Moderate evidence; several small RCTs show skin brightening; best combined with Vitamin C", achieves: "Progressive systemic brightening and tone evening; antioxidant benefits", limitation: "Results temporary without maintenance; 6 to 12 weekly sessions needed; not a spot treatment" },
    { treatment: "Medical-Grade Chemical Peel", evidence: "Strong evidence for surface pigmentation; decades of clinical use", achieves: "Accelerated cell turnover; surface PIH clearance; improved skin brightness", limitation: "Limited to epidermal and superficial dermal pigmentation; deeper melasma requires combination" },
    { treatment: "Oral Tranexamic Acid", evidence: "Strong evidence for melasma; well-documented clinical trials; WHO Essential Medicine", achieves: "Systemic suppression of melanocyte activation; proven melasma reduction", limitation: "Works best combined with topical or laser treatment; primarily for melasma" },
    { treatment: "Over-the-Counter Whitening Creams", evidence: "Variable; depends entirely on ingredient concentration and quality", achieves: "Mild brightening for surface pigmentation if formulated with niacinamide, kojic acid or tranexamic acid", limitation: "Very limited penetration depth; no effect on dermal pigmentation; results reverse when stopped" },
    { treatment: "Unregistered Whitening Products", evidence: "No legitimate clinical evidence; both ingredients banned or heavily regulated in Malaysia", achieves: "Short-term apparent lightening only; effect reverses and often rebounds worse", limitation: "Serious risks: ochronosis, kidney damage, mercury toxicity; not used at Nexus Clinic KL" },
  ];

  const bodyWhiteningAreas = [
    { area: "Underarms", cause: "Friction from shaving or hair removal; deodorant ingredient irritation; PIH from ingrown hairs", treatment: "Pico Laser toning (1064nm) + prescription brightening topicals", sessions: "3 to 6 sessions; visible improvement from session 2 to 3" },
    { area: "Knees and Elbows", cause: "Chronic pressure and friction causing PIH; accumulated sun exposure; thick dry skin layer", treatment: "Medical-Grade Chemical Peel alternating with Pico Laser; intensive moisturiser and SPF daily", sessions: "4 to 6 sessions; improved tone across 2 to 3 months" },
    { area: "Inner Thighs", cause: "Friction from walking; hormonal pigmentation; post-shaving PIH; heat and sweat", treatment: "Pico Laser toning + Glutathione IV Drip for systemic support; prescription topicals", sessions: "5 to 8 sessions; results develop over 3 to 4 months" },
    { area: "Neck and Nape", cause: "UV accumulation; hormonal pigmentation; friction from clothing; acanthosis nigricans", treatment: "Pico Laser (full neck area) + oral brightening programme", sessions: "4 to 6 sessions; medical review if darkening is rapid or pronounced" },
    { area: "Back and Shoulders", cause: "Post-acne PIH; UV damage; friction from clothing; body pigmentation", treatment: "Pico Laser toning for back area + medical-grade peel for surface acne marks; Glutathione IV Drip", sessions: "5 to 8 sessions depending on area size" },
  ];

  const pricingTiers = [
    { treatment: "Pico Laser Full-Face Toning", bestFor: "General brightening, even tone, surface and dermal pigmentation", sessions: "3 to 6 monthly", price: "RM 700 to RM 1,100 per session" },
    { treatment: "Pico Laser Body Area (per zone)", bestFor: "Underarms, knees, inner thighs, neck, back PIH", sessions: "4 to 8", price: "RM 400 to RM 900 per zone per session" },
    { treatment: "Glutathione IV Drip (with Vitamin C)", bestFor: "Systemic brightening, inner glow, antioxidant support", sessions: "6 to 12 weekly, then monthly", price: "RM 350 to RM 700 per session" },
    { treatment: "Premium Whitening IV Drip", bestFor: "Enhanced systemic brightening with anti-ageing and collagen support", sessions: "6 to 12 weekly, then monthly", price: "RM 700 to RM 1,200 per session" },
    { treatment: "Medical-Grade Chemical Peel (Face)", bestFor: "Surface pigmentation, dullness, PIH, post-acne marks", sessions: "3 to 5 sessions", price: "RM 300 to RM 600 per session" },
    { treatment: "Oral Brightening Programme (Tranexamic Acid)", bestFor: "Melasma suppression, systemic melanocyte management", sessions: "Ongoing monthly review", price: "From RM 150 per month" },
    { treatment: "Combination Whitening Programme (Face)", bestFor: "Comprehensive brightening (Pico + IV Drip + Oral + Topicals)", sessions: "5 to 8 total over 3 months", price: "From RM 3,000 (package pricing available)" },
  ];

  const faqData = [
    { q: "Can skin whitening treatment permanently change my natural skin colour?", a: "No ethical clinic in Malaysia should claim permanent skin colour change. Clinical skin whitening treatments address pigmentation, which is the excess melanin deposited in the skin from UV damage, hormonal triggers, inflammation and post-acne marks. Treating this pigmentation brightens and evens the skin significantly, but your natural baseline skin tone determined by your genetics remains unchanged. The distinction matters because treatments that genuinely work do so by clearing acquired pigmentation rather than by removing the melanin your skin produces naturally for UV protection. At Nexus Clinic KL, the goal of every whitening programme is to restore your skin to its natural brightest, clearest baseline, not to alter your genetic skin colour." },
    { q: "How many sessions of glutathione IV drip do I need to see results?", a: "Visible skin brightening from glutathione IV drip typically requires 6 to 12 weekly sessions before meaningful change is apparent. The mechanism is gradual systemic suppression of melanin production, which means results develop progressively rather than appearing suddenly. Most patients notice an improvement in overall skin radiance and reduction in dullness from sessions 4 to 6, with more significant tone brightening becoming apparent by session 8 to 10. Maintenance sessions once or twice monthly after the initial course sustain the results. Patients expecting dramatic whitening in two or three sessions are likely responding to overclaims they have encountered from other sources; the physiological mechanism of glutathione simply does not work at that speed." },
    { q: "Are glutathione IV drips safe?", a: "Glutathione IV drips are safe when prescribed and administered by licensed doctors using pharmaceutical-grade glutathione in a clinical setting. The risks associated with IV glutathione in Malaysia arise almost entirely from unregulated settings where the product quality, sterility of equipment, glutathione concentration and administration protocol are not medically supervised. Complications including infection from non-sterile needles, embolism from improperly administered IV lines and contamination from substandard product formulations are all preventable risks that do not occur in properly managed clinical environments. At Nexus Clinic KL, all IV drip treatments are administered by qualified clinical staff under doctor supervision using pharmaceutical-grade, MOH-registered formulations." },
    { q: "Is Pico Laser safe for dark skin tones common in Malaysia?", a: "Yes, with the correct wavelength selection. The 1064nm wavelength is specifically suited for Fitzpatrick Types III to V because it penetrates below the melanin-rich epidermis rather than being absorbed at the surface, minimising the risk of post-inflammatory hyperpigmentation. At Nexus Clinic KL, our doctors use conservative energy settings on initial sessions and adjust depending on individual skin response, following a protocol developed for Malaysian skin phototypes. Patients with Fitzpatrick Type IV or V skin who have been told at previous clinics that laser is not safe for them should understand that this is only true if the wrong wavelength or excessive energy settings are used; it is not an inherent property of Pico Laser technology." },
    { q: "What causes skin to darken in body areas like underarms and knees?", a: "Body area darkening is caused by post-inflammatory hyperpigmentation from repeated friction and minor trauma to the skin. The underarms darken primarily from friction during arm movement, irritation from shaving or waxing, and chemical irritation from deodorant ingredients. The knees and elbows darken from constant pressure and friction on the skin during normal daily movement. The inner thighs darken from walking friction, heat and sweat in the tropical Malaysian climate and, in some cases, hormonal influences. These body areas have thicker skin than the face and accumulate PIH more readily because the mechanical forces acting on them are continuous. Treating them requires the same medical-grade approaches used for facial pigmentation, applied with settings adjusted for thicker body skin." },
    { q: "What ingredients should I avoid in whitening products in Malaysia?", a: "Mercury and high-concentration unregistered hydroquinone are the two most dangerous ingredients found in unregistered whitening products circulating in Malaysia. Mercury is a heavy metal neurotoxin and nephrotoxin that accumulates in the body with chronic skin exposure and can cause irreversible kidney damage, neurological effects, and systemic toxicity. Hydroquinone, when used in unregulated concentrations without medical supervision, causes ochronosis, a permanent bluish-black skin discolouration, and rebound hyperpigmentation that is darker than the original condition when use is discontinued. Under MOH Malaysia regulations, mercury is prohibited in all cosmetic products and hydroquinone requires prescription and medical oversight. Any whitening product purchased online or from non-medical sources that promises rapid dramatic whitening should be assessed by a pharmacist or doctor before use." },
    { q: "Can I combine Pico Laser with glutathione IV drip?", a: "Yes. This is in fact one of the most effective combinations for comprehensive skin brightening at Nexus Clinic KL. Pico Laser addresses existing melanin deposits at the surface and mid-dermal level through targeted photoacoustic fragmentation. Glutathione IV drip suppresses new melanin production systemically, reducing the rate at which new pigmentation forms after the laser clears the existing deposits. Together, the combination tackles both the clearance of existing pigmentation and the prevention of new pigmentation in a complementary mechanism. Sessions are typically scheduled on the same day or within a few days of each other. There are no contraindications between the two modalities, making them safe and effective for patients seeking aesthetic improvements." },
    { q: "How is skin whitening different from skin brightening?", a: "In clinical practice, skin whitening and skin brightening describe the same category of treatment, which is the reduction of melanin-based discolouration and the restoration of a clearer, more even-toned skin appearance. The term whitening is more commonly used in the Malaysian and Southeast Asian consumer market, while brightening is more commonly used in Western clinical contexts. At Nexus Clinic KL, both terms refer to the same clinical goal: reducing acquired pigmentation caused by UV damage, hormonal triggers, PIH and dullness to restore the skin to its natural baseline brightness. Neither term implies a permanent change in genetic skin colour, and any provider using either term to imply a permanent two or three shade skin tone change is making a clinically unsupportable claim." },
    { q: "Is skin whitening treatment suitable for men?", a: "Yes. Skin whitening concerns among male patients in Malaysia are common and clinically identical to those in female patients. Male patients frequently present with UV-induced darkening from outdoor work or sports, PIH from post-acne marks, uneven neck pigmentation from sun exposure during outdoor activities, and body area darkening. The treatment approach is the same across genders; the specific modality and protocol are determined by the skin concern and Fitzpatrick type, not by gender. Male patients at Nexus Clinic KL benefit from the same comprehensive whitening programme framework, including Pico Laser, IV glutathione drip and medical-grade brightening topicals as applicable to their specific presentation." },
    { q: "Is the skin whitening consultation at Nexus Clinic KL free?", a: "Yes. Your initial skin whitening consultation at Nexus Clinic KL is complimentary and includes a full skin assessment and Fitzpatrick classification, identification of your specific whitening concern and its cause, matching of your goal to the appropriate treatment or combination programme, complete and transparent pricing before any treatment is booked, realistic outcome expectations and an honest discussion of what the recommended treatments will and will not achieve. If a treatment you have heard about is not appropriate for your skin concern or carries risks that outweigh its benefits for your specific situation, our doctors will tell you clearly." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-skin-whitening-treatment1.webp",
      after: "/images/B&A-skin/B&A-skin-whitening-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-skin-whitening-treatment2.webp",
      after: "/images/B&A-skin/B&A-skin-whitening-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-skin-whitening-treatment3.webp",
      after: "/images/B&A-skin/B&A-skin-whitening-treatment3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Goal-Matched • MOH-Approved"
        title="Proven Skin Whitening Treatment in Malaysia for"
        highlight="Brighter, Even-Toned Skin"
        description="Dull skin, uneven patches, dark body areas and persistent pigmentation that returns despite every product tried."
        details="At Nexus Clinic KL, skin whitening treatment begins with a question: what specifically are you trying to achieve? Overall face brightness, targeted spot removal, body area darkening, melasma management and post-acne mark clearance are five different clinical goals that require five different treatment approaches."
        note="Only clinically proven, MOH-approved treatments are offered at Nexus Clinic KL. No mercury, no unregistered hydroquinone, no misleading whitening claims."
        image="/images/skin/skin-whitening-treatment.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Skin Whitening Treatment"
        ctaText="Free Assessment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in skin whitening treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Goal-Matched Treatment"
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">All products and procedures MOH-approved</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Only Treatment</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">LCP-certified doctors perform every procedure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in skin brightening</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Pico Laser (1064nm Toning)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Glutathione IV Drip + Oral TXA</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Safe for Fitzpatrick III to V skin</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Skin Whitening Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Goal-matched approach for all skin types</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Sparkles, label: "Treatments Available", value: "Pico Laser, Glutathione IV, Chemical Peel, HydraFacial" },
              { icon: Clock, label: "Session Time", value: "20 to 60 minutes depending on modality" },
              { icon: Heart, label: "Downtime", value: "Zero to 48 hours for most treatments" },
              { icon: Activity, label: "Sessions Required", value: "3 to 6 for brightening, 6 to 12 for IV" },
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
                <p className="font-inter text-sm text-taupe">Treatment Areas</p>
                <p className="font-georgia text-brown font-semibold">Face and body (underarms, knees, inner thighs, neck, back)</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown font-semibold">All skin types; Fitzpatrick types III to V; men and women</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Goal</p>
                <p className="font-georgia text-brown">Brighter, clearer, more even-toned skin</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">MOH Approved</p>
                <p className="font-georgia text-brown">Yes. All products and procedures MOH-approved</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Skin Whitening Goal | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skin Whitening Goal-to-Treatment Matching Framework Table */}
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
              { key: "goal", header: "Whitening Goal", className: "font-semibold text-brown" },
              { key: "treatment", header: "Recommended Treatment" },
              { key: "mechanism", header: "How It Works" },
              { key: "timeline", header: "Timeline to Results" },
              { key: "sessions", header: "Sessions" },
            ]}
            data={whiteningGoals.map(item => ({
              goal: item.goal,
              treatment: item.treatment,
              mechanism: item.mechanism,
              timeline: item.timeline,
              sessions: item.sessions,
            }))}
            title="Skin Whitening Goal-to-Treatment Matching Framework"
            subtitle="Match your specific goal to the right treatment"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              Three clinically important points: IV glutathione works systemically on overall skin brightness, not as a spot treatment. Melasma requires oral tranexamic acid alongside laser. Body area darkening from friction responds particularly well to Pico Laser.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Evidence Comparison Table */}
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
              { key: "treatment", header: "Treatment", className: "font-semibold text-brown" },
              { key: "evidence", header: "Evidence Quality" },
              { key: "achieves", header: "What It Genuinely Achieves" },
              { key: "limitation", header: "Realistic Limitation" },
            ]}
            data={evidenceComparison.map(item => ({
              treatment: item.treatment,
              evidence: item.evidence,
              achieves: item.achieves,
              limitation: item.limitation,
            }))}
            title="What Actually Works vs What Overpromises"
            subtitle="Honest evidence comparison for skin whitening treatments"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl border-l-4 border-wine">
            <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Critical Safety Warning
            </p>
            <p className="text-taupe font-inter text-sm mt-1">
              Unregistered whitening products containing mercury and high-concentration hydroquinone circulate widely in Malaysia. Mercury causes progressive kidney damage and ochronosis. Hydroquinone causes rebound hyperpigmentation. These substances are never used at Nexus Clinic KL.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Body Whitening Areas Table */}
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
                { key: "cause", header: "Common Cause of Darkening" },
                { key: "treatment", header: "Recommended Treatment" },
                { key: "sessions", header: "Sessions and Timeline" },
              ]}
              data={bodyWhiteningAreas.map(item => ({
                area: item.area,
                cause: item.cause,
                treatment: item.treatment,
                sessions: item.sessions,
              }))}
              title="Body Skin Whitening at Nexus Clinic KL"
              subtitle="Areas, causes and treatments"
              variant="default"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              A clinical note on neck darkening: if accompanied by velvety skin texture, it may indicate acanthosis nigricans associated with insulin resistance. At Nexus Clinic KL, any atypical neck darkening is assessed and referral for metabolic assessment is recommended before treatment begins.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Longevity Slider Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Skin Whitening Results Longevity</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect and how long results last</p>
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
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Longevity</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Treatment type (laser, IV drip, or combination)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Daily SPF50 compliance (most important factor)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Underlying pigmentation triggers (hormones, medications)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Maintenance schedule adherence</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Lifestyle factors (sun exposure, smoking, stress)</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  With good maintenance and daily sun protection, results can last 6 to 12 months. Consistency beats intensity.
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
                <h3 className="font-georgia text-2xl font-bold">Treatment Longevity</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Pico Laser (Pigmentation)</span>
                    <span className="font-georgia text-2xl font-bold text-white">6 to 12 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Quarterly toning sessions maintain brightness</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Glutathione IV Drip</span>
                    <span className="font-georgia text-2xl font-bold text-white">3 to 6 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Monthly maintenance sessions sustain results</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Chemical Peel (Surface)</span>
                    <span className="font-georgia text-2xl font-bold text-white">3 to 6 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Regular peels maintain surface brightness</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Combination Programme</span>
                    <span className="font-georgia text-2xl font-bold text-white">9 to 18 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Most comprehensive and sustained outcomes</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  If a clinic promises "permanent whitening," be careful. Skin is alive. It responds to sun, stress, and inflammation.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ The most effective approach combines Pico Laser (existing pigment clearance) with Glutathione IV Drip (systemic melanin suppression) for comprehensive brightening.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Process Steps */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Skin Whitening Treatment Process</h2>
            <p className="text-taupe font-inter">Step by step at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Goal and Skin Assessment", desc: "Doctor identifies your specific whitening goal, assesses skin type and Fitzpatrick classification, reviews previous treatments, determines appropriate combination protocol." },
              { step: "02", title: "Treatment Programme Planning", desc: "Doctor explains recommended treatment combination, sequencing of modalities, realistic timeline, maintenance programme, and full transparent pricing." },
              { step: "03", title: "Treatment Sessions", desc: "Pico Laser (numbing cream applied), Glutathione IV Drip (30-60 minutes), Chemical Peel (calibrated contact time), or HydraFacial (Vortex-Fusion protocol)." },
              { step: "04", title: "Aftercare and Follow-Up", desc: "Written aftercare provided. SPF50 mandatory from morning after laser. Follow-up scheduled at clinically appropriate interval. Programme adjusted based on response." },
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
            <Link href="/contact-us/"  className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Book Your Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Goal-matched skin whitening at Nexus Clinic KL</p>
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
            title="Skin Whitening Treatment Cost in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />

          {/* Footnote */}
          <motion.div variants={fadeInUp} className="text-center mt-4">
            <p className="text-taupe font-inter text-sm italic">
              Combination whitening programmes that incorporate Pico Laser, IV glutathione drip and oral brightening supplements provide the most comprehensive and sustained brightening outcomes. All pricing disclosed before any treatment is booked.
            </p>
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
              Start Your Skin Whitening Journey at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Skin whitening in Malaysia deserves the same clinical rigour applied to any other skin treatment. The right treatment matched to your specific goal, delivered with the right technology at the right setting, produces visible and lasting results.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed aesthetic doctors bring more than 15 years of combined experience, have performed over 5,000 aesthetic procedures, and use only MOH-approved treatments. No banned ingredients, no misleading claims.
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
                message="Hi, I'd like to book a consultation for skin whitening treatment at Nexus Clinic KL. Please let me know available slots."
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