"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Phone,
  ChevronRight,
  Calendar,
  Search,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/src/lib/vibration.css";
import Image from "next/image";
import Link from "next/link";
const navItems = [
  {
    label: "nav.weightLoss",
    fallback: "Weight Loss",
    href: "/weight-loss/",
    submenu: {
      weightLoss: {
        items: [
        { key: "submenu.weightLoss.ozempic", fallback: "ozempic-malaysia" },
        { key: "submenu.weightLoss.wegovy", fallback: "wegovy-malaysia" },
        { key: "submenu.weightLoss.mounjaro", fallback: "mounjaro-malaysia" },
        { key: "submenu.weightLoss.duromine", fallback: "duromine-malaysia" },
        { key: "submenu.weightLoss.doctorMonitored", fallback: "doctor-monitored-weight-loss-malaysia" },
        { key: "submenu.weightLoss.hcgWeightLoss", fallback: "hcg-programme-malaysia" },
        { key: "submenu.weightLoss.fatFreezing", fallback: "fat-freezing-malaysia" },
        { key: "submenu.weightLoss.coolSculpting", fallback: "coolsculpting-malaysia" },
        { key: "submenu.weightLoss.glp1", fallback: "glp-1-programme-malaysia" },
        { key: "submenu.weightLoss.zepbound", fallback: "zepbound-malaysia" },
        { key: "submenu.weightLoss.ivDrips", fallback: "iv-drip-malaysia" },
        ],
      },
    },
  },
  {
    label: "nav.aestheticTreatments",
    fallback: "Aesthetic Treatments",
    href: "#",
    submenu: {
      skin: {
        label: "categories.skin",
        fallback: "Skin",
        items: [
          { key: "submenu.skin.acneTreatment", fallback: "acne-treatment-malaysia" },
          { key: "submenu.skin.acneScar", fallback: "acne-scar-treatment-malaysia" },
          { key: "submenu.skin.melasma", fallback: "melasma-treatment-malaysia" },
          { key: "submenu.skin.moleRemoval", fallback: "mole-removal-malaysia" },
          { key: "submenu.skin.hydrafacial", fallback: "hydrafacial-malaysia" },
          { key: "submenu.skin.picoLaser", fallback: "pico-laser-malaysia" },
          { key: "submenu.skin.darkCircle", fallback: "dark-eye-circle-treatment-malaysia" },
          { key: "submenu.skin.whitening", fallback: "skin-whitening-treatment-malaysia" },
          { key: "submenu.skin.eczema", fallback: "eczema-treatment-malaysia" },
          { key: "submenu.skin.keloid", fallback: "keloid-treatment-malaysia" },
          { key: "submenu.skin.rosacea", fallback: "rosacea-treatment-malaysia" },
          { key: "submenu.skin.laserHair", fallback: "laser-hair-removal-malaysia" },
          { key: "submenu.skin.tattooRemoval", fallback: "tattoo-removal-malaysia" },
          { key: "submenu.skin.chemicalPeel", fallback: "chemical-peel-malaysia" },
          { key: "submenu.skin.pigmentation", fallback: "pigmentation-treatment-malaysia" },
          { key: "submenu.skin.stretchMark", fallback: "stretch-mark-removal-malaysia" },
        ],
      },
      face: {
        label: "categories.face",
        fallback: "Face",
        items: [
              { key: "submenu.face.botox", fallback: "botox-malaysia" },
              { key: "submenu.face.cheekFiller", fallback: "cheek-filler-malaysia" },
              { key: "submenu.face.chinFiller", fallback: "chin-filler-malaysia" },
              { key: "submenu.face.dermalFiller", fallback: "dermal-filler-malaysia" },
              { key: "submenu.face.jawlineFiller", fallback: "jawline-filler-malaysia" },
              { key: "submenu.face.lipFiller", fallback: "lip-filler-malaysia" },
              { key: "submenu.face.noseFiller", fallback: "nose-filler-malaysia" },
              { key: "submenu.face.noseThread", fallback: "nose-thread-lift-malaysia" },
              { key: "submenu.face.skinBooster", fallback: "skin-booster-malaysia" },
              { key: "submenu.face.tearTrough", fallback: "tear-trough-filler-malaysia" },
              { key: "submenu.face.underEye", fallback: "under-eye-filler-malaysia" },
              { key: "submenu.face.newestML", fallback: "newest-malaysia" },
              { key: "submenu.face.profhiloML", fallback: "profhilo-malaysia" },
              { key: "submenu.face.sculptra", fallback: "sculptra-malaysia" },
              { key: "submenu.face.karisma", fallback: "karisma-malaysia" },
              { key: "submenu.face.plinest", fallback: "plinest-malaysia" },
              { key: "submenu.face.rejuran", fallback: "rejuran-malaysia" },
        ],
      },
      hair: {
        label: "categories.hair",
        fallback: "Hair",
        items: [
          { key: "submenu.hair.transplant", fallback: "hair-transplant-malaysia" },
          { key: "submenu.hair.fue", fallback: "fue-hair-transplant-malaysia" },
          { key: "submenu.hair.prp", fallback: "prp-hair-treatment-malaysia" },
          { key: "submenu.hair.lossTreatment", fallback: "hair-loss-treatment-malaysia" },
          { key: "submenu.hair.beard", fallback: "beard-transplant-malaysia" },
          { key: "submenu.hair.mesotherapy", fallback: "mesotherapy-hair-loss-malaysia" },
          { key: "submenu.hair.exosome", fallback: "exosome-hair-treatment-malaysia" },
          { key: "submenu.hair.minoxidil", fallback: "minoxidil-treatment-malaysia" },
          { key: "submenu.hair.finasteride", fallback: "finasteride-treatment-malaysia" },
        ],
      },
      regenerative: {
        label: "categories.regenerative",
        fallback: "Regenerative",
        items: [
          { key: "submenu.regenerative.testosterone", fallback: "testosterone-therapy-malaysia" },
          { key: "submenu.regenerative.ed", fallback: "ed-treatment-malaysia" },
          { key: "submenu.regenerative.hormoneReplacement", fallback: "hormone-replacement-therapy-malaysia" },
          { key: "submenu.regenerative.pcos", fallback: "pcos-treatment-malaysia" },
          { key: "submenu.regenerative.hypothyroidism", fallback: "hypothyroidism-treatment-malaysia" },
          { key: "submenu.regenerative.stemCell", fallback: "stem-cell-therapy-malaysia" },
          { key: "submenu.regenerative.antiAging", fallback: "anti-aging-therapy-malaysia" },
          { key: "submenu.regenerative.hormoneTest", fallback: "hormone-test-malaysia" },
          { key: "submenu.regenerative.menopause", fallback: "menopause-hormone-replacement-malaysia" },
          { key: "submenu.regenerative.pShot", fallback: "p-shot-malaysia" },
          { key: "submenu.regenerative.oShot", fallback: "o-shot-malaysia" },
          { key: "submenu.regenerative.shockwave", fallback: "shockwave-therapy-malaysia" },
        ],
      },
    },
  },
  { label: "nav.products", fallback: "Products", href: "/products" },
  { label: "nav.gallery", fallback: "Gallery", href: "/gallery" },
  { label: "nav.doctors", fallback: "Doctors", href: "/doctors" },
  { label: "nav.blogs", fallback: "Blogs", href: "/blogs" },
];

