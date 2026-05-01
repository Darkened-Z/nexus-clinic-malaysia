"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Coffee,
  FileText,
  Info,
  Shield,
  Users,
  AlertTriangle,
  Calendar,
  DollarSign,
  AlertOctagon,
  Droplets,
  Utensils,
  Bed,
  Dumbbell,
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/src/lib/animations";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Image from "next/image";

const ZepboundLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "weightLoss/zepbound");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-zepbound1.webp",
      after: "/images/B&A-w/B&A-zepbound1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-zepbound2.webp",
      after: "/images/B&A-w/B&A-zepbound2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-zepbound3.webp",
      after: "/images/B&A-w/B&A-zepbound3.webp",
    },
  ];
  const faqData = [
    { q: "What is the difference between Mounjaro and Zepbound?", a: "Both contain the same tirzepatide molecule at the same doses using the same KwikPen device. The main difference is the approved indication and availability pathway." },
    { q: "How much weight can I realistically expect to lose?", a: "In SURMOUNT-1, average loss over 72 weeks was 15.0% at 5mg, 19.5% at 10mg, and 20.9% at 15mg. Individual results vary by dose reached, adherence, starting weight, and lifestyle changes." },
    { q: "Is Mounjaro available in Malaysia and do I need a prescription?", a: "Yes. Mounjaro received NPRA approval in Malaysia on 30 August 2025 and is prescription-only. Tirzepatide should be sourced only through licensed clinics and verified supply channels." },
    { q: "How does tirzepatide reduce appetite and regulate blood sugar?", a: "It activates both GLP-1 and GIP receptor pathways, combining delayed gastric emptying, fullness signalling, improved insulin response, and better insulin sensitivity." },
    { q: "Who is eligible for weight management treatment?", a: "Adults with BMI 30 or above, or BMI 27 or above with at least one weight-related condition, may be eligible after full medical assessment." },
    { q: "What side effects should I expect?", a: "Nausea, constipation, diarrhoea, and reduced appetite are among the most common effects, especially during dose escalation. Slow titration helps reduce discomfort." },
    { q: "How does Mounjaro compare with Ozempic for weight loss?", a: "SURMOUNT-5 reported 20.2% average weight loss with tirzepatide versus 13.7% with semaglutide over 72 weeks, showing stronger weight loss performance in that direct comparison." },
    { q: "Can tirzepatide be combined with other treatments?", a: "It can be combined with lifestyle support and selected non-pharmacological body contouring treatments for suitable patients, but the order and safety plan should be doctor-led." },
    { q: "How long will I need to stay on treatment?", a: "Duration depends on your goals, your response, and how well long-term lifestyle and maintenance strategies are established. Obesity management is usually not a short-term issue." },
    { q: "What happens if I stop?", a: "SURMOUNT-4 showed that patients who stopped tirzepatide regained a meaningful portion of lost weight, which is why maintenance planning should be built into the programme from the start." },
    { q: "Is long-term use considered safe?", a: "Long-term safety has been studied across the SURMOUNT and SURPASS programmes, with generally well-tolerated results when treatment is prescribed appropriately and monitored properly." },
    { q: "How is tirzepatide taken?", a: "It is taken once weekly by subcutaneous injection using the KwikPen into the abdomen, thigh, or upper arm, with the dose usually increased every four weeks as tolerated." }
  ];
  return (
    <div className="bg-light overflow-hidden">
      <AllPagesHero
        badge="Mounjaro & Zepbound Weight Loss Programme"
        title="Mounjaro and Zepbound Weight Loss Injection Programme in Malaysia"
        highlight="(Kuala Lumpur)"
        description="Clinical trial data does not lie. Tirzepatide delivered 20.2% average body weight loss versus 13.7% with semaglutide in the 72-week SURMOUNT-5 head-to-head trial."
        details="At Nexus Clinic KL, medically supervised Mounjaro and Zepbound programmes are structured around the right dose, monthly monitoring, and lifestyle support that fits real Malaysian life. This is evidence-led weight management with proper medical assessment, dose titration oversight, and long-term planning."
        note="Programme at a glance: Mounjaro approved in Malaysia (NPRA approval 30 Aug 2025) • Dual GIP and GLP-1 action • Structured doctor monitoring • Wisma UOA II, Jalan Pinang, Kuala Lumpur"
        image="/images/weight-loss/ZepBound Weight Loss Treatment.webp"
        imageAlt="Mounjaro and Zepbound Weight Loss Programme at Nexus Clinic Kuala Lumpur"
        ctaText="Book Free Consultation"
        whatsappMessage="Hi, I'm interested in the Mounjaro or Zepbound weight loss programme at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Tirzepatide Programme"
        floatingSubtitle="20.2% avg weight loss • Dual GIP/GLP-1"
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
        className="container mx-auto max-w-6xl px-4 mt-12 relative z-20"
      >
        <div className="bg-glass backdrop-blur-sm rounded-2xl border border-cream shadow-2xl overflow-hidden">
          {/* Header with accent line */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-24 h-1 bg-wine rounded-full" />
            <h2 className="font-georgia text-2xl md:text-3xl text-brown px-6 md:px-8 pt-8 pb-4">
              Programme at a glance
            </h2>
          </div>

          {/* Features Grid - Responsive layout */}
          <div className="grid md:grid-cols-2 gap-4 px-6 md:px-8 pb-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <div className="bg-wine/10 p-3 rounded-full group-hover:bg-wine/20 transition-all duration-300 shrink-0">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-wine" />
              </div>
              <div>
                <h3 className="font-semibold text-brown text-sm md:text-base">
                  Mounjaro approved in Malaysia
                </h3>
                <p className="text-taupe text-xs md:text-sm">
                  NPRA approval dated 30 August 2025
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <div className="bg-wine/10 p-3 rounded-full group-hover:bg-wine/20 transition-all duration-300 shrink-0">
                <Activity className="w-5 h-5 md:w-6 md:h-6 text-wine" />
              </div>
              <div>
                <h3 className="font-semibold text-brown text-sm md:text-base">
                  Dual GIP and GLP-1 action
                </h3>
                <p className="text-taupe text-xs md:text-sm">
                  First-in-class twincretin approach for appetite and blood sugar control
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <div className="bg-wine/10 p-3 rounded-full group-hover:bg-wine/20 transition-all duration-300 shrink-0">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-wine" />
              </div>
              <div>
                <h3 className="font-semibold text-brown text-sm md:text-base">
                  Structured doctor monitoring
                </h3>
                <p className="text-taupe text-xs md:text-sm">
                  Complimentary consultation, titration support, and monthly reviews
                </p>
              </div>
            </div>

            {/* Feature 4 - Location */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <div className="bg-wine/10 p-3 rounded-full group-hover:bg-wine/20 transition-all duration-300 shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-wine" />
              </div>
              <div>
                <h3 className="font-semibold text-brown text-sm md:text-base">
                  Convenient Kuala Lumpur location
                </h3>
                <p className="text-taupe text-xs md:text-sm">
                  Wisma UOA II, Jalan Pinang — easily accessible
                </p>
              </div>
            </div>
          </div>

          {/* Footer with CTA */}
          <div className="bg-wine/5 px-6 md:px-8 py-4 border-t border-cream">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-taupe text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-wine" />
                All programmes include full medical assessment and ongoing support
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/contact-us/"
                className="text-wine font-inter text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more about our process
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Intro Expansion Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            className="max-w-5xl mx-auto bg-cream p-8 md:p-10 rounded-2xl shadow-lg"
          >
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              Why tirzepatide is changing weight loss treatment
            </h2>
            <div className="space-y-5">
              <p className="text-lg text-taupe leading-relaxed">
                For a patient weighing 100 kg, the difference between 20.2% and
                13.7% total body weight loss is the difference between losing
                about 20 kg and losing 13.7 kg. That is why tirzepatide has
                become the most powerful injectable option currently discussed
                for chronic weight management in Malaysia.
              </p>
              <p className="text-lg text-taupe leading-relaxed">
                Mounjaro is the diabetes indication for tirzepatide. Zepbound is
                the weight management indication for the same molecule, subject
                to import and clinic availability. Nexus Clinic KL supports both
                pathways through a structured programme designed around
                assessment, safety, titration, monitoring, and realistic daily
                adherence.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What is Mounjaro and Zepbound Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="font-georgia text-4xl text-brown">
                What are Mounjaro and Zepbound, and why is tirzepatide different?
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-taupe leading-relaxed">
                  Tirzepatide is an injectable prescription medication approved
                  for type 2 diabetes and chronic weight management. It is the
                  first and only dual-action twincretin that activates both GIP
                  and GLP-1 receptor pathways rather than the single GLP-1
                  pathway used by older medicines such as Ozempic and Wegovy.
                </p>

                <div className="bg-cream p-6 rounded-xl border-l-4 border-wine">
                  <p className="text-brown font-medium text-lg">
                    In simple terms, tirzepatide helps people feel full sooner,
                    stay satisfied for longer, reduce appetite between meals,
                    and improve blood sugar control through two complementary
                    hormone pathways at the same time.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <Image
                src="/images/main/zepbound.webp"
                alt="Mounjaro and Zepbound tirzepatide programme at Nexus Clinic Kuala Lumpur"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>
          <div className="bg-cream p-8 rounded-2xl mt-12">
            <h3 className="font-georgia text-2xl text-brown mb-4">
              Mounjaro vs Zepbound in Malaysia
            </h3>
            <p className="text-taupe mb-4">
              Both products contain the same Eli Lilly tirzepatide molecule
              and use the same once-weekly KwikPen injection device.
            </p>
            <p className="text-taupe mb-4">
              Mounjaro is registered for type 2 diabetes management.
              Zepbound refers to the chronic weight management indication
              and may be available subject to import logistics and clinic
              supply.
            </p>
            <p className="text-taupe font-medium">
              At Nexus Clinic KL, your doctor confirms which treatment route
              is appropriate, what stock is available through proper
              channels, and what plan best matches your health profile.
            </p>
          </div>
        </div>
      </motion.section>

      {/* How tirzepatide works */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            How tirzepatide works in the body
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            The GLP-1 component slows digestion, sends fullness signals to the
            brain, reduces appetite, and stimulates insulin secretion when blood
            sugar rises. The GIP component works through a different incretin
            pathway to improve insulin sensitivity, enhance fat metabolism, and
            amplify the overall weight loss effect.
          </p>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-brown font-medium text-lg">
              What patients commonly notice in real life:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Smaller portions feel satisfying sooner
              </li>
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Appetite between meals becomes easier to manage
              </li>
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Cravings and impulsive snacking often reduce
              </li>
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Blood sugar control and weight loss can improve together
              </li>
            </ul>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto bg-wine/5 p-8 rounded-2xl"
          >
            <p className="text-rose font-semibold text-xl">
              Tirzepatide is not just about willpower. It changes the biological
              signals that drive hunger, fullness, metabolism, and glucose
              regulation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Candidate Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="font-georgia text-4xl text-brown">
                Who can be a candidate for medically supervised tirzepatide weight loss?
              </h2>

              <p className="text-lg text-taupe">
                Eligibility is determined by a doctor, but tirzepatide for
                chronic weight management is generally indicated for adults
                with:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-cream p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <span className="text-brown">BMI 30 or higher, or</span>
                </li>
                <li className="flex items-start gap-3 bg-cream p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    BMI 27 or higher with at least one weight-related condition
                    such as type 2 diabetes, high blood pressure,
                    dyslipidaemia, or obstructive sleep apnoea
                  </span>
                </li>
              </ul>

              <p className="text-taupe">
                A full medical assessment still matters because suitability,
                safety, current medications, and contraindications all need to
                be reviewed before any prescription is issued.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <div className="bg-rose/5 p-8 rounded-2xl border border-rose/20">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <AlertOctagon className="w-6 h-6 text-rose" />
                  Who should not use tirzepatide or needs extra caution
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-brown mb-3">
                      You should not use tirzepatide if:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        You or a close family member have a history of medullary
                        thyroid carcinoma
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        You have MEN2 (multiple endocrine neoplasia syndrome type 2)
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        You are pregnant or breastfeeding
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-brown mb-3">
                      You need careful assessment if you have a history of:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Pancreatitis or active gallbladder disease
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Thyroid conditions or significant renal impairment
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Existing insulin therapy or other diabetes medications
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Significant gastrointestinal symptoms or dehydration risk
                      </li>
                    </ul>
                  </div>

                  <div className="bg-wine/10 p-4 rounded-lg">
                    <p className="text-brown font-medium">
                      A proper clinic does not just prescribe an injection. It
                      screens risk, confirms eligibility, teaches safe use, and
                      monitors progress responsibly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            What results can you realistically expect?
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            SURMOUNT-1 showed average weight loss of 15.0% at 5mg, 19.5% at
            10mg, and 20.9% at 15mg over 72 weeks. In SURMOUNT-5, tirzepatide
            delivered 20.2% average body weight loss compared with 13.7% for
            semaglutide over the same period.
          </p>

          <p className="text-center text-brown font-medium text-lg mb-8">
            For most patients, the practical journey follows this pattern:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Weeks 1-4
              </h3>
              <p className="text-taupe">
                Loading dose phase with body adjustment and early appetite
                reduction
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Weeks 5-12
              </h3>
              <p className="text-taupe">
                Therapeutic effect becomes clearer and meaningful loss often
                begins
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Months 3-6
              </h3>
              <p className="text-taupe">
                Dose optimisation, stronger control, and more visible body
                composition change
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Long-term
              </h3>
              <p className="text-taupe">
                Maintenance planning matters because sustained outcomes matter
                more than short bursts
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto bg-wine/5 p-8 rounded-xl"
          >
            <p className="text-brown text-xl">
              The aim at Nexus Clinic KL is not rapid, unmanaged loss. The aim
              is safe, evidence-based, and sustainable progress.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Programme Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-16">
            What a doctor-monitored tirzepatide programme at Nexus Clinic KL can look like
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            Every patient is different, but the programme follows a structured
            medical pathway from consultation through maintenance.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                1) Complimentary consultation and assessment
              </h3>
              <p className="text-taupe">
                Health history, BMI, blood pressure, current medications, blood
                markers where relevant, and suitability review before anything
                is prescribed.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                2) Eligibility, dose selection, and safety checks
              </h3>
              <p className="text-taupe mb-4">Your doctor may review:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  BMI and metabolic health profile
                </li>
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Contraindications, thyroid history, pancreatitis history, and renal risk
                </li>
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Current insulin or diabetes medication adjustments where needed
                </li>
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Starting dose and titration schedule using the KwikPen
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                3) Injection training and Malaysian lifestyle support
              </h3>
              <p className="text-taupe">
                Patients are taught once-weekly self-injection into the abdomen,
                thigh, or upper arm, plus practical support around meals, work
                schedules, family eating patterns, and realistic adherence.
              </p>
              <p className="text-taupe mt-4">
                The goal is not a paper-perfect plan. The goal is a plan that
                works in real life.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                4) Monthly monitoring and long-term maintenance planning
              </h3>
              <p className="text-taupe">
                Follow-ups monitor weight, side effects, blood pressure, blood
                sugar where relevant, and the next titration step. As goals are
                reached, maintenance may include dose reduction, closer lifestyle
                support, or a reduced long-term therapeutic dose.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side Effects Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            Side effects: what is common, and what needs medical attention
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            Gastrointestinal effects are the most common and are usually most
            noticeable during each dose escalation step. This is one reason slow
            titration matters.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <Info className="w-6 h-6 text-wine" />
                  Common side effects reported
                </h3>

                <p className="text-taupe mb-4">
                  The most common side effects of tirzepatide include nausea,
                  constipation, diarrhoea, reduced appetite, and changes in
                  bowel habit. These are dose-dependent and often improve within
                  two to four weeks after each escalation step.
                </p>
                <p className="text-taupe">
                  Patients who increase too quickly usually feel more discomfort.
                  Patients who titrate slowly are more likely to tolerate the
                  programme well and stay on track.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-rose" />
                  Serious risks you must know
                </h3>

                <p className="text-taupe mb-4">
                  Serious but uncommon risks include pancreatitis, acute
                  gallbladder disease, severe dehydration, significant
                  hypoglycaemia when combined with certain diabetes medicines,
                  thyroid-related warnings, and allergic reactions.
                </p>
                <p className="font-semibold text-wine">
                  This is why medical monitoring is not optional. It is part of
                  the treatment itself.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 max-w-4xl mx-auto bg-rose/5 p-8 rounded-2xl border border-rose/20"
          >
            <h3 className="font-georgia text-2xl text-brown mb-6">
              An important note for surgery, sedation, and procedures
            </h3>

            <p className="text-taupe mb-4">
              Because GLP-1 related medicines can delay gastric emptying,
              patients scheduled for surgery, general anaesthesia, or deep
              sedation should inform both the prescribing doctor and the
              anaesthesia team early.
            </p>

            <p className="text-taupe mb-4">
              Procedure planning should always be individualised when a patient
              is using tirzepatide or similar medications.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            Mounjaro and Zepbound pricing in Kuala Lumpur, Malaysia
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-8">
            Pricing depends on dose, monitoring structure, and whether the plan
            is a simple monthly prescription pathway or a more comprehensive
            package with bloods and check-ins included.
          </p>

          <p className="text-center text-brown font-medium mb-8">
            Typical pricing factors include:
          </p>

          <div className="max-w-3xl mx-auto bg-cream p-8 rounded-2xl mb-8">
            <ul className="space-y-4">
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                The prescribed dose and KwikPen strength
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Monthly monitoring and doctor review level
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Whether the programme includes labs, bloods, and nutrition support
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Whether you are on a Mounjaro diabetes pathway or a Zepbound-style weight management pathway
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Any added body contouring or complementary treatments
              </li>
            </ul>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto bg-wine/5 p-8 rounded-2xl"
          >
            <p className="text-brown text-lg font-medium mb-2">
              Indicative pricing from the source content:
            </p>
            <p className="text-taupe">
              2.5mg starter from RM 1,100 to RM 1,500, 5mg from RM 1,200 to RM
              1,800, 10mg from RM 1,800 to RM 2,800, 15mg from RM 2,200 to RM
              3,500, and 3-month packages from RM 4,500 to RM 9,000.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-16">
            Mounjaro vs Wegovy vs Ozempic vs Zepbound
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Mounjaro vs Zepbound
              </h3>
              <p className="text-taupe">
                Same tirzepatide molecule, same once-weekly device, different
                approved indication and availability pathway.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Tirzepatide vs semaglutide
              </h3>
              <ul className="space-y-3 text-taupe">
                <li>• Tirzepatide activates GIP and GLP-1 receptors.</li>
                <li>• Ozempic and Wegovy are semaglutide-based GLP-1 medicines.</li>
                <li>
                  • SURMOUNT-5 reported 20.2% average weight loss with
                  tirzepatide versus 13.7% with semaglutide over 72 weeks.
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe max-w-3xl mx-auto mt-8"
          >
            Choice still depends on your indication, medical history, side
            effect tolerance, blood sugar profile, availability, and doctor
            guidance.
          </motion.p>
        </div>
      </motion.section>

      {/* Fat Freezing Clarification */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-cream p-8 rounded-2xl">
            <h3 className="font-georgia text-2xl text-brown mb-4">
              Can tirzepatide be combined with other weight loss treatments?
            </h3>
            <p className="text-taupe mb-4">
              Yes, it can be combined with lifestyle modification, dietary
              coaching, and selected non-pharmacological body contouring
              treatments for appropriate patients.
            </p>
            <p className="text-taupe mb-4">
              Treatments such as fat freezing or CoolSculpting target localised
              fat pockets and are not substitutes for systemic appetite and
              metabolic treatment.
            </p>
            <p className="text-taupe mb-4">
              For many patients, the right order is medical weight loss first,
              then body contouring later once overall weight is improving and
              expectations are clearer.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Better Results Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            How to get better results without making the plan unrealistic
          </h2>

          <p className="text-center text-taupe max-w-2xl mx-auto mb-12">
            Medication works best when the treatment window is used to build
            habits that support long-term metabolic health and reduce rebound
            weight gain after the active phase.
          </p>

          <p className="text-brown font-medium text-lg mb-6">
            Practical habits that matter:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Utensils className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Protein-focused meals to improve fullness
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Droplets className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Hydration support during nausea or constipation phases
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Coffee className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Smaller meals while appetite signals are changing
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Dumbbell className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Light activity to protect muscle, insulin sensitivity, and mood
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Bed className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Better sleep because poor sleep worsens hunger regulation
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-rose font-semibold text-xl mt-8"
          >
            The goal is sustainable fat loss and metabolic improvement, not
            burnout from crash dieting.
          </motion.p>
        </div>
      </motion.section>
      <FAQWithSchema data={faqData} />
      {/* Competitor Snapshot */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-16">
            What patients want to see on a strong tirzepatide page
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-xl shadow-lg"
            >
              <p className="text-taupe leading-relaxed">
                1. Clear evidence on mechanism, outcomes, and the difference
                between Mounjaro, Zepbound, Wegovy, and Ozempic.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-xl shadow-lg"
            >
              <p className="text-taupe leading-relaxed">
                2. Honest explanation of eligibility, contraindications, side
                effects, and why medical supervision matters.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-xl shadow-lg"
            >
              <p className="text-taupe leading-relaxed">
                3. Practical clarity on dose escalation, maintenance, pricing,
                and how a real clinic pathway works from first consultation
                onward.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Differentiation Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            How Nexus Clinic KL can stand out clearly
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            The page should keep emphasising the strengths already built into the
            programme:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3"
            >
              <Shield className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Safety-first screening and clear exclusion criteria
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3"
            >
              <Activity className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Transparent titration and side-effect management support
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3"
            >
              <FileText className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Clear first-visit process and programme explanation
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3"
            >
              <Users className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Realistic Malaysian lifestyle guidance instead of generic advice
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3 md:col-span-2 max-w-2xl mx-auto"
            >
              <Calendar className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Long-term maintenance planning to reduce rebound weight regain
              </span>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-12 max-w-3xl mx-auto"
          >
            These are the details that make the page feel medically credible,
            useful, and conversion-ready.
          </motion.p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-wine"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-light mb-8"
          >
            Ready to speak with a doctor at Nexus Clinic KL?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-cream text-xl max-w-3xl mx-auto mb-12"
          >
            Start with a complimentary consultation and get a clear answer on
            suitability, dosage pathway, expected results, and the right
            medically supervised plan for you.
          </motion.p>

          <motion.a
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact-us/"
            className="bg-light text-wine px-12 py-4 rounded-full font-semibold text-lg hover:bg-cream transition-colors shadow-xl"
          >
            Book Free Consultation
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default ZepboundLanding;
