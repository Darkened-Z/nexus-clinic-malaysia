"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import Link from "next/link";
import FAQWithSchema from "@/src/components/FAQWithSchema";
interface SkinHubProps {
  locale: string;
}

export default function SkinHub({ locale }: SkinHubProps) {
    const treatments = [
      {
        name: "Acne Treatment Malaysia",
        description: "A complete guide to treating active acne with doctor led plans that may include skincare, medication, peels, laser support, and tailored maintenance for clearer skin.",
        slug: "acne-treatment-malaysia",
        imageUrl: "/images/skin/acne-treatment.webp",
      },
      {
        name: "Acne Scar Treatment Malaysia",
        description: "Explore treatment options for indented acne scars, textural changes, and post acne skin damage using staged treatment plans designed to improve smoothness and skin quality.",
        slug: "acne-scar-treatment-malaysia",
        imageUrl: "/images/skin/acne-scar-treatment.webp",
      },
      {
        name: "Pigmentation Treatment Malaysia",
        description: "Doctor led treatment for uneven skin tone, sun spots, post inflammatory marks, and stubborn pigment using a combination of targeted solutions based on the type of pigmentation.",
        slug: "pigmentation-treatment-malaysia",
        imageUrl: "/images/skin/pigmentation-treatment.webp",
      },
      {
        name: "Melasma Treatment Malaysia",
        description: "Melasma needs careful management, not aggressive guesswork. Learn how Nexus Clinic KL approaches this long term pigment condition with realistic and skin safe planning.",
        slug: "melasma-treatment-malaysia",
        imageUrl: "/images/skin/melasma-treatment.webp",
      },
      {
        name: "Mole Removal Malaysia",
        description: "A clear guide to mole removal for cosmetic concerns, skin comfort, and visible lesions that patients want assessed and removed with proper doctor evaluation.",
        slug: "mole-removal-malaysia",
        imageUrl: "/images/skin/mole-removal.webp",
      },
      {
        name: "Hydrafacial Malaysia",
        description: "A gentle treatment that cleanses, exfoliates, hydrates, and refreshes the skin for patients who want a smoother, more radiant complexion with minimal downtime.",
        slug: "hydrafacial-malaysia",
        imageUrl: "/images/skin/hydrafacial.webp",
      },
      {
        name: "Pico Laser Malaysia",
        description: "Pico laser is used for selected concerns such as pigmentation, uneven tone, tattoo fading, and textural improvement using ultra short pulses designed for precision.",
        slug: "pico-laser-malaysia",
        imageUrl: "/images/skin/pico-laser.webp",
      },
      {
        name: "Dark Eye Circle Treatment Malaysia",
        description: "Understand the different causes of dark eye circles including hollowing, pigmentation, thin skin, and vascular shadows, and which treatment path may be suitable.",
        slug: "dark-eye-circle-treatment-malaysia",
        imageUrl: "/images/skin/dark-eye-circle-treatment.webp",
      },
      {
        name: "Skin Whitening Treatment Malaysia",
        description: "A doctor led guide to skin brightening and tone improvement focused on healthy, even looking skin rather than harsh or unrealistic promises.",
        slug: "skin-whitening-treatment-malaysia",
        imageUrl: "/images/skin/skin-whitening-treatment.webp",
      },
      {
        name: "Eczema Treatment Malaysia",
        description: "For patients dealing with dry, itchy, inflamed skin, eczema treatment begins with diagnosis, trigger control, and a plan to calm and protect the skin barrier.",
        slug: "eczema-treatment-malaysia",
        imageUrl: "/images/skin/eczema-treatment.webp",
      },
      {
        name: "Keloid Treatment Malaysia",
        description: "Keloid scars need a careful approach based on size, location, symptoms, and recurrence risk. Learn the treatment options available at Nexus Clinic KL.",
        slug: "keloid-treatment-malaysia",
        imageUrl: "/images/skin/keloid-treatment.webp",
      },
      {
        name: "Rosacea Treatment Malaysia",
        description: "Persistent redness, sensitivity, flushing, and breakouts may point to rosacea. This page explains how diagnosis and treatment are approached safely and clearly.",
        slug: "rosacea-treatment-malaysia",
        imageUrl: "/images/skin/rosacea-treatment.webp",
      },
      {
        name: "Stretch Mark Removal Malaysia",
        description: "A practical guide to improving the appearance of stretch marks using doctor led treatment plans based on skin type, mark age, and treatment goals.",
        slug: "stretch-mark-removal-malaysia",
        imageUrl: "/images/skin/stretch-mark.webp",
      },
      {
        name: "Laser Hair Removal Malaysia",
        description: "Reduce unwanted hair with a treatment plan designed around skin tone, hair thickness, treatment area, and realistic expectations for long term reduction.",
        slug: "laser-hair-removal-malaysia",
        imageUrl: "/images/skin/laser-hair-removal.webp",
      },
      {
        name: "Tattoo Removal Malaysia",
        description: "Tattoo removal in Malaysia using doctor guided laser based treatment, with planning based on ink color, depth, age of tattoo, and skin response.",
        slug: "tattoo-removal-malaysia",
        imageUrl: "/images/skin/tattoo-removal.webp",
      },
    ];

  const concernMapping = [
    { concern: "Active acne and ongoing breakouts", treatment: "Acne Treatment", link: "/skin/acne-treatment-malaysia/" },
    { concern: "Indented acne scars or rough texture", treatment: "Acne Scar Treatment", link: "/skin/acne-scar-treatment-malaysia/" },
    { concern: "Uneven skin tone and dark marks", treatment: "Pigmentation Treatment or Pico Laser", link: "/skin/pigmentation-treatment-malaysia/" },
    { concern: "Hormonal or stubborn facial pigmentation", treatment: "Melasma Treatment", link: "/skin/melasma-treatment-malaysia/" },
    { concern: "A raised or visible mole you want removed", treatment: "Mole Removal", link: "/skin/mole-removal-malaysia/" },
    { concern: "Dull, congested, dehydrated skin", treatment: "Hydrafacial", link: "/skin/hydrafacial-malaysia/" },
    { concern: "Dark eye circles and tired looking under eyes", treatment: "Dark Eye Circle Treatment", link: "/skin/dark-eye-circle-treatment-malaysia/" },
    { concern: "Redness, flushing, or sensitivity", treatment: "Rosacea Treatment", link: "/skin/rosacea-treatment-malaysia/" },
    { concern: "Dry, itchy, irritated patches", treatment: "Eczema Treatment", link: "/skin/eczema-treatment-malaysia/" },
    { concern: "Raised scar tissue that keeps growing", treatment: "Keloid Treatment", link: "/skin/keloid-treatment-malaysia/" },
    { concern: "Stretch marks after weight change or pregnancy", treatment: "Stretch Mark Removal", link: "/skin/stretch-mark-removal-malaysia/" },
    { concern: "Unwanted facial or body hair", treatment: "Laser Hair Removal", link: "/skin/laser-hair-removal-malaysia/" },
    { concern: "Tattoo you want faded or removed", treatment: "Tattoo Removal or Pico Laser", link: "/skin/tattoo-removal-malaysia/" },
    { concern: "Looking for overall brighter and clearer skin", treatment: "Skin Whitening Treatment or Hydrafacial", link: "/skin/skin-whitening-treatment-malaysia/" },
    { concern: "Not sure what your skin actually needs", treatment: "Doctor Led Skin Assessment", link: "/contact-us/" },
  ];

  const faqData = [
    { q: "How do I know which skin treatment I actually need?", a: "Start with a consultation. Most patients know the concern they see, but not the exact treatment that fits it. The doctor assesses your skin, explains the likely cause, and recommends the treatment or combination that makes the most sense." },
    { q: "Can I combine different skin treatments at Nexus Clinic KL?", a: "Yes. Many patients benefit from a combination approach, but the sequence matters. For example, some concerns need the skin to calm down first, while others can be treated together in one broader plan." },
    { q: "Is pico laser suitable for every pigmentation problem?", a: "Not always. Pigmentation has different causes and depths. Some patients do well with pico laser, while others need a more cautious or combined approach, especially in melasma or sensitive skin." },
    { q: "What is the difference between pigmentation treatment and melasma treatment?", a: "Pigmentation is a broad category that includes many types of darkening or uneven tone. Melasma is one specific condition, usually more sensitive and more likely to recur, which is why it needs careful long term management." },
    { q: "Can acne scar treatment be done while acne is still active?", a: "Usually active acne needs to be controlled first. Once inflammation is reduced, the doctor can assess what type of scar treatment is most suitable and when to begin." },
    { q: "Is Hydrafacial a medical treatment or a maintenance treatment?", a: "Hydrafacial is often chosen for cleansing, hydration, and overall skin refreshment. It can be useful as part of regular maintenance, but it is not a substitute for targeted medical treatment when the concern is deeper or more complex." },
    { q: "Can laser hair removal work on all areas of the body?", a: "Laser hair removal can be used on many facial and body areas, but suitability depends on hair thickness, skin tone, and the treatment area. A consultation helps confirm the right plan." },
    { q: "How long does tattoo removal take?", a: "Tattoo removal usually takes multiple sessions. The number depends on ink color, depth, age of the tattoo, location, and how the skin responds between sessions." },
    { q: "Are skin treatments at Nexus Clinic KL doctor led?", a: "Yes. At Nexus Clinic KL, skin treatments begin with doctor assessment so the concern, treatment options, and realistic outcomes can be discussed properly before any procedure starts." },
    { q: "Where is Nexus Clinic KL located?", a: "Nexus Clinic KL is located at Wisma UOA II, Jalan Pinang, Kuala Lumpur, with convenient access for patients visiting from KLCC and surrounding areas." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15" />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto max-w-5xl relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full mx-auto mb-6">
            <Sparkles className="w-4 h-4 text-wine" />
            <span className="text-sm font-inter text-wine font-medium">Skin Treatments Hub • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Skin Treatments in Malaysia
          </motion.h1>
          
          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-wine font-georgia mt-4"
          >
            Doctor Led Skin Solutions at Nexus Clinic KL
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Skin concerns can show up in many ways. For some patients, it is persistent acne that never fully settles. 
            For others, it is pigmentation, melasma, acne scars, redness, dark eye circles, stretch marks, or a tattoo 
            they no longer want. Some simply want clearer, healthier, brighter skin and do not know where to begin.
            <br /><br />
            At Nexus Clinic KL, every skin treatment starts with assessment, not assumption. We look at what is happening 
            on the skin, what may be triggering it, and which treatment or combination will actually make sense for your 
            concern. Our approach is doctor led, practical, and focused on safe results that look natural and feel worth it.
          </motion.p>

          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-wine text-light px-8 py-4 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book Free Skin Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Whatsapp message="Hi, I'm interested in skin treatments at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
          </motion.div>
          
          <motion.p
            variants={fadeInUp}
            className="text-sm text-taupe font-inter mt-4"
          >
            No Commitment Required • Doctor Consultation
          </motion.p>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-taupe/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                <p className="font-inter text-taupe text-xs">Completed by licensed doctors</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">15+ Years Experience</p>
                <p className="font-inter text-taupe text-xs">Combined aesthetic medicine</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">Doctor Led Plans</p>
                <p className="font-inter text-taupe text-xs">Treatment based on diagnosis</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">KLCC Location</p>
                <p className="font-inter text-taupe text-xs">Wisma UOA II, Jalan Pinang</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Skin Reflects Many Different Conditions */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              The Skin Reflects Many Different Conditions
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-lg text-taupe font-inter leading-relaxed mb-6">
            Not every skin problem is the same, even when it looks similar at first. Acne may be driven by oil 
            production, clogged pores, hormones, inflammation, or irritation from unsuitable skincare. 
            Pigmentation can come from post acne marks, sun exposure, melasma, inflammation, or deeper pigment 
            that needs a different treatment approach. Redness may be rosacea, irritation, broken capillaries, 
            or a damaged skin barrier.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="text-lg text-brown font-inter leading-relaxed">
            That is why treatment needs to start with the right diagnosis. At Nexus Clinic Kuala Lumpur, we assess 
            the type of concern, how long it has been present, how the skin is behaving, and what kind of treatment 
            path is realistic. Some patients need laser based treatment. Some do better with topical and oral support. 
            Others need a staged plan that improves the skin gradually over time. The goal is not just to do a treatment. 
            The goal is to understand the concern properly and recommend the option that matches the skin in front of us.
          </motion.p>
        </motion.div>
      </section>

      {/* Skin Treatments Available - Grid Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Skin Treatments Available at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter mt-2">Browse our complete range of doctor led skin treatments in Malaysia.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-cream pb-6 rounded-xl border border-taupe/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-60 overflow-hidden bg-wine/5 rounded-xl mb-4">
                  <Image 
                    src={treatment.imageUrl}
                    alt={treatment.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-georgia text-xl text-brown mb-2 px-6">{treatment.name}</h3>
                <p className="text-taupe font-inter text-sm mb-4 px-6">{treatment.description}</p>
                <Link href={`/skin/${treatment.slug}/`}>
                  <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold text-sm hover:gap-3 transition-all px-6">
                    View Treatment Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Concern Mapping Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Find the Right Treatment for Your Skin Concern</h2>
            <p className="text-taupe font-inter mt-2">Not sure which treatment fits your concern? Use this guide as a starting point.</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-light rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Your Concern</th>
                  <th className="p-4 text-left font-georgia">Likely Treatment</th>
                  <th className="p-4 text-left font-georgia">Start Here</th>
                </tr>
              </thead>
              <tbody>
                {concernMapping.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 text-taupe font-inter">{item.concern}</td>
                    <td className="p-4 text-brown font-inter font-medium">{item.treatment}</td>
                    <td className="p-4">
                      <Link href={item.link}>
                        <button className="text-wine font-inter text-sm hover:font-bold transition-all">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* The Approach That Makes the Difference */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Approach That Makes the Difference</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <p className="text-taupe font-inter leading-relaxed mb-6">
                There are many clinics offering skin treatments in Kuala Lumpur, but treatment names alone do not 
                tell you much. What matters is whether the clinic understands the difference between similar 
                looking conditions and whether the recommendation is matched to the actual concern.
              </p>
              <p className="text-brown font-inter leading-relaxed">
                At Nexus Clinic KL, skin consultations are built around diagnosis first. We assess what the skin 
                is showing, what may be contributing to it, and what kind of results are realistic. We explain 
                what each treatment can help with, what it cannot do, and whether a single treatment or a staged 
                plan is the better route.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <p className="text-brown font-inter leading-relaxed mb-4">
                If a concern needs maintenance, we will say so. If a treatment is unlikely to help, we will say 
                that too. The aim is not to overcomplicate the plan. The aim is to guide you properly.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Doctor led skin assessment before any recommendation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Treatment plans based on the type and cause of the skin concern</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Support for acne, scars, pigmentation, redness, texture, hair removal, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Clear advice about treatment suitability, downtime, and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Personalized plans that can combine medical and device based treatments when needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Realistic, conservative guidance focused on healthy looking skin</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skin Improvement Often Needs a Structured Plan */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              Skin Improvement Often Needs a Structured Plan
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mb-8"></div>
            <p className="text-lg text-taupe font-inter leading-relaxed">
              Many skin concerns improve best in stages. For example, active acne may need to settle before acne scar 
              treatment begins. Melasma may need maintenance even after the skin has improved. Dark eye circles may 
              need a different solution depending on whether the cause is pigment, hollowing, thin skin, or vascular shadow.
              <br /><br />
              At Nexus Clinic KL, we build treatment plans around what the skin can respond to now and what will support 
              longer term improvement. That makes the process clearer and helps patients understand why certain treatments 
              are combined, spaced out, or approached gradually.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Patients Choose Nexus Clinic */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Why Patients Choose Nexus Clinic for Skin Treatment</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Doctor led skin assessment before any recommendation",
              "Treatment plans based on the type and cause of the skin concern",
              "Support for acne, scars, pigmentation, redness, texture, hair removal, and more",
              "Clear advice about treatment suitability, downtime, and maintenance",
              "Personalized plans that can combine medical and device based treatments when needed",
              "Realistic, conservative guidance focused on healthy looking skin",
              "Convenient location at Wisma UOA II, Jalan Pinang, Kuala Lumpur",
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown font-inter text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <FAQWithSchema data={faqData} />
      {/* CTA Section */}
      <section className="py-20 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-3xl md:text-5xl text-light">
              Book Your Skin Consultation at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Every skin treatment journey starts the same way: a proper assessment, an honest explanation of 
              what is happening in the skin, and a treatment plan based on what is actually suitable for you.
            </p>
            <p className="text-lg text-cream/90 font-inter max-w-2xl mx-auto">
              Whether you are dealing with acne, acne scars, pigmentation, redness, unwanted hair, or simply want 
              healthier looking skin, our doctors are here to guide you clearly and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Book Your Free Consultation Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Whatsapp 
                message="Hi, I'd like to book a free skin consultation at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited Slots Available This Week | Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
            </p>
            <p className="text-cream/60 font-inter text-xs">
              Serving patients across Kuala Lumpur, Petaling Jaya, Bangsar, Mont Kiara, Ampang, KLCC, Chow Kit, and throughout Malaysia
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Brand Content */}
      <section className="py-12 px-4 bg-brown">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <p className="text-cream/70 font-inter text-sm leading-relaxed">
            Nexus Clinic is an advanced aesthetic and skin clinic in Kuala Lumpur offering doctor led treatments 
            for acne, acne scars, pigmentation, melasma, laser hair removal, tattoo removal, and personalized 
            skin treatment planning. We focus on clear diagnosis, healthy looking results, and treatment plans 
            built around long term skin confidence.
          </p>
        </motion.div>
      </section>
    </div>
  );
}