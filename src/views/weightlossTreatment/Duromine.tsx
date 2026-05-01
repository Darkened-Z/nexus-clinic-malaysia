"use client";

import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Target,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Users,
  Sparkles,
  DollarSign,
  Ban,
  Beer,
  Heart as HeartIcon,
  ChevronDown,
  MapPin,
  Pill,
  Activity,
  ArrowRight,
} from "lucide-react";
import FAQWithSchema from "../../components/FAQWithSchema";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import Image from "next/image";

const DuromineLandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "weightLoss/duromine");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-duromine1.webp",
      after: "/images/B&A-w/B&A-duromine1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-duromine2.webp",
      after: "/images/B&A-w/B&A-duromine2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-duromine3.webp",
      after: "/images/B&A-w/B&A-duromine3.webp",
    },
  ];

  const faqs = [
    {
      q: "Is Duromine legal in Malaysia and do I need a prescription?",
      a: "Yes. Duromine is legal in Malaysia and regulated as a prescription-only controlled medicine. It cannot be purchased over the counter and should only be obtained after full medical assessment by a licensed doctor.",
    },
    {
      q: "How much weight can I expect to lose on Duromine?",
      a: "Most patients taking Duromine 30mg with diet and exercise support at Nexus Clinic KL lose around 5 to 10 kg over a 12-week cycle. Clinical outcomes vary by starting weight, adherence, physical activity and tolerance.",
    },
    {
      q: "Can I take Duromine if I have high blood pressure?",
      a: "Patients with controlled and stable hypertension may be eligible under closer monitoring, but uncontrolled hypertension is a contraindication because phentermine can raise blood pressure and heart rate.",
    },
    {
      q: "What side effects are common with Duromine?",
      a: "Common side effects include dry mouth, insomnia, mild increase in heart rate, restlessness and constipation. These are usually dose-related and often improve after the first one to two weeks.",
    },
    {
      q: "How does Duromine compare to Ozempic for weight loss?",
      a: "Duromine is a short-term stimulant appetite suppressant used in structured cycles, while Ozempic is a GLP-1 pathway used over longer timelines and often suits patients with metabolic syndrome or diabetes-related needs.",
    },
    {
      q: "Can I take Duromine more than once, and how long should I wait between cycles?",
      a: "Yes, some patients may be prescribed a second cycle after reassessment. A rest period of about four to six weeks is commonly recommended between cycles to reduce tolerance and dependency concerns.",
    },
    {
      q: "Is Duromine available without a doctor's visit?",
      a: "No. It is not appropriate or legal to obtain Duromine from unverified sources without prescription and medical screening.",
    },
    {
      q: "Which Duromine dose is usually used first?",
      a: "Dose selection depends on BMI, stimulant tolerance, cardiovascular health and prior phentermine exposure. Duromine 30mg is the most commonly prescribed standard dose, while 15mg and 40mg are selected for specific profiles.",
    },
    {
      q: "How long can Duromine be taken?",
      a: "At Nexus Clinic KL, Duromine is positioned as a short-term weight management medication used in cycles of up to 12 weeks under supervision.",
    },
    {
      q: "What happens after the 12-week Duromine cycle ends?",
      a: "The clinic builds a transition plan focused on maintaining results through lifestyle structure, continued monitoring, and where appropriate, a move into GLP-1 support or a later reassessed second cycle.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <AllPagesHero
        badge="Doctor-Supervised Phentermine at Nexus Clinic KL"
        title="Duromine Weight Loss in Kuala Lumpur, Malaysia"
        highlight="Short-term appetite control with a doctor-led plan built for safe, structured progress."
        description="Hunger is not a character flaw. For many patients, appetite is the main reason every diet collapses. Duromine is used to quiet appetite long enough to help you build real momentum."
        details="At Nexus Clinic KL, Duromine is prescribed only after full medical history review, BMI assessment, cardiovascular screening, and suitability confirmation. It is a prescription medicine, and how it is prescribed matters."
        note="Duromine at a glance: 15mg, 30mg and 40mg once daily. Expected weight loss: 5-10 kg over 12 weeks. Best for BMI 27+ with weight-related conditions, or BMI 30+ without comorbidities."
        image="/images/weight-loss/Duromine Weight Loss Treatment.webp"
        imageAlt="Duromine Weight Loss Treatment at Nexus Clinic Kuala Lumpur"
        ctaText="Book Free Consultation"
        whatsappMessage="Hi, I'm interested in Duromine weight loss treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Duromine Programme"
        floatingSubtitle="15mg • 30mg • 40mg | Up to 12 weeks"
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
        className="container mx-auto max-w-6xl px-4 -mt-8 relative z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-md">
              <Shield className="w-6 h-6 text-wine mx-auto mb-2" />
              <div className="font-medium text-brown text-sm">Prescription-only</div>
              <div className="text-taupe text-xs">full doctor screening</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-md">
              <Pill className="w-6 h-6 text-wine mx-auto mb-2" />
              <div className="font-medium text-brown text-sm">15mg, 30mg, 40mg</div>
              <div className="text-taupe text-xs">individualised dosage</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-md">
              <Clock className="w-6 h-6 text-wine mx-auto mb-2" />
              <div className="font-medium text-brown text-sm">Up to 12 weeks</div>
              <div className="text-taupe text-xs">per supervised cycle</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-md">
              <MapPin className="w-6 h-6 text-wine mx-auto mb-2" />
              <div className="font-medium text-brown text-sm">Kuala Lumpur clinic</div>
              <div className="text-taupe text-xs">Wisma UOA II</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Information Card */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl px-4 mt-8"
      >
        <div className="bg-white p-8 rounded-3xl shadow-xl mb-5">
          <h2 className="font-georgia text-3xl text-brown mb-6">Duromine at a glance</h2>
          <div className="space-y-5">
            <div>
              <p className="font-bold text-wine mb-1">Treatment:</p>
              <p className="text-brown">Duromine (Phentermine) Weight Loss Programme</p>
            </div>
            <div>
              <p className="font-bold text-wine mb-1">Dosages available:</p>
              <p className="text-brown">15mg, 30mg and 40mg once daily in the morning</p>
            </div>
            <div>
              <p className="font-bold text-wine mb-1">Expected weight loss:</p>
              <p className="text-brown">About 5 to 10 kg over 12 weeks with diet and exercise support</p>
            </div>
            <div>
              <p className="font-bold text-wine mb-1">Best for:</p>
              <p className="text-brown">BMI 27+ with weight-related conditions, or BMI 30+ without comorbidities</p>
            </div>
            <div>
              <p className="font-bold text-wine mb-1">Monitoring:</p>
              <p className="text-brown">Fortnightly or monthly doctor check-ins for blood pressure, pulse, side effects and progress</p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* What is Duromine Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h2 className="font-georgia text-4xl text-brown">
                What is Duromine, in clinical terms?
              </h2>

              <p className="text-taupe text-lg">
                Duromine is the brand name for phentermine combined with an ion-exchange resin
                designed to release the medicine through the day.
              </p>

              <p className="text-taupe">
                Phentermine is a central nervous system stimulant that suppresses appetite by
                increasing norepinephrine activity and, to a lesser degree, dopamine and serotonin
                signalling linked to hunger control.
              </p>

              <p className="text-rose font-medium bg-rose/5 p-4 rounded-xl border border-rose/20">
                This is not a fat-melting shortcut. It is a short-term appetite suppressant that works
                best when combined with a proper nutrition and activity plan.
              </p>

              <p className="text-taupe">
                The capsule is usually taken once daily in the morning to reduce insomnia risk.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/main/duromine.webp"
                  alt="Medical consultation at Nexus Clinic Kuala Lumpur"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Dosage Guide */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 bg-cream"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-3xl border border-wine/10"
          >
            <h2 className="font-georgia text-3xl text-brown mb-6">
              Duromine dosage guide: 15mg, 30mg and 40mg
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cream p-6 rounded-2xl">
                <h3 className="font-georgia text-2xl text-wine mb-3">15mg</h3>
                <p className="text-brown mb-2">Best for first-time users, lower BMI range, or stimulant-sensitive patients.</p>
                <p className="text-taupe text-sm">Typical monthly loss: 2 to 3 kg with diet and exercise.</p>
              </div>

              <div className="bg-cream p-6 rounded-2xl">
                <h3 className="font-georgia text-2xl text-wine mb-3">30mg</h3>
                <p className="text-brown mb-2">The standard and most commonly prescribed dose in Malaysia.</p>
                <p className="text-taupe text-sm">Typical monthly loss: 4 to 6 kg with diet and exercise.</p>
              </div>

              <div className="bg-cream p-6 rounded-2xl">
                <h3 className="font-georgia text-2xl text-wine mb-3">40mg</h3>
                <p className="text-brown mb-2">Reserved for patients not responding to 30mg after reassessment.</p>
                <p className="text-taupe text-sm">Typical monthly loss: 5 to 8 kg with closer monitoring.</p>
              </div>
            </div>

            <p className="text-taupe mt-8">
              Dose is never chosen as a blanket recommendation. It depends on BMI,
              cardiovascular health, stimulant tolerance, and previous phentermine use.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Who is Duromine usually for */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Who is Duromine usually for?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <Users className="w-10 h-10 text-wine mb-4" />
              <p className="text-brown">
                Patients with obesity or significant overweight who need short-term appetite control
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <Target className="w-10 h-10 text-wine mb-4" />
              <p className="text-brown">
                Patients derailed mainly by persistent hunger, cravings and constant snacking
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <Clock className="w-10 h-10 text-wine mb-4" />
              <p className="text-brown">
                Patients needing a 12-week kickstart before moving into maintenance
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-rose/5 p-6 rounded-2xl border border-rose/20"
          >
            <p className="text-taupe">
              Clinically, Duromine is generally considered for adults with BMI 30+,
              or BMI 27+ with at least one weight-related condition such as hypertension,
              type 2 diabetes or metabolic syndrome.
            </p>
            <p className="text-wine font-medium mt-4">
              At Nexus Clinic KL, the aim is controlled, safe progress rather than rapid,
              unsustainable extremes.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Who should NOT use Duromine */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-wine/5"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <AlertCircle className="w-12 h-12 text-rose mx-auto mb-4" />
            <h2 className="font-georgia text-4xl text-brown">
              Who should not use Duromine
            </h2>
            <p className="text-taupe text-lg mt-2 font-medium">
              Contraindications matter
            </p>
            <p className="text-taupe mt-2">
              Duromine is not suitable for everyone because it is a stimulant with cardiovascular impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "History of heart disease, arrhythmia, coronary artery disease, or valve abnormalities",
              "Uncontrolled or severe hypertension",
              "Hyperthyroidism",
              "Pregnancy or breastfeeding",
              "Age below 18",
              "History of drug misuse or dependency on controlled substances",
              "Recent MAOI use within the last 14 days",
            ].map((condition, i) => (
              <motion.div
                key={i}
                variants={fadeInLeft}
                className="flex items-start gap-3 bg-white p-4 rounded-xl"
              >
                <Ban className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <p className="text-brown">{condition}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 space-y-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
              <Beer className="w-5 h-5 text-rose shrink-0 mt-0.5" />
              <p className="text-brown">
                Alcohol, caffeine and other stimulants are commonly restricted or discouraged
                because they can amplify side effects like insomnia, dizziness and palpitations.
              </p>
            </div>

            <p className="text-wine font-medium text-center text-lg">
              This is why proper medical screening is not optional.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Duromine vs Ozempic vs HCG vs Contrave
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-2xl">
              <h3 className="font-georgia text-xl text-wine mb-4">Duromine</h3>
              <ul className="space-y-2 text-brown">
                <li>• Daily oral capsule</li>
                <li>• Fast visible response in 2 to 4 weeks</li>
                <li>• 7 to 12% body weight reduction over 12 weeks</li>
                <li>• Best for short-term appetite suppression</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-2xl">
              <h3 className="font-georgia text-xl text-wine mb-4">Other options</h3>
              <ul className="space-y-2 text-brown">
                <li>• Ozempic: GLP-1, longer-term metabolic control</li>
                <li>• HCG: fixed-cycle, very low-calorie reset structure</li>
                <li>• Contrave: reward-pathway support for cravings and binge patterns</li>
                <li>• Choice depends on health profile, goals and risk tolerance</li>
              </ul>
            </motion.div>
          </div>

          <p className="text-taupe bg-rose/5 p-6 rounded-xl">
            At Nexus Clinic KL, medication choice is positioned as a doctor decision,
            not a marketing decision. The right option depends on your BMI, risk profile,
            health conditions, side-effect tolerance and long-term plan.
          </p>
        </div>
      </motion.section>

      {/* Journey at Nexus Clinic */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-cream"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            What the Duromine programme looks like at Nexus Clinic KL
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center text-lg mb-12"
          >
            Structured, monitored, and built around a safe exit plan.
          </motion.p>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                title: "Initial consultation",
                desc: "Medical history, blood pressure, pulse, BMI and prior weight-loss attempts reviewed.",
              },
              {
                title: "Eligibility and dose selection",
                desc: "Doctor determines whether 15mg, 30mg or 40mg is appropriate, or whether another programme is safer.",
              },
              {
                title: "Prescription and programme briefing",
                desc: "You receive clear guidance on capsule timing, nutrition, activity, caffeine and alcohol avoidance, and warning symptoms.",
              },
              {
                title: "Fortnightly monitoring",
                desc: "Weight, body composition, blood pressure, pulse and side effects are reviewed and adjusted.",
              },
              {
                title: "Transition and maintenance",
                desc: "A post-cycle plan is built to reduce regain risk and guide long-term weight management.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-wine font-bold text-xl">{i + 1}</span>
                </div>
                <h3 className="font-georgia text-xl text-brown mb-4">{item.title}</h3>
                <p className="text-taupe text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Before After */}
      <SectionBeforeAfter transformations={transformations} />

      {/* Results */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-8"
          >
            What results can you expect?
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center text-lg mb-4"
            >
              Duromine works fastest in the early phase because appetite drops early and
              adherence becomes easier for the right patient.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-rose/5 rounded-xl border border-rose/20"
            >
              <p className="text-taupe">
                Most patients on Duromine 30mg in a structured 12-week cycle lose around
                5 to 10 kg, and published clinical expectations place phentermine-based
                outcomes in the range of about 7 to 12% of body weight over three months.
              </p>
              <p className="text-wine font-medium mt-2">
                Results still depend on diet, activity, sleep, adherence and monitoring quality.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pros and Cons */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-cream"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Pros and cons
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="font-georgia text-2xl text-wine mb-6">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">Fast appetite suppression and early visible momentum</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">Accessible first-line prescription option in Malaysia</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">Simple daily capsule without injection burden</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">Works well as a short-term kickstart inside a larger programme</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="font-georgia text-2xl text-rose mb-6">
                Downsides
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">Not suitable for patients with many cardiovascular or stimulant-related risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">Dry mouth, insomnia, restlessness and constipation are common</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">It is not a forever medication and needs structured exit planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">Dependency risk means careless use is unsafe</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side Effects */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Side effects and what people commonly feel
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-8"
            >
              Most side effects are stimulant-related and dose-dependent.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                "Dry mouth",
                "Trouble sleeping",
                "Mild increase in heart rate",
                "Restlessness",
                "Constipation",
                "Palpitations in higher-risk cases",
              ].map((effect, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-cream p-4 rounded-xl text-center text-brown"
                >
                  {effect}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-rose/5 rounded-2xl border-l-4 border-rose"
            >
              <h3 className="font-georgia text-xl text-rose mb-2">
                When to stop and contact the clinic urgently
              </h3>
              <p className="text-taupe mb-2">
                Significant chest pain, severe palpitations, marked blood pressure rise,
                or troubling mood changes should be reported immediately and the capsule
                paused until doctor review.
              </p>
              <p className="text-brown">
                At Nexus Clinic KL, monitor-and-adjust is part of the programme, not an afterthought.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-cream"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <DollarSign className="w-12 h-12 text-wine mx-auto mb-4" />
            <h2 className="font-georgia text-4xl text-brown">
              Duromine price in Malaysia 2026
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-3xl shadow-xl max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-cream p-5 rounded-xl">
                <p className="font-bold text-wine mb-2">Consultation</p>
                <p className="text-brown">Complimentary initial medical assessment</p>
              </div>
              <div className="bg-cream p-5 rounded-xl">
                <p className="font-bold text-wine mb-2">Duromine 15mg</p>
                <p className="text-brown">RM 300 to RM 450 per month</p>
              </div>
              <div className="bg-cream p-5 rounded-xl">
                <p className="font-bold text-wine mb-2">Duromine 30mg</p>
                <p className="text-brown">RM 450 to RM 650 per month</p>
              </div>
              <div className="bg-cream p-5 rounded-xl">
                <p className="font-bold text-wine mb-2">Duromine 40mg</p>
                <p className="text-brown">RM 550 to RM 750 per month</p>
              </div>
              <div className="bg-cream p-5 rounded-xl">
                <p className="font-bold text-wine mb-2">Full 12-week programme</p>
                <p className="text-brown">RM 1,200 to RM 1,800</p>
              </div>
              <div className="bg-cream p-5 rounded-xl">
                <p className="font-bold text-wine mb-2">Lifestyle coaching add-on</p>
                <p className="text-brown">RM 1,500 to RM 2,200</p>
              </div>
            </div>

            <p className="text-wine font-medium bg-wine/5 p-4 rounded-xl mt-6">
              At Nexus Clinic KL, pricing is framed around programme quality, monitoring
              and transition planning, not just the capsule alone.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Post Duromine */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-10"
          >
            What happens after Duromine?
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-2xl">
              <p className="text-brown">
                The most neglected part of phentermine programmes is the exit. At Nexus Clinic KL,
                the end of the 12-week cycle is treated as seriously as the start.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-2xl">
              <p className="text-brown">
                Patients move into a transition plan focused on appetite management without the capsule,
                exercise structure, craving triggers, caloric awareness and maintenance support.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-rose/5 p-6 rounded-2xl border border-rose/20">
              <p className="text-brown">
                Where needed, the doctor may discuss a GLP-1 pathway, a monitored rest period,
                or a later reassessed second Duromine cycle after at least four weeks.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQWithSchema data={faqs} />

      {/* CTA Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-wine"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="font-georgia text-4xl text-light mb-6">
              Ready to find out if Duromine is right for you?
            </h2>

            <p className="text-cream text-lg mb-8">
              Book a free consultation at Nexus Clinic KL and let a doctor assess your
              appetite pattern, risk profile, suitability, ideal dosage, and safest next step.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact-us/"
              className="bg-light text-wine px-10 py-5 rounded-full font-medium text-lg hover:bg-cream transition-colors shadow-2xl inline-flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DuromineLandingPage;