export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import { faceTreatmentsMetadata } from "@/src/config/faceTreatments";
import { Metadata } from "next";
import { faceSchema } from "@/src/lib/loadSchema";
import Script from "next/script";
import { getTranslation } from "@/src/i18n/server";

// Slug -> locale JSON namespace mapping for SEO localization.
// Only slugs listed here will attempt to load localized SEO; others fall back to faceTreatmentsMetadata.
const localizedSeoNamespaces: Record<string, string> = {
  "newest-malaysia": "newestMalaysia",
  "profhilo-malaysia": "profhiloMalaysia",
};

import DermalFiller from "@/src/views/faceTreatment/DermalFiller";
import LipFiller from "@/src/views/faceTreatment/LipFiller";
import ChinFiller from "@/src/views/faceTreatment/ChinFiller";
import JawlineFiller from "@/src/views/faceTreatment/JawlineFiller";
import MasseterBotox from "@/src/views/faceTreatment/MasseterBotox";
import NoseThreadLift from "@/src/views/faceTreatment/NoseThreadLift";
import SkinBooster from "@/src/views/faceTreatment/SkinBooster";
import NoseFiller from "@/src/views/faceTreatment/NoseFiller";
import CheekFiller from "@/src/views/faceTreatment/CheekFiller";
import TearTroughFiller from "@/src/views/faceTreatment/TearTroughFiller";
import UnderEyeFiller from "@/src/views/faceTreatment/UnderEyeFiller";
import NewestMalaysia from "@/src/views/faceTreatment/NewestMalaysia";
import ProfhiloMalaysia from "@/src/views/faceTreatment/ProfhiloMalaysia";
import SculptraMalaysia from "@/src/views/faceTreatment/SculptraMalaysia";
import KarismaMalaysia from "@/src/views/faceTreatment/KarismaMalaysia";
import PlinestMalaysia from "@/src/views/faceTreatment/PlinestMalaysia";
import RejuranMalaysia from "@/src/views/faceTreatment/RejuranMalaysia";
import { notFound } from "next/navigation";

const components = {
  DermalFiller,
  LipFiller,
  ChinFiller,
  JawlineFiller,
  MasseterBotox,
  NoseThreadLift,
  SkinBooster,
  NoseFiller,
  CheekFiller,
  TearTroughFiller,
  UnderEyeFiller,
  NewestMalaysia,
  ProfhiloMalaysia,
  SculptraMalaysia,
  KarismaMalaysia,
  PlinestMalaysia,
  RejuranMalaysia,
  
} as const;

export async function generateStaticParams() {
  const paths = [];
  for (const locale of languages) {
    for (const treatment of faceTreatmentsMetadata) {
      paths.push({ locale, slug: treatment.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const treatment = faceTreatmentsMetadata.find(t => t.slug === slug);

  if (!treatment) {
    return {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const baseUrl = process.env.BASE_URL || "https://www.nexus-clinic.com";
  const url = locale === 'en' 
    ? `${baseUrl}/face/${slug}` 
    : `${baseUrl}/${locale}/face/${slug}`;

  let title = treatment.title;
  let description = treatment.description;

  const ns = localizedSeoNamespaces[slug];
  if (ns) {
    try {
      const { t } = await getTranslation(locale, `face/${ns}`);
      const seo = t("seo", { returnObjects: true }) as { title?: string; description?: string } | undefined;
      if (seo?.title) title = seo.title;
      if (seo?.description) description = seo.description;
    } catch {
      // Fall back to default English metadata from faceTreatmentsMetadata
    }
  }

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Nexus Clinic',
    },
  };
}

export default async function FaceTreatmentPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;

  const schema = faceSchema(slug);
  if (!schema) notFound();

  const treatment = faceTreatmentsMetadata.find(t => t.slug === slug);
  if (!treatment) notFound();

  const Component = components[treatment.component as keyof typeof components];
  if (!Component) notFound();
  return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Component locale={locale} />
    </>
  );
}