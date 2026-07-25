"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BsCheck2Circle,
  BsArrowRight,
  BsWhatsapp,
  BsCalendar3,
  BsChatDots,
  BsLightning,
  BsPeople,
  BsClockHistory,
  BsXCircle,
  BsPhone,
  BsBell,
  BsArrowRepeat,
  BsCalendarCheck,
  BsEnvelope,
  BsGraphUp,
  BsBriefcase,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const niche = siteDetails.niche?.toLowerCase() || "salons";
const brand = siteDetails.siteName;

const workflowCategories = [
  {
    icon: BsBell,
    title: "Automatische herinneringen",
    desc: `WhatsApp + SMS herinneringen die no-shows met 60-80% verlagen. Klanten bevestigen of verzetten in één tik — geen telefoonrondjes meer tussen behandelingen door.`,
  },
  {
    icon: BsArrowRepeat,
    title: "Rebooking- en refill-flows",
    desc: `Wimpers, nagels en kleurbehandelingen hebben een natuurlijk ritme. Het systeem nodigt klanten automatisch uit voor hun refill of vervolgafspraak — precies op het moment dat ze eraan toe zijn.`,
  },
  {
    icon: BsEnvelope,
    title: "Klantcommunicatie",
    desc: `Welkom-flows voor nieuwe klanten, nazorg-berichten na elke behandeling, reactivatie-flows voor klanten die je een tijdje niet hebt gezien — allemaal op de automatische piloot.`,
  },
  {
    icon: BsCalendarCheck,
    title: "Boekings-synchronisatie",
    desc: `Nieuwe afspraken vanuit je website, telefoon en social channels komen automatisch in één agenda. Geen dubbele boekingen, geen vergeten klanten — en geen commissie per afspraak.`,
  },
  {
    icon: BsGraphUp,
    title: "Review-verzoeken",
    desc: `Na elke behandeling krijgt jouw klant automatisch een review-verzoek op het juiste moment — niet te vroeg, niet te laat. Sterren stapelen zich op zonder dat je erom hoeft te vragen.`,
  },
  {
    icon: BsBriefcase,
    title: "Custom bedrijfsprocessen",
    desc: `Specifieke flows voor jouw salon: aanbetalingen bij het boeken, voorraad-meldingen voor producten, medewerker-roosters, betaalherinneringen — alles wat repetitief is, automatiseren we.`,
  },
];

const steps = [
  {
    number: "01",
    title: "We mappen jouw werkdag",
    desc: `In één intake-gesprek zien we welke taken jouw salon repetitief uitvoert: bevestigingen, herinneringen, rebooking, reviews, facturen. Wij identificeren de top-5 om te automatiseren.`,
  },
  {
    number: "02",
    title: "We koppelen + bouwen de flows",
    desc: `We koppelen het automatiserings-systeem aan je agenda, WhatsApp, e-mail en (optioneel) je boekhoudsoftware. De top-5 flows staan in 5 werkdagen live, getest en aanpasbaar naar jouw stijl.`,
  },
  {
    number: "03",
    title: "Vanaf dag 1 lopen alle flows automatisch",
    desc: `Jij ziet in één dashboard wat het systeem voor je doet: hoeveel herinneringen verstuurd, hoeveel klanten bevestigd, hoeveel reviews binnen, hoeveel uren bespaard. Jij blijft in controle, het systeem doet het werk.`,
  },
];

const painPoints = [
  {
    icon: BsClockHistory,
    title: "Repetitieve admin vreet je dag op",
    desc: `Elke ochtend bellen om afspraken te bevestigen, 's avonds review-verzoeken sturen, tussendoor leads opvolgen. Werk dat zich elke week herhaalt — terwijl jij eigenlijk met klanten bezig wilt zijn.`,
  },
  {
    icon: BsXCircle,
    title: "No-shows + vergeten refills kosten omzet",
    desc: `Eén no-show op een behandeling van anderhalf uur is €50-€120 weg. Een klant die haar refill vergeet, schuift stilletjes door naar een andere salon. Bij elkaar tikken die kleine misjes hard aan.`,
  },
  {
    icon: BsPhone,
    title: "Te veel losse tools die niet praten",
    desc: `WhatsApp voor herinneringen, Excel voor klanten, een aparte tool voor reviews, een boekingsplatform dat commissie rekent. Geen overzicht, dubbele administratie, fouten die je pas later ziet.`,
  },
];

