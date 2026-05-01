"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Eye,
  Lock,
  FileText,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
  Heart,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
} from "@/src/lib/animations";
import Link from "next/link";

// interface PrivacyPolicyProps {
//   locale: string;
// }

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="w-5 h-5 text-wine" />,
      content: [
        "Personal information you provide to us (name, email, phone number, address)",
        "Medical information relevant to your treatment (with your consent)",
        "Payment information for processing transactions",
        "Communication history between you and Nexus Clinic",
        "Website usage data through cookies and analytics",
      ],
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5 text-wine" />,
      content: [
        "To schedule and manage your appointments",
        "To provide you with appropriate medical treatments",
        "To communicate important updates about your care",
        "To process payments and insurance claims",
        "To improve our services and patient experience",
        "To send promotional materials (only with your consent)",
      ],
    },
    {
      title: "Information Sharing",
      icon: <Shield className="w-5 h-5 text-wine" />,
      content: [
        "We never sell your personal information to third parties",
        "We share information only when required by law",
        "We may share with other healthcare providers involved in your care (with your consent)",
        "We use secure payment processors for transactions",
        "All partners are bound by strict confidentiality agreements",
      ],
    },
    {
      title: "Data Security",
      icon: <Lock className="w-5 h-5 text-wine" />,
      content: [
        "We use industry-standard encryption to protect your data",
        "Access to patient information is restricted to authorized staff only",
        "Regular security audits are conducted on our systems",
        "Paper records are stored in locked, secure areas",
        "We follow Malaysian data protection regulations",
      ],
    },
    {
      title: "Your Rights",
      icon: <CheckCircle className="w-5 h-5 text-wine" />,
      content: [
        "Access your personal information we hold about you",
        "Request corrections to inaccurate information",
        "Request deletion of your information (subject to legal requirements)",
        "Withdraw consent for marketing communications",
        "Lodge a complaint about our data handling practices",
      ],
    },
    {
      title: "Cookies & Tracking",
      icon: <Eye className="w-5 h-5 text-wine" />,
      content: [
        "We use cookies to improve your browsing experience",
        "Cookies help us understand how visitors use our website",
        "You can disable cookies in your browser settings",
        "Disabling cookies may affect some website features",
      ],
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
            <Shield className="w-4 h-4 text-wine" />
            <span className="text-sm font-inter text-wine font-medium">Privacy Policy • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Privacy Policy
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
            At Nexus Clinic KL, we take your privacy seriously. This policy explains how we collect, 
            use, and protect your personal information.
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
            <h2 className="font-georgia text-2xl text-brown mb-4">Our Commitment to You</h2>
            <p className="text-taupe font-inter leading-relaxed mb-4">
              Nexus Clinic KL is committed to protecting your personal and medical information. 
              We follow strict security protocols and comply with Malaysian privacy laws to ensure 
              your data remains confidential and secure.
            </p>
            <p className="text-taupe font-inter leading-relaxed">
              This privacy policy applies to all information collected through our website, 
              during consultations, and throughout your treatment journey with us.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Privacy Sections Grid */}
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
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-taupe font-inter text-sm">
                      <span className="text-wine mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Medical Records Section */}
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
              <Heart className="w-6 h-6 text-wine" />
              <h2 className="font-georgia text-2xl text-brown">Medical Records</h2>
            </div>
            <p className="text-taupe font-inter leading-relaxed mb-4">
              Your medical records are kept strictly confidential. We maintain them securely 
              and only share them with other healthcare providers when you give explicit consent 
              or when required by law.
            </p>
            <p className="text-taupe font-inter leading-relaxed">
              You have the right to request copies of your medical records. Please contact our 
              clinic to arrange this.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Children's Privacy */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="bg-cream rounded-2xl p-8 border border-taupe/10">
            <h2 className="font-georgia text-2xl text-brown mb-4">Children's Privacy</h2>
            <p className="text-taupe font-inter leading-relaxed">
              Our services are intended for individuals aged 18 and above. We do not knowingly 
              collect personal information from children under 18. If you are a parent or guardian 
              and believe your child has provided us with information, please contact us immediately.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Policy Updates */}
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
              <Clock className="w-6 h-6 text-wine" />
              <h2 className="font-georgia text-2xl text-brown">Updates to This Policy</h2>
            </div>
            <p className="text-taupe font-inter leading-relaxed mb-4">
              We may update this privacy policy from time to time. Any changes will be posted 
              on this page with an updated revision date. We encourage you to review this policy 
              periodically.
            </p>
            <p className="text-taupe font-inter leading-relaxed">
              Significant changes will be notified to patients directly where required by law.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section for Privacy Questions */}
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
              Questions About Your Privacy?
            </h2>
            <p className="text-cream/90 font-inter mb-8 max-w-2xl mx-auto">
              If you have any questions about this privacy policy or how we handle your information, 
              please contact our Privacy Officer.
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

            <div className="mt-8">
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
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}