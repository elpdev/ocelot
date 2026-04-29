/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Droplets,
  Factory,
  Handshake,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  Building2,
  Globe,
  Leaf,
  Wifi,
  ArrowRight,
  ChevronRight,
  DollarSign
} from 'lucide-react';

const CONTACT_EMAIL = "invest@ocelot-global.com";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCleADSqTjQPXAjn-9dw_PeOZGsmGGXGJggzsNnggziaVrxoK49YEEWgbUMFu_G9Q9OtYgaVOrmR5HFJ6YaPKuYsN8a_W903xHTBi7QDxIZkv_DS-bUbSWQ_qYLeyb0K8s6rE6l3Bp8OR1bon-bB7kAZUlnNXkqE3OsWLXyIPE8IDKUuj3Q7FRPg5og200-WiBhNiRMkn8LOZjQOn50yOsBktbxkkYWeRMvdXxxizwvf40wZbU3Lc7Jk8iwXygmT6NzV5ZbhdDt_rc",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPmKfmvohTMKdCBsRSDHvXaa3Lx5IufQSgO9Nqh_g1cbThPnjs7l4JCPVdPNIaALVy1ZIgV11_WjM5d4AGGzrkMGFqWBGc4jY39e855D-nfWM06Iph1WH_lUwlCYGMd24Tm5RP1Wi3cKHlneOCRl8JHO7XLPe6iQ5LKTz1ARqgIjRj1O9AIdz4Y6h83VeqwhwQoxWP-QXCOD2jZEqAy_5o84TsEyEAU430nNJkaTlbQOk_ZnW2S8v5FPvmQTlqvMfs0hlAh_wqQk8",
  palm: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfr1xroQ8AoNC-WE8wEFNZFN9w_IqLf20p6uf7tb1CfTuDdFM-dsJt8wFwOhN5VPvVr4ad3JAtsZaT81WvIE0IHR2QxPWTRhOtTOTAcuZPjQ2Lp8dBRa2-mo6JRMZJuGUuNq-I7yx7BuokkwUpoyuqVJVYkwCS9rUWPhYr5hZwySWeGuxz5Y0Xt8YUSGYZeT_1aEO3p0URqzweLMeJ9Ite8VU0IKBTM8SL1XP0nHTM9KtEt2a8_asoIf0QjxYAwkRlTnidO0Qwivo",
  miami: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5nPIplyeolfbTuZ7-q_P70YmY6a7QMemMQJx_A8wVQBr-M2B46YTg1fcrcLYC5bfze8Td0fWjR2o26AjLwArYY5e12yP_zJa7kkl9UgQ-JcYsye1taJHINYGKQDaPUkO3bRCU-QYo-uBTTcbEcGFfXMyDJiulSbAgBd2hX9KYLj_b_48GuAIjgEAn8q7f5ppVJdWNQGreQKLTwdBRulhaQJConYyqd5Dv01XYjrV98RRsbpk7URJT3sWtG8uhQIZECDcSF4yjcAI",
  asuncion: "/asuncion.jpg"
};

