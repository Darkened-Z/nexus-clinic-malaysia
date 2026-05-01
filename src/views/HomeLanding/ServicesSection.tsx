import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ServicesSection = ({ t }: { t: (key: string) => string }) => {
  const services = [
    {
      title: t("services.items.facial.title"),
      subtitle: t("services.items.facial.subtitle"),
      description: t("services.items.facial.description"),
      image: "/images/treatment/facial.webp",
      span: "lg:col-span-2 lg:row-span-2",
      link: "/face/",
    },
    {
      title: t("services.items.weightLoss.title"),
      subtitle: t("services.items.weightLoss.subtitle"),
      description: t("services.items.weightLoss.description"),
      image: "/images/treatment/weight-loss.webp",
      span: "",
      link: "/weight-loss/",
    },
    {
      title: t("services.items.skin.title"),
      subtitle: t("services.items.skin.subtitle"),
      description: t("services.items.skin.description"),
      image: "/images/treatment/face-scan.webp",
      span: "",
      link: "/skin/",
    },
    {
      title: t("services.items.hair.title"),
      subtitle: t("services.items.hair.subtitle"),
      description: t("services.items.hair.description"),
      image: "/images/treatment/hair-restoration.webp",
      span: "lg:col-span-2",
      link: "/hair/",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="animate-fade-in-up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
                {t("services.subtitle")}
              </span>
              <h2 className="text-3xl lg:text-5xl font-georgia text-brown">
                {t("services.title")} <br className="hidden lg:block" />
                <span className="text-wine">{t("services.titleHighlight")}</span>
              </h2>
            </div>
            <p className="max-w-md mt-6 lg:mt-0 text-taupe">
              {t("services.description")}
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-6 stagger-children">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${service.span}`}
              style={{
                minHeight: service.span.includes("row-span-2")
                  ? "500px"
                  : "250px",
              }}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/40 to-transparent transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <span className="text-xs tracking-widest text-white/70 mb-2">
                  {service.subtitle}
                </span>
                <h3 className="text-xl lg:text-2xl text-white mb-2 font-georgia">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 max-w-xs">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="flex items-center gap-2 text-white text-sm group-hover:gap-4 transition-all duration-300"
                >
                  <span>{t("services.explore")}</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;