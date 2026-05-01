"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  FileText,
  AlertCircle,
  Scale,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Clock,
  Heart,
  BookOpen,
  Users,
  CreditCard,
  Smartphone,
  Globe,
  Lock,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
} from "@/src/lib/animations";
import Link from "next/link";

// interface TermsOfUseProps {
//   locale: string;
// }

export default function TermsOfUse() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <CheckCircle className="w-5 h-5 text-wine" />,
      content: "By accessing or using the Nexus Clinic KL website, booking appointments, or receiving our services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website or services.",
    },
    {
      title: "Medical Disclaimer",
      icon: <AlertCircle className="w-5 h-5 text-wine" />,
      content: "The information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult with our qualified doctors for personalized medical advice regarding your specific condition. Results from treatments vary from person to person.",
    },
    {
      title: "Appointments & Cancellations",
      icon: <Clock className="w-5 h-5 text-wine" />,
      bulletPoints: [
        "Appointments require at least 24 hours notice for cancellation or rescheduling",
        "Late cancellations or no-shows may incur a fee",
        "We reserve the right to reschedule appointments due to emergencies",
        "Please arrive 15 minutes early for your first appointment",
      ],
    },
    {
      title: "Consultation & Treatment",
      icon: <Heart className="w-5 h-5 text-wine" />,
      bulletPoints: [
        "All treatments begin with a doctor consultation to assess suitability",
        "Results are not guaranteed and vary based on individual factors",
        "You will be informed of potential risks before any treatment",
        "Informed consent is required before any procedure",
      ],
    },
    {
      title: "Payments & Fees",
      icon: <CreditCard className="w-5 h-5 text-wine" />,
      bulletPoints: [
        "All prices are in Malaysian Ringgit (MYR)",
        "Payment is required at the time of service unless prior arrangements are made",
        "We accept cash, credit cards, and online transfers",
        "Prices are subject to change without prior notice",
        "Refunds are handled on a case-by-case basis",
      ],
    },
    {
      title: "Website Use",
      icon: <Globe className="w-5 h-5 text-wine" />,
      bulletPoints: [
        "You may not copy, reproduce, or distribute our content without permission",
        "Do not misuse our website or attempt to hack our systems",
        "We may update or change website content at any time",
        "We are not responsible for external links on our website",
      ],
    },
    {
      title: "Intellectual Property",
      icon: <Lock className="w-5 h-5 text-wine" />,
      content: "All content on this website including text, images, logos, and graphics is the property of Nexus Clinic KL and is protected by copyright laws. Unauthorized use of our intellectual property is prohibited.",
    },
    {
      title: "Limitation of Liability",
      icon: <Scale className="w-5 h-5 text-wine" />,
      content: "Nexus Clinic KL shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our total liability is limited to the amount you paid for services, if any.",
    },
  ];

  const contactInfo = [
    { icon: <MapPin size={16} />, text: "Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur" },
    { icon: <Phone size={16} />, text: "016-702 5699" },
    { icon: <Mail size={16} />, text: "info@nexusclinic.com.my" },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15" />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto max-w-4xl relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full mx-auto mb-6">
            <FileText className="w-4 h-4 text-wine" />
            <span className="text-sm font-inter text-wine font-medium">Terms of Use • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Terms of Use
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Last updated: January 2024
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base text-taupe font-inter mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Please read these terms carefully before using our website or booking our services.
          </motion.p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="bg-cream rounded-2xl p-8 border border-taupe/10">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-wine" />
              <h2 className="font-georgia text-2xl text-brown">Overview</h2>
            </div>
            <p className="text-taupe font-inter leading-relaxed">
              These Terms of Use govern your relationship with Nexus Clinic KL. By using our website, 
              booking appointments, or receiving our services, you agree to these terms. 
              We recommend reading them carefully before proceeding with any treatment or consultation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Terms Sections Grid */}
      <section className="py-16 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6 border border-taupe/10 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="font-georgia text-xl text-brown">{section.title}</h2>
                </div>
                
                {section.content && (
                  <p className="text-taupe font-inter text-sm leading-relaxed">
                    {section.content}
                  </p>
                )}
                
                {section.bulletPoints && (
                  <ul className="space-y-2 mt-2">
                    {section.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-taupe font-inter text-sm">
                        <span className="text-wine mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Eligibility Section */}
      <section className="py-12 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="bg-light rounded-2xl p-8 border border-taupe/10">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-wine" />
              <h2 className="font-georgia text-2xl text-brown">Eligibility</h2>
            </div>
            <p className="text-taupe font-inter leading-relaxed mb-4">
              To use our services, you must be at least 18 years old. By using our website or 
              booking appointments, you confirm that you meet this age requirement.
            </p>
            <p className="text-taupe font-inter leading-relaxed">
              If you are booking on behalf of someone else, you confirm that you have their 
              authority to do so and that they agree to these terms.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Changes to Services */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="bg-cream rounded-2xl p-8 border border-taupe/10">
            <h2 className="font-georgia text-2xl text-brown mb-4">Changes to Services</h2>
            <p className="text-taupe font-inter leading-relaxed">
              Nexus Clinic KL reserves the right to modify, suspend, or discontinue any part of 
              our services at any time. We will notify patients of significant changes that affect 
              scheduled appointments or ongoing treatments.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Governing Law */}
      <section className="py-12 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="bg-light rounded-2xl p-8 border border-taupe/10">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-wine" />
              <h2 className="font-georgia text-2xl text-brown">Governing Law</h2>
            </div>
            <p className="text-taupe font-inter leading-relaxed">
              These terms are governed by the laws of Malaysia. Any disputes arising from these 
              terms or your use of our services shall be resolved in the courts of Kuala Lumpur, Malaysia.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Updates to Terms */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="bg-cream rounded-2xl p-8 border border-taupe/10">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-wine" />
              <h2 className="font-georgia text-2xl text-brown">Updates to These Terms</h2>
            </div>
            <p className="text-taupe font-inter leading-relaxed">
              We may update these Terms of Use from time to time. The latest version will always 
              be posted on this page with the effective date. Continued use of our website or 
              services after changes constitutes acceptance of the updated terms.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <Shield className="w-12 h-12 text-cream mx-auto mb-4" />
            <h2 className="font-georgia text-2xl md:text-3xl text-light mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-cream/90 font-inter mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms of Use, please contact us.
            </p>
            
            <div className="bg-cream/10 rounded-2xl p-6 inline-block mx-auto">
              <div className="space-y-3 text-left">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-cream">
                    {item.icon}
                    <span className="font-inter text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-light text-wine px-6 py-3 rounded-full font-inter font-semibold hover:bg-cream transition-all inline-flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent border border-cream text-cream px-6 py-3 rounded-full font-inter font-semibold hover:bg-cream/10 transition-all inline-flex items-center gap-2"
                >
                  Return to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}