// ─── Translations ────────────────────────────────────────────────────────────
const translations = {
  en: {
    nav: {
      thesis: "Thesis", opportunity: "Opportunity", paraguay: "Paraguay",
      structure: "Structure", leadership: "Leadership", govtRelations: "Government Relations", cta: "Investor Inquiries"
    },
    hero: {
      tag: "Infrastructure Investment",
      h1a: "Converting", h1accent: "Water", h1b: "Into Compute",
      sub: "Ocelot Global Holdings develops AI data center infrastructure at the intersection of abundant hydroelectric power and global compute demand, delivering institutional-grade returns through the Paraguay Digital Energy Corridor.",
      stats: [
        { val: "100 MW", lbl: "Power Capacity" },
        { val: "$35",    lbl: "Per MWh" },
        { val: "100%",   lbl: "Renewable" },
        { val: "BBB-",   lbl: "Sovereign Rating" },
      ]
    },
    thesis: {
      title: "The Global Energy-Compute Arbitrage",
      sub: "The AI revolution has created an unprecedented demand for power. Paraguay, home to the world's second-largest hydroelectric dam, produces far more energy than it consumes. Ocelot Global bridges this gap.",
      cards: [
        { title: "Powered Shell Model", desc: "We build the substation, the building, and deliver utility power. Our tenants bring the servers, cooling, and IT equipment. This model reduces our capital exposure to $1–2.5M per megawatt while transferring technology obsolescence risk entirely to the tenant. Triple-net leases with 12–15 year terms provide stable, contracted cash flows." },
        { title: "Energy Arbitrage", desc: "Paraguay's industrial electricity tariff of $35/MWh compares to $80–150/MWh in the United States and Europe. This spread creates a development yield exceeding 15% on cost. Over a 15-year lease term, a single 100 MW facility saves tenants $330M–$1.5B versus comparable U.S. market rates." },
        { title: "Sovereign Partnership", desc: "Working directly with the Paraguayan Chamber of Commerce, the Ministry of Industry, and ANDE (the national electricity authority), we navigate the regulatory landscape to secure grid access, investment incentives, and preferential tariff structures designed specifically for AI and high-performance computing infrastructure." },
        { title: "Proven Market", desc: "Paraguay's AI data center thesis is not theoretical. Established operators already run hundreds of megawatts of hydro-powered compute in the country. Multi-billion-dollar framework agreements have been signed. Leading research institutions run large language model workloads from Paraguayan facilities. We are entering a validated market." },
      ]
    },
    opportunity: {
      title: "Power Economics That Redefine AI Infrastructure",
      sub: "The value in the digital infrastructure stack has migrated from the fiber cross-connect to the high-voltage transformer. We own the transformer.",
      col1: { tag: "Paraguay — Itaipu Dam",      num: "$35",      info: "USD-denominated tariff · 100% hydroelectric · 15-year Convergent Industries rate · Flat 24/7 baseload" },
      col2: { tag: "United States Average",       num: "$80–150",  info: "Grid-constrained markets · Northern Virginia paused · 3–5 year interconnection queues · Carbon offset requirements" },
      col3: { tag: "Arbitrage Margin",            num: "$45–115",  info: "Per MWh value created by location · Over 15 years: $330M–$1.5B savings per 100 MW facility · The economic moat" },
      yieldTitle: "Development Yield",
      yieldDesc: "Our arbitrage model converts stranded energy value into contracted cash flows by co-locating compute assets directly at the source of generation. Triple-net leases with 12–15 year terms eliminate operating cost risk and create stable, predictable returns.",
      check1: "Zero Carbon Footprint — 100% Hydroelectric",
      check2: "Technology Obsolescence Risk Transferred to Tenant",
      irrLabel: "Dev. Yield"
    },
    paraguay: {
      label: "Why Paraguay", title: "Six Structural Advantages",
      sub: "Paraguay is not an emerging market compromise. It is the optimal jurisdiction for AI infrastructure development.",
      items: [
        { title: "Itaipu Dam",                desc: "The world's second-largest hydroelectric facility at 14 GW. Paraguay is entitled to 7,000 MW but consumes roughly 5,000 MW — creating a massive, firm, renewable power surplus available for industrial consumption." },
        { title: "Investment Grade",          desc: "Moody's Baa3 and S&P BBB- sovereign ratings, both upgraded in 2024–2025. Fiscal discipline at 1.5% GDP deficit, inflation at approximately 3.5%, and a pro-investment presidential administration." },
        { title: "1% Tax Rate",              desc: "The modernized Maquila Regime (Law 7,547/2025) provides a 1% single tax on exported services — replacing the standard 10% corporate income tax plus 8% dividend tax. Data center services structured as exports qualify." },
        { title: "USD-Denominated Tariffs",  desc: "ANDE's Convergent Industries tariff (Decree 5306/2026) is denominated in U.S. dollars with annual CPI adjustments. Revenue from tenants and power costs are both dollar-linked, creating a natural currency hedge." },
        { title: "Duty-Free Imports",        desc: "Law 7,548/2025 provides complete exemption from customs duties and VAT on imported capital goods — transformers, switchgear, fiber optics, and all construction equipment. CapEx savings of 15–25%." },
        { title: "Strategic Connectivity",   desc: "15–25ms latency to São Paulo via overland fiber. Adequate for AI training workloads and the Brazilian inference market. 120–160ms to Miami / US East Coast for batch processing and model training." },
      ]
    },
    structure: {
      title: "Institutional-Grade Structure",
      sub: "U.S.-domiciled fund architecture with Paraguayan operating entity. Designed for investor comfort, regulatory compliance, and tax efficiency.",
      gpName: "Ocelot Global Holdings, LLC", gpDesc: "Florida LLC · General Partner · Management & Carried Interest",
      lpBadge: "Delaware LP",
      fundName: "Ocelot Global Fund I, LP", fundDesc: "Capital Aggregation · K-1 Tax Reporting",
      opName: "Paraguay Operating Entity (E.A.S.)", opDesc: "Asset Owner · PPA Holder · Maquila License · Land & Substation",
      ctaLabel: "For Qualified Investors",
      ctaDesc: "Detailed fund economics, capital structure, projected returns, and waterfall mechanics are available upon request to qualified investors. Please contact us to receive our confidential investment memorandum and pitch deck.",
      ctaBtn: "Request Investment Materials",
      mailSubject: "Investment%20Materials%20Request",
      mailBody: "Hello%2C%0A%0AI%20am%20a%20qualified%20investor%20interested%20in%20receiving%20the%20Ocelot%20Global%20investment%20memorandum.%0A%0AName%3A%20%0AFirm%3A%20%0A"
    },
    leadership: {
      title: "Bridging Two Worlds",
      sub: "Ocelot Global is positioned at the intersection of Miami capital markets and Latin American infrastructure development.",
      locations: [
        { city: "Miami, Florida",    role: "Capital & Investor Relations",      desc: "Headquartered in Miami, the de facto financial capital of Latin America. Our investor relations, fund administration, and strategic direction operate under U.S. law with English-language reporting, Delaware corporate governance, and full SEC compliance. We speak the language of institutional capital." },
        { city: "Asunción, Paraguay", role: "Operations & Government Relations", desc: "Direct relationships with the Paraguayan Chamber of Commerce, Ministry of Industry and Commerce, and ANDE. Our operational team navigates the regulatory landscape, manages government approvals, and oversees construction and facility operations on the ground in the Hernandarias Industrial Zone." },
      ]
    },
    contact: {
      title: "Investor Inquiries",
      sub: "For qualified investors interested in the Paraguay Digital Energy Corridor opportunity.",
      meta: ["Miami, Florida", "Ocelot Global Holdings, LLC", "www.ocelot-global.com"],
      mailSubject: "Investor%20Inquiry",
      mailBody: "Hello%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20Ocelot%20Global%20Holdings.%0A%0AName%3A%20%0AFirm%3A%20%0A"
    },
    footer: {
      desc: "Developing AI data center infrastructure at the intersection of abundant hydroelectric power and global compute demand. Industrial-scale infrastructure for institutional mandates.",
      nav: "Navigate", legal: "Legal", company: "Company",
      links: { thesis: "Thesis", opportunity: "Opportunity", paraguay: "Paraguay", structure: "Structure", privacy: "Privacy Policy", terms: "Terms", risk: "Risk Disclosure", leadership: "Leadership", contact: "Contact" },
      disclaimer1: "IMPORTANT DISCLOSURES: THIS WEBSITE IS FOR INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE AN OFFER TO SELL OR A SOLICITATION OF AN OFFER TO BUY ANY SECURITIES. ANY SUCH OFFER OR SOLICITATION WILL BE MADE ONLY BY MEANS OF A CONFIDENTIAL PRIVATE PLACEMENT MEMORANDUM (PPM) AND ONLY TO QUALIFIED INVESTORS IN ACCORDANCE WITH APPLICABLE SECURITIES LAWS.",
      disclaimer2: "PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS. INVESTMENT IN INFRASTRUCTURE ASSETS INVOLVES SIGNIFICANT RISK, INCLUDING THE POTENTIAL LOSS OF PRINCIPAL. PROJECTED RETURNS, TIMELINES, AND FINANCIAL ESTIMATES ARE FORWARD-LOOKING STATEMENTS BASED ON ASSUMPTIONS THAT MAY NOT MATERIALIZE. SECURITIES OFFERED THROUGH OCELOT GLOBAL FUND I, LP ARE SPECULATIVE, ILLIQUID, AND SUITABLE ONLY FOR SOPHISTICATED INVESTORS WHO CAN BEAR THE LOSS OF THEIR ENTIRE INVESTMENT.",
      copyright: "© 2026 OCELOT GLOBAL HOLDINGS, LLC. ALL RIGHTS RESERVED.",
      location: "Miami, Florida · www.ocelot-global.com"
    }
  },

  es: {
    nav: {
      thesis: "Tesis", opportunity: "Oportunidad", paraguay: "Paraguay",
      structure: "Estructura", leadership: "Liderazgo", govtRelations: "Relaciones Gubernamentales", cta: "Consultas de Inversores"
    },
    hero: {
      tag: "Inversión en Infraestructura",
      h1a: "Convirtiendo", h1accent: "Agua", h1b: "en Cómputo",
      sub: "Ocelot Global Holdings desarrolla infraestructura de centros de datos de IA en la intersección del poder hidroeléctrico abundante y la demanda global de cómputo, generando retornos de grado institucional a través del Corredor de Energía Digital de Paraguay.",
      stats: [
        { val: "100 MW", lbl: "Capacidad Eléctrica" },
        { val: "$35",    lbl: "Por MWh" },
        { val: "100%",   lbl: "Renovable" },
        { val: "BBB-",   lbl: "Calificación Soberana" },
      ]
    },
    thesis: {
      title: "El Arbitraje Global Energía-Cómputo",
      sub: "La revolución de la IA ha creado una demanda sin precedentes de energía. Paraguay, hogar de la segunda represa hidroeléctrica más grande del mundo, produce mucha más energía de la que consume. Ocelot Global cierra esta brecha.",
      cards: [
        { title: "Modelo de Shell Energizado", desc: "Construimos la subestación, el edificio y entregamos energía de servicios públicos. Nuestros inquilinos traen los servidores, la refrigeración y el equipo de TI. Este modelo reduce nuestra exposición de capital a $1–2.5M por megavatio mientras transfiere el riesgo de obsolescencia tecnológica completamente al inquilino. Arrendamientos triple neto con plazos de 12–15 años proveen flujos de caja estables y contratados." },
        { title: "Arbitraje Energético", desc: "La tarifa eléctrica industrial de Paraguay de $35/MWh se compara con $80–150/MWh en los Estados Unidos y Europa. Esta diferencia crea un rendimiento de desarrollo superior al 15% sobre el costo. En un plazo de arrendamiento de 15 años, una sola instalación de 100 MW ahorra a los inquilinos $330M–$1.5B frente a las tarifas comparables del mercado estadounidense." },
        { title: "Asociación Soberana", desc: "Trabajando directamente con la Cámara de Comercio de Paraguay, el Ministerio de Industria y ANDE (la autoridad eléctrica nacional), navegamos el panorama regulatorio para asegurar acceso a la red, incentivos de inversión y estructuras tarifarias preferenciales diseñadas específicamente para infraestructura de IA y computación de alto rendimiento." },
        { title: "Mercado Probado", desc: "La tesis de los centros de datos de IA en Paraguay no es teórica. Operadores establecidos ya ejecutan cientos de megavatios de cómputo alimentado por hidro en el país. Se han firmado acuerdos marco de varios miles de millones de dólares. Instituciones de investigación líderes ejecutan cargas de trabajo de modelos de lenguaje grandes desde instalaciones paraguayas. Estamos entrando a un mercado validado." },
      ]
    },
    opportunity: {
      title: "Economía de Energía que Redefine la Infraestructura de IA",
      sub: "El valor en la pila de infraestructura digital ha migrado del cruce de fibra al transformador de alta tensión. Nosotros somos dueños del transformador.",
      col1: { tag: "Paraguay — Represa de Itaipú",  num: "$35",      info: "Tarifa denominada en USD · 100% hidroeléctrico · Tarifa Industrias Convergentes 15 años · Carga base plana 24/7" },
      col2: { tag: "Promedio de Estados Unidos",     num: "$80–150",  info: "Mercados con restricción de red · Virginia del Norte suspendida · Colas de interconexión de 3–5 años · Requisitos de compensación de carbono" },
      col3: { tag: "Margen de Arbitraje",            num: "$45–115",  info: "Valor por MWh creado por ubicación · En 15 años: $330M–$1.5B de ahorro por instalación de 100 MW · La ventaja económica" },
      yieldTitle: "Rendimiento de Desarrollo",
      yieldDesc: "Nuestro modelo de arbitraje convierte el valor de energía varada en flujos de caja contratados al co-ubicar activos de cómputo directamente en la fuente de generación. Los arrendamientos triple neto de 12–15 años eliminan el riesgo de costos operativos y crean retornos estables y predecibles.",
      check1: "Huella de Carbono Cero — 100% Hidroeléctrico",
      check2: "Riesgo de Obsolescencia Tecnológica Transferido al Inquilino",
      irrLabel: "Rend. Desarrollo"
    },
    paraguay: {
      label: "Por Qué Paraguay", title: "Seis Ventajas Estructurales",
      sub: "Paraguay no es un compromiso de mercado emergente. Es la jurisdicción óptima para el desarrollo de infraestructura de IA.",
      items: [
        { title: "Represa de Itaipú",           desc: "La segunda instalación hidroeléctrica más grande del mundo con 14 GW. Paraguay tiene derecho a 7,000 MW pero consume aproximadamente 5,000 MW — creando un enorme superávit de energía renovable y firme disponible para consumo industrial." },
        { title: "Grado de Inversión",          desc: "Calificaciones soberanas Moody's Baa3 y S&P BBB-, ambas actualizadas en 2024–2025. Disciplina fiscal con déficit del 1.5% del PIB, inflación de aproximadamente 3.5% y una administración presidencial pro-inversión." },
        { title: "Tasa Impositiva del 1%",      desc: "El modernizado Régimen Maquila (Ley 7,547/2025) provee un impuesto único del 1% sobre servicios exportados — reemplazando el impuesto estándar del 10% sobre la renta corporativa más el 8% de impuesto sobre dividendos. Los servicios de centros de datos estructurados como exportaciones califican." },
        { title: "Tarifas Denominadas en USD", desc: "La tarifa de Industrias Convergentes de ANDE (Decreto 5306/2026) está denominada en dólares estadounidenses con ajustes anuales al IPC. Los ingresos de los inquilinos y los costos de energía están ambos vinculados al dólar, creando una cobertura cambiaria natural." },
        { title: "Importaciones Libres de Aranceles", desc: "La Ley 7,548/2025 provee exención completa de aranceles aduaneros e IVA sobre bienes de capital importados — transformadores, equipos de conmutación, fibra óptica y todos los equipos de construcción. Ahorros de CapEx del 15–25%." },
        { title: "Conectividad Estratégica",    desc: "15–25ms de latencia a São Paulo vía fibra terrestre. Adecuado para cargas de trabajo de entrenamiento de IA y el mercado de inferencia brasileño. 120–160ms a Miami / Costa Este de EE.UU. para procesamiento por lotes y entrenamiento de modelos." },
      ]
    },
    structure: {
      title: "Estructura de Grado Institucional",
      sub: "Arquitectura de fondo domiciliada en EE.UU. con entidad operativa paraguaya. Diseñada para la comodidad del inversor, cumplimiento regulatorio y eficiencia fiscal.",
      gpName: "Ocelot Global Holdings, LLC", gpDesc: "LLC de Florida · Socio General · Gestión e Interés Acumulado",
      lpBadge: "LP de Delaware",
      fundName: "Ocelot Global Fund I, LP", fundDesc: "Agregación de Capital · Informes Fiscales K-1",
      opName: "Entidad Operativa de Paraguay (E.A.S.)", opDesc: "Propietario de Activos · Titular de PPA · Licencia Maquila · Tierra y Subestación",
      ctaLabel: "Para Inversores Calificados",
      ctaDesc: "Los detalles de la economía del fondo, la estructura de capital, los rendimientos proyectados y la mecánica de cascada están disponibles a solicitud de inversores calificados. Contáctenos para recibir nuestro memorando de inversión confidencial y presentación.",
      ctaBtn: "Solicitar Materiales de Inversión",
      mailSubject: "Solicitud%20de%20Materiales%20de%20Inversi%C3%B3n",
      mailBody: "Hola%2C%0A%0ASoy%20un%20inversor%20calificado%20interesado%20en%20recibir%20el%20memorando%20de%20inversi%C3%B3n%20de%20Ocelot%20Global.%0A%0ANombre%3A%20%0AEmpresa%3A%20%0A"
    },
    leadership: {
      title: "Conectando Dos Mundos",
      sub: "Ocelot Global está posicionada en la intersección de los mercados de capital de Miami y el desarrollo de infraestructura latinoamericana.",
      locations: [
        { city: "Miami, Florida",     role: "Capital y Relaciones con Inversores",    desc: "Con sede en Miami, la capital financiera de facto de América Latina. Nuestras relaciones con inversores, administración de fondos y dirección estratégica operan bajo la ley estadounidense con informes en inglés, gobernanza corporativa de Delaware y pleno cumplimiento de la SEC. Hablamos el idioma del capital institucional." },
        { city: "Asunción, Paraguay", role: "Operaciones y Relaciones Gubernamentales", desc: "Relaciones directas con la Cámara de Comercio de Paraguay, el Ministerio de Industria y Comercio, y ANDE. Nuestro equipo operativo navega el panorama regulatorio, gestiona aprobaciones gubernamentales y supervisa la construcción y las operaciones de las instalaciones en la Zona Industrial de Hernandarias." },
      ]
    },
    contact: {
      title: "Consultas de Inversores",
      sub: "Para inversores calificados interesados en la oportunidad del Corredor de Energía Digital de Paraguay.",
      meta: ["Miami, Florida", "Ocelot Global Holdings, LLC", "www.ocelot-global.com"],
      mailSubject: "Consulta%20de%20Inversor",
      mailBody: "Hola%2C%0A%0AEstoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Ocelot%20Global%20Holdings.%0A%0ANombre%3A%20%0AEmpresa%3A%20%0A"
    },
    footer: {
      desc: "Desarrollando infraestructura de centros de datos de IA en la intersección del poder hidroeléctrico abundante y la demanda global de cómputo. Infraestructura a escala industrial para mandatos institucionales.",
      nav: "Navegar", legal: "Legal", company: "Empresa",
      links: { thesis: "Tesis", opportunity: "Oportunidad", paraguay: "Paraguay", structure: "Estructura", privacy: "Política de Privacidad", terms: "Términos", risk: "Divulgación de Riesgo", leadership: "Liderazgo", contact: "Contacto" },
      disclaimer1: "AVISOS IMPORTANTES: ESTE SITIO WEB ES SOLO PARA FINES INFORMATIVOS Y NO CONSTITUYE UNA OFERTA DE VENTA NI UNA SOLICITUD DE COMPRA DE VALORES. TAL OFERTA O SOLICITUD SE REALIZARÁ ÚNICAMENTE MEDIANTE UN MEMORANDO CONFIDENCIAL DE COLOCACIÓN PRIVADA (PPM) Y SOLO A INVERSORES CALIFICADOS DE ACUERDO CON LAS LEYES DE VALORES APLICABLES.",
      disclaimer2: "EL RENDIMIENTO PASADO NO ES INDICATIVO DE RESULTADOS FUTUROS. LA INVERSIÓN EN ACTIVOS DE INFRAESTRUCTURA IMPLICA UN RIESGO SIGNIFICATIVO, INCLUYENDO LA PÉRDIDA POTENCIAL DEL CAPITAL PRINCIPAL. LOS VALORES OFRECIDOS A TRAVÉS DE OCELOT GLOBAL FUND I, LP SON ESPECULATIVOS, ILÍQUIDOS Y SOLO APTOS PARA INVERSORES SOFISTICADOS QUE PUEDAN SOPORTAR LA PÉRDIDA DE TODA SU INVERSIÓN.",
      copyright: "© 2026 OCELOT GLOBAL HOLDINGS, LLC. TODOS LOS DERECHOS RESERVADOS.",
      location: "Miami, Florida · www.ocelot-global.com"
    }
  }
};

