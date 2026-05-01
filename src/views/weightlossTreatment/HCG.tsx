"use client";

import { motion } from "framer-motion";
import {
  Shield,
  MapPin,
  CheckCircle2,
  HelpCircle,
  Award,
  ChevronRight,
  Flame,
  Droplets,
  Pill,
  Ban,
  Apple,
  Bone,
  ShieldAlert,
  Clock,
  Syringe,
  Activity,
  ArrowRight,
  AlertCircle,
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
import Image from "next/image";
const HCGWeightLossLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "weightLoss/hcg");

  const faqs = [
    {
      q: "How does HCG work for weight loss when calorie intake is already so low?",
      a: "The HCG programme is based on the claim that HCG helps mobilise stored fat during the very low-calorie phase, making patients feel less hungry than the calorie count suggests. At Nexus Clinic KL, the protocol is explained and monitored medically rather than sold as a supplement shortcut.",
    },
    {
      q: "Is HCG safe for men as well as women?",
      a: "Yes. The programme is used in both men and women under medical supervision. Male patients often respond slightly faster because of higher baseline muscle mass and metabolic rate.",
    },
    {
      q: "What can I eat on the HCG diet in Malaysia?",
      a: "During the active phase, meals are built around lean protein, approved non-starchy vegetables and limited low-sugar fruit. Patients receive a Malaysian food substitution guide so the plan is practical in local eating patterns.",
    },
    {
      q: "Will I lose muscle mass on the HCG diet?",
      a: "The protocol is intended to favour fat loss over muscle loss compared with plain caloric restriction, and Nexus Clinic KL monitors body composition trends during the programme to reduce that risk.",
    },
    {
      q: "How much weight can I realistically lose on the HCG programme at Nexus Clinic KL?",
      a: "Most patients on the 40-day programme lose between 5 and 13 kg, with many falling in the 7 to 10 kg range when the protocol is followed closely. Results vary with starting weight, adherence and metabolic profile.",
    },
    {
      q: "Can I exercise while on the HCG diet?",
      a: "Light activity such as walking, yoga and stretching is encouraged. High-intensity exercise and heavy resistance work are usually not recommended during the active 500 to 800 calorie phase.",
    },
    {
      q: "What is the difference between injectable HCG and drops or sprays sold online?",
      a: "The clinic uses medical-grade injectable HCG prescribed by a licensed doctor. Over-the-counter drops, sprays and pellets sold online are not treated as equivalent medical-grade hormone delivery in this programme.",
    },
    {
      q: "How soon will I see results on the HCG programme?",
      a: "Many patients notice visible change within the first 5 to 7 days of the active phase. The first week often produces the sharpest drop, followed by a steadier pace from week two onward.",
    },
    {
      q: "What happens after I finish the HCG programme?",
      a: "The programme moves into a three-week stabilisation phase and then long-term maintenance. Nexus Clinic KL provides structured post-programme guidance and may suggest transition to Duromine or GLP-1 support when appropriate.",
    },
    {
      q: "Is the HCG diet programme at Nexus Clinic KL suitable for patients with existing medical conditions?",
      a: "Patients with stable, well-controlled conditions may still be suitable, but full medical assessment and blood tests are required first. Some patients need closer monitoring or may be advised toward a different programme.",
    },
  ];

  return (
    <div className="bg-light font-inter overflow-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge="Doctor-Guided HCG Diet for Fast, Medically Supervised Fat Loss"
        title="HCG Weight Loss Program"
        highlight="in Kuala Lumpur, Malaysia"
        description="A structured, time-defined programme for rapid fat loss and metabolic reset."
        details="The HCG weight loss programme at Nexus Clinic KL combines medical-grade injectable HCG with a structured low-calorie phase, weekly doctor monitoring, and a clear exit into stabilisation and maintenance."
        note="Licensed doctor supervision with weekly check-ins • Fixed-cycle programme with rapid results • Located in Kuala Lumpur with discreet clinic-based medical care"
        image="/images/weight-loss/HCG Weight Loss Program Treatment.webp"
        imageAlt="HCG Weight Loss Program at Nexus Clinic Kuala Lumpur"
        ctaText="Book Free Consultation"
        whatsappMessage="Hi, I'm interested in the HCG Weight Loss Program at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="HCG Programme"
        floatingSubtitle="Rapid fat loss • Metabolic reset"
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
          className="container mx-auto max-w-6xl px-4 -mt-8 relative z-20"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-cream shadow-md text-center">
              <Shield className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown font-medium">Licensed doctor supervision with weekly check-ins and progress tracking</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-cream shadow-md text-center">
              <Award className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown font-medium">Fixed-cycle programme with rapid results and structured maintenance</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-cream shadow-md text-center">
              <MapPin className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown font-medium">Located in Kuala Lumpur with discreet clinic-based medical care</p>
            </motion.div>
          </div>
        </motion.div>
      {/* Programme at a glance */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-10 text-center"
            >
              HCG Weight Loss Programme at a Glance
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ["Programme Length", "15-day starter or 23-day to 40-day full cycle"],
                ["Daily Calorie Phase", "500 to 800 calories during active fat-loss phase"],
                ["HCG Delivery", "Daily injectable HCG at clinic or self-injected under guidance"],
                ["Expected Results", "5 to 13 kg over a full 40-day cycle"],
                ["Downtime", "None. Non-invasive programme"],
                ["Supervision", "Weekly doctor check-ins and vital sign monitoring"],
                ["Suitable For", "Adults wanting rapid fat loss or metabolic reset"],
                ["Location", "Wisma UOA II, Jalan Pinang, Kuala Lumpur"],
              ].map(([title, text], index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white rounded-3xl p-6 shadow-sm"
                >
                  <h3 className="font-georgia text-lg text-wine mb-2">{title}</h3>
                  <p className="text-brown/80 text-sm">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is HCG */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-4xl text-brown mb-6">
                What is HCG?
              </h2>
              <p className="text-brown/80 mb-4">
                HCG stands for human chorionic gonadotropin, a hormone produced
                naturally in the body during pregnancy. The HCG weight-loss
                protocol is based on the idea that low-dose injections combined
                with a structured low-calorie diet help mobilise stubborn fat
                stores rather than relying only on food intake.
              </p>
              <div className="bg-rose/10 border-l-4 border-rose p-4 rounded">
                <p className="text-brown text-sm">
                  At Nexus Clinic KL, the HCG programme is presented as a
                  medically guided, prescription-only protocol rather than a
                  home supplement plan or over-the-counter quick fix.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative h-100 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/main/HCG-weight-loss-treatment.webp"
                alt="Medical consultation at Nexus Clinic Kuala Lumpur"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-georgia text-xl">Nexus Clinic KL</p>
                <p className="text-sm opacity-90">
                  Doctor-guided HCG fat-loss protocol
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HCG vs GLP-1 */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-8"
            >
              HCG vs GLP-1: choosing the right treatment for your goals
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-brown/80 mb-8">
              The HCG programme and GLP-1 programmes like Ozempic or Mounjaro
              are both doctor-led weight-loss pathways, but they differ in
              speed, structure, calorie demands and long-term use.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeInLeft}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <h3 className="font-georgia text-2xl text-wine mb-4">HCG Programme</h3>
                <ul className="space-y-3 text-brown/80">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>Fixed 23 to 40-day cycle with defined start and end</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>Rapid early results, sometimes 0.5 to 1 kg per day in active phase</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>Requires 500 to 800 calories daily during active phase</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>Best for patients wanting a fast, structured reset</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <h3 className="font-georgia text-2xl text-wine mb-4">GLP-1 Programme</h3>
                <ul className="space-y-3 text-brown/80">
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>Open-ended monthly programme with dose titration</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>Gradual fat loss, often 3 to 8 kg per month on average</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>No fixed calorie restriction required</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>Best for ongoing obesity, metabolic syndrome or diabetes-linked weight issues</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suitability */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-8"
            >
              Is the HCG diet the right programme for you?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-2xl">
                <h3 className="font-georgia text-xl text-wine mb-3">Likely suitable</h3>
                <ul className="space-y-3 text-brown/80">
                  <li>• 5 to 15 kg to lose without major comorbidities</li>
                  <li>• Wants a fixed cycle with a defined end point</li>
                  <li>• Plateaued after previous diet attempts</li>
                  <li>• Wants weight loss without indefinite medication use</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-2xl">
                <h3 className="font-georgia text-xl text-wine mb-3">Consider GLP-1 instead</h3>
                <ul className="space-y-3 text-brown/80">
                  <li>• More than 20 kg to lose with metabolic issues</li>
                  <li>• Type 2 diabetes or hypertension needing ongoing management</li>
                  <li>• Needs longer-term pharmacological support</li>
                  <li>• HCG is unsuitable after medical assessment</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 bg-rose/10 p-6 rounded-2xl border border-rose/30"
            >
              <p className="text-brown font-medium">
                Pregnant or breastfeeding patients are not suitable for the HCG
                programme under any circumstances.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Four phases */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-8"
            >
              The HCG diet involves four distinct phases
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Phase 1: Loading",
                  desc: "Days 1 to 2. HCG begins and patients eat high-fat, high-calorie foods to fill normal reserves before caloric restriction starts.",
                },
                {
                  title: "Phase 2: Active Weight Loss",
                  desc: "Days 3 to 23 or 3 to 40. Daily injectable HCG continues and intake drops to 500 to 800 calories from an approved food list.",
                },
                {
                  title: "Phase 3: Stabilisation",
                  desc: "Three weeks after the last injection. Calories rise gradually, but sugar and starch remain excluded while the body stabilises.",
                },
                {
                  title: "Phase 4: Maintenance",
                  desc: "Long-term maintenance uses lean protein, vegetables, healthy fats and low-glycaemic carbohydrates. No further HCG is needed.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <h3 className="font-georgia text-xl text-wine mb-3">{item.title}</h3>
                  <p className="text-brown/80">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Injections */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              The HCG injection at Nexus Clinic KL
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-lg border border-taupe/10"
            >
              <p className="text-brown/80 mb-4">
                At Nexus Clinic KL, HCG is prescribed by a licensed doctor,
                sourced from verified pharmaceutical suppliers, and used as a
                subcutaneous injection with technique guidance and weekly review.
              </p>
              <p className="text-brown/80 mb-4">
                Patients can be trained to self-administer daily doses after the
                first clinic session, with written instructions and injection
                support provided.
              </p>
              <p className="text-wine font-medium">
                The programme is positioned as medical-grade injectable HCG
                under supervision, not an online drop, spray or homeopathic
                shortcut.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              HCG diet price in Malaysia 2026
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-brown/80 mb-8">
              The HCG programme is priced as a fixed cycle rather than an
              open-ended monthly medication plan. Initial consultation is
              complimentary and pricing is transparent by cycle length.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ["Initial Consultation + Medical Assessment", "RM 150 to RM 350"],
                ["HCG Starter Programme (15-day)", "RM 800 to RM 1,400"],
                ["HCG Standard Programme (23-day)", "RM 1,200 to RM 1,800"],
                ["HCG Full Programme (40-day)", "RM 1,800 to RM 2,300"],
                ["HCG Programme + Add-on Blood Panel", "RM 2,000 to RM 2,800"],
                ["Second Cycle After Rest", "RM 1,000 to RM 2,000"],
              ].map(([title, price], index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <h3 className="font-georgia text-lg text-wine mb-2">{title}</h3>
                  <p className="text-brown font-medium">{price}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6 flex items-center gap-3"
            >
              <ShieldAlert className="text-rose w-8 h-8" />
              Medically supervised HCG: safety and oversight
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10">
                <p className="text-brown/80">
                  The main risk in the HCG programme comes from the very
                  low-calorie phase when it is unsupervised. Under close doctor
                  monitoring, blood pressure, pulse, hydration status and
                  symptoms are reviewed weekly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10">
                <p className="text-brown/80">
                  Common early side effects can include mild headache, fatigue
                  and irritability during the first week. These usually settle
                  as the body adapts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10">
                <p className="text-brown/80">
                  Patients with kidney stone history, gallbladder disease,
                  arrhythmia, pregnancy or breastfeeding need extra caution or
                  are excluded entirely depending on profile.
                </p>
              </div>

              <div className="bg-rose/10 p-6 rounded-2xl border border-rose/30">
                <p className="text-brown font-medium">
                  If the HCG protocol is not safe or appropriate for your
                  profile, Nexus Clinic KL positions GLP-1 or other doctor-led
                  pathways as the alternative rather than pushing the wrong
                  programme.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Alternatives and maintenance */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-8"
            >
              What happens after the HCG programme?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-brown/80 mb-6">
              The programme does not end at the last injection. Stabilisation
              and maintenance are treated as core parts of the result, not an
              afterthought.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-brown">
                  3-week stabilisation to support the new lower weight
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-brown">
                  Maintenance plan built around lean protein, vegetables and controlled carbohydrate return
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-brown">
                  Option to transition into Duromine or GLP-1 support if clinically appropriate
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-brown">
                  Optional body contouring discussion for stubborn localised fat after programme completion
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-rose/10 p-6 rounded-2xl border-2 border-rose/30"
            >
              <p className="text-brown text-center font-medium text-lg">
                This page is strongest when it positions HCG as a structured,
                finite medical protocol rather than a vague consumer slimming
                product.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema data={faqs} />

      {/* Closing CTA */}
      <section className="py-24 bg-wine relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-cream rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-white mb-6"
          >
            Ready to find out if HCG is the right fit?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Book a consultation at Nexus Clinic Kuala Lumpur and let a doctor
            assess whether the HCG programme, a GLP-1 pathway, or another
            medical weight-loss plan is the safest and most effective option
            for your goals.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-2xl text-cream font-georgia italic mb-10"
          >
            Structured. Supervised. Honest from the start.
          </motion.p>

          <motion.a
            variants={scaleIn}
            href="/contact-us/"
            className="bg-cream text-wine px-10 py-5 rounded-full font-bold text-lg hover:bg-rose hover:text-white transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default HCGWeightLossLanding;