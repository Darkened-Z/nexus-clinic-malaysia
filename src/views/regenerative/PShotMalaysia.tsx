"use client";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Shield,
  AlertCircle,
  Phone,
  MapPin,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";

const PShotLanding = () => {
  // P-Shot at a Glance Table Data
  const pshotAtGlanceData = [
    {
      factor: "What the P-Shot Is",
      details: "The P-Shot (Priapus Shot) is a minimally invasive, non-surgical procedure that uses platelet-rich plasma (PRP) derived from the patient's own blood and injects it into the penis to stimulate blood flow, tissue regeneration and improved sensitivity; the P-Shot is a regenerative therapy that uses the patient's own blood components rather than any foreign medication or substance; because it uses the patient's own blood, the risk of allergic reactions is significantly lower than with conventional injection medications; the P-Shot is a wellness and aesthetic procedure positioned as a complement to, not a replacement for, evidence-based erectile dysfunction treatment options"
    },
    {
      factor: "Who This Clinic Offers P-Shot Treatment To",
      details: "Men seeking to improve sexual performance, sensitivity and erection quality as part of their men's health and wellness programme; men with mild erectile dysfunction who want a non-surgical, non-medication treatment option; men who have completed an ED treatment assessment and have been advised that the P-Shot may be a suitable adjunct to their existing therapy; men with Peyronie's disease (where scar tissue causes the penis to curve) who want a regenerative treatment option; men who have discussed the treatment with their doctor and understand the emerging evidence base"
    },
    {
      factor: "Why PRP Is Used",
      details: "Platelet-rich plasma (PRP) is prepared from the patient's own blood; blood is drawn from the arm in the same way as a standard blood test; the blood is placed in a centrifuge that separates the platelet-rich plasma fraction from the red blood cells; the resulting PRP contains a concentrated collection of growth factors including platelet-derived growth factor (PDGF), transforming growth factor beta, vascular endothelial growth factor (VEGF) and epidermal growth factor; these growth factors stimulate tissue repair, promote the growth of new blood vessels and may improve blood flow when injected into penile tissue"
    },
    {
      factor: "Evidence Status",
      details: "The P-Shot is an emerging regenerative therapy; a 2023 review of seven studies found overall improvement in sexual function among participants who received PRP for penile applications; a 2025 study of 72 participants with Peyronie's disease found PRP injections helped reduce penile curvature; however, larger, high-quality randomised controlled trials are still needed; this clinic offers the P-Shot with honest communication of the current evidence base and positions it as part of a comprehensive sexual health programme, not as a standalone cure for erectile dysfunction"
    },
    {
      factor: "Safety Profile",
      details: "Because PRP uses the patient's own blood, the risk of allergic reactions or immune rejection is very low; there is no risk of disease transmission from foreign blood products; the most common side effects are temporary mild discomfort, swelling or bruising at the injection site that resolves within a few days; the procedure requires no general anaesthesia, no downtime, no surgery and no medication with systemic effects; the injection is performed under topical numbing cream to minimise discomfort"
    },
  ];

  // P-Shot Procedure Table Data
  const pshotProcedureData = [
    {
      step: "Step 1: Blood Draw and PRP Preparation",
      what: "A blood sample is drawn from the patient's arm in the same way as a standard blood test; approximately 30 to 60ml of blood is collected into a specialised PRP tube; the tube is placed in a centrifuge that spins for 15 to 20 minutes; centrifugation separates the blood into its component layers: red blood cells at the base, a buffy coat containing platelets and white blood cells in the middle, and platelet-poor plasma at the top; the platelet-rich plasma fraction is then extracted and prepared for injection; no foreign substances are added; the PRP uses the patient's own blood throughout the entire preparation process",
      why: "The use of the patient's own blood is the fundamental safety advantage of the P-Shot; because PRP uses the patient's own blood components, the risk of allergic reactions is significantly lower than with any injectable medication derived from external sources; the risk of allergic reactions from PRP in any application is extremely rare; autologous therapy means the body recognises the injected material as its own; this is a key reason men seeking a natural, non-pharmacological option for their sexual health consider the P-Shot",
      atNexus: "At Nexus Clinic KL, blood is drawn and PRP prepared in a sterile clinical environment; the centrifuge protocol is standardised for optimal platelet concentration; topical numbing cream is applied to the penis during the PRP preparation phase so that the treatment area is adequately numbed before injection begins; the blood test-style blood draw is the only step that most patients find briefly uncomfortable; the PRP injection itself is well-tolerated under numbing cream"
    },
    {
      step: "Step 2: Topical Numbing and Anaesthetic Application",
      what: "A topical numbing cream is applied to the penis and the surrounding penile area 20 to 30 minutes before the PRP injection begins; for patients who prefer additional comfort, a small volume of local anaesthetic may also be administered; the numbing cream ensures that most patients experience only mild pressure or a minimal injection sensation rather than significant pain during the procedure; this numbing preparation phase is what distinguishes a comfortable, well-performed P-Shot from the discomfort that comes from attempting the injection without adequate numbing",
      why: "Male sexual health procedures require particular sensitivity to patient comfort to ensure a positive clinical experience; adequate numbing before the P-Shot injection is what makes the difference between a procedure patients are willing to repeat and one they do not wish to continue; at Nexus Clinic KL, the numbing protocol is standardised as part of every P-Shot session; most patients describe the procedure as producing only mild sensation or mild discomfort once numbing has taken full effect; this is consistent with the experience reported by patients across clinics that perform the P-Shot under proper numbing protocols",
      atNexus: "At Nexus Clinic KL, topical numbing cream application is included as standard in every P-Shot procedure; the clinic allows adequate numbing time (minimum 20 to 30 minutes) rather than rushing to injection; this step cannot be abbreviated without compromising the patient's comfort experience; the numbing cream is applied by the doctor or clinical nurse before the blood processing centrifuge cycle completes, so both processes run in parallel and time is not wasted"
    },
    {
      step: "Step 3: PRP Injection into the Penis",
      what: "The prepared PRP is drawn into a syringe; the doctor uses a fine needle to inject the PRP into specific locations in the penis including the corpus cavernosum (the erectile tissue that fills with blood during erection) and the penile shaft; the PRP is injected into multiple positions to distribute the growth factors across the targeted penile tissue; the injected growth factors stimulate the repair and regeneration of blood vessels, promote the growth of new blood vessels (neovascularisation), improve blood flow to the area, and may enhance the sensitivity of penile tissue through local nerve support; the entire injection procedure takes 10 to 15 minutes following adequate numbing",
      why: "The growth factors in PRP injected into the corpus cavernosum and penile tissue promote: neovascularisation (growth of new blood vessels) which may improve blood flow to the penis during erection; tissue repair in penile smooth muscle; local cellular regeneration at the injection site; these mechanisms are why PRP injected into penile tissue is proposed to potentially improve erections, enhance sensitivity and support sexual health over the weeks following treatment; the effects are not immediate; they develop over 4 to 12 weeks as the tissue regeneration and new blood vessel formation process matures",
      atNexus: "At Nexus Clinic KL, the P-Shot injection is performed by a doctor in a private, comfortable consultation room; the injection technique covers the key anatomical locations within the penis where the growth factor effect on blood vessels and tissue repair is clinically relevant; the procedure takes approximately 30 to 40 minutes in total from blood draw to completion of injection; the patient can resume normal daily activities immediately after the procedure; there is no downtime required following the P-Shot at this clinic"
    },
    {
      step: "Step 4: Post-Procedure Recovery and Timeline",
      what: "There is no downtime after the P-Shot; patients can return to all daily activities on the same day; sexual activity may be resumed approximately 6 hours after the procedure; mild swelling, bruising or inflammation at the injection site may be present for 24 to 72 hours and resolves without specific treatment; the therapeutic effects of the P-Shot develop gradually over 4 to 12 weeks as the growth factors stimulate tissue repair, new blood vessel formation and improved blood flow; most men report noticing changes in sensitivity and erection quality beginning at 4 to 8 weeks; the effects of a single P-Shot session typically last 6 to 12 months, after which a maintenance treatment may be considered to sustain the regenerative benefit",
      why: "The gradual onset of P-Shot effects is an important expectation to set clearly; unlike medication, the P-Shot does not produce an immediate improvement in erection at the time of the treatment; the regenerative process requires time; men who expect immediate results after the injection may be disappointed; at Nexus Clinic KL, the realistic timeline for any improvements in erection quality, sensitivity and sexual performance is communicated at the initial consultation before the procedure is booked; men with erectile dysfunction who need reliable results for sexual intercourse in the immediate term are counselled about the established first-line options (PDE5 inhibitors, shockwave therapy) alongside the P-Shot as a complementary regenerative option",
      atNexus: "At Nexus Clinic KL, a follow-up consultation is scheduled at 6 to 8 weeks post-procedure to assess the patient's response to the P-Shot and determine whether a second session is appropriate; the number of sessions recommended depends on the individual's response and their specific sexual health concerns; some men achieve satisfactory improvement after a single P-Shot; others benefit from 2 to 3 sessions spaced 4 to 6 weeks apart; the treatment plan is reviewed and adjusted at each follow-up appointment based on the patient's feedback on their sexual performance and erection quality"
    },
  ];

  // Benefits of P-Shot Table Data
  const benefitsData = [
    {
      benefit: "Improved Erection Quality and Stronger Erections",
      mechanism: "The growth factors in PRP injected into the corpus cavernosum may stimulate neovascularisation (growth of new blood vessels) and smooth muscle repair in the erectile tissue; improved blood flow to the penis from new blood vessels and repaired vascular tissue may support the ability to achieve stronger erections; improved blood flow in the cavernosal tissue is proposed to enhance the erectile response during sexual stimulation; enhancing erectile function through vascular tissue repair is the primary mechanism proposed for the P-Shot's effect on erection quality",
      evidence: "The evidence for improved erection quality from P-Shot is emerging; a 2023 systematic review of 7 PRP studies found overall improvement in sexual function scores; however, larger randomised controlled trials with placebo control are still needed; at Nexus Clinic KL, improved erection quality is presented as a potential benefit that some men may experience rather than a guaranteed outcome; men with severe erectile dysfunction are advised that the P-Shot is unlikely to be sufficient as standalone treatment and that evidence-based options including shockwave therapy and PDE5 inhibitors should form the foundation of their erectile dysfunction treatment; men with mild erectile dysfunction may find the P-Shot a useful non-surgical, non-medication complement to lifestyle optimisation"
    },
    {
      benefit: "Enhanced Sensitivity and Improve Sensitivity",
      mechanism: "Growth factors including nerve growth factor (NGF) and platelet-derived growth factor (PDGF) present in PRP may support the health and regeneration of penile nerve tissue at the injection site; improved nerve supply to the surface and deeper penile tissue may enhance sensitivity to stimulation; enhanced sensitivity is reported subjectively by some men who have received the P-Shot as part of their sexual health programme; for men whose reduced sensitivity is contributing to difficulties with sexual performance, improved sensitivity may support the overall sexual experience",
      evidence: "Enhanced sensitivity is one of the most consistently reported subjective improvements in men who have received the P-Shot; at Nexus Clinic KL, improve sensitivity is presented as a plausible benefit supported by the growth factor and nerve tissue regeneration mechanism of PRP therapy; individual responses vary significantly; sensitivity improvement is typically noticed from 4 to 8 weeks after the P-Shot and may continue to develop over the following weeks as tissue regeneration matures; patients who want to improve sensitivity as part of their sexual health and wellness goals are suitable candidates for the P-Shot alongside a comprehensive sexual health assessment"
    },
    {
      benefit: "Improved Blood Flow to the Penis",
      mechanism: "Vascular endothelial growth factor (VEGF) is one of the key growth factors concentrated in platelet-rich plasma; VEGF is the primary angiogenic signal that instructs vascular endothelial cells to form new capillaries and blood vessels; when VEGF-rich PRP is injected into the corpus cavernosum and penile tissue, the growth of new blood vessels in the treated area may improve resting blood flow and blood flow during erection; improved blood flow is the vascular mechanism connecting PRP injection to potential improvements in erection quality; this is the same neovascularisation mechanism targeted by Li-ESWT shockwave therapy, though through a different biological pathway",
      evidence: "Improved blood flow from the P-Shot is supported by the well-established VEGF and angiogenesis biology of PRP therapy; the blood vessels formed in response to PRP growth factors are structural and may contribute to sustained improvements in blood flow beyond the window of effect of any single medication dose; at Nexus Clinic KL, the P-Shot for improved blood flow is most often recommended in combination with other treatment options including shockwave therapy (Li-ESWT), which also targets neovascularisation; the combination of P-Shot and shockwave therapy for men with vasculogenic erectile dysfunction seeking non-surgical treatment options is presented as a complementary regenerative approach at this clinic"
    },
    {
      benefit: "Support for Peyronie's Disease Management",
      mechanism: "Peyronie's disease involves the formation of fibrous scar tissue (plaque) within the tunica albuginea of the penis, causing penile curvature and sometimes pain during erection; the growth factors in PRP injected into the Peyronie's disease plaque may support the remodelling of the fibrous scar tissue, reduce inflammation in the plaque and over time reduce the severity of the penile curvature; a 2025 prospective study of 72 men with Peyronie's disease found that PRP injections helped reduce penile curvature and improve sexual function in affected patients",
      evidence: "The 2025 Peyronie's disease study is the most recent and highest-quality evidence for P-Shot PRP injection use; this is the indication with the strongest current evidence trajectory for the P-Shot; at Nexus Clinic KL, men with Peyronie's disease who present for P-Shot assessment receive a detailed discussion of the treatment's mechanism in the context of plaque remodelling, the current evidence including the 2025 study, and the realistic outcome expectations for their severity of curvature; severe Peyronie's disease with significant curvature and pain may require specialist urological assessment alongside the P-Shot as adjunctive therapy"
    },
  ];

  // Comparison Table Data
  const comparisonData = [
    {
      factor: "Mechanism",
      pshot: "Autologous PRP growth factors injected into the penis stimulate blood vessel growth, tissue repair and sensitivity enhancement; regenerative approach using the patient's own blood",
      shockwave: "Acoustic energy waves stimulate neovascularisation and smooth muscle regeneration in penile cavernosal tissue; addresses vascular root cause of vasculogenic erectile dysfunction",
      medication: "Inhibit the PDE5 enzyme to prolong nitric oxide signalling and smooth muscle relaxation during sexual stimulation; improve blood flow acutely during the medication's action window"
    },
    {
      factor: "Type",
      pshot: "Minimally invasive injection; non-surgical; non-medication; uses the patient's own blood; no foreign substances",
      shockwave: "Non-invasive; non-surgical; non-medication; no injection; acoustic device applied externally to the skin surface",
      medication: "Oral medication; systemic effect; requires sexual stimulation to work; does not produce structural vascular change; on-demand or daily dosing"
    },
    {
      factor: "Onset of Effect",
      pshot: "Gradual: 4 to 12 weeks for tissue regeneration and improved blood flow; no immediate erection improvement at time of injection; realistic timeline must be set before treatment",
      shockwave: "Gradual: structural vascular improvement develops over 4 to 12 weeks post-course; some improvements may be noticed from session 3 onward in the ESWT course",
      medication: "Rapid: 15 to 60 minutes after taking the medication depending on the specific PDE5 inhibitor; effect lasts 4 to 36 hours depending on formulation"
    },
    {
      factor: "Evidence for ED Treatment",
      pshot: "Emerging: 2023 systematic review of 7 studies showed improvement in sexual function scores; 2025 study positive for Peyronie's disease; larger RCTs still needed; honest communication of evidence level is the standard at Nexus Clinic KL",
      shockwave: "Good to strong: multiple RCTs confirm erectile function score improvement in 60 to 75% of men with mild to moderate vasculogenic erectile dysfunction; endorsed as first-line non-pharmacological treatment in major urology guidelines for vasculogenic ED",
      medication: "Very strong: extensive Phase III RCT evidence; first-line pharmacological ED treatment in all major clinical guidelines including EAU and AUA; effective in 60 to 80% of men with ED of various causes"
    },
    {
      factor: "Best Suited For",
      pshot: "Men seeking a regenerative, non-medication, non-surgical adjunct to their sexual health programme; Peyronie's disease management; men who want to improve sensitivity and erection quality as part of a broader men's health and wellness approach; best combined with other treatment options for optimal outcomes",
      shockwave: "Men with mild to moderate vasculogenic erectile dysfunction, especially PDE5 inhibitor partial responders or those who cannot take oral medication; men with diabetes or hypertension-related erectile dysfunction; men seeking a sustained structural improvement in blood flow beyond medication",
      medication: "Men who need reliable, immediate results for sexual intercourse; first-line treatment for erectile dysfunction of any cause in the absence of contraindications to medication; also effective as an adjunct to P-Shot or shockwave therapy during their regenerative timeline"
    },
    {
      factor: "Combination Value",
      pshot: "The P-Shot combined with shockwave therapy (Li-ESWT) provides two complementary neovascularisation signals to penile tissue; both target blood vessel growth through different pathways; this combination is offered at Nexus Clinic KL as a comprehensive regenerative approach for men with vasculogenic erectile dysfunction seeking non-surgical treatment options",
      shockwave: "Shockwave therapy combined with PDE5 inhibitor medication during the treatment course produces better erection quality outcomes than shockwave alone; the medication supports erection during the period when the structural vascular improvements from shockwave are still developing",
      medication: "PDE5 inhibitor medication can be used alongside both P-Shot and shockwave therapy; it provides reliable immediate results for sexual intercourse while the regenerative treatments take effect; continuing the medication during the P-Shot regenerative window ensures the patient has functional support"
    },
  ];

  // Pricing Table Data
  const pricingData = [
    {
      service: "P-Shot Initial Consultation",
      details: "Medical assessment of sexual health concerns and erectile dysfunction history; IIEF-5 questionnaire to assess erectile function severity; review of current medications and blood pressure, diabetes or other conditions affecting blood flow; testosterone blood test if relevant; discussion of P-Shot procedure, expected outcomes and realistic timeline for improvement; full pricing disclosed before any treatment is booked",
      price: "RM 150 to RM 300"
    },
    {
      service: "P-Shot Treatment (Single Session)",
      details: "Full P-Shot procedure including blood draw, PRP centrifuge preparation (15 to 20 minutes), topical numbing cream application (20 to 30 minutes), and PRP injection into the penis at multiple sites; approximately 30 to 40 minutes total; no injection medication, no downtime; doctor-performed at this clinic in Kuala Lumpur",
      price: "RM 2,000 to RM 4,500 per session"
    },
    {
      service: "P-Shot Programme (2 to 3 Sessions)",
      details: "2 to 3 P-Shot sessions spaced 4 to 6 weeks apart; programme pricing for men who want to maximise the regenerative benefit with multiple sessions; includes follow-up assessment at 6 to 8 weeks after each session to review erectile function response and adjust treatment plan; recommended for Peyronie's disease and for men who want to improve sexual performance with a sustained regenerative approach",
      price: "From RM 5,500 (programme pricing)"
    },
    {
      service: "Combined P-Shot and Li-ESWT Programme",
      details: "Comprehensive regenerative programme combining P-Shot PRP injection with Li-ESWT shockwave therapy for men with vasculogenic erectile dysfunction who want maximum non-surgical regenerative benefit; two neovascularisation pathways targeted simultaneously; programme includes assessment, P-Shot session, 6 Li-ESWT sessions and 3-month follow-up review; best suited for men with mild to moderate erectile dysfunction seeking non-surgical, non-medication treatment options",
      price: "From RM 8,000 (programme pricing)"
    },
    {
      service: "Blood Test Panel (if indicated)",
      details: "Testosterone, fasting glucose, HbA1c, lipid panel, liver function, full blood count; required before P-Shot for men with known diabetes, blood pressure concerns or hormone-related sexual health issues; provides the clinical baseline for monitoring treatment response",
      price: "RM 200 to RM 400 (laboratory fees)"
    },
  ];

  const faqs = [
    {
      q: "What is the P-Shot (Priapus Shot) and how does it work?",
      a: "The P-Shot (Priapus Shot) is a minimally invasive, non-surgical procedure that uses platelet-rich plasma (PRP) derived from the patient's own blood and injects it into the penis; because PRP uses the patient's own blood, the risk of allergic reactions is very low and there is no risk of immune rejection. The procedure works by concentrating the growth factors present in the patient's blood platelets using a centrifuge, then injecting this concentrated PRP into the corpus cavernosum and penile tissue; the growth factors in PRP stimulate the growth of new blood vessels in the treated area (neovascularisation), promote tissue repair at the injection site, may improve blood flow to the penis and may enhance sensitivity; these regenerative effects develop gradually over 4 to 12 weeks rather than immediately after the injection; the P-Shot is a non-surgical, non-medication treatment that uses the patient's own blood as the therapeutic agent.",
    },
    {
      q: "Is the P-Shot effective for erectile dysfunction?",
      a: "The P-Shot is an emerging regenerative treatment for erectile dysfunction with a developing evidence base; it is not currently classified as a first-line evidence-based erectile dysfunction treatment by major urology clinical guidelines; a 2023 systematic review of 7 PRP studies found overall improvement in sexual function scores, and a 2025 study showed meaningful benefit for Peyronie's disease; however, larger randomised controlled trials are still needed for overt erectile dysfunction; at Nexus Clinic KL, this clinic offers the P-Shot as a complementary regenerative option within a comprehensive erectile dysfunction treatment programme rather than as a replacement for established erectile dysfunction treatments such as PDE5 inhibitor medication (sildenafil, tadalafil) or shockwave therapy (Li-ESWT) which have stronger published evidence; for men with mild erectile dysfunction who want a non-medication, non-surgical option to improve erections and boost sexual performance, the P-Shot may be a suitable addition to their treatment plan tailored by their doctor.",
    },
    {
      q: "Is the P-Shot painful?",
      a: "Most men experience only mild discomfort during the P-Shot because a topical numbing cream is applied to the penis 20 to 30 minutes before the injection begins; once the numbing cream has taken full effect, most patients describe the P-Shot injection as producing only mild pressure or a minimal injection sensation rather than significant pain; the blood draw from the arm, which is similar to a standard blood test, is the step that most patients find briefly uncomfortable; the injection site in the penis is the most sensitive part of the procedure but adequate numbing with topical cream makes this manageable for the vast majority of patients; mild discomfort, swelling or bruising at the injection site may be present for 24 to 72 hours after the procedure and resolves without specific treatment; inflammation at the injection site is normal and temporary; there is no downtime after the P-Shot.",
    },
    {
      q: "How many P-Shot sessions are needed?",
      a: "The number of P-Shot sessions depends on the individual's sexual health goals and their response to the initial session; some men report satisfactory improvement in erection quality, sensitivity and sexual performance after a single P-Shot session; others benefit more from 2 to 3 sessions spaced 4 to 6 weeks apart to build on the initial regenerative stimulus; at Nexus Clinic KL, a follow-up consultation is scheduled at 6 to 8 weeks after the first P-Shot to assess the response and determine whether additional sessions are appropriate; for men with Peyronie's disease, 3 sessions spaced 4 to 6 weeks apart is the standard programme based on the available clinical evidence; for men combining P-Shot with Li-ESWT shockwave therapy, the number of sessions for each component is discussed and agreed at the initial consultation; the treatment plan is reviewed at each follow-up appointment based on the patient's feedback on their erection quality and sexual performance.",
    },
    {
      q: "Who should not have the P-Shot?",
      a: "The P-Shot is not appropriate for: men with active infection or inflammation in the treatment area (injection into an active infection is contraindicated for any injection procedure); men with significant bleeding disorders or on anticoagulant medication that cannot be safely paused around the procedure; men with active cancer or cancer in remission where PRP growth factor injection is not recommended without oncologist consultation; men with severe erectile dysfunction where the vascular damage is so extensive that the regenerative capacity of PRP injection is insufficient to produce meaningful improvement; men whose erectile dysfunction is purely psychogenic where the P-Shot has no mechanism of benefit; men seeking immediate results, as the P-Shot requires 4 to 12 weeks for any effect to develop; at Nexus Clinic KL, all contraindications and patient suitability are assessed at the initial consultation before any P-Shot session is scheduled.",
    },
    {
      q: "Can the P-Shot be combined with other erectile dysfunction treatments?",
      a: "Yes, and combining the P-Shot with other treatment options often produces better outcomes than any single treatment alone; the P-Shot combined with Li-ESWT shockwave therapy provides two complementary neovascularisation signals to penile tissue; PRP delivers growth factors directly into the penile tissue through injection while shockwave delivers acoustic energy externally to stimulate the same blood vessel growth process; this combination is available at Nexus Clinic KL as a comprehensive regenerative programme for men with vasculogenic erectile dysfunction who want the most complete non-surgical approach; the P-Shot can also be combined with PDE5 inhibitor medication during the 4 to 12 week period when the regenerative effects of the PRP are developing, so the patient has functional support for sexual intercourse while waiting for the regenerative effects to mature; testosterone optimisation for men with hormone deficiency is also complementary to the P-Shot as low testosterone impairs blood vessel health and penile tissue quality.",
    },
    {
      q: "Does the P-Shot increase penis size?",
      a: "Claims that the P-Shot consistently and reliably increases penis size are not supported by robust published clinical evidence; some men report a mild increase in penile girth from the temporary swelling following injection and from any improvement in erection quality and blood flow that develops over subsequent weeks; however, significant and permanent penile enlargement from PRP injection alone is not a claim that Nexus Clinic KL makes or that the current evidence supports; at this clinic, the P-Shot is presented as a treatment for improving erection quality, enhance sensitivity, improve blood flow and support sexual health and vitality, not as a penile enlargement procedure; men primarily seeking penis size increase are counselled about realistic expectations at the initial consultation.",
    },
    {
      q: "How long do P-Shot results last?",
      a: "The effects of a single P-Shot session typically last 6 to 12 months in men who respond to the treatment; the new blood vessels formed in response to PRP growth factors are structural and provide more durable benefit than the temporary window of effect of any single oral medication dose; however, the regenerative tissue environment in the penis continues to age and the underlying conditions causing erectile dysfunction (diabetes, blood pressure, cardiovascular disease, hormone decline) continue to progress if not managed, which means the improvement from P-Shot may diminish over time as these underlying causes progress; annual or bi-annual maintenance P-Shot sessions are recommended by most practitioners to sustain the regenerative benefit over the long term; at Nexus Clinic KL, the maintenance schedule is discussed at the 6-month follow-up consultation.",
    },
    {
      q: "What makes P-Shot different from other penile injection therapies?",
      a: "The P-Shot is fundamentally different from intracavernosal injection therapy (such as alprostadil) for erectile dysfunction; intracavernosal injection therapy uses a pharmacological agent (alprostadil or a compounded vasoactive drug) injected directly into the corpus cavernosum to produce an erection through direct smooth muscle relaxation; this produces a rapid erection independent of sexual stimulation and requires injecting a medication at the time of intended sexual intercourse; the P-Shot uses the patient's own blood (PRP), not a medication, and does not produce an immediate erection; instead it stimulates tissue regeneration and blood vessel growth over 4 to 12 weeks; the P-Shot is a regenerative therapy and intracavernosal injection is an on-demand pharmacological therapy; they serve different purposes and are not interchangeable; at Nexus Clinic KL, the full range of injection-based treatment options is discussed at the erectile dysfunction assessment consultation so each man can select the treatment most appropriate for his specific needs and sexual health goals.",
    },
    {
      q: "Is the P-Shot consultation at Nexus Clinic KL confidential?",
      a: "Yes. All men's health and sexual health consultations at Nexus Clinic KL are fully confidential; the nature of the consultation is not disclosed to reception or administrative staff beyond the scheduling requirement; the P-Shot procedure is performed in a private consultation room by a doctor; our doctors understand that sexual health and erectile dysfunction are deeply personal concerns and approach every consultation with clinical professionalism and without judgement; you are welcome to attend alone and no partner attendance is required; results of any blood test or assessment are held in strict confidence under the Personal Data Protection Act 2010; Nexus Clinic KL is located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia; contact us today to book your confidential P-Shot consultation.",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-cream via-light to-white py-20 px-4">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] opacity-5 mix-blend-overlay"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                <HeartPulse className="w-5 h-5 text-wine" />
                <span className="text-sm font-inter text-brown">
                  P-Shot in Malaysia: Priapus Shot PRP Treatment for Sexual Health and Erectile Dysfunction at Nexus Clinic KL
                </span>
              </div>
              <h1 className="font-georgia text-3xl lg:text-6xl text-brown leading-tight">
                P-Shot in Malaysia: Priapus Shot PRP Treatment to Enhance Performance and Support Sexual Health
                <span className="text-wine italic"> at Nexus Clinic KL in Kuala Lumpur</span>
              </h1>
              <p className="text-lg text-taupe font-inter max-w-lg">
                The P-Shot (Priapus Shot) is a minimally invasive, non-surgical regenerative procedure that uses platelet-rich plasma (PRP) prepared from the patient's own blood and injects it into the penis to stimulate blood flow, tissue repair and sensitivity enhancement. It is a men's health and wellness treatment at Nexus Clinic KL, this aesthetic and regenerative clinic in Kuala Lumpur, for men who want to boost performance, improve erection quality and enhance their sex life through a natural, non-medication approach.
              </p>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-taupe/20 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <p className="text-brown font-inter">
                    LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-wine" />
                  <p className="text-brown font-inter">
                    016-7025699 / 03-21635699
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-taupe">
                  <Shield className="w-4 h-4" />
                  <span>
                    Because P-Shot PRP treatment uses the patient's own blood, the risk of allergic reactions is significantly lower than with conventional injection medications
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-taupe">
                  <AlertCircle className="w-4 h-4" />
                  <span>
                    The P-Shot is an emerging regenerative therapy; the evidence base is developing and larger clinical trials are still being conducted
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-wine/20 to-rose/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-taupe/20">
                <Image
                  src="/images/regenerative/embryonic.webp"
                  alt="Medical consultation at Nexus Clinic"
                  width={400}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                />
                <Link href="/contact-us/">
                  <div className="absolute -bottom-4 -right-4 bg-wine text-white px-6 py-3 rounded-full shadow-lg hover:bg-wine/90 transition-all duration-300 cursor-pointer">
                    <p className="font-inter font-semibold">Book Confidential Consultation</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <TableForPages
          columns={[
            { key: "factor", header: "Factor", className: "font-semibold" },
            { key: "details", header: "Details" },
          ]}
          data={pshotAtGlanceData}
          title="P-Shot Treatment in Malaysia at a Glance: Priapus Shot, PRP and Sexual Health"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="max-w-7xl mx-auto"
        />

        <p className="text-sm text-taupe text-center max-w-2xl mx-auto mt-4">
            Anastasiadis E et al. Erectile dysfunction: Is platelet-rich plasma the new frontier for treatment in patients with erectile dysfunction? A review of the existing evidence. 
            <a 
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8900600/" 
              target="_blank" 
              rel="nofollow" 
              className="text-wine font-bold italic"
            >
              PMC (PubMed Central)
            </a>. 
            2022;24(1):21-25. This review evaluates the clinical transition of PRP into male sexual medicine, analyzing how concentrated growth factors promote tissue regeneration and angiogenesis to improve erectile function and penile health.
          </p>
      </section>

      {/* The P-Shot Procedure at Nexus Clinic KL Table - Using TableForPages */}
      <section className="py-20 px-4 bg-cream">
        <TableForPages
          columns={[
            { key: "step", header: "Step", className: "font-semibold" },
            { key: "what", header: "What Happens" },
            { key: "why", header: "Why This Matters for Sexual Health" },
            { key: "atNexus", header: "At Nexus Clinic KL" },
          ]}
          data={pshotProcedureData}
          title="The P-Shot Procedure at Nexus Clinic KL: Step-by-Step Process from Consultation to Recovery"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="max-w-7xl mx-auto"
        />
      </section>

      {/* Benefits of P-Shot Table - Using TableForPages */}
      <section className="py-20 px-4 bg-white">
        <TableForPages
          columns={[
            { key: "benefit", header: "Potential Benefit of P-Shot", className: "font-semibold" },
            { key: "mechanism", header: "Proposed Mechanism" },
            { key: "evidence", header: "Evidence Status and What Nexus Clinic KL Communicates to Patients" },
          ]}
          data={benefitsData}
          title="Benefits of P-Shot: What PRP Injection into the Penis May Improve for Men's Sexual Health and Vitality"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="max-w-7xl mx-auto"
        />

        <p className="text-center max-w-2xl mx-auto mt-4">
          For men whose sexual health concerns include erectile dysfunction driven by vascular causes, our{' '}
          <Link href="/regenerative/ed-treatment-malaysia/" className="text-wine font-bold italic">
            ED treatment in Malaysia
          </Link>{' '}
          provides the comprehensive erectile dysfunction assessment and treatment framework that forms the foundation of any sexual health programme at Nexus Clinic KL.
        </p>
      </section>

      {/* P-Shot vs Shockwave Therapy vs ED Medication Comparison Table - Using TableForPages */}
      <section className="py-20 px-4 bg-cream">
        <TableForPages
          columns={[
            { key: "factor", header: "Comparison Factor", className: "font-semibold" },
            { key: "pshot", header: "P-Shot (PRP Injection)" },
            { key: "shockwave", header: "Shockwave Therapy (Li-ESWT)" },
            { key: "medication", header: "PDE5 Inhibitors (Oral ED Medication)" },
          ]}
          data={comparisonData}
          title="P-Shot vs Shockwave Therapy vs ED Medication: Choosing the Right Treatment for Your Erectile Dysfunction"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="max-w-7xl mx-auto"
        />
        <p className="text-center">
          For the complete shockwave therapy framework including patient selection criteria and protocol details, our{' '}
          <Link href="/regenerative/shockwave-therapy-malaysia/" className="text-wine font-bold italic">
            shockwave therapy in Malaysia
          </Link>{' '}
          provides full clinical guidance on Li-ESWT for erectile dysfunction.
        </p>
      </section>

      {/* P-Shot Cost in Malaysia 2026 Table - Using TableForPages */}
      <section className="py-20 px-4 bg-white">
        <TableForPages
          columns={[
            { key: "service", header: "Service / Treatment", className: "font-semibold" },
            { key: "details", header: "Details" },
            { key: "price", header: "Price Range (RM) 2026" },
          ]}
          data={pricingData}
          title="P-Shot Cost in Malaysia 2026: Treatment Pricing at Nexus Clinic KL"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="max-w-7xl mx-auto"
        />
      </section>
          <FAQWithSchema data={faqs} />
      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-wine to-rose">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="font-georgia text-4xl mb-6">P-Shot in Malaysia: Priapus Shot PRP Treatment for Sexual Health and Vitality at Nexus Clinic KL</h2>
          <p className="text-xl mb-8 font-inter opacity-90">
            The P-Shot (Priapus Shot) at Nexus Clinic KL, this aesthetic and regenerative clinic kuala lumpur, is a non-surgical, minimally invasive treatment that uses the patient's own blood to deliver growth factors directly to penile tissue to stimulate blood vessel growth, tissue repair and enhanced sensitivity as part of a comprehensive men's health and sexual health programme.
          </p>
          <p className="text-lg mb-8 font-inter opacity-80">
            Our licensed doctors bring over 15 years of combined clinical experience and have completed over 5,000 procedures.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl inline-block">
            <p className="font-georgia text-2xl mb-4">
              Nexus Clinic Kuala Lumpur
            </p>
            <p className="font-inter mb-2">
              LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
            </p>
            <p className="font-inter text-2xl font-bold">
              016-7025699 / 03-21635699
            </p>
            <Link href="/contact-us/">
              <button className="mt-6 bg-white text-wine px-8 py-3 rounded-full font-semibold hover:bg-cream transition-all duration-300 cursor-pointer">
                Book Your P-Shot Consultation Today | Call or WhatsApp
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default PShotLanding;