type Lang = keyof typeof translations;

// ─── Section Header ──────────────────────────────────────────────────────────
const SectionHeader = ({ title, subtitle, align = "left" }: { title: string, subtitle?: string, align?: "left" | "center" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-on-surface-variant text-lg max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// ─── Flag SVGs ────────────────────────────────────────────────────────────────
const SpainFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" className="rounded-sm">
    <rect width="20" height="14" fill="#c60b1e"/>
    <rect y="3.5" width="20" height="7" fill="#ffc400"/>
  </svg>
);

const USFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" className="rounded-sm">
    <rect width="20" height="14" fill="#B22234"/>
    <rect y="1.08" width="20" height="1.08" fill="white"/>
    <rect y="3.23" width="20" height="1.08" fill="white"/>
    <rect y="5.38" width="20" height="1.08" fill="white"/>
    <rect y="7.54" width="20" height="1.08" fill="white"/>
    <rect y="9.69" width="20" height="1.08" fill="white"/>
    <rect y="11.85" width="20" height="1.08" fill="white"/>
    <rect width="8" height="7.54" fill="#3C3B6E"/>
  </svg>
);

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('ocelot-lang') as Lang) || 'en'
  );
  const t = translations[lang];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 1 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const thesisIcons = [<Factory size={32} />, <Zap size={32} />, <Handshake size={32} />, <TrendingUp size={32} />];
  const paraguayIcons = [<Droplets />, <ShieldCheck />, <Building2 />, <DollarSign />, <Leaf />, <Wifi />];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-secondary font-headline uppercase">
            OCELOT GLOBAL
          </div>
          <div className="hidden md:flex items-center gap-10 font-headline uppercase text-xs tracking-widest text-on-surface-variant">
            <a href="#thesis"      className="text-secondary border-b-2 border-secondary pb-1 transition-all">{t.nav.thesis}</a>
            <a href="/government-relations" className="hover:text-on-surface transition-colors">{t.nav.govtRelations}</a>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { const next: Lang = lang === 'en' ? 'es' : 'en'; setLang(next); localStorage.setItem('ocelot-lang', next); }}
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
            {/* CTA */}
            <motion.a
              href={`mailto:${CONTACT_EMAIL}?subject=${t.contact.mailSubject}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-surface px-6 py-2 rounded-full font-headline font-bold uppercase text-xs tracking-widest transition-all glow-teal"
            >
              {t.nav.cta}
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-10" />
          <img
            src={IMAGES.hero}
            alt="Hydroelectric Dam"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-40 scale-110"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-headline text-xs tracking-[0.3em] uppercase text-primary mb-6"
              >
                {t.hero.tag}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-headline text-5xl md:text-[8rem] font-bold tracking-tighter text-on-surface uppercase leading-[0.9] mb-8"
              >
                {t.hero.h1a} <span className="text-primary italic">{t.hero.h1accent}</span><br />{t.hero.h1b}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-light mb-12"
              >
                {t.hero.sub}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                {t.hero.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className={`glass-panel p-6 border-t-2 ${i % 2 === 0 ? 'border-t-primary' : 'border-t-secondary'}`}
                  >
                    <p className="font-headline text-2xl font-bold text-secondary mb-1">{stat.val}</p>
                    <p className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">{stat.lbl}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Thesis Section */}
      <section id="thesis" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title={t.thesis.title} subtitle={t.thesis.sub} />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {t.thesis.cards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 bg-surface-container rounded-xl border-l-[4px] border-primary/20 hover:border-primary transition-all duration-500 hover:bg-surface-bright group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{thesisIcons[i]}</div>
                <h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tight">{card.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section id="opportunity" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title={t.opportunity.title} subtitle={t.opportunity.sub} />
          <div className="grid grid-cols-12 gap-6">
            <motion.div {...fadeInUp} className="col-span-12 lg:col-span-4 p-10 glass-panel rounded-2xl flex flex-col justify-between min-h-[320px] border-t-4 border-t-primary">
              <span className="px-3 py-1 bg-primary text-surface text-[10px] tracking-widest font-bold rounded-full uppercase self-start">{t.opportunity.col1.tag}</span>
              <div className="space-y-4 mt-8">
                <p className="text-7xl font-headline font-bold text-primary">{t.opportunity.col1.num}<span className="text-2xl">/MWh</span></p>
                <p className="text-on-surface-variant text-sm leading-relaxed">{t.opportunity.col1.info}</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="col-span-12 lg:col-span-4 p-10 glass-panel rounded-2xl flex flex-col justify-between min-h-[320px] border-t-4 border-t-white/20">
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] tracking-widest font-bold rounded-full uppercase self-start">{t.opportunity.col2.tag}</span>
              <div className="space-y-4 mt-8">
                <p className="text-7xl font-headline font-bold text-outline-variant opacity-60">{t.opportunity.col2.num}<span className="text-2xl">/MWh</span></p>
                <p className="text-on-surface-variant text-sm leading-relaxed">{t.opportunity.col2.info}</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="col-span-12 lg:col-span-4 bg-surface-container rounded-2xl p-10 flex flex-col justify-between min-h-[320px] border-t-4 border-t-secondary">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] tracking-widest font-bold rounded-full uppercase self-start">{t.opportunity.col3.tag}</span>
              <div className="space-y-4 mt-8">
                <p className="text-7xl font-headline font-bold text-secondary">{t.opportunity.col3.num}<span className="text-2xl">/MWh</span></p>
                <p className="text-on-surface-variant text-sm leading-relaxed">{t.opportunity.col3.info}</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="col-span-12 bg-surface-container rounded-2xl p-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h4 className="font-headline text-2xl font-bold uppercase mb-6">{t.opportunity.yieldTitle}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{t.opportunity.yieldDesc}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle size={18} className="text-primary" /><span>{t.opportunity.check1}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle size={18} className="text-primary" /><span>{t.opportunity.check2}</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <motion.circle cx="96" cy="96" r="80" fill="none" stroke="var(--color-secondary)" strokeWidth="8"
                    strokeDasharray="502.4" initial={{ strokeDashoffset: 502.4 }}
                    whileInView={{ strokeDashoffset: 502.4 * (1 - 0.15) }}
                    viewport={{ once: true }} transition={{ duration: 1.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-headline font-bold text-secondary">&gt;15%</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">{t.opportunity.irrLabel}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Paraguay Advantages */}
      <section id="paraguay" className="py-32 relative overflow-hidden bg-surface-container-low">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <img src={IMAGES.palm} className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <span className="text-primary font-headline uppercase tracking-[0.4em] text-xs font-bold mb-4 block">{t.paraguay.label}</span>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter">{t.paraguay.title}</h2>
            <p className="text-on-surface-variant text-lg mt-4 max-w-2xl">{t.paraguay.sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {t.paraguay.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg text-primary">{paraguayIcons[i]}</div>
                  <span className="font-headline text-xs font-bold text-primary/60 tracking-widest">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold uppercase mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Architecture */}
      <section id="structure" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader title={t.structure.title} subtitle={t.structure.sub} align="center" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
            <div className="w-full md:w-64 p-8 glass-panel rounded-xl border-dashed border-secondary/30">
              <p className="font-headline font-bold text-secondary mb-2 uppercase tracking-tight">{t.structure.gpName}</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">{t.structure.gpDesc}</p>
            </div>
            <div className="flex flex-col items-center">
              <ArrowRight className="text-primary hidden md:block" size={32} />
              <ArrowRight className="text-primary md:hidden rotate-90" size={32} />
            </div>
            <div className="w-full md:w-80 p-10 bg-surface-container-highest rounded-2xl border border-primary/40 relative transform hover:scale-105 transition-transform duration-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-surface text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                {t.structure.lpBadge}
              </div>
              <p className="font-headline font-bold text-2xl mb-2 uppercase tracking-tight">{t.structure.fundName}</p>
              <p className="text-xs text-secondary uppercase tracking-[0.2em] font-medium">{t.structure.fundDesc}</p>
            </div>
            <div className="flex flex-col items-center">
              <ArrowRight className="text-primary hidden md:block" size={32} />
              <ArrowRight className="text-primary md:hidden rotate-90" size={32} />
            </div>
            <div className="w-full md:w-64 p-8 glass-panel rounded-xl border-dashed border-secondary/30">
              <p className="font-headline font-bold text-secondary mb-2 uppercase tracking-tight">{t.structure.opName}</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">{t.structure.opDesc}</p>
            </div>
          </div>

          <motion.div {...fadeInUp} className="mt-16 max-w-2xl mx-auto p-10 glass-panel rounded-2xl text-left">
            <p className="text-primary font-headline text-[10px] font-bold uppercase tracking-widest mb-4">{t.structure.ctaLabel}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{t.structure.ctaDesc}</p>
            <motion.a
              href={`mailto:${CONTACT_EMAIL}?subject=${t.structure.mailSubject}&body=${t.structure.mailBody}`}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-primary text-surface px-8 py-4 rounded-full font-headline font-bold uppercase tracking-widest hover:glow-teal transition-all duration-300"
            >
              <ChevronRight size={18} />{t.structure.ctaBtn}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title={t.leadership.title} subtitle={t.leadership.sub} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.leadership.locations.map((loc, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group relative overflow-hidden rounded-2xl h-[450px] border border-white/5">
                <img src={i === 0 ? IMAGES.miami : IMAGES.asuncion} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-transform duration-700 group-hover:scale-110" alt={loc.city} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="font-headline text-3xl font-bold text-secondary uppercase mb-2 tracking-tighter">{loc.city}</h3>
                  <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6">{loc.role}</p>
                  <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">{loc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Inquiries */}
      <section id="contact" className="py-40 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 {...fadeInUp} className="font-headline text-4xl font-bold uppercase mb-6">{t.contact.title}</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-on-surface-variant mb-10">{t.contact.sub}</motion.p>
          <motion.a
            {...fadeInUp}
            href={`mailto:${CONTACT_EMAIL}?subject=${t.contact.mailSubject}&body=${t.contact.mailBody}`}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 bg-primary text-surface px-10 py-5 rounded-full font-headline font-bold uppercase tracking-[0.3em] transition-all glow-teal shadow-2xl mb-12"
          >
            <ChevronRight size={20} />{CONTACT_EMAIL}
          </motion.a>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col md:flex-row items-center justify-center gap-8 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">
            {t.contact.meta.map((m, i) => (
              <span key={i} className="flex items-center gap-8">
                {m}
                {i < t.contact.meta.length - 1 && <span className="hidden md:inline text-primary/30 mx-2">·</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-md">
              <div className="text-secondary font-bold font-headline text-lg mb-6 uppercase tracking-widest">OCELOT GLOBAL</div>
              <p className="text-on-surface-variant text-[10px] leading-relaxed uppercase tracking-[0.15em]">{t.footer.desc}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <p className="text-primary font-bold text-[10px] tracking-widest uppercase">{t.footer.nav}</p>
                <div className="flex flex-col gap-3">
                  <a href="#thesis"      className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">{t.footer.links.thesis}</a>
                  <a href="#opportunity" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">{t.footer.links.opportunity}</a>
                  <a href="#paraguay"    className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">{t.footer.links.paraguay}</a>
                  <a href="#structure"   className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">{t.footer.links.structure}</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-primary font-bold text-[10px] tracking-widest uppercase">{t.footer.legal}</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">{t.footer.links.privacy}</a>
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">{t.footer.links.terms}</a>
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">{t.footer.links.risk}</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-primary font-bold text-[10px] tracking-widest uppercase">{t.footer.company}</p>
                <div className="flex flex-col gap-3">
                  <a href="#leadership"           className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">{t.footer.links.leadership}</a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">{t.footer.links.contact}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 space-y-8">
            <div className="text-[10px] text-on-surface-variant leading-loose uppercase tracking-widest max-w-5xl">
              <p className="mb-4">{t.footer.disclaimer1}</p>
              <p>{t.footer.disclaimer2}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-secondary font-bold text-[10px] tracking-[0.4em]">{t.footer.copyright}</p>
              <div className="flex items-center gap-6 text-on-surface-variant">
                <Globe size={16} />
                <span className="text-[10px] tracking-widest uppercase">{t.footer.location}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
