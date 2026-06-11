import Script from "next/script";
import { doctors } from "@/src/data/doctorProfiles";

const BASE = "https://www.nexus-clinic.com";

const HomePageSchema = () => {
  const organization = {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Nexus Clinic",
    url: BASE,
    logo: `${BASE}/logo.png`,
    sameAs: [
      "https://www.instagram.com/nexusclinic.my/",
      "https://www.facebook.com/nexusclinic.my/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+60167745699",
      contactType: "customer service",
      areaServed: "MY",
      availableLanguage: ["English", "Malay"],
    },
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${BASE}/#localbusiness`,
    name: "Nexus Clinic",
    image: `${BASE}/logo.png`,
    url: BASE,
    telephone: "+60167745699",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "LG 10, Lower Ground Floor, Wisma UOA 2, Jalan Pinang",
      addressLocality: "Kuala Lumpur",
      postalCode: "50450",
      addressRegion: "Federal Territory of Kuala Lumpur",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.1577,
      longitude: 101.7117,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      "Kuala Lumpur",
      "KLCC",
      "Bukit Bintang",
      "Pavilion",
      "TRX",
      "Bangsar",
      "Mont Kiara",
      "Ampang",
      "Damansara Heights",
      "Petaling Jaya",
      "Cheras",
      "Setapak",
    ],
  };

  const physicians = doctors.map((doc) => ({
    "@type": "Physician",
    "@id": `${BASE}/doctors/${doc.slug}/#physician`,
    name: doc.name,
    url: `${BASE}/doctors/${doc.slug}/`,
    image: `${BASE}${doc.photo}`,
    medicalSpecialty: doc.specialisation,
    description: doc.bio,
    worksFor: { "@id": `${BASE}/#organization` },
    affiliation: { "@id": `${BASE}/#localbusiness` },
  }));

  const persons = doctors.map((doc) => ({
    "@type": "Person",
    "@id": `${BASE}/doctors/${doc.slug}/#person`,
    name: doc.name,
    url: `${BASE}/doctors/${doc.slug}/`,
    image: `${BASE}${doc.photo}`,
    jobTitle: doc.title,
    description: doc.bio,
    worksFor: { "@id": `${BASE}/#organization` },
  }));

  const medicalProcedures = [
    {
      "@type": "MedicalProcedure",
      "@id": `${BASE}/face/#procedure`,
      name: "Facial Aesthetic Treatments",
      url: `${BASE}/face/`,
      procedureType: "http://schema.org/NoninvasiveProcedure",
      description:
        "Botox, dermal fillers, Profhilo, skin boosters and facial contouring designed to enhance facial harmony with natural-looking results.",
    },
    {
      "@type": "MedicalProcedure",
      "@id": `${BASE}/skin/#procedure`,
      name: "Skin Rejuvenation Treatments",
      url: `${BASE}/skin/`,
      procedureType: "http://schema.org/NoninvasiveProcedure",
      description:
        "Pigmentation, acne scar, melasma and anti-ageing treatments using Pico Laser, Sylfirm X and medical-grade protocols.",
    },
    {
      "@type": "MedicalProcedure",
      "@id": `${BASE}/weight-loss/#procedure`,
      name: "Medical Weight Loss Programmes",
      url: `${BASE}/weight-loss/`,
      procedureType: "http://schema.org/TherapeuticProcedure",
      description:
        "Doctor-led weight loss programmes including Mounjaro, Wegovy, Saxenda and Duromine with personalised clinical support.",
    },
    {
      "@type": "MedicalProcedure",
      "@id": `${BASE}/hair/#procedure`,
      name: "Hair Restoration",
      url: `${BASE}/hair/`,
      procedureType: "http://schema.org/NoninvasiveProcedure",
      description:
        "Evidence-based hair restoration programmes designed to support healthier, fuller-looking hair.",
    },
  ];

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${BASE}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE,
      },
    ],
  };

  const reviews = [
    {
      "@type": "Review",
      "@id": `${BASE}/#review-1`,
      reviewBody:
        "I loved how natural my results looked. The team at Nexus Clinic made me feel comfortable from the start, and everything was explained so clearly.",
      author: { "@type": "Person", name: "Sarah Chen" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      itemReviewed: { "@id": `${BASE}/#localbusiness` },
    },
    {
      "@type": "Review",
      "@id": `${BASE}/#review-2`,
      reviewBody:
        "My skin looks fresher, smoother, and healthier. Nexus Clinic recommended the right treatment for me without pushing anything extra.",
      author: { "@type": "Person", name: "Michael Tan" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      itemReviewed: { "@id": `${BASE}/#localbusiness` },
    },
    {
      "@type": "Review",
      "@id": `${BASE}/#review-3`,
      reviewBody:
        "I wanted subtle improvement, not something dramatic. Nexus Clinic understood exactly what I meant, and I am so happy with the result.",
      author: { "@type": "Person", name: "Emily Wong" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      itemReviewed: { "@id": `${BASE}/#localbusiness` },
    },
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      localBusiness,
      ...physicians,
      ...persons,
      ...medicalProcedures,
      breadcrumb,
      ...reviews,
    ],
  };

  return (
    <Script
      id="homepage-graph-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
};

export default HomePageSchema;
