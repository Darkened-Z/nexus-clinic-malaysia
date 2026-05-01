"use client";
import { motion } from "framer-motion";
import SocialIcons from "@/src/components/SocialIcons";
import {
  Sparkles,
  MapPin,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  Target,
  Phone,
  Quote,
  Smile,
  Building2,
  BadgeCheck,
  Briefcase,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import Link from "next/link";
// interface AboutUsProps {
//   locale: string;
// }

export default function AboutUs() {
  const coreValues = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient First",
      description: "Every recommendation starts with what is right for the patient, not what is easiest to sell.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Doctor Led",
      description: "All treatments begin with proper medical assessment by licensed doctors.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Honest Advice",
      description: "If a treatment is not suitable, we will tell you clearly and explain why.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Natural Results",
      description: "Our goal is enhancement that looks like you, just a refreshed version.",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Clinic Founded",
      description: "Nexus Clinic opened its doors with a vision for honest, doctor-led aesthetic medicine.",
    },
    {
      year: "2015",
      title: "Expanded Services",
      description: "Added comprehensive weight loss and hair restoration programmes.",
    },
    {
      year: "2018",
      title: "KLCC Location",
      description: "Moved to our current flagship location at Wisma UOA II, Jalan Pinang.",
    },
    {
      year: "2024",
      title: "5,000+ Procedures",
      description: "Surpassed 5,000 successful treatments completed by our medical team.",
    },
  ];

