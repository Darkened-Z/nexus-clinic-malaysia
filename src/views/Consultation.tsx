"use client";
import { motion } from "framer-motion";
import { Metadata } from "next";
import {
  Sparkles,
  Award,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface Treatment {
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
}

interface TreatmentCategory {
  name: string;
  slug: string;
  description: string;
  imageSrc: string;
  treatments: Treatment[];
}

export default function TreatmentsHubPage() {
  const [, setScrollPositions] = useState<Record<string, number>>({});

  const scrollSlider = (categorySlug: string, direction: 'left' | 'right'): void => {
    const container = document.getElementById(`slider-${categorySlug}`);
    if (container) {
      const scrollAmount = 340;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      setScrollPositions(prev => ({ ...prev, [categorySlug]: newScrollLeft }));
    }
  };

const treatmentCategories: TreatmentCategory[] = [
  {
    name: "Face Treatments",
    slug: "face",
    description: "Non-surgical facial aesthetics including dermal fillers, Botox, thread lifts, and skin boosters for natural-looking rejuvenation.",
    imageSrc: "/images/face/Cheek Filler.jpeg",
    treatments: [
      { name: "Botox Malaysia", slug: "botox-malaysia", description: "Wrinkle relaxation, jaw slimming, gummy smile & more.", imageUrl: "/images/face/botox-malaysia.jpeg" },
      { name: "Cheek Filler Malaysia", slug: "cheek-filler-malaysia", description: "Restore midface volume & lift the lower face.", imageUrl: "/images/face/Cheek Filler Treatment.webp" },
      { name: "Chin Filler Malaysia", slug: "chin-filler-malaysia", description: "Correct projection & restore facial balance.", imageUrl: "/images/face/Chin Dermal Filler.webp" },
      { name: "Dermal Filler Malaysia", slug: "dermal-filler-malaysia", description: "Volume restoration & facial contouring.", imageUrl: "/images/face/dermal-filler.jpeg" },
      { name: "Jawline Filler Malaysia", slug: "jawline-filler-malaysia", description: "Define jaw border & sharpen your profile.", imageUrl: "/images/face/Jawline Filler.webp" },
      { name: "Lip Filler Malaysia", slug: "lip-filler-malaysia", description: "Fuller lips & defined Cupid's bow.", imageUrl: "/images/face/Lip Filler.webp" },
      { name: "Nose Filler Malaysia", slug: "nose-filler-malaysia", description: "Higher bridge, hump camouflage & tip definition.", imageUrl: "/images/face/Nose Filler Treatment.webp" },
      { name: "Nose Thread Lift Malaysia", slug: "nose-thread-lift-malaysia", description: "Higher bridge, sharper tip & better profile.", imageUrl: "/images/face/Nose Thread Lift.webp" },
      { name: "Skin Booster Malaysia", slug: "skin-booster-malaysia", description: "Hydration, collagen & glow from within.", imageUrl: "/images/face/Skin Booster Treatment.webp" },
      { name: "Tear Trough Filler Malaysia", slug: "tear-trough-filler-malaysia", description: "Under-eye treatment for dark circles & hollows.", imageUrl: "/images/face/Tear Trough Filler.webp" },
      { name: "Under Eye Filler Malaysia", slug: "under-eye-filler-malaysia", description: "Patient-first guide to under-eye treatment.", imageUrl: "/images/face/Under Eye Filler.webp" },
    ]
  },
  {
    name: "Skin Treatments",
    slug: "skin",
    description: "Doctor-led solutions for acne, scars, pigmentation, melasma, and overall skin health with advanced laser and medical treatments.",
    imageSrc: "/images/skin/pigmentation-treatment.webp",
    treatments: [
      { name: "Acne Treatment Malaysia", slug: "acne-treatment-malaysia", description: "Clearer skin with doctor-led plans for active acne.", imageUrl: "/images/skin/acne-treatment.webp" },
      { name: "Acne Scar Treatment Malaysia", slug: "acne-scar-treatment-malaysia", description: "Improve texture & smoothness from indented scars.", imageUrl: "/images/skin/acne-scar-treatment.webp" },
      { name: "Pigmentation Treatment Malaysia", slug: "pigmentation-treatment-malaysia", description: "Even tone & reduce dark marks effectively.", imageUrl: "/images/skin/pigmentation-treatment.webp" },
      { name: "Melasma Treatment Malaysia", slug: "melasma-treatment-malaysia", description: "Safe & realistic management for stubborn pigment.", imageUrl: "/images/skin/melasma-treatment.webp" },
      { name: "Mole Removal Malaysia", slug: "mole-removal-malaysia", description: "Cosmetic removal with proper doctor evaluation.", imageUrl: "/images/skin/mole-removal.webp" },
      { name: "Hydrafacial Malaysia", slug: "hydrafacial-malaysia", description: "Cleanse, exfoliate & hydrate for radiant skin.", imageUrl: "/images/skin/hydrafacial.webp" },
      { name: "Pico Laser Malaysia", slug: "pico-laser-malaysia", description: "Precision pigmentation, tattoo & texture treatment.", imageUrl: "/images/skin/pico-laser.webp" },
      { name: "Dark Eye Circle Treatment Malaysia", slug: "dark-eye-circle-treatment-malaysia", description: "Address hollowing, pigmentation & vascular shadows.", imageUrl: "/images/skin/dark-eye-circle-treatment.webp" },
      { name: "Skin Whitening Treatment Malaysia", slug: "skin-whitening-treatment-malaysia", description: "Healthy, even-looking skin brightening.", imageUrl: "/images/skin/skin-whitening-treatment.webp" },
      { name: "Eczema Treatment Malaysia", slug: "eczema-treatment-malaysia", description: "Calm and protect the skin barrier.", imageUrl: "/images/skin/eczema-treatment.webp" },
      { name: "Keloid Treatment Malaysia", slug: "keloid-treatment-malaysia", description: "Careful approach for raised scar tissue.", imageUrl: "/images/skin/keloid-treatment.webp" },
      { name: "Rosacea Treatment Malaysia", slug: "rosacea-treatment-malaysia", description: "Manage redness, flushing & sensitivity.", imageUrl: "/images/skin/rosacea-treatment.webp" },
      { name: "Stretch Mark Removal Malaysia", slug: "stretch-mark-removal-malaysia", description: "Improve appearance based on mark age.", imageUrl: "/images/skin/stretch-mark.webp" },
      { name: "Laser Hair Removal Malaysia", slug: "laser-hair-removal-malaysia", description: "Long-term reduction for unwanted hair.", imageUrl: "/images/skin/laser-hair-removal.webp" },
      { name: "Tattoo Removal Malaysia", slug: "tattoo-removal-malaysia", description: "Doctor-guided laser based tattoo fading.", imageUrl: "/images/skin/tattoo-removal.webp" },
    ]
  },
  {
    name: "Hair Treatments",
    slug: "hair",
    description: "Comprehensive hair restoration from medical therapy to FUE hair transplant, designed for natural density and long-term confidence.",
    imageSrc: "/images/treatment/hair-restoration.webp",
    treatments: [
      { name: "Hair Transplant Malaysia", slug: "hair-transplant-malaysia", description: "Surgical hair restoration for long-term density.", imageUrl: "/images/hair/hair-transpalnt.jpeg" },
      { name: "FUE Hair Transplant Malaysia", slug: "fue-hair-transplant-malaysia", description: "Minimal scarring, natural-looking results.", imageUrl: "/images/hair/fue-hair-transplant.webp" },
      { name: "PRP Hair Treatment Malaysia", slug: "prp-hair-treatment-malaysia", description: "Support weaker follicles with growth factors.", imageUrl: "/images/hair/prp-hair-treatment.webp" },
      { name: "Hair Loss Treatment Malaysia", slug: "hair-loss-treatment-malaysia", description: "Personalized medical plans for hair loss.", imageUrl: "/images/hair/hair-loss-treatment.webp" },
      { name: "Beard Transplant Malaysia", slug: "beard-transplant-malaysia", description: "Fuller, natural facial hair restoration.", imageUrl: "/images/hair/beard-transplant.webp" },
      { name: "Mesotherapy Hair Loss Malaysia", slug: "mesotherapy-hair-loss-malaysia", description: "Deliver active ingredients to the scalp.", imageUrl: "/images/hair/mesotherapy-hair-loss.webp" },
      { name: "Exosome Hair Treatment Malaysia", slug: "exosome-hair-treatment-malaysia", description: "Advanced regenerative care for thinning.", imageUrl: "/images/hair/exesome-hair-treatment.webp" },
      { name: "Minoxidil Treatment Malaysia", slug: "minoxidil-treatment-malaysia", description: "Maintain density and slow thinning.", imageUrl: "/images/hair/minoxidil-treatment.webp" },
      { name: "Finasteride Treatment Malaysia", slug: "finasteride-treatment-malaysia", description: "Reduce hormonal follicle miniaturization.", imageUrl: "/images/hair/hair-transpalnt.jpeg" },
    ]
  },
  {
    name: "Weight Loss Treatments",
    slug: "weight-loss",
    description: "Medical weight loss programs with GLP-1 medications (Ozempic, Wegovy, Mounjaro) and non-surgical body contouring like CoolSculpting.",
    imageSrc: "/images/treatment/hero-ozempic.webp",
    treatments: [
      { name: "Ozempic Weight Loss Malaysia", slug: "ozempic-malaysia", description: "Appetite control support for medical weight loss.", imageUrl: "/images/weight-loss/Ozempic Weight Loss Treatment.webp" },
      { name: "Wegovy Weight Loss Malaysia", slug: "wegovy-malaysia", description: "Structured medical program for weight management.", imageUrl: "/images/weight-loss/Wegovy Weight Loss Treatment.webp" },
      { name: "Mounjaro Weight Loss Malaysia", slug: "mounjaro-malaysia", description: "Advanced GLP-1 treatment for weight loss.", imageUrl: "/images/weight-loss/Mounjaro Weight Loss Treatment.webp" },
      { name: "Duromine Weight Loss Malaysia", slug: "duromine-malaysia", description: "Short term doctor monitored weight loss support.", imageUrl: "/images/weight-loss/Duromine Weight Loss Treatment.webp" },
      { name: "Doctor Monitored Weight Loss Malaysia", slug: "doctor-monitored-weight-loss-malaysia", description: "Clinical guidance & structured follow-up.", imageUrl: "/images/weight-loss/Nexus Doctor Monitored Weight Loss.webp" },
      { name: "HCG Weight Loss Malaysia", slug: "hcg-programme-malaysia", description: "Doctor guidance on HCG related weight loss plans.", imageUrl: "/images/weight-loss/HCG Weight Loss Program Treatment.webp" },
      { name: "Fat Freezing Malaysia", slug: "fat-freezing-malaysia", description: "Target stubborn fat areas non-surgically.", imageUrl: "/images/weight-loss/Fat Freezing Treatment.webp" },
      { name: "CoolSculpting Malaysia", slug: "coolsculpting-malaysia", description: "Non-surgical body contouring for stubborn fat.", imageUrl: "/images/weight-loss/CoolSculpting Treatment.webp" },
      { name: "GLP 1 Programme Malaysia", slug: "glp-1-programme-malaysia", description: "Structured GLP-1 based weight loss programme.", imageUrl: "/images/weight-loss/GLP-1 Injection Treatment.webp" },
      { name: "Zepbound Weight Loss Malaysia", slug: "zepbound-malaysia", description: "Doctor-led information on Zepbound treatment.", imageUrl: "/images/weight-loss/ZepBound Weight Loss Treatment.webp" },
      { name: "IV Drip Weight Loss Malaysia", slug: "iv-drip-malaysia", description: "Supportive wellness & hydration IV options.", imageUrl: "/images/weight-loss/IV Drip for Weight Loss Treatment.webp" },
    ]
  },
  {
    name: "Regenerative Treatments",
    slug: "regenerative",
    description: "Hormone optimization, intimate wellness (P-Shot, O-Shot), and advanced therapies for energy, drive, and healthy aging.",
    imageSrc: "/images/regenerative/mysenchymal-stem-cell.webp",
    treatments: [
      { name: "Testosterone Therapy Malaysia", slug: "testosterone-therapy-malaysia", description: "Restore energy & drive for suitable patients.", imageUrl: "/images/regenerative/testosterone-therapy.webp" },
      { name: "ED Treatment Malaysia", slug: "ed-treatment-malaysia", description: "Confidence & sexual wellness through medically guided care.", imageUrl: "/images/regenerative/ed-treatment.webp" },
      { name: "Hormone Replacement Therapy Malaysia", slug: "hormone-replacement-therapy-malaysia", description: "Balance & symptom relief for hormone imbalance.", imageUrl: "/images/regenerative/hormone-replacement.webp" },
      { name: "PCOS Treatment Malaysia", slug: "pcos-treatment-malaysia", description: "Doctor-led support for polycystic ovary syndrome.", imageUrl: "/images/regenerative/pcos-treatment.webp" },
      { name: "Hypothyroidism Treatment Malaysia", slug: "hypothyroidism-treatment-malaysia", description: "Medical support for low thyroid function.", imageUrl: "/images/regenerative/hypothyroidism-treatment.webp" },
      { name: "Stem Cell Therapy Malaysia", slug: "stem-cell-therapy-malaysia", description: "Advanced regenerative treatment for tissue support.", imageUrl: "/images/regenerative/stem-cell-therapy.webp" },
      { name: "Anti-Aging Therapy Malaysia", slug: "anti-aging-therapy-malaysia", description: "Wellness-focused approach to healthy aging.", imageUrl: "/images/regenerative/anti-aging-therapy.webp" },
      { name: "Hormone Test Malaysia", slug: "hormone-test-malaysia", description: "Comprehensive testing to identify imbalances.", imageUrl: "/images/regenerative/hormone-test.webp" },
      { name: "Menopause Hormone Replacement Malaysia", slug: "menopause-hormone-replacement-malaysia", description: "Support for menopause-related symptoms.", imageUrl: "/images/regenerative/menopause-hormone.webp" },
      { name: "P-Shot Malaysia", slug: "p-shot-malaysia", description: "Regenerative intimate wellness for men.", imageUrl: "/images/regenerative/p-shot.webp" },
      { name: "O-Shot Malaysia", slug: "o-shot-malaysia", description: "Regenerative intimate wellness for women.", imageUrl: "/images/regenerative/o-shot.webp" },
      { name: "Shockwave Therapy Malaysia", slug: "shockwave-therapy-malaysia", description: "Non-invasive option for sexual wellness.", imageUrl: "/images/regenerative/shockwave-therapy.webp" },
    ]
  }
];

  return (
    <div className="w-full bg-light overflow-hidden">
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 md:py-28">
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
            <span className="text-sm font-inter text-wine font-medium">Our Services • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Comprehensive Aesthetic & Wellness Treatments
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our complete range of doctor-led, non-surgical treatments for face, skin, hair, weight loss, and regenerative health. 
            Every treatment begins with a proper assessment and a personalized plan designed around your goals.
          </motion.p>

          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-wine text-light px-8 py-4 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Whatsapp message="Hi, I'm interested in treatments at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
          </motion.div>
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
                <p className="font-inter font-semibold text-brown text-sm">MOH-Approved Products</p>
                <p className="font-inter text-taupe text-xs">For every injectable treatment</p>
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

      {/* Treatments by Category - Main Grid */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-7xl">
          {treatmentCategories.map((category, idx) => (
            <motion.div
              key={category.slug}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`mb-24 last:mb-0`}
            >
              {/* Category Header */}
              <div className={`grid md:grid-cols-2 gap-12 items-center mb-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div variants={fadeInLeft} className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/30 to-transparent z-10" />
                  <Image 
                    src={category.imageSrc} 
                    alt={category.name} 
                    fill 
                    className="object-cover" />
                </motion.div>
                
                <motion.div variants={fadeInRight}>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="font-georgia text-3xl md:text-4xl text-brown">{category.name}</h2>
                  </div>
                  <p className="text-taupe font-inter text-lg leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <Link href={`/${category.slug}/`}>
                    <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold border-b border-wine/30 hover:border-wine transition-all pb-1">
                      View All {category.name}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Slider Section */}
              <div className="relative">
                {/* Left Navigation Button */}
                <button
                  onClick={() => scrollSlider(category.slug, 'left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-light/90 hover:bg-wine text-wine hover:text-light rounded-full p-2 shadow-lg transition-all duration-300 -ml-3 md:-ml-4 border border-taupe/20"
                  aria-label="Previous treatments"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Slider Container */}
                <div
                  id={`slider-${category.slug}`}
                  className="overflow-x-auto scroll-smooth pb-6"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <style jsx>{`
                    div[id^="slider-"]::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  <div className="flex gap-6 md:gap-8" style={{ minWidth: 'min-content' }}>
                    {category.treatments.map((treatment) => (
                      <motion.div
                        key={treatment.slug}
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="w-[280px] md:w-[320px] flex-shrink-0 bg-light rounded-xl border border-taupe/10 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                      >
                        <Link href={`/${category.slug}/${treatment.slug}/`} className="block h-full">
                          {/* Image Container */}
                          <div className="h-48 relative overflow-hidden bg-wine/5">
                            <Image
                              src={treatment.imageUrl || category.imageSrc}
                              alt={treatment.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                (e.target as HTMLImageElement).src = category.imageSrc;
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brown/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="p-5">
                            <h3 className="font-georgia text-lg text-brown mb-2 line-clamp-1">{treatment.name}</h3>
                            <p className="text-taupe font-inter text-sm mb-4 line-clamp-2">{treatment.description}</p>
                            <div className="inline-flex items-center gap-1 text-wine font-inter text-sm font-medium group-hover:gap-2 transition-all">
                              Learn More
                              <ArrowRight className="w-3 h-3" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Navigation Button */}
                <button
                  onClick={() => scrollSlider(category.slug, 'right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-light/90 hover:bg-wine text-wine hover:text-light rounded-full p-2 shadow-lg transition-all duration-300 -mr-3 md:-mr-4 border border-taupe/20"
                  aria-label="Next treatments"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Gradient fade on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Nexus Clinic Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Why Patients Choose Nexus Clinic KL</h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-wine shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-1">Doctor-Led Assessment</h3>
                  <p className="text-taupe font-inter">Every treatment begins with a proper diagnosis by a licensed medical doctor.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-wine shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-1">Personalized Treatment Plans</h3>
                  <p className="text-taupe font-inter">Recommendations based on your unique anatomy, concerns, and goals.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-wine shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-1">MOH-Approved Products & Devices</h3>
                  <p className="text-taupe font-inter">All injectables and lasers meet Malaysia's strict safety standards.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-wine shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-1">Natural-Looking Results</h3>
                  <p className="text-taupe font-inter">Conservative technique as a clinical standard, not a marketing claim.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-wine shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-1">Transparent & Honest</h3>
                  <p className="text-taupe font-inter">Clear pricing, realistic expectations, and honest advice about suitability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-wine shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-1">Central KLCC Location</h3>
                  <p className="text-taupe font-inter">Conveniently located at Wisma UOA II, Jalan Pinang, Kuala Lumpur.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

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
              Book Your Consultation at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Ready to explore your treatment options? Every journey starts with a proper assessment by a licensed doctor, 
              an honest explanation of what will actually work for you, and a clear treatment plan with transparent pricing.
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
                message="Hi, I'd like to book a free consultation at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited Slots Available This Week | Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
            </p>
            <p className="text-cream/60 font-inter text-xs">
              Serving patients across Kuala Lumpur, Petaling Jaya, Bangsar, Mont Kiara, Ampang, KLCC, and throughout Malaysia
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}