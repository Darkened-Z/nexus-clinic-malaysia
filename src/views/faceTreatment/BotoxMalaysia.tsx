"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Whatsapp from "@/src/components/Whatsapp";
import {
  ChevronRight,
  Shield,
  Activity,
  AlertCircle,
  Sparkles,
  Droplets,
  Calendar,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";

// Complete FAQ data with all questions from content
const faqData = [
  {
    q: "How long does Botox last in Malaysia?",
    a: "Botox typically lasts 3 to 5 months for most patients in Malaysia. Jaw slimming Botox lasts 4 to 6 months. Hyperhidrosis Botox can last 6 to 12 months. First-time patients often find results last slightly shorter, around 2 to 3 months, as the muscle is not yet accustomed to the treatment. With regular maintenance, results often extend toward the longer end of the range over time.",
  },
  {
    q: "How much does Botox cost in Malaysia in 2026?",
    a: "Botox in Malaysia typically ranges from RM 588 to RM 800 per area for common treatments such as forehead lines, frown lines and crow's feet. Treatments involving multiple areas usually range from RM 1500 to RM 2160, while jaw slimming Botox typically ranges from RM 1500 to RM 2400 depending on the muscle strength and dosage required. Full face anti-wrinkle treatments can range from RM 1800 to RM 3000+. All pricing at Nexus Clinic KL is confirmed during consultation to ensure the most suitable treatment plan.",
  },
  {
    q: "Is Botox safe in Malaysia?",
    a: "Botox is one of the most extensively studied medical treatments in the world and has an excellent safety record when administered by a licensed medical doctor in a clinical setting. In Malaysia, Botox and other botulinum toxin products must be prescribed and administered by a doctor registered with the Ministry of Health. At Nexus Clinic KL, all treatments are performed by licensed aesthetic doctors following evidence-based protocols.",
  },
  {
    q: "What is the right age to start Botox in Malaysia?",
    a: "There is no fixed correct age. Patients in their mid to late 20s often start with preventive or baby Botox to delay the formation of permanent lines. Patients in their 30s typically address established dynamic lines. The right time to start is when the concern is visible and the patient is ready, not at a specific birthday. A consultation at Nexus Clinic KL helps determine whether Botox is the appropriate intervention based on your current skin and muscle condition.",
  },
  {
    q: "Does Botox look natural when used for reducing wrinkles?",
    a: "With the correct dose and technique, Botox produces a result that looks refreshed and natural rather than frozen or expressionless. The frozen look is caused by overdosing, particularly in the forehead. At Nexus Clinic KL, the approach is conservative: enough Botox to relax the target muscle and smooth the line, while preserving enough movement for natural expression. Touch-up appointments at two weeks ensure any minor adjustments are made before the result is finalised.",
  },
  {
    q: "Can Botox be combined with filler at the same appointment?",
    a: "Yes, combining Botox and filler in the same session is a common and efficient approach. Botox addresses dynamic lines caused by muscle movement. Filler addresses static concerns like volume loss, hollowing and structural correction. The two treatments work in complementary ways and treating both on the same day does not increase risk. Your doctor will plan the order and placement of each treatment at consultation.",
  },
  {
    q: "How painful is Botox?",
    a: "Most patients describe the sensation as a brief, very mild sting or pinch at each injection point. The needles used for Botox are extremely fine. No numbing cream is required for most areas, though it can be applied on request for sensitive patients or lip flip treatments. The full treatment for most areas takes under 10 minutes once started.",
  },
  {
    q: "Can Botox treat hyperhidrosis in Malaysia?",
    a: "Yes. Botox is one of the most effective treatments for hyperhidrosis, or excessive sweating, in Malaysia. It is injected into the skin of the underarms, palms or feet and works by blocking the nerve signals that activate sweat glands in the area. Results typically last 6 to 12 months, significantly longer than for facial Botox. The treatment is covered by some health insurance plans in Malaysia for medically diagnosed hyperhidrosis.",
  },
  {
    q: "Who should not get Botox?",
    a: "Botox is not suitable for patients who are pregnant or breastfeeding, have a known allergy to botulinum toxin or any of its ingredients, have a neuromuscular disorder such as myasthenia gravis or Lambert-Eaton syndrome, or have an active infection at the injection site. Patients taking certain medications including aminoglycoside antibiotics should inform their doctor before treatment as these can enhance the effect of botulinum toxin.",
  },
  {
    q: "What is the difference between Botox and dermal filler?",
    a: "Botox and dermal filler are completely different treatments that address different concerns. Botox relaxes muscles to smooth expression lines. It does not add volume. Dermal filler is an injectable gel that adds volume, restores lost structure and reshapes facial contours. Botox treats dynamic wrinkles caused by muscle movement. Filler treats static volume-related concerns. Many patients benefit from both treatments, and they are often combined in a single treatment session for a more complete facial rejuvenation result.",
  },
];

const BotoxMalaysia = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "face/botoxMalaysia");

  
  return (
    <div className="min-h-screen bg-light font-inter overflow-x-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge="Nexus Clinic Kuala Lumpur"
        title="Top Botox Treatment in Malaysia for Natural,"
        highlight="Refreshed Results Without the Frozen Look"
        description="A forehead that looks tense before you even speak. Crow's feet that deepen every year. Frown lines that make you look more serious or tired than you feel. These are not personality traits. They are muscle habits. And they respond precisely to Botox."
        details="Botox at Nexus Clinic Kuala Lumpur is about one outcome: a face that looks like yours, but rested, smoother and more relaxed. Not frozen. Not blank. Just you, without the tension that builds over years of expression. We have been delivering Botox treatment in Malaysia since 2001, and our approach has always been the same: precise dosing, honest consultation and results that hold up in real life, not just right after the appointment."
        note="Botox results vary by individual. Always consult with a licensed medical professional for proper assessment and dosing."
        image="/images/face/botox-malaysia.jpeg"
        imageAlt="Botox treatment at Nexus Clinic Kuala Lumpur"
        ctaText="Book Free Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I want to know more about your services"
        floatingTitle="✨ Botox Treatment"
        floatingSubtitle="Natural results • No frozen look"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* How Botox Works Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-cream to-light p-8 md:p-12 rounded-3xl border border-taupe/20"
          >
            <h2 className="font-georgia text-3xl text-brown mb-6">
              How Botox Relaxes Muscles and Smooths Expression Lines
            </h2>
            <p className="text-lg text-brown/80 leading-relaxed mb-4">
              Botox is the brand name for onabotulinumtoxinA, a purified form of botulinum toxin type A. When injected in precise, small doses, it temporarily blocks the nerve signals that tell a specific muscle to contract. The muscle relaxes. The skin above it smooths out. The lines that formed through years of that muscle moving reduce or disappear.
            </p>
            <p className="text-lg text-brown/80 leading-relaxed mb-4">
              The key word is temporary. Nerve signals slowly return over 3 to 6 months as the toxin is metabolised. This is what makes Botox one of the safest and most widely used cosmetic treatments in the world. If you do not like the result, it fades. If you love the result, you maintain it with a treatment every 3 to 5 months.
            </p>
            <p className="text-lg text-brown/80 leading-relaxed mb-4">
              Botox only treats dynamic wrinkles, meaning lines caused by muscle movement. Frown lines, forehead creases, crow's feet, and bunny lines on the nose all form because the same muscles contract in the same way thousands of times per day for years. Botox interrupts that cycle. Static wrinkles, meaning lines that are visible at rest due to collagen loss and skin thinning, require a different approach.
            </p>
              <p className="text-taupe text-xs">
                According to the <Link href='https://www.isaps.org/medical-professionals/isaps-global-statistics/' rel='nofollow' target='_blank' className='text-taupe hover:underline font-bold'>International Society of Aesthetic Plastic Surgery 2024 Global Statistics Report</Link>, botulinum toxin injections ranked as the single most performed non-surgical cosmetic procedure worldwide for the seventh consecutive year, with Southeast Asia recording a 29% year-on-year growth in procedure volume among patients aged 25 to 45.
              </p>
            <div className="flex justify-center mt-6">
              <motion.a
                href="/contact-us/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Your Botox Assessment
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <div className="w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/face/Botox Treatment Area.webp"
            alt="Botox Treatment Areas Diagram"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          <p className="text-center text-taupe text-sm mt-4">
            Common Botox treatment areas: forehead lines, frown lines, crow's feet, and more
          </p>
        </div>
      </div>
      {/* Dynamic vs Static Wrinkles Table */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
            <TableForPages
              columns={[
                { key: "type", header: "Wrinkle Type", className: "font-semibold" },
                { key: "cause", header: "What Causes It" },
                { key: "treatment", header: "Correct Treatment" },
              ]}
              data={[
                { type: "Dynamic wrinkles", cause: "Muscle movement. Visible when you smile, frown or squint", treatment: "Botox. Relaxes the muscle and prevents the skin from creasing" },
                { type: "Static wrinkles", cause: "Collagen loss, volume depletion, gravity over time. Visible at rest", treatment: "Dermal filler, skin booster or laser. Botox alone will not fix these" },
                { type: "Mixed wrinkles", cause: "Started as dynamic, now present at rest due to skin thinning", treatment: "Botox combined with filler or skin rejuvenation" },
                { type: "Forehead lines", cause: "Frontalis muscle overactivity", treatment: "Botox. One of the most commonly treated areas in Malaysia" },
                { type: "Crow's feet", cause: "Orbicularis oculi muscle contraction around the eye", treatment: "Botox. High patient satisfaction, very natural result" },
                { type: "Frown lines (11 lines)", cause: "Corrugator and procerus muscle movement between brows", treatment: "Botox. Often the first area treated in Malaysia" },
                { type: "Gummy smile", cause: "Overactive upper lip elevator muscle", treatment: "Botox. Small dose with significant visual impact" },
                { type: "Nasolabial folds", cause: "Volume loss and skin descent over time", treatment: "Dermal filler. Botox does not address this concern" },
                { type: "Marionette lines", cause: "Volume loss and soft tissue descent", treatment: "Dermal filler. Botox not effective here" },
                { type: "Deep static forehead lines", cause: "Long-term collagen loss compounded by muscle activity", treatment: "Botox plus skin booster or filler for best combined result" },
              ]}
              title=" Dynamic Wrinkles Versus Static Wrinkles | Which Type Botox Treats"
              subtitle="The most common misconception about Botox in Malaysia is that it treats all wrinkles. It does not. Understanding the difference between dynamic and static wrinkles helps you choose the right treatment and set realistic expectations before your appointment."
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

          <motion.p variants={fadeInUp} className="text-brown/80 mt-6">
            At Nexus Clinic KL, the doctor identifies which wrinkle type you have at consultation before recommending any treatment. Patients who book expecting Botox to fix volume-related concerns leave with a clearer understanding of which treatment actually addresses their concern and a plan that achieves the result they came in for.
 
            Patients with static facial lines or volume-related concerns alongside their dynamic wrinkles often benefit from combining Botox with <Link  href='/face/dermal-filler-malaysia/' className='font-bold text-wine italic'>dermal filler treatment</Link> at Nexus Clinic KL.
          </motion.p>

          <div className="flex justify-center mt-6">
            <motion.a
                href="/contact-us/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Get the Right Treatment
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Four Types of Botox Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-4"
          >
            Four Types of Botox Treatment Available at Nexus Clinic KL
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-8">
            Not all Botox is the same. The type of Botox technique used affects how natural the result looks, how expressive the face remains and what concerns the treatment addresses. Nexus Clinic KL offers all four approaches below, selected based on your concern, your age and your goals.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-cream p-6 rounded-2xl">
              <Activity className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">Standard Botox</h3>
              <p className="text-taupe text-sm mb-3">Full dose into targeted muscles. Relaxes movement significantly</p>
              <p className="text-brown/80 text-sm">Best for established forehead lines, deep frown lines, crow's feet</p>
              <p className="text-wine text-sm font-medium mt-3">3 to 5 months</p>
            </div>
            <div className="bg-cream p-6 rounded-2xl">
              <Sparkles className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">Baby Botox</h3>
              <p className="text-taupe text-sm mb-3">Lower dose, softer muscle relaxation, expression preserved</p>
              <p className="text-brown/80 text-sm">Best for first-timers, patients wanting subtle results, prejuvenation</p>
              <p className="text-wine text-sm font-medium mt-3">2 to 4 months</p>
            </div>
            <div className="bg-cream p-6 rounded-2xl">
              <Droplets className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">Mesobotox</h3>
              <p className="text-taupe text-sm mb-3">Highly diluted Botox injected into the skin surface, not deep muscle</p>
              <p className="text-brown/80 text-sm">Best for pore reduction, oil control, glass skin effect, fine surface lines</p>
              <p className="text-wine text-sm font-medium mt-3">2 to 4 months</p>
            </div>
            <div className="bg-cream p-6 rounded-2xl">
              <Shield className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">Preventive Botox</h3>
              <p className="text-taupe text-sm mb-3">Strategic low-dose treatment before lines form permanently</p>
              <p className="text-brown/80 text-sm">Best for patients in mid to late 20s or early 30s preventing line formation</p>
              <p className="text-wine text-sm font-medium mt-3">3 to 4 months</p>
            </div>
          </div>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            Baby Botox and preventive Botox have become the fastest-growing categories among patients aged 25 to 38 in Malaysia. The principle is the same as dental care. It is significantly easier to maintain a healthy baseline than to reverse years of unchecked muscle overactivity. A lower dose, started earlier, produces results that look naturally effortless because the skin has never been allowed to form deep, settled lines.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown/80">
            Mesobotox is a distinct technique where very diluted botulinum toxin is microinjected into the dermal layer of the skin rather than the muscle below. The effect is a refined skin texture, reduced pore size and controlled oil production with no visible reduction in facial movement. It is particularly popular among patients with oily or combination skin who want a glass skin result without any change to their expressions.
          </motion.p>

          <div className="flex justify-center mt-6">
            <motion.a
              href="/contact-us/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Find Out Which Botox Type Suits You
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Botox Treatment Areas - Detailed */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8"
          >
            Botox Treatment Areas at Nexus Clinic Kuala Lumpur
          </motion.h2>

          <div className="space-y-8">
            <div><h3 className="font-georgia text-xl text-wine mb-2">Forehead Lines</h3><p className="text-brown/80">Horizontal lines across the forehead caused by the frontalis muscle lifting the brows. One of the most requested Botox treatment areas in Malaysia. Treated with a controlled dose that relaxes the muscle without dropping the brows.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Frown Lines and Glabellar Lines</h3><p className="text-brown/80">The vertical lines between the eyebrows, sometimes called the 11 lines or anger lines, caused by the corrugator and procerus muscles. One of the highest-impact areas because these lines make patients look permanently tired or frustrated.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Crow's Feet</h3><p className="text-brown/80">Fine lines that fan outward from the outer corners of the eyes during smiling and squinting. Treated with small, precise doses along the orbicularis oculi muscle. Results look very natural because the eye area retains full movement.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Brow Lift</h3><p className="text-brown/80">Strategic Botox placement depresses the muscles that pull the brows downward, allowing the brow elevator muscle to lift unopposed. Creates a subtle arch and opens the eye area without surgery. Typically 2 to 4 units per side.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Bunny Lines</h3><p className="text-brown/80">Diagonal lines across the upper nose bridge caused by the nasalis muscle scrunching. Often appear or worsen after forehead Botox when the nasalis compensates. Treated with small doses on either side of the nose.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Gummy Smile</h3><p className="text-brown/80">A gummy smile occurs when the upper lip elevator muscles pull the lip too far upward on smiling, exposing more gum than desired. A very small dose of Botox into the elevator muscles reduces the lift and creates a more balanced smile with immediate effect.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Jaw Slimming and Masseter Reduction</h3>
            <p className="text-brown/80">
             Botox into the masseter muscles reduces their bulk over 4 to 6 weeks, slimming a wide or square lower face caused by muscle overdevelopment. Popular among women seeking a V-line result and men wanting to soften a heavy lower face. Results last 4 to 6 months. Frequently combined with chin filler for complete lower face reshaping.Patients 
              combining jaw Botox with lower face contouring often explore <Link  href='/face/chin-filler-malaysia/' className='font-bold text-wine italic'>chin filler in Malaysia </Link> to complete the V-shape result at Nexus Clinic KL.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Neck Bands and Platysmal Bands</h3><p className="text-brown/80">Vertical neck bands caused by the platysma muscle tightening with age. Botox relaxes the muscle, softening the bands and improving the neck-jaw profile. Sometimes called a Nefertiti lift when combined with jawline placement.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Hyperhidrosis</h3><p className="text-brown/80">Botox is highly effective for excessive sweating in the underarms, palms and feet. It blocks the nerve signals that activate sweat glands in the treated area. Results last 6 to 12 months, longer than any other Botox indication.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Lip Flip</h3><p className="text-brown/80">A small dose of Botox placed above the upper lip relaxes the orbicularis oris muscle, causing the upper lip to curl slightly outward. Creates the appearance of a fuller upper lip without adding filler volume.</p></div>

            <p>Patients considering a lip flip alongside lip volume often explore <Link href='/face/lip-filler-malaysia/' className='font-bold text-wine italic'>lip filler in Kuala Lumpur </Link> for a combined result at Nexus Clinic KL.</p>
          </div>

          <div className="flex justify-center mt-8">
            <motion.a
              href="/contact-us/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Your Treatment Area Assessment
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Botox Brands */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
            <TableForPages
              columns={[
                { key: "brand", header: "Brand", className: "font-semibold" },
                { key: "manufacturer", header: "Manufacturer" },
                { key: "unitSystem", header: "Unit System" },
                { key: "diffusion", header: "Diffusion" },
                { key: "notes", header: "Notes" },
              ]}
              data={[
                { brand: "Botox", manufacturer: "Allergan / AbbVie", unitSystem: "Allergan units", diffusion: "Lower. More localised", notes: "Most studied brand globally. Standard in Malaysia" },
                { brand: "Dysport", manufacturer: "Ipsen", unitSystem: "Speywood units", diffusion: "Slightly wider spread", notes: "Often used for forehead and larger muscle groups" },
                { brand: "Xeomin", manufacturer: "Merz", unitSystem: "Allergan-equivalent", diffusion: "Similar to Botox", notes: "Contains no complexing proteins. Lower immunogenicity" },
                { brand: "Letybo", manufacturer: "Hugel (Korea)", unitSystem: "Allergan-equivalent", diffusion: "Similar to Botox", notes: "Fast-growing in Malaysia. Comparable safety profile" },
              ]}
              title="Botox Brands Available at Nexus Clinic KL | Not All Neuromodulators Are Identical"
              subtitle=" Botox is a brand name, not a generic term. Several botulinum toxin type A products are available in Malaysia and each has a slightly different molecular structure, unit dosing system and diffusion profile."
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

          <motion.p variants={fadeInUp} className="text-brown/80 italic">
            Allergan/AbbVie Malaysia reported in 2023 that Botox remains the most prescribed neuromodulator brand in Malaysia for both cosmetic and medical indications. Dysport is the second most used, primarily for forehead and masseter treatments.
          </motion.p>

          <div className="flex justify-center mt-6">
            <motion.a
              href="/contact-us/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Ask About Botox Brands
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* What Botox Cannot Fix */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            What Botox Cannot Fix | An Honest Guide
          </motion.h2>
          <div className="space-y-4">
            {[
              "Botox does not add volume. If the concern is hollow cheeks, thin lips, or under-eye hollowing, filler is the right treatment.",
              "Botox does not tighten loose skin. Sagging jowls or loose neck skin require HIFU or thread lift.",
              "Botox does not remove static wrinkles that are present at rest.",
              "Botox does not change bone structure. Jaw slimming reduces muscle bulk, not bone width.",
              "Botox does not last forever. Results fade in 3 to 6 months.",
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Botox for Men */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Botox for Men in Malaysia | A Different Approach
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-6">
            Botox for male patients in Malaysia is growing at a faster rate than any other demographic. The goals are different and so is the technique.
          </motion.p>

          <div className="bg-cream p-6 rounded-xl space-y-3">
            <p className="text-brown">• Forehead treatment in men typically requires 15 to 25 units versus 8 to 15 units in women</p>
            <p className="text-brown">• Masseter Botox in men is approached conservatively to avoid over-feminising the lower face</p>
            <p className="text-brown">• Brow shaping for men avoids arch creation, instead maintaining a flat masculine brow position</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.a
              href="/contact-us/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Male Botox Consultation
            </motion.a>
            <Whatsapp message="Hi, I want to know more about your services" />
          </div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <section className="py-20 px-4 bg-cream">
            <div className="container mx-auto max-w-4xl">
              <TableForPages
                columns={[
                  { key: "area", header: "Treatment Area" },
                  { key: "price", header: "Price Range (2026)" },
                ]}
                data={[
                  { area: "Single area (forehead, frown lines, crow's feet)", price: "RM 588 to RM 800" },
                  { area: "Multiple areas (2 to 3 areas)", price: "RM 1500 to RM 2160" },
                  { area: "Jaw slimming (masseter)", price: "RM 1500 to RM 2400" },
                  { area: "Full face anti-wrinkle plan", price: "RM 1800 to RM 3000+" },
                ]}
                title=" Botox Cost in Malaysia | Transparent 2026 Pricing"
                subtitle="Transparent 2026 Pricing at Nexus Clinic KL"
                variant="compact"
                fadeInUp={fadeInUp}
              />
            </div>
          </section>

          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-3">What Affects the Pricing?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">Number of units required: Men generally need more units</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">Brand used: Botox is priced slightly higher than Dysport</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">Area complexity: Jaw slimming and hyperhidrosis require more units</span></li>
            </ul>
          </motion.div>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact-us/"
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Get Personalised Quote
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Side Effects and Aftercare */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Botox Side Effects and Aftercare
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">Common Temporary Effects</h3>
              <ul className="space-y-2 text-taupe">
                <li>• Mild redness, tenderness or swelling at injection sites</li>
                <li>• Small pinpoint bruising at needle entry points</li>
                <li>• Feeling of heaviness or tightness in the treated muscle</li>
                <li>• Mild headache immediately after treatment</li>
              </ul>
            </div>
            <div className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">Aftercare Instructions</h3>
              <ul className="space-y-2 text-taupe">
                <li>• Do not rub, press or massage the treated area for 4 hours</li>
                <li>• Stay upright for 4 hours. Avoid lying face-down</li>
                <li>• Skip intense exercise for 24 hours</li>
                <li>• Avoid saunas, steam rooms for 48 hours</li>
                <li>• Assess your full result at 14 days</li>
              </ul>
              <p>Patients who combine Botox with skin quality treatments often explore 
                <Link href='/face/skin-booster-malaysia/' className='font-bold text-wine italic'> skin booster in Malaysia </Link> at Nexus Clinic KL for a more complete rejuvenation outcome.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section - Using imported FAQ component */}
      <FAQWithSchema data={faqData} />

      {/* Final CTA */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-br from-wine to-rose"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-white mb-6"
          >
            Book Botox Treatment in Malaysia at Nexus Clinic Kuala Lumpur
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/90 text-lg mb-8">
            Natural-looking Botox results come from one thing: a doctor who understands what you actually need, doses accordingly and checks the result two weeks later. Nexus Clinic KL has been delivering Botox treatment in Malaysia since 2001.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-wine hover:bg-white/90 px-8 py-3 rounded-full font-medium shadow-lg flex items-center gap-2"
              href="/contact-us/"
            >
              <Calendar className="w-4 h-4" />
              Free Consultation
            </motion.a>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-white/70 text-sm mt-6">
            Limited slots available this week
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default BotoxMalaysia;