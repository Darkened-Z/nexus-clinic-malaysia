"use client";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import HeroSection from "@/src/views/HomeLanding/HeroSection";
import TrustBarSection from "@/src/views/HomeLanding/TrustBarSection";
import WhyChooseSection from "@/src/views/HomeLanding/WhyChooseSection";
import ServicesSection from "@/src/views/HomeLanding/ServicesSection";
import MedicalTeamSection from "@/src/views/HomeLanding/MedicalTeamSection";
import ApproachSection from "@/src/views/HomeLanding/ApproachSection";
import TestimonialsSection from "@/src/views/HomeLanding/TestimonialsSection";
import GoogleReviews from "@/src/views/HomeLanding/GoogleReviews";
import ServingAreasSection from "@/src/views/HomeLanding/ServingAreasSection";
import ContactSection from "@/src/views/HomeLanding/ContactSection";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import WhyChooseFinalSection from "@/src/views/HomeLanding/WhyChooseFinalSection";
import HomePageSchema from "@/src/views/HomeLanding/HomePageSchema";
import "@/src/lib/animations.css";

export default function HomePageNexus({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "home");
  const faqData = t("faq.items", { returnObjects: true }) as Array<{
    q: string;
    a: string;
  }>;
  const faqHeading = `${t("faq.title")} ${t("faq.titleHighlight")}`;

  return (
    <div className="min-h-screen overflow-hidden bg-cream font-inter">
      <HomePageSchema />
      <HeroSection t={t} />
      <TrustBarSection t={t} />
      <WhyChooseSection t={t} />
      <ServicesSection t={t} />
      <MedicalTeamSection t={t} />
      <ApproachSection t={t} />
      <TestimonialsSection t={t} />
      <GoogleReviews />
      <ServingAreasSection t={t} />
      <ContactSection t={t} />
      <FAQWithSchema data={faqData} title={faqHeading} />
      <WhyChooseFinalSection t={t} />
    </div>
  );
}
