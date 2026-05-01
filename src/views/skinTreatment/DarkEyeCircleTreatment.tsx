"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
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
  Sun,
  TrendingUp,
  DollarSign,
  Layers,
  Stethoscope,
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
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import Image from "next/image";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
interface DarkEyeCircleProps {
  locale: string;
}

export default function DarkEyeCircleLanding({ locale }: DarkEyeCircleProps) {
  const darkCircleTypes = [
    { type: "Pigmented (Brown)", appearance: "Tan, brown or dark brown patches; uniform colour; similar tone on both sides", test: "Gently stretch the under-eye skin sideways. If colour stays dark or becomes more visible, it is pigmented.", cause: "Excess melanin from UV, allergies, chronic eye rubbing, genetic predisposition", treatment: "Pico Laser (1064nm toning) + medical-grade topicals with kojic acid and niacinamide" },
    { type: "Vascular (Blue or Purple)", appearance: "Blue, purple or reddish-pink hue; more visible when tired, dehydrated or after allergies", test: "Gently press the under-eye area. If colour temporarily lightens or blanches, it is vascular.", cause: "Visible blood vessels through thin skin; allergic rhinitis; poor circulation; sleep deprivation", treatment: "Sylfirm X (vascular RF coagulation) + Rejuran I to thicken dermis" },
    { type: "Structural (Shadow/Hollow)", appearance: "Grey or dark shadow that worsens in direct overhead lighting; looks like a physical indent", test: "Look in mirror at eye level. Tilt head back. If shadow reduces when head tilts back, it is structural.", cause: "Volume loss in tear trough; fat pad descent; deep orbital rim anatomy", treatment: "Tear Trough Filler (hyaluronic acid) for immediate shadow correction" },
    { type: "Mixed (Pigmented and Structural)", appearance: "Brown discolouration combined with visible depressions; does not resolve with filler or laser alone", test: "Both tests above show positive findings", cause: "Simultaneous pigmentation and volume loss; most common in patients over 35", treatment: "Tear Trough Filler first, then Pico Laser or Rejuran I for pigmentation" },
    { type: "Allergic Shiners", appearance: "Bluish-brown or purplish bilateral circles; often with nasal congestion or puffiness", test: "Worsens with allergic flares, hay fever season, or sinus congestion episodes", cause: "Chronic allergic rhinitis causing venous congestion; histamine-driven inflammation", treatment: "Address allergy management first; Sylfirm X + Rejuran I for tissue strengthening" },
  ];

  const combinationProtocols = [
    { type: "Pigmented", phase1: "Pico Laser 1064nm toning (3 to 4 sessions monthly)", phase2: "Medical-grade brightening topicals; SPF50 eye area protection", maintenance: "Quarterly Pico Laser toning session; daily SPF50; brightening topicals ongoing" },
    { type: "Vascular", phase1: "Sylfirm X (Pulsed Wave RF to coagulate vessels, 2 to 3 sessions)", phase2: "Rejuran I (2 sessions to thicken periorbital dermis)", maintenance: "Rejuran I every 6 months; Sylfirm X booster session annually" },
    { type: "Structural", phase1: "Tear Trough Filler (1 syringe HA, immediate volume correction)", phase2: "Rejuran I at 4 to 6 weeks post-filler to improve skin quality", maintenance: "Filler top-up at 12 to 18 months; Rejuran I every 6 months" },
    { type: "Mixed", phase1: "Tear Trough Filler first (structural correction precedes laser)", phase2: "Pico Laser toning (3 sessions) at 4 to 8 weeks post-filler", maintenance: "Filler top-up at 12 to 18 months; Pico toning quarterly; Rejuran I every 6 months" },
    { type: "Allergic Shiners", phase1: "Allergy review; Sylfirm X for vascular component (2 sessions)", phase2: "Rejuran I to strengthen periorbital skin", maintenance: "Sylfirm X annually; allergy management ongoing; Rejuran I every 6 months" },
  ];

  const pricingTiers = [
    { treatment: "Tear Trough Filler (Hyaluronic Acid)", bestFor: "Structural and mixed dark circles; sunken tear trough hollowness", sessions: "1 session", price: "RM 1,300 to RM 2,200 per syringe (lasts 9 to 18 months)" },
    { treatment: "Pico Laser (Under-Eye Toning)", bestFor: "Pigmented dark circles; periorbital hyperpigmentation", sessions: "3 to 5 sessions", price: "RM 700 to RM 1,100 per session" },
    { treatment: "Rejuran I (Polynucleotide Eye)", bestFor: "Vascular circles; thin skin; crepey texture; fine lines", sessions: "2 to 3 sessions", price: "RM 800 to RM 1,300 per session" },
    { treatment: "Sylfirm X RF (Under-Eye Vascular)", bestFor: "Vascular and allergic shiner dark circles; vessel coagulation", sessions: "2 to 3 sessions", price: "RM 1,000 to RM 1,600 per session" },
    { treatment: "Skin Booster (HA or Polynucleotide)", bestFor: "Hydration support; post-filler or post-laser skin quality", sessions: "2 to 3 sessions", price: "RM 800 to RM 1,400 per session" },
    { treatment: "Combination Dark Circle Programme", bestFor: "Mixed or complex dark circles (2 or more modalities)", sessions: "3 to 6 total professional treatments", price: "From RM 2,500 (package pricing available)" },
  ];

  const faqData = [
    { q: "Why do I have dark circles even when I sleep well?", a: "Adequate sleep is only one of the common causes of dark circles under the eyes. The other four are structural volume loss creating a shadow, genetic or UV-driven pigmentation, blood vessel visibility through thinning skin and allergic rhinitis causing venous congestion around the sinuses. Patients with structural, pigmented, vascular or allergy-driven dark circles will not see significant improvement from sleep alone regardless of how many hours they rest. The persistence of dark circles despite good sleep and adequate hydration is the primary indicator that a clinical assessment is warranted to identify the actual cause before any treatment is selected." },
    { q: "What is the most effective treatment for dark circles in Malaysia?", a: "There is no single most effective treatment because the correct treatment depends entirely on the type of dark circle. Tear trough filler is the most effective treatment for structural hollowing-related shadows, producing immediate improvement visible from the day of injection. Pico Laser is most effective for pigmented periorbital hyperpigmentation. Sylfirm X and Rejuran I are most effective for vascular circles. The most common presentation in Malaysian patients over 30 is mixed, involving both structural and pigmented components, requiring a sequenced combination of filler followed by laser or Rejuran I for optimal outcome." },
    { q: "Is tear trough filler safe?", a: "Tear trough filler is safe when performed by an experienced doctor using appropriate technique and correct product selection. The under-eye area is the highest-risk filler zone on the face because of its thin skin and proximity to the orbital septum and infraorbital vessels. At Nexus Clinic KL, tear trough filler is performed exclusively by licensed aesthetic doctors, using a cannula technique in most cases to reduce bruising and vascular risk, with low-viscosity hyaluronic acid products specifically formulated for this zone. Hyaluronidase enzyme is available to dissolve filler immediately if any complication arises." },
    { q: "How long does tear trough filler last?", a: "Tear trough filler placed in the deep periosteal plane typically lasts 12 to 18 months in most patients. Results duration varies based on the patient's metabolic rate, the specific product used and the volume placed. Some patients retain visible results for up to 24 months. When the filler gradually resorbs, the hollow shadow slowly returns over weeks to months rather than disappearing suddenly. Top-up treatments at 12 to 18 months maintain continuous improvement. At Nexus Clinic KL, the product and volume selected produce natural results that age gracefully rather than creating an overfilled appearance." },
    { q: "Can dark eye circles be permanently removed?", a: "Permanent removal depends on the type of dark circle. Structural circles caused by volume loss return as ageing continues, as the tear trough deepens progressively over years even with regular filler maintenance. Pigmented circles can be cleared significantly with Pico Laser and maintained with SPF50 use and quarterly toning sessions, but may recur with UV exposure or hormonal changes. Vascular circles can be reduced with Sylfirm X and dermal thickening with Rejuran I but may require periodic maintenance as periorbital skin continues to thin with age. Allergy-driven circles will persist as long as underlying allergic rhinitis is active." },
    { q: "What is Rejuran I and how is it different from regular skin booster?", a: "Rejuran I is a polynucleotide formulation specifically engineered for the periorbital zone. Unlike hyaluronic acid skin boosters which provide hydration and volumisation, Rejuran I's PDRN molecules activate fibroblasts to produce new collagen and elastin, physically thickening the under-eye dermis over weeks. This biological thickening effect reduces visibility of underlying blood vessels, making it particularly effective for vascular dark circles. Rejuran I also improves the texture of crepey fine-lined under-eye skin that regular HA skin boosters do not address at the structural level." },
    { q: "Is dark circle treatment suitable for men?", a: "Yes. Dark circles affect men and women equally, and treatment approaches are identical across genders. Male patients at Nexus Clinic KL commonly seek dark circle treatment for professional appearance concerns, with many citing that persistent dark circles make them appear chronically fatigued to colleagues and clients. The diagnostic framework applies equally: structural circles in men respond to tear trough filler, pigmented circles respond to Pico Laser and vascular circles respond to Sylfirm X and Rejuran I. Male patients often respond particularly well to Rejuran I as results are natural-looking rather than obviously treated." },
    { q: "Can I combine dark circle treatment with other facial treatments?", a: "Yes. Dark circle treatment at Nexus Clinic KL is frequently combined with other facial treatments as part of a broader facial rejuvenation plan. Tear trough filler is often performed alongside cheek filler or chin filler, as mid-face volume restoration reduces the apparent depth of the tear trough and may reduce the amount of under-eye filler required. Pico Laser for periorbital pigmentation is commonly performed in the same session as full-face Pico toning for general skin brightening. Rejuran I for the under-eye area can be performed alongside a full-face Rejuran Healer treatment." },
    { q: "How do I know if my dark circles are from allergies?", a: "The key indicators of allergy-driven dark circles include bilateral, symmetrical presentation in the blue-purple tone range, fluctuation in severity that correlates with known allergy triggers such as dust, pollen or pet dander, association with nasal congestion or chronic runny nose, a history of diagnosed allergic rhinitis or hay fever, worsening in the morning compared to the evening, and partial or temporary improvement with antihistamine medication. If you have been using antihistamines and noticed your dark circles lighten, this is a strong indicator of an allergic vascular component." },
    { q: "Is the dark eye circle consultation at Nexus Clinic KL free?", a: "Yes. Your initial dark eye circle consultation at Nexus Clinic KL is complimentary and includes clinical assessment of your dark circle type using the stretch, press and head-tilt tests, confirmation of whether the presentation is pigmented, vascular, structural, allergic or mixed, a recommended combination protocol based on your specific type and anatomy, full transparent pricing before any procedure is booked, and realistic outcome expectations for your specific presentation. If your dark circles are not suitable for a particular treatment due to anatomical or clinical reasons, our doctors will tell you clearly and recommend the appropriate alternative." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-dark-eye-treatment1.webp",
      after: "/images/B&A-skin/B&A-dark-eye-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-dark-eye-treatment2.webp",
      after: "/images/B&A-skin/B&A-dark-eye-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-dark-eye-treatment3.webp",
      after: "/images/B&A-skin/B&A-dark-eye-treatment3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Doctor-Assessed • Cause-First Approach"
        title="Dark Eye Circle Treatment in Malaysia for"
        highlight="Naturally Brighter, Rested-Looking Eyes"
        description="Eight hours of sleep. Two litres of water. A comprehensive eye cream routine. And the dark circles under the eyes are still there when you look in the mirror."
        details="At Nexus Clinic KL, our licensed aesthetic doctors assess the type of dark circle before recommending any treatment. The assessment determines whether your circles are pigmented, vascular, structural, allergic or a combination, and the treatment protocol is built from that diagnosis rather than from a menu."
        note="The under-eye area is the most delicate and highest-risk injection zone on the face. Clinical precision here matters more than anywhere else. All treatments are doctor-performed at Nexus Clinic KL."
        image="/images/skin/dark-eye-circle-treatment.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Dark Eye Circle Treatment"
        ctaText="Free Assessment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in dark eye circle treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Type-Assessed Treatment"
        floatingSubtitle="Over 5,000 procedures completed"
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
              <p className="text-taupe font-inter text-sm">Nexus Clinic Kuala Lumpur — Excellence in Aesthetic Medicine</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-y border-taupe/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Experience</p>
                  <p className="font-georgia text-brown font-bold text-lg">Over 15 Years</p>
                  <p className="font-inter text-taupe text-xs">Combined clinical experience</p>
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
                    <p className="font-inter font-semibold text-brown text-sm">MOH Approved</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">All products and devices MOH-approved</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Only Treatment</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">LCP-certified doctors perform every procedure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in periorbital treatments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Tear Trough Filler (Cannula Technique)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Pico Laser + Rejuran I + Sylfirm X</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Hyaluronidase On Hand for Safety</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Dark Eye Circle Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Cause-first approach for all dark circle types</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Eye, label: "Treatments Available", value: "Tear Trough Filler, Pico Laser, Rejuran I, Sylfirm X" },
              { icon: Clock, label: "Session Time", value: "20 to 45 minutes depending on modality" },
              { icon: Heart, label: "Downtime", value: "Zero to 48 hours mild swelling" },
              { icon: Activity, label: "Results", value: "Immediate (filler) to progressive (laser)" },
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
                <p className="font-inter text-sm text-taupe">Sessions Required</p>
                <p className="font-georgia text-brown font-semibold">Filler: 1 session; Laser: 3 to 5; Rejuran I: 2 to 3</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown font-semibold">All skin types; men and women</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown">Topical numbing cream; no general anaesthesia</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">MOH Approved</p>
                <p className="font-georgia text-brown">Yes. All products and devices MOH-approved</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Dark Circles | Free Under-Eye Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Dark Circle Type-to-Treatment Decision Matrix Table */}
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
              { key: "type", header: "Dark Circle Type", className: "font-semibold text-brown" },
              { key: "appearance", header: "Appearance" },
              { key: "test", header: "At-Home Test" },
              { key: "cause", header: "Primary Cause" },
              { key: "treatment", header: "First-Line Treatment" },
            ]}
            data={darkCircleTypes.map(item => ({
              type: item.type,
              appearance: item.appearance,
              test: item.test,
              cause: item.cause,
              treatment: item.treatment,
            }))}
            title="Dark Circle Type-to-Treatment Decision Matrix"
            subtitle="Identify your dark circle type before choosing treatment"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              The stretch test and press test are standard bedside clinical assessments. Patients who have received multiple rounds of Pico Laser for dark circles that are actually structural have wasted investment because laser pigment fragmentation does not address the shadow cast by a hollow tear trough.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Allergic Shiners Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Most Overlooked Cause of Dark Eye Circles</h2>
            <p className="text-taupe font-inter">Allergic rhinitis affects 30 to 40% of Malaysians</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border-l-4 border-wine">
            <p className="text-brown font-inter mb-3">Allergic rhinitis is one of the most prevalent chronic conditions in Malaysia, yet it is entirely absent from most aesthetic clinic's dark eye circle treatment pages.</p>
            <p className="text-taupe font-inter">The mechanism is specific: when allergic rhinitis causes nasal congestion, venous blood return from the periorbital area is impaired. Blood pools in the small periorbital veins and capillaries beneath the thin under-eye skin, producing the bluish or purplish bilateral dark shadow called allergic shiners.</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-wine/5 p-4 rounded-xl">
              <p className="font-semibold text-brown">Key diagnostic clues:</p>
              <ul className="mt-2 space-y-1 text-taupe text-sm">
                <li>• Bilateral, symmetrical presentation</li>
                <li>• Fluctuation with allergy seasons or dust exposure</li>
                <li>• Worse in morning, improves through day</li>
                <li>• Associated with nasal congestion</li>
              </ul>
            </div>
            <div className="bg-wine/5 p-4 rounded-xl">
              <p className="font-semibold text-brown">Treatment approach:</p>
              <ul className="mt-2 space-y-1 text-taupe text-sm">
                <li>• Address allergy trigger first</li>
                <li>• Sylfirm X for vascular component</li>
                <li>• Rejuran I for periorbital tissue strengthening</li>
                <li>• Refer to GP for allergy management</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Combination Protocol Table */}
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
              { key: "type", header: "Dark Circle Type", className: "font-semibold text-brown" },
              { key: "phase1", header: "Phase 1 Treatment" },
              { key: "phase2", header: "Phase 2 Treatment (4 to 8 weeks later)" },
              { key: "maintenance", header: "Maintenance" },
            ]}
            data={combinationProtocols.map(item => ({
              type: item.type,
              phase1: item.phase1,
              phase2: item.phase2,
              maintenance: item.maintenance,
            }))}
            title="Structured Dark Circle Combination Protocol"
            subtitle="Sequencing matters as much as the treatments themselves"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              A critical sequencing point: tear trough filler is always performed before Pico Laser in mixed cases. Restoring structural volume changes the skin's surface geometry, reducing apparent darkness even before pigmentation treatment begins.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Longevity Slider Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Treatment Longevity & Results Timeline</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect and how long results last</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Longevity</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Treatment type (filler, laser, or polynucleotide)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Individual metabolic rate affects filler resorption</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Sun exposure and UV protection compliance</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Underlying allergy management (for allergic shiners)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Maintenance schedule adherence</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Most patients achieve optimal results with a structured combination protocol followed by regular maintenance sessions.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-wine p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">Treatment Longevity</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Tear Trough Filler</span>
                    <span className="font-georgia text-2xl font-bold text-white">12 to 18 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Some patients retain results up to 24 months</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Rejuran I (Polynucleotide)</span>
                    <span className="font-georgia text-2xl font-bold text-white">6 to 9 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Maintenance sessions every 6 months recommended</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Pico Laser (Pigmentation)</span>
                    <span className="font-georgia text-2xl font-bold text-white">3 to 6 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "35%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Quarterly toning sessions maintain brightness</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Sylfirm X (Vascular)</span>
                    <span className="font-georgia text-2xl font-bold text-white">9 to 12 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "55%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Annual booster sessions for vessel control</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Combination protocols produce longer-lasting results than single-modality approaches
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ Structural correction with filler must precede pigmentation laser in mixed cases. This sequencing prevents over-treatment and is a clinical practice distinction unique to Nexus Clinic KL.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Process Steps */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Dark Eye Circle Treatment Process</h2>
            <p className="text-taupe font-inter">Step by step at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Clinical Dark Circle Assessment", desc: "Doctor examines under-eye area under specialised lighting, performs stretch and press tests, assesses structural hollowing, reviews allergy history." },
              { step: "02", title: "Candidacy & Treatment Planning", desc: "Doctor confirms treatment candidacy, explains expected outcome, volume range, risk profile specific to your anatomy, and session requirements." },
              { step: "03", title: "Treatment Session", desc: "Topical numbing cream applied. Doctor performs filler (cannula technique), Pico Laser, Rejuran I, or Sylfirm X based on assessment." },
              { step: "04", title: "Aftercare & Follow-Up", desc: "Cold compresses applied. Written aftercare provided. Review appointment at 2 to 4 weeks to assess result and determine if touch-up needed." },
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
              Book Your Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Doctor-assessed, cause-first dark circle treatment</p>
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
          className="container mx-auto max-w-5xl"
        >
          <TableForPages
            columns={[
              { key: "treatment", header: "Treatment", className: "font-semibold text-brown" },
              { key: "bestFor", header: "Best For" },
              { key: "sessions", header: "Sessions" },
              { key: "price", header: "Price Range (RM) 2026", className: "font-semibold text-wine" },
            ]}
            data={pricingTiers.map(tier => ({
              treatment: tier.treatment,
              bestFor: tier.bestFor,
              sessions: tier.sessions,
              price: tier.price,
            }))}
            title="Dark Eye Circle Treatment Cost in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />

          <motion.div variants={fadeInUp} className="text-center mt-4">
            <p className="text-taupe font-inter text-sm italic">
              Combination programmes that pair two or more modalities offer the most comprehensive improvement for mixed and complex dark circle presentations. All pricing disclosed before any procedure is booked.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Before After Section */}
      <SectionBeforeAfter transformations={transformations} />

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
              Refresh Your Under-Eye Area at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Dark circles are one of the most complex presentations in aesthetic medicine because the same visual symptom can arise from four entirely different causes. Getting the diagnosis right before selecting the treatment is what separates results that hold from results that disappoint.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed aesthetic doctors have performed over 5,000 aesthetic procedures, bring more than 15 years of combined experience in treating Malaysian patients to every consultation, and work exclusively with MOH-approved products and medical-grade devices. All procedures in the periorbital zone are doctor-performed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Free Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a consultation for dark eye circle treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available | Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Call: 016-7025699</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">WhatsApp: 03-21635699</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}