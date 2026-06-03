export interface QuickFact {
  label: string;
  value: string;
}

export interface SessionExpectation {
  heading: string;
  body: string;
}

export interface PricingRow {
  treatment: string;
  area: string;
  unit: string;
  normalPrice: string;
  sellingPrice: string;
  promoPrice: string;
  packageNotes: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface InternalLink {
  label: string;
  href: string;
}

export interface PicoConditionContent {
  // Routing & metadata
  slug: string;
  metaTitle: string;
  metaDescription: string;

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroDetails: string;
  heroNote: string;
  heroImage: string;
  heroImageAlt: string;
  secondImage: string;
  secondImageAlt: string;
  heroCtaText: string;
  heroWhatsapp: string;
  heroFloatingTitle: string;
  heroFloatingSubtitle: string;

  // Overview block
  overviewHeading: string;
  overviewSubheading: string;
  quickFacts: QuickFact[];
  overviewSummary: string;

  // Condition explainer
  conditionHeading: string;
  conditionParagraphs: string[];

  // How Pico Laser treats this concern
  mechanismHeading: string;
  mechanismSubheading: string;
  mechanismParagraphs: string[];
  mechanismCallout: string;

  // What to expect session by session
  expectationsHeading: string;
  expectations: SessionExpectation[];

  // Pricing
  pricingHeading: string;
  pricingSubheading: string;
  pricingRows: PricingRow[];

  // Side effects & aftercare
  aftercareHeading: string;
  expectedSideEffects: string[];
  aftercareInstructions: string[];

  // Candidacy
  candidacyHeading: string;
  goodCandidate: string[];
  pauseIf: string[];

  // FAQ
  faqHeading: string;
  faqSubheading: string;
  faqs: FAQ[];

