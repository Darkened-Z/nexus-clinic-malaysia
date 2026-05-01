"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Award,
  Users,
  CheckCircle2,
  XCircle,
  ThermometerSnowflake,
  Shield,
  AlertCircle,
  Scale,
  Activity,
  Droplets,
  Heart,
  Smartphone,
  Target,
  Zap,
  Feather,
  Sparkles,
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
import AllPagesHero from "@/src/components/AllPagesHero"
import Link from "next/link";
import Image from "next/image";
const FatFreezingLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "weightLoss/fatFreezing");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-fat-freezing1.webp",
      after: "/images/B&A-w/B&A-fat-freezing1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-fat-freezing2.webp",
      after: "/images/B&A-w/B&A-fat-freezing2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-fat-freezing3.webp",
      after: "/images/B&A-w/B&A-fat-freezing3.webp",
    },
  ];

  const faqs = [
    {
      q: "How many fat freezing sessions do I need to see results?",
      a: "Most patients achieve satisfying results from one to two sessions per treated area. A single session destroys approximately 20 to 25% of fat cells in the target zone. For modest fat deposits, one cycle is often sufficient, while broader contouring goals may need two sessions spaced eight to twelve weeks apart.",
    },
    {
      q: "How is fat freezing different from weight loss?",
      a: "Fat freezing and weight loss are biologically different. With diet and exercise, fat cells shrink but remain in the body. With cryolipolysis, treated fat cells are destroyed through apoptosis and gradually cleared, leaving a permanently reduced fat cell count in that area.",
    },
    {
      q: "Does fat freezing hurt?",
      a: "Most patients describe the first few minutes as intense cold with suction or pulling. After the area numbs, the session becomes much easier to tolerate. The post-treatment massage can feel tender, and mild soreness afterward can feel similar to an intense workout.",
    },
    {
      q: "Can fat freezing treat belly fat after pregnancy?",
      a: "Fat freezing can treat the subcutaneous fat layer in the lower abdomen, including the persistent bulge some women notice after pregnancy. It does not treat diastasis recti, loose skin, or stretch marks, so consultation is important to confirm the main cause of the concern.",
    },
    {
      q: "Can fat freezing reduce a double chin?",
      a: 'Yes. A smaller specialised applicator can treat submental fat beneath the chin in suitable cases. One to two sessions are commonly sufficient, with results appearing gradually over four to twelve weeks.',
    },
    {
      q: "Is fat freezing safe for men?",
      a: "Yes. Fat freezing is suitable for both men and women. Male patients commonly seek treatment for the abdomen, flanks, and chest fat. A proper assessment is important because men often carry more visceral fat, which cryolipolysis cannot treat.",
    },
    {
      q: "How long do fat freezing results last?",
      a: "The fat cells destroyed by cryolipolysis are permanently eliminated and do not regenerate. However, remaining fat cells in the body can still enlarge with weight gain, so stable weight and healthy habits help preserve results.",
    },
    {
      q: "What body areas can fat freezing treat?",
      a: "Common treatment areas include the abdomen, love handles, inner thighs, outer thighs, bra fat, back fat, upper arms, and double chin. Smaller applicators may also be used on banana rolls or around the knees when the fat is pinchable and suitable.",
    },
    {
      q: "Is there downtime after fat freezing?",
      a: "No. Most patients return to normal daily activities immediately after treatment. Temporary redness, swelling, numbness, firmness, or tingling can occur, but recovery time is generally not needed.",
    },
    {
      q: "What can fat freezing not treat?",
      a: "Fat freezing cannot treat visceral fat, obesity, major loose skin, stretch marks, or muscle separation. It works best on localised pinchable subcutaneous fat rather than broad weight-loss goals.",
    },
  ];

  return (
    <div className="bg-light font-inter overflow-hidden">
      <AllPagesHero
        badge="Best Fat Freezing in Malaysia"
        title="Best Fat Freezing in Malaysia"
        highlight="for Sculpted, Permanent Body Contouring"
        description="No surgery. No needles. No downtime. The number on the scale dropped. The clothes fit better. But the belly pouch, inner thighs, or the soft roll above the bra strap still remain. This is not a willpower problem. It is biology."
        details="At Nexus Clinic KL, our licensed aesthetic doctors use clinically proven cryolipolysis technology to permanently destroy targeted subcutaneous fat cells and refine body contour naturally over eight to twelve weeks."
        note="Doctor-led consultation • FDA-cleared technology • 5000+ procedures • 35-60 min per area"
        image="/images/main/fat-freezing.webp"
        imageAlt="Fat Freezing Treatment at Nexus Clinic Kuala Lumpur"
        ctaText="Book Free Assessment"
        whatsappMessage="Hi, I'm interested in fat freezing treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="FDA-Cleared Cryolipolysis"
        floatingSubtitle="Permanent fat reduction • No downtime"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />
        {/* <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl px-4 -mt-8 relative z-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div variants={fadeInUp} className="bg-glass backdrop-blur-sm rounded-xl p-4 border border-cream shadow-md text-center">
              <Award className="w-6 h-6 text-wine mx-auto mb-2" />
              <p className="text-sm text-brown">Doctor-led consultation and body assessment</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-glass backdrop-blur-sm rounded-xl p-4 border border-cream shadow-md text-center">
              <Shield className="w-6 h-6 text-wine mx-auto mb-2" />
              <p className="text-sm text-brown">FDA-cleared cryolipolysis technology</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-glass backdrop-blur-sm rounded-xl p-4 border border-cream shadow-md text-center">
              <Users className="w-6 h-6 text-wine mx-auto mb-2" />
              <p className="text-sm text-brown">5000+ aesthetic procedures by our medical team</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-glass backdrop-blur-sm rounded-xl p-4 border border-cream shadow-md text-center">
              <Clock className="w-6 h-6 text-wine mx-auto mb-2" />
              <p className="text-sm text-brown">35 to 60 minutes per area with no downtime</p>
            </motion.div>
          </div>
        </motion.div> */}
      {/* Treatment At a Glance */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Fat Freezing Treatment{" "}
              <span className="text-wine">at a Glance</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Treatment</p>
                <p className="text-brown font-semibold">
                  Fat Freezing (Cryolipolysis)
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Session Time</p>
                <p className="text-brown font-semibold">
                  35 to 60 minutes per area
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Downtime</p>
                <p className="text-brown font-semibold">
                  None. Resume activities immediately
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Visible Results</p>
                <p className="text-brown font-semibold">
                  3 to 6 weeks; optimal at 2 to 3 months
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Fat Reduction</p>
                <p className="text-brown font-semibold">
                  20 to 25% per treated area per session
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Suitable For</p>
                <p className="text-brown font-semibold">
                  Adults near ideal weight with localised subcutaneous fat
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Biology Behind Stubborn Fat */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brown mb-8">
                The Biology Behind
                <span className="text-wine"> Stubborn Fat</span>
              </h2>

              <div className="space-y-4 text-brown/80">
                <p>
                  Most patients who seek fat freezing have already done the
                  work. They exercise regularly, cut calories, and lose weight
                  in some areas. The frustration is that specific zones do not
                  change regardless of effort.
                </p>
                <p>
                  In stubborn fat zones, fat cells often carry a higher
                  concentration of alpha-2 adrenergic receptors. These receptors
                  hold fat in reserve and resist the usual hormonal signals that
                  help release fat during diet and exercise.
                </p>
                <p>
                  Cryolipolysis bypasses this metabolic resistance entirely. By
                  cooling the fat layer to a precise temperature, it triggers
                  apoptosis in the fat cells so they die and are gradually
                  cleared by the body over the following weeks.
                </p>
              </div>

              <div className="mt-8 bg-wine/5 rounded-xl p-6 border border-wine/20">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Why this matters
                </h3>
                <p className="text-brown/80">
                  This is why someone can be lean everywhere except the lower
                  abdomen, flanks, or inner thighs. Fat freezing is designed for
                  these localised, resistant fat pockets rather than general
                  scale weight loss.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/weight-loss/Fat Freezing Treatment.webp"
                  alt="Fat freezing treatment procedure at Nexus Clinic Kuala Lumpur"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-georgia italic">
                    Fat freezing treatment at Nexus Clinic Kuala Lumpur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Comparison */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Fat Freezing Brands{" "}
              <span className="text-wine">in Malaysia Compared</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-center mb-10"
            >
              Patients researching fat freezing in Malaysia often encounter
              CoolSculpting, Clatuu Alpha, and Cristal PRO. All work on the same
              core science of cryolipolysis, but they differ in applicator
              design, treatment speed, simultaneous area coverage, and depth of
              clinical evidence.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <Sparkles className="w-8 h-8 text-wine mx-auto mb-3" />
                <p className="font-semibold text-brown text-lg">
                  CoolSculpting
                </p>
                <p className="text-sm text-taupe mt-2">
                  Most extensive long-term safety data and 17M+ global
                  treatments
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <Sparkles className="w-8 h-8 text-wine mx-auto mb-3" />
                <p className="font-semibold text-brown text-lg">Clatuu Alpha</p>
                <p className="text-sm text-taupe mt-2">
                  360-degree cooling and dual applicators for two areas at once
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <Sparkles className="w-8 h-8 text-wine mx-auto mb-3" />
                <p className="font-semibold text-brown text-lg">Cristal PRO</p>
                <p className="text-sm text-taupe mt-2">
                  Multi-area coverage with up to four areas treated
                  simultaneously
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-brown/80 mt-8 text-center font-georgia italic"
            >
              The most important factor is not just the device. It is patient
              selection, precise applicator choice, and doctor-led treatment
              planning.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Self Assessment */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8"
            >
              Is Fat Freezing the{" "}
              <span className="text-wine">Right Treatment for You?</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-wine mb-4 flex items-center">
                    <CheckCircle2 className="w-6 h-6 mr-2" />
                    Likely Suitable
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-brown/80">
                      <span className="text-wine mr-2">•</span>
                      Within 10 to 15 kg of ideal weight
                    </li>
                    <li className="flex items-start text-brown/80">
                      <span className="text-wine mr-2">•</span>
                      Can pinch the fat you want to treat
                    </li>
                    <li className="flex items-start text-brown/80">
                      <span className="text-wine mr-2">•</span>
                      Want body shaping rather than major weight loss
                    </li>
                    <li className="flex items-start text-brown/80">
                      <span className="text-wine mr-2">•</span>
                      BMI below 30
                    </li>
                    <li className="flex items-start text-brown/80">
                      <span className="text-wine mr-2">•</span>
                      Diet and exercise have not shifted the target zone
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-taupe mb-4 flex items-center">
                    <XCircle className="w-6 h-6 mr-2" />
                    Consider Alternatives
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-brown/80">
                      <span className="text-taupe mr-2">•</span>
                      Significant overall weight-loss goal
                    </li>
                    <li className="flex items-start text-brown/80">
                      <span className="text-taupe mr-2">•</span>
                      Fat is not pinchable and may be visceral
                    </li>
                    <li className="flex items-start text-brown/80">
                      <span className="text-taupe mr-2">•</span>
                      Cold-sensitivity conditions like Raynaud’s or cryoglobulinemia
                    </li>
                    <li className="flex items-start text-brown/80">
                      <span className="text-taupe mr-2">•</span>
                      Pregnancy or immediate pregnancy planning
                    </li>
                    <li className="flex items-start text-brown/80">
                      <span className="text-taupe mr-2">•</span>
                      BMI above 30 where medical weight loss may be a better first step
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Used */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              The Fat Freezing Technology{" "}
              <span className="text-wine">Used at Nexus Clinic KL</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-brown mb-3">
                  FDA-Cleared Cryolipolysis Platform
                </h3>
                <p className="text-brown/80">
                  Every fat freezing session at Nexus Clinic KL is performed by
                  a licensed aesthetic doctor, not a beauty therapist or
                  technician. Applicator placement, temperature selection and
                  post-treatment protocol require clinical judgement for safe,
                  even, and reliable outcomes.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Precision Applicator Selection
                </h3>
                <p className="text-brown/80">
                  Different areas require different applicator geometries. Flat
                  surfaces like the outer thighs need a different approach from
                  curved areas like the lower abdomen or flanks. Proper
                  selection is a major factor in treatment quality.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Post-Treatment Massage Protocol
                </h3>
                <p className="text-brown/80">
                  Every session concludes with a two-minute manual massage of
                  the treated area. This clinically supported step helps break
                  down crystallised tissue and enhance lymphatic clearance.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Session Steps */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-10 text-center"
            >
              Your Fat Freezing Session{" "}
              <span className="text-wine">Step by Step</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "Consultation",
                  desc: "Medical review, body mapping and confirmation that the fat is suitable for cryolipolysis.",
                },
                {
                  title: "Gel Pad",
                  desc: "A protective gel pad is applied to protect the skin surface.",
                },
                {
                  title: "Applicator",
                  desc: "The applicator is positioned precisely and suction draws the tissue into the cooling panels.",
                },
                {
                  title: "Cooling Cycle",
                  desc: "Controlled cooling runs for 35 to 60 minutes depending on the area and applicator.",
                },
                {
                  title: "Massage & Return",
                  desc: "Post-treatment massage is performed and patients return to normal activity immediately.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="text-wine font-bold text-lg mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-brown font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brown/80 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              When Will You <span className="text-wine">See Results?</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <p className="text-brown/80 mb-4">
                Fat freezing is gradual. First changes commonly appear from 3 to
                6 weeks, with stronger contour changes becoming visible by 8 to
                12 weeks.
              </p>
              <p className="text-brown/80 mb-6">
                Some results may continue improving for several months as the
                lymphatic system completes its clearance process.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-medium text-wine mb-2">
                    Week 3 to 6: early visible change
                  </p>
                  <div className="h-2 bg-cream rounded-full">
                    <div
                      className="h-2 bg-rose rounded-full"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-wine mb-2">
                    Week 8 to 12: clearer contour improvement
                  </p>
                  <div className="h-2 bg-cream rounded-full">
                    <div
                      className="h-2 bg-rose rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-wine mb-2">
                    Up to 6 months: ongoing refinement
                  </p>
                  <div className="h-2 bg-cream rounded-full">
                    <div
                      className="h-2 bg-rose rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and Cons */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Pros and Cons of <span className="text-wine">Fat Freezing</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-wine mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-2" />
                  Pros
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Non-surgical with no cuts, no needles, and no anaesthesia
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Minimal downtime for most patients
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Targets stubborn localised fat that resists diet and exercise
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Natural-looking contour changes over time
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Treated fat cells are removed permanently
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-taupe mb-4 flex items-center">
                  <XCircle className="w-6 h-6 mr-2" />
                  Cons
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Results take time and are not immediate
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    More than one session may be needed
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Not designed for major weight loss or obesity treatment
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Does not fix major loose skin by itself
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Rare complications such as PAH can occur
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Side Effects and Safety */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Side Effects, Risks and <span className="text-wine">Aftercare</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <p className="text-brown/80 mb-4">
                Expected temporary side effects can include redness, swelling,
                bruising, numbness, firmness, tingling and mild aching as the
                treated area rewams.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Redness
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Swelling
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Bruising
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Numbness
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Tingling
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Firmness
                </div>
              </div>
              <p className="text-brown/80">
                These usually resolve within days to one or two weeks, though mild numbness can last longer in some cases.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/5 rounded-2xl p-8 border border-wine/20 mb-8"
            >
              <h3 className="text-xl font-bold text-wine mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2" />
                Rare but important: Paradoxical Adipose Hyperplasia (PAH)
              </h3>
              <p className="text-brown/80 mb-4">
                PAH is a rare complication where the treated area enlarges
                rather than shrinks. Patients should be informed about this risk
                before treatment, and proper suitability screening is essential.
              </p>
              <p className="text-brown font-medium">
                At Nexus Clinic KL, patients are assessed carefully and never
                pressured into treatment when there is clinical uncertainty.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-brown mb-4">
                Basic Aftercare
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-brown/80">
                  <Droplets className="w-5 h-5 text-wine mr-3" />
                  Stay well-hydrated
                </li>
                <li className="flex items-center text-brown/80">
                  <Activity className="w-5 h-5 text-wine mr-3" />
                  Maintain your normal exercise routine
                </li>
                <li className="flex items-center text-brown/80">
                  <Heart className="w-5 h-5 text-wine mr-3" />
                  Avoid aggressive deep-tissue massage for 48 hours
                </li>
                <li className="flex items-center text-brown/80">
                  <Zap className="w-5 h-5 text-wine mr-3" />
                  Avoid extreme heat such as saunas for 24 hours
                </li>
                <li className="flex items-center text-brown/80">
                  <Clock className="w-5 h-5 text-wine mr-3" />
                  Attend follow-up review at about 8 weeks
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Fat Freezing Malaysia{" "}
              <span className="text-wine">Price Guide 2026</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Abdomen</p>
                <p className="text-brown font-semibold">RM 1,500 to RM 2,200</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Love Handles</p>
                <p className="text-brown font-semibold">RM 2,800 to RM 4,000</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Inner Thighs</p>
                <p className="text-brown font-semibold">RM 2,800 to RM 4,000</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Bra / Back Fat</p>
                <p className="text-brown font-semibold">RM 1,500 to RM 2,200</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Upper Arms</p>
                <p className="text-brown font-semibold">RM 2,500 to RM 3,500</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-taupe mb-2">Double Chin</p>
                <p className="text-brown font-semibold">RM 1,200 to RM 1,800</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/10 rounded-2xl p-8 border border-wine/20 mt-8"
            >
              <p className="text-brown font-bold mb-2">
                Multi-area package pricing
              </p>
              <p className="text-brown/80">
                Multi-area packages start from RM 6,000, with final pricing
                depending on area, number of cycles, and device selection. A
                personalised quote is provided after consultation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Fat Freezing vs{" "}
              <span className="text-wine">Other Slimming Options</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Fat freezing vs liposuction
                </h3>
                <p className="text-brown/80">
                  Fat freezing is non-surgical with gradual results and minimal
                  downtime. Liposuction is surgical, removes larger fat volumes
                  faster, but involves recovery and more risk.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Fat freezing vs GLP-1 weight loss treatment
                </h3>
                <p className="text-brown/80">
                  GLP-1 medication is better suited for people who need broader
                  weight reduction and appetite control. Fat freezing is better
                  for localised stubborn fat in patients already near their
                  target weight.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Fat freezing vs skin-tightening devices
                </h3>
                <p className="text-brown/80">
                  RF or HIFU body treatments may help with skin tightening and
                  mild contouring. Fat freezing is stronger for reducing
                  targeted fat pockets. In some cases, a combined treatment plan
                  makes the most sense.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Maintain Results */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              How to Keep <span className="text-wine">Results Looking Good</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-8"
            >
              <p className="text-brown/80 mb-6">
                Fat freezing removes treated fat cells permanently, but
                remaining fat cells can still enlarge if weight increases.
              </p>

              <h3 className="text-xl font-bold text-brown mb-4">
                Best habits after treatment:
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Scale className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">Keep weight stable</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Activity className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">Stay active consistently</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Droplets className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">Drink enough water</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Heart className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">
                    Prioritise protein and fibre
                  </span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Smartphone className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">Sleep well and recover well</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FAQWithSchema data={faqs} />

      {/* Final CTA */}
      <section className="py-20 bg-wine relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Book Your Free Fat Freezing Assessment
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg opacity-90 mb-8">
              Speak to a doctor about your body concern, suitability, treatment
              options, and realistic results with no pressure and no guesswork.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link href="/contact-us/" className="bg-white text-wine px-10 py-4 rounded-full font-semibold hover:opacity-90 transition">
                Book Free Assessment
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FatFreezingLanding;