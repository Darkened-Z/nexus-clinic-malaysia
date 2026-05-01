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
  Target,
  Pill,
  Stethoscope,
  Ban,
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
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import Image from "next/image";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
interface RosaceaTreatmentProps {
  locale: string;
}

export default function RosaceaTreatmentLanding({ locale }: RosaceaTreatmentProps) {
  const rosaceaSubtypes = [
    { subtype: "Erythematotelangiectatic Rosacea (ETR)", features: "Persistent central facial redness; visible dilated capillaries, broken capillaries and blood vessels; episodic flushing; burning or stinging sensation; no papules", mechanism: "Vascular hyperreactivity: abnormal dilatation of superficial facial blood vessels; permanently dilated visible blood vessels; neurogenic flushing component", firstLine: "Topical brimonidine (for acute redness reduction); Sylfirm X or PDL/IPL laser therapy to coagulate visible telangiectasia; gentle barrier repair skincare; strict SPF50 daily", escalate: "If telangiectasia is dense or brimonidine insufficient alone; add procedural vascular laser treatment" },
    { subtype: "Papulopustular Rosacea (PPR)", features: "Central face papules and pustules; persistent background redness; acne-like appearance but no comedones; often confused with acne", mechanism: "Inflammatory: Demodex mite overgrowth, dysregulated toll-like receptor 2 activation trigger neutrophil influx producing acne-like papules and pustules", firstLine: "Topical ivermectin (1% cream) or metronidazole (0.75%) once daily; oral doxycycline (low dose anti-inflammatory) for moderate to severe; azelaic acid as alternative", escalate: "If topical inadequate after 8 to 12 weeks; add oral doxycycline; isotretinoin for severe or refractory cases" },
    { subtype: "Phymatous (Rhinophyma)", features: "Skin thickening with enlarged pores; irregular nodular surface changes; most common on nose; more common in men", mechanism: "Sebaceous gland hyperplasia and fibrosis with connective tissue overgrowth; develops from long-standing rosacea if left untreated", firstLine: "Oral isotretinoin or doxycycline to reduce inflammatory progression; CO2 laser resurfacing or surgical debulking for established rhinophyma", escalate: "Usually requires specialist dermatology or plastic surgery input for established structural changes" },
    { subtype: "Ocular Rosacea", features: "Burning, itching or foreign-body sensation in eyes; watery or bloodshot eyes; eyelid inflammation; recurrent styes; vision changes in severe cases", mechanism: "Inflammatory involvement of the eyelid margin, meibomian glands and corneal surface; can present in isolation or with cutaneous subtypes", firstLine: "Warm eyelid compresses twice daily; artificial tears; omega-3 supplementation; oral doxycycline or azithromycin for moderate to severe", escalate: "Any suspected corneal involvement requires urgent ophthalmology referral" },
    { subtype: "Mixed Subtype (Most Common)", features: "Features of two or more subtypes simultaneously; persistent redness with some acne-like papules; most common presentation", mechanism: "Multiple pathways active simultaneously; requires targeted treatments addressing both vascular and inflammatory components", firstLine: "Combination: topical medications for inflammatory component plus Sylfirm X or PDL laser for vascular component; oral doxycycline if inflammatory load is high", escalate: "Programme adjusted at 8-week review based on dominant subtype response" },
  ];

  const diagnosticSigns = [
    { sign: "Centrofacial erythema", malaysianPresentation: "Masked by higher melanin in Fitzpatrick III-IV skin; may appear as mild brownish discolouration rather than obvious flush", whatNexusLooksFor: "History of facial burning, stinging or heat sensation; pattern of central face sensitivity; disproportionate skin reactivity to skincare products" },
    { sign: "Telangiectasia and visible blood vessels", malaysianPresentation: "Difficult to see in darker skin without specific lighting or dermatoscopy", whatNexusLooksFor: "Dermatoscopy to visualise broken blood vessels; report of persistent facial flushing episodes even if redness is not always visible" },
    { sign: "Papulopustular rosacea", malaysianPresentation: "Often misdiagnosed as acne; patients may have failed multiple acne treatments before rosacea is considered", whatNexusLooksFor: "Absence of comedones despite papules and pustules; central face distribution; onset in adult years; lack of response to standard acne treatments" },
    { sign: "Post-inflammatory hyperpigmentation", malaysianPresentation: "May obscure primary redness in darker skin, making differentiation difficult", whatNexusLooksFor: "Careful history of flare pattern, flushing episodes, dietary and environmental triggers; trial of rosacea-specific treatment to confirm diagnosis" },
    { sign: "Nociceptive symptoms", malaysianPresentation: "Burning, pain, itching rather than visible redness in some Asian patients", whatNexusLooksFor: "Recurrent facial burning with specific triggers (heat, spicy food, alcohol); absence of atopic history; response to rosacea trigger avoidance" },
  ];

  const skincareFramework = [
    { category: "Cleanser", useThese: "Gentle pH-balanced syndet (soap-free) cleanser; fragrance-free; micellar water; non-foaming hydrating cleansers", avoidThese: "Foaming cleansers; bar soap; cleansers with alcohol, fragrances or menthol; exfoliating cleansers; physical scrub devices", why: "Malaysia's heat means twice-daily cleansing; each wash with harsh product strips already-compromised rosacea barrier" },
    { category: "Moisturiser", useThese: "Lightweight, fragrance-free with ceramides, niacinamide, hyaluronic acid; gel-cream texture preferred in humid Malaysian climate", avoidThese: "Heavy oils; petrolatum-based creams; fragranced creams; products with AHA, BHA, retinol or vitamin C; witch hazel", why: "Rosacea causes barrier deficiency; barrier repair is the single most important skincare goal" },
    { category: "Sunscreen", useThese: "SPF50+ mineral (zinc oxide or titanium dioxide); tinted formulations camouflage redness; lightweight fluid texture; reapply every 2 hours outdoors", avoidThese: "Chemical UV filters (avobenzone, oxybenzone) that sting on rosacea skin; very thick sunscreens that trap heat", why: "SPF50 is clinical requirement; UV is the most consistently documented trigger; Malaysia's UV index is extreme year-round" },
    { category: "Active Ingredients", useThese: "Niacinamide 2 to 4%; azelaic acid (prescription); green tea extract; centella asiatica; low-concentration hyaluronic acid", avoidThese: "Retinoids at standard concentrations; alpha hydroxy acids; beta hydroxy acids; vitamin C over 10%; benzoyl peroxide", why: "Malaysian patients often attempt brightening routines that trigger sustained rosacea flares" },
  ];

  const triggerData = [
    { trigger: "Year-Round High UV Index", malaysianContext: "Malaysia's UV index is routinely very high to extreme (UV 11 to 13+); outdoor exposure is unavoidable in daily commuting", mechanism: "UV radiation activates toll-like receptor 2 and stimulates vascular endothelial growth factor; induces transepidermal water loss", management: "SPF50 broad-spectrum sunscreen as clinical requirement; zinc oxide or titanium dioxide physical sunscreens; reapply every 2 hours outdoors" },
    { trigger: "Spicy Food", malaysianContext: "Chilli, sambal, curry, black pepper central to Malaysian food culture", mechanism: "Capsaicin activates TRPV1 channels in facial nerve fibres, triggering vasodilation and flushing", management: "Reduce rather than eliminate spicy food; identify personal threshold; eat spicy food at lower temperatures" },
    { trigger: "Heat and Humidity", malaysianContext: "KL's average temperature of 27 to 33C with 80 to 90% relative humidity creates continuous thermal skin stress", mechanism: "Heat triggers facial flushing via thermoregulatory vasodilation; high humidity impairs sweat evaporation", management: "Cool face with cool water rinse or fan immediately after outdoor exposure; apply soothing moisturiser immediately post-heat exposure" },
    { trigger: "Air-Conditioning Cycling", malaysianContext: "Moving between 33C outdoor heat and 18 to 22C air-conditioning multiple times daily", mechanism: "Rapid temperature change triggers trigeminal nerve vascular reactivity; cold dry air increases transepidermal water loss", management: "Apply barrier cream before entering heavily air-conditioned spaces; avoid positioning directly under air-conditioning vents" },
    { trigger: "Alcohol and Hot Beverages", malaysianContext: "Alcohol at social gatherings, teh tarik and kopi are significant parts of Malaysian social culture", mechanism: "Alcohol directly vasodilates facial blood vessels; hot beverages cause heat-mediated vascular dilation", management: "Drink hot beverages at slightly lower temperature; rinse with cold water after alcohol exposure" },
  ];

  const pricingTiers = [
    { treatment: "Initial Rosacea Consultation", bestFor: "All subtypes; diagnosis confirmation; treatment plan; skincare programme", sessions: "1 visit", price: "RM 120 to RM 200" },
    { treatment: "Topical Medications (Metronidazole, Azelaic Acid or Ivermectin)", bestFor: "Papulopustular rosacea; mixed; maintenance", sessions: "Ongoing (4 to 12 week initial course)", price: "RM 50 to RM 180 per tube" },
    { treatment: "Oral Doxycycline (anti-inflammatory dose)", bestFor: "Moderate to severe PPR; mixed subtype with significant inflammatory load", sessions: "8 to 12 week course", price: "RM 60 to RM 150 per course" },
    { treatment: "Sylfirm X (Vascular RF Microneedling)", bestFor: "ETR; persistent redness; mixed subtype vascular component; safe for all Malaysian skin types", sessions: "3 to 5 sessions at 4 to 6 week intervals", price: "RM 1,200 to RM 2,200 per session" },
    { treatment: "Pulsed Dye Laser (PDL) or Intense Pulsed Light (IPL)", bestFor: "ETR with visible telangiectasia; flushing; persistent background redness", sessions: "3 to 5 sessions", price: "RM 800 to RM 1,800 per session" },
    { treatment: "Combination Rosacea Programme", bestFor: "Moderate to severe mixed rosacea; patients not responding to topicals alone", sessions: "3 to 5 procedural sessions plus ongoing medical management", price: "From RM 4,500 (programme pricing available)" },
  ];

  const faqData = [
    { q: "Is there a complete cure for rosacea?", a: "There is no complete cure for rosacea. Rosacea is a chronic condition that can be very well controlled with appropriate treatment but typically requires ongoing management rather than a finite treatment course. The goal at Nexus Clinic KL is to achieve a state of maintained remission where flares are infrequent, less intense and more rapidly controlled when they do occur. Many patients achieve excellent long-term control with a combination of daily prescription skincare, trigger management and periodic laser treatment." },
    { q: "Can rosacea affect Malaysian Chinese, Malay or Indian skin?", a: "Yes. Rosacea affects all ethnic skin types including Malaysian patients of Malay, Chinese and Indian ethnicity. Its historical mischaracterisation as a disease of fair-skinned Europeans has created a systematic clinical blind spot that delays diagnosis in Malaysian patients. The symptoms may differ: erythema may be less visually prominent, the papulopustular component may dominate, burning and stinging may precede visible changes, and post-inflammatory hyperpigmentation may mask underlying redness. If you have persistent central face flushing, bumps that do not respond to acne treatment, or facial skin that reacts strongly to heat, spicy food or skincare products, rosacea should be included in your assessment." },
    { q: "What is the difference between rosacea and acne?", a: "Rosacea and acne can look very similar, particularly papulopustular rosacea. The key differences: rosacea has no comedones (no blackheads or whiteheads); bumps and pustules are distributed centrally on the face rather than appearing on back, chest and jaw; rosacea typically begins in adulthood rather than adolescence; the skin has background persistent redness or flushing. Most importantly, standard acne treatments including retinoids, BHA, benzoyl peroxide and strong exfoliants often worsen rosacea significantly by irritating the compromised barrier." },
    { q: "Which is better for rosacea redness: Sylfirm X or PDL laser?", a: "Both effectively reduce persistent redness and broken capillaries of erythematotelangiectatic rosacea. The key difference for Malaysian patients is skin tone safety. PDL targets haemoglobin through selective photothermolysis, which is highly effective in Fitzpatrick Type III and lighter skin but carries PIH risk in Fitzpatrick Type IV and V skin because competing melanin absorbs laser energy. Sylfirm X uses radiofrequency energy delivered through microneedles, which is colour-blind and safe across all Malaysian skin types. For Fitzpatrick Type IV and V, Sylfirm X is preferred at Nexus Clinic KL." },
    { q: "How long does rosacea treatment take to show results?", a: "Timeline depends on subtype and modality. Topical medications for papulopustular rosacea typically produce visible reduction in papules and pustules within 6 to 8 weeks. Brimonidine can reduce flushing within 30 to 60 minutes of a single application. Oral doxycycline typically produces meaningful improvement at 6 to 8 weeks. Sylfirm X for persistent redness produces progressive improvement over 4 to 8 weeks after each session. Maximum improvement from a 3 to 5 session procedural series is typically assessed at 3 to 4 months after the final session." },
    { q: "Can rosacea be triggered by Malaysian food?", a: "Yes. Several components of traditional Malaysian cuisine are significant triggers. Chilli in its many forms contains capsaicin which activates TRPV1 channels and directly triggers flushing. Black pepper, ginger and other aromatic spices can also trigger responses. Hot beverages including kopi and teh tarik combine heat with other environmental triggers. Complete avoidance is usually impractical. The approach at Nexus Clinic KL is threshold management: identify your individual tolerance level and use practical management measures for unavoidable exposure." },
    { q: "Does rosacea affect the eyes?", a: "Yes. Ocular rosacea affects approximately 50 percent of patients with rosacea and can occur with or without obvious skin manifestations. It produces chronic dry, gritty or burning eyes, frequent styes or eyelid cysts, eyelid redness and scaling, and in severe cases, corneal involvement that can affect vision. At Nexus Clinic KL, ocular rosacea is managed with warm eyelid compresses, preservative-free artificial tears and oral doxycycline or azithromycin for moderate to severe presentations. Any corneal involvement requires ophthalmology referral." },
    { q: "Should I use steroid cream on rosacea?", a: "Usually no. Topical steroids should be avoided on the face for rosacea because they can worsen the condition. While steroids may temporarily suppress inflammation, long-term use on rosacea skin leads to rebound flares, steroid-induced rosacea, and worsening of the underlying condition. At Nexus Clinic KL, steroid creams are not prescribed as a rosacea treatment." },
    { q: "Can I wear makeup with rosacea?", a: "Yes, with the right formulations. Mineral makeup using zinc oxide or titanium dioxide as the pigment base is generally well-tolerated and provides the dual benefit of cosmetic coverage and physical UV protection. Green-tinted colour-correcting products neutralise central face redness effectively. Fragrance-free, non-comedogenic formulations are essential. Waterproof and long-wear formulas should be avoided because they require vigorous removal that disrupts the barrier. All makeup removal should be done with gentle micellar water rather than cleansing balms or wipes requiring rubbing." },
    { q: "Is the rosacea consultation at Nexus Clinic KL free?", a: "The initial rosacea consultation at Nexus Clinic KL is priced at RM 120 to RM 200 and includes clinical skin assessment and Fitzpatrick type classification, rosacea subtype identification using phenotype-directed diagnostic approach adapted for Asian skin, review of previous treatments and their response, written personalised treatment plan covering all prescribed medications and laser recommendations, written rosacea-safe skincare programme calibrated to Malaysia's climate, and written Malaysia-specific trigger management guide. If your presentation is consistent with rosacea that has been mismanaged as acne or eczema, our doctors will explain what was missed and what correct treatment looks like." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-rosacea-treatment1.webp",
      after: "/images/B&A-skin/B&A-rosacea-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-rosacea-treatment2.webp",
      after: "/images/B&A-skin/B&A-rosacea-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-rosacea-treatment3.webp",
      after: "/images/B&A-skin/B&A-rosacea-treatment3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
          <AllPagesHero
            badge="Phenotype-Directed Diagnosis • Doctor-Only"
            title="Accurate Rosacea Treatment in Kuala Lumpur for"
            highlight="Calmer, Less Reactive Facial Skin"
            description="Rosacea is a chronic skin condition that causes facial redness, broken capillaries, flushing and acne-like breakouts. Most patients with rosacea in KL receive a wrong diagnosis before they receive a correct one."
            details="At Nexus Clinic KL, we manage rosacea using a phenotype-directed diagnostic approach specifically adapted for Asian skin. Rosacea treatment is built around your specific subtype, not a generic protocol, because different rosacea subtypes respond to fundamentally different treatments."
            note="Asian patients spend an average of five years with active rosacea symptoms before receiving effective treatment. Facial redness is masked by melanin in darker Fitzpatrick III and IV skin, leading to misdiagnosis as adult acne."
            image="/images/skin/rosacea-treatment.webp"
            imageAlt="Nexus Clinic Kuala Lumpur - Rosacea Treatment"
            ctaText="Free Assessment"
            ctaLink="/contact-us"
            whatsappMessage="Hi, I'm interested in rosacea treatment at Nexus Clinic KL. I'd like to book a consultation."
            floatingTitle="Phenotype-Directed"
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">All medications and devices MOH-approved</p>
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in rosacea management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Sylfirm X for vascular rosacea</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">PDL + IPL for redness</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Rosacea Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Phenotype-directed approach for all Malaysian skin types</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Target, label: "Treatment Options", value: "Topicals, oral, laser (Sylfirm X, PDL, IPL)" },
              { icon: Clock, label: "Session Time", value: "20 to 60 minutes depending on treatment" },
              { icon: Heart, label: "Downtime", value: "Minimal to 7 days depending on laser" },
              { icon: Activity, label: "Review Schedule", value: "6 to 8 weeks for medication review" },
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
                <p className="font-inter text-sm text-taupe">Condition</p>
                <p className="font-georgia text-brown font-semibold">Chronic inflammatory skin condition causing facial redness</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Types of Rosacea</p>
                <p className="font-georgia text-brown font-semibold">ETR, PPR, Phymatous, Ocular, Mixed</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Goal of Treatment</p>
                <p className="font-georgia text-brown">Reduce flare frequency; calm active redness; reduce visible blood vessels</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">MOH Approved</p>
                <p className="font-georgia text-brown">Yes. All medications and devices MOH-approved</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Skin Specialist About Your Facial Redness | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Types of Rosacea Table */}
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
              { key: "subtype", header: "Subtype", className: "font-semibold text-brown" },
              { key: "features", header: "Key Clinical Features" },
              { key: "mechanism", header: "Mechanism" },
              { key: "firstLine", header: "First-Line Treatment" },
              { key: "escalate", header: "When to Escalate" },
            ]}
            data={rosaceaSubtypes.map(item => ({
              subtype: item.subtype,
              features: item.features,
              mechanism: item.mechanism,
              firstLine: item.firstLine,
              escalate: item.escalate,
            }))}
            title="Types of Rosacea: Subtype-to-Treatment Framework"
            subtitle="Different subtypes require fundamentally different treatments"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />  
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              A critical point: Topical metronidazole, azelaic acid and ivermectin have negligible effect on permanently dilated background blood vessels of ETR. Patients applying topical metronidazole for months without improvement in persistent redness likely have ETR where topicals are not appropriate primary treatment.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Diagnosis in Malaysian Skin Table */}
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
                { key: "sign", header: "Diagnostic Sign", className: "font-semibold text-brown" },
                { key: "malaysianPresentation", header: "Malaysian Presentation" },
                { key: "whatNexusLooksFor", header: "What Nexus Clinic KL Looks For" },
              ]}
              data={diagnosticSigns.map(item => ({
                sign: item.sign,
                malaysianPresentation: item.malaysianPresentation,
                whatNexusLooksFor: item.whatNexusLooksFor,
              }))}
              title="Rosacea in Malaysian Skin"
              subtitle="How a skin specialist diagnoses rosacea accurately in darker skin tones"
              variant="default"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
        </motion.div>
      </section>

      {/* Skincare Framework Table */}
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
              { key: "category", header: "Skincare Category", className: "font-semibold text-brown" },
              { key: "useThese", header: "Use These" },
              { key: "avoidThese", header: "Avoid These" },
              { key: "why", header: "Why (Malaysian Context)" },
            ]}
            data={skincareFramework.map(item => ({
              category: item.category,
              useThese: item.useThese,
              avoidThese: item.avoidThese,
              why: item.why,
            }))}
            title="Rosacea-Safe Skincare for Malaysia's Climate"
            subtitle="Structured guide adapted to rosacea and Malaysia's tropical environment"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl border-l-4 border-wine">
            <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
              <Sun className="w-4 h-4" />
              Critical for Malaysian Patients
            </p>
            <p className="text-taupe font-inter text-sm mt-1">
              Switching to a fragrance-free mineral SPF50 is often the single change that produces the most rapid improvement in daily comfort for Malaysian rosacea patients. Chemical UV filters are a frequent cause of facial stinging and flushing.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Triggers Table */}
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
              { key: "trigger", header: "Trigger", className: "font-semibold text-brown" },
              { key: "malaysianContext", header: "Malaysian Context" },
              { key: "mechanism", header: "Mechanism" },
              { key: "management", header: "Practical Management" },
            ]}
            data={triggerData.map(item => ({
              trigger: item.trigger,
              malaysianContext: item.malaysianContext,
              mechanism: item.mechanism,
              management: item.management,
            }))}
            title="Triggers of Rosacea in Malaysia"
            subtitle="Managing environmental factors and reducing flushing"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
        </motion.div>
      </section>

      {/* Treatment Response Timeline Slider */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Rosacea Treatment Response Timeline</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect and when to see improvement</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Response</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Rosacea subtype determines primary treatment approach</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Duration of rosacea before treatment affects response speed</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Consistent trigger management prevents ongoing flares</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>SPF50 compliance protects treatment results from UV</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Combination therapy (medical + procedural) produces best outcomes</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Rosacea is a chronic condition requiring long-term management. Most patients achieve excellent control with consistent treatment and trigger management.
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
                <h3 className="font-georgia text-2xl font-bold">Improvement Timeline</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Topical Medications (PPR)</span>
                    <span className="font-georgia text-2xl font-bold text-white">6 to 8 weeks</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Visible reduction in papules and pustules</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Oral Doxycycline</span>
                    <span className="font-georgia text-2xl font-bold text-white">6 to 8 weeks</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Meaningful improvement for moderate to severe PPR</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Sylfirm X / PDL Laser</span>
                    <span className="font-georgia text-2xl font-bold text-white">3 to 5 sessions</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Progressive improvement over 4 to 8 weeks after each session</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Brimonidine (Topical)</span>
                    <span className="font-georgia text-2xl font-bold text-white">30 to 60 minutes</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Acute redness reduction for specific occasions</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Maximum improvement from a full treatment course is typically assessed at 3 to 4 months after completion.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ Rosacea cannot be cured, but treatment can control symptoms and prevent progression. Maintenance reviews every 3 to 4 months help sustain results.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Rosacea Assessment and Treatment Process</h2>
            <p className="text-taupe font-inter">Step by step at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Comprehensive Rosacea Assessment", desc: "Detailed history of facial redness, flushing episodes, papule/pustule history, failed previous treatments, dietary and environmental triggers. Clinical skin examination identifies subtype and uses dermatoscopy where needed." },
              { step: "02", title: "Treatment Planning", desc: "Doctor explains specific treatment options for identified subtypes, realistic improvement timeline, daily skincare programme, and trigger management approach customised to lifestyle." },
              { step: "03", title: "Active Treatment Phase", desc: "Topical medications prescribed with written application instructions. Laser sessions scheduled at appropriate intervals. All procedural treatments doctor-performed." },
              { step: "04", title: "Maintenance and Monitoring", desc: "Follow-up visits every 3 to 4 months monitor for flare activity, adjust medications, provide top-up laser sessions, and review skincare and trigger management." },
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
              Book Your Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Phenotype-directed rosacea care at Nexus Clinic KL</p>
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
                  { key: "bestFor", header: "Best For (Subtype)" },
                  { key: "sessions", header: "Sessions" },
                  { key: "price", header: "Price Range (RM) 2026", className: "font-semibold text-wine" },
                ]}
                data={pricingTiers.map(tier => ({
                  treatment: tier.treatment,
                  bestFor: tier.bestFor,
                  sessions: tier.sessions,
                  price: tier.price,
                }))}
                title="Rosacea Treatment Cost in Malaysia 2026"
                subtitle="Transparent pricing at Nexus Clinic KL"
                variant="default"
                fadeInUp={fadeInUp}
                className="py-12 px-4"
              />

              <motion.div variants={fadeInUp} className="text-center mt-4">
                <p className="text-taupe font-inter text-sm italic">
                  Combination rosacea programmes incorporating medical management and procedural laser deliver the most comprehensive outcomes for moderate to severe or mixed subtype rosacea. All pricing disclosed before any commitment at the initial consultation.
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
              Accurate, Climate-Adapted Rosacea Treatment in KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Rosacea is undertreated and misdiagnosed in Malaysia. The combination of subtype-specific treatment, phenotype-directed diagnosis adapted for Fitzpatrick III-IV skin, Sylfirm X laser safe across all Malaysian skin types, and practical Malaysia-adapted skincare distinguishes effective rosacea treatment.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed skin specialist doctors bring over 15 years of combined experience and have completed over 5,000 procedures. We are committed to the diagnostic rigour required to correctly identify rosacea in Asian skin rather than defaulting to an acne or eczema label.
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
                message="Hi, I'd like to book a consultation for rosacea treatment at Nexus Clinic KL. Please let me know available slots."
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