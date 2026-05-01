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
  Droplet,
  Wind,
  Feather,
  ThermometerSun,
  DollarSign,
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
interface HydraFacialProps {
  locale: string;
}

export default function HydraFacialLandingPage({ locale }: HydraFacialProps) {
  const skinConcernMatrix = [
    { concern: "Clogged Pores and Blackheads", tier: "Signature", booster: "Salicylic acid and glycolic acid peel solution", addOn: "Blue LED therapy for bacterial suppression", outcome: "Visibly cleaner pores after 1 session; reduction in congestion over 3 to 4 monthly sessions" },
    { concern: "Dehydration and Dullness", tier: "Signature or Deluxe", booster: "Hyaluronic acid and peptide fusion serum", addOn: "Antiox+ serum booster for antioxidant saturation", outcome: "Immediate plumping and glow visible same day; sustained hydration with monthly sessions" },
    { concern: "Active Acne and Breakouts", tier: "Deluxe", booster: "Salicylic acid peel plus anti-inflammatory serum (Rozatrol)", addOn: "Blue LED to target acne-causing bacteria", outcome: "Reduction in active lesions and sebum over 3 to 4 sessions" },
    { concern: "Pigmentation and Uneven Skin Tone", tier: "Deluxe", booster: "Britenol brightening booster (kojic acid and alpha arbutin)", addOn: "Red LED for collagen stimulation", outcome: "Progressive brightening over 3 to 6 sessions" },
    { concern: "Fine Lines, Wrinkles and Early Ageing", tier: "Deluxe or Platinum", booster: "DermaBuilder peptide booster for collagen and elastin stimulation", addOn: "Red LED therapy for collagen activation", outcome: "Visible improvement in fine lines and skin firmness over 4 to 6 monthly sessions" },
    { concern: "Sensitive and Reactive Skin (including Rosacea)", tier: "Signature (gentle settings)", booster: "Rozatrol calming booster for redness and inflammation reduction", addOn: "Red LED for anti-inflammation", outcome: "Immediate calming and redness reduction; improved baseline tolerance with regular sessions" },
    { concern: "Pre-Event Skin Prep (Wedding, Photoshoot)", tier: "Platinum", booster: "Antiox+ serum plus peptide booster combination", addOn: "Lymphatic drainage for de-puffing; red LED for radiance boost", outcome: "Maximum glow, refined pores and depuffed contours visible immediately after treatment" },
  ];

  const programmePhases = [
    { phase: "Phase 1: Reset", timeline: "Month 1 to 2 (2 sessions)", sessions: "2x Deluxe HydraFacial with booster matched to your primary concern", outcome: "Deep purge of accumulated congestion; establish hydration baseline; visible initial brightening" },
    { phase: "Phase 2: Active Improvement", timeline: "Months 3 to 6 (4 sessions)", sessions: "Monthly Deluxe HydraFacial with targeted boosters; booster adjusted based on skin response", outcome: "Progressive texture refinement, pore reduction and pigmentation improvement; skin barrier strengthens" },
    { phase: "Phase 3: Maintenance", timeline: "Months 7 to 12 (4 to 6 sessions)", sessions: "Monthly or 6-weekly Signature or Deluxe HydraFacial", outcome: "Sustain improvement achieved in active phase; adapt booster to seasonal skin changes" },
    { phase: "Phase 4: Long-Term Skin Health", timeline: "Year 2 and beyond", sessions: "Monthly HydraFacial as core skin maintenance", outcome: "Continuously maintained pore health, hydration and glow; protects results from deeper clinical treatments" },
  ];

  const pricingTiers = [
    { treatment: "Signature HydraFacial", includes: "Cleanse, peel, extract, hydrate with Vortex-Fusion; Antiox+ serum infusion", time: "30 to 40 min", price: "RM 380 to RM 520" },
    { treatment: "Deluxe HydraFacial", includes: "All Signature steps plus 1 targeted booster (Britenol / Rozatrol / DermaBuilder) plus LED light therapy", time: "45 to 60 min", price: "RM 520 to RM 720" },
    { treatment: "Platinum HydraFacial", includes: "All Deluxe steps plus lymphatic drainage massage and detox booster; maximum glow and sculpting", time: "60 to 75 min", price: "RM 720 to RM 950" },
    { treatment: "Booster Add-On (per session)", includes: "Britenol (brightening), Rozatrol (calming), DermaBuilder (anti-ageing), Antiox+ (antioxidant)", time: "Included in Deluxe and Platinum", price: "RM 80 to RM 150 if added to Signature" },
    { treatment: "LED Light Therapy Add-On", includes: "Blue LED (acne), Red LED (collagen and anti-inflammation) or combination", time: "15 min add-on", price: "RM 80 to RM 120 if added to Signature" },
    { treatment: "Monthly HydraFacial Package (4 sessions)", includes: "4x Signature or Deluxe HydraFacial; booster adjusted each session based on skin review", time: "4 sessions over 4 months", price: "From RM 1,500 (Signature) / From RM 2,000 (Deluxe)" },
  ];

  const faqData = [
    { q: "What is the difference between Signature, Deluxe and Platinum HydraFacial?", a: "Signature HydraFacial is the core three-step session covering cleanse, extract, and hydrate using patented vortex-fusion technology with Antiox+ serum. It takes 30 to 40 minutes and is ideal for maintenance and general brightness. Deluxe HydraFacial adds a targeted booster serum for your specific skin concern, such as Britenol for pigmentation, Rozatrol for sensitive skin, or DermaBuilder for fine lines, plus LED light therapy. It takes 45 to 60 minutes. Platinum HydraFacial adds lymphatic drainage massage before the core steps for maximum depuffing, detoxification and sculpting. It takes 60 to 75 minutes and is the choice for special occasions or patients wanting the most comprehensive single-session experience." },
    { q: "How often should I get a HydraFacial in Malaysia?", a: "Monthly HydraFacial sessions produce the best sustained results for most patients. Monthly frequency aligns with the skin's natural cell turnover cycle of approximately 28 days, meaning each session works with freshly renewed surface cells rather than clearing the same accumulated congestion from an overly long interval. For patients with active acne or heavy congestion, fortnightly sessions for the first 6 to 8 weeks followed by monthly maintenance is sometimes recommended. For patients using HydraFacial purely for occasional glow maintenance or event preparation, sessions every 4 to 8 weeks are appropriate." },
    { q: "Is HydraFacial suitable for sensitive and rosacea-prone skin?", a: "Yes. HydraFacial is one of the most suitable professional facial treatments for sensitive and rosacea-prone skin precisely because it uses suction-based extraction rather than manual pressing, delivers serums rather than high-concentration acids at ablative doses, and has no heat delivery that triggers vascular flushing. At Nexus Clinic KL, sensitive and rosacea patients are treated with the Signature tier or Deluxe with the Rozatrol booster at reduced suction settings. LED red light therapy is particularly beneficial for rosacea as it reduces vascular reactivity and supports barrier repair. Patients with a rosacea diagnosis are always assessed by a doctor before their first session." },
    { q: "Can HydraFacial be combined with other treatments?", a: "Yes, and combination pairing is frequently recommended at Nexus Clinic KL. HydraFacial pairs particularly well with Pico Laser for pigmentation management, with the HydraFacial session typically performed 7 to 14 days before or after a Pico Laser session to maintain skin hydration and surface clarity without interfering with the laser's healing phase. It also pairs well with skin booster injections, which can be performed on the same day as HydraFacial since HydraFacial is non-invasive and does not create skin trauma that would contraindicate injection. HydraFacial is not typically combined on the same day as RF Microneedling or fractional laser due to the heat and micro-injury involved." },
    { q: "How long do HydraFacial results last?", a: "The immediate post-treatment glow, smoothness and hydration from a single HydraFacial session are typically visible for 5 to 7 days in normal conditions, and up to 2 weeks in patients who follow the aftercare guidance and maintain daily SPF50 use. With monthly sessions, the cumulative improvement in baseline skin health, pore size and hydration persists increasingly well between sessions as the skin barrier strengthens. Patients who discontinue monthly sessions will find their skin gradually returns to its pre-programme baseline over 4 to 8 weeks, as no permanent structural change to the skin is made by HydraFacial; it is a surface and serum-based treatment that requires ongoing maintenance for sustained results." },
    { q: "Is HydraFacial suitable for men?", a: "Yes. HydraFacial is equally effective and appropriate for men, and is one of the most popular no-downtime skin treatments among male patients at Nexus Clinic KL. Men commonly seek HydraFacial for post-shaving congestion and sensitivity, enlarged pores and oiliness, dullness from daily sun and pollution exposure, and as a no-fuss monthly skin maintenance treatment that requires no recovery period. The treatment protocol and tier selection for male patients follows the same skin-concern-driven approach as for female patients, with no clinically meaningful difference in how the treatment performs across genders." },
    { q: "What is the difference between HydraFacial and a regular facial?", a: "A traditional facial relies on manual techniques, where the depth of cleansing, the pressure of extractions and the penetration of applied serums vary with each therapist and each session. HydraFacial uses a medical-grade device with a patented tip that delivers consistent vortex suction pressure for extraction and simultaneously infuses serum into the open pore. This device-driven consistency produces more uniform, reproducible results than manual facials and achieves deeper serum penetration due to the simultaneous extraction-infusion mechanic. HydraFacial also uses clinical-grade serum formulations that are not available in over-the-counter skincare." },
    { q: "Can HydraFacial help with acne scars?", a: "HydraFacial improves the surface skin quality, hydration and texture that surrounds acne scars and can reduce the visibility of post-inflammatory hyperpigmentation with the Britenol booster. However, it does not structurally remodel depressed acne scar tissue, as it works at the surface and shallow pore level rather than the mid-to-deep dermis where scar tissue forms. For patients with pitted or atrophic acne scars requiring structural improvement, HydraFacial works best as a complementary monthly maintenance treatment alongside deeper clinical interventions." },
    { q: "How much does HydraFacial cost in Malaysia?", a: "At Nexus Clinic KL, Signature HydraFacial is priced from RM 380 to RM 520, Deluxe from RM 520 to RM 720 and Platinum from RM 720 to RM 950 per session. Monthly packages for 4 sessions start from RM 1,500 for Signature and RM 2,000 for Deluxe, representing a meaningful saving compared to individual session pricing. Booster add-ons to Signature sessions are priced at RM 80 to RM 150. All pricing is confirmed before treatment and includes the pre-treatment skin consultation, the full device session and post-treatment SPF application. No additional charges arise after the session." },
    { q: "Is the HydraFacial consultation at Nexus Clinic KL free?", a: "Yes. Your first skin consultation at Nexus Clinic KL before a HydraFacial session is complimentary. It includes a skin type and concern assessment, a recommendation of the most appropriate tier and booster for your skin, a discussion of how HydraFacial fits within your broader skin health goals if you are managing pigmentation, acne or ageing concerns, and full session pricing transparency. Honest consultations are standard at Nexus Clinic KL. If your primary skin concern is better addressed by a different treatment modality before or alongside HydraFacial, our doctors will tell you clearly." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-hydrafacial1.webp",
      after: "/images/B&A-skin/B&A-hydrafacial1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-hydrafacial2.webp",
      after: "/images/B&A-skin/B&A-hydrafacial2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-hydrafacial3.webp",
      after: "/images/B&A-skin/B&A-hydrafacial3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Zero Downtime • Doctor-Supervised"
        title="Best HydraFacial Treatment in Malaysia for"
        highlight="Brighter, Cleaner, Hydrated Skin"
        description="Back-to-back meetings, tropical UV and KL pollution take a visible toll on your skin. Your skin absorbs KL's full daily burden without a break."
        details="At Nexus Clinic KL, we use only the authentic HydraFacial device with genuine patented Vortex-Fusion technology and the full range of original HydraFacial boosters. Every session begins with a skin assessment so the correct tier and booster for your skin concern that day are selected before treatment begins."
        note="HydraFacial is not a standardized facial appointment. It is a personalised, medically supervised skin health session administered by our licensed aesthetic doctors and clinical team, with full aftercare guidance included as standard."
        image="/images/skin/hydrafacial.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - HydraFacial Treatment"
        ctaText="Free Skin Assessment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in HydraFacial at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Authentic HydraFacial MD"
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
                    <p className="font-inter font-semibold text-brown text-sm">MOH-Registered Clinic</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Doctor-led planning and supervision</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Authentic HydraFacial MD</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Genuine Vortex-Fusion technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in skin health</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Zero Downtime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Genuine HydraFacial Boosters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Safe for All Malaysian Skin Types</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">HydraFacial at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Authentic Vortex-Fusion technology for all skin types</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: "Session Time", value: "30 to 75 minutes depending on tier" },
              { icon: Heart, label: "Downtime", value: "Zero. Return to work immediately" },
              { icon: Sparkles, label: "Results", value: "Immediate glow and hydration" },
              { icon: Activity, label: "Recommended Frequency", value: "Monthly for sustained results" },
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
                <p className="font-inter text-sm text-taupe">Treatment</p>
                <p className="font-georgia text-brown font-semibold">HydraFacial Signature, Deluxe, Platinum tiers</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown font-semibold">All skin types and tones; men and women</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown">None required; treatment is pain-free</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Technology</p>
                <p className="font-georgia text-brown">Authentic HydraFacial MD with Vortex-Fusion</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to Our Team About the Right HydraFacial Tier for Your Skin
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skin Concern to HydraFacial Tier Decision Matrix Table */}
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
              { key: "concern", header: "Primary Skin Concern", className: "font-semibold text-brown" },
              { key: "tier", header: "Recommended Tier" },
              { key: "booster", header: "Key Booster Ingredient" },
              { key: "addOn", header: "Add-On Recommended" },
              { key: "outcome", header: "Expected Outcome" },
            ]}
            data={skinConcernMatrix.map(item => ({
              concern: item.concern,
              tier: item.tier,
              booster: item.booster,
              addOn: item.addOn,
              outcome: item.outcome,
            }))}
            title="Skin-Concern-to-HydraFacial-Tier Decision Matrix"
            subtitle="Which tier and booster is right for you"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              Two decisions deserve particular attention. First, patients with active acne should choose Deluxe tier with Rozatrol booster and blue LED. Second, patients seeking pigmentation improvement should understand HydraFacial is a maintenance tool best paired with Pico Laser.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why HydraFacial Is Effective for Malaysian Skin */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Why HydraFacial Is Particularly Effective for Malaysian Skin</h2>
            <p className="text-taupe font-inter">Designed for KL's unique environmental challenges</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <ThermometerSun className="w-10 h-10 text-wine mb-3" />
              <h3 className="font-georgia text-lg text-brown mb-2">Year-Round UV Intensity</h3>
              <p className="text-taupe font-inter text-sm">UV Index 8+ consistently overstimulates melanin production. HydraFacial's peel and extraction steps remove dead, pigment-bearing cells responsible for dullness and uneven tone.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <Droplet className="w-10 h-10 text-wine mb-3" />
              <h3 className="font-georgia text-lg text-brown mb-2">Tropical Humidity Paradox</h3>
              <p className="text-taupe font-inter text-sm">80 to 90% humidity combined with air-conditioning creates oiliness and dehydration cycles. HydraFacial extracts excess sebum while infusing hyaluronic acid to replenish lost moisture.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <Wind className="w-10 h-10 text-wine mb-3" />
              <h3 className="font-georgia text-lg text-brown mb-2">Urban Pollution</h3>
              <p className="text-taupe font-inter text-sm">Fine particulate matter from Klang Valley traffic embeds in pores. HydraFacial's vortex suction removes deep pore debris, reducing oxidative burden on the skin.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Genuine HydraFacial vs Aqua Peel Copycats */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Genuine HydraFacial vs Aqua Peel Copycats</h2>
            <p className="text-taupe font-inter">What Malaysian patients need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
            <p className="text-brown font-inter mb-4">The authentic HydraFacial device uses patented Vortex-Fusion spiral tip technology that simultaneously extracts impurities while delivering serum into the cleansed pore. Copycat devices perform extraction and infusion as separate sequential steps, reducing serum penetration depth.</p>
            <p className="text-brown font-inter">At Nexus Clinic KL, every HydraFacial session uses the authentic HydraFacial MD device and genuine branded booster serums. When booking a HydraFacial at any clinic, patients are entitled to ask to see the device and confirm it carries official HydraFacial branding.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* The Three HydraFacial Tiers */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Three HydraFacial Tiers at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Signature, Deluxe and Platinum explained</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-wine mb-2">Signature HydraFacial</h3>
              <p className="text-taupe font-inter text-sm mb-3">30 to 40 minutes • RM 380 to RM 520</p>
              <p className="text-brown font-inter">Foundational three-step session: cleanse and peel, extract, hydrate and infuse with Antiox+ antioxidant and hyaluronic acid serum. Ideal monthly maintenance for general dullness, mild congestion and hydration.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-wine mb-2">Deluxe HydraFacial</h3>
              <p className="text-taupe font-inter text-sm mb-3">45 to 60 minutes • RM 520 to RM 720</p>
              <p className="text-brown font-inter">All Signature steps plus targeted booster serum selected for your primary skin concern and LED light therapy. Recommended for patients with specific active concerns including acne, pigmentation, fine lines or reactive redness.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-wine mb-2">Platinum HydraFacial</h3>
              <p className="text-taupe font-inter text-sm mb-3">60 to 75 minutes • RM 720 to RM 950</p>
              <p className="text-brown font-inter">Most comprehensive tier adding lymphatic drainage massage before core steps to decongest facial pathways, reduce puffiness and prepare skin for deeper serum absorption. Ideal for weddings, photoshoots or seasonal skin resets.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 12-Month HydraFacial Programme Table */}
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
                { key: "phase", header: "Programme Phase", className: "font-semibold text-brown" },
                { key: "timeline", header: "Timeline" },
                { key: "sessions", header: "Sessions and Tier" },
                { key: "outcome", header: "Goal and Expected Outcome" },
              ]}
              data={programmePhases.map(phase => ({
                phase: phase.phase,
                timeline: phase.timeline,
                sessions: phase.sessions,
                outcome: phase.outcome,
              }))}
              title="HydraFacial as a 12-Month Skin Health Programme"
              subtitle="Monthly sessions produce sustainable outcomes"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              The 12-month programme approach makes HydraFacial cost-effective. Patients who establish a monthly HydraFacial routine typically report spending less on home skincare within 3 to 4 months as baseline skin health improves.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* The HydraFacial Treatment Process Steps */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The HydraFacial Treatment Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Skin Consultation", desc: "Doctor reviews current skin concerns, active breakouts, sensitivity changes. Determines tier and booster for session." },
              { step: "02", title: "Cleanse and Peel", desc: "Vortex-based exfoliation with mild glycolic and salicylic acid peel solution. Removes dead skin cells and loosens pore debris." },
              { step: "03", title: "Extraction", desc: "Vortex suction tip draws out blackheads, sebum plugs and impurities using painless negative pressure. No squeezing or skin trauma." },
              { step: "04", title: "Hydration and Booster", desc: "Hyaluronic acid, peptides and selected booster infused into cleansed open pores. Produces immediate visible glow." },
              { step: "05", title: "Aftercare", desc: "Soothing SPF50 sunscreen applied. Written home care instructions provided." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-lg mx-auto mb-3 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-sm text-brown mb-1 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link href="/contact-us/" className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Book Your HydraFacial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Zero downtime • Instant glow</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Aftercare Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Aftercare for HydraFacial Treatment</h2>
            <p className="text-taupe font-inter">Protecting your results in the 24 hours after treatment</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
              <h3 className="font-georgia text-lg text-brown mb-3">What to do</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Use gentle cleanser and prescribed moisturiser only for 24 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Apply broad-spectrum SPF50 the following morning and for at least 3 days</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Light makeup can be applied from the following morning</span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-rose">
              <h3 className="font-georgia text-lg text-brown mb-3">What to avoid</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span>Avoid retinol, AHA acids, BHA acids for 24 hours after treatment</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span>Avoid hot showers, steam rooms and heavy exercise for 6 to 12 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span>Avoid applying makeup for 4 to 6 hours after the session</span>
                </li>
              </ul>
            </motion.div>
          </div>
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
                { key: "treatment", header: "HydraFacial Treatment", className: "font-semibold text-brown" },
                { key: "includes", header: "Includes" },
                { key: "time", header: "Session Time" },
                { key: "price", header: "Price Range (RM) 2026", className: "font-semibold text-wine" },
              ]}
              data={pricingTiers.map(tier => ({
                treatment: tier.treatment,
                includes: tier.includes,
                time: tier.time,
                price: tier.price,
              }))}
              title="HydraFacial Price in Malaysia 2026"
              subtitle="Transparent pricing at Nexus Clinic KL"
              variant="default"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />

            <motion.div variants={fadeInUp} className="text-center mt-4">
              <p className="text-taupe font-inter text-sm italic">
                Monthly package pricing available for patients committing to a 4-session programme. All sessions include pre-treatment skin consultation, full device session, and post-treatment SPF application.
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
              Book Your HydraFacial at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              HydraFacial is the cleanest, most effective no-downtime skin treatment available in Malaysia. In a single session it cleanses deeper than any home routine, extracts without trauma and leaves your skin with a genuine glow.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed aesthetic doctors bring more than 15 years of combined experience, have performed over 5,000 aesthetic procedures and operate exclusively with MOH-approved devices and clinical protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Free Skin Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a consultation for HydraFacial at Nexus Clinic KL. Please let me know available slots."
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