const languages = [
  { code: "EN", label: "English", flag: "🇺🇸" },  
  { code: "ID", label: "Indonesia", flag: "🇮🇩" },
  { code: "MS", label: "Melayu", flag: "🇲🇾" },
  { code: "ZH", label: "中文", flag: "🇨🇳" },
  { code: "AR", label: "العربية", flag: "🇸🇦" },
];

const categoryLabels: Record<string, { key: string; fallback: string }> = {
  weightLoss: { key: "categories.weightLoss", fallback: "Fat & Weight Loss" },
  skin: { key: "categories.skin", fallback: "Skin" },
  face: { key: "categories.face", fallback: "Face" },
  hair: { key: "categories.hair", fallback: "Hair" },
  regenerative: { key: "categories.regenerative", fallback: "Regenerative" },
};

type SearchResult = { label: string; href: string; category: string };

const getCategoryPath = (category: string): string => {
  const mapping: Record<string, string> = {
    weightLoss: 'weight-loss',
  };
  return mapping[category] || category;
};

const buildSearchIndex = (getText: (key: string, fallback: string) => string): SearchResult[] => {
  const results: SearchResult[] = [];
  navItems.forEach((item) => {
    if (item.submenu) {
      Object.entries(item.submenu).forEach(([category, categoryData]: [string, any]) => {
        categoryData.items.forEach((subItem: { key: string; fallback: string }) => {
          results.push({
            label: getText(subItem.key, subItem.fallback),
            href: `/${getCategoryPath(category)}/${subItem.fallback}/`,
            category: category,
          });
        });
      });
    } else if (item.href && item.href !== "#") {
      results.push({ 
        label: getText(item.label, item.fallback), 
        href: item.href, 
        category: "page" 
      });
    }
  });
  return results;
};