const reminderFeatures = [
  {
    icon: BsWhatsapp,
    title: "WhatsApp + SMS + e-mail",
    desc: `De herinnering komt binnen waar jouw klant 'm leest — WhatsApp eerst, SMS als backup, e-mail als bevestiging. Het systeem matcht per klant.`,
  },
  {
    icon: BsClockHistory,
    title: "Slimme timing",
    desc: `Een snelle manicure krijgt een herinnering op andere momenten dan een behandeling van twee uur. Het systeem leert wat voor jouw salon werkt.`,
  },
  {
    icon: BsCalendarCheck,
    title: "Eén tik bevestigen of verzetten",
    desc: `Klanten bevestigen met "JA" of verzetten met één link. Geen telefoonrondjes, geen heen-en-weer-mailen.`,
  },
];

const faqs = [
  {
    q: "Wat is workflow automatisering voor een salon precies?",
    a: "Het is een systeem dat herhalend werk in je salon overneemt: afspraken bevestigen, herinneringen sturen, rebooking-uitnodigingen versturen, reviews verzamelen, klantcommunicatie regelen. Alles waar je nu zelf elke dag of week tijd in steekt, gaat automatisch op de juiste momenten naar de juiste klanten — zonder dat jij iets hoeft te doen.",
  },
  {
    q: "Werkt dit met de agenda en tools die ik nu al gebruik?",
    a: "Ja. We koppelen het systeem aan de meeste salonagenda's (Treatwell, Salonized, Salonkee, Booksy, Mijn Salon, Google Calendar) en aan WhatsApp Business + e-mail. In één intake-gesprek weten we welke koppelingen jij nodig hebt en zetten we het op zonder migratie van data.",
  },
  {
    q: "Hoe lang duurt het voor de flows live zijn?",
    a: "5 werkdagen voor de top-5 automatiseringen (herinneringen, rebooking, reviews, welkom-flow, nazorg). Custom workflows duren iets langer — meestal 1-2 weken afhankelijk van de complexiteit. Je hoeft zelf bijna niets te doen behalve één keer per flow goedkeuren wat de toon is.",
  },
  {
    q: "Wat zijn rebooking-flows — en werken die echt?",
    a: `Een rebooking-flow nodigt klanten automatisch uit voor hun volgende afspraak op het natuurlijke ritme van de behandeling: wimper-refills na 2-3 weken, nagels na 3-4 weken, kleurbehandelingen na 6-8 weken. In plaats van hopen dat de klant zelf belt, staat de uitnodiging al in haar WhatsApp. Salons die dit aanzetten zien hun herhaalboekingen structureel stijgen — het is de stilste omzetmaker die er is.`,
  },
  {
    q: "Kan ik de templates en flows zelf aanpassen?",
    a: "Ja, je krijgt voor elke flow 3-5 kant-en-klare templates die we samen aanpassen aan jouw salon-stijl. Wijzigingen zijn ook later altijd mogelijk via één klik in je dashboard — je hebt volledige controle over de toon, de timing en de inhoud.",
  },
  {
    q: `Wat kost workflow automatisering bij ${brand}?`,
    a: `Workflow automatisering — inclusief automatische herinneringen, rebooking-flows, review-verzoeken en klantcommunicatie — zit inbegrepen in ons maandelijkse pakket vanaf €79/maand. Geen losse kosten per SMS, WhatsApp of e-mail, geen commissie per boeking, geen opstartkosten. Bekijk onze tarieven voor alle details.`,
  },
  {
    q: "Kan ik dit combineren met de Voice AI, chatbot en CRM?",
    a: "Ja, en dat is sterk aanbevolen. Voice AI vangt nieuwe klanten op via de telefoon, de chatbot via de website, de workflow automatisering pakt vanaf dat moment over (bevestiging, herinneringen, rebooking, reviews). Het CRM bewaart alles in één klantenbestand. Samen vormen ze één gesloten lus van eerste contact tot vaste klant.",
  },
];

