"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Activity,
  Moon,
  Sun,
  Flower2,
  Brain,
  AlertCircle,
  Phone,
  MapPin,
  Sparkles,
  Search,
  CheckCircle2,
  AlertTriangle,
  ClipboardList,
  Droplet,
  Flame,
  Thermometer,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import Link from "next/link";
import Image from "next/image";
export default function HormoneTestLanding({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "regenerative/hormoneTest");

  // Updated FAQ content
  const faqs = [
    { q: "What is a hormone test and what does it check?", a: "A hormone test is a blood test that measures the levels of specific hormones circulating in the body; a hormonal blood test panel provides a comprehensive hormonal profile that shows whether each hormone is within its normal reference range or is elevated or deficient; the result provides the diagnostic foundation for identifying hormonal imbalances that may be driving symptoms including fatigue, irregular periods, weight gain, low libido, acne, hair loss or mood disturbance; at Nexus Clinic KL, the hormone test is reviewed by a dr at the post-screening consultation to provide clinical interpretation, personalised advice, and a recommendation for treatment or monitoring; a blood test alone without medical interpretation is not a complete health screening service." },
    { q: "Why is hormone screening important for women in Malaysia?", a: "Hormone screening is important for women in Malaysia because hormonal conditions including PCOS, thyroid dysfunction, perimenopause and premature ovarian insufficiency are common, significantly affect quality of life and are highly treatable when identified; many Malaysian women live with fatigue, irregular periods, acne, hair loss or menopausal symptoms for years without their hormonal health being properly assessed; a comprehensive female hormone screening profile including FSH, LH, oestradiol, testosterone and TSH identifies the specific hormonal imbalance driving the health issue and allows a tailored treatment plan to be developed; at this clinic, every female health screening package includes a post-result consultation with a dr who provides specific advice, recommendation and a management solution for identified hormonal findings." },
    { q: "What is included in the female hormonal screening package at Nexus Clinic KL?", a: "The core female hormonal screening package at Nexus Clinic KL includes FSH, LH, oestradiol (E2), progesterone, prolactin, total testosterone, SHBG, TSH and FT4; the comprehensive female screening package adds AMH, DHEA-S, cortisol, fasting insulin, HbA1c, fasting glucose, lipid panel, CBC and liver function tests; both packages include a post-result consultation with a dr who reviews the complete hormonal profile result, provides tailored advice and recommendation, and issues any indicated treatment or referral; female patients receive specific guidance on cycle day timing for their blood test appointment to ensure the most accurate hormonal profile result; this comprehensive health service is available to women from across Malaysia including Penang and Melaka at this clinic in Kuala Lumpur." },
    { q: "Can men get hormone screening at Nexus Clinic KL?", a: "Yes; the male hormonal screening package at Nexus Clinic KL includes total and free testosterone, SHBG, LH, FSH, prolactin, TSH, FT4 and oestradiol as a core male hormonal profile blood test; the comprehensive male screening package adds cortisol, DHEA-S, fasting insulin, HbA1c, fasting glucose, lipid panel, CBC, liver function and haematocrit for a complete hormonal and metabolic health assessment; all male hormone tests are performed as a fasting morning blood test for accurate testosterone measurement; the result is reviewed by a dr at the post-screening consultation with personalised advice and recommendation for any identified hormonal issue; testosterone, thyroid and adrenal hormone assessment together provide the holistic male health screening profile that distinguishes a specialist clinic's service from a standard health check." },
    { q: "How do I know which hormone screening package is right for me?", a: "The right hormone screening package depends on your specific symptoms, age, medical history and health goals; women with irregular periods, PCOS symptoms or fertility concerns are best served by the female hormonal screening package; perimenopausal or menopausal women benefit from the comprehensive female package that includes metabolic health markers alongside the full hormonal profile; men with fatigue, reduced libido or suspected testosterone deficiency are well-served by the core male hormonal screening package; all adults with unexplained chronic disease symptoms or complex hormonal concerns benefit from the comprehensive health screening packages; the most efficient approach is to attend the initial consultation at Nexus Clinic KL where a healthcare professional assesses your specific symptoms and recommends the most appropriate package and blood test schedule for your situation." },
    { q: "How should I prepare for my hormone blood test?", a: "For female patients: schedule the baseline hormonal profile blood test on day 2 to 5 of the menstrual cycle for the most accurate FSH, LH and oestradiol result; if progesterone is being tested for ovulation confirmation, this should be on day 21 of a 28-day cycle (or 7 days after estimated ovulation); all blood tests should be performed as a fasting morning blood test where possible; avoid vigorous exercise and stress on the day before and the morning of testing as these can affect cortisol and prolactin results; for male patients: all testosterone blood tests must be performed as a fasting morning blood test before 10am to capture the diurnal testosterone peak; a practitioner at Nexus Clinic KL provides every patient with a specific preparation guide and schedule for their blood test at the initial consultation." },
    { q: "How long does it take to get hormone blood test results?", a: "Most hormone blood test results at Nexus Clinic KL are available within 2 to 5 working days depending on the specific tests in the screening package; standard hormonal profile tests including FSH, LH, oestradiol, testosterone and TSH are typically available within 2 to 3 working days; specialist tests including AMH, DHEA-S, cortisol and advanced metabolic markers may take 3 to 5 working days; a follow-up appointment is scheduled at the time of the blood test collection to review the complete result with the dr and receive advice and recommendation; patients from Penang, Melaka and other states who cannot return in person for their result review can receive their post-screening consultation by telemedicine." },
    { q: "Do I need a referral to access hormone screening at Nexus Clinic KL?", a: "No referral is needed to access hormone screening at Nexus Clinic KL; any patient who wants to check their hormonal health and book a hormone blood test can contact this clinic directly and schedule an appointment; the initial consultation assesses which health screening package is most appropriate for the patient's specific symptoms and health goals; patients who have already had blood tests at another clinic, hospital or klinik are welcome to bring their previous results for review and comparison; the clinic provides a complete hormone health screening service from initial consultation through blood test collection, result review and treatment planning in a single clinical pathway." },
    { q: "Can Nexus Clinic KL help me if my blood test results from another clinic show hormonal imbalance?", a: "Yes; patients who have already received hormone blood test results from another clinic, klinik or hospital and who want a dr's clinical interpretation, advice and recommendation are welcome at Nexus Clinic KL; the post-result consultation reviews the existing results in the context of the patient's symptoms, medical history and health goals and provides the clinical interpretation and treatment recommendation that may not have been offered at the collection facility; if the existing results are incomplete or if additional tests are needed to complete the hormonal profile, these can be ordered as targeted add-on tests rather than repeating the full panel; this consultation service is a specific and valued offering at this clinic in Kuala Lumpur for patients who have their test results but need medical guidance on what they mean." },
    { q: "Is the hormone screening service at Nexus Clinic KL available to patients from Penang and Melaka?", a: "Yes; Nexus Clinic KL serves patients from across Malaysia including those from hospital Penang, hospital Kuala Lumpur, Melaka and other states who are seeking comprehensive hormone health screening not available at their local medical centre or klinik; for patients who travel from Penang or Melaka, the clinic schedules the initial consultation and blood test collection in a single visit where possible; post-result consultations can be conducted by telemedicine for patients who cannot return in person; the blood test package and price are the same for all patients regardless of location; Nexus Clinic KL is located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara, Penang, Melaka and throughout Malaysia." },
  ];

  // Updated reasons for women
  const womenReasons = [
    "Irregular or absent periods",
    "Difficulty conceiving or fertility concerns",
    "PCOS symptoms (acne, hirsutism, hair loss, weight gain)",
    "Perimenopause or menopause symptoms (hot flushes, night sweats, mood swings)",
    "Unexplained fatigue, weight gain, or hair loss",
  ];

  // Updated reasons for men
  const menReasons = [
    "Fatigue, reduced libido, or erectile dysfunction",
    "Mood changes, muscle loss, or central weight gain",
    "Suspected testosterone deficiency",
    "Diabetes, obesity, or metabolic syndrome",
  ];

  // Updated tests
  const tests = [
    {
      icon: Thermometer,
      name: "TSH (Thyroid Stimulating Hormone)",
      sub: "Most sensitive thyroid function test",
      desc: "Identifies hypothyroidism or hyperthyroidism; the single highest-yield test in any screening package, as thyroid dysfunction affects ~1 in 50 Malaysian adults and is significantly under-tested.",
    },
    {
      icon: Flower2,
      name: "FSH & LH",
      sub: "Pituitary & ovarian function",
      desc: "FSH confirms menopause or ovarian decline; LH:FSH ratio is a key diagnostic criterion for PCOS; together they provide the complete pituitary-ovarian axis assessment.",
    },
    {
      icon: Flame,
      name: "Total & Free Testosterone",
      sub: "Male & female androgen status",
      desc: "In men, low testosterone affects 25-40% over 40; in women, elevated free androgens drive PCOS symptoms including acne, hirsutism and hair loss.",
    },
    {
      icon: Activity,
      name: "Oestradiol (E2) & Progesterone",
      sub: "Primary female hormones",
      desc: "Oestradiol decline drives menopausal symptoms; day 21 progesterone confirms ovulation; essential for fertility and perimenopause assessment.",
    },
    {
      icon: Brain,
      name: "Cortisol & DHEA-S",
      sub: "Adrenal & stress hormones",
      desc: "Elevated chronic cortisol suppresses testosterone production and increases abdominal fat; low DHEA-S indicates adrenal ageing (adrenopause).",
    },
  ];

  // Updated timing cards
  const timingCards = [
    {
      icon: Calendar,
      title: "Female Baseline: Day 2-5 of Cycle",
      desc: "Schedule FSH, LH, oestradiol and prolactin on day 2 to 5 of your menstrual cycle (day 1 = first day of period) for the most accurate baseline hormonal assessment.",
    },
    {
      icon: Droplet,
      title: "Progesterone: Day 21 (or 7 days post-ovulation)",
      desc: "Progesterone should be measured approximately 7 days after ovulation (day 21 of a 28-day cycle) to confirm whether ovulation has occurred.",
    },
    {
      icon: Sun,
      title: "Male Testosterone: Morning (before 10am)",
      desc: "Testosterone is highest in the morning due to diurnal variation. All male hormone tests must be performed as a fasting morning blood test before 10am for accurate results.",
    },
  ];

  // Updated result factors
  const resultFactors = [
    "Symptoms",
    "Age",
    "Menstrual cycle day (for women)",
    "Medications",
    "Lifestyle factors (sleep, stress, exercise)",
    "Time of day (for testosterone)",
  ];

  // Updated tips
  const tips = [
    "Fast for 8-12 hours before your blood test (water only)",
    "Avoid biotin supplements for 3-5 days before testing",
    "Avoid vigorous exercise and stress 24 hours before testing",
  ];

  // Updated Pantai prices
  const pantaiPrices = [
    { name: "Wellness (Basic Health Screening)", price: "RM 280" },
    { name: "Wellness Plus", price: "RM 520" },
    { name: "Executive Wellness", price: "RM 780" },
    { name: "Wellness Diamond (Women)", price: "RM 1,180" },
    { name: "Wellness Diamond (Men)", price: "RM 980" },
    { name: "Premier Women (Comprehensive)", price: "RM 2,850" },
    { name: "Premier Men (Comprehensive)", price: "RM 2,350" },
  ];

  // Updated budget items
  const budgetItems = [
    "Choose a core package first; add specialist tests (AMH, cortisol) only if clinically indicated",
    "Check if your insurance covers preventive health screening (some corporate plans do)",
    "Use your Employee Benefits / Panel Clinic access if Nexus Clinic KL is on your panel",
    "Ask about package combinations if you need multiple family members tested",
  ];

  // Updated Nexus standout points
  const nexusStandout = [
    "Every screening package includes a post-test consultation with a doctor who reviews the full hormonal profile in the context of your symptoms, age, and health goals",
    "We distinguish between a core hormonal profile and a comprehensive screening package, helping you choose based on your specific needs rather than offering a one-size-fits-all test",
    "We provide specific guidance on cycle timing for female patients and morning fasting for male patients to ensure accurate, actionable results",
  ];

  return (
    <>
      <main className="min-h-screen bg-cream font-['Inter',sans-serif]">
      {/* Hero Section */}
      <AllPagesHero
        badge="Hormone Test and Health Screening Malaysia"
        title="Comprehensive Female and Male Hormonal Blood Test Packages"
        highlight="Hormone blood test and health screening in Malaysia"
        description="Comprehensive female and male hormonal profiles including thyroid, reproductive hormones and metabolic check. Medical result review and solution by experienced healthcare professionals at Nexus Clinic KL in Kuala Lumpur."
        details="Our hormone testing packages are designed to identify imbalances that may be affecting your energy, mood, metabolism and overall health. All tests include a medical result review with a qualified doctor."
        note="Hormone testing should be interpreted by a healthcare professional. Self-diagnosis without medical guidance may lead to incorrect conclusions."
        image="/images/regenerative/hematopoietic-stem-cells2.webp"
        imageAlt="Hormone blood test and health screening at Nexus Clinic Kuala Lumpur"
        ctaText="Book Appointment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in hormone blood test and health screening at Nexus Clinic KL. I'd like to book an appointment."
        floatingTitle="Comprehensive Hormonal Profiles"
        floatingSubtitle="Thyroid • Reproductive • Metabolic"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

        {/* What Is a Hormone Test Section with Image */}
        <section className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInLeft} className="mb-6">
                  <span className="text-wine font-medium mb-2 block">
                    What Hormone Screening Is
                  </span>
                  <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                    Hormone Test and Health Screening Overview
                  </h2>
                  <div className="w-24 h-1 bg-linear-to-r from-wine to-rose mb-8" />
                </motion.div>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-brown mb-8 leading-relaxed"
                >
                  Hormone screening is a blood test-based assessment that measures the levels
                  of key hormones circulating in the body to identify hormonal imbalances,
                  deficiencies or excesses that may be driving health issues including fatigue,
                  weight gain, irregular periods, low libido, acne, hair loss, mood disturbance
                  and fertility concerns. A hormone test provides the biological data that a
                  medical practitioner needs to tailor a treatment plan or prevention strategy
                  to the patient's specific hormonal profile. Health screening that includes
                  hormone testing gives patients actionable insight into their hormonal health
                  that general health checks often miss.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="bg-cream p-8 rounded-3xl border border-taupe/20"
                >
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <p className="text-brown">
                      Hormonal imbalances are significantly under-tested in Malaysian primary care.
                      Many patients live with fatigue, weight changes, mood swings, irregular periods
                      or reduced function for years without having their hormonal profile checked.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <Image
                  src="/images/regenerative/hormone-test.webp"
                  alt="Blood test tubes in laboratory"
                  width={400}
                  height={300}
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Reasons Section with Image */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4"
              >
                Who Should Get Hormone Screening
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-24 h-1 bg-linear-to-r from-wine to-rose mx-auto"
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                {/* Women's Section */}
                <motion.div
                  variants={fadeInLeft}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe/10"
                >
                  <div className="mb-6">
                    <Flower2 className="w-12 h-12 text-wine" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6">
                    Female Patients
                  </h3>
                  <ul className="space-y-4">
                    {womenReasons.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Men's Section */}
                <motion.div
                  variants={fadeInLeft}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe/10"
                >
                  <div className="mb-6">
                    <Activity className="w-12 h-12 text-wine" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6">
                    Male Patients
                  </h3>
                  <ul className="space-y-4">
                    {menReasons.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Image Column */}
              <motion.div variants={fadeInRight} className="relative h-full">
                <div className="sticky top-24">
                  <div className="absolute inset-0 bg-linear-to-b from-wine/20 to-transparent rounded-3xl" />
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Medical consultation with doctor"
                    className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                  <div className="mt-6 bg-wine/5 p-6 rounded-2xl border border-wine/20">
                    <p className="text-brown text-sm">
                      <strong>Editor's Note:</strong> The most clinically impactful finding from
                      the male hormone screening package is the LH and FSH result alongside
                      testosterone. Every medical practitioner knows that testosterone can be low,
                      but only LH and FSH tell you why it is low — distinguishing primary from
                      secondary hypogonadism and determining appropriate treatment.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Hormone Tests Section with Image */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 md:order-1"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-rose/20 to-transparent rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Laboratory blood test tubes"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                className="order-1 md:order-2"
              >
                <motion.div variants={fadeInRight}>
                  <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                    What Each Blood Test Checks
                  </h2>
                  <p className="text-taupe text-lg mb-8">
                    Every test in the hormone screening package serves a specific clinical purpose.
                    Below is what each hormone measures, why it is included, and what an abnormal
                    result indicates for your health.
                  </p>

                  <p className="text-sm text-taupe">
                    Bhasin S et al. Testosterone Therapy in Men with Hypogonadism: An Endocrine Society Clinical Practice Guideline. 
                    <a 
                      href="https://pubmed.ncbi.nlm.nih.gov/29562364/" 
                      target="_blank" 
                      rel="nofollow" 
                      className="text-wine font-bold italic"
                    >
                      The Journal of Clinical Endocrinology & Metabolism
                    </a>. 
                    2018;103(5):1715-1776. This official clinical practice guideline provides the gold standard for diagnosing male hypogonadism and outlines evidence-based protocols for testosterone replacement therapy, monitoring, and safety assessment.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {tests.map((test, index) => {
                const Icon = test.icon;
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-wine" />
                      </div>
                    </div>
                    <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                      {test.name}
                    </h3>
                    <p className="text-sm text-taupe mb-3">{test.sub}</p>
                    <p className="text-brown text-sm">{test.desc}</p>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-center max-w-2xl mx-auto text-taupe mt-8">
              For women whose hormone screening reveals perimenopause or menopause, our{' '}
              <Link href="/regenerative/hormone-replacement-therapy-malaysia/" className="text-wine font-bold italic">
                hormone replacement therapy in Malaysia
              </Link>{' '}
              provides the complete HRT assessment and treatment framework at Nexus Clinic KL.
            </p>
          </div>
        </section>

        {/* Best Time Section with Image Layout */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInLeft} className="mb-8">
                  <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                    How to Get Accurate Hormone Blood Test Results
                  </h2>
                  <p className="text-taupe text-lg">
                    Timing, fasting and patient preparation are critical for accurate hormonal
                    blood test results. A female hormonal profile measured on day 14 produces
                    completely different results from the same test on day 2 to 5.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {timingCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-white p-6 rounded-2xl shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-wine" />
                          </div>
                          <div>
                            <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                              {card.title}
                            </h3>
                            <p className="text-brown text-sm">{card.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="sticky top-24">
                  <div className="absolute inset-0 bg-linear-to-b from-wine/20 to-transparent rounded-3xl" />
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                    alt="Medical consultation with calendar"
                    className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Preparation Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                  How to Prepare for Your Hormone Blood Test
                </h2>
                <p className="text-taupe">
                  Following these preparation guidelines ensures the most accurate hormonal profile results.
                </p>
              </motion.div>

              <div className="space-y-6">
                {/* Fasting */}
                <motion.div
                  variants={fadeInLeft}
                  className="bg-cream p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                      <Moon className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                        Fasting Requirement
                      </h3>
                      <p className="text-brown">
                        All blood tests should be performed as a fasting morning blood test for
                        consistency and accurate cortisol, glucose, and baseline hormonal measurements.
                        Fast for 8-12 hours before your blood test (water only).
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Biotin Warning */}
                <motion.div
                  variants={fadeInRight}
                  className="bg-cream p-6 rounded-2xl shadow-lg border-l-4 border-wine"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                        Biotin (Vitamin B7) Interference
                      </h3>
                      <p className="text-brown">
                        Biotin supplements can interfere with hormone immunoassays and cause falsely
                        high or low results for TSH, testosterone, and other hormones. Avoid biotin
                        for 3-5 days before testing.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Simple Tips */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-cream p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-4">
                    Additional Preparation Tips
                  </h3>
                  <ul className="space-y-3">
                    {tips.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-rose shrink-0" />
                        <span className="text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6"
              >
                Understanding Your Hormone Test Results
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8">
                A hormone test result alone — a number on a page — is not a diagnosis.
                The clinical significance of each result depends on multiple factors that
                a doctor must consider before providing advice or treatment.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
              >
                {resultFactors.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white p-4 rounded-xl shadow-md"
                  >
                    <span className="text-brown">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-wine/5 p-8 rounded-3xl"
              >
                <p className="text-xl text-brown font-medium">
                  "A blood test alone without medical interpretation is not a complete health screening service."
                </p>
              </motion.div>

              <motion.p variants={fadeInUp} className="mt-8 text-taupe">
                At Nexus Clinic KL, every hormone screening package includes a post-test consultation
                with a doctor who reviews the full hormonal profile result in the context of your
                symptoms, age, cycle status and health goals, and provides personalised advice,
                recommendation and a treatment plan where findings indicate action.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                  Hormone Screening Package Price 2026
                </h2>
                <p className="text-taupe">
                  Hormone health screening package price at Nexus Clinic KL is presented
                  transparently before any blood test is performed. Prices reflect laboratory fees;
                  consultation fees cover medical assessment, result interpretation and advice.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream p-8 rounded-3xl shadow-xl mb-8"
              >
                <p className="text-brown mb-6">
                  Below is a comparison of standard health screening packages at major Malaysian
                  hospitals versus specialised hormonal screening at Nexus Clinic KL:
                </p>

                <h3 className="font-['Georgia',serif] text-xl text-brown mb-4">
                  Pantai Hospital Kuala Lumpur — Health Screening Packages
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-wine mb-3">
                      Standard Health Screening Packages
                    </h4>
                    <ul className="space-y-2">
                      {pantaiPrices.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between text-brown border-b border-taupe/20 py-2"
                        >
                          <span>{item.name}</span>
                          <span className="font-medium">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border-l-4 border-wine">
                      <p className="text-brown">
                        <span className="font-medium text-wine">Core Female Hormonal Package</span> — RM 450 to RM 700
                        <br />
                        <span className="text-sm text-taupe">FSH, LH, E2, Progesterone, Prolactin, Testosterone, SHBG, TSH, FT4 + doctor consultation</span>
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border-l-4 border-wine">
                      <p className="text-brown">
                        <span className="font-medium text-wine">Core Male Hormonal Package</span> — RM 400 to RM 650
                        <br />
                        <span className="text-sm text-taupe">Total/Free Testosterone, SHBG, LH, FSH, Prolactin, TSH, FT4, E2 + doctor consultation</span>
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border-l-4 border-rose">
                      <p className="text-brown">
                        <span className="font-medium text-rose">Comprehensive Female/Male Advanced Package</span> — RM 900 to RM 1,400
                        <br />
                        <span className="text-sm text-taupe">Adds AMH, DHEA-S, Cortisol, Insulin, HbA1c, Lipid Panel, CBC, Liver Function</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-wine/5 p-6 rounded-2xl"
              >
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                  How to Get the Best Value
                </h3>
                <p className="text-brown">
                  The most cost-effective approach to hormone screening for patients with complex
                  hormonal symptoms is the comprehensive screening package, which provides all
                  hormonal, metabolic and adrenal test results in a single blood draw.
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1 text-brown">
                  {budgetItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Market Positioning Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl text-brown text-center mb-12"
              >
                Why Hormone Testing at Nexus Clinic KL?
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <Search className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                    Hormone Testing is the Missing Component
                  </h3>
                  <p className="text-brown text-sm">
                    A standard health check measures metabolic and organ function; a hormone screening
                    measures the biological control system that regulates how those organs work,
                    how energy is produced, and how the body responds to stress and ageing.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <ClipboardList className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                    Not Just a Blood Test Collection Service
                  </h3>
                  <p className="text-brown text-sm">
                    At Nexus Clinic KL, every health screening package includes a post-test
                    consultation with a doctor who reviews the full hormonal profile result
                    in the context of the patient's symptoms, age, and health goals.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <Sparkles className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                    Specialist Clinic, Not a General Health Check
                  </h3>
                  <p className="text-brown text-sm">
                    Our licensed healthcare professionals bring over 15 years of combined clinical
                    experience and have completed over 5,000 procedures. We specialise in hormonal
                    health assessment, not just general wellness screening.
                  </p>
                </motion.div>
              </div>

              {/* Nexus Stand Out */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 bg-linear-to-r from-wine to-rose p-8 rounded-3xl text-white"
              >
                <h3 className="font-['Georgia',serif] text-2xl mb-4">
                  What Makes Nexus Clinic KL Different
                </h3>
                <ul className="space-y-3">
                  {nexusStandout.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQWithSchema data={faqs} />

        {/* CTA Section */}
        <section className="py-24 bg-linear-to-r from-wine to-rose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl mb-6"
              >
                Book Your Hormone Screening Appointment Today
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg mb-8 text-white/90"
              >
                Comprehensive hormone health screening at Nexus Clinic KL — female, male and thyroid
                testing packages with medical result review and personalised treatment advice.
                Serving patients from across Malaysia.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                <Link href="/contact-us/" className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Call or WhatsApp to Schedule
                </Link>

                <div className="pt-6 text-white/80">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
                  </p>
                  <p className="flex items-center justify-center gap-2 mt-2">
                    <Phone className="w-4 h-4" />
                    Contact Us Today
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}