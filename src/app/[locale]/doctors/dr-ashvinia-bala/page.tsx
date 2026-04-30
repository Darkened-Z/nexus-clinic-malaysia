export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, ArrowLeft, Star, Stethoscope, GraduationCap } from "lucide-react";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com";

export const metadata: Metadata = {
  title: "Dr. Ashvinia Bala – Aesthetic Medical Doctor | Nexus Clinic KL",
  description:
    "Meet Dr. Ashvinia Bala, Aesthetic Medical Doctor at Nexus Clinic Kuala Lumpur. Specialist in general medicine and aesthetic treatments with a wellness-first approach.",
  alternates: {
    canonical: `${baseurl}/doctors/dr-ashvinia-bala/`,
  },
};

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function DrAshviniaBalaPage() {
  return (
    <main className="bg-light min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-2 text-wine text-sm font-semibold mb-10 hover:text-brown transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Our Doctors
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-taupe/10 overflow-hidden">
          {/* Hero */}
          <div className="relative w-full h-72 md:h-96 bg-cream">
            <Image
              src="/images/main/Dr-Ashvinia-bala.webp"
              alt="Portrait of Dr. Ashvinia Bala"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="font-georgia text-cream text-3xl md:text-4xl leading-tight">
                Dr. Ashvinia Bala
              </h1>
              <p className="text-cream/80 text-sm mt-1 tracking-wide">
                Aesthetic Medical Doctor | Advocate for Wellness &amp; Sustainability
              </p>
              <div className="flex items-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-wine text-wine" />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Specialisation */}
            <div className="flex items-center gap-3">
              <Stethoscope className="w-5 h-5 text-wine shrink-0" />
              <span className="text-rose font-semibold">
                General Medicine &amp; Aesthetic Treatments
              </span>
            </div>

            {/* Bio */}
            <p className="text-taupe leading-relaxed text-base">
              Dr. Ashvinia Bala is a dedicated Aesthetic Medical Doctor based in Kuala Lumpur,
              Malaysia, affiliated with Nexus Clinic. Known for her meticulous approach, she
              tailors diagnostics and treatment plans to help individuals look and feel their best.
              Passionate about healthy living, environmental sustainability, baking cakes, and
              caring for dogs.
            </p>

            {/* Qualifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-wine" />
                <h2 className="font-georgia text-brown text-xl">Qualifications</h2>
              </div>
              <ul className="space-y-2">
                {[
                  "Expertise in General Medicine",
                  "Specialized in Aesthetic Treatments",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-taupe text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2 shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social + CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-taupe/20">
              <a
                href="https://instagram.com/ashvinia_bala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dr. Ashvinia Bala on Instagram"
                className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-taupe hover:text-wine hover:bg-wine/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/dr-ashvinia-bala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dr. Ashvinia Bala on LinkedIn"
                className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-taupe hover:text-wine hover:bg-wine/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/60167745699"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 bg-wine hover:bg-brown text-cream text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
