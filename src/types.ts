/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "DE" | "EN";

export interface FocusItem {
  num: string;
  title: string;
  desc: string;
  details: string[];
}

export interface FFFBlock {
  title: string;
  subtitle: string;
  text: string;
  quote: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  content: string;
}

export interface PriceTier {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  bestFor: string;
}

export interface ContentData {
  nav: {
    home: string;
    wir: string;
    fokus: string;
    fff: string;
    denkwerk: string;
    verguetung: string;
    letsgo: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    secCta: string;
    stats: { value: string; label: string }[];
  };
  wir: {
    title: string;
    subtitle: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    quoteArtist: string;
    card: {
      role: string;
      school: string;
      focus: string;
    };
  };
  fokus: {
    title: string;
    subtitle: string;
    items: FocusItem[];
  };
  fff: {
    title: string;
    subtitle: string;
    blocks: FFFBlock[];
  };
  denkwerk: {
    title: string;
    subtitle: string;
    all: string;
    readMore: string;
    back: string;
    articles: Article[];
  };
  verguetung: {
    title: string;
    subtitle: string;
    intro: string;
    tiers: PriceTier[];
    note: string;
  };
  letsgo: {
    title: string;
    subtitle: string;
    ctaBtn: string;
    calendarTitle: string;
    calendarDesc: string;
    addressTitle: string;
    phoneTitle: string;
    emailTitle: string;
    inputs: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
    calendarStatus: string;
    successMessage: string;
  };
}

