export const dynamic = "force-static";
import Image from "next/image";
import { Linkedin, Award, BookOpen, Users } from "lucide-react";
import { Metadata } from "next";
const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"


export const metadata: Metadata = {
  title: "Dr. Anum Jawed | Nexus Clinic",
  description: "Learn more about Dr. Anum Jawed, a registered pharmacist and pharmaceutical content writer at Nexus Clinic.",
  alternates: {
    canonical: `${baseurl}/author/anum-jawed/`,
  },
};
export default function AuthorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-cream overflow-hidden">
        
        {/* Hero Section with Gradient Background */}
        <div className="bg-gradient-to-r from-wine/5 via-cream/30 to-transparent px-6 py-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Image */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full ring-4 ring-white shadow-md overflow-hidden flex-shrink-0">
              <Image
                src="/images/Anum_img.png"
                alt="Dr. Anum Jawed"
                fill
                className="object-cover"
              />
            </div>

            {/* Title and Info */}
            <div className="text-center md:text-left flex-1">
              <a href="https://www.linkedin.com/in/anumjawedharis/">
                <h1 className="text-3xl md:text-4xl font-bold text-wine mb-2">
                  Dr. Anum Jawed
                </h1>
                <p className="text-lg text-wine font-medium mb-1">
                  Pharmaceutical Content Writer & Registered Pharmacist
                </p>
                <p className="text-brown mb-4">
                  Pharm-D, MPhil in Pharmaceutics
                </p>
              </a>
              {/* LinkedIn Button */}
              {/* <a
                href="https://www.linkedin.com/in/anumjawedharis/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-wine hover:bg-wine/90 text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm font-medium"
              >
                <Linkedin size={18} />
                <span>Connect on LinkedIn</span>
              </a> */}
            </div>
          </div>
        </div>

        {/* Credentials Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-6 bg-cream/20 border-y border-cream">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center flex-shrink-0">
              <Award size={18} className="text-wine" />
            </div>
            <div>
              <p className="text-xs text-taupe uppercase tracking-wide">Education</p>
              <p className="text-sm font-medium text-brown">Pharm-D, MPhil Pharmaceutics</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center flex-shrink-0">
              <BookOpen size={18} className="text-wine" />
            </div>
            <div>
              <p className="text-xs text-taupe uppercase tracking-wide">Expertise</p>
              <p className="text-sm font-medium text-brown">Medical Writing & Research</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center flex-shrink-0">
              <Users size={18} className="text-wine" />
            </div>
            <div>
              <p className="text-xs text-taupe uppercase tracking-wide">Experience</p>
              <p className="text-sm font-medium text-brown">Digital Health & MOH Malaysia</p>
            </div>
          </div>
        </div>

        {/* Biography Content */}
        <div className="px-6 py-8 md:px-10 space-y-5">
          <p className="text-brown/90 leading-relaxed">
            Dr. Anum Jawed is a pharmaceutical content writer and registered pharmacist with a strong academic background in pharmaceutics. She earned her Doctor of Pharmacy (Pharm-D) and MPhil in Pharmaceutics from the University of Karachi, Pakistan.
          </p>

          <p className="text-brown/90 leading-relaxed">
            She has professional experience working with 
            <a href="https://www.doctoroncall.com/" target="_blank" className="text-wine font-bold italic"> DoctorOnCall</a >, 
            a Malaysian digital healthcare platform, and has also contributed to healthcare initiatives associated with the Ministry of Health Malaysia (MOH).
          </p>

          <div className="bg-cream/20 rounded-xl p-5 my-4 border-l-4 border-wine">
            <p className="text-brown/80 italic leading-relaxed">
              Through these roles, she gained valuable experience in developing research-based healthcare and pharmaceutical content for public health awareness and patient education.
            </p>
          </div>

          <p className="text-brown/90 leading-relaxed">
            With her combined expertise in pharmacy and writing, she specializes in creating clear, accurate, and engaging medical and pharmaceutical content, helping translate complex scientific information into accessible knowledge for a wider audience.
          </p>
        </div>
      </div>
    </div>
  );
}