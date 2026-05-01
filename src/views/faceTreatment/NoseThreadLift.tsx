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
  AlertCircle,
  Activity,
  Zap,
  Scissors,
  TrendingUp,
  Eye,
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
interface NoseThreadLiftProps {
  locale: string;
}

export default function NoseThreadLift({ locale }: NoseThreadLiftProps) {
  const threadTypes = [
    {
      type: "PDO",
      material: "Polydioxanone. Most common in surgical sutures",
      longevity: "12 to 18 months",
      liftStrength: "Moderate immediate lift",
      bestFor: "First-time patients. Mild correction. Testing results before committing to longer-lasting threads",
    },
    {
      type: "PLLA",
      material: "Poly-L-Lactic Acid. Used in Sculptra skin injectable",
      longevity: "18 to 24 months",
      liftStrength: "Gradual collagen volumising",
      bestFor: "Patients wanting slower, progressive improvement. Sensitive skin. Those who want volume alongside lift",
    },
    {
      type: "PCL",
      material: "Polycaprolactone. Slowest-dissolving biocompatible polymer",
      longevity: "24 to 36 months",
      liftStrength: "Strongest long-term structural support",
      bestFor: "Patients who have done threads before. Those wanting maximum longevity and strong bridge projection",
    },
  ];

  const comparisonData = [
    { factor: "Primary effect", thread: "Lift and define existing tissue structure", filler: "Add volume and height to the bridge", surgery: "Permanent structural alteration of bone and cartilage" },
    { factor: "Best for", thread: "Low bridge, drooping tip, flat side profile", filler: "Low bridge requiring volume, minor bump smoothing", surgery: "Significant deformity, breathing issues, major structural change" },
    { factor: "Results", thread: "Immediate. Improvements over 6-8 weeks", filler: "Immediate", surgery: "Final result visible after 6-12 months" },
    { factor: "Longevity", thread: "12 to 36 months depending on type", filler: "12 to 18 months", surgery: "Permanent" },
    { factor: "Reversible", thread: "No. Threads dissolve naturally but not removable", filler: "Yes. Fully dissolvable with hyaluronidase", surgery: "No. Revision surgery possible but complex" },
    { factor: "Vascular risk", thread: "Extremely low. No risk of blindness", filler: "Low to moderate. Vascular occlusion possible", surgery: "Surgical risks apply" },
    { factor: "Downtime", thread: "2 to 5 days mild swelling and redness", filler: "1 to 3 days mild swelling", surgery: "2 to 4 weeks. Significant bruising and swelling" },
    { factor: "Anaesthesia", thread: "Local anaesthetic at tip entry point", filler: "Topical numbing cream", surgery: "General or twilight anaesthesia" },
    { factor: "Cost in KL (2026)", thread: "RM 2,000 – RM 4,500", filler: "RM 1,200 – RM 2,500", surgery: "RM 15,000 – RM 35,000+" },
    { factor: "Can be combined", thread: "Yes. Frequently combined with nose filler", filler: "Yes. Often combined with thread lift", surgery: "Not easily combined with non-surgical options" },
  ];

  const pricingTiers = [
    { treatment: "Nose bridge thread lift", price: "RM 2,500" },
    { treatment: "Nose tip refinement", price: "RM 1,400" },
    { treatment: "Combined nose bridge and tip", price: "RM 2,500 – RM 3,500" },
  ];

  const faqData = [
    { q: "How long does a nose thread lift last in Malaysia?", a: "PDO nose threads last 12 to 18 months. PLLA threads last 18 to 24 months. PCL threads last 24 to 36 months. The collagen produced during the thread dissolving process extends the visible result beyond the thread lifespan in most patients. Many PCL patients report maintained definition two to three years after their treatment." },
    { q: "How much does a nose thread lift cost in Malaysia in 2026?", a: "Nose thread lift treatments at Nexus Clinic KL typically range from RM 1,400 to RM 2,500 depending on whether the treatment involves tip refinement or bridge enhancement. Combined nose bridge and tip treatments usually range from RM 2,500 to RM 3,500 based on the number of threads used and the level of correction required. Final pricing is confirmed during consultation." },
    { q: "Is a nose thread lift painful?", a: "The most noticeable discomfort is the local anaesthetic injection at the nasal tip entry point, which resolves within seconds. Once the area is numb, the thread insertion using a blunt cannula is generally described as mild pressure rather than pain. Most patients rate the overall experience as very manageable. The full procedure takes 15 to 20 minutes." },
    { q: "What is the difference between nose thread lift and nose filler?", a: "Nose thread lift inserts dissolvable threads that lift and reposition tissue structurally. It is best for bridge height, tip definition and improving the side profile. Nose filler adds volume using hyaluronic acid gel to raise the bridge or smooth a dorsal hump. Filler carries a slightly higher vascular risk in the nasal area. Threads carry no vascular risk. Many patients achieve the best result by combining both at Nexus Clinic KL." },
    { q: "How many sessions of nose thread lift are needed?", a: "Most patients achieve their desired result in a single session. Some patients choose to return for a second session 12 to 18 months later when PDO threads begin to dissolve, either to maintain the result or to upgrade to PCL threads for a longer-lasting outcome. Patients who start with PDO often progress to PCL at the second session once they are satisfied with how the treatment looks and feels." },
    { q: "Can a nose thread lift fix a crooked nose?", a: "Mild nasal asymmetry or crookedness can often be improved with strategic thread placement. The doctor assesses the degree and structural origin of the asymmetry at consultation. Mild deviation caused by tissue asymmetry rather than cartilage or bone displacement responds better to thread correction. Significant structural asymmetry, particularly bone-related crookedness, typically requires surgical assessment." },
    { q: "Is a nose thread lift safe in Malaysia?", a: "Nose thread lift is significantly safer than nose filler in terms of vascular risk. There is no blood supply involvement during thread insertion as a blunt cannula is used rather than a sharp needle. The thread materials, PDO, PLLA and PCL, have been used in surgical sutures for decades. At Nexus Clinic KL, only MDA-registered White Medience threads from a Korean GMP-certified manufacturer are used." },
    { q: "Can a nose thread lift be reversed?", a: "No. Unlike HA filler which is fully dissolvable, nose threads cannot be removed once placed. However, they dissolve naturally over time, so any result you do not like will resolve on its own. This is why the doctor assesses candidacy carefully and first-time patients are often recommended to start with PDO threads, which dissolve within 12 to 18 months." },
    { q: "What results can realistically be expected from nose thread lift?", a: "A nose thread lift produces visible bridge elevation, improved tip definition and a cleaner side profile. The degree of change is proportional to the starting anatomy and thread count used. It does not produce the same dramatic projection as surgical rhinoplasty and is not intended to. The goal is natural, harmonious improvement within the existing structure of your nose." },
    { q: "Who is not suitable for a nose thread lift?", a: "Nose thread lift is not recommended for patients who are pregnant or breastfeeding, have an active skin infection near the nose, have very thin nasal skin that increases extrusion risk, have had recent rhinoplasty, or have significant structural nasal deformity requiring surgical correction. Patients with keloid scarring tendencies should discuss this with the doctor at consultation." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge="Non-Surgical Nose Enhancement"
        title="Instant Nose Thread Lift in Malaysia for a"
        highlight="Higher Bridge, Sharper Tip and Better Profile"
        description="Your nose sits in the exact centre of your face. Everything else radiates outward from it. A flat bridge makes the face look broader. A drooping tip takes years off the profile."
        details="Nose thread lift at Nexus Clinic Kuala Lumpur is the non-surgical solution built specifically for Asian nasal anatomy. Using the Korean HIKO technique with MDA-registered White Medience PDO and PCL threads, our doctors reshape the nose bridge and tip in a single 20 to 30-minute session. No surgery, no general anaesthesia, no incisions, no weeks of recovery."
        note="The result is visible immediately. The structural support improves further over the following six to eight weeks as the body's collagen response builds around the threads."
        image="/images/face/Nose Thread Lift.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Nose Thread Lift Treatment"
        ctaText="Book Free Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in nose thread lift at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Instant Results"
        floatingSubtitle="No surgery • 20-30 minutes"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Trust Section - Separated */}
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
                    <p className="font-inter font-semibold text-brown text-sm">MDA-Registered Threads</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">White Medience Korea | GMP & ISO certified</p>
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
                  <span className="font-inter text-xs text-taupe">Korean HIKO technique</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Nose Thread Lift Treatment Overview</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know at a glance</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Scissors, label: "Treatment", value: "HIKO Korean nose thread lift using PDO or PCL dissolvable threads" },
              { icon: Clock, label: "Session Time", value: "20 to 30 minutes" },
              { icon: Heart, label: "Downtime", value: "Minimal. 2 to 5 days" },
              { icon: Zap, label: "Results", value: "Immediate, collagen at 6-8 weeks" },
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
                <p className="font-georgia text-brown font-semibold">PDO: 12-18 months<br />PCL: 24-36 months</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Threads Used</p>
                <p className="font-georgia text-brown font-semibold">4 to 10 threads per session</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Reversible</p>
                <p className="font-georgia text-brown font-semibold">Not reversible but threads dissolve naturally</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown font-semibold">Local anaesthetic at nasal tip entry point</p>
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

      {/* Asian Nose Anatomy Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Asian Nose Anatomy and Why <span className="text-wine">So Many Malaysians Seek Nose Enhancement</span>
              </h2>
              <p className="text-brown font-inter">
                Among East and Southeast Asian populations, including the majority of patients in Malaysia, 
                the nasal structure is genetically different from the proportions that Western cosmetic standards were originally built around.
              </p>
              <p className="text-brown font-inter">
                The Asian nose typically has a lower, flatter nasal bridge with less bony projection. 
                The nasal tip is often broader and less defined, with thicker skin covering the cartilage below. 
                The columella, the strip of tissue between the nostrils, tends to sit lower.
              </p>
              <p className="text-brown font-inter">
                Nose thread lift was developed in Korea specifically to address this anatomical pattern. 
                The HIKO technique, named from the Korean words meaning high nose, was designed around Asian nasal proportions 
                and relies on thread placement that provides vertical structural support from within the nasal bridge.
              </p>
              <div className="bg-cream p-4 rounded-xl border-l-4 border-wine">
                <p className="text-brown font-inter text-sm">
                  Enhancing the bridge height and tip projection creates proportion and definition without changing the person's fundamental appearance.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/nose-thread-filler.jpeg"
                  alt="Asian nose anatomy for thread lift"
                  fill
                  className="object-cover"
                />
              </div>
              <Link href="/contact-us/" className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                 Free Nose Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">How Nose Thread Lift Works</h2>
            <p className="text-taupe font-inter">The Mechanics and the Collagen Timeline</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-2xl text-brown mb-4">Phase 1 | Immediate Mechanical Lift</h3>
              <p className="text-taupe font-inter mb-4">
                When threads are inserted along the nasal bridge or into the nasal tip using a blunt cannula, 
                they create a physical scaffold beneath the skin. The threads are anchored at the nasal tip and run upward along the bridge, 
                pulling tissue slightly tighter and lifting the structure above them.
              </p>
              <p className="text-taupe font-inter">
                The nose is visibly higher and more defined from the moment the procedure is complete. 
                This effect is structural, not volumetric. The threads do not add bulk. They reposition and support existing tissue.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-2xl text-brown mb-4">Phase 2 | Collagen Stimulation Over Time</h3>
              <p className="text-taupe font-inter mb-4">
                As the threads begin to dissolve, the body responds to the biocompatible material by producing new collagen around each thread's length. 
                This collagen framework reinforces the structural improvement achieved in phase one.
              </p>
              <p className="text-taupe font-inter">
                By the time the threads have fully dissolved, a natural collagen scaffold has formed in their place. 
                Patients typically notice the best improvement between six and twelve weeks after treatment.
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Book a Consultation 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Thread Types Table Section */}
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
                { key: "type", header: "Thread Type", className: "font-semibold" },
                { key: "material", header: "Material" },
                { key: "longevity", header: "Longevity" },
                { key: "liftStrength", header: "Lift Strength" },
                { key: "bestFor", header: "Best For" },
              ]}
              data={threadTypes.map((thread) => ({
                type: thread.type,
                material: thread.material,
                longevity: thread.longevity,
                liftStrength: thread.liftStrength,
                bestFor: thread.bestFor,
              }))}
              title="PDO, PLLA and PCL Nose Threads"
              subtitle="Choosing the right material for your goals"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-taupe text-sm">
              Nexus Clinic KL uses White Medience threads manufactured in Korea by a GMP and ISO-certified facility. 
              All thread products are registered with Malaysia's Medical Device Authority (MDA).
            </p>
          </motion.div>
        
        </motion.div>
      </section>

      {/* Thread Count Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Thread Count</h2>
            <p className="text-taupe font-inter">How many threads are actually used in a nose thread lift</p>
          </motion.div>
          
          <div className="bg-light p-8 rounded-2xl border border-taupe/10">
            <p className="text-2xl text-wine font-georgia text-center mb-6">4 to 10 threads typically used per session</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Degree of bridge lift required",
                "Skin thickness",
                "Bridge length",
                "Tip work required",
                "Thread type (PCL vs PDO)",
                "Previous treatments",
              ].map((factor, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0" />
                  <span className="text-taupe font-inter text-sm">{factor}</span>
                </div>
              ))}
            </div>
            <p className="text-taupe font-inter text-sm mt-6 text-center italic">
              There is a clinical upper limit on how many threads can be placed safely in a single session. 
              Placing too many threads increases the risk of thread extrusion, irregular texture and skin thinning over time.
            </p>
          </div>
          
        </motion.div>
      </section>

      {/* Comparison Table Section */}
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
              { key: "factor", header: "Factor", className: "font-semibold" },
              { key: "thread", header: "Nose Thread Lift" },
              { key: "filler", header: "Nose Filler (HA)" },
              { key: "surgery", header: "Rhinoplasty (Surgery)" },
            ]}
            data={comparisonData.map((row) => ({
              factor: row.factor,
              thread: row.thread,
              filler: row.filler,
              surgery: row.surgery,
            }))}
            title="Nose Thread Lift Compared to Nose Filler and Rhinoplasty"
            subtitle="Understanding your options"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-8 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-taupe text-sm">
            The most complete non-surgical nose result is often achieved by combining nose thread lift with a small amount of nose filler. The threads provide structural lift and tip definition while filler addresses bridge height and any remaining volume deficit. Your doctor will assess which approach or combination best addresses your nasal profile at consultation, including options for lifting effect.
            Patients exploring nose filler alongside a thread lift can read about<Link  href='/face/nose-filler-malaysia/' className='font-bold text-wine italic'> nose filler in Malaysia </Link> and compare both options in detail at Nexus Clinic KL.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Compare Your Options
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Patients Who Get Best Results Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Patients Who Get the Best Results</h2>
            <p className="text-taupe font-inter">From nose thread lift in Malaysia</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Patients with a flat or low nasal bridge wanting more height and projection",
              "Patients with a drooping nasal tip affecting profile balance",
              "Patients with mild nasal asymmetry or crookedness",
              "Patients who have had nose filler previously and want to extend longevity",
              "Patients in their 20s and 30s seeking non-permanent nose enhancement",
              "Patients wanting Korean-style higher bridge and refined tip",
              "Patients with saddle nose deformity or mild dorsal hump",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-light p-4 rounded-xl border border-taupe/10">
                <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-taupe font-inter text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p>Nose thread lift is not appropriate for patients with significant structural nasal deformity, breathing obstruction, very thin nasal skin that increases thread extrusion risk, or active skin infection in the nasal area. Patients who have had rhinoplasty previously are assessed case by case.
                Patients who want to address their full facial profile alongside the nose often combine nose thread lift with <Link  href='/face/chin-filler-malaysia/' className='font-bold text-wine italic'>chin filler </Link> for a more balanced front and side profile.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Nose Thread Lift Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Facial Profile and Nasal Assessment", desc: "Doctor assesses nose in context of full facial profile. Front, 45-degree oblique and side profile evaluated." },
              { step: "02", title: "Thread Type, Count and Placement Plan", desc: "Doctor confirms thread material, number of threads and exact placement path. Most treatments use 4-8 threads." },
              { step: "03", title: "Local Anaesthesia and Thread Insertion", desc: "Small local anaesthetic at nasal tip entry point. Blunt cannula used for thread insertion. 15-20 minutes." },
              { step: "04", title: "Review and Aftercare Instructions", desc: "Results reviewed immediately. Full aftercare provided. Follow-up at 6-8 weeks to assess collagen response." },
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
              Book Your Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Same-day results at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="container mx-auto max-w-4xl">
            <TableForPages
              columns={[
                { key: "treatment", header: "Treatment" },
                { key: "price", header: "Price Range (2026)" },
              ]}
              data={pricingTiers.map((tier) => ({
                treatment: tier.treatment,
                price: tier.price,
              }))}
              title="Nose Thread Lift Cost in Malaysia"
              subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
              variant="compact"
              fadeInUp={fadeInUp}
            />
            
            {/* Footnote */}
            <motion.p 
              variants={fadeInUp}
              className="text-center text-taupe font-inter text-sm italic mt-4"
            >
              * Final pricing confirmed at consultation. Price depends on thread type, count and correction required.
            </motion.p>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-taupe text-sm">
              According to the <a href='https://www.isaps.org/medical-professionals/isaps-global-statistics/' rel='nofollow' target='_blank' className='text-taupe hover:underline font-bold'>International Society of Aesthetic Plastic Surgery 2024 Global Statistics Report</a>, 
              non-surgical nose procedures including thread lift and nose filler saw a 33% increase in Southeast Asia, 
              with Malaysia among the top three markets by procedure volume in the region.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects & Aftercare Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">What to expect after treatment</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {[
                  "Mild redness and swelling at thread entry points, resolving within 2-5 days",
                  "Slight tenderness along nasal bridge for 2-3 days",
                  "Tiny visible entry point marks at nasal tip, fading within a week",
                  "Mild bruising in some patients, resolving within 5-7 days",
                ].map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Rare Risks
              </h3>
              <ul className="space-y-2">
                {[
                  "Thread extrusion, rare and more likely with too many threads or very thin nasal skin",
                  "Infection at entry point, extremely rare with sterile technique",
                  "Asymmetry if threads not placed evenly, correctable with touch-up",
                  "Dimpling or skin irregularity if threads placed too superficially",
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
                "Avoid pressing, squeezing or massaging the nose for at least 2 weeks",
                "Sleep on your back for the first week to avoid lateral pressure",
                "Avoid glasses that rest on the nose bridge for 2 weeks",
                "Skip intense exercise for the first 48 hours",
                "Avoid steam rooms, saunas and prolonged heat for 48 hours",
                "Do not blow your nose forcefully for the first week",
                "Avoid facial massages and skin treatments near the nose for two weeks",
              ].map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-taupe text-sm">
              Nexus Clinic KL uses White Medience threads certified by Korean GMP and ISO quality standard and 
              registered with Malaysia's Medical Device Authority. All nose thread lift procedures are performed by 
              licensed medical doctors using sterile technique in a clinical environment.
              Patients who combine their nose treatment with cheek or midface enhancement often explore <Link  href='/face/cheek-filler-malaysia/' className='font-bold text-wine italic'>cheek filler </Link> for improved facial balance at Nexus Clinic KL.
            </p>
            <p className="text-taupe text-xs mt-1">[MDA Registration Reference: White Medience Korea. GMP and ISO-certified thread manufacturer]</p>
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
              Book Your Nose Thread Lift in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              A clearer bridge, a more defined tip and a nose that finally balances the rest of your face. 
              No surgery, no general anaesthesia, no weeks of recovery.
            </p>
            <p className="text-cream/90 font-inter">
              One 30-minute appointment at Nexus Clinic KL using MDA-registered Korean threads and technique developed for Asian nasal anatomy.
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
                message="Hi, I'd like to book a free consultation for nose thread lift at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="/face/cheek-filler-malaysia/" className="hover:text-cream transition-colors">Explore Cheek Filler</a>
              <span>•</span>
              <a href="/face/jawline-filler-malaysia/" className="hover:text-cream transition-colors">Explore Jawline Filler</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}