const highlightMatch = (text: string, query: string) => {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-wine font-semibold">
        {text.slice(idx, idx + query.length)}
      </span>
      {text.slice(idx + query.length)}
    </>
  );
};


const DesktopSearchBox = ({
  isScrolled,
  locale,
  getText,
  searchIndex,
}: {
  isScrolled: boolean;
  locale?: string;
  getText: (key: string, fallback: string) => string;
  searchIndex: SearchResult[];
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedQuery(val), 300);
  };

  const results =
    debouncedQuery.trim().length > 1
      ? searchIndex
          .filter((item) =>
            item.label.toLowerCase().includes(debouncedQuery.toLowerCase()),
          )
          .slice(0, 8)
      : [];

  useEffect(() => {
    setIsOpen(results.length > 0);
  }, [results.length]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (href: string) => {
    const localizedHref =
      locale && locale !== "en" ? `/${locale}${href}` : href;
    window.location.href = localizedHref;
    setQuery("");
    setDebouncedQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-cream/60 border-taupe/20 hover:border-wine/30 focus-within:border-wine/50 focus-within:bg-light"
            : "bg-light/20 border-light/30 hover:border-light/50 focus-within:bg-light/30 focus-within:border-light/60"
        }`}
      >
        <Search
          size={15}
          className={isScrolled ? "text-taupe" : "text-brown/80"}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder={getText("search.placeholder", "Search treatments...")}
          className="bg-transparent outline-none text-sm font-inter w-36 md:w-36 placeholder:text-taupe/60 transition-all duration-300 text-brown"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setDebouncedQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="text-taupe hover:text-wine transition-colors"
          >
            <X size={13} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-72 bg-light rounded-2xl shadow-2xl shadow-brown/10 border border-cream overflow-hidden z-50"
          >
            <div className="px-4 py-2.5 border-b border-cream">
              <p className="text-taupe text-xs font-inter">
                {results.length} result{results.length !== 1 ? "s" : ""} for
                &ldquo;{debouncedQuery}&rdquo;
              </p>
            </div>
            <ul className="py-2 max-h-72 overflow-y-auto">
              {results.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <button
                    onClick={() => handleSelect(item.href)}
                    className="w-full text-left flex items-center gap-3 px-4 py-2.5 hover:bg-cream/60 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                      <Search size={13} className="text-wine" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-brown text-sm font-inter truncate">
                        {highlightMatch(item.label, debouncedQuery)}
                      </p>
                      <p className="text-taupe/70 text-xs font-inter">
                        {getText(
                          categoryLabels[item.category]?.key || item.category,
                          categoryLabels[item.category]?.fallback || item.category
                        )}
                      </p>
                    </div>
                    <ChevronRight
                      size={14}
                      className="text-taupe ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Mobile Inline Search
const MobileInlineSearch = ({
  onClose,
  isScrolled,
  locale,
  getText,
  searchIndex,
}: {
  onClose: () => void;
  isScrolled: boolean;
  locale?: string;
  getText: (key: string, fallback: string) => string;
  searchIndex: SearchResult[];
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedQuery(val), 300);
  };

  const results =
    debouncedQuery.trim().length > 1
      ? searchIndex
          .filter((item) =>
            item.label.toLowerCase().includes(debouncedQuery.toLowerCase()),
          )
          .slice(0, 7)
      : [];

  useEffect(() => {
    setIsOpen(results.length > 0);
  }, [results.length]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (href: string) => {
    const localizedHref =
      locale && locale !== "en" ? `/${locale}${href}` : href;
    window.location.href = localizedHref;
  };

  const handleClearOrClose = () => {
    if (query) {
      setQuery("");
      setDebouncedQuery("");
      setIsOpen(false);
      inputRef.current?.focus();
    } else {
      onClose();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-200 ${
          isScrolled
            ? "bg-cream/80 border-taupe/30 focus-within:border-wine/50"
            : "bg-light/90 border-light/40 focus-within:border-light/70"
        }`}
      >
        <Search size={16} className="text-taupe shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder={getText("search.placeholder", "Search treatments...")}
          className="bg-transparent outline-none text-sm font-inter text-brown placeholder:text-taupe/50 flex-1 min-w-0"
        />
        <button
          onClick={handleClearOrClose}
          className="text-taupe hover:text-wine transition-colors shrink-0 p-0.5"
        >
          <X size={16} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 right-0 mt-2 bg-light rounded-2xl shadow-2xl shadow-brown/15 border border-cream overflow-hidden z-60"
          >
            <div className="px-4 py-2.5 border-b border-cream">
              <p className="text-taupe text-xs font-inter">
                {results.length} result{results.length !== 1 ? "s" : ""} for
                &ldquo;{debouncedQuery}&rdquo;
              </p>
            </div>
            <ul className="py-2 max-h-60 overflow-y-auto">
              {results.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleSelect(item.href)}
                    className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-cream/60 active:bg-cream transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                      <Search size={13} className="text-wine" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-brown text-sm font-inter truncate">
                        {highlightMatch(item.label, debouncedQuery)}
                      </p>
                      <p className="text-taupe/70 text-xs">
                        {getText(
                          categoryLabels[item.category]?.key || item.category,
                          categoryLabels[item.category]?.fallback || item.category
                        )}
                      </p>
                    </div>
                    <ChevronRight size={14} className="text-taupe shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Main Navbar ──────────