export default function AutomatiseringContent() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 sl-reveal"
          >
            Workflow Automatisering
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 sl-reveal sl-reveal-1"
          >
            Workflow automatisering voor {siteDetails.niche}: laat het systeem het werk doen
          </motion.h1>
          <motion.p
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8 sl-reveal sl-reveal-1"
          >
            Automatische herinneringen, rebooking-flows, klantcommunicatie en
            custom flows — speciaal voor salons. Geen no-shows, geen vergeten
            refills, geen handmatig admin-werk. Jij behandelt, het systeem regelt
            de rest.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center sl-reveal sl-reveal-2"
          >
            <a
              href="https://cal.com/studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              <BsCalendar3 /> Plan een Gratis Gesprek
            </a>
            <a
              href="https://wa.me/31611594862"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-green-500/30 text-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-500/10 transition-all"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero image — full-width banner */}
      <section className="px-4 mb-8 md:mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/services/automatisering-workflow.jpg"
              alt="Workflow automatisering voor salons — receptiebalie met laptop, smartphone en afsprakenboek terwijl de salon op de achtergrond draait"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Wat is workflow automatisering? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Wat is workflow automatisering voor een salon?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Workflow automatisering is het slim laten lopen van alle repetitieve
              taken in je salon — zonder dat jij erover na hoeft te denken.
              Afspraakbevestigingen, herinneringen, rebooking-uitnodigingen,
              review-verzoeken, nazorg-berichten, betaalreminders — al die taken
              die elke dag of week terugkomen, doet het systeem voor je op exact
              het juiste moment.
            </p>
            <p>
              Voor {niche} betekent dit één ding: jij focust op je behandelingen
              en je klanten, wij regelen de admin-stroom. Een salon die alle
              herhaalwerk automatiseert wint gemiddeld 8-12 uur per week aan tijd,
              ziet no-shows dalen met 60-80%, en haalt 3-4× meer reviews binnen —
              zonder extra inspanning. Workflow automatisering bij {brand} is geen
              losse tool, maar een systeem dat al jouw klantmomenten aan elkaar
              knoopt: van eerste contact tot vaste klant.
            </p>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Herken je dit?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            De meeste {niche} lopen tegen dezelfde admin-problemen aan. Herkenbaar?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="text-red-600 dark:text-red-400" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-foreground-accent text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Hoe het werkt</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            In 3 stappen draait jouw salon op workflow automatisering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 dark:bg-neutral-700" />
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-neutral-900 relative z-10">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-foreground-accent text-sm max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welke workflows automatiseer je? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Welke workflows automatiseer je?
          </h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            6 categorieën van repetitief werk die {niche} elke maand uren kosten — allemaal te automatiseren.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                <p className="text-foreground-accent text-sm">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: Automatische herinneringen (the highest-ROI workflow) */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
              <BsBell size={14} /> Featured workflow
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Automatische herinneringen — onze hoogst-rendabele workflow
            </h2>
            <p className="text-foreground-accent max-w-2xl mx-auto">
              De ene workflow die in elke salon binnen 30 dagen meetbaar
              omzet oplevert: automatische WhatsApp + SMS herinneringen voor
              elke geboekte behandeling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/services/automatisering-hero.jpg"
                alt="Smartphone op salon counter toont automatische herinnering — klant gaat de behandeling van morgen bevestigen"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-foreground-accent space-y-4 text-base leading-relaxed"
            >
              <p>
                Een gemiddelde no-show kost een salon €50-€120 aan gemiste
                omzet — een behandeling van anderhalf uur vul je niet zomaar
                op. Twee per week is al snel €5.000-€10.000 per jaar weg.
              </p>
              <p>
                Met automatische herinneringen via WhatsApp stuurt het systeem
                op het juiste moment vóór de behandeling een vriendelijke nudge.
                Klanten bevestigen met &quot;JA&quot; of verzetten met één link
                — geen telefoonrondjes, geen heen-en-weer-mailen. Onderzoek in
                de salonbranche laat zien dat een goed opgezette
                herinneringen-flow no-shows met 60-80% terugdringt.
              </p>
              <p>
                Combineer dit met onze{" "}
                <Link href="/voice-ai" className="text-primary hover:underline">
                  ai telefoniste voor salons
                </Link>{" "}
                en de{" "}
                <Link href="/chatbot" className="text-primary hover:underline">
                  ai chatbot voor salons
                </Link>{" "}
                en je hebt één gesloten lus: van eerste contact tot bevestigde
                afspraak tot behandeling tot review.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reminderFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-5 bg-[var(--card-background)]"
              >
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="text-primary" size={18} />
                </div>
                <h3 className="text-base font-bold mb-1">{feature.title}</h3>
                <p className="text-foreground-accent text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp section image — two-column split */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <BsWhatsapp /> WhatsApp-eerst
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Klanten communiceren waar ze toch al kijken
            </h2>
            <p className="text-foreground-accent leading-relaxed mb-4">
              98% van Nederland leest WhatsApp-berichten binnen een uur — veel
              hoger dan e-mail of zelfs SMS. Daarom sturen we elke automatische
              flow eerst via WhatsApp, met SMS als backup en e-mail als
              bevestiging.
            </p>
            <p className="text-foreground-accent leading-relaxed">
              Voor jouw klant voelt het als een persoonlijke nudge in plaats
              van een marketing-bericht — vriendelijk, kort, met één duidelijke
              actie. Drie tot vier keer hogere response-rates dan losse SMS-jes
              vanuit je eigen telefoon.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/services/automatisering-whatsapp.jpg"
              alt="Klant ontvangt automatische WhatsApp herinnering van de salon en bevestigt met één tik"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Waarom salons kiezen + section image */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-lg order-2 md:order-1"
          >
            <Image
              src="/images/services/automatisering-section.jpg"
              alt="Salon in volle gang — specialist behandelt klant terwijl het workflow-automatisering systeem op de achtergrond alle communicatie afhandelt"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Waarom {niche} kiezen voor workflow automatisering
            </h2>
            <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
              <p>
                Een salon-dag bestaat voor 60% uit behandelingen — en voor 40%
                uit communicatie, planning en administratie. Die 40% is precies
                waar workflow automatisering zijn werk doet.
              </p>
              <p>
                Wat we vaak zien bij {niche} die op dit systeem overstappen:
                ze winnen 8-12 uur per week aan tijd, no-shows dalen met
                60-80%, reviews stapelen zich automatisch op, en refill-klanten
                komen vaker terug omdat ze op tijd worden uitgenodigd. De salon
                draait dezelfde of meer omzet, maar met aanzienlijk minder
                mentale belasting.
              </p>
              <p>
                Combineer workflow automatisering met onze{" "}
                <Link href="/chatbot" className="text-primary hover:underline">
                  ai chatbot voor salons
                </Link>
                ,{" "}
                <Link href="/voice-ai" className="text-primary hover:underline">
                  ai telefoniste voor salons
                </Link>{" "}
                en{" "}
                <Link href="/crm" className="text-primary hover:underline">
                  crm voor salons
                </Link>{" "}
                — en je hebt één gesloten systeem dat van eerste contact tot
                vaste klant alle klantmomenten aan elkaar knoopt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Combineer met andere AI-tools */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Combineer met andere AI-tools
          </h2>
          <p className="text-foreground-accent mb-10 max-w-2xl mx-auto">
            Workflow automatisering werkt het beste als onderdeel van een
            gesloten lus — van eerste contact tot bevestigde afspraak tot
            review.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <Link
              href="/voice-ai"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsPhone className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">Voice AI Telefoniste</h3>
              <p className="text-foreground-accent text-sm">
                Vangt nieuwe klanten op terwijl jij behandelt — geboekte
                afspraken gaan direct door naar de automatische herinneringen-flow.
              </p>
            </Link>
            <Link
              href="/chatbot"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsChatDots className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">AI Chatbot</h3>
              <p className="text-foreground-accent text-sm">
                Vangt websitebezoekers 24/7 op en plant direct in je agenda.
                Vanaf dat moment lopen alle workflows automatisch.
              </p>
            </Link>
            <Link
              href="/crm"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsPeople className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">CRM voor Salons</h3>
              <p className="text-foreground-accent text-sm">
                Vaste klanten herkennen, refill-afspraken triggeren, vergeten
                klanten reactiveren — alles vanuit één klantenbestand.
              </p>
            </Link>
            <Link
              href="/reviews"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsCheck2Circle className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">Review Management</h3>
              <p className="text-foreground-accent text-sm">
                Na elke behandeling automatisch een Google review-verzoek.
                Sluit de lus van afspraak tot reputatie.
              </p>
            </Link>
            <Link
              href="/seo"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsGraphUp className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">SEO voor Salons</h3>
              <p className="text-foreground-accent text-sm">
                Meer organische bezoekers naar je website — die vervolgens
                door de hele workflow worden geleid.
              </p>
            </Link>
            <Link
              href="/gratis-scan"
              className="block border border-primary/40 rounded-2xl p-6 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <BsCalendar3 className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">Gratis Scan</h3>
              <p className="text-foreground-accent text-sm">
                Krijg een gratis analyse: welke 5 workflows zou jouw salon
                het eerst moeten automatiseren?
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Veelgestelde vragen
          </h2>
          <p className="text-foreground-accent text-center mb-10">
            Alles wat je wilt weten over workflow automatisering voor jouw salon.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group border border-[var(--card-border)] rounded-2xl bg-[var(--card-background)] overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 list-none">
                  <span className="font-semibold text-base pr-4">{faq.q}</span>
                  <BsArrowRight className="text-primary group-open:rotate-90 transition-transform flex-shrink-0" size={18} />
                </summary>
                <div className="px-5 pb-5 text-foreground-accent text-sm leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om de admin-stroom uit jouw salon te halen?
          </h2>
          <p className="text-foreground-accent text-lg mb-8 max-w-xl mx-auto">
            Plan een gratis gesprek van 15 minuten. We laten zien welke 5
            workflows in jouw salon meteen meetbaar geld opleveren. Geen
            verkooppraat — alleen cijfers en een eerlijke take.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              <BsCalendar3 /> Plan Gratis Gesprek
            </a>
            <Link
              href="/gratis-scan"
              className="inline-flex items-center justify-center gap-2 border border-primary/30 text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-all"
            >
              <BsLightning /> Vraag Gratis Scan aan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
