"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Clock,
  Heart,
  ArrowRight,
  Target,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Navigation,
  Car,
  Train,
  Bus,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  User,
  MessageSquare,
  SendHorizontal,
  CheckCircle as CheckCircleIcon,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import SocialIcons from "@/src/components/SocialIcons";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Updated contact information
const CLINIC_ADDRESS = "LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia";
const CLINIC_PHONE = "+0167025699";
const CLINIC_EMAIL = "contact@nexus-clinic.com";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          treatment: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: [
        "LG 10, Lower Ground Floor, Wisma UOA 2",
        "Jalan Pinang, 50450 Kuala Lumpur",
        "Malaysia"
      ],
      action: { 
        text: "Get Directions", 
        link: MAPS_URL,
        external: true 
      },
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [`Main: ${CLINIC_PHONE}`],
      action: { text: "Call Now", link: `tel:${CLINIC_PHONE}`, external: false },
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [CLINIC_EMAIL],
      action: { text: "Send Email", link: `mailto:${CLINIC_EMAIL}`, external: false },
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed", "Public Holidays: By Appointment"],
      action: null,
    },
  ];

  const transportationOptions = [
    { icon: <Car className="w-5 h-5" />, title: "By Car", description: "Parking available at Wisma UOA II basement" },
    { icon: <Train className="w-5 h-5" />, title: "By LRT", description: "KLCC Station (5 min walk) or Ampang Park Station" },
    { icon: <Bus className="w-5 h-5" />, title: "By Bus", description: "Rapid KL buses to KLCC bus hub" },
    { icon: <Navigation className="w-5 h-5" />, title: "By Ride-Hailing", description: "Drop off at Wisma UOA II main entrance" },
  ];

  const faqData = [
    { q: "Do I need an appointment to visit Nexus Clinic?", a: "Yes, we recommend booking an appointment to ensure our doctors can give you proper attention. Walk-ins are welcome but may have waiting time." },
    { q: "Is parking available at the clinic?", a: "Yes, Wisma UOA II has basement parking. We validate parking tickets for patients." },
    { q: "What is the nearest LRT station?", a: "KLCC LRT station is a 5-minute walk from our clinic. Ampang Park station is also nearby." },
    { q: "Can I book a consultation via WhatsApp?", a: "Yes! You can reach us on WhatsApp for appointments and enquiries." },
    { q: "Do you offer online consultations?", a: "Yes, we offer virtual consultations for certain treatments. Please contact us to arrange." },
    { q: "What languages do your doctors speak?", a: "Our doctors speak English, Bahasa Malaysia, Mandarin, Cantonese, and Tamil." },
  ];

  const treatmentOptions = [
    "Select a treatment",
    "Face Treatments (Botox, Fillers, Thread Lift)",
    "Skin Treatments (Acne, Pigmentation, Laser)",
    "Hair Restoration (Transplant, PRP, Mesotherapy)",
    "Weight Loss (Ozempic, Wegovy, Mounjaro)",
    "Body Contouring (Fat Freezing, CoolSculpting)",
    "General Consultation",
    "Other / Not Sure",
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 md:py-28">
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
            <span className="text-sm font-inter text-wine font-medium">Get in Touch • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Contact Us
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our treatments? Want to book a consultation? 
            We are here to help. Reach out to us any way that works for you.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-light -mt-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-cream p-6 rounded-2xl border border-taupe/10 shadow-md text-center"
              >
                <div className="w-14 h-14 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4 text-wine">
                  {info.icon}
                </div>
                <h3 className="font-georgia text-xl text-brown mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-taupe font-inter text-sm">{detail}</p>
                ))}
                {info.action && (
                  <a
                    href={info.action.link}
                    target={info.action.external ? "_blank" : undefined}
                    rel={info.action.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-wine font-inter text-sm mt-4 hover:gap-2 transition-all"
                  >
                    {info.action.text}
                    <ChevronRight className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-2xl md:text-3xl text-brown mb-6">Find Us Here</h2>
              
              {/* Static Map Image - Responsive height */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6 group">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                  <Image
                    src="/images/map.png"
                    alt="Nexus Clinic location map at Wisma UOA 2, Kuala Lumpur"
                    fill
                    className="w-full h-[180px] sm:h-[200px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>
              <div className="bg-cream rounded-2xl p-6 mb-6">
                <h3 className="font-georgia text-lg text-brown mb-4">Our Location</h3>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-taupe font-inter text-sm mb-4 hover:text-wine transition-colors"
                >
                  {CLINIC_ADDRESS}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-wine font-inter text-sm hover:gap-3 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

              {/* Right - Contact Form */}
              <motion.div variants={fadeInRight}>
                <div className="">
                  <h2 className="font-georgia text-2xl md:text-3xl text-brown mb-2">Book Your Appointment</h2>
                  <p className="text-taupe font-inter text-sm mb-6">
                    Fill in the form below to schedule your consultation. We'll confirm your appointment within 24 hours.
                  </p>
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/UKxErVKYDJqN3CowpP09"
                      style={{ width: '100%', height: '738px', border: 'none', borderRadius: '12px' }}
                      id="inline-UKxErVKYDJqN3CowpP09"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Calender Form Neuxs v2"
                      data-height="738"
                      data-layout-iframe-id="inline-UKxErVKYDJqN3CowpP09"
                      data-form-id="UKxErVKYDJqN3CowpP09"
                      title="Appointment Booking Form - Nexus Clinic"
                      className="w-full h-full"
                      loading="lazy"
                    />
                </div>
              </motion.div>
          </div>
        </motion.div>
      </section>
      <FAQWithSchema data={faqData}/>

      {/* CTA Section - Updated WhatsApp link */}
      <section className="py-20 px-4 bg-wine">
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
              Book your consultation today and take the first step toward achieving your aesthetic goals.
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
              <Whatsapp message={"can i get more info"} variant="light"/>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}