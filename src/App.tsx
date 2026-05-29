/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Calendar, 
  Clock, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  ChevronRight, 
  BookOpen, 
  Sliders, 
  Plus, 
  X, 
  CheckCircle2,
  Lock,
  Building,
  Menu,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Camera
} from "lucide-react";
import { content, Language, Article } from "./types";

import contractIntelligenceImage from "./assets/images/vardalegal_contractintelligence.png"

import munichImage from "./assets/images/vardalegal_munich.png"

import konstiArch from "./assets/images/konsti2024_arch.png"

import coffeeImage from "./assets/images/vardalegal_coffeetable.png"

export default function App() {
  const [lang, setLang] = useState<Language>("EN");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  // Interactive Simulator State
  const [preMoney, setPreMoney] = useState<number>(3000000);
  const [newInvestment, setNewInvestment] = useState<number>(500000);
  const [optionPool, setOptionPool] = useState<number>(10); // in %

  // Fee calculation state
  const [selectedFeeAddons, setSelectedFeeAddons] = useState<string[]>([]);
  
  // Custom Scheduler State
  const [bookingStep, setBookingStep] = useState<"slot" | "details" | "success">("slot");
  const [selectedMeetingType, setSelectedMeetingType] = useState<"15min" | "45min">("15min");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  // Unique layout states requested by USER
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [activeLegalModal, setActiveLegalModal] = useState<"impressum" | "datenschutz" | null>(null);

  // Simulated ProRes Living Video state
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoTime, setVideoTime] = useState(2.4);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showMetadataHud, setShowMetadataHud] = useState(true);

  // Interactive Typewriter state under the Fokus (Expertise) section
  const [fokusCodeText, setFokusCodeText] = useState("");
  const [fokusSuccessVisible, setFokusSuccessVisible] = useState(false);
  const targetCodeString = "roadmap success: execute: vardalegal.com as legal advisor";

  useEffect(() => {
    let typeIndex = 0;
    let timer: any;
    
    const runTypingLoop = () => {
      setFokusSuccessVisible(false);
      setFokusCodeText("");
      typeIndex = 0;
      
      const typeNextChar = () => {
        if (typeIndex < targetCodeString.length) {
          setFokusCodeText(targetCodeString.slice(0, typeIndex + 1));
          typeIndex++;
          timer = setTimeout(typeNextChar, 70); 
        } else {
          timer = setTimeout(() => {
            setFokusSuccessVisible(true);
          }, 800);
          
          timer = setTimeout(runTypingLoop, 14000); // loops every 14s
        }
      };
      
      timer = setTimeout(typeNextChar, 1200);
    };

    runTypingLoop();
    return () => clearTimeout(timer);
  }, []);

  // Dynamic ticker for the Simulated Video progress playhead (Loops over 12 seconds)
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const updatePlayhead = () => {
      const now = performance.now();
      if (isVideoPlaying) {
        const delta = (now - lastTime) / 1000;
        setVideoTime((prevTime) => {
          let nextTime = prevTime + delta;
          if (nextTime >= 12.0) {
            return 0.0; // Loop exactly after 12 seconds
          }
          return nextTime;
        });
      }
      lastTime = now;
      animationFrameId = requestAnimationFrame(updatePlayhead);
    };

    animationFrameId = requestAnimationFrame(updatePlayhead);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVideoPlaying]);

  // Animation state for the 17-second custom structural video under Firm Follows Function
  const [fffAnimTime, setFffAnimTime] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    
    const updateFffPlayhead = () => {
      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      setFffAnimTime((prevTime) => {
        let nextTime = prevTime + delta;
        if (nextTime >= 17.0) {
          return 0.0; // Loop exactly after 17 seconds
        }
        return nextTime;
      });
      lastTime = now;
      animationFrameId = requestAnimationFrame(updateFffPlayhead);
    };

    animationFrameId = requestAnimationFrame(updateFffPlayhead);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Automatic transition for text Carousel on Left (6 seconds interval)
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(carouselTimer);
  }, []);

  // Structural dynamic schema injection for LLMs / GEO Search indexing
  useEffect(() => {
    const existingScript = document.getElementById("ld-json-schema");
    if (existingScript) {
      existingScript.remove();
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Varda Legal",
      "description": "Corporate/Commercial/M&A/Tech",
      "url": "https://vardalegal.com",
      "email": "info[at]vardalegal.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Auenstraße 21",
        "addressLocality": "München",
        "postalCode": "80469",
        "addressCountry": "DE"
      },
      "founder": {
        "@type": "Person",
        "name": "Dr. Konstantin Filbinger",
        "jobTitle": "Rechtsanwalt & Partner"
      },
      "knowsAbout": [
        "Corporate Law",
        "Venture Capital",
        "M&A",
        "Tech Contracts",
        "Compliance"
      ],
      "hasPart": [
        {
          "@type": "Blog",
          "name": "Denkwerk",
          "blogPost": [
            {
              "@type": "BlogPosting",
              "headline": "Die Series A-Runde in Deutschland: Anatomie des Term Sheets",
              "datePublished": "2026-05-14",
              "abstract": "Liquidationspräferenzen, Vesting-Klauseln und Anti-Dilution: Ein pragmatischer Navigator durch die wichtigsten Deal-Terms deutscher VCs im Jahr 2026.",
              "author": {
                "@type": "Person",
                "name": "Dr. Konstantin Filbinger"
              }
            },
            {
              "@type": "BlogPosting",
              "headline": "VSOP vs. ESOP: Was bringt Schlüsselmitarbeiter wirklich zum Bleiben?",
              "datePublished": "2026-04-03",
              "abstract": "Virtuelle Mitarbeiterbeteiligungsprogramme (VSOP) sind der deutsche Standard. Doch wie gestaltet man sie steuerlich optimal und motivationsfördernd?",
              "author": {
                "@type": "Person",
                "name": "Dr. Konstantin Filbinger"
              }
            },
            {
              "@type": "BlogPosting",
              "headline": "Fintech & BaFin: Lizenzierungsgrenzen klug navigieren",
              "datePublished": "2026-03-12",
              "abstract": "Wann greift das KWG oder ZAG? Wie junge Fintech-Scaleups regulatorische Fallstricke umgehen und Partnerschaften rechtssicher strukturieren.",
              "author": {
                "@type": "Person",
                "name": "Dr. Konstantin Filbinger"
              }
            }
          ]
        }
      ]
    };

    const script = document.createElement("script");
    script.id = "ld-json-schema";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("ld-json-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  // Calculate simulated cap table percentages
  const postMoney = preMoney + newInvestment;
  const investorShare = (newInvestment / postMoney) * 100;
  const optionPoolShare = optionPool;
  const founderShare = 100 - investorShare - optionPoolShare;

  // Active section spy on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "wir", "fokus", "fff", "denkwerk", "verguetung", "letsgo"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const d = content[lang];

  // Helper mock calendar days (starts on Monday 25th May 2026 based on metadata)
  const mockDays = [
    { day: 25, label: "Mo", dateString: "25. Mai 2026", slots: ["09:00", "11:30", "14:00"] },
    { day: 26, label: "Di", dateString: "26. Mai 2026", slots: ["10:00", "13:30", "15:00", "16:30"] },
    { day: 27, label: "Mi", dateString: "27. Mai 2026", slots: ["09:30", "11:00", "15:30"] },
    { day: 28, label: "Do", dateString: "28. Mai 2026", slots: ["13:00", "14:30", "16:00"] },
    { day: 29, label: "Fr", dateString: "29. Mai 2026", slots: ["09:00", "10:30", "12:00"] },
  ];

  const toggleFeeAddon = (addonKey: string) => {
    if (selectedFeeAddons.includes(addonKey)) {
      setSelectedFeeAddons(selectedFeeAddons.filter(a => a !== addonKey));
    } else {
      setSelectedFeeAddons([...selectedFeeAddons, addonKey]);
    }
  };

  const getAddonPrice = (key: string) => {
    switch (key) {
      case "esop": return 1500;
      case "convertible": return 950;
      case "saas": return 1200;
      case "gdpr": return 850;
      default: return 0;
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.email) {
      setBookingStep("success");
    }
  };

  // Luxury Wendelstein Editorial slide definitions (Language aware)
  const heroSlides = [
    {
      index: "01",
      tag: lang === "DE" ? "EXECUTION EXCELLENCE" : "EXECUTION EXCELLENCE",
      headline: lang === "DE" 
        ? "Ausgezeichnete Beratung, Mut zu klaren Aussagen. Persönlich. Präzise. Pragmatisch." 
        : "Excellent advice, courage to speak clearly. Personal. Precise. Pragmatic.",
      paragraph: lang === "DE" 
        ? "Mut zu Klarheit. Short and simple statt long and complicated. Risikobewertung und konkrete Handlungsempfehlung statt langen Texten ohne Aussage."
        : "Courage to be clear. Short and simple instead of long and complicated. Risk assessment and concrete recommended action instead of long texts with no substance."
    },
    {
      index: "02",
      tag: lang === "DE" ? "UNTERNEHMERISCHES VERSTÄNDNIS" : "ENTREPRENEURIAL INSIGHT",
      headline: lang === "DE" 
        ? "Leidenschaft und radikale Entschlossenheit. Für unsere Mandanten." 
        : "Passion and radical determination. For our clients.",
      paragraph: lang === "DE" 
        ? "Wachstum braucht sichere Leitplanken statt starrer juristischer Hindernisse. Wir analysieren rechtliche Risiken im echten ökonomischen Kontext und liefern einen gangbaren Weg zu Ihrem Ziel."
        : "Scaling mandates durable protections, not bureaucratic speedbumps. We evaluate legal risks relative to micro-economic opportunities and deliver an executable path directly to your next milestone."
    },
    {
      index: "03",
      tag: lang === "DE" ? "FORM FOLLOWS FUNCTION" : "FORM FOLLOWS FUNCTION",
      headline: lang === "DE" 
        ? "Vollständig integrierte Beratung. Ihre agile Rechtsabteilung." 
        : "Radically streamlined delivery. Your outsourced general counsel.",
      paragraph: lang === "DE" 
        ? "Wir arbeiten digital auf Ihren Kanälen, passen uns Ihren Entwicklungs-Zyklen nahtlos an und bieten transparente Flat-Pauschalen ohne versteckte Honorarfallen."
        : "We operate digitally within your own communication toolchains, seamlessly integrated into funding rounds, with clear upfront modules."
    }
  ];

  // Over-the-shoulder watchmaking simulation coordinates
  // Phase 1 (0.0s to 5.5s): Hand sets the chunkier bronze gear
  // Phase 2 (5.5s to 11.0s): Hand sets the tiny silver gear with tweezers
  // Phase 3 (11.0s to 12.0s): System spins harmoniously together

  // Chunky gear: target place is (330, 315), starting at hover (190, 150)
  let chunkyX = 190;
  let chunkyY = 150;
  let chunkyOpacity = 0.2;
  let handChunkyX = 120;
  let handChunkyY = 100;
  let chunkyScale = 0.85;

  if (videoTime < 5.0) {
    const t = videoTime / 5.0; // normalized 0 to 1
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    chunkyX = 190 + (330 - 190) * ease;
    chunkyY = 150 + (315 - 150) * ease;
    chunkyOpacity = 1.0;
    chunkyScale = 0.85 + (0.15 * ease); // scales up as it goes into focal range
    handChunkyX = chunkyX - 45;
    handChunkyY = chunkyY - 55;
  } else {
    chunkyX = 330;
    chunkyY = 315;
    chunkyOpacity = 1.0;
    chunkyScale = 1.0;
    // hand withdraws gracefully
    const t2 = Math.min(1.0, (videoTime - 5.0) / 1.5);
    const ease2 = t2 * t2;
    handChunkyX = (330 - 45) - (200 * ease2);
    handChunkyY = (315 - 55) - (180 * ease2);
  }

  // Tiny gear: target place is (387, 345), starting at hover (440, 210)
  let tinyX = 440;
  let tinyY = 210;
  let tinyOpacity = 0.0;
  let tweezersX = 500;
  let tweezersY = 120;
  let tweezersRot = -20;

  if (videoTime >= 5.5 && videoTime < 10.5) {
    const t = (videoTime - 5.5) / 5.0; // normalized 0 to 1
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    tinyX = 440 + (387 - 440) * ease;
    tinyY = 210 + (345 - 210) * ease;
    tinyOpacity = 1.0;
    tweezersX = tinyX;
    tweezersY = tinyY;
    tweezersRot = -20 + (10 * ease); // straightens slightly as it aims
  } else if (videoTime >= 10.5) {
    tinyX = 387;
    tinyY = 345;
    tinyOpacity = 1.0;
    // tweezers withdraw gracefully
    const t2 = Math.min(1.0, (videoTime - 10.5) / 1.5);
    const ease2 = t2 * t2;
    tweezersX = 387 + (220 * ease2);
    tweezersY = 345 - (200 * ease2);
    tweezersRot = -10 + (15 * ease2);
  }

  // Speed and Rotation angles of all gears in the clockwork engine
  let bigGearRotation = 0;
  let chunkyGearRotation = 0;
  let tinyGearRotation = 0;
  let secondaryGear1Rotation = 0;
  let secondaryGear2Rotation = 0;

  if (videoTime >= 11.0) {
    const rotTime = videoTime - 11.0;
    bigGearRotation = rotTime * 360; // spins
    chunkyGearRotation = -rotTime * 480; // interlocks and spins fast opposite direction
    tinyGearRotation = rotTime * 960; // interlocks and spins super fast
    secondaryGear1Rotation = rotTime * 720;
    secondaryGear2Rotation = -rotTime * 640;
  }

  return (
    <div className="relative min-h-screen bg-paper-light text-charcoal selection:bg-brand-red selection:text-white">
      {/* Structural Varda Grid Lines - Background overlay (Subtle margins/columns mimic) */}
      <div className="pointer-events-none fixed inset-y-0 left-1/4 z-0 w-[1px] bg-charcoal/5 hidden md:block" />
      <div className="pointer-events-none fixed inset-y-0 left-2/4 z-0 w-[1px] bg-charcoal/5 hidden md:block" />
      <div className="pointer-events-none fixed inset-y-0 left-3/4 z-0 w-[1px] bg-charcoal/5 hidden md:block" />

      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 w-full border-b border-charcoal/10 bg-paper-light/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          {/* Logo Stacked in Premium Sans-Serif */}
          <a href="#home" className="flex flex-col select-none leading-none group shrink-0">
            <span className="font-display text-lg font-bold tracking-[0.22em] text-charcoal leading-none">VARDA</span>
            <span className="font-sans text-[10px] font-semibold tracking-[0.42em] text-charcoal/70 leading-none mt-1">LEGAL</span>
          </a>

          {/* Top Right Controls (DE, EN and the custom circular MENU button) */}
          <div className="flex items-center space-x-6">
            {/* Language Switch */}
            <div className="flex items-center border border-charcoal/10 px-2.5 py-1 font-mono text-[10px] tracking-wider bg-white/40">
              <button
                id="lang-de-btn"
                onClick={() => setLang("DE")}
                className={`px-1.5 py-0.5 rounded transition-all ${
                  lang === "DE" ? "bg-charcoal text-paper-light font-bold" : "text-charcoal/50 hover:text-charcoal"
                }`}
              >
                DE
              </button>
              <span className="text-charcoal/20 px-1 select-none">|</span>
              <button
                id="lang-en-btn"
                onClick={() => setLang("EN")}
                className={`px-1.5 py-0.5 rounded transition-all ${
                  lang === "EN" ? "bg-charcoal text-paper-light font-bold" : "text-charcoal/50 hover:text-charcoal"
                }`}
              >
                EN
              </button>
            </div>

            {/* Circular Editorial Menu Trigger (=) exactly like the image */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 rounded-full border border-charcoal/25 hover:border-charcoal flex flex-col items-center justify-center gap-1 hover:bg-charcoal hover:text-white transition-all duration-300 focus:outline-none shrink-0"
              aria-label="Toggle menu"
            >
              <span className="h-[1.5px] w-4.5 bg-current block" />
              <span className="h-[1.5px] w-4.5 bg-current block" />
            </button>
          </div>
        </div>
      </header>

      {/* LUXURIOUS SLIDE-DOWN DRAWER OVERLAY MENU (Inspired by Wendelstein high-fashion dark drawer) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="fixed inset-0 z-50 bg-charcoal text-paper-light flex mr-0 flex-col overflow-y-auto"
          >
            {/* Inner frame containing elegant alignments */}
            <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8 flex-1 flex flex-col justify-between">
              
              {/* Header inside the dropdown */}
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 font-display text-lg font-bold tracking-widest text-white">
                  <span>VARDA</span>
                  <span className="text-brand-red font-sans text-xl font-black">•</span>
                  <span className="font-serif italic font-normal tracking-normal text-base text-paper-light/85">Legal</span>
                </a>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center space-x-2 text-white/50 hover:text-brand-red font-mono text-xs uppercase cursor-pointer"
                >
                  <span>{lang === "DE" ? "SCHLIESSEN" : "CLOSE"}</span>
                  <X className="h-4 p-0.5 border border-white/20 rounded-full bg-white/5" />
                </button>
              </div>

              {/* Menu content - Centered elegante Navigationsliste */}
              <div className="flex flex-col justify-center py-12 flex-1 w-full max-w-2xl mx-auto">
                
                {/* Huge high-fashion vertical list of key anchors */}
                <div className="space-y-2 md:space-y-4 w-full">
                  {[
                    { label: "START", target: "#home", subtitle: lang === "DE" ? "00 / Kanzlei-Kuppel" : "00 / Firm Cupola" },
                    { label: "PROFILE", target: "#wir", subtitle: lang === "DE" ? "01 / Über Varda Legal" : "01 / About Varda Legal" },
                    { label: "EXPERTISE", target: "#fokus", subtitle: "02 / Kompetenzen & Sektoren" },
                    { label: "FORM FOLLOWS FUNCTION", target: "#fff", subtitle: "03 / Kanzlei-Erbauung" },
                    { label: "DENKWERK", target: "#denkwerk", subtitle: "04 / Schriften & Leitfäden" },
                    { label: "FEES", target: "#verguetung", subtitle: "05 / Vergütungsmodelle" },
                    { label: "CONTACT", target: "#letsgo", subtitle: "06 / Online-Reservierung" }
                  ].map((menuItem, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 12 }}
                      className="border-b border-white/5 pb-2"
                    >
                      <a
                        href={menuItem.target}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-baseline justify-between py-1"
                      >
                        <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl tracking-tight text-white group-hover:text-brand-yellow transition-colors duration-200">
                          {menuItem.label}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 group-hover:text-brand-yellow font-bold">
                          {menuItem.subtitle}
                        </span>
                      </a>
                    </motion.div>
                  ))}
                </div>

              </div>

              {/* Bottom footer index */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-white/40 gap-4">
                <div>© 2026 Dr. Konstantin Filbinger. Auenstraße 21, 80469 München.</div>
                <div className="flex space-x-6 text-[10px]">
                  <button 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActiveLegalModal("impressum"); }} 
                    className="hover:text-white transition-colors cursor-pointer uppercase bg-transparent border-none p-0"
                  >
                    IMPRESSUM
                  </button>
                  <span>•</span>
                  <button 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActiveLegalModal("datenschutz"); }} 
                    className="hover:text-white transition-colors cursor-pointer uppercase bg-transparent border-none p-0"
                  >
                    DATENSCHUTZ
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        
        {/* SECTION 1: HOMEPAGE (HERO - ALIGNED TO VARDA REFERENCE IMAGE) */}
        <section id="home" className="py-12 md:py-24 border-b border-charcoal/10 relative">
          
          {/* Top Tier: Split Headline & Direct Advisory Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16">
            
            {/* Left Column: High-Impact Varda Headline Stacked */}
            <div className="lg:col-span-7">
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-semibold text-charcoal leading-[1.05] tracking-tight max-w-2xl select-none">
                {lang === "DE" ? (
                  <>
                    <span className="block">Wirtschaftsrecht.</span>
                    <span className="block">Pragmatisch. Persönlich.</span>
                    <span className="block">Klar.</span>
                  </>
                ) : (
                  <>
                    <span className="block">Corporate Law.</span>
                    <span className="block">Pragmatic. Personal.</span>
                    <span className="block">Clear.</span>
                  </>
                )}
              </h1>
            </div>

            {/* Right Column: Dynamic Vertical Separator Rail & Mission statement */}
            <div className="lg:col-span-5 flex h-full items-stretch pl-0 lg:pl-10 relative">
              {/* Vertical line matching the image */}
              <div className="hidden lg:block absolute left-0 top-1 bottom-1 w-[1px] bg-charcoal/20" />
              
              <div className="space-y-6 lg:pl-8 flex flex-col justify-center">
                <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-md">
                  {lang === "DE" 
                    ? "Varda Legal berät Gründer, Unternehmen und Privatpersonen im Gesellschaftsrecht, Vertragsrecht und zu Tech-Themen."
                    : "Varda Legal advises founders, companies and private individuals on corporate law, contract law and tech topics."}
                </p>
                
                <div>
                  <a
                    href="#fokus"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-bold text-charcoal border-b border-charcoal/80 pb-1 hover:text-charcoal/60 transition-colors"
                  >
                    <span>{lang === "DE" ? "Unsere Kompetenzen" : "Our expertise"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Tier: Tri-Panel Grid (Left Card Deck | Middle Architecture Frame | Right Specialties Matrix) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-charcoal/10">
            
            {/* Panel 1: Premium vardalegal_coffeetable Production Asset */}
            <div className="space-y-3">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-transparent border border-charcoal/15 overflow-hidden rounded group">
                <img
                  src={coffeeImage}
                  alt="Varda Legal - Coffee Table"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between font-mono text-[9px] text-charcoal/40 uppercase tracking-wider px-1">
                <span>[ Business Card. Coffee Table ]</span>
                <span>01 / IDENTITÄT</span>
              </div>
            </div>

            {/* Panel 2: Modular Architecture View Frame with Founder Portrait */}
            <div className="space-y-3">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-[#FAF8F4] border border-charcoal/15 overflow-hidden group">
                <img
                  src={konstiArch}
                  alt="Dr. Konstantin Filbinger - Varda Legal"
                  className="w-full h-full object-cover sepia-[0.14] saturate-[0.95] contrast-[1.02] opacity-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle warm tint overlay to integrate with page styling */}
                <div className="absolute inset-0 bg-[#FAF8F4]/10 mix-blend-color-burn pointer-events-none" />
                
                {/* High contrast visual indicator overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B19]/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Circular precision graphic detail or stamp from image */}
                <div className="absolute top-4 left-4 bg-[#1C1B19]/85 backdrop-blur-sm px-2.5 py-1 border border-white/10 text-[8px] font-mono text-white/90 uppercase tracking-widest z-10 select-none">
                  [ FOUNDER PROFILE ]
                </div>

                <div className="absolute bottom-4 right-4 bg-[#1C1B19]/85 backdrop-blur-sm px-3 py-1 border border-white/10 text-[9px] font-mono text-white uppercase tracking-widest font-bold">
                  Dr. Konstantin Filbinger
                </div>
              </div>
              <div className="flex justify-between font-mono text-[9px] text-charcoal/40 uppercase tracking-wider px-1">
                <span>[ Founder Portrait. MUC_HQ ]</span>
                <span>01 / PORTRAIT</span>
              </div>
            </div>

            {/* Panel 3: Specialties Grid Deck and Statement ("enables growth") */}
            <div className="space-y-6 flex flex-col justify-center h-full pb-8">
              
              {/* Majestic central message + Minimal corporate stamp badge */}
              <div className="space-y-4">
                <p className="font-sans text-lg sm:text-xl font-medium text-charcoal tracking-tight leading-snug">
                  {lang === "DE" 
                    ? "Gute juristische Arbeit schafft Klarheit, reduziert Risiken und ermöglicht Wachstum."
                    : "Good legal work creates clarity, reduces risk and enables growth."}
                </p>

                <div className="flex items-center justify-between pt-2">
                  {/* Circular M Badge exactly like bottom right of the reference image */}
                  <div className="w-9 h-9 rounded-full border border-charcoal flex items-center justify-center font-display text-xs font-black text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 select-none cursor-pointer">
                    M
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 2: "WIR" (ABOUT) */}
        <section id="wir" className="py-16 md:py-24 border-b border-charcoal/10">
          <div className="space-y-4 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red">01 / {d.wir.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.wir.subtitle}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Big Bio Text */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal leading-snug">
                  {d.wir.heading}
                </h3>
                <p className="font-sans text-charcoal/80 leading-relaxed text-sm sm:text-base">
                  {d.wir.p1}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-charcoal/5">
                <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal leading-snug">
                  {lang === "DE" ? "Varda Legal spricht Business" : "Varda Legal speaks Business"}
                </h3>
                <div className="space-y-3">
                  <p className="font-sans text-charcoal/80 leading-relaxed text-sm sm:text-base">
                    {d.wir.p2}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-charcoal/5">
                <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal leading-snug">
                  {lang === "DE" ? "Klarheit bringt Zeit" : "Clarity saves time"}
                </h3>
                <div className="space-y-3">
                  {d.wir.p3.split("\n\n").map((para, idx) => (
                    <p key={idx} className="font-sans text-charcoal/80 leading-relaxed text-sm sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Signature look */}
              <div className="pt-4 flex items-center space-x-4">
                <div className="h-[2px] w-12 bg-charcoal/20" />
                <div className="font-serif font-semibold tracking-wide italic text-charcoal text-lg">Dr. Konstantin Filbinger</div>
              </div>

              {/* Display of uploaded asset "contract intelligence.png" under Dr. Konstantin Filbinger */}
              <div className="mt-8 border border-charcoal/15 bg-[#faf8f4] p-4 md:p-6 shadow-sm">
                <img 
                  src={contractIntelligenceImage}
                  alt="Contract Intelligence - Varda Legal"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block rounded shadow border border-charcoal/10"
                />
              </div>
            </div>

          {/* Right Column: Munich Statement Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-charcoal/10 bg-[#FAF8F4] p-6 flex items-start space-x-3 shadow-sm rounded-sm">
              <div className="p-1.5 px-2.5 bg-[#0047ab] text-[10px] text-white font-mono font-bold rounded-sm select-none">MUC</div>
              <div className="text-xs space-y-1.5">
                <p className="font-semibold text-charcoal text-sm">München • Germany</p>
                <p className="text-charcoal/70 leading-relaxed">
                  {lang === "DE" 
                    ? "Unser Kanzlei befindet sich im Herzen von München." 
                    : "Our office sits in the heart of Munich."}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

        {/* SECTION 3: "FOKUS" (SPECIALITIES) */}
        <section id="fokus" className="py-16 md:py-24 border-b border-charcoal/10">
          <div className="space-y-4 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red">02 / {d.fokus.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.fokus.subtitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.fokus.items.map((item, i) => (
              <div 
                key={i} 
                className="group border border-charcoal/15 bg-white p-6 md:p-8 flex flex-col justify-between transition-all hover:border-brand-red hover:shadow-sm"
              >
                <div className="space-y-4">
                  {/* Giant Number Label */}
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-charcoal/20 group-hover:text-brand-red/35 transition-colors">
                      {item.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-charcoal/20 group-hover:bg-brand-red" />
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-charcoal group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Sublist mapping with clean grids */}
                <div className="mt-6 pt-6 border-t border-charcoal/10">
                  <ul className="grid grid-cols-1 gap-2">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start text-xs font-mono text-charcoal/80 space-x-2">
                        <Check className="h-3 w-3 text-brand-red mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Varda Legal Simulation - Moved inside Bereich 02/Fokus as requested */}
          <div className="mt-16 border-t border-charcoal/10 pt-16 max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <span className="font-display text-xs font-bold tracking-[0.3em] text-[#1B2A4A] uppercase">VARDA LEGAL</span>
            </div>
            
            <div className="border border-charcoal/15 bg-white p-6 md:p-8 shadow-sm rounded-none">
              <div className="overflow-hidden relative bg-[#faf8f4] border border-charcoal/15 rounded-none">
                {/* 17-Second Custom Simulation Player Header */}
                <div className="absolute top-0 inset-x-0 p-3 flex justify-between items-center z-20 bg-[#faf8f4]/90 backdrop-blur-sm border-b border-charcoal/10 text-charcoal/70 font-mono text-[8px] uppercase tracking-widest select-none">
                  <div className="flex items-center space-x-1.5 flex-row">
                    <span className="w-1.5 h-1.5 bg-[#1B2A4A]" />
                    <span>VARDA LEGAL</span>
                  </div>
                  <div>SEC 0:{(Math.floor(fffAnimTime)).toString().padStart(2, "0")} / 0:17</div>
                </div>
 
                 {/* Main Render Area */}
                <div className="aspect-[4/3] w-full flex items-center justify-center relative bg-[#faf8f4]">
                  
                  {/* Subtle technical background grid - Fine-grained (feingliedrig) */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,27,25,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,25,0.025)_1px,transparent_1px)] bg-[size:11px_11px] pointer-events-none" />
 
                  {/* Render elements based on fffAnimTime */}
                  <svg className="w-full h-full absolute inset-0" viewBox="0 0 600 450" fill="none">
                    <defs>
                      {/* Elegant premium pitch black gradient with vertical cylinder shine for pen */}
                      <linearGradient id="montBlack-port" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#252c38" />
                        <stop offset="25%" stopColor="#0a0f18" />
                        <stop offset="50%" stopColor="#020408" />
                        <stop offset="85%" stopColor="#1e222b" />
                        <stop offset="100%" stopColor="#05070a" />
                      </linearGradient>

                      {/* Platinum silver shine for clip, thread, and rings */}
                      <linearGradient id="platinumTrim-port" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f1f5f9" />
                        <stop offset="30%" stopColor="#94a3b8" />
                        <stop offset="70%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>

                      {/* Golden cone tip */}
                      <linearGradient id="goldTip-port" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="40%" stopColor="#ca8a04" />
                        <stop offset="100%" stopColor="#8d6205" />
                      </linearGradient>

                      <linearGradient id="goldGrad-port" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#8d6205" />
                      </linearGradient>

                      {/* Soft tech glow */}
                      <radialGradient id="greenGlow-port" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </radialGradient>
                      {/* Soft orange tech glow */}
                      <radialGradient id="orangeGlow-port" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* ANIMATED SECTION 1: Neural network of 7 stylized Risk Neurons and complex background micro-junctions (0 - 7.7 seconds) */}
                    {fffAnimTime < 7.7 && (
                      <g>
                        {/* Interactive dynamic connected mesh lines */}
                        {(() => {
                          const cx = 300;
                          const cy = 200;
                          const t = fffAnimTime;
                          let nodeScale = 1.0;
                          if (t >= 6.1 && t < 6.9) {
                            nodeScale = Math.max(0, 1.0 - (t - 6.1) / 0.8);
                          } else if (t >= 6.9) {
                            nodeScale = 0.0;
                          }
                          
                          const ptsConfig = [
                            { label: "IP Conflict", color: "#1B2A4A" }, // Deep Navy
                            { label: "Tax Liability", color: "#1B2A4A" }, // Deep Navy
                            { label: "VSOP Friction", color: "#C0823E" }, // Warm Amber
                            { label: "Dilution Risk", color: "#C0823E" }, // Warm Amber
                            { label: "Veto Clause", color: "#7F8287" }, // Soft Charcoal
                            { label: "Bad Vesting", color: "#7F8287" }, // Soft Charcoal
                            { label: "Asset Flaw", color: "#7F8287" }, // Soft Charcoal
                          ];

                          const neurons = ptsConfig.map((pt, i) => {
                            const baseAngle = (i * 2 * Math.PI) / 7;
                            const chaoticJitterX = Math.sin(t * (4.2 + i * 0.6) + i * 1.8) * 18;
                            const chaoticJitterY = Math.cos(t * (4.8 - i * 0.5) - i * 1.2) * 15;
                            const angle = baseAngle + t * 0.32;
                            const baseRadius = 120;
                            const rad = (baseRadius + Math.sin(t * 3.5 + i) * 10) * nodeScale;
                            
                            return {
                             x: cx + Math.cos(angle) * rad + chaoticJitterX * nodeScale,
                             y: cy + Math.sin(angle) * rad + chaoticJitterY * nodeScale,
                             label: pt.label,
                             color: pt.color,
                            };
                          });

                          // Create 11 dynamic micro junctions in the background to make it look extremely dense & verästelt
                          const microJunctions = Array.from({ length: 11 }).map((_, j) => {
                            const microAngleBase = (j * 2 * Math.PI) / 11;
                            const angle = microAngleBase - t * 0.24; // rotate opposite direction
                            const rJitterX = Math.cos(t * (3.1 + j * 0.4) + j) * 20;
                            const rJitterY = Math.sin(t * (2.8 - j * 0.4) - j) * 18;
                            const baseRadius = 65 + (j % 3) * 35; // orbits at 65, 100, 135
                            const rad = (baseRadius + Math.sin(t * 4 + j) * 8) * nodeScale;
                            return {
                              x: cx + Math.cos(angle) * rad + rJitterX * nodeScale,
                              y: cy + Math.sin(angle) * rad + rJitterY * nodeScale,
                              color: j % 2 === 0 ? "rgba(27, 42, 74, 0.15)" : "rgba(127, 130, 135, 0.12)"
                            };
                          });

                          return (
                            <g>
                              <circle cx={cx} cy={cy} r={140 * nodeScale} stroke="rgba(28, 27, 25, 0.05)" strokeWidth="0.5" strokeDasharray="1, 4" />
                              <circle cx={cx} cy={cy} r={100 * nodeScale} stroke="rgba(28, 27, 25, 0.04)" strokeWidth="0.5" strokeDasharray="2, 2" />
                              <circle cx={cx} cy={cy} r={60 * nodeScale} stroke="rgba(28, 27, 25, 0.03)" strokeWidth="0.5" />

                              {/* DENSE CONNECTIVE MESH LINES */}
                              {/* 1. Connections between adjacent and skip-adjacent main neurons */}
                              {neurons.map((n1, i) => {
                                const connections = [(i + 1) % 7, (i + 2) % 7, (i + 3) % 7, (i + 4) % 7];
                                return connections.map((nextIdx, cKey) => {
                                  const n2 = neurons[nextIdx];
                                  return (
                                    <line
                                      key={`ln-${i}-${cKey}`}
                                      x1={n1.x}
                                      y1={n1.y}
                                      x2={n2.x}
                                      y2={n2.y}
                                      stroke={nodeScale > 0.4 ? "rgba(27, 42, 74, 0.06)" : "rgba(27, 42, 74, 0.12)"}
                                      strokeWidth="0.5"
                                    />
                                  );
                                });
                              })}

                              {/* 2. Connections between micro-junctions */}
                              {microJunctions.map((mj1, j) => {
                                const microConns = [(j + 1) % 11, (j + 3) % 11];
                                return microConns.map((nextIdx, cKey) => {
                                  const mj2 = microJunctions[nextIdx];
                                  return (
                                    <line
                                      key={`mj-${j}-${cKey}`}
                                      x1={mj1.x}
                                      y1={mj1.y}
                                      x2={mj2.x}
                                      y2={mj2.y}
                                      stroke={nodeScale > 0.4 ? "rgba(127, 130, 135, 0.04)" : "rgba(127, 130, 135, 0.08)"}
                                      strokeWidth="0.4"
                                    />
                                  );
                                });
                              })}

                              {/* 3. Connective crossroads between main neurons and micro-junctions to form a highly intricate net */}
                              {neurons.map((n, i) => {
                                const crossConns = [i % 11, (i + 4) % 11, (i + 7) % 11];
                                return crossConns.map((mjIdx, cKey) => {
                                  const mj = microJunctions[mjIdx];
                                  return (
                                    <line
                                      key={`cross-${i}-${cKey}`}
                                      x1={n.x}
                                      y1={n.y}
                                      x2={mj.x}
                                      y2={mj.y}
                                      stroke={nodeScale > 0.4 ? "rgba(27, 42, 74, 0.04)" : "rgba(27, 42, 74, 0.08)"}
                                      strokeWidth="0.4"
                                    />
                                  );
                                });
                              })}

                              {/* Background micro dots representing auxiliary neural nodes */}
                              {microJunctions.map((mj, j) => {
                                if (nodeScale <= 0.02) return null;
                                return (
                                  <circle
                                    key={`mj-dot-${j}`}
                                    cx={mj.x}
                                    cy={mj.y}
                                    r="1.5"
                                    fill={mj.color}
                                    opacity={nodeScale * 0.4}
                                  />
                                );
                              })}

                              {/* Thin minimalist rectangles representing executive briefing elements */}
                              {neurons.map((n, i) => {
                                const opacity = nodeScale;
                                if (opacity <= 0.02) return null;

                                return (
                                  <g key={i} transform={`translate(${n.x}, ${n.y})`} style={{ opacity }}>
                                    {/* Sand-cream elegant solid card */}
                                    <rect x="-26" y="-8" width="52" height="16" fill="#faf8f4" stroke={n.color} strokeWidth="0.5" />
                                    {/* Elegant left-hand visual color indicator */}
                                    <rect x="-26" y="-8" width="2" height="16" fill={n.color} />
                                    <text x="2" y="2" fill="#111115" fontSize="4.5" fontFamily="var(--font-mono)" letterSpacing="0.2px" fontWeight="600" textAnchor="middle">{n.label}</text>
                                  </g>
                                );
                              })}

                              {/* Central strategic pivot point as a minimalist target/compass */}
                              <circle cx={cx} cy={cy} r={28} stroke={t >= 6.1 ? "#1B2A4A" : "#C0823E"} strokeWidth="0.5" strokeDasharray="2, 2" fill="none" />
                              <circle cx={cx} cy={cy} r={6.5} fill={t >= 6.1 ? "#1B2A4A" : "#C0823E"} stroke="#faf8f4" strokeWidth="1" />
                            </g>
                          );
                        })()}
                      </g>
                    )}

                    {/* ANIMATED SECTION 2: Highly elegant, business-professional fountain pen gliding horizontally straight to center */}
                    {fffAnimTime >= 3.5 && fffAnimTime < 7.7 && (
                      (() => {
                        const t = fffAnimTime;
                        let px = -240;
                        const py = 200; // Straight horizontal alignment aiming precisely towards the center (300, 200)

                        if (t >= 3.5 && t < 6.1) {
                          // SLOW PRECISE GEOMETRIC GLIDE: moves straight horizontally from left edge (-240) to center (300) over 2.6s
                          const pct = (t - 3.5) / 2.6;
                          px = -240 + (300 - (-240)) * pct;
                        } else {
                          // Perfect static hold at center
                          px = 300;
                        }

                        return (
                          <g transform={`translate(${px}, ${py}) rotate(0)`}>
                            {/* Ultra-slender micro steel needle point for high precision */}
                            <rect x="-6" y="-0.3" width="6" height="0.6" fill="#0f172a" />
                            
                            {/* Minimalist technical tapered cone (satin chromium finish) */}
                            <polygon points="-16,-1.3 -6,-0.4 -6,0.4 -16,1.4" fill="url(#platinumTrim-port)" stroke="#1e293b" strokeWidth="0.2" />
                            
                            {/* Sleek metal spacing sleeve */}
                            <rect x="-19" y="-1.5" width="3" height="3" fill="url(#platinumTrim-port)" stroke="#1e293b" strokeWidth="0.2" />

                            {/* Clean micro-machined knurled grip sections (Bauhaus aesthetic) */}
                            <rect x="-56" y="-1.5" width="37" height="3" fill="#334155" stroke="#1e293b" strokeWidth="0.2" />
                            {/* Micro alignment ticks along the grip collar */}
                            <line x1="-51" y1="-1.5" x2="-51" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-46" y1="-1.5" x2="-46" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-41" y1="-1.5" x2="-41" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-36" y1="-1.5" x2="-36" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-31" y1="-1.5" x2="-31" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-26" y1="-1.5" x2="-26" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />

                            {/* Subtle premium gold reference indicator band */}
                            <rect x="-58.5" y="-1.6" width="2.5" height="3.2" fill="url(#goldTip-port)" stroke="#8d6205" strokeWidth="0.15" />

                            {/* Hyper-thin, uniform matte nickel/silver barrel */}
                            <rect x="-225" y="-1.5" width="166" height="3" fill="url(#platinumTrim-port)" stroke="#475569" strokeWidth="0.2" />

                            {/* Micro slender black steel architectural pen pocket clip */}
                            <rect x="-220" y="-2.3" width="45" height="0.6" rx="0.1" fill="#1e293b" stroke="#334155" strokeWidth="0.1" />

                            {/* Elite minimal black end-cap crown */}
                            <rect x="-231" y="-1.5" width="6" height="3" fill="#1e293b" rx="0.2" />
                            <rect x="-233" y="-1" width="2" height="2" rx="0.1" fill="url(#platinumTrim-port)" />
                            <rect x="-227" y="-1.6" width="1" height="3.2" fill="url(#goldTip-port)" />
                          </g>
                        );
                      })()
                    )}

                    {/* ANIMATED SECTION 3: The clean contract */}
                    {fffAnimTime >= 7.7 && (
                      (() => {
                        const t = fffAnimTime;
                        const lines = [
                          "Complexity demands action.",
                          "Action requires decisions.",
                          "We turn risk into decision intelligence.",
                          "Quiet confidence. Strategic judgment."
                        ];

                        const targetStr = lines.join(" ");
                        const progress = Math.min(1.0, Math.max(0, (t - 7.9) / 3.5));
                        const charsTotal = targetStr.length;
                        const charsToShow = Math.floor(progress * charsTotal);
                        
                        return (
                          <g>
                            <rect x="50" y="80" width="500" height="240" rx="0" fill="#ffffff" fillOpacity="0.98" stroke="rgba(28, 27, 25, 0.12)" strokeWidth="1" className="shadow-sm" />
                            <text x="80" y="115" fill="#1B2A4A" fontSize="8" fontFamily="var(--font-display)" fontWeight="700" letterSpacing="2.5px">
                              VARDA LEGAL | DECISION ARCHITECTURE
                            </text>
                            <line x1="80" y1="130" x2="520" y2="130" stroke="rgba(28, 27, 25, 0.08)" strokeWidth="0.8" />

                            <g transform="translate(80, 168)">
                              {(() => {
                                let charsLeftToType = charsToShow;
                                return lines.map((line, lIdx) => {
                                  if (charsLeftToType <= 0 && progress < 0.99) return null;
                                  const textToDisplay = progress >= 0.99 ? line : line.slice(0, charsLeftToType);
                                  charsLeftToType -= line.length;
                                  const isLastHighlightLine = lIdx === 3;
                                  const isSolutionLine = lIdx === 2;

                                  return (
                                    <text
                                      key={lIdx}
                                      x="0"
                                      y={lIdx * 34}
                                      fill={isLastHighlightLine ? "#1B2A4A" : isSolutionLine ? "#111115" : "rgba(28,27,25,0.7)"}
                                      fontSize={isLastHighlightLine ? "14" : "12.5"}
                                      fontFamily={isLastHighlightLine ? "var(--font-display)" : "var(--font-sans)"}
                                      fontWeight={isLastHighlightLine ? "700" : "500"}
                                      letterSpacing={isLastHighlightLine ? "0.3px" : "0.1px"}
                                      fontStyle={lIdx === 1 ? "italic" : "normal"}
                                    >
                                      {textToDisplay}
                                      {charsLeftToType + line.length > 0 && charsLeftToType + line.length <= line.length && progress < 0.99 && (
                                        <tspan fill="#1B2A4A" className="animate-pulse">_</tspan>
                                      )}
                                    </text>
                                  );
                                });
                              })()}
                            </g>

                            <text x="80" y="295" fill="rgba(28,27,25,0.4)" fontSize="7" fontFamily="var(--font-mono)" letterSpacing="1px">
                              © 2026 VARDA LEGAL • PRIVAT-EXPERTENBRIEFING • MÜNCHEN
                            </text>
                          </g>
                        );
                      })()
                    )}
                  </svg>
                </div>

                {/* Simulated Scrubber Tracker Progress Indicator under video */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-charcoal/5 relative z-10">
                  <div className="absolute top-0 left-0 h-full bg-[#1B2A4A] transition-all duration-75" style={{ width: `${(fffAnimTime / 17) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: "FIRM FOLLOWS FUNCTION" (ABOUT ETHOS & STRUCTURAL LAYOUT) */}
        <section id="fff" className="py-16 md:py-24 border-b border-charcoal/10">
          <div className="space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red">03 / {d.fff.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.fff.subtitle}</h2>
          </div>

          {/* Staggered blocks as requested */}
          <div className="space-y-24">
            
            {/* Piece 1: Top (Text Left, Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Text Left */}
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs text-brand-red font-semibold">{d.fff.blocks[0].subtitle}</span>
                <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-charcoal tracking-tight">
                  {d.fff.blocks[0].title}
                </h3>
                <p className="font-sans text-charcoal/80 leading-relaxed text-sm md:text-base">
                  {d.fff.blocks[0].text}
                </p>
                <div className="font-serif italic border-l-2 border-brand-red pl-4 text-xs tracking-wide text-charcoal/60">
                  {d.fff.blocks[0].quote}
                </div>
              </div>

              {/* Image Right -> REPLACED WITH THE INTERACTIVE PORTFOLIO DIRECTORY (Turning Ideas into Action) as requested by USER */}
              <div className="lg:col-span-6 border border-charcoal/15 bg-[#faf8f4] p-6 shadow-sm select-none rounded-none">
                <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-charcoal/10 pb-4">
                  <div>
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-[#1B2A4A] font-bold">
                      {lang === "DE" ? "Systematische Umsetzung" : "Systematic Execution"}
                    </span>
                    <p className="text-xs text-charcoal/60 font-sans mt-1">
                      {lang === "DE" ? "Präzise Strukturierung von Unternehmensprojekten." : "Precise structuring of corporate transactions."}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-1.5 text-[9px] font-mono tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#C0823E]" />
                    <span className="text-charcoal/60 uppercase tracking-widest">{lang === "DE" ? "FOLIO V-03" : "FOLIO V-03"}</span>
                  </div>
                </div>

                {/* Simulated Modern Premium Workstation Screen Display */}
                <div className="relative w-full bg-white text-charcoal overflow-hidden border border-charcoal/15 font-sans text-xs sm:text-sm shadow-sm rounded-none">
                  
                  {/* Subtle architectural grid pattern overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,27,25,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,24,0.02)_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />

                  {/* Elegant Platinum/Gold Trim Header Frame Bar */}
                  <div className="bg-[#eae6db]/40 px-4 py-2.5 flex items-center justify-between border-b border-charcoal/10 text-charcoal/80">
                    <div className="text-[9px] font-mono text-[#1B2A4A] uppercase tracking-widest">
                      DOCKET REFERENCE: DE-MUC-VARDA-2026
                    </div>
                    
                    <div className="w-1.5 h-1.5 bg-[#1B2A4A]" />
                  </div>

                  {/* Primary Editorial Typing Workspace Layout */}
                  <div className="p-6 bg-white min-h-[280px] flex flex-col justify-between relative font-mono text-xs">
                    <div className="space-y-4 font-mono leading-relaxed relative z-10">
                      
                      {/* Line 1: Corporate docket information */}
                      <div className="text-charcoal/50 text-[9px] space-y-1 font-mono tracking-wider leading-relaxed">
                        • TRANSACTION DESIGN WORKFLOW ACTIVE<br />
                        • AUDITING PORTFOLIO ROADMAP INFRASTRUCTURE
                      </div>

                      {/* Line 2: The actual code typed character-by-character */}
                      <div className="border border-charcoal/10 bg-[#faf8f4] p-3 rounded-none">
                        <div className="text-[10px] text-charcoal/40 font-mono tracking-wide uppercase mb-1">Target Statement:</div>
                        <div className="text-charcoal break-all flex flex-wrap leading-relaxed">
                          <span className="font-serif italic font-semibold text-charcoal">"</span>
                          <span className="text-[#1B2A4A] font-semibold font-mono">{fokusCodeText}</span>
                          <span className="font-serif italic font-semibold text-charcoal">"</span>
                          
                          {/* Cursor indicator */}
                          <span className="inline-block w-1.5 h-3.5 bg-[#1B2A4A] ml-1" />
                        </div>
                      </div>

                      {/* Action Step trigger status screen */}
                      <AnimatePresence>
                        {fokusSuccessVisible && (
                          <motion.div 
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="space-y-3 pt-3 border-t border-charcoal/10 font-sans"
                          >
                            <div className="text-[9px] text-[#1B2A4A] font-mono tracking-wider">
                              ✔ POSITION ALIGNED • ENVIRONMENT RESOLVED
                            </div>

                            <div className="bg-[#faf8f4] border border-charcoal/15 p-4 rounded-none space-y-2 mt-1 shadow-sm font-sans">
                              <span className="bg-[#1B2A4A] text-white px-2 py-0.5 text-[8px] font-bold tracking-widest font-mono">ACTION OUTCOME</span>
                              <p className="font-serif italic text-xs text-charcoal leading-relaxed tracking-wide">
                                "executed, clear view, goal near, let's go!"
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>

                    {/* Operational instructions and re-run buttons */}
                    <div className="pt-4 border-t border-charcoal/10 flex flex-row justify-between items-center text-[9px] text-charcoal/50 font-mono">
                      <div>
                        LEGAL ARCHITECTURE PLAN • STAGE III
                      </div>
                      {/* Reset animation button */}
                      <button 
                        onClick={() => {
                          setFokusSuccessVisible(false);
                          setFokusCodeText("");
                        }}
                        className="px-2 py-1 bg-white hover:bg-[#eae6db]/40 text-[#1B2A4A] border border-charcoal/15 rounded-none flex items-center space-x-1 font-semibold transition-all"
                      >
                        <RotateCcw className="h-2 w-2" />
                        <span>{lang === "DE" ? "Reset" : "Reset"}</span>
                      </button>
                    </div>

                  </div>

                </div>

                {/* Sovereign, reduced professional slide footer */}
                <div className="mt-4 pt-3 border-t border-charcoal/10 text-center">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-charcoal/40 block leading-relaxed">
                    Varda Legal | Dr. Konstantin Filbinger | Rechtsanwalt für Gesellschaftsrecht, Vertragsrecht, M&A und Tech | München
                  </span>
                </div>

              </div>

              {/* Wrapping original 17s animation canvas in fully hidden div to protect layout */}
              <div className="hidden">
              <div className="lg:col-span-6 border border-charcoal/15 shadow-xl bg-white relative overflow-hidden group">
                
                {/* 17-Second Custom Simulation Player Header */}
                <div className="absolute top-0 inset-x-0 p-3 flex justify-between items-center z-20 bg-slate-50/85 backdrop-blur-sm border-b border-charcoal/5 text-charcoal/80 font-mono text-[8px] uppercase tracking-wider select-none">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0047ab] animate-pulse" />
                    <span>SYSTEM CORE • RESOLVER PROTOCOL</span>
                  </div>
                  <div>SEC: 0:{(Math.floor(fffAnimTime)).toString().padStart(2, "0")} / 0:17</div>
                </div>

                {/* Main Render Area */}
                <div className="aspect-[4/3] w-full flex items-center justify-center relative bg-[#faf8f4]">

                  
                  {/* Subtle technical background grid - Fine-grained (feingliedrig) */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,71,171,0.024)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,71,171,0.024)_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,71,171,0.012)_2px,transparent_2px),linear-gradient(to_bottom,rgba(0,71,171,0.012)_2px,transparent_2px)] bg-[size:90px_90px] pointer-events-none" style={{ opacity: 0.8 }} />

                  {/* Render elements based on fffAnimTime */}
                  <svg className="w-full h-full absolute inset-0" viewBox="0 0 600 450" fill="none">
                    <defs>
                      {/* Elegant premium pitch black gradient with vertical cylinder shine for pen */}
                      <linearGradient id="montBlack" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#252c38" />
                        <stop offset="25%" stopColor="#0a0f18" />
                        <stop offset="50%" stopColor="#020408" />
                        <stop offset="85%" stopColor="#1e222b" />
                        <stop offset="100%" stopColor="#05070a" />
                      </linearGradient>

                      {/* Platinum silver shine for clip, thread, and rings */}
                      <linearGradient id="platinumTrim" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f1f5f9" />
                        <stop offset="30%" stopColor="#94a3b8" />
                        <stop offset="70%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>

                      {/* Golden cone tip */}
                      <linearGradient id="goldTip" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="40%" stopColor="#ca8a04" />
                        <stop offset="100%" stopColor="#8d6205" />
                      </linearGradient>

                      <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#8d6205" />
                      </linearGradient>

                      {/* Soft tech glow */}
                      <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </radialGradient>
                      {/* Soft orange tech glow */}
                      <radialGradient id="orangeGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* ANIMATED SECTION 1: Neural network of 7 stylized Risk Neurons and complex background micro-junctions (0 - 7.7 seconds) */}
                    {fffAnimTime < 7.7 && (
                      <g>
                        {/* Interactive dynamic connected mesh lines */}
                        {(() => {
                          const cx = 300;
                          const cy = 200;
                          const t = fffAnimTime;
                          // Node scale shrinks from 1.0 to 0.0 starting at second 6.1 and finishing at 6.9
                          let nodeScale = 1.0;
                          if (t >= 6.1 && t < 6.9) {
                            nodeScale = Math.max(0, 1.0 - (t - 6.1) / 0.8);
                          } else if (t >= 6.9) {
                            nodeScale = 0.0;
                          }
                          
                          // Exactly 7 Risk neurons with chaotic label details
                          const ptsConfig = [
                            { label: "IP Conflict", color: "#e11d48" }, // Red
                            { label: "Tax Liability", color: "#e11d48" }, // Red
                            { label: "VSOP Friction", color: "#ea580c" }, // Orange
                            { label: "Dilution Risk", color: "#ea580c" }, // Orange
                            { label: "Veto Clause", color: "#eab308" }, // Yellow
                            { label: "Bad Vesting", color: "#eab308" }, // Yellow
                            { label: "Asset Flaw", color: "#eab308" }, // Yellow
                          ];

                          const neurons = ptsConfig.map((pt, i) => {
                            const baseAngle = (i * 2 * Math.PI) / 7;
                            
                            // High-frequency chaotic flutter that represents absolute turbulence before structural order
                            const chaoticJitterX = Math.sin(t * (4.2 + i * 0.6) + i * 1.8) * 24;
                            const chaoticJitterY = Math.cos(t * (4.8 - i * 0.5) - i * 1.2) * 20;

                            const angle = baseAngle + t * 0.32; // Highly dynamic rotation speed
                            const baseRadius = 132; // Significantly larger sphere size as requested
                            const rad = (baseRadius + Math.sin(t * 3.5 + i) * 14) * nodeScale;
                            
                            return {
                              x: cx + Math.cos(angle) * rad + chaoticJitterX * nodeScale,
                              y: cy + Math.sin(angle) * rad + chaoticJitterY * nodeScale,
                              label: pt.label,
                              color: pt.color,
                            };
                          });

                          // Create 11 dynamic micro junctions in the background to make it look extremely dense & verästelt
                          const microJunctions = Array.from({ length: 11 }).map((_, j) => {
                            const microAngleBase = (j * 2 * Math.PI) / 11;
                            const angle = microAngleBase - t * 0.24; // rotate opposite direction
                            const rJitterX = Math.cos(t * (3.1 + j * 0.4) + j) * 20;
                            const rJitterY = Math.sin(t * (2.8 - j * 0.4) - j) * 18;
                            const baseRadius = 65 + (j % 3) * 35; // orbits at 65, 100, 135
                            const rad = (baseRadius + Math.sin(t * 4 + j) * 8) * nodeScale;
                            return {
                              x: cx + Math.cos(angle) * rad + rJitterX * nodeScale,
                              y: cy + Math.sin(angle) * rad + rJitterY * nodeScale,
                              color: j % 2 === 0 ? "rgba(0, 71, 171, 0.4)" : "rgba(71, 85, 105, 0.3)"
                            };
                          });

                          return (
                            <g>
                              {/* Sphere shell outer border guide circles - ultra-fine mesh boundaries */}
                              <circle cx={cx} cy={cy} r={155 * nodeScale} stroke="rgba(0, 71, 171, 0.05)" strokeWidth="0.7" strokeDasharray="2, 6" />
                              <circle cx={cx} cy={cy} r={115 * nodeScale} stroke="rgba(0, 71, 171, 0.04)" strokeWidth="0.5" strokeDasharray="4, 4" />
                              <circle cx={cx} cy={cy} r={75 * nodeScale} stroke="rgba(0, 71, 171, 0.02)" strokeWidth="0.5" />

                              {/* DENSE CONNECTIVE MESH LINES */}
                              {/* 1. Connections between adjacent and skip-adjacent main neurons */}
                              {neurons.map((n1, i) => {
                                const connections = [(i + 1) % 7, (i + 2) % 7, (i + 3) % 7, (i + 4) % 7];
                                return connections.map((nextIdx, cKey) => {
                                  const n2 = neurons[nextIdx];
                                  return (
                                    <line
                                      key={`ln-${i}-${cKey}`}
                                      x1={n1.x}
                                      y1={n1.y}
                                      x2={n2.x}
                                      y2={n2.y}
                                      stroke={nodeScale > 0.4 ? "rgba(0, 71, 171, 0.14)" : "rgba(16,185,129,0.22)"}
                                      strokeWidth="0.5"
                                    />
                                  );
                                });
                              })}

                              {/* 2. Connections between micro-junctions */}
                              {microJunctions.map((mj1, j) => {
                                const microConns = [(j + 1) % 11, (j + 3) % 11];
                                return microConns.map((nextIdx, cKey) => {
                                  const mj2 = microJunctions[nextIdx];
                                  return (
                                    <line
                                      key={`mj-${j}-${cKey}`}
                                      x1={mj1.x}
                                      y1={mj1.y}
                                      x2={mj2.x}
                                      y2={mj2.y}
                                      stroke={nodeScale > 0.4 ? "rgba(71, 85, 105, 0.06)" : "rgba(16,185,129,0.12)"}
                                      strokeWidth="0.4"
                                    />
                                  );
                                });
                              })}

                              {/* 3. Connective crossroads between main neurons and micro-junctions to form a highly intricate net */}
                              {neurons.map((n, i) => {
                                const crossConns = [i % 11, (i + 4) % 11, (i + 7) % 11];
                                return crossConns.map((mjIdx, cKey) => {
                                  const mj = microJunctions[mjIdx];
                                  return (
                                    <line
                                      key={`cross-${i}-${cKey}`}
                                      x1={n.x}
                                      y1={n.y}
                                      x2={mj.x}
                                      y2={mj.y}
                                      stroke={nodeScale > 0.4 ? "rgba(0, 71, 171, 0.07)" : "rgba(16,185,129,0.12)"}
                                      strokeWidth="0.4"
                                    />
                                  );
                                });
                              })}

                              {/* Background micro dots representing auxiliary neural nodes */}
                              {microJunctions.map((mj, j) => {
                                if (nodeScale <= 0.02) return null;
                                return (
                                  <circle
                                    key={`mj-dot-${j}`}
                                    cx={mj.x}
                                    cy={mj.y}
                                    r="1.8"
                                    fill={mj.color}
                                    opacity={nodeScale * 0.4}
                                  />
                                );
                              })}

                              {/* Beautiful Glassmorphic Pill Nodes representing risk modules */}
                              {neurons.map((n, i) => {
                                const opacity = nodeScale;
                                if (opacity <= 0.02) return null;

                                return (
                                  <g key={i} transform={`translate(${n.x}, ${n.y})`} style={{ opacity }}>
                                    {/* Pulse corona glow (extremely soft) */}
                                    <rect
                                      x="-28"
                                      y="-11"
                                      width="56"
                                      height="22"
                                      rx="11"
                                      fill={n.color}
                                      fillOpacity={0.06 + Math.sin(t * 4 + i) * 0.03}
                                    />
                                    {/* Pill contour structure */}
                                    <rect
                                      x="-26"
                                      y="-10"
                                      width="52"
                                      height="20"
                                      rx="10"
                                      fill="#ffffff"
                                      fillOpacity="0.96"
                                      stroke={n.color}
                                      strokeOpacity="0.75"
                                      strokeWidth="0.8"
                                      className="shadow-sm"
                                    />
                                    {/* Elegant tiny solid indicator dot */}
                                    <circle
                                      cx="-16"
                                      cy="0"
                                      r="2.5"
                                      fill={n.color}
                                    />
                                    {/* Risk text */}
                                    <text
                                      x="-8"
                                      y="3"
                                      fill="#111115"
                                      fontSize="7"
                                      fontWeight="800"
                                      fontFamily="var(--font-mono)"
                                      letterSpacing="-0.1px"
                                    >
                                      {n.label}
                                    </text>
                                  </g>
                                );
                              })}

                              {/* Central strategic pivot point which is orange, then turns green when touched at t >= 6.1s */}
                              <circle cx={cx} cy={cy} r={48} fill={t >= 6.1 ? "url(#greenGlow)" : "url(#orangeGlow)"} opacity={t >= 6.1 ? 1 : 0.75} />
                              <circle cx={cx} cy={cy} r={6.5} fill={t >= 6.1 ? "#10b981" : "#ea580c"} stroke="#ffffff" strokeWidth="1.2" />
                            </g>
                          );
                        })()}
                      </g>
                    )}

                    {/* ANIMATED SECTION 2: Highly elegant, business-professional fountain pen gliding horizontally straight to center */}
                    {fffAnimTime >= 3.5 && fffAnimTime < 7.7 && (
                      (() => {
                        const t = fffAnimTime;
                        let px = -240;
                        const py = 200; // Straight horizontal alignment aiming precisely towards the center (300, 200)

                        if (t >= 3.5 && t < 6.1) {
                          // SLOW PRECISE GEOMETRIC GLIDE: moves straight horizontally from left edge (-240) to center (300) over 2.6s
                          const pct = (t - 3.5) / 2.6;
                          px = -240 + (300 - (-240)) * pct;
                        } else {
                          // Perfect static hold at center
                          px = 300;
                        }

                        return (
                         <g transform={`translate(${px}, ${py}) rotate(0)`}>
                           {/* Ultra-slender micro steel needle point for high precision */}
                           <rect x="-6" y="-0.3" width="6" height="0.6" fill="#0f172a" />
                           
                           {/* Minimalist technical tapered cone (satin chromium finish) */}
                           <polygon points="-16,-1.3 -6,-0.4 -6,0.4 -16,1.4" fill="url(#platinumTrim)" stroke="#1e293b" strokeWidth="0.2" />
                           
                           {/* Sleek metal spacing sleeve */}
                           <rect x="-19" y="-1.5" width="3" height="3" fill="url(#platinumTrim)" stroke="#1e293b" strokeWidth="0.2" />

                           {/* Clean micro-machined knurled grip sections (Bauhaus aesthetic) */}
                           <rect x="-56" y="-1.5" width="37" height="3" fill="#334155" stroke="#1e293b" strokeWidth="0.2" />
                           {/* Micro alignment ticks along the grip collar */}
                           <line x1="-51" y1="-1.5" x2="-51" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                           <line x1="-46" y1="-1.5" x2="-46" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                           <line x1="-41" y1="-1.5" x2="-41" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                           <line x1="-36" y1="-1.5" x2="-36" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                           <line x1="-31" y1="-1.5" x2="-31" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                           <line x1="-26" y1="-1.5" x2="-26" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />

                           {/* Subtle premium gold reference indicator band */}
                           <rect x="-58.5" y="-1.6" width="2.5" height="3.2" fill="url(#goldTip)" stroke="#8d6205" strokeWidth="0.15" />

                           {/* Hyper-thin, uniform matte nickel/silver barrel */}
                           <rect x="-225" y="-1.5" width="166" height="3" fill="url(#platinumTrim)" stroke="#475569" strokeWidth="0.2" />

                           {/* Micro slender black steel architectural pen pocket clip */}
                           <rect x="-220" y="-2.3" width="45" height="0.6" rx="0.1" fill="#1e293b" stroke="#334155" strokeWidth="0.1" />

                           {/* Elite minimal black end-cap crown */}
                           <rect x="-231" y="-1.5" width="6" height="3" fill="#1e293b" rx="0.2" />
                           <rect x="-233" y="-1" width="2" height="2" rx="0.1" fill="url(#platinumTrim)" />
                           <rect x="-227" y="-1.6" width="1" height="3.2" fill="url(#goldTip)" />
                         </g>
                        );
                      })()
                    )}

                    {/* INTERACTIVE MERGER: Thick Green Point growing in center after touch (6.1s - 7.7s) */}
                    {fffAnimTime >= 6.1 && fffAnimTime < 7.7 && (
                      (() => {
                        const t = fffAnimTime;
                        let scale = 0;
                        if (t >= 6.1 && t < 6.9) {
                          scale = (t - 6.1) * 1.25;
                        } else if (t >= 6.9) {
                          // Dynamic pulsing
                          scale = 1.0 + Math.sin(t * 7) * 0.08;
                        }
                        const r = 16 * scale;
                        
                        return (
                          <g>
                            {/* Emerald radial glow backdrop */}
                            <circle cx="300" cy="200" r={r * 3.5} fill="url(#greenGlow)" />
                            
                            {/* Concentric rings pulsing */}
                            <circle cx="300" cy="200" r={r * 1.8} stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="2, 4" className="animate-spin" style={{ animationDuration: "6s" }} />

                            {/* Thick, bold beautiful green point */}
                            <circle cx="300" cy="200" r={r} fill="#10b981" stroke="#ffffff" strokeWidth="1.5" className="shadow-md" />
                            {/* Gold center pivot */}
                            <circle cx="300" cy="200" r={r * 0.35} fill="url(#goldGrad)" />
                          </g>
                        );
                      })()
                    )}

                    {/* ANIMATED SECTION 3: Typewritten Premium Code Text (7.7s - 17.0s) */}
                    {fffAnimTime >= 7.7 && (
                      (() => {
                        const t = fffAnimTime;
                        // Elegant custom lines (Strictly English as requested)
                        const lines = [
                          "Business can be complicated.",
                          "It doesn't have to.",
                          "We turn risks into solutions.",
                          "Agile. Precise. Pragmatic."
                        ];

                        const targetStr = lines.join(" ");
                        // Progress calculation (types out over 3.5 seconds)
                        const progress = Math.min(1.0, Math.max(0, (t - 7.9) / 3.5));
                        const charsTotal = targetStr.length;
                        const charsToShow = Math.floor(progress * charsTotal);
                        
                        return (
                          <g>
                            {/* Elegant background tint container to frame text beautifully - White Paper Slate */}
                            <rect x="50" y="80" width="500" height="240" rx="8" fill="#ffffff" fillOpacity="0.96" stroke="rgba(0, 71, 171, 0.08)" strokeWidth="1" className="shadow-lg" />
                            
                            {/* System response identifier in cobalt blue */}
                            <text x="80" y="115" fill="#0047ab" fontSize="8" fontFamily="var(--font-mono)" fontWeight="750" letterSpacing="2px">
                              [ DESIGN RESOLUTION PROTOCOL ]
                            </text>
                            
                            <line x1="80" y1="130" x2="520" y2="130" stroke="rgba(0, 71, 171, 0.06)" strokeWidth="0.8" />

                            {/* Typewriter text body - elegantly split into balanced lines */}
                            <g transform="translate(80, 168)">
                              {(() => {
                                let charsLeftToType = charsToShow;
                                return lines.map((line, lIdx) => {
                                  if (charsLeftToType <= 0 && progress < 0.99) return null;
                                  
                                  const textToDisplay = progress >= 0.99 ? line : line.slice(0, charsLeftToType);
                                  charsLeftToType -= line.length;

                                  const isLastHighlightLine = lIdx === 3;
                                  const isSolutionLine = lIdx === 2;

                                  return (
                                    <text
                                      key={lIdx}
                                      x="0"
                                      y={lIdx * 34}
                                      fill={isLastHighlightLine ? "#0047ab" : isSolutionLine ? "#111115" : "rgba(17,17,21,0.8)"}
                                      fontSize={isLastHighlightLine ? "15" : "12.5"}
                                      fontFamily={isLastHighlightLine ? "var(--font-display)" : "var(--font-sans)"}
                                      fontWeight={isLastHighlightLine ? "800" : "500"}
                                      letterSpacing={isLastHighlightLine ? "0.4px" : "0.1px"}
                                      fontStyle={lIdx === 1 ? "italic" : "normal"}
                                    >
                                      {textToDisplay}
                                      {/* Blink cursor if active */}
                                      {charsLeftToType + line.length > 0 && charsLeftToType + line.length <= line.length && progress < 0.99 && (
                                        <tspan fill="#0047ab" className="animate-pulse">_</tspan>
                                      )}
                                    </text>
                                  );
                                });
                              })()}
                            </g>

                            {/* Tech-Savvy Footer Info */}
                            <text x="80" y="295" fill="rgba(17,17,21,0.3)" fontSize="7.5" fontFamily="var(--font-mono)">
                              FRAMEWORK SPEED: P17S // PLATFORM CORE: STABLE // VERSION 2.0.4
                            </text>
                          </g>
                        );
                      })()
                    )}

                  </svg>

                </div>

                {/* Simulated Scrubber Tracker Progress Indicator under video */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-charcoal/5 relative z-10">
                  <div className="absolute top-0 left-0 h-full bg-[#0047ab] transition-all duration-75" style={{ width: `${(fffAnimTime / 17) * 100}%` }} />
                </div>
              </div>
              </div> {/* Ending of hidden wrap protection */}
            </div>

            {/* Piece 2: Middle (Text Right, Image Left) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Visual Comparison Left */}
              <div className="lg:col-span-6 order-2 lg:order-1 border border-charcoal/10 bg-[#faf8f4] flex flex-col justify-between h-full min-h-[440px] rounded-none shadow-sm shadow-stone-200/50">
                {/* Header bar of the elegant editorial board */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-charcoal/10 bg-[#faf8f4]">
                  <div className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 bg-[#C0823E]" />
                    <span className="text-[#1B2A4A] font-display text-[9px] uppercase tracking-[0.25em] font-bold">
                      {lang === "DE" ? "KOMPARATIVE RISIKOANALYSE" : "COMPARATIVE RISK BRIEFING"}
                    </span>
                  </div>
                  <div className="text-charcoal/40 font-mono text-[9px] tracking-widest">FOLIO DE-MUC-7.8</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 p-6 sm:p-8 bg-[#faf8f4] flex-1 pb-8">
                  
                  {/* LEFT SIDE: Andere Rechtsberater */}
                  <div className="space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="text-[9px] font-mono tracking-widest text-charcoal/40 uppercase mb-2">
                        {lang === "DE" ? "01 / TRADIERTES NARRATIV" : "01 / DESCRIPTIVE REPORTING"}
                      </div>
                      <h4 className="font-serif italic text-lg text-[#1B2A4A] font-medium border-b border-charcoal/10 pb-2 mb-4">
                        {lang === "DE" ? "Andere Rechtsberater" : "Other Legal Advisors"}
                      </h4>
                      <div className="border-l border-charcoal/15 pl-4 py-1">
                        <p className="font-serif italic text-charcoal/70 text-[11px] sm:text-[11.5px] leading-[1.8] text-left tracking-normal">
                          {lang === "DE" 
                            ? "„Auf Basis der von Ihnen in den E-Mails vom 5., 7. und 11. Mai 2026 sowie den Telefonaten vom 14. und 18. Mai und allen öffentlich verfügbaren Informationen (Abrufdatum: 13. Mai) unter Zugrundelegung, dass diese richtig sind, besteht das Risiko, dass die Regelung in Ziffer 7.8 des Entwurfs des Liefervertrags vom 5. Mai 2026, sollte es zu einem Rechtsstreit kommen, von einem Gericht als unwirksam bewertet wird.“"
                            : "“Based on the information provided in your emails of May 5th, 7th, and 11th, 2026, as well as the phone calls on May 14th and 18th, and all publicly available info (retrieved: May 13th), assuming its accuracy, there is a risk that the provision in Clause 7.8 of the draft supply agreement dated May 5th, 2026, in the event of a dispute, will be deemed invalid by a court.”"}
                        </p>
                      </div>
                    </div>
                    {/* Quiet editorial commentary pointing out the effort required to make sense of the paragraph */}
                    <div className="text-[9px] text-charcoal/40 font-mono tracking-wide leading-relaxed pt-4 border-t border-charcoal/5">
                      {lang === "DE" 
                        ? "* Unprioritisiertes Gutachten. Die Ermittlung tragfähiger Geschäftsentscheidungen verbleibt vollständig beim Mandanten."
                        : "* Unprioritized advisory. The extraction of strategic business decisions resides entirely with the client."}
                    </div>
                  </div>

                  {/* RIGHT SIDE: Varda Legal */}
                  <div className="space-y-6 flex flex-col justify-between md:border-l md:border-charcoal/10 md:pl-8">
                    <div>
                      <div className="text-[9px] font-mono tracking-widest text-[#C0823E] uppercase mb-2">
                        {lang === "DE" ? "02 / ENTSCHEIDUNGSREIFE" : "02 / DECISION DIRECTIVE"}
                      </div>
                      <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-[#1B2A4A] text-xs border-b border-charcoal/10 pb-2 mb-4">
                        Varda Legal
                      </h4>

                      {/* No spreadsheet table! Clean decision briefing components */}
                      <div className="space-y-5">
                        
                        {/* Provision Reference Detail */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[9px] font-bold text-[#C0823E] bg-[#C0823E]/10 px-1.5 py-0.5">
                              {lang === "DE" ? "ZIFFER 7.8" : "CLAUSE 7.8"}
                            </span>
                            <span className="font-mono text-[8px] uppercase tracking-wider text-charcoal/40">
                              {lang === "DE" ? "HAFTUNGSRISIKO" : "LIABILITY RISK"}
                            </span>
                          </div>
                          <p className="font-serif italic text-xs text-[#1B2A4A] leading-relaxed">
                            {lang === "DE" 
                              ? "Unwirksamer Haftungsausschluss, bei aktuellem Wortlaut kein wirksamer Ausschluss für leichte Fahrlässigkeit" 
                              : "Invalid limitation clause; current phrasing fails to exclude liability for simple negligence."}
                          </p>
                        </div>

                        {/* Metrics Pair Grid */}
                        <div className="grid grid-cols-2 gap-4 border-t border-b border-charcoal/10 py-4 my-2">
                          <div>
                            <span className="block font-mono text-[7.5px] uppercase tracking-wider text-charcoal/50">
                              {lang === "DE" ? "Wahrscheinlichkeit" : "PROBABILITY"}
                            </span>
                            <span className="font-serif text-2xl font-light text-[#C0823E] tracking-tight">
                              20 %
                            </span>
                          </div>
                          <div>
                            <span className="block font-mono text-[7.5px] uppercase tracking-wider text-charcoal/50">
                              {lang === "DE" ? "Wirtschaftlicher Impact" : "ECONOMIC IMPACT"}
                            </span>
                            <span className="font-serif text-2xl font-light text-[#1B2A4A] tracking-tight">
                              EUR 120k
                            </span>
                          </div>
                        </div>

                        {/* Clean Action Directive Highlight bar */}
                        <div className="space-y-1">
                          <span className="block font-mono text-[8px] uppercase tracking-wider text-charcoal/40">
                            {lang === "DE" ? "KONKRETE HANDLUNGSEMPFEHLUNG" : "ACTIONABLE DIRECTIVE"}
                          </span>
                          <div className="bg-white border-l-2 border-[#C0823E] p-3 shadow-xs">
                            <p className="font-mono text-[10.5px] sm:text-[11px] font-bold text-[#1B2A4A] tracking-tight">
                              {lang === "DE" ? "«und Vorsatz» streichen" : "Strike «and intent»"}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="pt-2 text-[8px] text-charcoal/40 font-mono flex items-center justify-between border-t border-charcoal/5">
                      <span>* DECISION READY</span>
                      <span>VARDA LEGAL © 2026</span>
                    </div>
                  </div>

                </div>

                {/* Sovereign, reduced professional slide footer */}
                <div className="border-t border-charcoal/10 bg-[#faf8f4] py-3.5 px-6 text-center">
                  <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-charcoal/40 block leading-relaxed">
                    Varda Legal | Dr. Konstantin Filbinger | Rechtsanwalt für Gesellschaftsrecht, Vertragsrecht, M&A und Tech | München
                  </span>
                </div>
              </div>
              {/* Text Right */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <span className="font-mono text-xs text-brand-red font-semibold">{d.fff.blocks[1].subtitle}</span>
                <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-charcoal tracking-tight">
                  {d.fff.blocks[1].title}
                </h3>
                <p className="font-sans text-charcoal/80 leading-relaxed text-sm md:text-base">
                  {d.fff.blocks[1].text}
                </p>
                <div className="font-serif italic border-l-2 border-brand-red pl-4 text-xs tracking-wide text-charcoal/60">
                  {d.fff.blocks[1].quote}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: "DENKWERK" (RESOURCES/BLOG WITH POPUP DETAIL VIEW) */}
        <section id="denkwerk" className="py-16 md:py-24 border-b border-charcoal/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red">04 / {d.denkwerk.title}</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.denkwerk.subtitle}</h2>
            </div>
            <div className="font-mono text-xs text-charcoal/50 pr-2">
              [{d.denkwerk.all}: 3 Articles]
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {d.denkwerk.articles.map((article) => (
              <div 
                key={article.id} 
                className="border border-charcoal/15 bg-white p-6 md:p-8 flex flex-col justify-between h-full relative"
              >
                {/* Meta details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-[10px] pb-3 border-b border-charcoal/10">
                    <span className="text-brand-red uppercase font-semibold">{article.category}</span>
                    <span className="text-charcoal/40">{article.date}</span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold tracking-tight text-charcoal line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-charcoal/5 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-charcoal/40">{article.readingTime}</span>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center space-x-1.5 font-mono text-xs text-brand-red hover:text-charcoal transition-colors group cursor-pointer"
                  >
                    <span>{d.denkwerk.readMore}</span>
                    <ChevronRight className="h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* DETAILED ARTICLE EXPANSION DRAWER/MODAL (brand eins Style layout) */}
          <AnimatePresence>
            {selectedArticle && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-end bg-charcoal/40 backdrop-blur-sm"
                onClick={() => setSelectedArticle(null)}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.35 }}
                  className="w-full max-w-3xl h-full bg-paper-light border-l border-charcoal/20 p-6 md:p-12 overflow-y-auto shadow-2xl flex flex-col justify-between"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-8">
                    {/* Header Controls */}
                    <div className="flex justify-between items-center pb-4 border-b border-charcoal/10">
                      <button
                        onClick={() => setSelectedArticle(null)}
                        className="inline-flex items-center space-x-2 font-mono text-xs tracking-wider uppercase text-charcoal/60 hover:text-brand-red focus:outline-none"
                      >
                        <X className="h-4" />
                        <span>{d.denkwerk.back}</span>
                      </button>
                      <div className="font-mono text-[10px] bg-charcoal text-white px-2 py-0.5 uppercase tracking-wide">
                        {selectedArticle.category}
                      </div>
                    </div>

                    {/* Article Matter */}
                    <div className="space-y-6">
                      <div className="flex justify-between font-mono text-xs text-charcoal/40">
                        <span>{selectedArticle.date}</span>
                        <span>{selectedArticle.readingTime}</span>
                      </div>
                      
                      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-charcoal py-2 leading-[1.08]">
                        {selectedArticle.title}
                      </h1>

                      <div className="h-[2px] w-24 bg-brand-red" />

                      {/* Hard-rendered styled details inside div to maintain typography */}
                      <p className="font-serif italic text-lg text-charcoal/75 leading-relaxed bg-white p-4 border-l-4 border-charcoal/25">
                        {selectedArticle.excerpt}
                      </p>

                      <div className="prose prose-sm md:prose-base text-charcoal/90 pt-4 leading-relaxed font-sans space-y-6">
                        {/* Splitting fake Markdown elements beautifully with customized elements */}
                        {selectedArticle.content.split("\n\n").map((para, pIdx) => {
                          if (para.startsWith("### ")) {
                            return (
                              <h3 key={pIdx} className="font-display font-bold text-lg md:text-xl text-charcoal pt-4 border-b border-charcoal/5 pb-1">
                                {para.replace("### ", "")}
                              </h3>
                            );
                          }
                          return (
                            <p key={pIdx} className="text-sm md:text-base text-charcoal/85">
                              {para}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Closure & Legal Stamp footer */}
                  <div className="mt-12 pt-8 border-t border-charcoal/10 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-charcoal/60">© 2026 Varda Legal, München</span>
                      <a 
                        href="#letsgo" 
                        onClick={() => setSelectedArticle(null)}
                        className="text-brand-red font-bold hover:underline"
                      >
                        {lang === "DE" ? "Kanzlei buchen" : "Consult with us"}
                      </a>
                    </div>
                    <p className="text-[10px] text-charcoal/40 leading-snug font-mono">
                      {lang === "DE" 
                        ? "Dieser Fachbeitrag dient lediglich der allgemeinen Information und Orientierung. Er stellt keinerlei steuerliche oder rechtsverbindliche Beratung dar." 
                        : "This thought piece serves of general instructional guidance only and constitutes no structural tax or legal retainer binding advice."}
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* SECTION 6: "VERGÜTUNG" (TRANSPARENT VALUE-BASED FLAT RATES & COST ESTIMATOR) */}
        <section id="verguetung" className="py-16 md:py-24 border-b border-charcoal/10">
          <div className="space-y-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red">05 / {d.verguetung.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.verguetung.subtitle}</h2>
          </div>

          <div className="max-w-3xl space-y-8">
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
              {d.verguetung.intro}
            </p>

            <div>
              <a
                href={`mailto:konstantin.filbinger86@gmail.com?subject=${
                  encodeURIComponent(lang === "DE" ? "Moderne Rechtsberatung / Anfrage" : "Modern Legal Advisory / Inquiry")
                }&body=${
                  encodeURIComponent(
                    lang === "DE" 
                      ? "Sehr geehrter Herr Dr. Filbinger,\n\nich habe Ihre Webseite besucht und würde mich gerne zu einem gesellschaftsrechtlichen bzw. vertraglichen Projekt austauschen.\n\nMit freundlichen Grüßen" 
                      : "Dear Dr. Filbinger,\n\nI visited your website and would like to discuss a corporate or contract law matter.\n\nBest regards"
                  )
                }`}
                className="inline-flex justify-center items-center py-3.5 px-10 font-mono text-xs uppercase tracking-widest text-paper-light bg-charcoal hover:bg-charcoal/85 transition-all duration-300"
              >
                <span>{lang === "DE" ? "Klingt gut" : "Sounds good"}</span>
              </a>
            </div>
          </div>

          <p className="text-[11px] text-charcoal/50 text-right mt-16 font-mono">
            * {d.verguetung.note}
          </p>
        </section>

        {/* SECTION 7: "LET'S GO" (CONTACT & INTERACTIVE EMBEDDED CALENDAR SCHEDULER) */}
        <section id="letsgo" className="py-16 md:py-24">
          <div className="space-y-4 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red">06 / {d.letsgo.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.letsgo.subtitle}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Hand Side: Embedded Interactive Scheduling Calendar */}
            <div className="lg:col-span-7 bg-white border border-charcoal/15 p-6 md:p-8 shadow-sm">
              <div className="space-y-4 mb-6">
                <h3 className="font-display font-extrabold text-sm uppercase tracking-widest text-charcoal flex items-center gap-2">
                  <Calendar className="h-4 text-brand-red" />
                  {d.letsgo.calendarTitle}
                </h3>
                <p className="font-sans text-xs text-charcoal/70">
                  {d.letsgo.calendarDesc}
                </p>

                {/* Inline Meeting Type Selector Selector */}
                <div className="grid grid-cols-2 gap-3 border border-charcoal/10 p-1 bg-paper-light">
                  <button
                    onClick={() => {
                      setSelectedMeetingType("15min");
                      if (bookingStep === "success") setBookingStep("slot");
                    }}
                    className={`py-2 text-center text-xs font-mono uppercase transition-all ${
                      selectedMeetingType === "15min" 
                        ? "bg-charcoal text-white font-bold" 
                        : "text-charcoal/50 hover:text-charcoal"
                    }`}
                  >
                    15 Min. Fast Check
                  </button>
                  <button
                    onClick={() => {
                      setSelectedMeetingType("45min");
                      if (bookingStep === "success") setBookingStep("slot");
                    }}
                    className={`py-2 text-center text-xs font-mono uppercase transition-all ${
                      selectedMeetingType === "45min" 
                        ? "bg-charcoal text-white font-bold" 
                        : "text-charcoal/50 hover:text-charcoal"
                    }`}
                  >
                    45 Min. Strategy Box
                  </button>
                </div>
              </div>

              {/* Dynamic steps of scheduler booking */}
              {bookingStep === "slot" && (
                <div className="space-y-6">
                  {/* Select Day Row */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase text-charcoal/50">Step 1: Select Date (May 2026)</span>
                    <div className="grid grid-cols-5 gap-2">
                      {mockDays.map((dayObj, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedDay(dayObj.day);
                            setSelectedTimeSlot(null);
                          }}
                          className={`p-3 border flex flex-col items-center justify-center transition-all ${
                            selectedDay === dayObj.day 
                              ? "border-brand-red bg-charcoal text-white" 
                              : "border-charcoal/10 hover:border-charcoal/60 bg-paper-light"
                          }`}
                        >
                          <span className="text-[10px] font-mono opacity-50 uppercase">{dayObj.label}</span>
                          <span className="font-mono font-bold text-sm mt-0.5">{dayObj.day}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Timings (shown dynamically if day selected) */}
                  {selectedDay ? (
                    <div className="space-y-3">
                      <span className="font-mono text-[10px] uppercase text-charcoal/50">Step 2: Available Slots for May {selectedDay}th</span>
                      <div className="grid grid-cols-3 gap-2">
                        {mockDays.find(d => d.day === selectedDay)?.slots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTimeSlot(slot)}
                            className={`py-2 text-center text-xs font-mono border transition-all ${
                              selectedTimeSlot === slot 
                                ? "bg-brand-red border-brand-red text-white font-bold" 
                                : "bg-white border-charcoal/10 hover:border-charcoal hover:bg-paper-light"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      {/* Proceed Trigger */}
                      {selectedTimeSlot && (
                        <div className="pt-4 text-right">
                          <button
                            onClick={() => setBookingStep("details")}
                            className="bg-charcoal text-paper-light py-2 px-6 font-mono text-xs uppercase tracking-wider hover:bg-brand-red transition-all cursor-pointer"
                          >
                            <span>{lang === "DE" ? "Weiter zu Details" : "Next: Enter Details"}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="border border-dashed border-charcoal/15 bg-paper-light/30 p-6 text-center">
                      <span className="text-xs font-mono text-charcoal/40 italic">
                        {lang === "DE" ? "Bitte wählen Sie erst ein Datum oben." : "Please select an available booking date first."}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Form Step Details */}
              {bookingStep === "details" && (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-[10px] text-charcoal/60 border-b border-charcoal/10 pb-2">
                    <span>Meeting: {selectedMeetingType === "15min" ? "15 Min Fast Check" : "45 Min Strategy Grid"}</span>
                    <span>Date: May {selectedDay}th at {selectedTimeSlot}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-mono text-charcoal/60 mb-1">{d.letsgo.inputs.name} *</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                        className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-brand-red focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-mono text-charcoal/60 mb-1">{d.letsgo.inputs.email} *</label>
                      <input
                        type="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                        className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-brand-red focus:outline-none"
                        placeholder="john[at]startup.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono text-charcoal/60 mb-1">{d.letsgo.inputs.company}</label>
                    <input
                      type="text"
                      value={bookingForm.company}
                      onChange={(e) => setBookingForm({...bookingForm, company: e.target.value})}
                      className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-brand-red focus:outline-none"
                      placeholder="NextScale GmbH"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono text-charcoal/60 mb-1">{d.letsgo.inputs.message}</label>
                    <textarea
                      rows={3}
                      value={bookingForm.message}
                      onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                      className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-brand-red focus:outline-none"
                      placeholder="Z.B.: Aufsetzen eines Series A Term Sheets..."
                    />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      type="button"
                      onClick={() => setBookingStep("slot")}
                      className="text-xs text-charcoal/60 hover:text-brand-red font-mono py-1"
                    >
                      {lang === "DE" ? "← Zurück" : "← Back"}
                    </button>
                    <button
                      type="submit"
                      className="bg-brand-red text-white py-2.5 px-6 font-mono text-xs uppercase tracking-wider hover:bg-charcoal transition-all"
                    >
                      {d.letsgo.inputs.submit}
                    </button>
                  </div>
                </form>
              )}

              {/* Success Result ticket */}
              {bookingStep === "success" && (
                <div className="py-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 bg-green-100 text-green-600 rounded-full mb-2">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="font-display font-extrabold text-basem uppercase tracking-wide">
                    {lang === "DE" ? "Terminerfassung erfolgreich!" : "Slot Reserved!"}
                  </h4>
                  <p className="font-sans text-xs text-charcoal/80 max-w-md mx-auto leading-relaxed">
                    {d.letsgo.successMessage}
                  </p>

                  <div className="bg-paper-light p-4 border border-dashed border-charcoal/10 text-xs font-mono inline-block text-left mx-auto max-w-sm space-y-1">
                    <p className="font-bold flex justify-between gap-6 border-b border-charcoal/10 pb-1 mb-1">
                      <span>Varda Legal Confirmation</span> 
                      <span className="text-brand-red">#ST-{Math.floor(Math.random() * 90000) + 10000}</span>
                    </p>
                    <p><strong>Consultant:</strong> Dr. Konstantin Filbinger</p>
                    <p><strong>Type:</strong> {selectedMeetingType === "15min" ? "15-Min Fast Check" : "45-Min Strategy Box"}</p>
                    <p><strong>Date:</strong> 2026-05-{selectedDay} at {selectedTimeSlot} (Europe/Berlin)</p>
                    <p><strong>Client:</strong> {bookingForm.name} ({bookingForm.company || "Private Client"})</p>
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        setBookingStep("slot");
                        setSelectedDay(null);
                        setSelectedTimeSlot(null);
                        setBookingForm({ name: "", email: "", company: "", message: "" });
                      }}
                      className="text-xs font-mono text-charcoal/60 hover:text-brand-red underline py-2 cursor-pointer"
                    >
                      {lang === "DE" ? "Einen weiteren Termin buchen" : "Reserve another session"}
                    </button>
                  </div>
                </div>
              )}

              {/* Status footer for scheduler */}
              <div className="mt-6 pt-4 border-t border-charcoal/10 flex justify-between items-center font-mono text-[10px] text-charcoal/40">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-blockAnimation" />
                  {d.letsgo.calendarStatus}
                </span>
                <span>Active timezone: GMT+2 (Munich)</span>
              </div>
            </div>

            {/* Right Hand Side: Address / Legal Contact coordinates */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Munich HQ Station */}
              <div className="border border-charcoal/15 bg-white p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-brand-red text-xs font-mono">
                  <MapPin className="h-4" />
                  <span className="uppercase tracking-widest">{d.letsgo.addressTitle}</span>
                </div>
                
                <h4 className="font-serif text-2xl font-bold text-charcoal leading-tight">
                  Auenstraße 21<br />
                  80469 München<br />
                  Deutschland
                </h4>
              </div>

              {/* Direct coordinates */}
              <div className="border border-charcoal/15 bg-white p-6 md:p-8 space-y-4 font-mono text-xs">
                {/* Mail */}
                <div className="flex items-start space-x-3 py-1.5 border-b border-charcoal/5">
                  <Mail className="h-4 text-brand-red mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-charcoal/40 text-[10px]">{d.letsgo.emailTitle}</span>
                    <p className="font-semibold text-charcoal">info[at]vardalegal.com</p>
                  </div>
                </div>

                {/* Clock info */}
                <div className="flex items-start space-x-3 py-1.5">
                  <Clock className="h-4 text-brand-red mt-0.5" />
                  <div className="space-y-0.5 text-[10px] text-charcoal/60 leading-normal">
                    <span className="text-charcoal uppercase tracking-wider font-bold">DEUTSCHLAND • EST</span>
                    <p>Mon – Fr: 09:00 – 18:00 (CET)</p>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </section>

        {/* Relocated Noble Navigation Visual Showcase to the bottom of main */}
        <div className="mt-16 sm:mt-24 mb-16 border border-charcoal/15 bg-[#faf8f4] p-4 md:p-6 shadow-sm">
          {/* The Static Navigation Image in full size, uncropped, clean display */}
          <img 
            src={munichImage}
            alt="Strategic Navigation and Precision - Varda Legal"
            referrerPolicy="no-referrer"
            className="w-full h-auto block rounded shadow border border-charcoal/10"
          />

          {/* Sovereign, reduced professional slide footer */}
          <div className="mt-6 pt-3 border-t border-charcoal/10 text-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/40 block leading-relaxed">
              Varda Legal | Dr. Konstantin Filbinger | Rechtsanwalt für Gesellschaftsrecht, Vertragsrecht, M&A und Tech | München
            </span>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-charcoal/15 bg-white py-12 text-charcoal/80">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Branding col */}
            <div className="space-y-3">
              <div className="font-display font-bold text-sm tracking-wider uppercase">VARDA LEGAL</div>
              <p className="text-xs text-charcoal/60 leading-relaxed font-sans">
                {lang === "DE" 
                  ? "Corporate/Commercial/M&A/Tech" 
                  : "Corporate, Commercial, M&A and Tech counsel."}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase text-charcoal/40 font-bold">Index</div>
              <ul className="space-y-2 font-sans text-xs">
                <li><a href="#wir" className="hover:text-brand-red transition-all">01 / {d.nav.wir}</a></li>
                <li><a href="#fokus" className="hover:text-brand-red transition-all">02 / {d.nav.fokus}</a></li>
                <li><a href="#fff" className="hover:text-brand-red transition-all">03 / {d.nav.fff}</a></li>
                <li><a href="#denkwerk" className="hover:text-brand-red transition-all">04 / {d.nav.denkwerk}</a></li>
                <li><a href="#verguetung" className="hover:text-brand-red transition-all">05 / {d.nav.verguetung}</a></li>
                <li><a href="#letsgo" className="hover:text-brand-red transition-all">06 / {d.nav.letsgo}</a></li>
              </ul>
            </div>

            {/* Direct */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase text-charcoal/40 font-bold">Contact</div>
              <ul className="space-y-2 font-mono text-xs">
                <li>info[at]vardalegal.com</li>
                <li>Munich • Auenstraße 21, 80469</li>
              </ul>
            </div>

            {/* Impressum Legal Stuff */}
            <div className="space-y-3 text-xs text-charcoal/50 leading-relaxed font-mono">
              <div className="font-mono text-[10px] uppercase text-charcoal/40 font-bold font-semibold">Disclaimer</div>
              <p className="text-[10px]">
                {lang === "DE" 
                  ? "Dr. Konstantin Filbinger ist als Rechtsanwalt in der Bundesrepublik Deutschland zugelassen und Mitglied der Rechtsanwaltskammer für den Oberlandesgerichtsbezirk München." 
                  : "Dr. Konstantin Filbinger is admitted to the German bar (Rechtsanwalt, Germany) and is a member of the Munich Bar Association."}
              </p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-charcoal/40">
            <div>
              © 2026 Dr. Konstantin Filbinger. All Rights Reserved.
            </div>
            <div className="flex space-x-4">
              <span className="hover:text-brand-red cursor-pointer" onClick={() => setActiveLegalModal("impressum")}>Impressum</span>
              <span>•</span>
              <span className="hover:text-brand-red cursor-pointer" onClick={() => setActiveLegalModal("datenschutz")}>Datenschutz</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Elegant, high-fashion legal notices modal */}
      <AnimatePresence>
        {activeLegalModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/85 backdrop-blur-md"
            onClick={() => setActiveLegalModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden bg-[#FAF8F4] border border-charcoal/15 shadow-2xl rounded text-charcoal flex flex-col font-sans"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-charcoal/10 bg-white">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                  {lang === "DE" ? "Rechtliche Hinweise" : "Legal Declarations"}
                </span>
                <button 
                  onClick={() => setActiveLegalModal(null)}
                  className="p-1 text-charcoal/50 hover:text-charcoal hover:bg-charcoal/5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Core Content Scroll Area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 select-text">
                {activeLegalModal === "impressum" ? (
                  lang === "DE" ? (
                    // IMPRESSUM DEUTSCH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Impressum</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Angaben gemäß § 5 TMG / § 18 MStV</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Diensteanbieter</h3>
                          <p className="mt-1 font-serif text-base text-charcoal">
                            Varda Legal<br />
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21<br />
                            80469 München
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Kontakt</h3>
                          <table className="mt-1 w-full text-sm font-mono text-charcoal/85 max-w-sm">
                            <tbody>
                              <tr>
                                <td className="py-1 w-24">E-Mail:</td>
                                <td className="py-1 font-semibold text-brand-red">info[at]vardalegal.com</td>
                              </tr>
                              <tr>
                                <td className="py-1">Web:</td>
                                <td className="py-1">www.vardalegal.com</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Berufsbezeichnung und zuständige Kammer</h3>
                          <p className="mt-1">
                            Dr. Konstantin Filbinger ist in der Bundesrepublik Deutschland als Rechtsanwalt zugelassen und Mitglied der zuständigen Aufsichtsbehörde:
                          </p>
                          <p className="mt-2 bg-charcoal/5 p-3 rounded font-serif text-sm">
                            <strong>Rechtsanwaltskammer für den Oberlandesgerichtsbezirk München</strong><br />
                            Körperschaft des öffentlichen Rechts<br />
                            Tal 33, 80331 München<br />
                            Tel: +49 (0) 89 / 53 29 44-0<br />
                            Web: <a href="https://www.rak-muenchen.de" target="_blank" rel="noopener noreferrer" className="underline text-[#002f6c] hover:text-brand-red">www.rak-muenchen.de</a>
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Berufsrechtliche Regelungen</h3>
                          <p className="mt-1">
                            Für in Deutschland zugelassene Rechtsanwälte gelten die folgenden maßgeblichen berufsrechtlichen Vorschriften:
                          </p>
                          <ul className="mt-2 list-disc pl-5 space-y-1 font-mono text-xs text-charcoal/70">
                            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                            <li>Fachanwaltsordnung (FAO)</li>
                            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                            <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
                          </ul>
                          <p className="mt-2 text-xs">
                            Diese Regelungen können auf der Website der Bundesrechtsanwaltskammer unter <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">www.brak.de</a> im Bereich „Berufsrecht“ eingesehen werden.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Berufshaftpflichtversicherung</h3>
                          <p className="mt-1">
                            Dialog Versicherung AG, Adenauerring 7, 81373 München.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">6. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21, 80469 München
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // IMPRESSUM ENGLISH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Legal Information</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Required disclosures according to § 5 TMG / § 18 MStV</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Service Provider</h3>
                          <p className="mt-1 font-serif text-base text-charcoal">
                            Varda Legal<br />
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21<br />
                            80469 Munich, Germany
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Contact</h3>
                          <table className="mt-1 w-full text-sm font-mono text-charcoal/85 max-w-sm">
                            <tbody>
                              <tr>
                                <td className="py-1 w-24">Email:</td>
                                <td className="py-1 font-semibold text-brand-red">info[at]vardalegal.com</td>
                              </tr>
                              <tr>
                                <td className="py-1">Web:</td>
                                <td className="py-1">www.vardalegal.com</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Admission & Competent Bar Association</h3>
                          <p className="mt-1">
                            Dr. Konstantin Filbinger is admitted as a German Attorney-at-Law (Rechtsanwalt) under the laws of the Federal Republic of Germany and is a member of the competent regulatory bar association:
                          </p>
                          <p className="mt-2 bg-charcoal/5 p-3 rounded font-serif text-sm">
                            <strong>Munich Bar Association (Rechtsanwaltskammer München)</strong><br />
                            Körperschaft des öffentlichen Rechts<br />
                            Tal 33, 80331 Munich, Germany<br />
                            Phone: +49 (0) 89 / 53 29 44-0<br />
                            Web: <a href="https://www.rak-muenchen.de" target="_blank" rel="noopener noreferrer" className="underline text-[#002f6c] hover:text-brand-red">www.rak-muenchen.de</a>
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Professional Regulations</h3>
                          <p className="mt-1">
                            German Attorneys-at-Law are governed by the following relevant regulations:
                          </p>
                          <ul className="mt-2 list-disc pl-5 space-y-1 font-mono text-xs text-charcoal/70">
                            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                            <li>Fachanwaltsordnung (FAO)</li>
                            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                            <li>CCBE Code of Conduct (for lawyers in the EU)</li>
                          </ul>
                          <p className="mt-2 text-xs">
                            Access to these legislative acts is available on the website of the German Federal Bar (Bundesrechtsanwaltskammer) at <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">www.brak.de</a> under the category "Berufsrecht".
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Professional Liability Insurance</h3>
                          <p className="mt-1">
                            Dialog Versicherung AG, Adenauerring 7, 81373 München.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">6. Person Responsible for Content pursuant to § 18 (2) MStV</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21, 80469 Munich, Germany
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  lang === "DE" ? (
                    // DATENSCHUTZENERKLÄRUNG DEUTSCH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Datenschutzerklärung</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Datenschutz & Verarbeitung personenbezogener Daten nach DSGVO</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Verantwortliche Stelle</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger, Varda Legal, Auenstraße 21, 80469 München, E-Mail: <span className="text-brand-red font-mono font-semibold">info[at]vardalegal.com</span>.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Erfassung and Speicherung personenbezogener Daten beim Besuch der Website</h3>
                          <p className="mt-1">
                            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät genutzten Webbrowser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Daten werden dabei erfasst und bis zur automatisierten Löschung gespeichert:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li>IP-Adresse des anfragenden Rechners,</li>
                            <li>Datum und Uhrzeit des Zugriffs,</li>
                            <li>Name und URL der abgerufenen Datei,</li>
                            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners.</li>
                          </ul>
                          <p className="mt-2">
                            Die Verarbeitung dieser Daten erfolgt auf Basis von Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den Zwecken der Gewährleistung eines reibungslosen Verbindungsaufbaus, der Systemsicherheit und der technischen Stabilität der Website.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Nutzung unseres Online-Schedulers & Kontaktformulars</h3>
                          <p className="mt-1">
                            Bei Anfragen über das Online-Terminbuchungssystem (Scheduler) oder das Kontaktformular erheben wir Ihren Namen, Ihre E-Mail-Adresse, den Namen Ihres Unternehmens sowie Ihre optionale Nachricht. Die Erfassung dient dazu, die Anfrage dem anfragenden Akteur zuzuordnen, Termine festzulegen und die Anbahnung einer professionellen Beratung ordnungsgemäß zu steuern.
                          </p>
                          <p className="mt-1 text-xs font-mono text-charcoal/60">
                            Rechtsgrundlage der Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. b DSGVO (vertragliche oder vorvertragliche Maßnahmen auf Anfrage der betroffenen Person).
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Weitergabe von Daten an Dritte</h3>
                          <p className="mt-1">
                            Eine Übermittlung Ihrer persönlichen Daten an Dritte erfolgt ausschließlich zur Erbringung unserer kanzleieigenen IT-Dienstleistungen (z.B. Hosting-Anbieter) im Rahmen einer Auftragsverarbeitungsvereinbarung (Art. 28 DSGVO) oder bei Vorliegen einer gesetzlichen Verpflichtung. Ein Verkauf oder eine unbefugte Weitergabe Ihrer Daten findet zu keinem Zeitpunkt statt.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Ihre Rechte als betroffene Person</h3>
                          <p className="mt-1 border-l-2 border-brand-red pl-3 italic">
                            Gemäß der Datenschutz-Grundverordnung stehen Ihnen umfangreiche Rechte zu:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                            <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer Daten verlangen.</li>
                            <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen, sofern dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                            <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
                            <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können Ihre bereitgestellten Daten in einem strukturierten, gängigen Format erhalten.</li>
                            <li><strong>Recht auf Widerspruch (Art. 21 DSGVO):</strong> Sie können der Datenverarbeitung aus Gründen einer besonderen Situation widersprechen.</li>
                          </ul>
                          <p className="mt-2">
                            Zur Ausübung dieser Rechte genügt eine einfache E-Mail an <span className="text-brand-red font-mono font-bold">info[at]vardalegal.com</span>. Sie haben zudem das Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO).
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // DATENSCHUTZENERKLÄRUNG ENGLISH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Privacy Policy</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Data Protection & Privacy compliance under GDPR / DSGVO</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Responsible Entity</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger, Varda Legal, Auenstraße 21, 80469 Munich, Germany, Email: <span className="text-brand-red font-mono font-semibold">info[at]vardalegal.com</span>.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Collection and Storage of Personal Data when visiting this website</h3>
                          <p className="mt-1">
                            When calling up our website, the web browser used on your system transmits technical connection properties to our servers. These are temporarily logged in server log files, and include:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li>IP address of the requesting terminal,</li>
                            <li>Date and time of retrieval,</li>
                            <li>Filename and URL of the requested web file,</li>
                            <li>Browser type and your computer's operating system.</li>
                          </ul>
                          <p className="mt-2 text-xs">
                            Legal base of this processing is Art. 6 (1) (f) GDPR. Our legitimate interest results from the goal to guarantee safe connection stability, technical system security, and correct operation.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Usage of our Contact and Meeting Scheduler System</h3>
                          <p className="mt-1">
                            If you schedule an appointment or submit an inquiry using our scheduling modules, we collect your name, email, company, and optional description. We do this to allocate the consultation slots correctly, coordinate transactions or projects, and steer professional communication.
                          </p>
                          <p className="mt-1 text-xs font-mono text-charcoal/60">
                            Legal base for this data processing is Art. 6 (1) (b) GDPR (steps prior to entering into a contract).
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Information Sharing and Third Parties</h3>
                          <p className="mt-1">
                            Your personal data is solely shared with standard external hosting partners that operate under a signed Data Processing Agreement (DPA) to host this web service (Art. 28 GDPR). Your personal information is never sold, licensed, or shared with third parties for promotional purposes.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Your Data Protection Rights under GDPR</h3>
                          <p className="mt-1 border-l-2 border-brand-red pl-3 italic">
                            In accordance with GDPR, you hold the following rights:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li><strong>Right of Access (Art. 15 GDPR):</strong> Request clear summaries of your stored personal details.</li>
                            <li><strong>Right to Rectification (Art. 16 GDPR):</strong> Request prompt correction of inaccuracies.</li>
                            <li><strong>Right to Erasure (Art. 17 GDPR):</strong> Request permanent deletion of details if no retention obligations exist.</li>
                            <li><strong>Right to Restriction (Art. 18 GDPR):</strong> Request suspension of active computational processing.</li>
                            <li><strong>Right to Data Portability (Art. 20 GDPR):</strong> Request export of data in portable structures.</li>
                            <li><strong>Right to Object (Art. 21 GDPR):</strong> Object to processing based on legitimate interest under specific conditions.</li>
                          </ul>
                          <p className="mt-2">
                            To execute any of these rights, simply email us at <span className="text-brand-red font-mono font-bold">info[at]vardalegal.com</span>. You also have the right to lodge a complaint with a competent regulatory supervisory authority (Art. 77 GDPR).
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-charcoal/10 bg-white flex justify-end font-mono text-[9px] uppercase tracking-widest text-[#002f6c]/60">
                <span>Varda Legal Office • Munich</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

