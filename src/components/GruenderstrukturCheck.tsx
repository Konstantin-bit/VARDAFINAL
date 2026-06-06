import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, RotateCcw, Copy, Check, FileText } from "lucide-react";

interface Question {
  id: number;
  questionDe: string;
  questionEn: string;
  explanationDe: string;
  explanationEn: string;
  answersDe: { text: string; scoreChanges: Partial<Record<string, number>> }[];
  answersEn: { text: string; scoreChanges: Partial<Record<string, number>> }[];
}

const questions: Question[] = [
  {
    id: 1,
    questionDe: "Wie viele Gründer soll die GmbH haben?",
    questionEn: "How many founders will the GmbH have?",
    explanationDe: "Je mehr Gründer beteiligt sind, desto wichtiger wird eine belastbare Entscheidungs- und Konfliktstruktur.",
    explanationEn: "The more founders are involved, the more important a robust decision and conflict structure becomes.",
    answersDe: [
      { text: "1 Gründer", scoreChanges: {} },
      { text: "2 Gründer", scoreChanges: { decision: 1, transfer: 1, leaver: 1 } },
      { text: "3 Gründer", scoreChanges: { decision: 2, transfer: 2, leaver: 2 } },
      { text: "4 oder mehr Gründer", scoreChanges: { decision: 3, transfer: 3, leaver: 3 } }
    ],
    answersEn: [
      { text: "1 founder", scoreChanges: {} },
      { text: "2 founders", scoreChanges: { decision: 1, transfer: 1, leaver: 1 } },
      { text: "3 founders", scoreChanges: { decision: 2, transfer: 2, leaver: 2 } },
      { text: "4 or more founders", scoreChanges: { decision: 3, transfer: 3, leaver: 3 } }
    ]
  },
  {
    id: 2,
    questionDe: "Sind alle Gründer operativ im Unternehmen tätig?",
    questionEn: "Are all founders operationally active in the company?",
    explanationDe: "Wenn einzelne Gesellschafter nicht operativ beitragen, sollte klar sein, welche Rechte und Pflichten trotzdem gelten.",
    explanationEn: "If some shareholders are not operationally active, rights and obligations should be clearly defined.",
    answersDe: [
      { text: "Ja, alle", scoreChanges: { leaver: 0 } },
      { text: "Überwiegend ja", scoreChanges: { leaver: 1 } },
      { text: "Nein, einzelne sind eher passive Gesellschafter", scoreChanges: { leaver: 2, decision: 1 } },
      { text: "Noch unklar", scoreChanges: { leaver: 2, decision: 1 } }
    ],
    answersEn: [
      { text: "Yes, all of them", scoreChanges: { leaver: 0 } },
      { text: "Mostly yes", scoreChanges: { leaver: 1 } },
      { text: "No, some are more passive shareholders", scoreChanges: { leaver: 2, decision: 1 } },
      { text: "Still unclear", scoreChanges: { leaver: 2, decision: 1 } }
    ]
  },
  {
    id: 3,
    questionDe: "Sind die Beteiligungen gleich verteilt?",
    questionEn: "Are the shareholdings equally distributed?",
    explanationDe: "Ungleiche Beteiligungen können sinnvoll sein, brauchen aber klare Regeln für Kontrolle, Mitwirkung und Exit.",
    explanationEn: "Unequal shareholdings may be appropriate, but they require clear rules on control, contribution and exit.",
    answersDe: [
      { text: "Ja, gleich verteilt", scoreChanges: { decision: 1 } },
      { text: "Nein, leicht unterschiedlich", scoreChanges: { decision: 1, transfer: 1 } },
      { text: "Nein, deutlich unterschiedlich", scoreChanges: { decision: 2, transfer: 2 } },
      { text: "Noch offen", scoreChanges: { decision: 2, transfer: 1 } }
    ],
    answersEn: [
      { text: "Yes, equally distributed", scoreChanges: { decision: 1 } },
      { text: "No, slightly different", scoreChanges: { decision: 1, transfer: 1 } },
      { text: "No, significantly different", scoreChanges: { decision: 2, transfer: 2 } },
      { text: "Still open", scoreChanges: { decision: 2, transfer: 1 } }
    ]
  },
  {
    id: 4,
    questionDe: "Gibt es bereits Regeln für wichtige Entscheidungen?",
    questionEn: "Are there already rules for important decisions?",
    explanationDe: "Mehrheiten, Vetorechte und Zustimmungserfordernisse entscheiden darüber, ob die Gesellschaft handlungsfähig bleibt.",
    explanationEn: "Majorities, veto rights and consent requirements determine whether the company remains capable of acting.",
    answersDe: [
      { text: "Ja, konkret geregelt", scoreChanges: { decision: 0 } },
      { text: "Teilweise besprochen", scoreChanges: { decision: 1 } },
      { text: "Nur mündlich oder informell", scoreChanges: { decision: 2 } },
      { text: "Nein", scoreChanges: { decision: 3 } }
    ],
    answersEn: [
      { text: "Yes, clearly regulated", scoreChanges: { decision: 0 } },
      { text: "Partly discussed", scoreChanges: { decision: 1 } },
      { text: "Only verbally or informally", scoreChanges: { decision: 2 } },
      { text: "No", scoreChanges: { decision: 3 } }
    ]
  },
  {
    id: 5,
    questionDe: "Was passiert, wenn Gründer sich bei wichtigen Entscheidungen blockieren?",
    questionEn: "What happens if founders block each other on important decisions?",
    explanationDe: "Ohne Deadlock-Mechanik kann ein Konflikt schnell zur operativen Blockade werden.",
    explanationEn: "Without a deadlock mechanism, a conflict can quickly become an operational blockage.",
    answersDe: [
      { text: "Es gibt eine Deadlock-Regel", scoreChanges: { decision: 0 } },
      { text: "Es gibt nur allgemeine Mehrheitsregeln", scoreChanges: { decision: 2 } },
      { text: "Das wurde bisher nicht geregelt", scoreChanges: { decision: 3 } },
      { text: "Unklar", scoreChanges: { decision: 3 } }
    ],
    answersEn: [
      { text: "There is a deadlock rule", scoreChanges: { decision: 0 } },
      { text: "There are only general majority rules", scoreChanges: { decision: 2 } },
      { text: "This has not been regulated yet", scoreChanges: { decision: 3 } },
      { text: "Unclear", scoreChanges: { decision: 3 } }
    ]
  },
  {
    id: 6,
    questionDe: "Soll die Übertragung von Geschäftsanteilen kontrolliert werden?",
    questionEn: "Should transfers of shares be controlled?",
    explanationDe: "Eine Gründerstruktur sollte verhindern, dass Anteile unkontrolliert in strategisch unerwünschte Hände gelangen.",
    explanationEn: "A founder structure should prevent shares from being transferred uncontrolled to strategically unsuitable parties.",
    answersDe: [
      { text: "Ja, mit Zustimmung, Vorkaufsrecht oder Erwerbsrecht", scoreChanges: { transfer: 0 } },
      { text: "Teilweise", scoreChanges: { transfer: 1 } },
      { text: "Nein", scoreChanges: { transfer: 3 } },
      { text: "Noch nicht bedacht", scoreChanges: { transfer: 3 } }
    ],
    answersEn: [
      { text: "Yes, with consent, pre-emption or acquisition rights", scoreChanges: { transfer: 0 } },
      { text: "Partly", scoreChanges: { transfer: 1 } },
      { text: "No", scoreChanges: { transfer: 3 } },
      { text: "Not considered yet", scoreChanges: { transfer: 3 } }
    ]
  },
  {
    id: 7,
    questionDe: "Was passiert, wenn ein Gründer früh aussteigt?",
    questionEn: "What happens if a founder leaves early?",
    explanationDe: "Leaver-Regeln verhindern, dass Beteiligung und tatsächlicher Beitrag dauerhaft auseinanderfallen.",
    explanationEn: "Leaver rules help prevent shareholding and actual contribution from permanently drifting apart.",
    answersDe: [
      { text: "Leaver-Regeln sind vorgesehen", scoreChanges: { leaver: 0 } },
      { text: "Nur grob besprochen", scoreChanges: { leaver: 2 } },
      { text: "Nicht geregelt", scoreChanges: { leaver: 3 } },
      { text: "Unklar", scoreChanges: { leaver: 3 } }
    ],
    answersEn: [
      { text: "Leaver rules are planned", scoreChanges: { leaver: 0 } },
      { text: "Only roughly discussed", scoreChanges: { leaver: 2 } },
      { text: "Not regulated", scoreChanges: { leaver: 3 } },
      { text: "Unclear", scoreChanges: { leaver: 3 } }
    ]
  },
  {
    id: 8,
    questionDe: "Soll Beteiligung an Leistung oder Verbleib im Unternehmen gekoppelt sein?",
    questionEn: "Should shareholding be linked to contribution or continued involvement?",
    explanationDe: "Vesting oder Reverse Vesting kann sicherstellen, dass Gründeranteile wirtschaftlich verdient werden.",
    explanationEn: "Vesting or reverse vesting can ensure that founder shares are economically earned over time.",
    answersDe: [
      { text: "Ja, Vesting oder Reverse Vesting ist vorgesehen", scoreChanges: { leaver: 0 } },
      { text: "Vielleicht", scoreChanges: { leaver: 1 } },
      { text: "Nein", scoreChanges: { leaver: 2 } },
      { text: "Noch nicht bedacht", scoreChanges: { leaver: 3 } }
    ],
    answersEn: [
      { text: "Yes, vesting or reverse vesting is planned", scoreChanges: { leaver: 0 } },
      { text: "Maybe", scoreChanges: { leaver: 1 } },
      { text: "No", scoreChanges: { leaver: 2 } },
      { text: "Not considered yet", scoreChanges: { leaver: 3 } }
    ]
  },
  {
    id: 9,
    questionDe: "Gibt es IP, Software, Marke, Know-how oder wesentliche Assets, die eingebracht werden?",
    questionEn: "Are IP, software, trademarks, know-how or key assets being contributed?",
    explanationDe: "Wenn wichtige Assets eingebracht werden, sollte klar sein, wem sie gehören und wie die Gesellschaft sie nutzen darf.",
    explanationEn: "If key assets are contributed, ownership and use rights should be clearly structured.",
    answersDe: [
      { text: "Ja, wesentlich", scoreChanges: { asset: 3, investor: 1 } },
      { text: "Ja, aber überschaubar", scoreChanges: { asset: 1 } },
      { text: "Nein", scoreChanges: { asset: 0 } },
      { text: "Unklar", scoreChanges: { asset: 2 } }
    ],
    answersEn: [
      { text: "Yes, materially", scoreChanges: { asset: 3, investor: 1 } },
      { text: "Yes, but limited", scoreChanges: { asset: 1 } },
      { text: "No", scoreChanges: { asset: 0 } },
      { text: "Unclear", scoreChanges: { asset: 2 } }
    ]
  },
  {
    id: 10,
    questionDe: "Ist später ein Investoreneinstieg oder Verkauf denkbar?",
    questionEn: "Is a future investor entry or sale conceivable?",
    explanationDe: "Investoren und Käufer achten auf klare Beteiligungs-, Kontroll- und IP-Strukturen.",
    explanationEn: "Investors and buyers look for clear shareholding, control and IP structures.",
    answersDe: [
      { text: "Ja, konkret geplant", scoreChanges: { investor: 3, transfer: 1, leaver: 1 } },
      { text: "Möglich", scoreChanges: { investor: 2 } },
      { text: "Eher nicht", scoreChanges: { investor: 0 } },
      { text: "Unklar", scoreChanges: { investor: 1 } }
    ],
    answersEn: [
      { text: "Yes, specifically planned", scoreChanges: { investor: 3, transfer: 1, leaver: 1 } },
      { text: "Possible", scoreChanges: { investor: 2 } },
      { text: "Rather not", scoreChanges: { investor: 0 } },
      { text: "Unclear", scoreChanges: { investor: 1 } }
    ]
  }
];