const doctors = [
  {
    name: "Dr. Aris Fadzillah Mazlan",
    role: "Aesthetic & Anti-Aging Physician",
    specialty: "Anti-Aging Treatments & Aesthetic Enhancements",
    experience: "10+ years",
    bio: "Dr. Aris combines medical expertise with artistic vision to deliver safe, natural-looking results. Fluent in English, Russian, and Malay.",
    image: "/images/main/Dr.-Aris-Image.webp",
  },
  {
    name: "Dr. Preetha Nair",
    role: "Aesthetic Medical Doctor",
    specialty: "Non-Invasive Treatments & Personalized Skincare",
    experience: "8+ years",
    bio: "Dr. Preetha adopts a holistic approach to aesthetic medicine with gentle techniques and meticulous attention to detail for natural-looking results.",
    image: "/images/main/Dr.-Preetha-Image.webp",
  },
  {
    name: "Dr. Ashvinia Bala",
    role: "Aesthetic Medical Doctor",
    specialty: "General Medicine & Aesthetic Treatments",
    experience: "7+ years",
    bio: "Dr. Ashvinia combines aesthetic medicine with wellness and sustainability, providing personalized care for natural, confident results.",
    image: "/images/main/Dr-Ashvinia-bala.webp",
  },
];

  const stats = [
    { value: "5,000+", label: "Procedures", sublabel: "Completed safely" },
    { value: "15+", label: "Years", sublabel: "Combined experience" },
    { value: "4", label: "Specialists", sublabel: "Dedicated doctors" },
    { value: "98%", label: "Satisfaction", sublabel: "Patient reviews" },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-wine/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto max-w-5xl relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full mx-auto mb-6">
            <Sparkles className="w-4 h-4 text-wine" />
            <span className="text-sm font-inter text-wine font-medium">About Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            A Different Kind of
            <span className="text-wine block">Aesthetic Clinic</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            At Nexus Clinic Kuala Lumpur, we built our practice around one simple belief: 
            medical aesthetics should start with proper diagnosis, honest advice, and treatment 
            plans designed for real people, not packages.
          </motion.p>

          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="/doctors/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-wine text-light px-8 py-4 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Meet Our Doctors
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Whatsapp message="Hi, I'd like to learn more about Nexus Clinic KL and book a consultation." variant="light" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-georgia text-light font-bold">{stat.value}</p>
                <p className="text-cream/80 font-inter text-sm mt-1">{stat.label}</p>
                <p className="text-cream/60 font-inter text-xs">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
                Our Story
              </span>
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
                Why Nexus Clinic Was Born
              </h2>
              <div className="space-y-4 text-taupe font-inter leading-relaxed">
                <p>
                  Nexus Clinic was founded because we saw a gap in the market. Too many aesthetic clinics 
                  were selling treatments without proper assessment. Patients were being recommended 
                  packages before anyone had taken the time to understand what they actually needed.
                </p>
                <p>
                  We decided to do things differently. Every patient who walks through our doors gets a 
                  proper consultation with a licensed doctor. We assess, diagnose, and then recommend. 
                  Not the other way around.
                </p>
                <p>
                  Today, Nexus Clinic KL has grown into a trusted name for face treatments, skin health, 
                  hair restoration, and medical weight loss. But our core philosophy has never changed: 
                  honest advice, doctor-led care, and natural-looking results.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/clinic/interior.png"
                  alt="Nexus Clinic Interior"
                  width={200}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cream rounded-2xl p-4 shadow-xl border border-taupe/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-wine" />
                  </div>
                  <div>
                    <p className="font-georgia text-brown font-semibold">5,000+ Happy Patients</p>
                    <p className="text-taupe text-sm font-inter">And counting</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Philosophy / Core Values */}
      <section className="py-24 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
              What We Believe
            </span>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              Our Core Values
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-light p-6 rounded-2xl shadow-md border border-taupe/10 text-center"
              >
                <div className="w-14 h-14 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4 text-wine">
                  {value.icon}
                </div>
                <h3 className="font-georgia text-xl text-brown mb-2">{value.title}</h3>
                <p className="text-taupe font-inter text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-24 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
              Meet The Team
            </span>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              Our Doctors
            </h2>
            <p className="text-taupe font-inter mt-4 max-w-2xl mx-auto">
              Every treatment at Nexus Clinic is performed or supervised by licensed medical doctors 
              with years of specialized experience.
            </p>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-cream rounded-2xl overflow-hidden shadow-lg border border-taupe/10"
              >
                <div className="aspect-square bg-brown/10 relative overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-georgia text-xl text-brown">{doctor.name}</h3>
                  <p className="text-wine font-inter text-sm font-semibold mt-1">{doctor.role}</p>
                  <p className="text-taupe font-inter text-xs mt-2">{doctor.specialty}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Briefcase className="w-3 h-3 text-taupe" />
                    <span className="text-taupe font-inter text-xs">{doctor.experience}</span>
                  </div>
                  <p className="text-taupe font-inter text-sm mt-3 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link href="/doctors/">
              <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
                View All Doctors
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Approach / What Makes Us Different */}
      <section className="py-24 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Makes Nexus Clinic Different</h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown">Doctor-Led, Always</h3>
                  <p className="text-taupe font-inter text-sm">
                    Every consultation and treatment is led by a licensed medical doctor. No shortcuts, no unqualified practitioners.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown">Diagnosis First</h3>
                  <p className="text-taupe font-inter text-sm">
                    We assess your concern properly before recommending any treatment. No assumptions, no package-first mentality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown">Honest Advice</h3>
                  <p className="text-taupe font-inter text-sm">
                    If a treatment is not suitable for you, we will tell you. We do not believe in selling what will not work.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown">Natural Results</h3>
                  <p className="text-taupe font-inter text-sm">
                    Our goal is enhancement that looks like you. We avoid overfilled, overdone, or unnatural outcomes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown">Structured Follow-Up</h3>
                  <p className="text-taupe font-inter text-sm">
                    We track progress properly, adjust plans when needed, and stay with you throughout your treatment journey.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown">MOH-Approved Products</h3>
                  <p className="text-taupe font-inter text-sm">
                    We use only Ministry of Health approved products and devices for every treatment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Clinic Journey / Milestones */}
      <section className="py-24 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
              Our Journey
            </span>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              The Nexus Clinic Timeline
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-wine/20 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:px-8">
                    <div className={`bg-cream p-6 rounded-2xl shadow-md border border-taupe/10 ${
                      idx % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                      <div className="inline-block px-3 py-1 bg-wine/10 rounded-full text-wine font-georgia font-semibold mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="font-georgia text-xl text-brown mb-2">{milestone.title}</h3>
                      <p className="text-taupe font-inter text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-wine rounded-full hidden md:block" />
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Clinic Location & Facilities */}
      <section className="py-24 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
                Our Space
              </span>
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
                A Clinic Designed for Comfort
              </h2>
              <div className="space-y-4 text-taupe font-inter leading-relaxed">
                <p>
                  Located at Wisma UOA II, Jalan Pinang, our clinic is designed to feel calm, private, and welcoming. 
                  We believe the right environment matters — for patient comfort and for clinical precision.
                </p>
                <p>
                  From the moment you walk in, you will be greeted by a team that listens, explains, and guides you 
                  through every step of your treatment journey.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-wine" />
                  <span className="text-brown font-inter">Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-wine" />
                  <span className="text-brown font-inter">Monday - Saturday: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-wine" />
                  <span className="text-brown font-inter">016-702 5699</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/clinic/medical.png"
                    alt="Clinic Reception"
                      width={200}
                      height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image
                    src="/images/clinic/consultation2.png"
                    alt="Treatment Room"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/clinic/consultation.png"
                    alt="Consultation Room"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image
                    src="/images/clinic/medical.png"
                    alt="Waiting Area"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-light rounded-xl p-4 shadow-xl border border-taupe/10">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-wine" />
                  <span className="text-brown font-inter font-medium">KLCC | Accessible Location</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
              Patient Stories
            </span>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              What Our Patients Say
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The doctors at Nexus actually listened to my concerns and recommended exactly what I needed. No upselling, just honest advice.",
                author: "Mei Ling",
                location: "Kuala Lumpur",
              },
              {
                quote: "I came for weight loss support and got a proper medical plan. The follow-up has been excellent and I am seeing real progress.",
                author: "Ramesh",
                location: "Petaling Jaya",
              },
              {
                quote: "Clean clinic, professional doctors, and transparent pricing. I would recommend Nexus to anyone looking for aesthetic treatments.",
                author: "Siti",
                location: "Bangsar",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-cream p-6 rounded-2xl border border-taupe/10"
              >
                <Quote className="w-8 h-8 text-wine/30 mb-4" />
                <p className="text-taupe font-inter leading-relaxed mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center">
                    <Smile className="w-5 h-5 text-wine" />
                  </div>
                  <div>
                    <p className="font-georgia text-brown font-semibold">{testimonial.author}</p>
                    <p className="text-taupe text-xs font-inter">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-3xl md:text-5xl text-light">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Book a consultation with our doctors today. No commitment, just honest advice about what may work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/consultation/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Whatsapp 
                message="Hi, I'd like to book a consultation at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited Slots Available This Week | Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Brand Content */}
      <section className="py-12 px-4 bg-brown">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <p className="text-cream/70 font-inter text-sm leading-relaxed">
            Nexus Clinic is an advanced aesthetic and medical clinic in Kuala Lumpur offering doctor-led treatments 
            for face, skin, hair, and weight loss. We focus on clear diagnosis, natural-looking outcomes, and treatment 
            plans built around long-term confidence and wellbeing.
          </p>
          <div className="flex justify-center mt-6">
            <SocialIcons variant="dark" iconSize={20} showTooltip={true} />
          </div>
        </motion.div>
      </section>
    </div>
  );
}