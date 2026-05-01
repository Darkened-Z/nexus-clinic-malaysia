import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Star, Award, GraduationCap, Instagram, Linkedin, Stethoscope, ArrowLeft } from "lucide-react";
import { doctors } from "@/src/data/doctorProfiles";
import { languages } from "@/src/i18n/settings";

export const dynamic = "force-static";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com";

export async function generateStaticParams() {
  return languages.flatMap((locale: string) =>
    doctors.map((doctor) => ({ locale, slug: doctor.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return {};
  return {
    title: `${doctor.name} – ${doctor.title} | Nexus Clinic Malaysia`,
    description: doctor.bio,
    alternates: {
      canonical: `${baseurl}/doctors/${slug}`,
    },
  };
}

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <main className="bg-light min-h-screen">
      {/* Hero */}
      <section className="relative bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Responsive photo: portrait on mobile, landscape on desktop */}
          <div className="relative w-72 md:w-[560px] h-96 md:h-80 rounded-2xl overflow-hidden shadow-lg shrink-0">
            <picture className="absolute inset-0 w-full h-full">
              <source media="(min-width: 768px)" srcSet={doctor.photoLandscape} />
              <img
                src={doctor.photo}
                alt={`Portrait of ${doctor.name}`}
                className="w-full h-full object-cover object-top"
              />
            </picture>
          </div>

          {/* Info */}
          <div className="flex-1">
            {/* Back link */}
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-taupe text-sm hover:text-wine transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Our Doctors
            </Link>

            <p className="text-wine uppercase tracking-[0.25em] text-xs font-semibold mb-3">
              Nexus Clinic Malaysia
            </p>
            <h1 className="font-georgia text-brown text-4xl md:text-5xl leading-tight mb-2">
              {doctor.name}
            </h1>
            <p className="text-taupe text-base mb-6">{doctor.title}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: doctor.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-wine text-wine" />
                ))}
              </div>
              <span className="text-taupe text-sm">5.0 · Exceptional Care</span>
            </div>

            {/* Specialisation */}
            <div className="flex items-center gap-2 mb-6">
              <Stethoscope className="w-4 h-4 text-wine shrink-0" />
              <span className="text-rose text-sm font-medium">
                {doctor.specialisation}
              </span>
            </div>

            {/* Bio */}
            <p className="text-taupe text-sm leading-relaxed max-w-xl mb-8">
              {doctor.bio}
            </p>

            {/* Social + CTA */}
            <div className="flex items-center gap-4">
              <a
                href={doctor.instagram}
                aria-label={`${doctor.name} on Instagram`}
                className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-taupe hover:text-wine hover:bg-wine/10 transition-colors border border-taupe/20"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={doctor.linkedin}
                aria-label={`${doctor.name} on LinkedIn`}
                className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-taupe hover:text-wine hover:bg-wine/10 transition-colors border border-taupe/20"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <Link
                href="/consultation"
                className="ml-2 text-sm font-semibold tracking-wide text-cream bg-wine hover:bg-brown transition-colors px-6 py-2.5 rounded-full"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Qualifications */}
        <div className="bg-cream rounded-2xl p-8 border border-taupe/10">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-wine" />
            <h2 className="font-georgia text-brown text-xl">Qualifications</h2>
          </div>
          <ul className="space-y-3">
            {doctor.qualifications.map((q) => (
              <li key={q} className="flex items-start gap-3 text-taupe text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2 shrink-0" />
                {q}
              </li>
            ))}
          </ul>
        </div>

        {/* Awards */}
        {doctor.awards.length > 0 && (
          <div className="bg-cream rounded-2xl p-8 border border-taupe/10">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-wine" />
              <h2 className="font-georgia text-brown text-xl">
                Awards & Recognition
              </h2>
            </div>
            <ul className="space-y-3">
              {doctor.awards.map((award) => (
                <li
                  key={award}
                  className="flex items-start gap-3 text-taupe text-sm"
                >
                  <Award className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  {award}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Back to doctors */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 text-center">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-2 text-wine font-semibold text-sm hover:text-brown transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Meet the Full Team
        </Link>
      </div>
    </main>
  );
}
