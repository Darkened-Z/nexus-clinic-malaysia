export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, ArrowLeft, Star, Stethoscope, GraduationCap } from "lucide-react";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com";

export const metadata: Metadata = {
  title: "Dr. Preetha Nair – Aesthetic Medical Doctor | Nexus Clinic KL",
  description:
    "Meet Dr. Preetha Nair, Aesthetic Medical Doctor at Nexus Clinic Kuala Lumpur. Specialist in non-invasive treatments and personalised skincare solutions.",
  alternates: {
    canonical: `${baseurl}/doctors/dr-preetha-nair/`,
  },
};

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function DrPreethaNairPage() {
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
              src="/images/main/Dr.-Preetha-Image.webp"
              alt="Portrait of Dr. Preetha Nair"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="font-georgia text-cream text-3xl md:text-4xl leading-tight">
                Dr. Preetha Nair
              </h1>
              <p className="text-cream/80 text-sm mt-1 tracking-wide">
                Aesthetic Medical Doctor | Advocate for Natural Beauty
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
                Non-Invasive Treatments &amp; Personalized Skincare
              </span>
            </div>

            {/* Bio */}
            <p className="text-taupe leading-relaxed text-base">
              Dr. Preetha Nair is a skilled Aesthetic Medical Doctor based in Kuala Lumpur,
              Malaysia. She believes in a holistic approach to aesthetic medicine, tailoring every
              treatment to suit individual needs. Her gentle techniques and attention to detail
              ensure patient comfort and satisfaction.
            </p>

            {/* Qualifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-wine" />
                <h2 className="font-georgia text-brown text-xl">Qualifications</h2>
              </div>
              <ul className="space-y-2">
                {[
                  "Expertise in Non-Invasive Treatments",
                  "Specialist in Personalized Skincare Solutions",
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
                href="#"
                aria-label="Dr. Preetha Nair on Instagram"
                className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-taupe hover:text-wine hover:bg-wine/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Dr. Preetha Nair on LinkedIn"
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
