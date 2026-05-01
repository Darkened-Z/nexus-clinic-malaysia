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
  AlertTriangle,
  Droplet,
  Scissors,
  Sun,
  Palette,
  Layers,
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
interface LaserTattooRemovalProps {
  locale: string;
}

export default function TattooRemovalLanding({ locale }: LaserTattooRemovalProps) {
  const inkColourData = [
    { colour: "Black Ink", challenge: "Black tattoo ink absorbs laser energy across all wavelengths; the easiest colour to break down", wavelength: "1064nm Nd:YAG (safest for darker Malaysian skin); 755nm alexandrite for lighter skin tones", response: "Fastest response of all tattoo ink colours; visible fading often apparent from session 2 or 3", sessions: "4 to 8 sessions for professional black ink tattoo; 3 to 5 for amateur black" },
    { colour: "Dark Blue and Navy Ink", challenge: "Dark blue tattoo ink responds similarly to black ink; absorbs well at 1064nm; a very common colour in Malaysian tattoos", wavelength: "1064nm Nd:YAG primary; 755nm alexandrite alternative on lighter skin", response: "Very good response; dark blue ink is among the easier colours for the laser to break down", sessions: "5 to 9 sessions for professional dark blue ink tattoo" },
    { colour: "Green and Teal Ink", challenge: "Green and teal tattoo ink is notoriously resistant to Q-switched laser technology; one of the most difficult colours to remove completely", wavelength: "532nm KTP or frequency-doubled Nd:YAG for green; 755nm alexandrite for teal variants", response: "Moderate to good response with pico laser technology; significantly better than Q-switch laser alone", sessions: "7 to 12 sessions for green ink" },
    { colour: "Red and Orange Ink", challenge: "Red tattoo ink absorbs green-wavelength laser light; requires a different wavelength from black ink", wavelength: "532nm KTP laser (green-wavelength laser light that red ink absorbs)", response: "Good response to pico laser treatment with correct wavelength; visible fading from session 3 to 5", sessions: "6 to 10 sessions for red and orange ink tattoo" },
    { colour: "Yellow and Light Green Ink", challenge: "Yellow tattoo ink is among the most challenging of all tattoo ink colours; standard laser wavelengths are not efficiently absorbed by yellow pigment", wavelength: "Yellow laser (589nm or similar specific wavelength); required for yellow ink removal", response: "Slowest response of all tattoo ink colours; requires the most sessions and may not achieve complete removal", sessions: "8 to 14+ sessions for yellow ink tattoo" },
  ];

  const comparisonData = [
    { factor: "How the Laser Works", pico: "Advanced picosecond laser technology delivers picosecond laser pulses in trillionths of a second; works via a photoacoustic (pressure-based) effect that shatters ink particles into microscopic dust", qswitch: "Q-switched laser delivers laser pulses in nanoseconds (one billionth of a second); works primarily via a photothermal (heat-based) effect", recommendation: "Pico laser is the gold standard advanced laser technology for tattoo removal treatment in Malaysia" },
    { factor: "Ink Colour Range", pico: "Pico laser technology can remove a wider range of tattoo ink colours including stubborn blues, greens and reds that respond poorly to Q-switch laser", qswitch: "Q-switched laser is most effective for black and dark blue tattoo ink; less effective for green, teal and yellow ink", recommendation: "For any tattoo containing green, yellow, red or mixed ink colours, pico laser treatment is strongly recommended" },
    { factor: "PIH and Scar Risk for Malaysian Skin", pico: "Pico laser benefits significantly for darker skin tones; works via pressure rather than heat, risk of changes in skin pigmentation is significantly lower", qswitch: "Q-switched laser carries a higher risk of changes in skin pigmentation (PIH) on darker skin tones because of its heat-based mechanism", recommendation: "For Malaysian patients with darker skin tones (Fitzpatrick III to V), pico laser technology is preferred" },
    { factor: "Number of Sessions Required", pico: "Advanced pico laser technology typically requires fewer sessions for complete removal because each pulse shatters ink particles into much smaller fragments", qswitch: "Q-switched laser requires more sessions for the same degree of ink clearance; larger ink fragments take longer to clear", recommendation: "Pico laser sessions are more productive per session; total number of sessions for complete removal is typically lower" },
  ];

  const kirbyDesaiFactors = [
    { factor: "Fitzpatrick Skin Type", description: "Lighter skin types allow higher laser energy to be safely delivered per session; darker skin tones (Fitzpatrick III to V, which includes the majority of Malaysian patients) require more conservative laser settings", implication: "At Nexus Clinic KL, Fitzpatrick skin type is assessed at the initial consultation and directly determines which laser system and what settings are used" },
    { factor: "Tattoo Size", description: "A larger tattoo contains more ink particles in the skin across more layers of skin and a wider surface area; each laser session can only treat the tattoo area and deliver a finite amount of laser energy", implication: "Tattoo size is measured at consultation and used to provide the pico laser tattoo removal cost estimate and the realistic number of sessions required" },
    { factor: "Tattoo Age", description: "Older tattoos have typically already experienced some fading as the body's immune system gradually clears smaller ink particles over the years", implication: "Patients presenting with tattoos over 10 years old typically receive a lower session count estimate than those with fresh ink" },
    { factor: "Ink Colour and Complexity", description: "Different tattoo ink colours require different laser wavelengths; a tattoo with multiple colours including green, yellow and red requires more laser technologies and more sessions", implication: "A multi-colour tattoo is assessed colour by colour at the initial consultation; presence of yellow or light green ink significantly increases the session estimate" },
    { factor: "Location on the Body", description: "Tattoos on areas with high lymphatic drainage and good blood circulation (chest, upper back, upper arm) clear faster than tattoos on extremities (hands, feet, ankles)", implication: "Patients with tattoos on the hands, feet or lower legs are advised of the slower clearance rate from these locations" },
    { factor: "Cover-Up Tattoos", description: "A cover-up tattoo sits on top of an old tattoo; the laser must penetrate through all the layers of skin containing the newer tattoo ink before it can reach and break down the older ink beneath", implication: "Patients presenting with a cover-up tattoo receive a specific session estimate that accounts for the layered ink structure" },
  ];

  const pricingTiers = [
    { treatment: "Initial Tattoo Removal Consultation", details: "Clinical assessment of tattoo size, ink colours, tattoo age, skin type and Fitzpatrick classification; session count estimate using Kirby-Desai factors", price: "Complimentary" },
    { treatment: "Pico Laser Tattoo Removal (Small Tattoo, up to 5cm)", details: "Advanced pico laser treatment; StarWalker PQX picosecond laser technology; includes numbing cream application", price: "RM 400 to RM 800 per session" },
    { treatment: "Pico Laser Tattoo Removal (Medium Tattoo, 5 to 15cm)", details: "Advanced picosecond laser technology for medium tattoos; includes numbing cream, cooling and post-session skin care", price: "RM 800 to RM 1,500 per session" },
    { treatment: "Pico Laser Tattoo Removal (Large Tattoo, over 15cm)", details: "Large tattoo laser removal session using pico laser technology; may be divided into treatment zones", price: "RM 1,500 to RM 2,500 per session" },
    { treatment: "Q-Switch Laser Tattoo Removal (per session)", details: "Nanosecond laser removal session for fresh dense tattoos or as a preparatory laser treatment", price: "RM 300 to RM 700 per session" },
    { treatment: "Combination Laser Tattoo Removal Programme (6 sessions)", details: "Programme combining Q-switch and pico laser technologies across 6 sessions; recommended for complex multi-colour tattoos", price: "From RM 3,500 (programme pricing available)" },
  ];

  const aftercareSteps = [
    { step: "Immediate Cooling and Soothing", why: "Immediately after each laser tattoo removal session, the treated area experiences acute inflammation; proper cooling is critical for preventing scar formation", instruction: "Cooling gel and antiseptic healing cream applied immediately after every session; cold compress for 10 to 20 minutes after returning home reduces inflammation" },
    { step: "Blister and Scab Management", why: "Blistering is a common and expected response; improper blister management is the most common cause of scar formation", instruction: "Do not puncture blisters; allow them to resolve naturally over 3 to 5 days; do not pick scabs; scabs should fall off naturally over 7 to 14 days" },
    { step: "SPF50 Sunscreen (Critical for Malaysian Skin)", why: "Malaysia's year-round UV index of 10 to 13 represents a continuous risk; UV exposure on healing skin stimulates melanocytes causing changes in skin pigmentation", instruction: "SPF50 broad-spectrum mineral sunscreen mandatory from the morning after every session throughout the entire treatment course and for 3 months after the final session" },
    { step: "Session Spacing and Skin Healing", why: "Each session triggers a multi-week process of ink clearance; skin needs 6 to 8 weeks between sessions for adequate healing", instruction: "Sessions spaced minimum 6 weeks apart for body tattoos and 8 weeks apart for facial tattoos; progress assessed photographically at each visit" },
  ];

  const faqData = [
    { q: "How does laser tattoo removal work?", a: "Laser tattoo removal works by directing a concentrated beam of laser light into the layers of skin where the tattoo ink particles sit in the dermis. The laser targets the ink particles using selective absorption: different wavelengths of laser light are absorbed by different colours of tattoo ink. When the laser energy is absorbed by the ink particles, the picosecond laser pulses create a photoacoustic (pressure-based) effect that shatters the ink particles into microscopic dust. These tiny ink particles are then cleared by the body's lymphatic system over the following 6 to 8 weeks. This is why sessions for complete removal are spaced 6 to 8 weeks apart rather than done in rapid succession." },
    { q: "Is laser tattoo removal painful?", a: "Most patients describe the sensation of laser tattoo removal as a rubber band snapping against the skin with each laser pulse. The pico laser delivers its pulses extremely rapidly, which means the treatment is over quickly despite the snapping sensation. At Nexus Clinic KL, numbing cream is applied 30 to 45 minutes before every laser tattoo removal session to significantly reduce discomfort. During the session, a cooling device blows cold air onto the area being treated immediately around each laser pulse, both for comfort and to protect the surrounding skin. Tattoos on bony areas (such as the ankle, wrist or collarbone) tend to be more sensitive than tattoos on fleshy areas." },
    { q: "How many sessions does tattoo removal require?", a: "The number of sessions depends on six factors assessed at the initial consultation using the Kirby-Desai framework: the Fitzpatrick skin type, the tattoo size, the tattoo age, the complexity of the tattoo in terms of ink colours, the location of the tattoo on the body and whether it is a cover-up layered tattoo. Small amateur black ink tattoos may clear in 3 to 5 pico laser sessions. Professional black and dark blue tattoos typically require 6 to 9 sessions. Multi-colour tattoos with green, red or yellow ink require 8 to 14 or more sessions. Cover-up tattoos with multiple layers of ink require the most sessions." },
    { q: "Can tattoo removal leave a scar?", a: "When laser tattoo removal is performed correctly using the appropriate laser technology at the right settings for the skin type, with proper session spacing and followed by the correct post-laser skin care, the risk of scar formation is very low. The most common causes of scar formation in tattoo removal in Malaysia are: incorrect laser settings for the skin type producing excess heat; compressed session intervals that do not allow adequate skin healing; improper post-session care including picking scabs or blisters; and poor hygiene allowing infection of the treated area. At Nexus Clinic KL, all of these scar risk factors are addressed through proper skin type assessment, appropriate session spacing, detailed aftercare instructions and a prescribed skin care programme." },
    { q: "What is the difference between pico laser and Q-switch laser for tattoo removal?", a: "Pico laser (picosecond laser technology) delivers picosecond laser pulses in trillionths of a second, which is 100 times faster than Q-switched nanosecond laser pulses. This speed advantage means pico laser breaks down ink particles into much smaller fragments per laser pulse compared to Q-switch, allowing the lymphatic system to clear the ink faster and reducing the number of sessions for complete removal. Pico laser also works primarily through a pressure-based photoacoustic effect rather than a heat-based photothermal effect, which significantly reduces the risk of changes in skin pigmentation in darker Malaysian skin tones. At Nexus Clinic KL, pico laser is the primary laser tattoo removal treatment for most patients, with Q-switch used selectively for specific situations." },
    { q: "Does skin type affect laser tattoo removal?", a: "Yes, significantly. Malaysian patients with Fitzpatrick III to V skin tones have melanin throughout the epidermis that competes with tattoo ink for laser energy absorption. This means the laser cannot be applied at as high an energy level per session on darker skin tones without risking changes in skin pigmentation from epidermal melanin activation. Advanced pico laser technology is the preferred type of tattoo removal laser for darker Malaysian skin because its pressure-based mechanism bypasses much of this epidermal melanin competition and targets the deeper ink particles more selectively. Q-switch laser carries a higher risk of changes in skin pigmentation on darker skin tones and requires more conservative settings, which in turn requires more sessions." },
    { q: "Can all tattoo colours be removed completely?", a: "Not all tattoo colours respond equally to laser tattoo removal treatment. Black and dark blue ink are the easiest colours to remove completely and typically achieve complete removal within the estimated session range. Green and teal ink require specific laser wavelengths and respond more slowly, with complete removal achievable in most cases with the advanced pico laser system. Red and orange ink responds well to 532nm laser wavelength when correctly matched. Yellow tattoo ink is the most challenging colour and requires the yellow laser, a specific wavelength not available in all laser systems; complete removal of dense yellow ink may not be achievable even with advanced pico laser technology. At Nexus Clinic KL, patients with yellow ink in their tattoo are counselled honestly that this colour requires the most sessions and that realistic expectations must be set." },
    { q: "Is laser tattoo removal safe for Malaysian skin?", a: "Laser tattoo removal is safe for Malaysian skin when performed with the appropriate laser technology at settings calibrated for the patient's specific skin type. The advanced pico laser technology used at Nexus Clinic KL is specifically advantageous for Malaysian Fitzpatrick III to V skin because its photoacoustic mechanism minimises the heat deposited in the surrounding skin and epidermal melanin layer, significantly reducing the risk of changes in skin pigmentation and scar formation. The most important safety factors for tattoo removal in Malaysia are: using an advanced pico laser system specifically designed for darker skin tones; proper Fitzpatrick skin type assessment before each session; mandatory SPF50 application throughout the treatment course; and adequate session spacing of 6 to 8 weeks to allow complete skin healing." },
    { q: "How much does tattoo removal cost in Malaysia in 2026?", a: "The cost of tattoo removal in Malaysia at Nexus Clinic KL is calculated based on the tattoo size, the type of tattoo ink colours present and the laser technology required. Small tattoos up to 5cm range from RM 400 to RM 800 per session for pico laser. Medium tattoos 5 to 15cm range from RM 800 to RM 1,500 per session. Large tattoos over 15cm range from RM 1,500 to RM 2,500 per session. Programme pricing for a combination laser tattoo removal course across 6 sessions provides a meaningful per-session reduction. All pricing is disclosed at the free initial consultation before any removal session is booked." },
    { q: "Can I remove a cosmetic tattoo like eyebrow or lip liner?", a: "Yes. Permanent makeup removal including microblading, eyebrow tattoos, eyeliner and lip liner is a common reason people seek laser tattoo removal. Cosmetic tattoos often use specialised inks that may respond differently to laser treatment than body art inks. The same colour-specific wavelength principles apply: black and brown cosmetic inks respond well, while lighter cosmetic inks may require specific wavelengths. At Nexus Clinic KL, cosmetic tattoo removal is assessed individually and the expected outcome is discussed before treatment begins." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-tattoo-removal1.webp",
      after: "/images/B&A-skin/B&A-tattoo-removal1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-tattoo-removal2.webp",
      after: "/images/B&A-skin/B&A-tattoo-removal2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-tattoo-removal3.webp",
      after: "/images/B&A-skin/B&A-tattoo-removal3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Pico Laser Technology • Doctor-Only Treatment"
        title="Laser Tattoo Removal in Malaysia Using"
        highlight="Advanced Pico Laser Technology for All Skin Types"
        description="Tattoo removal in Malaysia has transformed completely. What once required painful dermabrasion or surgical excision is now achievable through advanced pico laser technology."
        details="At Nexus Clinic Kuala Lumpur, we use the StarWalker PQX picosecond laser system with advanced picosecond laser technology and multiple wavelengths including yellow laser capability. Every tattoo is assessed colour by colour before any laser treatment begins, with honest session counts based on actual tattoo complexity."
        note="A single laser system cannot remove all tattoo ink colours with equal effectiveness. The type of tattoo ink colour determines which laser wavelength is required. Yellow ink requires the yellow laser, a specific wavelength not available in standard Q-switch machines."
        image="/images/skin/tattoo-removal.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Laser Tattoo Removal Treatment"
        ctaText="Book Free Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in laser tattoo removal at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Advanced Pico Laser"
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
                    <p className="font-inter font-semibold text-brown text-sm">MOH Approved Devices</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">All laser devices are MOH-approved and FDA-cleared</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Only Treatment</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">LCP-certified doctors perform every session</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in tattoo removal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Pico Discovery Laser Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Multi-wavelength capability including yellow laser</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Safe for all Fitzpatrick skin types III to V</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Laser Tattoo Removal at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Advanced pico laser technology for all tattoo types and skin tones</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, label: "Laser Technology", value: "Pico laser (picosecond) + Q-switch" },
              { icon: Clock, label: "Session Time", value: "10 to 60 minutes depending on size" },
              { icon: Heart, label: "Downtime", value: "Minimal, 1-3 days redness/swelling" },
              { icon: Activity, label: "Session Spacing", value: "6 to 8 weeks apart" },
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
                <p className="font-inter text-sm text-taupe">Type of Tattoo Treated</p>
                <p className="font-georgia text-brown font-semibold">Professional, amateur, cosmetic, cover-up</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Skin Types Treated Safely</p>
                <p className="font-georgia text-brown font-semibold">All skin types including Malaysian Fitzpatrick III to V</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Realistic Outcome</p>
                <p className="font-georgia text-brown">Most tattoos can be significantly faded or completely removed</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">MOH Approved</p>
                <p className="font-georgia text-brown">Yes. All devices MOH-approved and FDA-cleared</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Tattoo Removal | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Tattoo Ink Colour and Laser Wavelength Table */}
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
              { key: "colour", header: "Tattoo Ink Colour", className: "font-semibold text-brown" },
              { key: "challenge", header: "Why This Colour Is Challenging or Easy" },
              { key: "wavelength", header: "Laser Wavelength Required" },
              { key: "response", header: "Expected Response" },
              { key: "sessions", header: "Sessions for Complete Removal" },
            ]}
            data={inkColourData.map(item => ({
              colour: item.colour,
              challenge: item.challenge,
              wavelength: item.wavelength,
              response: item.response,
              sessions: item.sessions,
            }))}
            title="Tattoo Ink Colour and Laser Wavelength"
            subtitle="Why colour determines your removal process"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              The yellow laser row in this table is what distinguishes Nexus Clinic KL from competitor clinics. Yellow tattoo ink is the single most challenging colour to remove. The StarWalker PQX pico laser system includes the capability to address yellow ink, making it one of the most comprehensive laser tattoo removal systems for multi-colour tattoos in Malaysia.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Kirby-Desai Framework Section */}
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
              { key: "factor", header: "Kirby-Desai Factor", className: "font-semibold text-brown" },
              { key: "description", header: "How It Affects the Tattoo Removal Process" },
              { key: "implication", header: "Clinical Implication at Nexus Clinic KL" },
            ]}
            data={kirbyDesaiFactors.map(item => ({
              factor: item.factor,
              description: item.description,
              implication: item.implication,
            }))}
            title="How to Predict Your Session Count"
            subtitle="The Kirby-Desai clinical framework for accurate session estimates"
            variant="default"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              When you attend your free consultation at Nexus Clinic KL, the doctor assesses all six of these factors for your specific tattoo. The result is a session count estimate that is specific to your tattoo rather than a generic range.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pico vs Q-Switch Comparison Table */}
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
                { key: "factor", header: "Comparison Factor", className: "font-semibold text-brown" },
                { key: "pico", header: "Pico Laser (Picosecond Laser Technology)" },
                { key: "qswitch", header: "Q-Switched Nanosecond Laser" },
                { key: "recommendation", header: "Recommendation at Nexus Clinic KL" },
              ]}
              data={comparisonData.map(item => ({
                factor: item.factor,
                pico: item.pico,
                qswitch: item.qswitch,
                recommendation: item.recommendation,
              }))}
              title="Pico Laser vs Q-Switch Laser"
              subtitle="Honest comparison for Malaysian patients"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-12 px-4"
            />
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              For Malaysian patients with Fitzpatrick III to V skin tones, pico laser benefits are particularly significant because the pressure-based photoacoustic mechanism minimises the risk of changes in skin pigmentation that the heat-based Q-switch laser carries.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Post-Tattoo Removal Skin Care Protocol */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Post-Tattoo Removal Skin Care Protocol</h2>
            <p className="text-taupe font-inter">Preventing scar and pigmentation changes in Malaysia's tropical climate</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {aftercareSteps.map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
                <h3 className="font-georgia text-lg text-brown mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-wine" />
                  {step.step}
                </h3>
                <p className="text-taupe font-inter text-sm mb-3"><span className="font-semibold">Why it matters:</span> {step.why}</p>
                <p className="text-brown font-inter text-sm"><span className="font-semibold">Instructions:</span> {step.instruction}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl border-l-4 border-wine">
            <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
              <Sun className="w-4 h-4" />
              Critical for Malaysian Patients
            </p>
            <p className="text-taupe font-inter text-sm mt-1">
              Malaysia's year-round UV index of 10 to 13 means that skin undergoing tattoo removal is continuously exposed to UV that drives changes in skin pigmentation. A patient who attends every removal session but does not apply SPF50 between sessions significantly increases the risk of persistent post-inflammatory hyperpigmentation. At Nexus Clinic KL, SPF50 is prescribed as a mandatory component of the tattoo removal programme.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* The Laser Tattoo Removal Process Steps */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Laser Tattoo Removal Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Clinical Assessment and Treatment Planning", desc: "Doctor assesses tattoo size, colours, age, location, skin type. Kirby-Desai framework applied for honest session count estimate. Written treatment plan provided." },
              { step: "02", title: "Pre-Session Preparation", desc: "Tattoo area must not be tanned or sun-exposed for 4 weeks. Numbing cream applied 30-45 minutes before laser. Protective eyewear worn." },
              { step: "03", title: "Laser Treatment Session", desc: "Pico laser or Q-switch laser applied systematically. Cooling device blows cold air during treatment. Session duration depends on tattoo size." },
              { step: "04", title: "Post-Session Care and Scheduling", desc: "Cooling gel and prescribed skin care applied. Session interval set at 6-8 weeks. Photographic documentation at every session to assess progress." },
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
              Start Your Tattoo Removal Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">Free consultation at Nexus Clinic KL</p>
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
              { key: "details", header: "Details" },
              { key: "price", header: "Price Range (RM) 2026", className: "font-semibold text-wine" },
            ]}
            data={pricingTiers.map(tier => ({
              treatment: tier.treatment,
              details: tier.details,
              price: tier.price,
            }))}
            title="Pico Laser Tattoo Removal Cost in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
            className="py-12 px-4"
          />

          <motion.div variants={fadeInUp} className="text-center mt-4">
            <p className="text-taupe font-inter text-sm italic">
              Programme pricing for a combination laser tattoo removal course across 6 sessions provides a meaningful per-session reduction. All pricing disclosed before the first removal session is booked.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Common Areas Treated Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas We Commonly Treat</h2>
            <p className="text-taupe font-inter">Tattoo removal for all body locations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Forearm and wrist tattoos",
              "Hand and finger tattoos",
              "Chest and shoulder tattoos",
              "Back tattoos",
              "Ankle and foot tattoos",
              "Cosmetic tattoo removal (brow, eyeliner, lip liner)",
              "Neck tattoos",
              "Leg and thigh tattoos",
              "Cover-up tattoos",
            ].map((area, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-4 rounded-xl flex items-center gap-3 border border-taupe/10">
                <CheckCircle className="w-5 h-5 text-wine shrink-0" />
                <span className="text-brown font-inter">{area}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <p className="text-taupe font-inter italic">
              The AAD mentions permanent makeup removal as a common reason people seek laser tattoo removal.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Before After Section - KEPT AS REQUESTED */}
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
              Remove Unwanted Tattoos Safely at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Laser tattoo removal in Malaysia is safe, effective and more predictable than ever with advanced pico laser technology. The key to the best outcome is correct wavelength selection for each ink colour, honest session count expectations, appropriate laser settings for your skin type, and complete aftercare.
            </p>
            <p className="text-cream/90 font-inter">
              Whether you are removing a small tattoo or working through a complex multi-colour cover-up tattoo, the treatment plan at Nexus Clinic KL is built around your specific tattoo, not a generic protocol. Our licensed doctors bring over 15 years of combined clinical experience and have completed over 5,000 procedures.
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
                message="Hi, I'd like to book a free consultation for laser tattoo removal at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
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