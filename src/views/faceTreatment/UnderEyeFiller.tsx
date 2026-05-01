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
  TrendingUp,
  User,
  Sun,
  Wind,
  Droplets,
  Smile,
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
interface UnderEyeFillerProps {
  locale: string;
}

export default function UnderEyeFiller({ locale }: UnderEyeFillerProps) {
  const agingTimeline = [
    {
      range: "Mid to late 20s",
      structural: "Orbital fat compartments begin thinning gradually. Tear trough ligament starts to become more visible. Cheek support is still largely intact",
      noticeable: "Slight hollowing under the eyes that worsens with tiredness, dehydration or illness. You look fine on a good day but noticeably tired on a bad one",
    },
    {
      range: "Early to mid 30s",
      structural: "Orbital fat continues to thin. Cheek fat pad begins to descend. The lid-cheek junction deepens. Bone density in the orbital rim begins to reduce subtly",
      noticeable: "The hollow is visible most of the time, not just when tired. Dark shadows appear in photos. Eye creams stop making a visible difference",
    },
    {
      range: "Mid 30s to 40s",
      structural: "Significant orbital fat loss. Cheek descent pulls support away from the lower eyelid. The tear trough groove deepens noticeably",
      noticeable: "Persistent shadowing and dark circles. Looking tired despite adequate sleep. A sunken, aged appearance under the eyes that concealer struggles to cover",
    },
    {
      range: "40s and beyond",
      structural: "Compound volume loss across the orbital area, midface and temples. Skin thins, making vessels more visible beneath. The tear trough groove is deep and settled",
      noticeable: "The under-eye concern is now multi-layered: structural hollowing, skin thinning, vascular visibility and possibly some pigmentation all contributing simultaneously",
    },
  ];

  const treatmentComparison = [
    {
      treatment: "Under Eye Filler (HA)",
      bestFor: "Hollow tear trough causing shadow and sunken appearance",
      howItWorks: "Fills structural groove from within. Immediate correction of hollow contour",
      sessions: "1 session. Top-up every 9 to 15 months",
    },
    {
      treatment: "Rejuran or Plinest PN",
      bestFor: "Thin under-eye skin, vascular blue circles, mild hollowing",
      howItWorks: "Polynucleotides thicken and repair under-eye skin. Improves vascular visibility",
      sessions: "3 to 4 sessions. Results build gradually",
    },
    {
      treatment: "Juvelook",
      bestFor: "Mild under-eye hollowing combined with skin quality concerns",
      howItWorks: "PDLLA stimulates collagen and HA hydrates. Gradual improvement in both hollow and skin",
      sessions: "3 to 4 sessions over 6 to 8 weeks",
    },
    {
      treatment: "NCTF 135HA",
      bestFor: "Dull, fatigued, nutrition-depleted under-eye skin",
      howItWorks: "59-ingredient skin nourishment blend. Improves radiance and reduces fine lines",
      sessions: "4 sessions. Maintenance every 3 to 6 months",
    },
    {
      treatment: "Pico Laser",
      bestFor: "Brown pigmented dark circles from melanin excess",
      howItWorks: "Breaks down pigment in under-eye skin. Brightens the tone of the skin surface",
      sessions: "3 to 5 sessions. Maintenance 1 to 2 times per year",
    },
    {
      treatment: "Combination approach",
      bestFor: "Multiple causes contributing simultaneously",
      howItWorks: "Filler for structure, PN or skin booster for skin quality, laser for pigmentation if present",
      sessions: "Staged plan over 4 to 8 weeks",
    },
  ];

  const fillerProducts = [
    {
      name: "Belotero Balance",
      description: "Specifically formulated for integration into thin, delicate tissue. Low hygroscopic profile minimises water attraction and swelling under the eyelid.",
      bestFor: "Most widely used and well-tolerated under-eye filler product in Malaysia",
    },
    {
      name: "Teosyal Redensity 2",
      description: "Dedicated periorbital filler containing hyaluronic acid combined with amino acids, vitamins and minerals. Designed specifically for tear trough placement.",
      bestFor: "Provides structural correction alongside skin quality improvement",
    },
    {
      name: "Juvederm Volbella",
      description: "Softest product in the Juvederm range. Used for patients with very thin under-eye skin where even mild hygroscopic activity would create visible swelling.",
      bestFor: "Gentle and natural in this zone",
    },
  ];

  const pricingTiers = [
    { treatment: "Under-eye filler (tear trough correction)", volume: "0.5 to 1 ml", price: "RM 2,200 – RM 2,600" },
    { treatment: "Under-eye + midface support (cheek balancing)", volume: "Customised", price: "RM 3,000 – RM 5,000+" },
  ];

  const faqData = [
    { q: "What is the difference between under eye filler and tear trough filler?", a: "They are the same treatment referred to by two different names. Under eye filler is the consumer-friendly term most patients use when searching. Tear trough filler is the clinical term used by aesthetic doctors. The tear trough is the anatomical name for the hollow groove between the lower eyelid and the upper cheek. Both terms describe the same procedure: placing soft HA filler in this groove to restore volume and reduce the shadow it creates." },
    { q: "How long does under eye filler last in Malaysia?", a: "Under eye filler typically lasts 9 to 15 months. The under-eye area has minimal muscle movement, which means filler metabolises more slowly here than in high-movement areas like the lips. Soft products like Belotero Balance often persist for over a year in many patients. Your doctor will advise on expected longevity based on the product used and your individual metabolism." },
    { q: "How much does under eye filler cost in Malaysia in 2026?", a: "Under-eye filler at Nexus Clinic KL typically ranges from RM 2,200 to RM 2,600 per session depending on the product used and the level of correction required. Combination treatments involving under-eye and midface support, such as cheek enhancement, generally range from RM 3,000 to RM 5,000+ depending on the volume and areas treated. All pricing is confirmed after consultation to ensure safe and personalised treatment planning." },
    { q: "Will under eye filler remove my dark circles?", a: "If your dark circles are caused by hollow shadows from a sunken under-eye, filler significantly reduces or eliminates the appearance of dark circles by filling the hollow and removing the shadow. If your dark circles are caused by brown pigmentation or visible blood vessels through thin skin, filler improves the appearance partially but does not address the root cause. Many patients benefit from a combination of filler for structure and a skin treatment for skin quality." },
    { q: "Is under eye filler safe?", a: "Under eye filler is safe when performed by a trained medical doctor using the correct product and technique in a proper clinical setting. The under-eye area carries specific risks including the Tyndall effect from superficial placement and rare vascular complications. Both are manageable with the right product selection, deep cannula technique and emergency protocols in place. At Nexus Clinic KL, all under-eye filler treatments follow these protocols without exception." },
    { q: "How much filler is needed for the under eyes?", a: "Most patients need 0.3 to 0.8ml per side. This is one of the lowest-volume areas on the face and it should remain so. More than 0.8ml per side in a single under-eye session is rarely appropriate and increases the risk of puffiness, migration, and the Tyndall effect. A conservative first session with a top-up if needed at two weeks is always safer than starting with high volumes." },
    { q: "Can I get under eye filler if I have eye bags?", a: "It depends on the nature of the eye bag. If the puffiness is caused by fat herniation, meaning a visible bulge beneath the eye, adding filler may worsen the appearance by adding volume to an already protruding area. If the eye bag is largely a shadow caused by the hollow below a mild protrusion, filling the hollow can significantly improve the appearance by reducing contrast. The doctor assesses this at consultation." },
    { q: "Can I combine under eye filler with other treatments?", a: "Yes. Under eye filler combines well with cheek filler for patients where midface descent is contributing to the hollow, skin booster treatments for improving under-eye skin quality alongside structural correction, and Pico laser for pigmentation-based dark circles. Combining these treatments produces a more complete result than filler alone when multiple causes are present." },
    { q: "How soon can I wear eye make-up after under eye filler?", a: "You can apply eye make-up gently from the day after treatment. Avoid pressing, rubbing or applying heavy creams near the injection site for 48 hours. Remove eye make-up gently during this period, patting rather than wiping. Normal eye make-up application can resume fully after 48 hours." },
    { q: "Who is not suitable for under eye filler?", a: "Under eye filler is not suitable for patients who are pregnant or breastfeeding, have an active skin infection near the treatment area, have very thin under-eye skin prone to the Tyndall effect, have significant fat herniation as the primary eye bag concern, have a known allergy to HA or lidocaine, or have had large volumes of non-HA filler placed under the eyes previously that have not been dissolved. A full assessment at consultation confirms suitability." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge="Natural Under-Eye Rejuvenation"
        title="Natural Under Eye Filler in Malaysia for"
        highlight="Eyes That Look Rested, Bright and Years Younger"
        description="You know the feeling. You slept a full night. You drank enough water. You tried every eye cream on the market. And you still look tired. The dark hollows and shadows beneath your eyes tell a different story."
        details="Under eye filler at Nexus Clinic Kuala Lumpur treats the structural reason your eyes look the way they do. A hollow groove forms beneath the eye as orbital volume depletes, and the shadow this groove casts is what reads as tiredness, dark circles and age."
        note="The hollow under your eyes is not a surface concern. It is a structural one. No topical product can penetrate deep enough to fill a structural hollow."
        image="/images/face/Under Eye Filler.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Under Eye Filler Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in under eye filler at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Brighter Eyes"
        floatingSubtitle="Natural results • 20-30 minutes"
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
                    <p className="font-inter font-semibold text-brown text-sm">Cannula Technique</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Single entry point, minimised bruising</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Tyndall Effect Prevention</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Deep placement, low-hygroscopic products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Low-Volume Discipline</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">0.3-0.8ml per side for natural results</p>
                  </div>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Under Eye Filler Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatment", value: "Soft HA filler for under-eye hollows" },
              { icon: Clock, label: "Session Time", value: "20 to 30 minutes" },
              { icon: Heart, label: "Downtime", value: "Minimal, 3-7 days" },
              { icon: Zap, label: "Results", value: "Immediate, final at 7-14 days" },
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
                <p className="font-inter text-sm text-taupe">Also Known As</p>
                <p className="font-georgia text-brown font-semibold">Tear trough filler, periorbital filler</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Longevity</p>
                <p className="font-georgia text-brown font-semibold">9 to 15 months</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Reversible</p>
                <p className="font-georgia text-brown font-semibold">Yes. Fully dissolvable with hyaluronidase</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Volume Used</p>
                <p className="font-georgia text-brown font-semibold">0.3 to 0.8ml per side</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Aging Timeline Section */}
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
              { key: "range", header: "Age Range", className: "font-semibold" },
              { key: "structural", header: "What Is Happening Structurally" },
              { key: "noticeable", header: "What You Notice" },
            ]}
            data={agingTimeline.map((stage) => ({
              range: stage.range,
              structural: stage.structural,
              noticeable: stage.noticeable,
            }))}
            title="How the Under-Eye Area Changes Over Time"
            subtitle="The aging timeline"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              Most patients presenting at Nexus Clinic KL with under-eye concerns benefit from a combination of two approaches. Filler for the structural hollow is the most common starting point, often paired with a skin booster to address skin quality and vascular visibility in the same zone. Patients with significant brown pigmentation as well as hollowing are advised to treat the structural component first, then address pigmentation with laser once the filler has settled.
              
              Patients wanting to understand the full range of skin booster options that work alongside under eye filler can read about <Link  href='/face/skin-booster-malaysia/' className='font-bold text-wine italic'> skin booster treatment in Malaysia </Link> at Nexus Clinic KL.            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Find Out What Stage Your Under-Eye
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Comparison Table */}
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
            { key: "treatment", header: "Treatment", className: "font-semibold" },
            { key: "bestFor", header: "Best Under-Eye Concern" },
            { key: "howItWorks", header: "How It Works" },
            { key: "sessions", header: "Sessions Needed" },
          ]}
          data={treatmentComparison.map((item) => ({
            treatment: item.treatment,
            bestFor: item.bestFor,
            howItWorks: item.howItWorks,
            sessions: item.sessions,
          }))}
          title="Under Eye Filler, Skin Booster or Laser"
          subtitle="Choosing the right treatment for your concern"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
             The best time to address under-eye hollowing is when you first notice it. A smaller volume of filler placed at an earlier stage produces a more natural result and requires less correction over time than waiting until the hollow has become deep and settled.
            Patients who also notice cheek descent alongside their under-eye hollowing often benefit from combining under eye filler with <Link  href='/face/cheek-filler-malaysia/' className='font-bold text-wine italic'>cheek filler treatment </Link> at Nexus Clinic KL for a more complete result.

            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get the Right Treatment 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Patients Experience Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Under Eye Filler Patients Actually Experience</h2>
            <p className="text-taupe font-inter">At Nexus Clinic KL</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/10">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">Pain and Comfort</h3>
              <p className="text-taupe font-inter text-sm">
                Topical numbing cream is applied for 15-20 minutes. Most products contain built-in lidocaine. 
                Patients describe pressure and occasional mild stinging rather than pain.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/10">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">The Immediate Result</h3>
              <p className="text-taupe font-inter text-sm">
                You will see improvement immediately. Some swelling is normal, most noticeable in the first 48 hours. 
                Do not assess final result before 14 days.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/10">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">Natural vs Overdone</h3>
              <p className="text-taupe font-inter text-sm">
                The correct volume is 0.3 to 0.8ml per side. Starting light and adding is always safer than starting heavy and dissolving.
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Book Your  Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Filler Products Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Filler Products Used for Under Eye Treatment</h2>
            <p className="text-taupe font-inter">At Nexus Clinic KL</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {fillerProducts.map((product, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/20 hover:shadow-lg transition-shadow">
                <h3 className="font-georgia text-xl text-brown mb-2">{product.name}</h3>
                <p className="text-taupe font-inter text-sm mb-3">{product.description}</p>
                <div className="mt-3 pt-3 border-t border-taupe/10">
                  <p className="text-wine font-inter text-xs font-semibold">✓ {product.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
              <p className="text-taupe text-sm">
                According to the <a href="https://www.isaps.org/discover/about-isaps/global-statistics/" target="_blank" rel="nofollow" className="font-bold text-wine italic">International Society of Aesthetic Plastic Surgery (ISAPS) 2024 Global Statistics Report</a>, 
                under-eye and periorbital concerns remain among the most common aesthetic treatment areas in Southeast Asia, 
                with dermal fillers being one of the most frequently requested non-surgical options.
              </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Ask Which Product Is Right 
              <ArrowRight className="w-4 h-4" />
            </Link>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Under Eye Filler Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation and Diagnosis", desc: "Doctor examines whether concern is structural hollowing, pigmentation, or fat herniation. Only structural hollow responds well to filler." },
              { step: "02", title: "Treatment Plan Confirmation", desc: "Product, volume, and placement confirmed. Most patients need 0.3-0.8ml per side." },
              { step: "03", title: "Numbing and Cannula Injection", desc: "Topical numbing applied. Single-entry cannula technique deposits filler through one access point. 15-20 minutes." },
              { step: "04", title: "Immediate Review and Aftercare", desc: "Result reviewed from multiple angles. Full aftercare provided. Two-week follow-up scheduled." },
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
              Book Your Under Eye Filler Appointment
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
              title="Under Eye Filler Price in Malaysia"
              subtitle="2026 Pricing at Nexus Clinic KL"
              variant="compact"
              fadeInUp={fadeInUp}
          />
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <p>All pricing at Nexus Clinic KL is confirmed after consultation. No treatment is recommended or priced before the doctor has assessed whether it is appropriate for your specific concern.
                Patients wanting to understand the full range of facial filler pricing at Nexus Clinic can visit the <Link  href='/face/dermal-filler-malaysia/'  className='font-bold text-wine italic'> dermal filler Malaysia </Link> pricing overview.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Longevity Reality Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Under Eye Filler Longevity Reality</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect and what influences your results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Factors Affecting Longevity Card */}
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Longevity</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Filler brand and formulation: Soft, low-hygroscopic products designed for periorbital area",
                  "Individual metabolism: Faster metabolism breaks down filler more quickly",
                  "Lifestyle factors: UV exposure, sleep quality, and skincare routine",
                  "Initial volume: Conservative volumes provide natural results",
                  "Cheek support: Proper midface foundation extends under-eye result",
                ].map((factor, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-taupe font-inter text-sm">
                    <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Most patients schedule maintenance top-ups between 12 and 15 months to maintain optimal results.
                </p>
              </div>
            </motion.div>

            {/* Longevity Range Card */}
            <motion.div
              variants={fadeInRight}
              className="bg-gradient-to-br from-wine to-rose p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">Under Eye Filler Longevity</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Minimum</span>
                    <span className="font-georgia text-2xl font-bold text-white">9 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Fast metabolism, first-time patients</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Average</span>
                    <span className="font-georgia text-2xl font-bold text-white">12 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "67%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Most patients with standard metabolism</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Maximum</span>
                    <span className="font-georgia text-2xl font-bold text-white">15+ months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "83%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Optimal product, good cheek support, ideal metabolism</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Results vary by product brand, individual metabolism, and cheek support.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ Regular maintenance every 12-15 months helps maintain your refreshed under-eye appearance
            </p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">What to expect after treatment</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {[
                  "Mild swelling, most noticeable in first 48 hours, resolves within 7-14 days",
                  "Bruising possible due to thin under-eye skin, fades within 5-10 days",
                  "Temporary firmness under the eye for 2-4 days",
                  "Mild tenderness around injection area for 24-48 hours",
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
                <AlertTriangle className="w-5 h-5 text-wine" />
                Rare Risks
              </h3>
              <ul className="space-y-2">
                {[
                  "Tyndall effect: Bluish tint if filler placed too superficially. Treated with hyaluronidase",
                  "Migration: Filler moving from original placement site",
                  "Vascular occlusion: Extremely rare, requires immediate management",
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
                "Avoid pressing, rubbing or touching the under-eye area for 48 hours",
                "Sleep elevated on an extra pillow for the first two nights",
                "Apply cool compress gently if swelling is uncomfortable",
                "Avoid alcohol for 24 hours",
                "Skip intense exercise for 24 to 48 hours",
                "Avoid glasses resting on the upper cheek for one week",
                "Do not apply heavy eye creams near injection site for 48 hours",
                "Assess final result at 14 days when swelling has resolved",
              ].map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-4">Patients who want to address fine lines and skin quality around the eyes alongside filler can explore <Link  href='/face/skin-booster-malaysia/'  className='font-bold text-wine italic'>skin booster treatment </Link> as a complementary treatment at Nexus Clinic KL.</p>
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
              Book Under Eye Filler in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Looking rested is not a luxury. It is how you want to feel when you look in the mirror and how you want others to see you. 
              Under eye filler at Nexus Clinic KL is a 30-minute appointment that addresses the structural reason your eyes look the way they do.
            </p>
            <p className="text-cream/90 font-inter">
              One consultation. An honest diagnosis. A treatment plan that actually addresses your concern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Under Eye Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for under eye filler at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="/face/tear-trough-filler-malaysia/" className="hover:text-cream transition-colors">Explore Tear Trough Filler</a>
              <span>•</span>
              <a href="/face/cheek-filler-malaysia/" className="hover:text-cream transition-colors">Explore Cheek Filler</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}