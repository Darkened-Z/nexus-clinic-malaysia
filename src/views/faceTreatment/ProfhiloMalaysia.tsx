"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Syringe,
  Heart,
  Shield,
  Sparkles,
  Droplet,
  Gem,
  Zap,
  Eye,
  ArrowUp,
  Droplets,
  Calendar,
  TrendingUp,
  Activity,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

interface ProfhiloMalaysiaProps {
  locale?: string;
}

// Map JSON icon strings to lucide-react components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Syringe,
  Activity,
  Clock,
  Heart,
  Shield,
  Sparkles,
  Droplet,
  Gem,
  Zap,
  Eye,
  ArrowUp,
  Droplets,
  Calendar,
  TrendingUp,
};

const getIcon = (name: string) => iconMap[name] || Activity;

export default function ProfhiloMalaysia({ locale = fallbackLng }: ProfhiloMalaysiaProps) {
  const { t } = useTranslation(locale, "face/profhiloMalaysia");

  const hero = t("hero", { returnObjects: true }) as any;
  const glance = t("treatmentAtGlance", { returnObjects: true }) as any;
  const whatIs = t("whatIs", { returnObjects: true }) as any;
  const helpsImprove = t("helpsImprove", { returnObjects: true }) as any;
  const treatmentAreas = t("treatmentAreas", { returnObjects: true }) as any;
  const comparison = t("comparison", { returnObjects: true }) as any;
  const doctorLed = t("doctorLed", { returnObjects: true }) as any;
  const procedure = t("procedure", { returnObjects: true }) as any;
  const pricing = t("pricing", { returnObjects: true }) as any;
  const benefitsLimitations = t("benefitsLimitations", { returnObjects: true }) as any;
  const sideEffectsAftercare = t("sideEffectsAftercare", { returnObjects: true }) as any;
  const faqData = t("faq", { returnObjects: true }) as Array<{ q: string; a: string }>;
  const finalCta = t("finalCta", { returnObjects: true }) as any;

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge={hero?.badge}
        title={hero?.title}
        highlight={hero?.highlight}
        description={hero?.description}
        details={hero?.details}
        note={hero?.note}
        image="/images/face/Profhilo/Profhilo Malaysia.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Profhilo Treatment"
        ctaText={hero?.ctaText}
        ctaLink="/contact-us"
        whatsappMessage={hero?.whatsappMessage}
        floatingTitle={hero?.floatingTitle}
        floatingSubtitle={hero?.floatingSubtitle}
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Treatment at a Glance Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">{glance?.title}</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">{glance?.subtitle}</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(glance?.items ?? []).map((item: any, idx: number) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={idx} className="bg-light p-5 rounded-xl border border-taupe/10 shadow-sm">
                  <Icon className="w-8 h-8 text-wine mb-3" />
                  <p className="font-inter text-sm text-taupe">{item.label}</p>
                  <p className="font-georgia text-md text-brown font-semibold">{item.value}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 rounded-2xl p-6 border border-wine/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(glance?.protocolInfo ?? []).map((item: any, idx: number) => (
                <div key={idx}>
                  <p className="font-inter text-sm text-taupe">{item.label}</p>
                  <p className="font-georgia text-brown font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us">
              {glance?.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is Profhilo Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                {whatIs?.title}<span className="text-wine italic">{whatIs?.titleHighlight}</span>
              </h2>
              {(whatIs?.paragraphs ?? []).map((para: string, idx: number) => (
                <p key={idx} className="text-brown font-inter">{para}</p>
              ))}
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">&ldquo;{whatIs?.quote}&rdquo;</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Profhilo/Profhilo Treatments.webp"
                  alt={whatIs?.imageAlt || "Profhilo skin remodelling treatment"}
                  fill
                  className="object-cover"
                />
              </div>
              <Link className="mt-6 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                href="/contact-us">
                {whatIs?.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Profhilo Helps Improve Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{helpsImprove?.title}</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">{helpsImprove?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {(helpsImprove?.items ?? []).map((item: any, idx: number) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl shadow-md border border-taupe/10 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-wine" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-3">{item.title}</h3>
                  <p className="text-taupe font-inter">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us">
              {helpsImprove?.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Areas Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{treatmentAreas?.title}</h2>
            <p className="text-taupe font-inter">{treatmentAreas?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(treatmentAreas?.items ?? []).map((area: any, idx: number) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/20 text-center hover:shadow-md transition-shadow">
                <Droplet className="w-10 h-10 text-wine mx-auto mb-3" />
                <h3 className="font-georgia text-lg text-brown font-semibold mb-2">{area.area}</h3>
                <p className="text-taupe font-inter text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Profhilo vs Filler Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{comparison?.title}</h2>
            <p className="text-taupe font-inter">{comparison?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {(comparison?.items ?? []).map((item: any, idx: number) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`rounded-2xl p-6 ${idx === 0 ? "bg-wine/5 border border-wine/20" : "bg-rose/5 border border-rose/20"} hover:shadow-xl transition-shadow`}
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">{item.type}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-inter font-semibold text-brown">{comparison?.concernsLabel}</span>
                    <p className="text-taupe mt-1">{item.concerns}</p>
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-brown">{comparison?.actionLabel}</span>
                    <p className="text-taupe mt-1">{item.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 p-5 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter">{comparison?.footer}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Nexus Clinic Difference Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Profhilo/doctor-led.jpeg"
                  alt={doctorLed?.imageAlt || "Doctor-led Profhilo treatment at Nexus Clinic KL"}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="space-y-6 order-1 md:order-2">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                {doctorLed?.title}<span className="text-wine italic">{doctorLed?.titleHighlight}</span>{doctorLed?.titleSuffix}
              </h2>
              <p className="text-brown font-inter">{doctorLed?.intro}</p>
              <p className="text-brown font-inter font-semibold">{doctorLed?.subheading}</p>
              <ul className="space-y-2">
                {(doctorLed?.points ?? []).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brown font-inter text-sm italic">{doctorLed?.footnote}</p>
              <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
                href="/contact-us">
                {doctorLed?.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{procedure?.title}</h2>
            <p className="text-taupe font-inter">{procedure?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {(procedure?.steps ?? []).map((item: any, idx: number) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-md text-brown mb-2 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2"
              href="/contact-us">
              {procedure?.ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">{procedure?.ctaSubtitle}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <TableForPages
            columns={[
              { key: "treatment", header: pricing?.columns?.treatment ?? "Treatment" },
              { key: "volume", header: pricing?.columns?.volume ?? "Protocol" },
              { key: "price", header: pricing?.columns?.price ?? "Price Range (2026)" },
            ]}
            data={(pricing?.tiers ?? []).map((tier: any) => ({
              treatment: tier.treatment,
              volume: tier.volume,
              price: tier.price,
            }))}
            title={pricing?.title}
            subtitle={pricing?.subtitle}
            variant="compact"
            fadeInUp={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="font-georgia text-xl text-brown mb-3">{pricing?.factorsTitle}</h3>
            <ul className="space-y-2">
              {(pricing?.factors ?? []).map((factor: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <span className="text-wine">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">{pricing?.footerNote}</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-6">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us">
              {pricing?.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits & Limitations Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Gem className="w-5 h-5 text-wine" />
                {benefitsLimitations?.benefitsTitle}
              </h3>
              <ul className="space-y-2">
                {(benefitsLimitations?.benefits ?? []).map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                {benefitsLimitations?.limitationsTitle}
              </h3>
              <ul className="space-y-2">
                {(benefitsLimitations?.limitations ?? []).map((limitation: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <span className="text-wine text-lg">⚠️</span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">{benefitsLimitations?.footer}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects & Aftercare Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{sideEffectsAftercare?.title}</h2>
            <p className="text-taupe font-inter">{sideEffectsAftercare?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                {sideEffectsAftercare?.commonTitle}
              </h3>
              <ul className="space-y-2">
                {(sideEffectsAftercare?.common ?? []).map((effect: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                {sideEffectsAftercare?.rareTitle}
              </h3>
              <ul className="space-y-2">
                {(sideEffectsAftercare?.rare ?? []).map((effect: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <span className="text-wine text-lg">⚠️</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
              {sideEffectsAftercare?.rareNote ? (
                <p className="text-taupe font-inter text-xs mt-3 italic">{sideEffectsAftercare.rareNote}</p>
              ) : null}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">{sideEffectsAftercare?.aftercareTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {(sideEffectsAftercare?.aftercare ?? []).map((instruction: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">{sideEffectsAftercare?.aftercareNote}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema data={faqData ?? []} />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-3xl md:text-5xl text-light">{finalCta?.title}</h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">{finalCta?.description}</p>
            <p className="text-cream/90 font-inter">{finalCta?.subDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {finalCta?.ctaText}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp message={finalCta?.whatsappMessage} variant="light" />
            </div>
            <p className="text-cream/80 font-inter text-sm">{finalCta?.footer}</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
