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
  Scissors,
  TrendingUp,
  DollarSign,
  Layers,
  Users,
  Target,
  Droplet,
  Leaf,
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
interface FUEHairTransplantProps {
  locale: string;
}

export default function FUEHairTransplant({ locale }: FUEHairTransplantProps) {
  const extractionComparison = [
    { factor: "Hair Follicles Extracted", fue: "Individual hair follicles extracted one by one using punch tool", fut: "Strip of skin removed; dissected into individual grafts", dhi: "Individual follicles extracted and immediately implanted using Choi pen" },
    { factor: "Scarring", fue: "Tiny dot scars only. Not visible at normal length.", fut: "Linear scar at donor area. Visible with very short hair.", dhi: "Similar to FUE. Fewer recipient site incisions." },
    { factor: "Graft Survival", fue: "90 to 95%", fut: "95 to 98%", dhi: "95 to 99%" },
    { factor: "Recovery Time", fue: "5 to 10 days", fut: "10 to 14 days", dhi: "5 to 7 days" },
    { factor: "Max Grafts (Single Session)", fue: "Up to 4,000", fut: "Up to 4,500+", dhi: "Up to 4,000" },
    { factor: "Best For", fue: "Most patients. Versatile for all areas.", fut: "Large graft count in one session, maximum coverage.", dhi: "Dense packing, hairline precision, no-shave option." },
    { factor: "Cost per Graft (Malaysia)", fue: "RM 8 to RM 12", fut: "RM 5 to RM 10", dhi: "RM 10 to RM 15" },
  ];

  const donorDensityCategories = [
    { category: "Dense Donor Area", density: "80 to 100+ follicles per cm²", maxGrafts: "3,500 to 4,500+ grafts possible", approach: "FUE alone sufficient for most cases. Excellent candidate for multiple sessions." },
    { category: "Average Donor Area", density: "60 to 80 follicles per cm²", maxGrafts: "2,500 to 3,500 grafts safely harvestable", approach: "FUE typically adequate. Strategic graft planning essential." },
    { category: "Low-to-Moderate Donor Area", density: "40 to 60 follicles per cm²", maxGrafts: "1,500 to 2,500 grafts maximum without overharvesting", approach: "FUE with conservative extraction. May require staged sessions." },
    { category: "Depleted or Limited Donor", density: "Below 40 follicles per cm²", maxGrafts: "Below 1,500 safely harvestable", approach: "FUE supplemented by body hair transplant or beard hair. FUT may not be viable." },
  ];

  const pricingTiers = [
    { package: "Hairline Restoration (FUE)", grafts: "1,000 to 1,500 grafts", price: "RM 8,000 to RM 18,000" },
    { package: "Crown and Top Restoration (FUE)", grafts: "1,500 to 2,500 grafts", price: "RM 12,000 to RM 30,000" },
    { package: "Moderate to Significant Loss (FUE)", grafts: "2,500 to 3,500 grafts", price: "RM 20,000 to RM 42,000" },
    { package: "Large Session FUE", grafts: "3,500 to 4,000 grafts", price: "RM 28,000 to RM 48,000" },
    { package: "FUE Beard / Eyebrow Transplant", grafts: "500 to 1,500 grafts", price: "RM 6,000 to RM 22,500" },
    { package: "DHI Programme (Advanced FUE)", grafts: "1,000 to 3,000 grafts", price: "RM 10,000 to RM 45,000" },
  ];

  const faqData = [
    { q: "What makes FUE different from FUT hair transplant?", a: "FUE extracts individual hair follicles one by one using a circular punch, leaving only tiny circular dot scars that are invisible at normal hair length. FUT removes a strip of skin from the donor area, which is then dissected into grafts. FUT leaves a linear scar that is visible if the hair is cut very short. FUE offers faster recovery, no linear scar, and more versatile donor site options. FUT can harvest more grafts per session for patients with advanced baldness and costs less per graft. The best approach depends on the patient's specific hair loss stage, donor density, and cosmetic preferences." },
    { q: "Is FUE hair transplant in Malaysia permanent?", a: "Yes. The transplanted hair follicles come from the DHT-resistant zone at the back and sides of the scalp. Because these follicles are genetically immune to the hormone that causes pattern hair loss, they continue growing permanently after transplantation to the recipient site. The transplanted hair grows, cycles, sheds, and regrows just like natural hair for the patient's lifetime. However, the patient's existing non-transplanted hair may continue to thin over time without additional medication, which is why many hair transplant surgeons recommend concurrent use of finasteride or minoxidil to preserve the surrounding hair." },
    { q: "How many grafts will I need for my FUE hair transplant?", a: "Graft count depends on the extent of your hair loss, the density of your donor area, and the density you want to achieve at the recipient site. As a general guide: hairline restoration requires 1,000 to 2,000 grafts, crown area treatment needs 1,500 to 3,000 grafts, and moderate to advanced pattern hair loss may require 3,000 to 4,000 grafts. The definitive number is determined at a scalp assessment by the surgeon at Nexus Clinic KL, who maps the donor area under magnification and calculates the safe extractable number of grafts specific to your anatomy." },
    { q: "How do I choose the best hair transplant clinic in Malaysia for FUE?", a: "The right hair transplant clinic is one where the surgeon performs every step of the procedure directly, from design through extraction and implantation, rather than delegating surgical steps to nurses or technicians. Confirm the surgeon is registered with the Malaysian Medical Council and ideally holds training credentials from international bodies such as the ISHRS. Ask to see before-and-after photographs of real patients treated at the clinic with similar hair types and loss stages. A reputable clinic provides a transparent graft count and cost breakdown, offers realistic outcome expectations rather than guaranteed results, and includes structured aftercare in the programme." },
    { q: "What is the recovery like after FUE hair transplant in Malaysia?", a: "Recovery from FUE is typically five to ten days for the visible healing stages. Most patients return to desk work within three to five days. The donor area shows tiny pink dots that fade within a week. Scabbing at the recipient site resolves within ten to fourteen days. Patients avoid strenuous physical activity for two to three weeks. The shock loss phase where transplanted hair falls out occurs at two to four weeks and resolves as new hair growth begins from month three. Full results are visible at month twelve to fifteen and are reviewed by the surgeon at scheduled follow-up appointments." },
    { q: "Is FUE hair transplant suitable for women?", a: "Yes. FUE hair transplant is performed for women with localised hair loss patterns including traction alopecia, hairline recession, thinning around the part, and post-surgical scar coverage. Women with diffuse hair loss across the entire scalp require individual assessment because diffuse patterns may not have a stable donor area free from miniaturisation. The no-shave FUE option, where only small sections of the donor area are trimmed rather than the entire head, is available and is particularly suitable for female patients who prefer not to shave during their procedure." },
    { q: "Can I combine FUE with other hair loss treatments?", a: "Yes, and combination approaches produce the best long-term outcomes. FUE transplants the hair follicles that are already lost, while medical treatments like finasteride and minoxidil protect the existing hair that has not yet been lost. PRP and exosome therapy support graft integration, scalp health, and the vitality of surrounding follicles. A comprehensive hair treatment plan addressing both surgical restoration and medical preservation delivers fuller, more sustained results than FUE alone." },
    { q: "How much does FUE hair transplant cost in Malaysia?", a: "FUE hair transplant cost in Malaysia is calculated per graft, with most clinics charging between RM 8 and RM 12 per graft depending on surgeon credentials, clinic infrastructure, and the technique used. A hairline restoration session of 1,200 to 1,500 grafts typically costs between RM 10,000 and RM 18,000 at a reputable clinic in Kuala Lumpur. A moderate-loss session of 2,500 grafts costs approximately RM 20,000 to RM 30,000. Malaysia offers significant cost advantages over equivalent procedures in Australia, the UK, or Singapore without compromising clinical standards." },
    { q: "What is advanced FUE and how does DHI relate to it?", a: "Advanced FUE refers to techniques that go beyond standard motorised extraction to improve graft survival, precision, or patient experience. DHI (Direct Hair Implantation) is the most clinically significant advancement: it uses a specialised Choi implanter pen to combine extraction and implantation in a single continuous step, minimising the time each graft spends outside the body and eliminating the need for pre-made incisions at the recipient site. This improves graft survival rates to 95 to 99 percent and allows more precise control over angle, depth, and direction of each individual hair. DHI is particularly valuable for hairline design and dense packing applications." },
    { q: "How do I know if I am ready for FUE hair transplant?", a: "The ideal candidate for FUE hair transplant has stabilised hair loss, a sufficient donor area density, and realistic expectations about coverage goals. Hair loss should be stable for at least twelve months before surgery so the transplanted grafts are not placed into an area that will continue receding. Patients should be in good general health, not taking medications that increase bleeding risk, and prepared for the shock loss phase that occurs in the weeks after surgery. A thorough pre-operative assessment confirms all of these factors and ensures that the procedure is appropriate before any session is planned." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-fue-hair-transplant1.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-fue-hair-transplant2.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-fue-hair-transplant3.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="FUE • DHI • FUT • Doctor-Performed"
        title="FUE Hair Transplant in Malaysia for"
        highlight="Natural, Permanent Results"
        description="FUE eliminated the linear scar constraint entirely. By extracting individual hair follicles one at a time using a precision punch, FUE delivers permanent, natural-looking results with no visible scar."
        details="Nexus Clinic KL is one of the best hair transplant clinic options in Malaysia for patients seeking FUE hair transplant treatment performed by a qualified hair transplant surgeon under full medical supervision. Every procedure is performed by a licensed doctor rather than a technician or nurse."
        note="Transplanted hair is permanent. Hair follicles from the donor area are genetically resistant to DHT, the hormone responsible for pattern hair loss, and continue growing for the patient's lifetime."
        image="/images/hair/fue-hair-transplant.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - FUE Hair Transplant"
        ctaText="Free Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in FUE hair transplant at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="FUE • DHI • FUT"
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in hair restoration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">No Linear Scar</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">FUE Hair Transplant at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Follicular Unit Extraction by licensed doctors</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: "Session Duration", value: "4 to 8 hours depending on graft count" },
              { icon: Heart, label: "Anaesthesia", value: "Local anaesthesia. Patient remains awake." },
              { icon: Activity, label: "Graft Survival", value: "90 to 99% depending on technique" },
              { icon: TrendingUp, label: "Full Results", value: "Month 12 to 15 post-procedure" },
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
                <p className="font-georgia text-brown font-semibold">FUE Hair Transplant</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Scarring</p>
                <p className="font-georgia text-brown font-semibold">Tiny dot scars. Invisible at normal length.</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Recovery</p>
                <p className="font-georgia text-brown">5 to 10 days. Return to desk work in 3 to 5 days.</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Consultation</p>
                <p className="font-georgia text-brown">Complimentary at Nexus Clinic KL</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to Surgeon
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* FUE vs FUT vs DHI Comparison Table */}
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
              { key: "fue", header: "FUE" },
              { key: "fut", header: "FUT (Strip Method)" },
              { key: "dhi", header: "DHI (Direct Implantation)" },
            ]}
            data={extractionComparison.map((item) => ({
              factor: item.factor,
              fue: item.fue,
              fut: item.fut,
              dhi: item.dhi,
            }))}
            title="FUE vs FUT vs DHI"
            subtitle="Choosing the best hair transplant method for your needs"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
            <p className="text-sm text-taupe text-center max-w-2xl mx-auto">
              Harris JA. New Methodology and Instrumentation for Follicular Unit Extraction: Lower Follicle Transection Rates and Expanded Patient Candidacy. 
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/16393599/" 
                target="_blank" 
                rel="nofollow" 
                className="text-wine font-bold italic"
              >
                Dermatologic Surgery
              </a>. 
              2006;32(1):56-61. Documents the clinical improvement in graft survival achieved by motorised FUE extraction tools over manual methods, establishing the modern standard for FUE hair transplant surgery.
            </p>
        </motion.div>
      </section>

      {/* Donor Area Assessment Table */}
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
              { key: "category", header: "Donor Density Category", className: "font-semibold" },
              { key: "density", header: "Hair Follicles per cm²" },
              { key: "maxGrafts", header: "Maximum Harvestable Grafts (FUE)" },
              { key: "approach", header: "Recommended Approach" },
            ]}
            data={donorDensityCategories.map((item) => ({
              category: item.category,
              density: item.density,
              maxGrafts: item.maxGrafts,
              approach: item.approach,
            }))}
            title="Donor Area Assessment"
            subtitle="The foundation of a successful FUE hair transplant"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
              <p className="text-center">
                Patients with limited donor supply may benefit from combining FUE with{' '}
                <Link 
                  href="/hair/prp-hair-treatment-malaysia/" 
                  className="text-wine font-bold italic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PRP hair treatment
                </Link>{' '}
                to optimise the existing hair follicles and strengthen the scalp environment before and after surgery.
              </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FUE Hair Transplant Growth Timeline Slider Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">FUE Hair Transplant Growth Timeline</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Month-by-month what to expect after your procedure</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
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
                  <span>Surgeon skill and graft handling quality</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Extraction tool precision and transection rates</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Post-operative care compliance</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Use of finasteride or minoxidil for native hair protection</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  The shock loss phase where transplanted hair falls out at two to four weeks is expected and does not indicate a problem. New growth begins from month three.
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
              
              <div className="space-y-6">
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
                      whileInView={{ width: "30%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Fine baby hairs become visible. Early hairline formation.</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Progressive Thickening</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 5 to 6</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "55%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Meaningful cosmetic improvement visible. Styling possible.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Maturation</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 8 to 10</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">60 to 80% of final density achieved.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Full Results</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 12 to 15</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1.0 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Final result. Natural-looking, permanent hair.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Full results are not visible until month 12 to 15. Patience during the growth phase is essential for optimal outcomes.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ Understanding the timeline from day one eliminates the most common source of post-procedure distress and helps patients trust the process.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FUE Procedure Steps */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The FUE Hair Transplant Procedure</h2>
            <p className="text-taupe font-inter">Step by step at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation & Hairline Design", desc: "Scalp assessment under dermoscopic magnification. Personalised hairline drawing based on facial structure and age-appropriate aesthetics." },
              { step: "02", title: "Local Anaesthesia", desc: "Donor and recipient areas numbed. Takes approximately fifteen minutes. Patient feels no pain during extraction or implantation." },
              { step: "03", title: "Follicular Unit Extraction", desc: "Individual hair follicles extracted one by one from safe donor zone using precision punch tool. Grafts collected in chilled holding solution." },
              { step: "04", title: "Recipient Site Creation", desc: "Tiny incisions made at appropriate angle and direction for natural-looking growth. Each graft placed individually into prepared sites." },
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
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">FUE • DHI • FUT — Expert hair restoration at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Beard, Eyebrow, Body Hair Transplant Applications */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Beyond Scalp Hair Restoration</h2>
            <p className="text-taupe font-inter">Beard, eyebrow, and body hair transplant using FUE</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
              <h3 className="font-georgia text-xl text-wine mb-3">Beard Hair Transplant</h3>
              <p className="text-taupe font-inter text-sm">Fill patchy beard areas, create a complete beard from limited existing facial hair, or restore beard hair lost to scarring or trauma. Requires 500 to 1,500 grafts. Precise angle and direction placement essential for natural-looking results.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
              <h3 className="font-georgia text-xl text-wine mb-3">Eyebrow Hair Transplant</h3>
              <p className="text-taupe font-inter text-sm">Address thinning or absent eyebrows from over-plucking, alopecia, trauma, or scarring. Fine hair follicles extracted from nape of neck where hair calibre matches eyebrow texture. Most technically demanding FUE application requiring extreme precision.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
              <h3 className="font-georgia text-xl text-wine mb-3">Body Hair Transplant</h3>
              <p className="text-taupe font-inter text-sm">Supplementary donor source for patients with limited scalp donor supply. Hair follicles from chest, abdomen, or beard area extracted and used to supplement scalp grafts. Body hair is finer in calibre, suitable for crown areas where finer coverage is acceptable.</p>
            </motion.div>
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
          className="container mx-auto max-w-5xl"
        >
          <TableForPages
            columns={[
              { key: "package", header: "FUE Hair Transplant Package" },
              { key: "grafts", header: "Graft Count" },
              { key: "price", header: "Estimated Total Price (RM) 2026" },
            ]}
            data={pricingTiers.map((tier) => ({
              package: tier.package,
              grafts: tier.grafts,
              price: tier.price,
            }))}
            title="FUE Hair Transplant Cost in Malaysia 2026"
            subtitle="Transparent pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
          />
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <p className="text-taupe">
                  Hair transplant cost in Malaysia is calculated per graft, meaning the total investment is proportional to the number of grafts the patient requires. Hair transplant cost at Nexus Clinic KL is competitive with the best hair transplant clinics in Kuala Lumpur and significantly more cost-effective than equivalent procedures in Australia, the UK, or Singapore. All consultations are complimentary and a full itemised cost breakdown is provided before any procedure is confirmed. Patients combining FUE with post-operative hair preservation treatments may also benefit from{' '}
                  <a 
                    href="/hair/exosome-hair-treatment-malaysia/" 
                    className="text-wine font-bold italic"
                  >
                    exosome hair treatment
                  </a>{' '}
                  or{' '}
                  <a 
                    href="/hair/mesotherapy-hair-loss-malaysia/" 
                    className="text-wine font-bold italic"
                  >
                    mesotherapy hair loss treatment
                  </a>{' '}
                  to support graft integration and protect the surrounding existing hair.
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
              Begin Restoring Your Hair at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              A hair transplant can be life-changing, but only when it is planned well. If you want a natural hairline and a realistic timeline, start with a proper assessment at Nexus Clinic KL.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed doctors bring over 15 years of combined experience, perform every procedure personally, and use only MOH-approved techniques. Malaysia offers significant cost advantages over Australia, the UK, or Singapore without compromising clinical standards.
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
                message="Hi, I'd like to book a consultation for FUE hair transplant at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}