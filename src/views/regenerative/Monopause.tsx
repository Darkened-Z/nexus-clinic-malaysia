"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Moon,
  Heart,
  Droplets,
  Bone,
  Shield,
  FileText,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Whatsapp from "@/src/components/Whatsapp";
const MonopauseLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "regenerative/menopause");

  const faqData = [
    {
      q: "What is menopausal hormone therapy and who needs it?",
      a: "Menopausal hormone therapy (MHT), also called hormone replacement therapy or HRT, replaces the oestrogen and progesterone that decline at menopause; menopause and hrt are closely linked because the symptoms of menopause including hot flushes, night sweats, mood swings, vaginal dryness, sleep disruption and cognitive changes are all consequences of oestrogen withdrawal that hormone replacement therapy directly addresses; menopausal women experiencing significant quality of life impact from menopausal symptoms are the primary candidates for HRT; women with premature menopause or early menopause need menopausal hormone therapy for long-term health protection even if their symptoms are manageable; healthcare professionals at Nexus Clinic KL assess menopausal symptoms, hormone levels and risk profile to determine the most appropriate type of hrt for each individual woman."
    },
    {
      q: "What is the best type of HRT for Malaysian women?",
      a: "For most menopausal women in Malaysia, the best type of hrt is transdermal oestrogen therapy (gel or patch) combined with oral micronised progestogen for women with a uterus; this combined HRT formulation carries the lowest VTE risk, the lowest breast cancer risk among combined regimens, and is the type of hrt specifically recommended in the 2025 PMC narrative review for women with any cardiometabolic or thrombotic risk factors; towards hrt initiation with this formulation is the standard approach at Nexus Clinic KL; oestrogen-only HRT is usually prescribed to women who have had a hysterectomy; healthcare professionals assess each woman's type of hrt choice based on her specific menopausal stage, risk factors and symptom profile."
    },
    {
      q: "Does HRT cause breast cancer?",
      a: "The risk depends entirely on the type of hrt and specifically the type of progestogen used in combined HRT; estrogen alone in hysterectomised women actually reduced breast cancer incidence by 23% in the WHI trial; combined HRT with synthetic progestogen carries a small increased risk; combined HRT with micronised progestogen (oestrogen and progestogen in bioidentical form) carries substantially lower breast cancer risk than oral combined HRT with synthetic progestogen; vaginal oestrogen therapy has negligible breast cancer risk; the formulation-specific potential risks of HRT are communicated to every patient at Nexus Clinic KL before any prescription is issued; menopausal women with a family history of breast cancer receive a detailed individual risk discussion."
    },
    {
      q: "How do I know if I need HRT?",
      a: "Women experience the need for HRT when menopausal symptoms significantly affect quality of life; the Menopause-Specific Quality of Life questionnaire used at Nexus Clinic KL quantifies the severity of menopausal symptoms across vasomotor, psychosocial, physical and sexual domains; if hot flushes are waking you multiple times per night, if mood swings and brain fog are interfering with work, if vaginal dryness is causing pain during intercourse or if joint aches are limiting physical activity, these are meaningful quality of life impacts that hormone replacement therapy can address; women may also need HRT for bone protection if they have premature menopause or early menopause; blood testing confirms perimenopausal or menopausal status by measuring hormone levels and oestrogen levels where the clinical picture is unclear; women experience significant benefit from starting HRT within 10 years of menopause."
    },
    {
      q: "Is there a maximum age or duration for taking HRT?",
      a: "There is no arbitrary maximum age or duration for taking HRT; current guidelines from the British Menopause Society, NICE and the Endocrine Society explicitly state that the decision to continue hrt is based on ongoing individual benefit versus risk at each annual review; hrt and when to initiate a taper or cessation is a decision made between each menopausal woman and her doctor based on her ongoing symptoms, potential risks and overall women's health; menopausal women with severe premature menopause or early menopause may need hormone replacement therapy until the average age of natural menopause at 51 or beyond; menopausal women with persistent menopausal symptoms beyond 5 years may benefit from extended HRT when potential risks are low; at Nexus Clinic KL, each annual review explicitly reassesses whether to continue hrt and whether the ongoing hormone replacement therapy is justified."
    },
    {
      q: "Can I take HRT if my mother had breast cancer?",
      a: "A family history of breast cancer in a first-degree relative is a relative consideration in hormone replacement therapy prescribing, not an absolute contraindication; menopausal women with family history are counselled carefully about their individual breast cancer risk, the type of hrt options and the potential risks and benefits of each formulation; in most menopausal women with family history but no personal history of breast cancer who are experiencing menopausal symptoms, the benefit of appropriately selected transdermal oestrogen therapy with micronised progestogen is considered to outweigh the residual potential risks; healthcare professionals at Nexus Clinic KL discuss all potential risks thoroughly before prescribing any type of hrt; an absolute contraindication is personal history of active oestrogen-receptor-positive breast cancer."
    },
    {
      q: "What happens if I don't treat menopausal symptoms?",
      a: "Untreated menopausal symptoms significantly affect quality of life for menopausal women affected by hot flushes, night sweats, mood swings, vaginal dryness and sleep disruption; beyond the immediate quality of life impact, the long-term consequences of oestrogen deficiency include accelerated bone loss leading to osteoporosis, increased cardiovascular risk from oestrogen's protective effects on the endothelium, progressive vaginal atrophy producing ongoing vaginal dryness and dyspareunia, and possible increased cognitive decline risk; women experience these long-term consequences most severely when premature menopause or early menopause goes untreated; at Nexus Clinic KL, the reasons for taking HRT are discussed in the context of both immediate menopausal symptom relief and long-term health protection; HRT helps mitigate these effects when prescribed appropriately and monitored regularly."
    },
    {
      q: "Is transdermal HRT better than tablets?",
      a: "For most menopausal women in Malaysia, transdermal oestrogen therapy (gel or patch) is the preferred route because it bypasses first-pass liver metabolism and does not carry the modest VTE risk associated with oral oestrogen therapy; for menopausal women who are obese, who smoke, who have personal or family history of blood clots, who have migraine with aura or who have metabolic risk factors, transdermal hormone therapy is specifically recommended over oral as the safest type of hrt; towards hrt via transdermal delivery is the standard first choice at Nexus Clinic KL; for menopausal women without these risk factors, the absolute risk difference between oral and transdermal is small and individual preference can be accommodated; in Malaysia's climate, gel is generally more practical than patches as patch adhesion can be affected by heat and humidity."
    },
    {
      q: "Can I take HRT during perimenopause when I still have periods?",
      a: "Yes; hormone replacement therapy can be started during perimenopause when menopausal symptoms are present and hormone levels confirm perimenopausal status; during perimenopause, cyclical or sequential combined HRT is prescribed with oestrogen continuously and progestogen added for 12 to 14 days of each cycle to produce a monthly withdrawal bleed; hrt or the combined pill is an option for perimenopausal women who also need contraception; perimenopausal women who are experiencing menopausal symptoms may also benefit from HRT alongside the awareness that fertility is still possible in early perimenopause; healthcare professionals at Nexus Clinic KL assess the most appropriate approach for each perimenopausal woman based on her specific symptom pattern, hormone levels and contraceptive needs."
    },
    {
      q: "Is the HRT consultation at Nexus Clinic KL free?",
      a: "The initial hormone replacement therapy assessment at Nexus Clinic KL is priced at RM 150 to RM 300 and includes a structured menopausal symptom assessment using validated questionnaires, comprehensive medical and family history review including breast cancer and VTE history, blood pressure measurement, physical examination, contraindication screening and blood test requisition for the full pre-HRT hormonal and metabolic panel; a follow-up appointment reviews the blood results and presents the personalised hormone replacement therapy plan with type of hrt recommendation, monitoring schedule and full pricing before any prescription is issued; healthcare professionals at this clinic discuss the potential risks and benefits of using HRT and assist in making an informed decision about taking HRT; menopausal women experiencing menopausal symptoms can book an appointment today at Nexus Clinic KL, located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia."
    },
  ];

  const trustItems = [
    { icon: MapPin, text: t("hero.trust1") },
    { icon: FileText, text: t("hero.trust2") },
    { icon: Shield, text: t("hero.trust3") },
  ];

  const symptoms = [
    {
      icon: Thermometer,
      title: t("symptoms.s1Title"),
      desc: t("symptoms.s1Desc"),
    },
    { icon: Moon, title: t("symptoms.s2Title"), desc: t("symptoms.s2Desc") },
    {
      icon: Droplets,
      title: t("symptoms.s3Title"),
      desc: t("symptoms.s3Desc"),
    },
    { icon: Bone, title: t("symptoms.s4Title"), desc: t("symptoms.s4Desc") },
  ];

  const methods = [t("types.m1"), t("types.m2"), t("types.m3"), t("types.m4")];

  const consultSteps = [
    {
      num: t("consultation.s1Num"),
      title: t("consultation.s1Title"),
      desc: t("consultation.s1Desc"),
    },
    {
      num: t("consultation.s2Num"),
      title: t("consultation.s2Title"),
      desc: t("consultation.s2Desc"),
    },
    {
      num: t("consultation.s3Num"),
      title: t("consultation.s3Title"),
      desc: t("consultation.s3Desc"),
    },
    {
      num: t("consultation.s4Num"),
      title: t("consultation.s4Title"),
      desc: t("consultation.s4Desc"),
    },
  ];

  const goodCandidateItems = [
    t("candidate.g1"),
    t("candidate.g2"),
    t("candidate.g3"),
  ];

  const cautionItems = [
    t("candidate.c1"),
    t("candidate.c2"),
    t("candidate.c3"),
    t("candidate.c4"),
  ];

  const riskCards = [
    { title: t("risks.r1Title"), desc: t("risks.r1Desc") },
    { title: t("risks.r2Title"), desc: t("risks.r2Desc") },
    { title: t("risks.r3Title"), desc: t("risks.r3Desc") },
  ];

  const hrtBenefits = [
    t("comparison.h1"),
    t("comparison.h2"),
    t("comparison.h3"),
  ];

  const nonHrtBenefits = [
    t("comparison.nh1"),
    t("comparison.nh2"),
    t("comparison.nh3"),
    t("comparison.nh4"),
  ];

  const costFactors = [
    t("cost.c1"),
    t("cost.c2"),
    t("cost.c3"),
    t("cost.c4"),
    t("cost.c5"),
    t("cost.c6"),
  ];

  const nexusStandout = [
    t("competitor.n1"),
    t("competitor.n2"),
    t("competitor.n3"),
    t("competitor.n4"),
  ];

  return (
    <>
      <main className="bg-light font-['Inter'] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Confident woman in professional setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent" />
          </div>

          <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-wine/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">Menopause Hormone Replacement Therapy Malaysia: HRT and Menopause Management in Kuala Lumpur | Nexus Clinic KL</span>
                </div>

                <h2 className="font-['Georgia'] text-3xl lg:text-6xl text-brown leading-tight">
                  Menopause Hormone Replacement Therapy Malaysia: Evidence-Based HRT for Menopausal Women in Kuala Lumpur
                </h2>

                <p className="lg:text-lg text-taupe leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
                  Hot flushes that interrupt every meeting. Night sweats that have not allowed a full night's sleep in six months. Mood swings and a brain that does not feel like your own. These are the menopausal symptoms that many menopausal women in Malaysia accept as an inevitable part of midlife. They are not. These symptoms of menopause include hot flushes, night sweats, mood swings, vaginal dryness, sleep disruption and cognitive changes that are the documented physiological consequences of oestrogen withdrawal at menopause, and hormone replacement therapy is the most effective treatment for them that medical science has produced.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/contact-us/"
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-rose transition-colors shadow-lg hover:shadow-xl"
                  >
                    Book Your HRT Assessment
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                  <Whatsapp message={"Hello, can i get more info"} />
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-wine/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 pb-4 border-b border-cream">
                      <MapPin className="w-5 h-5 text-wine" />
                      <span className="text-brown">LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia</span>
                    </div>

                    <div className="grid gap-4">
                      {trustItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3"
                          >
                            <Icon className="w-5 h-5 text-wine mt-1 shrink-0" />
                            <span className="text-sm text-brown">
                              {item.text}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Hormone Replacement Therapy and Menopause in Malaysia at a Glance Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
            <TableForPages
              columns={[
                { key: "factor", header: "Factor", className: "font-semibold" },
                { key: "details", header: "Details" },
              ]}
              data={[
                { 
                  factor: "What HRT Is and What It Treats", 
                  details: "Hormone replacement therapy (HRT) replaces the oestrogen and progesterone that decline at menopause; managing menopausal symptoms through hormone replacement therapy is the most effective approach available for vasomotor symptoms (hot flushes, night sweats), genitourinary syndrome (vaginal dryness, recurrent UTIs), mood swings, brain fog, sleep disturbance, joint aches, and bone protection; menopause and hrt represent the most clinically significant women's health intervention of midlife; HRT helps menopausal women regain quality of life that menopausal symptoms have significantly disrupted; menopause and hormone replacement therapy should be discussed by all women experiencing significant menopausal symptom burden" 
                },
                { 
                  factor: "Malaysian Menopausal Context", 
                  details: "Menopause is a natural biological transition marking the end of her reproductive years; in Malaysian women, the average age of menopause is approximately 50.7 years; the ages of 45 and 55 encompass most Malaysian women's menopausal experience; menopause is a natural process that typically occurs between the ages of 45 and 55 in Malaysia; early or premature menopause affects women before age 40; women transition through menopause over a perimenopausal phase that may begin 4 to 10 years before the final period; post menopause is formally defined as 12 months after the last period; regarding menopause, the Malaysian female population is significantly underserved by current HRT prescribing rates" 
                },
                { 
                  factor: "Type of HRT Available", 
                  details: "Combined HRT: oestrogen and progestogen prescribed to women with an intact uterus; required because oestrogen-only therapy without progestogen in women with a uterus significantly increases the risk of uterine cancer | Oestrogen-only HRT: oestrogen-only HRT is usually prescribed to women who have had a hysterectomy; estrogen alone does not require progestogen protection when the uterus has been removed | Oestrogen therapy with an intrauterine system: therapy with an intrauterine progestin as the progestogen component | Local vaginal oestrogen: for isolated vaginal dryness without systemic HRT; negligible systemic absorption | Transdermal or oral delivery" 
                },
                { 
                  factor: "Who Needs Progestogen", 
                  details: "Women with an intact uterus must take progestogen alongside oestrogen to protect the endometrium and reduce the risk of uterine cancer; women with a uterus taking oestrogen without progestogen have significantly elevated risk of uterine cancer; women with a uterus on combined HRT have this risk of uterine cancer eliminated; oestrogen-only HRT is used for women without a uterus; prescribed to women with a uterus, combined HRT includes oestrogen and progestogen in appropriate formulation" 
                },
                { 
                  factor: "HRT and When to Initiate", 
                  details: "HRT and when to initiate is determined by menopausal symptom severity and timing; starting HRT within 10 years of menopause and before age 60 is associated with the most favourable risk-benefit profile; decide whether to start HRT based on symptom burden, personal risk factors and discussion with healthcare professionals; the window of opportunity for maximum cardiovascular and bone protection from HRT is in the early postmenopausal phase; towards HRT initiation early delivers the strongest preventive benefit alongside symptom relief" 
                },
                { 
                  factor: "Monitoring Required", 
                  details: "Annual review: symptom assessment, blood pressure, unexpected bleeding investigation, ongoing indication review; mammography per age-appropriate schedule; no maximum duration of HRT when benefit outweighs risk at annual review; continue HRT is the appropriate decision when a woman is still symptomatic and has low individual risk; healthcare professionals at Nexus Clinic KL review HRT at every annual appointment" 
                },
              ]}
              title="Hormone Replacement Therapy and Menopause in Malaysia at a Glance: HRT Types, Hormones and Menopause Symptoms"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="container mx-auto px-4 md:px-8 py-12"
            />

            <p className="text-sm text-taupe text-center max-w-2xl mx-auto">
              Bakken K, et al. Menopausal hormone therapy and breast cancer risk: a population-based cohort study of 1.3 million women. 
              <a 
                href="https://www.nature.com/articles/s41416-024-02636-1" 
                target="_blank" 
                rel="nofollow" 
                className="text-wine font-bold italic"
              >
                British Journal of Cancer
              </a>. 
              2024;131:212-221. (Updated Review: PMC, 2025). This extensive 2024 cohort study and the subsequent 2025 review evaluate the evolving safety profiles of modern MHT, providing clinicians with updated risk-benefit frameworks for the individualized treatment of menopausal symptoms.
            </p>
        </motion.section>

        {/* Type of HRT and Oestrogen Therapy Route Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <TableForPages
            columns={[
              { key: "formulation", header: "Formulation / Type of HRT", className: "font-semibold" },
              { key: "route", header: "Route and Delivery" },
              { key: "vteRisk", header: "VTE / Blood Clot Risk" },
              { key: "breastCancer", header: "Breast Cancer Consideration" },
              { key: "bestFor", header: "Best For Malaysian Women" },
            ]}
            data={[
              {
                formulation: "Transdermal Oestradiol Gel (Oestrogel, Sandrena)",
                route: "Applied daily to skin of arm, thigh or abdomen; oestrogen therapy delivered transdermally into the bloodstream; bypasses first-pass liver metabolism; this type of hrt avoids hepatic clotting factor elevation",
                vteRisk: "Low: transdermal oestrogen therapy does not raise clotting factors; VTE risk similar to non-HRT users; preferred for women with cardiovascular or clotting risk; oestrogen-only delivery via transdermal route has the most favourable vascular safety profile",
                breastCancer: "Associated with lowest breast cancer risk among systemic oestrogen formulations when combined with micronised progesterone; Norwegian cohort of 1.3 million women confirms lower risk vs oral combined HRT; type of hrt with the most favourable combined safety profile",
                bestFor: "First choice at Nexus Clinic KL for most menopausal women starting HRT; recommended for women with cardiovascular risk, clotting history, smokers, overweight; towards hrt initiation via transdermal route is the standard approach for most Malaysian women"
              },
              {
                formulation: "Transdermal Oestradiol Patch (Evorel, FemSeven)",
                route: "Applied to skin every 3 to 4 days; consistent transdermal oestrogen therapy; same liver bypass as gel; this type of hrt suits women who prefer less frequent application than daily gel",
                vteRisk: "Low: oestrogen therapy via patch bypasses first-pass liver metabolism; no elevated VTE risk above baseline; this type of hrt is preferred over oral HRT in women with blood clot risk; oestrogen-only patch has strong vascular safety data",
                breastCancer: "Similar low breast cancer risk profile to gel when combined with micronised progesterone; patch with intrauterine progestin is among lowest-risk combined HRT; oestrogen and progestogen via patch plus IUS is the lowest combined risk option",
                bestFor: "Women who prefer less frequent application; towards hrt with patches suits women who find daily gel inconvenient; patch adhesion may be affected by Malaysia's humidity; oestrogen therapy via patch is an equally effective alternative to gel in this climate"
              },
              {
                formulation: "Oral Oestradiol Tablets (Progynova, Estrofem)",
                route: "Taken daily by mouth; oestrogen therapy metabolised by liver on first pass; raises hepatic clotting factors during metabolism; type of hrt with a moderate vascular risk profile",
                vteRisk: "Moderate: oral oestrogen therapy undergoes first-pass hepatic metabolism; VTE risk approximately double that of non-HRT users; this type of hrt is not preferred in women with blood clot risk; healthcare professionals should assess vascular risk before prescribing oral HRT",
                breastCancer: "Estrogen alone in hysterectomised women: WHI oestrogen alone arm found a 23% REDUCTION in breast cancer risk; estrogen and progesterone combined oral: higher risk than oestrogen alone or transdermal with micronised progesterone; potential risks should be discussed with healthcare professionals before starting oral combined HRT",
                bestFor: "Women without VTE risk factors who prefer a tablet; oestrogen-only HRT is usually prescribed to women who have had a hysterectomy in oral form if other risks are absent; less preferred when any vascular or thrombotic risk is present; women may choose oral for convenience when transdermal is impractical"
              },
              {
                formulation: "Micronised Progesterone (Utrogestan)",
                route: "Oral capsule taken at night; bioidentical hormone to the body's own progesterone; protects the endometrium in women with a uterus taking systemic oestrogen therapy; progestogen component of combined HRT",
                vteRisk: "Neutral to low: micronised progestogen does not carry the VTE risk of synthetic progestogens such as medroxyprogesterone acetate or norethisterone; no additional clotting risk added to transdermal oestrogen therapy; preferred progestogen component of combined HRT for women with any vascular concern",
                breastCancer: "Lower breast cancer risk compared to synthetic progestogens; Norwegian cohort of 1.3 million women shows higher risk with oral combined synthetic progestogen regimens; micronised progestogen in combined HRT confers lower breast cancer risk than continuous synthetic progestins; oestrogen and progestogen with micronised formulation is the safest combined HRT option",
                bestFor: "Preferred progestogen at Nexus Clinic KL for women with a uterus on systemic oestrogen therapy; combined HRT using transdermal oestrogen plus micronised progestogen represents the lowest-risk systemic HRT; evening dosing improves sleep quality in women affected by night sweats and sleep disruption"
              },
              {
                formulation: "Local Vaginal Oestrogen (Vagifem, Ovestin, Estring)",
                route: "Applied directly to vaginal tissue; minimal systemic absorption; oestrogen therapy acts locally on vaginal and lower urinary tract tissue only; this type of hrt targets vaginal dryness and genitourinary symptoms without systemic oestrogen effects",
                vteRisk: "Negligible: systemic absorption minimal; no elevated clotting risk; safe even in women who cannot use systemic HRT; type of hrt with the most favourable safety profile for isolated genitourinary symptoms",
                breastCancer: "Negligible breast cancer risk: no systemic oestrogen exposure from local vaginal oestrogen therapy; can be used safely in women with breast cancer history in most clinical guidelines when vaginal dryness significantly affects quality of life; no progestogen required as systemic absorption is negligible",
                bestFor: "Isolated vaginal dryness, painful intercourse, recurrent UTIs without significant vasomotor symptoms; oestrogen therapy in this local form can be added to systemic HRT when vaginal dryness persists despite systemic oestrogen; type of hrt with the broadest safety applicability for women affected by genitourinary symptoms"
              },
            ]}
            title="Type of HRT and Oestrogen Therapy Route: Why Taking HRT Safely Means Matching Formulation to Risk Profile"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="container mx-auto px-4 md:px-8 py-12"
          />

          <p className="text-center max-w-2xl mx-auto text-sm text-taupe">
            For broader context on skin and tissue health changes that often accompany menopause, our{' '}
            <Link href="/face/skin-booster-malaysia/" className="text-wine font-bold italic">
              skin booster in Malaysia
            </Link>{' '}
            provides complementary information on collagen support and dermal hydration during hormonal transition.
          </p>
        </motion.section>

        {/* Taking HRT Safely: Menopause and Hormone Replacement Therapy Evidence Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8">
              <TableForPages
                columns={[
                  { key: "fear", header: "The HRT Fear", className: "font-semibold" },
                  { key: "evidence", header: "What the Evidence Actually Shows" },
                  { key: "position", header: "Current Position for Malaysian Menopausal Women" },
                ]}
                data={[
                  {
                    fear: "HRT causes heart attacks and strokes",
                    evidence: "The 2002 WHI trial studied women with mean age 63 using oral conjugated equine oestrogen plus medroxyprogesterone acetate, mostly 10 or more years past menopause; the WHI investigators themselves confirmed in 2023 that starting HRT within 10 years of menopause significantly decreases coronary heart disease risk; the cardiovascular risk seen in WHI was specific to older women starting oral HRT late after menopause",
                    position: "Starting HRT within 10 years of menopause or before age 60 is associated with a favourable cardiovascular risk profile; oestrogen hormone therapy has a cardioprotective effect when started early; menopausal hormone therapy initiated in the early postmenopausal window is now supported by all major menopause society guidelines; women transition through menopause in the window where HRT has the greatest long-term benefit"
                  },
                  {
                    fear: "HRT always increases breast cancer risk",
                    evidence: "WHI oestrogen alone arm in hysterectomised women found a 23% REDUCTION in breast cancer risk; the oestrogen and progestogen arm (specifically synthetic medroxyprogesterone acetate) found a small increased risk specific to that combined formulation; risk depends entirely on type of progestogen used; estrogen and progesterone in bioidentical form (micronised progesterone) carries lower risk than synthetic progestins",
                    position: "Type of hrt determines breast cancer risk, not HRT as a category; combined HRT with synthetic progestogen carries higher risk than transdermal oestradiol with micronised progestogen; vaginal oestrogen has no breast cancer risk contribution; the FDA announced in November 2025 the removal of certain black box warning language from HRT products reflecting the nuanced, formulation-specific risk profile; potential risks are type of hrt-specific and must be assessed individually"
                  },
                  {
                    fear: "HRT causes blood clots",
                    evidence: "Oral oestrogen therapy raises hepatic clotting factors through first-pass metabolism and modestly increases VTE risk; transdermal oestrogen therapy does not undergo first-pass hepatic metabolism and does not increase VTE risk above baseline; this is a route-specific risk, not an HRT category risk; oestrogen-only HRT via transdermal route carries no elevated clotting risk",
                    position: "Transdermal oestrogen therapy (gel or patches) carries no increased VTE risk for menopausal women; oral oestrogen therapy carries modest VTE risk increase; women with personal or family history of blood clots, those who are obese or smoke, or those with thrombophilia are prescribed transdermal HRT at Nexus Clinic KL; this type of hrt decision is based on individual risk profile, not a blanket HRT restriction"
                  },
                  {
                    fear: "Menopausal women should not use HRT beyond 5 years",
                    evidence: "The '5-year rule' was derived from misapplied WHI findings in women with a fundamentally different risk profile; current guidelines from the British Menopause Society, NICE and the Endocrine Society explicitly state that there is no mandatory maximum duration of HRT; the decision to continue hrt should be based on ongoing individual benefit versus risk at each annual review; women with severe premature menopause may need HRT until the average age of natural menopause at 51 and beyond",
                    position: "There is no arbitrary cut-off age or duration limit for HRT when ongoing benefit outweighs individual risk; the decision about taking hrt, starting HRT and continuing HRT is made at each annual review by the patient and doctor together; women experiencing menopausal symptoms beyond 5 years, women with early or premature menopause, and women with ongoing bone or cardiovascular risk benefit from continued HRT; the age of natural menopause in Malaysia at approximately 50.7 years means many women still benefit significantly from HRT well into their late 50s and beyond"
                  },
                ]}
                title="Taking HRT Safely: Menopause and Hormone Replacement Therapy Evidence for Malaysian Women in 2026"
                variant="detailed"
                fadeInUp={fadeInUp}
                className="container mx-auto px-4 md:px-8 py-12"
              />
          </div>
        </motion.section>

        {/* HRT by Menopause Stage Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
              <TableForPages
                columns={[
                  { key: "stage", header: "Stage", className: "font-semibold" },
                  { key: "definition", header: "Clinical Definition" },
                  { key: "symptoms", header: "Menopause Symptoms" },
                  { key: "approach", header: "HRT Approach at Nexus Clinic KL" },
                ]}
                data={[
                  {
                    stage: "Perimenopause",
                    definition: "Periods still occurring but changing; elevated FSH on blood testing; women transition through menopause beginning with perimenopause typically in mid-to-late 40s; perimenopausal women may experience symptoms for 4 to 10 years; average age of onset in Malaysian women is mid-40s",
                    symptoms: "Irregular periods; hot flushes beginning; night sweats; mood swings; worsening PMS-like symptoms; sleep difficulty; brain fog; symptoms such as hot flushes and night sweats may begin years before the final period; women experience significant quality of life impact during perimenopause",
                    approach: "Cyclical (sequential) combined HRT: oestrogen taken continuously, progestogen added for 12 to 14 days per cycle to produce regular withdrawal bleed; HRT or the combined pill if contraception is also needed; hormonal contraception during perimenopause treats menopause symptoms while providing contraception; FSH and oestradiol blood test to confirm perimenopausal status; decide whether to start HRT at this stage based on symptom severity and impact on quality of life; healthcare professionals at Nexus Clinic KL provide personalised guidance for perimenopausal women"
                  },
                  {
                    stage: "Menopause Transition (Early Postmenopause)",
                    definition: "12 consecutive months without a menstrual period; average age of menopause in Malaysia approximately 50.7 years; the end of her reproductive years biologically; this is the window where starting HRT within 10 years of menopause provides maximum cardiovascular and bone protection; menopause is a natural biological event that marks the end of her reproductive years",
                    symptoms: "Hot flushes and night sweats typically at their most intense in the 1 to 3 years after the final period; sleep significantly disrupted; vaginal dryness beginning; brain fog; joint aches; symptoms of menopause include hot flushes, night sweats, mood swings, vaginal dryness and cognitive changes; menopausal symptoms by replacing declining hormone levels is the most effective approach; symptoms such as hot flushes may be severe enough to impact work and relationships",
                    approach: "Continuous combined HRT: oestrogen daily plus progestogen daily (no withdrawal bleeds); oestrogen-only HRT is usually prescribed to women who have had a hysterectomy at this stage; transdermal oestrogen therapy preferred as delivery route; micronised progestogen as preferred progestogen for women with a uterus; using HRT in this early postmenopausal window provides the strongest bone and cardiovascular protection alongside symptom relief; the reasons for taking HRT are most compelling at this stage; HRT helps mitigate these effects of oestrogen withdrawal effectively when initiated promptly"
                  },
                  {
                    stage: "Established Post Menopause",
                    definition: "More than 5 years since the final period; post menopause state with fully adapted hormonal environment; symptoms may have reduced but genitourinary, bone, mood or cognitive concerns may persist; women affected by vaginal atrophy and recurrent UTIs often present at this stage",
                    symptoms: "Vasomotor symptoms usually reduced but may persist in a significant minority; genitourinary syndrome (vaginal dryness, pain during intercourse, recurrent UTIs, urinary urgency) often worsens progressively; osteoporosis risk accumulates; cognitive decline risk increases in post menopause; women affected by genitourinary syndrome often seek treatment at this stage",
                    approach: "Continue HRT if previously started and benefits are ongoing; initiation of HRT in established post menopause is possible but requires more individualised risk-benefit discussion; local vaginal oestrogen therapy for isolated genitourinary symptoms as a low-risk targeted type of hrt option; annual review to reassess whether to continue hrt; HRT helps mitigate these effects on quality of life when managed by healthcare professionals; no arbitrary cut-off age for HRT discontinuation"
                  },
                  {
                    stage: "Premature Menopause / Early Menopause (POI)",
                    definition: "Ovarian function loss before age 40 (premature menopause); early menopause is a significant health risk; early or premature menopause affects approximately 1% of women; may follow chemotherapy, radiotherapy or bilateral oophorectomy; the age of menopause at this stage is far below the average age of natural menopause",
                    symptoms: "All symptoms of menopause at a younger age; particularly significant impact on bone density, cardiovascular health and cognitive function; women experience profound emotional impact from premature menopause on fertility and identity; the age of menopause here is decades earlier than the average age; menopausal symptoms by replacing oestrogen early is urgent to protect long-term health",
                    approach: "HRT strongly recommended in premature menopause and should continue at minimum until the average age of natural menopause at 51 to protect bone density and reduce cardiovascular risk; oestrogen and progestogen therapy at this stage is health protection, not optional; HRT or the combined pill is recommended for women with early or premature menopause; women experiencing menopausal symptoms from premature menopause should book an appointment today at Nexus Clinic KL for urgent assessment; HRT helps mitigate these effects of premature oestrogen deficiency on the skeleton, heart and brain"
                  },
                ]}
                title="HRT by Menopause Stage: Reasons for Taking HRT at Different Phases of Women's Health"
                variant="detailed"
                fadeInUp={fadeInUp}
                className="container mx-auto px-4 md:px-8 py-12"
              />
              <p className="text-center max-w-2xl mx-auto text-sm text-taupe">
                  For women whose hormone concerns also intersect with sexual health changes including reduced libido and genitourinary symptoms, our{' '}
                  <Link href="/regenerative/ed-treatment-malaysia/" className="text-wine font-bold italic">
                    ED treatment in Malaysia
                  </Link>{' '}
                  provides context on how hormonal decline affects sexual health in both men and women.
                </p>
          </div>
        </motion.section>

        {/* Taking HRT Safely: The Monitoring Protocol Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <TableForPages
            columns={[
              { key: "parameter", header: "Monitoring Parameter", className: "font-semibold" },
              { key: "interval", header: "Monitoring Interval" },
              { key: "assessment", header: "What Is Assessed and Why" },
            ]}
            data={[
              {
                parameter: "Symptom and Quality of Life Review",
                interval: "At 3 months after starting HRT; then every 6 to 12 months; annually minimum",
                assessment: "MENQOL structured symptom review confirms HRT helps mitigate these effects on hot flushes, night sweats, mood swings, vaginal dryness, sleep and cognitive symptoms; identifies whether dose adjustment is needed; determines whether continue hrt decision is justified; menopausal women who have been symptom-free for 2 or more years are counselled on gradual dose reduction to assess whether HRT can be tapered; women experience the most benefit from HRT in the first 2 to 5 years; healthcare professionals at Nexus Clinic KL use validated tools at every review"
              },
              {
                parameter: "Blood Pressure",
                interval: "At every visit; at minimum annually; required for all women taking HRT",
                assessment: "HRT, particularly oral oestrogen therapy, can modestly increase blood pressure in some women; blood pressure elevation prompts review of oral vs transdermal type of hrt (transdermal has less BP effect); persistent hypertension requires management before or during using HRT; hypertension alone is not a contraindication to HRT when transdermal hormone therapy is used; towards hrt safety, blood pressure monitoring at every visit is standard at Nexus Clinic KL"
              },
              {
                parameter: "Breakthrough or Unexpected Bleeding",
                interval: "Any unscheduled bleeding on continuous combined HRT after first 3 to 6 months; any post-menopausal bleeding in women not on HRT",
                assessment: "Breakthrough bleeding in the first 3 months of combined HRT is common; persistent unscheduled bleeding after 6 months requires endometrial investigation to exclude endometrial hyperplasia or cancer and reduce the risk of uterine cancer; women with a uterus on oestrogen therapy without adequate progestogen are at risk of uterine cancer; at Nexus Clinic KL, unexplained breakthrough bleeding always prompts investigation; this protects women with a uterus from the risk of uterine cancer associated with oestrogen therapy alone; women affected by unexpected bleeding on HRT should contact their doctor immediately"
              },
              {
                parameter: "Breast Awareness and Mammography",
                interval: "Mammogram per Malaysia Cancer Society schedule: women over 40 annually or every 2 years; women taking HRT follow the same schedule",
                assessment: "Women using HRT are counselled to report any breast changes immediately; breast density may increase on combined HRT, reducing mammogram sensitivity; clinical breast examination is included in the annual HRT review; women experience increased vigilance around breast health as part of responsible taking HRT practice; healthcare professionals at Nexus Clinic KL include breast assessment at every annual HRT review"
              },
              {
                parameter: "Bone Density (DEXA) Scan",
                interval: "Baseline DEXA for women with premature menopause or early menopause, surgical menopause or multiple osteoporosis risk factors; repeat every 2 to 3 years in high-risk women",
                assessment: "HRT is the most effective intervention for maintaining bone density in early postmenopause; hormone replacement therapy protects against osteoporosis from the first month of use; DEXA confirms baseline bone density and measures response to HRT in women with pre-existing osteopenia; for premature menopause or early menopause patients, DEXA is a standard part of management; HRT helps mitigate these effects of early oestrogen deficiency on the skeleton"
              },
            ]}
            title="Taking HRT Safely: The Monitoring Protocol at Nexus Clinic KL for Menopausal Women"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="container mx-auto px-4 md:px-8"
          />
        </motion.section>

        {/* Hormone Replacement Therapy Cost in Malaysia 2026 Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <TableForPages
            columns={[
              { key: "service", header: "Service / Item", className: "font-semibold" },
              { key: "details", header: "Details" },
              { key: "price", header: "Price Range (RM) 2026" },
            ]}
            data={[
              {
                service: "Initial HRT Consultation",
                details: "Comprehensive menopausal symptom assessment (MENQOL), medical history, contraindication screening, blood pressure, physical examination; reasons for taking HRT discussed; healthcare professionals at Nexus Clinic KL provide fully personalised guidance; book an appointment today to speak to a doctor about managing menopausal symptoms; all potential risks disclosed before any prescription is issued",
                price: "RM 150 to RM 300"
              },
              {
                service: "Pre-HRT Blood Panel",
                details: "FSH, LH, oestradiol, progesterone (if perimenopausal), testosterone, SHBG, thyroid function, lipids, fasting glucose, CBC, liver function; hormone levels and oestrogen levels assessed; baseline for monitoring response to hormone replacement therapy",
                price: "RM 300 to RM 550 (laboratory fees)"
              },
              {
                service: "Transdermal Oestradiol Gel (per month)",
                details: "Oestrogel or equivalent; oestrogen therapy applied daily; most commonly prescribed starting point for HRT; recommended for women with any cardiovascular or clotting risk; prescription valid for 1 to 3 months",
                price: "RM 80 to RM 180 per month"
              },
              {
                service: "Micronised Progesterone (per month)",
                details: "Utrogestan; bioidentical progestogen component for women with a uterus on systemic oestrogen therapy; combined HRT progestogen component; taken nightly; oestrogen and progestogen combined programme for women with a uterus",
                price: "RM 80 to RM 160 per month"
              },
              {
                service: "Oral Combined HRT Tablets (per month)",
                details: "Combined HRT tablet; oestrogen and progestogen formulation; various brands; cyclical or continuous regimen depending on whether perimenopausal or post menopause; oestrogen-only HRT or combined HRT available; type of hrt selected by doctor based on individual profile",
                price: "RM 60 to RM 200 per month"
              },
              {
                service: "Local Vaginal Oestrogen (per supply)",
                details: "Vagifem pessaries, Ovestin cream or Estring ring; local oestrogen therapy for vaginal dryness and genitourinary syndrome; used alongside or without systemic HRT; type of hrt with the broadest safety profile for isolated vaginal symptoms",
                price: "RM 80 to RM 250 per supply"
              },
              {
                service: "Follow-Up HRT Review Consultation",
                details: "Annual structured review; symptom assessment, blood pressure, unexpected bleeding evaluation, ongoing indication review, prescription renewal; using HRT safely requires annual review; decide whether to continue hrt or adjust type of hrt at each visit; book an appointment today for your annual review",
                price: "RM 100 to RM 200 per visit"
              },
            ]}
            title="Hormone Replacement Therapy Cost in Malaysia 2026: HRT Pricing at Nexus Clinic KL Kuala Lumpur"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="container mx-auto px-4 md:px-8"
          />
        </motion.section>

        <FAQWithSchema data={faqData}/>
        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative py-20 overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Peaceful and confident woman"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-90" />
          </div>

          <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl text-white mb-6"
            >
              Evidence-Matched Menopausal Hormone Therapy at Nexus Clinic KL: HRT for Menopausal Women in Malaysia
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 mb-8 max-w-2xl mx-auto text-lg"
            >
              Hormone replacement therapy in Malaysia has been underused and under-prescribed for more than two decades because of a 2002 study that does not reflect the menopausal women, formulations or menopausal stages that make up actual candidates for HRT in 2026. The menopausal women who are most appropriate for hormone replacement therapy, those experiencing menopausal symptoms under 60 and within 10 years of menopause, are precisely the women who have been most discouraged from seeking it.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5" />
                Call or WhatsApp Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-wine transition-all text-lg">
                Book Your HRT Assessment
              </button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 mt-8 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
            </motion.p>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default MonopauseLanding;