"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Shield,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Award,
  Zap,
  FileText,
  MapPin,
  ChevronRight,
  Info,
  Footprints,
  Hand,
  Bone,
  Calendar,
} from "lucide-react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";

const ShockwaveLanding = () => {
  const faqs = [
    {
      q: "What is extracorporeal shockwave therapy (ESWT) and how does it work?",
      a: "Extracorporeal shockwave therapy (ESWT) is a non-invasive treatment that uses acoustic pressure waves generated externally (extracorporeal means from outside the body) to treat both musculoskeletal pain conditions and erectile dysfunction. Shockwave therapy uses a handheld transducer applied to the skin surface with coupling gel to transmit acoustic waves through the skin and surrounding soft tissues to the target area below; no injection, incision or anaesthesia is required. The acoustic wave energy from extracorporeal shockwave therapy stimulates the body's natural self-healing response through four mechanisms: neovascularisation (new blood vessel formation improving blood flow and blood circulation), activation of stem cells and growth factors for tissue regeneration, disruption of fibrous scar tissue in chronic soft tissue injuries, and neurological pain modulation; these mechanisms explain why ESWT produces safe and effective pain relief and functional improvement for chronic musculoskeletal conditions and improved erectile function for men with vasculogenic erectile dysfunction.",
    },
    {
      q: "Is shockwave therapy painful?",
      a: "Most patients describe the shockwave therapy session as a tapping or vibrating sensation with mild discomfort at higher intensity settings rather than pain; the experience is generally very manageable without any analgesic medication or numbing cream. The level of discomfort during a shockwave session depends on the indication, the anatomical location of the treated area and the individual patient's sensitivity; bony and tendinous areas such as the heel (plantar fasciitis) or lateral elbow (tennis elbow) may produce more discomfort during shockwave than softer tissue areas. For erectile dysfunction Li-ESWT, most patients describe a mild tingling or tapping sensation on the penis with no significant pain at the validated low-intensity settings used for this indication; discomfort during Li-ESWT is typically less than during musculoskeletal shockwave at higher medium-intensity settings. After a shockwave session, mild soreness in the treated area for 24 to 48 hours is common and expected after musculoskeletal sessions as the healing response is initiated; NSAIDs should not be taken in this 48-hour window as they suppress the inflammatory healing response that the shockwave has triggered.",
    },
    {
      q: "How many shockwave therapy sessions are needed?",
      a: "The number of sessions depends on the indication and severity. For musculoskeletal conditions, the standard protocol is 3 to 5 sessions 1 to 2 weeks apart; plantar fasciitis, tennis elbow (lateral epicondylitis) and calcific shoulder tendinitis typically respond within 3 to 5 sessions with most patients experiencing significant pain relief from session 2 or 3 onward; Achilles tendinopathy and rotator cuff tendinopathy may require up to 5 sessions for optimal outcomes. For erectile dysfunction Li-ESWT, the standard initial protocol is 6 sessions over 3 to 6 weeks; men with more severe vasculogenic erectile dysfunction or those who show partial response to the initial 6-session course may proceed to a total of 12 sessions for maximum vascular benefit; at Nexus Clinic KL, the number of sessions for each patient is discussed and agreed at the initial consultation based on the indication and its severity, not as a generic protocol applied to every patient.",
    },
    {
      q: "What is the difference between shockwave therapy for musculoskeletal conditions and Li-ESWT for erectile dysfunction?",
      a: "Musculoskeletal shockwave therapy and Li-ESWT for erectile dysfunction are different treatment modalities using different device settings, different intensity levels and different delivery protocols. Musculoskeletal ESWT uses medium-intensity settings (0.1 to 0.4 mJ/mm2) to treat soft tissue injuries, tendinopathies and calcific deposits in physiotherapy and sports medicine applications; it is appropriate for conditions such as plantar fasciitis, tennis elbow, calcific shoulder tendinitis and Achilles tendinopathy. Li-ESWT for erectile dysfunction uses low-intensity settings (0.04 to 0.25 mJ/mm2) specifically validated for penile cavernosal tissue to stimulate neovascularisation and improve blood flow to the penis without tissue damage; these settings are distinct from musculoskeletal settings and are not interchangeable. Li-ESWT for erectile dysfunction must be performed at a medical clinic by experienced medical doctors using validated low-intensity settings; musculoskeletal shockwave therapy at physiotherapy or chiropractic medium-intensity settings is not appropriate for erectile dysfunction treatment. At Nexus Clinic KL, the device intensity is specifically calibrated for each indication, ensuring safe and effective shockwave therapy for both musculoskeletal and erectile dysfunction applications.",
    },
    {
      q: "Can shockwave therapy cure erectile dysfunction?",
      a: "Shockwave therapy for erectile dysfunction is not a guaranteed cure for all men, and the evidence does not support using the word cure; it is a treatment that produces meaningful and durable improvement in erectile function in men with mild to moderate vasculogenic erectile dysfunction. Published clinical studies report improvement in IIEF-5 erectile function scores in 60 to 75% of men with mild to moderate vasculogenic erectile dysfunction completing a 6-session Li-ESWT protocol; some men achieve erection quality sufficient for sexual intercourse without PDE5 inhibitor medication after completing a full shockwave course; others experience meaningful improvement that makes their PDE5 inhibitor more effective. Men with severe erectile dysfunction where the vascular erection mechanism is significantly damaged are less likely to respond meaningfully to Li-ESWT as their primary treatment; these men are counselled at Nexus Clinic KL toward intracavernosal injection therapy or other treatment options. The improvement in erectile function from ESWT is more durable than oral medication effects because it is based on structural new blood vessel formation; follow-up studies show sustained erectile function benefit at 12 months after completing a shockwave course.",
    },
    {
      q: "Who should not have shockwave therapy?",
      a: "Absolute contraindications to extracorporeal shockwave therapy include: blood clotting disorders or current anticoagulant medication (warfarin, novel anticoagulants) that significantly increase bleeding risk from the acoustic energy wave; active infection or open wound in the treated area; malignancy (cancer) in or near the treated area; pregnancy (for any treatment near the uterus); direct shockwave over growth plates in skeletally immature patients; and implanted electronic devices (pacemakers, nerve stimulators) near the treated area. For erectile dysfunction Li-ESWT specifically, men with Peyronie's disease (penile fibrosis) require a different shockwave protocol and are assessed individually; men whose erectile dysfunction is purely psychogenic (no vascular component) will not benefit from shockwave therapy as it has no mechanism for psychogenic erectile dysfunction. At Nexus Clinic KL, all contraindications are reviewed at the initial consultation before any shockwave therapy sessions are scheduled.",
    },
    {
      q: "Does shockwave therapy work for plantar fasciitis in Malaysia?",
      a: "Yes. Shockwave therapy has Level 1 evidence for plantar fasciitis and is considered the most effective non-surgical treatment for chronic plantar fasciitis that has not responded to physiotherapy, stretching, orthotics or steroid injection. Plantar fasciitis is one of the most common musculoskeletal conditions treated at Nexus Clinic KL, and chronic plantar fasciitis (persisting for more than 3 to 6 months despite conventional treatment) is the optimal indication for extracorporeal shockwave therapy. The shockwave energy disrupts the fibrous scar tissue at the plantar fascial origin, stimulates neovascularisation to improve blood flow and blood circulation to the relatively avascular heel tissue, activates stem cells and growth factors to initiate new collagen synthesis in the degenerated fascia, and produces neurological pain modulation for more rapid pain relief. Most patients with plantar fasciitis treated with ESWT at Nexus Clinic KL report significant pain relief from session 2 or 3, with continued improvement over the 6 to 8 weeks following the treatment course as the tissue regeneration process matures.",
    },
    {
      q: "Is shockwave therapy available in Kuala Lumpur, Ampang, Damansara and Subang Jaya?",
      a: "Yes. Nexus Clinic KL provides extracorporeal shockwave therapy (ESWT) for both musculoskeletal conditions and erectile dysfunction at our medical clinic located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur. This clinic in Kuala Lumpur serves patients from across the Klang Valley including Ampang, Damansara, Subang Jaya, Petaling Jaya, Bangsar, KLCC, Mont Kiara and throughout Malaysia. As a medical centre with LCP-certified doctors and evidence-based shockwave therapy protocols, Nexus Clinic KL is a provider in Malaysia for both musculoskeletal and erectile dysfunction shockwave therapy treatment. Patients from Ampang, Damansara and Subang Jaya who have been seeking effective shockwave therapy for chronic musculoskeletal pain or for vasculogenic erectile dysfunction are welcome to book a consultation at this Kuala Lumpur medical clinic; shockwave therapy in KL at this clinic is delivered by experienced medical doctors with the correct device calibration for each indication.",
    },
    {
      q: "Can shockwave therapy be combined with other treatments?",
      a: "Yes, and combination treatment produces superior outcomes for most indications. For musculoskeletal conditions, the combination of extracorporeal shockwave therapy with a targeted physiotherapy or chiropractic rehabilitation loading exercise programme produces consistently better long-term outcomes than shockwave therapy alone; the shockwave provides pain modulation and tissue regeneration while the rehabilitation exercises provide the mechanical loading signal that directs and consolidates the new tissue formation. For erectile dysfunction, ESWT is most effective when combined with optimal medical management of the underlying cardiovascular risk factors (blood pressure, blood glucose, cholesterol) that maintain the vascular endothelial dysfunction driving the erectile dysfunction; Li-ESWT combined with PDE5 inhibitor medication during the treatment course and for 3 months after is the most evidence-supported combined treatment approach for mild to moderate vasculogenic erectile dysfunction. At Nexus Clinic KL, the shockwave therapy treatment plan for each patient includes recommendations for complementary treatment options that maximise the structural and functional outcomes of the ESWT sessions.",
    },
    {
      q: "Is the shockwave therapy consultation at Nexus Clinic KL free?",
      a: "The initial shockwave therapy consultation at Nexus Clinic KL is priced at RM 100 to RM 200 and includes a clinical assessment of the condition, review of previous treatment methods (physiotherapy, chiropractic, injection or medication), determination of whether shockwave therapy is the appropriate treatment modality for the specific indication, discussion of the evidence base for the recommended protocol, the number of sessions recommended, realistic outcome expectations and full pricing before any session is booked. For erectile dysfunction Li-ESWT, the consultation also includes IIEF-5 erectile function assessment, cardiovascular risk review and medication review; men with severe ED are counselled honestly about whether Li-ESWT is likely to produce meaningful benefit for their specific degree of vascular damage. Nexus Clinic KL is located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Damansara, Subang Jaya, Mont Kiara and throughout Malaysia.",
    },
  ];

  // Musculoskeletal conditions treated
  const musculoskeletalConditions = [
    { icon: Footprints, name: "Plantar Fasciitis", desc: "Heel and arch pain worst in the morning; Level 1 evidence supports ESWT efficacy" },
    { icon: Hand, name: "Tennis Elbow", desc: "Lateral epicondyle pain worsened by gripping; chronic degenerative tendinopathy" },
    { icon: Bone, name: "Calcific Shoulder Tendinitis", desc: "Severe shoulder pain from calcium deposits; focused ESWT is most effective non-surgical treatment" },
    { icon: Activity, name: "Achilles Tendinopathy", desc: "Posterior heel and calf pain; particularly effective for insertional tendinopathy" },
    { icon: Activity, name: "Rotator Cuff Tendinopathy", desc: "Shoulder pain with overhead activity; best combined with rehabilitation exercises" },
  ];

  // Biological mechanisms
  const mechanisms = [
    {
      title: "Neovascularisation",
      desc: "Stimulates formation of new blood vessels (angiogenesis) through upregulation of VEGF, improving blood flow to the treated area. Primary mechanism for ED treatment.",
    },
    {
      title: "Stem Cell Activation",
      desc: "Activates resident stem cells and triggers release of growth factors (PDGF, TGF-beta, IGF-1) to initiate tissue regeneration and collagen synthesis.",
    },
    {
      title: "Fibrous Scar Tissue Disruption",
      desc: "Mechanically disrupts calcified deposits and fibrous scar tissue in chronic injuries, restarting the healing response that has stalled.",
    },
    {
      title: "Central Pain Modulation",
      desc: "Reduces substance P concentration and modulates C-fibre pain signalling, producing rapid pain relief within first 1-3 sessions.",
    },
  ];

  return (
    <main className="bg-light font-[--font-inter] overflow-hidden">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative min-h-screen flex items-center"
        style={{
          background:
            "linear-gradient(135deg, var(--color-cream) 0%, #FFFFFF 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, var(--color-taupe) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-wine" />
                <span className="text-sm font-medium text-wine">
                  Nexus Clinic Kuala Lumpur
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-georgia text-brown leading-tight">
                Shockwave Therapy in Malaysia:{" "}
                <span className="text-wine italic">ESWT for ED and Pain Relief</span>
              </h1>

              <p className="text-lg text-taupe leading-relaxed max-w-lg">
                Extracorporeal shockwave therapy (ESWT) is one of the most clinically
                versatile non-invasive treatments available. Non-invasive acoustic
                shockwave technology delivers treatment for erectile dysfunction,
                plantar fasciitis, tennis elbow and tendinopathy at Nexus Clinic KL.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact-us/"
                  className="group bg-wine text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-rose transition-all shadow-lg hover:shadow-xl"
                >
                  Book Your Shockwave Therapy Assessment
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <Whatsapp message="Hello, I would like to book a shockwave therapy assessment." />
              </div>

              <div className="flex items-center gap-4 text-sm text-brown/70">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-wine" />
                  <span>Wisma UOA II, Jalan Pinang, KL</span>
                </div>
                <div className="w-1 h-1 bg-taupe rounded-full" />
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-wine" />
                  <span>Doctor-Performed Sessions</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 bg-[--color-glass] backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">Visit Us</h3>
                      <p className="text-sm text-taupe">
                          LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
                      </p>
                    </div>
                  </div>

                  <div className="bg-wine/5 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <p className="text-sm text-brown">
                        <span className="font-semibold">
                          Key clinical distinction:
                        </span>{" "}
                        Musculoskeletal ESWT uses medium-intensity settings (0.1-0.4 mJ/mm²).
                        Li-ESWT for erectile dysfunction uses low-intensity settings (0.04-0.25 mJ/mm²)
                        specifically validated for penile tissue. These are not interchangeable.
                      </p>
                    </div>
                  </div>

                  <div className="bg-wine/5 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <p className="text-sm text-brown">
                        <span className="font-semibold">Over 5,000 procedures completed</span>
                        <br />
                        More than 15 years of combined clinical experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-wine/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-rose/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is Shockwave Therapy Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown">
                What is{" "}
                <span className="text-wine italic">Extracorporeal Shockwave Therapy (ESWT)</span>
              </h2>

              <p className="text-lg text-brown/80 leading-relaxed">
                ESWT is a non-invasive treatment that uses acoustic pressure waves delivered
                from outside the body to targeted tissue. Originally developed for kidney
                stone lithotripsy, the discovery that shockwave energy stimulates the body's
                natural healing response transformed ESWT into a frontline treatment for
                musculoskeletal conditions and erectile dysfunction.
              </p>

              <div className="bg-[--color-cream] rounded-3xl p-8 space-y-4">
                <p className="text-brown">
                  A handheld transducer applied to the skin with coupling gel transmits
                  acoustic waves through the skin to the target area. No incision, injection,
                  or anaesthesia is required. ESWT is non-surgical and produces no radiation.
                </p>

                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                  <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <p className="text-sm text-brown">
                    <span className="font-semibold">Important:</span> All shockwave therapy
                    sessions at Nexus Clinic KL are doctor-performed by LCP-certified doctors
                    with the correct device calibration for the specific indication being treated.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/regenerative/shockwave-therapy.webp"
                  alt="Shockwave Therapy Procedure"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-wine" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brown">Low-Intensity ESWT (Li-ESWT)</p>
                    <p className="text-xs text-taupe">For erectile dysfunction treatment</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How ESWT works - Biological Mechanisms */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-[--color-cream]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown mb-4">
              How <span className="text-wine italic">Extracorporeal Shockwave Therapy Works</span>
            </h2>
            <p className="text-lg text-brown/80 max-w-3xl mx-auto">
              ESWT stimulates the body's natural self-healing response through four distinct
              biological mechanisms, explaining why it is simultaneously effective for both
              musculoskeletal pain and erectile dysfunction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanisms.map((mechanism, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-semibold text-brown text-lg mb-3">{mechanism.title}</h3>
                <p className="text-sm text-taupe">{mechanism.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-8 text-sm text-wine font-medium"
          >
            The fibrous scar tissue disruption mechanism explains why ESWT is most effective
            for conditions present for more than 3-6 months where normal healing has stalled.
          </motion.p>
          <p className="text-sm text-taupe text-center max-w-2xl mx-auto">
              Chung E et al. A systematic review of the evidence for low-intensity extracorporeal shockwave therapy in the treatment of erectile dysfunction. 
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/25294541/" 
                target="_blank" 
                rel="nofollow" 
                className="text-wine font-bold italic"
              >
                BJU International
              </a>. 
              2015;116(3):360-369. This systematic review establishes the efficacy of shockwave therapy in promoting neo-angiogenesis, while 
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/19794248/" 
                target="_blank" 
                rel="nofollow" 
                className="text-wine font-bold italic"
              >
                Rompe JD et al.
              </a> 
              (JOSPT, 2010) highlights its foundational role in musculoskeletal tissue repair and chronic pain management.
            </p>
        </div>
      </motion.section>

      {/* Musculoskeletal Conditions Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown mb-4">
              Musculoskeletal <span className="text-wine">Shockwave Therapy</span>
            </h2>
            <p className="text-lg text-brown/80 max-w-2xl mx-auto">
              Evidence-supported ESWT for chronic soft tissue injuries that have not responded
              to physiotherapy, chiropractic care, or injection treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musculoskeletalConditions.map((condition, index) => {
              const Icon = condition.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-[--color-cream] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-wine" />
                  </div>
                  <h3 className="font-semibold text-brown text-lg mb-2">{condition.name}</h3>
                  <p className="text-sm text-taupe">{condition.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-wine/5 rounded-2xl p-6 text-center"
          >
            <p className="text-brown">
              <span className="font-semibold">Protocol:</span> 3 to 5 shockwave sessions,
              1 to 2 weeks apart. Combination with targeted rehabilitation exercise programme
              produces superior outcomes to shockwave therapy alone.
            </p>
            <p className="text-center">
            For patients whose musculoskeletal pain is also associated with hormonal or metabolic factors, our{' '}
            <a href="/regenerative/pcos-treatment-malaysia/" className="text-wine font-bold italic">
              PCOS treatment in Malaysia
            </a>{' '}
            provides context on how hormonal imbalances can contribute to tendinopathy and connective tissue vulnerability.
          </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Erectile Dysfunction Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-[--color-cream]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown">
                Li-ESWT for{" "}
                <span className="text-wine">Erectile Dysfunction</span>
              </h2>

              <p className="text-lg text-brown/80">
                Low-intensity extracorporeal shockwave therapy (Li-ESWT) is one of the most
                actively researched treatments for vasculogenic erectile dysfunction.
              </p>

              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-wine">Who is the ideal candidate?</h3>
                <ul className="space-y-3">
                  {[
                    "Mild to moderate vasculogenic ED with reduced penile blood flow",
                    "PDE5 inhibitor partial responders (erection improves but not fully)",
                    "Men who cannot take PDE5 inhibitors due to nitrate medication",
                    "Men with diabetes-related vasculogenic ED",
                  ].map((text, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                      <span className="text-brown">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-wine mb-4">Published Evidence</h3>
                <p className="text-brown mb-3">
                  Studies report improvement in IIEF-5 erectile function scores in 60-75%
                  of men with mild to moderate vasculogenic ED completing a 6-session protocol.
                </p>
                <p className="text-brown">
                  Follow-up studies show sustained improvement at 12 months post-treatment
                  due to structural vascular changes.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-wine mb-4">Treatment Protocol</h3>
                <div className="space-y-4">
                  <div className="border-b border-[--color-cream] pb-4">
                    <p className="font-semibold text-brown">Standard initial protocol:</p>
                    <p className="text-brown">6 sessions over 3 to 6 weeks</p>
                  </div>
                  <div className="border-b border-[--color-cream] pb-4">
                    <p className="font-semibold text-brown">Extended protocol:</p>
                    <p className="text-brown">12 sessions for moderate ED or partial responders</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brown">Per session:</p>
                    <p className="text-brown">15-20 minutes; 3,000-5,000 acoustic wave pulses; no anaesthesia</p>
                  </div>
                </div>
              </div>

              <div className="bg-wine/5 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <p className="text-sm text-brown">
                    <span className="font-semibold">Critical intensity distinction:</span>{" "}
                    Li-ESWT for ED uses low-intensity settings (0.04-0.25 mJ/mm²).
                    Musculoskeletal ESWT uses medium-intensity settings (0.1-0.4 mJ/mm²).
                    Applying musculoskeletal settings to penile tissue is not appropriate and
                    potentially causes tissue damage. Ensure your provider uses validated Li-ESWT settings.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Treatment Process Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown text-center mb-12">
            The <span className="text-wine">Shockwave Therapy Process</span> at Nexus Clinic KL
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Clinical Assessment",
                icon: FileText,
                details: [
                  "Full history of the condition being treated",
                  "Physical examination of the treated area",
                  "Review of previous treatments (physiotherapy, chiropractic, injection)",
                  "Determination of appropriate intensity setting",
                ],
              },
              {
                step: "02",
                title: "Shockwave Session",
                icon: Zap,
                details: [
                  "Coupling gel applied to the treated area",
                  "Systematic pulse pattern across target area",
                  "15-20 minute session duration",
                  "Doctor adjusts intensity based on patient feedback",
                ],
              },
              {
                step: "03",
                title: "Post-Session Care",
                icon: Calendar,
                details: [
                  "Mild soreness for 24-48 hours is normal (musculoskeletal)",
                  "No NSAIDs in the 48-hour window post-session",
                  "Sessions scheduled 1-2 weeks apart",
                  "Return to all activities immediately after ED treatment",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-[--color-cream] rounded-3xl p-8 h-full hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold text-wine/20 mb-4">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-wine rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brown mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-brown"
                      >
                        <div className="w-1.5 h-1.5 bg-wine rounded-full mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-wine">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-[--color-cream]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown text-center mb-16">
            Shockwave Therapy <span className="text-wine">Cost in Malaysia 2026</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-wine mb-4">Musculoskeletal ESWT</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-[--color-cream] py-3">
                    <span className="text-brown">Initial Consultation</span>
                    <span className="font-semibold text-brown">RM 100 - RM 200</span>
                  </div>
                  <div className="flex justify-between border-b border-[--color-cream] py-3">
                    <span className="text-brown">Per Session</span>
                    <span className="font-semibold text-brown">RM 300 - RM 700</span>
                  </div>
                  <div className="flex justify-between border-b border-[--color-cream] py-3">
                    <span className="text-brown">3-Session Programme</span>
                    <span className="font-semibold text-brown">RM 800 - RM 1,800</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-wine mb-4">Li-ESWT for Erectile Dysfunction</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-[--color-cream] py-3">
                    <span className="text-brown">Per Session</span>
                    <span className="font-semibold text-brown">RM 600 - RM 1,200</span>
                  </div>
                  <div className="flex justify-between border-b border-[--color-cream] py-3">
                    <span className="text-brown">6-Session Programme</span>
                    <span className="font-semibold text-brown">RM 3,500 - RM 6,500</span>
                  </div>
                  <div className="flex justify-between border-b border-[--color-cream] py-3">
                    <span className="text-brown">12-Session Programme</span>
                    <span className="font-semibold text-brown">RM 6,500 - RM 12,000</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-wine/5 rounded-2xl p-6">
                <h3 className="font-semibold text-brown mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-wine" />
                  Important Notes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    All pricing disclosed at initial consultation before any session is booked
                  </li>
                  <li className="flex items-start gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    Programme pricing provides better per-session value than individual booking
                  </li>
                  <li className="flex items-start gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    12-session programme for men who show partial response to initial 6-session course
                  </li>
                  <li className="flex items-start gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    Post-programme follow-up at 3 months to assess response
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-wine mb-4">
                  What's Included in Programme Pricing
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    All scheduled shockwave sessions
                  </li>
                  <li className="flex items-start gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    Initial clinical assessment
                  </li>
                  <li className="flex items-start gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    Post-programme follow-up consultation
                  </li>
                  <li className="flex items-start gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    For ED: IIEF-5 assessment and medication review
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contraindications Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-[--color-cream] rounded-3xl p-8">
            <h2 className="text-2xl font-bold font-georgia text-brown mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-wine" />
              Who Should Not Have Shockwave Therapy
            </h2>

            <p className="text-brown mb-4">
              Absolute contraindications to extracorporeal shockwave therapy include:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                "Blood clotting disorders or anticoagulant medication",
                "Active infection or open wound in treated area",
                "Malignancy (cancer) in or near treated area",
                "Pregnancy (for treatment near the uterus)",
                "Direct shockwave over growth plates (skeletally immature)",
                "Implanted electronic devices near treated area",
              ].map((contraindication, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-3 flex items-start gap-2"
                >
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-brown">{contraindication}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-brown">
                For ED Li-ESWT specifically: men with Peyronie's disease require a different protocol.
                Men with purely psychogenic ED (no vascular component) will not benefit from shockwave therapy.
                At Nexus Clinic KL, all contraindications are reviewed at the initial consultation.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQWithSchema data={faqs} />

      {/* Final CTA */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-wine"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-georgia text-white mb-6">
              Effective Shockwave Therapy at Nexus Clinic KL
            </h2>

            <p className="text-white/90 text-lg mb-8">
              ESWT for musculoskeletal conditions and erectile dysfunction in Malaysia.
              Doctor-performed sessions with correct intensity calibration for each indication.
              Over 5,000 procedures completed. Serving patients from across Kuala Lumpur,
              Ampang, Damansara, Subang Jaya and throughout Malaysia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-white text-wine px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[--color-cream] transition-all shadow-lg"
              >
                Book Your Shockwave Therapy Assessment
                <ChevronRight className="w-5 h-5" />
              </motion.a>
                <Whatsapp message="Hello, I would like to book a shockwave therapy assessment." variant="light"/>
            </div>

            <div className="mt-8 text-white/80 text-sm">
              <p>Nexus Clinic Kuala Lumpur</p>
              <p>
                LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
              </p>
              <p className="mt-2">Mobile: 016-7025699 / 03-21635699</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default ShockwaveLanding;