const t = {
  DE: {
    introHeadline: "Gründerstruktur Check",
    introText: "Erkennen Sie in 2 Minuten, ob das Musterprotokoll für Ihre GmbH-Gründung mit mehreren Gründern zu dünn ist.",
    startHeadline: "Musterprotokoll bei mehreren Gründern?",
    startSubline: "Beantworten Sie 10 Fragen und erkennen Sie, ob Ihre GmbH eine belastbare Gründerstruktur braucht.",
    startSupporting: "Das Musterprotokoll kann eine Gründung vereinfachen. Bei mehreren aktiven Gründern bleiben aber häufig Fragen offen, die später zu Blockaden, Konflikten oder Investorenproblemen führen können.",
    startCTA: "Check starten",
    startNote: "Dauer: ca. 2 Minuten. Keine Registrierung erforderlich.",
    disclaimer: "Diese Ersteinschätzung dient der allgemeinen Orientierung und ersetzt keine rechtliche Beratung im Einzelfall.",
    back: "Zurück",
    next: "Weiter",
    questionOf: "Frage",
    restart: "Check erneut starten",
    assessmentLabel: "Ihre Einschätzung",
    riskLevels: {
      low: "Niedriges Strukturrisiko",
      elevated: "Erhöhtes Strukturrisiko",
      high: "Hohes Strukturrisiko"
    },
    riskSubtexts: {
      low: "Ihre Angaben sprechen derzeit nicht für ein stark erhöhtes Strukturierungsrisiko. Bei einfachen Gründungen kann das Musterprotokoll grundsätzlich prüfenswert sein.",
      elevated: "Ihre Angaben sprechen dafür, dass zentrale Fragen der Gründerstruktur noch nicht vollständig abgebildet sind.",
      high: "Ihre Angaben deuten auf mehrere strukturelle Risiken hin. Bei dieser Konstellation kann das Musterprotokoll später zu Blockaden, Gesellschafterkonflikten oder Investorenproblemen führen."
    },
    whyHeading: "Warum?",
    whatHeading: "Was bedeutet das?",
    whatText: "Die Gesellschaft kann zwar schnell gegründet werden. Die spätere Handlungsfähigkeit ist aber nur dann belastbar, wenn Entscheidungs-, Übertragungs- und Exit-Fragen sauber strukturiert sind.",
    recHeading: "Empfohlene Struktur",
    recText: "Individuelle Satzung plus Gründervereinbarung.",
    recBullets: [
      "klare Mehrheiten und Deadlock-Mechanik",
      "Zustimmung, Vorkaufsrechte oder Erwerbsrechte bei Anteilsübertragungen",
      "Good-/Bad-Leaver, Vesting und Abfindungslogik",
      "IP- und Asset-Zuordnung, soweit relevant",
      "investorenfähige Beteiligungsstruktur"
    ],
    ctaHeadline: "Gründerstruktur prüfen lassen",
    ctaText: "Varda Legal prüft, ob Musterprotokoll, Satzung und Gründervereinbarung zu Ihrer Gründerstruktur passen.",
    primaryCTA: "Beratung anfragen",
    copyCTA: "Ergebnis kopieren",
    copied: "Kopiert!",
    mainReasons: {
      decision: "Entscheidungsmechanik und Deadlock-Regeln sind nicht ausreichend abgesichert.",
      transfer: "Anteilsübertragungen und Gesellschafterkreis sind nicht ausreichend kontrolliert.",
      leaver: "Leaver-, Vesting- und Abfindungsfragen sind nicht ausreichend geregelt.",
      asset: "IP, Know-how oder wesentliche Assets sind nicht ausreichend strukturiert.",
      investor: "Die Struktur könnte für spätere Investoren oder Transaktionen zu dünn sein."
    },
    riskCards: {
      decision: {
        title: "Entscheidungsblockaden",
        desc: "Entscheidungen können blockieren, wenn Mehrheiten, Vetorechte oder Deadlock-Mechanik nicht sauber geregelt sind."
      },
      transfer: {
        title: "Anteilsübertragung",
        desc: "Anteilsübertragungen können problematisch werden, wenn Zustimmung, Vorkaufsrechte oder Erwerbsrechte fehlen."
      },
      leaver: {
        title: "Leaver / Vesting",
        desc: "Wenn ein Gründer früh aussteigt, sollte klar sein, ob und zu welchen Bedingungen er Anteile abgeben muss."
      }
    }
  },
  EN: {
    introHeadline: "Founder Structure Check",
    introText: "See in 2 minutes whether the standard formation protocol may be too thin for a GmbH formation with multiple founders.",
    startHeadline: "Standard formation protocol with multiple founders?",
    startSubline: "Answer 10 questions and see whether your GmbH may need a more robust founder structure.",
    startSupporting: "The standard formation protocol can simplify formation. With multiple active founders, however, it often leaves questions open that may later lead to deadlocks, conflicts or investor concerns.",
    startCTA: "Start check",
    startNote: "Takes about 2 minutes. No registration required.",
    disclaimer: "This initial assessment is for general orientation only and does not replace legal advice in an individual case.",
    back: "Back",
    next: "Next",
    questionOf: "Question",
    restart: "Restart check",
    assessmentLabel: "Your assessment",
    riskLevels: {
      low: "Low structural risk",
      elevated: "Elevated structural risk",
      high: "High structural risk"
    },
    riskSubtexts: {
      low: "Your answers do not currently indicate a significantly elevated structural risk. For simple formations, the standard formation protocol may generally be worth considering.",
      elevated: "Your answers indicate that key elements of the founder structure may not yet be fully covered.",
      high: "Your answers indicate several structural risks. In this setup, the standard formation protocol may later lead to deadlocks, shareholder conflicts or investor concerns."
    },
    whyHeading: "Why?",
    whatHeading: "What does this mean?",
    whatText: "The company can be formed quickly. But its later ability to act is only robust if decision, transfer and exit issues are properly structured.",
    recHeading: "Recommended structure",
    recText: "Individual articles of association plus founder agreement.",
    recBullets: [
      "clear majorities and deadlock mechanics",
      "consent, pre-emption or acquisition rights for share transfers",
      "good/bad leaver, vesting and compensation logic",
      "IP and asset allocation, where relevant",
      "investor-ready shareholding structure"
    ],
    ctaHeadline: "Review founder structure",
    ctaText: "Varda Legal reviews whether the standard formation protocol, articles of association and founder agreement fit your founder structure.",
    primaryCTA: "Request consultation",
    copyCTA: "Copy result",
    copied: "Copied!",
    mainReasons: {
      decision: "Decision mechanics and deadlock rules are not sufficiently secured.",
      transfer: "Share transfers and the shareholder circle are not sufficiently controlled.",
      leaver: "Leaver, vesting and compensation issues are not sufficiently regulated.",
      asset: "IP, know-how or key assets are not sufficiently structured.",
      investor: "The structure may be too thin for future investors or transactions."
    },
    riskCards: {
      decision: {
        title: "Decision deadlocks",
        desc: "Decisions can become blocked if majorities, veto rights or deadlock mechanisms are not clearly regulated."
      },
      transfer: {
        title: "Share transfers",
        desc: "Share transfers can become problematic if consent rights, pre-emption rights or acquisition rights are missing."
      },
      leaver: {
        title: "Leaver / vesting",
        desc: "If a founder leaves early, it should be clear whether and on what terms shares must be transferred."
      }
    }
  }
};

