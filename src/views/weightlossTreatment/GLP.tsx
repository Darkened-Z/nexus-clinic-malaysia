"use client";

import { motion } from "framer-motion";
import {
  Shield,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Target,
  Brain,
  Activity,
  ChevronRight,
  Phone,
  Heart as HeartIcon,
  Pill,
  Award,
  MapPin,
  Clock,
  Syringe,
  Stethoscope,
  Scale as ScaleIcon,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQWithSchema from "../../components/FAQWithSchema";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import Image from "next/image";
const GLP1LandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "weightLoss/glp1");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-GLP1.webp",
      after: "/images/B&A-w/B&A-GLP1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-GLP2.webp",
      after: "/images/B&A-w/B&A-GLP2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-GLP3.webp",
      after: "/images/B&A-w/B&A-GLP3.webp",
    },
  ];

  const faqs = [
    {
      q: "How does GLP-1 therapy actually reduce appetite and support weight loss?",
      a: "GLP-1 therapy amplifies the body's fullness signals, slows stomach emptying, supports insulin release when glucose is high, and reduces the constant food noise that makes calorie control difficult. Patients usually feel satisfied with smaller meals and experience fewer cravings between meals.",
    },
    {
      q: "How long does it take to see results on a GLP-1 programme?",
      a: "Most patients notice reduced appetite and early weight change within the first few weeks. Clinically meaningful loss of more than 5% of body weight is often seen within 3 to 6 months at therapeutic doses, while full programme benefits usually build over 12 months.",
    },
    {
      q: "Ozempic vs Wegovy: what is the difference?",
      a: "Both contain semaglutide, but Ozempic is mainly positioned for type 2 diabetes at doses up to 1mg weekly, while Wegovy is specifically designed for chronic weight management at doses up to 2.4mg weekly and usually produces stronger appetite suppression and greater weight loss.",
    },
    {
      q: "Are GLP-1 injections safe for long-term use?",
      a: "Yes, long-term GLP-1 use is generally appropriate under medical supervision with regular blood tests, blood pressure monitoring, review of side effects, and treatment-plan adjustments when needed.",
    },
    {
      q: "GLP-1 or Duromine: which is right for my situation?",
      a: "Duromine is a short-term appetite suppressant that works quickly but is limited to fixed cycles. GLP-1 programmes are longer-term, produce greater overall metabolic benefit, and are often better for patients with diabetes, obesity, or cardiovascular risk factors.",
    },
    {
      q: "Can I take GLP-1 injections if I have type 2 diabetes alongside obesity?",
      a: "Yes. This is one of the strongest indications for GLP-1 prescribing. Semaglutide and tirzepatide can improve blood sugar control and support weight loss at the same time, although insulin or sulphonylurea doses may need adjustment during treatment.",
    },
    {
      q: "What are the main contraindications for GLP-1 prescribing in Malaysia?",
      a: "Patients with a personal or family history of medullary thyroid carcinoma or MEN2 should not use GLP-1 therapy. Pregnancy and breastfeeding are absolute contraindications, and patients with pancreatitis history, severe renal impairment, major gastrointestinal conditions, or active eating disorders need careful assessment.",
    },
    {
      q: "How is the injection administered and is it painful?",
      a: "GLP-1 injections are subcutaneous injections given under the skin, usually in the abdomen, thigh, or upper arm. They use fine-gauge pre-filled pens and most patients describe them as only a small pinch. Injection training is provided before self-administration at home.",
    },
    {
      q: "Saxenda vs Ozempic vs Mounjaro: which should I start with?",
      a: "That depends on your clinical profile, your weight goal, your diabetes status, convenience preference, and budget. Saxenda is daily, while Ozempic and Mounjaro are weekly. Tirzepatide usually delivers the strongest average weight loss, while semaglutide remains a highly established entry point.",
    },
    {
      q: "How much does a GLP-1 programme cost in Malaysia?",
      a: "Pricing depends on the medication, dose, and level of clinical support. At Nexus Clinic KL, indicative 2026 monthly ranges run from around RM 600 to RM 1,800 depending on the specific programme, with comprehensive supported packages going higher.",
    },
  ];

  return (
    <div className="bg-light font-inter overflow-x-hidden">
        <AllPagesHero
          badge="Doctor-Led GLP-1 Injection Programme at Nexus Clinic KL"
          title="GLP-1 Injection Programme"
          highlight="in Malaysia"
          description="A personalised GLP-1 weight loss and appetite-control programme in Kuala Lumpur using clinically proven injectable therapy with proper doctor screening, dose titration, and monthly follow-up."
          details="At Nexus Clinic KL, this is not a one-off prescription. It is a structured medical programme built around your metabolic health, diabetes status if relevant, weight history, and real lifestyle."
          note="Trust at Nexus Clinic Kuala Lumpur: Doctor-led weight management • Medications: Ozempic, Wegovy, Mounjaro, Zepbound, Saxenda • Safety-first dose titration • Structured long-term metabolic care"
          image="/images/main/GLP-programme.webp"
          imageAlt="GLP-1 Injection Programme at Nexus Clinic Kuala Lumpur"
          ctaText="Book Free Consultation"
          whatsappMessage="Hi, I'm interested in the GLP-1 Injection Programme at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle="GLP-1 Programme"
          floatingSubtitle="Ozempic • Wegovy • Mounjaro • Zepbound • Saxenda"
          staggerContainer={staggerContainer}
          fadeInLeft={fadeInLeft}
          fadeInRight={fadeInRight}
          fadeInUp={fadeInUp}
        />

        {/* Trust Features Section */}
        {/* <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl px-4 -mt-8 relative z-20"
        >
          <div className="bg-glass backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-serif text-brown mb-6 text-center">Trust at Nexus Clinic Kuala Lumpur</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div variants={fadeInUp} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">Doctor-led weight management with real screening, monthly monitoring and follow-up</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">Medication selection across Ozempic, Wegovy, Mounjaro, Zepbound and Saxenda</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">Safety-first dose titration with side-effect support, blood tests and review appointments</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">Structured long-term weight and metabolic health care, not a one-time jab</span>
              </motion.div>
            </div>
          </div>
        </motion.div> */}
      {/* Programme At a Glance */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              GLP-1 Programme at a Glance
            </h2>
            <p className="text-xl text-taupe">
              A clinically grounded, doctor-guided programme built around weight,
              appetite and metabolic control.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Syringe className="w-8 h-8 text-wine" />,
                title: "Available Medications",
                text: "Ozempic, Wegovy, Mounjaro, Zepbound, Saxenda",
              },
              {
                icon: <Clock className="w-8 h-8 text-wine" />,
                title: "Administration",
                text: "Mostly once-weekly injections; Saxenda is daily",
              },
              {
                icon: <Target className="w-8 h-8 text-wine" />,
                title: "Average Weight Loss",
                text: "10 to 22.5% of body weight over 6 to 12 months",
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-wine" />,
                title: "Monitoring",
                text: "Monthly reviews, blood panel, blood pressure, progress tracking",
              },
              {
                icon: <ScaleIcon className="w-8 h-8 text-wine" />,
                title: "Suitable For",
                text: "BMI 27+ with comorbidity or BMI 30+ without",
              },
              {
                icon: <HeartIcon className="w-8 h-8 text-wine" />,
                title: "Diabetes Support",
                text: "Type 2 diabetes patients may benefit from one integrated plan",
              },
              {
                icon: <Award className="w-8 h-8 text-wine" />,
                title: "Programme Duration",
                text: "Long-term ongoing, based on goals and health profile",
              },
              {
                icon: <MapPin className="w-8 h-8 text-wine" />,
                title: "Location",
                text: "Wisma UOA II, Jalan Pinang, Kuala Lumpur",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.05 }}
                className="bg-light p-6 rounded-3xl shadow-md"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif text-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-brown/80 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is GLP-1 */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-brown">
                What is a GLP-1 weight loss programme?
              </h2>

              <div className="space-y-4 text-brown/80 text-lg leading-relaxed">
                <p>
                  GLP-1 is a naturally occurring hormone that signals fullness,
                  slows stomach emptying, and supports insulin release when blood sugar rises.
                </p>
                <p>
                  GLP-1 receptor agonist medications are synthetic versions that
                  activate this pathway more strongly and for longer, helping patients
                  feel satisfied with smaller portions and reducing the constant appetite
                  drive that makes ordinary dieting fail.
                </p>
                <p className="font-medium text-wine">
                  At Nexus Clinic Kuala Lumpur, the goal is simple: reduce food
                  noise, improve appetite control, and build sustainable habits
                  while your biology is actually helping you.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/weight-loss/GLP-1 Injection Treatment.webp"
                  alt="Doctor consultation at Nexus Clinic Kuala Lumpur"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-brown to-transparent">
                  <p className="text-light font-medium">
                    Medical consultation at Nexus Clinic Kuala Lumpur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Medication Selection */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              GLP-1 Injections Available in Malaysia
            </h2>
            <p className="text-xl text-taupe">
              The right medication is selected based on your profile, not simply on popularity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                name: "Ozempic",
                text: "Semaglutide, weekly, type 2 diabetes with off-label weight loss use",
              },
              {
                name: "Wegovy",
                text: "Semaglutide 2.4mg, weekly, chronic weight management",
              },
              {
                name: "Mounjaro",
                text: "Tirzepatide, weekly, dual GIP + GLP-1, type 2 diabetes with off-label weight loss use",
              },
              {
                name: "Zepbound",
                text: "Tirzepatide, weekly, chronic weight management",
              },
              {
                name: "Saxenda",
                text: "Liraglutide 3.0mg, daily, chronic weight management",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.05 }}
                className="bg-light p-5 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-serif text-wine mb-3">{item.name}</h3>
                <p className="text-brown/80 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual GIP vs GLP-1 */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
                GLP-1 vs Dual GIP and GLP-1
              </h2>
              <p className="text-lg text-brown/80 mb-6">
                The newest step forward in this space is tirzepatide, which activates
                both the GLP-1 receptor and the GIP receptor. That dual pathway produces
                stronger average weight loss and broader metabolic impact in many patients.
              </p>
              <p className="text-lg text-brown/80">
                In simplified terms, semaglutide is powerful. Tirzepatide is often stronger.
                The right choice still depends on your diabetes status, budget, target,
                tolerability and clinical profile.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-rose/10 p-8 rounded-2xl border border-wine/20">
              <h3 className="text-2xl font-serif text-wine mb-6">
                Trial-level difference in outcomes
              </h3>
              <ul className="space-y-4 text-brown">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span>GLP-1 only agents: around 10 to 16% body-weight reduction over 12 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span>Dual GIP + GLP-1 agents: around 15 to 22.5% over 12 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span>Dual agonists also tend to show stronger blood sugar and metabolic benefits</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diabetes management */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              GLP-1 Weight Loss and Diabetes Management
            </h2>
            <p className="text-lg text-brown/80 mb-6">
              GLP-1 medicines were originally developed for type 2 diabetes,
              and this remains one of their most important strengths. For the
              right patient, one programme can address both blood sugar and body weight.
            </p>
            <div className="bg-light p-8 rounded-2xl shadow-sm">
              <p className="text-brown/80">
                Semaglutide and tirzepatide can lower HbA1c, improve fasting glucose,
                reduce post-meal spikes, and in some patients reduce the need for additional
                diabetes medication as weight and insulin resistance improve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility and BMI */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              Eligibility and BMI
            </h2>
            <p className="text-xl text-taupe">
              BMI matters, but the full clinical picture matters more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-wine" />
              </div>
              <p className="text-brown text-lg">
                Adults with BMI 30 or above
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-wine" />
              </div>
              <p className="text-brown text-lg">
                Adults with BMI 27 or above plus at least one weight-related condition
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-wine" />
              </div>
              <p className="text-brown text-lg">
                Patients with diabetes, hypertension, dyslipidaemia or sleep apnoea may benefit strongly
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-wine" />
              </div>
              <p className="text-brown text-lg">
                Final prescribing decisions are based on history, medications, thyroid, cardiovascular and metabolic review
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-wine text-light p-8 rounded-2xl mb-12"
          >
            <h3 className="text-2xl font-serif mb-6">
              This is not a one-size-fits-all prescription
            </h3>
            <p>
              Nexus Clinic KL reviews your health history, current medications,
              cardiovascular status, thyroid risk, diabetes treatment if relevant,
              and your broader metabolic profile before recommending any medication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contraindications and safety */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
                Who should avoid GLP-1 medicines or be assessed carefully?
              </h2>

              <div className="space-y-4">
                {[
                  "Personal or family history of medullary thyroid carcinoma or MEN2",
                  "Pregnancy, trying to conceive, or breastfeeding",
                  "History of pancreatitis",
                  "Severe gastrointestinal disease or gastroparesis concerns",
                  "Significant renal impairment",
                  "Active eating disorder history requiring specialist review",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInRight}
                    className="flex items-start gap-3 p-4 bg-light rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown">{item}</span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-6 text-brown/80">
                These exclusions exist to protect patients, not to make treatment harder.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-rose/10 p-8 rounded-2xl border-2 border-wine/20">
                <h3 className="text-2xl font-serif text-wine mb-6">
                  Malaysia-specific safety note: surgery and sedation
                </h3>
                <div className="space-y-4 text-brown">
                  <p>
                    GLP-1 therapy can delay stomach emptying. NPRA has issued a safety
                    communication on aspiration risk during general anaesthesia or deep sedation.
                  </p>
                  <p className="font-medium bg-white p-4 rounded-lg">
                    If you have a procedure planned, tell your doctor and anaesthetist that
                    you are on GLP-1 therapy. Do not self-stop or self-adjust without advice.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              Month-by-Month GLP-1 Programme Timeline
            </h2>
            <p className="text-xl text-taupe">
              Unlike HCG or Duromine, GLP-1 treatment builds over months.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                title: "Month 1",
                text: "Starting dose titration. Appetite control begins. Mild nausea possible. Most patients lose 2 to 4 kg.",
              },
              {
                title: "Month 2 to 3",
                text: "Dose escalation if tolerated. Appetite more stable. Cravings reduce. 4 to 8 kg total loss typical.",
              },
              {
                title: "Month 4 to 6",
                text: "Therapeutic level reached. Peak fat-loss rate in many patients. 8 to 14 kg total loss possible.",
              },
              {
                title: "Month 7 to 12",
                text: "Long-term metabolic benefits consolidate. Total 10 to 22.5% body-weight reduction achievable.",
              },
              {
                title: "Ongoing",
                text: "Annual review, dose adjustment, tapering or maintenance planning depending on results and goals.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-cream p-6 rounded-2xl shadow-md"
              >
                <h3 className="text-xl font-serif text-wine mb-3">{item.title}</h3>
                <p className="text-brown/80 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme structure */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              What’s inside a doctor-monitored GLP-1 programme
            </h2>
            <p className="text-xl text-taupe">
              A good programme feels like a clear medical path, not just a pen.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl font-serif text-wine">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-brown mb-4">
                    Medical assessment
                  </h3>
                  <p className="text-brown/70 mb-4">
                    Your doctor reviews weight history, cravings, diabetes status,
                    cardiovascular risk, current medicines, lifestyle patterns, and baseline measurements.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl font-serif text-wine">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-brown mb-4">
                    Medication selection and titration plan
                  </h3>
                  <p className="text-brown/70 mb-4">
                    The doctor chooses the right medication and starting dose based on
                    your clinical profile, then titrates slowly to minimise side effects.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl font-serif text-wine">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-brown mb-4">
                    Practical food and lifestyle support
                  </h3>
                  <p className="text-brown/70 mb-4">
                    The programme supports protein-forward meals, fibre, realistic portions,
                    slower eating, and a plan that works with Malaysian daily life rather than against it.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl font-serif text-wine">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-brown mb-4">
                    Monthly reviews and adjustment
                  </h3>
                  <p className="text-brown/70 mb-4">
                    Appetite response, weight trend, side effects, digestion, blood pressure,
                    labs and treatment goals are reviewed regularly to keep the programme safe and effective.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Realistic results */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              What results can you realistically expect?
            </h2>
            <p className="text-xl text-taupe">
              The scale usually follows appetite change, not the other way around.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              variants={scaleIn}
              className="bg-cream p-6 rounded-xl text-center shadow-md"
            >
              <Target className="w-12 h-12 text-wine mx-auto mb-4" />
              <h3 className="text-xl font-serif text-brown mb-2">
                Semaglutide
              </h3>
              <p className="text-taupe">Around 10 to 15% over time, depending on protocol and dose</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-cream p-6 rounded-xl text-center shadow-md"
            >
              <Target className="w-12 h-12 text-wine mx-auto mb-4" />
              <h3 className="text-xl font-serif text-brown mb-2">
                Wegovy-level dosing
              </h3>
              <p className="text-taupe">Around 14.9% mean loss in STEP 1 at 68 weeks</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-cream p-6 rounded-xl text-center shadow-md"
            >
              <Target className="w-12 h-12 text-wine mx-auto mb-4" />
              <h3 className="text-xl font-serif text-brown mb-2">
                Tirzepatide
              </h3>
              <p className="text-taupe">Up to about 22.5% mean loss in SURMOUNT-1 at the highest dose</p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-wine text-light p-8 rounded-2xl"
          >
            <p className="text-lg mb-4">Your result depends on:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-light/80" />
                <span>Starting weight and metabolic health</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-light/80" />
                <span>Dose tolerance and titration pace</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-light/80" />
                <span>Food routine, protein intake and sleep</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-light/80" />
                <span>Consistency over months, not days</span>
              </div>
            </div>
            <p className="mt-4 text-light/80">
              Most patients notice changes in appetite first, then meal size, then clothing fit, then the scale.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side effects */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
                Common side effects and how the clinic manages them
              </h2>
              <p className="text-lg text-brown/80 mb-8">
                Most side effects are gastrointestinal and are strongest during early treatment
                or dose escalation.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Nausea",
                  "Constipation",
                  "Diarrhoea",
                  "Fatigue",
                  "Headache",
                  "Mild vomiting",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-light p-4 rounded-lg text-center shadow-sm"
                  >
                    <span className="text-brown font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-light p-6 rounded-2xl">
                <p className="text-brown/80">
                  Most patients find that nausea improves significantly by week four of each dose tier.
                  Constipation usually responds to hydration and fibre, and dose escalation is not rushed when tolerability is poor.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-rose/10 p-6 rounded-2xl border-l-4 border-wine">
                <h3 className="text-xl font-serif text-brown mb-3">
                  Serious but uncommon risks
                </h3>
                <p className="text-brown/80">
                  Pancreatitis, gallbladder disease, and thyroid-related risk discussions
                  are part of informed consent. Any severe abdominal pain, persistent vomiting,
                  or unusual symptoms should be reported promptly.
                </p>
              </div>

              <div className="bg-light p-6 rounded-2xl">
                <h3 className="text-xl font-serif text-brown mb-3">
                  Why monitoring matters
                </h3>
                <p className="text-brown/80">
                  At Nexus Clinic KL, the medical team adjusts the programme if side effects
                  are disproportionate, persistent, or clinically inappropriate for continued escalation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              GLP-1 Programme Price in Malaysia 2026
            </h2>
            <p className="text-xl text-taupe">
              Pricing depends on medication, dose and level of support included.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Initial Consultation + Blood Panel", "Complimentary consultation; blood tests from RM 200"],
              ["Saxenda Starter Programme", "RM 600 to RM 900 per month"],
              ["Ozempic Programme", "RM 700 to RM 1,200 per month"],
              ["Wegovy Programme", "RM 900 to RM 1,500 per month"],
              ["Mounjaro Programme", "RM 900 to RM 1,800 per month"],
              ["Zepbound Programme", "RM 900 to RM 1,800 per month"],
              ["Comprehensive GLP-1 Package", "RM 1,200 to RM 2,500 per month"],
            ].map(([title, price], index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-cream p-6 rounded-2xl shadow-md"
              >
                <h3 className="text-xl font-serif text-wine mb-3">{title}</h3>
                <p className="text-brown">{price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema data={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-wine relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/clinic/interior.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center text-light"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to start a doctor-led GLP-1 programme?
            </h2>
            <p className="text-xl text-light/90 mb-8 leading-relaxed">
              If your appetite feels like it is running the show, a proper GLP-1 programme
              in Kuala Lumpur can give you structure, medical safety, and a plan you can actually follow.
            </p>
            <p className="text-lg text-light/80 mb-12">
              Start with a full assessment at Nexus Clinic Kuala Lumpur so your plan fits
              your body, your risks, your medication profile and your goals.
            </p>
            <motion.a
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact-us/"
              className="bg-light text-wine px-12 py-4 rounded-full font-medium text-lg hover:bg-cream transition-colors shadow-xl inline-flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <motion.a
        href="#"
        className="fixed bottom-6 right-6 bg-wine text-light p-4 rounded-full shadow-xl hover:bg-rose transition-colors z-50 flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Phone className="w-5 h-5" />
        <span className="hidden md:inline">Book Consultation</span>
      </motion.a>
    </div>
  );
};

export default GLP1LandingPage;