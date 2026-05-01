"use client";

import { motion } from "framer-motion";
import {
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
  AlertTriangle,
  TrendingUp,
  Users,
  Phone,
  Mail,
  Syringe,
  FlaskRound,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import Image from "next/image";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
interface HairMesotherapyProps {
  locale: string;
}

export default function HairMesotherapyLanding({ locale }: HairMesotherapyProps) {
  // Treatment at a Glance Data
  const treatmentOverview = [
    { icon: Syringe, label: "Session Duration", value: "30 to 45 minutes per session" },
    { icon: Clock, label: "Downtime", value: "Minimal. Mild scalp sensitivity 24-48 hours" },
    { icon: Activity, label: "Procedure Type", value: "Non-surgical. Microinjections into scalp only" },
    { icon: Calendar, label: "Recommended Sessions", value: "6 to 10 sessions, spaced 2-4 weeks apart" },
    { icon: TrendingUp, label: "Visible Results", value: "Reduced shedding from session 3-4. Improved density month 3-6" },
    { icon: Users, label: "Suitable For", value: "Androgenetic alopecia, hair thinning, postpartum loss, stress shedding" },
  ];

  // Formulation by Hair Loss Type Table
  const formulationTable = [
    {
      type: "Androgenetic Alopecia (DHT-driven)",
      activeSubstances: "DHT blocker + follicle stimulants",
      ingredients: "Biotin, saw palmetto extract, finasteride-based compounds, zinc, B-complex vitamins, amino acids, minoxidil-based peptides"
    },
    {
      type: "Diffuse Hair Thinning (Nutritional)",
      activeSubstances: "Vitamins + minerals + amino acids",
      ingredients: "Vitamin B7 (biotin), B12, folic acid, iron, copper, zinc, silicon, cysteine, taurine, growth factors"
    },
    {
      type: "Postpartum and Stress Shedding",
      activeSubstances: "Adaptogens + cellular boosters",
      ingredients: "Panthenol, adenosine, VEGF-stimulating peptides, glutathione, amino acids, magnesium, B-complex vitamins"
    },
    {
      type: "Alopecia Areata (Patchy Loss)",
      activeSubstances: "Anti-inflammatory + immune modulators",
      ingredients: "Corticosteroid micro-doses, zinc, selenium, biotin, platelet-rich plasma-derived growth factors"
    },
    {
      type: "Scalp Inflammation and Dandruff-Related",
      activeSubstances: "Sebum regulators + scalp balancers",
      ingredients: "Salicylic acid derivatives, selenium, zinc pyrithione-analogues, anti-inflammatory peptides, B5"
    }
  ];

  // Mesotherapy vs PRP vs Exosome Comparison Table
  const comparisonTable = [
    {
      factor: "Source of Active Ingredient",
      mesotherapy: "Medical-grade pharmaceutical cocktail: vitamins, minerals, amino acids, growth factors",
      prp: "Patient's own blood: concentrated platelets and growth factors",
      exosome: "Bioengineered or donor-derived exosomes: cellular signalling vesicles"
    },
    {
      factor: "Customisation Level",
      mesotherapy: "High. Customized cocktail formulated per hair loss type and patient condition.",
      prp: "Moderate. Concentration varies by centrifuge protocol. Not ingredient-customisable.",
      exosome: "Low to moderate. Pre-formulated concentration of exosomal cargo."
    },
    {
      factor: "Mechanism",
      mesotherapy: "Delivers nutrients directly to follicle and scalp mesoderm layer. Stimulates cell metabolism.",
      prp: "Activates follicle stem cells via concentrated growth factor signal.",
      exosome: "Delivers cellular repair instructions via exosomal vesicles. Deepest cellular level."
    },
    {
      factor: "Session Frequency",
      mesotherapy: "6 to 10 sessions, 2 to 4 weeks apart. Monthly maintenance.",
      prp: "4 to 6 sessions, 4 to 6 weeks apart. Quarterly maintenance.",
      exosome: "1 to 3 sessions. Less frequent due to potency."
    },
    {
      factor: "Best For",
      mesotherapy: "Nutritional deficiency hair loss, early thinning, diffuse shedding, combined with other treatments.",
      prp: "Androgenetic alopecia, moderate loss, dormant follicle reactivation.",
      exosome: "Advanced hair thinning, post-transplant support, patients wanting maximum regenerative effect."
    },
    {
      factor: "Cost per Session (Malaysia)",
      mesotherapy: "RM 400 to RM 900",
      prp: "RM 800 to RM 2,000",
      exosome: "RM 1,500 to RM 4,000"
    }
  ];

  // Skin Applications Table
  const skinApplications = [
    { application: "Facial Skin Rejuvenation", substances: "Hyaluronic acid, vitamins C and E, amino acids, collagen boosters", result: "Improved skin hydration, youthful skin texture, reduced dullness and early fine lines" },
    { application: "Wrinkle and Fine Line Reduction", substances: "NCTF (New Cellular Treatment Factor), peptides, hyaluronic acid, B vitamins", result: "Softened wrinkles and fine lines. Stimulate collagen and elastin for firmer skin." },
    { application: "Signs of Aging and Skin Laxity", substances: "Collagen and elastin peptides, antioxidants, silicon, zinc", result: "Reduced signs of aging, improved skin firmness, enhanced skin layer density" },
    { application: "Neck and Décolletage", substances: "Vitamins, minerals, retinol derivatives, hyaluronic acid", result: "Improved skin quality in commonly neglected skin areas" },
    { application: "Acne Scar and Dull Skin", substances: "Vitamin C, glutathione, AHA derivatives, zinc", result: "Brighter youthful skin tone, reduced post-inflammatory hyperpigmentation" },
  ];

  // Pricing Data
  const pricingTiers = [
    { service: "Initial Consultation + Scalp Assessment", details: "Comprehensive scalp analysis. Hair loss type diagnosis. Personalised treatment recommendation.", price: "Free" },
    { service: "Mesotherapy Hair Loss (Standard)", details: "Per session. Customized cocktail formulation. Doctor-performed microinjections.", price: "RM 400 - RM 700" },
    { service: "Mesotherapy Hair Loss (Premium Cocktail)", details: "Per session. Advanced formulation with enhanced active ingredients.", price: "RM 600 - RM 900" },
    { service: "Mesotherapy Hair Package (6 sessions)", details: "Full initial treatment course. Includes follow-up scalp assessment.", price: "RM 2,000 - RM 4,500" },
    { service: "Mesotherapy Hair Package (10 sessions)", details: "Comprehensive treatment programme. Best value for advanced cases.", price: "RM 3,200 - RM 7,500" },
    { service: "Mesotherapy Skin Rejuvenation (Face)", details: "Per session. Customized facial cocktail. Improves skin quality and hydration.", price: "RM 500 - RM 900" },
    { service: "Combined Mesotherapy + PRP Session", details: "Dual treatment approach. Maximum regenerative benefit.", price: "RM 1,000 - RM 2,000" },
    { service: "Mesotherapy + Laser Booster Session", details: "Enhanced scalp microcirculation. Combined photobiomodulation.", price: "RM 900 - RM 1,800" },
  ];

  // FAQ Data
  const faqData = [
    { q: "What exactly is injected into the scalp during hair mesotherapy?", a: "The contents of the mesotherapy injection are a customized cocktail of medical-grade active substances tailored to the patient's specific hair loss pattern. The base formulation includes biotin and B-complex vitamins to support follicle metabolism, amino acids such as cysteine and taurine as building blocks for hair protein, minerals including zinc, copper, and selenium that regulate follicle enzyme activity, and growth factors that stimulate cell proliferation. For patients with DHT-driven androgenetic alopecia, the cocktail may include DHT-blocking compounds. The specific composition is determined by the doctor at the initial consultation." },
    { q: "How many mesotherapy sessions does hair thinning require?", a: "The number of sessions required depends on the cause and severity of hair thinning. Patients with mild to moderate hair thinning caused by nutritional deficiency or postpartum shedding typically respond after three to four sessions and complete a course of six sessions. Patients with androgenetic alopecia that has been progressing for several years generally need eight to ten sessions for meaningful improvement and quarterly maintenance sessions thereafter. Your doctor will assess the scalp condition and provide a session plan at the first consultation." },
    { q: "Is mesotherapy for hair loss painful?", a: "Mesotherapy is described as essentially painless by the majority of patients at Nexus Clinic KL, primarily because a topical numbing cream is applied to the scalp before every session. The numbing cream requires approximately 20 minutes to take effect and significantly reduces the sensation of the microinjections. Patients typically report only mild pressure or minor tingling at each injection point rather than pain. Post-session scalp sensitivity is mild and resolves within 24 to 48 hours." },
    { q: "Can mesotherapy be combined with PRP or other hair loss treatments?", a: "Yes, and combination approaches generally produce better outcomes. Mesotherapy provides the nutritional and hormonal environment for follicle recovery, while PRP adds a concentrated growth factor signal from the patient's own blood. Combining both treatments in an alternating session schedule addresses hair loss from complementary biological directions. Mesotherapy can also be combined with laser booster therapy for enhanced scalp microcirculation, and with oral medications like minoxidil or finasteride to address the systemic hormonal component of androgenetic alopecia." },
    { q: "How soon will I see results from hair mesotherapy?", a: "Most patients notice a reduction in daily hair shedding within the first three to four sessions, which is typically the earliest measurable sign that mesotherapy is working. Improvement in scalp health, reduction in scalp oiliness or sensitivity, and early signs of new hair growth become visible from month two to three of a regular treatment schedule. Improved hair density and thickness develops progressively over the full six to ten session course, with the most complete result visible at six months from the start of the programme." },
    { q: "Is mesotherapy suitable for all forms of hair loss?", a: "Mesotherapy is most effective for androgenetic alopecia (pattern hair loss), diffuse hair thinning from nutritional deficiency or hormonal imbalance, postpartum hair loss, and stress or illness-related shedding. Mesotherapy can help patients at early to moderate stages of these conditions, where viable follicles are still present but underperforming. It is less effective for alopecia areata where the immune attack on follicles requires additional therapeutic approaches, and it is not suitable for completely bald areas where follicles have been permanently destroyed." },
    { q: "What is the difference between mesotherapy and PRP for hair loss?", a: "Mesotherapy delivers a customized cocktail of vitamins, minerals, amino acids, and pharmaceutically active compounds to the scalp layer via microinjections. The composition can be tailored precisely to the patient's diagnosis. PRP (platelet-rich plasma) uses a concentrated preparation of the patient's own blood, which is rich in growth factors but cannot be ingredient-customised in the same way. Mesotherapy is generally better for nutritional deficiency and DHT-inhibition applications, while PRP delivers a stronger growth factor stimulus for follicle reactivation." },
    { q: "Can mesotherapy be used for facial skin rejuvenation as well as hair loss?", a: "Yes. The mesotherapy technique used for hair loss is the same minimally invasive injection technique applied to facial skin for skin rejuvenation, wrinkle reduction, and improvement of the signs of aging. For facial applications, the customized cocktail typically contains hyaluronic acid, collagen-stimulating peptides, vitamins C and E, and amino acids that rejuvenate the skin from within the dermis. Patients at Nexus Clinic KL can receive both hair and facial mesotherapy at the same visit." },
    { q: "Is there any downtime after a mesotherapy hair session?", a: "Mesotherapy has no meaningful downtime. Patients return directly to work and daily activities after the session. The scalp may appear slightly flushed and feel mildly tender for 24 to 48 hours, which is the expected inflammatory response to the microinjections and is a sign the treatment is working. Most patients choose not to wash their hair on the day of treatment to allow maximum absorption of the injected cocktail. No bandaging, rest, or special accommodation is required." },
    { q: "What are the side effects of scalp mesotherapy?", a: "Most side effects are mild and temporary, including redness, swelling, tenderness at injection sites, and mild scalp sensitivity that typically settles within a few days. Like any injection-based procedure, rare risks can include infection or allergic reaction. Medical literature also notes possible local reactions such as pain, itching, edema, hematoma, folliculitis, and rare inflammatory complications. This is why sterile technique and medical oversight at Nexus Clinic KL matter." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-mesotherapy-hair-loss1.webp",
      after: "/images/B&A-hair/B&A-mesotherapy-hair-loss1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-mesotherapy-hair-loss2.webp",
      after: "/images/B&A-hair/B&A-mesotherapy-hair-loss2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-mesotherapy-hair-loss3.webp",
      after: "/images/B&A-hair/B&A-mesotherapy-hair-loss3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Non-Surgical • Doctor-Performed • Customised Cocktails"
        title="Mesotherapy Hair Loss Treatment in Malaysia for"
        highlight="Thinning Hair & Scalp Rejuvenation"
        description="Hair thinning does not respond to shampoos. The active substances that follicles need to combat hair loss cannot penetrate the scalp through topical application alone."
        details="Mesotherapy solves this problem directly: a minimally invasive, non-surgical procedure that involves injecting a customized cocktail of active nutrients directly into the middle layer of the scalp where hair follicles live."
        note="At Nexus Clinic KL, every mesotherapy session is delivered under full doctor supervision using medical-grade formulations registered with the Ministry of Health Malaysia."
        image="/images/hair/mesotherapy-hair-loss.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Mesotherapy Hair Loss Treatment"
        ctaText="Free Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in mesotherapy hair loss treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Customised Cocktail"
        floatingSubtitle="Vitamins • Minerals • Growth Factors"
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
                  <Calendar className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Experience</p>
                  <p className="font-georgia text-brown font-bold text-lg">Founded 2001</p>
                  <p className="font-inter text-taupe text-xs">Over two decades of service</p>
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
                  <Shield className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Credentials</p>
                  <p className="font-georgia text-brown font-bold text-sm">MOH Licensed</p>
                  <p className="font-inter text-taupe text-xs">Doctor-administered treatments</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Syringe className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Non-Surgical</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Microinjections into scalp only</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <FlaskRound className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Customised Cocktail</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Personalised to your hair loss type</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Minimal Downtime</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Return to daily activities immediately</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">6-10 Sessions Initial Course</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Results Visible Month 3-6</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Monthly Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Answer Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Quick Answer</h2>
            <p className="text-taupe font-inter">What you need to know about hair mesotherapy</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-light p-8 rounded-2xl border border-taupe/10 shadow-md">
            <p className="text-taupe font-inter text-lg leading-relaxed">
              Hair mesotherapy uses tiny scalp injections of a nutrient <span className="font-semibold text-brown">"cocktail"</span> to support hair follicles. 
              At Nexus Clinic KL, a common plan is <span className="font-semibold text-brown">6-10 sessions</span>, then maintenance every 1-3 months, 
              based on your hair loss pattern and goals. Most people see changes gradually, often over weeks to a few months. 
              In Kuala Lumpur, scalp mesotherapy can cost roughly <span className="font-semibold text-brown">RM 400 - RM 900 per session</span>, 
              depending on the cocktail formulation and clinic.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment at a Glance */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Mesotherapy Hair Loss Treatment at a Glance</h2>
            <p className="text-taupe font-inter">What to expect from your mesotherapy journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentOverview.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all">
                <item.icon className="w-10 h-10 text-wine mb-4" />
                <p className="font-inter text-sm text-taupe mb-1">{item.label}</p>
                <p className="font-georgia text-md text-brown font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Hair Mesotherapy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is Mesotherapy Section with Image */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Is Mesotherapy and How Does It Combat Hair Loss?</h2>
              <p className="text-taupe font-inter">Mesotherapy is a procedure in aesthetic medicine that involves injecting active substances directly into the mesoderm, the middle layer of the skin, using fine-gauge needles.</p>
              <p className="text-taupe font-inter">For hair loss treatment, hair mesotherapy delivers a customized cocktail of vitamins, minerals, amino acids, and growth factors directly into the scalp at the level of the dermal papilla and hair follicle base.</p>
              <p className="text-taupe font-inter">Because the active ingredients are delivered directly to their target zone rather than absorbed through the gut or diffusing through the skin, mesotherapy achieves follicle-level concentrations that neither oral nor topical treatments can consistently replicate.</p>
              <div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                  <p className="text-sm text-taupe">
                    Azar RP, Bdeir N, Dagher K. Mesotherapy in the Treatment of Androgenetic Alopecia. 
                    <a 
                      href="https://pubmed.ncbi.nlm.nih.gov/27550304/" 
                      target="_blank" 
                      rel="nofollow" 
                      className="text-wine font-bold italic"
                    >
                      Journal of Cosmetic Dermatology
                    </a>. 
                    2017;16(1):e16-e22. This clinical study of mesotherapy for androgenetic alopecia documented significant improvements in hair density, diameter, and anagen phase prolongation following a structured course of mesotherapy injections, supporting its use as a non-surgical treatment for pattern hair loss.
                  </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/hair/hair-transpalnt.jpeg"
                  alt="Mesotherapy treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-wine text-light p-3 rounded-xl shadow-lg">
                <p className="font-inter text-sm font-semibold">Micro-injections at 2-4mm depth</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Formulation by Hair Loss Type Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          {/* Customized Cocktail Formulations by Hair Loss Type Table */}
          <TableForPages
            columns={[
              { key: "type", header: "Hair Loss Type", className: "font-semibold" },
              { key: "activeSubstances", header: "Primary Active Substances" },
              { key: "ingredients", header: "Key Ingredients in Customized Cocktail" },
            ]}
            data={formulationTable.map((item) => ({
              type: item.type,
              activeSubstances: item.activeSubstances,
              ingredients: item.ingredients,
            }))}
            title="Customized Cocktail Formulations by Hair Loss Type"
            subtitle="The single most important clinical differentiator between results and no results"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />

          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm">
              Generic mesotherapy that applies the same formulation to every patient regardless of their diagnosis produces inconsistent results. 
              At Nexus Clinic KL, the doctor designs a customized cocktail matched to the specific mechanisms driving your hair loss.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mesotherapy vs PRP vs Exosome Comparison Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
        {/* Mesotherapy vs PRP vs Exosome Therapy Comparison Table */}
        <TableForPages
          columns={[
            { key: "factor", header: "Factor", className: "font-semibold" },
            { key: "mesotherapy", header: "Mesotherapy" },
            { key: "prp", header: "PRP (Platelet-Rich Plasma)" },
            { key: "exosome", header: "Exosome Hair Therapy" },
          ]}
          data={comparisonTable.map((item) => ({
            factor: item.factor,
            mesotherapy: item.mesotherapy,
            prp: item.prp,
            exosome: item.exosome,
          }))}
          title="Mesotherapy vs PRP vs Exosome Therapy Compared"
          subtitle="Understanding the differences helps you choose the right treatment"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />
        <p className="text-center text-brown">
              Patients wanting to explore PRP as a complement to or alternative to mesotherapy can read more about{' '}
              <a 
                href="/hair/prp-hair-treatment-malaysia/" 
                className="text-wine font-bold italic"
              >
                PRP hair treatment in Malaysia
              </a>{' '}
              and{' '}
              <a 
                href="/hair/exosome-hair-treatment-malaysia/" 
                className="text-wine font-bold italic"
              >
                exosome hair treatment
              </a>{' '}
              at Nexus Clinic.
            </p>
        </motion.div>
      </section>

      {/* Mesotherapy Process Steps */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Mesotherapy Hair Treatment Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step from assessment to aftercare</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Scalp Assessment & Formulation", desc: "Doctor assesses scalp condition, reviews hair loss pattern, and confirms the customized cocktail formulation for your specific needs." },
              { step: "02", title: "Numbing Cream Application", desc: "Medical-grade topical numbing cream applied to scalp for 20 minutes. Makes microinjections essentially painless." },
              { step: "03", title: "Mesotherapy Injection", desc: "Doctor injects customized cocktail using fine-gauge needles at appropriate depth to reach mesoderm layer. Takes 10-20 minutes." },
              { step: "04", title: "Post-Session Scalp Care", desc: "Scalp cleaned after session. Avoid washing hair for 24 hours. No bandaging or rest required." },
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
        </motion.div>
      </section>

      {/* Skin Applications Table */}
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
              { key: "application", header: "Skin Application", className: "font-semibold" },
              { key: "substances", header: "Active Substances Used" },
              { key: "result", header: "Result" },
            ]}
            data={skinApplications.map((item) => ({
              application: item.application,
              substances: item.substances,
              result: item.result,
            }))}
            title="Mesotherapy for Skin Rejuvenation"
            subtitle="Aesthetic applications beyond hair treatment"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          <p className="text-center text-brown max-w-2xl mx-auto">
              Patients combining mesotherapy with other skin treatments may also be interested in{' '}
              <a 
                href="/face/skin-booster-malaysia/" 
                className="text-wine font-bold italic"
              >
                skin booster treatment at Nexus Clinic
              </a>{' '}
              for deep hydration and collagen support.
            </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-8 rounded-2xl border border-taupe/20 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Benefits of Hair Mesotherapy</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Supports healthier scalp environment</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Improves hair quality and thickness gradually</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Fits into a busy KL schedule (no surgery, short sessions)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Combines well with PRP or medical plans when needed</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Fully customisable to your specific hair loss type</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-wine p-8 rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">Who Should Avoid Mesotherapy?</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/90 font-inter text-sm">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Scalp infection, active inflammation, or open wounds</span>
                </li>
                <li className="flex items-start gap-3 text-white/90 font-inter text-sm">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>History of allergy to injectable ingredients</span>
                </li>
                <li className="flex items-start gap-3 text-white/90 font-inter text-sm">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Bleeding disorders or on blood thinners</span>
                </li>
                <li className="flex items-start gap-3 text-white/90 font-inter text-sm">
                  <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Uncontrolled diabetes or major medical conditions</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm">At Nexus Clinic KL, your plan starts with assessment, not assumptions.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Results Timeline Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">When Will You See Results?</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Hair growth moves slowly. That is normal.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl border border-taupe/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">What to Expect</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-brown">Less Shedding</span>
                    <span className="font-georgia text-xl font-bold text-wine">Session 3-4</span>
                  </div>
                  <div className="w-full bg-taupe/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "30%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-wine h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-brown">Better Texture & Thickness</span>
                    <span className="font-georgia text-xl font-bold text-wine">Month 2-3</span>
                  </div>
                  <div className="w-full bg-taupe/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-wine h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-brown">Denser Look</span>
                    <span className="font-georgia text-xl font-bold text-wine">Month 6</span>
                  </div>
                  <div className="w-full bg-taupe/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-wine h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-wine p-8 rounded-2xl text-white shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">Treatment Timeline</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-inter text-white/80 text-sm mb-1">Initial Series</p>
                  <p className="font-georgia text-2xl font-bold">6-10 sessions</p>
                  <p className="text-white/70 text-xs">Spaced 2-4 weeks apart</p>
                </div>
                <div>
                  <p className="font-inter text-white/80 text-sm mb-1">Maintenance</p>
                  <p className="font-georgia text-2xl font-bold">Every 1-3 months</p>
                  <p className="text-white/70 text-xs">Depending on your response</p>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-white/80 text-sm">Results vary by genetics, hormones, and scalp health. Consistency is key.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
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
                { key: "service", header: "Service / Treatment" },
                { key: "details", header: "Details" },
                { key: "price", header: "Price Range (RM) 2026" },
              ]}
              data={pricingTiers.map((tier) => ({
                service: tier.service,
                details: tier.details,
                price: tier.price,
              }))}
              title="Mesotherapy Hair Loss Treatment Cost in Malaysia 2026"
              subtitle="Transparent pricing at Nexus Clinic KL"
              variant="compact"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />
            <motion.p 
              variants={fadeInUp}
              className="text-center text-taupe font-inter text-sm italic mt-4"
            >
              All consultations are complimentary at Nexus Clinic KL. Final pricing confirmed after scalp assessment. Package rates available for full treatment courses.
            </motion.p>
        </motion.div>
      </section>

      {/* Aftercare Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Aftercare: What to Do and Avoid</h2>
            <p className="text-taupe font-inter">Simple guidance for optimal results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-md">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-wine" /> Do's
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Keep scalp clean and dry for 24 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Use gentle, sulphate-free shampoo after 24 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Follow your doctor's scalp product recommendations</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Stay consistent with your scheduled sessions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-md">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose" /> Don'ts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span>Avoid shampoo or chemical products for 24 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span>Skip saunas, steam rooms, and very hot showers for 24 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span>Avoid heavy sweating for the rest of the day</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                  <span>Do not scratch injection sites</span>
                </li>
              </ul>
            </motion.div>
          </div>
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
              Ready to Treat Hair Thinning at Nexus Clinic KL?
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If you are searching for hair mesotherapy in Malaysia, the first step is a proper assessment. At Nexus Clinic Kuala Lumpur, you get doctor-led planning, clear expectations, and a treatment plan that fits your scalp and your lifestyle.
            </p>
            <p className="text-cream/90 font-inter">
              Serving patients from Kuala Lumpur, Bangsar, Petaling Jaya, and the broader Klang Valley. International patients and those travelling from Johor Bahru and southern Malaysia regularly attend the clinic for mesotherapy hair loss treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book  Free Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a consultation for mesotherapy hair loss treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available | Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors flex items-center gap-2"><Phone className="w-4 h-4" /> Call: 016-7025699</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Email: contact@nexus-clinic.com</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}