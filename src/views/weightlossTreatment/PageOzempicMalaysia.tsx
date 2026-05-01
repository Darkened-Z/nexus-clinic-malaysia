"use client";

import { motion } from "framer-motion";
import {
  Shield,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock,
  Heart,
  Scale,
  Apple,
  Activity,
  Info,
  Brain,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import Image from "next/image";
const PageOzempicMalaysia = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "weightLoss/ozempic");

  const faqs = [
    {
      q: "Is Ozempic legal in Malaysia for weight loss?",
      a: "Ozempic is NPRA-registered in Malaysia for type 2 diabetes treatment. When prescribed for weight management in non-diabetic patients, it is used off-label. Off-label prescribing is legal in Malaysia and remains the prescribing doctor's clinical responsibility.",
    },
    {
      q: "How much weight can I lose with Ozempic in Malaysia?",
      a: "Clinical trials using semaglutide have consistently shown average body weight reductions of 10 to 15% over 12 to 18 months when combined with lifestyle support. Individual results vary based on starting weight, dose achieved, adherence, and metabolic health.",
    },
    {
      q: "How quickly does Ozempic start working?",
      a: "Most patients notice reduced appetite and fewer food cravings within the first one to two weeks at the 0.25 mg starting dose. Visible weight loss commonly becomes more noticeable by weeks four to six, especially after titration to 0.5 mg.",
    },
    {
      q: "What is the Ozempic price in Malaysia per month?",
      a: "As of 2026, one Ozempic pen in Malaysia commonly costs between RM 900 and RM 1,400 depending on the dose and clinic. At Nexus Clinic KL, the total monthly programme cost including reviews and support usually ranges from around RM 1,100 to RM 1,600, with package pricing available.",
    },
    {
      q: "Can I use Ozempic if I do not have diabetes?",
      a: "Yes. Licensed doctors in Malaysia can prescribe Ozempic off-label for weight management in patients without type 2 diabetes who meet clinical criteria, such as BMI above 27.5 with weight-related comorbidities or BMI above 30.",
    },
    {
      q: "Will I regain weight after stopping Ozempic?",
      a: "Weight regain is common if semaglutide is stopped without a structured exit plan. This is why the Nexus Clinic KL programme includes tapering, nutritional coaching, behavioural reinforcement, and a maintenance protocol.",
    },
    {
      q: "What is the difference between Ozempic and Mounjaro for weight loss?",
      a: "Ozempic contains semaglutide and activates the GLP-1 receptor. Mounjaro contains tirzepatide and activates both GLP-1 and GIP receptors, which usually produces greater appetite suppression and higher average weight loss, but at a higher cost.",
    },
    {
      q: "Is Ozempic safe long-term?",
      a: "Semaglutide has extensive real-world safety data globally. Long-term use can be appropriate for selected patients under medical supervision, but pancreatic, gallbladder, thyroid and metabolic monitoring may be required during treatment.",
    },
    {
      q: "Can Ozempic be combined with other weight loss treatments?",
      a: "Yes. At Nexus Clinic KL, Ozempic may be combined with structured lifestyle support and later followed by non-invasive body contouring such as fat freezing or CoolSculpting if stubborn localised fat remains after overall weight reduction.",
    },
    {
      q: "How do I get Ozempic in Malaysia legally and safely?",
      a: "Ozempic must be obtained by prescription from a licensed medical practitioner in Malaysia. Patients should only buy from registered clinics or authorised pharmacies with proper cold-chain storage and should avoid unregulated online sellers.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-ozempic-malaysia1.webp",
      after: "/images/B&A-w/B&A-ozempic-malaysia1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-ozempic-malaysia2.webp",
      after: "/images/B&A-w/B&A-ozempic-malaysia2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-ozempic-malaysia3.webp",
      after: "/images/B&A-w/B&A-ozempic-malaysia3.webp",
    },
  ];

  return (
    <>
      <main className="min-h-screen overflow-hidden">
        <AllPagesHero
          badge="Medically Supervised GLP-1 Weight Loss in Kuala Lumpur"
          title="Ozempic Weight Loss"
          highlight="Malaysia Programme"
          description="Ozempic is one of the most clinically validated GLP-1 injections used in Malaysia for doctor-supervised weight management. At Nexus Clinic KL, every programme is prescribed and monitored by licensed doctors."
          details="The goal is not guesswork. It is measurable, medically guided weight reduction with a structured dosing plan, regular reviews, and an exit strategy designed to reduce rebound risk."
          note="Treatment at a glance: Semaglutide 0.25 mg to 1 mg once weekly, prescription only, doctor-monitored, and commonly used off-label for weight management in suitable patients."
          image="/images/weight-loss/Ozempic Weight Loss Treatment.webp"
          imageAlt="Nexus Clinic KL - Professional medical consultation for weight loss"
          ctaText="Book Free Assessment"
          whatsappMessage="Hi, I'm interested in the Ozempic weight loss programme at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle="Ozempic Programme"
          floatingSubtitle="10-15% Weight Loss • Weekly Injection"
          staggerContainer={staggerContainer}
          fadeInLeft={fadeInLeft}
          fadeInRight={fadeInRight}
          fadeInUp={fadeInUp}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl px-4 lg:-mt-12  -mt-8 relative z-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <TrendingDown className="w-6 h-6" />, text: "10-15% Weight Loss" },
              { icon: <Shield className="w-6 h-6" />, text: "Doctor Screening" },
              { icon: <Clock className="w-6 h-6" />, text: "Weekly Injection Plan" },
              { icon: <Heart className="w-6 h-6" />, text: "Monthly Reviews" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="flex flex-col items-center text-center gap-2 bg-glass backdrop-blur-sm p-4 rounded-xl border border-cream shadow-md"
              >
                <div className="text-wine">{item.icon}</div>
                <span className="text-xs font-inter text-brown font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Quick Answers Section */}
        <section className="py-16 px-4 bg-glass backdrop-blur-sm border-y border-taupe/10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <AlertCircle className="text-wine" />,
                  title: "Prescription Only",
                  text: "Ozempic requires doctor assessment, prescription, and monitoring. It should not be purchased from unregulated online sources.",
                },
                {
                  icon: <Shield className="text-wine" />,
                  title: "NPRA-Registered",
                  text: "Ozempic is NPRA-registered in Malaysia for type 2 diabetes and may be prescribed off-label for weight management in suitable patients.",
                },
                {
                  icon: <Info className="text-wine" />,
                  title: "Structured Programme",
                  text: "The Nexus Clinic KL approach includes titration, bloodwork, monthly reviews, and taper planning instead of pen dispensing alone.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex gap-4 items-start"
                >
                  <div className="p-3 bg-wine/10 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-georgia text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-taupe font-inter">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* What is Ozempic */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                What is Ozempic, and how does semaglutide work?
              </h2>

              <p className="text-lg text-taupe font-inter leading-relaxed">
                Ozempic is the brand name for semaglutide, a synthetic analogue
                of the GLP-1 hormone naturally produced by the gut after eating.
                It works through the brain, pancreas and gut to reduce appetite,
                slow gastric emptying and support better glucose control.
              </p>

              <div className="bg-cream p-8 rounded-3xl border border-taupe/10">
                <p className="font-inter text-brown italic">
                  <span className="font-bold text-wine">Why it matters:</span>{" "}
                  Patients often eat less not because of stronger willpower, but
                  because hunger signals and food cravings are chemically
                  moderated at a biological level.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-georgia text-2xl text-brown">
                  How it supports weight loss:
                </h3>
                {[
                  { icon: <Apple />, text: "Reduces appetite and food cravings" },
                  { icon: <Brain />, text: "Activates satiety centres in the brain" },
                  {
                    icon: <Scale />,
                    text: "Makes calorie control more sustainable",
                  },
                  {
                    icon: <Activity />,
                    text: "Slows gastric emptying so fullness lasts longer",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-4 bg-glass rounded-xl"
                  >
                    <div className="text-wine">{item.icon}</div>
                    <span className="font-inter text-brown">{item.text}</span>
                  </motion.div>
                ))}
                <p className="text-sm text-taupe mt-4 italic">
                  This is why Ozempic can succeed where repeated dieting alone
                  fails. It works against the hunger adaptation that often
                  develops during long-term calorie restriction.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/main/ozempic-malaysia.webp"
                  alt="Medical professional explaining Ozempic treatment"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Suitability Section */}
        <section className="py-24 px-4 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              Who may be suitable for Ozempic in Malaysia?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <p className="text-taupe font-inter">
                  Ozempic is typically considered for adults with BMI 27.5+ with
                  weight-related comorbidities, or BMI 30+ even without those
                  comorbidities, depending on doctor assessment.
                </p>

                <div className="space-y-4">
                  {[
                    "Adults with BMI above 27.5 and weight-related conditions such as hypertension, pre-diabetes, dyslipidaemia or joint issues",
                    "Adults with BMI above 30 who need medically supervised weight reduction",
                    "Patients who need structured support with appetite control, dose titration and long-term maintenance planning",
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 p-4 bg-light rounded-xl border border-taupe/10"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="font-inter text-brown">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-wine/5 p-8 rounded-3xl border border-wine/20"
              >
                <h3 className="font-georgia text-2xl text-wine mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Who should not use Ozempic
                </h3>

                <div className="space-y-4">
                  {[
                    "Pregnant patients or those planning pregnancy",
                    "Patients with a history of pancreatitis",
                    "Patients with medullary thyroid carcinoma or MEN2",
                    "Patients with certain diabetic eye complications or severe gastrointestinal concerns",
                    "Patients who are unsuitable after medical history review or bloodwork",
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 items-start p-3 bg-light rounded-lg"
                    >
                      <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-1" />
                      <span className="text-sm font-inter text-brown">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-taupe mt-6">
                  *Suitability is confirmed only after consultation and a proper
                  medical assessment.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-6"
            >
              Ozempic vs Wegovy vs Mounjaro vs Saxenda
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe font-inter max-w-3xl mx-auto mb-16"
            >
              These GLP-1 based treatments are not identical. They differ in
              active ingredient, dose ceiling, convenience, expected weight loss
              and monthly cost.
            </motion.p>

            <div className="grid md:grid-cols-4 gap-4 mb-16">
              {[
                {
                  period: "Ozempic",
                  desc: "Semaglutide, once weekly, 10 to 15% expected weight loss, cost-effective entry point",
                },
                {
                  period: "Wegovy",
                  desc: "Semaglutide at higher weight-management dosing, once weekly, 12 to 17% expected loss",
                },
                {
                  period: "Mounjaro",
                  desc: "Tirzepatide, dual GLP-1 + GIP action, once weekly, 15 to 22% expected loss",
                },
                {
                  period: "Saxenda",
                  desc: "Liraglutide, daily injection, 5 to 8% expected weight loss",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 bg-glass backdrop-blur-sm rounded-2xl border border-taupe/10"
                >
                  <div className="text-2xl font-georgia text-wine mb-2">
                    {item.period}
                  </div>
                  <p className="text-sm font-inter text-brown">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/5 p-8 rounded-3xl max-w-3xl mx-auto"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                Choosing the right GLP-1 pathway
              </h3>
              <p className="font-inter text-brown">
                Ozempic is often the most accessible and cost-effective entry
                point in Malaysia. Wegovy is more weight-focused, Mounjaro has
                the strongest average weight-loss performance, and Saxenda is a
                daily-injection option for selected patients.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Structured Programme */}
        <section className="py-24 px-4 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              Why the Nexus Clinic KL programme is structured differently
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-light p-8 rounded-3xl border border-green-200"
              >
                <h3 className="font-georgia text-2xl text-green-700 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  What the programme focuses on
                </h3>
                <ul className="space-y-4">
                  {[
                    "Dose titration from 0.25 mg upward based on tolerability and progress",
                    "Lifestyle coaching and habit reinforcement during the active weight-loss phase",
                    "Consolidation and exit planning rather than abrupt stopping",
                    "Weight maintenance strategy to reduce rebound risk after treatment",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                      <span className="font-inter text-brown">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-light p-8 rounded-3xl border border-red-200"
              >
                <h3 className="font-georgia text-2xl text-wine mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  What many patients worry about
                </h3>
                <ul className="space-y-4">
                  {[
                    "Rebound weight gain after stopping the medication",
                    "Using the drug without a long-term lifestyle plan",
                    "Taking pens without structured follow-up or blood monitoring",
                    "Stopping treatment without tapering or maintenance support",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 items-start"
                    >
                      <XCircle className="w-4 h-4 text-wine shrink-0 mt-1" />
                      <span className="font-inter text-brown">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Starting Programme */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-6"
            >
              Starting your Ozempic programme at Nexus Clinic KL
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe font-inter max-w-2xl mx-auto mb-16"
            >
              The programme is built around assessment, safety, dose titration,
              and long-term planning rather than simple medication dispensing.
            </motion.p>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  step: "1",
                  title: "Medical consultation",
                  desc: "Full health review, BMI, medications, goals and contraindications assessed",
                },
                {
                  step: "2",
                  title: "Blood panel",
                  desc: "Baseline liver, kidney, HbA1c, lipid and metabolic screening before prescription",
                },
                {
                  step: "3",
                  title: "Treatment plan",
                  desc: "Personalised dose schedule beginning at 0.25 mg weekly",
                },
                {
                  step: "4",
                  title: "Monthly reviews",
                  desc: "Progress, side effects, titration and tolerability reviewed by doctor",
                },
                {
                  step: "5",
                  title: "Exit planning",
                  desc: "Taper or long-term maintenance strategy introduced from later phases",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 bg-glass backdrop-blur-sm rounded-2xl border border-taupe/10 text-center"
                >
                  <div className="w-10 h-10 bg-wine text-light rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-georgia text-lg text-brown mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Before & After */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Side Effects & Safety */}
        <section className="py-24 px-4 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-6"
            >
              Side effects, contraindications and safety
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe font-inter max-w-2xl mx-auto mb-16"
            >
              Most side effects are gastrointestinal and are most noticeable
              during early titration. Proper starting dose and monitoring help
              reduce treatment interruption.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h3 className="font-georgia text-2xl text-brown">
                  Common side effects
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Nausea",
                    "Vomiting",
                    "Diarrhoea",
                    "Constipation",
                    "Abdominal discomfort",
                    "Reduced appetite",
                    "Temporary digestive upset",
                  ].map((effect, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="p-3 bg-glass rounded-xl border border-taupe/10 text-center"
                    >
                      <span className="text-sm font-inter text-brown">
                        {effect}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-wine/5 p-8 rounded-3xl"
              >
                <h3 className="font-georgia text-2xl text-wine mb-6">
                  Important safety points
                </h3>
                <p className="font-inter text-sm text-brown mb-4">
                  Ozempic is not suitable for every patient. Doctor review is
                  essential before treatment starts.
                </p>
                <ul className="space-y-4">
                  {[
                    "Patients with pancreatitis history require careful exclusion or review",
                    "Patients with medullary thyroid carcinoma or MEN2 must not use semaglutide",
                    "Pregnant patients or those planning pregnancy should not use Ozempic",
                    "Patients on diabetes medication may need additional blood sugar monitoring",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 items-start"
                    >
                      <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-1" />
                      <span className="text-sm font-inter text-brown">
                        {text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-light rounded-xl border border-wine/20">
                  <p className="text-xs font-inter text-brown">
                    <span className="font-bold">Clinical principle:</span> no
                    prescription refills without healthcare review. Monitoring is
                    part of safe prescribing.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              Ozempic Malaysia price guide 2026
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="bg-light p-8 rounded-3xl border-2 border-wine/20">
                  <h3 className="font-georgia text-3xl text-wine mb-2">
                    RM 900 - RM 1,400
                  </h3>
                  <p className="text-taupe font-inter mb-6">
                    per pen depending on dose
                  </p>
                  <p className="text-sm font-inter text-brown">
                    Starter-dose pens are usually lower in monthly cost, while 1
                    mg maintenance-phase pens typically cost more. Consultation,
                    bloodwork and reviews are separate programme components.
                  </p>
                </div>

                <div className="bg-glass p-6 rounded-2xl">
                  <p className="text-sm font-inter text-brown">
                    Typical 2026 programme components include consultation,
                    bloodwork, medication, and monthly doctor review. Package
                    pricing may reduce total cost over three-month and six-month
                    programmes.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-4">
                {[
                  "Initial consultation: RM 150 to RM 300",
                  "Pre-treatment blood panel: RM 200 to RM 400",
                  "Starter pen: RM 900 to RM 1,100",
                  "1 mg maintenance pen: RM 1,000 to RM 1,400",
                  "Monthly doctor review: RM 100 to RM 200",
                  "3-month package: from RM 3,200",
                  "6-month package: from RM 6,000",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex gap-4 p-4 bg-light rounded-xl"
                  >
                    <span className="font-bold text-wine min-w-24">
                      {index + 1}
                    </span>
                    <span className="text-sm font-inter text-brown">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Nexus Approach */}
        <section className="py-24 px-4 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-6"
            >
              The Nexus Clinic KL approach
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe font-inter max-w-2xl mx-auto mb-16"
            >
              The aim is not only to help patients lose weight. It is also to
              help them maintain that result with proper monitoring,
              habit-building and transition planning.
            </motion.p>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  step: "1",
                  title: "Doctor screening",
                  desc: "Clinical assessment before any prescription",
                },
                {
                  step: "2",
                  title: "Dose titration",
                  desc: "Gradual increase from 0.25 mg to reduce side effects",
                },
                {
                  step: "3",
                  title: "Bloodwork review",
                  desc: "Baseline and follow-up metabolic monitoring",
                },
                {
                  step: "4",
                  title: "Lifestyle support",
                  desc: "Nutrition and behaviour reinforcement during the programme",
                },
                {
                  step: "5",
                  title: "Maintenance plan",
                  desc: "Tapering or continuation plan to reduce rebound risk",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 bg-glass backdrop-blur-sm rounded-2xl border border-taupe/10 text-center"
                >
                  <div className="w-10 h-10 bg-wine text-light rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-georgia text-lg text-brown mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQWithSchema data={faqs} />

        {/* CTA Section */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6"
            >
              Book a doctor-led Ozempic assessment in Kuala Lumpur
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-lg mb-12 max-w-2xl mx-auto"
            >
              If you are considering Ozempic weight loss treatment in Malaysia,
              start with a proper medical discussion. Nexus Clinic KL focuses on
              safe prescribing, transparent programme structure and realistic
              long-term planning.
            </motion.p>

            <motion.a
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact-us/"
              className="px-12 py-5 bg-wine text-light font-inter text-lg rounded-full hover:bg-rose transition-colors shadow-xl hover:shadow-2xl"
            >
              Book Free Assessment
            </motion.a>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default PageOzempicMalaysia;