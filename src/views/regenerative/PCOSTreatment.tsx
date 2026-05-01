"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  Phone,
  Shield,
  Users,
  ArrowRight,
  Stethoscope,
  ClipboardList,
  Timer,
  Building,
  HeartPulse 
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import TableForPages from "@/src/components/TableForPages";
import Whatsapp from "@/src/components/Whatsapp";
import Link from "next/link";

const PCOSPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "regenerative/pcosTreatment");

  // PCOS Phenotype Table Data
  const phenotypeTableData = [
    {
      phenotype: "Phenotype A (Classic Full)",
      features: "Hyperandrogenism + anovulation + polycystic ovaries on ultrasound",
      concern: "Hyperandrogenic symptoms AND irregular cycles AND metabolic concerns",
      priority: "Combined oral contraceptive pills to regulate menstrual periods; add metformin if insulin resistance; lifestyle programme; laser hair removal",
      risk: "Highest: most insulin resistance, highest cardiovascular and T2DM risk",
    },
    {
      phenotype: "Phenotype B (Classic Without PCO)",
      features: "Hyperandrogenism + anovulation; no polycystic ovaries visible on ultrasound",
      concern: "Irregular cycles and hyperandrogenic symptoms; may be missed if ultrasound required",
      priority: "Ultrasound NOT required per 2023 Guideline when both hyperandrogenism and ovulatory dysfunction present; treat as phenotype A",
      risk: "High: similar metabolic risk to phenotype A; do not downgrade monitoring",
    },
    {
      phenotype: "Phenotype C (Ovulatory PCOS)",
      features: "Hyperandrogenism + polycystic ovaries on ultrasound; regular ovulatory cycles",
      concern: "Hyperandrogenic symptoms with regular cycles; often presents to aesthetic clinic first",
      priority: "Oral contraceptive pills or spironolactone for hirsutism/acne; treat skin manifestations with cause-matched approach",
      risk: "Moderate to high; metabolic risk lower than A/B but still present",
    },
    {
      phenotype: "Phenotype D (Non-Androgenic)",
      features: "Anovulation + polycystic ovaries on ultrasound only; no hyperandrogenism",
      concern: "Irregular cycles and possible fertility concerns; no acne or hirsutism",
      priority: "Cycle regulation with oral contraceptive pills or cyclical progestogen; letrozole if fertility desired",
      risk: "Low to moderate; endometrial cancer risk from prolonged anovulation is primary concern",
    },
  ];

  // PCOS Skin Manifestations Table Data
  const skinManifestationsTableData = [
    {
      sign: "Hormonal Acne (PCOS-Type)",
      presentation: "Deep, cystic, painful acne lesions on lower face, jawline, chin and neck; persists into or begins in adulthood; each lesion leaves PIH in Malaysian skin",
      mechanism: "Elevated androgen levels increase sebum production; driven by hormonal imbalance, not hygiene",
      treatment: "Systemic: oral contraceptive pills with drospirenone or cyproterone; spironolactone 25-100mg daily; metformin if insulin resistance | Topical: tretinoin, azelaic acid, SPF50 | Aesthetic: pico laser or chemical peel for PIH after hormonal control",
    },
    {
      sign: "Hirsutism (Excess Hair Growth)",
      presentation: "Coarse dark hair growth on upper lip, chin, jawline, sideburns, chest and abdomen; most distressing symptom for many women",
      mechanism: "Elevated androgen levels stimulate hair follicle growth in androgen-sensitive areas; conversion of vellus to terminal hair driven by 5-alpha reductase",
      treatment: "Systemic first: oral contraceptive pills for 6 months minimum; add spironolactone 50-100mg if insufficient | Procedural: laser hair removal (Nd:YAG 1064nm for Malaysian skin); begin after 6 months of anti-androgen treatment",
    },
    {
      sign: "Female Pattern Hair Loss (FPHL)",
      presentation: "Diffuse thinning over crown and frontal scalp; widening part line; preserved hairline; slowest symptom to respond to treatment",
      mechanism: "Same androgen mechanism but in reverse: elevated androgens miniaturise scalp hair follicles; DHT is primary mediator",
      treatment: "Systemic: oral contraceptive pills with anti-androgenic progestogen; spironolactone 100-200mg; topical minoxidil 2-5% | Adjunct: PRP scalp injections; realistic timeline: 6-12 months minimum",
    },
    {
      sign: "Acanthosis Nigricans",
      presentation: "Velvety, dark hyperpigmented patches on neck, axillae, groin and under breasts; more visible in Malaysian Indian and Malay skin",
      mechanism: "Hyperinsulinaemia stimulates keratinocyte proliferation via IGF-1 receptors; direct marker of insulin resistance",
      treatment: "Treat the cause: metformin to reduce insulin resistance is primary treatment; topical retinoids and chemical exfoliation help texture but are ineffective without metabolic treatment",
    },
  ];

  // PCOS Treatment Evidence Table Data
  const treatmentEvidenceTableData = [
    {
      option: "Inositol (Myo-Inositol, D-Chiro-Inositol)",
      evidence: "2023 International PCOS Guideline explicitly states metformin has greater efficacy than inositol; inositol offers limited clinical benefits; supported by only very low-certainty evidence for metabolic and hormonal benefits",
      position: "Not prescribed as first-line treatment; may be considered based on individual preference but not a substitute for metformin in women with metabolic features or insulin resistance",
    },
    {
      option: "Metformin (Glucophage, generic)",
      evidence: "First-line PCOS treatment for metabolic features per all major international guidelines; reduces insulin resistance, lowers insulin levels and androgen levels, improves cycle regularity; greater efficacy than inositol",
      position: "Prescribed for women with PCOS and evidence of insulin resistance; irregular cycles who cannot tolerate OCPs; overweight or obese patients; impaired fasting glucose; dose titrated from 500mg to 1,000-1,500mg daily",
    },
    {
      option: "Combined Oral Contraceptive (COCP)",
      evidence: "First-line pharmacological treatment for menstrual irregularity and hyperandrogenism per 2023 Guideline; preference for lower ethinyl estradiol doses and anti-androgenic progestogens (drospirenone, cyproterone acetate)",
      position: "Primary pharmacological intervention for most non-pregnant women with PCOS; chosen based on dominant symptoms: drospirenone for cycles + acne; cyproterone acetate for significant hirsutism",
    },
    {
      option: "Letrozole (for PCOS-Related Fertility)",
      evidence: "Preferred first-line pharmacological ovulation induction agent for women with PCOS seeking pregnancy per 2023 Guideline; supersedes clomiphene; better live birth rates and fewer multiple pregnancies",
      position: "Women with PCOS seeking fertility are counselled that letrozole is evidence-preferred first-line; ovulation induction should be conducted with ultrasound monitoring; fertility centre referral if three cycles fail",
    },
  ];

  // Long-term Health Risks Table Data
  const healthRisksTableData = [
    {
      risk: "Type 2 Diabetes and Impaired Glucose Tolerance",
      level: "3 to 7 times higher risk than women without PCOS; impaired glucose tolerance affects 30-35% by 40s",
      monitoring: "Fasting glucose and HbA1c annually; 75g OGTT preferred at baseline; repeat every 3 years if normal",
      management: "Metformin if impaired fasting glucose or insulin resistance confirmed; lifestyle modification programme; weight management support",
    },
    {
      risk: "Cardiovascular Disease",
      level: "Associated with dyslipidaemia, hypertension and central obesity creating higher risk profile",
      monitoring: "Fasting lipid panel annually; blood pressure at every visit; waist circumference annually; 10-year CVD risk after 45",
      management: "Statin therapy if LDL meets criteria; antihypertensive management if BP persistently elevated; smoking cessation; exercise programme",
    },
    {
      risk: "Endometrial Cancer",
      level: "Approximately 3 times the risk; driven by irregular cycles without progesterone withdrawal",
      monitoring: "Menstrual cycle review at every visit; pelvic ultrasound if >3 months without period; endometrial biopsy if lining >7mm",
      management: "Endometrial protection is core treatment goal for all women with infrequent cycles; cyclical progestogen or OCPs to protect lining",
    },
    {
      risk: "Mental Health: Anxiety and Depression",
      level: "Significantly higher rates of anxiety, depression and body image distress; visible symptoms drive psychological distress",
      monitoring: "PHQ-9 or GAD-7 at initial assessment and annually; proactively ask about emotional wellbeing at every follow-up",
      management: "Psychological referral as standard component; treatment of visible symptoms has documented mental health benefit",
    },
    {
      risk: "Obstructive Sleep Apnoea (OSA)",
      level: "5 to 10 times higher prevalence than age and weight-matched women without PCOS",
      monitoring: "Screening for OSA symptoms at initial assessment; STOP-BANG questionnaire if symptoms suggest risk; formal sleep study if positive",
      management: "Specifically enquired about in PCOS assessment; OSA treatment (CPAP) has been shown to improve insulin sensitivity",
    },
  ];

  // PCOS at a Glance Table Data
  const pcosAtGlanceData = [
    {
      factor: "What PCOS Is",
      details: "Most common hormonal disorder in women of reproductive age; affects 8-13% globally, 10-20% of Malaysian women; polycystic ovaries contain multiple fluid-filled sacs; PCOS cannot be cured but symptoms are treatable"
    },
    {
      factor: "Signs and Symptoms of PCOS",
      details: "Irregular periods or absent menstrual cycle; excess hair growth (hirsutism); acne; female pattern hair loss; weight gain around abdomen; difficulty getting pregnant; polycystic ovaries on ultrasound; acanthosis nigricans"
    },
    {
      factor: "Rotterdam Diagnostic Criteria",
      details: "Requires 2 of 3 after excluding other causes: (1) clinical or biochemical hyperandrogenism; (2) ovulatory dysfunction; (3) polycystic ovaries on ultrasound or elevated AMH. Ultrasound not required when both hyperandrogenism and ovulatory dysfunction present."
    },
    {
      factor: "PCOS Treatment Goals",
      details: "Cycle regulation and contraception | Acne, hirsutism and hair loss management | Metabolic health and insulin resistance | Fertility and getting pregnant | Long-term health and endometrial protection"
    },
    {
      factor: "Is PCOS a Lifelong Hormonal Disorder?",
      details: "Yes. PCOS persists after menopause though reproductive manifestations resolve; metabolic risks continue to accumulate; women with PCOS need lifelong reproductive health plan with metabolic surveillance"
    },
  ];

  // Pricing Table Data
  const pricingItemsData = [
    { item: "Initial PCOS Consultation", details: "Symptom history, menstrual cycle assessment, physical examination for hyperandrogenism, blood pressure, weight, contraindication screening, blood tests requisition", price: "RM 150 to RM 300" },
    { item: "PCOS Blood Panel (Blood Tests)", details: "Total and free testosterone, LH, FSH, oestradiol, prolactin, AMH, fasting insulin, fasting glucose, HbA1c, lipid panel, SHBG, TSH, 17-OH progesterone", price: "RM 400 to RM 700" },
    { item: "Pelvic Ultrasound Scan", details: "Ovarian morphology assessment; endometrial thickness measurement; follicle count and distribution", price: "RM 150 to RM 350" },
    { item: "Oral Contraceptive Pills Prescription", details: "Pills to regulate menstrual periods and manage androgen levels; anti-androgenic progestogen preferred", price: "RM 30 to RM 120 per month" },
    { item: "Metformin Prescription", details: "Insulin resistance and metabolic PCOS treatment; titrated dosing from 500mg; extended-release available", price: "RM 20 to RM 60 per month" },
    { item: "Spironolactone Prescription", details: "Anti-androgen treatment for hirsutism and acne; 25 to 200mg daily; requires potassium monitoring", price: "RM 40 to RM 100 per month" },
    { item: "Laser Hair Removal for PCOS Hirsutism", details: "Nd:YAG 1064nm for Malaysian Fitzpatrick III-V skin; 6 to 10 sessions; combine with systemic anti-androgen treatment", price: "RM 150 to RM 500 per area per session" },
    { item: "Follow-Up PCOS Monitoring Consultation", details: "Menstrual cycle review, blood pressure, metabolic monitoring, treatment response assessment, annual long-term risk review", price: "RM 100 to RM 200 per visit" },
  ];

  // FAQs
  const faqs = [
    { q: "Can PCOS be cured permanently?", a: "There is no cure for pcos. Polycystic ovary syndrome is a chronic hormonal disorder that persists throughout a woman's reproductive life. However, many symptoms of polycystic ovary syndrome are treatable and with appropriate pcos treatment, women with PCOS can have regular menstrual cycles, clear skin, manageable hair growth, a healthy metabolic profile and successful pregnancies." },
    { q: "How is PCOS diagnosed in Malaysia?", a: "Pcos diagnosis uses the Rotterdam criteria, which require at least two of: clinical or biochemical hyperandrogenism (elevated androgen levels, acne, hirsutism or hair loss), ovulatory dysfunction (irregular or absent menstrual cycle), and polycystic ovaries on ultrasound scan or elevated AMH. The 2023 International PCOS Guideline clarifies that an ultrasound scan is NOT required when both hyperandrogenism and ovulatory dysfunction are present." },
    { q: "Does polycystic ovary syndrome cause infertility?", a: "Polycystic ovary syndrome is the most common cause of anovulatory infertility. However, most women with PCOS can conceive with appropriate pcos treatment. Letrozole is now the first-line ovulation induction agent per the 2023 International PCOS Guideline, preferred over clomiphene for better live birth rates and fewer multiple pregnancies." },
    { q: "What is the best diet for polycystic ovary syndrome?", a: "The 2023 International Evidence-Based PCOS Guideline states there is no single diet superior to others. Dietary approaches that reduce glycaemic load and improve insulin sensitivity have the most direct benefit. For Malaysian women, this means prioritising brown rice over white, reducing sweetened beverages including teh tarik and kopi, and including more vegetables with each meal." },
    { q: "Does losing weight manage PCOS symptoms?", a: "Weight loss in overweight or obese women with PCOS produces significant improvements in insulin resistance, menstrual cycle regularity, androgen levels and fertility outcomes. Studies show 5 to 10% body weight loss restores spontaneous ovulation in 30 to 50% of overweight women with PCOS. However, weight loss does not cure PCOS, and many lean women with PCOS also have significant hormonal imbalance." },
    { q: "Why does PCOS cause acne that does not respond to normal treatment?", a: "PCOS acne is driven by a hormonal imbalance, specifically elevated androgen levels that increase sebum production. Standard acne treatments address the skin-level consequence but do not suppress the androgen imbalance itself. Effective pcos treatment for acne requires systemic anti-androgen treatment as the foundation, with topical therapies as an adjunct." },
    { q: "Is inositol a good pcos treatment?", a: "The 2023 International Evidence-Based PCOS Guideline concluded that metformin has greater efficacy than inositol and that inositol offers limited clinical benefits. Inositol may be considered based on individual preference, but it is not a substitute for prescribed first-line pcos treatment in women with significant polycystic ovary syndrome." },
    { q: "Can PCOS cause hair loss?", a: "Yes. Female pattern hair loss (androgenic alopecia) is a recognised symptom of polycystic ovary syndrome. Elevated androgen levels cause progressive miniaturisation of scalp hair follicles. The most effective pcos treatment combines systemic anti-androgen treatment with topical minoxidil. Response is slow: 6 to 12 months is required to assess improvement." },
    { q: "What is acanthosis nigricans and does it mean I have PCOS?", a: "Acanthosis nigricans is velvety, darkened skin on the back of the neck, armpits and groin crease. It is a direct cutaneous marker of insulin resistance and hyperinsulinaemia. While it can occur without PCOS, its presence in a woman of reproductive age with other symptoms makes PCOS highly probable and warrants formal pcos diagnosis assessment." },
    { q: "Is the PCOS consultation at Nexus Clinic KL free?", a: "The initial PCOS assessment at Nexus Clinic KL is priced at RM 150 to RM 300 and includes a comprehensive menstrual cycle and symptoms history, physical examination for hyperandrogenic signs, blood tests panel requisition, pelvic ultrasound scan referral, and a follow-up appointment to review results and present the personalised pcos treatment plan with full pricing before any prescription is issued." },
  ];

  return (
    <div className="bg-light font-inter overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ backgroundColor: "#F3EFEE" }}
      >
        <div className="absolute inset-0 opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(172, 153, 144, 0.3)",
              }}
            >
              <HeartPulse className="w-4 h-4" style={{ color: "#8C4F58" }} />
              <span className="text-sm" style={{ color: "#4B3A33" }}>Women's Health</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-georgia mb-6 leading-tight"
              style={{ color: "#4B3A33" }}
            >
              PCOS Treatment Malaysia: Polycystic Ovary Syndrome Treatment
              <span className="block" style={{ color: "#8C4F58" }}>Matched to Your Phenotype | Nexus Clinic KL</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 max-w-3xl"
              style={{ color: "#AC9990" }}
            >
              PCOS (polycystic ovary syndrome) treatment in Malaysia for women with polycystic ovaries experiencing hormonal imbalance, insulin resistance, irregular periods and fertility challenges. Women with PCOS deserve hormonal treatment matched to their specific pcos symptoms. Book your free assessment today.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-12 max-w-2xl"
              style={{ color: "#4B3A33" }}
            >
              Irregular periods that arrive every two months or not at all. Acne on the jawline and chin that does not respond to the skincare routines that work for everyone else. Excess hair growth on the chin, upper lip or lower abdomen. Scalp hair loss that is thinning at 28. Weight that accumulates around the abdomen despite consistent effort. These are the pcos symptoms in women that many Malaysian women live with daily, and many of the symptoms of polycystic ovary syndrome are treatable in every case, even if there is no cure for pcos.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg"
                style={{ backgroundColor: "#8C4F58", color: "#FAF8F7" }}
              >
                Speak to a Doctor
              </motion.a>
              <Whatsapp message={"HI, can i get more info about PCOS treatment?"} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16"
        style={{ backgroundColor: "#FAF8F7" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl shadow-sm transition-all duration-300"
              style={{ backgroundColor: "#F3EFEE", border: "1px solid rgba(172, 153, 144, 0.2)" }}
            >
              <Award className="w-8 h-8 mb-4" style={{ color: "#8C4F58" }} />
              <p className="text-sm" style={{ color: "#4B3A33" }}>5,000+ Procedures Completed</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl shadow-sm transition-all duration-300"
              style={{ backgroundColor: "#F3EFEE", border: "1px solid rgba(172, 153, 144, 0.2)" }}
            >
              <Users className="w-8 h-8 mb-4" style={{ color: "#8C4F58" }} />
              <p className="text-sm" style={{ color: "#4B3A33" }}>15+ Years Combined Experience</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl shadow-sm transition-all duration-300"
              style={{ backgroundColor: "#F3EFEE", border: "1px solid rgba(172, 153, 144, 0.2)" }}
            >
              <Shield className="w-8 h-8 mb-4" style={{ color: "#8C4F58" }} />
              <p className="text-sm" style={{ color: "#4B3A33" }}>2023 International PCOS Guideline</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl shadow-sm transition-all duration-300"
              style={{ backgroundColor: "#F3EFEE", border: "1px solid rgba(172, 153, 144, 0.2)" }}
            >
              <MapPin className="w-8 h-8 mb-4" style={{ color: "#8C4F58" }} />
              <p className="text-sm" style={{ color: "#4B3A33" }}>Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* PCOS at a Glance Table - Using TableForPages */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20"
        style={{ backgroundColor: "#F3EFEE" }}
      >
        <TableForPages
          columns={[
            { key: "factor", header: "Factor", className: "font-semibold" },
            { key: "details", header: "Details" },
          ]}
          data={pcosAtGlanceData}
          title="PCOS Treatment in Malaysia at a Glance: Polycystic Ovary Syndrome, Symptoms and Treatment Options"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="container mx-auto px-4 md:px-8"
        />
        <p className="text-sm text-taupe text-center max-w-2xl mx-auto mt-4">
          Teede HJ et al. Recommendations from the 2023 International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome. 
          <a 
            href="https://pubmed.ncbi.nlm.nih.gov/37482811/" 
            target="_blank" 
            rel="nofollow" 
            className="text-wine font-bold italic"
          >
            The Journal of Clinical Endocrinology & Metabolism
          </a>. 
          2023;108(10):2447-2469. This global consensus provides the current clinical standard for PCOS diagnosis and management, emphasizing updated diagnostic criteria and personalized treatment pathways for metabolic, reproductive, and psychological health.
        </p>
      </motion.section>

      {/* PCOS Phenotypes Table - Using TableForPages */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20"
        style={{ backgroundColor: "#FAF8F7" }}
      >
        <TableForPages
          columns={[
            { key: "phenotype", header: "PCOS Phenotype", className: "font-semibold" },
            { key: "features", header: "Features Present" },
            { key: "concern", header: "Dominant Clinical Concern" },
            { key: "priority", header: "PCOS Treatment Priority" },
            { key: "risk", header: "Metabolic Risk" },
          ]}
          data={phenotypeTableData}
          title="Polycystic Ovary Syndrome Phenotypes: The PCOS Treatment Matching Framework"
          subtitle="The Rotterdam diagnostic criteria recognise four distinct PCOS phenotypes that differ in which features are present and which clinical concerns are dominant. Understanding which phenotype a woman has changes which pcos treatment is the first priority."
          variant="detailed"
          fadeInUp={fadeInUp}
          className="container mx-auto px-4 md:px-8"
        />
        <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center max-w-3xl mx-auto" style={{ backgroundColor: "#4B3A33" }}>
          <p className="text-white">Find Out Your PCOS Phenotype and Get a Matched Treatment Plan at Nexus Clinic KL</p>
        </motion.div>
      </motion.section>

      {/* PCOS Skin Manifestations Table - Using TableForPages */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20"
        style={{ backgroundColor: "#F3EFEE" }}
      >
        <TableForPages
          columns={[
            { key: "sign", header: "PCOS Skin Sign", className: "font-semibold" },
            { key: "presentation", header: "How It Presents in Malaysian Skin" },
            { key: "mechanism", header: "Underlying Hormonal Mechanism" },
            { key: "treatment", header: "Integrated PCOS Treatment" },
          ]}
          data={skinManifestationsTableData}
          title="Symptoms of PCOS on the Skin: Androgen Imbalance and Hormonal Signs in Malaysian Women"
          subtitle="For many Malaysian women with PCOS, the skin is where the hormonal disorder first becomes visible. Treating these manifestations cosmetically without addressing the underlying androgen imbalance produces only temporary relief."
          variant="detailed"
          fadeInUp={fadeInUp}
          className="container mx-auto px-4 md:px-8"
        />
          <p className="text-center max-w-2xl mx-auto text-sm text-taupe">
            For Malaysian women whose PCOS acne has left post-inflammatory hyperpigmentation marks on the lower face and jawline, our{' '}
            <Link href="/skin/acne-scar-treatment-malaysia/" className="text-wine font-bold italic">
              acne scar treatment in Malaysia
            </Link>{' '}
            provides context on addressing the PIH component after hormonal control is achieved.
          </p>
      </motion.section>

      {/* PCOS Treatment Evidence Table - Using TableForPages */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20"
        style={{ backgroundColor: "#FAF8F7" }}
      >
        <TableForPages
          columns={[
            { key: "option", header: "PCOS Treatment Option", className: "font-semibold" },
            { key: "evidence", header: "What the Evidence Shows" },
            { key: "position", header: "The Nexus Clinic KL Position" },
          ]}
          data={treatmentEvidenceTableData}
          title="Honest PCOS Treatment Evidence: Inositol, Metformin, COCP and Letrozole for Polycystic Ovary Syndrome"
          subtitle="Inositol supplements are heavily marketed to Malaysian women with PCOS. The 2023 International Evidence-Based PCOS Guideline explicitly states that metformin has greater efficacy than inositol and that inositol offers limited clinical benefits."
          variant="detailed"
          fadeInUp={fadeInUp}
          className="container mx-auto px-4 md:px-8"
        />
        <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center max-w-3xl mx-auto" style={{ backgroundColor: "#4B3A33" }}>
          <p className="text-white">Replace Guesswork with Evidence: Get a Proper PCOS Treatment Plan at Nexus Clinic KL</p>
        </motion.div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20"
        style={{ backgroundColor: "#F3EFEE" }}
      >
        <TableForPages
          columns={[
            { key: "risk", header: "Long-Term Health Risk", className: "font-semibold" },
            { key: "level", header: "Risk Level" },
            { key: "monitoring", header: "Monitoring Parameter" },
            { key: "management", header: "How Nexus Clinic KL Manages Risk" },
          ]}
          data={healthRisksTableData}
          title="Managing PCOS Long-Term: Health Risks Associated with Polycystic Ovary Syndrome in Malaysia"
          subtitle="PCOS is a lifelong hormonal disorder. The 2023 International PCOS Guideline explicitly recommends a lifelong reproductive health plan including metabolic surveillance."
          variant="detailed"
          fadeInUp={fadeInUp}
          className="container mx-auto px-4 md:px-8"
        />
      <p className="text-center max-w-2xl mx-auto text-sm text-taupe">
        For women with PCOS experiencing hormonal skin concerns that persist alongside their PCOS management, our{' '}
        <Link href="/skin/pigmentation-treatment-malaysia/" className="text-wine font-bold italic">
          pigmentation treatment in Malaysia
        </Link>{' '}
        provides a broader framework for addressing PIH and skin discolouration that accompany polycystic ovary syndrome in Malaysian skin.
      </p>
      </motion.section>

      {/* Treatment Process Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#FAF8F7" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia mb-12 text-center"
            style={{ color: "#4B3A33" }}
          >
            The PCOS Assessment and PCOS Treatment Process at Nexus Clinic KL
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Comprehensive PCOS Assessment", desc: "Detailed history covering menstrual cycle pattern, symptoms, weight trajectory, family history, fertility goals. Physical examination for hyperandrogenic signs. Blood tests and pelvic ultrasound referral.", icon: ClipboardList },
              { step: 2, title: "Diagnosis Review & Phenotype Identification", desc: "Review all blood tests, confirm Rotterdam criteria, identify PCOS phenotype, explain treatment priorities and realistic timelines.", icon: Stethoscope },
              { step: 3, title: "PCOS Treatment Initiation", desc: "Treatment plan built around primary goals: cycle regulation, hyperandrogenism management, metabolic health, or fertility. Prescriptions with written instructions.", icon: Calendar },
              { step: 4, title: "Ongoing Monitoring", desc: "3-month reviews in first year, annual reviews thereafter. Metabolic screening, blood pressure, symptom assessment, mental health screening, endometrial surveillance.", icon: Timer },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg"
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
            Start Your Properly Managed PCOS Journey at Nexus Clinic KL | Phenotype-Matched from Day One
          </motion.p>
        </div>
      </motion.section>

      {/* Pricing Table - Using TableForPages */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20"
        style={{ backgroundColor: "#F3EFEE" }}
      >
        <TableForPages
          columns={[
            { key: "item", header: "Service / PCOS Treatment", className: "font-semibold" },
            { key: "details", header: "Details" },
            { key: "price", header: "Price Range (RM) 2026" },
          ]}
          data={pricingItemsData}
          title="PCOS Treatment Cost in Malaysia 2026: Transparent Pricing at Nexus Clinic KL"
          subtitle="Annual management cost for polycystic ovary syndrome at Nexus Clinic KL is typically RM 3,000 to RM 7,000 including initial workup, blood tests, ongoing medication, follow-up consultations and annual monitoring."
          variant="detailed"
          fadeInUp={fadeInUp}
          className="container mx-auto px-4 md:px-8"
        />
        <motion.div variants={fadeInUp} className="text-center mt-8">
          <p className="text-lg" style={{ color: "#4B3A33" }}>
            Get Your PCOS Treatment Programme Pricing at Nexus Clinic KL | Free Assessment
          </p>
        </motion.div>
      </motion.section>

      {/* Why Nexus Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#FAF8F7" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia mb-6"
            style={{ color: "#4B3A33" }}
          >
            Phenotype-Matched PCOS Treatment Malaysia: Managing Polycystic Ovary Syndrome at Nexus Clinic KL
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8 max-w-4xl mx-auto"
            style={{ color: "#AC9990" }}
          >
            Polycystic ovary syndrome in Malaysia is under-diagnosed, under-treated and over-supplemented. An estimated 10 to 20% of Malaysian women of reproductive age have PCOS. Nearly half have poor knowledge about the hormonal disorder. Many are spending RM 100 to RM 200 per month on supplements with limited clinical evidence instead of receiving evidence-based assessment and pharmaceutical pcos treatment.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-12 max-w-4xl mx-auto"
            style={{ color: "#4B3A33" }}
          >
            At Nexus Clinic KL, PCOS management begins with phenotype identification, proceeds to goal-matched pcos treatment selection and is sustained with the long-term monitoring framework that a lifelong hormonal disorder requires. Our licensed doctors bring over 15 years of combined experience and have completed over 5,000 procedures.
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="p-8 rounded-3xl max-w-3xl mx-auto transition-all duration-300 hover:shadow-xl"
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
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ backgroundColor: "#8C4F58" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={staggerContainer} className="max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-georgia mb-6 text-white">
              Book Your PCOS Assessment at Nexus Clinic KL
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/90 mb-8 text-lg">
              Wisma UOA II, Kuala Lumpur | Call or WhatsApp Today
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300"
                style={{ background: "white", color: "#8C4F58" }}
              >
                Book Your PCOS Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>

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
    </div>
  );
};

export default PCOSPage;