export default function GruenderstrukturCheck({ lang, onNavigateToConsult }: { lang: "DE" | "EN"; onNavigateToConsult: (riskText: string) => void }) {
  const [step, setStep] = useState<"start" | "quiz" | "result">("start");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const strings = t[lang];

  // Start the check
  const handleStart = () => {
    setAnswers([]);
    setCurrentIdx(0);
    setStep("quiz");
  };

  // Select an option (storing the index chosen)
  const handleSelectOption = (optIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIdx] = optIdx;
    setAnswers(newAnswers);

    // Auto advance with simple timeout to allow visual feedback
    if (currentIdx < questions.length - 1) {
      setTimeout(() => {
        setCurrentIdx(currentIdx + 1);
      }, 200);
    } else {
      setTimeout(() => {
        setStep("result");
      }, 200);
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    } else {
      setStep("start");
    }
  };

  const handleNext = () => {
    if (answers[currentIdx] !== undefined) {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        setStep("result");
      }
    }
  };

  // Calculate scores
  const getResults = () => {
    let decision = 0;
    let transfer = 0;
    let leaver = 0;
    let asset = 0;
    let investor = 0;

    answers.forEach((optIdx, qIdx) => {
      const q = questions[qIdx];
      // Answers match exactly by index
      const ansObj = lang === "DE" ? q.answersDe[optIdx] : q.answersEn[optIdx];
      if (ansObj && ansObj.scoreChanges) {
        const sc = ansObj.scoreChanges;
        if (sc.decision) decision += sc.decision;
        if (sc.transfer) transfer += sc.transfer;
        if (sc.leaver) leaver += sc.leaver;
        if (sc.asset) asset += sc.asset;
        if (sc.investor) investor += sc.investor;
      }
    });

    const totalScore = decision + transfer + leaver + asset + investor;

    let riskLevel: "low" | "elevated" | "high" = "low";
    if (totalScore >= 19) {
      riskLevel = "high";
    } else if (totalScore >= 9) {
      riskLevel = "elevated";
    } else {
      riskLevel = "low";
    }

    // Override logic
    const axes = [decision, transfer, leaver, asset, investor];
    const axesGe7 = axes.filter((score) => score >= 7).length;

    if (axesGe7 >= 2) {
      riskLevel = "high";
    } else if (axesGe7 >= 1) {
      if (riskLevel === "low") {
        riskLevel = "elevated";
      }
    }

    // Determine highest scoring axis key
    const scores = [
      { key: "decision", val: decision },
      { key: "transfer", val: transfer },
      { key: "leaver", val: leaver },
      { key: "asset", val: asset },
      { key: "investor", val: investor }
    ];
    scores.sort((a, b) => b.val - a.val);
    const topKey = scores[0].val > 0 ? scores[0].key : "decision";

    return {
      decision,
      transfer,
      leaver,
      asset,
      investor,
      totalScore,
      riskLevel,
      topKey
    };
  };

  const results = getResults();
  const isSingleFounder = answers[0] === 0;

  const mainReasonText = strings.mainReasons[results.topKey as keyof typeof strings.mainReasons] || strings.mainReasons.decision;
  const riskLevels = strings.riskLevels;
  const riskSubtexts = strings.riskSubtexts;

  const handleCopy = () => {
    const levelText = isSingleFounder
      ? (lang === "DE" ? "Fürs Erste dürfte die Gründung mit Musterprotokoll regelmäßig ausreichend sein." : "The model protocol is likely sufficient for the initial formation.")
      : riskLevels[results.riskLevel];
    
    const displayExplanation = isSingleFounder
      ? (lang === "DE" ? "Bei einer Ein-Personen-GmbH bestehen typischerweise keine Gründerkonflikte, keine Abstimmungsblockaden und keine komplexe Beteiligungslogik zwischen mehreren Gesellschaftern. Das Musterprotokoll kann daher für den Start eine pragmatische und kosteneffiziente Lösung sein." : "In a single-founder GmbH, there are usually no founder conflicts, voting deadlocks or complex ownership arrangements between several shareholders. For the initial setup, the model protocol can therefore be a pragmatic and cost-efficient option.")
      : mainReasonText;

    const displayNuance = isSingleFounder
      ? (lang === "DE" ? "Spätestens wenn weitere Gesellschafter, Investoren, Mitarbeiterbeteiligungen oder besondere Regelungen zu Geschäftsführung, Anteilsübertragung oder Exit hinzukommen, sollte die Struktur überprüft und angepasst werden." : "Once additional shareholders, investors, employee participation or specific rules on management, share transfers or exit are introduced, the structure should be reviewed and adapted.")
      : "";

    const displayRecAction = isSingleFounder
      ? (lang === "DE" ? "Start mit Musterprotokoll möglich. Struktur bei Wachstum or Aufnahme weiterer Beteiligter prüfen." : "Formation with the model protocol is likely acceptable for now. Review the structure when the company grows or additional stakeholders join.")
      : strings.recText;

    const bullets = isSingleFounder
      ? (lang === "DE"
          ? ["Aufnahme weiterer Gesellschafter", "Einstieg von Investoren", "Einführung von Mitarbeiterbeteiligungen", "Besondere Regelungen (z. B. GF, Exit)"]
          : ["Adding additional shareholders", "Investor entry or fundraising", "Employee participation plans", "Custom management or exit rules"])
      : strings.recBullets;

    const bulletStr = bullets.map((b) => `- ${b}`).join("\n");
    const textToCopy =
      lang === "DE"
        ? `GRÜNDERSTRUKTUR CHECK — ERGEBNIS\n\n` +
          `Einschätzung: ${levelText}\n\n` +
          `Erklärung:\n${displayExplanation}\n\n` +
          (isSingleFounder ? `Wichtiger Hinweis:\n${displayNuance}\n\n` : "") +
          `Empfehlung: ${displayRecAction}\n` +
          `${bulletStr}\n\n` +
          `Hinweis: ${strings.disclaimer}`
        : `FOUNDER STRUCTURE CHECK — RESULT\n\n` +
          `Assessment: ${levelText}\n\n` +
          `Explanation:\n${displayExplanation}\n\n` +
          (isSingleFounder ? `Important Nuance:\n${displayNuance}\n\n` : "") +
          `Recommendation: ${displayRecAction}\n` +
          `${bulletStr}\n\n` +
          `Note: ${strings.disclaimer}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentQ = questions[currentIdx];
  const questionText = lang === "DE" ? currentQ.questionDe : currentQ.questionEn;
  const explanationText = lang === "DE" ? currentQ.explanationDe : currentQ.explanationEn;
  const currentAnswers = lang === "DE" ? currentQ.answersDe : currentQ.answersEn;

  return (
    <div id="gruender-check" className="mt-16 border-t border-charcoal/10 pt-16 max-w-5xl mx-auto">
      {/* Restrained introductory block */}
      <div className="mb-8 space-y-3 max-w-2xl text-left">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold">
          VARDA METHODOLOGY
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight">
          {strings.introHeadline}
        </h3>
        <p className="font-sans text-charcoal/70 text-sm sm:text-base leading-relaxed">
          {strings.introText}
        </p>
      </div>

      {/* Main interactive Varda decision interface container */}
      <div className="border border-charcoal/15 bg-white p-6 sm:p-8 md:p-12 relative overflow-hidden select-none">
        
        <AnimatePresence mode="wait">
          {/* SCREEN 1: START SCREEN */}
          {step === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 text-left"
            >
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-[9px] uppercase tracking-widest bg-charcoal/5 px-2 py-1 text-charcoal/60 rounded-[1px]">
                  01 / START
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal tracking-tight mt-2">
                  {strings.startHeadline}
                </h4>
                <p className="font-sans text-charcoal text-sm sm:text-base font-semibold">
                  {strings.startSubline}
                </p>
                <p className="font-serif text-charcoal/75 text-sm sm:text-base leading-relaxed italic border-l-2 border-[#C0823E]/30 pl-4 pt-1">
                  {strings.startSupporting}
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <button
                    onClick={handleStart}
                    className="group bg-[#C0823E] text-white px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold hover:bg-charcoal transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>{strings.startCTA}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-charcoal/40 font-mono pt-1">
                    {strings.startNote}
                  </p>
                </div>
                <p className="text-[10px] text-charcoal/50 font-sans max-w-sm leading-relaxed">
                  {strings.disclaimer}
                </p>
              </div>
            </motion.div>
          )}

          {/* SCREEN 2: QUESTION FLOW */}
          {step === "quiz" && (
            <motion.div
              key={`q-${currentIdx}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-8 text-left"
            >
              {/* Fine line progress indicator */}
              <div className="w-full bg-charcoal/5 h-[1.5px] relative">
                <div 
                  className="bg-[#C0823E] h-[1.5px] transition-all duration-300 absolute left-0 top-0"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-mono font-mono text-[9px] uppercase tracking-widest text-charcoal/50">
                <span>{strings.questionOf} {(currentIdx + 1).toString().padStart(2, "0")} / {questions.length.toString().padStart(2, "0")}</span>
                <span>{Math.round(((currentIdx + 1) / questions.length) * 100)}%</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mt-4">
                {/* Left/Top: Question & Explanation */}
                <div className="md:col-span-6 space-y-4">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-charcoal tracking-tight leading-snug">
                    {questionText}
                  </h4>
                  <p className="font-sans text-charcoal/70 text-xs sm:text-sm leading-relaxed border-l border-charcoal/15 pl-4 py-0.5">
                    {explanationText}
                  </p>
                </div>

                {/* Right/Bottom: Answer Options */}
                <div className="md:col-span-6 space-y-3">
                  {currentAnswers.map((opt, oIdx) => {
                    const isSelected = answers[currentIdx] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`w-full text-left p-4 border transition-all duration-300 flex items-center justify-between text-xs sm:text-sm ${
                          isSelected 
                             ? "border-[#C0823E] bg-[#FAF8F5] text-charcoal font-semibold shadow-sm"
                            : "border-charcoal/10 bg-white hover:border-charcoal/40 text-charcoal/80"
                        }`}
                      >
                        <span className="font-sans leading-relaxed">{opt.text}</span>
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center flex-shrink-0 ml-3 ${
                          isSelected 
                            ? "border-[#C0823E] bg-[#C0823E]"
                            : "border-charcoal/20 bg-white"
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Back / Next Custom Navigation Row */}
              <div className="pt-6 border-t border-charcoal/10 flex justify-between items-center">
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-2 text-charcoal/60 hover:text-charcoal font-mono text-xs uppercase tracking-widest transition-colors py-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{strings.back}</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={answers[currentIdx] === undefined}
                  className={`flex items-center space-x-2 font-mono text-xs uppercase tracking-widest transition-colors py-2 ${
                    answers[currentIdx] === undefined
                      ? "text-charcoal/20 cursor-not-allowed"
                      : "text-charcoal hover:text-[#C0823E]"
                  }`}
                >
                  <span>{strings.next}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* SCREEN 3: RESULT SCREEN */}
          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10 text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-[9px] uppercase tracking-widest bg-[#C0823E]/10 p-1 px-2 text-[#C0823E] font-bold">
                    {strings.assessmentLabel}
                  </span>
                  <span className="h-[1px] flex-1 bg-charcoal/10" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal tracking-tight max-w-3xl leading-snug">
                    {isSingleFounder 
                      ? (lang === "DE" ? "Fürs Erste dürfte die Gründung mit Musterprotokoll regelmäßig ausreichend sein." : "The model protocol is likely sufficient for the initial formation.")
                      : riskLevels[results.riskLevel]}
                  </h4>
                  <div className="font-mono text-xs text-charcoal/50">
                    {isSingleFounder ? (lang === "DE" ? "1 Gründer" : "1 Founder") : `Total: ${results.totalScore} Points`}
                  </div>
                </div>

                <p className="font-sans text-charcoal/85 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {isSingleFounder 
                    ? (lang === "DE" ? "Bei einer Ein-Personen-GmbH bestehen typischerweise keine Gründerkonflikte, keine Abstimmungsblockaden und keine komplexe Beteiligungslogik zwischen mehreren Gesellschaftern. Das Musterprotokoll kann daher für den Start eine pragmatische und kosteneffiziente Lösung sein." : "In a single-founder GmbH, there are usually no founder conflicts, voting deadlocks or complex ownership arrangements between several shareholders. For the initial setup, the model protocol can therefore be a pragmatic and cost-efficient option.")
                    : riskSubtexts[results.riskLevel]}
                </p>
              </div>

              {/* Why? / Diagnostic section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-charcoal/10 items-start">
                
                {/* Left: Why / Main reason */}
                <div className="md:col-span-5 space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                    {isSingleFounder ? (lang === "DE" ? "WICHTIGER HINWEIS" : "IMPORTANT NUANCE") : strings.whyHeading}
                  </span>
                  <div className="p-5 bg-[#FAF8F5] border-l-2 border-[#C0823E] space-y-2">
                    <p className="font-sans text-charcoal text-xs sm:text-sm leading-relaxed font-semibold">
                      {isSingleFounder 
                        ? (lang === "DE" ? "Spätestens wenn weitere Gesellschafter, Investoren, Mitarbeiterbeteiligungen oder besondere Regelungen zu Geschäftsführung, Anteilsübertragung oder Exit hinzukommen, sollte die Struktur überprüft und angepasst werden." : "Once additional shareholders, investors, employee participation or specific rules on management, share transfers or exit are introduced, the structure should be reviewed and adapted.")
                        : mainReasonText}
                    </p>
                  </div>
                  
                  {/* Scope note */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 font-bold block">
                      {isSingleFounder ? (lang === "DE" ? "HINTERGRUND" : "BACKGROUND") : strings.whatHeading}
                    </span>
                    <p className="font-sans text-charcoal/65 text-xs leading-relaxed">
                      {isSingleFounder 
                        ? (lang === "DE" ? "Eine Ein-Personen-GmbH benötigt am ersten Tag selten eine maßgeschneiderte Satzung. Erst wenn Partner oder externes Kapital ins Spiel kommen, entstehen die typischen Reibungspunkte, die das Musterprotokoll unbrauchbar machen." : "A single-founder GmbH rarely requires customized articles of association on day one. Only once partners or external capital are introduced do the typical friction points arise where the model protocol falls short.")
                        : strings.whatText}
                    </p>
                  </div>
                </div>

                {/* Right: Core risk axes and Recommended Structure */}
                <div className="md:col-span-7 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Decision Risk Card */}
                    <div className="p-4 border border-charcoal/10 bg-white space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-charcoal/70">
                          {strings.riskCards.decision.title}
                        </span>
                        <span className={`w-1.5 h-1.5 rounded-full ${!isSingleFounder && results.decision >= 4 ? "bg-[#C0823E]" : "bg-charcoal/20"}`} />
                      </div>
                      <p className="font-sans text-charcoal/60 text-[11px] leading-relaxed">
                        {isSingleFounder 
                          ? (lang === "DE" ? "Keine Abstimmungsblockaden möglich." : "No voting deadlocks possible.") 
                          : strings.riskCards.decision.desc}
                      </p>
                    </div>

                    {/* Transfer Risk Card */}
                    <div className="p-4 border border-charcoal/10 bg-white space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-charcoal/70">
                          {strings.riskCards.transfer.title}
                        </span>
                        <span className={`w-1.5 h-1.5 rounded-full ${!isSingleFounder && results.transfer >= 4 ? "bg-[#C0823E]" : "bg-charcoal/20"}`} />
                      </div>
                      <p className="font-sans text-charcoal/60 text-[11px] leading-relaxed">
                        {isSingleFounder 
                          ? (lang === "DE" ? "Anteilsübertragungen liegen allein bei Ihnen." : "Share transfers are solely up to you.") 
                          : strings.riskCards.transfer.desc}
                      </p>
                    </div>

                    {/* Leaver Risk Card */}
                    <div className="p-4 border border-charcoal/10 bg-white space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-charcoal/70">
                          {strings.riskCards.leaver.title}
                        </span>
                        <span className={`w-1.5 h-1.5 rounded-full ${!isSingleFounder && results.leaver >= 4 ? "bg-[#C0823E]" : "bg-charcoal/20"}`} />
                      </div>
                      <p className="font-sans text-charcoal/60 text-[11px] leading-relaxed">
                        {isSingleFounder 
                          ? (lang === "DE" ? "Keine Leaver- oder Vesting-Themen relevant." : "No leaver or vesting issues relevant.") 
                          : strings.riskCards.leaver.desc}
                      </p>
                    </div>
                  </div>

                  {/* Recommended structure block */}
                  <div className="border border-charcoal/15 bg-[#FAF8F5] p-5 sm:p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-[#C0823E]" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal font-bold">
                        {isSingleFounder ? (lang === "DE" ? "EMPFOHLENER FAHRPLAN" : "RECOMMENDED PATH") : strings.recHeading}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <p className="font-serif text-base font-semibold text-[#1B2A4A] leading-relaxed">
                        {isSingleFounder 
                          ? (lang === "DE" ? "Start mit Musterprotokoll möglich. Struktur bei Wachstum oder Aufnahme weiterer Beteiligter prüfen." : "Formation with the model protocol is likely acceptable for now. Review the structure when the company grows or additional stakeholders join.") 
                          : strings.recText}
                      </p>
                      
                      {isSingleFounder && (
                        <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/50 block pt-1">
                          {lang === "DE" ? "Sollte überprüft werden bei:" : "Should be reviewed upon:"}
                        </span>
                      )}

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal/80 font-sans">
                        {(isSingleFounder
                          ? (lang === "DE" 
                              ? ["Aufnahme weiterer Gesellschafter", "Einstieg von Investoren", "Einführung von Mitarbeiterbeteiligungen", "Besondere Regelungen (z. B. GF, Exit)"]
                              : ["Adding additional shareholders", "Investor entry or fundraising", "Employee participation plans", "Custom management or exit rules"])
                          : strings.recBullets).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-[#C0823E] mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

              {/* Consultation / Conversion Block */}
              <div className="pt-8 border-t border-charcoal/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FAF8F5]/40 p-6">
                <div className="md:col-span-8 space-y-2">
                  <h5 className="font-serif text-base sm:text-lg font-bold text-charcoal">
                    {strings.ctaHeadline}
                  </h5>
                  <p className="font-sans text-charcoal/70 text-xs sm:text-sm leading-relaxed">
                    {strings.ctaText}
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-col gap-2 sm:flex-row md:flex-col justify-end">
                  <button
                    onClick={() => {
                      const levelText = isSingleFounder
                        ? (lang === "DE" ? "Ausreichend mit Musterprotokoll (Ein-Gründer-Szenario)" : "Model protocol sufficient (Single-founder scenario)")
                        : riskLevels[results.riskLevel];
                      const inquiryMsg = isSingleFounder
                        ? (lang === "DE"
                            ? `Ein-Gründer-Szenario: Gründung mit Musterprotokoll geplant. Beratung gewünscht zur Strukturierung bei Wachstum.`
                            : `Single-founder scenario: Formation with model protocol planned. Requesting advice on growth structuring.`)
                        : (lang === "DE" 
                            ? `Gründerstruktur Check Ergebnis: ${levelText}. Hauptgrund: ${mainReasonText}. Gewünscht ist eine Prüfung für die Gründerstruktur.`
                            : `Founder Structure Check Result: ${levelText}. Main Reason: ${mainReasonText}. Requesting founder structure review.`);
                      onNavigateToConsult(inquiryMsg);
                    }}
                    className="w-full bg-[#C0823E] text-white px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest font-bold hover:bg-charcoal transition-colors text-center"
                  >
                    {strings.primaryCTA}
                  </button>
                  
                  <button
                    onClick={handleCopy}
                    className="w-full border border-charcoal/15 text-charcoal hover:bg-charcoal hover:text-white px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest font-bold transition-all text-center flex items-center justify-center space-x-1"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? strings.copied : strings.copyCTA}</span>
                  </button>
                </div>
              </div>

              {/* Back / Restart Action bar */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between border-t border-charcoal/5 gap-4">
                <button
                  onClick={handleStart}
                  className="flex items-center space-x-2 text-charcoal/60 hover:text-charcoal font-mono text-xs uppercase tracking-widest transition-colors py-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{strings.restart}</span>
                </button>

                <p className="text-[10px] text-charcoal/40 font-sans leading-relaxed">
                  {strings.disclaimer}
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