  // CTA
  ctaHeading: string;
  ctaBody: string;
  ctaPrimaryText: string;
  relatedLinks: InternalLink[];
}

const baseQuickFacts = (
  sessionTime: string,
  downtime: string,
  sessions: string,
  delivery: string
): QuickFact[] => [
  { label: "Treatment", value: delivery },
  { label: "Session Time", value: sessionTime },
  { label: "Downtime", value: downtime },
  { label: "Sessions Required", value: sessions },
];

export const picoLaserConditions: Record<string, PicoConditionContent> = {
  melasma: {
    slug: "melasma",
    metaTitle:
      "Pico Laser for Melasma in Malaysia Safe Picosecond Treatment at Nexus Clinic KL",
    metaDescription:
      "Struggling with melasma that keeps coming back? Pico Laser at Nexus Clinic KL uses ultra-short picosecond pulses to break down stubborn pigment safely on Asian skin. LCP-certified doctors, minimal downtime, and a proven treatment plan. Book your skin assessment today.",

    heroBadge: "Doctor-Led Pico Laser for Melasma • MOH Registered Clinic",
    heroTitle: "Pico Laser for Melasma Malaysia",
    heroHighlight: "Clearing Hormonal Pigmentation That Keeps Coming Back",
    heroDescription:
      "You have tried the creams. The brightening serums. Maybe even a laser session somewhere that cleared your patches for a few weeks before they came back darker than before. That is not bad luck. That is melasma behaving exactly the way melasma behaves when the wrong treatment is applied to it.",
    heroDetails:
      "Melasma is one of the most mismanaged skin conditions in Malaysia. Not because the technology to treat it does not exist, but because the wrong settings, the wrong delivery mode, and the wrong session frequency are used far too often. At Nexus Clinic KL, we treat melasma as the chronic hormonal condition it is, not as a simple pigmentation spot.",
    heroNote:
      "Over 5,000 Aesthetic Procedures Completed — Our LCP-certified doctors bring 15+ years of combined clinical experience treating Asian melasma across Fitzpatrick III to V skin.",
    heroImage: "/images/skin/pico-laser-malaysia/melasma-1.webp",
    heroImageAlt: "Asian woman with melasma pigmentation on cheeks — Pico Laser melasma treatment at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/melasma-2.webp",
    secondImageAlt: "Wood's lamp skin analysis report mapping melasma depth before Pico Laser treatment at Nexus Clinic KL",
    heroCtaText: "Book Free Melasma Consultation",
    heroWhatsapp:
      "Hi, I'm interested in Pico Laser treatment for melasma at Nexus Clinic KL. I'd like to book a consultation.",
    heroFloatingTitle: "Low-Fluence Pico Toning",
    heroFloatingSubtitle: "1064nm • Photoacoustic • Minimal Heat",

    overviewHeading:
      "Pico Laser Melasma Treatment at Nexus Clinic KL at a Glance",
    overviewSubheading: "Everything you need to know before booking",
    quickFacts: baseQuickFacts(
      "20 to 35 minutes per session including topical numbing",
      "Minimal; mild redness for a few hours; same-day return to work",
      "4 to 8 sessions spaced 4 weeks apart; then 6 to 8 week maintenance",
      "Pico Laser Toning Mode at 1064nm; 755nm added for surface component"
    ),
    overviewSummary:
      "Pico laser uses photoacoustic pressure rather than heat to fragment melanin, which directly addresses the rebound cycle that ruins most melasma treatment. Toning mode at low fluence is paired with oral tranexamic acid and strict SPF for results that actually hold.",

    conditionHeading: "Why Melasma Keeps Coming Back Even After Treatment",
    conditionParagraphs: [
      "Most pigmentation responds well to the right laser. Melasma is more stubborn because it has two characteristics that ordinary dark spots do not. First, it sits at both epidermal and dermal depths, which means surface treatments only address part of it. Second, it is driven by internal hormonal signals, so even after the visible pigment is cleared, the cells that produced it are still active and waiting for the next trigger.",
      "That trigger is often heat. When melanocytes, the pigment-producing cells in your skin, sense thermal energy, they produce more melanin as a protective response. Any laser that relies primarily on heat to break down pigment risks stimulating that response in melasma patients. The patches fade, then come back within weeks. Sometimes they come back worse.",
      "This reaction is called post-inflammatory hyperpigmentation, or PIH, and it is especially common in Fitzpatrick Types III to V, which covers the majority of Malaysian skin. Successful melasma treatment means using a mechanism that fragments pigment without generating the heat that triggers this cycle.",
    ],

    mechanismHeading: "How Pico Laser Treats Melasma Without Triggering Rebound PIH",
    mechanismSubheading: "Photoacoustic, not photothermal",
    mechanismParagraphs: [
      "The photoacoustic mechanism of pico laser is the key difference. Instead of heating melanin until it breaks down, ultra-short picosecond pulses create pressure waves that physically shatter melanin clusters. The thermal spread to surrounding tissue is minimal. The melanocytes receive far less heat stimulation. The rebound risk drops significantly compared to Q-switch or IPL treatments.",
      "At Nexus Clinic KL, toning mode is used for melasma. This is low-fluence, uniform passes across the full face at conservative energy settings. Not aggressive spot treatments. Not high fluence. Conservative, controlled, and spaced correctly. The 1064nm wavelength is chosen for its ability to bypass surface melanin and reach the deeper dermal melasma component that most surface treatments miss.",
      "Oral tranexamic acid is prescribed alongside pico laser for most melasma patients. It works systemically to suppress the hormonal melanin-stimulating signal from within the body. In clinical practice, the combination of pico laser with oral tranexamic acid consistently produces better clearing and better maintenance results than laser treatment alone.",
    ],
    mechanismCallout:
      "Mixed pigmentation that includes melasma alongside other spot types is covered in our full pigmentation treatment guide. The complete medical management framework for hormonal pigmentation lives on the Melasma Treatment Malaysia page.",

    expectationsHeading: "What Your Skin Looks Like After Each Melasma Session",
    expectations: [
      {
        heading: "Sessions One to Two",
        body: "After a toning mode session, expect mild redness for a few hours. Most patients return to work the same day. The melasma patches may appear temporarily darker in the first one to three days as fragmented melanin moves toward the skin surface before the body clears it. This is normal and resolves without any intervention.",
      },
      {
        heading: "Sessions Three to Five",
        body: "Between sessions, the skin gradually looks brighter, more even, and clearer. The most visible change typically happens between sessions three and five. Patches become less defined. Overall skin tone evens out before the melasma is fully addressed.",
      },
      {
        heading: "Sessions Six to Eight",
        body: "By sessions six to eight, the focus shifts from clearing existing melasma to preventing reactivation. SPF50 goes on every morning before you leave the house. Reapplied every two hours if you are outdoors. This is non-negotiable during treatment.",
      },
      {
        heading: "Maintenance",
        body: "Melasma is chronic. A toning session every six to eight weeks keeps melanin activity suppressed. Patients who stop completely and stop SPF at the same time almost always see their melasma return within a few months, particularly during hormonal shifts or after a holiday in the sun.",
      },
    ],

    pricingHeading: "Pico Laser Melasma Treatment Price at Nexus Clinic KL",
    pricingSubheading: "Transparent pricing — free consultation included",
    pricingRows: [
      {
        treatment: "Discovery PICO Rejuvenation",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Used for melasma toning sessions",
      },
      {
        treatment: "Oral Tranexamic Acid Programme",
        area: "Systemic",
        unit: "Monthly review",
        normalPrice: "From RM150",
        sellingPrice: "From RM150",
        promoPrice: "NIL",
        packageNotes: "Doctor-prescribed; combined with Pico",
      },
      {
        treatment: "Free Consultation",
        area: "Includes Wood's lamp assessment",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "Required before first session",
      },
    ],

    aftercareHeading: "Pico Laser Melasma Side Effects and Aftercare",
    expectedSideEffects: [
      "Mild redness for a few hours after toning mode session",
      "Temporary darkening of patches for 1 to 3 days as melanin sheds",
      "Slight skin warmth and sensitivity for the first evening",
      "Mild dryness as cell turnover accelerates",
    ],
    aftercareInstructions: [
      "SPF50 every morning before leaving the house, reapplied every two hours outdoors",
      "Avoid aggressive peels, retinoids in the days immediately after each session",
      "Avoid heat exposure including saunas and steam — heat reactivates melanocyte production",
      "Gentle cleansers and ceramide-rich moisturisers as your baseline skincare between sessions",
      "Continue prescribed oral tranexamic acid as directed",
    ],

    candidacyHeading:
      "Who Gets the Best Results from Pico Laser for Melasma",
    goodCandidate: [
      "Stable melasma that is not currently flaring",
      "Fitzpatrick Types I to V (protocols calibrated per type)",
      "No isotretinoin use within the past six months",
      "Willing to commit to consistent daily SPF during and after treatment",
    ],
    pauseIf: [
      "You are pregnant or breastfeeding (laser and oral TXA postponed)",
      "You have an active skin infection or open wound on the treatment area",
      "You have taken isotretinoin within the past 6 months",
      "Previous laser caused PIH (still treatable but needs more conservative protocol)",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser for Melasma",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "Is pico laser safe for melasma on dark Malaysian skin?",
        a: "Yes. The 1064nm wavelength and low-fluence toning mode are specifically chosen for Fitzpatrick Types III to V because of their low PIH risk profile. Conservative settings, correct wavelength selection, and appropriate session spacing are non-negotiable for darker skin. Our doctors calibrate these at every session, not just the first.",
      },
      {
        q: "How many sessions of pico laser do I need for melasma?",
        a: "Most patients need 4 to 8 initial sessions spaced four weeks apart. After that, maintenance sessions every 6 to 8 weeks prevent reactivation. The exact number depends on the severity and depth of your melasma, which your doctor assesses at the initial consultation.",
      },
      {
        q: "Can melasma come back after pico laser?",
        a: "Yes, it can. Pico laser clears existing melasma effectively but it does not remove the hormonal or UV triggers that cause it. Without maintenance sessions and consistent sun protection, melasma typically returns within months. This is why treatment at Nexus Clinic KL includes a structured maintenance plan from the start.",
      },
      {
        q: "Why does my melasma look darker right after pico laser treatment?",
        a: "The temporary darkening you see in the first one to three days after a session is normal. It is fragmented melanin rising to the surface before the body clears it. Think of it as the pigment being pushed out. It fades naturally and does not require any treatment.",
      },
      {
        q: "Can I use my whitening cream at the same time as pico laser for melasma?",
        a: "Medical-grade topicals prescribed by your doctor can be used between sessions. Over-the-counter whitening creams can be continued unless they contain strong retinoids or exfoliants, which should be paused for five to seven days after each session. Your doctor will review your current products at consultation.",
      },
      {
        q: "Is pico laser better than Q-switch laser for melasma?",
        a: "For melasma specifically, yes. The photoacoustic mechanism of pico laser generates significantly less heat than Q-switch, which is photothermal. Since melasma is triggered by heat, the lower thermal spread of pico laser directly reduces the risk of treatment-induced rebound. This is a clinically meaningful difference, not just a marketing claim.",
      },
      {
        q: "How long do pico laser results for melasma actually last?",
        a: "With consistent sun protection and regular maintenance sessions, results can be sustained long term. Most patients who do this see melasma that is significantly reduced and much easier to manage than before treatment. Those who stop maintenance and skip SPF typically see recurrence within three to six months.",
      },
      {
        q: "Can pico laser treat both the surface and deep layers of melasma?",
        a: "Yes. The 755nm wavelength handles surface epidermal melasma. The 1064nm penetrates to the dermal layer where deeper melasma sits. Your doctor assesses which component is dominant in your case using Wood's lamp examination and selects the wavelength combination accordingly.",
      },
      {
        q: "Does pico laser hurt when used for melasma treatment?",
        a: "Numbing cream is applied 20 to 30 minutes before every session. Toning mode is the gentlest delivery mode used in pico laser treatment. Most patients describe it as mild rubber band snaps that are very well tolerated throughout the session.",
      },
      {
        q: "Can men get pico laser for melasma?",
        a: "Absolutely. Melasma affects men too, though less commonly. The treatment protocol is the same. For male patients, shaving irritation and daily sun exposure from outdoor activities are often contributing triggers that your doctor factors into the management plan.",
      },
    ],

    ctaHeading: "Manageable Melasma at Nexus Clinic KL",
    ctaBody:
      "Melasma is manageable. Not a quick fix, but genuinely manageable with the right protocol. Book a free consultation at Nexus Clinic KL and get a clear picture of what your melasma looks like, how deep it sits, and what a realistic treatment plan looks like for your skin.",
    ctaPrimaryText: "Book Your Free Melasma Consultation Now",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Full Melasma Treatment Programme",
        href: "/skin/melasma-treatment-malaysia/",
      },
      {
        label: "Pico Laser for Pigmentation",
        href: "/skin/pico-laser-malaysia/pigmentation/",
      },
    ],
  },

  pigmentation: {
    slug: "pigmentation",
    metaTitle:
      "Pico Laser Pigmentation Treatment Malaysia Remove Dark Spots and Uneven Skin Tone at Nexus Clinic",
    metaDescription:
      "Sunspots, post-acne marks, and uneven tone are no match for Pico Laser at Nexus Clinic Kuala Lumpur. Photoacoustic energy shatters pigment without damaging surrounding skin, safe for Fitzpatrick III to V. See visible results from the first session. Consult our doctors now.",

    heroBadge: "Doctor-Led Pico Laser Pigmentation • MOH Registered Clinic",
    heroTitle: "Pico Laser Pigmentation Treatment Malaysia",
    heroHighlight: "Removing Dark Spots Uneven Tone and Stubborn Marks",
    heroDescription:
      "That dark spot on your cheek appeared gradually, and now it is the first thing you notice every time you look in the mirror. The post-acne marks you assumed would fade on their own are still there, two years later. And the uneven skin tone that makes full-coverage foundation a daily necessity? Skincare alone is not going to shift it.",
    heroDetails:
      "Pigmentation that sits deep in the skin needs something that reaches that depth. Pico laser works because it delivers energy in trillionths of a second, directly targeting melanin clusters without the heat damage that creates new pigmentation problems. At Nexus Clinic KL, we start every pigmentation case with a proper assessment because not all dark spots are the same type and not all of them respond to the same approach.",
    heroNote:
      "Over 5,000 Aesthetic Procedures Completed — Our doctors are trained in Southeast Asian skin physiology and the calibration of picosecond laser parameters for Fitzpatrick III to V patients.",
    heroImage: "/images/skin/pico-laser-malaysia/pigmentation-1.webp",
    heroImageAlt:
      "Close-up of facial pigmentation and dark spots — Pico Laser pigmentation treatment at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/pigmentation-2.webp",
    secondImageAlt:
      "Pico Laser wavelength selection for different pigmentation depths at Nexus Clinic KL",
    heroCtaText: "Book Free Pigmentation Consultation",
    heroWhatsapp:
      "Hi, I'm interested in Pico Laser treatment for pigmentation at Nexus Clinic KL. I'd like to book a consultation.",
    heroFloatingTitle: "Wavelength-Calibrated",
    heroFloatingSubtitle: "755nm • 1064nm • 532nm Selected Per Concern",

    overviewHeading:
      "Pico Laser Pigmentation Treatment at Nexus Clinic KL at a Glance",
    overviewSubheading: "Everything you need to know before booking",
    quickFacts: baseQuickFacts(
      "20 to 40 minutes including topical numbing",
      "Minimal; pigment may darken 3 to 7 days before shedding",
      "1 to 3 for sunspots; 4 to 6 for PIH; 6 to 10 for ABNOM",
      "Spot Mode for individual lesions; Toning for diffuse pigment; wavelengths matched to depth"
    ),
    overviewSummary:
      "Pico laser fragments melanin clusters through photoacoustic pressure. There is no surface burn, which is why it is the lowest-PIH-risk option for Malaysian skin compared with older Q-switched lasers. Your doctor maps which type of pigmentation you have before any laser is used.",

    conditionHeading: "The Different Types of Pigmentation Pico Laser Treats",
    conditionParagraphs: [
      "This matters more than most clinics let on. Treating the wrong type of pigmentation with the wrong wavelength produces minimal results and occasionally makes things worse.",
      "Sunspots and age spots are flat brown marks from cumulative UV exposure, mostly epidermal, very common across Malaysian cheeks, temples, and the backs of hands. Post-inflammatory hyperpigmentation (PIH) is the dark mark left behind after acne, eczema or any skin injury. Freckles are genetically predisposed and UV-activated.",
      "Melasma is hormonal pigmentation with epidermal and dermal components — more complex, more prone to recurrence and extremely heat-sensitive. ABNOM and Hori's nevus are acquired deep dermal pigmentation unique to Asian skin, appearing as bilateral bluish-grey patches on the cheekbones and temples. They require the deepest penetrating wavelength.",
      "Your doctor maps which type you have, how deep it sits, and whether there are multiple types in the same area, all before any laser is used.",
    ],

    mechanismHeading: "How Pico Laser Targets Different Pigmentation Types",
    mechanismSubheading: "Wavelength selection per depth",
    mechanismParagraphs: [
      "The effectiveness of pico laser for pigmentation comes down to wavelength selection. Each wavelength penetrates to a different depth and is absorbed at different rates. Using the wrong wavelength does not just reduce results. It misses the target entirely.",
      "The 755nm wavelength has the highest melanin absorption and penetrates from the epidermis into the superficial dermis. It is the workhorse wavelength for sunspots, freckles, and mild epidermal pigmentation in Fitzpatrick III to IV skin.",
      "The 1064nm wavelength penetrates deep into the dermis and has lower surface melanin absorption, which means it bypasses the epidermis and targets dermal pigmentation directly. It is used for deep melasma, ABNOM, and Hori's nevus. It is also the safest wavelength for darker Fitzpatrick Types IV to V.",
      "The 532nm wavelength targets red and orange pigmentation including vascular marks and red post-acne spots. It carries a higher PIH risk in darker skin and is used selectively and conservatively.",
    ],
    mechanismCallout:
      "Patients managing hormonal pigmentation primarily can find the specific long-term protocol in our Melasma Treatment Malaysia guide.",

    expectationsHeading: "Session by Session: What Actually Happens",
    expectations: [
      {
        heading: "Session One",
        body: "Treated spots typically appear darker for three to seven days. This is fragmented melanin rising toward the skin surface before the body clears it. The spots then shed naturally. Most patients notice the skin looks marginally brighter even before the spots are fully gone.",
      },
      {
        heading: "Sessions Two to Three",
        body: "Visible lightening that people around you start to notice. The overall skin tone evens out. Patients frequently report that foundation sits better and coverage requirements reduce.",
      },
      {
        heading: "Sessions Four to Six",
        body: "For PIH, meaningful clearing typically takes four to six sessions because the melanin sits at mixed depths. Superficial sunspots often clear in one to three sessions. Deep ABNOM can take six to ten sessions or more.",
      },
      {
        heading: "Maintenance",
        body: "Once cleared, SPF50 every morning and reapplication every two hours outdoors prevents new deposits forming. For PIH from acne, controlling the underlying acne is what prevents new marks from appearing.",
      },
    ],

    pricingHeading: "Pico Laser Pigmentation Treatment Price at Nexus Clinic KL",
    pricingSubheading: "Multi-session package pricing available",
    pricingRows: [
      {
        treatment: "Discovery PICO Rejuvenation",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Standard pigmentation treatment",
      },
      {
        treatment: "Brightening Laser Curas Package",
        area: "Face",
        unit: "Full treatment course (1h 45m)",
        normalPrice: "RM1,398",
        sellingPrice: "RM846",
        promoPrice: "NIL",
        packageNotes: "Brightening protocol incorporating Pico",
      },
      {
        treatment: "Free Consultation",
        area: "Includes Wood's lamp / pigmentation mapping",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "Required before first session",
      },
    ],

    aftercareHeading: "Pico Laser Pigmentation Side Effects and Aftercare",
    expectedSideEffects: [
      "Treated spots darken for 3 to 7 days before flaking off",
      "Mild redness for several hours after Toning mode",
      "Possible pinpoint crusting that resolves in 5 to 7 days",
      "Temporary skin dryness as cell turnover accelerates",
    ],
    aftercareInstructions: [
      "Do not pick or scrub the darkened spots — let them shed naturally",
      "SPF50 every morning, reapplied every two hours when outdoors",
      "Pause retinol, AHA, BHA and physical exfoliants for 5 to 7 days",
      "Medical-grade vitamin C, kojic acid combinations and niacinamide between sessions amplify results",
      "Avoid aggressive exfoliation, back-to-back high-intensity treatments and heat exposure during the course",
    ],

    candidacyHeading:
      "Who Pico Laser for Pigmentation Is For (And Who Should Pause)",
    goodCandidate: [
      "You have sunspots, freckles, age spots, PIH or ABNOM",
      "You want overall skin brightening with minimal downtime",
      "You have darker skin and want a laser with low PIH risk",
      "You have failed to see lasting results from topical brightening creams",
    ],
    pauseIf: [
      "You are pregnant or breastfeeding",
      "You have active skin infection, severe acne inflammation or open wounds",
      "You have taken isotretinoin within the past 6 months",
      "Your primary concern is melasma — covered in a dedicated protocol",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser for Pigmentation",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "Does pico laser permanently remove pigmentation?",
        a: "Pico laser permanently destroys the melanin clusters it targets. New pigmentation can form if UV exposure, hormonal changes, or skin inflammation continue to trigger melanin production. Sun protection post-treatment is the single most important step in keeping cleared areas clear.",
      },
      {
        q: "How many sessions does pico laser take for dark spots?",
        a: "Superficial sunspots typically clear in 1 to 3 sessions. PIH from acne usually needs 4 to 6 sessions. Deeper conditions like ABNOM or dermal melasma can require 6 to 10 sessions. Your doctor will give you a realistic session estimate after assessing the type and depth of your pigmentation.",
      },
      {
        q: "Can pico laser make pigmentation worse?",
        a: "If settings are too aggressive for your skin type, PIH can result. At Nexus Clinic KL, this is addressed through conservative settings, correct wavelength selection, and protocols calibrated for Malaysian Fitzpatrick Types. The temporary darkening you see in the days after a session is normal frosting, not worsening of your condition.",
      },
      {
        q: "How is pico laser different from IPL for pigmentation?",
        a: "IPL uses broad-spectrum light and a heat-based mechanism. It carries higher PIH risk in darker skin types and cannot target specific pigment depths precisely. Pico laser uses targeted wavelengths with a pressure-based mechanism that produces more precise results with a significantly lower PIH risk profile for Malaysian skin tones.",
      },
      {
        q: "Is pico laser safe for pigmentation on darker Fitzpatrick V skin?",
        a: "Yes. The 1064nm wavelength is specifically chosen for darker skin tones because it bypasses surface melanin and delivers energy at depth with minimal surface heat. Conservative energy levels and appropriate session spacing are standard for Fitzpatrick IV to V patients.",
      },
      {
        q: "Can pico laser treat post-acne marks and dark spots at the same time?",
        a: "Yes. When different pigmentation types exist in the same area, your doctor uses a combination of wavelengths and settings to address each one. PIH from acne and UV sunspots in the same zone are both addressable in the same session with appropriate technique.",
      },
      {
        q: "How long does it take to see results from pico laser for dark spots?",
        a: "Superficial sunspots begin visibly clearing within one to two weeks of the first session as the fragmented melanin sheds. Deeper pigmentation types show incremental improvement per session, typically with meaningful visible change appearing after sessions 3 to 4.",
      },
      {
        q: "Do I need to avoid the sun completely during pico laser pigmentation treatment?",
        a: "Complete avoidance is impractical for most Malaysians. What is non-negotiable is SPF50 every morning and reapplication every two hours when outdoors. Sun exposure without protection during a treatment course significantly reduces results and increases PIH risk.",
      },
      {
        q: "How soon can I wear makeup after pico laser for pigmentation?",
        a: "After general toning mode sessions, makeup can typically be worn the next day. After spot mode sessions targeting individual lesions at higher fluence, your doctor will advise the appropriate window based on how your skin responds. For some patients this is 24 hours, for others slightly longer.",
      },
      {
        q: "Can pico laser treat pigmentation on the neck and body?",
        a: "Yes. Pico laser treats pigmentation on the neck, chest, hands, forearms, and body effectively. Energy settings are adjusted for different areas and skin thicknesses. Body pigmentation treatment is available at Nexus Clinic KL.",
      },
    ],

    ctaHeading:
      "Right Diagnosis. Right Wavelength. Right Result.",
    ctaBody:
      "Getting the right result from pigmentation treatment starts with getting the right diagnosis. Book a consultation at Nexus Clinic KL and walk away knowing exactly what type of pigmentation you have, what will shift it, and how many sessions are realistic for your skin.",
    ctaPrimaryText: "Book Your Free Pigmentation Consultation",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Full Pigmentation Treatment",
        href: "/skin/pigmentation-treatment-malaysia/",
      },
      {
        label: "Pico Laser for Melasma",
        href: "/skin/pico-laser-malaysia/melasma/",
      },
    ],
  },

  "acne-scars": {
    slug: "acne-scars",
    metaTitle:
      "Pico Laser for Acne Scars Malaysia Reduce Ice Pick Boxcar and Rolling Scars at Nexus Clinic KL",
    metaDescription:
      "Pico Laser targets ice pick, boxcar, and rolling acne scars by stimulating deep collagen remodelling with no surface wounding. At Nexus Clinic KL, our LCP-certified doctors customise energy settings for your scar type. Most patients see 50 to 80 percent improvement in 4 to 6 sessions.",

    heroBadge: "Doctor-Led Pico Laser for Acne Scars • MOH Registered Clinic",
    heroTitle: "Pico Laser for Acne Scars Malaysia",
    heroHighlight: "Collagen Remodelling for Rolling, Boxcar and Ice Pick Scars",
    heroDescription:
      "The acne cleared. The scars did not. You kept up the skincare, managed the breakouts, did what you were supposed to do, and the skin still has that rough uneven texture that catches light the wrong way and makes you rethink photos. Acne scars are not a skincare problem. They are a structural problem inside the skin.",
    heroDetails:
      "Pico laser treats acne scars by triggering new collagen production deep in the dermis, and it does this without breaking the skin surface. No open wounds. No week of hiding at home. But there is one critical thing that determines whether pico laser works for your scars or does nothing at all. It is not the machine. It is the delivery mode.",
    heroNote:
      "Over 5,000 Aesthetic Procedures Completed — LCP-certified doctors evaluating scar morphology before choosing energy density, depth and combination protocol.",
    heroImage: "/images/skin/pico-laser-malaysia/acne-scars-1.webp",
    heroImageAlt: "Rolling and boxcar acne scars on cheek — Pico Laser acne scar treatment at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/acne-scars-2.webp",
    secondImageAlt: "Fractional LIOB collagen remodelling for acne scars at Nexus Clinic KL",
    heroCtaText: "Book Free Acne Scar Consultation",
    heroWhatsapp:
      "Hi, I'm interested in Pico Laser treatment for acne scars at Nexus Clinic KL. I'd like to book a consultation.",
    heroFloatingTitle: "Fractional LIOB Mode",
    heroFloatingSubtitle: "Dermal Collagen Remodelling • No Surface Wound",

    overviewHeading:
      "Pico Laser Acne Scar Treatment at Nexus Clinic KL at a Glance",
    overviewSubheading: "Everything you need to know before booking",
    quickFacts: baseQuickFacts(
      "30 to 50 minutes including topical numbing",
      "24 to 72 hours mild redness; pinpoint marks 1 to 3 days",
      "Rolling: 4-6 | Boxcar: 5-8 | Ice pick + TCA CROSS: 4-6",
      "Fractional LIOB Mode at 1064nm — TCA CROSS combined for ice pick scars"
    ),
    overviewSummary:
      "Fractional LIOB mode triggers new collagen formation in the dermis without ablating the skin surface. Visible textural improvement starts at sessions two to three. 50 to 80 percent improvement is realistic across 4 to 6 sessions for rolling and boxcar scars.",

    conditionHeading: "The Three Acne Scar Types and How Each Responds",
    conditionParagraphs: [
      "Rolling scars are broad shallow depressions with gradual, sloping edges. Fibrous bands beneath the skin pull the epidermis downward. Rolling scars respond best to pico laser because the collagen induction across the scar floor progressively lifts the depression with each session. Patients with predominantly rolling scars tend to see the most visible improvement per session.",
      "Boxcar scars have sharply defined vertical edges and flat bases, like small punch-outs in the skin. The sharp definition makes them more resistant than rolling scars. They respond well to pico laser but need more sessions for equivalent improvement. The vertical walls require deep collagen induction to soften and fill over time.",
      "Ice pick scars are narrow, deep channels that go straight down into the dermis. They are the most difficult to treat. Pico laser meaningfully improves ice pick scars but rarely resolves them as a standalone treatment. The best outcomes come from combining pico laser with TCA CROSS, a precise chemical application directly into each scar channel. Combined, the results are significantly better than either approach alone.",
    ],

    mechanismHeading: "Fractional LIOB Mode Is the Reason Pico Laser Works on Acne Scars",
    mechanismSubheading: "Mode matters more than machine",
    mechanismParagraphs: [
      "This is the most important thing to understand about pico laser for acne scars, and most patients are never told it. Toning mode delivers uniform low-fluence passes across the face. It is designed for pigmentation management and overall brightening. It does not create the deep collagen response required for structural scar remodelling. Patients who have had multiple pico laser sessions targeting acne scars and seen minimal change have almost always received toning mode. That is the wrong mode for scars.",
      "Fractional LIOB mode (Laser-Induced Optical Breakdown) uses a focused lens array that concentrates laser energy into thousands of micro-columns deep within the dermis. Each micro-column creates a controlled zone of optical breakdown at the precise depth where scar remodelling needs to happen. The body responds by flooding each zone with new collagen and elastin.",
      "Over four to six weeks, this new tissue gradually fills and lifts the scar floor. At Nexus Clinic KL, Fractional LIOB mode is used exclusively for acne scar treatment.",
    ],
    mechanismCallout:
      "The full explanation of why delivery mode selection determines results, along with the clinical difference between each mode, is available in our pico laser treatment guide.",

    expectationsHeading: "Realistic Results: What Pico Laser Actually Does to Acne Scars",
    expectations: [
      {
        heading: "Sessions One to Two",
        body: "Mild redness and warm sensation for 24 to 72 hours. Pinpoint marks that resolve in 1 to 3 days. Visible textural change is rare after a single session — collagen remodelling takes weeks.",
      },
      {
        heading: "Sessions Three to Four",
        body: "First visible softening of scar floors. Rolling scars typically show the earliest improvement. Skin texture appears smoother under angled light. Make-up sits more evenly.",
      },
      {
        heading: "Sessions Four to Six (Standard Course)",
        body: "Rolling and boxcar scars treated with Fractional LIOB mode consistently show 50 to 80 percent improvement in texture across a full treatment course. Scars that previously caught harsh light clearly become significantly less visible. Ice pick scars improve 30 to 50 percent with pico alone; combined with TCA CROSS, this improves considerably.",
      },
      {
        heading: "After the Final Session",
        body: "Improvement continues for 3 to 6 months after the final session as the last round of collagen fully matures. Maintenance is typically 1 to 2 sessions per year to preserve and continue improving gains.",
      },
    ],

    pricingHeading: "Pico Laser Acne Scar Treatment Price at Nexus Clinic KL",
    pricingSubheading: "Transparent per-session pricing",
    pricingRows: [
      {
        treatment: "Discovery PICO Resurfacing (Fractional LIOB)",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Standard acne scar treatment",
      },
      {
        treatment: "TCA CROSS for Ice Pick Scars",
        area: "Targeted scars",
        unit: "Per session",
        normalPrice: "RM500",
        sellingPrice: "RM350",
        promoPrice: "NIL",
        packageNotes: "Combined with Fractional LIOB",
      },
      {
        treatment: "Free Consultation",
        area: "Scar assessment with angled lighting",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "Required before first session",
      },
    ],

    aftercareHeading: "Pico Laser Acne Scar Side Effects and Aftercare",
    expectedSideEffects: [
      "Redness and warm sensation for 24 to 72 hours",
      "Pinpoint marks across treatment area for 1 to 3 days",
      "Possible mild swelling for the first evening",
      "Skin sensitivity to heat and sun for 5 to 7 days",
    ],
    aftercareInstructions: [
      "SPF50 every morning, reapplied every 2 hours for minimum 2 weeks",
      "Pause retinoids, AHAs and BHAs for 7 full days after each session",
      "Use a gentle ceramide-rich moisturiser twice daily",
      "Avoid saunas, steam rooms and intense exercise for 48 to 72 hours",
      "Continue prescribed acne medication — uncontrolled acne worsens scarring",
    ],

    candidacyHeading:
      "Who Pico Laser for Acne Scars Is For (And Who Should Pause)",
    goodCandidate: [
      "Rolling, boxcar or mixed acne scars affecting skin texture",
      "Active acne is well-controlled (no significant inflammatory lesions)",
      "Want significant scar improvement with minimal downtime",
      "Fitzpatrick III to V skin needing a low-PIH option",
    ],
    pauseIf: [
      "Active moderate to severe inflammatory acne — treat that first",
      "Isotretinoin within the past 6 months",
      "Pregnant or breastfeeding",
      "History of keloid scarring (requires careful planning)",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser for Acne Scars",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "How many pico laser sessions do I need for acne scars?",
        a: "Rolling scars: 4 to 6 sessions. Boxcar scars: 5 to 8 sessions. Ice pick scars with TCA CROSS: 4 to 6 pico sessions alongside TCA procedures. All sessions are spaced 4 to 6 weeks apart to allow collagen maturation between treatments.",
      },
      {
        q: "Does pico laser completely remove acne scars?",
        a: "Pico laser significantly improves acne scars, typically by 50 to 80 percent for rolling and boxcar scars over a full treatment course. Complete removal is not a realistic expectation. The goal is scars that are significantly less visible in normal lighting and no longer require heavy coverage. Most patients find this a major practical improvement.",
      },
      {
        q: "Why did my pico laser sessions not work for my acne scars?",
        a: "The most common reason is that toning mode was used instead of Fractional LIOB mode. Toning mode is for pigmentation and brightening. It does not create the deep collagen induction required for structural scar remodelling. If your previous sessions used toning mode for your scars, you have not yet received the right treatment for the concern.",
      },
      {
        q: "Is pico laser or CO2 laser better for acne scars in Malaysia?",
        a: "Both work but the trade-off is different. CO2 laser produces strong collagen remodelling but requires 5 to 7 days of significant downtime and carries higher PIH risk for Malaysian Fitzpatrick III to V skin. Pico laser Fractional LIOB produces deep collagen induction with 1 to 3 days of mild downtime and lower PIH risk. For most Malaysian patients, pico laser is the preferred first-line option.",
      },
      {
        q: "How long before I see results from pico laser for acne scars?",
        a: "Collagen matures over 4 to 6 weeks after each session. Most patients begin seeing meaningful texture improvement after sessions 3 to 4. Full results appear 3 to 6 months after the final session as the last round of new collagen completes its maturation.",
      },
      {
        q: "Can pico laser treat acne scars on darker skin tones?",
        a: "Yes. Fractional LIOB mode creates deep collagen induction with minimal surface impact, which significantly reduces PIH risk compared to ablative options. The 1064nm wavelength is the primary wavelength for Fitzpatrick IV to V skin. Conservative settings and appropriate session spacing are standard for darker skin tones.",
      },
      {
        q: "Does pico laser hurt for acne scar treatment?",
        a: "Numbing cream is applied for 20 to 30 minutes before every Fractional LIOB session. Most patients describe the treatment as mild pressure with occasional brief sharper sensations at higher-energy sites. It is well tolerated and significantly more comfortable than ablative CO2 laser treatment.",
      },
      {
        q: "Can I treat acne scars while still getting breakouts?",
        a: "Active inflamed acne should be controlled before starting scar treatment. New breakouts create new scar tissue and sensitise the skin, reducing tolerance for laser energy. Your doctor will assess your current breakout status and may recommend a skin stabilisation phase before beginning scar sessions.",
      },
      {
        q: "Is pico laser better than microneedling for acne scars?",
        a: "Pico laser Fractional LIOB reaches deeper into the dermis with more controlled energy delivery than microneedling. It produces more consistent collagen induction and is safer for darker skin types. Microneedling can be effective for mild to moderate scarring but generally underperforms compared to Fractional LIOB for moderate to severe acne scars.",
      },
      {
        q: "Is there downtime after pico laser acne scar treatment?",
        a: "Fractional LIOB produces 24 to 72 hours of redness with small pinpoint marks at treatment sites. Most patients return to normal activities the next day with the redness appearing as mild flushing. The pinpoint marks fade within 1 to 3 days. Social downtime is minimal compared to ablative laser alternatives.",
      },
    ],

    ctaHeading: "Acne Scars Respond to the Right Treatment",
    ctaBody:
      "Book a free consultation at Nexus Clinic KL. Our doctors will assess your scar types under proper lighting, map the severity of each type, and build a treatment plan around the structural changes your specific scars need.",
    ctaPrimaryText: "Book Your Free Acne Scar Consultation",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Full Acne Scar Treatment Programme",
        href: "/skin/acne-scar-treatment-malaysia/",
      },
      {
        label: "Acne Treatment Malaysia",
        href: "/skin/acne-treatment-malaysia/",
      },
    ],
  },

  "large-pores": {
    slug: "large-pores",
    metaTitle:
      "Pico Laser for Large Pores Malaysia Tighten Enlarged Pores with Picosecond Laser at Nexus Clinic",
    metaDescription:
      "Large pores and rough skin texture are treated effectively with Pico Laser at Nexus Clinic Kuala Lumpur. Collagen stimulation tightens pore walls and refines skin texture from within. Safe for oily and combination skin. Book a pore assessment with our doctors today.",

    heroBadge: "Doctor-Led Pico Laser for Pores • MOH Registered Clinic",
    heroTitle: "Pico Laser for Large Pores Malaysia",
    heroHighlight: "Tighten Enlarged Pores and Refine Skin Texture",
    heroDescription:
      "Pores do not open and close. They are not something you can steam smaller or wash tighter. Enlarged pores are a structural issue where the collagen support around the pore wall has weakened, allowing the pore to stretch and become more visible. No cleanser reaches that layer. No serum tightens collagen from the outside.",
    heroDetails:
      "Pico laser works on large pores by triggering new collagen production in the dermis, the layer directly beneath the skin surface where pore walls are anchored. As new collagen forms around the pore, the walls tighten, the pore contracts, and the surface texture improves. This is a structural fix for a structural problem.",
    heroNote:
      "Over 5,000 Aesthetic Procedures Completed — Doctors calibrate Pico Laser fractional energy per skin type for visible, lasting pore refinement.",
    heroImage: "/images/skin/pico-laser-malaysia/large-pores-1.webp",
    heroImageAlt: "Enlarged pores and skin texture on cheek — Pico Laser pore tightening at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/large-pores-2.webp",
    secondImageAlt: "Pore-wall collagen stimulation with Fractional LIOB at Nexus Clinic KL",
    heroCtaText: "Book Free Pore Assessment",
    heroWhatsapp:
      "Hi, I'm interested in Pico Laser treatment for large pores at Nexus Clinic KL. I'd like to book a consultation.",
    heroFloatingTitle: "Pore-Wall Collagen Stimulation",
    heroFloatingSubtitle: "Fractional LIOB • 1064nm • Structural Tightening",

    overviewHeading:
      "Pico Laser for Large Pores at Nexus Clinic KL at a Glance",
    overviewSubheading: "Everything you need to know before booking",
    quickFacts: baseQuickFacts(
      "25 to 40 minutes including topical numbing",
      "24 to 48 hours mild redness and pinpoint marks",
      "6 to 7 sessions spaced 4 to 6 weeks apart",
      "Fractional LIOB Mode at 1064nm; alternated with Toning for oily skin"
    ),
    overviewSummary:
      "Pico laser tightens pore walls by stimulating new collagen production deep in the dermis. Most patients see visible refinement from sessions two to three, with progressive improvement continuing for three to six months after the final session.",

    conditionHeading: "Why Pores Become Enlarged and Why They Stay That Way",
    conditionParagraphs: [
      "Pores are tiny follicle openings. They exist to allow sebum from the sebaceous glands to reach the skin surface. When the collagen and elastin network in the dermis is strong and dense, it holds the pore walls tight and the pore stays small. When that support breaks down through ageing, sun damage, or years of excess sebum and congestion, the pore walls relax and the opening widens.",
      "Oily and combination skin types are most affected. The higher sebum production puts consistent pressure on pore walls from inside. Acne history makes this worse because breakouts directly damage the surrounding collagen. The result is pores that appear large even when the skin is clean.",
      "The tropical Malaysian climate adds another layer. Year-round humidity and heat keep sebaceous glands active and pores working hard. Enlarged pores are one of the most common concerns among Malaysian patients, and surface-only treatments rarely produce satisfying results because they cannot reach the structural cause.",
    ],

    mechanismHeading: "How Pico Laser Reduces Large Pores",
    mechanismSubheading: "Collagen tightening, not surface exfoliation",
    mechanismParagraphs: [
      "Pico laser treats enlarged pores using Fractional LIOB mode, the same mode used for acne scar remodelling. The focused lens array concentrates energy into micro-columns deep in the dermis, creating targeted optical breakdown that triggers collagen and elastin synthesis around the pore wall.",
      "As each round of new collagen matures over four to six weeks after a session, the support network around the pore wall tightens. The pore contracts. Surface texture smooths. This happens cumulatively with each session, which is why the improvement continues for several months after the final treatment.",
      "The 1064nm wavelength is primarily used for pore treatment in Malaysian skin. It penetrates to the required depth while keeping surface heat minimal. For patients with oily skin who also have active sebum congestion in the pores, the collagen tightening effect reduces the pore capacity and helps regulate the visible oil level over time.",
    ],
    mechanismCallout:
      "If you have active congestion alongside structural enlargement, combining pico laser with regular HydraFacial treatments provides both structural repair and deep pore extraction. For patients with thinning or dehydrated skin, skin booster injections improve dermal density alongside pico sessions.",

    expectationsHeading: "What to Expect After Each Pore Treatment Session",
    expectations: [
      {
        heading: "Sessions One to Two",
        body: "Expect 24 to 48 hours of redness and mild pinpoint marks at treatment sites. These resolve within one to three days. Most patients return to normal activities the next day. The skin may feel tighter and slightly more sensitive — this is the inflammatory phase of collagen production.",
      },
      {
        heading: "Sessions Two to Three",
        body: "First visible refinement of pore openings, especially across the cheeks and nose. Skin reflects light more evenly. Make-up sits more smoothly. Texture under angled light begins to look noticeably finer.",
      },
      {
        heading: "Sessions Four to Seven",
        body: "Most patients reach meaningful pore refinement. Skin appears smoother overall. The full collagen remodelling effect of the final session continues to develop for an additional 2 to 3 months after the course.",
      },
      {
        heading: "Maintenance",
        body: "Twice-yearly maintenance sessions help sustain pore tightening results, particularly for patients with persistently oily or combination skin where ongoing sebum activity continues to put pressure on pore walls.",
      },
    ],

    pricingHeading: "Pico Laser for Pores Price at Nexus Clinic KL",
    pricingSubheading: "Transparent per-session pricing",
    pricingRows: [
      {
        treatment: "Discovery PICO Resurfacing",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Fractional LIOB for pore refinement",
      },
      {
        treatment: "Combined Pico + HydraFacial",
        area: "Face",
        unit: "Per visit",
        normalPrice: "POA",
        sellingPrice: "POA",
        promoPrice: "NIL",
        packageNotes: "Discussed at consultation",
      },
      {
        treatment: "Free Consultation",
        area: "Skin texture and pore assessment",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "Required before first session",
      },
    ],

    aftercareHeading: "Pico Laser Large Pore Side Effects and Aftercare",
    expectedSideEffects: [
      "Mild redness for 24 to 48 hours",
      "Pinpoint marks at treatment sites resolving in 1 to 3 days",
      "Skin feels tighter and slightly more sensitive for first few days",
      "Possible mild flaking over treatment sites in days 3 to 5",
    ],
    aftercareInstructions: [
      "SPF50 every morning, reapplied every 2 hours when outdoors",
      "Avoid retinoids and AHAs for 7 days after each session",
      "Gentle ceramide-rich moisturiser twice daily during recovery",
      "Niacinamide between sessions helps regulate sebum and reduce pore visibility",
      "Retinol between sessions supports the collagen-building process",
    ],

    candidacyHeading:
      "Who Gets the Best Results from Pico Laser for Enlarged Pores",
    goodCandidate: [
      "Enlarged pores from collagen loss and skin ageing",
      "Post-acne pore enlargement",
      "Oily or combination skin where sebum activity has stretched pore walls",
      "Patients wanting structural improvement without ablative downtime",
    ],
    pauseIf: [
      "Pregnant or breastfeeding",
      "Isotretinoin use within the past 6 months",
      "Active skin infection or severe inflammatory acne in the treatment area",
      "Recent aggressive resurfacing on the same area",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser for Large Pores",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "Can pico laser actually shrink large pores?",
        a: "Yes. Pico laser's Fractional LIOB mode triggers new collagen production around pore walls, which tightens the structural support and physically reduces pore diameter. This is a structural improvement, not a surface camouflage effect. Results develop progressively over multiple sessions and continue improving for months after the final treatment.",
      },
      {
        q: "How many sessions do I need for pore reduction with pico laser?",
        a: "Most patients see initial visible improvement at sessions 2 to 3 and achieve significant pore refinement over 6 to 7 sessions. Sessions are spaced 4 to 6 weeks apart. The final level of improvement continues developing for 3 to 6 months after treatment ends as the last round of collagen fully matures.",
      },
      {
        q: "Is the improvement in pore size permanent after pico laser?",
        a: "The collagen produced during treatment is permanent. However, for patients with persistently oily skin, ongoing sebum production continues to put pressure on pore walls over time. Twice-yearly maintenance sessions help sustain results and prevent gradual re-enlargement.",
      },
      {
        q: "Does pico laser for pores hurt?",
        a: "Numbing cream is applied for 20 to 30 minutes before each session. Fractional LIOB mode produces mild pressure and occasional brief sharp sensations. Most patients find it very tolerable throughout. It is significantly more comfortable than ablative laser alternatives.",
      },
      {
        q: "Is there downtime after pico laser pore treatment?",
        a: "Fractional LIOB mode produces 24 to 48 hours of mild redness and small pinpoint marks at treatment sites. These fade within 1 to 3 days. Most patients return to normal activities the following day. Social downtime is minimal.",
      },
      {
        q: "Can pico laser treat enlarged pores on the nose specifically?",
        a: "Yes. Pores on the nose are among the most visibly enlarged due to high sebaceous gland density in the T-zone. Pico laser treats pores on the nose, cheeks, chin, and forehead. The same protocol is applied across the treatment area with slightly adjusted settings for different zones.",
      },
      {
        q: "I have both acne scars and large pores. Can pico laser treat both at the same time?",
        a: "Yes. Fractional LIOB mode treats both concerns through the same collagen induction mechanism. If you have both acne scars and enlarged pores, your doctor designs a session plan that addresses both within the same treatment course. The wavelength, mode, and passes are the same.",
      },
      {
        q: "How does pico laser for pores compare to microneedling?",
        a: "Pico laser Fractional LIOB reaches deeper into the dermis and delivers more precise collagen induction than microneedling. It produces more consistent results for both pore reduction and skin texture improvement and is safer for darker skin types. Microneedling can be effective for mild pore concerns but generally underperforms compared to Fractional LIOB for moderate to significant pore enlargement.",
      },
      {
        q: "Will my pores look worse before they look better after pico laser?",
        a: "Immediately after a session, the skin looks red and flushed. The actual pore improvement develops gradually as new collagen forms over weeks. Most patients do not experience a phase where pores look worse. The early post-session redness resolves within 1 to 3 days.",
      },
      {
        q: "Can I wear makeup to cover redness after pico laser pore treatment?",
        a: "Makeup can usually be worn 24 hours after a Fractional LIOB session. Your doctor will confirm this based on how your skin responds at each visit. Mineral-based makeup with SPF is the best choice for the first few days after treatment to protect the skin barrier during the early recovery phase.",
      },
    ],

    ctaHeading: "Enlarged Pores Are Treatable",
    ctaBody:
      "Book a free consultation at Nexus Clinic KL and get an honest assessment of what pico laser can realistically achieve for your skin texture and pore size.",
    ctaPrimaryText: "Book Your Free Pore Consultation",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Pico Laser for Acne Scars",
        href: "/skin/pico-laser-malaysia/acne-scars/",
      },
      {
        label: "HydraFacial Malaysia",
        href: "/skin/hydrafacial-malaysia/",
      },
    ],
  },

  freckles: {
    slug: "freckles",
    metaTitle:
      "Pico Laser for Freckles Malaysia Remove Jeragat and Sun Spots Safely at Nexus Clinic KL",
    metaDescription:
      "Freckles caused by UV exposure and genetics respond well to Pico Laser at Nexus Clinic KL. Ultra-fast picosecond pulses target melanin deposits in jeragat with minimal heat risk, preserving surrounding healthy skin. Results visible from session one with proper sun protection.",

    heroBadge: "Doctor-Led Pico Laser for Freckles • MOH Registered Clinic",
    heroTitle: "Pico Laser for Freckles Malaysia",
    heroHighlight: "Removing Jeragat and Sun Spots Permanently",
    heroDescription:
      "Freckles, or jeragat as they are widely known in Malaysia, are tiny deposits of melanin triggered by UV exposure. The sun hits your skin. The melanocytes in certain areas produce concentrated bursts of pigment. Over years of tropical sun, those deposits cluster across the nose, cheeks, and temples and become the spots you want gone.",
    heroDetails:
      "Pico laser is one of the most effective treatments for freckles in Malaysia. It targets melanin directly, shatters the pigment clusters with pressure rather than heat, and lets the body clear the fragments naturally. Most patients see significant lightening or complete clearance after just one to three sessions.",
    heroNote:
      "Over 5,000 Aesthetic Procedures Completed — LCP-certified doctors selecting wavelength and fluence per Fitzpatrick type to clear freckles without surface damage.",
    heroImage: "/images/skin/pico-laser-malaysia/freckles-1.webp",
    heroImageAlt: "Freckles and jeragat across cheeks and nose — Pico Laser freckle removal at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/freckles-2.webp",
    secondImageAlt: "Spot mode picosecond treatment targeting freckle melanin at Nexus Clinic KL",
    heroCtaText: "Book Free Freckle Consultation",
    heroWhatsapp:
      "Hi, I'm interested in Pico Laser treatment for freckles at Nexus Clinic KL. I'd like to book a consultation.",
    heroFloatingTitle: "Spot Mode at 755nm",
    heroFloatingSubtitle: "Fast Clearance • Minimal Heat • Asian Skin Safe",

    overviewHeading:
      "Pico Laser Freckle Treatment at Nexus Clinic KL at a Glance",
    overviewSubheading: "Everything you need to know before booking",
    quickFacts: baseQuickFacts(
      "15 to 30 minutes including topical numbing",
      "Minimal; freckles darken 3 to 7 days before shedding",
      "1 to 3 sessions for most patients",
      "Spot Mode at 755nm primary; 1064nm at conservative settings for darker skin"
    ),
    overviewSummary:
      "Freckles are among the most laser-responsive pigmentation types. The 755nm wavelength has high melanin absorption in the epidermal layer and produces effective fragmentation with minimal thermal spread. Most patients reach significant clearance in one to three sessions.",

    conditionHeading: "What Freckles Are and Why They Form",
    conditionParagraphs: [
      "Freckles are small flat spots of concentrated melanin. Unlike age spots, which form from cumulative damage over decades, freckles often appear from a young age and are more common in people with a genetic predisposition to pigmentation clustering. UV exposure is the activating trigger. Freckles tend to darken in the hotter months and fade slightly when sun exposure reduces.",
      "In Malaysia, the year-round sun keeps freckles consistently visible and frequently active. The equatorial UV index is among the highest in the world. Without SPF, freckles that were previously light can become significantly darker within weeks of regular outdoor exposure.",
      "The good news is that freckles are among the most responsive pigmentation types to pico laser treatment. They are epidermal, they have high melanin concentration in a small area, and they respond quickly to targeted photoacoustic energy.",
    ],

    mechanismHeading: "How Pico Laser Removes Freckles",
    mechanismSubheading: "Photoacoustic fragmentation at the epidermis",
    mechanismParagraphs: [
      "Pico laser uses ultra-short pulse delivery measured in picoseconds, trillionths of a second, to hit melanin deposits with enough energy to shatter them without generating significant heat. The pressure wave breaks the melanin cluster into fragments small enough for the immune system to clear naturally over one to three weeks.",
      "For freckles, the 755nm wavelength is the primary choice. It has high melanin absorption in the epidermal layer where freckles sit and produces effective fragmentation with minimal thermal spread to surrounding tissue. In patients with Fitzpatrick III to IV skin, this wavelength combined with appropriate fluence settings produces clean clearance with very low PIH risk.",
      "For patients with very dark skin or particularly dark freckles, the 1064nm wavelength is used at conservative settings to reduce surface heat further. Your doctor assesses your skin tone, the darkness of your freckles, and recent sun exposure history before selecting settings for the first session.",
    ],
    mechanismCallout:
      "Freckles are often one component of a more complex pigmentation picture. Patients with multiple types alongside freckles benefit from our broader pigmentation treatment plan.",

    expectationsHeading: "What to Expect After Pico Laser for Freckles",
    expectations: [
      {
        heading: "Session One",
        body: "After a spot mode session, the treated spots will appear to darken in the first three to seven days. This looks alarming if you are not expecting it, but it is the normal response. The darkening is fragmented melanin moving toward the surface before it sheds. It is the treatment working.",
      },
      {
        heading: "Two Weeks After Session One",
        body: "After the darkened spots shed, the area underneath looks lighter. Most patients see very visible clearance within two to three weeks of the first session. Some patients achieve their desired result after a single session.",
      },
      {
        heading: "Session Two (4-6 Weeks Later)",
        body: "After a second session, most patients see very significant reduction. Others with denser or darker clusters benefit from two to three sessions for more complete clearance.",
      },
      {
        heading: "Maintenance",
        body: "Pico laser permanently removes treated melanin deposits. New freckles can form if UV exposure continues without protection. SPF50 every morning, reapplied every two hours outdoors, is the most important step after treatment.",
      },
    ],

    pricingHeading: "Pico Laser Freckle Treatment Price at Nexus Clinic KL",
    pricingSubheading: "Per-session pricing with free consultation",
    pricingRows: [
      {
        treatment: "Discovery PICO Rejuvenation (Spot Mode)",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Full session approach for cluster freckles",
      },
      {
        treatment: "Targeted Spot Treatment",
        area: "Individual freckles",
        unit: "Per session",
        normalPrice: "RM500",
        sellingPrice: "RM350",
        promoPrice: "NIL",
        packageNotes: "Confirmed at consultation",
      },
      {
        treatment: "Free Consultation",
        area: "Skin type and freckle assessment",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "Required before first session",
      },
    ],

    aftercareHeading: "Pico Laser Freckle Side Effects and Aftercare",
    expectedSideEffects: [
      "Treated freckles darken for 3 to 7 days before flaking off — expected, not abnormal",
      "Mild redness around treated lesions for several hours",
      "Possible pinpoint crusts that resolve in 5 to 7 days",
      "Slight skin sensitivity to heat and sun for 5 to 7 days",
    ],
    aftercareInstructions: [
      "Do not pick or scrub the darkened spots — let them shed naturally",
      "SPF50 every morning, reapplied every 2 hours when outdoors — non-negotiable",
      "Avoid sun exposure in the days immediately after treatment",
      "Pause retinol, AHA, BHA and physical exfoliants for 5 to 7 days",
      "Medical-grade vitamin C between sessions helps suppress new melanin formation",
    ],

    candidacyHeading:
      "Who Is Suitable for Pico Laser Freckle Treatment",
    goodCandidate: [
      "Epidermal freckles on stable, non-tanned skin",
      "Fitzpatrick Types I to IV",
      "Not currently taking medications that increase photosensitivity",
      "Willing to maintain daily SPF50 to prevent new freckles",
    ],
    pauseIf: [
      "Very recent sun exposure or active tan — wait until faded",
      "Pregnant or breastfeeding",
      "Suspected melasma — requires a different protocol",
      "Active skin infection on the treatment area",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser for Freckles",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "Does pico laser permanently remove freckles?",
        a: "Pico laser permanently removes the melanin deposits it targets. New freckles can form over time if UV triggers continue without sun protection. Patients who maintain daily SPF50 after treatment typically see cleared areas remain clear for years. The treatment removes what is there. Protection prevents new ones from forming.",
      },
      {
        q: "How many sessions does pico laser take for freckles?",
        a: "Most freckles clear significantly in 1 to 3 sessions. Some patients see sufficient clearance after a single session. Others with denser or darker clusters benefit from a second or third session. Sessions are spaced 4 to 6 weeks apart.",
      },
      {
        q: "Why do freckles look darker after pico laser?",
        a: "The darkening that appears 1 to 7 days after a pico laser session is normal. It is the fragmented melanin rising to the skin surface before being shed naturally. Think of it as the pigment being pushed out. It resolves on its own within one to two weeks and is a sign the treatment targeted the pigment correctly.",
      },
      {
        q: "Is pico laser or Q-switch laser better for freckles?",
        a: "Pico laser produces faster fragmentation with less heat and lower PIH risk. For Malaysian skin types, this makes pico laser the safer and more effective choice, particularly for Fitzpatrick III to V patients where Q-switch's photothermal mechanism carries a meaningful PIH risk.",
      },
      {
        q: "Will freckles come back after pico laser treatment?",
        a: "Treated freckles are permanently removed. New freckles can form in treated areas over time if UV exposure continues without protection. Daily SPF50 and reapplication every two hours outdoors significantly reduces the chance of recurrence. Most patients who maintain this see long-lasting results.",
      },
      {
        q: "Is there downtime after pico laser freckle treatment?",
        a: "Minimal downtime. Treated spots darken for 3 to 7 days as melanin sheds, which looks cosmetically obvious up close. Mild redness around treated spots fades within hours. Most patients return to work the next day with the darkened spots visible but manageable with light makeup if needed.",
      },
      {
        q: "Can pico laser treat freckles and dark spots at the same time?",
        a: "Yes. Pico laser sessions can target both scattered freckles and larger individual sunspots in the same session. Your doctor uses a combination of spot mode for defined individual lesions and broader toning passes for diffuse freckle coverage across the same session.",
      },
      {
        q: "How do I know if my spots are freckles or something else?",
        a: "Freckles are typically small, flat, uniform in depth, and appear in multiples across UV-exposed areas. Age spots tend to be larger and more defined. Melasma is patchier and symmetrical. ABNOM has a bluish-grey tone. Your doctor will confirm what type of pigmentation you have during the consultation before any treatment is planned.",
      },
      {
        q: "Can I wear makeup over freckles after pico laser treatment?",
        a: "Makeup can be worn the next day after treatment. During the darkening phase, the treated spots may be more visible with light coverage but light mineral makeup can be applied. Avoid heavy rubbing or scrubbing of treated areas during the shedding phase. Let the pigment shed naturally.",
      },
      {
        q: "Are freckles on the nose treated the same as freckles on the cheeks?",
        a: "Yes, the same pico laser approach is used across all facial areas. Settings may be slightly adjusted for different zones based on skin thickness and sebaceous density. Treatment covers all affected areas in a single session.",
      },
    ],

    ctaHeading: "Ready to Clear Your Freckles?",
    ctaBody:
      "Book a free consultation at Nexus Clinic KL and get an honest assessment of your freckle type, session requirements, and what the result realistically looks like for your skin.",
    ctaPrimaryText: "Book Your Free Freckle Consultation",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Full Pigmentation Treatment",
        href: "/skin/pigmentation-treatment-malaysia/",
      },
      {
        label: "Chemical Peel Malaysia",
        href: "/skin/chemical-peel-malaysia/",
      },
    ],
  },

  "pico-tattoo-removal": {
    slug: "pico-tattoo-removal",
    metaTitle:
      "Pico Laser Tattoo Removal Malaysia Remove All Ink Colours with Picosecond Laser at Nexus Clinic KL",
    metaDescription:
      "Pico Laser at Nexus Clinic KL removes black, coloured, and resistant tattoo ink by shattering particles into dust-sized fragments the body clears naturally. Faster and more effective than Q-switch laser with lower scarring risk. Get a session count estimate at your first consultation.",

    heroBadge: "Doctor-Led Pico Laser Tattoo Removal • MOH Registered Clinic",
    heroTitle: "Pico Laser Tattoo Removal Malaysia",
    heroHighlight: "Remove All Ink Colours with Minimal Scarring",
    heroDescription:
      "Tattoo regret is more common than anyone admits. Whether it is a name that no longer makes sense, a design that belonged to a different version of you, or simply work that was not done well enough to keep, the ink is in the dermis and it stays there until something effective reaches it.",
    heroDetails:
      "Pico laser tattoo removal in Malaysia is the most effective method currently available. The ultra-short picosecond pulses shatter tattoo ink into particles fine enough for the immune system to clear completely, and it does this significantly faster and with less damage to surrounding tissue than older Q-switch laser methods.",
    heroNote:
      "Over 5,000 Aesthetic Procedures Completed — Black ink, coloured ink, and resistant tattoos that did not fully clear with previous treatments.",
    heroImage: "/images/skin/pico-laser-malaysia/tattoo-removal-1.webp",
    heroImageAlt: "Tattoo being treated with picosecond laser — Pico Laser tattoo removal at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/tattoo-removal-2.webp",
    secondImageAlt: "Multi-wavelength Pico Laser shattering tattoo ink for immune clearance at Nexus Clinic KL",
    heroCtaText: "Book Free Tattoo Removal Consultation",
    heroWhatsapp:
      "Hi, I'm interested in Pico Laser tattoo removal at Nexus Clinic KL. I'd like to book a consultation.",
    heroFloatingTitle: "Multi-Wavelength Approach",
    heroFloatingSubtitle: "1064nm • 755nm • 532nm Across Ink Colours",

    overviewHeading:
      "Pico Laser Tattoo Removal at Nexus Clinic KL at a Glance",
    overviewSubheading: "Everything you need to know before starting",
    quickFacts: baseQuickFacts(
      "30 minutes to 2 hours depending on tattoo size",
      "1 to 2 weeks healing; occasional mild blistering",
      "4 to 10+ sessions spaced 6 to 8 weeks apart",
      "Multi-wavelength Pico Laser: 1064nm, 755nm, 532nm per ink colour"
    ),
    overviewSummary:
      "Pico laser shatters tattoo ink into dust-sized fragments through photoacoustic pressure. The immune system clears them naturally over 6 to 8 weeks between sessions. Multi-colour tattoos require multiple wavelengths in the same session or across sessions.",

    conditionHeading: "Why Tattoo Ink Is So Hard to Remove",
    conditionParagraphs: [
      "Tattoo ink sits in the dermis. That is the second layer of skin, below the epidermis you can see and touch. It was placed there deliberately, deep enough to be permanent, and the particles are too large for the immune system to recognise and clear on its own.",
      "When a laser hits the ink, it shatters the particles into smaller pieces. If those pieces are small enough, the immune system treats them as foreign material and removes them through the lymphatic system. The problem with older lasers was that they broke the particles into pieces that were still too large for efficient immune clearance. Multiple sessions produced frustratingly slow fading. High heat from the photothermal mechanism also caused significant skin damage in the surrounding tissue.",
      "Pico laser changes this because the ultra-short pulse duration creates a photoacoustic effect that shatters ink into dust-sized fragments. Immune clearance is much more efficient. Fading per session is faster. The surrounding tissue sustains significantly less collateral damage.",
    ],

    mechanismHeading: "Which Ink Colours Pico Laser Can Remove",
    mechanismSubheading: "Multi-wavelength per colour",
    mechanismParagraphs: [
      "Not all ink responds to the same wavelength. Colour matters when planning tattoo removal, and using the wrong wavelength on a given colour produces little result. At Nexus Clinic KL, we use a multi-wavelength approach that addresses the full range of ink colours.",
      "Black and dark grey ink responds to 1064nm wavelength. The most commonly removed colour, usually showing the fastest clearance per session. Blue and green ink responds to 755nm wavelength with intermediate clearance speed.",
      "Red, orange, and yellow ink responds to 532nm wavelength. Warm colours are historically the hardest to clear. Pico laser at 532nm is significantly more effective than Q-switch for these. Purple and violet ink is typically treated with a combination of 1064nm and 532nm wavelengths.",
      "Multi-coloured tattoos require multiple wavelengths in the same session or across sessions. Your doctor maps the colours at consultation and designs the wavelength sequence to address all of them.",
    ],
    mechanismCallout:
      "For tattoos with significant scarring from previous laser sessions, combining pico laser removal with fractional laser resurfacing can address both remaining ink and textural damage simultaneously.",

    expectationsHeading: "What Pico Laser Tattoo Removal Feels Like and What to Expect",
    expectations: [
      {
        heading: "Immediately After the Session",
        body: "Numbing cream is applied for 20 to 30 minutes before every session. The treatment feels like fast rubber band snaps. Immediately after, the skin around the tattoo appears red and mildly swollen. A frosting white effect may be visible on the tattoo surface — a normal immediate response.",
      },
      {
        heading: "Between Sessions",
        body: "In the weeks after each session, the tattoo progressively fades. The fading is not uniform. Some areas clear faster than others. Lines and edges may fade before filled areas because they have less ink density. By six to eight weeks after a session, the cumulative clearance is visible before the next treatment begins.",
      },
      {
        heading: "Realistic Session Count",
        body: "A small single-colour black tattoo from a professional artist may fade completely in four to six sessions. A large multi-colour sleeve from multiple artists with layers of ink can take ten sessions or more. Variables include tattoo age, ink density, body location, skin tone, and ink quality.",
      },
      {
        heading: "After the Final Session",
        body: "Pico laser typically achieves equivalent ink clearance in fewer total sessions compared to Q-switch. For patients who plateaued with Q-switch removal, pico laser frequently produces further clearance because shorter pulses can shatter residual particles Q-switch could not fragment fully.",
      },
    ],

    pricingHeading: "Pico Laser Tattoo Removal Price at Nexus Clinic KL",
    pricingSubheading:
      "Pricing assessed at consultation — depends on size, colour, and session count",
    pricingRows: [
      {
        treatment: "Discovery PICO Tattoo Removal",
        area: "Body",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "POA",
        sellingPrice: "POA",
        promoPrice: "NIL",
        packageNotes: "Assessed at consultation",
      },
      {
        treatment: "Free Consultation & Removal Plan",
        area: "Tattoo assessment + session count estimate",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "Required before first session",
      },
    ],

    aftercareHeading: "Aftercare After Pico Laser Tattoo Removal Sessions",
    expectedSideEffects: [
      "Redness and mild swelling around tattoo for several days",
      "Frosting white effect on tattoo surface immediately after — fades within hours",
      "Possible mild blistering in some patients (normal tissue response)",
      "Mild scabbing or crusting over treated area for up to 2 weeks",
    ],
    aftercareInstructions: [
      "Keep treated area clean, covered with thin layer of medical-grade barrier ointment for first 48 hours",
      "Avoid submerging the area in water — no swimming, open water, or prolonged showering for first week",
      "Avoid sun exposure throughout removal course; SPF50 on the area if sun-exposed",
      "Do not pick or scratch the area during the healing phase",
      "Blisters should be left to resolve naturally — picking increases infection risk and scarring",
    ],

    candidacyHeading:
      "Who Is Suitable for Pico Laser Tattoo Removal",
    goodCandidate: [
      "Black, coloured, or mixed-ink tattoos seeking full or partial removal",
      "Tattoos that plateaued with previous Q-switch treatment",
      "Cosmetic micropigmentation that needs to be removed",
      "Patients willing to commit to 6 to 8 week intervals between sessions",
    ],
    pauseIf: [
      "Fresh tattoo less than 6 to 8 weeks old — skin needs to fully heal first",
      "Active skin infection in the tattoo area",
      "Pregnant or breastfeeding",
      "History of keloid scarring (requires careful planning)",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser Tattoo Removal",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "How many sessions does pico laser take to remove a tattoo completely?",
        a: "Session count depends on tattoo size, ink colours, density, age, and location. A small black tattoo may clear in 4 to 6 sessions. A large multi-colour tattoo may require 10 or more. Sessions are spaced 6 to 8 weeks apart. Your doctor will give you a realistic estimate at consultation after assessing all variables.",
      },
      {
        q: "Does pico laser fully remove all tattoo colours?",
        a: "Pico laser is the most effective method currently available for multi-colour tattoo removal. Black and dark inks respond best. Blue and green respond well to 755nm. Red, orange, and yellow respond to 532nm and are historically the hardest colours to clear but respond better to pico than to Q-switch. Complete clearance of all colours is possible but varies by tattoo and patient.",
      },
      {
        q: "Is pico laser the best method for tattoo removal in Malaysia?",
        a: "Yes. Pico laser outperforms Q-switch laser in fragmentation efficiency and tissue damage profile. The shorter pulse duration shatters ink into finer particles for faster immune clearance and fewer total sessions. It is the current gold standard for tattoo removal.",
      },
      {
        q: "Does pico laser tattoo removal hurt?",
        a: "Numbing cream is applied before every session. The sensation is typically described as fast rubber band snaps. Most patients find it manageable with adequate numbing. Body areas with thinner skin or bony surfaces tend to be more sensitive than fleshier areas.",
      },
      {
        q: "Will pico laser tattoo removal leave a scar?",
        a: "When performed correctly at the right settings and with proper aftercare, pico laser does not cause scarring. The photoacoustic mechanism minimises thermal damage to surrounding tissue. The risk of scarring increases if blisters are picked, the area is exposed to infection, or settings are too aggressive for the skin type. Your doctor at Nexus Clinic KL calibrates settings to minimise this risk.",
      },
      {
        q: "Can pico laser remove a tattoo that was previously treated with Q-switch?",
        a: "Yes. Pico laser can continue treatment on tattoos that reached a plateau with Q-switch. The shorter pulse duration fragments residual ink particles that Q-switch could not fully shatter. Many patients who felt stuck with a partially faded tattoo after Q-switch see further meaningful clearance with pico laser.",
      },
      {
        q: "How long should I wait between tattoo removal sessions?",
        a: "Six to eight weeks minimum between sessions. This is the time needed for the immune system to fully clear the fragmented ink from the previous session. Starting a new session before this clearance is complete is counterproductive.",
      },
      {
        q: "Can pico laser remove black ink tattoos completely?",
        a: "Black ink responds best to pico laser. Complete clearance is achievable for most black ink tattoos, though session count varies by density, depth, and the type of ink used. Professional tattoos are typically applied deeper and more densely than amateur tattoos and may need more sessions.",
      },
      {
        q: "Is there a risk of hyperpigmentation after tattoo removal?",
        a: "Temporary hyperpigmentation can occur in the treated area, particularly in darker skin tones. At Nexus Clinic KL, settings are calibrated to minimise this risk. Consistent SPF50 use on the treated area throughout the removal course significantly reduces hyperpigmentation risk.",
      },
      {
        q: "How soon after getting a tattoo can I start pico laser removal?",
        a: "Waiting at least 6 to 8 weeks after getting a tattoo before starting removal is recommended. The skin needs to fully heal from the tattooing process first. For fresh tattoos, starting removal immediately increases inflammation risk and reduces the effectiveness of the first session.",
      },
    ],

    ctaHeading: "Tattoo Removal Is a Commitment of Time",
    ctaBody:
      "Book a free consultation at Nexus Clinic KL to get a clear session plan and realistic timeline for your specific tattoo before starting any treatment.",
    ctaPrimaryText: "Book Your Free Tattoo Removal Consultation",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Fractional Laser Resurfacing",
        href: "/fraqtional-laser-resurfacing/",
      },
      {
        label: "Pico Laser Side Effects",
        href: "/skin/pico-laser-malaysia/side-effects/",
      },
    ],
  },

  "skin-brightening": {
    slug: "skin-brightening",
    metaTitle:
      "Pico Laser Skin Brightening Malaysia Achieve Even Skin Tone and Glass Skin at Nexus Clinic KL",
    metaDescription:
      "Dull, uneven skin tone caused by sun damage, hormones, or acne history responds well to Pico Laser brightening at Nexus Clinic KL. Pico toning mode delivers a full-face brightening effect with near-zero downtime. Suitable for all Malaysian skin tones. Book your skin analysis today.",

    heroBadge: "Doctor-Led Pico Toning • MOH Registered Clinic",
    heroTitle: "Pico Laser Skin Brightening Malaysia",
    heroHighlight: "Even Skin Tone and Glass Skin with Pico Toning",
    heroDescription:
      "You take care of your skin. You moisturise, you wear SPF some days, you have tried brightening products. But the skin still looks flat. A bit dull. Like the glow is there but it is stuck underneath something. That quality of brightness that makes healthy skin look alive, it is about melanin distribution and collagen density, and both of those respond to pico laser.",
    heroDetails:
      "Pico laser brightening at Nexus Clinic KL uses toning mode to deliver full-face sessions that break down scattered surface melanin, stimulate collagen, and produce a progressive improvement in skin clarity and luminosity. Not one dramatic change overnight. A real, cumulative improvement that your skin develops session by session.",
    heroNote:
      "Over 5,000 Aesthetic Procedures Completed — Toning protocols calibrated for Malaysian skin from Fitzpatrick I to V.",
    heroImage: "/images/skin/pico-laser-malaysia/skin-brightening-1.webp",
    heroImageAlt: "Bright, even-toned glass skin — Pico Laser skin brightening at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/skin-brightening-2.webp",
    secondImageAlt: "Pico toning full-face brightening session at Nexus Clinic KL",
    heroCtaText: "Book Free Skin Brightening Consultation",
    heroWhatsapp:
      "Hi, I'm interested in Pico Laser skin brightening at Nexus Clinic KL. I'd like to book a consultation.",
    heroFloatingTitle: "Pico Toning",
    heroFloatingSubtitle: "Full-Face • Low-Fluence • Zero Downtime",

    overviewHeading:
      "Pico Laser Skin Brightening at Nexus Clinic KL at a Glance",
    overviewSubheading: "Everything you need to know before booking",
    quickFacts: baseQuickFacts(
      "30 to 45 minutes including topical numbing",
      "Minimal; mild redness 2 to 4 hours; lunchtime treatment",
      "4 to 6 sessions spaced 3 to 4 weeks apart",
      "Pico Toning Mode at 1064nm; full-face low-fluence passes"
    ),
    overviewSummary:
      "Pico toning fragments scattered surface melanin and stimulates collagen for a progressively brighter, more even skin tone. Visible brightness improvement typically appears at sessions 2 to 3. Results build cumulatively across the course.",

    conditionHeading: "What Makes Malaysian Skin Look Dull",
    conditionParagraphs: [
      "Dullness is usually not one thing. It is a combination of factors that accumulate over time. Scattered melanin from years of UV exposure makes skin tone uneven and flat. A thinning collagen network under the skin surface reduces the density that gives skin its luminous quality. Dead cell buildup on the surface creates a grey, matte appearance.",
      "In Malaysia, the tropical sun contributes significantly to all three. Year-round UV exposure increases melanin production and over time creates a diffuse, uneven pigmentation across the face. The same UV also breaks down collagen. By their late twenties, many Malaysians start noticing that their skin does not have the same clarity or light-reflective quality it used to.",
      "Brightening creams and serums address the surface layer. Vitamin C, niacinamide, kojic acid, these all help to some degree. But they cannot reach the melanin that sits in the dermis, and they cannot rebuild collagen. That is where pico laser becomes relevant.",
    ],

    mechanismHeading: "How Pico Laser Brightening Treatment Works",
    mechanismSubheading: "Toning mode at 1064nm",
    mechanismParagraphs: [
      "Pico laser skin brightening uses toning mode, which delivers low-fluence full-face passes at a wavelength that targets scattered melanin clusters in both the epidermis and superficial dermis. The photoacoustic mechanism fragments this melanin without generating the heat that triggers new pigment production.",
      "As the body clears the fragmented melanin over the weeks following each session, the skin tone becomes more even. Less variation between clear areas and darker areas. A more uniform, brighter baseline tone overall. Patients consistently describe the skin as looking more awake, cleaner, and more luminous after three to four sessions.",
      "The collagen stimulation that accompanies toning mode also plays a role. As new collagen forms in the dermal layer, the skin develops better density and light-reflecting properties. This is part of why the brightness improvement looks natural rather than bleached or artificial.",
    ],
    mechanismCallout:
      "There is an important distinction between brightening and whitening. Pico laser brightening restores your skin to its clearest version of its natural tone — it does not lighten beyond baseline. For specific whitening goals, see our Skin Whitening Treatment page.",

    expectationsHeading: "How Many Sessions for Pico Laser Brightening Results",
    expectations: [
      {
        heading: "Session One",
        body: "Mild redness for 2 to 4 hours. No peeling, no open wounds, no obvious sign of treatment by the next morning. Some patients notice very early brightness improvement beginning.",
      },
      {
        heading: "Sessions Two to Three",
        body: "Most patients begin noticing visible brightness improvement after sessions two to three. The skin looks more even, less flat, and the overall tone is clearer.",
      },
      {
        heading: "Sessions Four to Six (Initial Course)",
        body: "A typical brightening course is four to six sessions spaced 3 to 4 weeks apart. Patients see a meaningful change in skin clarity, evenness, and luminosity by the end of the course.",
      },
      {
        heading: "Maintenance",
        body: "After the initial course, monthly or bi-monthly maintenance sessions sustain and build on the result. Many patients include pico toning sessions as part of a regular skin maintenance routine alongside their skincare.",
      },
    ],

    pricingHeading: "Pico Laser Skin Brightening Price at Nexus Clinic KL",
    pricingSubheading: "Transparent pricing — free consultation included",
    pricingRows: [
      {
        treatment: "Brightening Laser Curas Package",
        area: "Face",
        unit: "Full treatment course (1h 45m)",
        normalPrice: "RM1,398",
        sellingPrice: "RM846",
        promoPrice: "NIL",
        packageNotes: "Brightening focused protocol",
      },
      {
        treatment: "Discovery PICO Rejuvenation",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Full-face toning and brightening",
      },
      {
        treatment: "Free Consultation",
        area: "Skin analysis and treatment plan",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "Required before first session",
      },
    ],

    aftercareHeading: "Pico Brightening Side Effects and Aftercare",
    expectedSideEffects: [
      "Mild redness for 2 to 4 hours after session",
      "No peeling, no open wounds",
      "Skin may feel slightly tighter for a few hours",
      "Sometimes a subtle brightness immediately visible within 24 to 48 hours",
    ],
    aftercareInstructions: [
      "SPF50 every morning, reapplied every 2 hours when outdoors",
      "Pause retinol for 5 to 7 days before and after each session",
      "Medical-grade vitamin C serum between sessions amplifies the brightening result",
      "Gentle cleanser and ceramide moisturiser as baseline routine",
      "Avoid hot showers, sauna and steam for 24 hours after session",
    ],

    candidacyHeading:
      "Who Pico Laser Brightening Is For (And Who Should Pause)",
    goodCandidate: [
      "Dull, uneven, sun-damaged skin tone",
      "Diffuse mild pigmentation across the face",
      "Wanting overall skin clarity and 'glass skin' luminosity",
      "All Fitzpatrick skin tones — protocol adjusted per type",
    ],
    pauseIf: [
      "Pregnant or breastfeeding",
      "Isotretinoin within the past 6 months",
      "Recent significant sun exposure or active tan — wait until faded",
      "Active skin infection on the treatment area",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser Skin Brightening",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "How many sessions of pico laser does it take to see brightening results?",
        a: "Most patients notice visible skin clarity and brightness improvement after sessions 2 to 3. A typical initial course is 4 to 6 sessions spaced 3 to 4 weeks apart. Results continue improving as the body clears melanin and new collagen matures between sessions.",
      },
      {
        q: "Is pico laser brightening safe for all Malaysian skin tones?",
        a: "Yes. Toning mode uses low-fluence passes and the photoacoustic mechanism generates minimal heat, making it safe for Fitzpatrick Types I to V. It is one of the safest brightening procedures available for darker Malaysian skin tones because it avoids the PIH risk associated with heat-based brightening treatments.",
      },
      {
        q: "How long do pico laser brightening results last?",
        a: "With consistent SPF use and monthly maintenance sessions, brightening results are sustained and continue improving over time. Patients who stop both maintenance and sun protection typically see dullness and unevenness returning gradually over several months as new UV exposure and melanin accumulation accumulate.",
      },
      {
        q: "Is pico laser brightening the same as pico toning?",
        a: "Yes, they refer to the same treatment. Pico toning is the delivery mode name for the full-face low-fluence passes used in brightening sessions. At Nexus Clinic KL, this is delivered using the Discovery PICO device's toning mode protocol.",
      },
      {
        q: "Can pico laser brighten skin that has been darkened by years of sun exposure?",
        a: "Yes. Pico laser toning specifically targets the diffuse scattered melanin deposits that accumulate from years of UV exposure. Patients in their thirties and forties who have noticed progressive skin darkening compared to their younger complexion frequently report significant reversal over a full treatment course.",
      },
      {
        q: "Does pico laser brightening remove specific spots or the whole face?",
        a: "Toning mode delivers full-face passes that improve overall brightness and evenness. It is not a targeted spot treatment. If you have both specific dark spots and overall dullness, your doctor may combine toning mode for the general brightness with spot mode passes for individual lesions in the same session.",
      },
      {
        q: "Is there any downtime after pico laser brightening sessions?",
        a: "Toning mode produces minimal downtime. Most patients experience mild redness for a few hours after the session and return to normal activities the same day. No peeling, no open wounds, and no significant social downtime. It is often described as a lunchtime treatment.",
      },
      {
        q: "Can pico laser brightening help with dark circles from melanin under the eyes?",
        a: "Yes. Peri-orbital melanin-based dark circles respond to pico laser toning. The 1064nm wavelength used in toning mode penetrates safely under the delicate under-eye area. Results in the under-eye area typically require 4 to 6 sessions. Vascular-based dark circles do not respond to pico laser and require a different approach.",
      },
      {
        q: "How does pico laser brightening compare to a chemical peel for skin glow?",
        a: "Chemical peels resurface the top skin layer to remove dead cells and surface pigmentation. Pico laser toning reaches deeper, targeting melanin in both the epidermis and superficial dermis while stimulating collagen. Pico laser tends to produce a more sustainable improvement for skin that has been darkened by internal melanin accumulation rather than purely surface buildup.",
      },
      {
        q: "Can I get pico laser brightening sessions while using retinol?",
        a: "Pause retinol for 5 to 7 days before each session and for 5 to 7 days after. Retinol increases skin sensitivity and using it immediately before or after a pico laser session can cause unnecessary irritation. Between sessions you can resume your regular retinol routine after the post-session pause period.",
      },
    ],

    ctaHeading: "Dull Skin Is Treatable",
    ctaBody:
      "Dull, uneven skin tone is one of the most treatable skin concerns with the right approach. Book a consultation at Nexus Clinic KL and get a clear picture of what a brightening course can realistically do for your skin.",
    ctaPrimaryText: "Book Your Free Brightening Consultation",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Skin Whitening Treatment",
        href: "/skin/skin-whitening-treatment-malaysia/",
      },
      {
        label: "Pico Laser for Pigmentation",
        href: "/skin/pico-laser-malaysia/pigmentation/",
      },
    ],
  },

  recovery: {
    slug: "recovery",
    metaTitle:
      "Pico Laser Recovery Malaysia What to Expect After Treatment and Full Aftercare Guide at Nexus Clinic",
    metaDescription:
      "Most patients resume normal activity within 24 to 48 hours after Pico Laser at Nexus Clinic KL. This complete recovery guide covers what to expect day by day, aftercare products to use, and skincare to avoid. Written by our LCP-certified aesthetic doctors for Malaysian skin.",

    heroBadge: "Pico Laser Aftercare Guide • MOH Registered Clinic",
    heroTitle: "Pico Laser Recovery Malaysia",
    heroHighlight: "What to Expect After Treatment and Full Aftercare Guide",
    heroDescription:
      "The thing most patients want to know before any laser treatment is not the science behind how it works. It is what happens after. How red will my face be? Can I go back to work? What can I put on my skin and what do I absolutely need to avoid? This guide answers all of that, specifically for pico laser treatment at Nexus Clinic KL.",
    heroDetails:
      "Recovery after pico laser is shorter than almost any other laser treatment available. But shorter does not mean none. What you do in the days after each session directly affects how well your skin heals, how much improvement shows up at your next visit, and whether you develop any unwanted side effects.",
    heroNote:
      "Written by our LCP-certified doctors. Recovery varies by delivery mode — this page maps the full timeline for each.",
    heroImage: "/images/skin/pico-laser-malaysia/recovery-1.webp",
    heroImageAlt: "Calm skin healing after Pico Laser — recovery and aftercare guide at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/recovery-2.webp",
    secondImageAlt: "Ceramide moisturiser and SPF50 aftercare products that support Pico Laser recovery",
    heroCtaText: "Book Free Consultation",
    heroWhatsapp:
      "Hi, I'm interested in Pico Laser treatment at Nexus Clinic KL and want to understand the recovery process. I'd like to book a consultation.",
    heroFloatingTitle: "Mode-Specific Recovery",
    heroFloatingSubtitle: "Toning • Fractional LIOB • Spot",

    overviewHeading:
      "Pico Laser Recovery at Nexus Clinic KL at a Glance",
    overviewSubheading: "Recovery depends on which delivery mode was used",
    quickFacts: baseQuickFacts(
      "20 to 50 minutes depending on session type",
      "Toning: 2-4hrs | Fractional: 1-3 days | Spot: 3-7 days",
      "Varies by concern: 1 single session to 8 in a course",
      "Mode determines recovery: Toning, Fractional LIOB, or Spot"
    ),
    overviewSummary:
      "Recovery time depends heavily on which delivery mode was used in your session, not just on the fact that you had pico laser. Toning is essentially a lunchtime treatment. Fractional LIOB takes 1 to 3 days. Spot mode produces visible darkening for 3 to 7 days before shedding.",

    conditionHeading: "Recovery Is Different for Each Pico Laser Delivery Mode",
    conditionParagraphs: [
      "Toning mode delivers low-fluence full-face passes primarily used for pigmentation and brightening. Recovery after toning mode is minimal. Most patients have mild redness for two to four hours and return to normal activities, including work, the same day. There is no peeling, no visible wound, and no obvious sign of treatment by the next morning.",
      "Fractional LIOB mode delivers concentrated energy into micro-columns in the dermis, used for acne scars and pore refinement. Recovery after Fractional LIOB involves 24 to 48 hours of visible redness and pinpoint marks at each treatment site. These marks look like fine red dots and fade within one to three days. Most patients are comfortable returning to work the day after treatment.",
      "Spot mode delivers high-fluence targeted pulses to individual pigmented lesions like freckles, sunspots, or age spots. After spot mode, treated lesions darken for three to seven days before shedding naturally. This is the most visually obvious post-treatment response and is a sign the treatment worked correctly.",
    ],

    mechanismHeading: "Day by Day: What Your Skin Looks Like After Pico Laser",
    mechanismSubheading: "Timeline across all delivery modes",
    mechanismParagraphs: [
      "Immediately after the session, the skin feels warm and looks flushed. A mild sunburn sensation is common for the first hour or two. For Fractional LIOB sessions, pinpoint redness at each treatment site appears immediately. For spot mode, the treated lesions appear lighter or have a white frosting effect that fades within an hour.",
      "Day 1 to 2 — Toning mode: redness has faded; skin may feel mildly sensitive or tight; most patients look completely normal by day two. Fractional LIOB mode: pinpoint marks are visible and the skin appears flushed; mild swelling around the treatment area is normal. Spot mode: treated spots are beginning to darken.",
      "Day 3 to 5 — Toning: skin is fully back to normal, early brightness improvement beginning. Fractional LIOB: pinpoint marks resolving and fading; mild flaking over treatment sites is normal as the micro-columns heal. Spot: treated spots at their darkest. Day 6 to 14 — Fractional LIOB skin fully healed at the surface; collagen remodelling continues underneath for six weeks. Spot: darkened spots begin to shed naturally; by day 10 to 14 most treated spots have shed and the skin underneath is lighter.",
    ],
    mechanismCallout:
      "Which mode your session used depends entirely on your skin concern. The delivery mode breakdown for each concern is mapped in full at our pico laser treatment page.",

    expectationsHeading: "Essential Aftercare for All Pico Laser Sessions",
    expectations: [
      {
        heading: "Sun Protection",
        body: "SPF50 every morning. Apply before going outdoors. Reapply every two hours when outside. This is non-negotiable and is the single most important step in your post-treatment routine.",
      },
      {
        heading: "Cleansing and Moisturising",
        body: "Gentle cleanser only — avoid foaming cleansers with sulphates or exfoliating particles for the first week. Micellar water or a gentle cream cleanser is the right choice. Ceramide-rich moisturiser to support the barrier in the days after treatment.",
      },
      {
        heading: "Skincare to Pause",
        body: "Retinoids, AHAs, BHAs, and vitamin C serums are paused for 5 to 7 days. Resume after the pause as directed by your doctor.",
      },
      {
        heading: "Heat and Activity",
        body: "No saunas, steam rooms, hot showers on the face, or heavy exercise that causes significant facial flushing for 48 to 72 hours. No picking — especially for spot mode sessions. The darkening and natural shedding should not be interfered with.",
      },
    ],

    pricingHeading: "Pico Laser Session Pricing at Nexus Clinic KL",
    pricingSubheading:
      "Recovery is included with every session — no extra charge for aftercare guidance",
    pricingRows: [
      {
        treatment: "Discovery PICO Rejuvenation (Toning)",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Minimal recovery — lunchtime treatment",
      },
      {
        treatment: "Discovery PICO Resurfacing (Fractional LIOB)",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "1 to 3 days mild downtime",
      },
      {
        treatment: "Free Consultation",
        area: "Treatment plan + recovery walkthrough",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "Required before first session",
      },
    ],

    aftercareHeading: "Skincare Products That Support Pico Laser Recovery",
    expectedSideEffects: [
      "Mild redness, warmth or sunburn-like sensation in the first hours",
      "Mode-specific visible recovery: pinpoint marks (Fractional) or darkening (Spot)",
      "Mild skin tightness during the early inflammatory phase",
      "Subtle flaking over Fractional treatment sites in days 3 to 5",
    ],
    aftercareInstructions: [
      "Ceramide moisturisers twice daily — restore and maintain the skin barrier",
      "Hyaluronic acid serums — safe to use immediately after treatment",
      "EGF or peptide recovery serums — useful in the days following Fractional LIOB",
      "Medical-grade SPF50 mineral or hybrid — gentler than purely chemical SPF",
      "Skin booster injections between sessions provide deep dermal hydration that supports collagen remodelling",
    ],

    candidacyHeading:
      "What to Avoid After Pico Laser Treatment",
    goodCandidate: [
      "Maintain SPF50 every morning — UV after pico laser triggers PIH",
      "Simplify routine to cleanser, moisturiser and SPF during recovery",
      "Resume actives only after the 5 to 7 day pause window",
      "Photograph your skin monthly to track progressive results",
    ],
    pauseIf: [
      "Unprotected sun exposure on freshly treated skin",
      "Aggressive skincare layering during the recovery phase",
      "Other cosmetic procedures in same area within 2 weeks (unless discussed with doctor)",
      "Picking or scrubbing darkened spots after spot mode sessions",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser Recovery",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "How long is pico laser recovery time?",
        a: "Recovery depends on the delivery mode used. Toning mode: mild redness for 2 to 4 hours, fully normal skin the next day. Fractional LIOB mode: redness and pinpoint marks for 1 to 3 days. Spot mode: treated spots darken for 3 to 7 days before shedding. Most patients can return to work the day after any pico laser session.",
      },
      {
        q: "Can I wash my face after pico laser treatment?",
        a: "Yes, you can wash your face the next day with a gentle, non-exfoliating cleanser. Avoid hot water on the face for the first 48 hours. Use lukewarm water and pat dry gently. Avoid rubbing or using any exfoliating cloths or tools.",
      },
      {
        q: "Can I wear makeup after pico laser?",
        a: "After toning mode sessions, makeup can typically be worn the next day. After Fractional LIOB or spot mode sessions, wait until the pinpoint marks have resolved or the darkened spots are no longer actively healing, which is usually 24 to 48 hours. Mineral makeup is gentler on post-treatment skin than heavy foundation with chemical ingredients.",
      },
      {
        q: "What skincare should I avoid after pico laser?",
        a: "Avoid retinoids, AHAs, BHAs, and vitamin C serums for 5 to 7 days after each session. Avoid cleansers with physical exfoliants or sulphates. Avoid anything that generates heat on the skin including sauna, steam, and hot showers. Keep the routine simple and protective during recovery.",
      },
      {
        q: "Can I exercise after pico laser treatment?",
        a: "Light activity is fine the next day. Avoid intense exercise that causes significant sweating and facial flushing for 48 to 72 hours after each session. Heat from exercise during the early post-treatment phase can affect the early collagen remodelling process and prolong redness.",
      },
      {
        q: "Is it normal for skin to feel tight after pico laser?",
        a: "Yes. Mild tightness and sensitivity in the treated area is a normal post-treatment sensation, particularly after Fractional LIOB mode sessions. It reflects the early inflammatory phase of collagen production. A ceramide-rich moisturiser applied generously alleviates tightness and supports barrier recovery.",
      },
      {
        q: "How long should I stay out of the sun after pico laser?",
        a: "Strict sun protection is needed throughout the entire treatment course and for at least four weeks after the final session. This does not mean complete sun avoidance. It means SPF50 every morning and reapplication every two hours when outdoors, regardless of whether you have recently had a session.",
      },
      {
        q: "Can I continue my regular skincare routine during pico laser treatment?",
        a: "Yes, with adjustments. Pause retinoids and strong exfoliants for 5 to 7 days after each session. Resume them in the windows between sessions as directed by your doctor. Regular moisturiser and SPF continue throughout. Your doctor will review your current routine at consultation and advise on any modifications.",
      },
      {
        q: "What happens if I skip the aftercare steps?",
        a: "Skipping SPF is the most consequential aftercare lapse. UV exposure on skin that has just had melanin fragmented significantly increases PIH risk and undermines the results of the session. Skipping moisturiser during recovery extends the skin barrier disruption period and may cause unnecessary sensitivity. Consistent aftercare directly affects the quality of your results.",
      },
      {
        q: "Is pico laser recovery different for darker skin tones?",
        a: "For darker Fitzpatrick Types IV to V, recovery is monitored slightly more carefully because these skin tones have a higher sensitivity to PIH. Settings used are more conservative, which results in less immediate redness post-session. SPF discipline is especially important. Your doctor at Nexus Clinic KL accounts for skin tone at every session.",
      },
    ],

    ctaHeading: "Questions About Your Specific Pico Laser Session?",
    ctaBody:
      "Book a free consultation at Nexus Clinic KL and get a clear walkthrough of the session, recovery timeline, and aftercare protocol for your specific skin concern and skin type.",
    ctaPrimaryText: "Book Your Free Consultation",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Pico Laser Side Effects",
        href: "/skin/pico-laser-malaysia/side-effects/",
      },
      {
        label: "Skin Booster Treatment",
        href: "/face/skin-booster-malaysia/",
      },
    ],
  },

  "side-effects": {
    slug: "side-effects",
    metaTitle:
      "Pico Laser Side Effects Malaysia What Are the Real Risks and How to Prevent Them at Nexus Clinic KL",
    metaDescription:
      "Pico Laser is one of the safest laser options for Asian skin, but side effects like temporary redness, swelling, and darkening can occur. This doctor-written guide from Nexus Clinic KL explains what is normal, what is not, and how LCP-certified settings reduce your risk.",

    heroBadge: "Doctor-Written Safety Guide • MOH Registered Clinic",
    heroTitle: "Pico Laser Side Effects Malaysia",
    heroHighlight: "Real Risks and How They Are Managed",
    heroDescription:
      "No aesthetic procedure comes with zero risk. Anyone who tells you otherwise is either uninformed or not being straight with you. The real question with pico laser is not whether side effects exist. It is which ones are expected and normal, which are manageable, and which are rare enough that most patients never experience them.",
    heroDetails:
      "Pico laser has one of the best safety profiles of any laser treatment available in Malaysia, particularly for Fitzpatrick III to V skin. But that safety profile comes from correct settings, correct wavelength selection, and proper aftercare. This page explains what you should expect, what is normal, and what to flag to your doctor.",
    heroNote:
      "Honest information from our LCP-certified aesthetic doctors. Side effects are predictable when settings are calibrated correctly for your skin type.",
    heroImage: "/images/skin/pico-laser-malaysia/side-effects-1.webp",
    heroImageAlt: "Skin reaction assessment after Pico Laser — side effects guide at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/side-effects-2.webp",
    secondImageAlt: "LCP-certified doctor calibrating Pico Laser settings to minimise PIH risk at Nexus Clinic KL",
    heroCtaText: "Book Free Consultation",
    heroWhatsapp:
      "Hi, I'm interested in Pico Laser treatment at Nexus Clinic KL and want to discuss safety and side effects. I'd like to book a consultation.",
    heroFloatingTitle: "Lowest PIH Risk Laser",
    heroFloatingSubtitle: "Photoacoustic • Minimal Thermal Spread",

    overviewHeading:
      "Pico Laser Safety at Nexus Clinic KL at a Glance",
    overviewSubheading: "What's normal, what's manageable, what's rare",
    quickFacts: baseQuickFacts(
      "20 to 50 minutes per session depending on mode",
      "Side effects: hours to 7 days depending on mode",
      "Risk management at every session, not just the first",
      "All sessions performed by LCP-certified doctors on FDA-cleared Discovery PICO"
    ),
    overviewSummary:
      "Pico laser is one of the safest laser modalities for Malaysian Fitzpatrick III to V skin. Its photoacoustic mechanism generates significantly less heat than Q-switch or IPL, which directly reduces PIH risk — the most relevant risk for darker skin tones.",

    conditionHeading: "Expected Side Effects After Pico Laser: Normal and Temporary",
    conditionParagraphs: [
      "These side effects occur in most patients and are not a sign that anything has gone wrong. They are part of the skin's normal response to laser treatment and resolve on their own. Redness and warmth: immediately after a session, the treated area appears red and feels warm — a vascular response to the laser energy. After toning mode, redness fades within 2 to 4 hours. After Fractional LIOB, mild redness may persist for 24 to 48 hours.",
      "Temporary darkening of pigmentation: after spot or toning mode sessions targeting pigmentation, the treated areas typically appear darker in the 3 to 7 days following treatment. This is fragmented melanin rising toward the skin surface before being cleared — a positive response, not a negative one. The darkening resolves naturally without any intervention.",
      "Pinpoint marks after Fractional LIOB sessions used for acne scars and pore refinement: small red dots appear at each treatment micro-column site. These look like fine petechiae and fade within 1 to 3 days. Mild flaking over the treated sites in days 3 to 5 is normal. Mild swelling, particularly around the eyes and cheekbones, can appear within hours of a session and typically resolves within 24 to 48 hours.",
    ],

    mechanismHeading: "PIH: The Most Important Risk for Malaysian Skin",
    mechanismSubheading: "Why pico's photoacoustic mechanism matters",
    mechanismParagraphs: [
      "Post-inflammatory hyperpigmentation, or PIH, is the side effect that matters most for Malaysian Fitzpatrick III to V skin. It occurs when the skin produces excess melanin in response to the inflammation caused by laser treatment. Instead of the pigmentation clearing, it gets darker and spreads beyond the original target area.",
      "This risk is why the photoacoustic mechanism of pico laser matters so much. By generating significantly less heat than Q-switch or IPL treatments, pico laser dramatically reduces the thermal stimulation that triggers PIH. But PIH risk is never completely zero with any laser treatment on darker skin.",
      "At Nexus Clinic KL, PIH risk is managed through conservative energy settings calibrated for each patient's Fitzpatrick type, correct wavelength selection for each skin concern, and spacing sessions appropriately. If you experience unusual darkening that does not resolve within three weeks of a session, or if the darkening is spreading rather than fading, contact the clinic. These responses can be managed effectively when addressed early.",
    ],
    mechanismCallout:
      "The full breakdown of how wavelength and delivery mode affect safety for different pigmentation types on Malaysian skin is covered in our pigmentation treatment overview.",

    expectationsHeading: "Less Common Side Effects",
    expectations: [
      {
        heading: "Mild Breakout or Skin Purging",
        body: "Some patients experience a small breakout in the days following a pico laser session. This is more common after Fractional LIOB mode sessions and is a purging response as the laser-triggered inflammatory cascade briefly activates sebaceous activity. It typically resolves within 1 to 2 weeks and is not a cause for concern.",
      },
      {
        heading: "Temporary Hypopigmentation",
        body: "In rare cases, treated areas can become temporarily lighter than the surrounding skin after very high-fluence treatments. This is more common after aggressive spot mode settings. At the conservative settings used for Malaysian skin at Nexus Clinic KL, this is uncommon. It usually resolves within weeks to months as melanin production normalises.",
      },
      {
        heading: "Blistering",
        body: "Blistering is rare with pico laser at appropriate settings. When it occurs, it is most common after tattoo removal sessions and aggressive spot mode treatment on darker skin. Do not puncture or pick blisters. They should be left to resolve naturally with appropriate wound care as directed by your doctor.",
      },
      {
        heading: "Textural Changes",
        body: "Very rarely, inappropriate settings or inadequate recovery between sessions can cause temporary textural changes in the skin. This is addressed by adjusting settings and extending the interval between sessions.",
      },
    ],

    pricingHeading: "Pico Laser Pricing at Nexus Clinic KL",
    pricingSubheading: "Safety review included with every consultation",
    pricingRows: [
      {
        treatment: "Discovery PICO Rejuvenation",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "All sessions include doctor safety review",
      },
      {
        treatment: "Discovery PICO Resurfacing",
        area: "Face",
        unit: "Per session (1h 15m inc. numbing)",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Fractional LIOB; calibrated settings per skin type",
      },
      {
        treatment: "Free Consultation",
        area: "Includes contraindication review and risk assessment",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "Required before first session",
      },
    ],

    aftercareHeading: "How Nexus Clinic KL Minimises Side Effect Risk",
    expectedSideEffects: [
      "Per-session doctor assessment, not just the initial consultation",
      "LCP-certified doctors calibrate all settings personally",
      "FDA-cleared Discovery PICO device",
      "Written aftercare instructions provided at every session",
    ],
    aftercareInstructions: [
      "Tell your doctor about any history of keloid scarring, heat-triggered conditions or previous PIH",
      "Disclose all medications, especially photosensitising antibiotics or retinoids",
      "Isotretinoin within 6 months is a contraindication — postpone until clear",
      "Active skin infection, open wounds or severe inflammatory acne require resolution first",
      "Pregnancy and breastfeeding — laser treatment is postponed",
    ],

    candidacyHeading:
      "Pico Laser vs Other Lasers — Safety Comparison",
    goodCandidate: [
      "Pico vs Fractional CO2: 1-3 days mild recovery vs 5-7 days significant healing; lower PIH risk",
      "Pico vs Q-switch: photoacoustic mechanism generates less heat; meaningfully lower PIH risk on Malaysian skin",
      "Pico vs IPL: targeted wavelengths vs broad-spectrum heat; lower PIH risk in Fitzpatrick III to V",
      "Pico sits at the safer end of the laser treatment spectrum for darker skin types",
    ],
    pauseIf: [
      "Pregnant or breastfeeding",
      "Isotretinoin within the past 6 months",
      "Active skin infections, open wounds or severe active acne in treatment area",
      "Autoimmune skin conditions (treatment may still be possible with adjustments)",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser Side Effects",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "What are the most common side effects of pico laser?",
        a: "The most common side effects are temporary redness and warmth for a few hours after toning mode sessions, pinpoint marks for 1 to 3 days after Fractional LIOB sessions, and temporary darkening of treated pigmentation spots for 3 to 7 days after spot mode sessions. All are expected and resolve without intervention.",
      },
      {
        q: "Can pico laser cause hyperpigmentation?",
        a: "PIH can occur if settings are too aggressive for your skin type or if aftercare is inadequate, particularly around sun exposure. At Nexus Clinic KL, conservative settings calibrated for Malaysian Fitzpatrick III to V skin significantly reduce this risk. The photoacoustic mechanism of pico laser inherently generates less PIH risk than heat-based laser alternatives.",
      },
      {
        q: "How long do pico laser side effects last?",
        a: "Redness from toning mode: 2 to 4 hours. Pinpoint marks from Fractional LIOB: 1 to 3 days. Spot darkening from spot mode: 3 to 7 days. Mild swelling: 24 to 48 hours. These are expected temporary responses. Unusual persistence beyond these timelines should be flagged to your doctor.",
      },
      {
        q: "Is pico laser safe for Asian and darker skin tones?",
        a: "Yes, and this is where pico laser has a meaningful advantage over many laser alternatives. The photoacoustic mechanism reduces thermal stimulation to melanocytes, which is the key risk factor for PIH in darker skin. The 1064nm wavelength specifically reduces surface heat in Fitzpatrick IV to V patients. Pico laser is considered one of the safest laser modalities for Asian skin.",
      },
      {
        q: "Can pico laser cause scarring?",
        a: "Scarring from pico laser performed at appropriate settings by a qualified doctor is very rare. The non-ablative mechanism does not create open wounds on the skin surface. Risk increases if blisters are picked, if treatment is performed over active infection, or if settings are too aggressive. At Nexus Clinic KL, LCP-certified doctors perform all treatments with calibrated settings to minimise this risk.",
      },
      {
        q: "What should I do if my skin looks darker after pico laser?",
        a: "Temporary darkening of treated areas in the 3 to 7 days following spot mode or toning mode sessions is completely normal. Maintain SPF50 and avoid picking. If darkening has not resolved after three weeks, or if it appears to be spreading, contact Nexus Clinic KL for a review appointment.",
      },
      {
        q: "Can I get pico laser if I have sensitive skin?",
        a: "Yes, but protocol adjustments are made. Sensitive skin typically requires even more conservative settings and longer recovery periods between sessions. Your doctor will test a small area if there is any uncertainty about your skin's response before proceeding with a full session.",
      },
      {
        q: "Is pico laser safe if I have melasma?",
        a: "Pico laser is one of the safest laser options for melasma specifically because of its low thermal output. Toning mode at conservative settings is used. The main risk with melasma and any laser is PIH if settings are too aggressive or if sun exposure is not controlled during treatment. Conservative settings, correct spacing, and strict SPF manage this risk effectively.",
      },
      {
        q: "Can pico laser cause breakouts?",
        a: "A mild purging response in the days after Fractional LIOB sessions is possible. It is a temporary response to the laser's inflammatory cascade briefly stimulating sebaceous activity. It typically resolves within 1 to 2 weeks and does not represent a treatment complication.",
      },
      {
        q: "What are the signs that something is wrong after pico laser?",
        a: "Signs that warrant contacting the clinic include: redness or swelling that is increasing rather than decreasing after day 2, any signs of infection including warmth, pus, or crusting beyond the normal shedding pattern, blistering that is spreading, unusual pain beyond mild sensitivity, or new darkening that appears to be spreading beyond the treated area after week 2.",
      },
    ],

    ctaHeading: "Side Effects Are Predictable When Settings Are Right",
    ctaBody:
      "Side effects from pico laser, when performed by qualified doctors with appropriate settings, are predictable and temporary. If you have specific concerns about your skin type and side effect risk, book a free consultation at Nexus Clinic KL for an honest assessment before committing to any sessions.",
    ctaPrimaryText: "Book Your Free Consultation",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Pico Laser Recovery Guide",
        href: "/skin/pico-laser-malaysia/recovery/",
      },
      {
        label: "Pigmentation Treatment Overview",
        href: "/skin/pigmentation-treatment-malaysia/",
      },
    ],
  },

  price: {
    slug: "price",
    metaTitle:
      "Pico Laser Price Malaysia 2026 Cost Per Session Package Rates and What Affects the Price at Nexus Clinic KL",
    metaDescription:
      "Pico Laser pricing in Malaysia ranges from RM500 to RM2000 per session depending on skin concern and treatment area. Nexus Clinic KL offers transparent, consultation-based pricing with no hidden fees. Find out the cost for your specific concern before committing to a package.",

    heroBadge: "Transparent Pico Laser Pricing • MOH Registered Clinic",
    heroTitle: "Pico Laser Price Malaysia 2026",
    heroHighlight: "Cost Per Session and What Actually Affects the Price",
    heroDescription:
      "Pico laser pricing in Malaysia is confusing. One clinic charges RM400. Another charges RM2,000. The machine might share the same brand name on the website. The results will not be the same. Understanding what drives the price difference helps you make a better decision about where you actually spend your money.",
    heroDetails:
      "This page covers exactly what pico laser treatment costs at Nexus Clinic KL, the variables that determine price, and what you should be checking for when comparing prices between clinics. No vague ranges. Just the actual numbers and what they mean.",
    heroNote:
      "All sessions performed or supervised by LCP-certified doctors using the Discovery PICO device. Free consultation with Wood's lamp assessment included.",
    heroImage: "/images/skin/pico-laser-malaysia/price-1.webp",
    heroImageAlt:
      "Doctor reviewing a Pico Laser treatment plan and pricing with a patient at Nexus Clinic KL",
    secondImage: "/images/skin/pico-laser-malaysia/price-2.webp",
    secondImageAlt:
      "Transparent treatment menu and price list at Nexus Clinic KL",
    heroCtaText: "Book Free Consultation",
    heroWhatsapp:
      "Hi, I'd like to understand Pico Laser pricing for my skin concern at Nexus Clinic KL. I'd like to book a consultation.",
    heroFloatingTitle: "Transparent Pricing",
    heroFloatingSubtitle: "RM1,200 / Session • No Hidden Fees",

    overviewHeading: "Pico Laser Price at Nexus Clinic KL at a Glance",
    overviewSubheading: "Discovery PICO sessions by LCP-certified doctors",
    quickFacts: baseQuickFacts(
      "20 to 50 minutes per session including numbing",
      "Free consultation with Wood's lamp assessment",
      "No minimum session commitment required",
      "Discovery PICO Rejuvenation / Resurfacing at RM1,200 per session"
    ),
    overviewSummary:
      "At Nexus Clinic KL, Discovery PICO Rejuvenation and Resurfacing are both RM1,200 per session, the Brightening Laser Curas package is RM846, and tattoo removal is priced at consultation. There is no minimum session commitment — you can start with one session and decide based on how your skin responds.",

    conditionHeading: "What Makes Pico Laser Sessions More or Less Expensive",
    conditionParagraphs: [
      "If you have already searched for pico laser prices in Malaysia, you will have found a wide range. The biggest driver is the device. True picosecond devices including Discovery PICO, PicoSure, and PicoWay cost significantly more per session to operate than pseudo-pico or standard Q-switch devices. A clinic charging RM300 per session is almost certainly not using a genuine picosecond device. At Nexus Clinic KL, the Discovery PICO is a registered medical device used by LCP-certified doctors.",
      "Who performs the treatment matters too. By Malaysian law, medical-grade laser treatments must be performed by licensed medical doctors with an LCP (Letter of Credentialing and Privileging) from the Ministry of Health. Clinics that have therapists or non-doctors performing laser treatments are operating outside legal requirements. Doctor-performed sessions cost more because they come with actual medical oversight, correct setting calibration, and medical accountability.",
      "What the session includes is the third factor. A proper session includes a pre-treatment skin assessment, numbing cream application time of 20 to 30 minutes, the laser session itself, immediate post-treatment care including cooling and SPF application, and written aftercare instructions. Sessions priced below RM500 typically exclude one or more of these components.",
    ],

    mechanismHeading: "How Many Sessions Will Your Treatment Cost in Total",
    mechanismSubheading: "Per-session price is only part of the investment",
    mechanismParagraphs: [
      "Pigmentation and sunspots: 1 to 6 sessions at RM1,200 per session. Total range: RM1,200 to RM7,200 depending on type and severity. Melasma: 4 to 8 initial sessions plus maintenance. Initial course: RM4,800 to RM9,600; maintenance every 6 to 8 weeks at RM1,200 per session.",
      "Acne scars: 4 to 8 sessions at RM1,200 per session. Total range: RM4,800 to RM9,600. Large pores: 6 to 7 sessions at RM1,200 per session, approximately RM7,200 to RM8,400. Freckles: 1 to 3 sessions at RM1,200 per session, total RM1,200 to RM3,600.",
      "Brightening: 4 to 6 sessions, using Discovery PICO Rejuvenation at RM1,200 per session or the Brightening Laser Curas package at RM846. These are starting estimates. Your doctor will give you a more precise session recommendation based on your specific skin condition at consultation.",
    ],
    mechanismCallout:
      "For acne scars specifically, fractional CO2 laser resurfacing (RM1,200 to RM2,500 per session) is a strong alternative with comparable results but 5 to 7 days of downtime and higher PIH risk. Pico Laser Fractional LIOB offers comparable collagen induction with 1 to 3 days of downtime.",

    expectationsHeading: "What to Check When Comparing Prices Between Clinics",
    expectations: [
      {
        heading: "Is the device a genuine picosecond laser?",
        body: "Ask for the device brand and model. Discovery PICO, PicoSure, and PicoWay are verified true picosecond devices. Devices marketed as 'pico' that operate at longer pulse durations do not deliver the same photoacoustic mechanism or results.",
      },
      {
        heading: "Is the treatment performed by an LCP-certified doctor?",
        body: "This is a legal requirement in Malaysia for medical-grade laser treatments. Clinics using therapists or non-doctors for laser treatment are operating outside Ministry of Health requirements.",
      },
      {
        heading: "Is the quoted price for a full session or a limited area?",
        body: "Some low-priced sessions cover the nose or forehead only. Confirm whether numbing cream, post-treatment care, and aftercare instructions are included, or charged separately.",
      },
      {
        heading: "What is the clinic's policy if side effects occur?",
        body: "Check whether a follow-up is included. A genuine RM200 'pico' session almost always uses a Q-switch device, limits the area, or excludes numbing and aftercare — genuine picosecond devices cannot be operated profitably at that price point.",
      },
    ],

    pricingHeading: "Pico Laser Price Malaysia 2026 at Nexus Clinic KL",
    pricingSubheading: "Current session prices — free consultation included",
    pricingRows: [
      {
        treatment: "Discovery PICO Rejuvenation",
        area: "Face",
        unit: "Per session",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Pigmentation, melasma, sunspots, freckles, brightening",
      },
      {
        treatment: "Discovery PICO Resurfacing",
        area: "Face",
        unit: "Per session",
        normalPrice: "RM1,500",
        sellingPrice: "RM1,200",
        promoPrice: "NIL",
        packageNotes: "Acne scars and pore refinement (Fractional LIOB)",
      },
      {
        treatment: "Brightening Laser Curas",
        area: "Face",
        unit: "Per package",
        normalPrice: "RM1,398",
        sellingPrice: "RM846",
        promoPrice: "NIL",
        packageNotes: "Brightening-focused multi-step protocol",
      },
      {
        treatment: "Discovery PICO Tattoo Removal",
        area: "Body",
        unit: "Per session",
        normalPrice: "POA",
        sellingPrice: "POA",
        promoPrice: "NIL",
        packageNotes: "Priced at consultation by size and ink complexity",
      },
      {
        treatment: "Free Consultation",
        area: "Wood's lamp + skin assessment",
        unit: "Single visit",
        normalPrice: "RM0",
        sellingPrice: "RM0",
        promoPrice: "NIL",
        packageNotes: "No obligation to book sessions",
      },
    ],

    aftercareHeading: "Is Pico Laser Worth the Price vs Cheaper Alternatives",
    expectedSideEffects: [
      "Q-switch laser: RM200 to RM500 per session; works for pigmentation but higher PIH risk on Fitzpatrick III to V",
      "Q-switch needs more sessions for equivalent results and cannot treat scars needing Fractional LIOB",
      "Fractional CO2 for scars: RM1,200 to RM2,500; comparable results but 5 to 7 days downtime",
      "Pico Laser: best balance of effectiveness, safety, and recovery time for most Malaysian skin",
    ],
    aftercareInstructions: [
      "Verify the device brand and model is a genuine picosecond laser",
      "Confirm the treatment is performed by an LCP-certified doctor",
      "Check the price covers a full session, not a limited area",
      "Confirm numbing cream, post-treatment care and aftercare are included",
      "Ask about the follow-up policy if side effects occur",
    ],

    candidacyHeading: "Package Pricing and Session Commitment",
    goodCandidate: [
      "No minimum session commitment — start with one and decide based on response",
      "Consultation-based package pricing for multi-session courses",
      "Packages available for melasma management, acne scar courses and pore refinement",
      "Free consultation with a specific session count and cost estimate before any commitment",
    ],
    pauseIf: [
      "Beware sessions priced RM200 to RM400 — usually Q-switch marketed as 'pico'",
      "Beware non-doctor operators on unverified devices regardless of low price",
      "Beware quotes covering only a small area (nose or forehead only)",
      "Beware prices that exclude numbing cream and post-treatment care",
    ],

    faqHeading: "Frequently Asked Questions About Pico Laser Price in Malaysia",
    faqSubheading: "Answers from our LCP-certified doctors",
    faqs: [
      {
        q: "How much does pico laser cost per session in Malaysia?",
        a: "At Nexus Clinic KL, Discovery PICO Rejuvenation and Resurfacing sessions are priced at RM1,200 per session. The Brightening Laser Curas package is available at RM846. Tattoo removal is priced at consultation based on tattoo specifics. Across Malaysia, prices range from RM400 to RM2,500 per session depending on device quality, clinic credentials, and session scope.",
      },
      {
        q: "Why is pico laser more expensive than Q-switch laser?",
        a: "Genuine picosecond devices cost significantly more to purchase and maintain than Q-switch devices. The shorter pulse duration requires fundamentally different laser technology. The higher per-session cost reflects a real difference in fragmentation efficiency, results per session, and PIH risk profile, not just a premium label.",
      },
      {
        q: "How many sessions do I need and what will it cost in total?",
        a: "Session count varies by concern: 1 to 3 for freckles, 3 to 6 for general pigmentation, 4 to 8 for melasma or acne scars, 6 to 7 for pore refinement. At RM1,200 per session, total treatment costs range from approximately RM1,200 to RM9,600 depending on concern and severity. Your doctor provides a specific estimate at consultation.",
      },
      {
        q: "Is there a minimum number of sessions I have to commit to?",
        a: "No. At Nexus Clinic KL, there is no minimum session commitment. You can begin with a single session and decide on continuation based on how your skin responds. Your doctor will make a session recommendation at consultation, but you are not obligated to commit to the full course upfront.",
      },
      {
        q: "Does the consultation cost anything at Nexus Clinic KL?",
        a: "No. Consultations are free of charge. This includes a Wood's lamp skin assessment, skin type evaluation, and a clinical treatment recommendation. There is no obligation to book sessions following a consultation.",
      },
      {
        q: "Are package discounts available for multiple pico laser sessions?",
        a: "Yes. Package pricing for multi-session treatment courses is available at Nexus Clinic KL. Package rates are discussed at consultation based on the specific number of sessions recommended for your concern. Packages are offered for melasma management, acne scar courses, and pore refinement.",
      },
      {
        q: "Is the cheapest pico laser in Malaysia still worth trying?",
        a: "Price alone is not a useful guide. A RM400 pico laser session from a non-doctor operator on an unverified device carries real risks regardless of the low price. The key questions are: Is the device genuinely a picosecond device? Is the treatment performed by an LCP-certified doctor? Are the settings calibrated for your skin type? These factors determine results and safety far more than the headline price.",
      },
      {
        q: "Why do some clinics charge RM200 for a session called pico laser?",
        a: "Sessions priced at RM200 to RM400 described as pico laser are typically using Q-switch devices marketed with pico terminology, or are limiting the session to a very small area, or are not including numbing cream and post-treatment care. Genuine picosecond devices cannot be operated profitably at these price points.",
      },
      {
        q: "Does pico laser price vary based on the skin concern?",
        a: "At Nexus Clinic KL, Discovery PICO Rejuvenation and Resurfacing are both priced at RM1,200 per session regardless of whether they are used for pigmentation or acne scars. The concern determines which delivery mode is used, not the price. Tattoo removal is the exception, where price is determined by tattoo size and colour complexity.",
      },
      {
        q: "Is pico laser for skin brightening cheaper than for acne scars?",
        a: "At Nexus Clinic KL, the Brightening Laser Curas package at RM846 is available as a more accessible entry point for brightening-focused treatment. For full Discovery PICO sessions, Rejuvenation and Resurfacing are both priced at RM1,200 per session regardless of the concern being treated.",
      },
    ],

    ctaHeading: "Get a Transparent Cost Estimate Before You Decide",
    ctaBody:
      "The best way to understand what pico laser will cost for your specific concern is to speak with a doctor directly. Book a free consultation at Nexus Clinic KL and get a transparent session recommendation and cost estimate before making any decision.",
    ctaPrimaryText: "Book Your Free Consultation",
    relatedLinks: [
      { label: "Pico Laser Hub", href: "/skin/pico-laser-malaysia/" },
      {
        label: "Pico Laser for Pigmentation",
        href: "/skin/pico-laser-malaysia/pigmentation/",
      },
      {
        label: "Fractional Laser Resurfacing",
        href: "/fraqtional-laser-resurfacing/",
      },
    ],
  },
};

export const picoLaserConditionSlugs = Object.keys(picoLaserConditions);
