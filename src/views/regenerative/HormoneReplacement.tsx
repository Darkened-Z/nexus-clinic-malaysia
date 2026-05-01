"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/src/lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import FAQWithSchema from "@/src/components/FAQWithSchema";
const HormonReplaceLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
    const { t } = useTranslation(locale, "regenerative/hormoneReplacement");

    const images = {
      heroWoman:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      consultation:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      clinic:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1191&q=80",
      hormones: "/images/regenerative/hormone-replacement.webp",
      wellness:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1220&q=80",
    };
    const faqsData =
    [
      {
        q: "Does HRT cause cancer?",
        a: "The answer depends entirely on the type of HRT and what kind of cancer is being discussed. For endometrial (uterine) cancer: oestrogen therapy taken without progestogen in a woman with a uterus does significantly increase the risk of uterine cancer. This is why progestogen is prescribed to women with a uterus on systemic oestrogen therapy, making combined HRT the standard approach. Combined HRT does not increase the risk of uterine cancer and is specifically recommended for women with an intact uterus to reduce the risk of uterine cancer that oestrogen alone would cause. For breast cancer: the risk depends on the type of progestogen. Estrogen alone in hysterectomised women actually reduced breast cancer incidence by 23% in the WHI trial. Combined HRT with synthetic progestogen carries a small increased risk. Bioidentical hormone replacement therapy (transdermal oestradiol with micronised progesterone bioidentical hormones) carries a substantially lower breast cancer risk. The potential risks and benefits of each type of HRT are discussed with every patient at Nexus Clinic KL before any hormone therapy is prescribed."
      },
      {
        q: "How do I know if I need HRT?",
        a: "Women may benefit from HRT if menopausal symptoms are affecting quality of life to a meaningful degree. The Menopause-Specific Quality of Life questionnaire used at Nexus Clinic KL quantifies the severity of menopausal symptoms across vasomotor, psychosocial, physical and sexual domains. If hot flashes are waking you multiple times per night, if mood swings and brain fog are interfering with your work performance, if vaginal dryness is causing pain during intercourse or if joint aches are limiting your physical activity, these are meaningful quality of life impacts that hormone replacement therapy can address. Blood testing is used to confirm perimenopausal or menopausal status where the clinical picture is unclear. Menopausal women experiencing symptoms of menopause include hot flashes, night sweats, mood swings, vaginal dryness and cognitive changes, and may need to decide whether to start HRT sooner than they think. You do not need to have stopped periods to be eligible for perimenopause management, and you do not need to wait for symptoms of menopause to become severe before seeking assessment."
      },
      {
        q: "Can I take HRT if my mother had breast cancer?",
        a: "A family history of breast cancer in a first-degree relative is a relative consideration in hormone replacement therapy prescribing, not an absolute contraindication. Women experiencing this concern are counselled carefully about their individual breast cancer risk and the formulation-specific potential risks and benefits of different types of HRT. In most menopausal women with family history but no personal history of breast cancer who are experiencing menopausal symptoms, the benefit of appropriately selected bioidentical hormone replacement therapy with micronised progesterone is considered to outweigh the residual potential risks when used at the lowest effective dose. The doctor will provide a clear explanation of the potential risks and benefits specific to each patient's situation. An absolute contraindication is personal history of active oestrogen-receptor-positive breast cancer. Healthcare professionals at Nexus Clinic KL discuss all potential risks thoroughly with women affected by breast cancer history before prescribing hormone therapy."
      },
      {
        q: "Does HRT cause weight gain?",
        a: "Hormone replacement therapy does not directly cause weight gain. Menopause itself is associated with changes in fat distribution and a reduction in metabolic rate driven by oestrogen withdrawal, not by taking HRT. Menopausal women experiencing weight gain often attribute it to their hormone therapy but the evidence does not support HRT as a cause of weight gain. HRT helps mitigate these effects of oestrogen withdrawal by partially restoring oestrogen signalling in adipose tissue and partially mitigating abdominal fat redistribution. Some menopausal women notice fluid retention in the first few weeks of starting hormone replacement therapy, particularly with oral oestrogen therapy formulations, which can be interpreted as weight gain; this typically resolves within 6 to 8 weeks and can be reduced by switching to transdermal oestrogen therapy. Published evidence does not support hormone replacement therapy as a cause of weight gain."
      },
      {
        q: "How long should I take HRT?",
        a: "There is no arbitrary maximum duration for taking HRT. Current international guidelines including the British Menopause Society and the 2025 PMC narrative review explicitly state that the decision to continue HRT is based on ongoing individual benefit versus risk at each annual review rather than a fixed duration limit. HRT and when to initiate a taper or cessation is a decision made between each menopausal woman and her doctor based on her ongoing symptoms, potential risks and overall health. Menopausal women experiencing severe premature menopause may need hormone therapy until age 51 or beyond; women with persistent menopause symptoms beyond 5 years may benefit from extended HRT when potential risks are low. At Nexus Clinic KL, each annual review explicitly reassesses whether to continue HRT and whether the ongoing hormone replacement therapy is justified for each individual menopausal woman."
      },
      {
        q: "Is transdermal HRT better than tablets?",
        a: "For most menopausal women in Malaysia, transdermal oestrogen therapy (gel or patch) is the preferred route because it bypasses first-pass liver metabolism, does not increase hepatic clotting factors and therefore does not carry the modest blood clots risk associated with oral oestrogen therapy. For menopausal women who are obese, who smoke, who have personal or family history of blood clots, who have migraine with aura or who have metabolic risk factors, transdermal hormone therapy is specifically recommended over oral hormone replacement therapy as the safest type of HRT. Oestrogen-only HRT via transdermal route is usually the first choice for hysterectomised women. For menopausal women without these risk factors, the absolute risk difference between oral and transdermal oestrogen therapy is small and individual preference can be accommodated. Healthcare professionals at Nexus Clinic KL assess each woman's specific risk profile before recommending the most appropriate type of HRT."
      },
      {
        q: "Can I take HRT during perimenopause when I still have periods?",
        a: "Yes. Hormone replacement therapy can be started during perimenopause when menopause symptoms are present and FSH testing confirms perimenopausal status. During perimenopause, cyclical or sequential combined HRT is prescribed: oestrogen therapy is taken daily and progestogen is added for 12 to 14 days of each cycle to produce a monthly withdrawal bleed. Perimenopausal women may also benefit from HRT or the combined pill as an alternative, which provides both contraception and hormonal menopause symptom management. After the final period, the type of HRT transitions to continuous combined HRT for women with a uterus, or oestrogen-only HRT for hysterectomised women. The decision for perimenopausal women to take HRT or the combined pill is discussed based on the woman's specific menopause symptom pattern and symptoms at assessment. The doctor will provide personalised guidance for perimenopausal women at every consultation."
      },
      {
        q: "What is bioidentical hormone replacement therapy?",
        a: "The term bioidentical hormone replacement therapy and bioidentical hormones are used in two distinct ways in Malaysia. Regulated bioidentical hormone replacement therapy refers to pharmaceutically manufactured oestradiol and micronised progesterone that are chemically identical to the hormones produced by the human ovary; these are MOH-approved bioidentical hormones with well-established clinical evidence. Compounded bioidentical hormone replacement therapy refers to custom-mixed hormone preparations made by compounding pharmacies; these bioidentical hormones are not subject to the same manufacturing controls or clinical evidence requirements as regulated pharmaceutical HRT. At Nexus Clinic KL, the hormone replacement therapy prescribed uses regulated pharmaceutical bioidentical hormones (oestradiol and micronised progesterone), which are bioidentical in the scientifically accurate sense and are the type of HRT recommended by international guidelines. Women experiencing menopause symptoms who want bioidentical hormone replacement therapy should ensure they are receiving regulated pharmaceutical bioidentical hormones, not compounded preparations."
      },
      {
        q: "Does HRT help with reduced libido after menopause?",
        a: "HRT helps mitigate these effects of oestrogen withdrawal on genitourinary health by reducing vaginal dryness and pain during intercourse, which are among the most common menopause symptoms affecting sexual function. Oestrogen therapy combined with local vaginal oestrogen provides the most comprehensive hormone therapy treatment for the genitourinary component of reduced sexual function at menopause. However, for reduced libido (sexual desire) specifically, testosterone plays the dominant hormonal role. Low-dose testosterone therapy for postmenopausal menopausal women with reduced libido is prescribed off-label in Malaysia using low-dose testosterone formulations and represents an evidence-supported option for women who have addressed oestrogen deficiency but whose libido has not recovered. Testosterone is discussed at the HRT consultation when relevant and forms part of a comprehensive sexual health assessment. Menopausal women experiencing reduced libido should make an appointment to discuss whether testosterone alongside hormone replacement therapy is an appropriate treatment option."
      },
      {
        q: "Is the HRT consultation at Nexus Clinic KL free?",
        a: "The initial hormone replacement therapy assessment at Nexus Clinic KL is priced at RM 150 to RM 300 and includes a structured menopausal symptom assessment using the MENQOL or equivalent validated questionnaire, comprehensive medical and family history review including breast cancer and VTE history, blood pressure measurement, physical examination, contraindication screening and a blood test requisition for the full pre-HRT hormonal and metabolic panel. A follow-up appointment reviews the blood results and presents the personalised hormone replacement therapy plan with formulation and route recommendation, monitoring schedule and full pricing before any prescription is issued. The doctor will provide information about HRT's advantages and potential risks and assist in making an informed decision about taking HRT. Menopausal women experiencing symptoms can book an appointment today at Nexus Clinic KL, located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia."
      },
    ]
  return (
    <div className="bg-cream min-h-screen font-inter">
      {/* Hero Section */}
      <AllPagesHero
        badge="HRT Malaysia: Hormone Replacement Therapy for Menopausal Women | Nexus Clinic KL"
        title="HRT Malaysia: Evidence-Based Hormone Replacement Therapy for Menopausal Women and"
        highlight="Bioidentical Hormones"
        description="Hot flashes that interrupt every meeting. Night sweats that have not allowed a full night's sleep in six months."
        details="Mood swings and a brain that does not feel like your own. A body that seems to have changed shape, energy and resilience without explanation. These are the menopause symptoms that most menopausal women in Malaysia are told to simply accept. They are not exaggerations and they are not simply normal ageing. They are the documented physiological consequences of oestrogen withdrawal at menopause, and hormone replacement therapy is the most effective treatment for them that medical science has produced."
        note="HRT should always be prescribed and monitored by a qualified doctor. At Nexus Clinic KL, we provide doctor-guided, confidential care with personalised hormone balancing and clear follow-ups for safety monitoring."
        image="/images/regenerative/hematopoietic-stem-cells.webp"
        imageAlt="Hormone Replacement Therapy at Nexus Clinic Kuala Lumpur"
        ctaText="Book HRT Assessment"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in hormone replacement therapy (HRT) at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Doctor-Guided • Confidential"
        floatingSubtitle="Personalised hormone balancing"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Hormone Replacement Therapy in Malaysia at a Glance Table */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
        {/* Hormone Replacement Therapy at a Glance Table */}
        <TableForPages
          columns={[
            { key: "factor", header: "Factor", className: "font-semibold" },
            { key: "details", header: "Details" },
          ]}
          data={[
            {
              factor: "What HRT Treats",
              details: "Vasomotor symptoms: hot flashes, night sweats, palpitations | Genitourinary syndrome: vaginal dryness, recurrent UTIs, urinary urgency | Mood and cognitive: mood swings, low mood, brain fog, poor concentration, sleep disturbance | Musculoskeletal: joint aches, reduced muscle mass | Bone: osteoporosis and conditions like osteoporosis prevention in early postmenopause"
            },
            {
              factor: "Malaysian Menopausal Age",
              details: "Menopause is a natural biological stage; median menopausal age of Malaysian women is approximately 50.7 years; the natural menopause range in Malaysia is 42 to 58 years; the ages of 45 and 55 encompass most women's experience of the end of her reproductive years; premature menopause and premature ovarian insufficiency (POI) can occur before age 40 years old; perimenopause can begin 4 to 10 years before the final period"
            },
            {
              factor: "Type of HRT",
              details: "Oestrogen-only HRT: oestrogen-only HRT is usually prescribed to women who have had a hysterectomy and do not need progestogen; combined HRT: oestrogen and progestogen combined, prescribed to women with a uterus; bioidentical hormone replacement therapy: regulated pharmaceutical oestradiol and micronised progesterone; transdermal, oral or local vaginal delivery"
            },
            {
              factor: "Who Needs Progestogen",
              details: "Women with an intact uterus must take progestogen alongside oestrogen to protect the endometrium and reduce the risk of uterine cancer; women with a uterus who take oestrogen without progestogen have significantly elevated risk of uterine cancer; women who have had a hysterectomy can take oestrogen alone; women experiencing combined HRT take oestrogen and progestogen together"
            },
            {
              factor: "Formulations Available",
              details: "Transdermal oestradiol gel or patches (preferred route in women with VTE or cardiovascular risk) | Oral oestradiol tablets | Combined HRT tablets (oestrogen and progestogen) | Vaginal oestrogen cream, ring or pessary (local only) | Therapy with an intrauterine progestin (levonorgestrel IUS as progestogen component) | Micronised progesterone (Utrogestan) as preferred oral progestogen | Oestrogen therapy with an intrauterine system is an option for women who need flexible delivery"
            },
            {
              factor: "Hormone Levels and Monitoring",
              details: "Annual review: symptom assessment, blood pressure, weight, breakthrough bleeding investigation; breast awareness and mammography per schedule; endometrial assessment if unexpected bleeding; the doctor will provide information about HRT's advantages and potential risks and assist in making an informed decision; decide whether to start HRT at any point based on ongoing benefit and risk"
            },
          ]}
          title="Hormone Replacement Therapy in Malaysia at a Glance: HRT, Hormones and Menopause Symptoms"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />
        </motion.div>
      </section>

      {/* HRT Formulation and Oestrogen Therapy Route Table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
            {/* HRT Formulation and Oestrogen Therapy Route Table */}
            <TableForPages
              columns={[
                { key: "formulation", header: "Formulation / Type of HRT", className: "font-semibold" },
                { key: "route", header: "Route" },
                { key: "vte", header: "VTE / Blood Clots Risk" },
                { key: "breastCancer", header: "Breast Cancer Consideration" },
                { key: "bestFor", header: "Best For" },
              ]}
              data={[
                {
                  formulation: "Transdermal Oestradiol Gel (Oestrogel, Sandrena)",
                  route: "Applied daily to skin of arm, thigh or abdomen; hormone absorbed directly into bloodstream bypassing liver; oestrogen therapy delivered transdermally",
                  vte: "Low: transdermal oestrogen therapy bypasses first-pass liver metabolism; does not raise clotting factors; no increased blood clots risk; VTE risk similar to non-HRT users; preferred for women with VTE history",
                  breastCancer: "Associated with lowest breast cancer risk among systemic oestrogen formulations when combined with micronised progesterone; Norwegian cohort of 1.3 million women confirms lower risk vs oral combined HRT; women with family history of breast cancer should discuss potential risks with their doctor",
                  bestFor: "First choice at Nexus Clinic KL for most menopausal women starting HRT; recommended for women with cardiovascular risk, clotting risk, smokers, overweight or obese women, women with migraine with aura"
                },
                {
                  formulation: "Transdermal Oestradiol Patch (Evorel, FemSeven)",
                  route: "Applied to skin and changed every 3 to 4 days; consistent transdermal oestrogen therapy delivery; this type of HRT suits women who prefer less frequent application",
                  vte: "Low: same oestrogen therapy mechanism as gel; bypasses liver first-pass metabolism; no increased blood clots risk; preferred over oral HRT in women with VTE risk; oestrogen-only HRT via patch has good safety data",
                  breastCancer: "Similar low breast cancer risk profile to gel when combined with micronised progesterone; oestrogen-only HRT is usually the lowest-risk option for hysterectomised women; patch with IUS progestogen component is lowest-risk combined systemic HRT available; potential risks are lower than oral combined HRT",
                  bestFor: "Women who prefer less frequent application than daily gel; this type of HRT suits women who find daily gel inconvenient; patch adherence can be an issue in Malaysia's humidity; recommended for women in perimenopause and early postmenopause"
                },
                {
                  formulation: "Oral Oestradiol Tablets (Progynova, Estrofem)",
                  route: "Taken daily by mouth; metabolised in the liver on first pass; oestrogen therapy delivered via hepatic metabolism; raises hepatic clotting factors during metabolism",
                  vte: "Moderate: oral oestrogen therapy undergoes first-pass hepatic metabolism and raises coagulation factors; VTE risk approximately double that of non-HRT users; blood clots risk means oral route is not preferred in women with clotting risk; not the preferred type of HRT for women with VTE history",
                  breastCancer: "Estrogen alone in hysterectomised women: the WHI trial of oestrogen alone found a 23% REDUCTION in breast cancer risk; estrogen and progesterone combined oral: higher breast cancer risk than oestrogen alone or oestrogen with micronised progesterone; potential risks should be discussed with healthcare professionals",
                  bestFor: "Women without VTE risk factors who prefer a tablet; hysterectomised women without cardiovascular risk taking oestrogen-only HRT; less preferred for women with any blood clots or thrombotic risk; this type of HRT should be discussed with a doctor before initiating"
                },
                {
                  formulation: "Micronised Progesterone (Utrogestan)",
                  route: "Oral capsule taken at night (sleep-promoting effect); bioidentical hormone to body's own progesterone; protects endometrium in women with uterus who are taking systemic oestrogen therapy; a form of bioidentical hormone replacement therapy",
                  vte: "Neutral to low: micronised progesterone does not carry the blood clots risk associated with synthetic progestogens such as medroxyprogesterone acetate or norethisterone; no additional VTE risk added to transdermal oestradiol; the safest progestogen for women with uterus on HRT",
                  breastCancer: "Lower breast cancer risk compared to synthetic progestogens; British Journal of Cancer Norway cohort shows higher risk with oral combined synthetic progestogen regimens; bioidentical hormones such as micronised progesterone confer lower breast cancer risk than continuous synthetic progestins; potential risks are lower than with synthetic alternatives",
                  bestFor: "Preferred progestogen at Nexus Clinic KL for women with a uterus on systemic HRT; bioidentical hormones taken at night improve sleep quality; this oestrogen and progestogen combination represents the lowest-risk combined HRT regimen; oestrogen and progestogen is prescribed to women with an intact uterus"
                },
                {
                  formulation: "Local Vaginal Oestrogen (Vagifem, Ovestin, Estring)",
                  route: "Applied directly to vaginal tissue; minimal systemic absorption; oestrogen therapy acts locally only; available as pessaries, cream or ring; this type of HRT targets genitourinary symptoms specifically",
                  vte: "Negligible blood clots risk: systemic absorption is minimal; does not raise systemic hormone levels meaningfully; safe even in women who cannot use systemic HRT; no blood clots risk contribution",
                  breastCancer: "Negligible breast cancer consideration: no systemic breast cancer risk from local vaginal oestrogen therapy; can be used safely in women with history of breast cancer when quality of life impact of vaginal atrophy is significant; this type of HRT has the most favourable safety profile",
                  bestFor: "Isolated genitourinary symptoms without significant vasomotor or other systemic symptoms; oestrogen-only HRT in local form; can be added to systemic HRT; prescribed to women with vaginal dryness, pain during intercourse or recurrent UTI; recommended for women experiencing isolated genitourinary symptoms"
                },
              ]}
              title="HRT Formulation and Oestrogen Therapy Route: Why the Type of HRT Determines Risk"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />

            {/* Clinical Summary */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-8 p-6 bg-wine/10 rounded-2xl"
            >
              <p className="text-taupe">
                The practical summary from this type of HRT table for menopausal women in Malaysia is that the safest systemic hormone replacement therapy regimen currently available is transdermal oestradiol gel or patch combined with bioidentical hormones (oral micronised progesterone, Utrogestan) for women with a uterus. This combination carries the lowest blood clots risk (transdermal oestrogen therapy bypasses liver first-pass metabolism), the lowest breast cancer risk among combined regimens (bioidentical hormones such as micronised progesterone do not carry the elevated risk of synthetic progestogens), and provides excellent relief of menopause symptoms.
              </p>
            </motion.div>
        </motion.div>
      </section>

      {/* Taking HRT Safely: The WHI Study Table */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
        <TableForPages
          columns={[
            { key: "fear", header: "The HRT Fear", className: "font-semibold" },
            { key: "whatWhi", header: "What the WHI Actually Studied" },
            { key: "updatedEvidence", header: "What Updated Evidence Says for Menopausal Women in Malaysia" },
          ]}
          data={[
            {
              fear: "HRT causes heart attacks and strokes",
              whatWhi: "The 2002 WHI trial studied women with a mean age of 63 using oral conjugated equine oestrogen plus medroxyprogesterone acetate. Most participants were 10 or more years past menopause when they started hormone therapy. The WHI investigators confirmed in 2023 that starting HRT within 10 years of menopause significantly decreases coronary heart disease risk.",
              updatedEvidence: "The timing hypothesis is now established: taking HRT within 10 years of menopause or before age 60 has a favourable cardiovascular risk profile; oestrogen hormone therapy has a cardioprotective effect when started early; the cardiovascular risk seen in WHI was specific to older women starting oral hormone therapy years after menopause; perimenopausal women and women in early postmenopause are the most appropriate candidates"
            },
            {
              fear: "HRT always increases breast cancer risk",
              whatWhi: "The WHI study of estrogen alone in hysterectomised women found a 23% REDUCTION in breast cancer risk. The oestrogen and progestogen arm (specifically medroxyprogesterone acetate, a synthetic progestogen) found a small increased risk. The increased risk was specific to combined HRT with synthetic progestogen, not to oestrogen-only HRT or to oestrogen with micronised progesterone.",
              updatedEvidence: "Risk depends critically on the type of progestogen: combined HRT with synthetic progestogen carries higher breast cancer risk than transdermal oestradiol with bioidentical hormones (micronised progesterone); oestrogen-only HRT is usually lower risk; vaginal oestrogen therapy has no breast cancer risk contribution; the FDA announced in November 2025 it would remove certain black box warning language from HRT products; potential risks are formulation-specific, not a universal HRT label"
            },
            {
              fear: "HRT causes blood clots (VTE)",
              whatWhi: "Oral oestrogen therapy, particularly at higher doses, increases hepatic clotting factor production through first-pass metabolism and does modestly increase blood clots risk. This was the route used in WHI. Transdermal oestradiol does not undergo first-pass hepatic metabolism and does not increase blood clots risk above baseline.",
              updatedEvidence: "Route selection determines blood clots risk: transdermal oestrogen therapy (gel or patches) carries no increased blood clots risk compared to non-HRT users; oral oestrogen therapy carries a modest blood clots risk increase; women with personal or family history of blood clots are prescribed transdermal HRT rather than oral at Nexus Clinic KL; oestrogen and progestogen with micronised progesterone has the lowest combined blood clots risk"
            },
            {
              fear: "HRT should be avoided by women with heart disease risk factors",
              whatWhi: "This guidance originated from the WHI findings in older postmenopausal women with pre-existing cardiovascular disease starting oral hormone therapy years after menopause. Updated meta-analyses and a 2025 PMC narrative review confirm the risk-benefit profile is substantially more favourable for symptomatic women under 60 or within 10 years of menopause without contraindications.",
              updatedEvidence: "Current international guidelines including the British Menopause Society, NICE and the Endocrine Society endorse HRT for symptomatic menopausal women under 60 or within 10 years of menopause; HRT or the combined pill may be appropriate options even for perimenopausal women with cardiovascular risk factors when transdermal hormone therapy is used; healthcare professionals should assess individual potential risks and benefits for each menopausal women"
            },
          ]}
          title="Taking HRT Safely: The WHI Study and What Updated Evidence Means for Menopausal Women"
          variant="detailed"
          fadeInUp={fadeInUp}
          className="py-20 px-4"
        />
        </motion.div>
      </section>

      {/* HRT by Menopause Stage Table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
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
                definition: "Periods still occurring but irregular; elevated FSH on blood testing; women transition through menopause beginning here; average Malaysian perimenopausal onset mid-to-late 40s; perimenopausal women may experience symptoms for 4 to 10 years before final period",
                symptoms: "Irregular periods; hot flashes beginning; night sweats; mood swings; worsening PMS-like symptoms; mood swings; sleep difficulty; periods of brain fog; cycles lengthening or shortening; experiencing menopausal symptoms while still having periods",
                approach: "Cyclical (sequential) combined HRT: oestrogen taken continuously, progestogen added for 12 to 14 days per cycle to produce a regular withdrawal bleed; OR HRT or the combined pill if contraception is also needed; hormonal contraception during perimenopause also treats menopause symptoms while providing contraception; FSH and oestradiol blood test to confirm status; the doctor will provide a personalised plan; women may also decide whether to start HRT during this phase based on symptom severity"
              },
              {
                stage: "Menopause Transition (Early Postmenopause)",
                definition: "12 consecutive months without a menstrual period; average Malaysian menopausal age 50.7 years; this marks the end of her reproductive years; menopause is a natural biological event; the ages of 45 and 55 encompass most Malaysian women's experience; the 'window of opportunity' for maximum benefit from hormone therapy is in this phase",
                symptoms: "Hot flashes and night sweats typically at their most intense in the 1 to 3 years after the final period; sleep significantly disrupted; vaginal dryness and pain during intercourse beginning; cognitive symptoms including brain fog and poor concentration; menopausal symptoms by replacing declining hormone levels can be effectively managed",
                approach: "Continuous combined HRT: oestrogen daily plus progestogen daily (no withdrawal bleeds); OR oestrogen-only HRT for hysterectomised women; transdermal oestrogen therapy preferred as delivery route for most women; bioidentical hormones (micronised progesterone) as preferred progestogen for women with uterus; this phase has the strongest evidence for hormone therapy benefit; start HRT in this phase for maximum benefit; HRT helps mitigate these effects on quality of life and overall health"
              },
              {
                stage: "Established Postmenopause",
                definition: "More than 5 years since the final period; woman is fully adapted to the postmenopausal hormonal state; menopause symptoms may have reduced but ongoing genitourinary, bone, mood or cognitive concerns may persist; women experiencing genitourinary syndrome often seek hormone therapy at this stage",
                symptoms: "Vasomotor menopause symptoms usually reduced; genitourinary syndrome (vaginal dryness, recurrent UTIs, pain during intercourse, urinary urgency) often worsens progressively without oestrogen therapy; osteoporosis risk accumulates; conditions like osteoporosis, cardiovascular disease and cognitive decline risk increase; quality of life affected",
                approach: "Continuation of HRT if well-tolerated and benefits are ongoing; continue HRT is appropriate when quality of life benefits are sustained; initiation of hormone therapy for women presenting for the first time in this phase is possible but requires individualised risk-benefit discussion; local vaginal oestrogen therapy for genitourinary syndrome as a low-risk targeted option; annual review to reassess whether to continue HRT; no arbitrary cut-off age for hormone therapy discontinuation"
              },
              {
                stage: "Premature Menopause / POI",
                definition: "Ovarian function loss before age 40 years old; this represents early or premature menopause; affects approximately 1% of women; premature menopause may be spontaneous or following chemotherapy, radiotherapy or bilateral oophorectomy; associated with significant long-term health risks from early hormone deficiency",
                symptoms: "All symptoms of menopause at a younger age; particularly significant impact on bone density, cardiovascular health and cognitive function; the emotional impact of premature menopause on fertility and identity is significant; menopause symptoms may be more intense than typical menopausal experience for women experiencing early or premature menopause; relieve these symptoms and protect long-term health",
                approach: "HRT is strongly recommended in premature menopause and should be continued at minimum until the average menopausal age of 51 to protect bone density and reduce cardiovascular risk; HRT or the combined pill is recommended for women experiencing early or premature menopause; higher oestrogen doses may be required; HRT helps mitigate these effects of premature oestrogen deficiency; this is not optional treatment for POI: it is bone and cardiovascular health protection for women affected; get in touch with us to book an appointment to book an appointment today if you are experiencing symptoms of premature menopause"
              },
            ]}
            title="HRT by Menopause Stage: Reasons for Taking HRT at Different Phases of Menopausal Life"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
          />
          <p className="text-center text-brown max-w-2xl mx-auto">
              For women whose hormone concerns also intersect with sexual health changes including reduced libido and genitourinary symptoms, our{' '}
              <Link href="/regenerative/ed-treatment-malaysia/" className="text-wine font-bold italic">
                ED treatment in Malaysia
              </Link>{' '}
              provides context on how hormonal decline affects sexual health in both men and women.
            </p>
        </motion.div>
      </section>

      {/* The HRT Monitoring Protocol Table */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
            {/* HRT Monitoring Protocol Table */}
            <TableForPages
              columns={[
                { key: "parameter", header: "Parameter", className: "font-semibold" },
                { key: "interval", header: "Monitoring Interval" },
                { key: "assessment", header: "What Is Assessed and Why at Nexus Clinic KL" },
              ]}
              data={[
                {
                  parameter: "Symptom and Quality of Life Review",
                  interval: "At 3 months after starting HRT; then every 6 to 12 months; annually as a minimum",
                  assessment: "MENQOL (Menopause-Specific Quality of Life) score or equivalent structured review; confirms HRT helps maintain therapeutic benefit; identifies symptom recurrence that may indicate dose adjustment is needed; determines whether HRT and when to initiate a taper or reduction is appropriate; improving the quality of life of menopausal women affected is the primary goal; women who have been symptom-free for 2 or more years are counselled on gradual dose reduction; the doctor will provide guidance on whether to continue HRT at each review"
                },
                {
                  parameter: "Blood Pressure",
                  interval: "At every visit; at minimum annually; required by updated 2025 FDA labeling for all hormone therapy formulations",
                  assessment: "HRT, particularly oral oestrogen therapy, can modestly increase blood pressure in some women; blood pressure elevation prompts review of oral vs transdermal hormone therapy route; persistent hypertension requires management before or during taking HRT; hypertension alone is not a contraindication to hormone replacement therapy when transdermal hormone therapy is used; healthcare professionals at Nexus Clinic KL monitor blood pressure at every HRT visit"
                },
                {
                  parameter: "Breakthrough or Unexpected Bleeding",
                  interval: "Any unscheduled bleeding on continuous combined HRT after the first 3 to 6 months of use; any post-menopausal bleeding in women not on hormone therapy",
                  assessment: "Breakthrough bleeding in the first 3 months of taking HRT is common; persistent unscheduled bleeding after 6 months requires endometrial investigation (pelvic ultrasound and endometrial biopsy if indicated) to reduce the risk of uterine cancer and exclude endometrial hyperplasia; women with a uterus on oestrogen therapy must have progestogen protection to reduce the risk of uterine cancer; the risk of uterine cancer is significantly elevated in women with an intact uterus taking oestrogen alone; at Nexus Clinic KL, unexplained breakthrough bleeding always prompts investigation"
                },
                {
                  parameter: "Breast Awareness and Mammography",
                  interval: "Mammogram as per Malaysia Cancer Society recommendation: women over 40 annually or every 2 years; women on HRT follow the same schedule with no additional mandatory increase in frequency",
                  assessment: "Women taking HRT are counselled to report any breast changes immediately; breast density may increase on combined HRT, which can reduce mammogram sensitivity; clinical breast examination is included in the annual HRT review; new breast changes prompt urgent referral for investigation; women affected by breast symptoms during hormone therapy should make an appointment today for urgent assessment; healthcare professionals at Nexus Clinic KL include breast assessment in every annual hormone replacement therapy review"
                },
                {
                  parameter: "Bone Density (DEXA Scan)",
                  interval: "Baseline DEXA scan recommended if POI, surgical menopause or multiple osteoporosis risk factors; repeat DEXA every 2 to 3 years in high-risk women",
                  assessment: "HRT is the most effective intervention for maintaining bone density in early postmenopause; hormone therapy protects against conditions like osteoporosis from the first month of use; DEXA confirms baseline bone density and measures response to hormone replacement therapy in women with pre-existing osteopenia; for premature menopause patients, DEXA is a standard part of management; hormone therapy used for women experiencing premature menopause must address bone health as a priority; HRT helps mitigate these effects of early oestrogen deficiency on the skeleton"
                },
                {
                  parameter: "Reassessment of HRT Indication and Duration",
                  interval: "Formally reviewed annually at every follow-up consultation; decide whether to start HRT continuation or tapering at each review",
                  assessment: "There is no mandatory maximum duration of hormone replacement therapy; the decision to continue HRT is based on ongoing benefit versus individual risk at each annual review; women with severe premature menopause may need hormone therapy until age 51 or beyond; the 2025 PMC narrative review confirms benefit-risk is evaluated individually; HRT and when to initiate the next phase is a decision made between each patient and her doctor; women may continue taking HRT when ongoing quality of life benefits outweigh the potential risks at each annual review"
                },
              ]}
              title="The HRT Monitoring Protocol at Nexus Clinic KL: Taking HRT Safely with Structured Follow-Up"
              variant="detailed"
              fadeInUp={fadeInUp}
              className="py-20 px-4"
            />
        </motion.div>
      </section>

      {/* Hormone Replacement Therapy Cost in Malaysia 2026 Table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Hormone Replacement Therapy Cost Table */}
          <TableForPages
            columns={[
              { key: "service", header: "Service / Item", className: "font-semibold" },
              { key: "details", header: "Details" },
              { key: "price", header: "Price Range (RM) 2026" },
            ]}
            data={[
              {
                service: "Initial HRT Consultation",
                details: "Comprehensive symptom assessment (MENQOL), medical history, contraindication screening, blood pressure, physical examination; discuss reasons for taking HRT; doctor will provide personalised guidance; make an appointment today for your HRT assessment",
                price: "RM 150 to RM 300"
              },
              {
                service: "Pre-HRT Blood Panel",
                details: "FSH, LH, oestradiol, progesterone (if perimenopausal), testosterone, SHBG, thyroid function, lipids, fasting glucose, CBC, liver function tests; baseline hormone levels assessment",
                price: "RM 300 to RM 550 (laboratory fees)"
              },
              {
                service: "Transdermal Oestradiol Gel (per month supply)",
                details: "Oestrogel or equivalent; oestrogen therapy applied daily; prescription valid for 1 to 3 months; the most commonly prescribed oestrogen-only HRT delivery route at this clinic",
                price: "RM 80 to RM 180 per month"
              },
              {
                service: "Micronised Progesterone / Bioidentical Hormones (per month)",
                details: "Utrogestan; bioidentical hormone replacement therapy progestogen component; oral capsule taken nightly for women with uterus on systemic oestrogen; oestrogen and progestogen combination; continuous or cyclical depending on menopausal stage",
                price: "RM 80 to RM 160 per month"
              },
              {
                service: "Oral Combined HRT Tablets (per month)",
                details: "Combined HRT (oestrogen and progestogen) tablet; various brands; cyclical or continuous regimen depending on stage; combined HRT is recommended for women with a uterus on systemic oestrogen therapy",
                price: "RM 60 to RM 200 per month"
              },
              {
                service: "Local Vaginal Oestrogen (per supply)",
                details: "Vagifem pessaries, Ovestin cream or Estring ring; oestrogen-only HRT in local form; oestrogen therapy for genitourinary syndrome; used alongside or without systemic hormone replacement therapy",
                price: "RM 80 to RM 250 per supply"
              },
              {
                service: "Follow-Up HRT Review Consultation",
                details: "Annual structured review; symptom assessment, blood pressure, unexpected bleeding evaluation, ongoing indication review, prescription renewal; decide whether to continue HRT; make an appointment for your annual HRT review",
                price: "RM 100 to RM 200 per visit"
              },
            ]}
            title="Hormone Replacement Therapy Cost in Malaysia 2026: HRT Pricing at Nexus Clinic KL"
            variant="compact"
            fadeInUp={fadeInUp}
            className="py-20 px-4"
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
                2024;131:212-221. (Updated Review: PMC, 2025). This extensive population-based analysis and subsequent 2025 review evaluate the evolving safety profiles of modern MHT, providing clinicians with updated risk-benefit frameworks for treating menopausal symptoms.
            </p>
        </motion.div>
      </section>
    <FAQWithSchema data={faqsData} />
      {/* CTA Section */}
      <section className="py-20 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <p className="text-cream text-lg mb-4">
              Evidence-Matched HRT Malaysia: Hormone Replacement Therapy for Menopausal Women at Nexus Clinic KL
            </p>

            <div className="bg-wine backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-light font-georgia text-2xl mb-4">
                Book Your HRT Assessment at Nexus Clinic KL | Wisma UOA II, Kuala Lumpur | Call or WhatsApp Today
              </p>
              <p className="text-cream/90 mb-2">
              LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia
              </p>
              <p className="text-cream/90 mb-6">
                Phone: 016-7025699 / 03-21635699
              </p>

              <Link href="/contact-us/" className="bg-light text-wine px-8 py-4 rounded-lg hover:bg-cream transition-all duration-300 font-medium">
                Schedule Your Consultation
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HormonReplaceLanding;