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
  Eye,
  AlertTriangle,
  Droplet,
  Scissors,
  TrendingUp,
  ChevronRight,
  XCircle,
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
interface AcneTreatmentProps {
  locale: string;
}

export default function AcneLandingPage({ locale }: AcneTreatmentProps) {
  const acneTypes = [
    { type: "Comedonal acne (clogged pores)", description: "Looks like tiny bumps, blackheads, and 'texture' that never feels smooth. Often worse with heavy makeup, oily skincare, or humid days." },
    { type: "Inflammatory acne (red, angry acne)", description: "Red, inflamed bumps that can be tender to touch. Often requires medical intervention." },
    { type: "Hormonal acne", description: "Often shows up around the jawline and chin, especially in adults. It can flare around cycles, stress, and sleep changes." },
    { type: "Body acne (back, chest, shoulders)", description: "Sweat, friction, tight clothing, backpacks, and gym habits can all play a role." },
    { type: "Acne with marks (PIH) and early scarring", description: "Even when the acne calms down, you may be left with dark marks. Treating acne early matters, because picking and ongoing inflammation increases the risk of marks and scars." },
  ];

  const treatmentOptions = [
    { category: "At-home acne care (the foundation)", description: "Most prescription and clinic treatments work better when your basic routine is steady.", ingredients: ["Benzoyl peroxide (helps reduce acne bacteria and unclog pores)", "Retinoids (help stop pores from blocking)", "Acid-based options (like salicylic acid for oil and clogged pores)"] },
    { category: "Prescription acne treatment (when skincare is not enough)", description: "Prescription acne medications work by reducing oil, swelling, or bacterial infection, and results can take 4 to 8 weeks for many prescription options.", ingredients: ["Topical treatment plus oral antibiotics for more severe acne", "Hormonal options for women when suitable (not for everyone)", "Isotretinoin for severe or stubborn acne under strict medical monitoring"] },
    { category: "In-clinic treatments (to calm active acne and reduce recurrence)", description: "This is where many KL clinics compete, and where the right plan can make a big difference.", ingredients: ["Chemical peels (helps unclog and reduce congestion)", "Microdermabrasion (selected cases, not for angry inflamed acne)", "Light and laser-based treatments (often used to reduce inflammation and support acne control)"] },
  ];

  const faqData = [
    { q: "What is the fastest way to get rid of pimples overnight?", a: "You usually cannot 'cure' a pimple overnight, but you can make it look calmer by morning. Ice can reduce swelling, and spot treatments like benzoyl peroxide can help in some cases. If the pimple is deep and painful, do not squeeze it. That often leads to longer healing and marks." },
    { q: "Can diet affect pimples?", a: "Diet is not the only cause, but some people notice triggers. High-glycemic foods and dairy may trigger breakouts in some people. If you suspect food triggers, keep it simple: track patterns for 2 to 3 weeks, not just one day." },
    { q: "How long does acne treatment take to work?", a: "Most treatments need time. You may notice improvement in about 6 weeks, and many treatments take 2 to 3 months to start working well. Many prescription treatments take 4 to 8 weeks to show results." },
    { q: "Why is my acne getting worse before it gets better?", a: "Some active ingredients (especially retinoids) can cause a temporary flare early on as clogged pores clear. This does not mean the treatment is failing. It means you may need pacing, moisturiser support, and the right frequency." },
    { q: "What is the best treatment for acne?", a: "The 'best' treatment depends on your acne type. Treatment choices are based on severity, including topical combinations and oral antibiotics for more severe cases. For severe or stubborn acne, isotretinoin may be considered under medical supervision." },
    { q: "Does benzoyl peroxide actually work?", a: "It can, especially for mild to moderate acne when used consistently. Benzoyl peroxide attacks acne bacteria and helps unclog pores, and it works best with regular use." },
    { q: "How do I prevent dark marks after acne?", a: "The biggest prevention is reducing inflammation early and not picking. Marks fade faster when breakouts are controlled and sunscreen habits are consistent." },
    { q: "Can I treat acne and sensitive skin at the same time?", a: "Yes, but you need a gentler plan. Start slow, avoid harsh scrubs, and focus on barrier support while introducing actives gradually." },
    { q: "When should I see a doctor for acne?", a: "If acne is painful, leaving marks, recurring, or affecting confidence, do not wait. Many people worry about recurrence and ineffective home remedies, which is often the sign you need a stronger plan." },
    { q: "Is acne laser treatment worth it?", a: "Laser can help certain acne types, especially when inflammation is a major issue, but it is usually best as part of a wider plan. Many KL competitors promote laser options as part of their acne method menu." },
  ];

  const comparisonData = [
    { factor: "Approach", clinic: "Medical treatment targets the causes, not just the surface", facial: "A facial can help with surface oil and temporary glow but usually does not solve hormonal acne or cystic acne" },
    { factor: "Best for", clinic: "Recurring inflamed acne, hormonal acne, cystic breakouts", facial: "Surface oil, temporary glow, relaxation" },
    { factor: "Results", clinic: "Addresses root causes with structured plan over weeks to months", facial: "Immediate temporary improvement, no long-term prevention" },
    { factor: "Prescription access", clinic: "Yes. Doctor can prescribe medical-grade treatments", facial: "No. Limited to cosmetic products" },
  ];

  const pricingTiers = [
    { treatment: "Acne facial / deep cleansing (DermaClear)", price: "RM 288 – RM 488" },
    { treatment: "Chemical peel (salicylic / glycolic / etc.)", price: "RM 450" },
    { treatment: "Advanced acne laser treatments", price: "RM 1200 – RM 1500" },
    { treatment: "Combined acne treatment plans", price: "RM 1500 – RM 3000+" },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Doctor-Led Acne Treatment • MOH Registered Clinic"
        title="Best Acne Treatment in Malaysia for"
        highlight="Clearer, Bright Skin"
        description="Tired of breakouts that won't clear? At Nexus Clinic KL, licensed aesthetic doctors treat acne at the root — from cystic nodules to hormonal flare-ups — using clinically proven procedures."
        details="Acne is not just 'dirty pores'. It is stress, hormones, heat, habits, and the wrong routine all mixing together. At Nexus Clinic KL, your plan starts with a doctor-led assessment, then we build a treatment path that fits your acne type, your skin tone, and your lifestyle."
        note="Over 5,000 Skin Treatment Procedures Completed — Every acne treatment plan begins with a proper clinical skin assessment by a licensed aesthetic doctor using MOH-approved procedures."
        image="/images/skin/acne-treatment.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Acne Treatment"
        ctaText="Book Free Skin Assessment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in acne treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="🩺 Doctor-Led Care"
        floatingSubtitle="Assessment first, not a sales pitch"
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-wine" />
                </div>
                <h2 className="font-georgia text-2xl md:text-3xl text-brown">Trust at a glance</h2>
              </div>
              <div className="hidden sm:block w-px h-8 bg-taupe/20" />
              <p className="text-taupe font-inter text-sm">Nexus Clinic Kuala Lumpur — Excellence in Medical Aesthetics</p>
            </div>

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

            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">MOH Registered & Compliant</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Doctor-led care with full clinical protocols</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Licensed Aesthetic Doctors</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Assessment first, not a sales pitch</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Structured Treatment Plans</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Clear phases: calm acne, fade marks, maintain</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">5,000+ skin treatment procedures completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Serving patients from KL, PJ, Bangsar, KLCC, Ampang, Mont Kiara</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Acne Treatment at Nexus Clinic KL — At a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatment", value: "Medical acne treatment (prescription, procedures, or combined protocol)" },
              { icon: Clock, label: "Session Time", value: "30 to 60 minutes per visit depending on treatment type" },
              { icon: Heart, label: "Downtime", value: "Minimal to none for most procedures; 2 to 5 days for deeper peels" },
              { icon: Zap, label: "Results", value: "Reduction in breakouts from 2 to 4 weeks; texture improvement from 4 to 8 weeks" },
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
                <p className="font-inter text-sm text-taupe">Treatment Course</p>
                <p className="font-georgia text-brown font-semibold">Typically 4 to 6 sessions spaced 2 to 4 weeks apart</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown font-semibold">Topical numbing cream for laser procedures if required</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Mild to severe acne, hormonal acne, adult acne, cystic breakouts, and oily skin types</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Acne | Free Skin Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Six Malaysian Skin Stressors Section */}
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
                { key: "stressor", header: "Malaysian Skin Stressor", className: "font-semibold text-brown" },
                { key: "trigger", header: "How It Triggers Acne" },
                { key: "response", header: "Treatment Response at Nexus Clinic KL" },
              ]}
              data={[
                {
                  stressor: "Year-round heat (28 to 34 degrees C)",
                  trigger: "Increases in sebum output and skin temperature accelerate bacterial growth",
                  response: "Sebum-regulating protocols including peels and laser to control oil production",
                },
                {
                  stressor: "High ambient humidity (70 to 90%)",
                  trigger: "Creates an environment for Cutibacterium acnes proliferation and clogged pores",
                  response: "Blue light therapy targets bacteria directly at the follicle level",
                },
                {
                  stressor: "Daily indoor air-conditioning cycling",
                  trigger: "Rapid temperature changes disrupt skin barrier and dehydrate the stratum corneum",
                  response: "Skin barrier repair included in treatment protocol with medical-grade moisturisers",
                },
                {
                  stressor: "Urban pollution (KL city centre)",
                  trigger: "Particulate matter oxidises sebum, triggering inflammatory acne and PIH",
                  response: "Antioxidant topicals and pico laser to address inflammation and pigmentation",
                },
                {
                  stressor: "Dietary habits (high GI, spice, dairy)",
                  trigger: "Insulin spikes stimulate androgen-related sebum overproduction",
                  response: "Dietary guidance built into consultation; hormonal acne protocol where indicated",
                },
                {
                  stressor: "Work stress and sleep disruption",
                  trigger: "Cortisol elevation stimulates sebaceous gland activity",
                  response: "Holistic assessment includes lifestyle factors; combined treatment protocols",
                },
              ]}
              title="Six Malaysian Skin Stressors That Make Acne Harder to Treat in KL"
              subtitle="Acne in Malaysia does not behave the same way as acne in London or New York"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              A 2022 study published in the Medical Journal of Malaysia found an overall acne prevalence of 75.8% among students aged 16 to 25 in Malaysia, with the highest rates in the 16 to 18 age group.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Types of Acne Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Not All Acne Is the Same — Your Acne Type Determines Your Treatment</h2>
            <p className="text-taupe font-inter">The biggest reason patients in KL spend years trying products that do not work is that they are treating the wrong type of acne</p>
          </motion.div>
          
          <div className="space-y-4">
            {acneTypes.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
                <h3 className="font-georgia text-xl text-brown mb-2">{item.type}</h3>
                <p className="text-taupe font-inter">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Let Our Doctors Identify Your Acne Type and Build Your Plan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Acne Treatment Decision Matrix */}
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
            { key: "concern", header: "Your Concern", className: "font-semibold text-brown" },
            { key: "treatment", header: "Recommended Treatment" },
            { key: "sessions", header: "Sessions Needed" },
            { key: "result", header: "Expected Result" },
          ]}
          data={[
            {
              concern: "Active papules and pustules",
              treatment: "Blue light therapy + topical prescription",
              sessions: "4 to 6 sessions",
              result: "50 to 70% reduction in active acne spots",
            },
            {
              concern: "Cystic, nodular acne",
              treatment: "Corticosteroid injection + oral medication",
              sessions: "1 to 3 per active cycle",
              result: "Rapid deflation within 24 to 48 hours",
            },
            {
              concern: "Oily skin with blackheads",
              treatment: "Salicylic acid chemical peel",
              sessions: "4 to 6 sessions",
              result: "Tighter pores, clearer surface",
            },
            {
              concern: "Hormonal chin and jaw acne",
              treatment: "Combined protocol: prescription + laser therapy",
              sessions: "6 to 8 sessions",
              result: "Cycle-linked breakouts reduced",
            },
            {
              concern: "Post-acne dark marks (PIH)",
              treatment: "Pico laser + brightening topicals",
              sessions: "3 to 5 sessions",
              result: "Significant fading of hyperpigmentation",
            },
            {
              concern: "Active acne plus early scarring",
              treatment: "Laser + peel combination",
              sessions: "6 to 10 sessions",
              result: "Active acne cleared; texture improved",
            },
          ]}
          title="Acne Treatment Decision Matrix — Matching Your Concern to the Right Procedure"
          subtitle="Use this as a general guide, though your doctor will always make the final recommendation during your consultation"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-12 px-4"
        />
        </motion.div>
      </section>

      {/* Products and Technologies Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Products and Technologies Used for Acne Treatment at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Every product and device is MOH-approved and selected for its clinical evidence base in treating acne on Southeast Asian skin types</p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              { name: "Pico Laser (PicoSure and PicoWay)", desc: "Delivers energy in ultra-short picosecond pulses that shatter bacteria and melanin deposits without sustained heat that causes thermal damage in darker skin tones. Used to address both active inflammatory acne and post-acne pigmentation (PIH). For Malaysian patients with Fitzpatrick III to V skin, pico laser carries a significantly lower risk of triggering new hyperpigmentation." },
              { name: "Blue Light Photodynamic Therapy", desc: "Blue light at 415 nanometres selectively destroys Cutibacterium acnes by activating porphyrins naturally produced by the bacteria. Especially well-suited for patients with mild to moderate papular or pustular acne who prefer a non-invasive, drug-free option. Most sessions take 20 to 30 minutes with no downtime." },
              { name: "Salicylic Acid Chemical Peel (20 to 30 Percent)", desc: "Beta-hydroxy acid with lipophilic structure that penetrates hair follicles directly. Exfoliates follicle lining, unclogs pores, reduces surface bacteria and regulates sebum production. Series of 4 to 6 sessions spaced 3 to 4 weeks apart is standard. Mild flaking for 2 to 3 days post-peel is normal." },
              { name: "Corticosteroid (Triamcinolone Acetonide) Injection", desc: "Micro-dose of diluted triamcinolone acetonide injected directly into painful cystic or nodular lesions. Suppresses localised inflammatory response and visibly deflates cyst within 24 to 48 hours. Performed using fine-gauge sterile needle combined with ongoing treatment protocol." },
              { name: "Prescription Topicals (Retinoids, Benzoyl Peroxide, Azelaic Acid)", desc: "Retinoids normalise cell turnover and prevent comedone formation. Benzoyl peroxide reduces bacterial resistance. Azelaic acid addresses both bacterial activity and post-inflammatory hyperpigmentation. Dispensed as part of structured home care protocol developed by your doctor." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
                <h3 className="font-georgia text-xl text-brown mb-3">{item.name}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What to Expect During Treatment Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What to Expect During Your Acne Treatment Visit at Nexus Clinic KL</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Clinical Skin Assessment", desc: "Full skin consultation with licensed aesthetic doctor. Examines acne type, severity, distribution pattern, hormonal history, medication use, dietary triggers, and Fitzpatrick skin type." },
              { step: "02", title: "Personalised Treatment Protocol", desc: "Doctor presents structured treatment protocol including recommended procedures, number of sessions, interval spacing, prescription home care products, and expected results timeline." },
              { step: "03", title: "Preparation", desc: "Treatment area thoroughly cleansed. Topical anaesthetic applied where required. For peel treatments, skin degreased to ensure even penetration." },
              { step: "04", title: "Treatment Delivery", desc: "Procedure performed by doctor or under direct clinical supervision. Session duration 20 to 60 minutes depending on treatment. Blue light and peels are comfortable; laser produces mild warming sensation." },
              { step: "05", title: "Post-Treatment Care", desc: "Soothing products applied. Doctor provides specific aftercare instructions for 48 to 72 hours post-session including sun protection guidance and product avoidance rules." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-6 rounded-xl">
                <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2">{item.title}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
          <TableForPages
            columns={[
              { key: "treatment", header: "Treatment", className: "font-semibold text-brown" },
              { key: "price", header: "Price Per Session (2026)", className: "font-semibold text-wine" },
            ]}
            data={pricingTiers.map(tier => ({
              treatment: tier.treatment,
              price: tier.price,
            }))}
            title="Acne Treatment Cost in Malaysia — 2026 Pricing Guide"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />

          {/* Footnote */}
          <motion.div variants={fadeInUp} className="text-center mt-4">
            <p className="text-taupe font-inter text-sm italic">
              Most acne treatments require multiple sessions depending on severity. Package pricing available for full treatment courses (typically 6 to 8 sessions). Prescription medications charged separately at dispensing cost. Consultation fees waived or incorporated once treatment plan agreed.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get a Clear Cost Estimate for Your Acne Treatment | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects and Aftercare Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects, Aftercare and What to Avoid After Acne Treatment</h2>
            <p className="text-taupe font-inter">Understanding post-treatment expectations helps patients stay on course</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                By Treatment Type
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span><span className="font-semibold">Blue light therapy:</span> Slight redness for a few hours. No special aftercare beyond daily SPF.</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span><span className="font-semibold">Salicylic acid peel:</span> Mild flaking or peeling days 2 to 5. No physical exfoliation, scrubs or active serums during peeling phase.</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span><span className="font-semibold">Pico laser:</span> Redness and mild warmth for 2 to 4 hours. Strict sun protection for 7 to 14 days post-laser.</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span><span className="font-semibold">Corticosteroid injections:</span> Small flat indentation may form, resolves within 1 to 3 weeks.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-wine" />
                General Aftercare Instructions
              </h3>
              <ul className="space-y-2">
                {[
                  "Avoid touching the face unnecessarily",
                  "Avoid heavy sweating for 24 to 48 hours post-treatment",
                  "Avoid applying unadvised skincare products",
                  "Gentle cleanser, moisturiser, and SPF50 only during peel peeling phase",
                  "Failure to apply SPF50 after laser is the most common reason PIH worsens",
                ].map((instruction, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-taupe font-inter text-sm text-center">
              Clinical guidelines developed by the South-East Asia Study Alliance (SASA) concluded that local variables including tropical climate, skin phototype and patterns of antibiotic resistance require an adapted clinical approach that differs from Western acne management protocols.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
            <TableForPages
              columns={[
                { key: "factor", header: "Factor", className: "font-semibold text-brown" },
                { key: "clinic", header: "Acne Clinic (Medical)" },
                { key: "facial", header: "Beauty Facial" },
              ]}
              data={comparisonData.map(row => ({
                factor: row.factor,
                clinic: row.clinic,
                facial: row.facial,
              }))}
              title="Acne Clinic vs Beauty Facial — What's the Difference?"
              subtitle=""
              variant="default"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
        </motion.div>
      </section>

      {/* Simple Clearer Skin Plan */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-2xl shadow-xl">
            <h2 className="font-georgia text-3xl text-brown text-center mb-6">A Simple "Clearer Skin" Plan You Can Imagine</h2>
            <p className="text-center text-taupe font-inter mb-8">Here is a realistic flow we often use</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl shrink-0">1</div>
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-2">Step 1: Calm the active acne</h3>
                  <p className="text-taupe font-inter">Reduce inflammation, stop new breakouts, simplify routine.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl shrink-0">2</div>
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-2">Step 2: Fade marks and protect the barrier</h3>
                  <p className="text-taupe font-inter">Once active acne slows down, we address PIH and uneven tone while keeping skin strong.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl shrink-0">3</div>
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-2">Step 3: Maintain</h3>
                  <p className="text-taupe font-inter">You do not need heavy products forever. You need the right habits and a maintenance routine you can repeat.</p>
                </div>
              </div>
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
              Book Your Free Acne Skin Assessment at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Expert Doctors, No Hard Sell. One consultation is all it takes to know exactly what your skin needs, what treatment path makes sense, and what the expected timeline looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Skin Assessment Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for acne treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Explore Acne Scar Treatment</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Pigmentation Treatment</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Skin Booster Treatment</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}