"use client";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  CheckCircle2,
  XCircle,
  Activity,
  Eye,
  HeartPulse,
  Droplet,
  Sparkle,
  MessageCircle,
  MapPin,
  ChevronDown,
  Syringe,
  TrendingUp,
} from "lucide-react";

import {
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import TableForPages from "@/src/components/TableForPages";
import Image from "next/image";
const OShotLanding = () => {
  const faqs = [
    {
      q: "What is the O-Shot and how does it differ from other vaginal treatments?",
      a: "The O-Shot (Orgasm Shot) is a non-surgical vaginal rejuvenation treatment that uses platelet-rich plasma injection therapy to carefully inject PRP derived from your own blood into specific areas of the vagina including the clitoris, G-spot and anterior vaginal wall; because PRP is derived from your own blood, the minimal risk of side effects is significantly lower than with synthetic or pharmaceutical injectable treatments; the O-Shot is a non-surgical, non-hormonal treatment that relies entirely on the growth factors in your own platelet-rich plasma to stimulate tissue rejuvenation, collagen production and improved blood flow in the vaginal tissue; it differs from local vaginal oestrogen therapy which works through hormonal signalling, and from energy-based vaginal treatments which use thermal or radiofrequency energy to stimulate collagen remodelling; the O-Shot is most effective when used as part of an integrated women's sexual health and wellness programme.",
    },
    {
      q: "Is the O-Shot injection painful?",
      a: "The O-Shot injection is performed under topical numbing cream applied to the vaginal and clitoral area 20 to 30 minutes before the PRP is injected into the vagina; once the numbing cream has taken full effect, most women describe the procedure as producing only mild pressure or minimal discomfort at the injection site; the clitoral area and anterior vaginal wall contain concentrated nerve endings and would be sensitive without adequate numbing, which is why the numbing preparation step is medically necessary and cannot be rushed at a properly operated specialist clinic; you may experience minimal swelling and bruise for up to 3 days after treatment in the treated area, which is an expected and normal response; this is self-limiting and resolves without treatment; sexual activity is typically resumed 3 days after treatment.",
    },
    {
      q: "What conditions can the O-Shot help treat?",
      a: "The O-Shot injections are used for: urinary incontinence (stress urinary incontinence triggered by coughing, sneezing or exercise), where the evidence for improvement is the most consistent of all O-Shot indications; vaginal dryness and painful intercourse, particularly in perimenopausal and postmenopausal women where the O-Shot is most effective when combined with hormone therapy; reduced sexual pleasure and difficulty achieving orgasm, where PRP injected into the vagina may improve sensitivity and the engorgement response of the clitoris and G-spot; vaginal tone improvement as a non-surgical treatment for vagina tightening following childbirth; lichen sclerosus as an emerging indication with promising early evidence; the O-Shot addresses multiple aspects of women's sexual health and overall well-being in a single non-surgical procedure.",
    },
    {
      q: "How many O-Shot sessions are needed and how long do results last?",
      a: "Most specialist clinic protocols recommend 2-3 treatments spaced 2 weeks apart for optimal tissue rejuvenation results; however, some women notice meaningful improvement after a single O-Shot session, particularly for urinary incontinence where the anterior vaginal wall tissue rejuvenation response may be sufficient after one injection; improvement typically begins within a few weeks of the first session and continues to develop from the second to fourth week post-injection as collagen production and new blood vessel formation matures; the O-Shot can last 12 to 18 months before the regenerative effect diminishes and maintenance treatment is recommended; at Nexus Clinic KL, a follow-up consultation at 6 to 8 weeks post-injection assesses the response and determines whether additional O-Shot sessions or programme continuation is appropriate.",
    },
    {
      q: "Is the O-Shot safe for all women?",
      a: "The O-Shot is generally safe for most women because PRP derived from your own blood is used in this natural treatment; making it a safer option compared to many synthetic injectable performance enhancement methods available on the market; the risk of allergic reactions is minimal; however, contraindications to the O-Shot include: active vaginal infection or cervicitis (infection must be treated before any vaginal injection); significant bleeding disorder or current anticoagulant medication that cannot be paused; active cancer or cancer in remission where growth factor injection requires oncologist consultation before proceeding; pregnancy; at Nexus Clinic KL, all contraindications are assessed at the initial consultation before any O-Shot injection is scheduled; women with lichen sclerosus who are interested in the O-Shot are assessed individually as this emerging indication requires specific clinical discussion about current evidence and realistic expectations.",
    },
    {
      q: "Can the O-Shot help with urinary incontinence?",
      a: "Urinary incontinence improvement is the indication with the most published evidence for vaginal PRP injection therapy and is one of the primary reasons many Malaysian women seek the O-Shot; the PRP is carefully injected into specific areas of the vagina adjacent to the urethral sphincter and periurethral tissue to stimulate collagen production and help to heal the muscle tissue in the vagina and periurethral structures that support the sphincter mechanism; improved urethral support from collagen production and blood to repair damaged blood capillaries in the periurethral area reduces involuntary leakage; results for urinary incontinence typically develop within a few weeks and continue to improve over 2 to 3 months as the tissue rejuvenation matures; women with mild to moderate stress urinary incontinence who have not responded to pelvic floor physiotherapy alone may find the O-Shot a useful adjunct; the O-Shot is not a replacement for pelvic floor physiotherapy but complements it by providing growth factor regeneration of the periurethral tissue that exercise alone cannot achieve.",
    },
    {
      q: "What is the G-spot injection component of the O-Shot?",
      a: "The G-spot injection refers to the component of the O-Shot protocol where PRP is carefully injected into the anterior vaginal wall at the location associated with the Grafenberg spot (G-spot), an area of particular sensitivity in the anterior wall of the vagina associated with internal stimulation and orgasm; the G-spot injection is typically included as part of the standard O-Shot injection protocol rather than as a separate procedure; when PRP is injected into the vagina at the anterior wall location, the growth factors stimulate blood flow and neovascularisation in the area, improve the engorgement response of the G-spot tissue during sexual stimulation and may enhance sensitivity and orgasm quality from this area; at Nexus Clinic KL, the O-shot and G-spot injection together as part of the same session are included in the standard O-Shot protocol for women seeking sexual pleasure enhancement; a dedicated enhanced G-spot injection option with additional PRP volume directed to the anterior vaginal wall is also available.",
    },
    {
      q: "How does the O-Shot compare to the P-Shot for couples?",
      a: "The O-Shot for women and the P-Shot (Priapus Shot) for men are the female and male versions of the same PRP injection therapy concept; both use platelet-rich plasma derived from the patient's own blood, injected into the genital tissue to stimulate blood flow, tissue rejuvenation, collagen production and improved sensitivity; a session of P-Shot for the male partner can be scheduled at Nexus Clinic KL on the same day as the O-Shot for the female partner, with both procedures conducted in separate private consultation rooms; the couple's programme approach allows both partners to address their sexual health and overall well-being simultaneously; the sexual health and wellness benefit of both partners receiving regenerative treatment at the same time is that the improvements in sensitivity, erection quality and orgasm occur on a compatible timeline, allowing both partners to notice the changes together within a few weeks of their sessions.",
    },
    {
      q: "Is the O-Shot consultation at Nexus Clinic KL confidential?",
      a: "Yes. All women's sexual health and vaginal rejuvenation consultations at Nexus Clinic KL are fully confidential; the nature of the consultation is not disclosed to reception or administrative staff beyond the scheduling requirement; the O-Shot procedure is performed in a private consultation room by a certified medical LCP-certified doctor; the clinic understands that vaginal and sexual health concerns are among the most personal matters a woman can discuss with a healthcare provider and approaches every consultation with sensitivity, professionalism and without judgement; you are welcome to attend alone and no partner attendance is required; all records are maintained in strict confidence under Malaysian data protection law; Nexus Clinic KL is a specialist clinic and medical centre for women's sexual health serving patients from Bangsar, TTDI, Mont Kiara, KL City, Puchong and across Malaysia.",
    },
    {
      q: "How do I make an appointment for the O-Shot at Nexus Clinic KL?",
      a: "To make an appointment for an O-Shot consultation at Nexus Clinic KL, contact us directly by phone or WhatsApp using the contact details on the Nexus Clinic KL website; appointments are available Monday to Saturday; the initial consultation is priced at RM 150 to RM 300 and covers full clinical assessment, treatment discussion and pricing before any O-Shot injection is scheduled; there is no obligation to proceed with treatment at the consultation; contact us for further information on whether the O-Shot, G-spot injection, vaginal oestrogen therapy or a combination approach is most appropriate for your specific sexual health and wellness concerns; Nexus Clinic KL is located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, a medical centre serving women from across KL, Bangsar, TTDI, Mont Kiara, KL City, Puchong, Petaling Jaya, KLCC, Ampang and throughout Malaysia; contact us today to take the first step toward addressing your sexual health concerns.",
    },
  ];

  // O-Shot benefits with evidence status
  const benefits = [
    {
      title: "Enhanced Sexual Pleasure and Orgasm Quality",
      mechanism: "PRP growth factors stimulate neovascularisation and improve blood flow to vaginal tissue; enhanced sensitivity improves orgasm intensity and frequency",
      evidence: "Most commonly reported benefit; individual experience varies; develops from second to fourth week post-injection",
    },
    {
      title: "Reduced Urinary Incontinence",
      mechanism: "PRP stimulates collagen production in periurethral tissue, improving mechanical support of urethral sphincter",
      evidence: "Strongest published evidence; most consistent clinical outcome across studies; results develop within weeks",
    },
    {
      title: "Vaginal Dryness and Lubrication Improvement",
      mechanism: "PRP stimulates collagen production and blood flow to vaginal tissue, improving natural lubrication",
      evidence: "Most effective when combined with hormone therapy; synergistic effect with oestrogen",
    },
    {
      title: "Tissue Rejuvenation and Vaginal Tightening",
      mechanism: "PRP stimulates local fibroblast activity and collagen production for non-surgical vaginal tone improvement",
      evidence: "Modest results compared to surgical options; develops over 4-8 weeks; 2-3 treatments recommended",
    },
  ];

  // Procedure steps
  const procedureSteps = [
    {
      step: "Step 1: Initial Consultation and Assessment",
      details: "Full clinical history covering sexual health concerns, physical examination, hormonal status review, evidence discussion, and treatment plan development",
    },
    {
      step: "Step 2: Blood Draw and PRP Preparation",
      details: "20-60ml blood drawn from arm; centrifuge spins for 15-20 minutes to separate platelet-rich plasma; numbing cream applied simultaneously",
    },
    {
      step: "Step 3: Topical Numbing and Local Anaesthetic",
      details: "Numbing cream applied for 20-30 minutes; may include local anaesthetic for vaginal injection; ensures patient comfort during procedure",
    },
    {
      step: "Step 4: PRP Injection into Vagina and Clitoris",
      details: "PRP injected into anterior vaginal wall (G-spot area), clitoral hood and body; total injection time 10-15 minutes; no downtime",
    },
  ];

  // Comparison table data
  const comparisonOptions = [
    {
      treatment: "O-Shot (PRP Injection)",
      mechanism: "Autologous PRP growth factors stimulate blood flow, collagen production, and tissue rejuvenation",
      bestFor: "Sexual pleasure enhancement, orgasm quality, urinary incontinence, non-hormonal rejuvenation",
      invasiveness: "Minimally invasive injection with topical numbing",
      evidence: "Emerging; strongest for urinary incontinence",
    },
    {
      treatment: "Local Vaginal Oestrogen Therapy",
      mechanism: "Oestrogen replacement restores hormonal support to vaginal epithelium",
      bestFor: "Menopausal vaginal dryness, recurrent UTIs, vaginal atrophy",
      invasiveness: "Non-invasive; topical cream, pessary or ring",
      evidence: "Very strong; gold standard for menopausal vaginal atrophy",
    },
    {
      treatment: "Energy-Based Vaginal Treatments (Laser/RF)",
      mechanism: "Thermal or radiofrequency energy stimulates collagen remodelling and tissue tightening",
      bestFor: "Vaginal laxity after childbirth, stress urinary incontinence",
      invasiveness: "Non-surgical; device probe inserted into vagina",
      evidence: "Moderate to good; growing evidence base",
    },
  ];

  return (
    <div className="min-h-screen bg-light font-[--font-inter] overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-cream) 0%, var(--color-light) 100%)",
        }}
      >
        {/* Decorative Elements */}
        <motion.div
          variants={scaleIn}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-rose opacity-5 blur-3xl"
        />
        <motion.div
          variants={scaleIn}
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-wine opacity-5 blur-3xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-glass backdrop-blur-sm rounded-full border border-taupe border-opacity-20">
                <Heart className="w-4 h-4 text-wine mr-2" />
                <span className="text-sm text-brown font-medium">
                  O-Shot in Malaysia at Nexus Clinic KL
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown leading-tight font-georgia">
                O-Shot in Malaysia
                <span className="italic text-wine">
                  Non-Surgical Vaginal Rejuvenation with PRP
                </span>
              </h1>

              <p className="lg:text-xl leading-relaxed text-brown">
                The O-Shot (Orgasm Shot) uses platelet-rich plasma (PRP) from
                your own blood to enhance sexual pleasure, improve orgasm intensity,
                reduce urinary incontinence, and address vaginal dryness.
              </p>

              <p className="lg:text-lg text-brown border-l-4 border-rose pl-6 italic">
                Because PRP is derived from your own blood, this natural treatment
                offers a safer option compared to synthetic injectable methods.
                The most consistent evidence supports its use for urinary incontinence
                and vaginal tissue rejuvenation.
              </p>

              <motion.div
                variants={scaleIn}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact-us/"
                  className="px-8 py-4 bg-wine text-white rounded-full font-semibold hover:bg-rose transition-colors shadow-lg"
                >
                  Book Your O-Shot Consultation
                </motion.a>
                <Whatsapp message={"Hi! can i get more info"} />
              </motion.div>
              <div className="flex items-center gap-4 text-sm text-brown/70">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-wine" />
                  <span>Wisma UOA II, Jalan Pinang, KL</span>
                </div>
                <div className="w-1 h-1 bg-taupe rounded-full" />
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-wine" />
                  <span>Doctor-Performed | Confidential</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-10 rounded-3xl transform rotate-3" />
              <div className="relative bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white border-opacity-20 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brown">
                        Nexus Clinic Kuala Lumpur
                      </h3>
                      <p className="text-taupe">
                        LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
                      </p>
                      <p className="text-wine font-medium mt-1">
                        Mobile: 016-7025699 / 03-21635699
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-taupe border-opacity-20 pt-4">
                    <h3 className="font-semibold text-brown mb-2">
                      Serving women across Malaysia:
                    </h3>
                    <p className="text-taupe">
                      Bangsar, TTDI, Mont Kiara, KL City, Puchong, Petaling Jaya,
                      KLCC, Ampang and throughout Malaysia
                    </p>
                  </div>

                  <div className="bg-wine bg-opacity-5 p-4 rounded-xl">
                    <p className="text-light text-sm italic">
                      <span className="font-semibold">Clear expectations:</span>{" "}
                      The O-Shot is an emerging regenerative therapy. Sexual pleasure
                      and orgasm enhancement benefits are reported by many women who
                      respond to treatment; this clinic communicates the current evidence
                      base honestly at every consultation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-taupe" />
          </div>
        </motion.div>
      </motion.section>

      {/* What is O-Shot Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              What Is the O-Shot?
            </h2>
            <div className="w-24 h-1 bg-rose mx-auto rounded-full" />
            <p className="text-taupe mt-6">
              Non-surgical vaginal rejuvenation using your body's own growth factors
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="prose prose-lg text-brown">
                <p className="text-xl text-wine font-medium">
                  The O-Shot (Orgasm Shot) is a non-surgical vaginal rejuvenation
                  treatment that uses platelet-rich plasma (PRP) derived from your
                  own blood.
                </p>
                <p>
                  PRP is carefully injected into specific areas of the vagina and
                  clitoral region to stimulate blood flow, tissue rejuvenation,
                  collagen production and improved sensitivity.
                </p>
                <p>
                  The O-Shot is designed to enhance sexual pleasure, improve orgasm
                  intensity, reduce urinary incontinence, address vaginal dryness
                  and support overall sexual health and well-being.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: Droplet, label: "Urinary Incontinence" },
                  { icon: Eye, label: "Vaginal Dryness" },
                  { icon: Sparkle, label: "Reduced Sexual Pleasure" },
                  { icon: Activity, label: "Painful Intercourse" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-cream p-4 rounded-xl text-center"
                  >
                    <item.icon className="w-6 h-6 text-wine mx-auto mb-2" />
                    <span className="text-sm text-brown">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-wine/5 p-4 rounded-xl">
                <p className="text-sm text-brown">
                  <span className="font-semibold">Note:</span> The most consistent
                  evidence currently supports O-Shot use for urinary incontinence
                  and vaginal tissue rejuvenation, while sexual pleasure benefits
                  are reported by many women who respond to treatment.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-wine to-rose opacity-10 rounded-3xl transform -rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/regenerative/o-shot.webp"
                  alt="O-Shot Procedure at Nexus Clinic"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm opacity-90">
                    PRP preparation and O-Shot procedure at Nexus Clinic Kuala Lumpur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How PRP Works Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              How PRP Works in the Vagina
            </h2>
            <p className="text-taupe">
              PRP contains concentrated growth factors that stimulate natural healing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Neovascularisation", desc: "Promotes growth of new blood vessels improving blood flow and circulation to vaginal tissue" },
              { title: "Collagen Production", desc: "Activates natural collagen production for tissue rejuvenation and vaginal tone improvement" },
              { title: "Growth Factor Release", desc: "PDGF, TGF-beta, VEGF and EGF stimulate tissue repair and regeneration" },
              { title: "Tissue Healing", desc: "Helps heal muscle tissue and repair damaged blood capillaries in vaginal area" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartPulse className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-semibold text-brown mb-2">{item.title}</h3>
                <p className="text-sm text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-brown">
              Because PRP is derived from your own blood (autologous), the risk of
              side effects is minimal. No risk of disease transmission or immune rejection.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section with Evidence Status */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <TrendingUp className="w-12 h-12 text-wine mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              Benefits of O-Shot
            </h2>
            <p className="text-taupe">
              What PRP injected into the vagina may improve for women's sexual health
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-wine mb-2">{benefit.title}</h3>
                <p className="text-brown mb-3"><span className="font-medium">Mechanism:</span> {benefit.mechanism}</p>
                <div className="bg-white p-3 rounded-xl">
                  <p className="text-sm text-brown"><span className="font-medium">Evidence status:</span> {benefit.evidence}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-2xl max-w-4xl mx-auto">
            <p className="text-brown text-center">
              <span className="font-semibold">Key takeaway:</span> Urinary incontinence improvement
              has the strongest published evidence. Sexual pleasure enhancement is the most commonly
              reported benefit but individual experience varies significantly.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Procedure Steps Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Syringe className="w-12 h-12 text-wine mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              O-Shot Procedure Step by Step
            </h2>
            <p className="text-taupe">
              What happens during your O-Shot appointment at Nexus Clinic KL
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {procedureSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                className="relative pl-8 pb-8 border-l-2 border-rose last:border-l-0 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-wine rounded-full" />
                <h3 className="text-lg font-semibold text-wine mb-2">{step.step}</h3>
                <p className="text-brown">{step.details}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 bg-white p-6 rounded-2xl max-w-3xl mx-auto">
            <p className="text-brown text-center">
              <span className="font-semibold">Total appointment time:</span> 60 to 90 minutes
              <br />
              <span className="font-semibold">No downtime:</span> Return to normal activities immediately
              <br />
              <span className="font-semibold">Sexual activity:</span> Resume 3 days after treatment
            </p>
          </motion.div>

          <p className="text-center">
          For women whose O-Shot concerns are also connected to hormonal changes from perimenopause or menopause including vaginal dryness and reduced sexual drive, our{' '}
          <a href="/regenerative/hormone-replacement-therapy-malaysia/" className="text-wine font-bold italic">
            hormone replacement therapy in Malaysia
          </a>{' '}
          provides the full hormonal context that often needs to be addressed alongside vaginal rejuvenation treatment.
        </p>
                </div>
      </motion.section>

      {/* O-Shot vs Other Options Comparison */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
              <TableForPages
                columns={[
                  { key: "treatment", header: "Treatment", className: "font-semibold" },
                  { key: "mechanism", header: "Mechanism" },
                  { key: "bestFor", header: "Best For" },
                  { key: "evidence", header: "Evidence" },
                ]}
                data={[
                  {
                    treatment: "O-Shot (PRP Therapy)",
                    mechanism: "Platelet-rich plasma derived from patient's own blood injected into clitoris, G-spot, and vaginal wall; growth factors stimulate stem cells, regenerate tissue, and enhance vascularity and nerve sensitivity",
                    bestFor: "Women with stress urinary incontinence, decreased libido, difficulty achieving orgasm, vaginal dryness, or post-menopausal sexual dysfunction; also beneficial for lichen sclerosus",
                    evidence: "Multiple peer-reviewed studies demonstrate 70-80% patient satisfaction; improvement in female sexual function index (FSFI) scores; durable results 12-18 months; minimal adverse events as autologous product"
                  },
                  {
                    treatment: "Vaginal Laser Therapy (FemTouch, MonaLisa Touch)",
                    mechanism: "Fractional CO2 or erbium laser energy creates microscopic thermal injury to vaginal epithelium and lamina propria; stimulates collagen remodeling and neocollagenesis; restores vaginal mucosal thickness and glycogen content",
                    bestFor: "Post-menopausal vaginal atrophy, vaginal dryness, dyspareunia (painful intercourse), recurrent bacterial vaginosis; also for mild stress incontinence; not typically for libido or orgasm enhancement",
                    evidence: "Strong evidence for genitourinary syndrome of menopause; 3-session protocol with annual maintenance; improvements sustained 12+ months; endorsed by International Society for the Study of Women's Sexual Health (ISSWSH) for GSM"
                  },
                  {
                    treatment: "Radiofrequency (Votiva, ThermiVa)",
                    mechanism: "Bipolar radiofrequency energy heats deep vaginal tissues to 40-45°C; induces collagen contraction and neocollagenesis; improves tissue laxity without mucosal injury; can be performed on external labia and vaginal introitus",
                    bestFor: "Vaginal laxity (feeling of looseness), stress urinary incontinence, mild prolapse symptoms, external labial laxity or wrinkling; comfortable, painless, no downtime",
                    evidence: "Growing body of evidence; 80% satisfaction for laxity and incontinence at 12 months; 3-session initial series; requires annual maintenance; well-tolerated with no serious adverse events reported"
                  },
                  {
                    treatment: "Topical Estrogen Cream/Pessary",
                    mechanism: "Low-dose local estrogen (estradiol or estriol) applied directly to vaginal tissue; restores vaginal pH, increases epithelial thickness, improves glycogen production and lubrication; negligible systemic absorption",
                    bestFor: "Post-menopausal vaginal atrophy and dryness; dyspareunia; recurrent UTIs; most cost-effective first-line option for GSM in menopausal women; requires uterus evaluation for progestogen if systemic symptoms present",
                    evidence: "Gold standard, FDA-approved for genitourinary syndrome of menopause; decades of safety data; no increased breast cancer or VTE risk with local use; 4-8 weeks for full effect; requires ongoing maintenance"
                  },
                  {
                    treatment: "Hyaluronic Acid Fillers (G-Shot)",
                    mechanism: "Injectable hyaluronic acid (same as dermal filler) injected into G-spot area and anterior vaginal wall; increases volume and prominence of G-spot area; attracts water to enhance sensitivity; temporary effect",
                    bestFor: "Enhancing G-spot prominence specifically; women who already have good lubrication and arousal but desire more focal stimulation; not for urinary incontinence or generalized vaginal atrophy",
                    evidence: "Limited large-scale studies; smaller studies show 60-70% short-term satisfaction; effect lasts 4-6 months (faster resorption than dermal fillers); temporary injection-related swelling may contribute to initial effect; requires repeat treatments"
                  },
                ]}
                title="O-Shot vs Other Vaginal Rejuvenation Options"
                subtitle="Honest comparison of treatments available in Malaysia"
                variant="detailed"
                fadeInUp={fadeInUp}
                className="container mx-auto px-4 md:px-8 py-12"
              />

          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-2xl max-w-4xl mx-auto">
            <h3 className="font-semibold text-wine mb-2">Combination Value at Nexus Clinic KL</h3>
            <p className="text-brown">
              O-Shot combined with local vaginal oestrogen therapy is the most comprehensive
              approach for postmenopausal women with both vaginal atrophy and reduced sexual pleasure.
              The oestrogen provides hormonal restoration while PRP delivers growth factor stimulation.
            </p>
            <p className="text-sm text-taupe">
              Runels C et al. A Pilot Study of the Effect of Localized Injections of Autologous Platelet Rich Plasma (PRP) for the Treatment of Female Sexual Dysfunction. 
              <a 
                href="https://www.longdom.org/open-access/a-pilot-study-of-the-effect-of-localized-injections-of-autologous-platelet-rich-plasma-prp-for-the-treatment-of-female-sexual-dysfunction-2167-0420.1000169.pdf" 
                target="_blank" 
                rel="nofollow" 
                className="text-wine font-bold italic"
              >
                Journal of Women's Health Care
              </a>. 
              2014;3(4):169. This pilot study explored the use of localized PRP injections to improve sexual response and treat dysfunction in women, concluding that the growth factors in PRP successfully enhanced arousal and overall sexual satisfaction scores.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* O-Shot and Hormone Therapy Integration */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-6 font-georgia">
                O-Shot and <span className="text-wine">Hormone Therapy</span>
              </h2>
              <p className="text-brown mb-4">
                Hormonal status is one of the most important determinants of O-Shot outcome.
                PRP injection into severely oestrogen-deficient vaginal tissue may produce
                limited results because the hormonal substrate has been depleted.
              </p>
              <p className="text-brown mb-4">
                At Nexus Clinic KL, every woman attending for O-Shot consultation receives
                assessment of her hormonal status as part of the initial appointment.
                Women in perimenopause, natural menopause or surgical menopause are assessed
                for oestrogen, testosterone and thyroid status.
              </p>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-brown">
                  <span className="font-semibold">Integrated approach:</span> Where hormone
                  deficiency is identified, appropriate hormone therapy is recommended
                  alongside the O-Shot for optimal results.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold text-wine mb-4">Who Benefits Most?</h3>
                <ul className="space-y-3">
                  {[
                    "Women whose vaginal tissue is in reasonable hormonal health",
                    "Those wanting to improve sensitivity, orgasm quality, or urinary incontinence",
                    "Women with well-managed hormone therapy seeking additional PRP stimulus",
                    "Pre-menopausal women seeking non-hormonal vaginal rejuvenation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-cream rounded-xl">
                  <p className="text-sm text-brown italic">
                    Women with severe menopausal atrophy are first offered local vaginal
                    oestrogen or systemic HRT, then return for O-Shot once tissue is restored.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="text-center">
          For women whose sexual health concerns also intersect with PCOS-related hormonal imbalance, our{' '}
          <a href="/regenerative/pcos-treatment-malaysia/" className="text-wine font-bold italic">
            PCOS treatment in Malaysia
          </a>{' '}
          provides context on how PCOS affects women's sexual health and how hormonal management integrates with vaginal rejuvenation treatment.
        </p>
        </div>
      </motion.section>

      {/* Safety and Contraindications */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div variants={fadeInLeft}>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-8 h-8 text-wine" />
                <h2 className="text-3xl font-bold text-brown font-georgia">Safety Profile</h2>
              </div>
              <p className="text-brown mb-4">
                Because PRP is derived from your own blood (autologous), the risk of
                side effects is significantly lower than with synthetic injectable medications.
              </p>
              <ul className="space-y-3">
                {[
                  "No risk of disease transmission from external blood products",
                  "No risk of immune rejection",
                  "Minimal swelling and bruise for up to 3 days after treatment (expected and resolves spontaneously)",
                  "No downtime required",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-cream p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-6 h-6 text-wine" />
                  <h3 className="text-xl font-semibold text-brown">Contraindications</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Active vaginal infection or cervicitis",
                    "Significant bleeding disorder or current anticoagulant medication",
                    "Active cancer (requires oncologist consultation)",
                    "Pregnancy",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-brown text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-taupe mt-4">
                  At Nexus Clinic KL, all contraindications are assessed at the initial consultation
                  before any O-Shot injection is scheduled.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              O-Shot Treatment Cost in Malaysia 2026
            </h2>
            <p className="text-taupe">
              Transparent pricing at Nexus Clinic KL — disclosed before any injection is scheduled
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={fadeInLeft} className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-wine mb-4">Individual Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-taupe/20 py-2">
                  <span className="text-brown">O-Shot Initial Consultation</span>
                  <span className="font-semibold text-brown">RM 150 - RM 300</span>
                </div>
                <div className="flex justify-between border-b border-taupe/20 py-2">
                  <span className="text-brown">O-Shot (Single Session)</span>
                  <span className="font-semibold text-brown">RM 2,000 - RM 4,500</span>
                </div>
                <div className="flex justify-between border-b border-taupe/20 py-2">
                  <span className="text-brown">O-Shot and G-Shot Combined</span>
                  <span className="font-semibold text-brown">RM 2,500 - RM 5,000</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-brown">Blood Panel (if indicated)</span>
                  <span className="font-semibold text-brown">RM 250 - RM 500</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-wine mb-4">Programme Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-taupe/20 py-2">
                  <span className="text-brown">O-Shot Programme (2-3 sessions)</span>
                  <span className="font-semibold text-brown">From RM 5,500</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-brown">Session of P-Shot (Partner)</span>
                  <span className="font-semibold text-brown">RM 2,000 - RM 4,500</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-cream rounded-xl">
                <p className="text-sm text-brown">
                  Programme pricing provides better per-session value. Most specialist clinic
                  recommendations advise 2-3 treatments spaced 2 weeks apart for optimal results.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p variants={fadeInUp} className="text-center text-taupe text-sm mt-6">
            All pricing includes consultation, procedure, and follow-up where indicated.
            No obligation to proceed after consultation.
          </motion.p>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQWithSchema data={faqs} />

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-wine"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={scaleIn} className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-georgia">
              O-Shot Treatment in Malaysia
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Non-surgical vaginal rejuvenation at Nexus Clinic KL. Doctor-performed,
              confidential, with honest communication of evidence and realistic expectations.
              Serving women from across Kuala Lumpur and Malaysia.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Nexus Clinic Kuala Lumpur
              </h3>
              <p className="text-white/90 mb-2">
                LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
              </p>
              <p className="text-white font-semibold text-lg mb-6">
                Mobile: 016-7025699 / 03-21635699
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-wine rounded-full font-semibold hover:bg-cream transition-colors shadow-lg inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book Your O-Shot Consultation Today</span>
              </motion.button>
            </div>

            <p className="text-white/70 text-sm mt-6">
              Over 15 years combined clinical experience | 5,000+ procedures completed
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default OShotLanding;