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
  faq?: { question: string; answer: string }[];
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
      phone: string;
      challenge: string;
      challengePlaceholder: string;
      preferredContact: string;
      contactCallback: string;
      contactVideo: string;
      contactEmail: string;
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
      wir: "Unser Ansatz",
      fokus: "Fokus",
      fff: "Form follows function",
      denkwerk: "Denkwerk",
      verguetung: "Vergütung",
      letsgo: "Let's Go",
    },
    hero: {
      badge: "Corporate/Commercial/M&A/Tech",
      title: "Klarheit für komplexe Entscheidungen.",
      subtitle: "Wir übersetzen tiefes juristisches Fachwissen in strategische Klarheit. Varda Legal reduziert Risiken, eliminiert Rauschen und schafft die Fundamente für Ihr unternehmerisches Wachstum.",
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
      title: "Unser Ansatz",
      subtitle: "Gute Entscheidungen beginnen mit Klarheit.",
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
          title: "Beteiligungen & Gesellschafter",
          desc: "Sichern Sie das Zusammenspiel der Gesellschafter ab. Wir regeln Rechte, Pflichten und Governance so, dass Sie sich voll auf den Unternehmenserfolg konzentrieren können und Konflikte gar nicht erst entstehen.",
          details: [
            "Gesellschaftervereinbarungen & Vesting",
            "Gründer- & Investoren-Alignment",
            "Geschäftsführerthemen & Organhaftung",
            "Strukturierung & Umwandlungen",
            "Disputprävention & Konfliktlösung",
          ],
        },
        {
          num: "02",
          title: "Verträge für Wachstum",
          desc: "Rechtliche Leitplanken für Ihren operativen Erfolg. Wir entwerfen und prüfen Verträge, die Ihre Commercials stärken, Risiken in der Lieferkette deckeln und Ihr Business skalierbar machen.",
          details: [
            "Kauf- & Lieferantenvereinbarungen",
            "Gewerbliche Verträge & Kooperationen",
            "Vertragsprüfung & Risikominimierung",
            "Skalierbare AGB & Standardverträge",
            "Vertriebs- & Partnerschaftsverträge",
          ],
        },
        {
          num: "03",
          title: "Unternehmen kaufen & verkaufen",
          desc: "Erfolgreiche Exits und strategische Zukäufe. Wir begleiten Sie durch den gesamten Transaktionsprozess – von der Due Diligence über die Vertragsgestaltung bis hin zum schlüsselfertigen Closing.",
          details: [
            "Share Deals & Asset Deals",
            "Verkäuferseitige Beratung & Founder Exits",
            "Käuferseitige Due Diligence",
            "Transaktionsmanagement & Verhandlung",
            "Post-Merger Integration & Abwicklung",
          ],
        },
        {
          num: "04",
          title: "Software, Daten & KI",
          desc: "Regulierung beherrschen, IP sichern. Wir strukturieren Ihre IT-Projekte, Lizenzmodelle und Datenströme so, dass Innovation geschützt bleibt und Sie technologische Meilensteine rechtssicher erreichen.",
          details: [
            "Software- & SaaS-Vereinbarungen",
            "Lizenz- & Vertriebsstrukturen",
            "Datenlizenzvereinbarungen",
            "Kryptorechtfragen, Tokenarchitektur",
            "IT-Projektverträge & Outsourcing",
          ],
        },
      ],
    },
    fff: {
      title: "Form follows function",
      subtitle: "Rechtliche Klarheit für unternehmerische Entscheidungen",
      blocks: [
        {
          title: "Verträge, die Ihr Wachstum stützen.",
          subtitle: "01 / STRUKTURIERTE TRANSAKTIONEN",
          text: "Ein robuster Gesellschaftervertrag oder eine präzise ausgehandelte Finanzierungsrunde ist kein akademisches Selbstzweck-Dokument – es ist das Fundament Ihres Geschäfts. Wir verhandeln Ihre Commercials, Lieferantenverträge und M&A-Projekte mit kaufmännischem Verstand. Präzision im Detail paart sich mit unternehmerischem Fokus: Wir sichern Risiken rechtlich ab, ohne den Deal durch unnötige juristische Grabenkämpfe zu blockieren. Am Ende zählt der wirtschaftliche Erfolg, nicht die theoretische Abhandlung.",
          quote: "Ein guter Vertrag ist wie eine präzise gezeichnete Maschine – er läuft geräuschlos im Hintergrund und sichert Ihre Handlungsfähigkeit, wenn Konflikte entstehen.",
          image: "monocle_firm_1",
        },
        {
          title: "Pragmatisch führen. Risiken klug beherrschen.",
          subtitle: "02 / KLARE RISIKOBEWERTUNG",
          text: "Wir bewerten rechtliche Risiken nie in einem theoriegeleiteten Vakuum, sondern übersetzen sie direkt in Handlungsoptionen für Geschäftsführer und Gesellschafter. Ob bei einem komplexen Gesellschafterstreit, einem anstehenden Unternehmensverkauf, dem Founder Exit oder harten Verhandlungen von Abnahme- und Lieferantenvereinbarungen – wir liefern keine endlosen Abwägungen, sondern konkrete Eintrittswahrscheinlichkeiten und messbaren wirtschaftlichen Impact. So treffen Sie fundierte, kaufmännisch pragmatische Entscheidungen.",
          quote: "Das Recht ist der Rahmen des Möglichen. Ein exzellenter juristischer Berater zeigt Ihnen den klügsten unternehmerischen Weg, um darin Ihre Ziele zu erreichen.",
          image: "monocle_firm_2",
        },
      ],
    },
    denkwerk: {
      title: "Denkwerk",
      subtitle: "Impulse",
      all: "Perspektiven",
      readMore: "Perspektive öffnen",
      back: "Zurück zur Übersicht",
      articles: [
        {
          id: "der-unternehmensverkauf",
          category: "01 / Entscheidungen",
          title: "Der Unternehmensverkauf",
          excerpt: "Ein Unternehmenskauf beginnt mit Dokumenten. Er endet mit Vertrauen. Viele Unternehmer glauben, ein erfolgreicher Unternehmensverkauf beginne mit dem ersten Gespräch mit einem Kaufinteressenten.",
          date: "",
          readingTime: "9 Min. Lesezeit",
          content: `Ein Unternehmenskauf beginnt mit Dokumenten. Er endet mit Vertrauen.

Viele Unternehmer glauben, ein erfolgreicher Unternehmensverkauf beginne mit dem ersten Gespräch mit einem Kaufinteressenten, dem Letter of Intent oder auch der Due Diligence. Tatsächlich legen sie den Grundstein eines erfolgreichen Unternehmensverkaufs viel früher, häufig Jahre früher. Denn professionelle Käufer wollen nicht nur verstehen, was sie kaufen. Sie wollen verstehen, wie belastbar das Unternehmen ist, das sie kaufen. Und genau deshalb prüfen sie nicht nur Verträge, Zahlen und Gesellschaftsunterlagen. Sie prüfen Vertrauen.

### Ein guter Datenraum entsteht Jahre vor dem Verkauf

Die meisten Probleme einer Due Diligence entstehen nicht während der Due Diligence, sondern Jahre zuvor. Verträge wurden nie zentral abgelegt, Gesellschafterbeschlüsse lassen sich nicht vollständig nachvollziehen, Rechte an Software wurden nie sauber auf die Gesellschaft übertragen. Möglicherweise hat ein ehemaliger Freelancer wesentliche Teile eines Produkts entwickelt, ohne dass die Rechteübertragung eindeutig dokumentiert wurde.

Im Tagesgeschäft bleiben solche Themen häufig unbemerkt. Spätestens während einer Transaktion werden sie sichtbar. Nicht weil professionelle Käufer Perfektion erwarten. Sondern weil sie verstehen wollen, welche Risiken sie übernehmen. Ein fehlender Vertrag führt nicht zwangsläufig zu einem rechtlichen Problem. Er führt zunächst zu einer Frage. Mehrere offene Fragen führen zu weiteren Nachfragen. Und viele Nachfragen können dazu führen, dass sich die Aufmerksamkeit des Käufers vom attraktiven Zielunternehmen auf dessen Risiken verlagert. Deshalb entsteht ein „guter Datenraum“ nicht während eines Verkaufsprozesses, sondern davor. Eine saubere Dokumentation reduziert nicht nur Rückfragen. Sie kann sich auch wirtschaftlich auswirken, etwa über die Kosten einer Transaktionsversicherung.

Käufer prüfen das Unternehmen. Und den Verkäufer. Sie beobachten, wie Informationen bereitgestellt werden. Wie mit Problemen umgegangen wird. Wie schnell Rückfragen beantwortet werden. Ob kritische Themen offen angesprochen werden. Ob Zusagen eingehalten werden.

Viele Unternehmer betrachten die Due Diligence ausschließlich als Prüfung ihres Unternehmens. In der Praxis prüfen Käufer häufig gleichzeitig, wie verlässlich ihr zukünftiger Vertragspartner agiert. Das ist nachvollziehbar. Denn nach Unterzeichnung des Kaufvertrags verschwinden Risiken nicht. Sie verändern lediglich ihre Form. Vertrauen entsteht nicht durch Perfektion, sondern durch Transparenz.

„Ein Unternehmenskauf beginnt mit Dokumenten. Er endet mit Vertrauen.“

### Gesunde Dynamik ist ein Asset

Verkaufsprozesse leben von Dynamik. Und Dynamik geht häufig schneller verloren, als Unternehmer erwarten.

Professionelle Käufer beobachten und prüfen regelmäßig mehrere Unternehmen gleichzeitig. Mit zunehmender Konkretisierung einer Transaktion verlagert sich der Fokus typischerweise auf einzelne Zielunternehmen.

Wenn ein Verkäufer nicht im richtigen Tempo und nicht mit der richtigen Priorität mitzieht, kann sich der Käufer bereits mit einem anderen Projekt beschäftigen. Deshalb lohnt es sich, Themen sinnvoll zu priorisieren. Manche Diskussionspunkte können in der Summe die Wahrscheinlichkeit eines erfolgreichen Abschlusses gefährden und die wenigsten Themen rechtfertigen einen Grundsatzstreit. Transaktionen gewinnen selten an Qualität, weil jedes Detail maximal ausverhandelt wurde. Sie gewinnen an Qualität, wenn die Beteiligten erkennen, welche Themen wirklich entscheidend sind und entsprechend handeln.

### Der richtige Käufer kann wichtiger sein als der höchste Kaufpreis

Unternehmer konzentrieren sich verständlicherweise auf den Kaufpreis. Der Käufer verdient in vielen Fällen dieselbe Aufmerksamkeit. Gerade bei technologieorientierten Unternehmen hängt der langfristige Erfolg einer Transaktion häufig von einzelnen Personen ab. Schlüsselmitarbeiter verfügen über technisches Wissen, Ansätze zur Tech-Architektur oder operative Erfahrung, die sich nicht ersetzen lässt. Wirtschaftlich kauft der Käufer dann nicht nur die Software, sondern die Software und deren Fortentwicklung durch Schlüsselmitarbeiter. Deshalb verlangen Erwerber von Tech-Unternehmen regelmäßig, dass bestimmte Personen nach Vollzug der Transaktion im Unternehmen verbleiben und machen dies nachvollziehbarerweise zur Bedingung für den Vollzug der Transaktion.

So bestand in einer Transaktion auf Käuferseite ein erhebliches Interesse am Verbleib bestimmter Schlüsselpersonen. Die Herausforderung lag nicht in der rechtlichen Ausgestaltung der Bindung. Die Herausforderung bestand darin, dass die Unternehmenskultur des Käufers von zwei betroffenen Schlüsselmitarbeitern kritisch gesehen wurde. Der Verkäufer musste deshalb erhebliche zusätzliche wirtschaftliche Anreize schaffen, um den Verbleib dieser Personen sicherzustellen. Der Fall zeigt ein Muster, das in Verkaufsprozessen von Techunternehmen regelmäßig unterschätzt wird: Der Käufer kauft das Unternehmen. Menschen im Unternehmen, die nicht gleichzeitig Gesellschafter des Unternehmens sind, entscheiden selbst, ob sie bleiben. Ein Käufer kann den höchsten Kaufpreis bieten. Und gleichzeitig als Erwerber des Zielunternehmens weniger gut geeignet sein als ein Interessent, der weniger bietet (und sich nach frühzeitigem Ausscheiden aus dem Bieterprozess bereits auf ein anderes Zielunternehmen konzentriert).

Deshalb lohnt es sich, Kaufinteressenten genauso sorgfältig zu prüfen wie diese das Zielunternehmen. Der höchste Kaufpreis ist nicht immer das beste Angebot.

### Welche Unterlagen professionelle Käufer zuerst sehen wollen

Professionelle Käufer interessieren sich regelmäßig zuerst für dieselben Themen.

Sie wollen u.a. verstehen,
- Wie generiert das Zielunternehmen Umsatz, wo ist Raum für Effizienzoptimierung nach der Integration des Zielunternehmens?
- Gehören dem Zielunternehmen alle für dessen Geschäftsmodell wesentlichen Assets?
- Wer trägt das operative Wissen, falls diesem eine besondere Bedeutung zukommt?

Deshalb und auch zur Beurteilung rechtlicher Risiken stehen häufig folgende Unterlagen besonders früh im Fokus:
- Kundenverträge
- Lieferantenverträge
- Software- und Lizenzverträge
- Arbeits- und Anstellungsverträge von Schlüsselpersonen
- Gesellschaftervereinbarungen
- Finanzierungsunterlagen
- Dokumentationen zu Marken, Software und sonstigem geistigem Eigentum, bei Algorithmen als Asset insbesondere deren Schutz.

Unsicherheiten kosten selten den Deal als Ganzes. Häufiger kosten sie Geld. Fehlende Dokumentation führt nicht automatisch zum Scheitern einer Transaktion. Aber sie verändern die Verhandlungsposition. Der Käufer fordert zusätzliche Garantien. Risiken werden stärker auf den Verkäufer verlagert. Kaufpreisbestandteile werden zurückbehalten. Oder bestimmte Themen werden zu Bedingungen für den Vollzug der Transaktion. Unsicherheit führt deshalb häufig nicht zum Abbruch eines Verkaufsprozesses. Sie beeinflusst jedoch regelmäßig dessen wirtschaftliches Ergebnis.

### Viele Risiken lassen sich versichern. Vertrauen nicht.

Ein erheblicher Teil von M&A-Verhandlungen dreht sich um die Absicherung gegen Risiken. Garantien für unbekannte Risiken. Freistellungen für bekannte Risiken. Haftungsausschlüsse, Haftungscaps, -baskets, sogenannte Mindestgrenzen. Dabei wird häufig übersehen, dass sich heute zahlreiche Risiken versichern lassen. Dies gilt teilweise sogar für Freistellungsverpflichtungen. Versicherungen können Risiken externalisieren. Sie können Unsicherheit reduzieren. Sie können Vertrauen nicht ersetzen. Fehlende Dokumentation, vermeidbare Konflikte, unklare Kommunikation, verlorene Dynamik. All diese Themen lassen sich vereinzelt auffangen, sollten aber gerade in ihrer Gesamtheit nicht unterschätzt werden.

### Fazit

Unternehmensverkäufe scheitern selten an einzelnen Vertragsklauseln: Sie scheitern häufiger daran, dass Unsicherheit Vertrauen verdrängt. Ein Unternehmenskauf beginnt mit Dokumenten. Er endet mit Vertrauen.`,
          faq: [
            {
              question: "Was ist eine Due Diligence?",
              answer: "Die Due Diligence ist die Prüfung eines Unternehmens vor einer Transaktion. Käufer prüfen dabei nicht nur Verträge, Finanzen oder rechtliche Risiken. Sie prüfen, ob die Informationen über das Unternehmen belastbar sind. Die Due Diligence dient der Risikobewertung. Gleichzeitig entscheidet sie darüber, ob Vertrauen zwischen Käufer und Verkäufer entsteht."
            },
            {
              question: "Welche Unterlagen gehören in einen Datenraum?",
              answer: "Ein Datenraum enthält die Informationen, die ein Käufer benötigt, um ein Unternehmen zu verstehen und Risiken zu bewerten. Dazu gehören insbesondere Gesellschaftsunterlagen, Kunden- und Lieferantenverträge, Arbeitsverträge von Schlüsselpersonen, Finanzierungsunterlagen sowie Dokumentationen zu Software, Marken und sonstigem geistigem Eigentum. Die entscheidende Frage lautet jedoch nicht, wie viele Dokumente vorhanden sind. Entscheidend ist, ob die Dokumente die wesentlichen Fragen des Käufers beantworten."
            },
            {
              question: "Wann beginnt die Vorbereitung eines Unternehmensverkaufs?",
              answer: "Die Vorbereitung eines Unternehmensverkaufs beginnt letztlich häufig Jahre vor dem eigentlichen Verkaufsprozess. Verträge, Gesellschafterbeschlüsse, IP-Dokumentation und interne Prozesse entstehen nicht während der Due Diligence. Je früher ein Unternehmen seine Dokumentation sinnvoll strukturiert, desto geringer ist das Risiko, dass während einer Transaktion Unsicherheit entsteht."
            },
            {
              question: "Was ist wichtiger: Kaufpreis oder der richtige Käufer?",
              answer: "Der Kaufpreis ist wichtig. Er ist aber nie isoliert zu betrachten, sondern im Zusammenspiel mit dem Haftungskonzept. In Techtransaktionen kann der richtige Käufer eine hohe Bedeutung haben: Denn ein hoher Kaufpreis verliert an Bedeutung, wenn eine Transaktion nicht vollzogen wird."
            }
          ]
        },
        {
          id: "vertraege-organisation",
          category: "02 / Verträge",
          title: "Die Qualität eines Vertrags wird häufig entschieden, bevor der Anwalt den Vertrag sieht",
          excerpt: "Die Qualität eines Vertrags wird häufig entschieden, bevor der Anwalt den Vertrag sieht. Der Kunde wartet auf die Unterschrift, das Quartalsende rückt näher.",
          date: "",
          readingTime: "8 Min. Lesezeit",
          content: `Der Kunde wartet auf die Unterschrift.

Das Quartalsende rückt näher.

Die wirtschaftlichen Eckpunkte sind längst verhandelt.

Zwei Stunden vor dem Signing landet der Vertrag erstmals beim Anwalt.

Viele Vertragsrisiken entstehen genau in diesem Moment.

Viele Unternehmen glauben, dass gute Verträge vor allem durch gute Anwälte entstehen. In der Praxis ist das nur teilweise richtig.

Natürlich können juristische Erfahrung, Verhandlungsgeschick und saubere Vertragsgestaltung einen erheblichen Unterschied machen. Die Qualität eines Vertrags wird jedoch häufig lange vorher entschieden.

Nicht am Verhandlungstisch.

Nicht im Redlining.

Nicht in der letzten E-Mail vor der Unterschrift.

Sondern in den Prozessen eines Unternehmens.

### Zwei Funktionen eines Vertrags

Verträge erfüllen in der Praxis regelmäßig zwei Funktionen.

Erstens dokumentieren sie eine Vereinbarung. Das ist wichtig für steuerliche Zwecke, für die Buchhaltung und für die Beteiligten selbst. Wer Monate später auf eine Verhandlung zurückblickt, erinnert sich häufig nicht mehr an jedes Detail der ursprünglichen Gespräche.

Zweitens erfüllen Verträge eine Versicherungsfunktion. Sie regeln, wer welches Risiko trägt, wenn etwas nicht wie geplant verläuft.

Genau hier zeigt sich die Qualität eines Vertrags.

Denn die Versicherungsfunktion eines Vertrags wird häufig erst sichtbar, wenn bereits ein Problem entstanden ist. Zu diesem Zeitpunkt ist es jedoch meist zu spät, grundlegende Entscheidungen noch zu korrigieren.

### Warum schlechte Verträge häufig keine Folgen haben

Die meisten Vertragsrisiken verwirklichen sich nie.

Das ist einer der Gründe, weshalb Unternehmen die Bedeutung von Verträgen regelmäßig unterschätzen.

Ein Vertrag kann erhebliche rechtliche Schwächen enthalten und trotzdem über Jahre hinweg problemlos funktionieren. Solange beide Parteien zufrieden sind, bleibt die Qualität des Vertrags häufig ungetestet.

Dadurch entsteht ein gefährlicher Eindruck.

Der Vertrag scheint gut zu sein, obwohl lediglich kein Problem eingetreten ist.

Genau deshalb werden Vertragsrisiken in Unternehmen regelmäßig unterschätzt.

### Das eigentliche Problem sind selten Verträge

In vielen Unternehmen entsteht Vertragsqualität nicht durch juristische Arbeit.

Sie entsteht durch Organisation.

Ein einfaches Beispiel:

Ein Vertriebsteam wird anhand des abgeschlossenen Umsatzes vergütet. Der Kunde wartet auf die Unterschrift. Das Quartalsziel soll erreicht werden. Der Wettbewerb schläft nicht.

Unter diesen Umständen ist es vollkommen nachvollziehbar, dass Geschwindigkeit eine hohe Priorität besitzt.

Das Problem entsteht erst dann, wenn die Organisation keine Zeit mehr für eine echte rechtliche Prüfung lässt.

Denn an diesem Punkt verändert sich die Rolle des Beraters.

Aus einer rechtlichen Bewertung wird eine rechtliche Bestätigung.

Die wesentlichen wirtschaftlichen Entscheidungen wurden bereits getroffen. Der Anwalt soll sie nur noch absichern.

Genau an dieser Stelle entstehen viele Risiken.

Nicht weil jemand fahrlässig handelt.

Nicht weil die Beteiligten schlechte Entscheidungen treffen.

Sondern weil die Organisation keine andere Entscheidung mehr zulässt.

Die Qualität eines Vertrags wird selten durch die Person bestimmt, die den Vertrag schreibt.

Sie wird häufig durch die Person bestimmt, die entscheidet, wann der Vertrag geprüft wird.

Gute Verträge entstehen nicht am Verhandlungstisch. Sie entstehen in der Organisation.

### Warum selbst offensichtliche Formulierungen problematisch sein können

Wie leicht rechtliche Risiken entstehen können, zeigt ein Beispiel aus dem internationalen Warenverkehr.

Ein deutsches Unternehmen liefert Waren an ein französisches Unternehmen.

Der Vertrag enthält eine Rechtswahlklausel:

„Es gilt deutsches Recht.“

Für die meisten Unternehmer wirkt diese Formulierung eindeutig.

Viele gehen davon aus, dass damit ausschließlich die bekannten Regelungen des deutschen Zivilrechts gemeint sind.

Tatsächlich findet aufgrund dieser Formulierung im internationalen Warenkauf das sogenannte UN-Kaufrecht Anwendung.

Die Formulierung fühlt sich richtig an.

Sie wirkt klar.

Und genau deshalb wird sie häufig nicht hinterfragt.

Erst wenn später ein Streit entsteht, wird sichtbar, dass die rechtliche Ausgangslage von den Erwartungen der Parteien abweichen kann.

Das bedeutet nicht zwangsläufig einen hohen Schaden.

Es bedeutet jedoch häufig zusätzlichen Beratungsaufwand, höhere Komplexität und eine schlechtere Vorhersehbarkeit möglicher Streitigkeiten.

Vor allem zeigt das Beispiel etwas anderes:

Selbst scheinbar eindeutige Formulierungen können Risiken enthalten, die unter Zeitdruck leicht übersehen werden.

### Warum sich Vertragsqualität beim Unternehmensverkauf bemerkbar macht

Viele Vertragsrisiken bleiben über Jahre unsichtbar.

Bei einem Unternehmensverkauf ändert sich das.

Professionelle Käufer prüfen regelmäßig die wesentlichen Verträge eines Unternehmens.

Dabei geht es nicht nur um einzelne Klauseln.

Es geht um die Organisation hinter den Verträgen.

Käufer stellen sich Fragen:
- Werden Verträge systematisch geprüft?
- Werden Risiken bewusst akzeptiert oder zufällig übernommen?
- Existieren klare Freigabeprozesse?
- Sind wesentliche Verträge nachvollziehbar dokumentiert?

Je größer die Unsicherheit, desto mehr Rückfragen entstehen.

Je mehr Rückfragen entstehen, desto aufwendiger wird die Due Diligence.

Und je aufwendiger die Due Diligence wird, desto stärker geraten Vertrauen, Transaktionssicherheit und häufig auch wirtschaftliche Parameter unter Druck.

Die Qualität von Verträgen beeinflusst deshalb nicht nur Streitigkeiten.

Sie beeinflusst regelmäßig auch den Unternehmenswert.

### Was Unternehmen konkret tun können

Die wichtigsten Maßnahmen bestehen selten in besseren Vertragsmustern.

Die wichtigste Maßnahme besteht fast immer in besseren Prozessen.

Unternehmen sollten früh definieren,
- welche Verträge rechtlich geprüft werden müssen,
- wann diese Prüfung erfolgt,
- welche Informationen dafür erforderlich sind,
- und wer die Verantwortung für die Einbindung der relevanten Personen trägt.

Ebenso wichtig ist eine klare Kommunikation mit den Beratern.

Ein Rechtsanwalt kennt die Prioritäten eines Unternehmens nicht automatisch.

Manchmal ist Geschwindigkeit wichtiger als die Vermeidung jedes denkbaren Risikos.

Manchmal ist das Gegenteil richtig.

Beides kann wirtschaftlich sinnvoll sein.

Entscheidend ist, dass Risiken bewusst bewertet werden.

Denn nur dann handelt es sich um eine Entscheidung.

Nicht um einen Zufall.

### Fazit

Viele Unternehmen investieren erhebliche Zeit in Vertragsverhandlungen.

Deutlich seltener investieren sie in die Prozesse, die diesen Verhandlungen vorausgehen.

Dabei entsteht die Qualität eines Vertrags häufig lange vor seiner Unterzeichnung.

Der entscheidende Hebel liegt nicht im Vertrag.

Der entscheidende Hebel liegt in der Organisation.

Gute Verträge entstehen nicht durch bessere Klauseln.

Gute Verträge entstehen durch bessere Prozesse.

Und deshalb wird die Qualität eines Vertrags häufig entschieden, bevor der Anwalt den Vertrag sieht.`,
          faq: [
            {
              question: "Warum entsteht Vertragsqualität durch Organisation?",
              answer: "Die Person, die einen Vertrag entwirft, reagiert auf Vorgaben und Rahmenbedingungen. Wenn die Organisation dem Rechtsberater kaum Zeit lässt, die wesentlichen kommerziellen Parameter zu prüfen oder Risiken abzuwägen, wird aus einer Bewertung eine bloße formale Bestätigung. Die Organisation entscheidet, wann und unter welchen Prämissen Verträge geprüft werden."
            },
            {
              question: "Was ist der Unterschied zwischen Dokumentations- und Versicherungsfunktion?",
              answer: "Die Dokumentationsfunktion hält fest, was vereinbart wurde (wichtig für Buchhaltung und Steuer). Die Versicherungsfunktion regelt, wer das Risiko trägt, wenn etwas schiefgeht. Fehler in der Versicherungsfunktion zeigen sich erst, wenn ein Problem auftritt – dann ist es meist zu spät für Korrekturen."
            },
            {
              question: "Warum wirken sich Verträge auf den Unternehmenswert aus?",
              answer: "Bei einer Due Diligence im Rahmen eines Unternehmensverkaufs bewerten professionelle Käufer nicht nur einzelne Klauseln, sondern die Systematik dahinter. Unsicherheiten durch fehlende oder lückenhafte Verträge führen zu Nachfragen, mindern das Vertrauen und führen zu Kaufpreisabschlägen, Garantieforderungen oder Einbehalten."
            }
          ]
        },
        {
          id: "token-recovery-kontrolle",
          category: "03 / Technologie",
          title: "Token-Recovery: Der Token ist nicht verloren. Die Kontrolle ist verloren.",
          excerpt: "Token-Recovery betrifft Fälle, in denen ein Token auf einer Wallet eines Kryptoverwahrers liegt, aber nicht genutzt werden kann. Die eigentliche Frage lautet häufig nicht, wo sich der Token befindet. Sondern wer verpflichtet ist, die nächste Transaktion zu ermöglichen.",
          date: "",
          readingTime: "7 Min. Lesezeit",
          content: `Viele Token-Recovery-Fälle in Distributed-Ledger-Netzwerken beginnen mit einem Missverständnis: Die Token-Transaktion ist im Netzwerk korrekt dokumentiert. Der Token wurde erfolgreich an die Wallet des Kunden übertragen. Und trotzdem kann der Kunde nichts damit anfangen. Denn: Der Kunde nutzt die Wallet eines Kryptoverwahrers. Und diese App zeigt den Token nicht an. Der Kunde kann den Token deshalb nicht übertragen, nicht verkaufen, nicht nutzen. Das Problem liegt in der Kontrolle über die Wallet.

### Wer beherrscht das Problem?

Nehmen wir einen typischen Fall: Ein Kunde hält Kryptowerte bei einem Kryptoverwahrer. An seine Wallet-Adresse sendet er einen Token, der vom Verwahrer nicht unterstützt wird. Die Blockchain (oder andere Distributed-Ledger-Technologie) verarbeitet die Transaktion problemlos. Der Token befindet sich auf der Wallet-Adresse. Der Kunde kann ihn trotzdem nicht bewegen. Der Grund ist einfach: Der Kunde kontrolliert die Wallet nicht selbst. Allein sein Kryptoverwahrer, meist in Gestalt einer App, kontrolliert das Schlüsselpaar, mit dem Transaktionen im Netzwerk signiert werden müssen, um ausgeführt zu werden. Nur wer das Schlüsselpaar hält, kann Transaktionen ausführen. An diesem Punkt entsteht die eigentliche Frage: Wer beherrscht das Problem, wer kann es beseitigen?

### Das Geschäftsmodell von Kryptoverwahrern

Viele Nutzer verbinden Wallets mit Eigenkontrolle. Bei der Kryptoverwahrung verhält es sich häufig anders. Der Verwahrer übernimmt die technische Infrastruktur. Er verwahrt die kryptographischen Schlüssel. Er schützt vor Verlust. Er vereinfacht die Nutzung. Genau dafür bezahlt der Kunde. Diese Arbeitsteilung schafft Komfort. Sie schafft aber auch Abhängigkeit.

Der Kunde bleibt im Grundsatz wirtschaftlich Berechtigter aller Assets, die mithilfe der Schlüssel bewegt werden können, während die tatsächliche Kontrolle über die Schlüssel beim Verwahrer liegt.

Solange beide Seiten dieselben Interessen verfolgen, fällt das kaum auf. Kompliziert wird es erst dann, wenn der Kunde eine Transaktion durchführen möchte, die der Verwahrer technisch oder organisatorisch nicht vorgesehen hat.

### Token-Recovery-Fälle sind keine Technologie-Probleme

Wer sich erstmals mit solchen Fällen beschäftigt, sucht häufig nach einem technischen Fehler. Das Problem liegt aber an anderer Stelle. Das Distributed-Ledger-Netzwerk funktioniert.

Das Hindernis besteht auf Ebene des Verwahrers. Die App des Verwahrers zeigt die faktische Kontrolle über den Token nicht an, die Software unterstützt den Token nicht. Interne Prozesse sehen keinen Recovery-Prozess vor. Oder (und das ist häufig der Fall): Die Bearbeitung verursacht Aufwand, den der Verwahrer vermeiden möchte. Die eigentliche Auseinandersetzung dreht sich deshalb häufig nicht um Technologie. Sie dreht sich um Verantwortung.

„Token-Recovery-Fälle sind keine Technologie-Probleme. Sie sind Verantwortungsprobleme.“

### Besteht ein Anspruch auf Übertragung?

Eine ausdrückliche gesetzliche Regelung für diese Konstellation existiert nicht. Die bloße Tatsache, dass ein Token nicht unterstützt wird, beantwortet die Anspruchsfrage noch nicht.

Dennoch spricht vieles dafür, dass ein Anspruch des Kunden auf Mitwirkung der App bei der Übertragung des Tokens besteht. Der Token „klebt“ an einer Wallet, deren Assets wirtschaftlich im Grundsatz ausschließlich dem Kunden gehören. Kontrolle über die Assets hat aber letztlich der Kryptoverwahrer, weil nur er Inhaber der kryptographischen Schlüssel ist. Die technische Möglichkeit zur Übertragung besteht häufig weiterhin. Dann stellt sich die Frage, aus welchem Grund der Verwahrer die Übertragung verweigern darf. Wer die technische Kontrolle ausübt, muss sich regelmäßig auch die Frage gefallen lassen, welche Pflichten mit dieser Kontrolle verbunden sind. Genau an dieser Stelle verlaufen die entscheidenden Argumentationslinien.

### Die Rolle der AGB

Kryptoverwahrer kennen dieses Problem. Deshalb finden sich in den Nutzungsbedingungen häufig Regelungen zu nicht unterstützten Token, zur Haftungsbegrenzung oder explizit zur Token-Recovery. Diese Klauseln verdienen eine sorgfältige Prüfung. Nicht jede Klausel beantwortet die Frage, ob ein Verwahrer eine technisch mögliche Handlung dauerhaft verweigern darf. Und nicht jede Klausel hält einer rechtlichen Kontrolle stand. Kryptoverwahrer versuchen regelmäßig, dieses Risiko vertraglich zu adressieren. Ob dies gelingt, hängt häufig von Details ab, die kaum ein Kunde beim Vertragsschluss beachtet: Ein Wort zu viel oder zu wenig kann hier den entscheidenden Unterschied machen.

### Die wirtschaftliche Perspektive

Die rechtliche Frage lautet: Besteht ein Anspruch? Die wirtschaftliche Frage lautet: Was kostet die Verweigerung? Beide Aspekte entscheiden über die richtige Strategie. Geht es um einen Token im Wert von wenigen Euro, lohnt sich ein aufwendiger Streit kaum. Geht es um erhebliche Vermögenswerte, verändert sich die Ausgangslage.

Dann wird relevant, welche Kosten eine Recovery verursacht, welche Interessen der Verwahrer verfolgt und welche Möglichkeiten bestehen, eine Lösung zu erreichen.

Nicht jede Auseinandersetzung muss eskalieren. Nicht jedes Problem benötigt sofort gerichtliche Hilfe. Viele Fälle lassen sich bereits lösen, wenn technische und rechtliche Argumente sauber zusammengeführt werden.

### Ein Fall aus der Praxis

Schon 2021 haben wir (in Vorgängerkanzlei) einen Mandanten bei einem solchen Sachverhalt begleitet. Dessen Token befand sich auf einer Wallet, deren Schlüssel durch einen Kryptoverwahrer kontrolliert wurden. Die Nutzung war faktisch ausgeschlossen, weil die App des Verwahrers Anzeige und Übertragung dieses Tokens nicht unterstützte. Die Herausforderung bestand darin, die erforderliche Mitwirkung zur Übertragung zu erreichen. Im direkten Kundenkontakt lehnte der Verwahrer die Übertragung zunächst ab. Der Mandant ging zunächst davon aus, der Token sei endgültig verloren. Nach anwaltlicher Beratung und Vertretung dauerte es keine 14 Tage bis der Mandant sein Ziel erreicht hatte. Gerade deshalb lohnt sich es sich, bei solchen Konstellationen nicht vorschnell von einem endgültigen Verlust auszugehen. Wir haben damals nicht nur mit der Herausgabepflicht des Treuhänders argumentiert. Entscheidend war ein Argument aus einem Rechtsgebiet, das auf den ersten Blick nichts mit treuhänderischer Verwahrung zu tun hatte. Diese gab letztlich den Ausschlag für den Erfolg unseres Mandanten.

### Die richtigen Fragen

Wer mit einem Token-Recovery-Fall konfrontiert ist, sollte zunächst vier Fragen beantworten:

1. Wer kontrolliert die privaten Schlüssel?
2. Ist die Übertragung technisch möglich?
3. Welche Regelungen enthalten die Vertragsbedingungen des Verwahrers?
4. Welcher wirtschaftliche Wert steht auf dem Spiel?

Erst danach lässt sich sinnvoll beurteilen, welche Schritte tatsächlich erforderlich sind.

### Warum Token-Recovery häufiger vorkommt als viele denken

Neue Token entstehen schneller, als Verwahrer ihre Systeme erweitern. Gleichzeitig entscheiden sich viele Nutzer aus gutem Grund bewusst für Verwahrungslösungen, weil diese Sicherheit und Komfort bieten. Daraus entsteht ein Spannungsfeld, das Token-Recovery-Fälle auch künftig relevant machen wird.

### Fazit

Token-Recovery-Fälle zeigen, wie eng Technologie, Vertragsrecht und wirtschaftliche Interessen miteinander verbunden sind. Deutlich schwieriger ist die Frage, wer verpflichtet ist, die nächste Transaktion zu ermöglichen. Wer die Kontrolle über die Infrastruktur ausübt, übernimmt häufig mehr Verantwortung, als es auf den ersten Blick erscheint. Gerade deshalb lohnt sich ein genauer Blick auf die technischen Möglichkeiten, die vertraglichen Regelungen und die wirtschaftlichen Interessen der Beteiligten.

Aus gutem Grund unterstützen Kryptoverwahrer nicht jede Tokenumgebung: Wirtschaftlich lohnt sich der Aufwand nicht. Außerdem sind Kryptoverwahrer seriöse Unternehmen, die um ihre Reputation bedacht sind und nicht mit jeder beliebigen Kryptowährung in Verbindung gebracht werden möchten.

Token-Recovery-Probleme aufgrund Überweisungen an eine Wallet, deren Schlüssel ein professioneller Kryptoverwahrer hält, kommen leider zu häufig vor. Es bleibt zu hoffen, dass diese mit der Zeit weiter abnehmen. Interessanterweise liegt eine gerichtliche Entscheidung hierüber ausnahmsweise weder im Interesse von Kunden noch von Kryptoverwahrern. Gewinnt ein Kryptoverwahrer und darf er die Herausgabe verweigern, schadet dies unter Umständen der Attraktivität seines Geschäftsmodells. Gewinnt der Kunde, könnten Kryptoverwahrer (wenn eine zulässige Überarbeitung der AGB als Lösung ausscheidet) möglicherweise Gebühren erhöhen, um ihr Geschäftsmodell wissenschaftlich zu sichern. Gerade deshalb überrascht es nicht, dass viele Fälle außergerichtlich gelöst werden.`,
          faq: [
            {
              question: "Kann ein Kryptoverwahrer die Herausgabe eines nicht unterstützten Tokens verweigern?",
              answer: "Ohne vertragliche Regelung besteht grundsätzlich ein Anspruch des Kunden/Nutzers auf Herausgabe. In welchem Umfang vertragliche Regelungen diesen Anspruch ausschließen können, ist noch nicht gerichtlich geklärt."
            },
            {
              question: "Wem gehört ein Token bei der Kryptoverwahrung?",
              answer: "Wirtschaftlich übernimmt der Kryptoverwahrer die Stellung eines Treuhänders, wirtschaftlich sind die Token dem Kunden/Nutzer zugeordnet."
            },
            {
              question: "Was ist Token-Recovery?",
              answer: "Token-Recovery bezeichnet die Wiedererlangung der Verfügungsmacht über einen Token, der sich zwar auf einer Wallet befindet, aber faktisch nicht genutzt werden kann."
            },
            {
              question: "Wer kontrolliert die privaten Schlüssel?",
              answer: "Bei der Kryptoverwahrung kontrolliert der Verwahrer die privaten Schlüssel und damit die technische Möglichkeit, Transaktionen auszuführen."
            }
          ]
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
      subtitle: "Lassen Sie uns Ihr Anliegen verstehen.",
      ctaBtn: "Anfrage senden",
      calendarTitle: "Wählen Sie Ihren Gesprächstermin (Optional)",
      calendarDesc: "Wenn Sie möchten, können Sie hier direkt ein passendes Zeitfenster für unser erstes Kennenlernen reservieren.",
      addressTitle: "Kanzleisitz",
      phoneTitle: "Telefon",
      emailTitle: "E-Mail",
      inputs: {
        name: "Ihr Name",
        email: "E-Mail-Adresse",
        company: "Unternehmen",
        phone: "Telefonnummer",
        challenge: "Anliegen",
        challengePlaceholder: "Worum geht es in Ihrem Projekt?",
        preferredContact: "Bevorzugter Kontaktweg",
        contactCallback: "Rückruf",
        contactVideo: "Videocall (Teams / Meet)",
        contactEmail: "E-Mail",
        message: "Kurze Beschreibung des Sachverhalts (Optional)",
        submit: "Anfrage absenden",
      },
      calendarStatus: "Verfügbar: München & Video-Call",
      successMessage: "Anfrage erfolgreich übermittelt! Dr. Filbinger prüft Ihre Angaben persönlich und meldet sich zeitnah.",
    },
  },
  EN: {
    nav: {
      home: "Start",
      wir: "Our Approach",
      fokus: "Focus",
      fff: "Form follows function",
      denkwerk: "Brainery",
      verguetung: "Fees",
      letsgo: "Let's Go",
    },
    hero: {
      badge: "Corporate/Commercial/M&A/Tech",
      title: "Clarity for Complex Decisions.",
      subtitle: "We translate deep corporate expertise into strategic clarity. Varda Legal manages risks, reduces noise, and builds the blueprint that empowers fast-growing companies to scale with confidence.",
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
      title: "Our Approach",
      subtitle: "Good decisions begin with clarity.",
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
          title: "Shareholders & Governance",
          desc: "Align rights, duties, and corporate governance for long-term operational success. We secure the relationships between founders and investors to eliminate boardroom disputes before they start.",
          details: [
            "Shareholder Agreements & Vesting",
            "Founder & Investor Alignment",
            "Managing Director & Board Matters",
            "Corporate Restructuring & Setups",
            "Dispute Prevention & Conflict Resolution",
          ],
        },
        {
          num: "02",
          title: "Contracts for Growth",
          desc: "Protect your day-to-day operations. We design and review commercial agreements that secure your supply chains, optimize commercial terms, and make your business scalable with compliance.",
          details: [
            "Purchase & Supplier Agreements",
            "Commercial Contracts & Partnerships",
            "Contract Reviews & Risk Mitigation",
            "Scalable Terms & Conditions (T&Cs)",
            "Distribution & License Agreements",
          ],
        },
        {
          num: "03",
          title: "Buying & Selling Companies",
          desc: "Navigate acquisitions, mergers, and exits with confidence. We guide you from initial due diligence and strategic negotiations through to robust asset-transfer structures and closing.",
          details: [
            "Share Deals & Asset Deals",
            "Seller-Side Advisory & Founder Exits",
            "Buyer-Side Due Diligence (DD)",
            "Transaction Management & Deals",
            "Post-Merger Advisory & Closing",
          ],
        },
        {
          num: "04",
          title: "Software, Data & AI",
          desc: "Protect your digital assets and navigate tech regulation. We structure software licensing, SaaS models, and data flows to secure your IP and keep your tech stack compliant and future-proof.",
          details: [
            "Software & SaaS Agreements",
            "Licensing & IP Structures",
            "Data-Sharing Agreements",
            "Crypto Law, Token Architecture",
            "IT Project Agreements & Outsourcing",
          ],
        },
      ],
    },
    fff: {
      title: "Form follows function",
      subtitle: "Legal clarity for strategic business decisions",
      blocks: [
        {
          title: "Contracts That Support Growth.",
          subtitle: "01 / STRUCTURED TRANSACTIONS",
          text: "A robust shareholder agreement or a meticulously structured financing round is not an academic exercise—it is the operational foundation of your business. We negotiate your commercials, supplier agreements, and M&A transactions with a sharp commercial mind. We secure your exposure with clinical legal precision without stalling deals with unnecessary legalese. The bottom line is business momentum, not theoretical treatise.",
          quote: "A great contract functions like an invisible engine—it operates silently in the background and guarantees operational freedom when disputes arise.",
          image: "monocle_firm_1",
        },
        {
          title: "Pragmatic Leadership. Calculated risk.",
          subtitle: "02 / CLEAR RISK ASSESSMENT",
          text: "We never evaluate legal risks in an academic vacuum; instead, we translate them directly into business options for executives and partners. Whether managing a sensitive shareholder dispute, structuring an upcoming company sale, navigating a founder exit, or representing critical vendor negotiations—we don't provide pages of warnings, but precise probabilities and calculated financial impacts, giving you clear runway for strategic board decisions.",
          quote: "The law provides the outer framework. An exceptional legal advisor charts the smartest commercial path to achieve your business goals within that frame.",
          image: "monocle_firm_2",
        },
      ],
    },
    denkwerk: {
      title: "Brainery",
      subtitle: "Impulses",
      all: "Perspectives",
      readMore: "Read Perspective",
      back: "Back to Overview",
      articles: [
        {
          id: "der-unternehmensverkauf",
          category: "01 / Decisions",
          title: "Selling a Company",
          excerpt: "A company sale begins with documents. It ends with trust. Many entrepreneurs believe that a successful company sale begins with the first conversation.",
          date: "",
          readingTime: "9 min read",
          content: `A company sale begins with documents. It ends with trust.

Many entrepreneurs believe that a successful company sale begins with the first conversation with a prospective buyer, the Letter of Intent, or the due diligence. In reality, they lay the foundation for a successful company sale much earlier, often years in advance. Because professional buyers do not just want to understand what they are buying; they want to understand how resilient the business is that they are purchasing. And that is precisely why they do not merely inspect contracts, numbers, and corporate records. They inspect trust.

### A Good Data Room is Built Years Before the Sale

Most issues in due diligence do not arise during due diligence itself, but years prior. Contracts were never stored centrally, shareholder resolutions are not fully traceable, software rights were never properly transferred to the company. Perhaps a former freelancer developed critical parts of a product without the transfer of intellectual property rights being clearly documented.

In day-to-day business, such issues often remain unnoticed. They become visible at the latest during a transaction. Not because professional buyers expect perfection, but because they want to understand the risks they are assuming. A missing agreement does not inevitably lead to a legal problem. It first leads to a question. Several open questions lead to further inquiries. And a high volume of inquiries can shift the buyer's focus from an attractive target company to its risks. Therefore, a "good data room" is not created during a sales process, but before. Clean documentation does not only reduce inquiries; it can also have a direct financial impact, such as on the costs of transaction insurance.

Buyers inspect the company. And the seller. They observe how information is provided. How problems are handled. How quickly questions are answered. Whether critical subjects are raised openly. Whether commitments are kept.

Many entrepreneurs view due diligence purely as an audit of their company. In practice, buyers often simultaneously assess how reliably their future contractual partner behaves. This is understandable, because risks do not disappear after signing the purchase agreement; they merely change their form. Trust is not built through perfection, but through transparency.

"A company sale begins with documents. It ends with trust."

### Healthy Momentum is an Asset

Sales processes thrive on momentum. And momentum is often lost faster than entrepreneurs expect.

Professional buyers regularly observe and evaluate multiple companies simultaneously. As a transaction becomes more defined, the focus typically shifts to specific target companies.

If a seller does not keep up at the right pace and with the proper priority, the buyer may quickly occupy themselves with another project. Therefore, it is worthwhile to prioritize topics logically. Some discussion points can, in their entirety, jeopardize the likelihood of a successful closing, and very few topics justify a dispute over principle. Transactions rarely gain quality because every single detail was negotiated to the maximum. They gain quality when the parties involved recognize which topics are truly critical and act accordingly.

### The Right Buyer Can Be More Critical Than the Highest Purchase Price

Entrepreneurs understandably focus on the purchase price. In many cases, the buyer deserves the same level of attention. Especially with technology-oriented companies, the long-term success of a transaction often depends on individuals. Key employees possess technical knowledge, tech architecture approaches, or operational experience that cannot be replaced. Economically, the buyer does not just purchase the software, but the software and its continued development by key personnel. This is why buyers of tech companies regularly demand that certain key individuals remain in the company after completion of the transaction and, understandably, make this a condition of closing.

For example, in one transaction on the buyer's side, there was a significant interest in retaining certain key individuals. The challenge did not lie in the legal structuring of their retention. The challenge lay in the fact that the buyer's corporate culture was viewed critically by two key employees. The seller therefore had to create substantial additional economic incentives to secure their retention. This case outlines a pattern that is routinely underestimated in tech transactions: the buyer purchases the company. People in the company who are not shareholders decide for themselves whether they want to stay. A buyer can offer the highest purchase price while simultaneously being less suitable as an acquirer of the target than a bidder who offers less (and who, after an early exit from the bidding process, is already concentrating on another target company).

Therefore, it is worth inspecting prospective buyers just as diligently as they inspect the target company. The highest price is not always the best offer.

### Which Documents Professional Buyers Want to See First

Professional buyers are regularly interested in the same core topics.

They want to understand, among other things:
- How does the target company generate revenue, and where is room for efficiency optimization post-acquisition?
- Does the target company own all assets essential to its business model?
- Who carries the operational knowledge, especially if it holds a unique significance?

Consequently, and also for the assessment of legal risks, the following documents are typically under focus very early:
- Customer contracts
- Supplier contracts
- Software and licensing agreements
- Employment and executive contracts of key personnel
- Shareholder agreements
- Financing records
- Documentation on brands, software, and other intellectual property, especially the protection of algorithms as an asset.

Uncertainties rarely cost the deal as a whole. More often, they cost money. A lack of documentation does not automatically lead to the failure of a transaction. But it alters the negotiation position. The buyer demands additional guarantees. Risks are shifted more heavily to the seller. Portions of the purchase price are held back. Or certain issues are made conditions for completion. Uncertainty therefore rarely leads to the termination of a sales process, but it regularly influences its commercial outcome.

### Many Risks Can Be Insured. Trust Cannot.

A significant portion of M&A negotiations revolves around protection against risks. Guarantees for unknown risks. Indemnities for known risks. Exclusions of liability, liability caps, baskets, and so-called de minimis limits. It is frequently overlooked that many risks can be insured today. This even applies in part to indemnity obligations. Insurance can externalize risks. It can reduce uncertainty. It cannot replace trust. Missing documentation, avoidable conflicts, unclear communication, lost momentum – all of these issues can be managed individually, but their cumulative impact should not be underestimated.

### Conclusion

Company sales rarely fail because of individual contract clauses: they fail more often because uncertainty displaces trust. A company sale begins with documents. It ends with trust.`,
          faq: [
            {
              question: "What is Due Diligence?",
              answer: "Due diligence is the audit of a company before a transaction. Buyers do not review contracts, finances, or legal risks. They inspect whether the information about the company is resilient. Due diligence serves risk assessment. At the same time, it decides whether trust is established between buyer and seller."
            },
            {
              question: "Which documents belong in a data room?",
              answer: "A data room contains the information a buyer needs to understand a company and evaluate risks. This includes, in particular, corporate documents, customer and supplier contracts, employment contracts of key personnel, financing documentation, as well as documentation on software, brands, and other intellectual property. The decisive question is not how many documents are present. What counts is whether the documents answer the buyer's essential questions."
            },
            {
              question: "When does the preparation of a company sale begin?",
              answer: "The preparation of a company sale ultimately begins years before the actual sales process. Contracts, shareholder resolutions, IP documentation, and internal processes do not arise during due diligence. The earlier a company structures its documentation sensibly, the lower the risk that uncertainty arises during a transaction."
            },
            {
              question: "What is more critical: the purchase price or the right buyer?",
              answer: "The purchase price is important. However, it is never to be viewed in isolation, but in tandem with the liability concept. In tech transactions, the right buyer can be extremely critical: because a high purchase price loses value if a transaction is not completed."
            }
          ]
        },
        {
          id: "vertraege-organisation",
          category: "02 / Contracts",
          title: "The quality of a contract is often decided before the lawyer sees the contract",
          excerpt: "The quality of a contract is often decided before the lawyer sees the contract. The client waits for the signature, the quarter-end approaches, and key terms are long since agreed upon.",
          date: "",
          readingTime: "8 min read",
          content: `The client waits for the signature.

The end of the quarter is approaching.

The economic key points are already negotiated.

Two hours before signing, the contract lands with the lawyer for the first time.

Many contract risks arise exactly at this moment.

Many companies believe that good contracts are primarily created by good lawyers. In practice, this is only partly true.

Of course, legal experience, negotiation skills, and clean contract drafting can make a significant difference. However, the quality of a contract is often decided long before.

Not at the negotiation table.

Not in redlining.

Not in the last email before the signature.

But in the processes of a company.

### Two Functions of a Contract

In practice, contracts regularly serve two functions.

First, they document an agreement. This is important for tax purposes, accounting, and the participants themselves. Anyone looking back at a negotiation months later often does not remember every detail of the original discussions.

Second, contracts fulfill an insurance function. They regulate who bears which risk if something does not go as planned.

This is exactly where the quality of a contract reveals itself.

Because the insurance function of a contract often becomes visible only after a problem has already arisen. At that point, however, it is usually too late to correct fundamental decisions.

### Why Bad Contracts Often Have No Consequences

Most contractual risks never materialize.

This is one of the reasons why companies regularly underestimate the importance of contracts.

A contract can contain significant legal weaknesses and still function smoothly for years. As long as both parties are satisfied, the quality of the contract often remains untested.

This creates a dangerous impression.

The contract appears to be good simply because no problem has occurred.

This is precisely why contractual risks are systematically underestimated in companies.

### The Real Problem is Seldom the Contracts

In many companies, contract quality is not created through legal work.

It is created through organization.

A simple example:

A sales team is compensated based on closed revenue. The client is waiting for the signature. The quarterly target needs to be achieved. The competition does not sleep.

Under these circumstances, it is completely understandable that speed is a high priority.

The problem only arises when the organization leaves no more time for a genuine legal review.

Because at this point, the role of the advisor changes.

A legal evaluation becomes a legal confirmation.

The essential economic decisions have already been made. The lawyer is only supposed to secure them.

This is exactly where many risks arise.

Not because anyone is acting negligently.

Not because those involved are making bad decisions.

But because the organization no longer permits any other decision.

The quality of a contract is rarely determined by the person who writes the contract.

It is often determined by the person who decides when the contract is reviewed.

Good contracts are not created at the negotiating table. They are created in the organization.

### Why Even Obvious Formulations Can Be Problematic

How easily legal risks can arise is demonstrated by an example from international trade.

A German company delivers goods to a French company.

The contract contains a choice of law clause:

"German law applies."

For most entrepreneurs, this wording appears unambiguous.

Many assume that this refers exclusively to the familiar regulations of German civil law.

In fact, due to this specific formulation in international sales of goods, the so-called UN Sales Law (CISG) applies.

The wording feels right.

It seems clear.

And that is precisely why it is rarely questioned.

Only when a dispute subsequently arises does it become apparent that the legal starting position can deviate significantly from the expectations of the parties.

This does not necessarily mean high damages.

However, it often means additional advisory costs, higher complexity, and poorer predictability of potential disputes.

Above all, the example shows something else:

Even seemingly clear formulations can contain risks that are easily overlooked under time pressure.

### Why Contract Quality Matters in a Company Sale

Many contractual risks remain invisible for years.

In a company sale, this changes.

Professional buyers systematically examine the essential contracts of a company.

And this is not just about individual clauses.

It is about the organization behind the contracts.

Buyers ask themselves:
- Are contracts reviewed systematically?
- Are risks consciously accepted or randomly assumed?
- Do clear approval processes exist?
- Are essential contracts documented in a traceable manner?

The greater the uncertainty, the more inquiries arise.

The more inquiries arise, the more elaborate the due diligence becomes.

And the more resource-intensive the due diligence becomes, the more trust, transaction security, and often also economic parameters come under pressure.

The quality of contracts therefore does not only influence disputes.

It regularly influences the company value.

### What Companies Can Concretely Do

The most important measures rarely consist of better contract templates.

The most important measure almost always consists of better processes.

Companies should define early on:
- which contracts must be legally reviewed,
- when this review takes place,
- what information is required for it,
- and who bears the responsibility for involving the relevant people.

Equally important is clear communication with the advisors.

A lawyer does not automatically know the priorities of a company.

Sometimes speed is more important than avoiding every conceivable risk.

Sometimes the opposite is true.

Both can make commercial sense.

What is crucial is that risks are consciously assessed.

Because only then is it a decision.

Not a coincidence.

### Conclusion

Many companies invest substantial time in contract negotiations.

Far less frequently do they invest in the processes that precede these negotiations.

Yet the quality of a contract is often created long before its signature.

The decisive lever is not in the contract.

The decisive lever lies in the organization.

Good contracts are not created by better clauses.

Good contracts are created by better processes.

And that is why the quality of a contract is often decided before the lawyer sees the contract.`,
          faq: [
            {
              question: "Why is contract quality created through organization?",
              answer: "The person drafting a contract responds to parameters and timelines. If the organization allows the legal advisor little to no time to examine core commercial metrics or weigh exposures, a legal assessment turns into mere formal confirmation. True quality is determined by when and under what premises the organization initiates the review."
            },
            {
              question: "What is the difference between the documentation and insurance function?",
              answer: "The documentation function records what was agreed upon (essential for accounting and tax). The insurance function dictates who bears the financial or operating risk when things fail. Flaws in the insurance function only become visible after a crisis emerges – by then, it is usually too late for corrections."
            },
            {
              question: "Why do contracts affect the corporate valuation?",
              answer: "During due diligence in a transaction, professional buyers do not just look at individual clauses, but at the systematic processes behind them. Uncertainties caused by missing or incomplete contracts trigger repetitive inquiries, erode buyer trust, and lead to valuation discounts, indemnity demands, or holds on purchase price payouts."
            }
          ]
        },
        {
          id: "token-recovery-kontrolle",
          category: "03 / Technology",
          title: "Token Recovery: The token is not lost. Control is lost.",
          excerpt: "Token recovery concerns cases where a token is located on a crypto custodian’s wallet but cannot be utilized. The fundamental question is often not where the token is, but who is obligated to facilitate the next transaction.",
          date: "",
          readingTime: "7 min read",
          content: `Many token recovery cases in distributed ledger networks begin with a misunderstanding: the token transaction is correctly documented in the network. The token was successfully transferred to the customer’s wallet. And yet, the customer cannot do anything with it. Why? The customer is using the wallet of a crypto custodian. And this app does not display the token. The customer can therefore not transfer, sell, or use the token. The problem lies in the control over the wallet.

### Who Controls the Problem?

Let us take a typical case: A customer holds crypto assets with a crypto custodian. To his wallet address, he sends a token that is not supported by the custodian. The blockchain (or other distributed ledger technology) processes the transaction without any issues. The token is located on the wallet address. Yet, the customer cannot move it. The reason is simple: the customer does not control the wallet himself. Only his crypto custodian, usually in the form of an app, controls the key pair with which transactions must be signed in the network to be executed. Only those who hold the key pair can perform transactions. At this point, the real question arises: Who controls the problem, and who can resolve it?

### The Business Model of Crypto Custodians

Many users associate wallets with self-custody. In crypto custody, however, things are often different. The custodian takes over the technical infrastructure. He safeguards the cryptographic keys. He protects against loss. He simplifies usage. That is exactly what the customer pays for. This division of labor creates convenience, but it also creates dependency.

In principle, the customer remains the ultimate beneficial owner of all assets that can be moved using the keys, while the actual control over the keys lies with the custodian.

As long as both parties share the same interests, this is hardly noticeable. It only becomes complicated when the customer wishes to carry out a transaction that the custodian has not technically or organizationally anticipated.

### Token Recovery Cases Are Not Technology Problems

Anyone who approaches these cases for the first time usually looks for a technical failure. But the problem lies elsewhere. The distributed ledger network works perfectly.

The bottleneck exists at the custodian level. The custodian’s app does not display the actual control over the token; the software does not support the token. Internal processes do not foresee a recovery mechanism. Or (and this is often the case): the processing causes administrative effort that the custodian wants to avoid. The actual dispute is therefore rarely about technology. It revolves around responsibility.

"Token recovery cases are not technology problems. They are responsibility problems."

### Is There an Entitlement to Transfer?

An explicit statutory regulation for this constellation does not exist. The mere fact that a token is not supported does not answer the question of entitlement.

Nevertheless, there are strong arguments that the customer has a claim for cooperation of the app in transferring the token. The token "sticks" to a wallet whose assets economically belong, in principle, exclusively to the customer. However, the custodian ultimately has control over the assets because only he holds the cryptographic keys. The technical capability to execute the transfer often remains. This raises the question of on what grounds the custodian is allowed to refuse the transfer. Whosoever exercises technical control must also accept being questioned as to what duties are linked to that control. This is precisely where the crucial lines of argument run.

### The Role of Terms and Conditions (AGB)

Crypto custodians are familiar with this issue. Therefore, terms of use frequently contain regulations regarding unsupported tokens, limitation of liability, or explicitly on token recovery. These clauses deserve a thorough examination. Not every clause answers the question of whether a custodian may permanently refuse a technically feasible action. And not every clause withstands legal scrutiny. Crypto custodians routinely attempt to address this risk contractually. Whether this succeeds often depends on details that hardly any customer notices when entering into the contract: a word too many or too few can make the decisive difference.

### The Economic Perspective

The legal question is: Is there an entitlement? The economic question is: What does the refusal cost? Both aspects determine the right strategy. If a token is worth only a few euros, a complex dispute is hardly worthwhile. If significant assets are at stake, the starting point changes.

Then, the costs that a recovery entails, the interests that the custodian pursues, and the available avenues for reaching a solution become highly relevant.

Not every dispute has to escalate. Not every problem requires immediate litigation. Many cases can be resolved simply by cleanly bringing together technical and legal arguments.

### A Case from Practice

As early as 2021, we (at a predecessor firm) supported a client in such a matter. His token was in a wallet whose keys were controlled by a crypto custodian. Utilization was practically impossible because the custodian's app did not support the display and transfer of this token. The challenge lay in securing the necessary cooperation to execute the transfer. In direct customer contact, the custodian initially refused the transfer. The client initially assumed the token was gone for good. Following legal advice and representation, it took less than 14 days for the client to achieve his goal. This is precisely why it is worth not prematurely assuming a definitive loss in such situations. At the time, we did not only argue with the trustee’s obligation to surrender. What proved turn-key was an argument from a area of law which, at first glance, had nothing to do with trust-based custody. This ultimately swung the balance in our client’s favor.

### The Crucial Questions

Anyone confronted with a token recovery case should first answer four questions:

1. Who controls the private keys?
2. Is the transfer technically feasible?
3. What provisions do the custodian’s terms of service contain?
4. What economic value is at stake?

Only then can one sensibly evaluate what steps are actually required.

### Why Token Recovery Appears More Often Than Many Believe

New tokens are created faster than custodians can expand their systems. At the same time, many users make a conscious decision to opt for custody solutions for good reason, because they offer security and convenience. This creates a tension that will keep token recovery cases relevant in the future.

### Conclusion

Token recovery cases demonstrate how tightly technology, contract law, and economic interests are interwoven. Much more difficult is the question of who is obligated to facilitate the next transaction. Whosoever exercises control over the infrastructure often assumes more responsibility than appears at first glance. This is precisely why it is worth looking closely at the technical possibilities, the contractual arrangements, and the economic interests of those involved.

For good reason, crypto custodians do not support every token environment: from an economic standpoint, the effort is not worth it. Furthermore, crypto custodians are reputable enterprises that are mindful of their reputation and do not wish to be associated with any arbitrary cryptocurrency.

Token recovery issues arising from transfers to a wallet whose keys are held by a professional crypto custodian occur all too frequently. It is to be hoped that these will decrease over time. Interestingly, a judicial ruling on this is, for once, in the interest of neither customers nor crypto custodians. If a crypto custodian wins and is allowed to refuse surrender, this may impair the appeal of their business model. If the customer wins, crypto custodians might (if a valid revision of terms is not possible as a solution) potentially increase fees to keep their business model viable. It is therefore not surprising that many cases are settled out of court.`,
          faq: [
            {
              question: "Can a crypto custodian refuse to surrender an unsupported token?",
              answer: "Without a contractual agreement, the customer/user essentially has a claim for surrender. The extent to which contractual provisions can exclude this claim has not yet been judicially resolved."
            },
            {
              question: "Who owns a token during crypto custody?",
              answer: "Economically, the crypto custodian assumes the position of a trustee, and the tokens are economically attributed to the customer/user."
            },
            {
              question: "What is Token Recovery?",
              answer: "Token recovery refers to the retrieval of the power of disposition over a token that is located on a wallet but cannot be practically utilized."
            },
            {
              question: "Who controls the private keys?",
              answer: "In crypto custody, the custodian controls the private keys and thus the technical capability to execute transactions."
            }
          ]
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
      subtitle: "Let us understand your challenge.",
      ctaBtn: "Send Inquiry",
      calendarTitle: "Select your conversation slot (Optional)",
      calendarDesc: "If you wish, you can reserve a convenient time slot for our first conversation directly.",
      addressTitle: "Office Address",
      phoneTitle: "Direct Dial",
      emailTitle: "Email Address",
      inputs: {
        name: "Your Name",
        email: "Work Email",
        company: "Company",
        phone: "Phone Number",
        challenge: "Your Challenge",
        challengePlaceholder: "Tell us about your project...",
        preferredContact: "Preferred Contact Method",
        contactCallback: "Callback",
        contactVideo: "Video Call (Teams / Meet)",
        contactEmail: "Email",
        message: "Short description of the matter (Optional)",
        submit: "Submit Inquiry",
      },
      calendarStatus: "Available: Munich & secure Video-Link",
      successMessage: "Inquiry successfully submitted! Dr. Filbinger is personally reviewing your case and will respond promptly.",
    },
  },
};
