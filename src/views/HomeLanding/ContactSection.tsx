import {
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import SocialIcons from "@/src/components/SocialIcons";

const ContactSection = ({ t }: { t: (key: string) => string }) => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/nexus-clinic.jpeg')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green to-green/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div className="animate-fade-in-up">
            <span className="text-sm tracking-widest uppercase mb-4 block text-light/80">
              {t("contact.subtitle")}
            </span>

            <h2 className="text-3xl lg:text-5xl text-light mb-8 font-georgia">
              {t("contact.title")}{" "}
              <span className="text-light/80 italic">{t("contact.titleHighlight")}</span>
            </h2>

            <p className="text-light mb-8 leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="space-y-6 mb-12 stagger-children">
              {[
                { icon: MapPin, text: t("contact.address") },
                { icon: Phone, text: t("contact.phone") },
                { icon: Clock, text: t("contact.hours") },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-wine group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <SocialIcons iconSize={30} />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl mb-8 font-georgia text-brown">
                {t("contact.formTitle")}
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={t("contact.placeholderName")}
                    className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine focus:ring-2 focus:ring-wine/20 text-brown transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder={t("contact.placeholderEmail")}
                    className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine focus:ring-2 focus:ring-wine/20 text-brown transition-all duration-300"
                  />
                </div>

                <input
                  type="tel"
                  placeholder={t("contact.placeholderPhone")}
                  className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine focus:ring-2 focus:ring-wine/20 text-brown transition-all duration-300"
                />

                <select className="w-full px-5 py-4 rounded-xl border border-cream bg-cream text-taupe focus:outline-none focus:border-wine focus:ring-2 focus:ring-wine/20 transition-all duration-300">
                  <option>{t("contact.selectTreatment")}</option>
                  <option>{t("contact.optionFacial")}</option>
                  <option>{t("contact.optionWeightLoss")}</option>
                  <option>{t("contact.optionSkin")}</option>
                  <option>{t("contact.optionHair")}</option>
                </select>

                <textarea
                  rows={4}
                  placeholder={t("contact.placeholderMessage")}
                  className="w-full px-5 py-4 rounded-xl border border-cream bg-cream resize-none text-brown focus:outline-none focus:border-wine focus:ring-2 focus:ring-wine/20 transition-all duration-300"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-medium tracking-wide bg-wine hover:bg-rose transition-all duration-300 hover:scale-102 active:scale-98"
                >
                  {t("contact.submitButton")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;