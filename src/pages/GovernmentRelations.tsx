/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Building2, Zap, ChevronRight } from 'lucide-react';

const CONTACT_EMAIL = "investors@ocelot-global.com";

type Lang = 'en' | 'es';

// ─── Spain / US Flag SVGs (same as main site) ────────────────────────────────
const SpainFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" className="rounded-sm">
    <rect width="20" height="14" fill="#c60b1e" />
    <rect y="3.5" width="20" height="7" fill="#ffc400" />
  </svg>
);

const USFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" className="rounded-sm">
    <rect width="20" height="14" fill="#B22234" />
    <rect y="1.08" width="20" height="1.08" fill="white" />
    <rect y="3.23" width="20" height="1.08" fill="white" />
    <rect y="5.38" width="20" height="1.08" fill="white" />
    <rect y="7.54" width="20" height="1.08" fill="white" />
    <rect y="9.69" width="20" height="1.08" fill="white" />
    <rect y="11.85" width="20" height="1.08" fill="white" />
    <rect width="8" height="7.54" fill="#3C3B6E" />
  </svg>
);

// ─── Translations ─────────────────────────────────────────────────────────────
const t = {
  en: {
    nav: {
      thesis: "Thesis", opportunity: "Opportunity", paraguay: "Paraguay",
      structure: "Structure", leadership: "Leadership", govtRelations: "Government Relations",
      cta: "Investor Inquiries",
    },
    eyebrow: "Regulatory Access & Government Relations",
    headline: "Direct relationships with the institutions that matter",
    lead: "Ocelot Global has established active, direct engagement with every key government institution in Paraguay's AI infrastructure approval process. These are not intermediary or brokered relationships — they are first-hand, ongoing dialogues at the decision-making level.",
    membershipLabel: "Confirmed Membership",
    membershipBody: "Ocelot Global Holdings is an active member of the Paraguayan Chamber of Commerce, providing us formal institutional standing and recognized participation in Paraguay's business and investment community.",
    pillarsHeading: "Three institutional pillars",
    cards: [
      {
        org: "Paraguayan Chamber of Commerce",
        title: "Institutional Membership & Endorsement",
        body: "Our Chamber membership provides access, introductions, and a formal endorsement framework that signals credibility to international capital markets and Paraguayan government officials alike.",
      },
      {
        org: "ANDE — National Electricity Administration",
        title: "National Electricity Administration",
        body: "We are in direct dialogue with ANDE's technical and planning leadership — the body that controls grid access, power supply agreements, and high-voltage interconnection for all industrial-scale facilities in Paraguay.",
      },
      {
        org: "Ministry of Industry & Commerce",
        title: "Investment Incentive Authority",
        body: "Ocelot maintains an active relationship with the MIC — the ministry responsible for investment incentive approvals, industrial policy classification, and regulatory qualification for foreign capital projects.",
      },
    ],
    bottomHeading: "A methodical, coordinated path to approval",
    bottomBody: "Ocelot's regulatory strategy is not opportunistic. It is a structured, sequenced engagement program — developed specifically for the Paraguayan institutional environment — that moves each government relationship forward in lock step, ensuring no single approval becomes a bottleneck and that our project advances on all fronts simultaneously. This disciplined approach is what separates institutional-grade infrastructure development from speculative market entry.",
    phases: [
      { label: "Phase 01", desc: "Government introductions, Chamber membership established, initial institutional alignment confirmed." },
      { label: "Phase 02", desc: "Simultaneous formal applications submitted across all three regulatory bodies — currently in active review." },
      { label: "Phase 03", desc: "Preliminary approvals and confirmations received — seed capital deployed, development begins." },
    ],
  },
  es: {
    nav: {
      thesis: "Tesis", opportunity: "Oportunidad", paraguay: "Paraguay",
      structure: "Estructura", leadership: "Liderazgo", govtRelations: "Relaciones Gubernamentales",
      cta: "Consultas de Inversores",
    },
    eyebrow: "Acceso Regulatorio y Relaciones Gubernamentales",
    headline: "Relaciones directas con las instituciones que importan",
    lead: "Ocelot Global ha establecido un compromiso activo y directo con cada institución gubernamental clave en el proceso de aprobación de infraestructura de IA de Paraguay. Estas no son relaciones intermediarias o intermediadas — son diálogos de primera mano y continuos a nivel de toma de decisiones.",
    membershipLabel: "Membresía Confirmada",
    membershipBody: "Ocelot Global Holdings es miembro activo de la Cámara de Comercio Paraguaya, lo que nos proporciona presencia institucional formal y participación reconocida en la comunidad empresarial y de inversión de Paraguay.",
    pillarsHeading: "Tres pilares institucionales",
    cards: [
      {
        org: "Cámara de Comercio Paraguaya",
        title: "Membresía e Incorporación Institucional",
        body: "Nuestra membresía en la Cámara proporciona acceso, presentaciones y un marco de respaldo formal que señala credibilidad a los mercados de capital internacionales y a los funcionarios gubernamentales paraguayos por igual.",
      },
      {
        org: "ANDE — Administración Nacional de Electricidad",
        title: "Autoridad Reguladora de la Red Eléctrica",
        body: "Mantenemos diálogo directo con el liderazgo técnico y de planificación de ANDE — el organismo que controla el acceso a la red, los acuerdos de suministro eléctrico y la interconexión de alta tensión para todas las instalaciones a escala industrial en Paraguay.",
      },
      {
        org: "Ministerio de Industria y Comercio",
        title: "Autoridad de Incentivos a la Inversión",
        body: "Ocelot mantiene una relación activa con el MIC — el ministerio responsable de las aprobaciones de incentivos a la inversión, la clasificación de políticas industriales y la calificación regulatoria para proyectos de capital extranjero.",
      },
    ],
    bottomHeading: "Un camino metódico y coordinado hacia la aprobación",
    bottomBody: "La estrategia regulatoria de Ocelot no es oportunista. Es un programa de compromiso estructurado y secuenciado — desarrollado específicamente para el entorno institucional paraguayo — que hace avanzar cada relación gubernamental en sincronía, asegurando que ninguna aprobación se convierta en un cuello de botella y que nuestro proyecto avance en todos los frentes simultáneamente. Este enfoque disciplinado es lo que separa el desarrollo de infraestructura de grado institucional de la entrada especulativa al mercado.",
    phases: [
      { label: "Fase 01", desc: "Presentaciones gubernamentales, membresía en la Cámara establecida, alineación institucional inicial confirmada." },
      { label: "Fase 02", desc: "Solicitudes formales simultáneas presentadas ante los tres organismos reguladores — actualmente en revisión activa." },
      { label: "Fase 03", desc: "Aprobaciones y confirmaciones preliminares recibidas — capital semilla desplegado, inicio del desarrollo." },
    ],
  },
};

