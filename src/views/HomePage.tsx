"use client";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import HeroSection from '@/src/views/HomeLanding/HeroSection'
import WhyChooseSection from "@/src/views/HomeLanding/WhyChooseSection";
import ServicesSection from "@/src/views/HomeLanding/ServicesSection";
import TestimonialsSection from "@/src/views/HomeLanding/TestimonialsSection";
import GoogleReviews from "@/src/views/HomeLanding/GoogleReviews";
import ContactSection from "@/src/views/HomeLanding/ContactSection";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import "@/src/lib/animations.css";

export default function HomePageNexus({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "home");
    const faqData = t("faq.items", { returnObjects: true }) as Array<{q: string; a: string}>;

  return (
    <div className="min-h-screen overflow-hidden bg-cream font-inter">
      <HeroSection t={t} />
      <WhyChooseSection t={t} />
      <ServicesSection t={t} />
      <TestimonialsSection t={t} />
      <GoogleReviews />
      <ContactSection t={t} />
      <FAQWithSchema data={faqData} />
    </div>
  );
}