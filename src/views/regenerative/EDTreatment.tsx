"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Sparkles,
  Pill,
  Syringe,
  Zap,
  Stethoscope,
  CheckCircle2,
  XCircle,
  Phone,
  ArrowRight,
  TestTube,
  Calendar,
  MessageCircle,
  ClipboardList,
  Building,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "@/src/lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
export default function EDTreatment({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "regenerative/edTreatment");

  const images = {
    doctorConsultation: "/images/regenerative/ed-treatment.webp",
    modernClinic: "/images/clinic/interior.png",
    medicalTeam:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop",
    healthyLifestyle:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    kualaLumpur:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=2069&auto=format&fit=crop",
    consultation:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
  };

  // ED Type to Treatment Matching Table Data
  const edTypeTable = [
    {
      type: "Vascular Erectile Dysfunction (Most Common)",
      recognition:
        "Gradual onset; difficulty maintaining an erection in all situations; reduced morning and nocturnal erections",
      causes:
        "Abnormalities with blood vessels; endothelial dysfunction; diabetes, high blood pressure, hyperlipidaemia, smoking, obesity",
      firstLine:
        "Oral medications (PDE5 inhibitor) as first line; shockwave therapy (Li-ESWT) for mild to moderate cases; aggressive cardiovascular risk factor management",
      prognosis: "Good with treatment; full resolution possible if vascular causes are controlled",
    },
    {
      type: "Psychogenic Erectile Dysfunction",
      recognition:
        "Sudden onset; erection present with masturbation or on waking but absent with partner; situational; associated with performance anxiety or depression",
      causes:
        "Psychological or emotional problems: anxiety, depression, stress; guilt about sexual performance; relationship conflict; performance anxiety",
      firstLine:
        "Sex therapist or counsellor as primary intervention; brief PDE5 oral medications as confidence support; breaking the performance anxiety cycle is the goal",
      prognosis: "Excellent; full resolution common",
    },
    {
      type: "Hormonal Erectile Dysfunction",
      recognition:
        "Reduced libido as dominant symptom; reduced morning erections; fatigue, low mood, reduced muscle mass",
      causes:
        "Testosterone deficiency confirmed on fasting blood test; hormonal imbalances impair both desire and erection mechanism",
      firstLine:
        "Testosterone therapy to restore hormone levels; PDE5 inhibitor added if vascular component also present",
      prognosis: "Good; erectile function improves within 3 to 6 months of testosterone normalisation",
    },
    {
      type: "Neurogenic Erectile Dysfunction",
      recognition:
        "Associated with known neurological conditions; erection attempts with desire but no mechanical response",
      causes:
        "Nerve abnormalities from diabetes with neuropathy, multiple sclerosis, Parkinson's, spinal cord injury, prostate surgery, radiation therapy to the pelvis",
      firstLine:
        "PDE5 inhibitors when some nerve function remains; intracavernosal injection therapy for non-responders; vacuum erection device",
      prognosis: "Variable; depends on degree of nerve damage",
    },
    {
      type: "Mixed Erectile Dysfunction (Most Common Clinical Presentation)",
      recognition:
        "Features of two or more types simultaneously; most common in Malaysian men over 40",
      causes:
        "Multiple causes simultaneously active; both organic (vascular, hormonal) and psychological issues contributing",
      firstLine:
        "PDE5 inhibitor as foundation; shockwave therapy if vascular component significant; testosterone therapy if hormonal confirmed; sex therapist for psychological issues",
      prognosis: "Good with comprehensive approach",
    },
  ];

  // Oral Medications Comparison Table
  const oralMedsTable = [
    {
      name: "Sildenafil (Viagra, generic)",
      onset: "30 to 60 minutes; duration 4 to 6 hours",
      foodEffect:
        "High-fat meal delays absorption significantly; must be taken 1 hour before on empty stomach",
      sideEffects: "Visual colour tinge; headache, flushing, nasal congestion, dyspepsia",
      bestFor:
        "Men who can plan 1 to 2 hours ahead; poorest choice for Malaysian food culture; most affordable option",
    },
    {
      name: "Tadalafil (Cialis, generic)",
      onset: "30 to 60 minutes; duration 24 to 36 hours (up to 2 days)",
      foodEffect: "Minimal food effect; can be taken with or without food at any time",
      sideEffects: "Back pain and myalgia in 2 to 7%; headache, flushing",
      bestFor:
        "Men who want spontaneity; daily low-dose ideal for consistent readiness; most popular for Malaysian patients",
    },
    {
      name: "Vardenafil (Levitra)",
      onset: "25 to 60 minutes; duration 4 to 5 hours",
      foodEffect: "High-fat meal delays onset similarly to sildenafil",
      sideEffects: "Headache, flushing, nasal congestion; QT interval prolongation possible at high doses",
      bestFor: "Men who find sildenafil has too strong a visual side effect",
    },
    {
      name: "Avanafil (Stendra)",
      onset: "Fastest: 15 to 30 minutes; duration 6 hours",
      foodEffect: "Minimal food effect; most flexible regarding meal timing",
      sideEffects: "Fewest side effects due to highest PDE5 selectivity; minimal visual effects",
      bestFor:
        "Men who want fastest and most flexible option with fewest side effects; higher cost",
    },
  ];

  // Shockwave Therapy Evidence Table
  const shockwaveTable = [
    {
      question: "What does shockwave therapy for erectile dysfunction actually do?",
      evidence:
        "Low-intensity extracorporeal shockwave therapy delivers focused acoustic waves to penile tissues; stimulates angiogenesis through upregulation of VEGF; promotes regeneration of cavernous smooth muscle",
      application:
        "Positioned as a treatment that addresses the underlying structural vascular problem rather than managing symptoms",
    },
    {
      question: "Who is the ideal candidate?",
      evidence:
        "Mild to moderate vascular ED with reduced blood flow; PDE5 partial responders; men who want to reduce oral medication dependence; men who cannot take oral medications due to nitrate use",
      application:
        "Recommended after vascular cause is confirmed; not offered as first-line for psychogenic ED",
    },
    {
      question: "How many sessions are needed and what is realistic?",
      evidence:
        "6 to 12 sessions, 1 to 2 per week; 60 to 75% improvement in mild to moderate vascular ED; some benefits lasting up to 1 year",
      application:
        "Patients informed of realistic response rates; men with mild to moderate vascular ED who have partial oral medication response are most likely to benefit",
    },
    {
      question: "Who will NOT benefit meaningfully?",
      evidence:
        "Pure psychogenic ED (no vascular mechanism); severe vascular ED with fixed arterial occlusion; neurogenic ED after radical prostatectomy without nerve preservation",
      application:
        "Nexus Clinic KL does not offer shockwave therapy to these patient groups as primary treatment",
    },
  ];

  // Pricing Table
  const pricingItems = [
    { item: "ED Initial Consultation", details: "Comprehensive history, IIEF-5 assessment, physical examination, cardiovascular risk review, medication review, blood test requisition", price: "RM 150 to RM 300" },
    { item: "ED Blood Panel", details: "Total testosterone, fasting glucose, HbA1c, lipid panel, CBC, LH, FSH, prolactin, thyroid function", price: "RM 250 to RM 450" },
    { item: "Oral Medication (Sildenafil, generic)", details: "On-demand; prescription valid for 1 to 3 months", price: "RM 40 to RM 120 per month" },
    { item: "Oral Medication (Tadalafil)", details: "Daily 2.5 to 5mg or on-demand 10 to 20mg; best for Malaysian food culture", price: "RM 120 to RM 350 per month" },
    { item: "Shockwave Therapy (Li-ESWT) per session", details: "Non-invasive; 20 to 30 minutes; 6 to 12 sessions recommended", price: "RM 600 to RM 1,200 per session" },
    { item: "Li-ESWT Programme (6 sessions)", details: "For mild to moderate vascular ED; includes pre and post programme review", price: "RM 3,500 to RM 6,500" },
    { item: "PRP Therapy (P-Shot, per session)", details: "Autologous PRP; injected into penile tissues; 2 to 3 sessions recommended", price: "RM 1,200 to RM 2,500 per session" },
    { item: "Combination ED Programme", details: "Shockwave plus PRP; 6 shockwave sessions, 2 PRP sessions, 3-month follow-up", price: "From RM 6,500" },
  ];

  // FAQs
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
  ];

  return (
    <>
      <main className="min-h-screen bg-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <AllPagesHero
          badge="Confidential Care"
          title="Erectile Dysfunction Treatment in Malaysia:"
          highlight="Cause-Matched ED Treatment Kuala Lumpur"
          description="Erectile dysfunction treatment in Malaysia matched to your cause. ED treatment Kuala Lumpur clinic offering treatment options for erection problems including oral medications, shockwave therapy and blood flow restoration. Erectile dysfunction treatment in malaysia with honest outcomes. Near Penang. Book your confidential assessment today."
          details="At Nexus Clinic KL, every ED treatment plan begins with identifying the underlying cause: vascular, neurological, hormonal or psychological. Treatment is then matched to the specific cause rather than applying the same approach to every patient."
          note="All consultations are 100% confidential. We have performed over 5,000 procedures with 15+ years of combined experience. MOH approved clinic."
          image="/images/regenerative/ed-treatment.webp"
          imageAlt="Erectile Dysfunction Treatment at Nexus Clinic Kuala Lumpur"
          ctaText="Book Your Assessment"
          ctaLink="/contact-us"
          whatsappMessage="Hi, I'd like to book a confidential consultation for erectile dysfunction treatment at Nexus Clinic KL."
          floatingTitle="ED in Malaysia: The Numbers"
          floatingSubtitle="31.6% moderate to severe ED | 69.5% over 40"
          staggerContainer={staggerContainer}
          fadeInLeft={fadeInLeft}
          fadeInRight={fadeInRight}
          fadeInUp={fadeInUp}
        />
        {/* ED at a Glance Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <TableForPages
            columns={[
              { key: "factor", header: "Factor", className: "font-semibold" },
              { key: "details", header: "Details" },
            ]}
            data={[
              { factor: "Definition", details: "Consistent or recurrent inability to attain and maintain an erection sufficient for satisfactory sexual intercourse" },
              { factor: "Prevalence in Malaysia", details: "31.6% moderate to severe ED; 69.5% among men over 40; 89.2% among men with diabetes or heart disease" },
              { factor: "Treatment Options Available", details: "Oral medications (PDE5 inhibitors) | Shockwave therapy (Li-ESWT) | PRP therapy (P-Shot) | Testosterone therapy | Intracavernosal injection therapy | Vacuum erection devices | Psychological counselling" },
              { factor: "Assessment Required", details: "Comprehensive history, IIEF-5 questionnaire, blood panel, cardiovascular risk assessment" },
              { factor: "ED as a Cardiovascular Signal", details: "ED in men over 40 is a sentinel marker for cardiovascular disease; predicts future CVD, diabetes and hypertension" },
            ]}
            title="ED Treatment Malaysia at a Glance: Causes, Symptoms and Treatment Options"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <p className="text-lg italic" style={{ color: "#8C4F58" }}>
                Speak to a Doctor About Erectile Dysfunction | Confidential Assessment at Nexus Clinic KL
              </p>
            </motion.div>
        </motion.section>

        {/* Causes of ED - Type to Treatment Matching Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          {/* Causes of Erectile Dysfunction Table */}
          <TableForPages
            columns={[
              { key: "type", header: "Type of ED", className: "font-semibold" },
              { key: "recognition", header: "How to Recognise It" },
              { key: "causes", header: "Common Causes" },
              { key: "firstLine", header: "First-Line Treatment" },
              { key: "prognosis", header: "Prognosis" },
            ]}
            data={edTypeTable.map((item) => ({
              type: item.type,
              recognition: item.recognition,
              causes: item.causes,
              firstLine: item.firstLine,
              prognosis: item.prognosis,
            }))}
            title="Causes of Erectile Dysfunction: The ED Cause-to-Treatment Matching Framework"
            subtitle="Every Malaysian ED page lists treatment options without explaining that the correct treatment depends entirely on which causes are active. This table maps ED types to distinguishing features, causes, and evidence-based first-line treatments."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />

            <p className="text-sm text-taupe text-center max-w-2xl mx-auto">
              Rezali MS et al. Prevalence and associated factors of moderate to severe erectile dysfunction among adult men in Malaysia. 
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/38114674/" 
                target="_blank" 
                rel="nofollow" 
                className="text-wine font-bold italic"
              >
                Scientific Reports
              </a>. 
              2023;13(1):22634. (Updated clinical context: Discover Public Health, 2025). This large-scale study identifies key metabolic and lifestyle risk factors associated with male sexual health, emphasizing the high prevalence of under-diagnosed conditions in the primary care setting.
            </p>
        </motion.section>

        {/* ED as Cardiovascular Signal Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          {/* Erectile Dysfunction as a Cardiovascular Signal Table */}
          <TableForPages
            columns={[
              { key: "observation", header: "Clinical Observation", className: "font-semibold" },
              { key: "evidence", header: "The Evidence in Malaysian Context" },
              { key: "meaning", header: "What This Means for ED Treatment" },
            ]}
            data={[
              {
                observation: "ED predicts future cardiovascular events in men over 40",
                evidence: "Published Malaysian research confirms ED is the sentinel marker for CVD in men over 40; predicts future diabetes, hypertension, hyperlipidaemia and angina",
                meaning: "A new ED diagnosis is treated as a prompt for cardiovascular risk stratification, not just a signal to prescribe oral medications"
              },
              {
                observation: "Blood vessels of the penis show disease before coronary arteries",
                evidence: "Cavernous arteries are 1-2mm; coronary arteries are 3-4mm; same degree of narrowing causes 50-60% flow reduction to penis vs 10-15% to heart",
                meaning: "ED may present 2-5 years before cardiac symptoms; men over 40 receive cardiovascular risk assessment at Nexus Clinic KL"
              },
              {
                observation: "Malaysian men with diabetes and hypertension have ED rates above 80%",
                evidence: "Primary care study found ED prevalence of 89.2% in men with diabetes or heart disease and 80.4% in hypertensive men",
                meaning: "Only 21% of Malaysian men self-report ED despite 65.5% having measurable ED; men with existing conditions should be encouraged to raise the issue"
              },
              {
                observation: "Treating ED safely in men with cardiac history",
                evidence: "PDE5 inhibitors contraindicated with nitrate medications; combination produces severe unpredictable hypotension",
                meaning: "Full medication review before any prescription; men on nitrates offered non-pharmacological options including shockwave therapy"
              },
            ]}
            title="Erectile Dysfunction as a Cardiovascular Signal: What Most ED Clinics Do Not Tell You"
            subtitle="No ED competitor page in Malaysia communicates the most clinically significant fact about ED in men over 40: that it is a documented sentinel marker for cardiovascular disease."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />

          {/* Footer Callout */}
          <motion.div 
            variants={fadeInUp} 
            className="mt-8 p-6 rounded-xl text-center" 
            style={{ backgroundColor: "#4B3A33" }}
          >
            <p className="text-white">
              Get a Cause-Based ED Assessment with Cardiovascular Risk Review at Nexus Clinic KL
            </p>
          </motion.div>
        </motion.section>

        {/* Oral Medications Comparison Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          {/* Oral Medications for Erectile Dysfunction Table */}
          <TableForPages
            columns={[
              { key: "name", header: "Oral Medication", className: "font-semibold" },
              { key: "onset", header: "Onset / Duration" },
              { key: "foodEffect", header: "Food Effect" },
              { key: "sideEffects", header: "Specific Side Effects" },
              { key: "bestFor", header: "Best For Malaysian Men" },
            ]}
            data={oralMedsTable.map((item) => ({
              name: item.name,
              onset: item.onset,
              foodEffect: item.foodEffect,
              sideEffects: item.sideEffects,
              bestFor: item.bestFor,
            }))}
            title="Oral Medications for Erectile Dysfunction: Choosing the Right Treatment Option for Malaysian Men"
            subtitle="Malaysian food culture, spontaneity preferences and specific health profiles all influence which oral medication produces the best real-world experience."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />

          <p className="text-center max-w-2xl mx-auto mt-8 text-sm">
            For broader men's health context including low testosterone which frequently coexists with erectile dysfunction in Malaysian men, see our{' '}
            <Link href="/regenerative/testosterone-therapy-malaysia/" className="text-wine font-bold italic">
              testosterone therapy in Malaysia
            </Link>.
          </p>
        </motion.section>

        {/* Shockwave Therapy Evidence Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          {/* Shockwave Therapy for Erectile Dysfunction Table */}
          <TableForPages
            columns={[
              { key: "question", header: "Clinical Question", className: "font-semibold" },
              { key: "evidence", header: "What the Evidence Shows" },
              { key: "application", header: "How Nexus Clinic KL Applies This" },
            ]}
            data={shockwaveTable.map((item) => ({
              question: item.question,
              evidence: item.evidence,
              application: item.application,
            }))}
            title="Shockwave Therapy for Erectile Dysfunction: Evidence, Patient Selection and Treatment Solutions"
            subtitle="No Malaysian competitor page explains who is and is not a good candidate, what the evidence actually shows about response rates, or what the regulatory status is."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />

          {/* Footer Callout */}
          <motion.div 
            variants={fadeInUp} 
            className="mt-8 p-6 rounded-xl text-center" 
            style={{ backgroundColor: "#4B3A33" }}
          >
            <p className="text-white">
              Find Out If Shockwave Therapy Is Right for Your ED at Nexus Clinic KL
            </p>
          </motion.div>
        </motion.section>

        {/* Treatment Options Overview Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "#4B3A33" }}
            >
              ED Treatment Options at Nexus Clinic KL: Oral Medications, Shockwave and More
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172,153,144,0.3)",
                }}
              >
                <Pill className="w-10 h-10 mb-4" style={{ color: "#8C4F58" }} />
                <h3 className="text-2xl font-georgia mb-4" style={{ color: "#4B3A33" }}>Oral Medications: PDE5 Inhibitors</h3>
                <p className="mb-4" style={{ color: "#AC9990" }}>
                  PDE5 inhibitors work by inhibiting the phosphodiesterase-5 enzyme, preventing cGMP breakdown and prolonging the vasodilatory effect of nitric oxide. They do not cause erections independently but amplify the natural response to sexual stimulation.
                </p>
                <p style={{ color: "#4B3A33" }}>
                  At Nexus Clinic KL, the specific oral medication prescribed is selected based on food habits, preference for spontaneity, existing cardiovascular medications, and side effect profile.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172,153,144,0.3)",
                }}
              >
                <Zap className="w-10 h-10 mb-4" style={{ color: "#8C4F58" }} />
                <h3 className="text-2xl font-georgia mb-4" style={{ color: "#4B3A33" }}>Shockwave Therapy (Li-ESWT)</h3>
                <p className="mb-4" style={{ color: "#AC9990" }}>
                  Low-intensity extracorporeal shockwave therapy delivers focused acoustic waves to penile tissues, stimulating angiogenesis through upregulation of VEGF and promoting regeneration of cavernous smooth muscle.
                </p>
                <p style={{ color: "#4B3A33" }}>
                  Sessions last 20-30 minutes. The standard programme is 6 sessions over 3 to 6 weeks. Most patients describe a mild tapping sensation with no significant discomfort.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172,153,144,0.3)",
                }}
              >
                <Sparkles className="w-10 h-10 mb-4" style={{ color: "#8C4F58" }} />
                <h3 className="text-2xl font-georgia mb-4" style={{ color: "#4B3A33" }}>PRP Therapy (P-Shot)</h3>
                <p className="mb-4" style={{ color: "#AC9990" }}>
                  Platelet-rich plasma therapy involves drawing blood, centrifuging it to isolate the platelet-rich plasma layer, and injecting it into specific penile locations. Growth factors promote tissue regeneration and improved blood flow.
                </p>
                <p style={{ color: "#4B3A33" }}>
                  Topical numbing cream is applied for 30-45 minutes before the session. Evidence remains in the emerging category; positioned as an adjunct to shockwave therapy.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172,153,144,0.3)",
                }}
              >
                <HeartPulse className="w-10 h-10 mb-4" style={{ color: "#8C4F58" }} />
                <h3 className="text-2xl font-georgia mb-4" style={{ color: "#4B3A33" }}>Testosterone Therapy for Hormonal ED</h3>
                <p className="mb-4" style={{ color: "#AC9990" }}>
                  Men whose ED has a primary hormonal driver require testosterone restoration as part of their treatment plan. Testosterone is confirmed low on two fasting morning measurements with consistent symptoms.
                </p>
                <p style={{ color: "#4B3A33" }}>
                  <Link href="/regenerative/testosterone-therapy-malaysia/" className="font-bold text-wine italic">Testosterone therapy</Link> alone may restore erections in purely hormonal ED. In mixed ED cases, combination therapy with testosterone plus PDE5 inhibitors provides synergistic benefit.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <p className="text-lg italic" style={{ color: "#8C4F58" }}>
                Book Your ED Treatment Consultation at Nexus Clinic KL | All Treatment Options Explained
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
            {/* Cost of Erectile Dysfunction Treatment Table */}
            <TableForPages
              columns={[
                { key: "item", header: "Service / Treatment", className: "font-semibold" },
                { key: "details", header: "Details" },
                { key: "price", header: "Price Range (RM) 2026" },
              ]}
              data={pricingItems.map((item) => ({
                item: item.item,
                details: item.details,
                price: item.price,
              }))}
              title="Cost of Erectile Dysfunction Treatment in Malaysia 2026: Transparent Pricing at Nexus Clinic KL"
              subtitle="All pricing is presented at the assessment consultation before any ED treatment begins. Oral medications are the most affordable ongoing option. Shockwave therapy programmes represent a more significant investment but address underlying blood flow."
              variant="compact"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

            {/* Footer Callout */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-8 text-center"
            >
              <p className="text-lg" style={{ color: "#4B3A33" }}>
                Get Full ED Treatment Programme Pricing | Free Assessment at Nexus Clinic KL
              </p>
            </motion.div>
        </motion.section>

        {/* Pros and Cons Comparison */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              ED Treatment Options at a Glance
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Pill,
                  title: "Oral Medications",
                  pros: "Convenient, effective for most, non-invasive",
                  cons: "Food interactions (sildenafil), side effects, doesn't treat underlying cause",
                },
                {
                  icon: Zap,
                  title: "Shockwave Therapy",
                  pros: "Addresses vascular cause, no medication, sustained improvement",
                  cons: "Cost, multiple sessions required, only for vascular ED",
                },
                {
                  icon: Activity,
                  title: "Vacuum Devices",
                  pros: "Non-invasive, no medication, reusable",
                  cons: "Requires practice, unnatural erection, bruising possible",
                },
                {
                  icon: Syringe,
                  title: "Injections",
                  pros: "Effective for severe ED, works when pills don't",
                  cons: "Needle anxiety, risk of priapism, cost",
                },
                {
                  icon: Sparkles,
                  title: "PRP/Stem Cell",
                  pros: "Regenerative potential, natural",
                  cons: "Emerging evidence, cost, multiple sessions needed",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <item.icon className="w-8 h-8 mb-4" style={{ color: "#8C4F58" }} />
                  <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: "#4B3A33" }}>{item.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: "#4B3A33" }} />
                      <span className="text-sm" style={{ color: "#AC9990" }}>{item.pros}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 mt-1 shrink-0" style={{ color: "#8C4F58" }} />
                      <span className="text-sm" style={{ color: "#AC9990" }}>{item.cons}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Process Steps */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "#4B3A33" }}
            >
              The ED Treatment Process at Nexus Clinic KL
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: 1, title: "Confidential Consultation", desc: "Comprehensive history, IIEF-5 assessment, medical and medication review", icon: MessageCircle },
                { step: 2, title: "Physical Examination", desc: "Cardiovascular risk assessment, blood pressure, genital examination", icon: Stethoscope },
                { step: 3, title: "Blood Panel", desc: "Testosterone, glucose, HbA1c, lipids, CBC, hormones", icon: TestTube },
                { step: 4, title: "Diagnosis & Plan", desc: "Cause identified, treatment options explained, pricing disclosed", icon: ClipboardList },
                { step: 5, title: "Treatment & Follow-up", desc: "Ongoing monitoring, dose adjustment, progress tracking", icon: Calendar },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold" style={{ backgroundColor: "#8C4F58", color: "white" }}>
                    {item.step}
                  </div>
                  <item.icon className="w-6 h-6 mx-auto mb-2" style={{ color: "#8C4F58" }} />
                  <h3 className="font-medium mb-1" style={{ color: "#4B3A33" }}>{item.title}</h3>
                  <p className="text-xs" style={{ color: "#AC9990" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeInUp} className="text-center mt-8" style={{ color: "#AC9990" }}>
              All consultations are completely confidential. You are welcome to attend alone.
            </motion.p>
          </div>
        </motion.section>

        {/* Why Nexus Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6"
              style={{ color: "#4B3A33" }}
            >
              Cause-Based, Evidence-Matched Erectile Dysfunction Treatment at Nexus Clinic KL
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 max-w-4xl mx-auto"
              style={{ color: "#AC9990" }}
            >
              ED in Malaysia is undertreated, misdiagnosed as normal ageing and managed without the cause assessment that determines which treatment options will actually work. The 31.6% moderate to severe prevalence confirmed in the Malaysian National Health and Morbidity Survey represents hundreds of thousands of men who deserve better than a generic oral medications prescription without a conversation about causes, cardiovascular risk, and realistic treatment solutions.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-12 max-w-4xl mx-auto"
              style={{ color: "#4B3A33" }}
            >
              At Nexus Clinic KL, every ED patient receives an assessment that identifies the types and causes before any treatment decision is made. The treatment plan is matched to those causes. Outcomes are discussed honestly, including what oral medications can and cannot do, who benefits from shockwave therapy and who does not, the role of a sex therapist for psychogenic ED, and what lifestyle changes produce real improvement.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="p-8 rounded-3xl max-w-3xl mx-auto"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(172, 153, 144, 0.3)",
              }}
            >
              <Building className="w-12 h-12 mx-auto mb-4" style={{ color: "#8C4F58" }} />
              <p className="mb-2 font-semibold" style={{ color: "#4B3A33" }}>
                Nexus Clinic KL
              </p>
              <p className="mb-4" style={{ color: "#AC9990" }}>
                Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
              </p>
              <p className="text-sm" style={{ color: "#4B3A33" }}>
                Serving patients from KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara, Penang and throughout Malaysia
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQWithSchema data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src={images.modernClinic}
              alt="Nexus Clinic Modern Facility"
              className="w-full h-full object-cover"
              width={1200}
              height={800}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(140, 79, 88, 0.9) 0%, rgba(171, 128, 104, 0.9) 100%)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div variants={staggerContainer} className="max-w-3xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-georgia mb-6 text-white">
                Book Your Confidential ED Treatment Assessment at Nexus Clinic KL
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-white/90 mb-8 text-lg">
                Wisma UOA II, Kuala Lumpur | Call or WhatsApp Today
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact-us/"
                  className="px-8 py-4 rounded-lg font-medium flex items-center gap-2"
                  style={{ background: "white", color: "#8C4F58" }}
                >
                  Book Your Confidential Assessment
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Call or WhatsApp</span>
                  </div>
                </div>

                <p className="text-white/80 text-sm">
                  Serving patients from Kuala Lumpur, Damansara, Penang and throughout Malaysia
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}