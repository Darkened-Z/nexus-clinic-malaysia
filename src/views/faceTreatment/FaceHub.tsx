"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield
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

interface FaceHubProps {
  locale: string;
}

export default function FaceHub({ locale }: FaceHubProps) {
  const treatments = [
    { name: "Botox Malaysia", slug: "botox-malaysia", description: "Wrinkle relaxation, jaw slimming, gummy smile & more.", imageUrl: "/images/face/botox-malaysia.jpeg" },
    { name: "Cheek Filler Malaysia", slug: "cheek-filler-malaysia", description: "Restore midface volume & lift the lower face.", imageUrl: "/images/face/Cheek Filler Treatment.webp" },
    { name: "Chin Filler Malaysia", slug: "chin-filler-malaysia", description: "Correct projection & restore facial balance.", imageUrl: "/images/face/Chin Dermal Filler.webp" },
    { name: "Dermal Filler Malaysia", slug: "dermal-filler-malaysia", description: "Volume restoration & facial contouring.", imageUrl: "/images/face/dermal-filler.jpeg" },
    { name: "Jawline Filler Malaysia", slug: "jawline-filler-malaysia", description: "Define jaw border & sharpen your profile.", imageUrl: "/images/face/Jawline Filler.webp" },
    { name: "Lip Filler Malaysia", slug: "lip-filler-malaysia", description: "Fuller lips & defined Cupid's bow.", imageUrl: "/images/face/Lip Filler.webp" },
    { name: "Nose Filler Malaysia", slug: "nose-filler-malaysia", description: "Higher bridge, hump camouflage & tip definition.", imageUrl: "/images/face/Nose Filler Treatment.webp" },
    { name: "Nose Thread Lift Malaysia", slug: "nose-thread-lift-malaysia", description: "Higher bridge, sharper tip & better profile.", imageUrl: "/images/face/Nose Thread Lift.webp" },
    { name: "Skin Booster Malaysia", slug: "skin-booster-malaysia", description: "Hydration, collagen & glow from within.", imageUrl: "/images/face/Skin Booster Treatment.webp" },
    { name: "Tear Trough Filler Malaysia", slug: "tear-trough-filler-malaysia", description: "Under-eye treatment for dark circles & hollows.", imageUrl: "/images/face/Tear Trough Filler.webp" },
    { name: "Under Eye Filler Malaysia", slug: "under-eye-filler-malaysia", description: "Patient-first guide to under-eye treatment.", imageUrl: "/images/face/Under Eye Filler.webp" },
  ];

  const concernMapping = [
    { concern: "Lines and wrinkles when you smile, frown or talk", treatment: "Botox", link: "/face/botox-malaysia/" },
    { concern: "Hollow or sunken cheeks, loss of midface fullness", treatment: "Cheek Filler", link: "/face/cheek-filler-malaysia/" },
    { concern: "Tired-looking eyes, dark shadows under the eyes", treatment: "Tear Trough or Under Eye Filler", link: "/face/tear-trough-filler-malaysia/" },
    { concern: "Flat or undefined jawline", treatment: "Jawline Filler or Jaw Botox", link: "/face/jawline-filler-malaysia/" },
    { concern: "Recessed or weak chin affecting the profile", treatment: "Chin Filler", link: "/face/chin-filler-malaysia/" },
    { concern: "Flat nose bridge or drooping tip", treatment: "Nose Thread Lift or Nose Filler", link: "/face/nose-thread-lift-malaysia/" },
    { concern: "Thin or undefined lips", treatment: "Lip Filler", link: "/face/lip-filler-malaysia/" },
    { concern: "Dull, dehydrated or textured skin", treatment: "Skin Booster (Profhilo, Rejuran, Juvelook)", link: "/face/skin-booster-malaysia/" },
    { concern: "Nose bump or asymmetry without surgery", treatment: "Nose Filler", link: "/face/nose-filler-malaysia/" },
    { concern: "Wide jaw from muscle bulk", treatment: "Jaw Slimming Botox", link: "/face/botox-malaysia/" },
    { concern: "Overall facial volume loss and descent with age", treatment: "Cheek Filler and Dermal Filler", link: "/face/cheek-filler-malaysia/" },
    { concern: "Want to understand all filler options first", treatment: "Dermal Filler Overview", link: "/face/dermal-filler-malaysia/" },
  ];

  const faqData = [
    { q: "How do I know which face treatment I actually need?", a: "Start with a consultation. Most patients arrive with a concern, not a treatment name. The doctor assesses your face and identifies what is causing your concern, then recommends the treatment or combination that addresses the actual root cause. Many patients who come in expecting one treatment leave with a clearer plan that is different and often simpler than they expected." },
    { q: "Can I combine multiple face treatments in one appointment?", a: "Yes. Combining treatments in one session is common and often more cost-efficient than separate appointments. The most common combinations at Nexus Clinic KL are Botox with filler, cheek filler with tear trough filler, and jawline filler with chin filler. The doctor plans the right sequence and confirms what is safe to combine at consultation." },
    { q: "Are all face treatments at Nexus Clinic KL non-surgical?", a: "All treatments listed on this page are non-surgical injectable treatments. They require no incisions, no general anaesthesia and no extended recovery time. Most patients return to normal activities the same day. For concerns that genuinely require surgical assessment, the doctor will say so honestly during your consultation rather than attempting to treat it with a non-surgical option that will not deliver the outcome you need." },
    { q: "How long do face treatment results last?", a: "Longevity varies significantly by treatment. Botox lasts 3 to 6 months. HA filler depending on the area and product lasts 9 to 24 months. Nose thread lift lasts 12 to 36 months depending on thread type. Skin boosters require top-up sessions every 3 to 18 months depending on the product. Every treatment page linked above includes a detailed longevity section for that specific treatment." },
    { q: "What is the price range for face treatments in Malaysia at Nexus Clinic KL?", a: "Pricing varies depending on the treatment type, product used and the level of correction required. Muscle relaxant treatments typically start from around RM 500 to RM 800 per area. Dermal fillers generally range from RM 1800 to RM 3000+ depending on the area and volume used. Skin booster and rejuvenation treatments are usually priced between RM 1800 to RM 2500 per session. Each treatment page includes a detailed pricing breakdown, and final recommendations are confirmed during consultation based on your goals." },
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
            <span className="text-sm font-inter text-wine font-medium">Face Treatments Hub • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Face Treatments in Malaysia
          </motion.h1>
          
          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-wine font-georgia mt-4"
          >
            Non-Surgical Facial Aesthetics at Nexus Clinic KL
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Every face treatment at Nexus Clinic KL starts with a diagnosis, not a sales pitch. 
            Browse our complete range of non-surgical facial treatments in Malaysia including 
            fillers, Botox, nose thread lift, skin booster and more. Doctor-led. Natural results. 
            Kuala Lumpur.
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
                Book Free Face Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Whatsapp message="Hi, I'm interested in face treatments at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
          </motion.div>
          
          <motion.p
            variants={fadeInUp}
            className="text-sm text-taupe font-inter mt-4"
          >
            No Commitment Required • Free Consultation
          </motion.p>
        </motion.div>
      </section>

      {/* Trust Section - Concise for Hub Page */}
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
                <p className="font-inter font-semibold text-brown text-sm">MOH-Approved Products</p>
                <p className="font-inter text-taupe text-xs">For every injectable treatment</p>
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

      {/* Introduction Section */}
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
              The Face Ages in Layers
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-lg text-taupe font-inter leading-relaxed mb-6">
            At the surface, skin loses hydration, elasticity and radiance. Beneath it, fat pads thin 
            and descend. Deeper still, bone density reduces and the structural scaffolding of the 
            face gradually withdraws. The concerns patients come in with — hollows, wrinkles, 
            sagging, dark circles, a nose they've never been happy with — all have specific 
            structural causes. And each has a specific treatment.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="text-lg text-brown font-inter leading-relaxed">
            At Nexus Clinic Kuala Lumpur, face treatment starts with a diagnosis, not a menu. 
            Our licensed aesthetic doctors assess your face, explain what is causing the concern 
            you came in with and recommend the treatment or combination that actually addresses 
            the root cause. Every treatment on this page is non-surgical, performed by a doctor 
            and designed to look natural from every angle.
          </motion.p>
        </motion.div>
      </section>

      {/* Face Treatments Available - Grid Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Face Treatments Available at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter mt-2">Browse our complete range of non-surgical facial treatments</p>
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
                <Link href={`/face/${treatment.slug}/`}>
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
            <p className="text-taupe font-inter mt-2">Not sure which treatment addresses your specific concern? Use this guide</p>
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

      {/* Approach Section */}
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
                There are many aesthetic clinics offering face treatments in Kuala Lumpur. 
                The treatments, products and prices are often similar. What differs is how 
                each clinic approaches the decision about what you actually need.
              </p>
              <p className="text-brown font-inter leading-relaxed">
                At Nexus Clinic KL, every face treatment starts with a doctor-led assessment. 
                We identify the structural cause of your concern before recommending any treatment. 
                We explain exactly what a treatment will achieve and what it will not. We give 
                you a clear cost before you commit to anything. And we use conservative technique 
                as a clinical standard, not a marketing claim.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Over 5,000 facial procedures completed by licensed doctors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">15 or more years of combined aesthetic medicine experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Training in Southeast Asian facial anatomy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">MOH-approved products for every injectable treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Assessment and diagnosis before any treatment recommendation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Honest consultations: if a treatment is not right, you will be told</span>
                </li>
              </ul>
            </motion.div>
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
              Book Your Face Consultation at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Every face treatment journey starts the same way: a proper assessment by a licensed doctor, 
              an honest explanation of what will actually work for your face, and a clear treatment plan 
              with transparent pricing before you commit to anything.
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
                message="Hi, I'd like to book a free face consultation at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited Slots Available This Week | Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
            </p>
            <p className="text-cream/60 font-inter text-xs">
              Serving patients across KL, Petaling Jaya, Bangsar, Chow Kit, KLCC, Ampang, Mont Kiara and throughout Malaysia
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}