"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Target,
  Heart,
  Activity,
  TrendingDown,
  ChevronRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Users,
  ShieldCheck,
  Scale,
  Brain,
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
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import Image from "next/image";
const MounjaroLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "weightLoss/mounjaro");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-mounjaro1.webp",
      after: "/images/B&A-w/B&A-mounjaro1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-mounjaro2.webp",
      after: "/images/B&A-w/B&A-mounjaro2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-mounjaro3.webp",
      after: "/images/B&A-w/B&A-mounjaro3.webp",
    },
  ];

  const faqs = [
    {
      q: "Is Mounjaro available in Malaysia and is it legal?",
      a: "Yes. Mounjaro received NPRA approval in Malaysia on 30 August 2025 under registration number MAL24026013AZ. It is a prescription-only medicine and should only be obtained through licensed medical channels.",
    },
    {
      q: "How much weight can I lose with Mounjaro in Malaysia?",
      a: "SURMOUNT trial data showed average body weight reductions of 15% at 5 mg, 19.5% at 10 mg and 22.5% at 15 mg over 72 weeks. Individual outcomes vary based on starting weight, achieved dose, protein intake, adherence and metabolic health.",
    },
    {
      q: "What is the difference between Mounjaro and Ozempic?",
      a: "Ozempic activates the GLP-1 receptor only. Mounjaro contains tirzepatide and activates both GIP and GLP-1 receptors, producing stronger appetite suppression, better insulin sensitivity and greater average weight reduction in clinical trials.",
    },
    {
      q: "What is the Mounjaro price per month in Malaysia?",
      a: "As of 2026, one Mounjaro pen in Malaysia commonly ranges from RM 1,400 to RM 3,200 depending on dose. Monthly cost including doctor reviews at Nexus Clinic KL typically ranges from around RM 1,600 to RM 3,400 depending on dose stage.",
    },
    {
      q: "How quickly does Mounjaro start working for weight loss?",
      a: "Most patients notice reduced appetite and food cravings within the first one to two weeks at the 2.5 mg starting dose. Visible weight loss often appears by weeks three to six, with the strongest rate of reduction commonly seen between months three and nine.",
    },
    {
      q: "Can I switch from Ozempic to Mounjaro?",
      a: "Yes. This is a common escalation pathway for patients who plateau on semaglutide or need a stronger intervention. The switch is typically managed by stopping Ozempic, waiting one week, and beginning Mounjaro at the 2.5 mg starter dose under doctor supervision.",
    },
    {
      q: "Will I regain weight after stopping Mounjaro?",
      a: "Weight regain can happen if tirzepatide is stopped without a structured exit plan. That is why the Nexus Clinic KL programme includes tapering, protein-first guidance, behavioural anchors and maintenance planning before the final dose.",
    },
    {
      q: "Is Mounjaro safe for long-term use in Malaysia?",
      a: "Tirzepatide has a well-documented clinical safety profile from large trials, but long-term use still requires proper monitoring for kidney function, thyroid markers, gallbladder issues and overall tolerability under medical supervision.",
    },
    {
      q: "Is Mounjaro suitable for patients with type 2 diabetes in Malaysia?",
      a: "Yes. Its primary registered indication in Malaysia is type 2 diabetes management in adults. It also offers the benefit of substantial weight reduction in overweight or obese patients under a doctor-led plan.",
    },
    {
      q: "Why should I get Mounjaro at Nexus Clinic KL rather than an online source?",
      a: "Tirzepatide requires prescription-only dispensing, proper cold-chain storage, dose titration, side-effect monitoring and follow-up care. An online pen purchase cannot provide these clinical safeguards.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <AllPagesHero
        badge="Doctor-Supervised Tirzepatide Programme in Kuala Lumpur"
        title="Mounjaro Malaysia Programme"
        highlight="Tirzepatide Injections for Maximum Weight Loss"
        description="Powerful dual-agonist support for medically supervised weight reduction."
        details="Mounjaro is the strongest injectable weight loss option available in Malaysia in 2026, with average weight reductions of 15 to 22.5% in clinical programmes when used appropriately. At Nexus Clinic KL, every tirzepatide programme is prescribed and monitored by licensed doctors with bloodwork, dose titration, protein-first guidance and exit planning built in."
        note="15 to 22.5% average weight loss in trials • Once-weekly subcutaneous self-injection • Prescription-only with blood panel and screening • Structured titration from 2.5 mg to 15 mg"
        image="/images/weight-loss/Mounjaro Weight Loss Treatment.webp"
        imageAlt="Mounjaro Tirzepatide Programme at Nexus Clinic Kuala Lumpur"
        ctaText="Book Free Assessment"
        whatsappMessage="Hi, I'm interested in the Mounjaro/Tirzepatide weight loss programme at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Mounjaro Programme"
        floatingSubtitle="15-22.5% avg weight loss • Once-weekly"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl px-4 -mt-20 relative z-20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <TrendingDown className="w-10 h-10 text-wine mb-4" />
            <p className="text-brown font-medium">15 to 22.5% average weight loss in trials</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <Syringe className="w-10 h-10 text-wine mb-4" />
            <p className="text-brown font-medium">Once-weekly subcutaneous self-injection</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <ShieldCheck className="w-10 h-10 text-wine mb-4" />
            <p className="text-brown font-medium">Prescription-only with blood panel and screening</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <Clock className="w-10 h-10 text-wine mb-4" />
            <p className="text-brown font-medium">Structured titration from 2.5 mg to 15 mg</p>
          </motion.div>
        </div>
      </motion.section>
      {/* Trust Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-12"
          >
            Why patients choose{" "}
            <span className="text-wine">Nexus Clinic Kuala Lumpur</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={fadeInUp}
              className="p-6 bg-cream/50 rounded-xl"
            >
              <ShieldCheck className="w-12 h-12 text-wine mb-4" />
              <p className="text-brown">
                Comprehensive medical screening before any prescription
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 bg-cream/50 rounded-xl"
            >
              <Users className="w-12 h-12 text-wine mb-4" />
              <p className="text-brown">
                Doctor-supervised plan with monthly dose reviews
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 bg-cream/50 rounded-xl"
            >
              <Heart className="w-12 h-12 text-wine mb-4" />
              <p className="text-brown">
                Protein-first dietary protocol to protect lean mass
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 bg-cream/50 rounded-xl"
            >
              <Shield className="w-12 h-12 text-wine mb-4" />
              <p className="text-brown">
                Tapering and maintenance strategy to reduce rebound risk
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Treatment At a Glance */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-rose/5"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="p-8 bg-white rounded-2xl shadow-lg border border-cream"
          >
            <h2 className="text-2xl font-georgia text-wine mb-6">
              Mounjaro Weight Loss Programme at a Glance
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-cream rounded-xl">
                <p className="text-taupe text-sm mb-1">Active Ingredient</p>
                <p className="text-brown font-semibold">
                  Tirzepatide 2.5 mg to 15 mg
                </p>
              </div>
              <div className="p-4 bg-cream rounded-xl">
                <p className="text-taupe text-sm mb-1">Mechanism</p>
                <p className="text-brown font-semibold">
                  Dual GIP and GLP-1 receptor agonist
                </p>
              </div>
              <div className="p-4 bg-cream rounded-xl">
                <p className="text-taupe text-sm mb-1">Starting Dose</p>
                <p className="text-brown font-semibold">
                  2.5 mg weekly for 4 weeks
                </p>
              </div>
              <div className="p-4 bg-cream rounded-xl">
                <p className="text-taupe text-sm mb-1">Maximum Dose</p>
                <p className="text-brown font-semibold">15 mg weekly</p>
              </div>
              <div className="p-4 bg-cream rounded-xl">
                <p className="text-taupe text-sm mb-1">Expected Weight Loss</p>
                <p className="text-brown font-semibold">
                  15 to 22.5% over 72 weeks
                </p>
              </div>
              <div className="p-4 bg-cream rounded-xl">
                <p className="text-taupe text-sm mb-1">Malaysia Status</p>
                <p className="text-brown font-semibold">
                  NPRA-registered MAL24026013AZ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What is Mounjaro Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl font-georgia text-brown mb-6">
                What is Mounjaro{" "}
                <span className="text-wine">(tirzepatide)?</span>
              </h2>
              <p className="text-brown text-lg mb-6">
                Mounjaro is the brand name for tirzepatide, a dual-agonist
                injection that activates both the GLP-1 and GIP receptors. This
                makes it fundamentally different from semaglutide-based medicines
                like Ozempic and Wegovy, which activate GLP-1 only.
              </p>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-taupe/20">
                <p className="text-taupe">
                  <span className="font-bold text-wine">Why it outperforms:</span>{" "}
                  The additional GIP pathway improves insulin sensitivity and
                  amplifies fullness signalling, which is why tirzepatide
                  produces stronger appetite suppression and greater average
                  weight reduction than GLP-1-only medicines.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/main/mounjaro.webp"
                  alt="Mounjaro injection pen"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Dual Mechanism */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-12"
          >
            How the dual-agonist mechanism{" "}
            <span className="text-wine">produces stronger results</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-wine mb-2">GLP-1</h3>
                <p className="text-brown">
                  Reduces appetite, slows gastric emptying and helps you feel
                  full sooner and for longer.
                </p>
              </div>
              <div className="p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-wine mb-2">GIP</h3>
                <p className="text-brown">
                  Improves insulin sensitivity in fat and muscle tissue and
                  enhances the fullness effect created by GLP-1.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-rose/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-georgia text-brown mb-4">
                Combined effect of tirzepatide
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span>Approximately 30 to 40% stronger appetite suppression</span>
                </li>
                <li className="flex items-center gap-3 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span>Better fat-loss efficiency and stronger fullness response</span>
                </li>
                <li className="flex items-center gap-3 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span>Superior weight-loss and HbA1c outcomes versus GLP-1 alone</span>
                </li>
              </ul>
              <p className="mt-6 text-taupe italic">
                This is why Mounjaro is often the right choice for patients with
                higher starting weight, insulin resistance, or insufficient
                response to semaglutide.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Muscle Protection */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-8"
          >
            The muscle-loss risk and how Nexus Clinic KL{" "}
            <span className="text-wine">helps prevent it</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown text-lg mb-6">
            Rapid weight loss can reduce lean muscle mass alongside fat if the
            programme is not properly structured. This matters because muscle
            supports resting metabolic rate, joint function and long-term weight
            maintenance.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8 mb-8"
          >
            <div className="p-6 bg-white rounded-xl">
              <h3 className="text-xl font-bold text-wine mb-4">
                Key risk to watch
              </h3>
              <p className="text-brown">
                Clinical studies suggest that 20 to 40% of weight lost during a
                tirzepatide programme can come from lean mass if adequate
                protein and resistance activity are not maintained.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl">
              <h3 className="text-xl font-bold text-wine mb-4">
                The Nexus protocol
              </h3>
              <p className="text-brown">
                Patients are guided toward a protein-first intake target of
                around 1.2 to 1.6 grams per kilogram of target body weight per
                day to help preserve muscle during rapid fat loss.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-rose/10 p-6 rounded-xl">
            <p className="text-brown">
              Patients who follow a protein-first structure consistently tend to
              achieve a better proportion of fat-only loss compared with those
              who simply reduce calories without a targeted lean-mass strategy.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Dosage Timeline */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown mb-6"
          >
            Mounjaro dosage timeline{" "}
            <span className="text-wine">and expected progress</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { phase: "Phase 1", dose: "2.5 mg", text: "Weeks 1 to 4. Titration begins and appetite starts to reduce." },
              { phase: "Phase 2", dose: "5 mg", text: "Weeks 5 to 8. Cravings reduce further and visible loss often starts." },
              { phase: "Phase 3", dose: "7.5 mg", text: "Weeks 9 to 12. Steady fat-loss phase with measurable metabolic improvement." },
              { phase: "Phase 4", dose: "10 mg", text: "Weeks 13 to 16. Peak weight-loss rate for many patients." },
              { phase: "Phase 5", dose: "12.5 mg", text: "Weeks 17 to 20. Continued reduction and maintenance discussion begins." },
              { phase: "Phase 6", dose: "15 mg", text: "Week 21+. Maximum dose and long-term plan activated." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-5 bg-cream rounded-xl"
              >
                <p className="text-wine font-bold mb-1">{item.phase}</p>
                <p className="text-brown font-semibold mb-2">{item.dose} weekly</p>
                <p className="text-taupe text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Starting Programme */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-8"
          >
            Starting your Mounjaro programme at{" "}
            <span className="text-wine">Nexus Clinic KL</span>
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Doctor consultation",
                desc: "Full medical history, BMI, waist, medications and risk factors reviewed before any prescription.",
              },
              {
                step: "2",
                title: "Blood panel",
                desc: "Baseline HbA1c, liver, kidney, thyroid, lipids and fasting glucose are checked.",
              },
              {
                step: "3",
                title: "Treatment plan",
                desc: "Titration schedule, protein-first protocol and realistic targets are set.",
              },
              {
                step: "4",
                title: "Monthly reviews",
                desc: "Dose increases are based on response and tolerability, not rushed automatically.",
              },
              {
                step: "5",
                title: "Exit planning",
                desc: "Tapering or long-term maintenance strategy is introduced before the programme ends.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-6 bg-white rounded-2xl border border-taupe/10 text-center"
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
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side Effects */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-8"
          >
            Common <span className="text-wine">side effects and safety</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft}>
              <div className="bg-cream p-6 rounded-xl">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-brown">
                    <AlertCircle className="w-4 h-4 text-rose" />
                    Nausea
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <AlertCircle className="w-4 h-4 text-rose" />
                    Diarrhoea or constipation
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <AlertCircle className="w-4 h-4 text-rose" />
                    Vomiting
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <AlertCircle className="w-4 h-4 text-rose" />
                    Abdominal discomfort
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <AlertCircle className="w-4 h-4 text-rose" />
                    Temporary GI upset during titration
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-rose/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-wine mb-4">
                  Important contraindications and precautions
                </h3>
                <ul className="space-y-2 text-brown">
                  <li>• MTC or MEN2 history is a contraindication</li>
                  <li>• Pregnancy and breastfeeding are not suitable times for use</li>
                  <li>• Pancreatitis, gallbladder events and diabetic eye disease require caution</li>
                  <li>• Patients on insulin or sulfonylureas may need glucose monitoring adjustment</li>
                </ul>
                <p className="mt-6 text-wine font-medium">
                  No prescription refills should be issued without doctor review.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Surgery Safety */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="p-8 border-2 border-wine/30 rounded-2xl"
          >
            <h2 className="text-2xl font-georgia text-wine mb-4">
              Safety note for surgery or sedation
            </h2>
            <p className="text-brown mb-4">
              Tirzepatide can slow gastric emptying. If you have a procedure
              under general anaesthesia or deep sedation planned, tell your
              doctor and anaesthetist early so proper medication instructions
              can be followed.
            </p>
            <p className="text-wine font-semibold">
              This is another reason ongoing medical supervision matters.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-8"
          >
            Mounjaro Malaysia price guide{" "}
            <span className="text-wine">(2026)</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-white rounded-lg">
                <p className="text-taupe">Starter phase</p>
                <p className="text-3xl font-bold text-wine">RM 1,400 - RM 1,800</p>
                <p className="text-sm text-brown">2.5 mg / 5 mg pen per month</p>
              </div>

              <div className="p-4 bg-white rounded-lg">
                <p className="text-taupe">Mid dose</p>
                <p className="text-3xl font-bold text-wine">RM 1,800 - RM 2,400</p>
                <p className="text-sm text-brown">7.5 mg / 10 mg pen per month</p>
              </div>

              <div className="p-4 bg-white rounded-lg">
                <p className="text-taupe">Maximum dose</p>
                <p className="text-3xl font-bold text-wine">RM 2,200 - RM 3,200</p>
                <p className="text-sm text-brown">12.5 mg / 15 mg pen per month</p>
              </div>

              <div className="p-4 bg-white rounded-lg">
                <p className="text-taupe">Programme packages</p>
                <p className="text-3xl font-bold text-wine">From RM 4,500</p>
                <p className="text-sm text-brown">3-month package pricing</p>
              </div>
            </div>

            <p className="text-brown mb-4">
              Total programme cost can also include consultation, bloodwork,
              doctor reviews and monitoring.
            </p>
            <p className="text-wine font-semibold text-lg">
              At Nexus Clinic KL, pricing is structured around medical oversight
              and treatment quality, not just pen cost alone.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-4 text-center"
          >
            Mounjaro vs Ozempic vs{" "}
            <span className="text-wine">Wegovy</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            Simple comparison for patients deciding between semaglutide and
            tirzepatide pathways.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={scaleIn} className="p-6 bg-white rounded-xl">
              <h3 className="text-xl font-bold text-wine mb-2">Ozempic</h3>
              <p className="text-taupe text-sm mb-3">(semaglutide)</p>
              <ul className="space-y-2 text-brown">
                <li>• GLP-1 only</li>
                <li>• Around 10 to 15% average weight reduction</li>
                <li>• Lower-cost entry point for GLP-1 therapy</li>
              </ul>
            </motion.div>

            <motion.div variants={scaleIn} className="p-6 bg-white rounded-xl">
              <h3 className="text-xl font-bold text-wine mb-2">Wegovy</h3>
              <p className="text-taupe text-sm mb-3">(semaglutide)</p>
              <ul className="space-y-2 text-brown">
                <li>• GLP-1 only</li>
                <li>• Higher semaglutide weight-management dosing</li>
                <li>• Around 12 to 17% expected weight reduction</li>
              </ul>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-rose/10 rounded-xl border-2 border-wine"
            >
              <h3 className="text-xl font-bold text-wine mb-2">
                Mounjaro / Tirzepatide
              </h3>
              <ul className="space-y-2 text-brown">
                <li>• Dual GIP + GLP-1 action</li>
                <li>• Around 15 to 22.5% expected weight reduction</li>
                <li>• Strongest injectable option in Malaysia in 2026</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Body Areas and Follow-up */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown mb-6"
          >
            What happens after overall weight loss?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown mb-4">
            Mounjaro does not spot-reduce fat, but many patients notice
            improvement in the waist, abdomen, back line, hips and face as
            overall body fat decreases.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div className="p-4 bg-cream rounded-lg text-center text-brown">
              <Sparkles className="w-5 h-5 text-rose mx-auto mb-2" />
              Waist and belly area
            </div>
            <div className="p-4 bg-cream rounded-lg text-center text-brown">
              <Sparkles className="w-5 h-5 text-rose mx-auto mb-2" />
              Back and bra line
            </div>
            <div className="p-4 bg-cream rounded-lg text-center text-brown">
              <Sparkles className="w-5 h-5 text-rose mx-auto mb-2" />
              Hips and thighs
            </div>
            <div className="p-4 bg-cream rounded-lg text-center text-brown">
              <Sparkles className="w-5 h-5 text-rose mx-auto mb-2" />
              Face puffiness
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-taupe">
            Patients who reach their target weight but still want refinement of
            residual stubborn areas may later consider fat freezing or
            CoolSculpting as a body contouring follow-up step.
          </motion.p>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQWithSchema data={faqs} />

      {/* Book a consult */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-6"
          >
            Book a Mounjaro assessment at{" "}
            <span className="text-wine">Nexus Clinic Kuala Lumpur</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown text-lg mb-8">
            If you are considering tirzepatide in Kuala Lumpur, start with a
            proper doctor-led consultation. You will get clear guidance on
            eligibility, expected outcomes, side effects, dosage planning and
            long-term maintenance.
          </motion.p>

          <motion.a
            variants={scaleIn}
            href="/contact-us/"
            className="px-8 py-4 bg-wine text-white rounded-full font-semibold hover:bg-rose transition-colors inline-flex items-center gap-2"
          >
            Book Free Assessment
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default MounjaroLanding;