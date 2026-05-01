"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Target,
  Sparkles,
  FileCheck,
} from "lucide-react";
import { staggerContainer, fadeInUp, fadeInRight, fadeInLeft } from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
const AntiAgingLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "regenerative/antiAging");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-regenerative/B&A-anti-aging-therapy1.webp",
      after: "/images/B&A-regenerative/B&A-anti-aging-therapy1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-regenerative/B&A-anti-aging-therapy2.webp",
      after: "/images/B&A-regenerative/B&A-anti-aging-therapy2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-regenerative/B&A-anti-aging-therapy3.webp",
      after: "/images/B&A-regenerative/B&A-anti-aging-therapy3.webp",
    },
  ];
  const faqData =[
  {
      q: "What is stem cell anti-aging therapy and how does it work in Malaysia?",
      a: "Stem cell anti-aging therapy in Malaysia uses mesenchymal stem cells (MSCs), most commonly derived from umbilical cord Wharton's Jelly, to address the cellular biology of the aging process directly. As we age, the body's own stem cells decline in number and activity, reducing the cellular repair capacity that maintains tissue integrity, collagen production and the body's ability to heal damaged tissues. MSC stem cell anti-aging therapy introduces biologically young, active MSCs with high regenerative potential that can self-renew and are multipotent. More importantly, they secrete a powerful cocktail of growth factors, anti-inflammatory cytokines and exosomes that instruct the patient's own cells to increase collagen synthesis, reduce inflammation, repair damaged tissues and improve cellular health at the cellular level. At Nexus Clinic KL, this treatment is medically supervised and compliant with the Ministry of Health Malaysia and NPRA regulatory framework for stem cell therapies.",
    },
    {
      q: "What anti-aging treatments are available in Malaysia for saggy skin without surgery?",
      a: "The top anti-aging treatments for saggy skin without surgery available at Nexus Clinic KL in Malaysia include: thread lift (PDO or PLLA threads that provide immediate mechanical lifting of sagging skin and saggy facial contours while stimulating natural collagen production as the thread dissolves over 6 to 12 months); high-intensity focused ultrasound (HIFU) which firms the skin at the SMAS layer depth without cutting or downtime; fractional CO2 laser which improves skin elasticity and texture through controlled wound healing response; and PRP or exosomes therapy which address the cellular biology of sagging skin by stimulating fibroblast activity and collagen synthesis. These non-surgical treatment options can be combined in a treatment plan tailored to each patient's specific degree of sagging skin and anti-aging goals for results that are significantly superior to any single treatment alone.",
    },
    {
      q: "How many sessions do anti-aging treatments require?",
      a: "The number of sessions required depends on the specific treatment and the degree of visible aging being addressed. PRP therapy typically requires an initial course of 3 sessions 4 to 6 weeks apart, followed by maintenance every 6 to 12 months. Thread lift is a single session that lasts 12 to 18 months before repeat treatment. HIFU is a single session per course with results developing over 2 to 3 months and repeat treatment after 12 to 18 months. Fractional CO2 laser requires 1 to 3 sessions 6 to 8 weeks apart. MSC stem cell anti-aging therapy is typically 1 to 3 initial sessions with the number of sessions and spacing determined individually at the consultation based on the patient's age, health status and anti-aging goals. For exosomes therapy, 1 to 4 sessions are typical, often combined with other treatments. A personalised number of sessions recommendation is provided at every anti-aging assessment at Nexus Clinic KL.",
    },
    {
      q: "Is stem cell therapy for anti-aging legal and safe in Malaysia?",
      a: "Yes, when performed by a registered medical, LCP-certified doctor at a clinic compliant with the Ministry of Health Malaysia and NPRA regulatory framework, stem cell therapies for anti-aging in Malaysia are legal and safe. The key requirements are: the clinic must be licensed by the Ministry of Health Malaysia; the MSC preparation must be from a GMP-certified source using ethically procured donor material; a pre-treatment medical assessment including blood panel must be conducted; the treating doctor must be qualified in regenerative medicine; and informed consent must be provided and documented. At Nexus Clinic KL, all of these requirements are met as standard practice. The distinction between legally and ethically compliant MSC stem cell therapies and unverified cosmetic stem cell injections from unlicensed providers is clearly communicated to every patient at the initial consultation.",
    },
    {
      q: "What is the difference between PRP and exosomes therapy for anti-aging?",
      a: "PRP (platelet-rich plasma) therapy uses growth factors concentrated from the patient's own blood (autologous) to stimulate the healing response, collagen production and cellular repair in the treated area; as it comes from the patient's own body, there is zero risk of immune reaction; PRP has the strongest published evidence base of any regenerative injection therapy for skin anti-aging and hair restoration. Exosomes therapy uses nano-sized vesicles derived from MSCs (allogeneic, from a GMP-certified donor source) that carry a richer and more potent cargo of growth factors, microRNA and signalling proteins than PRP; exosomes deliver MSC-like paracrine signals without live cells, making them more potent per molecule than PRP for cellular repair at the cellular level, but at higher cost; exosomes therapy is currently at the leading edge of advances in regenerative medicine with rapidly growing evidence. At Nexus Clinic KL, PRP is the evidence-established first-line regenerative injection therapy for most patients, with exosomes used to enhance healing response after energy-based treatments or as a premium cellular therapy for patients seeking maximum anti-aging benefits.",
    },
    {
      q: "Can anti-aging therapy help with skin elasticity and wrinkle reduction?",
      a: "Yes. Improving skin elasticity and reducing wrinkle depth are among the primary goals of anti-aging therapy at Nexus Clinic KL. MSC stem cell therapies, PRP and exosomes all directly stimulate fibroblast activity and new collagen and elastin synthesis in the dermis, improving skin elasticity from the cellular level upward. Fractional CO2 laser creates a controlled wound healing response at the dermal level that stimulates new collagen formation and skin remodelling, reducing wrinkle depth and improving skin texture with the most significant dermal collagen improvement of any laser treatment in Malaysia. HIFU improves skin elasticity by stimulating the SMAS and deep dermal collagen through focused ultrasound energy. Thread lift provides immediate improvement in facial contour firmness and sagging skin alongside gradual collagen stimulation as the thread dissolves. The combination of cellular and structural treatments provides the most comprehensive improvement in skin elasticity and wrinkle reduction that is achievable without surgery.",
    },
    {
      q: "Who is the best candidate for stem cell anti-aging therapy in Malaysia?",
      a: "The best candidates for MSC stem cell anti-aging therapy at Nexus Clinic KL are adults who are in good general health and are experiencing visible aging including loss of skin vitality and elasticity, wrinkle depth, sagging skin or reduced energy and vitality who want to address the aging process at the cellular level rather than through surface-only treatments. Patients aged 35 to 65 typically see the most meaningful response from stem cell therapies as their endogenous (own body) stem cell activity has declined sufficiently for the exogenous MSC signals to produce noticeable improvements in cellular health and skin quality. Patients with active cancer, active autoimmune disease, active infection or uncontrolled chronic disease are not candidates for MSC stem cell therapies; a full medical assessment identifies any contraindications before any stem cell anti-aging therapy is scheduled. Women experiencing accelerated aging from menopausal hormonal changes and men experiencing reduced vitality from declining testosterone are often the most responsive to combined hormonal and stem cell regenerative anti-aging programmes at this clinic.",
    },
    {
      q: "How long do anti-aging treatment results last?",
      a: "Result duration varies by treatment type. Thread lift results typically last 12 to 18 months as the PDO or PLLA threads gradually dissolve; the collagen stimulated by the dissolving thread provides some ongoing structural benefit after the thread is gone. HIFU results develop over 2 to 3 months and typically last 12 to 18 months before repeat treatment is needed. Fractional CO2 laser results are longer-lasting as the new collagen formed after each session is structural and does not degrade on the same timeline as the original treatment trigger; most patients maintain results for 18 to 24 months with appropriate skincare and sun protection. PRP therapy results for skin quality improvement typically persist for 6 to 12 months before maintenance sessions are recommended. MSC stem cell anti-aging therapy aims to produce more sustained improvements in cellular health and vitality; the timeline for results in skin quality and energy is typically 4 to 12 weeks per session with cumulative benefits from a treatment programme; ongoing maintenance sessions are recommended annually for sustained regenerative potential. All result timelines are discussed at the anti-aging consultation before any treatment plan is committed to.",
    },
    {
      q: "What skincare should I use alongside anti-aging therapy in Malaysia?",
      a: "Medical-grade skincare is the daily maintenance layer that protects and extends the results of every anti-aging treatment in the programme. At Nexus Clinic KL, a personalised skincare routine is recommended as part of every anti-aging treatment plan tailored for each patient. The core components are: SPF50 broad-spectrum mineral sunscreen applied every morning to protect against UV-driven collagen degradation and changes in skin pigmentation; a topical retinoid (tretinoin or retinol) applied at night to stimulate fibroblast activity, improve skin cell turnover and support collagen synthesis; a Vitamin C antioxidant serum in the morning to neutralise oxidative stress and support collagen production; and a hydrating serum or skin booster containing hyaluronic acid for hydration and skin barrier support. These skincare components directly support the cellular biology goals of the stem cell therapies, PRP and energy-based treatments in the programme; failing to use SPF50 between sessions is the single most common cause of sub-optimal anti-aging treatment results in Malaysian patients due to the continuous UV exposure that drives collagen degradation.",
    },
    {
      q: "Is the anti-aging consultation at Nexus Clinic KL free?",
      a: "The initial anti-aging assessment at Nexus Clinic KL is priced at RM 150 to RM 300 and includes a comprehensive assessment of visible aging concerns (wrinkles, saggy skin, sagging skin, skin elasticity, vitality), skin type and Fitzpatrick classification, medical history review for contraindications to stem cell therapies, physical examination of skin quality and facial structure, and presentation of a personalised treatment plan tailored to the patient's specific anti-aging goals with full pricing before any treatment is booked. The doctor will provide clear explanation of the evidence base for each recommended treatment option, the number of sessions required, realistic outcome expectations and the MOH compliance status of any stem cell therapies recommended. Malaysian patients can book a consultation at Nexus Clinic KL, located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia.",
    },
  ]
  return (
    <div className="bg-light font-inter">
      <AllPagesHero
        badge="Anti-Aging Treatment Malaysia Stem Cell Therapies and Regenerative TherapyL"
        title=" Top Anti-Aging Treatments with Stem Cells,"
        highlight="Therapies and Regenerative Medicine in Kuala Lumpur"
        description="Anti-aging in Malaysia has moved decisively beyond skincare products and surface treatments. The most significant advances in regenerative medicine over the past decade have produced a category of medically supervised anti-aging treatments that address the cellular biology of the aging process itself rather than managing only its visible surface consequences."
        details="Wrinkles, sagging skin, loss of skin elasticity, reduced vitality and the general decline in the skin's ability to repair damaged tissues are not merely cosmetic concerns. They are the visible expression of changes happening at the cellular level: the decline of stem cell activity, the loss of collagen and elastin, the accumulation of chronic inflammation and the progressive slowing of the body's ability to heal. Anti-aging treatments in Malaysia at Nexus Clinic KL address these cellular drivers directly."
        note="Stem cell therapy and regenerative medicine treatments are doctor-performed procedures that require proper medical assessment before treatment. Results vary based on individual factors."
        image="/images/regenerative/what-is-stem-cell.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Anti-Aging Stem Cell Therapy"
        ctaText="Book Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in anti-aging stem cell therapy at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Cellular Rejuvenation"
        floatingSubtitle="Stem cells • Regenerative therapy"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

        {/* Trust Section */}
        <section className="py-20 bg-cream">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="container mx-auto px-4 max-w-6xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location Card - Full Width */}
              <motion.div
                variants={fadeInUp}
                className="md:col-span-2 bg-white rounded-2xl p-6 shadow-md border border-taupe/10 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine/10 p-3 rounded-full shrink-0">
                    <MapPin className="text-wine w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-georgia text-xl text-brown mb-2">
                      Central Kuala Lumpur Location (KLCC Area)
                    </h3>
                    <p className="text-taupe leading-relaxed">
                      LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="bg-rose/10 p-2 rounded-full">
                        <Phone className="text-rose w-3.5 h-3.5" />
                      </div>
                      <a href="tel:0167025699" className="text-rose font-medium hover:underline">
                        016-702 5699
                      </a>
                      <span className="text-taupe">/</span>
                      <a href="tel:0321635699" className="text-rose font-medium hover:underline">
                        03-2163 5699
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trust Card 1 */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-md border border-taupe/10 hover:shadow-lg transition-shadow"
              >
                <div className="bg-wine/10 p-3 rounded-full w-fit mb-4">
                  <Target className="text-wine w-5 h-5" />
                </div>
                <p className="text-taupe leading-relaxed">
                  At Nexus Clinic KL, an aesthetic clinic and regenerative medicine centre in Kuala Lumpur serving patients throughout Malaysia, the anti-aging treatment programme is built around a medically supervised, evidence-graded approach that combines stem cell anti-aging therapy, PRP, exosomes, thread lift, HIFU and fractional CO2 laser.
                </p>
              </motion.div>

              {/* Trust Card 2 */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-md border border-taupe/10 hover:shadow-lg transition-shadow"
              >
                <div className="bg-wine/10 p-3 rounded-full w-fit mb-4">
                  <Sparkles className="text-wine w-5 h-5" />
                </div>
                <p className="text-taupe leading-relaxed">
                  All stem cell therapies at this clinic comply with the regulatory framework of the Ministry of Health Malaysia and the NPRA; only registered medical, LCP-certified doctors perform every treatment.
                </p>
              </motion.div>

              {/* CTA Card - Full Width */}
              <motion.div
                variants={fadeInUp}
                className="md:col-span-2 bg-gradient-to-r from-wine/5 to-rose/5 rounded-2xl p-6 border border-wine/20"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine/10 p-3 rounded-full shrink-0">
                    <FileCheck className="text-wine w-5 h-5" />
                  </div>
                  <p className="text-taupe leading-relaxed">
                    Whether you want to <span className="font-semibold text-brown">restore vitality and feel younger</span> from the inside out, to <span className="font-semibold text-brown">correct saggy skin and jowls</span> without surgery, or to <span className="font-semibold text-brown">improve skin quality, wrinkle depth and skin elasticity</span> with the most advanced cellular therapies available in Malaysia, the programme at Nexus Clinic KL provides a treatment plan tailored to your biology.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

      {/* Anti-Aging Treatment at a Glance Table Section */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
            <TableForPages
              columns={[
                { key: "factor", header: "Factor", className: "font-semibold" },
                { key: "details", header: "Details" },
              ]}
              data={[
                { 
                  factor: "What Anti-Aging Therapy Is", 
                  details: "Anti-aging therapy at Nexus Clinic KL is a medically supervised programme combining stem cell regenerative therapy, PRP (platelet-rich plasma), exosomes, and advanced energy-based skin treatments to address the cellular and structural drivers of visible aging; the goal is to restore vitality, improve skin elasticity and collagen density, reduce wrinkle depth and address sagging skin at the cellular level rather than masking the aging process; treatment is delivered by LCP-certified doctors within a treatment plan tailored to each patient's specific visible aging concerns and regenerative potential" 
                },
                { 
                  factor: "Why Skin Ages", 
                  details: "The aging process in skin is driven by two parallel mechanisms: intrinsic aging (genetic and cellular, including decline in stem cell activity, reduced collagen synthesis and shortening of telomeres) and extrinsic aging (UV exposure, pollution and lifestyle factors); as we age, skin loses collagen at approximately 1% per year after age 25; elasticity declines, producing fine lines, wrinkles and sagging skin; the body's ability to heal and regenerate damaged tissues slows because the number and activity of resident stem cells diminish; this is the cellular basis for advances in regenerative medicine as anti-aging therapy" 
                },
                { 
                  factor: "Treatment Options at Nexus Clinic KL", 
                  details: "Stem cell anti-aging therapy using mesenchymal stem cells (MSCs) | PRP (platelet-rich plasma) therapy | Exosomes therapy for cellular repair | Thread lift for saggy skin and structural support | High-intensity focused ultrasound (HIFU) | Fractional CO2 laser skin resurfacing | Skin booster injections for hydration and collagen | Chemical peels for surface renewal | Combination programmes for comprehensive anti-aging in Malaysia" 
                },
                { 
                  factor: "Who Is a Candidate", 
                  details: "Anyone experiencing visible aging including wrinkles, loss of skin elasticity, sagging skin or saggy facial contours, reduced skin hydration, uneven skin tone, or a general decline in vitality and skin radiance; anti-aging treatments in Malaysia at Nexus Clinic KL are available to adults of all ages who are in good general health; a treatment plan tailored to the patient's specific aging concerns, skin type, medical history and goals is designed at the initial consultation; patients with active cancer, active autoimmune disease or active infection are not candidates for stem cell therapies" 
                },
                { 
                  factor: "MOH Compliance and Safety", 
                  details: "All treatments at Nexus Clinic KL are performed by registered medical, LCP-certified doctors under Ministry of Health Malaysia guidelines; stem cell therapies at this aesthetic clinic are conducted under the oversight of the National Committee for Stem Cell Research and Therapy (NCSCRT) and comply with the regulatory framework of the Ministry of Health Malaysia and the National Pharmaceutical Regulatory Agency (NPRA); medical-grade stem cell preparations from GMP-certified sources only; no unverified or experimental stem cell injections are offered" 
                },
              ]}
              title="Anti-Aging Treatment in Malaysia at a Glance: Stem Cells, Stem Cell Therapies and Regenerative Medicine"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />
            <p className="text-sm text-taupe text-center max-w-2xl mx-auto">
              Bakir S, et al. A case series on safety and tolerability of human umbilical cord-derived mesenchymal stem cells on patients in Malaysia. 
              <a 
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11062224/" 
                target="_blank" 
                rel="nofollow" 
                className="text-wine font-bold italic"
              >
                PMC (PubMed Central)
              </a>. 
              2022;11062224. (Clinical update: My Bliss Clinic, 2025). This clinical investigation documents the high safety profile and therapeutic potential of cord-derived MSCs in the Malaysian population, highlighting significant improvements in systemic markers and tissue repair without adverse effects.
            </p>
        </motion.div>
      </section>

      {/* MSCs for Anti-Aging Section */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
        {/* Mesenchymal Stem Cells (MSCs) for Anti-Aging Table */}
        <TableForPages
          columns={[
            { key: "property", header: "MSC Property", className: "font-semibold" },
            { key: "meaning", header: "What It Means for Anti-Aging Therapy" },
            { key: "source", header: "Source and Safety Profile" },
            { key: "application", header: "Application at Nexus Clinic KL" },
          ]}
          data={[
            {
              property: "Self-Renewal and Multipotency",
              meaning: "Mesenchymal stem cells (MSCs) are defined by two key properties: the ability to self-renew (divide and produce identical daughter stem cells) and multipotency (the capacity to differentiate into bone, cartilage, muscle and fat cells depending on the signals they receive from the surrounding tissue environment); as the body ages, the pool of resident stem cells declines and their ability to self-renew diminishes; this is a primary driver of the aging process at the cellular level; stem cell anti-aging therapy introduces biologically active MSCs with high vitality and strong regenerative potential to support tissue repair and cellular renewal processes that have slowed with age",
              source: "Umbilical cord-derived MSCs (Wharton's Jelly MSCs) are the preferred source at this aesthetic clinic for anti-aging applications because they are the youngest and most biologically active MSC population available; collected from donated umbilical cords after childbirth with full informed consent, without harm to mother or baby; no embryonic stem cells are used; all donor material is screened for infectious disease and processed under GMP-certified laboratory conditions as required by the Ministry of Health Malaysia and NPRA",
              application: "IV infusion or targeted injection of MSCs in medically supervised sessions; number of sessions is determined at consultation based on patient age, health status and anti-aging goals; each session includes pre-treatment blood tests, medical review and post-session monitoring; results develop over 4 to 12 weeks as the cellular repair and tissue regeneration processes are initiated at the cellular level"
            },
            {
              property: "Paracrine Signalling and Exosome Release",
              meaning: "A significant proportion of the anti-aging therapeutic benefit of MSCs comes not from the stem cells themselves differentiating into new tissue but from the paracrine signals they emit: growth factors, cytokines and exosomes (nano-sized vesicles carrying messenger molecules including proteins, lipids and microRNA) that instruct surrounding cells to increase collagen production, reduce inflammation, improve wound healing and repair damaged tissues; this paracrine mechanism is why exosomes therapy, using the signalling molecules secreted by MSCs without the cells themselves, has emerged as a compelling and more accessible component of regenerative therapy for anti-aging",
              source: "Exosomes used at Nexus Clinic KL are derived from GMP-certified MSC cultures; they carry the growth factor and signalling cargo of MSCs and can be delivered topically under fractional CO2 or microneedling channels, or by direct injection; exosomes represent advances in regenerative medicine that provide MSC-like cellular repair signals without the complexity of live cell delivery; they are particularly valuable for improving skin quality, reducing wrinkle depth and restoring skin elasticity and hydration after energy-based skin treatments",
              application: "Exosomes are used at Nexus Clinic KL as a standalone treatment for skin rejuvenation or as a post-procedure healing booster following fractional CO2 resurfacing, thread lift or microneedling; the healing response is accelerated and skin quality improvements in elasticity, hydration, wrinkle reduction and skin tone are enhanced when exosomes are applied in the 24 to 48 hours after an energy-based treatment; book a consultation to determine whether exosomes are appropriate as part of your anti-aging treatment plan"
            },
            {
              property: "Anti-Inflammatory and Immune-Modulating Effects",
              meaning: "Chronic low-grade inflammation, sometimes called 'inflammaging', is one of the most important mechanisms driving the aging process at the cellular level; elevated inflammatory cytokines accelerate cellular senescence (the process by which cells permanently stop dividing), impair natural tissue regeneration, and contribute to the loss of skin collagen and elasticity that characterises visible aging; MSCs have well-documented anti-inflammatory properties, secreting molecules that reduce inflammatory signalling and support the body's ability to heal damaged tissues; this systemic anti-inflammatory effect is one of the key benefits of stem cell therapies that extend beyond skin appearance to include improved energy, vitality and overall cellular health",
              source: "Umbilical cord MSCs have lower immunogenicity than bone marrow or adipose-derived MSCs, making allogeneic (donor-to-recipient) treatment well-tolerated in most patients; the low risk of immune reaction is due to the unique immune-privileged status of Wharton's Jelly MSCs; patients with inflammatory skin conditions, chronic fatigue or reduced vitality may experience systemic benefits from MSC therapy beyond the skin-level improvements in wrinkle depth and sagging skin",
              application: "At Nexus Clinic KL, patients considering MSC stem cell therapies for anti-aging undergo a full medical assessment including blood panel before any treatment is scheduled; this ensures the patient is suitable for regenerative therapy, identifies any contraindications and establishes the baseline from which anti-aging outcomes are measured; a medically supervised, treatment plan tailored approach is the standard at this clinic in Malaysia"
            },
          ]}
          title="Mesenchymal Stem Cells (MSCs) for Anti-Aging: What Stem Cells Do and Why MSCs Are the Preferred Cellular Therapy"
          subtitle="Every anti-aging clinic in Malaysia that offers stem cell therapies lists MSCs as available without explaining what MSCs actually are. This is the clinical information that Malaysian patients need before deciding whether MSC stem cell anti-aging therapy is appropriate for them."
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />

          <motion.div
            variants={fadeInUp}
            className="mt-8 p-6 bg-wine/10 rounded-2xl"
          >
            <p className="text-taupe">
              The most important practical message from this MSC section for Malaysian patients is the regulatory framework. Stem cell therapies in Malaysia are governed by the Ministry of Health Malaysia through the National Committee for Stem Cell Research and Therapy (NCSCRT) and the National Pharmaceutical Regulatory Agency (NPRA). All MSC preparations used at Nexus Clinic KL are from GMP-certified sources and are compliant with the Ministry of Health Malaysia regulatory framework. At this aesthetic clinic, no unverified or experimental stem cell injections are offered; patients are informed of the current evidence base, the specific MSC source and the expected outcomes before any treatment is scheduled.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Complete Treatment Menu Table */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
            {/* Anti-Aging Treatment Options at Nexus Clinic KL Table */}
            <TableForPages
              columns={[
                { key: "treatment", header: "Treatment", className: "font-semibold" },
                { key: "whatItDoes", header: "What It Does" },
                { key: "bestFor", header: "Best For" },
                { key: "evidence", header: "Evidence Level" },
                { key: "sessions", header: "Sessions" },
              ]}
              data={[
                {
                  treatment: "Stem Cell Therapy (MSCs)",
                  whatItDoes: "Mesenchymal stem cell infusion or injection delivers multipotent, self-renewing cells that support tissue repair, repair damaged tissues at the cellular level, reduce inflammaging and stimulate collagen and elastin regeneration; the most advanced of all stem cell therapies offered at this aesthetic clinic in Malaysia; works at the cellular level to address the root biology of the aging process",
                  bestFor: "Patients seeking the most comprehensive anti-aging treatment; those with accelerated visible aging, significant loss of skin vitality and elasticity; patients who want to restore vitality and improve cellular health systemically as well as address skin appearance; best anti-aging option for patients in their 40s to 60s with multiple aging concerns",
                  evidence: "Advancing evidence from clinical trials; MSC-based anti-aging therapy is the most active area of advances in regenerative medicine; all MSC stem cell therapies at Nexus Clinic KL are conducted under MOH compliance and medically supervised protocols",
                  sessions: "1 to 3 initial sessions; number of sessions determined at consultation"
                },
                {
                  treatment: "PRP (Platelet-Rich Plasma)",
                  whatItDoes: "PRP therapy draws a small blood sample, centrifuges it to concentrate the platelet-rich plasma layer containing growth factors including PDGF, TGF-beta and VEGF, and injects this autologous preparation into target areas of the face, scalp or body; PRP stimulates the body's own healing response, triggers collagen production and improves skin quality, elasticity and hydration; platelet-rich plasma is the most widely evidence-supported regenerative therapy for skin anti-aging and hair restoration; it is autologous (from the patient's own blood) so there is no risk of rejection",
                  bestFor: "Facial skin rejuvenation: reducing fine lines and wrinkles, improving skin texture and elasticity, restoring radiance and youthful skin; hair restoration for androgenic alopecia; combined with microneedling, mesotherapy or fractional CO2 to enhance healing response and results; PRP is recommended as part of most anti-aging treatment programmes in Malaysia for patients who want non-surgical, non-invasive regenerative results",
                  evidence: "Strong published evidence for PRP in skin rejuvenation and hair restoration; well-established in clinical practice guidelines for platelet-rich plasma use in aesthetic medicine; consistently produced in the medical aesthetic literature as a safe and effective anti-aging treatment option; MOH-compliant autologous therapy",
                  sessions: "3 sessions initially, 4 to 6 weeks apart; maintenance every 6 to 12 months"
                },
                {
                  treatment: "Exosomes Therapy",
                  whatItDoes: "Exosomes are nano-sized extracellular vesicles derived from MSCs that carry the paracrine signalling cargo of stem cells, including growth factors, microRNA and proteins that instruct skin cells to repair damaged tissues, increase collagen and elastin production, reduce inflammation and improve wound healing; exosomes deliver MSC-derived regenerative signals without live cells, making them a highly accessible form of stem cell regenerative therapy; exosomes therapy is at the leading edge of advances in regenerative medicine for skin anti-aging",
                  bestFor: "Skin quality improvement: reducing wrinkle depth, improving skin elasticity and hydration, restoring a youthful skin appearance; accelerating healing response after energy-based treatments such as fractional CO2 laser or microneedling; scalp health and hair quality improvement; patients who want the cellular repair benefits of stem cell regenerative therapy without IV infusion; firms the skin and improves overall skin radiance and texture at the cellular level",
                  evidence: "Rapidly advancing evidence base; exosomes are among the most actively researched areas of advances in regenerative medicine globally; current evidence supports strong improvements in skin quality, collagen density and wrinkle reduction with MSC-derived exosomes; emerging evidence for systemic benefits when delivered IV; all exosomes at Nexus Clinic KL are from GMP-certified MSC sources compliant with Ministry of Health Malaysia standards",
                  sessions: "1 to 4 sessions; often combined with other treatments as a healing booster"
                },
                {
                  treatment: "Thread Lift",
                  whatItDoes: "A thread lift is a minimally invasive non-surgical procedure in which dissolvable polydioxanone (PDO) or PLLA (poly-L-lactic acid) threads are inserted under the skin using fine needles to lift and reposition saggy skin, tighten sagging skin and stimulate natural collagen production around the thread as it dissolves; thread lift produces immediate mechanical lifting of saggy facial contours including jowls, cheeks, brows and neck; as the thread dissolves over 6 to 12 months, it triggers natural tissue regeneration and collagen formation that continues to improve skin quality; thread lift is the best non-surgical alternative for patients who want to address saggy skin without the recovery of a facelift",
                  bestFor: "Sagging skin in the mid-face, jowls, brows and neck; patients who have lost the structural firmness that keeps skin elevated and taut; patients seeking saggy skin correction and a lifted, youthful appearance without general anaesthesia or surgical downtime; thread lift is often combined with MSC therapy, PRP or exosomes for combined structural lifting and cellular rejuvenation in the same anti-aging programme",
                  evidence: "Well-established evidence for thread lift in facial lifting and anti-aging treatment; PDO thread lift is a standard minimally invasive treatment option in medical aesthetic practice; strong safety profile when performed by trained doctors using medical-grade threads; at Nexus Clinic KL, thread lift is doctor-performed using medical-grade PDO and PLLA threads",
                  sessions: "Single session; repeat after 12 to 18 months as threads dissolve"
                },
                {
                  treatment: "High-Intensity Focused Ultrasound (HIFU)",
                  whatItDoes: "High-intensity focused ultrasound (HIFU) delivers focused ultrasound energy to the SMAS layer (the structural layer of facial tissue beneath the skin) at precise depths of 1.5mm, 3.0mm and 4.5mm; this thermal energy creates coagulation points at the treatment depth that trigger a natural tissue repair and collagen remodelling response over the following 2 to 3 months; HIFU firms the skin, lifts the brow and jowl area, tightens the neck and reduces wrinkle depth without surgery, without cutting and without damage to the skin surface; high-intensity focused ultrasound is the non-surgical treatment with the deepest tissue reach of any non-invasive anti-aging device",
                  bestFor: "Facial and neck lifting and tightening; patients with mild to moderate sagging skin and wrinkles who are not yet candidates for thread lift or surgery; improving skin elasticity and collagen density; reducing the appearance of jowls, brow hooding and neck bands; HIFU is often combined with PRP or exosomes to optimise the healing response and tissue regeneration triggered by the ultrasound energy",
                  evidence: "Well-established evidence for HIFU in non-surgical facial lifting and skin tightening; FDA-cleared for the brow lift indication; extensive clinical data on skin collagen improvement and anti-aging outcomes; one of the top anti-aging treatments in aesthetic medicine for patients seeking a non-surgical alternative to facelift; at Nexus Clinic KL this is performed as a medical aesthetic procedure by trained doctors",
                  sessions: "1 session; repeat after 12 to 18 months; combination with PRP or exosomes enhances results"
                },
                {
                  treatment: "Fractional CO2 Laser",
                  whatItDoes: "Fractional CO2 laser delivers microscopic columns of laser energy into the layers of skin in a fractional pattern, leaving surrounding skin intact to accelerate healing; at each treatment point, the fractional CO2 creates a controlled wound healing response that stimulates new collagen formation, removes damaged skin cells and regenerates the skin surface; fractional CO2 is the most effective laser skin resurfacing treatment for reducing wrinkle depth, improving skin texture, tightening the skin and treating acne scars; it is a skin treatment that produces structural skin improvement at the level of the dermis, not just the surface; applying exosomes immediately after fractional CO2 accelerates the healing response and enhances collagen regeneration",
                  bestFor: "Moderate to severe wrinkles and skin texture concerns; acne scarring; skin laxity and loss of elasticity; patients who want the most significant skin structural improvement available from a laser treatment; fractional CO2 requires 5 to 7 days of healing downtime; not suitable for active tanning or sun-exposed skin; exosomes and PRP applied post-fractional CO2 at Nexus Clinic KL as standard to accelerate healing response and improve anti-aging results",
                  evidence: "Gold standard evidence for fractional CO2 in skin resurfacing, wrinkle reduction and scar treatment; consistent results for skin collagen improvement and anti-aging treatment outcomes in published clinical literature; when combined with exosomes or PRP, healing time is reduced and collagen regeneration is enhanced; this combination represents the current best practice in medical aesthetic skin treatment at this clinic in Malaysia",
                  sessions: "1 to 3 sessions per course; 6 to 8 weeks between sessions; combination with exosomes or PRP maximises anti-aging results"
                },
              ]}
              title="Anti-Aging Treatment Options at Nexus Clinic KL: From Stem Cell Therapies to Thread Lift and Regenerative Therapy"
              subtitle="The best anti-aging outcomes are produced not by a single treatment but by combining cellular therapies with structural treatments in a sequence and combination matched to each patient's specific biology."
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />
          <motion.div
            variants={fadeInUp}
            className="mt-8 p-6 bg-wine/10 rounded-2xl"
          >
            <p className="text-taupe">
              The combination row in this treatment menu is the most clinically important for Malaysian patients seeking comprehensive anti-aging results. Stem cell therapies (MSCs, PRP, exosomes) address the cellular biology of aging from within. Structural treatments (thread lift, HIFU, fractional CO2) address the physical consequences of collagen loss and sagging skin that have already occurred. Using both categories in sequence creates an anti-aging effect that is significantly greater than either category alone.
                For women whose anti-aging concerns intersect with hormonal changes at perimenopause or menopause that accelerate skin aging and collagen loss, our{' '}
                <Link href="/regenerative/hormone-replacement-therapy-malaysia/" className="text-wine font-bold italic">
                  hormone replacement therapy in Malaysia
                </Link>{' '}
                provides important context on how restoring oestrogen levels supports skin collagen and overall anti-aging outcomes.
              </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Cellular Biology of Aging Section */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
        {/* Cellular Biology of Aging Table */}
        <TableForPages
          columns={[
            { key: "driver", header: "Aging Driver", className: "font-semibold" },
            { key: "cause", header: "How It Causes Visible Aging" },
            { key: "address", header: "How Anti-Aging Treatments at Nexus Clinic KL Address This" },
          ]}
          data={[
            {
              driver: "Decline in Stem Cell Activity",
              cause: "The body contains stem cells in every tissue that continuously regenerate damaged cells and maintain tissue integrity throughout life; as the aging process progresses, the number of active stem cells in each tissue diminishes and their ability to self-renew declines; in the skin this manifests as slower wound healing, reduced collagen production, thinner dermis and loss of the skin's ability to maintain its structural integrity; the same decline in stem cell activity that causes visible aging in the skin also affects muscle, bone, cartilage and the immune system; this is why systemic stem cell anti-aging therapy can produce improvements in energy and vitality alongside skin improvements",
              address: "MSC stem cell anti-aging therapy and exosomes therapy directly address stem cell activity decline by introducing biologically active mesenchymal stem cells or their paracrine signalling molecules to reinstate cellular repair signals that have diminished with age; the regenerative potential of umbilical cord-derived MSCs is greater than that of the patient's own aged stem cells, which is why allogeneic (donor-sourced) MSCs are preferred for anti-aging applications; stem cell regenerative therapy targets the aging process at its cellular biology root rather than addressing only the visible surface consequence"
            },
            {
              driver: "Collagen and Elastin Loss",
              cause: "Collagen provides the structural scaffold of the dermis; elastin provides the elasticity that allows skin to return to its original shape after deformation; skin loses collagen at approximately 1% per year after age 25 and this accelerates after the menopause in women due to the loss of oestrogen, which directly stimulates fibroblasts to produce collagen; as collagen density declines, the dermis thins, wrinkles form from within the dermis rather than just on the surface, and the skin loses its ability to resist gravitational pull leading to sagging skin and saggy facial contours; loss of elastin means the skin loses the snap-back quality that keeps it looking taut and youthful",
              address: "PRP therapy and exosomes therapy directly stimulate fibroblast activity and collagen synthesis through the growth factors they deliver to the dermis; HIFU and fractional CO2 create controlled thermal injury at the dermis level that triggers a natural tissue repair response with new collagen formation over 2 to 3 months; thread lift provides immediate mechanical support for sagging skin while simultaneously stimulating collagen production around the dissolving thread; the combination of cellular (MSCs, PRP, exosomes) and structural (HIFU, fractional CO2, thread lift) treatments produces complementary collagen stimulation that improves skin elasticity and reduces visible aging more effectively than either approach alone"
            },
            {
              driver: "Inflammaging (Chronic Low-Grade Inflammation)",
              cause: "Chronic low-grade systemic inflammation that accumulates with age, known as inflammaging, is now recognised as one of the primary biological drivers of both visible aging and age-related chronic disease; elevated circulating inflammatory cytokines accelerate cellular senescence (cells permanently stopping dividing and instead secreting inflammatory molecules that damage neighbouring cells), degrade collagen and elastin through matrix metalloproteinase activation, and impair the body's ability to heal damaged tissues; inflammaging is worsened by UV exposure, sleep deprivation, metabolic dysfunction and stress, all of which are common contributors to accelerated visible aging in Malaysian patients",
              address: "MSCs are the most potent anti-inflammatory cellular therapy available; their secretome (the collection of molecules MSCs secrete) includes multiple anti-inflammatory cytokines and factors that reduce systemic inflammaging and support cellular health; PRP also has documented anti-inflammatory properties through its growth factor cargo; reducing the inflammatory load in the aging skin and body creates an environment in which collagen and elastin production can recover and in which the stem cell regenerative potential of resident tissue cells is better preserved; this is why MSC-based anti-aging therapy produces systemic improvements in energy, vitality and resilience alongside the visible skin improvements"
            },
            {
              driver: "Glycation and Oxidative Stress",
              cause: "Glycation (the non-enzymatic bonding of glucose to proteins including collagen) cross-links collagen fibres, making them rigid and less able to support the dermis elasticity and bounce-back quality; glycated collagen fibres also absorb UV light less efficiently, contributing to the yellowed, dull skin tone characteristic of accelerated aging; oxidative stress from UV exposure, pollution and metabolic processes generates free radicals that damage cell membranes, mitochondria and DNA, impair the body's ability to heal and accelerate the aging process at the cellular level; these two processes are the primary mechanism by which poor diet, high sugar intake and UV exposure translate into accelerated visible aging",
              address: "While no aesthetic treatment reverses glycation directly, reducing the glycation and oxidative stress load is addressed in the skincare and lifestyle component of every anti-aging programme at Nexus Clinic KL; medical-grade skincare including antioxidant serums (Vitamin C, niacinamide, retinoids) forms part of the treatment plan tailored for every patient; high SPF50 daily sunscreen use is mandatory; fractional CO2 and exosomes therapy address the structural consequences of glycation by stimulating new collagen formation to replace cross-linked fibres; the women's health and metabolic health components of the Nexus Clinic KL programme address the hormonal and metabolic drivers of accelerated aging that worsen glycation and oxidative stress"
            },
          ]}
          title="The Cellular Biology of Aging: Why Anti-Aging Therapy Must Address the Underlying Drivers, Not Just the Visible Surface"
          subtitle="Understanding the cellular biology of the aging process is what distinguishes a scientifically grounded anti-aging treatment programme from a generic skincare upgrade."
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />
        <p className="text-center max-w-2xl mx-auto text-taupe">
          For women whose anti-aging concerns intersect with hormonal changes at perimenopause or menopause that accelerate skin aging and collagen loss, our{' '}
          <Link href="/regenerative/hormone-replacement-therapy-malaysia/" className="text-wine font-bold italic">
            hormone replacement therapy in Malaysia
          </Link>{' '}
          provides important context on how restoring oestrogen levels supports skin collagen and overall anti-aging outcomes.
        </p>
        </motion.div>
      </section>

      {/* Cost Section - Updated with 2026 pricing */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
        {/* Anti-Aging Treatment Cost Table */}
        <TableForPages
          columns={[
            { key: "treatment", header: "Treatment / Programme" },
            { key: "details", header: "Details" },
            { key: "price", header: "Price Range (RM) 2026" },
          ]}
          data={[
            { treatment: "Anti-Aging Initial Consultation", details: "Comprehensive assessment: aging concerns, skin type and Fitzpatrick classification, medical history, anti-aging goals; physical examination of skin quality, sagging skin, wrinkle depth and elasticity; treatment plan tailored to the patient's specific concerns and regenerative potential; book a consultation today", price: "RM 150 to RM 300" },
            { treatment: "Pre-Treatment Blood Panel (for Stem Cell Therapies)", details: "Full blood count, liver function, renal function, infectious disease screen (Hepatitis B, Hepatitis C, HIV), inflammatory markers; required before MSC stem cell anti-aging therapy; baseline for monitoring cellular health improvements", price: "RM 300 to RM 500 (laboratory fees)" },
            { treatment: "MSC Stem Cell Anti-Aging Therapy (per session)", details: "Wharton's Jelly mesenchymal stem cell (MSC) therapy; medically supervised IV infusion or targeted injection; GMP-certified MSC preparation from Ministry of Health Malaysia-compliant source; includes pre-session medical review and post-session monitoring; number of sessions determined at consultation", price: "RM 8,000 to RM 20,000 per session" },
            { treatment: "PRP (Platelet-Rich Plasma) Therapy (per session)", details: "Autologous PRP prepared from patient's own blood; facial injection, scalp injection or combined with microneedling; 3-session initial programme recommended; anti-aging treatment for skin rejuvenation and hair restoration; includes platelet-rich plasma preparation and targeted injection", price: "RM 1,200 to RM 2,500 per session" },
            { treatment: "Exosomes Therapy (per session)", details: "GMP-certified MSC-derived exosomes; delivered topically post-treatment or by injection; can be combined with fractional CO2, PRP, microneedling or thread lift; accelerates healing response and improves skin quality outcomes; cellular repair at the skin level", price: "RM 1,500 to RM 3,500 per session" },
            { treatment: "Thread Lift (per session)", details: "Medical-grade PDO or PLLA threads for saggy skin lifting and sagging skin correction; minimally invasive non-surgical facial lifting; includes local anaesthetic; lifting effect immediate; collagen production continues for 6 to 12 months; doctor-performed at Nexus Clinic KL", price: "RM 2,500 to RM 6,000 per session (area dependent)" },
            { treatment: "HIFU (High-Intensity Focused Ultrasound) per session", details: "Non-surgical face and neck lifting using high-intensity focused ultrasound; treats SMAS layer at 1.5mm, 3.0mm and 4.5mm depths; firms the skin and stimulates collagen remodelling over 2 to 3 months; non-invasive with no downtime; doctor-performed", price: "RM 1,800 to RM 4,500 per session (area dependent)" },
            { treatment: "Fractional CO2 Laser (per session)", details: "Fractional CO2 laser skin resurfacing for wrinkle treatment, skin texture improvement and scar reduction; 5 to 7 days healing downtime; exosomes or PRP applied post-treatment as standard to optimise healing response and collagen regeneration; doctor-performed", price: "RM 1,500 to RM 3,500 per session" },
            { treatment: "Comprehensive Anti-Aging Programme", details: "Customised programme combining 2 or more treatment modalities including stem cell therapies, PRP, exosomes and/or energy-based treatments; treatment plan tailored to the patient's specific anti-aging goals; programme pricing provides better per-session value; number of sessions agreed at consultation", price: "From RM 12,000 (programme pricing available)" },
          ]}
          title="Anti-Aging Treatment Cost in Malaysia 2026: Transparent Pricing at Nexus Clinic KL"
          subtitle="All pricing is disclosed at the initial consultation before any treatment begins."
          variant="compact"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />

        {/* Footnote */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 p-6 bg-wine/10 rounded-2xl"
        >
          <p className="text-taupe">
            Comprehensive anti-aging programmes that combine cellular therapies with structural treatments provide the most complete anti-aging results in Malaysia and are offered at programme pricing that provides better per-session value than individual session booking. All programme pricing at Nexus Clinic KL is disclosed before the first session is booked.
          </p>
        </motion.div>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />
    <FAQWithSchema data={faqData} />

      {/* Final CTA Section */}
      <section className="py-20 bg-linear-to-br from-wine to-rose text-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl mb-6"
          >
            Anti-Ageing in Malaysia: Evidence-Based, MOH-Compliant Anti-Aging Treatments at Nexus Clinic KL
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-8 max-w-2xl mx-auto text-light/90"
          >
            Anti-aging treatment in Malaysia has entered an era where cellular biology is the starting point, not the afterthought. The combination of stem cell anti-aging therapy using MSCs, PRP, exosomes and structural treatments including thread lift, HIFU and fractional CO2 laser provides a comprehensive anti-aging treatment capability that addresses visible aging at every level.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8 max-w-2xl mx-auto text-light/90"
          >
            At Nexus Clinic KL, every anti-aging patient receives a treatment plan tailored to their specific aging biology, not a generic protocol. All stem cell therapies are compliant with the Ministry of Health Malaysia regulatory framework. All treatments are doctor-performed by registered medical, LCP-certified doctors with over 15 years of combined clinical experience.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact-us/" className="bg-light text-wine px-12 py-4 rounded-full font-medium text-lg hover:bg-cream transition-all duration-300 shadow-2xl">
              Book Your Anti-Aging Assessment
            </Link>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-8 text-light/80">
            Nexus Clinic Kuala Lumpur
            <br />
            LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
            <br />
            Phone: 016- 702 5699 / 03- 2163 5699
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default AntiAgingLanding;