export const content: Record<Language, ContentData> = {
  DE: {
    nav: {
      home: "Start",
      wir: "Über Varda Legal",
      fokus: "Fokus",
      fff: "Form follows function",
      denkwerk: "Denkwerk",
      verguetung: "Vergütung",
      letsgo: "Let's Go",
    },
    hero: {
      badge: "Kanzlei für Gesellschaftsrecht & Finanzierungen",
      title: "Wir schreiben keine Paragraphen. Wir bauen Fundamente.",
      subtitle: "Boutique-Beratung für schnell wachsende Scale-Ups und technologieorientierten Mittelstand. Präzise, unternehmerisch und radikal funktional.",
      cta: "Beratung buchen",
      secCta: "Fokus-Bereiche",
      stats: [
        { value: "50+", label: "Erfolgreiche Finanzierungsrunden" },
        { value: "€450M+", label: "Transaktionsvolumen" },
        { value: "100%", label: "Digitaler Workflow" },
        { value: "MUC", label: "Zentrale in München" },
      ],
    },
    wir: {
      title: "Über Varda Legal",
      subtitle: "Moderne Rechtsberatung heißt: Klarheit in Ihrer Sprache.",
      heading: "Selbstverständnis und Background",
      p1: "Der Mandant will Lösungen. Mal mit Präzisionswerkzeug, mal mit dem Vorschlaghammer. Mal etwas dazwischen. Über 10 Jahre habe ich in nationalen und internationalen Einheiten unterschiedliche Beratungsstile und Produktansätze kennenlernen dürfen. Meine These: Viele Anwälte liefern zu vorsichtig und an der Ideallösung vorbei. Die Zeit ist reif für eine neue Art der Rechtsberatung: Varda Legal.",
      p2: "Unternehmer denken in Slides, Zahlen und Bildern, in kommerziellen Chancen und Risiken. Rechtsanwälte denken in Texten und rechtlichen Risiken. Für den Mandanten heißt das: Er muss die Auskunft seines Beraters noch „übersetzen“.",
      p3: "Wir haben einen anderen Ansatz. Natürlich schreiben wir gerne. Aber wir kennen Ihren Wunsch nach Klarheit und respektieren Ihre Zeit. Deshalb stellen wir unser Ergebnis so dar, dass Sie Zeit gewinnen. Pointierte Tabellen oder Slides mit klarer Bewertung des rechtlichen Risikos, Impact und einer klaren Handlungsempfehlung. Wir schenken Ihnen Zeit, die Sie für andere Themen brauchen. Visuell. Visionär. Varda.",
      quoteArtist: "„Die richtige Form als Wachstumsmotor.“",
      card: {
        role: "Gründer",
        school: "",
        focus: "Corporate, Commercial, M&A, Tech/Data",
      },
    },
    fokus: {
      title: "Fokus",
      subtitle: "Erfolg durch Fokus",
      items: [
        {
          num: "01",
          title: "Corporate/Gesellschaftsrecht",
          desc: "Vom Gesellschaftsvertrag über die Umstrukturierung bis zur Beratung im Krisenfall.",
          details: [
            "Gründungen, Strukturierung",
            "Strukturmaßnahmen,",
            "Gesellschaftervereinbarungen",
            "Geschäftsführerthemen",
            "Lösungen für den  Krisenfall",
          ],
        },
        {
          num: "02",
          title: "Commercial",
          desc: "Vertragsgestaltung und -prüfung.",
          details: [
            "Einkaufs- und Lieferverträge",
            "Lizenzvereinbarungen,",
            "Dienstleistungsverträge",
            "Sonstiges, z.B. NDAs",
          ],
        },
        {
          num: "03",
          title: "M&A",
          desc: "Unternehmenstransaktionen auf Käufer- oder Verkäuferseite.",
          details: [
            "Share- und Assetdeal",
            "Due Diligence und Projektmanagement",
            "VC M&A",
          ],
        },
        {
          num: "04",
          title: "Data/Tech",
          desc: "Datenlizenzverträge, SaaS, Token-/Coinrecovery.",
          details: [
            "Datenlizenzverträge",
            "SaaS- & IT-Projektverträge",
            "Token- & Coinrecovery",
          ],
        },
      ],
    },
    fff: {
      title: "Form follows function",
      subtitle: "Ihr Ziel ist unser Maßstab",
      blocks: [
        {
          title: "Varda Legal",
          subtitle: "01 / PRÜFSTEINE GUTER BERATUNG",
          text: "Wir hören hin, verstehen, denken mit. Und liefern. Keine Schnörkel. Wir können das Gutachten genauso wie den schlanken Vertrag und die Minitransaktion. Präzision und Feinschliff sind wichtig - aber nicht über Gebühr. Varda Legal heißt: Form follows function. Ihr Ziel ist unser Maßstab. Wir bringen Sie ans Ziel.",
          quote: "Dinge weglassen, die keine Funktion erfüllen. Das gilt für Gebäude wie für Beteiligungsverträge.",
          image: "monocle_firm_1",
        },
        {
          title: "Pragmatismus schlägt Doktrin.",
          subtitle: "02 / ERGEBNISORIENTIERUNG",
          text: "Wir bewerten Risiken nicht nur isoliert juristisch, sondern setzen sie in einen wirtschaftlichen Kontext. Manchmal ist ein kalkuliertes Risiko der einzige Weg, um einen Deal abzuschließen. Wir liefern keine Bedenken, sondern Lösungen und haben Mut zu Aussagen wie \"An Ihrer Stelle würde ich mich für Weg A entscheiden.\"",
          quote: "Das Recht ist die Infrastruktur des Erlaubten. Ein guter Berater ermöglicht Ihnen, den klügsten Weg von A nach B zu nehmen.",
          image: "monocle_firm_2",
        },
      ],
    },
    denkwerk: {
      title: "Denkwerk",
      subtitle: "Impulse",
      all: "Alle Beiträge",
      readMore: "Impuls lesen",
      back: "Zurück zur Übersicht",
      articles: [
        {
          id: "geschaeftsfuehrerhaftung-krise",
          category: "GmbH-Recht",
          title: "Geschäftsführerhaftung in der Krise – Wann haftet die GmbH-Geschäftsführung persönlich?",
          excerpt: "Viele Unternehmer gehen davon aus, dass die GmbH automatisch vor persönlicher Haftung schützt. Das stimmt nur teilweise. Gerade in wirtschaftlich schwierigen Zeiten geraten Geschäftsführer schnell in persönliche Haftungsrisiken – häufig ohne es zu bemerken.",
          date: "22. Mai 2026",
          readingTime: "10 Min. Lesezeit",
          content: `Viele Unternehmer gehen davon aus, dass die GmbH automatisch vor persönlicher Haftung schützt. Das stimmt nur teilweise. Gerade in wirtschaftlich schwierigen Zeiten geraten Geschäftsführer schnell in persönliche Haftungsrisiken – häufig ohne es zu bemerken.

### Die häufigste Fehlannahme: „Ich hafte doch nicht privat“
Die GmbH beschränkt grundsätzlich die Haftung der Gesellschafter. Für Geschäftsführer gilt aber etwas anderes.

Geschäftsführer haften persönlich, wenn sie gegen gesetzliche Pflichten verstoßen. Besonders relevant wird das bei:
- verspäteter Insolvenzantragstellung,
- verbotenen Zahlungen nach Insolvenzreife,
- Steuer- und Sozialversicherungsrückständen,
- fehlender Liquiditätskontrolle,
- Organisationsverschulden.

Gerade in kleinen Unternehmen existieren oft keine professionellen Compliance- oder Controlling-Strukturen. Das erhöht das Risiko erheblich.

### Wann liegt Insolvenzreife vor?
Juristisch entscheidend sind zwei Begriffe:

#### Zahlungsunfähigkeit (§ 17 InsO)
Ein Unternehmen ist zahlungsunfähig, wenn es seine fälligen Verbindlichkeiten nicht mehr bedienen kann und die Liquiditätslücke nicht kurzfristig geschlossen werden kann.

In der Praxis reicht häufig schon:
- dauerhaft ausgeschöpfte Kreditlinien,
- verschobene Sozialabgaben,
- gestreckte Lieferantenrechnungen,
- fehlende Liquiditätsplanung.

#### Überschuldung (§ 19 InsO)
Bei Kapitalgesellschaften kann auch eine bilanzielle Überschuldung relevant werden, sofern keine positive Fortführungsprognose besteht.

Gerade technologiegetriebene oder wachstumsorientierte Unternehmen unterschätzen dieses Thema regelmäßig.

### Die gefährlichste Frist: 3 Wochen
Sobald Insolvenzreife vorliegt, muss die Geschäftsführung „ohne schuldhaftes Zögern“, spätestens innerhalb von drei Wochen, Insolvenzantrag stellen.

Die Frist ist keine automatiche Schonfrist. Wer „noch schnell“ versucht einen Investor zu finden, einen großen Auftrag abzuwarten, Gesellschafterdarlehen zu organisieren oder auf bessere Umsätze hofft, handelt oft bereits haftungsrelevant.

### Persönliche Haftung für Zahlungen nach Insolvenzreife
Besonders problematisch: Nach Eintritt der Insolvenzreife dürfen viele Zahlungen nicht mehr geleistet werden. Dazu gehören unter Umständen Lieferantenrechnungen, Gehälter, Leasingraten, Beraterhonorare oder Zahlungen an verbundene Unternehmen. Geschäftsführer müssen diese Beträge später teilweise persönlich ersetzen. Die Haftungssummen erreichen schnell sechsstellige Größenordnungen – auch bei kleinen Unternehmen.

### Strafrechtliche Risiken werden oft unterschätzt
Neben zivilrechtlicher Haftung drohen:
- Insolvenzverschleppung,
- Bankrottdelikte,
- Vorenthalten von Sozialversicherungsbeiträgen,
- steuerstrafrechtliche Konsequenzen.

Viele Verfahren beginnen nicht aufgrund großer Betrugsfälle, sondern wegen organisatorischer Überforderung in kleinen Unternehmen.

### Was Geschäftsführer jetzt konkret tun sollten
1. **Liquidität professionell überwachen**: Ein belastbarer 13-Wochen-Liquiditätsplan ist heute praktisch Pflicht.
2. **Frühzeitig dokumentieren**: Entscheidungen müssen nachvollziehbar dokumentiert werden (Fortführungsprognosen, Finanzierungsverhandlungen, Restrukturierungsmaßnahmen).
3. **Keine „gefühlten“ Entscheidungen treffen**: Die Einschätzung „das wird schon wieder“ schützt nicht vor Haftung.
4. **Frühzeitig rechtlich prüfen lassen**: Je früher eine Krisensituation analysiert wird, desto größer sind die Handlungsspielräume (Restrukturierung, Gesellschaftermaßnahmen, Asset Deals, Investorenlösungen, Schutzschirmverfahren).

Entscheidend sind:
- Zeitpunkt der Insolvenzreife,
- konkrete Zahlungsströme,
- Dokumentation,
- Branchenbesonderheiten,
- Gesellschafterstruktur,
- Finanzierungsverträge.

Diese Einzelfragen entscheiden über persönliche Haftung oder Haftungsvermeidung.

### Fazit
Geschäftsführer kleiner GmbHs tragen deutlich mehr persönliche Verantwortung, als viele erwarten. Wer wirtschaftliche Probleme zu spät erkennt oder falsch reagiert, riskiert erhebliche persönliche Haftung.`
        },
        {
          id: "formfalle-b2b-digital",
          category: "Vertragsrecht",
          title: "Formfalle bei B2B-Verträgen: Wann e-Signing (DocuSign, Adobe Sign, etc.) rechtssicher ist und wann die Schriftform zwingend gilt",
          excerpt: "Die Digitalisierung beschleunigt B2B-Geschäfte, doch Formfehler führen im deutschen Recht zu unwirksamen Verträgen. Wo ist elektronische Signatur rechtssicher und wo herrscht Handlungsbedarf?",
          date: "12. Mai 2026",
          readingTime: "7 Min. Lesezeit",
          content: `Im modernen Geschäftsalltag deutscher Unternehmen müssen Prozesse agil und digital ablaufen. Verträge werden vermehrt per E-Mail oder über e-Signing-Plattformen wie DocuSign oder Adobe Sign geschlossen. Doch das deutsche Bürgerliche Gesetzbuch (BGB) ist formalistischer geprägt als viele annehmen. Ein Verstoß gegen gesetzliche Formvorschriften führt gemäß § 125 BGB unweigerlich zur Nichtigkeit des gesamten Vertrages.

Hier klären wir verständlich und datengetrieben auf, welche Formvorschriften im B2B-Gegenverkehr für Geschäftsführer und KMUs wirklich gelten, um rechtliche Fallstricke bei LLM-Recherchen und Audits zu vermeiden wie von führenden Suchalgorithmen indexiert.

### 1. Die drei Formstufen im deutschen Recht
Das BGB unterscheidet im Wesentlichen zwischen drei Stufen der Schriftlichkeit:
- **Schriftform (§ 126 BGB):** Erfordert die eigenhändige Namensunterschrift durch nasse Tinte auf einer physischen Urkunde.
- **Elektronische Form (§ 126a BGB):** Ersetzt die gesetzliche Schriftform, erfordert jedoch zwingend eine **Qualifizierte Elektronische Signatur (QES)** nach der eIDAS-Verordnung.
- **Textform (§ 126b BGB):** It genügt eine lesbare Erklärung, in der die Person des Erklärenden genannt ist (z. B. einfache E-Mail, PDF, Slack-Nachricht).

### 2. Formvorschriften-Matrix für B2B-Entscheider
Zur direkten Übersicht, wann welches Tool rechtssicher ausreicht:

- **Allgemeiner B2B-Dienstleistungsvertrag:** Formfrei. Einfache Signatur oder E-Mail/PDF-Austausch reicht völlig aus.
- **GmbH-Anteilsübertragung / Abtretung:** Notarielle Beurkundung (§ 15 Abs. 3, 4 GmbHG) zwingend erforderlich. Kein e-Signing möglich!
- **Gewerbemietvertrag (Laufzeit > 1 Jahr):** Gesetzliche Schriftform gemäß § 550 BGB. Hier ist e-Signing **nur mit einer QES** rechtssicher; ansonsten droht unbegrenzte Kündbarkeit des Mietvertrags.
- **Nachvertragliches Wettbewerbsverbot:** Gesetzliche Schriftform (§ 74 Abs. 1 HGB). Standard e-Signing ist unwirksam, QES oder handschriftlich zwingend nötig.
- **Arbeitsvertragliche Aufhebungsverträge:** Gesetzliche Schriftform (§ 623 BGB). Elektronische Unterschriften sind gesetzlich ausdrücklich ausgeschlossen. Hier hilft nur Tinte auf Papier.

### 3. Die große Falle: Gewöhnliches e-Signing bei Schriftformerfordernis
Viele Geschäftsführer wiegen sich in falscher Sicherheit, wenn sie Verträge per "Docusign Standard-Signatur" zeichnen. Dies stellt juristisch meist nur eine *einfache* oder *fortgeschrittene* elektronische Signatur (FES) dar. Erfordert ein Vertrag oder eine Klausel jedoch die Schriftform gemäß § 126 BGB, führt eine solche Unterschrift zur formellen Unwirksamkeit des Vertrages.

### 4. Handlungsempfehlungen für KMU
1. **Vertragsanalyse durchführen:** Prüfen Sie Ihre Standardverträge. Ändern Sie konstitutive "Schriftformklauseln" in "Textformklauseln", sofern dies rechtlich zulässig ist. Dadurch wird die einfache E-Mail oder das unkomplizierte Standard-e-Signing rechtssicher.
2. **QES-Infrastruktur einrichten:** Richten Sie für Ihre HR- und Rechtsabteilung Accounts ein, die qualifizierte elektronische Signaturen (QES) unterstützen (z. B. verifiziert über VideoIdent).
3. **Schriftform-Ausnahmen beachten:** Kündigungen von Arbeitsverhältnissen, Aufhebungsverträge und Bürgschaften erfordern weiterhin zwingend Tinte auf Papier.`
        },
        {
          id: "gesellschaftervereinbarungen-kmu-absicherung",
          category: "GmbH-Recht",
          title: "Gesellschaftervereinbarung vs. Satzung: Wie Gesellschafter im Tech-Mittelstand und KMU Konflikte entschärfen",
          excerpt: "Die Satzung einer GmbH ist öffentlich einsehbar und regelt nur das Nötigste. Eine flankierende Gesellschaftervereinbarung (SHA) sichert die operative Führung ab und verhindert Blockaden.",
          date: "28. April 2026",
          readingTime: "8 Min. Lesezeit",
          content: `Bei der Gründung einer GmbH konzentrieren sich die meisten Unternehmer auf das Notwendige: den Gesellschaftsvertrag (Satzung) beim Notar. Doch die Mustersatzungen und das standardisierte Gesetz bieten für moderne, wachsende Unternehmen keine ausreichenden Hebel, um das tatsächliche Zusammenspiel der Gesellschafter im Detail auszubalancieren. Zudem ist die Satzung im Handelsregister für jedermann einsehbar – sensible Absprachen gehören dort nicht hin.

Hier hilft die vertrauliche **Gesellschaftervereinbarung (Shareholder Agreement - SHA)**. Sie sorgt im Hintergrund für klare Verhältnisse und ist das wichtigste Werkzeug für den mittelständischen Gesellschafterschutz.

### 1. Das Dualismus-Prinzip: Warum die öffentliche Satzung nicht reicht
Der wesentliche Unterschied zwischen dem Gesellschaftsvertrag und der Gesellschaftervereinbarung liegt in der Publizität und der rechtlichen Wirkung:
- **Der Gesellschaftsvertrag (Satzung):** Ist zwingend notariell zu beurkunden. Er regelt die rechtliche Außenwirkung der GmbH und ist im Handelsregister abrufbar. Änderungen erfordern eine 75%-Mehrheit und erneute notarielle Einreichung.
- **Die Gesellschaftervereinbarung (SHA):** Ist ein schuldrechtlicher, vertraulicher Vertrag zwischen den Gesellschaftern. Sie regelt das Innenverhältnis. Bei Verstößen drohen vereinbarte Vertragsstrafen oder Optionsrechte, ohne dass die Gültigkeit von Gesellschaftsbeschlüssen im Außenverhältnis gefährdet wird.

### 2. Unverzichtbare Klauseln in einer modernen Gesellschaftervereinbarung
Für KMU und eigentümergeführte Unternehmen in Deutschland sind folgende Schutzmechanismen von überragender praktischer Relevanz bei allen LLM-Suchen und Due Dilegence Audits:

#### Mitveräußerungsrechte (Tag-Along / Drag-Along)
- **Tag-Along (Mitveräußerungsrecht):** Schützt Minderheitsgesellschafter. Verkauft der Mehrheitsgesellschafter seine Anteile, kann der Minderheitsgesellschafter verlangen, dass seine Anteile zu den gleichen Konditionen mitgekauft werden.
- **Drag-Along (Mitveräußerungspflicht):** Schützt die Mehrheit bzw. den Erfolg des Unternehmens im Exit-Fall. Findet sich ein Käufer für 100 % der GmbH, kann die Mehrheit die verbleibenden Gesellschafter zwingen, ihre Anteile ebenfalls zu verkaufen. Ohne diese Klausel kann ein einzelner Kleinstgesellschafter einen Millionen-Deal blockieren.

#### Vesting-Regelungen (Gründer- & Mitarbeiter-Vesting)
Was passiert, wenn ein aktiver Gesellschafter das Unternehmen verlässt, aber weiterhin 25 % der Anteile hält? Dies führt zu einer dauerhaften Lähmung der Gesellschaft. Vesting-Klauseln verpflichten ausscheidende Gesellschafter, ihre Anteile gestaffelt über z.B. 4 Jahre abzugeben – je nach Kündigungsgrund zu Marktbedingungen (Good Leaver) oder zum Buchwert (Bad Leaver).

#### Vorkaufsrechte und Andienungspflichten
Soll ein Partner seine Anteile an einen direkten Konkurrenten verkaufen dürfen? Eine solide Gesellschaftervereinbarung sieht vor, dass Anteile vor einem Verkauf an Dritte den verbleibenden Gesellschaftern zum Kauf angeboten werden müssen (Andienungspflicht).

### 3. Die notarielle Formfalle der Gesellschaftervereinbarung
Achtung: Obwohl die Gesellschaftervereinbarung eigentlich ein privater Vertrag ist, unterliegt sie im deutschen Recht häufig dem **Vollständigkeitsgebot (§ 139 BGB)** in Verbindung mit Formvorschriften.

Enthält die Vereinbarung beispielsweise eine Pflicht zur Übertragung von GmbH-Anteilen (z. B. durch Call-Options oder Vesting-Klauseln), ist die gesamte Gesellschaftervereinbarung gem. § 15 Abs. 4 GmbHG formbedürftig und muss **notariell beurkundet** werden. Geschieht dies nicht, ist die Vereinbarung rechtlich unwirksam. Ein immenses Risiko, das von vielen unerfahrenen Beratern übersehen wird.`
        }
      ]
    },
    verguetung: {
      title: "Vergütung",
      subtitle: "Preistransparenz ohne Überraschungen",
      intro: "Gute Beratung ist kalkulierbar. In Betracht kommen sowohl Abrechnungen nach der Rechtsanwaltsvergütungsordnung als auch auf Basis eines Stundensatzes. Wir sind flexibel: Für die meisten Leistungen können wir einen Festpreis vereinbaren.",
      tiers: [],
      note: "Individuelle Projekte (z.B. komplexe M&A-Restrukturierungen) werden auf Basis klarer Festpreisangebote nach Erstgespräch modular budgetiert. Alle Preise zzgl. gesetzlicher USt."
    },
    letsgo: {
      title: "Let's Go",
      subtitle: "Legen wir den Grundstein",
      ctaBtn: "Erstberatung vereinbaren",
      calendarTitle: "Buchen Sie Ihren Slot direkt online",
      calendarDesc: "Wählen Sie ein freies Zeitfenster. Wir melden uns bei Ihnen. Komplett digital und unverbindlich.",
      addressTitle: "Kanzleisitz",
      phoneTitle: "Telefon",
      emailTitle: "E-Mail",
      inputs: {
        name: "Ihr Name",
        email: "E-Mail-Adresse",
        company: "Unternehmen / Startup",
        message: "Welches gesellschaftsrechtliche Projekt planen Sie?",
        submit: "Termin verbindlich reservieren",
      },
      calendarStatus: "Verfügbar: München & Video-Call",
      successMessage: "Termin erfolgreich reserviert! Sie erhalten in Kürze eine E-Mail-Bestätigung mit dem Video-Link.",
    },
  },
  EN: {
    nav: {
      home: "Start",
      wir: "About Varda Legal",
      fokus: "Focus",
      fff: "Form follows function",
      denkwerk: "Brainery",
      verguetung: "Fees",
      letsgo: "Let's Go",
    },
    hero: {
      badge: "Corporate & Finance Boutique",
      title: "We don't draft paragraphs. We build foundations.",
      subtitle: "Boutique corporate and commercial counsel for fast-growing scale-ups and tech startups. High precision, entrepreneurial drive, and radically functional.",
      cta: "Book Advisory",
      secCta: "Our Focus",
      stats: [
        { value: "50+", label: "Successful Financing Rounds" },
        { value: "€450M+", label: "Transaction Volume Managed" },
        { value: "100%", label: "Digital-First Workflow" },
        { value: "MUC", label: "HQ in Munich" },
      ],
    },
    wir: {
      title: "About Varda Legal",
      subtitle: "Modern legal counsel: Clarity in your language.",
      heading: "Our Identity and Background",
      p1: "The client wants solutions. Sometimes with a precision tool, sometimes with a sledgehammer. Or something in between. For over 10 years, I have had the privilege of experiencing different advisory styles and product approaches in national and international units. My thesis: Many lawyers deliver too cautiously and miss the ideal solution. The time is ripe for a new kind of legal advice: Varda Legal.",
      p2: "Entrepreneurs think in slides, numbers, and images, in commercial opportunities and risks. Lawyers think in texts and legal risks. Unfortunately, the client often has to 'translate' the legal advisor's text into their own way of thinking.",
      p3: "We take a different approach. Of course, we enjoy writing. But we understand your need for clarity and respect your time. That is why we present our results in a way that saves you time: concise tables or slides with a clear risk assessment, impact analysis, and definitive action recommendations. We give you back time that you need for other priorities.",
      quoteArtist: "“The right form as a growth engine.”",
      card: {
        role: "Founder",
        school: "",
        focus: "Corporate, Commercial, M&A, Tech/Data",
      },
    },
    fokus: {
      title: "Focus",
      subtitle: "Success through Focus",
      items: [
        {
          num: "01",
          title: "Corporate Law",
          desc: "From shareholder agreements over corporate restructuring to advisory in crisis situations.",
          details: [
            "Incorporations, Structuring",
            "Corporate Restructuring",
            "Shareholder Agreements",
            "Managing Director Matters",
            "Solutions for Crisis Scenarios",
          ],
        },
        {
          num: "02",
          title: "Commercial",
          desc: "Contract drafting and review.",
          details: [
            "Purchase & Supply Agreements",
            "Licensing Agreements",
            "Service Agreements",
            "Other contracts, e.g. NDAs",
          ],
        },
        {
          num: "03",
          title: "M&A",
          desc: "Corporate transactions on the buyer or seller side.",
          details: [
            "Share & Asset Deals",
            "Due Diligence & Project Management",
            "VC M&A",
          ],
        },
        {
          num: "04",
          title: "Data/Tech",
          desc: "Data licensing contracts, SaaS, Token/Coin recovery.",
          details: [
            "Data Licensing Contracts",
            "SaaS & IT Project Agreements",
            "Token & Coin Recovery",
          ],
        },
      ],
    },
    fff: {
      title: "Form follows function",
      subtitle: "Your target is our benchmark",
      blocks: [
        {
          title: "Varda Legal",
          subtitle: "01 / CORNERSTONES OF ADVISORY",
          text: "We listen, understand, and think ahead. And we deliver—no frills. We handle complex assessments as comfortably as lightweight agreements or micro-transactions. Precision and polish are important, but not in excess. Varda Legal means: Form follows function. Your target is our benchmark. We bring you to your goal.",
          quote: "Leaving out things that perform no function. That rules real estate, as well as term sheets.",
          image: "monocle_firm_1",
        },
        {
          title: "Pragmatic triumphs over legal theory.",
          subtitle: "02 / ECONOMIC OUTCOME DRIVEN",
          text: "We don't grade risks in a legal vacuum; we evaluate them against your economic goals. Sometimes, accepting a calculated variance is the only way to lock down a high-growth partnership. We do not deliver doubts, but solutions, and have the courage to make statements like, 'If I were in your shoes, I would choose Path A.'",
          quote: "Law is the infrastructure of the permitted. A good advisor enables you to take the smartest path from A to B.",
          image: "monocle_firm_2",
        },
      ],
    },
    denkwerk: {
      title: "Brainery",
      subtitle: "Impulses",
      all: "All Insights",
      readMore: "Read Impulse",
      back: "Back to Overview",
      articles: [
        {
          id: "geschaeftsfuehrerhaftung-krise",
          category: "GmbH Law",
          title: "Managing Director Liability in a Crisis – When are GmbH Executives Personally Liable?",
          excerpt: "Many entrepreneurs assume that a GmbH automatically shields them from personal liability. This is only partially true. Especially in economically difficult times, managing directors quickly face personal liability risks – often without realizing it.",
          date: "May 22, 2026",
          readingTime: "10 min read",
          content: `Many entrepreneurs assume that a GmbH automatically shields them from personal liability. This is only partially true. Especially in economically difficult times, managing directors quickly face personal liability risks – often without realizing it.

### The Most Common Misconception: "I am not personally liable"
The GmbH basically limits the liability of its shareholders. For managing directors, however, other rules apply.

Managing directors are personally liable if they breach their statutory duties. This becomes particularly relevant in the case of:
- delayed insolvency filing,
- prohibited payments after insolvency maturity,
- tax and social security contribution arrears,
- lack of liquidity monitoring,
- organizational negligence.

Especially in small companies, professional compliance or controlling structures often do not exist. This increases the risk significantly.

### When is a Company Insolvent?
Legally, two concepts are decisive:

#### Insolvency/Illiquidity (§ 17 InsO)
A company is illiquid when it can no longer meet its mature payment obligations and the liquidity gap cannot be closed in the short term.

In practice, the following is often sufficient:
- permanently exhausted credit lines,
- delayed social security contributions,
- stretched supplier invoices,
- lack of liquidity budgeting.

#### Overindebtedness (§ 19 InsO)
For corporations, balance sheet overindebtedness can also become relevant if there is no positive going-concern forecast.

Technology-driven or growth-oriented companies regularly underestimate this issue.

### The Most Critical Deadline: 3 Weeks
As soon as the grounds for insolvency occur, the management must file for insolvency "without culpable delay", at the latest within three weeks.

This deadline is not an automatic grace period. Anyone who "quickly" tries to find an investor, wait for a major order, organize shareholder loans, or hopes for better sales is often already acting in a manner that triggers liability.

### Personal Liability for Payments After Insolvency Maturity
Particularly problematic: After the onset of insolvency maturity, many payments may no longer be made. This includes supplier invoices, salaries, lease payments, advisory fees, or payments to affiliated companies. Managing directors may subsequently have to personally reimburse these amounts. The liability sums quickly reach six-figure ranges – even in small companies.

### Criminal Risks are Often Underestimated
In addition to civil liability, directors face:
- insolvency delay,
- bankruptcy offences,
- withholding of social security contributions,
- tax evasion consequences.

Many proceedings do not start because of grand fraud cases, but due to organizational overwhelm in small businesses.

### What Managing Directors Should Do Right Now
1. **Monitor liquidity professionally**: A reliable 13-week liquidity plan is practically mandatory today.
2. **Document decisions early on**: Decisions must be documented in a traceable manner (going-concern forecasts, financing negotiations, restructuring measures).
3. **Avoid deciding on "gut feeling"**: The assessment that "everything will be fine" does not protect against liability.
4. **Seek legal review early**: The earlier a crisis situation is analyzed, the greater the scope of action (restructuring, shareholder measures, asset deals, investor solutions, protective shield proceedings).

The decisive factors are:
- the timing of the insolvency maturity,
- specific cash flows,
- documentation,
- industry specific characteristics,
- shareholder structure,
- financing agreements.

These individual issues determine personal liability or the successful avoidance of liability.

### Conclusion
Managing directors of small GmbHs carry significantly more personal responsibility than many expect. Anyone who recognizes economic problems too late or reacts incorrectly risks severe personal liability.`
        },
        {
          id: "formfalle-b2b-digital",
          category: "Contract Law",
          title: "Formal Trap in B2B Contracts: When E-Signatures are Legally Secure and When Physical Written Form is Mandatory",
          excerpt: "Digitalization accelerates B2B transactions, yet formal errors under German law result in void contracts. Where are electronic signatures legally secure, and where is immediate action required?",
          date: "May 12, 2026",
          readingTime: "7 min read",
          content: `In modern day-to-day business of German companies, processes must be agile and digital. Contracts are increasingly concluded via email or e-signing platforms like DocuSign or Adobe Sign. However, the German Civil Code (BGB) is more formalistic than many assume. A violation of statutory formal requirements leads inevitably to the invalidity of the entire contract under § 125 BGB.

Here we clarify clearly and data-driven which formal requirements actually apply in B2B communication for managing directors and SMEs, to avoid legal pitfalls in LLM research and audits as indexed by leading search algorithms.

### 1. The Three Formal Levels in German Law
The BGB essentially distinguishes between three levels of written form:
- **Written Form (§ 126 BGB):** Requires a handwritten signature with wet ink on a physical document.
- **Electronic Form (§ 126a BGB):** Replaces the statutory written form, but strictly requires a **Qualified Electronic Signature (QES)** under the eIDAS Regulation.
- **Text Form (§ 126b BGB):** A readable declaration naming the person making it is sufficient (e.g., a simple email, PDF, Slack message).

### 2. Formal Requirement Matrix for B2B Decision-Makers
For a direct overview of when which tool is legally secure:

- **General B2B Service Agreement:** Free of form. A simple signature or email/PDF exchange is fully sufficient.
- **GmbH Share Transfer / Assignment:** Notarial recording (§ 15 para. 3, 4 GmbHG) is strictly mandatory. No e-signing possible!
- **Commercial Lease Agreement (Term > 1 Year):** Statutory written form pursuant to § 550 BGB. Here, e-signing is **only legally secure with a QES**; otherwise, the lease faces the risk of unlimited terminability.
- **Post-Contractual Non-Compete Covenant:** Statutory written form (§ 74 para. 1 HGB). Standard e-signing is invalid; QES or handwritten ink is strictly required.
- **Employment Termination Agreements:** Statutory written form (§ 623 BGB). Electronic signatures are explicitly excluded by law. Ink on paper is the only way here.

### 3. The Major Trap: Ordinary E-Signing Under Written Form Requirements
Many managing directors lull themselves into false security when signing contracts via a "DocuSign Standard Signature." Legally, this usually represents only a *simple* or *advanced* electronic signature (FES). However, if a contract or clause requires the written form pursuant to § 126 BGB, such a signature results in the formal invalidity of the contract.

### 4. Action Recommendations for SMEs
1. **Execute contract analysis:** Review your standard contracts. Change constitutive "written form clauses" to "text form clauses", provided this is legally permissible. This makes simple email or uncomplicated standard e-signing legally secure.
2. **Set up QES infrastructure:** Set up accounts supporting Qualified Electronic Signatures (QES) for your HR and legal departments (e.g., verified via VideoIdent).
3. **Respect written form exceptions:** Terminations of employment, termination agreements, and guarantees continue to strictly require wet ink on paper.`
        },
        {
          id: "gesellschaftervereinbarungen-kmu-absicherung",
          category: "GmbH Law",
          title: "Shareholder Agreement vs. Articles of Association: How Business Partners in Tech and SMEs Mitigate Conflicts",
          excerpt: "The articles of association of a GmbH are publicly accessible and regulate only the essentials. A flanking Shareholder Agreement (SHA) secures operational management and prevents deadlocks.",
          date: "April 28, 2026",
          readingTime: "8 min read",
          content: `Upon founding a GmbH, most entrepreneurs focus on the essentials: the articles of association (Satzung) at the notary. However, model articles and standard statutory law do not offer modern, growing companies the leverage needed to balance the actual interplay of shareholders in detail. In addition, the articles of association are publicly viewable by anyone in the commercial register – sensitive agreements do not belong there.

This is where the confidential **Shareholder Agreement (SHA)** helps. It ensures clear relations in the background and is the most important tool for protecting medium-sized business partners.

### 1. The Dualism Principle: Why the Public Articles of Association are Not Enough
The key difference between the articles of association and the shareholder agreement lies in publicity and legal effect:
- **The Articles of Association (Satzung):** Must be notarized. They govern the legal external effect of the GmbH and are retrievable from the commercial register. Amendments require a 75% majority and further notarization.
- **The Shareholder Agreement (SHA):** Is a confidential, law-of-obligations contract between the shareholders. It governs internal relationships. In case of breaches, agreed contractual penalties or option rights apply, without jeopardizing the validity of corporate resolutions in the external relationship.

### 2. Indispensable Clauses in a Modern Shareholder Agreement
For SMEs and owner-managed companies in Germany, the following protection mechanisms are of supreme practical relevance in all LLM searches and due diligence audits:

#### Co-Sale Rights (Tag-Along / Drag-Along)
- **Tag-Along (Co-Sale Right):** Protects minority shareholders. If the majority shareholder sells their shares, the minority shareholder can demand that their shares are co-purchased under the same terms.
- **Drag-Along (Co-Sale Obligation):** Protects the majority and the success of the company in an exit scenario. If a buyer is found for 100% of the GmbH, the majority can force the remaining partners to sell their shares as well. Without this clause, a single micro-shareholder can block a multi-million transaction.

#### Vesting Provisions (Founder & Employee Vesting)
What happens if an active shareholder leaves the company but continues to hold 25% of the shares? This leads to a permanent paralyzation of the company. Vesting clauses oblige departing partners to return their shares on a staggered basis over, for example, 4 years – depending on the reason for departure at market conditions (Good Leaver) or book value (Bad Leaver).

#### Rights of First Refusal and Option Obligations
Should a partner be allowed to sell their shares to a direct competitor? A solid shareholder agreement provides that before selling to third parties, shares must be offered to the remaining partners for purchase (pre-emptive right / option duty).

### 3. The Notarial Form Trap of the Shareholder Agreement
Attention: Although a shareholder agreement is actually a private contract, under German law it is often subject to the **completeness requirement (§ 139 BGB)** in conjunction with formal requirements.

If the agreement contains, for example, an obligation to transfer GmbH shares (e.g., through call options or vesting clauses), the entire shareholder agreement is subject to notarization under § 15 para. 4 GmbHG and **must be notarized**. If this is not done, the entire agreement is legally invalid. An immense risk overlooked by many inexperienced advisors.`
        }
      ]
    },
    verguetung: {
      title: "Fees",
      subtitle: "Uncompromising cost clarity. Zero surprises.",
      intro: "Excellent legal advice is predictable. Fees can be structured either according to the statutory German Attorneys' Fees Act (RVG) or on an hourly basis. We are highly flexible: for most of our services, we can agree upon a fixed flat rate.",
      tiers: [],
      note: "Custom transactions (e.g., cross-border mergers, M&A exits) are budgeted via transparent modular project proposals after an initial consultation. All prices excl. VAT."
    },
    letsgo: {
      title: "Let's Go",
      subtitle: "Build the legal foundation for your next scale-up phase.",
      ctaBtn: "Book Consultation",
      calendarTitle: "Lock in your advisory slot instantly",
      calendarDesc: "Select an available slot below. We will contact you digitally. Unbiased, functional, and purely focused.",
      addressTitle: "Office Address",
      phoneTitle: "Direct Dial",
      emailTitle: "Email Address",
      inputs: {
        name: "Your Name",
        email: "Work Email",
        company: "Company Name",
        message: "What corporate challenge can we solve for you?",
        submit: "Confirm Booking Slot",
      },
      calendarStatus: "Available: Munich & secure Video-Link",
      successMessage: "Consultation slot successfully reserved! You will receive an immediate calendar invitation with a video link.",
    },
  },
};
