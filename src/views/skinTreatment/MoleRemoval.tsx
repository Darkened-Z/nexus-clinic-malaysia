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
  Sun,
  Thermometer,
  Flower2,
  Layers,
  Target,
  ChevronRight,
  XCircle,
  Phone,
  MessageCircle,
  Users,
  FileText,
  Flame,
  Snowflake,
  HelpCircle,
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
interface MoleRemovalProps {
  locale: string;
}

export default function MoleRemovalLanding({ locale }: MoleRemovalProps) {
  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-mole-removal1.webp",
      after: "/images/B&A-skin/B&A-mole-removal1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-mole-removal2.webp",
      after: "/images/B&A-skin/B&A-mole-removal2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-mole-removal3.webp",
      after: "/images/B&A-skin/B&A-mole-removal3.webp",
    },
  ];

  const moleTypes = [
    { type: "Flat Junctional Naevus", appearance: "Flat, evenly brown or black, well-defined border", depth: "Epidermis only", histopathology: "Not routinely required if no atypical features", method: "CO2 Laser Ablation (1 session)" },
    { type: "Raised Intradermal Naevus", appearance: "Dome-shaped, flesh-coloured or lightly pigmented, soft", depth: "Dermis only", histopathology: "Not routinely required if benign appearance", method: "RF Cauterisation or Surgical Shave Excision" },
    { type: "Compound Naevus", appearance: "Slightly raised, tan to brown, smooth surface", depth: "Epidermis and dermis", histopathology: "Recommended", method: "Surgical Shave Excision or CO2 Laser; tissue sent for analysis" },
    { type: "Congenital Naevus (Small)", appearance: "Present from birth; tan to dark brown; may have hair", depth: "Variable", histopathology: "Recommended", method: "Surgical Excision with Sutures; full specimen sent for histopathology" },
    { type: "Dysplastic Naevus (Atypical Mole)", appearance: "Irregular border, uneven colour, larger than 6mm", depth: "Variable; often deeper", histopathology: "Mandatory", method: "Surgical Excision with Margins; histopathology compulsory" },
    { type: "Seborrhoeic Keratosis (Warty Mole)", appearance: "Rough, stuck-on appearance; waxy surface; light to dark brown", depth: "Epidermal layer", histopathology: "Not routinely required", method: "CO2 Laser Ablation or RF Cauterisation (1 session)" },
  ];

  const scarOutcomes = [
    { method: "CO2 Laser Ablation", risk: "Very low; flat, skin-toned mark that fades over 4 to 8 weeks", bestLocations: "Face, neck, chest; any visible area requiring minimal scarring", timeline: "Pink mark visible for 2 to 4 weeks; full fading at 6 to 8 weeks" },
    { method: "RF Cauterisation", risk: "Low; small flat scab forms and resolves; minimal permanent mark", bestLocations: "Face, neck, back; suitable for raised benign moles", timeline: "Scab falls off within 7 to 10 days; residual pinkness resolves at 4 to 6 weeks" },
    { method: "Surgical Shave Excision", risk: "Low to moderate; flat scar forms at shave level; may retain mild colour", bestLocations: "Raised moles on face, scalp and body; suitable for compound naevi", timeline: "7 to 14 days healing; scar maturation at 3 to 6 months" },
    { method: "Surgical Excision with Sutures", risk: "Linear scar along incision line; fades significantly over 6 to 12 months", bestLocations: "Deeper or atypical moles; body locations where appearance is less critical", timeline: "Sutures removed at 7 to 14 days; full scar remodelling at 6 to 12 months" },
  ];

  const pricingTiers = [
    { treatment: "CO2 Laser Ablation (per mole)", bestFor: "Small to medium flat and raised benign moles", sessions: "1 (2 if deep)", price: "RM 150 – RM 350 per mole" },
    { treatment: "RF Cauterisation (per mole)", bestFor: "Raised benign moles and skin tags", sessions: "1", price: "RM 120 – RM 280 per mole" },
    { treatment: "Surgical Shave Excision (per mole)", bestFor: "Raised compound naevi; moles requiring tissue sample", sessions: "1", price: "RM 250 – RM 500 per mole" },
    { treatment: "Surgical Excision with Sutures (per mole)", bestFor: "Deep, large or atypical moles; histopathology indicated", sessions: "1", price: "RM 400 – RM 900 per mole (histopathology fee additional)" },
    { treatment: "Multiple Moles Package (5 or more, CO2 or RF)", bestFor: "Multiple small benign moles in one session", sessions: "1 session", price: "From RM 600 for 5 moles" },
    { treatment: "Histopathology", bestFor: "Atypical, compound or suspicious moles", sessions: "One-time with procedure", price: "RM 150 – RM 350 (lab fee, separate from procedure)" },
  ];

  const healingTimeline = [
    { day: "Day 1-3", description: "Mild redness, tenderness, small wound. Local anaesthetic wears off. Keep area clean and dry.", status: "active" },
    { day: "Day 4-7", description: "Scab forms and begins to dry. No picking or scratching. Apply prescribed ointment.", status: "healing" },
    { day: "Day 8-14", description: "Scab starts to separate naturally. New pink skin underneath. Continue sun protection.", status: "healing" },
    { day: "Week 2-4", description: "Skin closes and calms. Mild pinkness may persist. Sunscreen essential daily.", status: "closing" },
    { day: "Week 4-8", description: "Colour fades significantly. Scar continues to blend with surrounding skin.", status: "fading" },
    { day: "Month 3-6", description: "Final result visible. Scar maturation complete. Continue sun protection.", status: "mature" },
  ];

  const faqData = [
    { q: "Is mole removal painful?", a: "Most mole removal is done with numbing medication, so the procedure itself should not be painful. You may feel mild stinging or burning for a few days afterward. The anaesthetic injection itself takes 2 to 3 seconds and involves a brief, sharp sensation. Once the area is numb, no pain is felt during the removal procedure." },
    { q: "How long does it take to heal after mole removal?", a: "Recovery is often minimal, with mild redness or scabbing for a few days to a week, depending on the method. Laser healing is commonly quoted around 7 to 14 days, while surgical excision may take longer. A small crust forms and falls off naturally within 7 to 10 days for laser and RF methods." },
    { q: "Will mole removal leave a scar?", a: "It can. Scar risk depends on mole depth and removal method. CO2 Laser Ablation leaves a flat, skin-toned mark that fades over 4 to 8 weeks. Surgical Excision with Sutures leaves a fine linear scar that fades over 6 to 12 months. Some people find the scar looks better than the mole once it fades." },
    { q: "Can a mole grow back after removal?", a: "Moles do not typically grow back unless they were incompletely removed. Moles removed by CO2 Laser Ablation or RF Cauterisation have a small possibility of partial recurrence. Moles removed by Surgical Excision with adequate margins virtually never recur." },
    { q: "How much does mole removal cost in Malaysia?", a: "Cost varies widely based on size, depth, location, and method. At Nexus Clinic KL, CO2 Laser Ablation starts from RM 150 per mole for small flat lesions. Surgical Excision with Sutures ranges from RM 400 to RM 900 per mole. Multiple mole packages starting from RM 600 for 5 moles are available." },
    { q: "Is laser mole removal safe?", a: "When performed by a medical professional after proper assessment, laser removal can be a safe option for suitable moles. However, suspicious moles may need biopsy or a different pathway, so assessment comes first. CO2 Laser Ablation is particularly safe for flat, benign moles." },
    { q: "When should I worry about a mole?", a: "If it changes in size, shape, color, border, or starts evolving, get it checked. The ABCDE guide is a simple way to remember warning signs: Asymmetry, Border irregularity, Color variation, Diameter larger than 6mm, Evolution over time." },
    { q: "Can I remove a mole at home?", a: "No. Professional medical organizations warn against at-home mole removal due to skin cancer risk, scarring, and infection. Never attempt to cut, burn, or use DIY removal creams on moles." },
    { q: "Do I need a biopsy before removing a mole?", a: "Not always. But if a mole looks suspicious, a doctor may take a tissue sample for microscopic examination. At Nexus Clinic KL, any mole with atypical features is sent for histopathological analysis." },
    { q: "What is the best method for removing a mole on the face?", a: "There is no single 'best' method. It depends on depth, location, and your scar risk. CO2 Laser Ablation is often preferred for flat facial moles as it leaves minimal scarring. Surgical Shave Excision may be used for slightly raised moles." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
        <AllPagesHero
          badge="Doctor-Led Mole Assessment • MOH Registered Clinic"
          title="Mole Removal in Kuala Lumpur That"
          highlight="Looks Natural When It Heals"
          description="Flat moles, raised moles, atypical lesions you are uncertain about. Nexus Clinic KL assesses every mole before removal, selects the right method, and includes histopathology for any lesion with atypical features."
          details="Every mole that bothers you deserves a proper medical assessment before anything else. The wrong removal method leaves a worse scar than the mole itself. At Nexus Clinic KL, our licensed aesthetic doctors assess every mole before recommending a removal method."
          note="Over 5,000 Aesthetic Procedures Completed — Our doctors have more than 15 years of combined clinical experience providing mole removal that is as medically thorough as it is aesthetically precise."
          image="/images/skin/mole-removal.webp"
          imageAlt="Nexus Clinic Kuala Lumpur - Mole Removal"
          ctaText="Book Free Mole Assessment"
          ctaLink="/contact-us"
          whatsappMessage="Hi, I'm interested in mole removal at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle="Precise Removal"
          floatingSubtitle="CO2 Laser • RF • Surgical Excision"
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">All procedures performed by licensed doctors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Multiple Removal Methods</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">CO2 Laser • RF • Surgical Excision • Cryotherapy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Histopathology Available</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">For any lesion with atypical features</p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Mole Removal at Nexus Clinic KL at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Methods Available", value: "CO2 Laser Ablation, RF Cauterisation, Surgical Shave Excision, Surgical Excision with Sutures" },
              { icon: Clock, label: "Session Time", value: "15 to 45 minutes depending on number and size of moles" },
              { icon: Heart, label: "Downtime", value: "Minimal for laser and RF; 5 to 10 days healing for surgical excision" },
              { icon: Zap, label: "Sessions Required", value: "Most moles cleared in 1 session; deeper moles may need 2 sessions" },
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
                <p className="font-inter text-sm text-taupe">Anaesthesia</p>
                <p className="font-georgia text-brown font-semibold">Local anaesthetic injection administered before all procedures</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Histopathology</p>
                <p className="font-georgia text-brown font-semibold">Tissue sample sent for lab analysis for any mole with atypical features</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Flat moles, raised moles, compound moles, congenital moles; all skin types</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link  href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Mole | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ABCDE Warning Signs Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The ABCDE Warning Signs Every Malaysian Should Know</h2>
            <p className="text-taupe font-inter">Before any mole is removed, understand these clinical warning signs</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { letter: "A", title: "Asymmetry", desc: "One half does not match the other" },
              { letter: "B", title: "Border", desc: "Irregular, ragged, or blurred edges" },
              { letter: "C", title: "Colour", desc: "Multiple shades of brown, tan, red, white, or blue" },
              { letter: "D", title: "Diameter", desc: "Larger than 6mm (size of a pencil eraser)" },
              { letter: "E", title: "Evolution", desc: "Changing in size, shape, colour, or symptoms" },
            ].map((item, idx) => (
              <motion.div key={idx} variants={scaleIn} className="bg-cream p-4 rounded-xl text-center">
                <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-2xl mx-auto mb-3">
                  {item.letter}
                </div>
                <h3 className="font-georgia text-md text-brown font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-xs mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="bg-wine/5 p-6 rounded-xl border-l-4 border-wine">
            <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Important: Any mole with one or more ABCDE features requires clinical assessment before removal
            </p>
            <p className="text-taupe font-inter text-sm mt-2">
              At Nexus Clinic KL, moles with concerning features are excised with a margin of healthy surrounding tissue and sent for histopathological examination. This is not optional for any mole assessed as atypical.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mole-Type-to-Removal-Method Matrix */}
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
                { key: "type", header: "Mole Type", className: "font-semibold text-brown" },
                { key: "appearance", header: "Appearance" },
                { key: "depth", header: "Depth" },
                { key: "histopathology", header: "Histopathology Needed?" },
                { key: "method", header: "Recommended Method" },
              ]}
              data={moleTypes.map(item => ({
                type: item.type,
                appearance: item.appearance,
                depth: item.depth,
                histopathology: item.histopathology,
                method: item.method,
              }))}
              title="Mole-Type-to-Removal-Method Decision Framework"
              subtitle="Used at every initial mole assessment at Nexus Clinic KL"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              Using surgical excision for a flat mole is the most common method mismatch in Malaysian mole removal. At Nexus Clinic KL, the correct method is selected based on clinical criteria rather than clinic preference.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Healing Timeline Slider Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Mole Removal Healing Timeline</h2>
            <p className="text-taupe font-inter">What to expect during your recovery</p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Progress Bar */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-taupe/20 -translate-y-1/2 rounded-full">
              <div className="w-2/3 h-full bg-wine rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
              {healingTimeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  className="bg-cream p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    idx === 0 ? 'bg-wine text-light' : 'bg-wine/20 text-wine'
                  }`}>
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-georgia text-md text-brown font-semibold">{item.day}</h3>
                  <p className="text-taupe font-inter text-xs mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              <span className="font-semibold">Pro Tip:</span> Sun protection over healed mole removal sites is important for at least 3 months after treatment. UV exposure on immature healing skin increases the risk of post-inflammatory pigmentation and slows scar fading.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Scar Outcomes Table */}
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
                { key: "method", header: "Removal Method", className: "font-semibold text-brown" },
                { key: "risk", header: "Scarring Risk" },
                { key: "bestLocations", header: "Best Locations" },
                { key: "timeline", header: "Expected Healing Timeline" },
              ]}
              data={scarOutcomes.map(item => ({
                method: item.method,
                risk: item.risk,
                bestLocations: item.bestLocations,
                timeline: item.timeline,
              }))}
              title="Scar Outcomes by Removal Method and Body Location"
              subtitle="What to expect based on your mole location and removal method"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm text-center">
              Moles on the chest and upper back carry a higher risk of hypertrophic or keloid scarring in darker Fitzpatrick skin types. At Nexus Clinic KL, patients with a personal or family history of keloid scarring are counselled specifically about method choice.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* What Happens to Removed Mole Tissue Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Happens to Your Removed Mole Tissue</h2>
            <p className="text-taupe font-inter">Clinical accountability in mole removal</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-wine" />
                When Histopathology IS Performed
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Moles removed by Surgical Shave Excision with atypical features</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>All Surgical Excision with Sutures cases</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Any mole with dermoscopic concern or patient-reported change</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Clinical uncertainty about the nature of the lesion</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-wine" />
                When Histopathology Is NOT Routinely Performed
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Small, clearly benign moles removed by CO2 Laser Ablation</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>RF Cauterisation with no atypical features identified</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Seborrhoeic keratosis with classic benign appearance</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 bg-wine/5 p-4 rounded-xl">
            <p className="text-taupe font-inter text-sm text-center">
              Removing a mole without histopathology when the clinical picture warrants it is a practice Nexus Clinic KL does not follow, regardless of the patient's stated preference. Patient safety is not optional.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Removal Methods Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Mole Removal Methods at Nexus Clinic KL</h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              { icon: <Zap className="w-6 h-6" />, name: "CO2 Laser Ablation", desc: "Uses a precisely focused beam of carbon dioxide laser energy to vaporise mole tissue layer by layer. No cutting, no sutures, no incision. Treated area forms a flat protective crust that falls off within 7 to 10 days. Preferred method for flat junctional naevi and seborrhoeic keratoses on the face and visible body areas." },
              { icon: <Flame className="w-6 h-6" />, name: "Radiofrequency Cauterisation", desc: "Uses a fine electrode through which controlled radiofrequency current passes, generating localised heat that precisely destroys mole tissue. Particularly well-suited for raised, dome-shaped intradermal naevi and skin tags. A small scab forms and separates naturally within 7 to 10 days." },
              { icon: <Scissors className="w-6 h-6" />, name: "Surgical Shave Excision", desc: "Numbing the area with local anaesthetic and using a fine surgical blade to shave the raised portion of the mole flush with the surrounding skin. No sutures required. Used for compound naevi and situations where mole tissue needs to be preserved for histopathological examination." },
              { icon: <AlertCircle className="w-6 h-6" />, name: "Surgical Excision with Sutures", desc: "Gold standard method for deep, large or atypical moles. Entire mole is cut out along with a margin of healthy surrounding tissue. Wound closed with fine sutures. Excised specimen sent for histopathological analysis in every case. The only technique that provides complete removal certainty." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-wine/10 rounded-lg flex items-center justify-center text-wine">
                    {item.icon}
                  </div>
                  <h3 className="font-georgia text-xl text-brown">{item.name}</h3>
                </div>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Step by Step Process Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Mole Removal Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by Step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Clinical Mole Assessment", desc: "Doctor examines every mole under bright lighting and dermoscopy. ABCDE criteria evaluated. Any atypical features documented and removal method selected with clear explanation." },
              { step: "02", title: "Method Selection & Consent", desc: "Doctor explains recommended removal method, expected healing, realistic scar outcome, and whether histopathology will be performed. Written consent completed before procedure." },
              { step: "03", title: "The Procedure", desc: "Local anaesthetic administered to each mole site. Takes effect within 2 to 3 minutes. Each mole takes 2 to 15 minutes to treat. Multiple moles treated in same session where appropriate." },
              { step: "04", title: "Post-Treatment Care & Follow-up", desc: "Wound dressing applied. Written wound care instructions provided. Review appointment at 7 to 14 days for suture removal or wound assessment. Histopathology results reviewed at follow-up." },
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

      {/* Before & After Section */}
      <SectionBeforeAfter transformations={transformations} />

      {/* Pricing Section */}
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
              { key: "treatment", header: "Treatment / Method", className: "font-semibold text-brown" },
              { key: "bestFor", header: "Best Suited For" },
              { key: "sessions", header: "Sessions" },
              { key: "price", header: "Price Range (RM) 2026", className: "font-semibold text-wine" },
            ]}
            data={pricingTiers.map(tier => ({
              treatment: tier.treatment,
              bestFor: tier.bestFor,
              sessions: tier.sessions,
              price: tier.price,
            }))}
            title="Mole Removal Cost in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          <motion.div variants={fadeInUp} className="text-center mt-4">
            <p className="text-taupe font-inter text-sm italic">
              Multiple mole removal in a single session offered at package pricing where clinically appropriate. Histopathology fees charged at cost and disclosed transparently before procedure.
            </p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare for Mole Removal</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Expected Side Effects
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Mild redness, a slight burning sensation after CO2 Laser or RF</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Small crust or scab forming over treated area within 24 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Mild swelling and tenderness for first 2 to 3 days after surgical excision</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Scab separates naturally within 7 to 10 days</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Aftercare Instructions
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Gentle daily cleaning with mild soap and water</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Apply prescribed wound healing ointment twice daily</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Keep area covered with small plaster when outdoors</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Sun protection for at least 3 months after treatment</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Do not pick, scratch, or forcibly remove the crust</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Who Mole Removal Is For (And Who Should Pause)</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-wine" />
                You are a good candidate if:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have a mole that catches on clothing or irritates you</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>A mole affects your confidence in photos or daily life</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You want a mole assessed to ensure it is benign</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have a raised mole that you want removed cleanly</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-wine" />
                You may need to pause or adjust if:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Your mole has changed recently in size, shape, or colour</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have a personal or family history of skin cancer</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>The mole is bleeding, itching, or crusting without trauma</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>You have a history of keloid scarring</span>
                </li>
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
              Safe, Precise Mole Removal at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Every mole is assessed before it is removed. The correct method is selected for the specific lesion type. Scar outcomes are discussed honestly based on your skin type and mole location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Mole Assessment Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for mole removal at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Explore Skin Tag Removal</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Wart Removal</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Scar Treatment</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}