"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,

} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import Link from "next/link";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Image from "next/image";
interface WeightLossHubProps {
  locale: string;
}

export default function WeightLossHub({ locale }: WeightLossHubProps) {
    const treatments = [
      {
        name: "Ozempic Weight Loss Malaysia",
        description: "A doctor-led guide to Ozempic for weight loss in Malaysia, including how it works, who it may suit, expected progress, pricing and treatment planning.",
        slug: "ozempic-malaysia",
        imageUrl: "/images/weight-loss/Ozempic Weight Loss Treatment.webp",
      },
      {
        name: "Wegovy Weight Loss Malaysia",
        description: "Learn how Wegovy supports appetite control and structured medical weight loss, with consultation guidance, candidacy review and realistic expectations.",
        slug: "wegovy-malaysia",
        imageUrl: "/images/weight-loss/Wegovy Weight Loss Treatment.webp",
      },
      {
        name: "Mounjaro Weight Loss Malaysia",
        description: "Comprehensive information on Mounjaro weight loss treatment in Malaysia, including doctor assessment, treatment suitability and progress support.",
        slug: "mounjaro-malaysia",
        imageUrl: "/images/weight-loss/Mounjaro Weight Loss Treatment.webp",
      },
      {
        name: "Duromine Weight Loss Malaysia",
        description: "Explore short term doctor monitored Duromine weight loss programmes, how they are prescribed, who they may suit and what monitoring is needed.",
        slug: "duromine-malaysia",
        imageUrl: "/images/weight-loss/Duromine Weight Loss Treatment.webp",
      },
      {
        name: "Doctor Monitored Weight Loss Malaysia",
        description: "A personalized doctor monitored approach for patients who need clinical guidance, structured follow up and a treatment plan that matches their health profile.",
        slug: "doctor-monitored-weight-loss-malaysia",
        imageUrl: "/images/weight-loss/Nexus Doctor Monitored Weight Loss.webp",
      },
      {
        name: "HCG Weight Loss Malaysia",
        description: "Understand the role, claims and clinical considerations around HCG related weight loss plans, with honest doctor guidance on suitability.",
        slug: "hcg-programme-malaysia",
        imageUrl: "/images/weight-loss/HCG Weight Loss Program Treatment.webp",
      },
      {
        name: "Fat Freezing Malaysia",
        description: "Non surgical body contouring for stubborn fat areas using controlled cooling technology. Ideal for patients looking to target specific areas.",
        slug: "fat-freezing-malaysia",
        imageUrl: "/images/weight-loss/Fat Freezing Treatment.webp",
      },
      {
        name: "CoolSculpting Malaysia",
        description: "A complete overview of CoolSculpting in Malaysia, including how the treatment works, ideal body areas and what results are realistically possible.",
        slug: "coolsculpting-malaysia",
        imageUrl: "/images/weight-loss/CoolSculpting Treatment.webp",
      },
      {
        name: "GLP 1 Programme Malaysia",
        description: "A structured GLP 1 based weight loss programme designed around assessment, treatment planning, follow up and lifestyle support.",
        slug: "glp-1-programme-malaysia",
        imageUrl: "/images/weight-loss/GLP-1 Injection Treatment.webp",
      },
      {
        name: "Zepbound Weight Loss Malaysia",
        description: "Doctor-led information on Zepbound weight loss treatment, including how it compares with other options and who may benefit from medical review.",
        slug: "zepbound-malaysia",
        imageUrl: "/images/weight-loss/ZepBound Weight Loss Treatment.webp",
      },
      {
        name: "IV Drip Weight Loss Malaysia",
        description: "Supportive wellness and hydration focused IV drip options that may be added to a broader weight management plan when clinically appropriate.",
        slug: "iv-drip-malaysia",
        imageUrl: "/images/weight-loss/IV Drip for Weight Loss Treatment.webp",
      },
    ];
  const concernMapping = [
    { concern: "Need medical help to reduce appetite and control cravings", treatment: "Ozempic, Wegovy, Mounjaro or GLP 1 Programme", link: "/weight-loss/ozempic-malaysia/" },
    { concern: "Need a structured clinical plan with regular follow up", treatment: "Doctor Monitored Weight Loss", link: "/weight-loss/doctor-monitored-weight-loss-malaysia/" },
    { concern: "Need support for short term doctor supervised weight loss", treatment: "Duromine Weight Loss", link: "/weight-loss/duromine-malaysia/" },
    { concern: "Want to target stubborn fat in specific body areas", treatment: "Fat Freezing or CoolSculpting", link: "/weight-loss/fat-freezing-malaysia/" },
    { concern: "Want to compare injectable medication options", treatment: "Ozempic, Wegovy, Mounjaro or Zepbound", link: "/weight-loss/ozempic-malaysia/" },
    { concern: "Want body contouring without surgery", treatment: "Fat Freezing or CoolSculpting", link: "/weight-loss/coolsculpting-malaysia/" },
    { concern: "Need a broader programme instead of one treatment", treatment: "GLP 1 Programme or Doctor Monitored Weight Loss", link: "/weight-loss/glp-1-programme-malaysia/" },
    { concern: "Looking for supportive wellness add ons", treatment: "IV Drip Weight Loss", link: "/weight-loss/iv-drip-malaysia/" },
    { concern: "Want to understand all options before deciding", treatment: "Weight Loss Overview Consultation", link: "/consultation/" },
  ];

  const faqData = [
    { q: "How do I know which weight loss treatment I actually need?", a: "Start with a consultation. Most patients come in with a goal, not a treatment name. The doctor reviews your concerns, health history and expectations, then recommends the option that best fits your situation." },
    { q: "Can I combine medical weight loss and body contouring treatments?", a: "Yes. Some patients benefit from combining a doctor monitored programme with body contouring treatments such as fat freezing. The right combination depends on your goals, body areas and treatment suitability." },
    { q: "Are weight loss treatments at Nexus Clinic KL suitable for everyone?", a: "Not every treatment is right for every patient. Some options may depend on your medical history, current medications, body mass profile and personal goals. Suitability is confirmed during consultation." },
    { q: "What is the difference between Ozempic, Wegovy and Mounjaro?", a: "All three are doctor prescribed options used within medical weight loss planning, but they are not identical. The doctor will explain how they differ, what they are designed to do and which option may be more suitable for your case." },
    { q: "Can body contouring replace overall weight loss?", a: "Body contouring treatments such as fat freezing and CoolSculpting are best for stubborn localized fat. They are not a replacement for broader medical weight loss when the main goal is overall reduction." },
    { q: "How long does a doctor monitored weight loss programme last?", a: "The timeline varies from patient to patient. Some need short term support, while others benefit from longer structured follow up. Your doctor will outline a plan based on your progress and goals." },
    { q: "Do I need a consultation before starting treatment?", a: "Yes. Every weight loss treatment at Nexus Clinic KL starts with a consultation so the doctor can assess your suitability, explain your options and create a plan that is safe and realistic." },
    { q: "Where is Nexus Clinic KL located?", a: "Nexus Clinic is located at Wisma UOA II, Jalan Pinang, Kuala Lumpur, making it convenient for patients from KLCC and surrounding areas." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15" />
        
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto max-w-5xl relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full mx-auto mb-6">
            <Sparkles className="w-4 h-4 text-wine" />
            <span className="text-sm font-inter text-wine font-medium">Weight Loss Hub • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Weight Loss Treatments in Malaysia
          </motion.h1>
          
          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-wine font-georgia mt-4"
          >
            Doctor-Led Medical Weight Loss at Nexus Clinic KL
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Every weight loss treatment at Nexus Clinic KL starts with an assessment, not a guess. 
            Browse our complete range of weight loss and body contouring options in Malaysia, including 
            Ozempic, Wegovy, Mounjaro, Duromine, doctor monitored weight loss programmes, fat freezing 
            and more. Doctor-led. Personalized plans. Kuala Lumpur.
          </motion.p>

          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="/contact-us/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-wine text-light px-8 py-4 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book Free Weight Loss Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Whatsapp message="Hi, I'm interested in weight loss treatments at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
          </motion.div>
          
          <motion.p
            variants={fadeInUp}
            className="text-sm text-taupe font-inter mt-4"
          >
            No Commitment Required • Free Consultation
          </motion.p>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-taupe/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">5,000+ Consultations</p>
                <p className="font-inter text-taupe text-xs">Supported by licensed doctors</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">15+ Years Experience</p>
                <p className="font-inter text-taupe text-xs">Combined medical experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">Doctor Monitored Plans</p>
                <p className="font-inter text-taupe text-xs">Tailored to your goals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">KLCC Location</p>
                <p className="font-inter text-taupe text-xs">Wisma UOA II, Jalan Pinang</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Educational Intro Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              Weight Gain Has More Than One Cause
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-lg text-taupe font-inter leading-relaxed mb-6">
            Weight gain is not simply about willpower. Appetite signals, insulin response, stress, sleep quality, 
            hormones, daily habits and metabolic changes can all affect how the body stores and uses energy. 
            That is why different patients often need different solutions, even when the end goal is the same.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="text-lg text-brown font-inter leading-relaxed">
            At Nexus Clinic Kuala Lumpur, weight loss starts with a proper assessment. Our doctors look at your 
            current weight concerns, eating patterns, health background, past attempts and treatment suitability 
            before recommending a plan. For some patients, this may mean medication support. For others, it may 
            mean body contouring, lifestyle support, or a structured doctor monitored programme. The aim is always 
            the same: safe progress that feels realistic and sustainable.
          </motion.p>
        </motion.div>
      </section>

      {/* Weight Loss Treatments Available - Grid Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Weight Loss Treatments Available at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter mt-2">Browse our complete range of medical weight loss and body contouring options.</p>
          </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-cream pb-6 rounded-xl border border-taupe/10 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-full h-60 overflow-hidden bg-wine/5 rounded-xl mb-4">
                    <Image 
                      src={treatment.imageUrl}
                      alt={treatment.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-2 px-6">{treatment.name}</h3>
                  <p className="text-taupe font-inter text-sm mb-4 px-6">{treatment.description}</p>
                  <Link href={`/weight-loss/${treatment.slug}/`}>
                    <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold text-sm hover:gap-3 transition-all px-6">
                      View Treatment Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
        </motion.div>
      </section>

      {/* Concern Mapping Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Find the Right Treatment for Your Concern</h2>
            <p className="text-taupe font-inter mt-2">Not sure which weight loss treatment addresses your specific concern? Use this guide.</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-light rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Your Concern</th>
                  <th className="p-4 text-left font-georgia">Likely Treatment</th>
                  <th className="p-4 text-left font-georgia">Start Here</th>
                </tr>
              </thead>
              <tbody>
                {concernMapping.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 text-taupe font-inter">{item.concern}</td>
                    <td className="p-4 text-brown font-inter font-medium">{item.treatment}</td>
                    <td className="p-4">
                      <Link href={item.link}>
                        <button className="text-wine font-inter text-sm hover:font-bold transition-all">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* The Approach That Makes the Difference */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Approach That Makes the Difference</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <p className="text-taupe font-inter leading-relaxed mb-6">
                There are many clinics offering weight loss treatments in Kuala Lumpur. The treatments may look 
                similar on the surface, but the right recommendation depends on the patient. Not every person 
                needs medication. Not every person needs body contouring. And not every patient should follow 
                the same plan.
              </p>
              <p className="text-brown font-inter leading-relaxed">
                At Nexus Clinic KL, every weight loss journey starts with a doctor-led assessment. We identify 
                what is driving the concern, explain what each treatment can and cannot do, and recommend only 
                what makes sense for your goals. We keep consultations honest, practical and clear. If a treatment 
                is not suitable for you, we will tell you.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Doctor-led assessment before any treatment recommendation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Clear explanation of realistic progress and treatment suitability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Personalized plans for medication support, body contouring or combined care</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Honest consultations with transparent treatment planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Central Kuala Lumpur location with a comfortable clinic experience</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Patients Choose Nexus Clinic */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Why Patients Choose Nexus Clinic KL</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Doctor-led assessment before any treatment recommendation",
              "Clear explanation of realistic progress and treatment suitability",
              "Personalized plans for medication support, body contouring or combined care",
              "Honest consultations with transparent treatment planning",
              "Central Kuala Lumpur location with a comfortable clinic experience",
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown font-inter text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <FAQWithSchema data={faqData} />

      {/* Final Booking Section */}
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
              Book Your Weight Loss Consultation at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Every weight loss journey starts the same way: a proper assessment by a licensed doctor, an honest 
              explanation of what may work for your goals, and a clear plan before you commit to anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Book Your Free Consultation Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Whatsapp 
                message="Hi, I'd like to book a free weight loss consultation at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited Slots Available This Week | Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
            </p>
            <p className="text-cream/60 font-inter text-xs">
              Serving patients across KL, Petaling Jaya, Bangsar, Chow Kit, KLCC, Ampang, Mont Kiara and throughout Malaysia.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Copy */}
      <section className="py-12 px-4 bg-brown">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <p className="text-cream/70 font-inter text-sm leading-relaxed">
            Nexus Clinic is an advanced aesthetic and medical weight loss clinic in Kuala Lumpur. We offer doctor-led 
            weight loss, body contouring and personalized treatment planning designed around your goals, comfort and 
            long term confidence.
          </p>
        </motion.div>
      </section>
    </div>
  );
}