const Navbar = ({ locale }: { locale?: string }) => {
  const { t: tFallback, i18n } = useTranslation('common');
  const t = useMemo(
    () => (typeof i18n.getFixedT === 'function' ? i18n.getFixedT(locale || 'en', 'common') : tFallback),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale, i18n]
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isBlogsPage, setIsBlogsPage] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(locale);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname() ?? "/";

  // Check if current page is blogs page
  useEffect(() => {
    const isBlogs = pathname.includes('/blogs/');
    setIsBlogsPage(isBlogs);
    
    // On blogs page, force locale to 'en' for display
    if (isBlogs) {
      setCurrentLocale('en');
    } else {
      setCurrentLocale(locale);
    }
  }, [pathname, locale]);

  const getText = useCallback((key: string, fallback: string) => {
    if (isBlogsPage) {
      return fallback; // Always return English fallback on blogs page
    }
    const translated = t(key);
    return translated === key ? fallback : translated;
  }, [isBlogsPage, t]);

  const [searchIndex, setSearchIndex] = useState<SearchResult[]>([]);

  useEffect(() => {
    const newSearchIndex = buildSearchIndex(getText);
    setSearchIndex(newSearchIndex);
  }, [getText]);
  

  const getLocaleHref = useCallback((langCode: string) => {
    if (isBlogsPage || pathname.includes('/blogs/')) {
      return '/blogs/';
    }
    
    const localePrefixRegex = /^\/(id|ar|ms|zh)(\/|$)/;
    const hasPrefixMatch = pathname.match(localePrefixRegex);
    
    let basePath = pathname;
    
    if (hasPrefixMatch) {
      basePath = pathname.replace(localePrefixRegex, "/");
    } else {
      basePath = pathname;
    }
    
    const cleanPath = basePath === "" || basePath === "/" ? "/" : basePath;
    
    if (langCode === "en") {
      return cleanPath;
    }
    
    return cleanPath === "/" ? `/${langCode}` : `/${langCode}${cleanPath}`;
  }, [pathname, isBlogsPage]);

  const handleLangClick = useCallback((langCode: string) => {
    document.cookie = `i18next=${langCode}; path=/; max-age=31536000; SameSite=Lax`;
    
    const newHref = getLocaleHref(langCode);
    
    const currentLang = currentLocale || 'en';
    if (langCode === currentLang && newHref === pathname) {
      setIsLangOpen(false);
      return;
    }
    
    setTimeout(() => {
      window.location.href = newHref;
    }, 50);
  }, [getLocaleHref, currentLocale, pathname]);

  const getNavHref = useCallback((path: string) => {
    if (path === '/blogs/' || path === '/blogs' || path.startsWith('/blogs/')) {
      return '/blogs/';
    }
    
    if (isBlogsPage) {
      return path;
    }

    if (!currentLocale || currentLocale === "en") return path;
    
    return `/${currentLocale}${path}`;
  }, [currentLocale, isBlogsPage]);

  useEffect(() => {
    const checkTime = () => {
      const malaysiaTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kuala_Lumpur",
      });
      const now = new Date(malaysiaTime);
      const hour = now.getHours();
      setIsActive(hour >= 9 && hour < 18);
    };
    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setMobileSubmenu(null);
        setIsMobileSearchOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
    setIsMenuOpen(false);
    setMobileSubmenu(null);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-light/95 backdrop-blur-xl shadow-lg shadow-brown/5 mt-4 md:mt-0"
            : "bg-transparent"
        }`}
      >
      {/* Top Bar */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-green text-light/90 text-xs fixed top-0 left-0 right-0 z-50"
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between py-2">

              {/* LEFT SIDE */}
              <div className="flex items-center gap-4">
                
                {isScrolled ? (
                  <Link
                    className="flex items-center"
                    href="/"
                  >
                    <Image
                      src="/images/logo_nexus_white.webp"
                      alt="Nexus Logo"
                      width={120}
                      height={40}
                      className="h-auto w-auto"
                    />
                  </Link>
                ) : (
                  <div className="hidden lg:flex items-center gap-6">
                    <a
                      href="tel:0167025699"
                      className="flex items-center gap-2 hover:text-cream transition-colors"
                    >
                      <Phone size={12} />
                      <span>016-702 5699</span>
                    </a>

                    <span className="text-light/40">|</span>

                    <span className="text-light">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </span>
                  </div>
                )}

              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center">
                <a
                  href="https://api.whatsapp.com/send?phone=60168245699&text=Any%20Dr%20Available%20%3F%20(%20HB%20)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-green text-green hover:bg-transparent hover:text-white hover:border-white font-semibold text-sm px-5 py-2 rounded-full transition-all duration-300 animate-vibration-slow"
                >
                 {getText("nav.topButton", "Consult with experts")}
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

        {/* Main Nav */}
        {!isScrolled && (
        <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <div className="flex items-center h-16 lg:h-20 gap-3 mt-16">
            {/* Logo */}
            <AnimatePresence>
              {!isMobileSearchOpen && (
                <Link
                  href={getNavHref("/")}
                  className="shrink-0 relative z-10 overflow-hidden transition-transform duration-200 hover:translate-x-1"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Nexus Clinic Logo"
                    width={150}
                    height={150}
                    loading="lazy"
                    className="h-full w-auto"
                  />
                </Link>
              )}
            </AnimatePresence>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 ml-auto">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.submenu && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.submenu ? undefined : getNavHref(item.href)}
                    className={`group flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-inter font-medium transition-all duration-300 cursor-pointer ${
                      isScrolled
                        ? activeDropdown === item.label
                          ? "bg-wine/10 text-wine"
                          : "text-brown hover:text-wine hover:bg-cream"
                        : activeDropdown === item.label
                          ? "bg-light/20 text-wine"
                          : "text-wine/90 hover:bg-light/10"
                    }`}
                  >
                    <span>{getText(item.label, item.fallback)}</span>
                    {item.submenu && (
                      <motion.div
                        animate={{
                          rotate: activeDropdown === item.label ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    )}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3"
                        style={{
                          width:
                            Object.keys(item.submenu).length > 1
                              ? "720px"
                              : "280px",
                        }}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-light rotate-45 rounded-sm shadow-lg" />
                        <div className="relative bg-light rounded-2xl shadow-2xl shadow-brown/10 border border-cream overflow-hidden">
                          <div className="p-6">
                            <div
                              className={`grid gap-8 ${
                                Object.keys(item.submenu).length > 1
                                  ? "grid-cols-4"
                                  : "grid-cols-1"
                              }`}
                            >
                              {Object.entries(item.submenu).map(
                                ([category, categoryData]: [string, any]) => (
                                  <div key={category}>
                                    <div className="flex items-center gap-2 mb-4">
                                      <h4 className="text-brown font-georgia font-semibold text-sm">
                                        {getText(
                                          categoryData.label || categoryLabels[category]?.key || category,
                                          categoryData.fallback || categoryLabels[category]?.fallback || category
                                        )}
                                      </h4>
                                    </div>
                                    <div className="h-px bg-linear-to-r from-wine/20 to-transparent mb-3" />
                                    <ul className="space-y-0.5">
                                      {categoryData.items.map(
                                        (subItem: { key: string; fallback: string }, idx: number) => (
                                          <li key={idx}>
                                            <Link
                                              href={getNavHref(`/${getCategoryPath(category)}/${subItem.fallback}/`)}
                                              className="group/item flex items-center gap-2 text-taupe hover:text-wine text-sm py-1.5 transition-all duration-200"
                                            >
                                              <span className="w-1.5 h-1.5 rounded-full bg-taupe/30 group-hover/item:bg-wine group-hover/item:scale-125 transition-all duration-200" />
                                              <span>{getText(subItem.key, subItem.fallback)}</span>
                                            </Link>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                          <div className="bg-linear-to-r from-cream to-cream/50 px-6 py-4 border-t border-rose/10">
                            <a
                              href={getNavHref("/contact-us/")}
                              className="flex items-center justify-between group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                                  <Calendar size={18} className="text-wine" />
                                </div>
                                <div>
                                  <p className="text-brown font-inter font-medium text-sm">
                                    {getText("common.startTransformation", "Start Your Transformation")}
                                  </p>
                                  <p className="text-taupe text-xs">
                                    {getText("nav.bookConsultation", "Book Your Consultation")}
                                  </p>
                                </div>
                              </div>
                              <motion.div
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-1 text-wine font-inter font-semibold text-sm"
                              >
                                <span>{getText("nav.bookNow", "Book Now")}</span>
                                <ChevronRight size={16} />
                              </motion.div>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Desktop Search */}
              <div className="ml-2">
                <DesktopSearchBox 
                  isScrolled={isScrolled} 
                  locale={currentLocale} 
                  getText={getText}
                  searchIndex={searchIndex}
                />
              </div>

              {/* Language Selector - Hide on blogs page */}
              {!isBlogsPage && (
                <div className="relative ml-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className={`flex cursor-pointer items-center gap-2 px-3 py-2.5 rounded-full transition-all duration-300 ${
                      isScrolled
                        ? "text-brown hover:bg-cream"
                        : "text-brown/90 hover:text-brown hover:bg-light/10"
                    }`}
                  >
                    <Globe size={16} />
                    <span className="text-sm font-inter font-medium">
                      {currentLocale?.toUpperCase() || "EN"}
                    </span>
                    <ChevronDown size={12} />
                  </motion.button>

                  <AnimatePresence>
                    {isLangOpen && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0"
                          onClick={() => setIsLangOpen(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-3 bg-light rounded-xl shadow-xl shadow-brown/10 py-2 min-w-44 border border-cream overflow-hidden"
                        >
                          <div className="px-3 pb-2 mb-2 border-b border-cream">
                            <p className="text-taupe text-xs font-inter">
                              {getText("nav.selectLanguage", "Select Language")}
                            </p>
                          </div>
                          {languages.map((lang, idx) => (
                            <Link
                              key={lang.code}
                              href={getLocaleHref(lang.code.toLowerCase())}
                              onClick={() => handleLangClick(lang.code.toLowerCase())}
                              className="flex items-center gap-3 px-4 py-2.5 text-brown border-b border-cream transition-colors hover:bg-[#F3EFEE] hover:border-[#8C4F58] last:border-0 hover:scale-102"
                            >
                              {/* <span className="text-lg">{lang.flag}</span> */}
                              <div>
                                <span className="text-sm font-inter font-medium block">
                                  {lang.code}
                                </span>
                                <span className="text-xs text-taupe">
                                  {lang.label}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* CTA */}
              <Link
                href={getNavHref("/contact-us/")}
                className="ml-4 bg-green text-light px-6 py-2.5 rounded-full font-inter font-semibold text-sm shadow-lg shadow-green/20 hover:bg-green/90 transition-all duration-300 flex items-center gap-2 hover:shadow-green/30 hover:scale-105"
              >
                <Calendar size={16} />
                <span>{getText("nav.bookNow", "Book Now")}</span>
              </Link>
            </nav>

            {/* Mobile: Right Actions */}
            <div className="flex items-center gap-1 ml-auto lg:hidden">
              <AnimatePresence mode="wait">
                {isMobileSearchOpen ? (
                  <motion.div
                    key="search-open"
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ transformOrigin: "right center" }}
                    className="w-full"
                  >
                    <MobileInlineSearch
                      isScrolled={isScrolled}
                      onClose={closeMobileSearch}
                      locale={currentLocale}
                      getText={getText}
                      searchIndex={searchIndex}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="icons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1"
                  >
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={openMobileSearch}
                      className={`p-2.5 rounded-full transition-colors ${
                        isScrolled
                          ? "text-brown hover:bg-cream"
                          : "text-brown hover:bg-light/10"
                      }`}
                      aria-label="Open search"
                    >
                      <Search size={20} />
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        setMobileSubmenu(null);
                      }}
                      className={`p-2.5 mr-4 rounded-full transition-colors ${
                        isScrolled
                          ? "text-brown hover:bg-cream"
                          : "text-brown hover:bg-light/10"
                      }`}
                      aria-label="Toggle menu"
                    >
                      <AnimatePresence mode="wait">
                        {isMenuOpen ? (
                          <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <X size={22} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <Menu size={22} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
           )}
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden bg-light border-t border-cream shadow-xl shadow-brown/10"
            >
              <div className="max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain max-w-screen">
                <div className="px-4 py-6 max-w-screen space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileSubmenu(
                                mobileSubmenu === item.label
                                  ? null
                                  : item.label,
                              )
                            }
                            className={`w-full max-w-[93%] flex items-center justify-between py-3.5 px-4 rounded-xl transition-all duration-200 ${
                              mobileSubmenu === item.label
                                ? "bg-cream text-wine"
                                : "text-brown hover:bg-cream/50"
                            }`}
                          >
                            <span className="font-inter font-medium">
                              {getText(item.label, item.fallback)}
                            </span>
                            <motion.div
                              animate={{
                                rotate: mobileSubmenu === item.label ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {mobileSubmenu === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="bg-cream/30 rounded-xl mt-2 mb-3 p-4 space-y-6">
                                  {Object.entries(item.submenu).map(
                                    ([category, categoryData]: [string, any], catIdx) => (
                                      <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: catIdx * 0.05 }}
                                      >
                                        <div className="flex items-center gap-2 mb-3">
                                          <h5 className="text-wine font-georgia font-semibold text-sm">
                                            {getText(
                                              categoryData.label || categoryLabels[category]?.key || category,
                                              categoryData.fallback || categoryLabels[category]?.fallback || category
                                            )}
                                          </h5>
                                        </div>
                                        <div className="grid grid-cols-1 gap-1">
                                          {categoryData.items.map(
                                            (subItem: { key: string; fallback: string }, idx: number) => (
                                              <Link
                                                key={idx}
                                                href={getNavHref(`/${getCategoryPath(category)}/${subItem.fallback}/`)}
                                                className="text-taupe hover:text-wine text-sm py-2.5 px-3 rounded-lg hover:bg-light transition-all duration-200 flex items-center gap-2"
                                              >
                                                <span className="w-1.5 h-1.5 rounded-full bg-taupe/30" />
                                                {getText(subItem.key, subItem.fallback)}
                                              </Link>
                                            ),
                                          )}
                                        </div>
                                      </motion.div>
                                    ),
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <a
                          href={getNavHref(item.href)}
                          className="flex items-center gap-3 text-brown hover:text-wine hover:bg-cream/50 py-3.5 px-4 rounded-xl font-inter font-medium transition-all duration-200"
                        >
                          {getText(item.label, item.fallback)}
                        </a>
                      )}
                    </motion.div>
                  ))}

                  {/* Divider */}
                  <div className="my-6 h-px bg-linear-to-r from-transparent via-taupe/20 to-transparent" />

                  {/* Mobile Language Selector - Hide on blogs page */}
                  {!isBlogsPage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-taupe text-xs font-inter uppercase tracking-wider mb-3 px-4">
                        {getText("nav.selectLanguage", "Select Language")}
                      </p>
                      <div className="flex flex-wrap gap-2 px-2">
                        {languages.map((lang, idx) => (
                          <Link
                            key={lang.code}
                            href={getLocaleHref(lang.code.toLowerCase())}
                            onClick={() => handleLangClick(lang.code.toLowerCase())}
                            className="flex items-center gap-2 bg-cream hover:bg-rose/10 px-4 py-2.5 rounded-xl text-brown hover:text-wine text-sm font-inter transition-all duration-200"
                          >
                            {/* <span>{lang.flag}</span> */}
                            <span className="font-medium">{lang.code}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-6 space-y-3"
                  >
                    <a
                      href={getNavHref("/contact-us/")}
                      className="flex max-w-[93%] items-center justify-center gap-2 bg-wine text-light px-6 py-4 rounded-xl font-inter font-semibold text-center shadow-lg shadow-wine/20 hover:bg-wine/90 transition-all duration-200"
                    >
                      <Calendar size={18} />
                      <span>{getText("nav.bookConsultation", "Book Your Consultation")}</span>
                    </a>
                    <a
                      href="tel:0167025699"
                      className="flex w-full max-w-[93%] items-center justify-center gap-2 text-taupe hover:text-wine py-3 font-inter transition-colors"
                    >
                      <Phone size={16} />
                      <span className="font-medium">016-702 5699</span>
                    </a>
                  </motion.div>

                  {/* Bottom Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-6 text-center"
                  >
                    <p className="text-taupe/60 text-xs font-inter">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-taupe/60 text-xs font-inter mt-1">
                      {getText("footer.address", "Wisma UOA II, KL")}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className={`${isScrolled ? "h-16 lg:h-20" : "h-16 lg:h-28"}`} />
    </>
  );
};

export default Navbar;