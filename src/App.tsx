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
import GruenderstrukturCheck from "./components/GruenderstrukturCheck";

import contractIntelligenceImage from "./assets/images/contractintelligence2.png"
import contractIntelligenceImageEng from "./assets/images/contractintelligence2eng.png"

import munichImage from "./assets/images/vardalegal_munich.png"

import vardalegalEndframe from "./assets/images/vardalegal_endframe.png"
import vardalegalEndframeEng from "./assets/images/vardalegal_endframeeng.png"

import konstiArch from "./assets/images/konsti2024_arch.png"
import konstiImage from "./assets/images/konsti.png"
import konstineuImage from "./assets/images/konstineu.png"
import konstiClarity from "./assets/images/konsticlarity.png"
import linkedinImage from "./assets/images/linkedin.png"

import coffeeImage from "./assets/images/vardalegal_coffeetable.png"
import tokenRecoveryImage from "./assets/images/tokenrecovery.png.png"
import tokenRecoveryImageEng from "./assets/images/tokenrecoveryeng.png"
import unternehmensverkaufImage from "./assets/images/unternehmensverkauf.png"
import unternehmensverkaufImageEng from "./assets/images/unternehmensverkaufeng.png"
import vertraegeImage from "./assets/images/vertraege.png"
import vertraegeImageEng from "./assets/images/vertraegeeng-1.png"
import vertragsanalyseImage from "./assets/images/vertragsanalyse.png"
import vertragsanalyseImageEng from "./assets/images/vertragsanalyseeng-1.png"

function DecisionArchitectureBlueprint({ lang }: { lang: Language }) {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % 100);
    }, 85);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#FAF8F4] border border-charcoal/15 overflow-hidden p-6 select-none flex flex-col justify-between group shadow-sm min-h-[380px]">
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 bg-[#FAF8F4]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,27,25,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,25,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-charcoal/[0.04] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-charcoal/[0.02] rounded-full pointer-events-none" />

      {/* Frame Headers: Corporate editorial labels */}
      <div className="relative z-10 flex justify-between items-start font-mono text-[9px] text-charcoal/50 uppercase tracking-widest">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#C0823E] animate-ping" />
          <span>Varda Decision Engine / Blueprint v2.1</span>
        </div>
        <div>[ SCALE 1:45 ]</div>
      </div>

      {/* Blueprint Dynamic SVG rendering Complexity -> Clarity */}
      <div className="relative z-10 my-auto h-52 md:h-60 flex items-center justify-center">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 500 220" fill="none">
          <defs>
            <linearGradient id="blueprintGoldGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(192, 130, 62, 0.2)" />
              <stop offset="50%" stopColor="#C0823E" />
              <stop offset="100%" stopColor="#1B2A4A" />
            </linearGradient>
            <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* LEFT ZONE: STRATEGIC COMPLEXITY (Inputs from client) */}
          <g opacity="0.9">
            {/* Connection Paths to Central Synthesis Hub */}
            <path 
              d="M 50 35 Q 160 35 240 100" 
              stroke={activeNode === "gov" ? "#C0823E" : "rgba(28,27,25,0.18)"} 
              strokeWidth="1.2" 
              strokeDasharray={activeNode === "gov" ? "none" : "3 3"} 
              className="transition-all duration-300"
              fill="none" 
            />
            <path 
              d="M 50 80 Q 160 80 240 105" 
              stroke={activeNode === "mna" ? "#C0823E" : "rgba(28,27,25,0.18)"} 
              strokeWidth="1.2" 
              strokeDasharray={activeNode === "mna" ? "none" : "3 3"} 
              className="transition-all duration-300" 
              fill="none" 
            />
            <path 
              d="M 50 130 Q 160 130 240 115" 
              stroke={activeNode === "reg" ? "#C0823E" : "rgba(28,27,25,0.18)"} 
              strokeWidth="1.2" 
              strokeDasharray={activeNode === "reg" ? "none" : "3 3"} 
              className="transition-all duration-300" 
              fill="none" 
            />
            <path 
              d="M 50 175 Q 160 175 240 120" 
              stroke={activeNode === "tax" ? "#C0823E" : "rgba(28,27,25,0.18)"} 
              strokeWidth="1.2" 
              strokeDasharray={activeNode === "tax" ? "none" : "3 3"} 
              className="transition-all duration-300" 
              fill="none" 
            />

            {/* Input Node Buttons */}
            <g 
              className="cursor-pointer" 
              onMouseEnter={() => setActiveNode("gov")} 
              onMouseLeave={() => setActiveNode(null)}
            >
              <circle cx="50" cy="35" r="5" fill="#FAF8F4" stroke="rgba(28,27,25,0.4)" strokeWidth="1.5" />
              <circle cx="50" cy="35" r="2.5" fill={activeNode === "gov" ? "#C0823E" : "rgba(28,27,25,0.4)"} />
              <text x="62" y="38" className="font-mono text-[9px] fill-charcoal/70 tracking-wide font-medium">
                {lang === "DE" ? "Strukturelle Reibung" : "Corporate Ambiguity"}
              </text>
            </g>

            <g 
              className="cursor-pointer" 
              onMouseEnter={() => setActiveNode("mna")} 
              onMouseLeave={() => setActiveNode(null)}
            >
              <circle cx="50" cy="80" r="5" fill="#FAF8F4" stroke="rgba(28,27,25,0.4)" strokeWidth="1.5" />
              <circle cx="50" cy="80" r="2.5" fill={activeNode === "mna" ? "#C0823E" : "rgba(28,27,25,0.4)"} />
              <text x="62" y="83" className="font-mono text-[9px] fill-charcoal/70 tracking-wide font-medium">
                {lang === "DE" ? "Transaktions-Risiko" : "Transactional Risk Factors"}
              </text>
            </g>

            <g 
              className="cursor-pointer" 
              onMouseEnter={() => setActiveNode("reg")} 
              onMouseLeave={() => setActiveNode(null)}
            >
              <circle cx="50" cy="130" r="5" fill="#FAF8F4" stroke="rgba(28,27,25,0.4)" strokeWidth="1.5" />
              <circle cx="50" cy="130" r="2.5" fill={activeNode === "reg" ? "#C0823E" : "rgba(28,27,25,0.4)"} />
              <text x="62" y="133" className="font-mono text-[9px] fill-charcoal/70 tracking-wide font-medium">
                {lang === "DE" ? "Regulatorisches Rauschen" : "Regulatory Friction"}
              </text>
            </g>

            <g 
              className="cursor-pointer" 
              onMouseEnter={() => setActiveNode("tax")} 
              onMouseLeave={() => setActiveNode(null)}
            >
              <circle cx="50" cy="175" r="5" fill="#FAF8F4" stroke="rgba(28,27,25,0.4)" strokeWidth="1.5" />
              <circle cx="50" cy="175" r="2.5" fill={activeNode === "tax" ? "#C0823E" : "rgba(28,27,25,0.4)"} />
              <text x="62" y="178" className="font-mono text-[9px] fill-charcoal/70 tracking-wide font-medium">
                {lang === "DE" ? "Systemische Konflikte" : "Systemic Exposure Vectors"}
              </text>
            </g>
          </g>

          {/* CENTRE: THE VARDA DIAGNOSTIC SYNTHESIS FILTER */}
          <g transform="translate(250, 110)">
            <circle cx="0" cy="0" r="26" stroke="rgba(192, 130, 62, 0.3)" strokeWidth="1" strokeDasharray="3 2" />
            <circle cx="0" cy="0" r="16" stroke="#C0823E" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="0" cy="0" r="7" fill="#1B2A4A" className="animate-pulse" />
            
            <line x1="-32" y1="0" x2="32" y2="0" stroke="rgba(28,27,25,0.12)" strokeWidth="1" />
            <line x1="0" y1="-32" x2="0" y2="32" stroke="rgba(28,27,25,0.12)" strokeWidth="1" />

            {/* Micro rotating indicators */}
            <g style={{ transform: `rotate(${tick * 3.6}deg)`, transformOrigin: "0 0" }}>
              <line x1="-16" y1="-16" x2="-20" y2="-20" stroke="#C0823E" strokeWidth="1.5" />
              <line x1="16" y1="16" x2="20" y2="20" stroke="#C0823E" strokeWidth="1.5" />
            </g>

            <text x="0" y="-36" textAnchor="middle" className="font-mono text-[8px] fill-[#C0823E] font-bold tracking-[0.25em]">
              SYNTHESIS
            </text>
          </g>

          {/* RIGHT ZONE: STRATEGIC CLARITY TRAJECTORY */}
          {/* Golden clear trajectory beam */}
          <path 
            d="M 250 110 L 440 110" 
            stroke="url(#blueprintGoldGrad)" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            filter="url(#subtleGlow)"
          />

          <line x1="310" y1="104" x2="310" y2="116" stroke="rgba(28,27,25,0.2)" strokeWidth="1" />
          <text x="310" y="126" textAnchor="middle" className="font-mono text-[7px] fill-charcoal/50 uppercase tracking-widest">MAPPING</text>

          <line x1="375" y1="104" x2="375" y2="116" stroke="rgba(28,27,25,0.2)" strokeWidth="1" />
          <text x="375" y="126" textAnchor="middle" className="font-mono text-[7px] fill-charcoal/50 uppercase tracking-widest">REDUCTION</text>

          {/* Glowing pulse crawling along the unified vector */}
          {/* Calculated based on tick */}
          <circle cx={250 + ((tick % 50) * 3.8)} cy="110" r="4.5" fill="#1B2A4A" stroke="#FAF8F4" strokeWidth="1.5" />

          {/* ENDPOINT: THE DECISION METRIC */}
          <g transform="translate(440, 110)">
            <rect x="-32" y="-30" width="64" height="16" fill="#1B2A4A" stroke="#C0823E" strokeWidth="1" />
            <text x="0" y="-19" textAnchor="middle" className="font-mono text-[8px] fill-white font-bold tracking-widest">
              {lang === "DE" ? "KLARHEIT" : "CLARITY"}
            </text>
            <circle cx="0" cy="0" r="5.5" fill="#C0823E" stroke="#FAF8F4" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="10" stroke="#C0823E" strokeWidth="0.8" strokeDasharray="2 1" className="animate-spin" />
            <text x="0" y="24" textAnchor="middle" className="font-mono text-[8px] fill-[#1B2A4A] font-bold tracking-wider">
              {lang === "DE" ? "HANDLUNG" : "ACTION"}
            </text>
          </g>
        </svg>
      </div>

      {/* Blueprint Coordinates / Technical Parameters */}
      <div className="relative z-10 border-t border-charcoal/10 pt-3 flex justify-between items-center font-mono text-[8px] text-charcoal/65">
        <div>COORDINATES: X_40.8 // Y_110.0</div>
        <div className="flex items-center gap-4">
          <span>THETA: 0.00°</span>
          <span className="text-[#C0823E] font-bold">STABILITY: 100%</span>
        </div>
      </div>
    </div>
  );
}

