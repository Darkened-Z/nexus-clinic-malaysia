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
  Palette,
  Layers,
  Sun,
  Target,
  Combine,
  Touchpad,
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
interface StretchMarkRemovalProps {
  locale: string;
}

export default function StretchMarkLanding({ locale }: StretchMarkRemovalProps) {
  const stretchMarkStages = [
    { stage: "Striae Rubrae (Red or Pink)", appearance: "Active red or pink stretch marks; may feel slightly raised or itchy; skin has been stretched recently", mechanism: "Active inflammation in the middle layer of the skin (dermis); blood vessels are dilated; fibroblasts are still active; collagen and elastin disruption is recent", treatment: "Pulsed Dye Laser (PDL) targets blood vessels in active layer of skin; reduces redness while stimulating collagen production | Fractional CO2 laser or microneedling with PRP" },
    { stage: "Striae Albae (White or Silver)", appearance: "Mature white or silver stretch marks; flat or slightly depressed into skin; skin texture is permanently altered", mechanism: "Blood vessels have regressed in the middle layer of the skin; fibrosis replacing torn collagen and elastin; melanocytes are depleted; dermis is thinned and atrophic", treatment: "Fractional CO2 laser treatment is most effective option | Radiofrequency microneedling | PRP combined with microneedling" },
    { stage: "Mixed (Red Transitioning to White)", appearance: "Stretch marks in transition; some areas still red, others fading to white or silver", mechanism: "Parts of dermis still actively inflamed while other areas progressed to fibrosis; window of opportunity exists to treat remaining active red areas", treatment: "Combined treatment approach: PDL for remaining red areas and fractional laser or RF microneedling for transitioning areas" },
    { stage: "Striae Gravidarum (Pregnancy)", appearance: "Stretch marks on tummy, breasts and thighs; typically present postpartum; can appear rapidly during third trimester", mechanism: "Rapid expansion of skin during pregnancy combined with hormonal changes reducing collagen production; skin stretched beyond elasticity threshold", treatment: "Begin postpartum once breastfeeding complete; start with PDL for red areas; progress to fractional CO2 laser or RF microneedling with PRP" },
  ];

  const treatmentComparison = [
    { treatment: "Fractional CO2 Laser Treatment", bestFor: "White or silver mature stretch marks; mixed stage", mechanism: "Creates microscopic ablation columns in middle layer of skin; stimulates wound healing and collagen production", outcome: "20 to 60% improvement in appearance; 3 to 5 sessions; PIH risk moderate; downtime 3 to 7 days", pihRisk: "Moderate - conservative settings used at Nexus Clinic KL" },
    { treatment: "Pulsed Dye Laser (PDL)", bestFor: "Striae rubrae (red or pink active stretch marks)", mechanism: "Targets blood vessels in active layer of skin; reduces vasodilation and inflammation; stimulates collagen", outcome: "Significant reduction in redness and flattening; 3 to 6 sessions; lower PIH risk; minimal downtime", pihRisk: "Low - safe for Malaysian skin with appropriate settings" },
    { treatment: "Microneedling with PRP", bestFor: "All stages; particularly useful for stretch marks resistant to laser alone", mechanism: "Creates controlled micro-injuries to stimulate collagen; PRP delivers growth factors directly into dermis", outcome: "30 to 40% improvement in appearance; excellent safety profile; minimal PIH risk", pihRisk: "Very low - excellent for darker Malaysian skin" },
    { treatment: "RF Microneedling", bestFor: "White or silver stretch marks; skin laxity; patients needing minimal downtime", mechanism: "Radiofrequency energy delivered through microneedles heats dermis uniformly; contracts existing collagen", outcome: "Moderate improvement in texture and elasticity; very low PIH risk; minimal downtime", pihRisk: "Very low - excellent for Fitzpatrick III-V skin" },
    { treatment: "Stretch Mark Removal Cream", bestFor: "Prevention only; once stretch marks formed in dermis, minimal effect", mechanism: "Works on skin surface only; cannot penetrate to middle layer where stretch marks originate", outcome: "Minimal to no improvement in established stretch marks; may help prevent new marks", pihRisk: "None - but ineffective for existing stretch marks" },
  ];

  const causeData = [
    { cause: "Pregnancy (Striae Gravidarum)", mechanism: "Rapid expansion of tummy, breasts, thighs; hormonal factors reduce collagen production", location: "Tummy most common; thighs, buttock, breasts", timing: "Begin postpartum; treat red marks early; do not wait until marks turn white" },
    { cause: "Rapid Weight Changes", mechanism: "Weight gain stretches skin faster than collagen can adapt; weight loss leaves lax skin", location: "Tummy, flanks, hips; thighs, buttock; upper arms", timing: "Begin once weight stabilised; treating during ongoing weight changes reduces efficacy" },
    { cause: "Puberty (Growth Spurts)", mechanism: "Rapid height gain stretches thighs, buttock, upper arms; hormonal factors reduce elasticity", location: "Thighs most common; buttock; upper arms; lower back", timing: "Red puberty marks respond to laser at any age; white marks improved with fractional laser" },
    { cause: "Muscle Building", mechanism: "Rapid increase in muscle mass stretches skin over upper arms, shoulders, buttock", location: "Upper arms most common; shoulders; buttock", timing: "Same treatment options as pregnancy or weight change stretch marks" },
    { cause: "Hormonal Conditions", mechanism: "Elevated cortisol inhibits collagen production; skin becomes fragile; stretch marks may occur without visible size change", location: "Abdomen, flanks, upper arms, thighs, buttock", timing: "Address underlying hormonal condition before or concurrent with treatment" },
  ];

  const maintenanceData = [
    { measure: "SPF50 Sunscreen", when: "Every morning from day after each session; continue throughout treatment course", instruction: "Laser treatment sensitises treated skin to UV; Malaysia's UV index 10-13 creates high PIH risk; mineral sunscreen preferred" },
    { measure: "Moisturisation", when: "Twice daily from immediately after each session; continue between sessions", instruction: "Fragrance-free moisturiser with ceramides, hyaluronic acid supports skin barrier recovery; supports skin elasticity" },
    { measure: "Gradual Weight Management", when: "Throughout treatment course and maintenance period", instruction: "Rapid weight changes during treatment can produce new stretch marks; stable weight recommended during course" },
    { measure: "Collagen-Supporting Nutrition", when: "Ongoing lifestyle measure throughout treatment", instruction: "Adequate protein, vitamin C, zinc support collagen production; avoid smoking as nicotine suppresses collagen" },
  ];

  const pricingTiers = [
    { treatment: "Fractional CO2 Laser Treatment", bestFor: "White or silver mature stretch marks; skin texture improvement", sessions: "3 to 5 sessions at 4 to 8 week intervals", price: "RM 800 to RM 2,000 per session" },
    { treatment: "Pulsed Dye Laser (PDL)", bestFor: "Red or pink active stretch marks; any stage with remaining redness", sessions: "3 to 6 sessions at 4 to 6 week intervals", price: "RM 600 to RM 1,500 per session" },
    { treatment: "Microneedling with PRP", bestFor: "All stages; excellent for all skin types; safe for Malaysian Fitzpatrick III-V", sessions: "3 to 5 sessions at 4 to 6 week intervals", price: "RM 700 to RM 1,500 per session" },
    { treatment: "RF Microneedling", bestFor: "White or silver marks; skin laxity; patients needing minimal downtime", sessions: "3 to 5 sessions at 4 to 6 week intervals", price: "RM 800 to RM 1,800 per session" },
    { treatment: "Combination Stretch Marks Programme", bestFor: "Moderate to significant stretch marks; mixed stage", sessions: "3 to 5 combined sessions", price: "From RM 2,000 per session or RM 6,000 to RM 12,000 per programme" },
  ];

  const faqData = [
    { q: "Can stretch marks be removed completely?", a: "No cosmetic procedure removes stretch marks completely. Stretch marks are a permanent structural change in the middle layer of the skin caused when the skin has been stretched beyond the capacity of collagen and elastin to compensate. What effective stretch marks treatment achieves is a significant reduction in the appearance of stretch marks: the marks on the skin become flatter, smoother, closer to the surrounding skin tone and far less noticeable. Red or pink stretch marks respond more significantly to laser treatment than white or silver mature marks. At Nexus Clinic KL, we provide honest outcome expectations at the initial consultation specific to the type and stage of stretch marks you have, rather than promising complete removal." },
    { q: "Which treatment is best for stretch marks in Malaysia?", a: "The best stretch marks removal treatment depends on the stage and type of stretch marks. For red active stretch marks (striae rubrae), pulsed dye laser treatment is the most effective first step, targeting the active blood vessels in the middle layer of the skin. For white or silver mature stretch marks (striae albae), fractional CO2 laser treatment is the most effective treatment option for improving skin texture. Microneedling with PRP (platelet rich plasma) is excellent for all stages and is particularly suited to darker Malaysian skin types. RF microneedling is the best advanced treatment for patients who need minimal downtime. A combination of laser treatment and PRP provides the best overall stretch marks removal outcomes." },
    { q: "How many sessions are needed to get rid of stretch marks?", a: "Most patients require 3 to 5 sessions to significantly get rid of stretch marks or reduce their appearance. Red stretch marks may respond visibly from session 2 or 3 with pulsed dye laser treatment. White or silver marks require the full course of fractional laser treatment or RF microneedling with PRP to see meaningful improvement. The exact number of sessions varies based on the severity of the stretch marks, how long they have been present, the body area being treated, and the patient's skin response. At Nexus Clinic KL, a realistic session estimate is provided at the initial consultation and reviewed at each treatment visit based on your progress." },
    { q: "Is stretch mark laser treatment safe for Malaysian skin?", a: "Laser treatment for stretch marks is safe for Malaysian skin types when performed by a qualified LCP certified aesthetic doctor using the correct settings for your Fitzpatrick skin type. The primary risk for Malaysian Fitzpatrick III-V skin is post-inflammatory hyperpigmentation (PIH), particularly with ablative fractional laser treatment. At Nexus Clinic KL, settings for all laser treatment sessions are calibrated conservatively for Malaysian skin to reduce PIH risk, and SPF50 use is mandatory during the treatment course. RF microneedling and microneedling with PRP carry the lowest PIH risk of the available treatment options and are excellent choices for darker-skinned Malaysian patients." },
    { q: "How much does stretch mark removal cost in Malaysia?", a: "Stretch mark removal cost in Malaysia at Nexus Clinic KL ranges from RM 600 to RM 2,000 per session depending on the laser treatment modality and the body area being treated. A complete treatment programme of 3 to 5 sessions for a single area such as the tummy or thighs costs approximately RM 3,000 to RM 8,000 per area depending on the treatment selected. Combination stretch marks removal programmes incorporating laser treatment and PRP are available at programme pricing. All pricing is disclosed transparently before any commitment at the free initial consultation." },
    { q: "Can stretch mark removal treatment be done during pregnancy?", a: "No. Laser treatment and microneedling with PRP are not recommended during pregnancy. Stretch mark removal treatment in Malaysia should be deferred until after delivery. If breastfeeding, treatment should ideally wait until breastfeeding is complete, though PRP can be considered earlier as it uses the patient's own blood components without any medications. Using stretch mark removal cream during pregnancy to prevent developing stretch marks or reduce their severity is safe and recommended as a preventive measure, particularly on the tummy from the second trimester onwards." },
    { q: "Do stretch marks on the tummy respond to treatment?", a: "Yes. Tummy stretch marks are among the most common presentations at stretch marks removal clinics in Malaysia, particularly in postpartum patients. Tummy stretch marks caused by pregnancy respond well to laser treatment and PRP when treatment begins while the marks are still red or pink. The tummy is a well-accessible treatment area and fractional laser treatment, RF microneedling and PRP are all well-suited to this body area. A course of 3 to 5 sessions is typically recommended for tummy stretch marks at Nexus Clinic KL." },
    { q: "How is Nexus Clinic KL different from other stretch marks removal clinics in Malaysia?", a: "Nexus Clinic KL differentiates from other marks removal clinics in Malaysia in three ways. First, all treatment is performed by a LCP certified aesthetic doctor rather than by therapists or technicians. Second, the treatment plan is stage-matched: red stretch marks receive pulsed dye laser treatment and white or silver marks receive fractional laser or RF microneedling, rather than a single protocol applied regardless of stage. Third, the consultation includes honest outcome expectations including PIH risk for Malaysian skin and realistic improvement percentages rather than overselling complete removal." },
    { q: "Is PRP good for stretch marks?", a: "PRP (platelet rich plasma) is an effective treatment for stretch marks and an important component of the combination advanced treatments programme at Nexus Clinic KL. The platelets and fibrin in PRP contain growth factors that stimulate fibroblast activity, collagen production and skin texture improvement in the treated layer of the skin. PRP combined with microneedling delivers the platelets and fibrin directly into the dermis where stretch marks originate. Published studies show 30 to 40% improvement in the appearance of stretch marks with a full PRP course. PRP treatment is safe for all skin types including darker Malaysian Fitzpatrick skin and carries minimal PIH risk." },
    { q: "Is the stretch mark consultation at Nexus Clinic KL free?", a: "Yes. The initial stretch mark removal consultation at Nexus Clinic KL is complimentary and includes clinical assessment of the type and stage of stretch marks, body area assessment including tummy, thighs, buttock, upper arms and other areas, a review of the cause of stretch marks and any relevant hormonal history, confirmation of the appropriate treatment options available for your specific presentation, an honest outcome expectation discussion, and a personalised cost estimate for the full recommended programme. A LCP certified aesthetic doctor performs the assessment." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-stretch-mark1.webp",
      after: "/images/B&A-skin/B&A-stretch-mark1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-stretch-mark2.webp",
      after: "/images/B&A-skin/B&A-stretch-mark2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-stretch-mark3.webp",
      after: "/images/B&A-skin/B&A-stretch-mark3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
        <AllPagesHero
          badge="Stage-Matched Laser Treatment • Doctor-Only"
          title="Best Stretch Mark Removal in Malaysia Using"
          highlight="Laser Treatment for All Skin Types"
          description="Stretch marks removal in Malaysia is one of the most requested and most misunderstood areas of aesthetic medicine. Stretch marks are marks on the skin caused when the skin has been stretched rapidly, tearing the collagen and elastin fibres in the middle layer of the skin."
          details="At Nexus Clinic KL, the best stretch marks removal outcomes come from matching the laser treatment to the specific stage and cause of the stretch marks. Red stretch marks respond to pulsed dye laser. White or silver mature stretch marks require fractional CO2 laser or RF microneedling. Stretch mark removal cream cannot reach the middle layer of the skin where stretch marks originate."
          note="The critical clinical distinction that determines the right treatment: whether the stretch marks are red and active, or white and mature. Getting this distinction right separates effective treatment from wasted sessions."
          image="/images/skin/stretch-mark.webp"
          imageAlt="Nexus Clinic Kuala Lumpur - Stretch Mark Removal Treatment"
          ctaText="Free Consultation"
          ctaLink="/contact-us"
          whatsappMessage="Hi, I'm interested in stretch mark removal at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle="Stage-Matched Laser"
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
                    <p className="font-inter font-semibold text-brown text-sm">MOH Approved Devices</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">All laser devices MOH-approved and FDA-cleared</p>
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in stretch mark treatment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Fractional CO2 Laser</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Pulsed Dye Laser + PRP</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Stretch Mark Removal at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Advanced laser treatment for all skin types and stretch mark stages</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, label: "Treatment Options", value: "Fractional CO2, PDL, PRP, RF Microneedling" },
              { icon: Clock, label: "Session Time", value: "20 to 60 minutes depending on area" },
              { icon: Heart, label: "Downtime", value: "Minimal to 7 days depending on treatment" },
              { icon: Activity, label: "Session Spacing", value: "4 to 8 weeks apart" },
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
                <p className="font-inter text-sm text-taupe">Type of Stretch Marks Treated</p>
                <p className="font-georgia text-brown font-semibold">Striae rubrae, striae albae, striae gravidarum</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Skin Types Treated Safely</p>
                <p className="font-georgia text-brown font-semibold">All skin types including Malaysian Fitzpatrick III to V</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Realistic Outcome</p>
                <p className="font-georgia text-brown">20 to 60% improvement; flatter, smoother, less visible</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">MOH Approved</p>
                <p className="font-georgia text-brown">Yes. All devices MOH-approved and FDA-cleared</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Stretch Marks
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Type of Stretch Marks Table */}
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
              { key: "stage", header: "Stage of Stretch Marks", className: "font-semibold text-brown" },
              { key: "appearance", header: "Clinical Appearance" },
              { key: "mechanism", header: "What Is Happening in the Dermis" },
              { key: "treatment", header: "Best Treatment at Nexus Clinic KL" },
            ]}
            data={stretchMarkStages.map(item => ({
              stage: item.stage,
              appearance: item.appearance,
              mechanism: item.mechanism,
              treatment: item.treatment,
            }))}
            title="Type of Stretch Marks and Best Treatment"
            subtitle="The stage-matched framework for effective results"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              The most important clinical takeaway: Striae rubrae respond significantly better to laser treatment than white or silver marks. If you have developed stretch marks recently, beginning treatment while the marks are still red gives you the best possible outcome.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Comparison Table */}
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
                { key: "bestFor", header: "Best For" },
                { key: "mechanism", header: "Mechanism" },
                { key: "outcome", header: "Outcome and Sessions" },
                { key: "pihRisk", header: "PIH Risk for Malaysian Skin" },
              ]}
              data={treatmentComparison.map(item => ({
                treatment: item.treatment,
                bestFor: item.bestFor,
                mechanism: item.mechanism,
                outcome: item.outcome,
                pihRisk: item.pihRisk,
              }))}
              title="Treatment Options Compared"
              subtitle="Honest outcomes and PIH risk for Malaysian skin"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              Stretch mark removal cream cannot penetrate to the middle layer of the skin where damaged collagen and elastin fibres are located. At Nexus Clinic KL, we redirect patients from topical approaches to evidence-based laser and microneedling options that actually reach the layer where treatment is needed.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Cause-Specific Assessment Table */}
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
              { key: "cause", header: "Cause of Stretch Marks", className: "font-semibold text-brown" },
              { key: "mechanism", header: "How It Damages Collagen" },
              { key: "location", header: "Typical Location" },
              { key: "timing", header: "Treatment Timing" },
            ]}
            data={causeData.map(item => ({
              cause: item.cause,
              mechanism: item.mechanism,
              location: item.location,
              timing: item.timing,
            }))}
            title="Cause-Specific Assessment"
            subtitle="Why stretch marks develop and when to treat them"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
        </motion.div>
      </section>

      {/* Longevity Reality Section - Slider like NoseFiller */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Treatment Response Timeline</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect and when to see improvement</p>
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
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Response</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Red stretch marks respond faster than white or silver marks</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Younger stretch marks (less than 6 months) show better improvement</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Consistent SPF50 use prevents PIH and supports results</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Collagen production continues for 3-6 months after each session</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Combination therapy (laser + PRP) produces superior results</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Most patients see progressive improvement across 3 to 5 sessions, with optimal results visible 3 months after completing the full course.
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
                    <span className="font-inter text-white/90">Red Stretch Marks</span>
                    <span className="font-georgia text-2xl font-bold text-white">3 to 6 sessions</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Visible fading from session 2 or 3 with PDL</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">White or Silver Stretch Marks</span>
                    <span className="font-georgia text-2xl font-bold text-white">3 to 5 sessions</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Fractional CO2 laser produces progressive texture improvement</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Combination Programme</span>
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
                  <p className="text-white/70 text-xs mt-2">Laser + PRP produces best overall improvement</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Results vary by stretch mark stage, skin type, and consistency with aftercare.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ The window of opportunity for red stretch marks: begin treatment while marks are still red for the best possible outcome
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Post-Treatment Maintenance Table */}
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
              { key: "measure", header: "Maintenance Measure", className: "font-semibold text-brown" },
              { key: "when", header: "When to Apply" },
              { key: "instruction", header: "Instructions and Evidence" },
            ]}
            data={maintenanceData.map(item => ({
              measure: item.measure,
              when: item.when,
              instruction: item.instruction,
            }))}
            title="Post-Treatment Maintenance Protocol"
            subtitle="Protecting your results in Malaysia's tropical climate"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl border-l-4 border-wine">
            <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
              <Sun className="w-4 h-4" />
              Critical for Malaysian Patients
            </p>
            <p className="text-taupe font-inter text-sm mt-1">
              Kuala Lumpur's year-round UV index of 10 to 13 means treated skin is at meaningful risk of PIH if SPF50 is not applied consistently. At Nexus Clinic KL, every patient receives written aftercare instructions specifying daily SPF50 on any treated areas.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Stretch Mark Removal Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Clinical Assessment and Stage Identification", desc: "Doctor assesses stretch marks by colour and stage, identifies body areas, reviews cause, confirms Fitzpatrick skin type for safe laser settings." },
              { step: "02", title: "Treatment Planning", desc: "Doctor explains recommended treatment options, realistic improvement expectation, number of sessions required, and full pricing." },
              { step: "03", title: "Treatment Session", desc: "Area cleaned, numbing cream applied if required. Laser or PRP treatment performed. Written aftercare instructions provided." },
              { step: "04", title: "Ongoing Review", desc: "Progress photographs at each visit. Treatment plan adjusted based on response. Maintenance review at 3 months after final session." },
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
            <p className="text-taupe text-sm mt-3">Free consultation at Nexus Clinic KL</p>
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
              { key: "sessions", header: "Recommended Sessions" },
              { key: "price", header: "Price Range (RM) 2026", className: "font-semibold text-wine" },
            ]}
            data={pricingTiers.map(tier => ({
              treatment: tier.treatment,
              bestFor: tier.bestFor,
              sessions: tier.sessions,
              price: tier.price,
            }))}
            title="Stretch Mark Removal Cost in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />

          {/* Footnote */}
          <motion.div variants={fadeInUp} className="text-center mt-4">
            <p className="text-taupe font-inter text-sm italic">
              Combination stretch mark removal programmes incorporating laser and PRP offer the best outcomes for moderate to significant stretch marks. All pricing disclosed before any commitment at the free initial consultation.
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas We Commonly Treat</h2>
            <p className="text-taupe font-inter">Stretch mark removal for all body locations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Tummy (abdomen) - most common",
              "Thighs (inner and outer)",
              "Buttocks",
              "Upper arms",
              "Breasts",
              "Hips and flanks",
              "Lower back",
              "Calves",
              "Post-pregnancy stretch marks",
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
              Effective Stretch Mark Removal in KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Stretch marks removal in Malaysia is most effective when the laser treatment is matched to the type and stage of your stretch marks. At Nexus Clinic KL, our LCP certified aesthetic doctor team provides honest, stage-matched care.
            </p>
            <p className="text-cream/90 font-inter">
              Our doctors bring over 15 years of combined experience and have completed over 5,000 procedures for patients across KL, Petaling Jaya, Subang Jaya, and throughout Malaysia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for stretch mark removal at Nexus Clinic KL. Please let me know available slots."
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