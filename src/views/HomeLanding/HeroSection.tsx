import Image from "next/image";
const HeroSection = ({ t }: { t: (key: string) => string }) => {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">
        <Image
          src="/images/hero_image.webp"
          alt="Nexus Clinic Aesthetic Treatment"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="object-cover object-[65%_center] md:object-center"
        />
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
        <div className="w-full p-4 lg:p-12 rounded-sm bg-gradient-to-r from-white/90 via-[0_8px_40px_rgba(0,0,0,0.12)] to-transparent">
          <div className="max-w-xl">
            <p className="text-sm tracking-wide text-green mb-4 uppercase">
              {t("hero.subtitle")}
            </p>
            <h1 className="text-3xl lg:text-5xl font-georgia text-brown leading-tight mb-6">
              {t("hero.heading")}
            </h1>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/"
                className="px-6 py-3 rounded-full bg-green text-white text-sm font-medium hover:bg-green/90 transition shadow-md text-center"
              >
                {t("hero.cta1")}
              </a>

              <a
                href="/consultation/"
                className="px-6 py-3 rounded-full border border-gray-400 text-gray-700 text-sm font-medium hover:bg-green/10 transition text-center"
              >
                {t("hero.cta2")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (desktop only) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-light">
          {t("hero.scroll")}
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-light flex justify-center pt-2" >
          <div className="w-1 h-2 rounded-full bg-light"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;