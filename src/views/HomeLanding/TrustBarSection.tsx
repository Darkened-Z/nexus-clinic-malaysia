"use client";
import { Award, Stethoscope, MapPin, Sparkles } from "lucide-react";

const icons = [Award, Stethoscope, MapPin, Sparkles];

const TrustBarSection = ({ t }: { t: any }) => {
  const badges = (t("hero.badges", { returnObjects: true }) as unknown as string[]) || [];

  if (!badges.length) return null;

  return (
    <section className="bg-white border-b border-taupe/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 lg:py-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {badges.map((badge, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <li
                key={badge}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-wine" />
                </div>
                <span className="text-sm lg:text-base font-medium text-brown">
                  {badge}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TrustBarSection;
