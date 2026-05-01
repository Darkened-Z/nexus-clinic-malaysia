"use client";

import { motion } from "framer-motion";
import {
  ThermometerSnowflake,
  Shield,
  Clock,
  Target,
  Sparkles,
  ChevronRight,
  Award,
  Users,
  Scissors,
  Heart,
  Zap,
  CheckCircle2,
  Star,
  Activity,
  Calendar,
  TrendingUp,
  Dumbbell,
  Pill,
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
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
const CoolSculptingLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "weightLoss/coolsculpting");

  const benefits = [
    {
      icon: (
        <Scissors className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Non-Surgical Fat Reduction",
      desc: "No incision, no needles, no anaesthesia and no downtime.",
    },
    {
      icon: (
        <Clock className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
      title: "35 to 60 Minutes Per Area",
      desc: "A practical treatment session that fits easily into a busy schedule.",
    },
    {
      icon: (
        <Target className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Targeted Fat Reduction",
      desc: "Reduces stubborn localised fat by 20 to 25 percent per treated area per session.",
    },
    {
      icon: (
        <Shield className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
      title: "FDA-Cleared Technology",
      desc: "Clinically proven cryolipolysis for precise cooling of stubborn fat pockets.",
    },
  ];

  const treatmentAreas = [
    {
      name: "Abdomen / Belly",
      icon: (
        <Activity className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
    {
      name: "Love Handles / Flanks",
      icon: (
        <Heart className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
    {
      name: "Inner & Outer Thighs",
      icon: (
        <Dumbbell className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
    {
      name: "Upper Arms",
      icon: <Pill className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    },
    {
      name: "Double Chin",
      icon: (
        <MapPin className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
    {
      name: "Back & Bra Fat",
      icon: (
        <Target className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
  ];

  const stats = [
    {
      value: "20-25%",
      label: "Fat Reduction Per Area",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      value: "35-60",
      label: "Minutes Per Area",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      value: "8-12",
      label: "Weeks To Full Results",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      value: "17M+",
      label: "Treatments Worldwide",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const faqs = [
    {
      q: "Is CoolSculpting the same as fat freezing?",
      a: "CoolSculpting is the original branded fat-freezing treatment based on cryolipolysis. Generic fat-freezing devices may use a similar principle, but they are not the same machine. At Nexus Clinic KL, the genuine Zeltiq CoolSculpting system is used.",
    },
    {
      q: "How many sessions do I need?",
      a: "Most patients need one or two sessions per treated area depending on the amount of fat present, the area treated, and the contouring goal discussed during consultation.",
    },
    {
      q: "Does CoolSculpting permanently remove fat cells?",
      a: "Yes. The treated fat cells are destroyed through apoptosis and gradually cleared by the body. Those removed fat cells do not regenerate, although remaining fat cells can still enlarge with weight gain.",
    },
    {
      q: "Is CoolSculpting suitable for patients with higher BMI?",
      a: "CoolSculpting is designed for patients who are at or near their target weight but have localised stubborn fat. It is not a weight loss treatment for obesity. Patients with higher BMI may benefit more from a medically supervised weight loss programme first.",
    },
    {
      q: "Can CoolSculpting be done during a lunch break?",
      a: "Yes. With CoolAdvantage applicators, many single-area sessions can be completed in about an hour including preparation and post-treatment massage, with no downtime afterward.",
    },
    {
      q: "Does CoolSculpting hurt?",
      a: "Most patients feel cold, suction and pulling at the start of treatment. The area then numbs naturally. The post-treatment massage may feel tender, but overall the treatment is generally well tolerated.",
    },
    {
      q: "Can CoolSculpting reduce belly fat after pregnancy?",
      a: "It can reduce the pinchable subcutaneous fat layer in the lower abdomen, but it does not treat diastasis recti or loose skin. A consultation is needed to confirm whether fat freezing is the right option.",
    },
    {
      q: "What is the difference between CoolSculpting and Ozempic?",
      a: "CoolSculpting targets and removes specific localised fat pockets. Ozempic and other GLP-1 medicines help reduce appetite and overall body weight. They serve different patient needs and are not direct substitutes.",
    },
    {
      q: "Is there downtime after CoolSculpting?",
      a: "No. Patients can return to normal daily activity immediately after treatment. Temporary redness, swelling, firmness or numbness can happen, but recovery time is not required.",
    },
    {
      q: "What can CoolSculpting not fix?",
      a: "CoolSculpting cannot treat visceral fat, obesity, loose skin, stretch marks, cellulite texture or muscle separation. It works best on pinchable localised subcutaneous fat.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-coolsculpting1.webp",
      after: "/images/B&A-w/B&A-coolsculpting1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-coolsculpting2.webp",
      after: "/images/B&A-w/B&A-coolsculpting2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-coolsculpting3.webp",
      after: "/images/B&A-w/B&A-coolsculpting3.webp",
    },
  ];

  const competitors = [
    {
      name: "CoolSculpting",
      highlight: "Best for localised stubborn fat near target weight",
    },
    {
      name: "Liposuction",
      highlight: "Best for larger fat volume with surgery and downtime",
    },
    {
      name: "GLP-1 Injections",
      highlight: "Best for overall medical weight reduction",
    },
    {
      name: "Combined Approach",
      highlight: "Weight loss first, contouring refinement after",
    },
    {
      name: "Doctor Assessment",
      highlight: "Needed to choose the right pathway safely",
    },
  ];

  return (
    <>
      <main
        className="min-h-screen overflow-hidden"
        style={{
          backgroundColor: "var(--color-light)",
          fontFamily: "var(--font-inter)",
        }}
      >
        <AllPagesHero
          badge="FDA-Cleared CoolSculpting in Malaysia"
          title="Proven CoolSculpting"
          highlight="for Permanent Fat Reduction"
          description="Diet followed for months. Gym sessions done consistently. Yet the belly, love handles, inner thighs or bra fat refuse to shift."
          details="At Nexus Clinic KL, our doctors use precise controlled cooling to target stubborn fat pockets without surgery, needles or downtime, with results that develop naturally over 8 to 12 weeks."
          note="FDA-cleared cryolipolysis technology with over 5000+ procedures completed at Nexus Clinic KL. Trusted aesthetic care for permanent fat reduction."
          image="/images/main/coolsculpting.webp"
          imageAlt="CoolSculpting Treatment at Nexus Clinic Kuala Lumpur"
          ctaText="Book Free Assessment"
          whatsappMessage="Hi, I'm interested in CoolSculpting treatment at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle="5000+ Procedures"
          floatingSubtitle="Trusted aesthetic care at Nexus Clinic KL"
          staggerContainer={staggerContainer}
          fadeInLeft={fadeInLeft}
          fadeInRight={fadeInRight}
          fadeInUp={fadeInUp}
        />
        {/* Why Choose CoolSculpting */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                CoolSculpting at a Glance
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  Treatment Overview
                </span>
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                A clinically proven non-surgical fat reduction treatment for
                adults at or near target weight who want to reduce stubborn
                localised fat without downtime.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="p-6 rounded-2xl text-center group cursor-pointer"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--color-glass)" }}
                  >
                    {benefit.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-taupe text-center mt-8">
              Visible results usually begin from 3 to 6 weeks, with optimal
              contour changes developing at 2 to 3 months. Fat cells removed
              are gone permanently, provided weight is maintained.
            </p>
          </div>
        </motion.section>

        {/* Follow-up Intro Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="space-y-6 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                Why Stubborn Fat
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  Behaves Differently
                </span>
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                That is not a failure of discipline. It is how subcutaneous fat
                works. Stored just beneath the skin, these fat deposits are
                metabolically inactive and structurally resistant to caloric
                restriction or exercise.
              </p>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                CoolSculpting changes that equation by delivering precise,
                controlled cooling to targeted fat pockets, triggering
                cryolipolysis so the body can gradually clear destroyed fat
                cells while leaving surrounding tissue unharmed.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "white" }}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-64 h-64 rounded-full"
              style={{ backgroundColor: "var(--color-wine)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
              style={{ backgroundColor: "var(--color-rose)" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                The Science of
                <br />
                <span style={{ color: "var(--color-wine)" }}>Cryolipolysis</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                  CoolSculpting is based on the principle that fat cells are
                  more sensitive to controlled cold exposure than surrounding
                  skin, nerves and muscle tissue.
                </p>

                <div className="space-y-4">
                  {[
                    "A protective gel pad is placed before the applicator is positioned precisely over the target area.",
                    "Controlled cooling brings the fat tissue into the treatment range where fat cells crystallise and begin apoptosis.",
                    "The body gradually clears the destroyed fat cells through the lymphatic system over the following weeks.",
                    "Results appear naturally from 3 to 6 weeks and continue improving over 8 to 12 weeks.",
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <CheckCircle2
                        className="w-6 h-6 shrink-0"
                        style={{ color: "var(---color-wine)" }}
                      />
                      <span style={{ color: "var(--color-brown)" }}>
                        {step}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <ThermometerSnowflake
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        Controlled Cooling
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <Activity
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        Crystallisation
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <Zap
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        Natural Clearance
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <Sparkles
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        Natural Contour
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Areas */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                Treatment Areas Commonly
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  Targeted in Malaysia
                </span>
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                Malaysian patients often carry stubborn localised fat in the
                abdomen, flanks, thighs, upper arms, bra fat and under the chin
                even at lower BMI levels.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl text-center cursor-pointer group"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="text-4xl flex justify-center mb-3 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {area.name}
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    Ask About Suitability
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-8 rounded-3xl text-center"
              style={{ backgroundColor: "var(--color-rose)", color: "white" }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Applicator Selection Matters
              </h3>
              <p className="mb-6">
                The right applicator, position and treatment plan matter more
                than simply having the machine.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="px-8 py-3 rounded-full bg-white font-semibold"
                style={{ color: "var(--color-wine)" }}
              >
                Check Your Concern Area
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Nexus Clinic */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  Why Nexus Clinic
                  <br />
                  <span style={{ color: "var(--color-wine)" }}>
                    Is Different
                  </span>
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Heart className="w-5 h-5" />,
                      title: "Doctor-Led Assessment",
                      desc: "Every treatment begins with a proper medical consultation and body mapping by an aesthetic doctor.",
                    },
                    {
                      icon: <Target className="w-5 h-5" />,
                      title: "Precise Applicator Planning",
                      desc: "Applicators are selected according to body geometry, fat layer and treatment objective for smoother contour outcomes.",
                    },
                    {
                      icon: <Sparkles className="w-5 h-5" />,
                      title: "Original Zeltiq CoolSculpting System",
                      desc: "The FDA-cleared cryolipolysis platform with extensive clinical research and global treatment history.",
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "Transparent Suitability Advice",
                      desc: "Patients who are not suitable candidates are told honestly and guided toward the right body contouring pathway.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-rose)",
                          color: "white",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{ color: "var(--color-brown)" }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ color: "var(--color-taupe)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        5000+
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        Aesthetic Procedures
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        35 min
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        CoolAdvantage Cycles
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        17M+
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        Global Treatments
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        0
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        Downtime Required
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Before & After  */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Process Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                Your CoolSculpting Session
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  Step by Step
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "Medical history review, body mapping and suitability assessment by a doctor.",
                },
                {
                  step: "02",
                  title: "Applicator Placement",
                  desc: "Gel pad applied and the selected applicator positioned precisely over the target zone.",
                },
                {
                  step: "03",
                  title: "Cryolipolysis Cycle",
                  desc: "Controlled cooling runs for 35 to 60 minutes depending on the applicator and area.",
                },
                {
                  step: "04",
                  title: "Massage & Review",
                  desc: "Post-treatment massage is performed, then results are monitored over the following weeks.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 rounded-2xl"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="text-4xl font-bold mb-4"
                    style={{ color: "var(--color-wine)", opacity: 0.3 }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ChevronRight
                        className="w-6 h-6"
                        style={{ color: "var(--color-taupe)" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  CoolSculpting Malaysia
                  <br />
                  <span style={{ color: "var(--color-wine)" }}>
                    Pricing Guide
                  </span>
                </h2>

                <div className="space-y-4">
                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: "var(--color-brown)" }}>
                        Abdomen / Single Area
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        RM1,500 - RM2,200
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="w-3/5 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      />
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: "var(--color-brown)" }}>
                        Love Handles / Inner Thighs
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        RM2,800 - RM4,000
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="w-4/5 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      />
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: "var(--color-brown)" }}>
                        Full Body Package
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        From RM6,500
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="w-5/6 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-sm" style={{ color: "var(--color-taupe)" }}>
                  A precise quote is provided after consultation once the target
                  areas, applicator selection and number of cycles are confirmed.
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    backgroundColor: "var(--color-wine)",
                    color: "white",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    Common Treatment Areas
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Abdomen, flanks and thighs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Upper arms, bra fat and back fat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Double chin and selected small pockets</span>
                    </li>
                  </ul>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact-us/"
                    className="w-full py-3 rounded-full bg-white font-semibold"
                    style={{ color: "var(--color-wine)" }}
                  >
                    Get Personalised Quote
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                CoolSculpting Versus
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  Other Fat Reduction Options
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  Treatment Pathways
                </h3>
                <div className="space-y-3">
                  {competitors.map((clinic, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl flex items-center justify-between"
                      style={{ backgroundColor: "white" }}
                    >
                      <span style={{ color: "var(--color-brown)" }}>
                        {clinic.name}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-taupe)" }}
                      >
                        {clinic.highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  How Nexus Clinic Guides You
                </h3>
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    backgroundColor: "var(--color-wine)",
                    color: "white",
                  }}
                >
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <strong>CoolSculpting</strong>
                        <p className="text-sm opacity-90">
                          Best for patients near target weight with stubborn
                          localised fat that resists exercise.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <strong>GLP-1 Weight Loss</strong>
                        <p className="text-sm opacity-90">
                          Better for patients who need medically supervised
                          overall body weight reduction before contouring.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <strong>Liposuction</strong>
                        <p className="text-sm opacity-90">
                          Suitable for larger volume fat reduction when surgery
                          and recovery are acceptable.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQWithSchema data={faqs} />

        {/* Final CTA */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-wine)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div variants={fadeInUp} className="space-y-6">
              <ThermometerSnowflake className="w-16 h-16 mx-auto opacity-75" />
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-georgia)" }}
              >
                Book Your Free
                <br />
                CoolSculpting Assessment
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Speak to a doctor about your body contouring goals and find out
                whether CoolSculpting is the right treatment for your concern
                area.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="px-12 py-4 rounded-full bg-white font-semibold text-lg inline-flex items-center gap-2 mx-auto"
                style={{ color: "var(--color-wine)" }}
              >
                Book Free Assessment
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              <p className="text-sm opacity-75">
                No obligation. Just expert guidance tailored to your goals.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default CoolSculptingLanding;