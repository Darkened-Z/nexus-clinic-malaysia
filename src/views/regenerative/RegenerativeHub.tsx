"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  CheckCircle,
  Shield,
  ArrowRight,
  Target,
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

interface RegenerativeHubProps {
  locale: string;
}

export default function RegenerativeHub({ locale }: RegenerativeHubProps) {
    const treatments = [
      {
        name: "Testosterone Therapy Malaysia",
        description: "A doctor-led treatment option for suitable patients experiencing symptoms linked to low testosterone, including low energy, reduced drive, and changes in strength, focus, or mood.",
        slug: "testosterone-therapy-malaysia",
        imageUrl: "/images/regenerative/testosterone-therapy.webp",
      },
      {
        name: "ED Treatment Malaysia",
        description: "A professional overview of erectile dysfunction treatment options designed to improve confidence, function, and sexual wellness through medically guided care.",
        slug: "ed-treatment-malaysia",
        imageUrl: "/images/regenerative/ed-treatment.webp",
      },
      {
        name: "Hormone Replacement Therapy Malaysia",
        description: "A structured treatment approach for patients with symptoms related to hormone imbalance, using clinical assessment and personalized monitoring.",
        slug: "hormone-replacement-therapy-malaysia",
        imageUrl: "/images/regenerative/hormone-replacement.webp",
      },
      {
        name: "PCOS Treatment Malaysia",
        description: "Doctor-led support for patients managing polycystic ovary syndrome, with treatment planning focused on hormonal balance, symptoms, and long-term wellness.",
        slug: "pcos-treatment-malaysia",
        imageUrl: "/images/regenerative/pcos-treatment.webp",
      },
      {
        name: "Hypothyroidism Treatment Malaysia",
        description: "Medical assessment and treatment support for patients with low thyroid function, especially where fatigue, weight changes, or hormonal symptoms are present.",
        slug: "hypothyroidism-treatment-malaysia",
        imageUrl: "/images/regenerative/hypothyroidism-treatment.webp",
      },
      {
        name: "Stem Cell Therapy Malaysia",
        description: "An advanced regenerative treatment category considered in selected cases where tissue support and recovery are part of the treatment goal.",
        slug: "stem-cell-therapy-malaysia",
        imageUrl: "/images/regenerative/stem-cell-therapy.webp",
      },
      {
        name: "Anti-Aging Therapy Malaysia",
        description: "A wellness-focused approach to healthy aging that may include hormone review, regenerative support, and doctor-guided optimization plans.",
        slug: "anti-aging-therapy-malaysia",
        imageUrl: "/images/regenerative/anti-aging-therapy.webp",
      },
      {
        name: "Hormone Test Malaysia",
        description: "Comprehensive hormone testing to help identify imbalances and guide treatment decisions more accurately.",
        slug: "hormone-test-malaysia",
        imageUrl: "/images/regenerative/hormone-test.webp",
      },
      {
        name: "Menopause Hormone Replacement Malaysia",
        description: "Support for menopause-related symptoms using doctor-led hormone replacement planning for suitable patients.",
        slug: "menopause-hormone-replacement-malaysia",
        imageUrl: "/images/regenerative/menopause-hormone.webp",
      },
      {
        name: "P-Shot Malaysia",
        description: "A regenerative intimate wellness treatment designed to support male sexual function and confidence in appropriate candidates.",
        slug: "p-shot-malaysia",
        imageUrl: "/images/regenerative/p-shot.webp",
      },
      {
        name: "O-Shot Malaysia",
        description: "A regenerative treatment option for female intimate wellness, guided by doctor assessment and individual suitability.",
        slug: "o-shot-malaysia",
        imageUrl: "/images/regenerative/o-shot.webp",
      },
      {
        name: "Shockwave Therapy Malaysia",
        description: "A non-invasive treatment option often used in sexual wellness and performance-related care as part of a broader treatment plan.",
        slug: "shockwave-therapy-malaysia",
        imageUrl: "/images/regenerative/shockwave-therapy.webp",
      },
    ];

  const concernMapping = [
    { concern: "Low energy, reduced drive, symptoms of low testosterone", treatment: "Testosterone Therapy or Hormone Test", link: "/regenerative-treatments/testosterone-therapy-malaysia/" },
    { concern: "Difficulty with sexual performance", treatment: "ED Treatment or Shockwave Therapy", link: "/regenerative-treatments/ed-treatment-malaysia/" },
    { concern: "Menopause symptoms affecting daily life", treatment: "Menopause Hormone Replacement", link: "/regenerative-treatments/menopause-hormone-replacement-malaysia/" },
    { concern: "Hormonal imbalance symptoms without clear answers yet", treatment: "Hormone Test or Hormone Replacement Therapy", link: "/regenerative-treatments/hormone-test-malaysia/" },
    { concern: "PCOS related hormonal concerns", treatment: "PCOS Treatment", link: "/regenerative-treatments/pcos-treatment-malaysia/" },
    { concern: "Possible thyroid related fatigue or weight change", treatment: "Hypothyroidism Treatment", link: "/regenerative-treatments/hypothyroidism-treatment-malaysia/" },
    { concern: "Want a broader healthy aging plan", treatment: "Anti-Aging Therapy", link: "/regenerative-treatments/anti-aging-therapy-malaysia/" },
    { concern: "Interest in intimate wellness support", treatment: "P-Shot or O-Shot", link: "/regenerative-treatments/p-shot-malaysia/" },
    { concern: "Looking for advanced regenerative options", treatment: "Stem Cell Therapy", link: "/regenerative-treatments/stem-cell-therapy-malaysia/" },
  ];

  const faqData = [
    { q: "How do I know which treatment I need?", a: "The best first step is consultation. Many patients come in with symptoms, not a treatment name. Doctor assessment helps identify the most suitable path." },
    { q: "Do I need hormone testing before treatment?", a: "In many cases, testing is an important part of safe and accurate treatment planning, especially when symptoms may be hormone-related." },
    { q: "Are these treatments suitable for everyone?", a: "No. Suitability depends on symptoms, medical history, diagnosis, and treatment goals. That is why doctor-led assessment matters." },
    { q: "Can I combine more than one treatment?", a: "Sometimes yes. A treatment plan may involve testing, medical therapy, and supportive regenerative options depending on the concern." },
    { q: "Is care at Nexus Clinic KL private?", a: "Yes. Consultations and treatment planning for these concerns are handled professionally and discreetly." },
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
            <span className="text-sm font-inter text-wine font-medium">Regenerative Hub • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Regenerative Treatments in Malaysia
          </motion.h1>
          
          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-wine font-georgia mt-4"
          >
            Doctor Led Hormone, Wellness, and Intimate Health Treatments at Nexus Clinic KL
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Some health concerns are not only cosmetic. Low energy, hormonal imbalance, sexual wellness concerns, 
            menopause symptoms, thyroid issues, and age-related changes can affect how you feel every day.
            <br /><br />
            At Nexus Clinic KL, regenerative treatment starts with proper assessment. Our doctors look at symptoms, 
            medical background, goals, and suitability before recommending a plan that is clear, responsible, and 
            tailored to you.
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
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Whatsapp message="Hi, I'm interested in regenerative treatments at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
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
                <p className="font-inter font-semibold text-brown text-sm">Doctor Led Assessment</p>
                <p className="font-inter text-taupe text-xs">Proper medical oversight</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">Personalized Planning</p>
                <p className="font-inter text-taupe text-xs">Tailored to your needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">KLCC Location</p>
                <p className="font-inter text-taupe text-xs">Wisma UOA II, Jalan Pinang</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">Private & Professional</p>
                <p className="font-inter text-taupe text-xs">Discreet consultations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Educational Intro Section */}
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
              Regenerative Care Is About Function, Balance, and Quality of Life
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-lg text-taupe font-inter leading-relaxed mb-6">
            Regenerative and wellness treatments are often sought by patients who feel that something is off, 
            even when the concern is difficult to describe in one sentence. Some patients come in because of 
            fatigue, reduced drive, difficulty with sexual performance, hormonal symptoms, or signs of aging 
            that seem to affect both body and confidence. Others want clearer answers through proper hormone 
            testing before deciding what to do next.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="text-lg text-brown font-inter leading-relaxed">
            At Nexus Clinic Kuala Lumpur, this category is approached with care and medical oversight. The aim 
            is not to overpromise, but to assess the root issue, explain the available options, and recommend 
            a treatment path that is suitable for your stage of life, symptoms, and goals.
          </motion.p>
        </motion.div>
      </section>

      {/* Treatments Available - Grid Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Treatments Available at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter mt-2">Browse our complete range of regenerative, hormone, and wellness-related treatments in Malaysia.</p>
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
                <Link href={`/regenerative/${treatment.slug}/`}>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Find the Right Treatment for Your Concern</h2>
            <p className="text-taupe font-inter mt-2">Use this guide as a simple starting point.</p>
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
                This category requires discretion, medical judgment, and clear communication. At Nexus Clinic KL, 
                recommendations are not based on trends or generic packages. We start with symptoms, history, 
                testing where needed, and a realistic discussion about what treatment may help and what it may not change.
              </p>
              <p className="text-brown font-inter leading-relaxed">
                Some patients need diagnosis first. Some need monitoring before committing to a plan. Some are better 
                suited for a phased approach. That is why every recommendation is made carefully, with doctor oversight 
                and patient understanding at the center.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Symptoms and history assessment first</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Testing where clinically indicated</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Realistic discussion of potential outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Phased approach when appropriate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Doctor oversight throughout the journey</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <FAQWithSchema data={faqData} />

      {/* Final Booking Section */}
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
              Book Your Consultation at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Every regenerative treatment journey starts with proper assessment, honest explanation, and a plan 
              built around your symptoms, goals, and medical suitability. Whether you are seeking hormone support, 
              wellness optimization, or intimate health treatment, our doctors are here to guide you clearly and professionally.
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
                message="Hi, I'd like to book a consultation for regenerative treatments at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited Slots Available This Week | Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
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
            Nexus Clinic is an advanced aesthetic, wellness, and medical treatment clinic in Kuala Lumpur offering 
            doctor-led care for hormone-related concerns, regenerative therapy, intimate wellness, and healthy aging 
            support. We focus on privacy, safety, and personalized treatment planning.
          </p>
        </motion.div>
      </section>
    </div>
  );
}