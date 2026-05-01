import React from "react";
import {
  Sparkles,
  Heart,
  Award,
  Shield,
} from "lucide-react";
import Image from "next/image";
// Import at the top of your component file
import "@/src/lib/animations.css";

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/50 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
  >
    {children}
  </div>
);

const WhyChooseSection = ({ t }: { t: (key: string) => string }) => {
  const features = [
    {
      icon: Shield,
      title: t("whyChoose.features.moh.title"),
      desc: t("whyChoose.features.moh.desc"),
    },
    {
      icon: Award,
      title: t("whyChoose.features.doctor.title"),
      desc: t("whyChoose.features.doctor.desc"),
    },
    {
      icon: Heart,
      title: t("whyChoose.features.personalized.title"),
      desc: t("whyChoose.features.personalized.desc"),
    },
    {
      icon: Sparkles,
      title: t("whyChoose.features.premium.title"),
      desc: t("whyChoose.features.premium.desc"),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image Composition */}
          <div className="relative animate-fade-in-left">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl lg:rounded-[40px] overflow-hidden transition-transform duration-300 hover:scale-102">
                <Image
                  src="/images/treatment/face-filler.webp"
                  alt="Clinic Interior"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Experience Card */}
              <GlassCard className="absolute -bottom-8 -right-8 lg:-right-12 p-6 animate-float">
                <div className="text-center">
                  <span className="text-5xl font-light font-georgia text-wine">
                    {t("whyChoose.yearsValue")}
                  </span>
                  <p className="text-sm mt-2 text-taupe">
                    {t("whyChoose.yearsLabel1")}
                    <br />
                    {t("whyChoose.yearsLabel2")}
                  </p>
                </div>
              </GlassCard>

              {/* Decorative */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-wine opacity-30 animate-spin-slow" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-right">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
              {t("whyChoose.subtitle")}
            </span>
            <h2 className="text-3xl lg:text-5xl mb-6 font-georgia text-brown">
              {t("whyChoose.title")}{" "}
              <span className="text-wine">{t("whyChoose.titleHighlight")}</span>
            </h2>
            <p className="text-lg mb-12 text-taupe leading-relaxed animate-fade-in-up">
              {t("whyChoose.description")}
            </p>

            {/* Feature Grid - stagger-children handles delays automatically */}
            <div className="grid sm:grid-cols-2 gap-6 stagger-children">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <feature.icon size={28} className="text-wine mb-4" />
                  <h3 className="font-semibold mb-2 text-brown">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-taupe">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;