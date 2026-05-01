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
import Image from "next/image";
import FAQWithSchema from "@/src/components/FAQWithSchema";

interface HairHubProps {
  locale: string;
}

export default function HairHub({ locale }: HairHubProps) {
    const treatments = [
      {
        name: "Hair Transplant Malaysia",
        description: "A complete guide to surgical hair restoration for patients who want long-term improvement in density and hairline design. Learn who is suitable, how grafts are planned, and what results to expect.",
        slug: "hair-transplant-malaysia",
        imageUrl: "/images/hair/hair-transpalnt.jpeg",
      },
      {
        name: "FUE Hair Transplant Malaysia",
        description: "Follicular Unit Extraction is one of the most popular hair transplant methods for natural-looking restoration. This treatment uses individual graft extraction for precise placement, minimal visible scarring, and a carefully designed hairline.",
        slug: "fue-hair-transplant-malaysia",
        imageUrl: "/images/hair/fue-hair-transplant.webp",
      },
      {
        name: "PRP Hair Treatment Malaysia",
        description: "PRP hair treatment uses your body's own growth factors to support weaker follicles, improve scalp condition, and encourage healthier hair growth. Often recommended for early thinning and maintenance.",
        slug: "prp-hair-treatment-malaysia",
        imageUrl: "/images/hair/prp-hair-treatment.webp",
      },
      {
        name: "Hair Loss Treatment Malaysia",
        description: "A doctor-led overview of hair loss solutions in Malaysia, including medications, scalp therapies, regenerative treatments, and long-term maintenance plans based on your pattern of hair loss.",
        slug: "hair-loss-treatment-malaysia",
        imageUrl: "/images/hair/hair-loss-treatment.webp",
      },
      {
        name: "Beard Transplant Malaysia",
        description: "For patients with patchy beard growth, uneven density, or areas that never filled in naturally, beard transplant can restore fuller facial hair using carefully placed grafts.",
        slug: "beard-transplant-malaysia",
        imageUrl: "/images/hair/beard-transplant.webp",
      },
      {
        name: "Mesotherapy Hair Loss Malaysia",
        description: "Hair mesotherapy delivers active ingredients into the scalp to support circulation, nourish follicles, and improve the hair growth environment. Often used as part of a broader hair restoration plan.",
        slug: "mesotherapy-hair-loss-malaysia",
        imageUrl: "/images/hair/mesotherapy-hair-loss.webp",
      },
      {
        name: "Exosome Hair Treatment Malaysia",
        description: "Exosome therapy is an advanced regenerative treatment designed to support scalp renewal and follicle recovery. It is often considered by patients looking for a modern non-surgical option for hair thinning.",
        slug: "exosome-hair-treatment-malaysia",
        imageUrl: "/images/hair/exesome-hair-treatment.webp",
      },
      {
        name: "Minoxidil Treatment Malaysia",
        description: "Minoxidil is one of the most widely used treatments for hair loss. It is commonly recommended to help maintain hair density, support regrowth, and slow ongoing thinning when used consistently.",
        slug: "minoxidil-treatment-malaysia",
        imageUrl: "/images/hair/minoxidil-treatment.webp",
      },
      {
        name: "Finasteride Treatment Malaysia",
        description: "Finasteride is a medical treatment often used in male pattern hair loss to reduce the hormonal process that drives follicle miniaturization. It is typically prescribed after doctor assessment and ongoing review.",
        slug: "finasteride-treatment-malaysia",
        imageUrl: "/images/hair/hair-transpalnt.jpeg",
      },
    ];

  const concernMapping = [
    { concern: "Receding hairline", treatment: "FUE Hair Transplant or Medical Hair Loss Treatment", link: "/hair/fue-hair-transplant-malaysia/" },
    { concern: "Thinning at the crown", treatment: "PRP Hair Treatment, Exosome Hair Treatment, Minoxidil, Finasteride", link: "/hair/prp-hair-treatment-malaysia/" },
    { concern: "Early-stage hair loss", treatment: "Minoxidil, Finasteride, PRP Hair Treatment", link: "/hair/hair-loss-treatment-malaysia/" },
    { concern: "Diffuse thinning across the scalp", treatment: "Hair Loss Treatment Plan or Mesotherapy", link: "/hair/mesotherapy-hair-loss-malaysia/" },
    { concern: "Weak hair density after stress or illness", treatment: "PRP Hair Treatment or Mesotherapy", link: "/hair/prp-hair-treatment-malaysia/" },
    { concern: "Patchy beard growth", treatment: "Beard Transplant", link: "/hair/beard-transplant-malaysia/" },
    { concern: "Looking for long-term hairline restoration", treatment: "Hair Transplant or FUE Hair Transplant", link: "/hair/hair-transplant-malaysia/" },
    { concern: "Want a non-surgical treatment first", treatment: "PRP, Mesotherapy, Exosome, Minoxidil", link: "/hair/exosome-hair-treatment-malaysia/" },
    { concern: "Ongoing male pattern hair loss", treatment: "Finasteride and Minoxidil, with doctor monitoring", link: "/hair/finasteride-treatment-malaysia/" },
    { concern: "Not sure what is causing your hair loss", treatment: "Doctor-Led Hair Loss Assessment", link: "/contact-us/" },
  ];

  const faqData = [
    { q: "How do I know which hair treatment I actually need?", a: "Start with a consultation. Most patients know the concern but not the exact treatment. The doctor will assess the pattern of hair loss, scalp condition, and stage of progression before recommending the most suitable option." },
    { q: "Can I treat hair loss without surgery?", a: "Yes. Many patients start with non-surgical options such as PRP, mesotherapy, exosome therapy, minoxidil, or finasteride. The right choice depends on whether the follicles are still active and how advanced the hair loss is." },
    { q: "When is a hair transplant the better option?", a: "Hair transplant is often considered when there is permanent loss in areas such as the front hairline, temples, crown, or beard, and when existing follicles are unlikely to recover enough with non-surgical treatment alone." },
    { q: "What is the difference between FUE hair transplant and general hair transplant?", a: "Hair transplant is the overall category. FUE is one specific method where individual follicular units are extracted and implanted with precision. It is popular because it allows natural-looking placement with minimal visible scarring." },
    { q: "Can PRP hair treatment regrow hair?", a: "PRP may help strengthen weaker follicles, improve scalp health, and support regrowth in suitable patients, especially in early or moderate thinning. Results vary depending on the condition of the follicles and the cause of hair loss." },
    { q: "Do I need both minoxidil and finasteride?", a: "Not always. Some patients use one, some use both, and some are not suitable for one of them. The recommendation depends on your pattern of loss, gender, medical history, and treatment goals." },
    { q: "How long does it take to see results from hair treatment?", a: "Hair treatment takes time. Some patients notice reduced shedding first, then gradual improvement in density over the following months. Most hair restoration treatments require consistency and realistic expectations." },
    { q: "Are hair treatments at Nexus Clinic KL doctor-led?", a: "Yes. At Nexus Clinic KL, all hair treatment plans begin with doctor assessment so suitability, safety, and realistic outcomes can be discussed clearly before treatment starts." },
    { q: "Can beard transplant look natural?", a: "Yes, when designed properly. Beard transplant uses carefully placed grafts to match the direction, angle, and pattern of natural facial hair growth." },
    { q: "Where is Nexus Clinic KL located?", a: "Nexus Clinic KL is located at Wisma UOA II, Jalan Pinang, Kuala Lumpur, with convenient access for patients visiting from KLCC and surrounding areas." },
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
            <span className="text-sm font-inter text-wine font-medium">Hair Treatments Hub • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Hair Treatments in Malaysia
          </motion.h1>
          
          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-wine font-georgia mt-4"
          >
            Doctor-Led Hair Restoration at Nexus Clinic KL
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Hair loss can happen gradually or all at once. For some people, it starts with more hair on the pillow 
            or in the shower. For others, it shows up as a receding hairline, thinning at the crown, patchy beard 
            growth, or overall loss of density.
            <br /><br />
            At Nexus Clinic KL, every hair treatment starts with a proper assessment. We look at the pattern of hair 
            loss, possible causes, scalp condition, and your treatment goals before recommending what actually makes 
            sense for you. From medical treatments to regenerative options and hair transplant solutions, our approach 
            is always doctor-led, clear, and personalized.
          </motion.p>

          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link  href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-wine text-light px-8 py-4 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book Free Hair Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Whatsapp message="Hi, I'm interested in hair treatments at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
          </motion.div>
          
          <motion.p
            variants={fadeInUp}
            className="text-sm text-taupe font-inter mt-4"
          >
            No Commitment Required • Doctor Consultation
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
                <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                <p className="font-inter text-taupe text-xs">Completed by licensed doctors</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">15+ Years Experience</p>
                <p className="font-inter text-taupe text-xs">Combined aesthetic medicine</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-wine" />
                </div>
                <p className="font-inter font-semibold text-brown text-sm">Doctor-Led Plans</p>
                <p className="font-inter text-taupe text-xs">Treatment based on diagnosis</p>
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

      {/* Hair Loss Has Causes, Patterns, and Stages */}
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
              Hair Loss Has Causes, Patterns, and Stages
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-lg text-taupe font-inter leading-relaxed mb-6">
            Hair loss is not one single condition. Some patients experience early thinning caused by genetics. 
            Some notice sudden shedding after stress, illness, hormonal change, or poor scalp health. Others 
            come in because the front hairline has moved back slowly over time, the crown has become thinner, 
            or beard growth has remained patchy.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="text-lg text-brown font-inter leading-relaxed">
            What matters is not just where the hair loss appears, but why it is happening. At Nexus Clinic 
            Kuala Lumpur, hair treatment begins with diagnosis, not guesswork. Our doctors assess the pattern 
            of loss, the strength of existing follicles, the condition of the scalp, and whether the concern 
            is best treated with medication, regenerative therapy, transplant planning, or a combination approach. 
            The goal is simple: protect existing hair, improve density where possible, and recommend the right 
            treatment based on the stage of hair loss.
          </motion.p>
        </motion.div>
      </section>

      {/* Hair Treatments Available - Grid Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Hair Treatments Available at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter mt-2">Browse our complete range of doctor-led hair restoration treatments in Malaysia.</p>
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
                <Link href={`/hair/${treatment.slug}/`}>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Find the Right Treatment for Your Hair Concern</h2>
            <p className="text-taupe font-inter mt-2">Not sure which treatment suits your stage of hair loss? Use this guide as a starting point.</p>
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
                There are many clinics offering hair treatments in Kuala Lumpur. The names of the treatments may 
                sound familiar from clinic to clinic, but the real difference is in how the decision is made.
              </p>
              <p className="text-brown font-inter leading-relaxed">
                At Nexus Clinic KL, we do not recommend treatment based only on trend, package, or assumption. 
                Every hair consultation is built around diagnosis. We assess whether the follicles are still active, 
                whether loss is progressing, and whether the concern should be treated medically, regeneratively, 
                surgically, or with a staged combination plan.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <p className="text-brown font-inter leading-relaxed mb-4">
                We explain what each option can do, what it cannot do, and what kind of maintenance may be needed. 
                If a transplant is too early, we will say so. If medication is more important than a procedure, 
                we will say that too. Our goal is not to sell the most treatment. It is to recommend the right one.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Doctor-led hair and scalp assessment before any recommendation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Treatment plans based on the stage and cause of hair loss</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Non-surgical and surgical options available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Conservative, realistic advice about regrowth and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Personalized plans for scalp care, medical support, and restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span className="text-brown font-inter text-sm">Clear explanation of treatment suitability, costs, and expected progress</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Why Patients Choose Nexus Clinic for Hair Restoration</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Doctor-led hair and scalp assessment before any recommendation",
              "Treatment plans based on the stage and cause of hair loss",
              "Non-surgical and surgical options available",
              "Conservative, realistic advice about regrowth and maintenance",
              "Personalized plans for scalp care, medical support, and restoration",
              "Clear explanation of treatment suitability, costs, and expected progress",
              "Convenient location at Wisma UOA II, Jalan Pinang, Kuala Lumpur",
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown font-inter text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Hair Restoration Is Often a Combination Strategy */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              Hair Restoration Is Often a Combination Strategy
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mb-8"></div>
            <p className="text-lg text-taupe font-inter leading-relaxed">
              Many patients assume there is one best treatment for hair loss. In reality, the right plan often 
              depends on whether the goal is to slow ongoing loss, improve current density, restore a hairline, 
              or maintain transplant results.
              <br /><br />
              For example, a patient with early thinning may benefit most from medical support such as minoxidil 
              or finasteride, together with regenerative treatments like PRP. A patient with a more advanced 
              receding hairline may need transplant planning for visible restoration, while also using medical 
              treatment to protect the remaining hair.
              <br /><br />
              At Nexus Clinic KL, we build treatment plans around short-term improvement and long-term maintenance. 
              That is what creates better, more stable results.
            </p>
          </motion.div>
        </motion.div>
      </section>
      <FAQWithSchema data={faqData} />

      {/* CTA Section */}
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
              Book Your Hair Consultation at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Every hair treatment journey starts the same way: a proper assessment, an honest explanation of 
              what is causing the hair loss, and a treatment plan built around what is actually suitable for you.
            </p>
            <p className="text-lg text-cream/90 font-inter max-w-2xl mx-auto">
              Whether you are considering a transplant, looking for non-surgical treatment, or simply want to 
              understand why your hair has become thinner, our doctors are here to guide you clearly and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link  href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/">
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
                message="Hi, I'd like to book a free hair consultation at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited Slots Available This Week | Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
            </p>
            <p className="text-cream/60 font-inter text-xs">
              Serving patients across Kuala Lumpur, Petaling Jaya, Bangsar, Mont Kiara, Ampang, KLCC, Chow Kit, and throughout Malaysia
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
            Nexus Clinic is an advanced aesthetic and hair restoration clinic in Kuala Lumpur offering doctor-led 
            treatments for hair loss, hair transplant, scalp rejuvenation, and personalized restoration planning. 
            We focus on clear diagnosis, natural-looking outcomes, and treatment plans built around long-term hair health.
          </p>
        </motion.div>
      </section>
    </div>
  );
}