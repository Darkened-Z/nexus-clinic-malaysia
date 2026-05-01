"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  MapPin,
  ChevronRight,
  CheckCircle2,
  XCircle,
  FileText,
  ArrowRight,
  Heart,
  Scale,
  AlertCircle,
  Clock,
  Users,
  Syringe,
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
export default function DoctorMonitoredLanding({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "weightLoss/doctorMonitored");

  const faqs = [
    {
      q: "How is doctor monitored weight loss different from commercial slimming centres?",
      a: "A medical weight loss clinic operates under medical licensing with licensed doctors who can prescribe, adjust, and supervise treatment, conduct blood tests, and manage health conditions that complicate weight loss. Commercial slimming centres cannot provide the same clinical supervision.",
    },
    {
      q: "Do I need to follow a strict diet and exercise plan during the programme?",
      a: "Diet and exercise still matter, but the programme is designed to be realistic rather than rigid. Nutrition and activity guidance are adapted to Malaysian food culture, lifestyle, and any mobility limitations.",
    },
    {
      q: "Am I a candidate for GLP-1 weight loss medications like Ozempic or Mounjaro?",
      a: "GLP-1 medications are generally considered for adults with BMI 27 or above plus at least one weight-related medical condition, or BMI 30 or above without comorbidities. Full medical consultation and blood tests are required before prescription.",
    },
    {
      q: "How much weight can I expect to lose on a medically supervised programme?",
      a: "Results vary by starting weight, protocol, adherence and metabolic profile. As a broad guide, Duromine or HCG programmes may produce a few kilograms per month, while GLP-1 programmes and tirzepatide-based programmes can produce much larger percentage reductions over longer timelines.",
    },
    {
      q: "Is bariatric surgery something Nexus Clinic KL offers or can refer for?",
      a: "Nexus Clinic KL does not perform bariatric surgery directly but can provide medically guided preparation, maintenance support, and referral to accredited bariatric specialists in Kuala Lumpur when surgery is the appropriate option.",
    },
    {
      q: "What blood tests are done as part of the weight loss programme?",
      a: "The initial blood panel may include full blood count, kidney and liver function, fasting glucose, HbA1c, lipid profile, thyroid markers, and selected hormonal markers when clinically indicated.",
    },
    {
      q: "Can I lose weight if I have a hormonal condition like hypothyroidism or PCOS?",
      a: "Yes, but the programme must account for the hormonal driver. Nexus Clinic KL screens for issues like thyroid dysfunction, insulin resistance and PCOS-related metabolic problems before finalising the treatment plan.",
    },
    {
      q: "How long do I need to stay on weight loss medications?",
      a: "The answer depends on the medication and your clinical response. GLP-1 programmes are often longer-term because obesity is a chronic condition and stopping treatment too early can lead to regain without a proper maintenance strategy.",
    },
    {
      q: "Is the weight loss programme safe for patients with hypertension or diabetes?",
      a: "Yes, and in many cases it is especially appropriate because even modest weight loss can improve blood pressure, glucose control and cardiovascular risk. These patients are monitored more closely during active treatment.",
    },
    {
      q: "How do I get started with a weight loss programme at Nexus Clinic KL?",
      a: "The process starts with a complimentary first consultation at Nexus Clinic KL, followed by medical assessment, blood tests when needed, and a personalised plan before treatment begins.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <AllPagesHero
        badge="Expert Doctor-Led Weight Management in Malaysia"
        title="Medically Supervised Weight Loss in Malaysia"
        highlight="Lasting, Structured Results at Nexus Clinic KL"
        description="Weight is not just about appearance. It affects your heart, joints, hormones, sleep and long-term health. Our doctor-led programmes are built to treat the biology behind weight gain, not just the symptoms."
        details="At Nexus Clinic Kuala Lumpur, every programme is supervised by licensed doctors who review your medical history, assess the root causes of weight gain, and build a plan based on your body, your risk profile and your lifestyle."
        note="Programmes available: GLP-1, Duromine, HCG, Wegovy, Ozempic, Mounjaro — All medically supervised at Nexus Clinic KL."
        image="/images/main/doctor-monitored-malaysia.webp"
        imageAlt="Doctor consultation at Nexus Clinic Kuala Lumpur"
        ctaText="Book Free Consultation"
        whatsappMessage="Hi, I'm interested in weight management treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Programmes available:"
        floatingSubtitle="GLP-1, Duromine, HCG, Wegovy, Ozempic, Mounjaro"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Trust Bar Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 -mt-8 relative z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-md">
              <Shield className="w-6 h-6 text-wine mx-auto mb-2" />
              <div className="font-inter font-medium text-brown text-sm">Doctor supervised</div>
              <div className="text-taupe text-xs">licensed medical setting</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-md">
              <Clock className="w-6 h-6 text-wine mx-auto mb-2" />
              <div className="font-inter font-medium text-brown text-sm">45-60 min first visit</div>
              <div className="text-taupe text-xs">20-30 min follow-ups</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-md">
              <Activity className="w-6 h-6 text-wine mx-auto mb-2" />
              <div className="font-inter font-medium text-brown text-sm">Weekly or fortnightly</div>
              <div className="text-taupe text-xs">progress tracking</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-md">
              <MapPin className="w-6 h-6 text-wine mx-auto mb-2" />
              <div className="font-inter font-medium text-brown text-sm">Kuala Lumpur clinic</div>
              <div className="text-taupe text-xs">Wisma UOA II, Jalan Pinang</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Programme At a Glance */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-4xl text-brown mb-12 text-center"
            >
              Doctor Monitored Weight Loss Programme at a Glance
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ["Programme Type", "Doctor Monitored Weight Loss"],
                ["Downtime", "None. Fully non-invasive options available"],
                ["Weight Loss Rate", "0.5 to 1.5 kg per week depending on protocol"],
                ["Supervision", "Weekly or fortnightly check-ins"],
                ["Suitable For", "BMI above 25, obesity-related conditions, failed previous attempts"],
                ["Medications", "GLP-1 agonists, Duromine, HCG, Mounjaro, Wegovy, Ozempic"],
                ["Surgical Option", "Bariatric referral for eligible BMI 35+ patients"],
                ["First Step", "Complimentary consultation"],
              ].map(([title, text], index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream rounded-3xl p-6 shadow-sm"
                >
                  <h3 className="font-georgia text-lg text-wine mb-2">{title}</h3>
                  <p className="font-inter text-brown/80 text-sm">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Root Causes Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Addressing the root causes of weight gain
              </h2>

              <p className="font-inter text-brown/80">
                Modern obesity medicine recognises that weight gain is not a
                personal failure. It is driven by hormonal, metabolic,
                neurological, structural and behavioural factors that often
                require medical intervention to correct.
              </p>

              <p className="font-inter text-brown/80">
                This is why diet and exercise alone often fail without medical
                support. Repeated caloric restriction can slow metabolism,
                increase hunger and encourage rebound weight gain. Doctor-led
                weight loss works by treating the physiology behind the pattern.
              </p>

              <div className="bg-light rounded-2xl p-6">
                <p className="font-inter text-brown">
                  At Nexus Clinic KL, the programme is matched to the causes
                  driving your weight gain, not simply to the number on the
                  scale.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              {[
                {
                  title: "Hormonal imbalance",
                  desc: "Thyroid issues, PCOS, insulin resistance and cortisol-related fat storage patterns.",
                },
                {
                  title: "Metabolic adaptation",
                  desc: "Repeated dieting lowers metabolic rate and makes further loss harder.",
                },
                {
                  title: "Neurological appetite signals",
                  desc: "Leptin and ghrelin dysfunction can drive persistent hunger despite adequate intake.",
                },
                {
                  title: "Structural and mobility barriers",
                  desc: "Joint pain or disability can limit physical activity and worsen weight gain.",
                },
                {
                  title: "Behavioural and environmental factors",
                  desc: "Stress, sleep deprivation, emotional eating and Malaysian food culture can all contribute.",
                },
                {
                  title: "Medication-induced weight gain",
                  desc: "Some antidepressants, steroids and diabetes drugs can worsen excess weight.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-light rounded-2xl p-5 shadow-sm"
                >
                  <h3 className="font-georgia text-xl text-wine mb-2">{item.title}</h3>
                  <p className="font-inter text-brown/75 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Patient Profile Guide */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
            Choosing the right programme by patient profile
          </h2>

          <p className="font-inter text-brown/80 mb-10 max-w-4xl">
            Not every patient needs the same strategy. The doctor at Nexus
            Clinic KL matches your programme to your BMI, medical history, risk
            factors and previous weight-loss experience.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Mild overweight, no comorbidities",
                desc: "BMI 25 to 29.9: structured lifestyle plus Duromine or HCG programme.",
              },
              {
                title: "Moderate obesity, early metabolic issues",
                desc: "BMI 30 to 34.9: GLP-1 programme like Ozempic or Saxenda with dietary coaching.",
              },
              {
                title: "Significant obesity, hypertension or fatty liver",
                desc: "BMI 35 to 39.9: Mounjaro or Wegovy plus metabolic workup and meal planning.",
              },
              {
                title: "Severe obesity, multiple risk factors",
                desc: "BMI 40 and above: intensive GLP-1 protocol or bariatric surgery evaluation.",
              },
              {
                title: "Weight plateau after previous programme",
                desc: "Protocol switch, dose escalation or selective adjunct body contouring discussion.",
              },
              {
                title: "Post-bariatric maintenance",
                desc: "Medical supervision, nutrition monitoring and hormonal support where needed.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-georgia text-xl text-wine mb-3">{item.title}</h3>
                <p className="font-inter text-brown/75">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Risk Factors and Medications */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Why professional guidance matters
              </h2>

              <p className="font-inter text-brown/80">
                Obesity increases the risk of type 2 diabetes, hypertension,
                heart disease, fatty liver disease, sleep apnoea, joint pain
                and reduced mobility. In these cases, self-directed weight loss
                is not enough. It needs monitoring.
              </p>

              <div className="bg-light rounded-3xl p-8">
                <h3 className="font-georgia text-2xl text-wine mb-4">
                  What doctor supervision protects
                </h3>
                <ul className="space-y-3">
                  {[
                    "Safe medication selection and titration",
                    "Monitoring of blood pressure, pulse and metabolic markers",
                    "Adjustment of existing diabetes or hypertension medicines",
                    "Early detection of side effects or nutritional issues",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="font-inter text-brown/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Weight loss medications at Nexus Clinic KL
              </h2>

              <p className="font-inter text-brown/80">
                GLP-1 medications and other prescription tools have transformed
                medically supervised weight loss in Malaysia. These are used
                only after consultation and assessment.
              </p>

              <div className="grid gap-4">
                {[
                  ["Ozempic", "GLP-1 weekly injection, diabetes plus weight management"],
                  ["Mounjaro", "Dual GIP/GLP-1 weekly injection, maximum metabolic impact"],
                  ["Wegovy", "Higher-dose semaglutide, obesity-specific indication"],
                  ["Saxenda", "Daily GLP-1 injection, often first-time GLP-1 pathway"],
                  ["Duromine", "Daily oral appetite suppressant for shorter-term use"],
                  ["HCG Protocol", "Fast initial metabolic reset structure"],
                ].map(([title, desc], index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-light rounded-2xl p-5 flex items-start gap-4"
                  >
                    <Syringe className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <div>
                      <h3 className="font-georgia text-xl text-wine">{title}</h3>
                      <p className="font-inter text-brown/75 text-sm">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bariatric Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto bg-cream rounded-3xl p-8">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              Bariatric surgery: when surgery becomes the right choice
            </h2>
            <p className="font-inter text-brown/80 mb-4">
              For patients with BMI 35 or above, especially with comorbidities
              like type 2 diabetes, severe hypertension or fatty liver disease,
              bariatric surgery may be the most clinically appropriate pathway.
            </p>
            <p className="font-inter text-brown/80">
              Nexus Clinic KL does not perform bariatric surgery directly, but
              it can provide honest guidance, referral, pre-operative support
              and post-bariatric maintenance care when surgery is proportionate
              and necessary.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Step by Step Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
            The doctor monitored programme at Nexus Clinic KL
            <span className="block text-wine text-xl mt-2">step by step</span>
          </h2>

          <div className="space-y-8 mt-12">
            {[
              {
                title: "Step 1: Initial consultation and medical history review",
                desc: "A 45 to 60 minute consultation covering your weight history, medications, lifestyle and relevant comorbidities.",
              },
              {
                title: "Step 2: Blood tests and body composition analysis",
                desc: "Baseline testing may include blood count, kidney and liver function, fasting glucose, HbA1c, lipid profile, thyroid panel and selected hormonal markers.",
              },
              {
                title: "Step 3: Personalised treatment plan",
                desc: "Your doctor builds a written plan covering medication pathway, meal structure, physical activity targets and follow-up schedule before any prescription is issued.",
              },
              {
                title: "Step 4: Treatment commencement and close monitoring",
                desc: "Injection training is provided where needed. Weekly or fortnightly check-ins track weight, side effects, vital signs and progress toward targets.",
              },
              {
                title: "Step 5: Review, adjust and support",
                desc: "The programme is adjusted over time based on body composition, metabolic markers, plateaus, side effects and changes in health status.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="bg-light rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-wine text-light w-12 h-12 rounded-full flex items-center justify-center font-georgia text-xl font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-georgia text-xl text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="font-inter text-brown/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
            Medical weight loss clinic pricing in Malaysia 2026
          </h2>

          <p className="font-inter text-brown/80 mb-10 max-w-4xl">
            Pricing depends on the protocol chosen, the medications prescribed
            and the duration of your programme. The complimentary first
            consultation helps confirm the right path before commitment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Initial Consultation + Blood Tests", "RM 250 to RM 500"],
              ["Duromine Programme", "RM 400 to RM 900 per month"],
              ["HCG Programme", "RM 1,200 to RM 2,300 per cycle"],
              ["GLP-1 Programme (Ozempic)", "RM 600 to RM 1,200 per month"],
              ["GLP-1 Programme (Wegovy)", "RM 800 to RM 1,500 per month"],
              ["Mounjaro / Zepbound", "RM 900 to RM 1,800 per month"],
              ["Comprehensive Weight Management", "RM 2,500 to RM 6,000 total"],
              ["Consultation", "Complimentary First Assessment"],
            ].map(([title, price], index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-cream rounded-3xl p-6 shadow-sm"
              >
                <h3 className="font-georgia text-lg text-wine mb-2">{title}</h3>
                <p className="font-inter text-brown font-medium">{price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Safety and Expectations */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              Professional guidance, patient safety, and what to expect
            </h2>

            <div className="bg-light rounded-3xl p-8 shadow-lg space-y-5">
              <p className="font-inter text-brown/80">
                All programmes at Nexus Clinic KL are supervised by qualified
                doctors trained in obesity medicine and metabolic health. Blood
                tests may be repeated during treatment to monitor liver,
                kidney and metabolic markers. Blood pressure and pulse are
                checked regularly.
              </p>

              <p className="font-inter text-brown/80">
                GLP-1 medications can cause nausea, bloating and loose stools
                during dose titration. Duromine patients are monitored for heart
                rate and blood pressure effects. HCG protocol patients are
                monitored for energy levels and electrolyte balance.
              </p>

              <div className="bg-rose/10 border-l-4 border-rose p-6 rounded-r-2xl">
                <p className="font-inter text-brown/80">
                  <span className="font-bold text-wine">
                    Malaysia-specific safety note:
                  </span>{" "}
                  NPRA has published updated safety alerts on GLP-1 medicines,
                  including semaglutide and tirzepatide, concerning aspiration
                  and aspiration pneumonia risk during general anaesthesia or
                  deep sedation. Patients must tell their doctor and anaesthetist
                  if they are taking these medicines before any procedure.
                </p>
              </div>

              <p className="font-inter text-brown/80">
                The goal is not just to prescribe treatment, but to build
                sustainable habits that continue to protect your results after
                the active medication phase.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results and Comparison */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
            What results can you expect?
          </h2>

          <p className="font-inter text-brown/80 mb-8 text-lg">
            Weight loss is usually gradual. The right programme aims for steady,
            sustainable progress rather than short-term extremes.
          </p>

          <div className="space-y-6 max-w-4xl">
            <motion.div
              variants={fadeInUp}
              className="bg-wine/5 rounded-2xl p-6"
            >
              <p className="font-inter text-brown">
                In the STEP 1 trial, once-weekly semaglutide with lifestyle
                support produced an average weight loss of{" "}
                <span className="font-bold text-wine text-2xl">14.9%</span>{" "}
                versus 2.4% with placebo. Real-world results still vary by
                protocol, adherence, starting weight and metabolic profile.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3">
              <p className="font-inter font-medium text-brown">
                Factors that shape your outcome:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Starting weight and waist circumference",
                  "Sleep and stress",
                  "Food consistency and protein intake",
                  "Medication tolerance",
                  "Follow-up quality and plan adjustments",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-brown/70">
                    <ChevronRight className="w-4 h-4 text-wine" />
                    <span className="font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-georgia text-xl text-wine mb-3">
                Doctor monitored weight loss
              </h3>
              <p className="font-inter text-sm text-brown/70">
                Best for overall fat loss, appetite control, metabolic health
                and long-term maintenance.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-georgia text-xl text-wine mb-3">
                Body contouring
              </h3>
              <p className="font-inter text-sm text-brown/70">
                Best for stubborn fat pockets and shape refinement, not for
                large overall weight reduction.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-georgia text-xl text-wine mb-3">
                Bariatric surgery
              </h3>
              <p className="font-inter text-sm text-brown/70">
                Best for severe obesity and more complex medical risk profiles,
                under specialist care.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Nexus */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-8 text-center">
            Why Nexus Clinic Kuala Lumpur
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-center">
            {[
              "A doctor monitored programme, not a beauty-salon slimming package",
              "Clear steps from consultation to maintenance",
              "Multiple evidence-based options under one medical team",
              "Honest advice if a programme is not right for you",
              "Accessible KL location at Wisma UOA II, Jalan Pinang",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-light rounded-2xl p-6"
              >
                <p className="font-inter text-brown">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema data={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-georgia text-3xl md:text-4xl text-light mb-6">
              Ready to start a doctor-led weight loss programme?
            </h2>

            <p className="font-inter text-cream text-lg mb-8">
              Book your complimentary first consultation at Nexus Clinic Kuala
              Lumpur and get a personalised medical plan built around your body,
              your risks and your goals.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact-us/"
              className="bg-light text-wine px-10 py-5 rounded-full font-inter font-medium text-lg hover:bg-cream transition-colors shadow-2xl inline-flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}