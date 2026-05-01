"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Heart,
  Brain,
  Moon,
  Dumbbell,
  Shield,
  CheckCircle,
  FlaskRound as Flask,
  Phone,
  MapPin,
  Zap,
  Scale,
  Sparkles,
  Award,
  Pill as PillIcon,
  Users,
  Building,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInRight,
  scaleIn,
  fadeInLeft,
} from "@/src/lib/animations";
import React from "react";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import AllPagesHero from '@/src/components/AllPagesHero'
import Image from "next/image";
const TestosteroneLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "regenerative/testosterone");

  const images = {
    doctorConsultation: "/images/regenerative/testosterone-therapy.webp",
    labTesting:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    clinicInterior:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80",
    patientCare: "/images/treatment/happy-patient.webp",
  };

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-regenerative/B&A-testosterone-therapy1.webp",
      after: "/images/B&A-regenerative/B&A-testosterone-therapy1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-regenerative/B&A-testosterone-therapy2.webp",
      after: "/images/B&A-regenerative/B&A-testosterone-therapy2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-regenerative/B&A-testosterone-therapy3.webp",
      after: "/images/B&A-regenerative/B&A-testosterone-therapy3.webp",
    },
  ];

  // TRT at a Glance Table Data
  const trtAtGlanceData = [
    { factor: "What TRT Treats", details: "Hypogonadism (primary and secondary); age-related testosterone deficiency with confirmed low levels AND symptoms; testosterone deficiency syndrome (TDS)" },
    { factor: "Diagnostic Requirement", details: "Two fasting morning total serum testosterone measurements confirming levels below 10.4 to 12 nmol/L (300 to 350 ng/dL) AND clinical symptoms; both criteria required" },
    { factor: "TRT Formulations Available", details: "Nebido (testosterone undecanoate) 1000mg injection | Sustanon 250 injection | Testosterone gel (Androgel, Testim) | Testosterone patch | Oral testosterone undecanoate (Andriol) | Clomiphene citrate (fertility-preserving)" },
    { factor: "Timeline to Restored Vitality", details: "Energy and mood: 2 to 4 weeks | Libido: 3 to 6 weeks | Erectile function: 3 to 6 months | Muscle mass: 3 to 6 months | Bone density: 6 to 12 months" },
    { factor: "Monitoring Required", details: "Serum testosterone, haematocrit, PSA (men over 40), liver function, lipid panel at 3 and 6 months then every 6 to 12 months" },
    { factor: "MOH Approved", details: "Yes. All TRT formulations and monitoring protocols conducted under MOH-approved guidelines; prescriptions issued by LCP-certified doctors" },
  ];

  // TRT Formulations Table Data
  const trtFormulationsData = [
    {
      name: "Nebido (Testosterone Undecanoate 1000mg IM)",
      schedule: "Injection every 10 to 14 weeks at the clinic; second injection at 6 weeks after first",
      profile: "Slow rise over 2 to 4 weeks; sustained testosterone levels without sharp peaks or troughs",
      advantages: "Fewest clinic visits (4 to 5 per year); most convenient for working men; no daily compliance burden; no partner transference risk",
      bestFor: "Men who prioritise convenience; those who travel; most Malaysian men on TRT",
    },
    {
      name: "Sustanon 250 (Mixed Testosterone Esters IM)",
      schedule: "Injection every 2 to 4 weeks; some protocols weekly for more stable levels",
      profile: "Rapid peak within 24 to 72 hours after injection; more pronounced variation",
      advantages: "Faster initial loading; good for men who need rapid symptom relief; flexibility in dose adjustment",
      bestFor: "Men who need faster testosterone loading; younger men in active optimisation phase",
    },
    {
      name: "Testosterone Gel (Androgel / Testim)",
      schedule: "Applied daily to shoulders, upper arms or abdomen; applied after showering",
      profile: "Most physiological: daily application mimics natural morning testosterone levels",
      advantages: "Most physiological daily rhythm; no needles; easiest dose adjustment; suitable for needle-averse patients",
      bestFor: "Needle-averse patients; men who prefer daily control of testosterone levels",
    },
    {
      name: "Testosterone Patch (Transdermal)",
      schedule: "Applied to skin daily; changed every 24 hours",
      profile: "Consistent daily testosterone levels delivery; slightly lower absorption efficiency",
      advantages: "No injection; consistent levels; lower transference risk than gel",
      bestFor: "Men who prefer no injection and find gel inconvenient; those with poor gel absorption",
    },
    {
      name: "Oral Testosterone Undecanoate (Andriol)",
      schedule: "2 to 4 capsules twice daily with fatty meals; taken morning and evening",
      profile: "Shorter half-life; absorbed via lymphatic system; levels less predictable",
      advantages: "No needles; no skin application; tablet form most familiar",
      bestFor: "Men who cannot tolerate any injection or skin application; bridge therapy",
    },
    {
      name: "Clomiphene Citrate (Fertility-Preserving Alternative)",
      schedule: "Oral tablet daily or every other day",
      profile: "Stimulates body's own testosterone production by blocking oestrogen feedback",
      advantages: "Preserves fertility and spermatogenesis; no suppression; raises testosterone without external hormone administration",
      bestFor: "Younger men planning a family; fertility-conscious men; those preferring not to start exogenous TRT yet",
    },
  ];

  // TRAVERSE Trial Table Data
  const traverseTrialData = [
    {
      question: "Does TRT increase risk of heart attack or stroke?",
      evidence: "5,246 men aged 45-80 with confirmed low testosterone and pre-existing CVD or high risk. MACE occurred in 7.0% of testosterone group vs 7.3% placebo. Non-inferiority confirmed. TRT did not increase cardiovascular risk.",
      meaning: "Malaysian men with cardiovascular risk factors previously told they could not safely receive TRT should discuss this updated evidence with their doctor.",
    },
    {
      question: "Did the FDA act on these findings?",
      evidence: "In February 2025, the FDA issued class-wide labeling changes for all testosterone products, removing the cardiovascular black box warning that had been in place since 2015.",
      meaning: "The cardiovascular warning that led many clinics in Malaysia to restrict TRT in older men or men with cardiac history has been removed from global product labeling.",
    },
    {
      question: "Are there any remaining cardiovascular cautions?",
      evidence: "Yes. The trial noted a small increase in atrial fibrillation, blood pressure and acute kidney injury in the testosterone group.",
      meaning: "TRT may carry residual cardiovascular considerations requiring assessment. At Nexus Clinic KL, comprehensive medical history review and cardiovascular risk assessment is standard.",
    },
    {
      question: "What about prostate cancer risk?",
      evidence: "The TRAVERSE trial did not find a significant increase in overall prostate cancer incidence. An FDA expert panel in December 2025 recommended removing prostate cancer contraindications.",
      meaning: "TRT remains contraindicated in men with active prostate cancer at this clinic. Baseline PSA is measured before starting TRT and monitored annually.",
    },
  ];

  // Fertility Table Data
  const fertilityData = [
    {
      situation: "Man who has already completed his family",
      effect: "TRT suppresses HPG axis, reducing LH and FSH, shutting down spermatogenesis; expected and acceptable",
      approach: "Standard TRT protocol with Nebido or chosen formulation; patient counselled that fertility suppression is expected",
    },
    {
      situation: "Man currently trying to conceive or planning family in 1-2 years",
      effect: "Standard TRT is contraindicated as it will suppress sperm production to near-zero",
      approach: "Clomiphene citrate recommended: stimulates endogenous LH and FSH, increases body's own testosterone while maintaining spermatogenesis",
    },
    {
      situation: "Man currently on TRT who wishes to start a family",
      effect: "Fertility suppressed while on TRT; attempting conception usually unsuccessful",
      approach: "Options: cessation of TRT with HCG or clomiphene; sperm banking before starting TRT; transition to clomiphene-based protocol",
    },
    {
      situation: "Man uncertain about future fertility with low testosterone symptoms now",
      effect: "Standard TRT will compromise fertility option during treatment",
      approach: "Fertility discussion is standard; options include clomiphene first, sperm banking, or TRT with clear understanding of implications",
    },
  ];

  // Monitoring Parameters Table Data
  const monitoringParametersData = [
    {
      parameter: "Total Serum Testosterone",
      interval: "At 3 months, 6 months, then every 6 to 12 months",
      target: "Mid-normal range (15 to 25 nmol/L); avoid supraphysiological levels above 35 nmol/L",
      why: "Confirms adequate therapeutic levels; identifies over/under-dosing; ensures effectiveness",
    },
    {
      parameter: "Haematocrit (Red Blood Cell Percentage)",
      interval: "At 3 months, 6 months, then every 6 to 12 months; if approaching threshold, every 3 months",
      target: "Action threshold above 54% requires dose reduction or change to transdermal; target below 50%",
      why: "Testosterone stimulates red blood cell production; excessive erythrocytosis risks thromboembolic events",
    },
    {
      parameter: "PSA (Prostate-Specific Antigen)",
      interval: "Baseline for men over 40; at 3 to 6 months after starting; then annually",
      target: "Concerning: velocity above 0.4 ng/mL/year; absolute above 4.0 ng/mL; increase above 1.4 from baseline",
      why: "TRT can stimulate growth of pre-existing prostate cancer cells; provides early warning",
    },
    {
      parameter: "Symptom and Quality of Life Review",
      interval: "At every follow-up visit (minimum every 6 months)",
      target: "Sustained improvement from baseline in 3 or more ADAM positive symptoms",
      why: "Lab values confirm safety; symptom improvement confirms therapeutic benefit",
    },
    {
      parameter: "Blood Pressure",
      interval: "At every visit; required by updated 2025 FDA labeling",
      target: "Target below 130/80 mmHg; persistent elevation above 140/90 requires management",
      why: "TRAVERSE trial identified small blood pressure increase; 2025 FDA label update added monitoring requirement",
    },
  ];

  // Pricing Table Data
  const pricingItemsData = [
    { item: "Initial TRT Consultation", details: "Comprehensive assessment, symptom history, ADAM questionnaire, medical history review, physical examination, contraindication screening, fertility discussion, blood test requisition", price: "RM 150 to RM 300" },
    { item: "Baseline Blood Panel (Pre-TRT)", details: "Fasting morning serum testosterone (x2 separate days), free testosterone, SHBG, LH, FSH, oestradiol, prolactin, CBC, haematocrit, LFTs, lipid panel, PSA (men over 40), fasting glucose and HbA1c", price: "RM 350 to RM 600" },
    { item: "Nebido 1000mg Injection", details: "Testosterone undecanoate long-acting IM injection; every 10 to 14 weeks; 4 to 5 visits per year; includes administration fee", price: "RM 600 to RM 900 per injection" },
    { item: "Sustanon 250 Injection", details: "Mixed testosterone esters IM injection; every 2 to 4 weeks; includes administration fee", price: "RM 150 to RM 350 per injection" },
    { item: "Testosterone Gel", details: "Androgel 1% or equivalent; daily application; prescription valid for 1 to 3 months", price: "RM 400 to RM 700 per month" },
    { item: "Monitoring Blood Panel", details: "Serum testosterone level, haematocrit, PSA, LFTs, blood pressure; at 3, 6 months then every 6 to 12 months", price: "RM 200 to RM 400 per panel" },
    { item: "Follow-Up Consultation", details: "Review of blood test results, symptom and quality of life assessment, dose adjustment, blood pressure monitoring", price: "RM 100 to RM 200 per visit" },
    { item: "Clomiphene Citrate", details: "Oral prescription for younger men who want testosterone benefit without spermatogenesis suppression", price: "RM 100 to RM 250 per month" },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
    { q: t("faq.q8"), a: t("faq.a8") },
    { q: t("faq.q9"), a: t("faq.a9") },
    { q: t("faq.q10"), a: t("faq.a10") },
    { q: t("faq.q11"), a: t("faq.a11") },
    { q: t("faq.q12"), a: t("faq.a12") },
  ];

  const symptoms = [
    { icon: <Zap />, text: t("symptoms.s1") },
    { icon: <Heart />, text: t("symptoms.s2") },
    { icon: <Activity />, text: t("symptoms.s3") },
    { icon: <Brain />, text: t("symptoms.s4") },
    { icon: <Sparkles />, text: t("symptoms.s5") },
    { icon: <Scale />, text: t("symptoms.s6") },
    { icon: <Dumbbell />, text: t("symptoms.s7") },
    { icon: <Moon />, text: t("symptoms.s8") },
  ];

  const benefits = [
    { icon: <Zap />, text: t("benefits.b1") },
    { icon: <Heart />, text: t("benefits.b2") },
    { icon: <Brain />, text: t("benefits.b3") },
    { icon: <Dumbbell />, text: t("benefits.b4") },
    { icon: <Scale />, text: t("benefits.b5") },
    { icon: <Activity />, text: t("benefits.b6") },
  ];

  return (
    <>
      <main className="bg-color-light font-inter overflow-hidden">
        <AllPagesHero
          badge="Medically Supervised TRT Clinic"
          title="Medically Supervised TRT Clinic in Kuala Lumpur:"
          highlight="Testosterone Replacement Therapy Malaysia"
          description="TRT clinic in Malaysia for confirmed low testosterone levels. Testosterone replacement therapy treatment for men experiencing fatigue, low testosterone deficiency, mood changes, reduced libido and hormone imbalance. Medical clinic, Kuala Lumpur. Book your free consultation today."
          details="Nexus Clinic KL serves patients across Kuala Lumpur, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia. Our hormone health team works with medically supervised protocols and personalised treatment plans built around your health profile and goals."
          note="Testosterone replacement therapy should only be administered after confirmed low testosterone levels through proper medical diagnosis. All treatments are medically supervised."
          image="/images/regenerative/testosterone-therapy.webp"
          imageAlt="Testosterone Replacement Therapy at Nexus Clinic Kuala Lumpur"
          ctaText="Book Free Consultation"
          ctaLink="/contact-us"
          whatsappMessage="Hi, I'm interested in TRT (Testosterone Replacement Therapy) at Nexus Clinic KL. I'd like to book a free consultation."
          floatingTitle="💪 Restore Your Vitality"
          floatingSubtitle="Medically supervised • Personalized care"
          staggerContainer={staggerContainer}
          fadeInLeft={fadeInLeft}
          fadeInRight={fadeInRight}
          fadeInUp={fadeInUp}
        />
        {/* Trust Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {[
                { icon: <Award />, text: "5,000+ Procedures Completed" },
                { icon: <Users />, text: "15+ Years Combined Experience" },
                { icon: <Flask />, text: "MOH Approved Protocols" },
                { icon: <Building />, text: "LCP-Certified Doctors" },
                { icon: <Shield />, text: "Discreet & Confidential Care" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="mb-4" style={{ color: "var(--color-wine)" }}>
                    {item.icon}
                  </div>
                  <p className="text-white">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 rounded-2xl text-center"
              style={{ backgroundColor: "var(--color-wine)", opacity: 0.9 }}
            >
              <p className="text-white italic">
                Book Your Testosterone Assessment at Nexus Clinic KL | Wisma UOA II, Kuala Lumpur
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* TRT at a Glance Table - Using TableForPages */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <TableForPages
            columns={[
              { key: "factor", header: "Factor", className: "font-semibold" },
              { key: "details", header: "Details" },
            ]}
            data={trtAtGlanceData}
            title="TRT Clinic Kuala Lumpur: Testosterone Replacement Therapy at a Glance"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          />
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <p className="text-lg italic" style={{ color: "var(--color-wine)" }}>
              Speak to a Doctor About Low Testosterone | Book Your Assessment at This Clinic
            </p>
          </motion.div>
        </motion.section>

        {/* What is TRT Section with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-georgia mb-6"
                  style={{ color: "var(--color-brown)" }}
                >
                  TRT Clinic in Kuala Lumpur: Testosterone Replacement Therapy in Malaysia to Restore Vitality and Regain Your Health
                </h2>
                <p
                  className="text-lg mb-4"
                  style={{ color: "var(--color-taupe)" }}
                >
                  Symptoms such as fatigue that sleep does not resolve. Muscle mass that does not build despite consistent training. A libido that has declined progressively over years. Mood changes, brain fog and an irritability that feels out of character. These are the symptoms of testosterone deficiency syndrome, a condition that affects an estimated one in five Malaysian men and that is routinely dismissed as normal ageing, overwork or stress without the blood test that would confirm whether testosterone levels in the body are actually low. Men experiencing symptoms of testosterone deficiency deserve accurate assessment, not reassurance that nothing is wrong.
                </p>
                <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                  Testosterone replacement therapy in Malaysia is a medically prescribed treatment at this clinic for men with confirmed hypogonadism, meaning both clinical symptoms and laboratory-confirmed low testosterone levels below the diagnostic threshold on two fasting morning serum measurements. It is not a lifestyle supplement. At Nexus Clinic KL, a discreet medical clinic in Kuala Lumpur, TRT begins with an accurate diagnosis, not a prescription based on symptoms alone, and it is managed with the monitoring framework that protects patients from underlying health conditions worsening undetected.
                </p>
                <ul className="space-y-3">
                  {[
                    "Comprehensive assessments to tailor the best treatment plan for each man's individual needs",
                    "Serving patients from Kuala Lumpur, Damansara, Penang and throughout Malaysia",
                    "Over 5,000 procedures completed and more than 15 years of combined clinical experience",
                    "Same clinical rigour as any other hormone prescription",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <span style={{ color: "var(--color-brown)" }}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative h-96 rounded-3xl overflow-hidden group"
              >
                <Image
                  src={images.doctorConsultation}
                  alt="Doctor consultation at Nexus Clinic"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, var(--color-wine) 0%, transparent 70%)",
                    opacity: 0.2,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/50 to-transparent">
                  <p className="text-white font-semibold">
                    Medical clinic, Kuala Lumpur
                  </p>
                </div>
              </motion.div>
            </div>
              <p className="text-sm text-taupe text-center max-w-2xl mx-auto mt-8">
                  Walia A, Coady P, Sofia‐Hernandez B, et al. Testosterone Replacement, Where Are We in 2025? 
                  <a 
                    href="https://onlinelibrary.wiley.com/doi/abs/10.1002/tre.1016" 
                    target="_blank" 
                    rel="nofollow" 
                    className="text-wine font-bold italic"
                  >
                    Trends in Urology & Men's Health
                  </a>. 
                  2025;16. This comprehensive review examines the current state of testosterone therapy, highlighting the removal of FDA boxed warnings following the TRAVERSE trial and the shift toward individualized, risk-stratified patient management.
              </p>
          </div>
        </motion.section>

        {/* Recognising Testosterone Deficiency Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                className="relative h-96 rounded-3xl overflow-hidden order-2 lg:order-1 group"
              >
                <img
                  src={images.labTesting}
                  alt="Advanced laboratory testing at Nexus Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, var(--color-brown) 0%, transparent 70%)",
                    opacity: 0.2,
                  }}
                />
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <h2
                  className="text-4xl md:text-5xl font-georgia mb-6"
                  style={{ color: "var(--color-brown)" }}
                >
                  Recognising Testosterone Deficiency Syndrome: Diagnosis at Our Clinic in Malaysia
                </h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  Testosterone deficiency syndrome (TDS) is defined clinically as the combination of symptoms consistent with low testosterone and laboratory confirmation of low testosterone levels on two separate fasting morning blood test measurements. The morning timing matters because testosterone follows a diurnal rhythm, peaking in the early morning and declining through the day; afternoon measurements may be 15 to 30% lower than morning values and can produce false-positive low results. At this clinic in Kuala Lumpur, every pre-TRT blood test for serum testosterone is ordered as a fasting morning sample to ensure accuracy.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg mb-8"
                  style={{ color: "var(--color-taupe)" }}
                >
                  The ADAM (Androgen Deficiency in Aging Males) questionnaire is a validated ten-question screening tool used at Nexus Clinic KL to structure the initial symptom assessment. A positive answer to ADAM question 1 (low libido) or 7 (reduced well-being) alone is highly suggestive of testosterone deficiency. A published Malaysian study found that testosterone deficiency syndrome occurred in 19.7% of Malaysian men with Type 2 diabetes. Men experiencing obesity have five times the risk of low testosterone levels compared to healthy weight men.
                </motion.p>

                <div className="p-6 rounded-xl" style={{ backgroundColor: "var(--color-glass)", backdropFilter: "blur(10px)" }}>
                  <p className="italic" style={{ color: "var(--color-wine)" }}>
                    Start With a Comprehensive Testosterone Assessment | Book at Nexus Clinic KL
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Symptoms Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              Key Symptoms of Testosterone Deficiency
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl flex items-start gap-4 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="p-2 rounded-lg shrink-0"
                    style={{ backgroundColor: "var(--color-wine)" }}
                  >
                    {React.cloneElement(symptom.icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div>
                  <p style={{ color: "var(--color-brown)" }}>{symptom.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* TRT Formulations Table - Using TableForPages */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <TableForPages
            columns={[
              { key: "name", header: "Formulation", className: "font-semibold" },
              { key: "schedule", header: "Dosing Schedule" },
              { key: "profile", header: "Testosterone Profile" },
              { key: "advantages", header: "Advantages" },
              { key: "bestFor", header: "Best For" },
            ]}
            data={trtFormulationsData}
            title="Testosterone Replacement Therapy in Malaysia: Choosing the Right Treatment"
            subtitle="Every TRT formulation available, with clinical guidance on which is most appropriate for each patient and why."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          />
          <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center max-w-4xl mx-auto" style={{ backgroundColor: "var(--color-brown)" }}>
            <p className="text-white">
              Nebido is the most commonly prescribed TRT formulation at this clinic in Malaysia. Requiring only 4 to 5 clinic visits per year, with stable testosterone levels that avoid peak-and-trough variation, Nebido suits the majority of men who want reliable symptom control without daily compliance burden.
            </p>
            <p className="text-white mt-4 italic">
              Discuss the Best TRT Formulation for Your Lifestyle | Book at Nexus Clinic KL
            </p>
          </motion.div>
        </motion.section>

        {/* TRAVERSE Trial Table - Using TableForPages */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <TableForPages
            columns={[
              { key: "question", header: "Clinical Question", className: "font-semibold" },
              { key: "evidence", header: "What the TRAVERSE Trial Found (NEJM 2023)" },
              { key: "meaning", header: "What This Means for Malaysian Men" },
            ]}
            data={traverseTrialData}
            title="The TRAVERSE Trial: Updated Cardiovascular Evidence for TRT in Malaysia"
            subtitle="The most significant development in TRT in the past decade: the TRAVERSE trial (NEJM 2023) and the FDA's removal of the cardiovascular black box warning (February 2025)."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          />
          <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center max-w-3xl mx-auto" style={{ backgroundColor: "var(--color-brown)" }}>
            <p className="text-white">
              Discuss Your Cardiovascular History and TRT Safety at Nexus Clinic KL | Evidence-Based Assessment
            </p>
          </motion.div>
        </motion.section>

        {/* Fertility Table - Using TableForPages */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <TableForPages
            columns={[
              { key: "situation", header: "Situation", className: "font-semibold" },
              { key: "effect", header: "TRT Effect on Fertility" },
              { key: "approach", header: "Clinical Approach at Nexus Clinic KL" },
            ]}
            data={fertilityData}
            title="Testosterone Replacement Therapy and Fertility: Discreet Guidance for Younger Men"
            subtitle="Every Malaysian TRT page either ignores fertility or mentions briefly that TRT affects sperm production. At Nexus Clinic KL, fertility is a standard agenda item at every TRT consultation for men of reproductive age."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          />
          <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center max-w-3xl mx-auto" style={{ backgroundColor: "var(--color-brown)" }}>
            <p className="text-white">
              Discuss TRT and Fertility Options at Nexus Clinic KL | Full Information Before Any Prescription
            </p>
          </motion.div>
        </motion.section>

        {/* Monitoring Protocol Table - Using TableForPages */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <TableForPages
            columns={[
              { key: "parameter", header: "Parameter Monitored", className: "font-semibold" },
              { key: "interval", header: "Monitoring Interval" },
              { key: "target", header: "Target Range / Action Threshold" },
              { key: "why", header: "Why This Is Monitored" },
            ]}
            data={monitoringParametersData}
            title="TRT Monitoring Protocol at Our Clinic: Ensuring Safety and Effectiveness"
            subtitle="Every TRT clinic page mentions monitoring is needed but none explains what is monitored, at what intervals, and why. At this clinic, monitoring is not optional."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          />
            <p className="text-center text-brown mt-4 max-w-3xl mx-auto">
              Patients managing androgenic skin changes as a side effect of TRT including acne may find our{' '}
              <Link href="/skin/acne-treatment-malaysia/" className="text-wine font-bold italic">
                acne treatment in Malaysia
              </Link>{' '}
              relevant as hormonal skin changes are a documented treatment side effect addressed concurrently at Nexus Clinic KL.
            </p>
        </motion.section>

        {/* Process Steps */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              The Testosterone Replacement Therapy Process at Nexus Clinic KL Step by Step
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "Step One", title: "Clinical Assessment", description: "Comprehensive medical history covering fatigue, mood changes, decreased libido, erectile dysfunction, muscle mass loss, cardiovascular risk factors, metabolic conditions, sleep quality, and prostate history. ADAM questionnaire scored and discussed. Fertility intentions discussed." },
                { step: "Step Two", title: "Blood Test Panel", description: "Fasting morning total serum testosterone (repeated on separate morning), free testosterone, SHBG, LH, FSH, oestradiol, prolactin, CBC with haematocrit, LFTs, lipid panel, PSA (men over 40), fasting glucose and HbA1c." },
                { step: "Step Three", title: "Diagnostic Review & Treatment Planning", description: "Doctor reviews blood test results, confirms whether diagnostic criteria are met, explains recommended formulation, discusses monitoring schedule, addresses all patient questions including cardiovascular concerns and fertility status." },
                { step: "Step Four", title: "Follow-up & Monitoring Programme", description: "First monitoring blood test at 3 months. Consultation to review results. Second panel at 6 months. Then every 6 to 12 months. Blood pressure at every visit. Quality of life assessed using ADAM questionnaire at each follow-up." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="inline-block px-3 py-1 rounded-full mb-4 text-sm font-semibold"
                    style={{ backgroundColor: "var(--color-wine)", color: "white" }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-xl font-georgia mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-taupe)" }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <p className="text-lg italic" style={{ color: "var(--color-wine)" }}>
                Book Your Testosterone Assessment at Nexus Clinic KL | Confirmed Diagnosis Before Any Prescription
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Section - Using TableForPages */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <TableForPages
            columns={[
              { key: "item", header: "Service / Item", className: "font-semibold" },
              { key: "details", header: "Details" },
              { key: "price", header: "Price Range (RM) 2026" },
            ]}
            data={pricingItemsData}
            title="Testosterone Replacement Therapy Cost at Our Clinic in Malaysia 2026"
            subtitle="Total annual cost varies by formulation. Nebido-based programmes: RM 5,000 to RM 9,000 per year. Gel-based programmes: RM 7,000 to RM 12,000 per year. All pricing transparent and disclosed before any treatment plan is issued."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          />
          <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center max-w-3xl mx-auto" style={{ backgroundColor: "var(--color-brown)" }}>
            <p className="text-white">
              Get Your Full TRT Programme Pricing Before Starting | Book at Nexus Clinic KL
            </p>
          </motion.div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12"
              style={{ color: "var(--color-brown)" }}
            >
              Benefits of Testosterone Replacement Therapy
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "var(--color-wine)" }}
                    >
                      {React.cloneElement(benefit.icon, {
                        className: "w-6 h-6 text-white",
                      })}
                    </div>
                  </div>
                  <p style={{ color: "var(--color-brown)" }}>{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <SectionBeforeAfter transformations={transformations} />

        {/* FAQ Section */}
        <FAQWithSchema data={faqs} />

        {/* Why Nexus Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6"
              style={{ color: "var(--color-brown)" }}
            >
              Clinically Managed Testosterone Replacement Therapy at Nexus Clinic KL, Kuala Lumpur
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 max-w-4xl mx-auto"
              style={{ color: "var(--color-taupe)" }}
            >
              Testosterone deficiency is a real, diagnosable and treatable medical condition. The evidence base supporting its safe and effective management has never been stronger. The TRAVERSE trial has resolved the cardiovascular debate, the Endocrine Society guidelines are clear on who qualifies and how to monitor, and formulation options available in 2026 allow every man who qualifies to find a protocol that fits his lifestyle.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-12 max-w-4xl mx-auto"
              style={{ color: "var(--color-brown)" }}
            >
                Our licensed men's health doctors bring over 15 years of combined experience, have completed over 5,000 procedures and provide discreet healthcare services that assess and address{' '}
                <Link href="/regenerative/ed-treatment-malaysia/" className="text-wine font-bold italic">
                  testosterone deficiency, erectile dysfunction, low libido
                </Link>{' '}
                and the broader cluster of health concerns affecting men's well-being and quality of life in Malaysia.
           </motion.p>

            <motion.div
              variants={scaleIn}
              className="p-8 rounded-3xl max-w-3xl mx-auto transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: "var(--color-glass)",
                backdropFilter: "blur(10px)",
              }}
            >
              <MapPin
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "var(--color-wine)" }}
              />
              <p
                className="mb-2 font-semibold"
                style={{ color: "var(--color-brown)" }}
              >
                Nexus Clinic KL
              </p>
              <p className="mb-4" style={{ color: "var(--color-taupe)" }}>
                Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
              </p>
              <div className="flex justify-center gap-4">
                <span
                  className="flex items-center gap-1"
                  style={{ color: "var(--color-wine)" }}
                >
                  <Phone className="w-4 h-4" /> Call or WhatsApp
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6 text-white"
            >
              Book Your Testosterone Assessment at Nexus Clinic KL
              <span
                className="block text-2xl mt-2"
                style={{ color: "var(--color-rose)" }}
              >
                Wisma UOA II, Kuala Lumpur
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 text-white opacity-90"
            >
              Call or WhatsApp today to schedule your confidential consultation.
            </motion.p>

            <Link href="/contact-us/">
              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "var(--color-wine)", color: "white" }}
              >
                Book Your Assessment
              </motion.button>
            </Link>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-white opacity-75"
            >
              Serving patients from Kuala Lumpur, Damansara, Penang and throughout Malaysia
            </motion.p>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default TestosteroneLanding;