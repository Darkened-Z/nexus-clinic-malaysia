"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Zap, Eye, ArrowUp } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface CheekFillerProps {
  locale: string;
}

export default function CheekFiller({ locale }: CheekFillerProps) {
  const ageGroups = [
    {
      range: "Mid to late 20s",
      concern: "Flat cheeks, lack of cheekbone definition, desire for apple cheeks or sculpted midface",
      approach: "Contouring and augmentation. Low volume placed at zygomatic arch and anteromedial cheek for definition rather than volume restoration",
    },
    {
      range: "Early 30s",
      concern: "Early volume thinning, mild nasolabial fold development, cheeks beginning to look less full",
      approach: "Combination of contouring and early restoration. Volume placed in medial cheek to maintain youthful proportion",
    },
    {
      range: "Mid 30s to 40s",
      concern: "Noticeable volume loss, descent of malar fat pad, deepening smile lines, under-eye hollowing",
      approach: "Volume restoration. Medial and submalar zones filled to re-lift the descending tissue and reduce cascading signs of aging",
    },
    {
      range: "40s and beyond",
      concern: "Significant volume depletion, jowling, deep folds, sunken under-eyes, flat midface",
      approach: "Structural rebuilding. Higher volumes used to restore the full midface scaffold. Often combined with tear trough and jawline filler",
    },
  ];

  const genderGoals = [
    {
      gender: "Female Patients",
      goal: "Lifted, rounded apple cheeks. Heart-shaped youthful appearance. Soft upper cheek fullness",
      zone: "Anteromedial cheek and submalar. Volume placed centrally for roundness",
      volume: "1 to 2ml per side typically. Conservative for natural result",
      product: "Juvederm Voluma or Restylane Lyft for soft rounded projection",
      avoid: "Lateral zygomatic projection that widens the face",
      combine: "Tear trough filler, lip filler, Botox for complete youthful refresh",
      outcome: "Face looks rested, lifted and naturally young without looking done",
    },
    {
      gender: "Male Patients",
      goal: "Stronger zygomatic projection. Defined cheekbones. Structured, angular midface",
      zone: "Zygomatic arch and lateral cheekbone. Volume placed laterally for definition",
      volume: "1 to 2.5ml per side. More volume needed for structural definition",
      product: "Juvederm Volux or Radiesse for firmer structural angularity",
      avoid: "Submalar softness that feminises the midface",
      combine: (
            <>
              Cheek  filler, Jawline filler{" "}
              <Link href="/face/jawline-filler-malaysia/" className="font-bold text-wine">
                in Malaysia can effectively restore volume and improve facial contour.
              </Link>
            </>
      ),
      outcome: "Face looks strong, defined, and structured without looking overdone",
    },
  ];

  const fillerProducts = [
    {
      name: "Juvederm Voluma",
      description: "The most prescribed cheek filler product in Malaysia according to Allergan/AbbVie Malaysia 2023 data. High-density HA with a firm structural profile, excellent lift capacity and a natural feel. Specifically designed for deep cheekbone placement.",
      longevity: "12 to 18 months",
      bestFor: "First-choice for both cheek volume restoration and contouring in most patients",
      citation: "AbbVie Malaysia Aesthetic Market Summary Report, 2023",
    },
    {
      name: "Juvederm Volux",
      description: "The firmest HA product in the Juvederm range. Used for male patients wanting strong zygomatic projection or patients requiring significant structural cheekbone definition.",
      longevity: "18 to 24 months",
      bestFor: "Male patients wanting strong zygomatic projection or significant structural definition",
      citation: "",
    },
    {
      name: "Restylane Lyft",
      description: "Firm HA with strong lift capacity and a consistent safety record. Frequently used alongside Juvederm Voluma for combined cheek and jawline treatments.",
      longevity: "12 to 18 months",
      bestFor: "Combined cheek and jawline treatments",
      citation: "",
    },
    {
      name: "Radiesse",
      description: "A calcium hydroxylapatite biostimulatory filler that adds immediate structural volume and stimulates the body's own collagen production over time.",
      longevity: "12 to 24 months",
      bestFor: "Patients wanting longest-lasting result and collagen rebuilding",
      citation: "Not reversible with hyaluronidase",
    },
  ];

  const pricingTiers = [
    { treatment: "Cheek filler (contouring / volume restoration)", volume: "1 to 2 ml", price: "RM 2,400 – RM 3,000+" },
    { treatment: "Advanced cheek enhancement", volume: "2 to 3 ml", price: "RM 3,000 – RM 4,000+" },
    { treatment: "Cheek + facial balancing (multi-area)", volume: "Customised", price: "RM 4,000 – RM 7,000+" },
  ];

  const priceFactors = [
    "Product: Juvederm Volux and Radiesse cost more than Juvederm Voluma. The difference reflects structural firmness for male augmentation and longevity",
    "Volume: Contouring in a patient with good existing cheek structure needs less product than significant volume restoration",
    "One side vs both sides: Full bilateral cheek treatment costs more than treating a single side for asymmetry correction",
    "Combination treatment: Cheek filler combined with tear trough, jawline or lip filler is more cost-efficient than separate appointments",
  ];

  const sideEffects = {
    common: [
      "Mild swelling in the cheek area, typically resolving within 2 to 5 days",
      "Light bruising possible, especially when using a needle rather than a cannula, fading within 3 to 7 days",
      "Temporary firmness or heaviness in the cheeks for 3 to 5 days as the filler integrates",
      "Minor asymmetry in the days immediately after treatment as swelling resolves unevenly. Both sides settle equally by day 14",
    ],
    rare: [
      "Visible or palpable nodules if filler is placed too superficially",
      "Asymmetry may occur if the facial volume is not balanced evenly between both sides",
      "Infection at injection site, extremely rare with sterile technique",
      "Vascular occlusion, very rare in the cheek area but requires trained injector and emergency protocol readiness",
    ],
  };

  const aftercareInstructions = [
    "Avoid pressing, massaging or applying direct pressure to the cheeks for at least 48 hours",
    "Sleep on your back for the first two nights to avoid compressing one side more than the other",
    "Skip intense exercise for 24 hours",
    "Stay away from saunas, steam rooms and prolonged heat for 48 hours",
    "Avoid alcohol for the first 24 hours",
    "Do not book facial massages or energy-based treatments for at least two weeks after cheek filler",
    "Assess your final result at 14 days when all swelling has fully resolved",
  ];

  const faqData = [
    { q: "How long does cheek filler last in Malaysia?", a: "Juvederm Voluma, the most prescribed cheek filler in Malaysia, typically lasts 12 to 18 months. Radiesse can last 12 to 24 months. Individual metabolism, lifestyle and the volume used all affect longevity. Patients who maintain regular top-up sessions typically find that each subsequent session requires less product as residual filler from the previous treatment remains in the tissue." },
    { q: "How much does cheek filler cost in Malaysia in 2026?", a: "Cheek filler treatments at Nexus Clinic KL typically range from RM 2,400 to RM 3,000+ per session, depending on the product used and the volume required for contouring or volume restoration. More advanced treatments requiring higher volume or multi-area facial balancing can range from RM 3,000 to RM 5,000+. Final pricing is confirmed during consultation based on your facial structure and treatment goals." },
    { q: "How much filler is needed for the cheeks?", a: "Most patients need 1 to 2ml per side for a natural, proportionate cheek filler result. First-time patients with good existing cheek structure wanting subtle contouring may need only 1ml per side. Patients with significant age-related volume loss may require 2 to 3ml per side. The doctor confirms the right volume at consultation based on your face shape and the degree of correction needed." },
    { q: "Will cheek filler make my face look too round or puffy?", a: "Correctly placed cheek filler creates definition and lift, not roundness or puffiness. An overfilled, puffy appearance is caused by too much volume placed too superficially or in the wrong anatomical zone. At Nexus Clinic KL, the approach is anatomy-first and restrained, focusing on medical aesthetic principles. The goal is to restore the natural Ogee curve and cheek position, not to overfill the face. Many patients find that cheek filler makes their face look slimmer and more defined, not rounder." },
    { q: "Can cheek filler help with nasolabial folds?", a: "Yes. Nasolabial folds deepen significantly when cheek volume drops because the weight of deflated cheeks pulls downward on the skin above the fold. Restoring cheek volume lifts this skin from above and reduces fold depth without directly injecting the nasolabial fold area. Many patients find their smile lines improve significantly after cheek filler, as it helps to restore volume before any fold-specific treatment is considered." },
    { q: "Does cheek filler improve under-eye hollowing?", a: "Often yes, though the degree of improvement depends on the depth of the tear trough and how much of it is contributed by cheek descent versus direct under-eye hollowing. Restoring cheek volume provides structural support to the lower eyelid area and can significantly reduce the visible tear trough. Patients with significant under-eye hollowing may still benefit from dedicated tear trough filler after cheek treatment." },
    { q: "Can cheek filler be dissolved?", a: "Hyaluronic acid cheek fillers are fully dissolvable with hyaluronidase. If you are unhappy with the result for any reason, the filler can be partially or completely removed. Radiesse is not reversible with hyaluronidase and requires more thorough patient assessment before use. For first-time patients, HA filler is always the recommended starting option due to its reversibility." },
    { q: "Is cheek filler suitable for men?", a: "Yes. Cheek filler for men is a growing treatment category at Nexus Clinic KL. Male patients want stronger zygomatic projection and defined cheekbones rather than rounded apple cheeks. The product selection, injection depth and placement zones differ significantly from female technique. Juvederm Volux and Radiesse are the preferred products for male patients due to their firmer structural profile. Results look masculine and natural when the technique is gender-appropriate." },
    { q: "How soon will I see results from cheek filler?", a: "Results are visible immediately after treatment. Mild swelling over the first 24 to 48 hours may slightly exaggerate the initial volume. As swelling resolves over 7 to 14 days, the final settled result becomes visible. Most patients see their best outcome at the two-week review. The secondary cascade effects on nasolabial folds and under-eyes become clearer as the filler fully integrates with surrounding tissue." },
    { q: "Who is not suitable for cheek filler?", a: "Cheek filler is not suitable for patients who are pregnant or breastfeeding, have an active skin infection in the treatment area, have a known allergy to hyaluronic acid or lidocaine, or have certain autoimmune conditions affecting healing. Patients with very thin facial skin or who have had cheek implants previously are assessed case by case. A full medical assessment at consultation determines suitability for each individual." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Non-Surgical Midface Lift"
        title="Sculpted Cheek Filler in Malaysia for a"
        highlight="Lifted, Youthful Midface"
        description="Your cheeks are the structural foundation of your face. When they are full and well-positioned, the eyes look brighter, the nasolabial folds stay shallow and the lower face holds its definition."
        details="Cheek filler at Nexus Clinic Kuala Lumpur works at that structural level, enhancing skin texture and volume. Using high-density hyaluronic acid products placed precisely at the cheekbone and in the midface fat compartments, our doctors restore the volume and lift that the face needs to look balanced, rested and defined."
        note="Not all cheek fillers are created equal. The product choice and placement technique significantly affect your results and safety."
        image="/images/face/Cheek Filler Treatment.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Cheek Filler Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in cheek filler at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Immediate Results"
        floatingSubtitle="Minimal downtime • Natural lift"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Cheek Filler Treatment Overview</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know at a glance</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatment", value: "Hyaluronic acid or Radiesse filler" },
              { icon: Clock, label: "Session Time", value: "20 to 40 minutes" },
              { icon: Heart, label: "Downtime", value: "Minimal, 2-5 days" },
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
                <p className="font-georgia text-brown font-semibold">Juvederm Voluma: 12-18 months<br />Radiesse: 12-24 months</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Reversible</p>
                <p className="font-georgia text-brown font-semibold">Yes for HA fillers<br />Fully dissolvable with hyaluronidase</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Volume Used</p>
                <p className="font-georgia text-brown font-semibold">1 to 3ml per session</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Age-related volume loss, flat cheekbones, hollow under-eyes, nasolabial folds, face sculpting</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Speak to a Doctor About Your Midface Goals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Asian Midface Aging Section */}
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
                How Asian Midface Aging Differs — <span className="text-wine italic">Why Cheek Filler Matters Earlier</span>
              </h2>
              <p className="text-brown font-inter">
                Cheek filler is not just an anti-aging treatment; it can also add volume, improve facial contour, and enhance skin texture. 
                For Asian patients including the majority of those seen at Nexus Clinic KL, it is often the most structurally impactful 
                facial filler treatment available.
              </p>
              <p className="text-brown font-inter">
                Research in aesthetic medicine has shown that Asian patients typically experience midface volume loss earlier than their 
                Western counterparts, often beginning in the mid-twenties. Asian cheekbones tend to project laterally outward rather than 
                anteriorly forward, making volume loss more visually impactful.
              </p>
              <p className="text-brown font-inter">
                At Nexus Clinic KL, cheek filler placement is planned specifically for Southeast Asian facial anatomy. Volume is placed 
                medially at the anteromedial cheek and submalar zones rather than laterally, creating a natural, lifted appearance.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">"The goal is a refreshed version of your own features — not a new face."</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Cheek Filler.jpeg"
                  alt="Asian facial anatomy for cheek filler"
                  fill
                  className="object-cover"
                />
              </div>
              <Link className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                href="/contact-us/">
                Get a Cheek Assessment Built for Your Anatomy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Cascade Effect Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Cascade Effect</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">How cheek filler improves more than just the cheeks</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Nasolabial Fold Reduction", 
                desc: "Deep smile lines are often caused by deflated cheeks pulling downward. Restoring cheek volume lifts the skin above the fold and reduces its depth from above.", 
                icon: Sparkles 
              },
              { 
                title: "Under-Eye Hollow Improvement", 
                desc: "The tear trough is directly connected to the cheek below. Restoring cheek volume provides structural support to the lower eyelid area and reduces tear trough depth.", 
                icon: Eye 
              },
              { 
                title: "Lower Face Lifting", 
                desc: "Volume in the midface acts as a scaffold for the skin below. Restoring midface volume re-tightens the skin drape over the lower face and lifts the jawline.", 
                icon: ArrowUp 
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl shadow-md border border-taupe/10 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-xl text-brown mb-3">{item.title}</h3>
                <p className="text-taupe font-inter">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-10 text-center p-6 bg-wine/5 rounded-xl">
            <p className="font-georgia text-brown text-lg">
              <span className="font-bold">Restored Ogee Curve</span> — the double S-shaped contour seen on a youthful face from the oblique angle. 
              Precisely placed cheek filler restores this curve, which is the clinical goal of every cheek filler treatment at Nexus Clinic KL.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Understand Your Cascade Effect Potential
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Gender-Specific Goals Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Cheek Filler for Men & Women</h2>
            <p className="text-taupe font-inter">Different goals, different technique — personalized approach</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {genderGoals.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className={`rounded-2xl p-6 ${idx === 0 ? 'bg-rose/5 border border-rose/20' : 'bg-wine/5 border border-wine/20'} hover:shadow-xl transition-shadow`}
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">{item.gender}</h3>
                <div className="space-y-3">
                  <div><span className="font-inter font-semibold text-brown">Goal:</span> <span className="text-taupe">{item.goal}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Primary Zone:</span> <span className="text-taupe">{item.zone}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Volume Used:</span> <span className="text-taupe">{item.volume}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Product Choice:</span> <span className="text-taupe">{item.product}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Avoid:</span> <span className="text-taupe">{item.avoid}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Often Combined With:</span> <span className="text-taupe">{item.combine}</span></div>
                  <div><span className="font-inter font-semibold text-brown">Key Outcome:</span> <span className="text-taupe">{item.outcome}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Book a Gender-Specific Cheek Filler Plan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Age Group Table Section */}
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
              { key: "range", header: "Age Group", className: "font-semibold text-brown" },
              { key: "concern", header: "Primary Concern" },
              { key: "approach", header: "Treatment Approach" },
            ]}
            data={ageGroups.map(group => ({
              range: group.range,
              concern: group.concern,
              approach: group.approach,
            }))}
            title="Cheek Filler by Age Group"
            subtitle="Understanding how your needs change at every decade"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-8 p-5 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter">
              Patients wanting to address under-eye hollowing alongside their cheek concerns often combine treatment with <Link href="/face/tear-trough-filler-malaysia/" className="font-bold text-wine">tear trough filler </Link> at Nexus Clinic KL for a complete midface result.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Find Out the Right Approach
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Filler Products Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Filler Products Used for Cheek Augmentation</h2>
            <p className="text-taupe font-inter">Premium, medical-grade choices for optimal results</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {fillerProducts.map((product, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/20 hover:shadow-lg transition-shadow">
                <h3 className="font-georgia text-xl text-brown mb-2">{product.name}</h3>
                <p className="text-taupe font-inter text-sm mb-3">{product.description}</p>
                <div className="flex flex-wrap justify-between items-center text-sm gap-2">
                  <span className="font-inter font-semibold text-wine">⏱️ {product.longevity}</span>
                  <span className="font-inter text-brown text-xs">✓ {product.bestFor}</span>
                </div>
                {product.citation && (
                  <p className="text-xs text-taupe mt-2 italic">[{product.citation}]</p>
                )}
              </motion.div>
            ))}
          </div>
          
            <motion.div variants={fadeInUp} className="mt-8 p-4 bg-wine/5 rounded-xl text-center">
              <p className="text-brown font-inter text-sm">
                According to the  <a 
                  href="https://www.isaps.org/discover/about-isaps/global-statistics/reports-and-press-releases/global-statistics-2024/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer"
                  className="font-bold hover:text-underline text-wine"> International Society of Aesthetic Plastic Surgery 2024 </a>
                 Global Statistics Report, cheek and midface augmentation 
                was the second most performed non-surgical facial filler procedure in Southeast Asia, with a 32% year-on-year increase. 
              </p>
              <p className="text-taupe text-xs mt-2">ISAPS Global Statistics Report 2024</p>
            </motion.div>

          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Ask About the Right Product for Your Cheeks
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Cheek Filler Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — safe, precise, and personalized</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Full Facial & Midface Assessment", desc: "Doctor evaluates cheeks in context of entire face, bone structure, fat pad position, and aesthetic goals." },
              { step: "2", title: "Product, Volume & Placement Confirmation", desc: "Exact product, total volume per side, and placement points are confirmed. Most patients receive 1-2ml per side initially." },
              { step: "3", title: "Numbing & Precise Injection", desc: "Topical numbing + built-in lidocaine. Filler placed using blunt cannula via single entry point per side. 20-40 minutes." },
              { step: "4", title: "Symmetry Review & Aftercare", desc: "Results reviewed from all angles. Full aftercare provided. Two-week follow-up scheduled for final assessment." },
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
            <Link className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2"
              href="/contact-us/">
              Book Your Cheek Filler Appointment
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
        <section className="py-20 px-4 bg-cream">
          <div className="container mx-auto max-w-4xl">
            <TableForPages
              columns={[
                { key: "treatment", header: "Treatment" },
                { key: "volume", header: "Typical Volume" },
                { key: "price", header: "Price Range (2026)" },
              ]}
              data={pricingTiers.map(tier => ({
                treatment: tier.treatment,
                volume: tier.volume,
                price: tier.price,
              }))}
              title="Cheek Filler Price in Malaysia"
              subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
              variant="compact"
              fadeInUp={fadeInUp}
            />
          </div>
        </section>

          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="font-georgia text-xl text-brown mb-3">What Affects Cheek Filler Price in Kuala Lumpur</h3>
            <ul className="space-y-2">
              {priceFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <span className="text-wine">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-center text-sm text-taupe mt-6 italic">
            For patients wanting a full overview of all filler treatments and pricing at the clinic, our <Link href="/face/dermal-filler-malaysia/" className="font-bold text-wine" >dermal filler Malaysia </Link> page covers every treatment area.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Get Your Personalised Cheek Filler Quote
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">What to expect and how to care for your results</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {sideEffects.common.map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
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
                {sideEffects.rare.map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <span className="text-wine text-lg">⚠️</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
              <p className="text-center py-4">Patients who combine cheek filler with skin quality improvement often explore 
               <Link href="/face/skin-booster-malaysia/" className="font-bold text-wine"> skin booster treatment in KL </Link>
                at Nexus Clinic to address both structure and skin quality in the midface.</p>
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
              Book Cheek Filler in Malaysia at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Your cheeks do more for your face than most patients realise. Restoring their structure lifts the eyes, 
              softens smile lines, and resets the balance of your entire face.
            </p>
            <p className="text-cream/90 font-inter">
              One consultation at Nexus Clinic KL is enough to understand exactly what cheek filler can achieve for your specific anatomy.
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
                message="Hi, I'd like to book a free consultation for cheek filler at Nexus Clinic KL. Please let me know available slots."
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