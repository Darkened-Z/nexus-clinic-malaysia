export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, ArrowLeft, Star, Stethoscope, GraduationCap, Award } from "lucide-react";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com";

export const metadata: Metadata = {
  title: "Phr. Anum Jawed – Clinical Pharmacist | Nexus Clinic KL",
  description:
    "Meet Phr. Anum Jawed, Pharm-D MPhil Clinical Pharmacist at Nexus Clinic Kuala Lumpur. Specialist in drug formulation and medication therapy management.",
  alternates: {
    canonical: `${baseurl}/doctors/dr-anum-jawed/`,
  },
};

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function DrAnumJawedPage() {
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
              src="/images/Anum_img.png"
              alt="Portrait of Phr. Anum Jawed"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="font-georgia text-cream text-3xl md:text-4xl leading-tight">
                Phr. Anum Jawed
              </h1>
              <p className="text-cream/80 text-sm mt-1 tracking-wide">
                Pharm-D, MPhil – Pharmaceutics | Clinical Pharmacist
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
                Drug Formulation &amp; Medication Therapy Management
              </span>
            </div>

            {/* Bio */}
            <p className="text-taupe leading-relaxed text-base">
              Phr. Anum Jawed is a dedicated pharmacist with specialized expertise in
              Pharmaceutics. With extensive experience in pharmaceutical research and clinical
              practice, she is passionate about optimizing medication formulations and improving
              patient care. She plays a crucial role in ensuring patients receive safe and effective
              medication therapy.
            </p>

            {/* Qualifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-wine" />
                <h2 className="font-georgia text-brown text-xl">Qualifications</h2>
              </div>
              <ul className="space-y-2">
                {[
                  "Pharm-D: International Islamic University Malaysia (IIUM)",
                  "MPhil in Pharmaceutics: University of Malaya (UM), Malaysia",
                  "Member of Malaysian Pharmaceutical Society (MPS)",
                  "Member of Academy of Pharmacy Malaysia (APM)",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-taupe text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2 shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            {/* Memberships */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-wine" />
                <h2 className="font-georgia text-brown text-xl">Professional Memberships</h2>
              </div>
              <ul className="space-y-2">
                {[
                  "Malaysian Pharmaceutical Society (MPS)",
                  "Academy of Pharmacy Malaysia (APM)",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-2 text-taupe text-sm">
                    <Award className="w-3.5 h-3.5 text-wine mt-0.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social + CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-taupe/20">
              <a
                href="https://www.linkedin.com/in/anumjawedharis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Phr. Anum Jawed on LinkedIn"
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
