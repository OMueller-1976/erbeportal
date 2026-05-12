export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  image?: string;
}

const articles: Article[] = [
  {
    slug: "gesetzliche-erbfolge-deutschland",
    title: "Gesetzliche Erbfolge in Deutschland — Wer erbt was ohne Testament?",
    description:
      "Was passiert mit dem Nachlass, wenn kein Testament existiert? Ein vollständiger Überblick über Erbklassen, Ehegattenerbrecht, uneheliche Kinder und Stiefkinder.",
    date: "2026-03-01",
    category: "Erbrecht Grundlagen",
    image: "/images/gesetzliche-erbfolge-ratgeber.png",
    content: `
<p>Stirbt jemand ohne Testament oder Erbvertrag, tritt automatisch die gesetzliche Erbfolge in Kraft. Das Bürgerliche Gesetzbuch (BGB) legt präzise fest, wer in welcher Reihenfolge erbt — und wer leer ausgeht. Das Ergebnis entspricht nicht immer dem, was der Verstorbene gewollt hätte.</p>

<h2>Das Prinzip der Erbklassen</h2>
<p>Das Gesetz ordnet Erben in sogenannte Erbklassen (auch Erbordnungen). Die Grundregel ist einfach: Erben einer höheren Klasse schließen alle Erben niedrigerer Klassen vollständig aus. Nur wenn niemand aus einer Klasse vorhanden ist, rückt die nächste nach.</p>
<ul>
  <li><strong>1. Klasse:</strong> Kinder und Kindeskinder des Erblassers. Lebt ein Kind noch, tritt dessen Abkömmlinge (Enkel) nicht in Erscheinung — das Kind erbt stellvertretend für seine ganze Linie.</li>
  <li><strong>2. Klasse:</strong> Eltern des Erblassers und deren Abkömmlinge (Geschwister, Nichten, Neffen). Diese Klasse erbt nur, wenn keine Personen der 1. Klasse vorhanden sind.</li>
  <li><strong>3. Klasse:</strong> Großeltern und deren Abkömmlinge (Tanten, Onkel, Cousins). Greift nur bei Fehlen der ersten beiden Klassen.</li>
</ul>
<p>Gibt es überhaupt keine Verwandten und keinen Ehegatten, fällt der Nachlass an den Staat.</p>

<h2>Das Ehegattenerbrecht</h2>
<p>Der Ehegatte ist kein Verwandter im Sinne des BGB und gehört keiner Erbklasse an. Er erbt dennoch — aber neben den Verwandten, nicht statt ihnen. Die Höhe seines Erbteils hängt vom ehelichen Güterstand und davon ab, neben welcher Erbklasse er steht:</p>
<ul>
  <li><strong>Neben der 1. Klasse (Kinder):</strong> ¼ des Nachlasses. Bei Zugewinngemeinschaft erhöht sich der Anteil um ein weiteres Viertel (pauschal als Zugewinnausgleich), sodass er faktisch ½ erhält.</li>
  <li><strong>Neben der 2. Klasse oder Großeltern:</strong> ½ des Nachlasses.</li>
  <li><strong>Ohne Verwandte der 1. und 2. Klasse:</strong> Der Ehegatte erbt alles.</li>
</ul>

<h3>Was ist mit eingetragenen Lebenspartnern?</h3>
<p>Eingetragene Lebenspartner sind Ehegatten erbrechtlich gleichgestellt — sie haben dieselben Erbrechte und Freibeträge. Nicht eingetragene Lebenspartner dagegen erhalten ohne Testament nichts, unabhängig von der Dauer der Beziehung.</p>

<h2>Uneheliche Kinder und ihr Erbrecht</h2>
<p>Seit der Erbrechtsreform 1998 sind uneheliche Kinder ehelichen Kindern vollständig gleichgestellt — vorausgesetzt, die Vaterschaft wurde anerkannt oder gerichtlich festgestellt. Ein uneheliches Kind erbt genauso wie ein eheliches Kind aus der 1. Erbklasse.</p>
<p>Eine wichtige Ausnahme gilt für vor dem 1. Juli 1949 in den alten Bundesländern geborene uneheliche Kinder: Diese haben nach einer Übergangsregelung gegenüber dem Vater kein gesetzliches Erbrecht. Sie können jedoch über ein Testament bedacht werden.</p>

<h2>Stiefkinder haben kein gesetzliches Erbrecht</h2>
<p>Stiefkinder — also Kinder, die der Erblasser nicht adoptiert hat — gehören nicht zu den gesetzlichen Erben. Sie erben nur dann, wenn sie im Testament ausdrücklich bedacht werden oder wenn sie adoptiert wurden. Die Adoption begründet ein vollständiges, dem leiblichen Kind gleichwertiges Erbrecht.</p>
<p>Viele Patchwork-Familien unterschätzen dieses Problem. Wer seine Stiefkinder absichern möchte, muss zwingend ein Testament errichten.</p>

<h2>Kinder erben zu gleichen Teilen</h2>
<p>Mehrere Kinder erben stets zu gleichen Teilen. Der Erblasser kann durch Testament davon abweichen — innerhalb der gesetzlichen Schranken des Pflichtteils. Möchte er ein Kind bevorzugen, muss er dies ausdrücklich testamentarisch regeln.</p>

<div class="info-box">
  <strong>Fazit:</strong> Die gesetzliche Erbfolge ist oft nicht das, was Betroffene erwarten — besonders in modernen Familien mit Scheidungen, Patchwork-Konstellationen oder langjährigen Lebenspartnerschaften ohne Trauschein. Ein Testament ist in solchen Fällen keine Option, sondern Notwendigkeit.
</div>
`,
  },
  {
    slug: "pflichtteil-berechnen",
    title: "Pflichtteil berechnen — So viel steht Ihnen gesetzlich zu",
    description:
      "Wer hat Anspruch auf den Pflichtteil, wie wird er berechnet — und was ist der Pflichtteilsergänzungsanspruch? Alles zur Verjährung und Durchsetzung.",
    date: "2026-03-08",
    category: "Erbrecht Grundlagen",
    image: "/images/pflichtteil-berechnen-ratgeber.png",
    content: `
<p>Der Pflichtteil ist das letzte Sicherheitsnetz des deutschen Erbrechts. Er verhindert, dass nahe Angehörige durch ein Testament vollständig enterbt werden. Wer pflichtteilsberechtigt ist, kann einen Geldanspruch gegen die Erben geltend machen — auch ohne im Testament bedacht zu sein.</p>

<h2>Wer hat Anspruch auf den Pflichtteil?</h2>
<p>Pflichtteilsberechtigt sind nur ganz bestimmte Personengruppen:</p>
<ul>
  <li><strong>Kinder</strong> des Erblassers (eheliche, uneheliche und adoptierte gleichermaßen)</li>
  <li><strong>Kindeskinder</strong>, wenn das Kind des Erblassers vorverstorben ist oder die Erbschaft ausgeschlagen hat</li>
  <li><strong>Ehegatte</strong> bzw. eingetragener Lebenspartner</li>
  <li><strong>Eltern</strong> — aber nur dann, wenn der Erblasser keine Kinder hinterlässt</li>
</ul>
<p>Geschwister, Nichten, Neffen und sonstige Verwandte haben keinen Pflichtteilsanspruch. Auch ein nicht eingetragener Lebenspartner geht leer aus.</p>

<h2>Wie wird der Pflichtteil berechnet?</h2>
<p>Der Pflichtteil beträgt die Hälfte des gesetzlichen Erbteils. Um ihn zu berechnen, brauchen Sie zwei Angaben: den Wert des Nachlasses und den gesetzlichen Erbteil, den die Person ohne Testament erhalten hätte.</p>

<h3>Beispielrechnung</h3>
<p>Ein Vater verstirbt und hinterlässt ein Vermögen von <strong>400.000 €</strong>. Er hat zwei Kinder (A und B) und ist verwitwet. Im Testament setzt er Kind A als Alleinerben ein und übergeht Kind B vollständig.</p>
<ul>
  <li>Gesetzlicher Erbteil von B ohne Testament: ½ = 200.000 €</li>
  <li>Pflichtteil von B: ½ davon = <strong>100.000 €</strong></li>
</ul>
<p>Dieser Betrag ist ein Geldanspruch gegen Kind A — nicht ein Erbanspruch. Kind B wird nicht Miterbe, kann aber Zahlung verlangen.</p>

<h2>Nachlasswert richtig ermitteln</h2>
<p>Grundlage ist der Reinwert des Nachlasses zum Todestag — also alle Vermögenswerte abzüglich aller Schulden. Immobilien werden zum Verkehrswert angesetzt, nicht zum Einheitswert. Der Pflichtteilsberechtigte hat das Recht, vom Erben eine vollständige Auskunft über den Nachlassbestand zu verlangen (§ 2314 BGB). Verweigert der Erbe dies, kann er auf Auskunftserteilung verklagt werden.</p>

<h2>Der Pflichtteilsergänzungsanspruch</h2>
<p>Ein häufig übersehenes Instrument: Wenn der Erblasser in den letzten zehn Jahren vor seinem Tod Schenkungen gemacht hat, werden diese beim Pflichtteil anteilig hinzugerechnet. Der Pflichtteilsberechtigte kann so auch an verschenktem Vermögen teilhaben.</p>
<p>Die Schenkung wird dabei gleitend berücksichtigt — je länger sie zurückliegt, desto geringer der Ergänzungsanspruch:</p>
<ul>
  <li>Schenkung im letzten Jahr vor dem Tod: 100 % werden angerechnet</li>
  <li>Schenkung vor 2 Jahren: 90 % — jedes Jahr sinkt der Anteil um 10 %</li>
  <li>Schenkungen, die mehr als 10 Jahre zurückliegen: kein Ergänzungsanspruch mehr</li>
</ul>

<h2>Pflichtteil ausschließen — geht das?</h2>
<p>Den Pflichtteil zu entziehen ist nur in eng begrenzten Ausnahmefällen möglich (§ 2333 BGB): schwere Straftaten gegen den Erblasser oder nahe Angehörige, böswilliges Verlassen in Hilflosigkeit oder eine Verurteilung zu mindestens einem Jahr Freiheitsstrafe. Der Entziehungsgrund muss ausdrücklich im Testament genannt werden — und lässt sich im Zweifel gerichtlich anfechten.</p>

<h2>Verjährung des Pflichtteilsanspruchs</h2>
<p>Der Pflichtteilsanspruch verjährt in drei Jahren — beginnend ab dem Ende des Jahres, in dem der Berechtigte vom Erbfall und der ihn beeinträchtigenden Verfügung Kenntnis erlangt hat. Unabhängig davon verjährt er spätestens 30 Jahre nach dem Erbfall. Wer seinen Anspruch geltend machen möchte, sollte nicht zu lange warten.</p>

<div class="info-box">
  <strong>Tipp:</strong> Der Erbe kann mit dem Pflichtteilsberechtigten eine Ratenzahlung oder eine Stundung vereinbaren, wenn eine sofortige Zahlung den Nachlass — etwa eine Immobilie — gefährden würde. Gerichte erkennen solche Absprachen in der Regel an.
</div>
`,
  },
  {
    slug: "erbschaft-ausschlagen-ablauf",
    title: "Erbschaft ausschlagen — Frist, Ablauf und steuerliche Folgen",
    description:
      "Wann lohnt sich die Ausschlagung einer Erbschaft? Wie läuft das Verfahren ab, welche Frist gilt — und was passiert steuerlich danach?",
    date: "2026-03-15",
    category: "Erbrecht Grundlagen",
    image: "/images/erbschaft-ausschlagen-ratgeber.png",
    content: `
<p>Nicht jede Erbschaft ist ein Gewinn. Wer ein überschuldetes Vermögen erbt, übernimmt automatisch auch alle Schulden des Erblassers — bis hin zur Haftung mit dem eigenen Privatvermögen. Die Ausschlagung der Erbschaft ist das wichtigste Schutzinstrument in solchen Fällen.</p>

<h2>Warum eine Erbschaft ausschlagen?</h2>
<p>Die Gründe für eine Ausschlagung sind vielfältig:</p>
<ul>
  <li><strong>Überschuldeter Nachlass:</strong> Wenn Schulden das Vermögen übersteigen, ist die Ausschlagung meist die klügste Entscheidung.</li>
  <li><strong>Steuerliche Optimierung:</strong> Manchmal ist es für Kinder günstiger, wenn die Erbschaft an Enkelkinder weitergegeben wird — um deren Freibeträge zu nutzen.</li>
  <li><strong>Familiäre Konflikte:</strong> Wenn der Erblasser durch sein Testament Streit provoziert hat, kann ein Erbe durch Ausschlagung aus der Situation heraustreten.</li>
  <li><strong>Pflichtteilsstrategie:</strong> Wer ausschlägt, hat unter bestimmten Bedingungen Anspruch auf seinen Pflichtteil — was manchmal finanziell günstiger ist als die Erbschaft selbst anzunehmen.</li>
</ul>

<h2>Die 6-Wochen-Frist</h2>
<p>Die Ausschlagungsfrist beträgt <strong>sechs Wochen</strong>. Sie beginnt in dem Moment, in dem der Erbe von der Erbschaft und dem Berufungsgrund (z. B. gesetzliche Erbfolge oder Testament) Kenntnis erlangt — nicht automatisch ab dem Todestag.</p>
<p>Wichtige Ausnahme: Wenn der Erblasser seinen letzten Wohnsitz im Ausland hatte oder der Erbe selbst im Ausland lebt, verlängert sich die Frist auf <strong>sechs Monate</strong>.</p>
<p>Versäumt man die Frist ohne triftigen Grund, gilt die Erbschaft als angenommen — mit allen Konsequenzen. Eine nachträgliche Anfechtung der Annahme ist dann nur in sehr engen Grenzen möglich (z. B. bei arglistiger Täuschung über den Nachlasswert).</p>

<h2>Ablauf: So schlagen Sie eine Erbschaft aus</h2>
<ol>
  <li><strong>Zuständiges Gericht ermitteln:</strong> Die Ausschlagung muss beim Nachlassgericht am letzten Wohnsitz des Verstorbenen erklärt werden — das ist in der Regel das Amtsgericht.</li>
  <li><strong>Persönlich erscheinen oder Notar einschalten:</strong> Die Ausschlagung kann persönlich beim Nachlassgericht erklärt werden (in beglaubigter Form) oder über einen Notar. Eine schriftliche Erklärung ohne notarielle Beglaubigung genügt nicht.</li>
  <li><strong>Erklärung abgeben:</strong> Die Erklärung muss eindeutig sein: Sie schlagen die Ihnen angefallene Erbschaft aus. Eine Begründung ist nicht erforderlich.</li>
  <li><strong>Kosten:</strong> Die Gerichtsgebühren betragen in der Regel 30–50 €. Notargebühren kommen je nach Notar hinzu.</li>
</ol>

<h2>Was passiert nach der Ausschlagung?</h2>
<p>Die Ausschlagung wirkt zurück — Sie gelten als hätten Sie nie geerbt. Die Erbschaft fällt an den nächsten in der gesetzlichen Erbfolge. Das können Ihre eigenen Kinder sein, was in manchen Fällen gewollt ist (z. B. um deren Freibeträge zu nutzen).</p>
<p>Schlagen alle gesetzlichen Erben aus oder gibt es keine weiteren Erben, fällt der Nachlass an den Staat (Fiskuserbrecht).</p>

<h2>Ausschlagung und Pflichtteil</h2>
<p>Wer die Erbschaft ausschlägt, verliert grundsätzlich auch seinen Pflichtteilsanspruch. Ausnahme: Wer ein sittenwidriges oder zu niedriges Erbe ausschlägt, kann unter bestimmten Bedingungen dennoch den Pflichtteil verlangen — das erfordert anwaltliche Beratung im Einzelfall.</p>

<h2>Steuerliche Folgen der Ausschlagung</h2>
<p>Eine Ausschlagung löst keine Erbschaftsteuer aus — wer nichts erhält, zahlt auch keine Steuer. Derjenige, der als Nächstes erbt, muss jedoch unter Umständen Erbschaftsteuer zahlen, je nach Verwandtschaftsgrad und Nachlasswert.</p>
<p>Wichtig: Wenn der Erbe zunächst annimmt, den Nachlass verwaltet und ihn erst später ausschlägt (was nicht möglich ist — nach Fristablauf ist die Annahme unwiderruflich), haftet er für alle in der Zwischenzeit entstandenen Verbindlichkeiten.</p>

<div class="info-box">
  <strong>Handlungsempfehlung:</strong> Bevor Sie eine Erbschaft ausschlagen, lassen Sie den Nachlass möglichst vollständig inventarisieren. Holen Sie sich Auskunft bei Banken, prüfen Sie Grundbücher und fragen Sie beim Finanzamt nach offenen Steuerschulden. Nur wer den wahren Wert des Nachlasses kennt, kann eine fundierte Entscheidung treffen.
</div>
`,
  },
  {
    slug: "immobilien-erben-steuern",
    title: "Immobilien erben — Steuern, Fristen und was Erben wissen müssen",
    description:
      "Geerbte Immobilie: Wie wird sie bewertet, wann ist sie steuerfrei, und was passiert beim Verkauf? Alles zu Erbschaftsteuer, Grundbuch und Spekulationssteuer.",
    date: "2026-03-22",
    category: "Erbschaftsteuer",
    image: "/images/immobilien-erben-ratgeber.png",
    content: `
<p>Eine geerbte Immobilie ist häufig der wertvollste Bestandteil eines Nachlasses — und gleichzeitig der komplizierteste. Erbschaftsteuer, Grundbuchumschreibung, Spekulationssteuer beim Verkauf und die Frage „Behalten oder verkaufen?" beschäftigen viele Erben monatelang.</p>

<h2>Bewertung der Immobilie für die Erbschaftsteuer</h2>
<p>Das Finanzamt bewertet geerbte Immobilien für Zwecke der Erbschaftsteuer nach dem <strong>Verkehrswert</strong> — also dem Preis, der im gewöhnlichen Geschäftsverkehr erzielt werden könnte. Dafür wird je nach Immobilientyp ein standardisiertes Verfahren angewendet:</p>
<ul>
  <li><strong>Vergleichswertverfahren:</strong> Für Eigentumswohnungen und Einfamilienhäuser in Lagen mit ausreichend Vergleichskäufen.</li>
  <li><strong>Ertragswertverfahren:</strong> Für vermietete Mehrfamilienhäuser und Gewerbeimmobilien — führt oft zu einem niedrigeren Steuerwert als der Verkehrswert.</li>
  <li><strong>Sachwertverfahren:</strong> Für besondere Immobilien ohne vergleichbare Objekte.</li>
</ul>
<p>Wenn der vom Finanzamt festgestellte Wert zu hoch ist, können Sie ein eigenes Gutachten eines öffentlich bestellten Sachverständigen vorlegen — das Finanzamt muss einen nachgewiesenen niedrigeren Verkehrswert akzeptieren.</p>

<h2>Steuerbefreiung: Das Familienheim</h2>
<p>Das Erbschaftsteuergesetz sieht eine vollständige Steuerbefreiung für das sogenannte Familienheim vor — also die Immobilie, in der der Erblasser bis zu seinem Tod selbst gewohnt hat:</p>
<ul>
  <li><strong>Ehegatte / eingetragener Lebenspartner:</strong> Erbt steuerfrei, wenn er die Immobilie unverzüglich nach dem Erbfall selbst bezieht und mindestens zehn Jahre lang selbst bewohnt. Zieht er vorher aus (außer bei zwingenden Gründen wie Pflegebedürftigkeit), entfällt die Befreiung rückwirkend.</li>
  <li><strong>Kinder:</strong> Ebenfalls steuerfrei unter denselben Bedingungen — mit einer zusätzlichen Einschränkung: Die Wohnfläche darf <strong>200 m²</strong> nicht übersteigen. Der darüber hinausgehende Anteil wird anteilig besteuert.</li>
</ul>
<p>Für Geschwister, Freunde oder entfernte Verwandte gilt diese Befreiung nicht — sie zahlen je nach Wert und Steuerklasse 15–50 % Erbschaftsteuer auf den vollen Wert.</p>

<h2>Grundbuchumschreibung — Fristen beachten</h2>
<p>Die Erbschaft überträgt das Eigentum an der Immobilie automatisch — aber das Grundbuch spiegelt das erst wider, wenn die Umschreibung beantragt wird. Dafür benötigen Sie entweder einen Erbschein oder ein eröffnetes notarielles Testament.</p>
<p>Wichtige Frist: Wenn Sie die Umschreibung <strong>innerhalb von zwei Jahren nach dem Erbfall</strong> beantragen, ist sie gebührenfrei. Danach fallen Grundbuchgebühren an, die sich nach dem Immobilienwert richten.</p>

<h2>Verkaufen oder behalten?</h2>
<p>Die Entscheidung hängt von mehreren Faktoren ab:</p>
<ul>
  <li><strong>Eigennutzung:</strong> Wenn Sie die Immobilie selbst nutzen wollen, ist das steuerlich oft die günstigste Option — besonders wenn Sie die 10-Jahres-Frist für die Steuerbefreiung einhalten können.</li>
  <li><strong>Vermietung:</strong> Vermietete Immobilien generieren laufende Einnahmen, binden aber Kapital und verursachen Verwaltungsaufwand.</li>
  <li><strong>Verkauf:</strong> Schnelle Liquidität, aber möglicherweise Spekulationssteuer.</li>
</ul>

<h2>Spekulationssteuer beim Verkauf</h2>
<p>Wer eine geerbte Immobilie verkauft, muss unter Umständen Einkommensteuer auf den Gewinn zahlen — die sogenannte Spekulationssteuer. Sie fällt an, wenn:</p>
<ul>
  <li>die Immobilie nicht selbst genutzt wurde (Eigennutzung in den letzten drei Jahren schützt), <strong>und</strong></li>
  <li>die Zehnjahresfrist seit dem Ersterwerb durch den Erblasser noch nicht abgelaufen ist.</li>
</ul>
<p>Als Erbe treten Sie in die Rechtspositon des Erblassers ein — die Haltedauer des Erblassers wird Ihnen angerechnet. Hat der Erblasser die Immobilie vor mehr als zehn Jahren gekauft, ist der Verkauf für Sie steuerfrei.</p>

<div class="info-box">
  <strong>Tipp für Erbengemeinschaften:</strong> Wenn mehrere Erben gemeinsam eine Immobilie geerbt haben, kann kein Miterbe allein verkaufen. Bei Uneinigkeit kann jeder Miterbe eine Teilungsversteigerung beim Amtsgericht beantragen — was regelmäßig zu niedrigen Erlösen führt. Eine einvernehmliche Lösung ist fast immer wirtschaftlich besser.
</div>
`,
  },
  {
    slug: "digitaler-nachlass-regeln",
    title: "Digitaler Nachlass regeln — E-Mail, Social Media & Online-Konten",
    description:
      "Was passiert mit E-Mail-Konten, Social-Media-Profilen und Online-Abonnements nach dem Tod? So regeln Sie Ihren digitalen Nachlass rechtzeitig.",
    date: "2026-04-01",
    category: "Nachlassabwicklung",
    image: "/images/digitaler-nachlass-ratgeber.png",
    content: `
<p>Der digitale Nachlass ist ein Thema, das viele Menschen unterschätzen. Wer heute stirbt, hinterlässt im Schnitt mehr als 70 Online-Konten — von E-Mail über Banking bis zu Social-Media-Profilen und Cloud-Speicher. Was passiert damit? Und wie können Erben auf diese Konten zugreifen?</p>

<h2>Was gehört zum digitalen Nachlass?</h2>
<p>Der Begriff umfasst alle digitalen Inhalte und Zugänge, die eine Person im Leben angesammelt hat:</p>
<ul>
  <li>E-Mail-Konten (Gmail, GMX, Outlook)</li>
  <li>Social-Media-Profile (Facebook, Instagram, LinkedIn, X)</li>
  <li>Online-Banking und PayPal</li>
  <li>Cloud-Speicher (iCloud, Google Drive, Dropbox)</li>
  <li>Streaming-Abonnements (Netflix, Spotify, Amazon Prime)</li>
  <li>Krypto-Wallets und digitale Wertanlagen</li>
  <li>Online-Shops, Marktplatz-Konten (eBay, Amazon Seller)</li>
  <li>Domains, Websites, Blogs mit wirtschaftlichem Wert</li>
</ul>

<h2>Was passiert mit den Konten ohne Regelung?</h2>
<p>Ohne klare Vorkehrungen sind Erben oft machtlos. Die meisten Plattformen verlangen spezifische Nachweise, bevor sie Erben Zugang gewähren — und selbst dann ist es unsicher:</p>
<ul>
  <li><strong>Facebook / Meta:</strong> Ermöglicht die Umwandlung in ein „Gedenkprofil" oder die Löschung. Erben müssen Sterbeurkunde und Verwandtschaftsnachweis einreichen.</li>
  <li><strong>Google:</strong> Bietet die Option, einen „Inactivity Manager" zu konfigurieren — einen vorab bestimmten Ansprechpartner, der nach einer Inaktivitätsperiode Zugang erhält.</li>
  <li><strong>Apple:</strong> Hat seit iOS 15 einen „Legacy Contact" — einen vorab bestimmten Vertrauenskontakt, der nach dem Tod Zugang zu iCloud-Daten erhält.</li>
  <li><strong>Krypto-Wallets:</strong> Ohne Private Key oder Seed Phrase ist das Guthaben unwiederbringlich verloren.</li>
</ul>

<h2>Rechtslage: Erben und digitale Konten</h2>
<p>Der Bundesgerichtshof hat 2018 (BGH, Az. III ZR 183/17) klargestellt: Erben treten auch in Verträge mit sozialen Netzwerken ein. Sie haben grundsätzlich Anspruch auf Zugang zum Account — Plattformen dürfen dies nicht pauschal verweigern. In der Praxis bleibt die Durchsetzung trotzdem schwierig.</p>

<h2>Digitale Vorsorge: Was Sie jetzt tun können</h2>
<p>Der einfachste Weg ist proaktive Vorsorge:</p>
<ul>
  <li><strong>Passwort-Liste hinterlegen:</strong> Erstellen Sie eine aktuelle Liste aller wichtigen Zugangsdaten und hinterlegen Sie diese an einem sicheren Ort — verschlossen beim Notar oder in einem Tresor, auf den Vertrauenspersonen im Todesfall zugreifen können. Niemals unverschlüsselt auf dem Computer speichern.</li>
  <li><strong>Digitale Vollmacht:</strong> Erteilen Sie einer Vertrauensperson schriftlich die Vollmacht, im Todesfall auf Ihre digitalen Konten zuzugreifen und diese zu verwalten oder zu schließen.</li>
  <li><strong>Plattform-eigene Tools nutzen:</strong> Aktivieren Sie den Google Inactive Account Manager, legen Sie bei Apple einen Legacy Contact fest und konfigurieren Sie bei Facebook einen Nachlasskontakt.</li>
  <li><strong>Im Testament erwähnen:</strong> Erwähnen Sie im Testament, wo die digitale Nachlassdokumentation zu finden ist — und wer damit was tun soll.</li>
</ul>

<h2>ERITAJ Digital-Nachlass Feature</h2>
<p>ERITAJ bietet eine digitale Nachlasslösung, mit der Sie Ihre Online-Konten, Zugangsdaten und Anweisungen sicher hinterlegen können. Vertrauenspersonen erhalten nach dem Tod geführten Zugang — ohne dass Passwörter zu Lebzeiten weitergegeben werden müssen. Die Plattform führt Erben Schritt für Schritt durch die Abwicklung des digitalen Nachlasses.</p>

<div class="info-box">
  <strong>Dringend:</strong> Krypto-Guthaben ohne gesicherten Seed Phrase sind nach dem Tod unwiederbringlich verloren. Wenn Sie Kryptowährungen besitzen, ist die sichere Hinterlegung des Recovery-Keys die wichtigste Maßnahme für Ihren digitalen Nachlass.
</div>
`,
  },
  {
    slug: "vorsorgevollmacht-betreuungsverfuegung",
    title: "Vorsorgevollmacht & Betreuungsverfügung — Der Unterschied erklärt",
    description:
      "Vorsorgevollmacht oder Betreuungsverfügung — was schützt Sie besser? Wann greift welches Dokument, und warum sollten Sie beides haben?",
    date: "2026-04-10",
    category: "Nachlassabwicklung",
    image: "/images/vorsorgevollmacht-ratgeber.png",
    content: `
<p>Was passiert, wenn Sie durch Unfall, Krankheit oder Demenz nicht mehr in der Lage sind, selbst Entscheidungen zu treffen? Ohne entsprechende Dokumente bestimmt das Gericht einen Betreuer — auch wenn Sie gut informierte, vertrauensvolle Menschen in Ihrem Leben haben, die das viel besser könnten.</p>

<h2>Die Vorsorgevollmacht</h2>
<p>Die Vorsorgevollmacht ist die stärkste Form der persönlichen Vorsorge. Mit ihr bevollmächtigen Sie eine Person Ihres Vertrauens, in Ihrem Namen zu handeln — wenn Sie selbst dazu nicht mehr in der Lage sind. Die bevollmächtigte Person kann dann ohne Genehmigung des Gerichts tätig werden.</p>

<h3>Was kann in der Vollmacht geregelt werden?</h3>
<ul>
  <li><strong>Gesundheitliche Entscheidungen:</strong> Einwilligung oder Ablehnung medizinischer Behandlungen, Auswahl von Ärzten und Kliniken, Entscheidungen am Lebensende.</li>
  <li><strong>Vermögensangelegenheiten:</strong> Bankgeschäfte, Verwaltung von Immobilien, Abschluss und Kündigung von Verträgen.</li>
  <li><strong>Behördenangelegenheiten:</strong> Kommunikation mit Ämtern, Beantragung von Leistungen, Vertretung gegenüber Behörden.</li>
  <li><strong>Aufenthaltsbestimmung:</strong> Entscheidung über Heimunterbringung oder Pflege zu Hause.</li>
</ul>

<h3>Form der Vorsorgevollmacht</h3>
<p>Eine Vorsorgevollmacht muss schriftlich erteilt werden. Für bestimmte Handlungen — insbesondere Immobiliengeschäfte und Aufnahme von Krediten — ist eine notarielle Beurkundung erforderlich. Es empfiehlt sich generell, die Vollmacht notariell zu beurkunden, um die Akzeptanz bei Banken und Behörden zu sichern.</p>
<p>Wichtig: Eine Vorsorgevollmacht sollte beim <strong>Zentralen Vorsorgeregister</strong> der Bundesnotarkammer registriert werden. Gerichte fragen dort zuerst an, bevor sie einen Betreuer bestellen.</p>

<h2>Die Betreuungsverfügung</h2>
<p>Die Betreuungsverfügung ist kein Vollmachtsdokument. Sie ist eine Wunscherklärung an das Betreuungsgericht: Wenn das Gericht einen Betreuer bestellen muss, soll es möglichst die von Ihnen gewünschte Person einsetzen — und sich an Ihre Wünsche halten.</p>
<p>Die Betreuungsverfügung greift also genau dann, wenn keine Vorsorgevollmacht existiert oder die Vollmacht für bestimmte Bereiche nicht ausreicht. Das Gericht ist an Ihre Wünsche nicht absolut gebunden — es muss sie jedoch berücksichtigen und nur bei gewichtigen Gegeninteressen abweichen.</p>

<h2>Der Unterschied auf einen Blick</h2>
<ul>
  <li><strong>Vorsorgevollmacht:</strong> Der Bevollmächtigte handelt selbstständig, ohne Genehmigung des Gerichts. Sehr stark, erfordert großes Vertrauen in die gewählte Person.</li>
  <li><strong>Betreuungsverfügung:</strong> Das Gericht bestellt einen Betreuer — idealerweise die von Ihnen gewünschte Person. Das Gericht kontrolliert den Betreuer laufend.</li>
</ul>

<h2>Wann reicht welches Dokument?</h2>
<p>In den meisten Fällen empfiehlt sich eine Kombination: Die Vorsorgevollmacht für den Alltag und die schnelle Handlungsfähigkeit der Vertrauensperson — ergänzt durch eine Betreuungsverfügung für den Fall, dass die Vollmacht anfechtbar wird oder die bevollmächtigte Person selbst ausfällt.</p>
<p>Zusätzlich sollten Sie eine <strong>Patientenverfügung</strong> in Betracht ziehen — in der Sie konkrete Wünsche zu medizinischen Maßnahmen am Lebensende festhalten. Diese bindet Ärzte und Betreuer rechtlich.</p>

<h2>Vorsorgevollmacht digital erstellen</h2>
<p>Auf <a href="https://eritaj.de/dashboard/vorsorgevollmacht" target="_blank" rel="noopener noreferrer">eritaj.de/dashboard/vorsorgevollmacht</a> können Sie Ihre Vorsorgevollmacht geführt und strukturiert erstellen. Das digitale Formular führt Sie durch alle relevanten Entscheidungen und generiert ein vollständiges Dokument.</p>

<div class="info-box">
  <strong>Wichtig:</strong> Eine Vorsorgevollmacht entfaltet ihre Wirkung nur, wenn sie rechtzeitig errichtet wird — also solange Sie geschäftsfähig sind. Wer wartet, bis er nicht mehr entscheiden kann, hat keine Möglichkeit mehr, die Vollmacht auszustellen.
</div>
`,
  },
  {
    slug: "testament-ungueltig-fehler",
    title: "Testament ungültig — Diese Fehler machen Testamente nichtig",
    description:
      "Ein Testament kann aus formalen oder inhaltlichen Gründen ungültig sein. Welche Fehler passieren am häufigsten — und wie vermeiden Sie sie?",
    date: "2026-04-18",
    category: "Testament",
    image: "/images/testament-fehler-ratgeber.png",
    content: `
<p>Ein Testament soll den letzten Willen sichern — doch in der Praxis scheitern viele Testamente an Formfehlern oder unklaren Formulierungen. Das Ergebnis: Das Gericht wendet die gesetzliche Erbfolge an, als hätte es kein Testament gegeben. Diese häufigsten Fehler sollten Sie kennen.</p>

<h2>Fehler 1: Maschinenschriftliches oder gedrucktes Testament</h2>
<p>Das eigenhändige Testament muss <strong>vollständig handgeschrieben</strong> sein — jede Zeile, jedes Wort. Ein ausgedrucktes Dokument, das nur unterschrieben ist, ist unwirksam. Gleiches gilt für:</p>
<ul>
  <li>Schreiben auf dem Computer und dann Ausdrucken</li>
  <li>Formulare, die nur ausgefüllt und unterschrieben werden</li>
  <li>Kombinationen: handgeschriebener Text mit gedruckten Anlagen</li>
</ul>
<p>Ausnahme: Das notarielle Testament wird vom Notar aufgesetzt und ist immer gültig, unabhängig von der Schriftform.</p>

<h2>Fehler 2: Fehlende Unterschrift</h2>
<p>Ohne Unterschrift ist ein Testament unwirksam — auch wenn der gesamte Text handgeschrieben ist. Die Unterschrift muss <strong>eigenhändig</strong>, <strong>am Ende des Dokuments</strong> stehen und mit Vor- und Nachnamen geleistet werden. Eine bloße Paraphe oder ein Spitzname genügt in der Regel nicht.</p>
<p>Besonders tückisch: Wer ein Testament beginnt, es aber nicht fertigstellt oder nicht unterschreibt, hinterlässt ein wertloses Dokument.</p>

<h2>Fehler 3: Fehlendes oder falsches Datum</h2>
<p>Das Datum ist kein zwingendes Formerfordernis — ein Testament ohne Datum ist nicht automatisch ungültig. Aber: Wenn mehrere Testamente vorhanden sind und das jüngere gilt, braucht man das Datum zur Feststellung der Reihenfolge. Fehlt das Datum, kann das ältere Testament möglicherweise nicht eindeutig bestimmt werden — mit dem Risiko, dass beide als unwirksam behandelt werden.</p>

<h2>Fehler 4: Unklare oder widersprüchliche Formulierungen</h2>
<p>Das Nachlassgericht ist an den Wortlaut gebunden, soweit er erkennbar ist. Problematische Formulierungen:</p>
<ul>
  <li><strong>„Meine Kinder sollen alles bekommen"</strong> — wenn unklar ist, ob Adoptivkinder, Stiefkinder oder nur leibliche gemeint sind.</li>
  <li><strong>„Das Haus gehört meiner Tochter"</strong> — wenn unklar ist, ob sie es als Vorauszahlung auf ihren Erbteil oder zusätzlich erhält.</li>
  <li><strong>„Mein Freund Max soll mein Vermögen verwalten"</strong> — ist er nun Erbe, Testamentsvollstrecker oder Verwalter?</li>
</ul>
<p>Unklare Formulierungen führen zu Streit, Gerichtsverfahren und oft zum unerwünschten Ergebnis.</p>

<h2>Fehler 5: Vergessene Pflichtteilsansprüche</h2>
<p>Wer nahe Angehörige im Testament übergeht, muss damit rechnen, dass diese Pflichtteilsansprüche geltend machen. Das lässt sich nicht vollständig vermeiden — aber durch kluge Testamentsgestaltung und vorab geplante Schenkungen (unter Beachtung der Zehn-Jahres-Frist) in der Auswirkung stark reduzieren.</p>

<h2>Fehler 6: Kein Ersatzerbe benannt</h2>
<p>Stirbt der im Testament eingesetzte Erbe vor dem Erblasser, fällt dessen Erbteil in die gesetzliche Erbfolge — sofern kein Ersatzerbe bestimmt wurde. Das kann dazu führen, dass Personen erben, die der Erblasser ausdrücklich nicht begünstigen wollte.</p>

<h2>Fehler 7: Zeugen bei eigenhändigen Testamenten</h2>
<p>Im deutschen Recht sind Zeugen beim eigenhändigen Testament <strong>nicht erforderlich</strong> — und können das Testament sogar gefährden, wenn sie als Erben bedacht werden (beim notariellen Testament gilt: als Zeugen beteiligte Erben können leer ausgehen). Wer „zur Sicherheit" Zeugen hinzuzieht, erzeugt möglicherweise neue Probleme.</p>

<h2>Anfechtung: Wann kann ein Testament angefochten werden?</h2>
<p>Ein formal gültiges Testament kann dennoch angefochten werden — wenn:</p>
<ul>
  <li>der Erblasser bei der Errichtung nicht testierfähig war (schwere Demenz, psychiatrische Erkrankung)</li>
  <li>das Testament durch Drohung oder Täuschung beeinflusst wurde</li>
  <li>der Erblasser einem wesentlichen Irrtum über den Inhalt unterlag</li>
</ul>
<p>Die Anfechtungsfrist beträgt ein Jahr ab Kenntnis des Anfechtungsgrundes. Bei einem nicht persönlichen Irrtum beginnt die Frist erst mit Kenntnis des Irrtums.</p>

<div class="info-box">
  <strong>Empfehlung:</strong> Lassen Sie Ihr Testament nach der Errichtung von einem Fachanwalt für Erbrecht oder einem Notar prüfen — besonders wenn es um größere Vermögen, Patchwork-Familien oder komplizierte Unternehmensnachfolgen geht. Die Kosten der Prüfung sind ein Bruchteil der Kosten eines späteren Erbstreits.
</div>
`,
  },
  {
    slug: "nachlassgericht-aufgaben",
    title: "Nachlassgericht — Aufgaben, Zuständigkeit und Ablauf",
    description:
      "Was macht das Nachlassgericht, wann müssen Sie dort aktiv werden — und was kostet es? Alle Aufgaben, Zuständigkeiten und Abläufe im Überblick.",
    date: "2026-04-25",
    category: "Nachlassabwicklung",
    image: "/images/nachlassgericht-aufgaben-ratgeber.png",
    content: `
<p>Das Nachlassgericht ist die zentrale staatliche Stelle rund um den Erbfall. Es eröffnet Testamente, stellt Erbscheine aus, bestellt Testamentsvollstrecker und überwacht Nachlassverwaltungen. Wer erbt, kommt mit dem Nachlassgericht fast immer in Berührung — es lohnt sich, seine Aufgaben zu kennen.</p>

<h2>Was ist das Nachlassgericht?</h2>
<p>Das Nachlassgericht ist keine eigenständige Behörde, sondern eine Abteilung des zuständigen Amtsgerichts. Zuständig ist das Amtsgericht am letzten inländischen gewöhnlichen Aufenthalt des Verstorbenen. War der letzte Wohnsitz im Ausland, ist das Amtsgericht Schöneberg in Berlin für alle in Deutschland befindlichen Nachlasssachen zuständig.</p>

<h2>Aufgabe 1: Testamentseröffnung</h2>
<p>Jedes bei Gericht hinterlegte oder beim Notar verwahrte Testament wird nach dem Tod des Erblassers vom Nachlassgericht <strong>von Amts wegen eröffnet</strong> — das Gericht handelt also ohne Antrag. Wer dem Gericht ein privat aufgefundenes Testament übergibt, muss das ebenfalls tun: § 2259 BGB verpflichtet ausdrücklich dazu, bekannte Testamente unverzüglich einzureichen.</p>
<p>Die Testamentseröffnung läuft wie folgt ab:</p>
<ol>
  <li>Das Gericht öffnet das Testament in einer Sitzung.</li>
  <li>Inhalt und äußere Form werden protokolliert.</li>
  <li>Alle Beteiligten (Erben, Pflichtteilsberechtigte) werden schriftlich benachrichtigt.</li>
  <li>Jeder Beteiligte erhält auf Antrag eine beglaubigte Abschrift.</li>
</ol>

<h2>Aufgabe 2: Erbschein ausstellen</h2>
<p>Der Erbschein ist das wichtigste Dokument für Erben. Das Nachlassgericht prüft die Erbfolge und stellt den Erbschein aus — nach Eingang des Antrags, der beizufügenden Unterlagen und der eidesstattlichen Versicherung des Antragstellers.</p>
<p>Der Erbschein enthält:</p>
<ul>
  <li>Name und Anschrift der Erben</li>
  <li>Erbquoten (bei mehreren Erben)</li>
  <li>Anordnungen zur Testamentsvollstreckung oder Nacherbfolge (falls vorhanden)</li>
</ul>
<p>Es gibt unterschiedliche Arten von Erbscheinen: den allgemeinen Erbschein, den gemeinschaftlichen Erbschein für Erbengemeinschaften und den gegenständlich beschränkten Erbschein (z. B. nur für inländisches Vermögen).</p>

<h2>Aufgabe 3: Nachlassverwaltung und -insolvenz</h2>
<p>Auf Antrag eines Erben kann das Nachlassgericht eine <strong>Nachlassverwaltung</strong> anordnen. Ein vom Gericht bestellter Nachlassverwalter übernimmt die Verwaltung und Abwicklung des Nachlasses. Der Vorteil für den Erben: Seine persönliche Haftung für Nachlassschulden wird auf den Nachlassbestand beschränkt.</p>
<p>Ist der Nachlass offensichtlich überschuldet, kann stattdessen ein <strong>Nachlassinsolvenzverfahren</strong> eröffnet werden. Das Nachlassgericht gibt das Verfahren dann ans Insolvenzgericht ab.</p>

<h2>Aufgabe 4: Testamentsvollstreckung</h2>
<p>Hat der Erblasser im Testament einen Testamentsvollstrecker bestimmt, stellt das Nachlassgericht diesem ein Testamentsvollstreckerzeugnis aus — den offiziellen Nachweis seiner Befugnis. Der Testamentsvollstrecker verwaltet den Nachlass, verteilt ihn nach dem Willen des Erblassers und schützt ihn vor Zugriffen einzelner Erben.</p>

<h2>Kosten des Nachlassgerichts</h2>
<p>Die Gerichtsgebühren richten sich nach dem Nachlasswert und sind im GNotKG geregelt:</p>
<ul>
  <li><strong>Testamentseröffnung:</strong> Eine Gebühr (0,5-facher Satz), mindestens 30 €</li>
  <li><strong>Erbschein:</strong> Eine Gebühr (1,0-facher Satz) nach Nachlasswert — bei 100.000 € ca. 273 €, bei 500.000 € ca. 935 €</li>
  <li><strong>Ausschlagungserklärung:</strong> Pauschale ca. 30–75 €</li>
</ul>

<h2>Wichtige Fristen im Überblick</h2>
<ul>
  <li><strong>Sofort:</strong> Bekannte Testamente müssen unverzüglich beim Nachlassgericht eingereicht werden.</li>
  <li><strong>6 Wochen:</strong> Frist zur Ausschlagung der Erbschaft.</li>
  <li><strong>2 Jahre:</strong> Gebührenfreie Antragsfrist für die Grundbuchumschreibung.</li>
</ul>

<div class="info-box">
  <strong>Tipp:</strong> Sie müssen nicht persönlich zum Nachlassgericht. Einen Notar einzuschalten spart Zeit — er nimmt die eidesstattliche Versicherung auf, beantragt den Erbschein und leitet alles ans Gericht weiter. Besonders bei komplexen Nachlässen oder Zeitdruck ist das sinnvoll.
</div>
`,
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
