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
  Droplet,
  Sun,
  Wind,
  Thermometer,
  Leaf,
  FlaskRound,
  Droplets,
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

interface SkinBoosterProps {
  locale: string;
}

export default function SkinBooster({ locale }: SkinBoosterProps) {
  const skinConcerns = [
    { concern: "Dehydration and dullness", bestBooster: "Profhilo", why: "Ultra-high HA concentration spreads beneath the skin to restore moisture binding and elasticity across the full face" },
    { concern: "Acne scars and skin texture", bestBooster: "Rejuran Healer", why: "Polynucleotides derived from salmon DNA repair damaged tissue and stimulate cell regeneration to improve scar depth and texture" },
    { concern: "Fine lines and early skin laxity", bestBooster: "Juvelook", why: "PDLLA collagen stimulator combined with HA rebuilds the skin's collagen matrix gradually for firmer, denser skin over 3 to 6 months" },
    { concern: "Dull complexion and nutrient depletion", bestBooster: "NCTF 135HA", why: "59 active ingredients including vitamins, minerals, amino acids and HA provide comprehensive skin nourishment and radiance" },
    { concern: "Sensitive or inflamed skin", bestBooster: "Plinest", why: "Polynucleotide from trout DNA, milder than Rejuran, suitable for reactive or inflamed skin with lower risk of temporary purging" },
    { concern: "Pigmentation and uneven tone", bestBooster: "NCTF 135HA or combination", why: "Antioxidants and amino acids in NCTF reduce oxidative stress while HA improves the skin environment for a more even, brighter tone" },
    { concern: "Post-acne redness", bestBooster: "Rejuran Healer", why: "The anti-inflammatory and regenerative properties of PN help to reduce chronic post-inflammatory erythema over 3 to 4 sessions" },
    { concern: "Ageing skin with collagen loss", bestBooster: "Juvelook or combination", why: "PDLLA triggers fibroblast activity to produce new collagen, improving firmness and density in skin that has lost structural integrity" },
    { concern: "All-round rejuvenation", bestBooster: "Profhilo + Rejuran combo", why: "Addresses hydration, elasticity and repair simultaneously. Popular protocol for patients wanting comprehensive skin quality improvement" },
  ];
    const skinConcernsLinks: Record<string, string> = {
      "Profhilo": "/face/profhilo-malaysia/",
      "Rejuran Healer": "/face/rejuran-malaysia/",
      "Plinest": "/face/plinest-malaysia/",
    };

    interface LinkedTextProps {
      text: string;
      link?: string;
    }

    const LinkedText: React.FC<LinkedTextProps> = ({ text, link }) => {
      if (!link) return <>{text}</>;
      return (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline text-wine"
        >
          {text}
        </a>
      );
    };
  const productComparison = [
    { product: "Profhilo", active: "Ultra-high HA", benefit: "Deep hydration and bio-remodelling", sessions: "2 sessions", longevity: "6 months", bestAge: "30 to 55+" },
    { product: "Rejuran", active: "Salmon DNA PN", benefit: "Repair, texture, acne scars", sessions: "3 to 4 sessions", longevity: "6 to 9 months", bestAge: "25 to 50" },
    { product: "Juvelook", active: "PDLLA and HA", benefit: "Collagen stimulation and density", sessions: "3 to 4 sessions", longevity: "12 to 18 months", bestAge: "30 to 55" },
    { product: "NCTF 135HA", active: "59 ingredients and HA", benefit: "Comprehensive skin nourishment", sessions: "4 sessions", longevity: "3 to 6 months", bestAge: "25 to 50" },
    { product: "Plinest", active: "Trout DNA PN", benefit: "Regeneration for sensitive skin", sessions: "3 to 4 sessions", longevity: "6 to 9 months", bestAge: "25 to 50" },
  ];

  const sessionProtocols = [
    { product: "Profhilo", protocol: "2 sessions, 4 weeks apart", results: "Glow visible within 7 days of session 1. Full effect after session 2", maintenance: "Every 6 months" },
    { product: "Rejuran", protocol: "3 to 4 sessions, 2 to 4 weeks apart", results: "Skin texture improves from week 3. Full scar improvement over 8 to 12 weeks", maintenance: "Every 6 to 9 months" },
    { product: "Juvelook", protocol: "3 to 4 sessions, spaced 3 to 4 weeks apart", results: "Gradual firmness improvement from month 2. Full collagen response at month 3 to 4", maintenance: "Every 12 to 18 months" },
    { product: "NCTF 135HA", protocol: "4 sessions, 2 weeks apart", results: "Radiance visible from session 2. Full skin nutrition effect after session 4", maintenance: "Every 3 to 6 months" },
    { product: "Plinest", protocol: "3 to 4 sessions, 2 to 3 weeks apart", results: "Similar to Rejuran. Gradual improvement from week 3 onward", maintenance: "Every 6 to 9 months" },
  ];

  const pricingTiers = [
    { treatment: "Profhilo", area: "Face / neck", price: "RM 2,500" },
    { treatment: "Plinest", area: "Face", price: "RM 1,800 – RM 2,200" },
    { treatment: "Skin booster (general rejuvenation)", area: "Face", price: "RM 1,800 – RM 2,500" },
    { treatment: "Advanced skin remodelling", area: "Face / multi-area", price: "RM 2,000 – RM 3,000+" },
  ];

  const faqData = [
    { q: "How long does skin booster treatment last in Malaysia?", a: "Longevity varies by product. Profhilo results typically last six months. Rejuran Healer and Plinest last six to nine months. Juvelook provides the longest-lasting results at 12 to 18 months due to its collagen-stimulating PDLLA component. NCTF 135HA requires maintenance every three to six months. Individual metabolism, sun exposure and skincare habits all affect how long results last." },
    { q: "How much does skin booster treatment cost in Malaysia in 2026?", a: "Skin booster prices at Nexus Clinic KL typically range from RM 1,800 to RM 2,500 per session depending on the product used and treatment area. Advanced skin remodelling treatments such as Profhilo are typically priced around RM 2,500 per session, while other skin booster treatments generally fall within the RM 1,800 to RM 2,200 range. Most treatments require multiple sessions for optimal results. Final pricing is confirmed after consultation based on your skin condition and goals." },
    { q: "Which skin booster is best for acne scars in Malaysia?", a: "Rejuran Healer is the most effective skin booster for improving acne scar texture and depth. Its polynucleotide formula stimulates cell regeneration and tissue repair, gradually filling shallow to moderate rolling and boxcar scars over three to four sessions. Juvelook is an alternative for scars where collagen loss contributes to the indentation, as its PDLLA component rebuilds the surrounding collagen matrix. Many patients benefit from combining both treatments in a staged protocol." },
    { q: "What is the difference between skin booster and dermal filler?", a: "Skin boosters improve the overall quality of the skin across the full treatment area. They target hydration, texture, collagen content and radiance. They do not add volume or reshape facial structure. Dermal fillers add volume to specific areas to restore lost structure or contour the face. Skin boosters are injected superficially into the dermis. Fillers are placed more deeply into subcutaneous tissue. The two treatments address different concerns and are frequently used together." },
    { q: "How many sessions of skin booster are needed?", a: "Most skin boosters require two to four sessions for initial results. Profhilo uses the fewest sessions at two, spaced four weeks apart. Rejuran, Juvelook, NCTF and Plinest typically require three to four sessions spaced two to four weeks apart. After the initial protocol, most patients maintain their results with sessions every three to six months depending on the product used." },
    { q: "Is Rejuran safe for Muslim patients in Malaysia?", a: "Rejuran Healer contains polynucleotides derived from highly purified salmon DNA. The purification process removes proteins and most allergens. Islamic scholars and medical authorities in Malaysia have generally considered the use of highly purified pharmaceutical-grade salmon DNA in medical treatment permissible due to the extent of processing involved. Plinest, derived from trout rather than salmon, is available as an alternative for patients who prefer a non-salmon PN booster." },
    { q: "Can skin booster be done during pregnancy or breastfeeding?", a: "No. Skin booster treatment is not recommended during pregnancy or breastfeeding. While the risk of systemic absorption of injectable hyaluronic acid or polynucleotides is considered very low, there are no clinical trials supporting safety in pregnant or breastfeeding patients. The precautionary approach at Nexus Clinic KL is to defer all non-essential injectable treatments until after pregnancy and breastfeeding have concluded." },
    { q: "How long before an event should I book skin booster treatment?", a: "For Profhilo, book at least two to three weeks before a significant event to allow both sessions to be completed and the initial injection marks to resolve. For Rejuran and other PN boosters, allow four to six weeks before the event to see meaningful improvement. For a big event like a wedding, the ideal plan is to start a full protocol three to four months in advance for the best accumulated result from multiple sessions." },
    { q: "Is skin booster treatment painful?", a: "Skin boosters are administered with very fine needles into the upper dermis. Most patients describe the sensation as a series of tiny pinches rather than significant pain. Topical numbing cream can be applied before treatment on request. The treatment takes 20 to 30 minutes. There is no recovery period and most patients return to normal activities immediately." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge="Injectable Skin Quality Treatment"
        title="Best Skin Booster Treatment in Malaysia for"
        highlight="Hydrated, Glowing Skin"
        description="Dull skin. Fine lines that skincare cannot reach. A tired, flat complexion that no serum or facial seems to fix."
        details="Skin booster treatment at Nexus Clinic Kuala Lumpur works from the inside out. Injectable formulations of hyaluronic acid, polynucleotides, collagen stimulators and growth factors are delivered directly into the dermis where topical skincare cannot reach. The skin is rehydrated, repaired and restructured at the cellular level."
        note="Results vary based on the type of skin booster used and individual skin condition. A series of treatments is typically recommended for optimal results."
        image="/images/face/Skin Booster Treatment.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Skin Booster Treatment"
        ctaText="Book Skin Booster Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in skin booster treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Radiant Results"
        floatingSubtitle="Visible glow • No downtime"
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
                    <p className="font-inter font-semibold text-brown text-sm">Premium Products</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Profhilo, Rejuran, Juvelook, NCTF, Plinest</p>
                  </div>
                </div>
              </div>
            </div>

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
                  <span className="font-inter text-xs text-taupe">Clinically proven formulations</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Skin Booster Treatment Overview</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know at a glance</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatment Type", value: "Injectable skin quality improvement" },
              { icon: Clock, label: "Session Time", value: "20 to 30 minutes" },
              { icon: Heart, label: "Downtime", value: "Minimal, 24-48 hours" },
              { icon: Zap, label: "Results", value: "Visible glow within days" },
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
                <p className="font-inter text-sm text-taupe">Sessions Needed</p>
                <p className="font-georgia text-brown font-semibold">2 to 4 sessions initially<br />Maintenance every 3-6 months</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Longevity</p>
                <p className="font-georgia text-brown font-semibold">Profhilo: 6 months<br />Juvelook: 12-18 months</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Dull skin, dehydration, fine lines, acne scars, poor texture</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Not Suitable For</p>
                <p className="font-georgia text-brown">Pregnancy, breastfeeding, active infection, allergies</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Free Skin Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Malaysian Skin Stressors Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Malaysian Skin and the Three Hidden Stressors</h2>
            <p className="text-taupe font-inter">That age it faster</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-2">UV Exposure Near the Equator</h3>
              <p className="text-taupe font-inter text-sm">
                Malaysia sits between 1 and 7 degrees north of the equator. UV index levels reach 11 or above on most days, 
                accelerating collagen breakdown and depleting natural hyaluronic acid content.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-2">Air-Conditioning Dehydration</h3>
              <p className="text-taupe font-inter text-sm">
                Air conditioning aggressively reduces ambient humidity. Skin loses transepidermal water continuously, 
                leading to a chronic dehydration pattern that topical moisturisers cannot fully correct.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-2">Tropical Heat and Humidity Cycling</h3>
              <p className="text-taupe font-inter text-sm">
                Moving between intense outdoor heat and cold air-conditioned spaces repeatedly stresses the skin's barrier function, 
                disrupting sebum regulation and increasing sensitivity over time.
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter">
              Skin boosters deliver active ingredients directly into the dermis, bypassing the surface barrier entirely. 
              This is why injectable treatment achieves what even the best topical skincare routine cannot.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* How Skin Boosters Work Section */}
      <section className="py-20 px-4 bg-cream">
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
                How Skin Booster Injections Work and <span className="text-wine">What They Actually Fix</span>
              </h2>
              <p className="text-brown font-inter">
                A skin booster is an injectable treatment that delivers active ingredients into the mid to deep dermis using very fine needles. 
                Unlike <Link  href='/face/dermal-filler-malaysia/' className='font-bold text-wine italic'>dermal filler </Link>, which adds volume and structure to specific areas, skin boosters are distributed across the full treatment area.
              </p>
              <p className="text-brown font-inter">
                The key distinction is that skin boosters target skin quality while fillers target facial structure. 
                A patient whose skin looks dull, dehydrated and aged regardless of the shape of their face needs a skin booster.
              </p>
              <div className="bg-cream p-4 rounded-xl border-l-4 border-wine">
                <p className="text-brown font-inter text-sm">
                  According to the <a href="https://www.isaps.org/medical-professionals/isaps-global-statistics/" rel="nofollow" target="_blank" className="text-brown hover:underline font-bold">International Society of Aesthetic Plastic Surgery 2024 Global Statistics Report</a>, non‑surgical injectable skin quality treatments including skin boosters showed strong growth in Southeast Asia. Global aesthetic market analyses also project that the skin boosters sector (injectable treatments designed to improve hydration, elasticity, and skin quality) is expanding rapidly worldwide and across the Asia‑Pacific region, with industry forecasts highlighting double‑digit market growth and increasing adoption of these minimally invasive treatments. 
                </p>
                <p className="text-taupe text-xs mt-1">[ISAPS Global Statistics Report 2024]</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/skin-booster.jpeg"
                  alt="How skin booster works"
                  fill
                  className="object-cover"
                />
              </div>
              <Link href="/contact-us/" className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Get the Right Booster 
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skin Booster Selector Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
              {/* Skin Booster Selector Table */}
              <TableForPages
                columns={[
                  { key: "concern", header: "Skin Concern", className: "font-semibold" },
                  { key: "bestBooster", header: "Best Booster" },
                  { key: "why", header: "Why It Works" },
                ]}
                data={skinConcerns.slice(0, 6).map((item) => ({
                  concern: item.concern,
                  bestBooster: (
                    <LinkedText 
                      text={item.bestBooster}
                      link={skinConcernsLinks[item.bestBooster]}
                    />
                  ),
                  why: item.why,
                }))}
                title="Skin Booster Selector"
                subtitle="Match your skin concern to the right treatment"
                variant="detailed"
                fadeInUp={fadeInUp}
                className="py-20 px-4"
              />
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Personalised Booster quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Comparison Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
        {/* Skin Booster Products Comparison Table */}
        <TableForPages
          columns={[
            { key: "product", header: "Product", className: "font-semibold" },
            { key: "active", header: "Active Ingredient" },
            { key: "benefit", header: "Primary Benefit" },
            { key: "sessions", header: "Sessions" },
            { key: "longevity", header: "Longevity" },
            { key: "bestAge", header: "Best Age" },
          ]}
          data={productComparison.map((item) => ({
            product: item.product,
            active: item.active,
            benefit: item.benefit,
            sessions: item.sessions,
            longevity: item.longevity,
            bestAge: item.bestAge,
          }))}
          title="Skin Booster Products Comparison"
          subtitle="All products side by side"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Ask About Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Session Protocols Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
        {/* Session Protocols and Results Timeline Table */}
        <TableForPages
          columns={[
            { key: "product", header: "Product", className: "font-semibold" },
            { key: "protocol", header: "Initial Protocol" },
            { key: "results", header: "When to Expect Results" },
            { key: "maintenance", header: "Maintenance" },
          ]}
          data={sessionProtocols.map((item) => ({
            product: item.product,
            protocol: item.protocol,
            results: item.results,
            maintenance: item.maintenance,
          }))}
          title="Session Protocols and Results Timeline"
          subtitle="What to expect from each product"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter">
              For patients wanting the fastest overall improvement, the most effective starting approach at Nexus Clinic KL is a combined 
              Profhilo and Rejuran protocol. Profhilo delivers immediate radiance while Rejuran rebuilds texture and skin barrier function.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get a Protocol Recommendation 
              <ArrowRight className="w-4 h-4" />
            </Link>
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
          {/* Skin Booster Pricing Table */}
          <section className="py-20 px-4 bg-cream">
            <div className="container mx-auto max-w-4xl">
              <TableForPages
                columns={[
                  { key: "treatment", header: "Treatment" },
                  { key: "area", header: "Area" },
                  { key: "price", header: "Price per Session (2026)" },
                ]}
                data={pricingTiers.map((tier) => ({
                  treatment: tier.treatment,
                  area: tier.area,
                  price: tier.price,
                }))}
                title="Skin Booster Price in Malaysia"
                subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
                variant="compact"
                fadeInUp={fadeInUp}
              />
              
              {/* Footnote */}
              <p className="text-center max-w-4xl mt-4">
                All pricing at Nexus Clinic KL is confirmed at consultation before any commitment is made. You receive a clear treatment plan and cost breakdown to take home before deciding.
                  Patients looking for a complete anti-aging plan often combine skin booster treatment with other methods to improve skin elasticity and hydration. <Link  href='/face/botox-malaysia/' className='font-bold text-wine italic'>Botox in Malaysia </Link> for muscle relaxation alongside skin quality improvement at Nexus Clinic KL.
              </p>
            </div>
          </section>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <h3 className="font-georgia text-lg text-brown mb-2">What Affects Skin Booster Price in Kuala Lumpur</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Product brand and formulation: Profhilo and Juvelook are priced higher due to proprietary molecular structures</span>
              </li>
              <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Treatment area: Full face costs more than targeted areas like under-eyes or neck</span>
              </li>
              <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Number of sessions: Booking an initial protocol together is more cost-efficient</span>
              </li>
            </ul>
            <p className="text-center mt-4">Patients wanting to enhance their skin booster results with targeted treatment for acne scars often explore 
             <Link  href='/skin/acne-scar-treatment-malaysia/' className='font-bold text-wine italic'> acne scar treatment Malaysia </Link> at Nexus Clinic KL.</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Personalised Skin Booster Price
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                  "Small pinpoint injection marks, resolving within 24 to 48 hours",
                  "Mild redness and puffiness, settling within a day",
                  "Occasional small bumps, resolving within 24 to 72 hours",
                  "Light bruising in some patients, fading within 3 to 5 days",
                  "Temporary skin purging in some Rejuran patients with oily skin",
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
                Aftercare Instructions
              </h3>
              <ul className="space-y-2">
                {[
                  "Avoid touching or pressing the treatment area for at least 6 hours",
                  "Keep skin clean and gently moisturised. Avoid active skincare for 48 hours",
                  "Apply SPF 30+ sunscreen every day after treatment",
                  "Skip intense exercise for 24 hours",
                  "Avoid saunas, steam rooms and prolonged heat for 48 hours",
                  "No facial massages or laser treatments for at least 2 weeks",
                ].map((instruction, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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
              Book Your Skin Booster Treatment in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Skincare reaches the surface. Skin boosters reach the dermis. If your skin looks dull, dry, textured or tired 
              despite a consistent routine, the answer is treatment at the level where the problem actually lives.
            </p>
            <p className="text-cream/90 font-inter">
              One consultation at Nexus Clinic KL is enough to identify exactly which booster addresses your skin concern, 
              how many sessions you need and what a realistic result looks like for your skin type.
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
                message="Hi, I'd like to book a free consultation for skin booster treatment at Nexus Clinic KL. Please let me know available slots."
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