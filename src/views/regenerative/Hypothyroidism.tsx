"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Heart,
  CheckCircle2,
  ChevronRight,
  Scale,
  Droplets,
  Users,
  HeartPulse,
  MapPin,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
const HypothyroidLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "regenerative/hypothyroidism");

  const realLifeItems = [
    { icon: Activity, key: "r1" },
    { icon: Scale, key: "r2" },
    { icon: Droplets, key: "r3" },
    { icon: Heart, key: "r4" },
    { icon: Users, key: "r5" },
  ];


  const  faqData = [
    {
      q: "What is hypothyroidism and how common is it in Malaysia?",
      a: "Hypothyroidism occurs when the thyroid gland does not produce enough thyroid hormone for the body's needs. Hypothyroidism is a common endocrine disorder affecting approximately 1 in 50 people in Malaysia, with women and those over 60 at significantly higher risk. It is the most prevalent thyroid disorder in Malaysia. Hypothyroidism is a common condition that is significantly undiagnosed because its symptoms of hypothyroidism develop gradually and overlap with many other common conditions including depression, anaemia and perimenopause. A simple TSH blood test is all that is required to identify whether hypothyroidism is present."
    },
    {
      q: "What are the most common hypothyroidism symptoms in Malaysian women?",
      a: "The most common hypothyroidism symptoms in Malaysian women include persistent fatigue that is not relieved by sleep, unexplained weight gain, cold intolerance (feeling cold in air-conditioned offices when colleagues are comfortable), low mood and depression, hair loss or thinning, dry skin, brain fog and poor concentration, and irregular or heavy menstrual periods. These symptoms of hypothyroidism are the same in Malaysian women as globally but are frequently attributed to work stress, iron deficiency, ageing or perimenopause before thyroid function is investigated. The combination of fatigue plus cold intolerance plus weight gain in a Malaysian woman under 60 is a particularly strong clinical indicator that warrants a TSH blood test as the first investigation."
    },
    {
      q: "How is hypothyroidism diagnosed?",
      a: "The diagnosis of hypothyroidism begins with a clinical history of hypothyroidism symptoms and a physical examination of the thyroid gland and for clinical signs of underactive thyroid including goitre, bradycardia, dry skin and delayed tendon reflexes. The primary blood test for hypothyroidism diagnosis is the TSH (thyroid-stimulating hormone) test: a high TSH level indicates the pituitary gland is working harder to stimulate an underperforming thyroid gland. A low FT4 combined with high TSH confirms overt hypothyroidism. A normal FT4 with high TSH defines subclinical hypothyroidism. Anti-TPO antibody testing identifies whether Hashimoto's thyroiditis is the autoimmune cause. At Nexus Clinic KL, the hypothyroidism diagnosis process follows the physical examination with a structured blood test panel and the results are interpreted in the full clinical context rather than by blood test numbers alone."
    },
    {
      q: "What is the difference between overt and subclinical hypothyroidism?",
      a: "Overt hypothyroidism is defined by a high TSH blood test result combined with a low FT4; this combination confirms that the thyroid gland is not producing enough thyroid hormone to meet the body's needs and that clinical hypothyroidism symptoms are present or will develop; overt hypothyroidism requires prompt levothyroxine treatment in virtually all patients. Subclinical hypothyroidism is defined by a high TSH blood test result with a normal FT4; the thyroid gland is producing sufficient thyroid hormone for now but the pituitary is working harder than normal to maintain it; whether to treat subclinical hypothyroidism with levothyroxine depends on the TSH level, the patient's age, the presence of hypothyroidism symptoms, anti-TPO antibody status and pregnancy."
    },
    {
      q: "What is Hashimoto's thyroiditis and does it cause hypothyroidism?",
      a: "Hashimoto's thyroiditis is an autoimmune disease in which the immune system produces antibodies (anti-TPO antibodies) that progressively destroy thyroid gland tissue; it is the most common cause of hypothyroidism in iodine-sufficient countries including Malaysia. Hypothyroidism from Hashimoto's thyroiditis develops gradually as the autoimmune attack reduces the number of functioning thyroid cells; TSH rises progressively and eventually FT4 falls, at which point overt hypothyroidism is confirmed on blood test and levothyroxine treatment is initiated. Hashimoto's thyroiditis is confirmed by a positive anti-TPO antibody result on blood test; the presence of anti-TPO antibodies identifies patients with subclinical hypothyroidism who are at higher risk of progression to overt hypothyroidism and who typically benefit from earlier levothyroxine treatment."
    },
    {
      q: "Is levothyroxine the only treatment for hypothyroidism?",
      a: "Levothyroxine (synthetic thyroxine) is the evidence-based first-line hypothyroidism treatment endorsed by all major clinical practice guidelines including the American Thyroid Association and AACE. It is the gold standard because it provides a pure, consistent dose of thyroxine that can be precisely titrated using TSH blood test results. Desiccated thyroid extract, which contains both T3 and T4 from animal thyroid glands, is an alternative that some patients prefer, but it is not recommended as first-line treatment in current clinical practice guidelines because of the difficulty in achieving consistent dosing and the potential for excess T3 exposure. For most Malaysian patients, levothyroxine monotherapy achieves excellent symptom control and normalises TSH blood test results when taken correctly and at the appropriate dosage."
    },
    {
      q: "What complications can untreated hypothyroidism cause?",
      a: "The complications of hypothyroidism from prolonged untreated thyroid hormone deficiency include dyslipidaemia (elevated LDL cholesterol and total cholesterol), hypertension, coronary artery disease, heart failure and pericardial effusion from the cardiovascular effects of thyroid hormone deficiency; peripheral neuropathy, cognitive decline and depression from the neurological effects; myxedema, the characteristic non-pitting facial and periorbital swelling from mucopolysaccharide accumulation in the dermis that represents advanced untreated hypothyroidism; and in the most severe cases, myxedema coma, which is a life-threatening endocrine emergency with high mortality. In pregnancy, undiagnosed or inadequately treated hypothyroidism significantly increases the risk of miscarriage, premature birth, preeclampsia and impaired foetal brain development. In infants, undiagnosed congenital hypothyroidism causes irreversible intellectual disability. Early diagnosis through blood test screening prevents all of these complications."
    },
    {
      q: "Does hypothyroidism require lifelong treatment?",
      a: "Whether hypothyroidism treatment is lifelong depends on the underlying cause. Hashimoto's thyroiditis-related hypothyroidism is typically lifelong because the autoimmune disease progressively destroys thyroid gland tissue and the thyroid gland does not regenerate; once levothyroxine treatment is initiated for Hashimoto's hypothyroidism, it is almost always required permanently. Post-thyroid surgery hypothyroidism (particularly after total thyroidectomy) requires lifelong levothyroxine as the thyroid gland has been removed. Congenital hypothyroidism requires lifelong treatment. Some causes of hypothyroidism, such as postpartum thyroiditis, may be transient, with thyroid function recovering spontaneously within 12 to 18 months in a significant proportion of affected women; these patients are monitored with serial TSH blood tests before a decision to continue or discontinue levothyroxine is made."
    },
    {
      q: "Can hypothyroidism affect fertility and pregnancy?",
      a: "Yes. Hypothyroidism is one of the most important and readily treatable causes of subfertility in Malaysian women. Thyroid hormone deficiency disrupts the hypothalamic-pituitary-ovarian axis, causing irregular menstrual cycles, anovulation and reduced fertility. Women with hypothyroidism who are trying to conceive should have their TSH blood test levels maintained below 2.5 mIU/L for optimal fertility outcomes; this is the same TSH target recommended during the first trimester of pregnancy. Undiagnosed or inadequately treated hypothyroidism in pregnancy significantly increases the risk of miscarriage, premature birth, preeclampsia and impaired foetal neurological development. Women with known hypothyroidism should contact Nexus Clinic KL as soon as pregnancy is confirmed for urgent TSH blood test review and levothyroxine dosage adjustment."
    },
    {
      q: "Is the hypothyroidism consultation at Nexus Clinic KL free?",
      a: "The initial hypothyroidism assessment at Nexus Clinic KL is priced at RM 150 to RM 300 and includes a comprehensive hypothyroidism symptoms history, hypothyroidism risk factors review, physical examination of the thyroid gland and clinical signs of underactive thyroid, blood test requisition for the TSH, FT4 and anti-TPO antibody panel, and a follow-up appointment to review blood test results and present the personalised treatment plan with full pricing before any prescription is issued. The diagnosis of hypothyroidism, the cause identified through blood test and physical examination, and the appropriate treatment approach are all discussed in detail before levothyroxine is prescribed. Nexus Clinic KL is located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia."
    },
  ]
  return (
    <>
      <main className="min-h-screen bg-light font-['Inter']">
        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
              alt="Medical professional consulting with patient about thyroid health"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent"></div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="inline-flex items-center gap-2 bg-wine/10 text-wine px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
                  <HeartPulse className="w-4 h-4" />
                  Hypothyroidism Treatment Malaysia: Underactive Thyroid and Endocrine Thyroid Disorder Management | Nexus Clinic KL
                </span>
                <h2 className="font-['Georgia'] text-3xl lg:text-5xl xl:text-6xl font-bold text-brown leading-tight mb-6">
                  Hypothyroidism Treatment Malaysia: Managing Underactive Thyroid with Evidence-Based Care
                </h2>
                <p className="text-xl text-taupe mb-8">
                  Hypothyroidism is a common endocrine disorder that affects millions of people worldwide and is significantly undiagnosed in Malaysia. When the thyroid gland produces insufficient thyroid hormone, the resulting hormone deficiency slows the metabolism of virtually every organ in the body.
                </p>
                <p className="text-lg text-rose mb-8">
                  In Malaysia, thyroid disease affects approximately 1 in 50 people, with women and those over 60 at the highest risk of hypothyroidism, yet the condition remains undiagnosed in a significant proportion of those affected.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact-us/"
                    className="bg-wine text-white px-8 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    Book Your Hypothyroidism Assessment <ChevronRight className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact-us/"
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full font-semibold hover:bg-wine hover:text-white transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  >
                    Free Assessment
                  </motion.a>
                </div>
              </motion.div>
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                  <div className="absolute -top-4 -right-4 bg-wine text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Nexus Clinic KL
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">Evidence-based levothyroxine treatment with regular TSH monitoring</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">From congenital hypothyroidism to Hashimoto's thyroiditis diagnosis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">Physical examination and blood test with hypothyroidism symptoms assessment</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Hypothyroidism and Underactive Thyroid in Malaysia: At a Glance Table */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <TableForPages
              columns={[
                { key: "factor", header: "Factor", className: "font-semibold" },
                { key: "details", header: "Details" },
              ]}
              data={[
                {
                  factor: "What Hypothyroidism Is",
                  details: "Hypothyroidism is a common endocrine disorder in which the thyroid gland produces insufficient thyroid hormone for the body's metabolic needs; hypothyroidism occurs when the thyroid gland fails to produce enough thyroid hormone; the resulting thyroid hormone deficiency slows metabolism, affecting nearly every organ system; it is the most common thyroid disorder worldwide and is significantly undiagnosed in Malaysia; hypothyroidism is a common, manageable condition when identified through appropriate blood test screening"
                },
                {
                  factor: "Malaysian Prevalence",
                  details: "Thyroid problems affect approximately 1 in 50 people in Malaysia and are more common in women than in men; hypothyroidism is disproportionately undiagnosed in Malaysian primary care because its symptoms overlap with many other common conditions; thyroid disorder prevalence is higher in Malaysian women and in individuals over 60 years of age; early diagnosis through blood test screening significantly improves management outcomes"
                },
                {
                  factor: "Types of Hypothyroidism",
                  details: "Primary hypothyroidism: the thyroid gland itself fails to produce enough thyroid hormone; accounts for over 95% of all cases; most commonly caused by Hashimoto's thyroiditis (autoimmune thyroiditis) or following thyroid surgery or radioactive iodine treatment for overactive thyroid or thyroid cancer | Secondary hypothyroidism: the pituitary gland fails to produce enough thyroid-stimulating hormone (TSH) to signal the thyroid; rare but important to identify | Congenital hypothyroidism: present at birth due to absent or abnormal thyroid gland development; congenital hypothyroidism requires early diagnosis and urgent levothyroxine treatment to prevent cognitive impairment | Subclinical hypothyroidism: elevated TSH with normal thyroxine (T4) levels; may or may not require treatment depending on TSH level, age and symptoms"
                },
                {
                  factor: "Key Hormones",
                  details: "TSH (thyroid-stimulating hormone): produced by the pituitary gland to signal the thyroid to produce T3 and T4; high TSH levels indicate the pituitary is working harder to stimulate an underperforming thyroid; elevated TSH is the primary marker used to diagnose hypothyroidism | T4 (thyroxine): the main thyroid hormone secreted by the thyroid gland; converted to the active T3 in peripheral tissues | T3 (triiodothyronine): the active thyroid hormone that drives metabolic function at the cellular level; T3 and T4 levels together with TSH provide the full picture | FT4 (free thyroxine): the unbound, biologically active fraction of T4; low FT4 confirms overt hypothyroidism when TSH is elevated"
                },
                {
                  factor: "Treatment Overview",
                  details: "Hypothyroidism treatment with levothyroxine (synthetic thyroxine) is the evidence-based standard of care; levothyroxine replaces the thyroxine the thyroid gland is not producing enough of; dosage is titrated to normalise TSH and FT4 levels; most patients require lifelong treatment; the clinical practice guidelines of the American Thyroid Association and American Association of Clinical Endocrinologists support levothyroxine monotherapy as the first-line hypothyroidism treatment for all patient groups"
                },
              ]}
              title="Hypothyroidism and Underactive Thyroid in Malaysia: At a Glance"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />
            <p className="text-sm text-taupe text-center max-w-2xl mx-auto">
              Garber JR et al. Clinical practice guidelines for hypothyroidism in adults: cosponsored by the American Association of Clinical Endocrinologists and the American Thyroid Association. 
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/22954017/" 
                target="_blank" 
                rel="nofollow" 
                className="text-wine font-bold italic"
              >
                Thyroid
              </a>. 
              2012;22(12):1200-1235. These comprehensive clinical guidelines establish the gold standard for the diagnosis and management of adult hypothyroidism, providing evidence-based protocols for TSH screening, levothyroxine therapy, and monitoring.
            </p>
          </motion.div>
        </section>

        {/* Causes of Hypothyroidism Table */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <TableForPages
              columns={[
                { key: "cause", header: "Cause", className: "font-semibold" },
                { key: "mechanism", header: "Mechanism" },
                { key: "risk", header: "Who Is at Risk" },
                { key: "implication", header: "Clinical Implication at Nexus Clinic KL" },
              ]}
              data={[
                {
                  cause: "Hashimoto's Thyroiditis (Most Common Cause of Hypothyroidism)",
                  mechanism: "Hashimoto's thyroiditis is the most common cause of hypothyroidism in iodine-sufficient countries including Malaysia; it is an autoimmune disease in which the immune system produces antibodies (anti-TPO and anti-thyroglobulin) that attack and progressively destroy thyroid gland tissue; the thyroid gland gradually loses its ability to produce enough thyroid hormone as destruction proceeds; thyroid function decline is typically gradual over years; TSH rises progressively as the thyroid gland produces less thyroxine",
                  risk: "Women are 5 to 10 times more likely than men to develop Hashimoto's thyroiditis; risk is highest between ages 30 and 50; autoimmune disease family history is a significant hypothyroidism risk factor; women with other autoimmune conditions (Type 1 diabetes, rheumatoid arthritis, vitiligo) are at higher risk",
                  implication: "Anti-TPO antibody testing is included in the initial thyroid blood test panel at Nexus Clinic KL; confirming Hashimoto's thyroiditis as the cause of hypothyroidism changes the long-term management expectations (the condition is typically progressive and lifelong treatment with levothyroxine is expected); management of thyroid disorders caused by Hashimoto's thyroiditis focuses on TSH normalisation rather than addressing the autoimmune process directly"
                },
                {
                  cause: "Post-Thyroid Surgery or Radioactive Iodine Treatment",
                  mechanism: "Surgical removal of part or all of the thyroid gland for thyroid cancer, goitre or overactive thyroid (hyperthyroidism) removes the source of thyroid hormone production; total thyroidectomy produces complete hypothyroidism requiring immediate and lifelong levothyroxine replacement; partial thyroidectomy may result in hypothyroidism as the remaining thyroid gland tissue may not produce enough thyroid hormone; radioactive iodine treatment for overactive thyroid or thyroid cancer progressively destroys thyroid gland tissue, with hypothyroidism occurring in up to 80% of patients within the first year after treatment",
                  risk: "All patients who have undergone total thyroidectomy; patients who have had radioactive iodine treatment for overactive thyroid or thyroid cancer; patients who have had partial thyroidectomy and develop rising TSH on follow-up blood test; these patients require lifelong thyroid function blood test monitoring",
                  implication: "Post-surgical and post-radioactive iodine hypothyroidism is entirely predictable and expected; at Nexus Clinic KL, these patients are started on levothyroxine without delay; the dosage is titrated using TSH and FT4 blood test results; the goal is normalisation of TSH levels within the target range defined by clinical practice guidelines"
                },
                {
                  cause: "Secondary Hypothyroidism (Pituitary Gland Failure)",
                  mechanism: "Secondary hypothyroidism arises when the pituitary gland fails to produce enough thyroid-stimulating hormone (TSH) to signal the thyroid gland to produce thyroid hormone; because the pituitary gland is not secreting adequate TSH, the TSH level is characteristically low or normal (not high as in primary hypothyroidism) despite low thyroid hormone levels; this can occur due to pituitary tumours, pituitary surgery, radiation therapy to the pituitary region or infiltrative disease affecting the pituitary gland; secondary hypothyroidism is rare but clinically important because the TSH-based diagnosis of primary hypothyroidism does not apply",
                  risk: "Patients with known pituitary disease, pituitary tumours or a history of pituitary surgery or radiation; patients with multiple hormone deficiencies; patients with unexplained low T4 but low or normal TSH levels on blood test",
                  implication: "At Nexus Clinic KL, patients with a clinical picture suggesting secondary hypothyroidism (low FT4 with low or normal TSH on blood test rather than high TSH levels) are assessed for pituitary disease and referred to an endocrinologist; secondary hypothyroidism cannot be diagnosed or managed using TSH levels alone; management of thyroid disorders in this context requires assessment of the full pituitary hormone axis, not just the thyroid function blood test"
                },
                {
                  cause: "Iodine Deficiency",
                  mechanism: "The thyroid gland produces thyroxine using iodine as a raw material; iodine deficiency prevents the thyroid gland from producing enough thyroid hormone even when the gland is structurally normal; chronic iodine deficiency can lead to thyroid gland enlargement (goitre) as the thyroid tissue expands in an attempt to capture more circulating iodine; goitre from iodine deficiency is more prevalent in rural areas of Malaysia and among communities with low intake of seafood and iodised salt; thyroid cancer risk is also associated with long-standing iodine deficiency and goitre",
                  risk: "People living in iodine-deficient regions; those with dietary restriction of iodine-rich foods; populations relying on cassava as a dietary staple (cassava is goitrogenic and can worsen thyroid disease in iodine-deficient individuals); rural Malaysian communities with low iodised salt consumption",
                  implication: "Dietary assessment is part of the hypothyroidism clinical assessment at Nexus Clinic KL; patients with goitre and suspected dietary iodine deficiency are assessed with thyroid ultrasound and thyroid function blood test; iodine sufficiency through dietary means (seafood, iodised salt, dairy) is discussed alongside levothyroxine treatment where hypothyroidism is confirmed; iodine supplementation without medical assessment is not recommended as excess iodine can worsen certain types of thyroid disorder"
                },
                {
                  cause: "Congenital Hypothyroidism",
                  mechanism: "Congenital hypothyroidism is present at birth and occurs when the thyroid gland fails to develop normally or is absent, or when the enzymatic pathway for thyroid hormone production is defective; congenital hypothyroidism is the most common preventable cause of intellectual disability worldwide if left untreated; the thyroid gland in congenital hypothyroidism produces insufficient thyroid hormone from birth, depriving the developing brain of the thyroid hormone it requires for normal neurological development; neonatal screening programmes for congenital hypothyroidism using TSH measurement from heel-prick blood test samples on day 3 to 5 of life are the international standard for early diagnosis",
                  risk: "Newborns; detected through neonatal screening blood test programmes; more common in infants born with Down's syndrome; congenital hypothyroidism affects approximately 1 in 2,000 to 1 in 4,000 newborns globally; early diagnosis and treatment with levothyroxine is critical",
                  implication: "Congenital hypothyroidism requires immediate levothyroxine treatment upon diagnosis; delayed treatment results in irreversible intellectual disability and developmental delay; parents of infants with a positive congenital hypothyroidism screening result should seek specialist paediatric endocrinology assessment urgently; at Nexus Clinic KL, adolescents and adults with known childhood hypothyroidism diagnosed as congenital hypothyroidism are transitioned to adult hypothyroidism management with regular TSH and FT4 blood test monitoring"
                },
              ]}
              title="Causes of Hypothyroidism: From Hashimoto's Thyroiditis to Congenital Hypothyroidism and Secondary Hypothyroidism"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

            {/* Clinical Summary */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-8 p-6 bg-wine/10 rounded-2xl"
            >
              <p className="text-taupe">
                The congenital hypothyroidism row in this table deserves particular emphasis for Malaysian parents. Congenital hypothyroidism is present at birth and requires early diagnosis and treatment within the first weeks of life to prevent irreversible intellectual disability. Malaysia's national neonatal screening programme includes TSH screening from a heel-prick blood test at day 3 to 5 of life; a positive congenital hypothyroidism screen must be followed up urgently with a confirmatory thyroid function blood test and levothyroxine initiated as soon as congenital hypothyroidism is confirmed.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Hypothyroidism Symptoms Table */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
              <TableForPages
                columns={[
                  { key: "category", header: "Symptom Category", className: "font-semibold" },
                  { key: "symptoms", header: "Signs and Symptoms of Hypothyroidism" },
                  { key: "confusion", header: "Why These Symptoms Arise and What Else They May Be Confused With" },
                ]}
                data={[
                  {
                    category: "Metabolic and Energy Symptoms",
                    symptoms: "Fatigue that is not relieved by sleep; unexplained weight gain despite unchanged diet; cold intolerance (feeling cold when others are comfortable); low body temperature; slowed heart rate (bradycardia); constipation; slow reflexes; these metabolic symptoms of hypothyroidism arise because thyroid hormone is the primary driver of metabolic rate in every cell",
                    confusion: "These symptoms of hypothyroidism are frequently attributed to normal ageing, iron deficiency anaemia, depression or simple fatigue in Malaysian clinical practice; cold intolerance is a particularly distinctive symptom of underactive thyroid that differentiates hypothyroidism from most other causes of fatigue; unexplained weight gain with cold intolerance together have moderate specificity for hypothyroidism and should prompt a TSH blood test even when symptoms develop gradually"
                  },
                  {
                    category: "Neurological and Cognitive Symptoms",
                    symptoms: "Brain fog; poor memory; slowed thinking; depression; cognitive decline in older patients; peripheral neuropathy (numbness and tingling in hands and feet); carpal tunnel syndrome; these cognitive hypothyroidism symptoms reflect the critical role thyroid hormone plays in neuronal function and synaptic transmission across the brain and peripheral nervous system",
                    confusion: "Cognitive symptoms of hypothyroidism are the most commonly misattributed category; depression, brain fog and poor memory in a Malaysian woman in her 40s are often attributed to stress or perimenopause before a thyroid function blood test is considered; a TSH blood test should be included in the initial workup of any new-onset depression or unexplained cognitive change at any age; at Nexus Clinic KL, thyroid function is screened in every patient presenting with fatigue, depression or unexplained weight gain"
                  },
                  {
                    category: "Musculoskeletal Symptoms",
                    symptoms: "Muscle aches, cramps and stiffness; joint pain and swelling; muscle weakness; slow muscle recovery after exercise; in severe untreated hypothyroidism, myopathy (muscle disease) and myxedema coma can occur; myxedema refers to the characteristic non-pitting swelling (oedema) around the eyes, face, hands and feet that develops from mucopolysaccharide accumulation in the dermis and subcutaneous tissues when thyroid hormone levels are severely deficient",
                    confusion: "Muscle aches and joint pain from hypothyroidism are frequently attributed to arthritis, fibromyalgia or ageing before thyroid function blood test is considered; the presence of periorbital or facial puffiness (early myxedema) alongside muscle symptoms and fatigue should specifically prompt TSH testing; myxedema in its severe form represents advanced untreated hypothyroidism and is a medical emergency; early diagnosis prevents the progression to this severe stage"
                  },
                  {
                    category: "Skin, Hair and Reproductive Symptoms",
                    symptoms: "Dry, coarse skin; pale or yellowed skin tone; brittle nails; diffuse hair loss and thinning (telogen effluvium); coarsening of facial features; irregular or heavy menstrual periods; reduced fertility; high-risk pregnancy complications (miscarriage, premature birth, preeclampsia) if hypothyroidism is undiagnosed or poorly treated in pregnancy; in men, reduced libido and erectile dysfunction from the hormonal imbalance that low thyroid hormone creates",
                    confusion: "Diffuse hair loss from hypothyroidism is commonly attributed to nutritional deficiency or stress before thyroid function blood test is considered; menstrual irregularity from hypothyroidism is often managed with hormonal contraception without investigating the thyroid disorder as the underlying cause; hypothyroidism is one of the most important treatable causes of subfertility in Malaysian women and should be screened with TSH blood test in any woman presenting with fertility concerns or irregular cycles"
                  },
                  {
                    category: "Cardiovascular Symptoms",
                    symptoms: "Elevated cholesterol (dyslipidaemia); raised blood pressure; slow pulse; increased risk of coronary artery disease; pericardial effusion (fluid around the heart) in severe hypothyroidism; the cardiovascular complications of hypothyroidism result from the effect of thyroid hormone deficiency on lipid metabolism, cardiac contractility and vascular tone; LDL and total cholesterol rise when thyroid hormone levels are inadequate",
                    confusion: "Dyslipidaemia and elevated cholesterol in a Malaysian patient on no lipid-lowering medication should prompt consideration of undiagnosed hypothyroidism; treating the dyslipidaemia with statins without identifying the hypothyroidism as the underlying cause is a management error that results in continued thyroid hormone deficiency and persistent cardiovascular risk; at Nexus Clinic KL, thyroid function blood test is included in the initial assessment of any Malaysian patient presenting with unexplained dyslipidaemia"
                  },
                ]}
                title="Hypothyroidism Symptoms: Signs and Symptoms of Underactive Thyroid by System in Malaysia"
                variant="detailed"
                fadeInUp={fadeInUp}
                className="py-20 px-4"
              />

              <motion.div 
                variants={fadeInUp} 
                className="mt-8 p-6 bg-wine/10 rounded-2xl"
              >
                <p className="text-taupe text-center">
                  The cardiovascular row in this symptoms table is the most clinically consequential for Malaysian patients and their healthcare professionals. Dyslipidaemia, elevated LDL cholesterol and raised blood pressure are all established complications of hypothyroidism that are frequently managed as independent conditions without the hypothyroidism being identified as the underlying common driver.
                </p>
                <p className="text-center text-taupe">
                  For women whose hypothyroidism symptoms overlap significantly with perimenopause, our{' '}
                  <Link href="/regenerative/hormone-replacement-therapy-malaysia/" className="text-wine font-bold italic">
                    hormone replacement therapy in Malaysia
                  </Link>{' '}
                  provides a framework for distinguishing and managing these two commonly co-occurring hormonal conditions.
                </p>
              </motion.div>
          </motion.div>
        </section>

        {/* Hypothyroidism Diagnosis Table */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
              <TableForPages
                columns={[
                  { key: "step", header: "Diagnostic Step", className: "font-semibold" },
                  { key: "assessment", header: "What Is Assessed and Why" },
                  { key: "application", header: "How Nexus Clinic KL Applies This" },
                ]}
                data={[
                  {
                    step: "Clinical History and Physical Examination",
                    assessment: "A thorough history of hypothyroidism symptoms and their onset and progression is essential; the physical examination assesses for clinical signs of hypothyroidism including goitre (thyroid gland enlargement), bradycardia (slow pulse), periorbital puffiness (early myxedema), delayed relaxation of deep tendon reflexes, dry skin and hair and coarsening of facial features; the physical examination is the foundation for identifying which patients require thyroid function blood test investigation; hypothyroidism risk factors including family history of autoimmune disease, previous thyroid disorder, neck radiation exposure and medications affecting thyroid function are documented",
                    application: "Every hypothyroidism assessment at Nexus Clinic KL begins with a comprehensive clinical history and physical examination before any blood test is ordered; the physical examination specifically assesses for goitre by palpating the thyroid gland in the neck, for signs of myxedema and for cardiovascular signs of hypothyroidism; the physical examination findings guide which blood test components are most important to prioritise; at this clinic in Malaysia, a detailed clinical assessment accompanies every thyroid function blood test rather than ordering tests in isolation"
                  },
                  {
                    step: "TSH Blood Test (Primary Screening Test)",
                    assessment: "The TSH (thyroid-stimulating hormone) blood test is the single most sensitive test to diagnose hypothyroidism; the pituitary gland responds to even small decreases in thyroid hormone levels by increasing TSH production; a high TSH level therefore indicates that the pituitary is signalling harder to a thyroid gland that is not producing enough thyroid hormone; the normal TSH reference range is typically 0.5 to 4.5 mIU/L; TSH above the reference range with low or normal FT4 confirms primary hypothyroidism; high TSH with normal FT4 (subclinical hypothyroidism) and high TSH with low FT4 (overt hypothyroidism) are the two main patterns on blood test",
                    application: "TSH is the first-line blood test for hypothyroidism at Nexus Clinic KL; a single TSH blood test is the most cost-effective initial screen; if TSH is elevated, FT4 is reflexively measured from the same blood sample to distinguish subclinical from overt hypothyroidism; the levels of thyroid-stimulating hormone are interpreted in the context of the patient's age, symptoms and clinical findings rather than by the blood test result alone; high TSH levels in an elderly patient without symptoms may not require immediate treatment; the same high TSH levels in a symptomatic 35-year-old woman warrant prompt levothyroxine initiation"
                  },
                  {
                    step: "FT4 (Free Thyroxine) Blood Test",
                    assessment: "FT4 measures the biologically active fraction of thyroxine in the bloodstream; a low FT4 combined with a high TSH confirms overt hypothyroidism and typically warrants immediate levothyroxine treatment; a normal FT4 combined with a high TSH defines subclinical hypothyroidism; the FT4 blood test result directly guides the hypothyroidism treatment decision: whether to treat immediately, monitor or adjust existing levothyroxine dosage; FT4 is also the key blood test for diagnosing secondary hypothyroidism, where TSH may be low or normal but FT4 is reduced due to pituitary gland failure",
                    application: "FT4 is measured alongside TSH in the initial thyroid function blood test panel at Nexus Clinic KL; for patients already on levothyroxine treatment, the FT4 blood test result alongside TSH levels confirms whether the current dosage is providing adequate thyroid hormone replacement; the target FT4 range during levothyroxine treatment is the mid to upper part of the reference range; patients whose TSH normalises but FT4 remains in the lower half of the reference range may have residual hypothyroidism symptoms and benefit from dosage review by the treating doctor"
                  },
                  {
                    step: "Anti-TPO Antibody Testing",
                    assessment: "Anti-thyroid peroxidase (anti-TPO) antibody testing identifies whether the hypothyroidism is caused by Hashimoto's thyroiditis, the autoimmune disease that is the most common cause of hypothyroidism; a positive anti-TPO antibody result confirms autoimmune thyroid disease as the underlying cause and has important management implications: these patients have a higher rate of progression from subclinical to overt hypothyroidism and are more likely to require lifelong levothyroxine treatment; anti-TPO antibody testing is not a routine screening blood test but is clinically valuable when the cause of hypothyroidism needs to be established",
                    application: "Anti-TPO antibody testing is included in the initial hypothyroidism blood test panel at Nexus Clinic KL for all new patients with hypothyroidism; confirming Hashimoto's thyroiditis as the underlying cause allows healthcare professionals to counsel the patient accurately about the long-term course of their thyroid disease and the importance of regular TSH blood test monitoring; patients with positive anti-TPO antibodies are also counselled about the autoimmune disease association with other conditions that warrant periodic screening"
                  },
                  {
                    step: "Thyroid Ultrasound (When Indicated)",
                    assessment: "Thyroid ultrasound is not required for the diagnosis of hypothyroidism or to diagnose the blood test abnormality; however, it is indicated when: the thyroid gland is enlarged (goitre) on physical examination; thyroid nodules are detected on physical examination or suspected; there is a risk of thyroid cancer based on history or physical examination; the ultrasound provides structural information about the thyroid gland that the thyroid function blood test cannot; thyroid nodules are identified in approximately 20 to 76% of adults screened with ultrasound; most thyroid nodules are benign but all warrant appropriate follow-up",
                    application: "At Nexus Clinic KL, thyroid ultrasound is ordered selectively based on the physical examination findings rather than routinely for every patient with hypothyroidism; patients with a palpable goitre, a thyroid nodule on examination or a history of thyroid cancer are referred for thyroid ultrasound alongside their thyroid function blood test assessment; thyroid nodules identified incidentally on ultrasound are evaluated using the TIRADS classification system with referral to endocrinology or surgery where appropriate; diagnosing hypothyroidism does not require ultrasound in the absence of structural thyroid gland abnormality"
                  },
                ]}
                title="Hypothyroidism Diagnosis in Malaysia: TSH, FT4, Physical Examination and When to Investigate Further"
                variant="detailed"
                fadeInUp={fadeInUp}
                className="py-20 px-4"
              />

              <motion.div 
                variants={fadeInUp} 
                className="mt-8 p-6 bg-wine/10 rounded-2xl"
              >
                <p className="text-taupe">
                  The subclinical hypothyroidism row in this diagnosis table introduces the most clinically nuanced decision in thyroid disorder management. The April 2025 Cleveland Clinic Journal of Medicine review confirmed that most elderly patients with mildly elevated TSH do not benefit from levothyroxine treatment; this evidence-based approach to subclinical hypothyroidism is applied at Nexus Clinic KL rather than reflexive prescribing for any elevated TSH result.
                </p>
              </motion.div>
          </motion.div>
        </section>

        {/* Hypothyroidism Treatment Table */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
                <TableForPages
                  columns={[
                    { key: "scenario", header: "Treatment Scenario", className: "font-semibold" },
                    { key: "approach", header: "Evidence-Based Approach" },
                    { key: "management", header: "How Nexus Clinic KL Manages This" },
                  ]}
                  data={[
                    {
                      scenario: "Overt Hypothyroidism (High TSH + Low FT4)",
                      approach: "Overt hypothyroidism with clearly elevated TSH levels and low FT4 warrants immediate levothyroxine treatment regardless of age; levothyroxine is a synthetic form of thyroxine that replaces the hormone the thyroid gland is not producing enough of; the standard starting dosage for healthy adults under 60 without cardiac disease is 1.6 micrograms per kilogram of body weight per day; for elderly patients or those with cardiac disease, the dosage is started at 25 to 50 micrograms daily and increased gradually every 6 to 8 weeks; the goal of hypothyroidism treatment is to normalise TSH levels within the reference range (0.5 to 2.5 mIU/L is the typical target) and to relieve hypothyroidism symptoms",
                      management: "At Nexus Clinic KL, levothyroxine is initiated promptly for all patients with overt hypothyroidism; the appropriate dosage starting point is calculated based on body weight, age and cardiovascular history; a follow-up TSH blood test is scheduled at 6 to 8 weeks after starting treatment to assess the initial response and adjust dosage; clinical benefits of levothyroxine typically begin within 2 to 3 weeks and are fully established at 4 to 6 weeks; once stable, TSH blood test monitoring is performed annually; the treating doctor will provide a written dosage schedule and clear instructions on when and how to take levothyroxine for optimal thyroid hormone absorption"
                    },
                    {
                      scenario: "Subclinical Hypothyroidism (High TSH + Normal FT4)",
                      approach: "The appropriate treatment for subclinical hypothyroidism depends on the degree of TSH elevation, patient age, symptoms and anti-TPO antibody status; per clinical practice guidelines: TSH above 10 mIU/L in adults under 70 warrants levothyroxine treatment regardless of symptoms; TSH between 4.5 and 10 mIU/L is treated with levothyroxine if the patient is symptomatic, anti-TPO antibody positive, pregnant or planning pregnancy; in adults over 70 with mildly elevated TSH, the current evidence from the TRUST trial does not support routine levothyroxine treatment as it does not improve quality of life or symptoms in most elderly patients with subclinical hypothyroidism; a wait-and-watch approach with repeat blood test in 2 to 3 months is appropriate in many elderly patients with mild TSH elevation",
                      management: "At Nexus Clinic KL, the decision to treat subclinical hypothyroidism is individualised based on the full clinical picture; for younger patients with high TSH levels above 10 mIU/L or with positive anti-TPO antibodies, levothyroxine treatment is initiated; for older patients with mildly elevated TSH and no symptoms, the evidence-based approach is to confirm the elevation with a repeat blood test at 2 to 3 months and monitor without immediate treatment; this nuanced approach to subclinical hypothyroidism treatment is what distinguishes evidence-based managing thyroid conditions from reflexive levothyroxine prescribing for every elevated TSH blood test result"
                    },
                    {
                      scenario: "Hypothyroidism in Pregnancy",
                      approach: "Undiagnosed or inadequately treated hypothyroidism in pregnancy carries serious risks for both mother and baby; thyroid hormone is essential for foetal brain development; uncontrolled hypothyroidism in pregnancy significantly increases the risk of miscarriage, premature birth, preeclampsia, low birth weight and impaired foetal neurological development; the TSH treatment target during pregnancy is more stringent than outside pregnancy: TSH should be maintained below 2.5 mIU/L in the first trimester; levothyroxine dosage typically needs to increase by 25 to 30% in early pregnancy; all pregnant women with known hypothyroidism should have their TSH blood test checked as soon as pregnancy is confirmed and every 4 to 6 weeks during the first half of pregnancy",
                      management: "Managing thyroid conditions in pregnancy is a clinical priority at Nexus Clinic KL; women of reproductive age with hypothyroidism are counselled to contact the clinic as soon as pregnancy is confirmed for urgent TSH blood test review and dosage adjustment; appropriate treatment during pregnancy is not optional: it directly protects foetal neurological development; all women planning pregnancy are counselled on the importance of achieving stable TSH blood test results (below 2.5 mIU/L) before conception; women with previously undiagnosed hypothyroidism who present for first-trimester care are assessed with urgent TSH and FT4 blood tests"
                    },
                    {
                      scenario: "Levothyroxine Dosage Optimisation and Absorption",
                      approach: "Levothyroxine absorption is affected by multiple factors that are relevant for Malaysian patients; levothyroxine should be taken on an empty stomach 30 to 60 minutes before breakfast for optimal absorption; calcium supplements, iron supplements, antacids, dairy products and soy-based foods all impair levothyroxine absorption and should be taken at least 4 hours apart from the morning levothyroxine dose; Malaysian dietary habits including early morning teh tarik and breakfast with soy milk can significantly reduce levothyroxine absorption and result in persistent high TSH levels despite the patient reporting full dosage compliance; absorption optimisation is a frequently overlooked component of hypothyroidism treatment in Malaysia",
                      management: "Levothyroxine absorption education is a standard component of every hypothyroidism consultation at Nexus Clinic KL; patients are specifically counselled on the Malaysian dietary interactions with levothyroxine including soy milk in hot drinks, calcium-containing breakfast foods and common supplements; patients who present with persistently high TSH levels despite reported medication compliance undergo a dietary and medication interaction review before any dosage increase is considered; dosage adjustments are made based on TSH blood test results and clinical symptoms together, not on TSH alone, following the managing thyroid approach aligned with clinical practice guidelines"
                    },
                  ]}
                  title="Hypothyroidism Treatment: Evidence-Based Levothyroxine Management at Nexus Clinic KL Malaysia"
                  variant="detailed"
                  fadeInUp={fadeInUp}
                  className="py-20 px-4"
                />
                <p className="text-center max-w-2xl mx-auto text-taupe">
                  For patients whose hypothyroidism coexists with PCOS-related hormonal imbalance, our{' '}
                  <Link href="/regenerative/pcos-treatment-malaysia/" className="text-wine font-bold italic">
                    PCOS treatment in Malaysia
                  </Link>{' '}
                  provides context on how thyroid function is assessed as part of the broader hormonal evaluation for women with irregular cycles and metabolic concerns.
                </p>
          </motion.div>
        </section>

        {/* Hypothyroidism Treatment Cost Table */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
              <TableForPages
                columns={[
                  { key: "service", header: "Service / Test / Treatment", className: "font-semibold" },
                  { key: "details", header: "Details" },
                  { key: "price", header: "Price Range (RM) 2026" },
                ]}
                data={[
                  {
                    service: "Initial Hypothyroidism Consultation",
                    details: "Comprehensive hypothyroidism symptoms history, hypothyroidism risk factors review, physical examination of the thyroid gland and clinical signs, blood test requisition; management plan discussed before any prescription is issued",
                    price: "RM 150 to RM 300"
                  },
                  {
                    service: "Thyroid Function Blood Test Panel",
                    details: "TSH (thyroid-stimulating hormone), FT4 (free thyroxine), FT3 (free triiodothyronine); levels of thyroid-stimulating hormone and FT4 together confirm or exclude overt hypothyroidism and subclinical hypothyroidism",
                    price: "RM 80 to RM 180 (laboratory fees)"
                  },
                  {
                    service: "Extended Thyroid Blood Test Panel",
                    details: "TSH, FT4, FT3, anti-TPO antibodies, anti-thyroglobulin antibodies; used for new diagnoses to identify Hashimoto's thyroiditis as the autoimmune cause; lipid panel added for cardiovascular risk assessment in hypothyroidism",
                    price: "RM 200 to RM 400 (laboratory fees)"
                  },
                  {
                    service: "Levothyroxine Prescription (per month)",
                    details: "Synthetic thyroxine for hypothyroidism treatment; dosage individualised by body weight, age and cardiovascular history; prescription valid for 1 to 3 months with follow-up blood test at 6 to 8 weeks to confirm dosage adequacy",
                    price: "RM 20 to RM 60 per month (medication)"
                  },
                  {
                    service: "Follow-Up Hypothyroidism Monitoring Consultation",
                    details: "TSH and FT4 blood test review; dosage adjustment if indicated; symptom assessment; annual review once stable; hypothyroidism risk factors reassessment; management of thyroid disorders ongoing",
                    price: "RM 100 to RM 200 per visit"
                  },
                  {
                    service: "Thyroid Ultrasound Referral (when indicated)",
                    details: "Indicated for goitre, thyroid nodules on physical examination or thyroid cancer surveillance; not required for routine hypothyroidism diagnosis; referral to radiology; report reviewed at follow-up consultation",
                    price: "RM 150 to RM 350 (radiology fees)"
                  },
                ]}
                title="Hypothyroidism Treatment Cost in Malaysia 2026: Pricing at Nexus Clinic KL"
                variant="compact"
                fadeInUp={fadeInUp}
                className="py-20 px-4"
              />

              <motion.div 
                variants={fadeInUp} 
                className="mt-8 p-6 bg-wine/10 rounded-2xl"
              >
                <p className="text-taupe">
                  Annual management cost for hypothyroidism at Nexus Clinic KL is typically RM 500 to RM 1,500 including initial consultation, extended blood test panel, levothyroxine prescription and annual follow-up monitoring. This is one of the most cost-effective long-term treatment programmes in all of endocrine medicine.
                </p>
              </motion.div>
          </motion.div>
        </section>
          <FAQWithSchema data={faqData}/>
        {/* CTA with Background Image */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
              alt="Modern medical clinic in Kuala Lumpur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brown/70 backdrop-blur-sm"></div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-white mb-6"
            >
              Evidence-Based Hypothyroidism Treatment at Nexus Clinic KL: Managing Underactive Thyroid in Malaysia
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-cream mb-8">
              Hypothyroidism is a common endocrine condition in Malaysia that is too often left undiagnosed for years while its symptoms are managed as separate, unrelated problems. Fatigue, weight gain, dyslipidaemia, depression, subfertility and hair loss are all potential manifestations of a single, easily diagnosed, highly treatable thyroid disorder. A single TSH blood test is the most important first step.
            </motion.p>
            <motion.div variants={scaleIn}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-wine text-white px-12 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Book Your  Assessment
              </motion.a>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8 text-white">
              <p className="font-semibold text-xl">Nexus Clinic Kuala Lumpur</p>
              <p className="mt-2">LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia</p>
              <p className="mt-2">Phone: 016-7025699 / 03-21635699</p>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HypothyroidLanding;