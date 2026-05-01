"use client";

import { motion } from "framer-motion";
import {
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  AlertCircle,
  TrendingUp,
  Users,
  Phone,
  Mail,
  Pill,
  Target,
  Repeat,
  HeartPulse,
  Ban,
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
interface MinoxidilLandingProps {
  locale: string;
}

export default function MinoxidilLanding({ locale }: MinoxidilLandingProps) {
  // Mechanism of Action Table
  const mechanismTable = [
    {
      step: "Blood Vessel Dilation in the Scalp",
      mechanism: "Minoxidil is a potassium channel opener that causes smooth muscle cells in blood vessel walls to relax; this relaxation dilates the blood vessels supplying the hair follicles in the scalp.",
      effect: "Improved blood flow delivers more oxygen and nutrients to reach the hair follicle, providing the metabolic substrate needed for the energy-intensive anagen hair growth phase.",
      implication: "At Nexus Clinic KL, minoxidil's vascular mechanism complements PRP therapy, targeting the hair follicle from two complementary directions."
    },
    {
      step: "Anagen Phase Extension",
      mechanism: "Minoxidil extends the growth phase of the hair growth cycle, keeping more hair follicles in active anagen for longer periods.",
      effect: "As more follicles spend more time in anagen simultaneously, hair density visible on the scalp increases because at any given moment more follicles are actively producing a visible hair shaft.",
      implication: "Patients are counselled that initial hair fall in the first 4-8 weeks is caused by telogen-phase hairs being pushed out early to make way for new anagen-phase hair growth."
    },
    {
      step: "Direct Hair Follicle Keratinocyte Stimulation",
      mechanism: "Minoxidil directly stimulates proliferation of hair follicle keratinocytes and upregulates vascular endothelial growth factor (VEGF) expression in the follicle.",
      effect: "Minoxidil works even in follicles with adequate blood supply by directly accelerating hair follicle cell division. VEGF upregulation creates a sustained angiogenic effect that builds over time.",
      implication: "Individual variability in scalp sulphotransferase enzyme activity explains why some patients respond much better to minoxidil than others."
    },
    {
      step: "Initial Shedding and New Hair Growth Sequence",
      mechanism: "Minoxidil pushes hair follicles that have been in a prolonged or premature telogen phase into a new anagen cycle; the old telogen hair must shed before new anagen hair can emerge.",
      effect: "The new hair growth that emerges following this shedding phase is the actual therapeutic effect of minoxidil, producing long-term hair regrowth benefit.",
      implication: "Pre-treatment counselling about the initial shedding phase is mandatory at every minoxidil consultation to prevent premature treatment cessation."
    },
  ];

  const genderTable = [
    {
      factor: "Pattern of Hair Loss Addressed",
      men: "Androgenetic alopecia (male pattern baldness) presenting as receding hairline and progressive crown thinning following Norwood-Hamilton classification.",
      women: "Female pattern hair loss presenting as diffuse hair thinning over the crown with preserved hairline following Ludwig classification."
    },
    {
      factor: "Concentration Recommended",
      men: "Minoxidil 5% topical solution or foam is the standard concentration. The higher concentration produces greater hair regrowth and hair density improvement than 2%.",
      women: "Minoxidil 2% is the traditional concentration. Minoxidil 5% is increasingly used under medical guidance, particularly for women not achieving adequate results on 2%."
    },
    {
      factor: "Role of Finasteride",
      men: "Combining minoxidil with finasteride is the most effective non-surgical approach. Minoxidil promotes growth while finasteride addresses the primary hormonal cause.",
      women: "Finasteride is not recommended for women of reproductive age. Women with PCOS or androgen excess may benefit from spironolactone combined with minoxidil."
    },
    {
      factor: "Oral Minoxidil Option",
      men: "Low-dose oral minoxidil (2.5 to 5mg daily) is increasingly prescribed for men who find topical application inconvenient or are poor topical responders.",
      women: "Very low-dose oral minoxidil (0.625 to 2.5mg daily) is increasingly used, particularly for older women who prefer oral medication over daily topical application."
    },
    {
      factor: "Best Results Programme",
      men: "Minoxidil 5% topical or oral combined with finasteride 1mg plus PRP hair treatment (3 sessions) for comprehensive approach addressing blood flow, DHT suppression and follicle regeneration.",
      women: "Minoxidil 2-5% topical or low-dose oral combined with PRP and scalp mesotherapy, plus hormonal assessment to identify and treat any contributing hormonal imbalance."
    },
  ];

  // Topical vs Oral Minoxidil Comparison Table
  const formulationTable = [
    {
      factor: "Delivery and Application",
      topical: "Applied directly to scalp once or twice daily using dropper, pump or foam applicator. Must be applied to dry scalp and allowed to dry for at least 4 hours before washing.",
      oral: "Taken as oral medication once daily at low dose (0.625 to 5mg depending on patient profile). Bypasses scalp sulphotransferase conversion step that limits topical efficacy."
    },
    {
      factor: "Effectiveness",
      topical: "FDA-approved for male androgenetic alopecia. Clinical trials show approximately 60-70% of men maintaining or improving hair count at 12 months. Response varies with scalp sulphotransferase enzyme activity.",
      oral: "Produces comparable or superior hair density improvement to topical. Less affected by scalp sulphotransferase variability because conversion occurs systemically in the liver."
    },
    {
      factor: "Side Effect Profile",
      topical: "Side effects rare at standard concentrations. Most common: scalp irritation, contact dermatitis, scalp dryness. Unwanted facial hair uncommon. Systemic absorption low.",
      oral: "Side effects at low doses include fluid retention (ankle swelling, weight gain), facial hair growth (hypertrichosis), reflex tachycardia, mild blood pressure lowering. Requires monitoring."
    },
    {
      factor: "Who Should Consider",
      topical: "Most patients beginning treatment for first time; patients wanting to minimise systemic medication; patients comfortable with twice-daily scalp application.",
      oral: "Patients who find topical application inconvenient; patients with inadequate topical response after 6 months; patients with scalp irritation from topical; patients with active lifestyles."
    },
  ];

  // Combination Programme Table
  const combinationTable = [
    {
      component: "Minoxidil (Topical or Oral)",
      role: "Forms the daily treatment foundation. Provides blood flow stimulus and anagen phase extension that improves hair density progressively over months.",
      integration: "Prescribed based on patient profile and preference. Concentration, formulation and dosing selected based on hair loss pattern, severity, lifestyle factors and response history."
    },
    {
      component: "Finasteride (for Male Patients)",
      role: "Adds DHT-blocking mechanism. Stops underlying cause while minoxidil stimulates growth cycle. Combination produces additive improvement in hair density.",
      integration: "Recommended as first-line combination partner for all eligible men with androgenetic alopecia. Full side effect discussion conducted before any prescription."
    },
    {
      component: "PRP Hair Treatment",
      role: "Adds growth factors directly to scalp environment. PRP contains PDGF, VEGF, TGF-beta and other growth factors that stimulate follicle activity at cellular level.",
      integration: "Typically scheduled as 3 sessions 4-6 weeks apart, starting 4-6 weeks after minoxidil and finasteride programme has begun. Maintenance sessions every 6-12 months."
    },
    {
      component: "Advanced Hair Assessment and Monitoring",
      role: "Standardised scalp photography at baseline, 3, 6 and 12 months provides objective documentation of treatment progress.",
      integration: "Every patient has standardised baseline scalp photography. Photography set repeated at 6 and 12 months to provide objective evidence of hair density changes."
    },
  ];

  // Pricing Data
  const pricingTiers = [
    { service: "Hair Loss Assessment Consultation", details: "Expert hair assessment; trichoscopy scalp examination; hair loss pattern grading; minoxidil treatment plan discussion; topical vs oral assessment.", price: "RM 150 - RM 300" },
    { service: "Topical Minoxidil 5% (per month)", details: "Standard 5% topical solution or foam; once or twice daily scalp application; guidance on correct application technique provided.", price: "RM 30 - RM 120" },
    { service: "Oral Minoxidil Prescription (per month)", details: "Low-dose oral minoxidil (0.625mg to 5mg); baseline blood pressure check required; once-daily oral medication.", price: "RM 80 - RM 200" },
    { service: "Finasteride 1mg (per month, for men)", details: "Oral finasteride for male androgenetic alopecia; combined with minoxidil for best results; full side effect discussion.", price: "RM 60 - RM 180" },
    { service: "PRP Hair Treatment (per session)", details: "Platelet-rich plasma injected into scalp; growth factors stimulate hair growth; 3-session initial course recommended.", price: "RM 1,200 - RM 2,500" },
    { service: "6-Month Hair Loss Review", details: "Standardised hair density photography comparison; scalp trichoscopy; treatment effectiveness assessment; plan adjustment if needed.", price: "RM 100 - RM 200" },
  ];

  // FAQ Data
  const faqData = [
    { q: "What is minoxidil and how does it work for hair loss?", a: "Minoxidil is a vasodilator medication originally developed to treat high blood pressure; its hair growth-promoting effect was discovered as a side effect. Minoxidil works by dilating blood vessels in the scalp to allow more oxygen and nutrients to reach the hair follicles, extending the anagen (active growth) phase of the hair growth cycle. Minoxidil is a topical solution or foam applied directly to the scalp or taken as an oral medication once daily. It is used to treat androgenetic alopecia in both men and women and is one of the two most evidence-supported medications for hair loss treatment alongside finasteride." },
    { q: "How long does minoxidil take to work for hair regrowth?", a: "Minoxidil requires consistent use over several months to produce visible hair regrowth. Most patients experience an initial hair fall in the first 4 to 8 weeks as telogen-phase hair follicles are pushed into new anagen growth cycles; this initial shedding is evidence that minoxidil is working and should not prompt stopping treatment. Visible new hair growth typically appears at 3 to 6 months. Significant improvement is usually seen at 6 to 12 months of consistent use. Maximum effectiveness is seen at 12 months. Minoxidil must be continued indefinitely to maintain the hair density benefit." },
    { q: "What is the difference between topical and oral minoxidil?", a: "Topical minoxidil is applied directly to the scalp once or twice daily; it delivers the vasodilatory effect locally with minimal systemic absorption. Minoxidil 5% is the standard concentration for men. Oral minoxidil is taken as an oral medication once daily at a low dose; it produces more consistent delivery of the active minoxidil form because it bypasses the scalp sulphotransferase conversion step that limits topical effectiveness in some patients. Oral minoxidil is increasingly used for patients who find topical application inconvenient, have scalp irritation, or are inadequate topical responders. Both formulations require medical supervision." },
    { q: "Can I use minoxidil and finasteride together?", a: "Yes; minoxidil and finasteride together produce the best results for men with androgenetic alopecia compared to either treatment alone. The two medications address hair loss through completely different mechanisms: minoxidil promotes hair growth by improving blood flow and extending the growth phase, while finasteride blocks the DHT hormone that causes androgenetic alopecia. These mechanisms are fully complementary and the combination produces additive improvement in hair density, hair regrowth and slowing of hair loss progression. At Nexus Clinic KL, the minoxidil and finasteride combination is the standard treatment plan for eligible men." },
    { q: "Is minoxidil safe for women?", a: "Yes; minoxidil is one of the safest and most evidence-supported hair loss treatment options for women. Minoxidil 2% is the traditional concentration recommended for women and minoxidil 5% is increasingly used with adequate medical guidance. The most common side effect in women is unwanted facial hair growth (hypertrichosis), which is more common with 5% than 2% and resolves after stopping the medication. Scalp irritation may occur with the topical solution and is usually managed by switching to the foam formulation. Oral minoxidil at very low dose (0.625mg to 2.5mg) is an option for women who prefer oral medication." },
    { q: "Why is my hair falling out after starting minoxidil?", a: "Initial hair fall in the first 4 to 8 weeks of minoxidil use is an expected and normal part of how minoxidil works. When minoxidil is applied to the scalp, it pushes hair follicles that are in a prolonged or premature telogen (resting) phase into a new anagen (growth) cycle; the old telogen hair must shed before new anagen hair can emerge. This shedding phase is not minoxidil causing damage; it is the transition process that produces the long-term hair regrowth benefit. New hair growth emerges at 3 to 6 months following this initial shedding. At Nexus Clinic KL, every patient receives pre-treatment counselling about the initial shedding." },
    { q: "Where can I buy minoxidil in Malaysia?", a: "Topical minoxidil 5% for men is available from most pharmacies in Malaysia without a prescription, sold under various brand names and as generic formulations. Oral minoxidil requires a prescription from a registered medical doctor and is not available over the counter. At Nexus Clinic KL, the appropriate minoxidil formulation, concentration and dosing schedule is determined at the initial consultation and prescribed with a treatment plan and monitoring schedule. Medical guidance is recommended for all patients starting minoxidil, particularly those combining it with finasteride or oral medication." },
    { q: "How does PRP complement minoxidil treatment?", a: "PRP (platelet-rich plasma) hair treatment adds growth factors directly to the scalp environment alongside minoxidil's blood flow mechanism. Minoxidil improves blood flow to allow more oxygen and nutrients to reach the hair follicles, while PRP delivers PDGF, VEGF and TGF-beta growth factors that directly stimulate hair follicle cell proliferation through a different biological pathway. Together, minoxidil and PRP target hair follicle health from two complementary angles and consistently produce better hair density and hair regrowth outcomes than either treatment alone." },
    { q: "How long do I need to use minoxidil?", a: "Minoxidil must be used indefinitely to maintain the hair density benefit. When minoxidil is stopped, the improved blood flow and extended anagen phase effect gradually disappears. Hair loss resumes at its pre-treatment rate within several months of stopping minoxidil. Any new hair growth achieved during minoxidil use is typically lost within 3 to 6 months of stopping. This is why minoxidil is a long-term hair care commitment rather than a short course of treatment. At Nexus Clinic KL, patients are counselled that minoxidil is a lifelong treatment commitment for those who want to maintain their hair density." },
    { q: "Is the minoxidil consultation at Nexus Clinic KL worth having?", a: "Yes; the medical consultation provides value beyond pharmacy-dispensed minoxidil in several important ways: the expert hair assessment confirms the correct diagnosis before any treatment is started; the consultation determines whether topical or oral minoxidil is more appropriate; pre-treatment counselling about initial shedding prevents the single most common reason for treatment failure; the combination of minoxidil with finasteride for men and PRP for both sexes produces significantly better outcomes; and standardised hair density photography confirms the treatment works and guides programme adjustments." },
    { q: "Can minoxidil cause unwanted facial hair?", a: "Yes, it can, especially if the product spreads to nearby skin or drips. Unwanted hair growth on adjacent skin is a possible side effect of topical minoxidil. Clean application, careful drying, and thorough hand-washing after each use reduce this risk. If unwanted facial hair occurs, it typically resolves after stopping the medication or adjusting the application technique. At Nexus Clinic KL, proper application technique is demonstrated at the initial consultation to minimise this risk." },
    { q: "Is minoxidil dangerous to pets?", a: "Yes, topical minoxidil can be highly toxic to pets, especially cats, and even small exposure can be serious. Medical literature highlights that pets can be affected by minoxidil residue on pillowcases, hands, or the scalp itself. Simple safety habits include washing hands thoroughly after every use, letting the scalp dry fully before touching pets, keeping bottles locked away, and changing pillowcases often if applying at night. If you have pets that sleep on your pillow or lick your hair, discuss safer routines and strict precautions with your doctor." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-minoxidil-treatment1.webp",
      after: "/images/B&A-hair/B&A-minoxidil-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-minoxidil-treatment2.webp",
      after: "/images/B&A-hair/B&A-minoxidil-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-minoxidil-treatment3.webp",
      after: "/images/B&A-hair/B&A-minoxidil-treatment3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Topical • Oral • Doctor-Prescribed"
        title="Minoxidil Hair Loss Treatment in Malaysia for"
        highlight="Proven Hair Regrowth Results"
        description="Minoxidil is one of only two FDA-approved medications for hair loss treatment with decades of published clinical evidence behind it."
        details="Whether applied directly to the scalp as a topical solution or taken as a low-dose oral medication, minoxidil works by improving blood flow to hair follicles, extending the anagen (growth) phase and stimulating hair growth in areas where thinning has occurred."
        note="At Nexus Clinic KL, minoxidil is prescribed as part of a personalised hair loss treatment programme that combines the right formulation, finasteride for men with androgenetic alopecia, PRP for growth factor stimulation and structured monitoring."
        image="/images/hair/minoxidil-treatment.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Minoxidil Hair Loss Treatment"
        ctaText="Book Minoxidil Assessment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in minoxidil hair loss treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Topical • Oral • PRP"
        floatingSubtitle="Proven hair regrowth results"
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
                  <Calendar className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Experience</p>
                  <p className="font-georgia text-brown font-bold text-lg">Founded 2001</p>
                  <p className="font-inter text-taupe text-xs">Over two decades of service</p>
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
                  <Shield className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Credentials</p>
                  <p className="font-georgia text-brown font-bold text-sm">MOH Licensed</p>
                  <p className="font-inter text-taupe text-xs">Doctor-prescribed medication</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Pill className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">FDA-Approved</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Decades of clinical evidence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Proven Results</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">60-70% maintain or improve hair count</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Repeat className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Long-Term Commitment</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Continued use maintains benefits</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Topical Minoxidil 5%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Oral Minoxidil Low Dose</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Combined with Finasteride for Men</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Answer Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Quick Answers About Minoxidil</h2>
            <p className="text-taupe font-inter">What you need to know before starting treatment</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-georgia text-lg text-brown mb-2">What does minoxidil do?</h3>
              <p className="text-taupe font-inter text-sm">It helps slow hair loss and may regrow some hair, mainly in early pattern hair loss.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-georgia text-lg text-brown mb-2">How long until results?</h3>
              <p className="text-taupe font-inter text-sm">Many people need at least 4-6 months, and often longer, to judge results.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-georgia text-lg text-brown mb-2">Will it work forever?</h3>
              <p className="text-taupe font-inter text-sm">It works only while you keep using it. Stopping usually leads to hair loss again within months.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-georgia text-lg text-brown mb-2">Is shedding normal at the start?</h3>
              <p className="text-taupe font-inter text-sm">Some shedding can happen early, often in the first couple of weeks. This is expected.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Minoxidil at a Glance */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Minoxidil Hair Loss Treatment at a Glance</h2>
            <p className="text-taupe font-inter">What makes minoxidil the most trusted hair regrowth treatment</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10 shadow-sm">
              <Pill className="w-10 h-10 text-wine mb-4" />
              <p className="font-inter text-sm text-taupe mb-1">What Minoxidil Is</p>
              <p className="font-georgia text-sm text-brown">Vasodilator medication; FDA-approved topical hair loss treatment; one of only two medications with strong clinical evidence</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10 shadow-sm">
              <Target className="w-10 h-10 text-wine mb-4" />
              <p className="font-inter text-sm text-taupe mb-1">How Minoxidil Works</p>
              <p className="font-georgia text-sm text-brown">Dilates blood vessels in scalp; extends anagen growth phase; stimulates hair follicle proliferation</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10 shadow-sm">
              <Users className="w-10 h-10 text-wine mb-4" />
              <p className="font-inter text-sm text-taupe mb-1">Who It's Used For</p>
              <p className="font-georgia text-sm text-brown">Men with male pattern baldness; women with female pattern hair loss; early to moderate thinning</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10 shadow-sm">
              <Clock className="w-10 h-10 text-wine mb-4" />
              <p className="font-inter text-sm text-taupe mb-1">Timeline for Results</p>
              <p className="font-georgia text-sm text-brown">Initial shedding 4-8 weeks; visible regrowth 3-6 months; maximum results 12 months</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How Minoxidil Works - Mechanism Table */}
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
            { key: "step", header: "Mechanism Step", className: "font-semibold" },
            { key: "mechanism", header: "What Happens Biologically" },
            { key: "effect", header: "How This Promotes Hair Growth" },
            { key: "implication", header: "Clinical Implication" },
          ]}
          data={mechanismTable.map((item) => ({
            step: item.step,
            mechanism: item.mechanism,
            effect: item.effect,
            implication: item.implication,
          }))}
          title="How Minoxidil Works for Hair Loss"
          subtitle="Blood flow, anagen phase and the shedding sequence explained"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />

          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm">
              The scalp sulphotransferase enzyme variability row is the most clinically novel content for Malaysian patients. The reason some patients get excellent hair density improvement while others get minimal response is primarily explained by individual differences in the scalp enzyme that converts topical minoxidil to its active form. At Nexus Clinic KL, this variability is the clinical rationale for switching to oral minoxidil in patients with inadequate topical response.
            </p>

            <p className="text-sm text-taupe text-center mt-4">
              Olsen EA et al. A randomized clinical trial of 5% topical minoxidil versus 2% topical minoxidil and placebo in the treatment of androgenetic alopecia in men. 
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/12196747/" 
                target="_blank" 
                rel="nofollow" 
                className="text-wine font-bold italic"
              >
                Journal of the American Academy of Dermatology
              </a>. 
              2002;47(3):377-385. This landmark study established the superior efficacy of 5% topical minoxidil over 2% and placebo, showing a significant increase in hair count and earlier response times in men with pattern hair loss.
            </p>
          </motion.div>
        </motion.div>
      </section>
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
                { key: "factor", header: "Factor", className: "font-semibold" },
                { key: "men", header: "Minoxidil for Men" },
                { key: "women", header: "Minoxidil for Women" },
              ]}
              data={genderTable.map((item) => ({
                factor: item.factor,
                men: item.men,
                women: item.women,
              }))}
              title="Minoxidil for Men vs Women"
              subtitle="Concentration, finasteride and best results for hair regrowth in Malaysia"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />
            <p className="text-center">
              For patients whose hair loss assessment reveals hormonal causes including testosterone deficiency or thyroid dysfunction, our{' '}
              <a 
                href="/regenerative/hormone-test-malaysia/" 
                className="text-wine font-bold italic"
              >
                hormone test Malaysia
              </a>{' '}
              provides the comprehensive blood test panel that identifies treatable hormonal drivers of hair loss alongside the minoxidil programme.
            </p>
        </motion.div>
      </section>

      {/* Topical vs Oral Minoxidil Comparison Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
            {/* Topical Solution vs Oral Minoxidil Table */}
            <TableForPages
              columns={[
                { key: "factor", header: "Comparison Factor", className: "font-semibold" },
                { key: "topical", header: "Topical Minoxidil" },
                { key: "oral", header: "Oral Minoxidil" },
              ]}
              data={formulationTable.map((item) => ({
                factor: item.factor,
                topical: item.topical,
                oral: item.oral,
              }))}
              title="Topical Solution vs Oral Minoxidil"
              subtitle="Choosing the right formulation in Malaysia"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm">
              Oral minoxidil is not reserved only for patients who have failed topical minoxidil. For patients with active lifestyles, frequent travel, scalp conditions making topical application uncomfortable, or those wanting maximum compliance convenience, oral minoxidil can be a first-line rather than second-line choice.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Minoxidil, Finasteride and PRP Combination Programme */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
            {/* Minoxidil, Finasteride and PRP Table */}
            <TableForPages
              columns={[
                { key: "component", header: "Treatment Component", className: "font-semibold" },
                { key: "role", header: "Role in the Combination Programme" },
                { key: "integration", header: "How Nexus Clinic KL Integrates This" },
              ]}
              data={combinationTable.map((item) => ({
                component: item.component,
                role: item.role,
                integration: item.integration,
              }))}
              title="Minoxidil, Finasteride and PRP"
              subtitle="The advanced hair loss treatment programme at Nexus Clinic KL"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

            <p className="text-center text-brown">
              For patients whose hair loss has a hormonal component including DHT-driven androgenetic alopecia, our{' '}
              <Link 
                href="/hair/finasteride-treatment-malaysia/" 
                className="text-wine font-bold italic"
              >
                finasteride treatment Malaysia
              </Link>{' '}
              provides the complete finasteride prescribing framework that forms the combination partner to minoxidil for men.
            </p>
        </motion.div>
      </section>

      {/* Results Timeline Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">How Long Does Minoxidil Take to Work?</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">A realistic timeline helps you stick with it</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl border border-taupe/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Treatment Timeline</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-brown">First 2-8 weeks</span>
                    <span className="font-georgia text-xl font-bold text-wine">Shedding Phase</span>
                  </div>
                  <div className="w-full bg-taupe/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-wine h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-taupe text-xs mt-2">Possible shedding, scalp adjustment. This is expected and normal.</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-brown">2-4 months</span>
                    <span className="font-georgia text-xl font-bold text-wine">Early Signs</span>
                  </div>
                  <div className="w-full bg-taupe/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-wine h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-taupe text-xs mt-2">Early signs in some people. Patience is essential.</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-brown">6 months</span>
                    <span className="font-georgia text-xl font-bold text-wine">Meaningful Results</span>
                  </div>
                  <div className="w-full bg-taupe/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-wine h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-taupe text-xs mt-2">Mayo Clinic notes it can take at least six months to prevent further loss and start regrowth.</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-brown">12 months</span>
                    <span className="font-georgia text-xl font-bold text-wine">Maximum Results</span>
                  </div>
                  <div className="w-full bg-taupe/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-wine h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-taupe text-xs mt-2">Maximum effectiveness typically seen at 12 months of consistent use.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-wine p-8 rounded-2xl text-white shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">The Shedding Phase</h3>
              </div>
              <p className="text-white/90 mb-4">This is the moment most people panic.</p>
              <p className="text-white/80 text-sm mb-4">Mayo Clinic notes hair loss may continue for about 2 weeks after starting minoxidil. Other clinical guides also describe early shedding during the first weeks.</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="font-semibold text-white mb-2">What's happening:</p>
                <p className="text-white/80 text-sm">Minoxidil can shift weak hairs out sooner, so stronger growth can come later. This phase is usually temporary.</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-white mb-2">What to do:</p>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">• Stay consistent (unless you have severe side effects)</li>
                  <li className="flex items-start gap-2">• Take progress photos monthly</li>
                  <li className="flex items-start gap-2">• Review technique and dosage with a doctor if unsure</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits and Who Should Avoid Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-8 rounded-2xl border border-taupe/20 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Benefits of Minoxidil Treatment</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Slows down thinning and hair loss progression</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Improves density in thinning areas</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Helps you keep hair you still have</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>One of only two FDA-approved medications for hair loss</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Decades of published clinical evidence supporting effectiveness</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-wine p-8 rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Ban className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">Who Should Avoid Minoxidil</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/90 font-inter text-sm">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Pregnancy and breastfeeding (no safety evidence)</span>
                </li>
                <li className="flex items-start gap-3 text-white/90 font-inter text-sm">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Scalp that is very inflamed or infected</span>
                </li>
                <li className="flex items-start gap-3 text-white/90 font-inter text-sm">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Scarring hair loss (minoxidil alone is not enough)</span>
                </li>
                <li className="flex items-start gap-3 text-white/90 font-inter text-sm">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Heart or blood pressure issues (especially oral minoxidil)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Common Mistakes That Reduce Results</h2>
            <p className="text-taupe font-inter">Avoid these to get the most from your minoxidil treatment</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            <motion.div variants={fadeInUp} className="bg-light p-5 rounded-xl border-l-4 border-rose shadow-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <p className="text-brown font-inter">Applying to hair, not scalp</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-5 rounded-xl border-l-4 border-rose shadow-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <p className="text-brown font-inter">Using less than recommended, then expecting fast results</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-5 rounded-xl border-l-4 border-rose shadow-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <p className="text-brown font-inter">Stopping after 4 weeks because shedding started</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-5 rounded-xl border-l-4 border-rose shadow-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <p className="text-brown font-inter">Using it on many body areas (can trigger unwanted hair growth)</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pet Safety Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="bg-rose/5 p-8 rounded-2xl border border-rose/20 text-center">
            <HeartPulse className="w-12 h-12 text-rose mx-auto mb-4" />
            <h2 className="font-georgia text-2xl text-brown mb-4">Minoxidil Safety at Home (Especially If You Have Pets)</h2>
            <p className="text-rose font-semibold mb-4">This is a big one people miss.</p>
            <p className="text-taupe mb-6">Medical literature highlights topical minoxidil can be highly toxic to pets, especially cats, and even small exposure can be serious.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-brown text-sm">wash hands after every use</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-brown text-sm">let scalp dry fully before touching pets</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-brown text-sm">keep bottles locked away</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-brown text-sm">change pillowcases often</p>
              </div>
            </div>
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
          className="container mx-auto max-w-6xl"
        >
            {/* Minoxidil Hair Loss Treatment Cost Table */}
            <TableForPages
              columns={[
                { key: "service", header: "Service / Treatment" },
                { key: "details", header: "Details" },
                { key: "price", header: "Price Range (RM) 2026" },
              ]}
              data={pricingTiers.map((tier) => ({
                service: tier.service,
                details: tier.details,
                price: tier.price,
              }))}
              title="Minoxidil Hair Loss Treatment Cost in Malaysia 2026"
              subtitle="Transparent pricing at Nexus Clinic KL"
              variant="compact"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

            {/* Footnote */}
            <motion.p 
              variants={fadeInUp}
              className="text-center text-taupe font-inter text-sm italic mt-4"
            >
              Annual cost for complete minoxidil, finasteride and PRP programme is approximately RM 6,000 to RM 12,000 for men. Women on minoxidil alone have annual cost of approximately RM 1,000 to RM 3,000. All pricing disclosed at initial consultation.
            </motion.p>
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
              Ready to Start Minoxidil Treatment the Right Way?
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If you're searching for minoxidil treatment in Malaysia, start with a proper hair and scalp assessment at Nexus Clinic Kuala Lumpur. We'll confirm the cause, recommend the right strength and routine, and tell you what results are realistic for your stage.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed doctors bring over 15 years of combined clinical experience. Nexus Clinic KL is located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a consultation for minoxidil hair loss treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available | Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors flex items-center gap-2"><Phone className="w-4 h-4" /> Call: 016-7025699</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Email: contact@nexus-clinic.com</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}