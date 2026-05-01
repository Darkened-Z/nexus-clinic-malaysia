import AwardsCertificate from "@/src/views/AwardsCertificate"
import { Metadata } from "next";
const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"


export const metadata: Metadata = {
  title: "Awards & Certifications | Nexus Clinic Award-Winning Aesthetic Clinic Malaysia",
  description: "Nexus Clinic Kuala Lumpur receives Allergan Gold Award 2022, Platinum Award 2024, CoolSculpting Club 200 & Sculptra Star Injector Award 2025.",
  alternates: {
    canonical: `${baseurl}/awards-and-certifications/`,
  },
};

export default async function Page({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <AwardsCertificate   locale={locale} />;
}   