function MnaDecisionArchitecture({ lang }: { lang: Language }) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const t = (de: string, en: string) => (lang === "DE" ? de : en);

  // Define static data with type safety
  const nodes = {
    s1: {
      id: "s1",
      title: t("Umsatz ist stabil", "Revenue is stable"),
      desc: t("Jährliche Umsätze belegt durch lückenlose betriebswirtschaftliche Auswertungen (BWA) und geprüfte Jahresabschlüsse.", "Annual revenues proven by complete business assessments (BWA) and audited annual accounts."),
      status: "verified"
    },
    s2: {
      id: "s2",
      title: t("Kunden bleiben", "Customers will stay"),
      desc: t("Kundenbasis ist loyal, Verträge wurden in der Vergangenheit jedoch nur mündlich verlängert. Die Werthaltigkeit ist für den Käufer mangels Dokumentation nicht nachweisbar.", "Customer base is loyal, but contracts have historically only been extended verbally. Retention is unprovable to the buyer due to a lack of documentation."),
      status: "broken",
      breakLabel: t("LÜCKENHAFTE BELEGE", "INCOMPLETE RECORDS"),
      breakReason: t("Unterbrochen: Mündliche Absprachen schaffen kein verifizierbares Vertrauen.", "Interrupted: Verbal agreements do not create verifiable trust.")
    },
    s3: {
      id: "s3",
      title: t("IP gehört der Gesellschaft", "IP belongs to the company"),
      desc: t("Software wurde zum Teil durch Freelancer entwickelt, ohne dass die Rechteübertragung jemals schriftlich dokumentiert oder gegengezeichnet wurde.", "Software was partly developed by freelancers without the transfer of rights ever being documented in writing or counter-signed."),
      status: "broken",
      breakLabel: t("UNKLARHEIT RECHTSKETTE", "UNRESOLVED RIGHTS"),
      breakReason: t("Unterbrochen: Dokumentär unklare Rechtekette entwertet das Technologie-Asset.", "Interrupted: Documentarily unclear chain of rights devalues the tech asset.")
    },
    s4: {
      id: "s4",
      title: t("Schlüsselpersonen bleiben", "Key personnel will stay"),
      desc: t("Sämtliche Schlüsselmitarbeiter haben schriftliche, für den Käufer verifizierbare Lock-Up- und Retention-Agreements unterzeichnet.", "All key personnel have signed written lock-up and retention agreements that are verifiable for the buyer."),
      status: "verified"
    },
    t1: {
      id: "t1",
      title: t("weniger Rückfragen", "fewer inquiries"),
      desc: t("Präzise, sofort zugängliche Dokumentation im Datenraum eliminiert zeitaufwendige Q&A-Loops.", "Precise, immediately accessible data room documentation eliminates time-consuming Q&A loops.")
    },
    t2: {
      id: "t2",
      title: t("höhere Transaktionssicherheit", "higher transaction security"),
      desc: t("Vollständig belegbare Behauptungen verringern die Wahrscheinlichkeit eines Deal-Abbruchs im späten Prozessstadium.", "Fully verifiable assertions decrease the probability of transaction termination in late process stages.")
    },
    t3: {
      id: "t3",
      title: t("bessere Verhandlungsposition", "better negotiation position"),
      desc: t("Beseitigung von Unklarheiten verhindert nachträgliche Risikoabschläge oder Kaufpreiseinbehalte durch den Käufer.", "Elimination of ambiguities prevents retroactive risk discounts or purchase price holdbacks by the buyer.")
    },
    t4: {
      id: "t4",
      title: t("schnellerer Prozess", "faster process"),
      desc: t("Eine strukturierte und geprüfte Vorbereitung verkürzt die Due Diligence Phase um wertvolle Wochen.", "Structured and pre-audited preparation shortens the due diligence phase by valuable weeks.")
    }
  };

  return (
    <div className="relative w-full bg-[#FAF8F4] border border-charcoal/10 rounded-sm p-8 select-none flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      {/* Background blueprint grid overlay for a warm draft-paper feeling */}
      <div className="absolute inset-0 bg-[#FAF8F4]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,21,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,21,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      {/* Top Editorial Labeling & Title */}
      <div className="relative z-10 flex flex-col space-y-2 pb-6 border-b border-charcoal/[0.06] mb-8">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#947444] font-semibold">
          {t("VARDA DECISION ARCHITECTURE NO. 02", "VARDA DECISION ARCHITECTURE NO. 02")}
        </span>
        <h4 className="font-serif text-2xl text-charcoal font-medium tracking-tight">
          {t("Der Unternehmensverkauf", "The Company Sale")}
        </h4>
        <p className="font-sans text-[11px] sm:text-[12px] italic text-charcoal/60 font-light max-w-2xl">
          {t("Ein Unternehmenskauf beginnt mit Dokumenten. Er endet mit Vertrauen. Das Modell visualisiert die weichenstellende Funktion der Verifizierbarkeit.",
              "A company sale begins with documents. It ends with trust. The model visualizes the path-defining role of verifiability.")}
        </p>
      </div>

      {/* Main Diagram Canvas Area (Responsive Swipe Container for Mobile UX) */}
      <div className="relative z-10 w-full overflow-x-auto scrollbar-thin">
        <div className="min-w-[760px] relative px-2 py-4">
          
          {/* Section Headers for LHS/RHS Columns */}
          <div className="flex justify-between px-4 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/50 font-semibold select-text">
              01 / {t("Aussagen", "Statements")}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#947444] font-semibold select-text">
              02 / {t("Zentrum des Vertrauens", "Core of Trust")}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/50 font-semibold select-text">
              03 / {t("Vertrauen", "Trust Outcomes")}
            </span>
          </div>

          <svg className="w-full h-[360px] overflow-visible" viewBox="0 0 800 360" fill="none">
            <defs>
              <filter id="subtleGlowHub" x="-15%" y="-15%" width="130%" height="130%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* --- PATHS SECTION (LHS -> HUB -> RHS) --- */}
            
            {/* Path 1: s1 -> Hub (Verified, Solid) */}
            <path
              d="M 230 70 C 310 70, 340 180, 400 180"
              stroke={activeNode === "s1" || activeNode === "center" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s1" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Animated Flow Dot for Path 1 */}
            {(activeNode === "s1" || activeNode === "center") && (
              <circle r="3" fill="#947444">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M 230 70 C 310 70, 340 180, 400 180"
                />
              </circle>
            )}

            {/* Path 2: s2 -> Hub (Broken - Intended portion) */}
            <path
              d="M 230 140 H 290"
              stroke={activeNode === "s2" ? "#C0823E" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s2" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Path 2: Dashed remainder (faded, broken) */}
            <path
              d="M 290 140 C 330 140, 350 180, 400 180"
              stroke="rgba(17,17,21,0.06)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              fill="none"
            />
            {/* Break Indicator Lines (Double Slash) at x=290 */}
            <line x1="288" y1="135" x2="292" y2="145" stroke="#C0823E" strokeWidth="1.2" />
            <line x1="292" y1="135" x2="296" y2="145" stroke="#C0823E" strokeWidth="1.2" />
            
            {/* Label for break 2 */}
            <text x="304" y="137" className="font-mono text-[8px] fill-charcoal/40 tracking-wider">
              {nodes.s2.breakLabel}
            </text>


            {/* Path 3: s3 -> Hub (Broken - Intended portion) */}
            <path
              d="M 230 220 H 290"
              stroke={activeNode === "s3" ? "#C0823E" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s3" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Path 3: Dashed remainder (faded, broken) */}
            <path
              d="M 290 220 C 330 220, 350 180, 400 180"
              stroke="rgba(17,17,21,0.06)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              fill="none"
            />
            {/* Break Indicator Lines (Double Slash) at x=290 */}
            <line x1="288" y1="215" x2="292" y2="225" stroke="#C0823E" strokeWidth="1.2" />
            <line x1="292" y1="215" x2="296" y2="225" stroke="#C0823E" strokeWidth="1.2" />
            
            {/* Label for break 3 */}
            <text x="304" y="217" className="font-mono text-[8px] fill-charcoal/40 tracking-wider">
              {nodes.s3.breakLabel}
            </text>


            {/* Path 4: s4 -> Hub (Verified, Solid) */}
            <path
              d="M 230 290 C 310 290, 340 180, 400 180"
              stroke={activeNode === "s4" || activeNode === "center" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s4" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Animated Flow Dot for Path 4 */}
            {(activeNode === "s4" || activeNode === "center") && (
              <circle r="3" fill="#947444">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M 230 290 C 310 290, 340 180, 400 180"
                />
              </circle>
            )}


            {/* --- Hub OUTWARD Paths (Center -> Trust Outcomes) --- */}
            
            {/* Path Hub -> t1 */}
            <path
              d="M 400 180 C 460 180, 500 70, 570 70"
              stroke={activeNode === "t1" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t1" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0.5s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 70, 570 70"
                />
              </circle>
            )}

            {/* Path Hub -> t2 */}
            <path
              d="M 400 180 C 460 180, 500 140, 570 140"
              stroke={activeNode === "t2" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t2" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0.2s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 140, 570 140"
                />
              </circle>
            )}

            {/* Path Hub -> t3 */}
            <path
              d="M 400 180 C 460 180, 500 220, 570 220"
              stroke={activeNode === "t3" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t3" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0.7s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 220, 570 220"
                />
              </circle>
            )}

            {/* Path Hub -> t4 */}
            <path
              d="M 400 180 C 460 180, 500 290, 570 290"
              stroke={activeNode === "t4" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t4" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 290, 570 290"
                />
              </circle>
            )}


            {/* --- NODES (LEFT ZONE: STATEMENTS) --- */}
            
            {/* Left Node 1: Umsatz ist stabil */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s1")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="48"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s1" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s1" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="74" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s1.title}
              </text>
              {/* Verification status dot */}
              <circle cx="218" cy="70" r="4.5" fill="#FAF8F4" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
              <circle cx="218" cy="70" r="2" fill="#10b981" />
            </g>

            {/* Left Node 2: Kunden bleiben */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s2")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="118"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s2" ? "#C0823E" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s2" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="144" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s2.title}
              </text>
              {/* Interruption status dot */}
              <circle cx="218" cy="140" r="4.5" fill="#FAF8F4" stroke="rgba(192,130,62,0.3)" strokeWidth="1" />
              <circle cx="218" cy="140" r="2" fill="#C0823E" />
            </g>

            {/* Left Node 3: IP gehört der Gesellschaft */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s3")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="198"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s3" ? "#C0823E" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s3" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="224" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s3.title}
              </text>
              {/* Interruption status dot */}
              <circle cx="218" cy="220" r="4.5" fill="#FAF8F4" stroke="rgba(192,130,62,0.3)" strokeWidth="1" />
              <circle cx="218" cy="220" r="2" fill="#C0823E" />
            </g>

            {/* Left Node 4: Schlüsselpersonen bleiben */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s4")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="268"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s4" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="294" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s4.title}
              </text>
              {/* Verification status dot */}
              <circle cx="218" cy="290" r="4.5" fill="#FAF8F4" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
              <circle cx="218" cy="290" r="2" fill="#10b981" />
            </g>


            {/* --- CENTER HUB: VERIFIZIERBARKEIT --- */}
            
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("center")}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Exterior fine rotating reference circle */}
              <circle
                cx="400"
                cy="180"
                r="64"
                fill="none"
                stroke="rgba(148,116,68,0.15)"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                className="animate-[spin_45s_linear_infinite]"
              />
              {/* Inner physical node core */}
              <circle
                cx="400"
                cy="180"
                r="56"
                fill="#FAF8F4"
                stroke={activeNode === "center" ? "#947444" : "rgba(17,17,21,0.22)"}
                strokeWidth={activeNode === "center" ? "2" : "1.2"}
                filter={activeNode === "center" ? "url(#subtleGlowHub)" : undefined}
                className="transition-all duration-300"
              />
              {/* Grid marks on hub for technical/precision blueprint style */}
              <line x1="400" y1="116" x2="400" y2="122" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />
              <line x1="400" y1="238" x2="400" y2="244" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />
              <line x1="336" y1="180" x2="342" y2="180" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />
              <line x1="458" y1="180" x2="464" y2="180" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />

              {/* Inscriptions */}
              <text x="400" y="171" textAnchor="middle" className="font-sans text-[10px] font-bold tracking-[0.16em] fill-charcoal">
                {t("VERIFIZIERBARKEIT", "VERIFIABILITY")}
              </text>
              <text x="400" y="196" textAnchor="middle" className="font-serif text-[9px] italic fill-charcoal/50 leading-tight">
                {t("Kann die Aussage", "Can the statement")}
              </text>
              <text x="400" y="206" textAnchor="middle" className="font-serif text-[9px] italic fill-charcoal/50 leading-tight">
                {t("belegt werden?", "be verified?")}
              </text>
            </g>


            {/* --- NODES (RIGHT ZONE: TRUST OUTCOMES) --- */}
            
            {/* Right Node 1: weniger Rückfragen */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t1")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="48"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t1" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t1" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="74" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t1.title}
              </text>
            </g>

            {/* Right Node 2: höhere Transaktionssicherheit */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t2")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="118"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t2" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t2" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="144" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t2.title}
              </text>
            </g>

            {/* Right Node 3: bessere Verhandlungsposition */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t3")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="198"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t3" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t3" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="224" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t3.title}
              </text>
            </g>

            {/* Right Node 4: schnellerer Prozess */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t4")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="268"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t4" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t4" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="294" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t4.title}
              </text>
            </g>

          </svg>
        </div>
      </div>

      {/* Interactive Tooltip Card at the Bottom of the Widget to provide strategy-firm depth */}
      <div className="relative z-10 mt-6 p-5 bg-[#FAF8F4] border border-charcoal/10 rounded-sm min-h-[100px] flex flex-col justify-center transition-all duration-300">
        {activeNode ? (
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#947444] font-semibold">
                {activeNode.startsWith("s") 
                  ? t("Aussage / Verifikation", "Statement / Verification State") 
                  : activeNode === "center" 
                    ? t("Zentrale Verifikation", "Central Verification Hub") 
                    : t("Effekt auf den Prozess", "Impact on Process")}
              </span>
              
              {activeNode.startsWith("s") && (
                <span className={`px-2 py-0.5 rounded-full font-mono text-[8px] uppercase font-bold tracking-wider ${
                  activeNode === "s1" || activeNode === "s4"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-100/50" 
                    : "bg-amber-50 text-amber-800 border border-amber-100/50"
                }`}>
                  {activeNode === "s1" || activeNode === "s4"
                    ? t("Belegbar / Solide", "Verifiable / Sound") 
                    : t("Unterbrochen / Risiko", "Interrupted / Risk Factor")}
                </span>
              )}

              {activeNode.startsWith("t") && (
                <span className="px-2 py-0.5 rounded-full font-mono text-[8px] uppercase font-bold tracking-wider bg-blue-50 text-blue-800 border border-blue-100/50">
                  {t("Resultierender Wert", "Resulting Value")}
                </span>
              )}
            </div>

            <h5 className="font-serif text-sm font-bold text-charcoal">
              {activeNode === "center" ? t("Der Filter der Due Diligence", "The Due Diligence Grid") : (nodes as any)[activeNode]?.title}
            </h5>

            <p className="font-sans text-[12px] text-charcoal/70 leading-relaxed font-light">
              {activeNode === "center" 
                ? t("Das verifiziert vorliegende Dokumentenwerk bildet das unerschütterliche Fundament. Behauptungen, die hier mangels Unterlagen scheitern, zerstören das Vertrauen, bevor Verträge entstehen können.", 
                    "The factual, audited documentation forms an unshakable foundation. Statements that fail here due to lack of records dissolve trust before agreements can be finalized.")
                : activeNode === "s2" 
                  ? t("Die Aussage 'Kunden bleiben' ist dealkritisch, bricht jedoch ab. Ohne schriftlich fixierte, übertragbare Verträge wertet der Käufer die Kundenbasis als ungesichertes Risiko und fordert massive Abschläge auf den Kaufpreis.", 
                      "The assertion 'Customers will stay' is critical, but fails here. Without written, transferable customer agreements, the buyer reviews the revenues as unsecured risk and demands substantial discounts.")
                  : activeNode === "s3"
                    ? t("Software-Assets ohne saubere, ununterbrochene Rechtekette durch schriftliche Vereinbarungen mit allen Freelancern und Entwicklern stellen eine existenzielle Rechtsunsicherheit dar. Die Verifikation bricht ab.", 
                        "Software assets without a clear, unbroken chain of title by written agreements with all freelancers and developers pose an existential legal liability. Verification fails.")
                    : (nodes as any)[activeNode]?.desc}
            </p>
          </div>
        ) : (
          <div className="text-center py-2 text-charcoal/40 italic font-serif text-[12px]">
            {t("Bewegen Sie den Cursor über ein Architekturelement, um die verfahrensrechtlichen Zusammenhänge zu analysieren.", 
               "Hover over any architectural node to analyze the strategic and structural outcomes.")}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("EN");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isKompendiumOpen, setIsKompendiumOpen] = useState(false);
  
  // Interactive Simulator State
  const [preMoney, setPreMoney] = useState<number>(3000000);
  const [newInvestment, setNewInvestment] = useState<number>(500000);
  const [optionPool, setOptionPool] = useState<number>(10); // in %

  // Fee calculation state
  const [selectedFeeAddons, setSelectedFeeAddons] = useState<string[]>([]);
  
  // Custom Scheduler State
  const [bookingStep, setBookingStep] = useState<"intake" | "success">("intake");
  const [selectedMeetingType, setSelectedMeetingType] = useState<"15min" | "45min">("15min");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    challenge: "",
    message: "",
    preferredContact: "call" // "call" | "videocall" | "email"
  });

  const handleNavigateToConsult = (msg: string) => {
    setBookingForm(prev => ({
      ...prev,
      challenge: msg
    }));
    document.getElementById("letsgo")?.scrollIntoView({ behavior: "smooth" });
  };
  const [optionalScheduled, setOptionalScheduled] = useState(false);

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
  const targetCodeString = "company sale: structure founder exit & lock-up phase";

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

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.email) {
      const contactMethodLabel = 
        bookingForm.preferredContact === "call" ? (lang === "DE" ? "Rückruf" : "Phone Call") : 
        bookingForm.preferredContact === "videocall" ? (lang === "DE" ? "Videocall" : "Video Call") : 
        (lang === "DE" ? "E-Mail" : "Email");

      const subject = encodeURIComponent(
        lang === "DE" 
          ? `Mandatsanfrage: Varda Legal - ${bookingForm.name}` 
          : `Inquiry: Varda Legal - ${bookingForm.name}`
      );
      const emailBody = encodeURIComponent(
        lang === "DE"
          ? `Sehr geehrter Herr Dr. Filbinger,\n\nhier ist eine neue Beratungsanfrage:\n\n` +
            `• Name: ${bookingForm.name}\n` +
            `• E-Mail: ${bookingForm.email}\n` +
            `• Telefonnummer: ${bookingForm.phone || "Nicht angegeben"}\n` +
            `• Unternehmen: ${bookingForm.company || "Nicht angegeben"}\n` +
            `• Bevorzugter Kontaktweg: ${contactMethodLabel}\n` +
            `• Anliegen: ${bookingForm.challenge || "Nicht angegeben"}\n\n` +
            `Nachricht/Details:\n${bookingForm.message || "Keine zusätzlichen Details angegeben"}\n\n` +
            `Mit freundlichen Grüßen\n${bookingForm.name}`
          : `Dear Dr. Filbinger,\n\nHere is a new client inquiry:\n\n` +
            `• Name: ${bookingForm.name}\n` +
            `• Email: ${bookingForm.email}\n` +
            `• Phone Number: ${bookingForm.phone || "Not specified"}\n` +
            `• Company: ${bookingForm.company || "Not specified"}\n` +
            `• Preferred Connection: ${contactMethodLabel}\n` +
            `• Challenge: ${bookingForm.challenge || "Not specified"}\n\n` +
            `Details/Notes:\n${bookingForm.message || "No additional details provided"}\n\n` +
            `Best regards,\n${bookingForm.name}`
      );
      window.location.href = `mailto:info@vardalegal.com?subject=${subject}&body=${emailBody}`;
      setBookingStep("success");
    }
  };

  const handleScheduleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (selectedDay && selectedTimeSlot) {
      const subject = encodeURIComponent(
        lang === "DE" 
          ? `Terminreservierung (Optional): Varda Legal - ${selectedMeetingType === "15min" ? "15 Min" : "45 Min"} für ${bookingForm.name}` 
          : `Time Slot Booking (Optional): Varda Legal - ${selectedMeetingType === "15min" ? "15 Min" : "45 Min"} for ${bookingForm.name}`
      );
      const emailBody = encodeURIComponent(
        lang === "DE"
          ? `Sehr geehrter Herr Dr. Filbinger,\n\nich möchte meinen Termin zusätzlich reservieren:\n\n` +
            `• Typ: ${selectedMeetingType === "15min" ? "15 Min. Fast Check" : "45 Min. Strategy Box"}\n` +
            `• Datum: 2026-05-${selectedDay} um ${selectedTimeSlot} Uhr (Europe/Berlin)\n` +
            `• Name: ${bookingForm.name}\n` +
            `• E-Mail: ${bookingForm.email}\n\n` +
            `Bitte bestätigen Sie diesen Termin.`
          : `Dear Dr. Filbinger,\n\nI would like to additionally reserve my selected time slot:\n\n` +
            `• Type: ${selectedMeetingType === "15min" ? "15-Min Fast Check" : "45-Min Strategy Box"}\n` +
            `• Date: 2026-05-${selectedDay} at ${selectedTimeSlot} (Europe/Berlin)\n` +
            `• Name: ${bookingForm.name}\n` +
            `• Email: ${bookingForm.email}\n\n` +
            `Please confirm this appointment.`
      );
      window.location.href = `mailto:info@vardalegal.com?subject=${subject}&body=${emailBody}`;
      setOptionalScheduled(true);
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

      {/* LUXURIOUS SLIDE-DOWN DRAWER OVERLAY MENU (Inspired by premium European boutique law firms & blueprint aesthetics) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#FAF8F4] text-charcoal flex flex-col overflow-y-auto border-b border-charcoal/15"
          >
            {/* Elegant micro-grid & abstract strategic legal blueprint overlay in background + Fine Archival Paper Grain Filter */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.22] transition-opacity duration-1000 z-0">
              <svg width="100%" height="100%" className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="varda-paper-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0" />
                  </filter>
                  <pattern id="menu-grid-arch" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2C2C2C" strokeWidth="0.4" strokeOpacity="0.08" />
                  </pattern>
                </defs>
                {/* Apply Tactile Paper Grain Noise */}
                <rect width="100%" height="100%" filter="url(#varda-paper-grain)" />
                {/* Blueprint Elements styled in matching Ivory/Charcoal hue */}
                <rect width="100%" height="100%" fill="url(#menu-grid-arch)" />
                <circle cx="75%" cy="45%" r="280" stroke="#2C2C2C" strokeWidth="0.75" fill="none" strokeDasharray="4 8" strokeOpacity="0.05" />
                <circle cx="75%" cy="45%" r="180" stroke="#2C2C2C" strokeWidth="0.5" fill="none" strokeOpacity="0.04" />
                <circle cx="75%" cy="45%" r="80" stroke="#2C2C2C" strokeWidth="0.75" fill="none" strokeOpacity="0.07" />
                <path d="M 120 220 L 420 220 L 520 320 L 920 320" stroke="#2C2C2C" strokeWidth="0.75" fill="none" strokeDasharray="3 3" strokeOpacity="0.05" />
                <path d="M 320 120 L 320 570" stroke="#2C2C2C" strokeWidth="0.5" fill="none" strokeOpacity="0.03" />
                <path d="M 520 270 L 520 720" stroke="#2C2C2C" strokeWidth="0.5" fill="none" strokeOpacity="0.03" />
                <text x="140" y="200" fill="#2C2C2C" fillOpacity="0.07" className="font-mono text-[9px] tracking-[0.2em]">STRATEGIC CAPITAL STRUCTURE LAYER_A</text>
                <text x="540" y="300" fill="#2C2C2C" fillOpacity="0.07" className="font-mono text-[9px] tracking-[0.2em]">CORPORATE ENTITY REORGANIZATION PROTOCOL : V.L_GEN_04</text>
                <text x="740" y="405" fill="#2C2C2C" fillOpacity="0.07" className="font-mono text-[9px] tracking-[0.2em]">MUC_HQ / 48.1351 N | 11.5820 E</text>
                <path d="M 30 30 L 60 30 M 30 30 L 30 60" stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeOpacity="0.1" />
                <path d="M 97% 30 L 94% 30 M 97% 30 L 97% 60" stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeOpacity="0.1" />
              </svg>
            </div>

            {/* Inner frame containing elegant alignments */}
            <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12 flex-1 flex flex-col justify-between relative z-10">
              
              {/* Header inside the dropdown */}
              <div className="flex justify-between items-center pb-8 border-b border-charcoal/10">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 font-display text-lg font-bold tracking-widest text-[#2C2C2C]">
                  <span>VARDA</span>
                  <span className="text-brand-red font-sans text-xl font-black">•</span>
                  <span className="font-serif italic font-normal tracking-normal text-base text-charcoal/85">Legal</span>
                </a>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="group inline-flex items-center space-x-3 text-charcoal/60 hover:text-[#C0823E] font-mono text-xs uppercase tracking-widest cursor-pointer transition-all duration-300"
                >
                  <span className="font-mono font-medium">{lang === "DE" ? "SCHLIESSEN" : "CLOSE"}</span>
                  <div className="w-8 h-8 rounded-full border border-charcoal/15 flex items-center justify-center bg-transparent group-hover:border-[#C0823E] transition-all duration-300">
                    <X className="h-3.5 w-3.5 text-charcoal/70 group-hover:text-[#C0823E] transition-colors duration-300" />
                  </div>
                </button>
              </div>

              {/* Menu content - Architectural layout splits (Left Column Directory Index | Right Column Core Strategic Navigation) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-12 md:py-16 flex-1 items-center">
                
                {/* Left Column: Premium Bureau Directory Archive Index */}
                <div className="lg:col-span-4 lg:border-r border-charcoal/10 lg:pr-12 flex flex-col justify-between h-auto lg:h-[480px]">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="font-mono text-[9px] tracking-widest text-[#C0823E] uppercase">[ INTEGRATED COUNSEL ]</div>
                      <h4 className="font-serif text-2xl font-light text-charcoal tracking-tight leading-snug">
                        {lang === "DE" ? "Präzision & Diskrete Kompetenz." : "Precision & Pure Discretion."}
                      </h4>
                    </div>
                    <p className="text-charcoal/70 font-sans text-xs md:text-sm leading-relaxed max-w-sm">
                      {lang === "DE" 
                        ? "Varda Legal steht für die Synthese von intellektuellem Anspruch, unternehmerischem Pragmatismus und zeitloser Unabhängigkeit."
                        : "Varda Legal stands for the ultimate synthesis of intellectual rigour, entrepreneurial pragmatism, and timeless independence."}
                    </p>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-charcoal/10 font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mt-8 lg:mt-0">
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/40">[ GRÜNDER / PARTNER ]</span>
                      <span className="text-charcoal/85 text-right font-medium">Dr. Konstantin Filbinger</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/40">[ HAUPTSITZ / HQ ]</span>
                      <span className="text-charcoal/85 text-right font-medium">München • Germany</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/40">[ SPEZIALISIERUNG ]</span>
                      <span className="text-charcoal/85 text-right font-medium">M&A • Tech • Corporate</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#C0823E]/70">[ BERATUNGSSTIL ]</span>
                      <span className="text-charcoal/85 text-right font-medium">{lang === "DE" ? "Radikal Funktional" : "Radically Functional"}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Architectural, calm and understated navigation anchors */}
                <div className="lg:col-span-8 flex flex-col justify-center w-full">
                  <div className="space-y-3 md:space-y-4 w-full">
                    {[
                      { 
                        label: lang === "DE" ? "Start" : "Start", 
                        target: "#home", 
                        subtitle: lang === "DE" ? "00 / Kanzlei-Kuppel" : "00 / Firm Cupola",
                        sec: "00",
                        desc: lang === "DE" ? "Initialer Einblick & Kanzleiphilosophie" : "Initial perspective & philosophy"
                      },
                      { 
                        label: lang === "DE" ? "Profil" : "Profile", 
                        target: "#wir", 
                        subtitle: lang === "DE" ? "01 / Über Varda Legal" : "01 / About Varda Legal",
                        sec: "01",
                        desc: lang === "DE" ? "Selbstverständnis & Profil des Gründers" : "Executive summary & founder portrait"
                      },
                      { 
                        label: lang === "DE" ? "Expertise" : "Expertise", 
                        target: "#fokus", 
                        subtitle: lang === "DE" ? "02 / Kompetenzen & Sektoren" : "02 / Competences & Sectors",
                        sec: "02",
                        desc: lang === "DE" ? "Spezialisierte Beratungsschwerpunkte" : "Specialized strategic practice fields"
                      },
                      { 
                        label: lang === "DE" ? "Form follows function" : "Form follows function", 
                        target: "#fff", 
                        subtitle: lang === "DE" ? "03 / Kanzlei-Erbauung" : "03 / Firm Building",
                        sec: "03",
                        desc: lang === "DE" ? "Ergebnisorientierter Pragmatismus" : "Aesthetic of radical outcome focus"
                      },
                      { 
                        label: lang === "DE" ? "Denkwerk" : "Denkwerk", 
                        target: "#denkwerk", 
                        subtitle: lang === "DE" ? "04 / Schriften & Leitfäden" : "04 / Writings & Briefings",
                        sec: "04",
                        desc: lang === "DE" ? "Kanzlei-Impulse" : "Intellectual publications & briefings"
                      },
                      { 
                        label: lang === "DE" ? "Vergütung" : "Fees", 
                        target: "#verguetung", 
                        subtitle: lang === "DE" ? "05 / Vergütungsmodelle" : "05 / Fee Structures",
                        sec: "05",
                        desc: lang === "DE" ? "Strikte Preistransparenz & Flatrates" : "Predictable transaction fee modules"
                      },
                      { 
                        label: lang === "DE" ? "Kontakt" : "Contact", 
                        target: "#letsgo", 
                        subtitle: lang === "DE" ? "06 / Online-Reservierung" : "06 / Online Reservation",
                        sec: "06",
                        desc: lang === "DE" ? "Direkter digitaler Beratungstermin" : "Immediate secure booking scheduler"
                      }
                    ].map((menuItem, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ x: 6 }}
                        className="border-b border-charcoal/10 pb-2.5 group transition-all duration-300"
                      >
                        <a
                          href={menuItem.target}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1"
                        >
                          <div className="flex items-center space-x-3.5">
                            <span className="font-mono text-[10px] text-charcoal/40 tracking-wider select-none font-medium">
                              {menuItem.sec}
                            </span>
                            <span className="font-sans text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-charcoal/90 group-hover:text-[#C0823E] transition-colors duration-200">
                              {menuItem.label}
                            </span>
                          </div>
                          <div className="flex flex-col items-start sm:items-end pt-0.5 sm:pt-0">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0823E] group-hover:text-charcoal font-bold transition-colors">
                              {menuItem.subtitle}
                            </span>
                            <span className="text-[10px] text-charcoal/50 font-sans mt-0.5 group-hover:text-charcoal/70 transition-colors hidden sm:block">
                              {menuItem.desc}
                            </span>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom footer index */}
              <div className="pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs font-mono text-charcoal/40 gap-4">
                <div className="tracking-wide">© 2026 DR. KONSTANTIN FILBINGER • VARDA LEGAL • MUNICH</div>
                <div className="flex space-x-6 text-[10px]">
                  <button 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActiveLegalModal("impressum"); }} 
                    className="hover:text-charcoal transition-colors cursor-pointer uppercase bg-transparent border-none p-0 tracking-widest font-semibold"
                  >
                    IMPRESSUM
                  </button>
                  <span>•</span>
                  <button 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActiveLegalModal("datenschutz"); }} 
                    className="hover:text-charcoal transition-colors cursor-pointer uppercase bg-transparent border-none p-0 tracking-widest font-semibold"
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
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.25em] text-[#C0823E] uppercase font-bold">
                <span className="w-1.5 h-1.5 bg-[#C0823E]" />
                <span>{d.hero.badge}</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-charcoal leading-[1.08] tracking-tight max-w-2xl select-none">
                {d.hero.title}
              </h1>
            </div>

            {/* Right Column: Dynamic Vertical Separator Rail & Mission statement */}
            <div className="lg:col-span-5 flex h-full items-stretch pl-0 lg:pl-10 relative">
              {/* Vertical line matching the image */}
              <div className="hidden lg:block absolute left-0 top-1 bottom-1 w-[1px] bg-charcoal/20" />
              
              <div className="space-y-6 lg:pl-8 flex flex-col justify-center">
                <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-md">
                  {d.hero.subtitle}
                </p>
                
                <div className="flex flex-row items-center gap-6 pt-2">
                  <a
                    href="#letsgo"
                    className="inline-flex items-center justify-center bg-charcoal text-white hover:bg-[#C0823E] text-xs font-mono uppercase tracking-widest px-6 py-3.5 transition-colors duration-300 font-bold"
                  >
                    <span>{d.hero.cta}</span>
                  </a>
                  
                  <a
                    href="#fokus"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-bold text-charcoal border-b border-charcoal/80 pb-1 hover:text-charcoal/60 transition-colors"
                  >
                    <span>{d.hero.secCta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Tier: Architectural Blueprint Visualizer & Method Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 border-t border-charcoal/10 items-stretch">
            
            {/* Left 7 Columns: Fine-grained SVG blueprint mapping Complexity -> Clarity */}
            <div className="lg:col-span-7 h-full flex flex-col">
              <DecisionArchitectureBlueprint lang={lang} />
            </div>

            {/* Right 5 Columns: Trusted Advisor Profile Card */}
            <div className="lg:col-span-5 bg-[#FAF8F4] border border-charcoal/15 p-6 flex flex-col justify-between group shadow-sm">
              <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] xl:aspect-[4/3.2] bg-stone-100 border border-charcoal/15 overflow-hidden flex-grow">
                <img
                  src={konstineuImage}
                  alt="Dr. Konstantin Filbinger - Trusted Advisor"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-4 text-center">
                <div className="font-serif text-lg font-medium tracking-wide text-charcoal">
                  Dr. Konstantin Filbinger
                </div>
                <div className="font-mono text-[9px] text-[#C0823E] uppercase tracking-widest mt-1 font-semibold">
                  {lang === "DE" ? "Ihr persönlicher Rechtsberater" : "Your Trusted Advisor"}
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* SECTION 2: "WIR" (OUR APPROACH) */}
        <section id="wir" className="py-20 md:py-28 border-b border-charcoal/10">
          <div className="space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E]">01 / {d.wir.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.wir.subtitle}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 8 Columns: Editorial Copy focusing on outcomes & reality */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Subsection 1: Contract Intelligence & Executive Clarity */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal tracking-tight">
                  {lang === "DE" ? "Contract Intelligence & Executive Clarity" : "Contract Intelligence & Executive Clarity"}
                </h3>

                <div className="space-y-4 font-sans text-charcoal/80 leading-relaxed text-sm sm:text-base max-w-2xl">
                  {lang === "DE" ? (
                    <>
                      <p>Ein Vertrag ist kein Selbstzweck. Er soll Vereinbarungen fixieren und Risiken regeln. Doch in der Praxis sind Entwürfe oft schwer lesbar, überbucht mit juristischen Details und intransparent für die letztendliche Entscheidungsebene.</p>
                      <p className="font-serif text-base sm:text-lg text-charcoal font-medium pt-2">Varda analysiert Vertragsentwürfe  – und übersetzt diese in Entscheidungen.</p>
                      <p>Eine verständliche Vertragsanalyse überführt Herausforderungen in logische, intuitiv verständliche Handlungsdiagramme. Das Ergebnis ist unmittelbare <strong>Executive Clarity</strong> – die Klarheit darüber, welche kaufmännischen Verpflichtungen eingegangen werden, welche Risiken versicherbar sind und welche strategische <strong>Handlung</strong> als Nächstes erfolgen muss.</p>
                    </>
                  ) : (
                    <>
                      <p>A contract is not an end in itself. Its purpose is to record agreements and govern risks. But in practice, drafts are often complex to read, overloaded with legal jargon, and opaque for executive decision-makers.</p>
                      <p className="font-serif text-base sm:text-lg text-charcoal font-medium pt-2">Varda does not merely analyze contracts – Varda translates contracts into decisions.</p>
                      <p>Through our <strong>Contract Intelligence</strong> methodology, we transform raw <strong>contract drafts</strong> into a clean, logical decision outline. The result is immediate <strong>Executive Clarity</strong> – absolute certainty regarding the commercial obligations undertaken, which risks are insurable, and what strategic <strong>action</strong> must be taken next.</p>
                    </>
                  )}
                </div>

                {/* Outcome Contrasts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-charcoal/10 font-mono text-xs uppercase tracking-wider">
                  <div className="space-y-1">
                    <span className="text-charcoal/40 block">{lang === "DE" ? "Methode /" : "Method /"}</span>
                    <span className="text-brand-red font-bold block">Contract Intelligence</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-charcoal/50 block">{lang === "DE" ? "Fokus /" : "Focus /"}</span>
                    <span className="text-[#C0823E] font-bold block">Executive Clarity</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-charcoal/40 block">{lang === "DE" ? "Ziel /" : "Destination /"}</span>
                    <span className="text-charcoal font-bold block">{lang === "DE" ? "Handlungsfähigkeit" : "Strategic Action"}</span>
                  </div>
                </div>
              </div>

              {/* Display of new strategic editorial asset "contractintelligence2.png" with generous whitespace, full content width */}
              <div className="py-8 w-full select-all bg-transparent">
                <img 
                  src={lang === "DE" ? contractIntelligenceImage : contractIntelligenceImageEng}
                  alt="Varda Executive Clarity Blueprint"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Subsection 2: Entrepreneurs make decisions */}
              <div className="space-y-6 pt-12 border-t border-charcoal/10">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal tracking-tight">
                  {lang === "DE" ? "Unternehmer treffen Entscheidungen." : "Entrepreneurs make decisions."}
                </h3>
                  
                {lang === "DE" ? (
                  <ul className="space-y-3 pl-4 font-serif text-base sm:text-lg border-l border-[#C0823E]/30 text-charcoal">
                    <li>Sie verkaufen Unternehmen.</li>
                    <li>Sie verhandeln Verträge.</li>
                    <li>Sie lösen Konflikte zwischen Gesellschaftern.</li>
                    <li>Sie erschließen neue Märkte.</li>
                    <li>Sie investieren Zeit, Kapital und Verantwortung.</li>
                  </ul>
                ) : (
                  <ul className="space-y-3 pl-4 font-serif text-base sm:text-lg border-l border-[#C0823E]/30 text-charcoal">
                    <li>You sell companies.</li>
                    <li>You negotiate contracts.</li>
                    <li>You resolve disputes between shareholders.</li>
                    <li>You expand into new markets.</li>
                    <li>You invest time, capital, and responsibility.</li>
                  </ul>
                )}

                <div className="space-y-4 font-sans text-charcoal/80 leading-relaxed text-sm sm:text-base max-w-2xl">
                  {lang === "DE" ? (
                    <>
                      <p>Recht spielt dabei eine wichtige Rolle. Die eigentliche Herausforderung liegt jedoch woanders: Sie müssen die richtige Entscheidung treffen.</p>
                      <p className="font-serif text-base sm:text-lg text-charcoal font-medium pt-2">Varda Legal schafft die Klarheit, die dafür notwendig ist.</p>
                      <p>Wir strukturieren komplexe Situationen, benennen Risiken und zeigen Optionen auf. So erkennen Sie schneller, worauf es ankommt und welchen Weg Sie einschlagen wollen.</p>
                    </>
                  ) : (
                    <>
                      <p>Law plays an important role. However, the real challenge lies elsewhere: you must make the right decision.</p>
                      <p className="font-serif text-base sm:text-lg text-charcoal font-medium pt-2">Varda Legal creates the clarity required for this.</p>
                      <p>We structure complex situations, identify risks, and map out options. This allows you to recognize faster what matters most and which path you want to take.</p>
                    </>
                  )}
                </div>
              </div>

              {/* Subsection 3: Clarity saves time */}
              <div className="space-y-6 pt-12 border-t border-charcoal/10">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal tracking-tight">
                  {lang === "DE" ? "Klarheit spart Zeit." : "Clarity saves time."}
                </h3>

                <div className="space-y-4 font-sans text-charcoal/80 leading-relaxed text-sm sm:text-base max-w-2xl">
                  {lang === "DE" ? (
                    <>
                      <p>Viele Unternehmer erhalten juristisch richtige Antworten.</p>
                      <p className="font-serif text-base text-charcoal font-medium">Trotzdem bleiben Fragen offen.</p>
                    </>
                  ) : (
                    <>
                      <p>Many entrepreneurs receive legally correct answers.</p>
                      <p className="font-serif text-base text-charcoal font-medium">Yet, questions remain.</p>
                    </>
                  )}
                </div>

                <div className="my-6 space-y-2.5 pl-4 border-l border-brand-red/20 text-brand-red italic font-serif text-base sm:text-lg">
                  {lang === "DE" ? (
                    <>
                      <p>— Was bedeutet das konkret?</p>
                      <p>— Wie relevant ist das Risiko?</p>
                      <p>— Welche Konsequenzen entstehen in der Praxis?</p>
                      <p>— Was sollten wir jetzt tun?</p>
                    </>
                  ) : (
                    <>
                      <p>— What does this mean in practice?</p>
                      <p>— How relevant is the risk?</p>
                      <p>— What are the consequences in reality?</p>
                      <p>— What should we do now?</p>
                    </>
                  )}
                </div>

                <div className="space-y-4 font-sans text-charcoal/80 leading-relaxed text-sm sm:text-base max-w-2xl">
                  {lang === "DE" ? (
                    <>
                      <p>Varda beantwortet nicht nur Rechtsfragen.</p>
                      <p className="font-serif text-base sm:text-lg text-charcoal font-medium pt-2">Wir schaffen Orientierung.</p>
                      <p>Sie erkennen schneller, welche Themen Aufmerksamkeit verdienen und welche nicht. Sie treffen Entscheidungen mit größerer Sicherheit. Sie gewinnen Zeit für das, was Ihr Unternehmen voranbringt.</p>
                    </>
                  ) : (
                    <>
                      <p>Varda does not just answer legal questions.</p>
                      <p className="font-serif text-base sm:text-lg text-charcoal font-medium pt-2">We provide orientation.</p>
                      <p>You recognize faster which topics deserve attention and which do not. You make decisions with greater confidence. You gain time for what actually drives your business forward.</p>
                    </>
                  )}
                </div>
              </div>

              {/* Founder Statement Blockquote */}
              <div className="pt-12 border-t border-charcoal/10 space-y-4">
                <blockquote className="font-serif text-lg sm:text-xl italic text-charcoal leading-relaxed font-medium">
                  {lang === "DE" 
                    ? "„Varda entstand aus einer einfachen Überzeugung: Gute Entscheidungen beginnen mit Klarheit.“"
                    : "“Varda arose from a simple conviction: Good decisions begin with clarity.”"}
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="h-[1px] w-8 bg-[#C0823E]" />
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#C0823E]">Dr. Konstantin Filbinger</span>
                </div>
              </div>

            </div>

            {/* Right Column: Founder Dossier featuring konsticlarity.png (Static) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-[#FAF8F4] border border-charcoal/15 p-5 md:p-6 shadow-sm flex flex-col justify-between group">
                <div className="relative w-full aspect-[3/4] bg-stone-100 border border-charcoal/15 overflow-hidden">
                  <img
                    src={konstiClarity}
                    alt="Dr. Konstantin Filbinger"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pt-4 space-y-2 text-left">
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C0823E] font-bold">
                    {lang === "DE" ? "GRÜNDER • RECHTSANWALT" : "FOUNDER • ATTORNEY"}
                  </div>
                  <h4 className="font-serif text-xl font-medium text-charcoal">
                    Dr. Konstantin Filbinger
                  </h4>
                  <div className="text-[11px] text-charcoal/70 leading-relaxed font-sans pt-2 border-t border-charcoal/10 space-y-2">
                    <p>
                      {lang === "DE" 
                        ? "Unternehmerische Verantwortung, klare kaufmännische Überzeugung und strategischer Tiefblick."
                        : "Strategic leadership, professional responsibility, and deep personal conviction."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Gründerstruktur / Founder Structure Check App */}
          <GruenderstrukturCheck lang={lang} onNavigateToConsult={handleNavigateToConsult} />
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

              {/* Image Right -> RESTORED original Structured Transactions animation */}
              <div className="lg:col-span-6 border border-charcoal/15 bg-[#faf8f4] p-6 shadow-sm select-none rounded-none">
                <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-charcoal/10 pb-4">
                  <div>
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-[#1B2A4A] font-bold">
                      {lang === "DE" ? "Strukturierte Transaktionen" : "Structured Transactions"}
                    </span>
                    <p className="text-xs text-charcoal/60 font-sans mt-1">
                      {lang === "DE" ? "Maßgeschneiderte Absicherung bei M&A, Finanzierungen und Gründungen." : "Tailored structural execution for M&A, financing, and company formations."}
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
                        • M&A & EXPANSION WORKFLOW ACTIVE<br />
                        • STRUCTURED TRANSACTIONS & FOUNDER EXIT CONTRACTS
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
                                {lang === "DE" 
                                  ? "Gesellschafterbeschluss & Lock-up geeint. Kommerzieller Fahrplan zum Unternehmensverkauf ist entscheidungsreif."
                                  : "Shareholder consent & lock-up aligned. Operational roadmaps for execution are boardroom-ready."}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>

                    {/* Operational instructions and re-run buttons */}
                    <div className="pt-4 border-t border-charcoal/10 flex flex-row justify-between items-center text-[9px] text-charcoal/50 font-mono">
                      <div>
                        TRANSACTION RESOLUTION PLAN • STAGE III
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
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#1B2A4A] block leading-relaxed">
                    Varda Legal | Dr. Konstantin Filbinger | Rechtsanwalt für Gesellschaftsrecht, Vertragsrecht, M&A und Tech | München
                  </span>
                </div>

              </div>
            </div>

            {/* Piece 2: Middle (Text Right, Image Left) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Visual Comparison Left -> REPLACED WITH LANGUAGE-SPECIFIC VERTRAGSANALYSE IMAGE */}
              <div className="lg:col-span-6 order-2 lg:order-1 border border-charcoal/15 bg-[#faf8f4] p-6 shadow-sm select-none rounded-none flex items-center justify-center">
                <img 
                  src={lang === "DE" ? vertragsanalyseImage : vertragsanalyseImageEng}
                  alt={lang === "DE" ? "Varda Kanzlei-Erbauung: Vertragsanalyse" : "Varda Firm Building: Contract Analysis"}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block"
                />
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

        {/* SECTION 5: "DENKWERK" (A CURATED PORTAL OF STRATEGIC OBSERVATIONS & EXPERIENCES) */}
        <section id="denkwerk" className="py-20 md:py-32 border-b border-charcoal/10">
          <div className="space-y-4 mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-medium">04 / {d.denkwerk.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.denkwerk.subtitle}</h2>
          </div>

          {/* Introducing quiet-luxury editorial vision for Denkwerk */}
          <div className="max-w-4xl mb-16 text-charcoal/80">
            <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed font-light italic text-[#555] border-l-2 border-[#947444]/20 pl-6">
              {lang === "DE" 
                ? "Denkwerk versammelt Beobachtungen, Perspektiven und Erfahrungen aus der Beratung von Unternehmern – verbunden durch ein kohärentes gedankliches Fundament. Jede Säule widmet sich einem Kernprinzip operativer Realität: Token-Recovery fordert Kontrolle, der Unternehmensverkauf verlangt den Umgang mit Unsicherheit, und Verträge begründen Ordnung. Gemeinsam spiegeln sie das strategische Denken von Varda wider."
                : "Denkwerk gathers observations, perspectives, and experiences from advising entrepreneurs – bound together by a coherent intellectual framework. Each column is dedicated to a core principle of operational reality: Token Recovery demands Control, Company Sales navigate Uncertainty, and Contracts establish Organisation. Together, they reveal how Varda thinks."}
            </p>
          </div>

          {/* The Curated Library Board - Clean Columns, strict layout rules, zero clutter, no standard blog cards/thumbnails */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-10 border-t border-charcoal/10">
            {(() => {
              const cols = lang === "DE" 
                ? [
                    { id: "decisions", label: "01 / Entscheidungen", key: "01 / Entscheidungen" },
                    { id: "contracts", label: "02 / Verträge", key: "02 / Verträge" },
                    { id: "tech", label: "03 / Technologie", key: "03 / Technologie" }
                  ]
                : [
                    { id: "decisions", label: "01 / Decisions", key: "01 / Decisions" },
                    { id: "contracts", label: "02 / Contracts", key: "02 / Contracts" },
                    { id: "tech", label: "03 / Technology", key: "03 / Technology" }
                  ];

              return cols.map((col) => {
                const article = d.denkwerk.articles.find(a => a.category === col.key);
                
                return (
                  <div key={col.id} className="flex flex-col justify-between space-y-8 h-full border-b lg:border-b-0 lg:border-r border-charcoal/10 pb-8 lg:pb-0 lg:pr-8 last:border-none last:pr-0">
                    <div className="space-y-6">
                      {/* Architectural Category Tagline */}
                      <div className="font-mono text-[10px] tracking-widest text-[#947444] uppercase font-semibold border-b border-charcoal/10 pb-2 flex justify-between items-center select-none">
                        <span>{col.label}</span>
                        <span className="font-serif italic text-charcoal/50 text-[10px] tracking-normal font-light lowercase">
                          {col.id === "decisions" ? (lang === "DE" ? "prinzip: unsicherheit" : "principle: uncertainty") :
                           col.id === "contracts" ? (lang === "DE" ? "prinzip: organisation" : "principle: organisation") :
                           (lang === "DE" ? "prinzip: kontrolle" : "principle: control")}
                        </span>
                      </div>

                      {article ? (
                        <div className="space-y-4">
                          <h3 
                            className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-charcoal leading-snug hover:text-brand-red transition-colors duration-300 cursor-pointer" 
                            onClick={() => setSelectedArticle(article)}
                          >
                            {article.title}
                          </h3>
                          
                          <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                            {article.excerpt}
                          </p>

                          <div className="pt-2 flex items-center space-x-3 font-mono text-[9px] text-charcoal/40 uppercase tracking-widest">
                            <span>{article.readingTime}</span>
                            <span>•</span>
                            <span className="italic">{lang === "DE" ? "Schriftenreihe Varda" : "Varda Publications"}</span>
                          </div>
                        </div>
                      ) : (
                        /* Beautiful and intentional premium placeholder */
                        <div className="space-y-4 py-4">
                          <p className="font-serif text-sm italic text-charcoal/45 font-light leading-relaxed">
                            {lang === "DE" 
                              ? (col.id === "contracts" 
                                  ? "Weitere Beiträge folgen. Derzeit in wissenschaftlicher und gesellschaftsrechtlicher Redaktion." 
                                  : "Beitrag im Aufbau. Orientierungshilfen zu IT-Governance, KI-Kryptotextur und Web3-Katalysatoren folgen.")
                              : (col.id === "contracts"
                                  ? "Additional perspectives to follow. Currently in research and societal-law editorial."
                                  : "Under development. Strategic briefs on IT governance and cyber-architectures are in preparation.")}
                          </p>
                          <span className="inline-block font-mono text-[8px] uppercase tracking-widest text-charcoal/30 bg-charcoal/5 px-2 py-0.5 rounded-[1px]">
                            {lang === "DE" ? "Im Aufbau" : "Under development"}
                          </span>
                        </div>
                      )}
                    </div>

                    {article && (
                      <div className="pt-2">
                        <button
                          onClick={() => setSelectedArticle(article)}
                          className="inline-flex items-center space-x-1.5 font-mono text-[10px] uppercase tracking-widest text-brand-red hover:text-charcoal transition-colors group cursor-pointer border-b border-brand-red/10 hover:border-charcoal/30 pb-0.5"
                        >
                          <span>{d.denkwerk.readMore}</span>
                          <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              });
            })()}
          </div>

          {/* Restrained but highly visible Entrance Block to the digital legal archive "Kompendium" */}
          <div className="mt-24 border border-charcoal/15 bg-[#FAF8F5] p-8 md:p-12 relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 rounded-[1px]">
            <div className="space-y-3 max-w-2xl">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#947444] font-semibold">
                {lang === "DE" ? "04.1 / WISSEN" : "04.1 / LIBRARY SERVICES"}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
                {lang === "DE" ? "Das Kompendium" : "The Compendium"}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                {lang === "DE"
                  ? "Geschütztes Portal für vertiefte Analysen."
                  : "Access our protected research vault of academic legal papers, operational handbook models, and strategic breakdowns of corporate structural disputes and digital asset transaction protocols."}
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <button
                onClick={() => setIsKompendiumOpen(true)}
                className="w-full md:w-auto bg-charcoal text-white hover:bg-[#947444] px-8 py-3.5 font-mono text-xs uppercase tracking-widest transition-colors duration-300 rounded-[1px] cursor-pointer shadow-sm active:translate-y-0.5 text-center"
              >
                {lang === "DE" ? "Bibliothek betreten" : "Enter Library"} →
              </button>
            </div>
          </div>

          {/* DETAILED ARTICLE EXPANSION DRAWER/MODAL (Unmistakably Premium European Publication Style) */}
          <AnimatePresence>
            {selectedArticle && (
              <div 
                className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/40 backdrop-blur-sm flex items-start md:items-center justify-center pt-24 pb-6 px-4 sm:pt-28 sm:pb-8 sm:px-6 md:p-10"
                onClick={() => setSelectedArticle(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-4xl bg-[#FAF8F5] border border-charcoal/15 p-6 sm:p-10 md:p-16 shadow-2xl flex flex-col justify-between rounded-[2px] max-h-[78vh] sm:max-h-[82vh] md:max-h-[92vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-10">
                    {/* Editorial Top bar */}
                    <div className="flex justify-between items-center pb-6 border-b border-charcoal/10 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
                      <button
                        onClick={() => setSelectedArticle(null)}
                        className="group inline-flex items-center space-x-2 text-charcoal/60 hover:text-charcoal transition-colors focus:outline-none cursor-pointer"
                      >
                        <span className="text-sm font-light tracking-normal transition-transform group-hover:-translate-x-1">←</span>
                        <span className="font-mono font-medium">{d.denkwerk.back}</span>
                      </button>
                      <div className="border border-charcoal/20 px-3 py-1 font-mono font-semibold text-charcoal/70 bg-transparent rounded-sm uppercase tracking-wider">
                        [ {selectedArticle.category} ]
                      </div>
                    </div>

                    {/* Article Body Columns Style Layout */}
                    <div className="space-y-8">
                      {/* Publication Date and Title */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 font-mono text-xs text-charcoal/50">
                          <span>{selectedArticle.date}</span>
                          <span>•</span>
                          <span>{selectedArticle.readingTime}</span>
                          <span>•</span>
                          <span className="italic">{lang === "DE" ? "Schriftenreihe Varda" : "Varda Publications"}</span>
                        </div>
                        
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.1] max-w-3xl">
                          {selectedArticle.title}
                        </h1>
                      </div>

                      <div className="h-[1px] w-28 bg-charcoal/30" />

                      {/* Asymmetric layout: Side Index Table + Content Pillar */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4">
                        
                        {/* Side Archival Meta-Index Column */}
                        <div className="lg:col-span-4 h-full flex flex-col justify-between shrink-0 space-y-6 lg:border-r lg:border-charcoal/10 lg:pr-8 font-mono text-[10px] uppercase tracking-widest text-[#947444]/80">
                          <div className="space-y-4">
                            <div className="border-b border-charcoal/5 pb-2">
                              <span className="text-charcoal/30 block mb-1">[ GRÜNDER / AUTOR ]</span>
                              <span className="text-charcoal/80 font-semibold">Dr. Konstantin Filbinger</span>
                            </div>
                            <div className="border-b border-charcoal/5 pb-2">
                              <span className="text-charcoal/30 block mb-1">[ RECHTSGEBIET ]</span>
                              <span className="text-charcoal/80 font-semibold">{selectedArticle.category}</span>
                            </div>
                            <div className="border-b border-charcoal/5 pb-2">
                              <span className="text-charcoal/30 block mb-1">[ HERAUSGEBER ]</span>
                              <span className="text-charcoal/80 font-semibold">Varda Legal • München</span>
                            </div>
                            <div className="pb-2">
                              <span className="text-charcoal/30 block mb-1">[ STATUS ]</span>
                              <span className="text-charcoal/80 font-semibold">Veröffentlicht • Volltext</span>
                            </div>
                          </div>
                          
                          <div className="hidden lg:block pt-8 text-[9px] text-[#947444]/65 italic leading-relaxed prose prose-sm font-serif lowercase">
                            "veritate et fide — dem recht gedient, dem fortschritt verpflichtet."
                          </div>
                        </div>

                        {/* Core Content Reading Pillar */}
                        <div className="lg:col-span-8 space-y-8">
                          {/* Excerpt */}
                          <div className="font-serif text-lg sm:text-xl text-charcoal/85 leading-relaxed font-light italic py-2 bg-transparent select-text">
                            {selectedArticle.excerpt}
                          </div>

                          {/* Render Rich Body Sections */}
                          <div className="prose prose-stone max-w-none text-charcoal/85 leading-relaxed font-sans text-sm sm:text-base space-y-6 select-text">
                            {selectedArticle.content.split("\n\n").map((para, pIdx) => {
                              const cleanPara = para.replace(/[„“"']/g, "").trim();

                              const isTokenPullQuote = cleanPara.includes("Token-Recovery-Fälle sind keine Technologie-Probleme") || 
                                                       cleanPara.includes("Token recovery cases are not technology problems");

                              const isUnternehmensPullQuote = cleanPara.includes("Ein Unternehmenskauf beginnt mit Dokumenten") || 
                                                              cleanPara.includes("A company sale begins with documents");

                              const isVertraegePullQuote = cleanPara.includes("Gute Verträge entstehen nicht am Verhandlungstisch") ||
                                                           cleanPara.includes("Good contracts are not created at the negotiating table");

                              if (isTokenPullQuote || isUnternehmensPullQuote || isVertraegePullQuote) {
                                return (
                                  <div key={pIdx} className="py-20 sm:py-28 my-14 sm:my-20 text-center select-all bg-transparent w-full">
                                    <div className="max-w-4xl mx-auto px-6">
                                      <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal/90 leading-[1.6] font-light tracking-tight italic">
                                        {cleanPara}
                                      </p>
                                    </div>
                                  </div>
                                );
                              }

                              if (para.startsWith("### ")) {
                                const isTokenFirstHeading = para.startsWith("### Wer beherrscht das Problem?") || 
                                                            para.startsWith("### Who Controls the Problem?");
                                                            
                                const isMnaFirstHeading = para.startsWith("### Ein guter Datenraum entsteht Jahre vor dem Verkauf") ||
                                                          para.startsWith("### A Good Data Room is Built Years Before the Sale");
                                                          
                                const isVertraegeFirstHeading = para.startsWith("### Zwei Funktionen eines Vertrags") ||
                                                                para.startsWith("### Two Functions of a Contract");
                                                                
                                const isMnaInteractiveHeading = para.startsWith("### Gesunde Dynamik ist ein Asset") || 
                                                                para.startsWith("### Healthy Momentum is an Asset");
                                return (
                                  <React.Fragment key={pIdx}>
                                    {isTokenFirstHeading && (
                                      <div className="py-12 sm:py-20 my-8 flex flex-col items-center w-full select-all bg-transparent">
                                        <img 
                                          src={lang === "DE" ? tokenRecoveryImage : tokenRecoveryImageEng}                                          alt="Varda Decision Architecture No. 01: Token Recovery" 
                                          className="w-full max-w-4xl h-auto object-contain"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                    )}
                                    {isMnaFirstHeading && (
                                      <div className="py-12 sm:py-20 my-8 flex flex-col items-center w-full select-all bg-transparent">
                                        <img 
                                          src={lang === "DE" ? unternehmensverkaufImage : unternehmensverkaufImageEng}                                          alt="Varda Decision Architecture No. 02: Der Unternehmensverkauf" 
                                          className="w-full max-w-4xl h-auto object-contain"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                    )}
                                    {isVertraegeFirstHeading && (
                                      <div className="py-12 sm:py-20 my-8 flex flex-col items-center w-full select-all bg-transparent">
                                        <img 
                                          src={lang === "DE" ? vertraegeImage : vertraegeImageEng}                                          alt="Varda Decision Architecture No. 03: Verträge" 
                                          className="w-full max-w-4xl h-auto object-contain"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                    )}
                                    {isMnaInteractiveHeading && (
                                      <div className="py-12 sm:py-24 my-10 flex flex-col items-center w-full select-all bg-transparent">
                                        <div className="w-full max-w-4xl mx-auto">
                                          <MnaDecisionArchitecture lang={lang} />
                                        </div>
                                      </div>
                                    )}
                                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-charcoal pt-8 border-b border-charcoal/10 pb-2 mb-4 leading-normal">
                                      {para.replace("### ", "")}
                                    </h3>
                                  </React.Fragment>
                                );
                              }
                              if (para.startsWith("#### ")) {
                                return (
                                  <h4 key={pIdx} className="font-serif text-base font-semibold text-charcoal pt-6 italic">
                                    {para.replace("#### ", "")}
                                  </h4>
                                );
                              }
                              if (para.includes("\n- ") || para.includes("\n* ") || para.startsWith("- ") || para.startsWith("* ")) {
                                const lines = para.split("\n");
                                return (
                                  <div key={pIdx} className="space-y-3 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-light my-4">
                                    {lines.map((line, lIdx) => {
                                      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
                                        return (
                                          <div key={lIdx} className="flex items-start space-x-3 pl-4 sm:pl-6 leading-relaxed">
                                            <span className="text-[#947444] text-[10px] mt-2 select-none">•</span>
                                            <span className="flex-1 text-charcoal/80">{line.trim().replace(/^[\-\*]\s+/, "")}</span>
                                          </div>
                                        );
                                      }
                                      return (
                                        <p key={lIdx} className="mb-2 text-charcoal/85 font-light">
                                          {line}
                                        </p>
                                      );
                                    })}
                                  </div>
                                );
                              }
                              if (para.match(/^\d+\.\s+/) || para.includes("\n1. ") || para.includes("\n2. ")) {
                                const lines = para.split("\n");
                                return (
                                  <div key={pIdx} className="space-y-3 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-light my-4">
                                    {lines.map((line, lIdx) => {
                                      const match = line.trim().match(/^(\d+)\.\s+(.*)$/);
                                      if (match) {
                                        return (
                                          <div key={lIdx} className="flex items-start space-x-3 pl-4 sm:pl-6 leading-relaxed">
                                            <span className="font-mono text-xs text-[#947444] mt-0.5 select-none font-semibold">
                                              {match[1].padStart(2, "0")} /
                                            </span>
                                            <span className="flex-1 text-charcoal/80">{match[2]}</span>
                                          </div>
                                        );
                                      }
                                      return (
                                        <p key={lIdx} className="mb-2 text-charcoal/85 font-light">
                                          {line}
                                        </p>
                                      );
                                    })}
                                  </div>
                                );
                              }
                              return (
                                <p key={pIdx} className="text-charcoal/80 leading-relaxed text-sm sm:text-base font-sans font-light">
                                  {para}
                                </p>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      {/* APPENDIX / FAQ MODULE (Beautiful, architectural separate editorial section) */}
                      {selectedArticle.faq && selectedArticle.faq.length > 0 && (
                        <div className="mt-16 pt-12 border-t border-charcoal/15 space-y-8 select-text">
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#947444] font-semibold">
                              {lang === "DE" ? "ANHANG / FAQ" : "APPENDIX / FAQ"}
                            </span>
                            <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-charcoal">
                              {lang === "DE" ? "Häufige Fragen & Erläuterungen" : "Frequent Queries & Annotations"}
                            </h3>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {selectedArticle.faq.map((item, idx) => (
                              <div key={idx} className="space-y-3 border-l-2 border-[#947444]/10 pl-4">
                                <h4 className="font-serif text-sm sm:text-base font-bold text-charcoal leading-snug">
                                  {item.question}
                                </h4>
                                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                                  {item.answer}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Closure & Legal Stamp footer */}
                  <div className="mt-12 pt-8 border-t border-charcoal/10 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono gap-4">
                      <span className="text-charcoal/50">© 2026 VARDA LEGAL • VARDA LEGAL</span>
                      <a 
                        href="#letsgo" 
                        onClick={() => setSelectedArticle(null)}
                        className="inline-flex items-center space-x-1 text-[#947444] font-bold hover:text-charcoal uppercase tracking-widest transition-colors font-mono"
                      >
                        <span>{lang === "DE" ? "Kanzlei buchen" : "Consult with us"}</span>
                        <span className="text-sm">→</span>
                      </a>
                    </div>
                    <p className="text-[10px] text-charcoal/40 leading-relaxed font-mono">
                      {lang === "DE" 
                        ? "HINWEIS: Dieser Fachbeitrag dient lediglich der allgemeinen Information und wissenschaftlichen Orientierung. Er stellt zu keinem Zeitpunkt eine steuerliche oder rechtsverbindliche Beratung dar und begründet kein Mandatsverhältnis." 
                        : "DISCLAIMER: This thought piece serves for general instructional and scientific orientation only. It constitutes no structural tax or legal binding advice and does not initiate a client-attorney relationship."}
                    </p>
                  </div>
                </motion.div>
              </div>
            )}

            {isKompendiumOpen && (
              <div 
                className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10"
                onClick={() => setIsKompendiumOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-4xl bg-[#FAF8F5] border border-charcoal/15 p-6 sm:p-10 md:p-16 shadow-2xl flex flex-col justify-between rounded-[2px] max-h-[92vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-10">
                    {/* Editorial Top bar */}
                    <div className="flex justify-between items-center pb-6 border-b border-charcoal/10 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
                      <button
                        onClick={() => setIsKompendiumOpen(false)}
                        className="group inline-flex items-center space-x-2 text-charcoal/60 hover:text-charcoal transition-colors focus:outline-none cursor-pointer"
                      >
                        <span className="text-sm font-light tracking-normal transition-transform group-hover:-translate-x-1">←</span>
                        <span className="font-mono font-medium">{lang === "DE" ? "ZURÜCK ZUM PORTAL" : "BACK TO PORTAL"}</span>
                      </button>
                      <div className="border border-[#947444]/30 px-3 py-1 font-mono font-semibold text-[#947444] bg-transparent rounded-sm uppercase tracking-wider">
                        [ {lang === "DE" ? "WISSENSCHAFTLICHE BIBLIOTHEK" : "ACADEMIC PAPERS"} ]
                      </div>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.1] max-w-2xl">
                        {lang === "DE" ? "Kanzlei-Kompendium" : "Firm Compendium"}
                      </h1>
                      <p className="font-serif text-base italic text-charcoal/60 font-light max-w-2xl leading-relaxed">
                        {lang === "DE" 
                          ? "Leitfäden, rechtssichere Ablaufmodelle und praxisnahe Abhandlungen für Gesellschafter und Geschäftsführer."
                          : "Academic-level governance guidelines, secure structural templates, and research-focused legal briefs for board members and enterprise directors."}
                      </p>
                    </div>

                    <div className="h-[1px] w-28 bg-[#947444]/30" />

                    {/* Evergreens Grid of Academic Guidelines */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      
                      {/* Document 1 */}
                      <div className="border border-charcoal/10 p-6 bg-white space-y-4">
                        <span className="font-mono text-[10px] text-[#947444] tracking-widest uppercase font-semibold block">01 / CORPORATE LAW</span>
                        <h3 className="font-serif text-lg font-medium text-charcoal">
                          {lang === "DE" 
                            ? "Der Gesellschafterbeschluss: Mustersicherer Ablauf" 
                            : "The Shareholder Resolution: Risk-Free Protocols"}
                        </h3>
                        <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                          {lang === "DE"
                            ? "Fehlersichere Beschlussfassungen unter Berücksichtigung von Anfechtungsfristen, Gesellschafterstimmverboten und BGH-Vorgaben."
                            : "Meticulous documentation standards avoiding voided voting procedures, conflict of interest exclusions, and Supreme Court protocols."}
                        </p>
                        <div className="pt-2 font-mono text-[9px] text-[#947444] uppercase tracking-wider">
                          [ {lang === "DE" ? "Im Kanzlei-Intranet verfügbar" : "Available in Intranet DB"} ]
                        </div>
                      </div>

                      {/* Document 2 */}
                      <div className="border border-charcoal/10 p-6 bg-white space-y-4">
                        <span className="font-mono text-[10px] text-[#947444] tracking-widest uppercase font-semibold block">02 / CAPITAL METRICS</span>
                        <h3 className="font-serif text-lg font-medium text-charcoal">
                          {lang === "DE" 
                            ? "Founder Vesting im deutschen Steuerrecht" 
                            : "Founder Vesting in German Fiscal Law"}
                        </h3>
                        <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                          {lang === "DE"
                            ? "Eine steuerrechtliche Untersuchung von Dynamic Vesting Modellen, Schenkungsteuer-Abmilderungen und Haltefristen."
                            : "A fiscal analysis of exit-linked forfeiture provisions, dry-income tax risks, and capitalization timing structures."}
                        </p>
                        <div className="pt-2 font-mono text-[9px] text-[#947444] uppercase tracking-wider">
                          [ {lang === "DE" ? "Im Kanzlei-Intranet verfügbar" : "Available in Intranet DB"} ]
                        </div>
                      </div>

                      {/* Document 3 */}
                      <div className="border border-charcoal/10 p-6 bg-white space-y-4">
                        <span className="font-mono text-[10px] text-[#947444] tracking-widest uppercase font-semibold block">03 / IP RESTRUCTURING</span>
                        <h3 className="font-serif text-lg font-medium text-charcoal">
                          {lang === "DE" 
                            ? "IP-Migrationen & Code-Transfers im SaaS-Sektor" 
                            : "IP Migrations & Code Transfer Protocols"}
                        </h3>
                        <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                          {lang === "DE"
                            ? "Strukturierungsregelungen zur sauberen Ausgliederung und Übertragung von proprietärem Programmcode bei Umstrukturierungen."
                            : "Structural guidelines ensuring seamless intellectual property assignments and software copyright transfers during spin-offs."}
                        </p>
                        <div className="pt-2 font-mono text-[9px] text-[#947444] uppercase tracking-wider">
                          [ {lang === "DE" ? "Im Kanzlei-Intranet verfügbar" : "Available in Intranet DB"} ]
                        </div>
                      </div>

                      {/* Document 4 */}
                      <div className="border border-charcoal/10 p-6 bg-white space-y-4">
                        <span className="font-mono text-[10px] text-[#947444] tracking-widest uppercase font-semibold block">04 / GOVERNANCE COMPLIANCE</span>
                        <h3 className="font-serif text-lg font-medium text-charcoal">
                          {lang === "DE" 
                            ? "Geschäftsführer-Enthaftung in Sondersituationen" 
                            : "Director Liability Mitigation on Special Exits"}
                        </h3>
                        <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                          {lang === "DE"
                            ? "Proaktive Haftungsausschlüsse und Business Judgment Rule Nachweise während risikoreicher Restrukturierungen."
                            : "Officer protection policies and business judgment records to defend personal assets during emergency turnarounds."}
                        </p>
                        <div className="pt-2 font-mono text-[9px] text-[#947444] uppercase tracking-wider">
                          [ {lang === "DE" ? "Im Kanzlei-Intranet verfügbar" : "Available in Intranet DB"} ]
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Closure & Legal Stamp footer */}
                  <div className="mt-12 pt-8 border-t border-charcoal/10 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono gap-4">
                      <span className="text-charcoal/50">© 2026 VARDA LEGAL • ARCHIVAL SERVICES ONLY</span>
                      <a 
                        href="#letsgo" 
                        onClick={() => setIsKompendiumOpen(false)}
                        className="inline-flex items-center space-x-1 text-[#947444] font-bold hover:text-charcoal uppercase tracking-widest transition-colors font-mono"
                      >
                        <span>{lang === "DE" ? "Bibliothek-Zugang anfordern" : "Request Archival Vault Access"}</span>
                        <span className="text-sm">→</span>
                      </a>
                    </div>
                    <p className="text-[10px] text-charcoal/40 leading-relaxed font-mono">
                      {lang === "DE" 
                        ? "HINWEIS: Das Kompendium dient der wissenschaftlichen Einordnung und Information für Bestandsmandanten. Eine Vervielfältigung oder Weitergabe erfordert die schriftliche Freigabe durch Dr. Konstantin Filbinger." 
                        : "NOTICE: The library is optimized for scientific purposes and existing enterprise clients. Any duplication or redistribution requires prior written consent from Dr. Konstantin Filbinger."}
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
            
            {/* Left Hand Side: Redesigned Consultative Intake & Optional Booking Journey */}
            <div className="lg:col-span-12 xl:col-span-7 bg-white border border-charcoal/15 p-6 md:p-8 shadow-sm">
              
              {bookingStep === "intake" ? (
                /* STEP 1 & 2 & 3: Refined Intake Experience */
                <form onSubmit={handleIntakeSubmit} className="space-y-6">
                  <div className="space-y-3 pb-6 border-b border-charcoal/10">
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-charcoal">
                      {lang === "DE" ? "Lassen Sie uns Ihr Anliegen verstehen." : "Let us understand your challenge."}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                      {lang === "DE" 
                        ? "Unser Anspruch ist strategische Klarheit und präzise Risikobewertung ab dem ersten Kontakt. Beschreiben Sie kurz Ihr transaktionales Vorhaben – wir melden uns innerhalb von 24 Stunden."
                        : "Our standard is strategic clarity and meticulous risk assessment from the very first contact. Briefly outline your project – we typically respond within 24 hours."}
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-4">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.name} *</label>
                        <input
                          type="text"
                          required
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                          className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                          placeholder="z.B. Dr. Alexander Weber"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.company}</label>
                        <input
                          type="text"
                          value={bookingForm.company}
                          onChange={(e) => setBookingForm({...bookingForm, company: e.target.value})}
                          className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                          placeholder="z.B. CoreTech GmbH"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.email} *</label>
                        <input
                          type="email"
                          required
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                          className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                          placeholder="weber[at]coretech.io"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.phone}</label>
                        <input
                          type="tel"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                          className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                          placeholder="z.B. +49 89 1234567"
                        />
                      </div>
                    </div>

                    {/* Highlighted Core Challenge Intake field */}
                    <div className="space-y-1.5 p-4 border border-charcoal/15 bg-paper-light/40 rounded-none shadow-xs">
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-[#1B2A4A] font-bold">
                        {d.letsgo.inputs.challenge} *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingForm.challenge}
                        onChange={(e) => setBookingForm({...bookingForm, challenge: e.target.value})}
                        className="w-full bg-white border border-charcoal/20 px-3 py-2 text-xs font-serif italic text-[#1B2A4A] focus:border-[#C0823E] focus:outline-none transition-all"
                        placeholder={d.letsgo.inputs.challengePlaceholder}
                      />
                    </div>

                    {/* Preferred Contact Method Selection Step 3 */}
                    <div className="space-y-2 pt-2">
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">
                        {d.letsgo.inputs.preferredContact}
                      </span>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => setBookingForm({...bookingForm, preferredContact: "call"})}
                          className={`flex flex-col items-center justify-center p-3 border transition-all text-center gap-1 cursor-pointer ${
                            bookingForm.preferredContact === "call"
                              ? "border-[#C0823E] bg-charcoal text-white font-bold"
                              : "border-charcoal/10 hover:border-charcoal/50 bg-paper-light/35 text-charcoal/70 font-medium"
                          }`}
                        >
                          <Phone className="h-4 w-4" />
                          <span className="font-mono text-[10px] tracking-wide uppercase">
                            {d.letsgo.inputs.contactCallback}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setBookingForm({...bookingForm, preferredContact: "videocall"})}
                          className={`flex flex-col items-center justify-center p-3 border transition-all text-center gap-1 cursor-pointer ${
                            bookingForm.preferredContact === "videocall"
                              ? "border-[#C0823E] bg-charcoal text-white font-bold"
                              : "border-charcoal/10 hover:border-charcoal/50 bg-paper-light/35 text-charcoal/70 font-medium"
                          }`}
                        >
                          <Camera className="h-4 w-4" />
                          <span className="font-mono text-[10px] tracking-wide uppercase">
                            {d.letsgo.inputs.contactVideo}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setBookingForm({...bookingForm, preferredContact: "email"})}
                          className={`flex flex-col items-center justify-center p-3 border transition-all text-center gap-1 cursor-pointer ${
                            bookingForm.preferredContact === "email"
                              ? "border-[#C0823E] bg-charcoal text-white font-bold"
                              : "border-charcoal/10 hover:border-charcoal/50 bg-paper-light/35 text-charcoal/70 font-medium"
                          }`}
                        >
                          <Mail className="h-4 w-4" />
                          <span className="font-mono text-[10px] tracking-wide uppercase">
                            {d.letsgo.inputs.contactEmail}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Additional Message Details */}
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.message}</label>
                      <textarea
                        rows={3}
                        value={bookingForm.message}
                        onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                        className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                        placeholder={lang === "DE" ? "z.B. Beteiligungsvertrag der Serie A liegt vor, Prüfung bis Ende nächster Woche gewünscht." : "e.g., Series A investment agreement drafted, review required by end of next week."}
                      />
                    </div>
                  </div>

                  {/* Submission and Reassurance */}
                  <div className="pt-4 border-t border-charcoal/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-[11px] font-mono text-charcoal/55 italic">
                        {lang === "DE" 
                          ? "• Wir melden uns in der Regel innerhalb von 24 Stunden mit einem passenden nächsten Schritt."
                          : "• We typically reply within 24 hours with a custom next step."}
                      </div>
                      <button
                        type="submit"
                        className="bg-charcoal text-white hover:bg-[#C0823E] transition-all px-8 py-3 font-mono text-xs uppercase tracking-widest font-bold self-end md:self-auto cursor-pointer shadow-sm border border-charcoal/10 shadow-stone-100"
                      >
                        {d.letsgo.inputs.submit}
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                /* STEP 4: Success State with UNLOCKED optional calendar routing */
                <div className="space-y-8">
                  
                  {/* Success Notification Banner */}
                  <div className="bg-[#FAF8F4] border border-[#C0823E]/30 p-6 md:p-8 space-y-4 shadow-sm relative overflow-hidden">
                    {/* Corner architectural style tag */}
                    <div className="absolute top-0 right-0 bg-[#C0823E] text-white font-mono text-[8.5px] uppercase tracking-widest px-3 py-1 font-bold">
                      {lang === "DE" ? "ANFRAGE ERFASST" : "INQUIRY REGISTERED"}
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-amber-50 border border-[#C0823E]/20 flex items-center justify-center text-[#C0823E] flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div className="space-y-2 text-left">
                        <h4 className="font-serif text-lg md:text-xl font-bold text-charcoal leading-tight">
                          {lang === "DE" ? "Herzlichen Dank." : "Thank you very much."}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                          {d.letsgo.successMessage}
                        </p>
                        <p className="font-mono text-[11px] text-[#C0823E] font-semibold italic">
                          {lang === "DE" 
                            ? "Wir analysieren Ihre Daten und kontaktieren Sie innerhalb von 24 Stunden bezüglich des nächsten Schrittes."
                            : "We serve strategic diagnostics on your inquiry and will connect with you within 24 hours."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Redirection / Copy ticket */}
                  <div className="border border-charcoal/12 bg-white p-4 font-mono text-[11px] text-charcoal/85 max-w-xl space-y-2">
                    <div className="flex justify-between border-b border-charcoal/10 pb-2 font-bold uppercase tracking-wider text-[10px]">
                      <span>VARDA LEGAL DOCKET REF</span>
                      <span className="text-[#C0823E]">#VL-{Math.floor(Math.random() * 90000) + 10000}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                      <p><strong>{lang === "DE" ? "Kompagnon" : "Correspondent"}:</strong> {bookingForm.name}</p>
                      <p><strong>{lang === "DE" ? "Kanzlei / Firma" : "Entity"}:</strong> {bookingForm.company || "Private Advisory"}</p>
                      <p><strong>E-Mail:</strong> {bookingForm.email}</p>
                      <p><strong>{lang === "DE" ? "Telefon" : "Direct Dial"}:</strong> {bookingForm.phone || "N/A"}</p>
                      <p className="col-span-1 sm:col-span-2"><strong>{lang === "DE" ? "Büromodus" : "Preferred Method"}:</strong> {
                        bookingForm.preferredContact === "call" ? (lang === "DE" ? "Rückruf" : "Phone Callback") : 
                        bookingForm.preferredContact === "videocall" ? (lang === "DE" ? "Videocall (Teams)" : "Video Conference") : 
                        "E-Mail"
                      }</p>
                      <p className="col-span-1 sm:col-span-2 border-t border-charcoal/5 pt-2"><strong>{lang === "DE" ? "Zentrales Anliegen" : "Matter Core"}:</strong> <br/><span className="text-charcoal italic">"{bookingForm.challenge}"</span></p>
                    </div>
                  </div>

                  {/* UNLOCKED OPTIONAL CALENDAR BLOCK */}
                  <div className="border-t border-charcoal/15 pt-8 space-y-6">
                    <div className="space-y-2 text-left">
                      <h3 className="font-serif text-lg md:text-xl font-medium text-charcoal flex items-center gap-2">
                        <Calendar className="h-5 text-[#C0823E]" />
                        {d.letsgo.calendarTitle}
                      </h3>
                      <p className="font-sans text-xs text-charcoal/65 leading-relaxed">
                        {d.letsgo.calendarDesc}
                      </p>
                    </div>

                    {!optionalScheduled ? (
                      <div className="space-y-6 bg-paper-light/35 p-5 border border-charcoal/10 text-left">
                        {/* Selector of duration for optional call */}
                        <div className="space-y-2">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/55">Select Meeting Scope:</span>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              onClick={() => setSelectedMeetingType("15min")}
                              className={`py-2 text-center text-xs font-mono uppercase transition-all border cursor-pointer ${
                                selectedMeetingType === "15min" 
                                  ? "bg-charcoal text-white border-charcoal font-bold" 
                                  : "bg-white text-charcoal/50 border-charcoal/15 hover:text-charcoal hover:border-charcoal/30"
                              }`}
                            >
                              15 Min • Initial Quick Check
                            </button>
                            <button
                              onClick={() => setSelectedMeetingType("45min")}
                              className={`py-2 text-center text-xs font-mono uppercase transition-all border cursor-pointer ${
                                selectedMeetingType === "45min" 
                                  ? "bg-charcoal text-white border-charcoal font-bold" 
                                  : "bg-white text-charcoal/50 border-charcoal/15 hover:text-charcoal hover:border-charcoal/30"
                              }`}
                            >
                              45 Min • Detailed Diagnostic
                            </button>
                          </div>
                        </div>

                        {/* Booking calendar details */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/55">
                              {lang === "DE" ? "Datum wählen (Mai 2026)" : "Select Date (May 2026)"}
                            </span>
                            <div className="grid grid-cols-5 gap-2">
                              {mockDays.map((dayObj, i) => (
                                <button
                                  key={i}
                                  onClick={() => {
                                    setSelectedDay(dayObj.day);
                                    setSelectedTimeSlot(null);
                                  }}
                                  className={`p-3 border flex flex-col items-center justify-center transition-all cursor-pointer ${
                                    selectedDay === dayObj.day 
                                      ? "border-[#C0823E] bg-charcoal text-white font-bold" 
                                      : "border-charcoal/10 hover:border-charcoal/60 bg-white text-charcoal/70"
                                  }`}
                                >
                                  <span className="text-[10px] font-mono opacity-50 uppercase">{dayObj.label}</span>
                                  <span className="font-mono font-bold text-sm mt-0.5">{dayObj.day}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Time selection */}
                          {selectedDay ? (
                            <div className="space-y-3 animate-fade-in">
                              <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/55">
                                {lang === "DE" ? `Verfügbare Uhrzeiten am ${selectedDay}. Mai` : `Available slots on May ${selectedDay}th`}
                              </span>
                              <div className="grid grid-cols-3 gap-2">
                                {mockDays.find(d => d.day === selectedDay)?.slots.map((slot) => (
                                  <button
                                    key={slot}
                                    onClick={() => setSelectedTimeSlot(slot)}
                                    className={`py-2 text-center text-xs font-mono border transition-all cursor-pointer ${
                                      selectedTimeSlot === slot 
                                        ? "bg-[#C0823E] border-[#C0823E] text-white font-bold" 
                                        : "bg-white border-charcoal/10 hover:border-charcoal text-charcoal/80"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                ))}
                              </div>

                              {/* Trigger Booking confirmation */}
                              {selectedTimeSlot && (
                                <div className="pt-4 text-right">
                                  <button
                                    onClick={() => handleScheduleSubmit()}
                                    className="bg-charcoal text-white hover:bg-[#C0823E] py-2.5 px-6 font-mono text-xs uppercase tracking-widest font-bold transition-all cursor-pointer shadow-sm border border-charcoal/10"
                                  >
                                    <span>{lang === "DE" ? "Terminerfassung abschließen" : "Reserve Time Slot"}</span>
                                  </button>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="border border-dashed border-charcoal/15 bg-white p-6 text-center">
                              <span className="text-xs font-mono text-charcoal/40 italic">
                                {lang === "DE" ? "Bitte wählen Sie erst ein Datum oben." : "Please select an available booking date first."}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Scheduled Success Ticket */
                      <div className="bg-[#FAF8F4] border border-[#C0823E]/40 p-5 space-y-3 text-left shadow-sm">
                        <span className="bg-[#C0823E] text-white px-2 py-0.5 text-[9px] font-bold tracking-widest font-mono uppercase">
                          {lang === "DE" ? "ZEITFENSTER RESERVIERT" : "TIME SLOT CAPTURED"}
                        </span>
                        <h4 className="font-serif text-base font-bold text-charcoal">
                          {lang === "DE" ? "Terminslot im Kalender vorgemerkt!" : "Advisory slot captured!"}
                        </h4>
                        <div className="font-sans text-xs text-charcoal/85 space-y-1.5 pt-2 border-t border-charcoal/10">
                          <p><strong>{lang === "DE" ? "Typ" : "Meeting Scope"}:</strong> {selectedMeetingType === "15min" ? "15-Min Fast Check" : "45-Min Strategy Diagnostic"}</p>
                          <p><strong>{lang === "DE" ? "Uhrzeit" : "Schedule"}:</strong> 2026-05-{selectedDay} um {selectedTimeSlot} Uhr (Europe/Berlin)</p>
                          <p className="text-charcoal/60 pt-2 italic text-[11px]">
                            {lang === "DE" 
                              ? "* Dieser Termin wurde in unseren Systemen blockiert. Nach erfolgreicher diagnostischer Prüfung des intake-Anliegens erhalten Sie eine offizielle digitale Kalendereinladung."
                              : "* This spot has been locked in our docket. Upon diagnostic alignment on your project core, you will receive a secure calendar invite."}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Reset form view trigger */}
                  <div className="pt-4 border-t border-charcoal/5 text-right">
                    <button
                      onClick={() => {
                        setBookingStep("intake");
                        setSelectedDay(null);
                        setSelectedTimeSlot(null);
                        setOptionalScheduled(false);
                        setBookingForm({ name: "", email: "", company: "", phone: "", challenge: "", message: "", preferredContact: "call" });
                      }}
                      className="text-xs font-mono text-[#C0823E] hover:text-charcoal border border-[#C0823E]/35 hover:border-charcoal px-3 py-1.5 transition-all cursor-pointer font-semibold uppercase tracking-wider"
                    >
                      {lang === "DE" ? "Zurück zum Hauptformular" : "New Request"}
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
              
              {/* Approachable Founder Contact Card */}
              <div className="border border-charcoal/15 bg-white p-5 md:p-6 space-y-4 group">
                <div className="relative w-full aspect-square bg-[#FAF8F4] overflow-hidden border border-charcoal/10">
                  <img
                    src={konstiImage}
                    alt="Dr. Konstantin Filbinger - Direct Contact"
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C0823E] font-bold">
                    {lang === "DE" ? "DIREKTER KONTAKT" : "DIRECT DIAL"}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    Dr. Konstantin Filbinger
                  </h4>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                    {lang === "DE" 
                      ? "Mandatsanfragen prüfe ich immer persönlich. Lassen Sie uns unkompliziert über Ihr Vorhaben sprechen."
                      : "I review all inbound inquiries personally. Let's arrange a straightforward call to map out the next steps for your project."}
                  </p>
                </div>
              </div>
              
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
            src={lang === "DE" ? vardalegalEndframe : vardalegalEndframeEng}
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