const cardIcons = [<Building2 size={28} />, <Zap size={28} />, <Globe size={28} />];

// ─── Organisation logos ───────────────────────────────────────────────────────
const ORG_LOGOS = [
  {
    src: "https://usapacc.org/wp-content/uploads/2022/12/pacc-2.png",
    alt: "Paraguayan-American Chamber of Commerce",
  },
  {
    src: "https://www.ande.gov.py/img/logoande.png",
    alt: "ANDE – Administración Nacional de Electricidad",
  },
  {
    src: "https://www.mic.gov.py/wp-content/uploads/2023/08/cropped-MINISTERIO-DE-INDUSTRIA-Y-COMERCIO-Curvas-01.png",
    alt: "Ministerio de Industria y Comercio",
  },
];

const OrgLogo = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`inline-flex items-center justify-center bg-white rounded-lg px-3 py-2 ${className}`}>
    <img src={src} alt={alt} className="h-8 w-auto object-contain" />
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function GovernmentRelations() {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('ocelot-lang') as Lang) || 'en'
  );

  const content = t[lang];

  const toggleLang = () => {
    const next: Lang = lang === 'en' ? 'es' : 'en';
    setLang(next);
    localStorage.setItem('ocelot-lang', next);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <div className="min-h-screen">

      {/* ── Navbar (same structure as main site) ─────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <a href="/" className="text-xl font-bold tracking-tighter text-secondary font-headline uppercase">
            OCELOT GLOBAL
          </a>

          {/* Nav links — home sections + active current page */}
          <div className="hidden md:flex items-center gap-10 font-headline uppercase text-xs tracking-widest text-on-surface-variant">
            <a href="/#thesis"      className="hover:text-on-surface transition-colors">{content.nav.thesis}</a>
            <a href="/#opportunity" className="hover:text-on-surface transition-colors">{content.nav.opportunity}</a>
            <a href="/#paraguay"    className="hover:text-on-surface transition-colors">{content.nav.paraguay}</a>
            <a href="/#structure"   className="hover:text-on-surface transition-colors">{content.nav.structure}</a>
            <a href="/#leadership"  className="hover:text-on-surface transition-colors">{content.nav.leadership}</a>
            {/* Active page */}
            <span className="text-secondary border-b-2 border-secondary pb-1">{content.nav.govtRelations}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-surface-container hover:border-primary/50 transition-all font-headline font-bold text-xs tracking-widest text-on-surface-variant hover:text-primary"
              title={lang === 'en' ? 'Ver en Español' : 'View in English'}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="flex items-center gap-2"
                >
                  {lang === 'en' ? <><SpainFlag /> ES</> : <><USFlag /> EN</>}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.a
              href={`mailto:${CONTACT_EMAIL}?subject=Investor%20Inquiries`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-surface px-6 py-2 rounded-full font-headline font-bold uppercase text-xs tracking-widest transition-all glow-teal"
            >
              {content.nav.cta}
            </motion.a>
          </div>
        </div>
      </nav>

      {/* ── Hero / Intro ──────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>

          <section className="pt-40 pb-20 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div {...fadeInUp}>
                <span className="text-primary font-headline uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
                  {content.eyebrow}
                </span>
                <h1 className="font-headline text-5xl md:text-6xl font-bold uppercase tracking-tighter text-on-surface mb-8 max-w-4xl leading-[1.0]">
                  {content.headline}
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
                  {content.lead}
                </p>
              </motion.div>

              {/* Membership Banner */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mt-14 glass-panel rounded-xl p-8 border-l-[4px] border-primary flex flex-col md:flex-row gap-6 items-center"
              >
                <span className="shrink-0 px-3 py-1 bg-primary text-surface text-[10px] tracking-widest font-bold rounded-full uppercase font-headline whitespace-nowrap">
                  {content.membershipLabel}
                </span>
                <OrgLogo src={ORG_LOGOS[0].src} alt={ORG_LOGOS[0].alt} className="shrink-0" />
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {content.membershipBody}
                </p>
              </motion.div>
            </div>
          </section>

          {/* ── Three Pillar Cards ────────────────────────────────────────── */}
          <section className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div {...fadeInUp} className="mb-12">
                <span className="text-primary font-headline uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                  {content.pillarsHeading}
                </span>
                <div className="h-px bg-white/5 w-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.cards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                    className="p-8 bg-surface-container rounded-xl border-l-[4px] border-primary/20 hover:border-primary transition-all duration-500 hover:bg-surface-bright group flex flex-col"
                  >
                    {/* Logo + icon row */}
                    <div className="flex items-center justify-between mb-6">
                      <OrgLogo src={ORG_LOGOS[i].src} alt={ORG_LOGOS[i].alt} />
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {cardIcons[i]}
                      </div>
                    </div>
                    <p className="text-primary font-headline text-[10px] font-bold uppercase tracking-widest mb-3">
                      {card.org}
                    </p>
                    <h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tight text-on-surface">
                      {card.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {card.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Bottom: Strategy + Phases ─────────────────────────────────── */}
          <section className="py-32 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                {/* Left: heading + body */}
                <motion.div {...fadeInUp}>
                  <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-on-surface mb-8 leading-[1.05]">
                    {content.bottomHeading}
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {content.bottomBody}
                  </p>
                </motion.div>

                {/* Right: phase steps */}
                <div className="flex flex-col gap-0">
                  {content.phases.map((phase, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                      className="relative flex gap-6 pb-10 last:pb-0"
                    >
                      {/* Connector line */}
                      {i < content.phases.length - 1 && (
                        <div className="absolute left-5 top-12 bottom-0 w-px bg-primary/20" />
                      )}
                      {/* Badge */}
                      <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-surface-container border border-primary/30 rounded-lg z-10">
                        <span className="font-headline text-[10px] font-bold text-primary leading-none">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      {/* Content */}
                      <div className="pt-1">
                        <p className="font-headline text-xs font-bold text-primary uppercase tracking-widest mb-2">
                          {phase.label}
                        </p>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          {phase.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Footer (same as main site) ───────────────────────────────── */}
          <footer className="bg-surface-container-lowest border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-secondary font-bold text-[10px] tracking-[0.4em] font-headline uppercase">
                  © 2026 OCELOT GLOBAL HOLDINGS, LLC. {lang === 'en' ? 'ALL RIGHTS RESERVED.' : 'TODOS LOS DERECHOS RESERVADOS.'}
                </p>
                <div className="flex items-center gap-6 text-on-surface-variant">
                  <Globe size={16} />
                  <span className="text-[10px] tracking-widest uppercase font-headline">Miami, Florida · www.ocelot-global.com</span>
                </div>
              </div>
            </div>
          </footer>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
