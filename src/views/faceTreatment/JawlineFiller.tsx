"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  Syringe,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  Eye,
  ArrowUp,
  AlertCircle,
  Droplets,
  Activity,
  TrendingUp,
  Users,
  Scissors,
  Zap,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";

interface JawlineFillerProps {
  locale: string;
}

export default function JawlineFiller({ locale }: JawlineFillerProps) {
  const rootCauses = [
    {
      cause: "Weak bone structure",
      concern: "Recessed or undefined jaw from the side and front",
      treatment: "Jawline filler along the mandible",
      filler: "HA filler or Radiesse",
    },
    {
      cause: "Masseter muscle bulk",
      concern: "Wide, square lower face when jaw is clenched",
      treatment: "Masseter Botox to slim the muscle",
      filler: "Sometimes combined with filler",
    },
    {
      cause: "Skin laxity and jowling",
      concern: "Soft or sagging jaw border, blurred definition",
      treatment: "Filler to restore volume and structure",
      filler: "Yes. HA filler for lifting effect",
    },
    {
      cause: "Submental fat",
      concern: "Double chin appearance, blurred neck-jaw angle",
      treatment: "Fat dissolving or CoolSculpting",
      filler: "Sometimes combined after fat reduction",
    },
  ];

  const genderGoals = [
    {
      gender: "Men",
      goal: "Stronger angularity and sharper definition",
      focus: "Mandible body and lower border definition",
      volume: "1.5 to 3ml typically across the full jawline",
      product: "Juvederm Volux or Radiesse",
      combo: "Often combined with<a href='/face/chin-filler-malaysia/' class='font-bold text-wine italic'> chin filler </a>",
      outcome: "Chiselled jaw that photographs well",
    },
    {
      gender: "Women",
      goal: "Softer contour, V-line shape, feminine taper",
      focus: "Mandible angle, chin projection and V-line taper",
      volume: "1 to 2ml with lighter hand at the angle",
      product: "Juvederm Voluma or Volux",
      combo: "Very commonly combined with jaw Botox",
      outcome: "Defined but soft jaw that tapers to a clean chin",
    },
  ];

  const faceShapes = [
    { shape: "Round", concern: "Jaw blends into neck, no definition", approach: "Filler along the full mandible border", combine: "Chin filler to elongate the face" },
    { shape: "Square", concern: "Wide jaw due to muscle bulk", approach: "Light filler for definition, primary Botox slimming", combine: "Masseter Botox to reduce width" },
    { shape: "Oval", concern: "Mild softening with age, wants refinement", approach: "Conservative filler at mandible angles", combine: "Skin booster for overall quality" },
    { shape: "Heart-shaped", concern: "Narrow jaw, prominent forehead", approach: "Filler to widen the lower jaw", combine: "Chin filler to complete lower face" },
    { shape: "Long", concern: "Wants definition without adding length", approach: "Filler at angles only, not along lower border", combine: "Cheek filler to balance mid-face" },
    { shape: "Diamond", concern: "Wide cheekbones, narrow jaw", approach: "Filler along full mandible to widen lower face", combine: "Chin filler for symmetry" },
  ];

  const comparisonData = [
    { factor: "What it does", filler: "Adds structure and definition along the mandible", botox: "Slims the jaw by shrinking overdeveloped masseter muscle" },
    { factor: "Addresses", filler: "Weak bone structure, age-related loss, lack of definition", botox: "Wide square jaw caused by muscle bulk" },
    { factor: "Results timeline", filler: "Immediate. Visible the same day", botox: "Gradual. Full results in 4 to 6 weeks" },
    { factor: "Duration", filler: "12 to 24 months", botox: "4 to 6 months" },
    { factor: "Reversible", filler: "Yes for HA filler", botox: "Yes. Naturally wears off" },
    { factor: "Best for", filler: "Undefined or recessed jawline", botox: "Wide or square jaw due to muscle" },
    { factor: "Cost in KL (2026)", filler: "RM 2,000 to RM 4,500 per session", botox: "RM 800 to RM 1,500 per session" },
  ];

  const fillerProducts = [
    {
      name: "Juvederm Volux",
      description: "The firmest HA filler in the Juvederm range, designed specifically for jawline and chin structural support.",
      longevity: "18 to 24 months",
      bestFor: "Primary choice for patients requiring significant definition",
    },
    {
      name: "Juvederm Voluma",
      description: "High-density HA filler with strong lift capacity. Used for jawline maintenance and moderate correction.",
      longevity: "12 to 18 months",
      bestFor: "Patients needing moderate structural correction",
    },
    {
      name: "Restylane Lyft",
      description: "Firm HA with good structural support and a strong safety record. Frequently used for jawline contouring.",
      longevity: "12 to 18 months",
      bestFor: "Combined jawline and chin treatments",
    },
    {
      name: "Radiesse",
      description: "Calcium hydroxylapatite biostimulatory filler. Adds immediate volume and stimulates collagen production.",
      longevity: "18 to 24 months",
      bestFor: "Patients wanting longest-lasting result",
    },
  ];

  const pricingTiers = [
    { treatment: "Jawline filler", volume: "1 to 3 ml", price: "RM 2,500 – RM 3,500+" },
    { treatment: "Jawline refinement / touch-up", volume: "0.5 to 1.5 ml", price: "RM 1,800 – RM 2,500" },
    { treatment: "Jaw slimming (Botox)", volume: "Customised", price: "RM 1,500 – RM 2,400" },
    { treatment: "Jawline + chin contouring", volume: "Customised", price: "RM 3,000 – RM 5,000+" },
    { treatment: "Full lower face plan", volume: "Multi-area", price: "RM 6,000 – RM 9,000+" },
  ];

  const faqData = [
    { q: "How long does jawline filler last in Malaysia?", a: "Jawline filler typically lasts 12 to 24 months depending on the product used. Juvederm Volux and Radiesse produce the longest-lasting results at 18 to 24 months. Standard HA fillers like Juvederm Voluma or Restylane Lyft last 12 to 18 months. Individual metabolism and lifestyle also affect how quickly filler breaks down." },
    { q: "How much does jawline filler cost in Malaysia in 2026?", a: "Jawline filler treatments in Malaysia typically range from RM 1,800 to RM 3,500+ depending on the product used, volume required and the level of contouring needed. Combination treatments involving jawline, chin or facial balancing generally start from RM 3,000 and can range up to RM 7,000+ for more advanced corrections. Final pricing is confirmed after consultation." },
    { q: "Is jawline filler suitable for men in Malaysia?", a: "Yes. Jawline filler is increasingly popular among men in Malaysia, particularly for achieving a sharper, more angular lower face. The technique for male patients differs significantly from female patients. More volume is typically used, placement is adjusted for masculine angularity and the overall goal is structural definition. Nexus Clinic KL uses gender-specific injection protocols for all jawline treatments." },
    { q: "Can jawline filler fix a double chin?", a: "Jawline filler can improve the appearance of a double chin caused by an undefined or recessed jaw by creating a cleaner neck-to-jaw angle. If the double chin is caused by submental fat rather than structural weakness, filler alone will not resolve it. In those cases, fat dissolving treatments or CoolSculpting are the appropriate primary intervention." },
    { q: "What is the difference between jawline filler and jaw Botox?", a: "Jawline filler adds volume and structural definition along the mandible to create a sharper border. Results are immediate and last 12 to 24 months. Jaw Botox relaxes the masseter muscles to slim a wide or square lower face caused by muscle bulk. Results take 4 to 6 weeks and last 4 to 6 months. Many patients benefit from combining both." },
    { q: "How many ml of filler is needed for the jawline?", a: "Most patients need 1 to 2.5ml of filler for a visible, natural-looking jawline result. Male patients with strong structural goals may require 2 to 3ml. Maintenance top-up treatments typically use 0.5 to 1ml. The exact volume is confirmed at consultation based on your bone structure, face shape and the degree of correction required." },
    { q: "Can jawline filler be dissolved?", a: "Hyaluronic acid jawline fillers are fully dissolvable with hyaluronidase. This is one of the primary reasons HA fillers are the preferred starting point for first-time patients. Radiesse is not dissolvable and requires more careful patient assessment before use." },
    { q: "How soon are results visible after jawline filler?", a: "Results are visible immediately after treatment. The jawline will look defined and structured from the day of the appointment. Over the following 7 to 14 days, any minor swelling resolves and the filler integrates fully with surrounding tissue. The final result is typically at its best two weeks after treatment." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Non-Surgical Jawline Contouring"
        title="Sharper Jawline Filler in Malaysia for"
        highlight="Defined Contours and a Sculpted Lower Face"
        description="A defined jawline does not just change how you look in photographs. It changes how your entire face reads. The jaw is the structural frame of the lower face."
        details="Jawline filler at Nexus Clinic Kuala Lumpur reshapes that frame without surgery, stitches or recovery time. Our doctors have performed over 5,000 facial filler procedures using technique specifically built for Southeast Asian facial anatomy. The result is a sharper, more defined lower face that looks completely natural."
        note="Jawline filler requires precise placement along the mandible. Results depend on individual bone structure and the amount of volume needed."
        image="/images/face/Jawline Filler.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Jawline Filler Treatment"
        ctaText="Book Jawline Assessment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in jawline filler at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Defined Jawline"
        floatingSubtitle="Immediate results • Zero surgery"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />
      {/* Trust Section */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-taupe/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-wine" />
                </div>
                <h2 className="font-georgia text-2xl md:text-3xl text-brown">
                  Trust at a glance
                </h2>
              </div>
              <div className="hidden sm:block w-px h-8 bg-taupe/20" />
              <p className="text-taupe font-inter text-sm">
                Nexus Clinic Kuala Lumpur — Excellence in Aesthetic Medicine
              </p>
            </div>

            {/* Key Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-y border-taupe/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Established</p>
                  <p className="font-georgia text-brown font-bold text-lg">2001</p>
                  <p className="font-inter text-taupe text-xs">Over 20 years of excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Location</p>
                  <p className="font-georgia text-brown font-bold text-sm">Wisma UOA II, Jalan Pinang</p>
                  <p className="font-inter text-taupe text-xs">KLCC, 50450 Kuala Lumpur</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Opening Hours</p>
                  <p className="font-georgia text-brown font-bold text-sm">Monday - Saturday</p>
                  <p className="font-inter text-taupe text-xs">9:00am – 6:00pm | Closed Sundays & PH</p>
                </div>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">20+ Years of Excellence</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Trusted aesthetic care since 2001</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Performed by licensed doctors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">MOH-Approved Products</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Premium, medical-grade fillers only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Trust Indicators */}
            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Award-winning practitioners</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Doctor-led consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Emergency protocols in place</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Treatment Overview Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Jawline Filler Treatment Overview</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know at a glance</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatment", value: "Non-surgical jawline contouring" },
              { icon: Clock, label: "Session Time", value: "30 to 45 minutes" },
              { icon: Heart, label: "Downtime", value: "Minimal, same day return" },
              { icon: Zap, label: "Results", value: "Immediate, settled in 7-14 days" },
            ].map((item, idx) => (
              <div key={idx} className="bg-light p-5 rounded-xl border border-taupe/10 shadow-sm">
                <item.icon className="w-8 h-8 text-wine mb-3" />
                <p className="font-inter text-sm text-taupe">{item.label}</p>
                <p className="font-georgia text-md text-brown font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 rounded-2xl p-6 border border-wine/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="font-inter text-sm text-taupe">Longevity</p>
                <p className="font-georgia text-brown font-semibold">12 to 24 months<br />depending on product</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Reversible</p>
                <p className="font-georgia text-brown font-semibold">Yes for HA fillers<br />Dissolvable with hyaluronidase</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Volume Used</p>
                <p className="font-georgia text-brown font-semibold">1 to 3ml per session</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Undefined jawline, jowling, age-related volume loss, asymmetry</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Root Causes Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <TableForPages
            columns={[
              { key: "cause", header: "Root Cause", className: "font-semibold" },
              { key: "concern", header: "What You See" },
              { key: "treatment", header: "Correct Treatment" },
              { key: "filler", header: "Filler Involved" },
            ]}
            data={rootCauses.map((cause) => ({
              cause: cause.cause,
              concern: cause.concern,
              treatment: cause.treatment,
              filler: cause.filler,
            }))}
            title="Three Root Causes of a Weak Jawline"
            subtitle="Different causes require different treatment approaches"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Find Out Your Root Cause
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Gender-Specific Goals Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Jawline Filler for Men and Women</h2>
            <p className="text-taupe font-inter">Different goals, different technique — personalized approach</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {genderGoals.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className={`rounded-2xl p-6 ${idx === 0 ? 'bg-wine/5 border border-wine/20' : 'bg-rose/5 border border-rose/20'} hover:shadow-xl transition-shadow`}
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">{item.gender}</h3>
                <div className="space-y-3">
                  <div><span className="font-inter font-semibold text-brown">Goal:</span> <span className="text-taupe">{item.goal}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Primary Focus:</span> <span className="text-taupe">{item.focus}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Volume Used:</span> <span className="text-taupe">{item.volume}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Product Choice:</span> <span className="text-taupe">{item.product}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Often Combined With:</span> <span className="text-taupe"  dangerouslySetInnerHTML={{ __html:item.combo}} /></div>
                  <div><span className="font-inter font-semibold text-brown">Key Outcome:</span> <span className="text-taupe">{item.outcome}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Tailored Jawline Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Comparison Table: Filler vs Botox */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <TableForPages
            columns={[
              { key: "factor", header: "Factor", className: "font-semibold" },
              { key: "filler", header: "Jawline Filler" },
              { key: "botox", header: "Jaw Botox (Masseter)" },
            ]}
            data={comparisonData.map((row) => ({
              factor: row.factor,
              filler: row.filler,
              botox: row.botox,
            }))}
            title="Jawline Filler vs Jaw Botox"
            subtitle="Understanding which treatment is right for your goals"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
             Book a Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Face Shape Guide Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          
            <TableForPages
              columns={[
                { key: "shape", header: "Face Shape", className: "font-semibold" },
                { key: "concern", header: "Current Concern" },
                { key: "approach", header: "Recommended Jawline Approach" },
                { key: "combine", header: "Combine With" },
              ]}
              data={faceShapes.map((shape) => ({
                shape: shape.shape,
                concern: shape.concern,
                approach: shape.approach,
                combine: shape.combine,
              }))}
              title="Jawline Filler by Face Shape"
              subtitle="Personalized approach based on your facial anatomy"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />
          <p>Patients who combine jawline filler with a broader facial plan often include 
            <Link href='/face/cheek-filler-malaysia/' className='font-bold text-wine italic'> Cheek filler </Link>
        can also be used in combination with jawline filler for a complete enhancement of facial contour. at Nexus Clinic for mid-face support that balances the newly defined lower face.</p>
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Nexus Clinic Difference Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">Nexus Clinic Kuala Lumpur</h2>
              <p className="text-2xl text-wine font-georgia">5,000+ Procedures, Built for Southeast Asian Faces</p>
              <p className="text-brown font-inter">
                Every aesthetic clinic in Malaysia offers jawline filler. The difference is not in the products but in the experience of the doctor reading your face, planning your treatment and executing the injection with precision.
              </p>
              <ul className="space-y-3">
                {[
                  "Over 5,000 facial filler procedures completed by licensed medical aesthetic doctors",
                  "15+ years of combined experience across our clinical team",
                  "Southeast Asian facial anatomy training built into every treatment protocol",
                  "Full facial proportion assessment before every jawline treatment",
                  "Honest consultations: if filler is not the right solution, you will be told",
                  "Gender-specific injection technique for male and female patients",
                  "MOH-approved products for every treatment without exception",
                  "Full aftercare support and structured follow-up included as standard",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-taupe font-inter text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-4 rounded-xl border-l-4 border-wine">
                <p className="text-brown font-inter text-sm">
                  According to the International Society of Aesthetic Plastic Surgery 2024 Global Statistics Report, non-surgical jawline and lower face contouring saw a 38% increase in procedure volume across Southeast Asia.
                </p>
                <p className="text-taupe text-xs mt-1">[ISAPS Global Statistics Report 2024]</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-cream p-6 rounded-2xl border border-taupe/20">
                <h3 className="font-georgia text-2xl text-brown mb-4"><a href='/face/dermal-filler-malaysia/' className='font-bold text-wine italic'>Dermal Filler  </a> Products Used for Jawline Contouring</h3>
                <div className="space-y-4">
                  {fillerProducts.map((product, idx) => (
                    <div key={idx} className="border-l-4 border-wine pl-4">
                      <p className="font-georgia text-brown font-semibold">{product.name}</p>
                      <p className="text-taupe font-inter text-sm">{product.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-inter text-xs text-wine">⏱️ {product.longevity}</span>
                        <span className="font-inter text-xs text-brown">✓ {product.bestFor}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-wine/5 rounded-lg">
                  <p className="text-taupe text-xs">
                    <a href='https://www.allergan.com' rel='nofollow' target='_blank' className='text-taupe hover:underline font-bold'>Allergan/AbbVie Malaysia</a> reported in 2023 that Juvederm Volux was the fastest-growing filler product in the structural contouring category in Malaysia, with a 47% increase in prescription volume.
                  </p>
                  <p className="text-taupe text-xs mt-1">[AbbVie Malaysia Aesthetic Market Summary Report, 2023]</p>
                </div>
                <Link href="/contact-us/" className="mt-4 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Product Suits Your Jawline
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Jawline Filler Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — safe, precise, and personalized</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Full Facial & Jawline Assessment", desc: "Doctor assesses your jawline in context of entire lower face. Front view, profile and 45-degree angle evaluated." },
              { step: "02", title: "Treatment Plan Confirmation", desc: "Exact product, volume, placement points, and technique confirmed. Most patients need 1-2ml for natural result." },
              { step: "03", title: "Numbing & Precise Injection", desc: "Topical numbing cream applied. Filler placed along mandible using cannula or fine needle. 30-45 minutes." },
              { step: "04", title: "Review, Shaping & Aftercare", desc: "Results reviewed immediately. Symmetry and proportion checked. Full aftercare instructions provided." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link href="/contact-us/" className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Book Your Jawline Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Same-day results at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >          
          {/* Jawline Filler Pricing Table */}
          <section className="py-20 px-4 bg-cream">
            <div className="container mx-auto max-w-4xl">
              <TableForPages
                columns={[
                  { key: "treatment", header: "Treatment" },
                  { key: "volume", header: "Typical Volume" },
                  { key: "price", header: "Price Range (2026)" },
                ]}
                data={pricingTiers.map((tier) => ({
                  treatment: tier.treatment,
                  volume: tier.volume,
                  price: tier.price,
                }))}
                title="Jawline Filler Price in Malaysia"
                subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
                variant="compact"
                fadeInUp={fadeInUp}
              />
              
              {/* Footnote */}
              <motion.p 
                variants={fadeInUp}
                className="text-center text-taupe font-inter text-sm italic mt-4"
              >
                * Final pricing confirmed at consultation. Price depends on filler brand, volume required and complexity.
              </motion.p>
            </div>
          </section>
          
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Personalised Jawline Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects & Aftercare Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects, Recovery and Aftercare</h2>
            <p className="text-taupe font-inter">What to expect and how to care for your results</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {[
                  "Mild swelling along the mandible, resolving within 2-4 days",
                  "Light bruising, fading within 5-7 days",
                  "Tenderness or firmness for 2-4 days as filler integrates",
                  "Mild redness at injection points, resolving within hours",
                ].map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Rare Risks
              </h3>
              <ul className="space-y-2">
                {[
                  "Nodules or irregular texture if filler placed at wrong depth",
                  "Asymmetry if volume not balanced across both sides",
                  "Vascular occlusion, requiring immediate management by trained doctor",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Avoid pressing or massaging the treated area for 48 hours",
                "Skip intense exercise for the first 24 hours",
                "Stay away from saunas and prolonged heat exposure for 48 hours",
                "Avoid alcohol for the first 24 hours to reduce bruising risk",
                "Sleep on your back for the first two nights if possible",
                "Assess your final result after 14 days when all settling is complete",
              ].map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
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
              Book Jawline Filler in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              A defined jawline is one of the highest-impact structural improvements available without surgery. 
              One consultation is enough to understand exactly what is causing your concern and what the result will look like.
            </p>
            <p className="text-cream/90 font-inter">
              Over 5,000 procedures. Technique built for Southeast Asian faces. A sharper lower face, same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for jawline filler at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}