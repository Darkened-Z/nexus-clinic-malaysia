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
   Activity,
  TrendingUp,
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
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
interface BeardTransplantProps {
  locale: string;
}

export default function BeardLanding({ locale }: BeardTransplantProps) {
  const beardZoneGuide = [
    { zone: "Full Beard", coverage: "Cheeks, jawline, chin, upper lip, sideburns", grafts: "1,500 to 3,000 grafts", considerations: "Angle and direction must follow natural downward-and-outward growth pattern. Density gradation from border to centre." },
    { zone: "Goatee", coverage: "Chin and lower lip area only", grafts: "500 to 1,000 grafts", considerations: "Precise border definition critical. Downward angle at chin tip. Subtle density graduation at edges." },
    { zone: "Moustache", coverage: "Upper lip area", grafts: "300 to 600 grafts", considerations: "Very fine calibre hairs preferred. Lateral hair must angle outward and slightly downward to follow philtrum." },
    { zone: "Cheek Beard", coverage: "Lateral cheek region above jawline", grafts: "500 to 1,200 grafts", considerations: "Growth is thin in this area naturally. Single-hair grafts for natural sparse coverage pattern at upper border." },
    { zone: "Sideburns", coverage: "Pre-auricular area connecting scalp and beard", grafts: "300 to 800 grafts", considerations: "Must blend seamlessly with existing scalp hair at top and beard hair at bottom. Transition density essential." },
    { zone: "Jawline Definition", coverage: "Lower jaw outline enhancement", grafts: "400 to 900 grafts", considerations: "Sharpens jaw profile without unnatural hard edges. Outward horizontal angle at jaw boundary." },
  ];

  const donorSources = [
    { source: "Back of Scalp (Occipital)", characteristics: "Single to multi-hair grafts, medium calibre, straight to slightly wavy", matchQuality: "Excellent. Most similar to natural beard hair texture.", bestUsed: "Primary donor source for most beard transplant cases. Sufficient for 500 to 2,500 grafts." },
    { source: "Side of Scalp (Temporal)", characteristics: "Finer calibre, naturally single hairs at periphery", matchQuality: "Very Good for moustache and sideburn areas.", bestUsed: "Supplementary source for fine-calibre zones like moustache or upper border of sideburns." },
    { source: "Chest Hair", characteristics: "Coarser, curlier growth cycle, different calibre", matchQuality: "Moderate. Can look unnatural in high-visibility areas.", bestUsed: "Last resort supplement when scalp donor is exhausted. Used for interior beard density only." },
    { source: "Existing Beard Hair", characteristics: "Identical texture and growth cycle to recipient area", matchQuality: "Perfect match for hair loss within existing beard due to scarring.", bestUsed: "Scar camouflage within existing beard where adjacent facial hair is available." },
  ];

  const fueVsDhi = [
    { factor: "Extraction Method", fue: "Individual hair follicles extracted one by one from scalp donor area using punch tool", dhi: "Individual follicles extracted and immediately implanted using patented DHI implanter pen" },
    { factor: "Angle and Direction Control", fue: "Good. Surgeon creates incisions first then places grafts.", dhi: "Superior. Implanter controls angle and direction simultaneously at implantation." },
    { factor: "Graft Survival Rate", fue: "90 to 95% for beard applications", dhi: "95 to 99% due to minimal out-of-body time" },
    { factor: "Best For", fue: "Larger sessions, full beard coverage, cost-effective approach", dhi: "Precision zones: moustache, sideburn borders, goatee definition" },
    { factor: "Recovery", fue: "5 to 7 days visible healing", dhi: "4 to 6 days. Fastest of all beard techniques." },
    { factor: "Cost in Malaysia (per graft)", fue: "RM 8 to RM 12 per hair", dhi: "RM 10 to RM 15 per hair" },
  ];

  const pricingTiers = [
    { package: "Moustache Transplant (FUE)", grafts: "300 to 600 hairs", price: "RM 3,000 to RM 7,200" },
    { package: "Goatee Transplant (FUE)", grafts: "500 to 1,000 grafts", price: "RM 5,000 to RM 12,000" },
    { package: "Sideburn Transplant (FUE)", grafts: "300 to 800 grafts", price: "RM 3,000 to RM 9,600" },
    { package: "Partial Beard (FUE)", grafts: "800 to 1,500 grafts", price: "RM 8,000 to RM 18,000" },
    { package: "Full Beard Transplant (FUE)", grafts: "1,500 to 3,000 grafts", price: "RM 15,000 to RM 36,000" },
    { package: "Full Beard Transplant (DHI)", grafts: "1,500 to 3,000 hairs", price: "RM 18,000 to RM 45,000" },
    { package: "Eyebrow Transplant (FUE)", grafts: "200 to 500 grafts per brow", price: "RM 4,000 to RM 12,000" },
  ];

  const faqData = [
    { q: "Is beard transplant permanent in Malaysia?", a: "Yes. The transplanted hair follicles come from the DHT-resistant donor area at the back of the scalp and are genetically programmed to continue growing for the patient's lifetime. Once the transplanted follicles are established in the beard area, the hair continues to grow naturally and is not subject to the hormonal miniaturisation that causes pattern hair loss. The transplanted hair can be shaved, shaped, and groomed exactly like natural beard hair, and it will regrow at the normal rate after shaving." },
    { q: "How many grafts does a full beard transplant require?", a: "A full beard covering the cheeks, chin, jawline, and moustache area typically requires 1,500 to 3,000 grafts depending on the existing facial hair density and the desired final density of the transplanted beard. Patients with sparse but existing facial hair require fewer grafts because the transplant supplements rather than creates from scratch. Patients with no facial hair across the full beard area need more grafts to create the complete coverage. The doctor will calculate the number of grafts needed at the beard design consultation after assessing the coverage area and density goals." },
    { q: "Can a beard transplant fill in only patchy areas?", a: "Yes, and this is one of the most common beard goals among patients at Nexus Clinic KL. Men with some existing facial hair but uneven or patchy areas can receive a targeted beard transplant that fills in the sparse zones to match the density of the surrounding natural facial hair. This approach requires fewer grafts than a full beard transplant and produces a result that blends seamlessly with the existing facial hair. The design consultation maps the specific patchy areas and plans implantation density to match the surrounding beard texture and direction." },
    { q: "Does beard transplant leave any scars?", a: "Using the FUE technique, the donor area at the back of the scalp develops only tiny circular dot scars at each extraction site. These are not visible under normal hair length and require very close shaving to become noticeable. There are no stitches, no linear scar, and no visible evidence of the donor harvest under everyday hair length. At the beard recipient area, tiny scabs form at each implant site and fall away naturally within seven to ten days, leaving no visible trace of the procedure once healing is complete." },
    { q: "When will my transplanted beard start to grow?", a: "After the initial shock loss of transplanted hair shafts at two to four weeks, the hair follicles enter a dormant phase before new growth begins. New beard hair begins to grow from the transplanted follicles from month three to four, initially appearing as fine, short hairs that gradually thicken. By month six, meaningful coverage is visible. The full result with natural density and length potential is established at month nine to twelve. This timeline mirrors the scalp hair transplant growth timeline and is the same regardless of whether FUE or DHI technique is used." },
    { q: "Can a beard transplant be combined with an eyebrow transplant in the same session?", a: "Yes, and combining beard and eyebrow transplant in a single session is possible when the total graft count is manageable within one session's duration. Both procedures use the same scalp donor area and the same FUE extraction technique. Combined sessions are cost-efficient and reduce total recovery time. However, the implantation of eyebrow grafts requires the most precise angle control of any facial hair transplant zone, so the surgeon must be experienced in eyebrow-specific technique. At Nexus Clinic KL, the clinical team advises on the feasibility of a combined session at the consultation based on the total grafts needed for both areas." },
    { q: "What is the difference between FUE and DHI for beard transplant in Malaysia?", a: "FUE extracts individual hair follicles and implants them into pre-made recipient sites, giving the surgeon good control over direction. DHI uses a patented implanter pen that simultaneously extracts and implants each follicle in a single step, providing superior control over the angle and direction of each hair at the moment of implantation. For beard transplant, the DHI technique is particularly valuable in precision zones like the moustache and sideburn borders where natural growth direction is critical to a natural-looking outcome. FUE is appropriate for larger coverage areas where efficiency and graft count are the primary priorities." },
    { q: "Are beard transplant results natural-looking?", a: "Yes, when the procedure is performed by an experienced transplant surgeon who controls the angle and direction of implantation to match the natural growth pattern of the beard zone being treated. The transplanted hair is the patient's own scalp hair relocated to the face, so the texture and growth characteristics are essentially equivalent to any natural hair follicle. The key variable determining whether the result looks natural is the precision of implantation angle, which is why choosing a surgeon with specific beard transplant experience matters significantly more than the technique used." },
    { q: "How long does the beard transplant procedure take and what is the recovery?", a: "A moustache or goatee transplant requiring 300 to 800 grafts takes approximately three to five hours including design, anaesthesia, extraction, and implantation. A full beard transplant requiring 1,500 to 3,000 grafts takes six to eight hours. Both are performed as day sessions under local anaesthesia with no hospital admission required. Recovery involves mild facial swelling and redness for two to three days, scabbing at the implant sites for seven to ten days, and a return to work within three to five days for most patients. Strenuous exercise and direct sun exposure to the face should be avoided for the first two weeks." },
    { q: "Is Nexus Clinic KL one of the beard transplant clinics in Malaysia I should consider?", a: "Nexus Clinic KL is a licensed hair transplant clinic in Malaysia offering beard transplant procedures performed by qualified surgeons under full Ministry of Health Malaysia-compliant clinical standards. Over 5,000 facial filler and hair restoration procedures have been completed at the clinic, with a team that combines medical expertise with the aesthetic sensibility required to produce natural-looking beard results for patients across KL, Petaling Jaya, Bangsar, and throughout Malaysia. The clinic offers a complimentary first consultation, full beard design session before any surgery, transparent graft-count and pricing breakdown, and structured aftercare." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-beard-transplant1.webp",
      after: "/images/B&A-hair/B&A-beard-transplant1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-beard-transplant2.webp",
      after: "/images/B&A-hair/B&A-beard-transplant2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-beard-transplant3.webp",
      after: "/images/B&A-hair/B&A-beard-transplant3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
        <AllPagesHero
          badge="FUE • DHI • Permanent Results"
          title="Best Beard Transplant in Malaysia for"
          highlight="Permanent, Natural-Looking Facial Hair"
          description="Not every man can grow a beard. Genetics, hormonal factors, or scarring can leave the face with patchy or sparse facial hair that no supplement, oil, or dermaroller will ever fully address."
          details="The only solution that produces permanent, natural-looking results is a beard transplant: moving individual hair follicles from the back of the scalp to the beard area where growth is absent or insufficient. Nexus Clinic KL is a trusted hair transplant clinic in Malaysia offering beard transplant procedures using FUE and DHI techniques."
          note="Every beard transplant at Nexus Clinic KL is performed by a qualified hair transplant surgeon under full medical supervision, not by a technician. The beard design process involves a detailed consultation before any procedure is confirmed."
          image="/images/hair/beard-transplant.webp"
          imageAlt="Nexus Clinic Kuala Lumpur - Beard Transplant"
          ctaText="Free Consultation"
          ctaLink="/contact-us"
          whatsappMessage="Hi, I'm interested in beard transplant at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle="FUE • DHI"
          floatingSubtitle="90-99% Graft Survival"
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
                    <p className="font-inter font-semibold text-brown text-sm">MOH Licensed</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Ministry of Health Malaysia licensed clinic</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Performed</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Qualified hair transplant surgeon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in facial hair restoration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">FUE • DHI Techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">90-99% Graft Survival</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Permanent, Natural Results</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Beard Transplant at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">FUE and DHI facial hair restoration by licensed doctors</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: "Session Duration", value: "4 to 8 hours depending on graft count" },
              { icon: Heart, label: "Anaesthesia", value: "Local anaesthesia. Patient remains awake." },
              { icon: Activity, label: "Graft Survival", value: "90 to 99% depending on technique" },
              { icon: TrendingUp, label: "Full Results", value: "Month 9 to 12 post-procedure" },
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
                <p className="font-inter text-sm text-taupe">Procedure</p>
                <p className="font-georgia text-brown font-semibold">Beard Transplant (FUE and DHI)</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Graft Count Range</p>
                <p className="font-georgia text-brown font-semibold">500 to 3,000 grafts depending on design</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Recovery</p>
                <p className="font-georgia text-brown">Return to work within 3 to 5 days</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Consultation</p>
                <p className="font-georgia text-brown">Complimentary at Nexus Clinic KL</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Transplant Surgeon
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Facial Hair Transplant Zone Guide Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
        {/* Facial Hair Transplant Zone Guide Table */}
        <TableForPages
          columns={[
            { key: "zone", header: "Beard Zone", className: "font-semibold" },
            { key: "coverage", header: "Coverage Area" },
            { key: "grafts", header: "Typical Grafts Needed" },
            { key: "considerations", header: "Key Design Considerations" },
          ]}
          data={beardZoneGuide.map((item) => ({
            zone: item.zone,
            coverage: item.coverage,
            grafts: item.grafts,
            considerations: item.considerations,
          }))}
          title="Facial Hair Transplant Zone Guide"
          subtitle="Graft estimates by beard area"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />
        <p className="text-sm text-taupe text-center max-w-2xl mx-auto">
            Epstein JS. Hair Transplantation to Restore Eyebrows, Eyelashes, and the Beard. 
            <a 
              href="https://pubmed.ncbi.nlm.nih.gov/15135136/" 
              target="_blank" 
              rel="nofollow" 
              className="text-wine font-bold italic"
            >
              Dermatologic Surgery
            </a>. 
            2003;29(11):1112-1120. Documents the clinical adaptation of FUE follicular unit transplantation techniques to facial hair restoration including beard and moustache, establishing the directional implantation protocols required for natural results.
        </p>
        </motion.div>
      </section>

      {/* Donor Source Table */}
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
              { key: "source", header: "Donor Source", className: "font-semibold" },
              { key: "characteristics", header: "Hair Characteristics" },
              { key: "matchQuality", header: "Beard Match Quality" },
              { key: "bestUsed", header: "Best Used For" },
            ]}
            data={donorSources.map((item) => ({
              source: item.source,
              characteristics: item.characteristics,
              matchQuality: item.matchQuality,
              bestUsed: item.bestUsed,
            }))}
            title="Donor Hair for Beard Transplant"
            subtitle="Choosing the right source for natural results"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          <p className="text-center text-brown">
            Patients who are also considering scalp hair restoration in addition to a beard transplant can learn more about our{' '}
            <a
              href="/hair/fue-hair-transplant-malaysia/" 
              className="text-wine font-bold italic"
            >
              FUE hair transplant Malaysia programme
            </a>{' '}
            and how donor area planning works across combined scalp and facial hair transplant cases.
          </p>
        </motion.div>
      </section>

      {/* FUE vs DHI Comparison Table */}
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
              { key: "fue", header: "FUE for Beard Transplant" },
              { key: "dhi", header: "DHI Technique for Beard Transplant" },
            ]}
            data={fueVsDhi.map((item) => ({
              factor: item.factor,
              fue: item.fue,
              dhi: item.dhi,
            }))}
            title="FUE Beard Transplant vs DHI Technique"
            subtitle="Which is better for your beard goals?"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
        </motion.div>
      </section>

      {/* Beard Transplant Results Timeline Slider Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Beard Transplant Growth Timeline</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect after your procedure</p>
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
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Growth</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Individual healing response varies by patient</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Technique used (FUE vs DHI)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Surgeon skill and graft handling quality</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Post-operative care compliance</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Beard zone being treated (moustache grows differently from cheeks)</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  The most important session in any beard transplant journey is not the surgery. It is the beard design consultation that precedes it.
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
                <h3 className="font-georgia text-2xl font-bold">Growth Timeline</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Shock Loss</span>
                    <span className="font-georgia text-xl font-bold text-white">Weeks 2 to 4</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Transplanted hair shafts fall out. Follicle roots remain intact.</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Initial Growth</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 3 to 4</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "35%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Fine, short hairs become visible. Early beard formation begins.</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Progressive Thickening</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 5 to 6</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Meaningful coverage visible. Beard can be shaped and styled.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Maturation</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 8 to 9</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Hair thickens and matures in texture.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Full Results</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 9 to 12</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1.0 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Natural-looking beard fully established. Can be shaved, trimmed, and styled.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Full results are not visible until month 9 to 12. Patience during the growth phase is essential for optimal outcomes.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ The final appearance of a beard transplant is determined at the design stage: the outline of the beard, the density distribution across different zones, and the angle and direction of growth in each area.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Beard Transplant Procedure Steps */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Beard Transplant Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Beard Design Consultation", desc: "Surgeon draws planned beard outline on face, confirms final design. Graft count confirmed based on agreed coverage area and density goals." },
              { step: "02", title: "Donor Area Preparation", desc: "Donor area at back of scalp trimmed. Local anaesthetic administered. Patient feels no pain during extraction." },
              { step: "03", title: "Follicular Unit Extraction", desc: "Hair follicles extracted one by one from donor area using FUE punch or DHI extraction pen. Grafts placed in holding solution." },
              { step: "04", title: "Implantation into Beard Area", desc: "For FUE, recipient sites created then grafts placed. For DHI, implanter inserts each follicle directly at planned angle and direction." },
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
              Book Your  Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">FUE • DHI — Expert facial hair restoration at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Eyebrow Transplant Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Eyebrow Transplant at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Facial hair restoration beyond the beard</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border-l-4 border-wine">
            <p className="text-brown font-inter mb-4">The same FUE technique used for beard transplant is the standard approach for eyebrow transplant, making it the most technically demanding of all facial hair restoration procedures. Eyebrow hair grows at an almost horizontal angle and lies flat against the skin, which means every individual hair follicle must be implanted at an extremely shallow acute angle.</p>
            <ul className="space-y-2 text-taupe font-inter text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Available for patients with over-plucked, thinning, or absent eyebrows</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Hair follicles from nape of neck or fine-hair temporal areas preferred</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>200 to 500 grafts per eyebrow depending on coverage needed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Full results visible at 9 to 12 months</span>
              </li>
            </ul>
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
          className="container mx-auto max-w-5xl"
        >
          <TableForPages
            columns={[
              { key: "package", header: "Beard Transplant Package" },
              { key: "grafts", header: "Graft / Hair Count" },
              { key: "price", header: "Estimated Total Price (RM) 2026" },
            ]}
            data={pricingTiers.map((tier) => ({
              package: tier.package,
              grafts: tier.grafts,
              price: tier.price,
            }))}
            title="Beard Transplant Cost in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="text-center mt-6">
              <p className="text-center text-taupe">
                Beard transplant cost in Malaysia is calculated per graft or per hair depending on the technique used, meaning the total investment reflects the size of the coverage area and the density achieved. All consultations at Nexus Clinic KL are complimentary and a full itemised cost breakdown is provided after the beard design consultation. Patients combining beard transplant with scalp hair restoration may also benefit from{' '}
                <Link 
                  href="/hair/hair-transplant-malaysia/" 
                  className="text-wine font-bold italic"
                >
                  hair transplant treatment in Malaysia
                </Link>{' '}
                as a comprehensive combined session. Patients wanting to support the surrounding hair health before or after surgery can explore{' '}
                <Link 
                  href="/hair/prp-hair-treatment-malaysia/" 
                  className="text-wine font-bold italic"
                >
                  PRP hair treatment Malaysia
                </Link>{' '}
                as a complementary regenerative option.
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
              Begin Your Beard Transplant Journey at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If you want a beard that looks even, natural, and confident, start with a proper assessment. We will help you understand the cause, then choose the right path, from beard growth plans to facial hair transplant discussions.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed doctors bring over 15 years of combined experience, perform every procedure personally, and use only MOH-approved techniques. Nexus Clinic KL serves patients from across Malaysia seeking beard transplant clinics with clinical standards and aesthetic sensibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a consultation for beard transplant at Nexus Clinic KL. Please let me know available slots."
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