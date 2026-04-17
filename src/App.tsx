/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Zap, 
  Droplets, 
  Cpu, 
  Factory, 
  Handshake, 
  TrendingUp, 
  CheckCircle, 
  Brain,
  ShieldCheck,
  Building2,
  Globe,
  Leaf,
  Users,
  ArrowRight,
  ChevronRight,
  BarChart3
} from 'lucide-react';

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCleADSqTjQPXAjn-9dw_PeOZGsmGGXGJggzsNnggziaVrxoK49YEEWgbUMFu_G9Q9OtYgaVOrmR5HFJ6YaPKuYsN8a_W903xHTBi7QDxIZkv_DS-bUbSWQ_qYLeyb0K8s6rE6l3Bp8OR1bon-bB7kAZUlnNXkqE3OsWLXyIPE8IDKUuj3Q7FRPg5og200-WiBhNiRMkn8LOZjQOn50yOsBktbxkkYWeRMvdXxxizwvf40wZbU3Lc7Jk8iwXygmT6NzV5ZbhdDt_rc",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPmKfmvohTMKdCBsRSDHvXaa3Lx5IufQSgO9Nqh_g1cbThPnjs7l4JCPVdPNIaALVy1ZIgV11_WjM5d4AGGzrkMGFqWBGc4jY39e855D-nfWM06Iph1WH_lUwlCYGMd24Tm5RP1Wi3cKHlneOCRl8JHO7XLPe6iQ5LKTz1ARqgIjRj1O9AIdz4Y6h83VeqwhwQoxWP-QXCOD2jZEqAy_5o84TsEyEAU430nNJkaTlbQOk_ZnW2S8v5FPvmQTlqvMfs0hlAh_wqQk8",
  palm: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfr1xroQ8AoNC-WE8wEFNZFN9w_IqLf20p6uf7tb1CfTuDdFM-dsJt8wFwOhN5VPvVr4ad3JAtsZaT81WvIE0IHR2QxPWTRhOtTOTAcuZPjQ2Lp8dBRa2-mo6JRMZJuGUuNq-I7yx7BuokkwUpoyuqVJVYkwCS9rUWPhYr5hZwySWeGuxz5Y0Xt8YUSGYZeT_1aEO3p0URqzweLMeJ9Ite8VU0IKBTM8SL1XP0nHTM9KtEt2a8_asoIf0QjxYAwkRlTnidO0Qwivo",
  miami: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5nPIplyeolfbTuZ7-q_P70YmY6a7QMemMQJx_A8wVQBr-M2B46YTg1fcrcLYC5bfze8Td0fWjR2o26AjLwArYY5e12yP_zJa7kkl9UgQ-JcYsye1taJHINYGKQDaPUkO3bRCU-QYo-uBTTcbEcGFfXMyDJiulSbAgBd2hX9KYLj_b_48GuAIjgEAn8q7f5ppVJdWNQGreQKLTwdBRulhaQJConYyqd5Dv01XYjrV98RRsbpk7URJT3sWtG8uhQIZECDcSF4yjcAI",
  asuncion: "https://lh3.googleusercontent.com/aida/ADBb0uiupcwR8-6B7vJ0mkx5Vij6OjtfZYlGx6JwpgPXcc__ujchGo6r0R8iCqRarlSiVGx3M0pMpSGZsKUYEO3iwaOiE-0ivIFx1IKaPuAlkgqcdbe8Z9wgLYLbmvoJFLRhAQYCinj-ddngSw4CHCOMXqr62IHLZyuIdIGR6APatdCpYBnvWsEllW6kwJ2xaSyobYghaXdbxUuc3Xxnd5E9TG9YrQ6wHqL7nLcrmarVDIR1u9y676DoCxyHuTo"
};

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

export default function App() {
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

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-secondary font-headline uppercase">
            OCELOT GLOBAL
          </div>
          <div className="hidden md:flex items-center gap-10 font-headline uppercase text-xs tracking-widest text-on-surface-variant">
            <a href="#thesis" className="text-secondary border-b-2 border-secondary pb-1 transition-all">Thesis</a>
            <a href="#opportunity" className="hover:text-on-surface transition-colors">Opportunity</a>
            <a href="#paraguay" className="hover:text-on-surface transition-colors">Paraguay</a>
            <a href="#structure" className="hover:text-on-surface transition-colors">Structure</a>
            <a href="#operations" className="hover:text-on-surface transition-colors">Operations</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-surface px-6 py-2 rounded-full font-headline font-bold uppercase text-xs tracking-widest transition-all glow-teal"
          >
            Investor Portal
          </motion.button>
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
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl md:text-[8rem] font-bold tracking-tighter text-on-surface uppercase leading-[0.9] mb-8"
          >
            Converting <span className="text-primary italic">Water</span><br />Into Compute
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-light mb-12"
          >
            OCELOT GLOBAL provides institutional access to the world’s most efficient energy-to-compute arbitrage, powered by the world's largest hydroelectric facility.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="bg-primary text-surface px-8 py-4 rounded-full font-headline font-bold uppercase tracking-widest hover:glow-teal transition-all duration-300">
              Request Institutional Access
            </button>
            <div className="flex items-center gap-3 px-6 py-4 glass-panel rounded-full">
              <BarChart3 size={18} className="text-secondary" />
              <span className="text-[10px] font-headline uppercase tracking-[0.2em] text-on-surface-variant">
                Live Power Rate: <span className="text-secondary font-bold">$35/MWh</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thesis Section */}
      <section id="thesis" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Investment Thesis" 
            subtitle="Securing infrastructure at the intersection of sovereign energy surpluses and global compute demand."
          />
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Factory size={32} />, title: "Powered Shell", desc: "Vertical integration of land, power contracts, and advanced facility engineering to eliminate external bottlenecks." },
              { icon: <Zap size={32} />, title: "Energy Arbitrage", desc: "Capturing the spread between $0.035/kWh surplus energy and global high-performance compute market rates." },
              { icon: <Handshake size={32} />, title: "Sovereign Partnership", desc: "Direct engagement with national energy authorities ensuring long-term grid stability and regulatory alignment." },
              { icon: <TrendingUp size={32} />, title: "Proven Market", desc: "Strategic deployment of capital into established, liquid compute cycles with predictable yield profiles." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-8 bg-surface-container rounded-xl border-l-[4px] border-primary/20 hover:border-primary transition-all duration-500 hover:bg-surface-bright group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Arbitrage Section (Bento Grid) */}
      <section id="opportunity" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Energy-Compute Arbitrage" 
            align="left"
          />
          <div className="grid grid-cols-12 gap-6">
            {/* Advantage Card */}
            <motion.div 
              {...fadeInUp}
              className="col-span-12 lg:col-span-8 p-10 glass-panel rounded-2xl flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-3 py-1 bg-primary text-surface text-[10px] tracking-widest font-bold rounded-full uppercase">Global Benchmark</span>
                  <span className="text-on-surface-variant text-[10px] font-headline uppercase tracking-widest">Power Cost Comparison</span>
                </div>
                <h3 className="font-headline text-3xl md:text-4xl font-bold uppercase leading-none mb-12">The Paraguayan Advantage</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <div className="space-y-4">
                  <p className="text-on-surface-variant uppercase text-[10px] tracking-widest font-bold">US Industrial Average</p>
                  <p className="text-5xl font-headline font-bold text-outline-variant opacity-50">$85.00<span className="text-xl">/MWh</span></p>
                  <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} className="h-full bg-outline-variant" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-secondary uppercase text-[10px] tracking-widest font-bold">Ocelot Global Rate</p>
                  <p className="text-7xl font-headline font-bold text-secondary">$35.00<span className="text-2xl">/MWh</span></p>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "35%" }} transition={{ delay: 0.5 }} className="h-full bg-secondary shadow-[0_0_15px_rgba(107,254,156,0.5)]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Ready Card */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container rounded-2xl p-10 flex flex-col justify-center gap-6"
            >
              <Brain size={48} className="text-primary" />
              <div>
                <p className="text-primary font-headline text-5xl font-bold mb-2">60%</p>
                <p className="font-headline uppercase font-bold text-xl mb-4">AI Ready</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">Surplus hydroelectric energy provides the perfect thermal and cost profile for next-generation AI training clusters.</p>
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div 
              {...fadeInUp}
              className="col-span-12 md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-2xl h-[400px]"
            >
              <img src={IMAGES.map} className="absolute inset-0 w-full h-full object-cover opacity-50 contrast-125" alt="Map" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="font-headline font-bold text-secondary uppercase tracking-tighter text-3xl">Itaipu Synergy</p>
              </div>
            </motion.div>

            {/* Yield Generation Card */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="col-span-12 lg:col-span-8 bg-surface-container rounded-2xl p-10 flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="flex-1">
                <h4 className="font-headline text-2xl font-bold uppercase mb-6">Yield Generation</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">Our arbitrage model converts stranded energy value into liquid returns by co-locating compute assets directly at the source of generation.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle size={18} className="text-primary" />
                    <span>Zero Carbon Footprint</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle size={18} className="text-primary" />
                    <span>99.9% Grid Reliability</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <motion.circle 
                    cx="96" cy="96" r="80" 
                    fill="none" 
                    stroke="var(--color-secondary)" 
                    strokeWidth="8" 
                    strokeDasharray="502.4"
                    initial={{ strokeDashoffset: 502.4 }}
                    whileInView={{ strokeDashoffset: 502.4 * (1 - 0.142) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-headline font-bold text-secondary">14.2%</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Target IRR</span>
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
            <span className="text-primary font-headline uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Structural Excellence</span>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter">Paraguay Advantages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { icon: <Droplets />, title: "Itaipu Dam", desc: "Direct access to the world’s most productive renewable energy generator, ensuring infinite scalability." },
              { icon: <ShieldCheck />, title: "Investment Grade", desc: "Stable geopolitical environment with recent sovereign upgrades for secure institutional flow." },
              { icon: <Building2 />, title: "1% Tax Regime", desc: "Attractive Maquila laws and simple 10-10-10 tax structure maximize net yield." },
              { icon: <Globe />, title: "Geo-Neutral", desc: "Strategic location provides a vital hedge against North American and Eurasian volatility." },
              { icon: <Leaf />, title: "100% Green", desc: "Fulfilling the most stringent ESG mandates through purely hydroelectric sourcing." },
              { icon: <Users />, title: "Young Workforce", desc: "Highly adaptable, young population providing a reliable labor pool for infrastructure." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-6"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg text-primary">
                  {item.icon}
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
          <SectionHeader title="Fund Architecture" align="center" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
            <div className="w-full md:w-64 p-8 glass-panel rounded-xl border-dashed border-secondary/30">
              <p className="font-headline font-bold text-secondary mb-2 uppercase tracking-tight">Institutional LP</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">USD Capital Commitment</p>
            </div>
            
            <div className="flex flex-col items-center">
              <ArrowRight className="text-primary hidden md:block" size={32} />
              <ArrowRight className="text-primary md:hidden rotate-90" size={32} />
            </div>

            <div className="w-full md:w-80 p-10 bg-surface-container-highest rounded-2xl border border-primary/40 relative transform hover:scale-105 transition-transform duration-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-surface text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                Luxembourg / Cayman
              </div>
              <p className="font-headline font-bold text-2xl mb-2 uppercase tracking-tight">Ocelot Global Fund I</p>
              <p className="text-xs text-secondary uppercase tracking-[0.2em] font-medium">Strategic SPV Management</p>
            </div>

            <div className="flex flex-col items-center">
              <ArrowRight className="text-primary hidden md:block" size={32} />
              <ArrowRight className="text-primary md:hidden rotate-90" size={32} />
            </div>

            <div className="w-full md:w-64 p-8 glass-panel rounded-xl border-dashed border-secondary/30">
              <p className="font-headline font-bold text-secondary mb-2 uppercase tracking-tight">Asset Deployment</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Paraguay Powered Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations */}
      <section id="operations" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Global Operations" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                city: "Miami, USA", 
                role: "Capital Markets & Compliance", 
                desc: "Our North American HQ handles LP relations, sovereign regulatory alignment, and fund administration.",
                img: IMAGES.miami
              },
              { 
                city: "Asunción, PY", 
                role: "On-Site Infrastructure", 
                desc: "Local operational teams managing facility engineering, power procurement, and hardware lifecycle maintenance.",
                img: IMAGES.asuncion
              }
            ].map((op, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl h-[450px] border border-white/5"
              >
                <img src={op.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-transform duration-700 group-hover:scale-110" alt={op.city} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="font-headline text-3xl font-bold text-secondary uppercase mb-2 tracking-tighter">{op.city}</h3>
                  <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6">{op.role}</p>
                  <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">{op.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-40 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            {...fadeInUp}
            className="font-headline text-4xl font-bold uppercase mb-6"
          >
            Request Institutional Access
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant mb-16"
          >
            Submit your credentials to access the investor data room and fund performance metrics.
          </motion.p>
          <form className="space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-secondary">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Institutional Representative"
                  className="w-full bg-surface-container border-b-2 border-transparent focus:border-primary px-6 py-5 rounded-xl transition-all outline-none" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-secondary">Work Email</label>
                <input 
                  type="email" 
                  placeholder="name@firm.com"
                  className="w-full bg-surface-container border-b-2 border-transparent focus:border-primary px-6 py-5 rounded-xl transition-all outline-none" 
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-secondary">Institutional Firm</label>
              <input 
                type="text" 
                placeholder="Fund, Family Office, or RIA Name"
                className="w-full bg-surface-container border-b-2 border-transparent focus:border-primary px-6 py-5 rounded-xl transition-all outline-none" 
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-surface py-6 rounded-2xl font-headline font-bold uppercase tracking-[0.3em] transition-all glow-teal shadow-2xl"
            >
              Initiate Inquiry
            </motion.button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-md">
              <div className="text-secondary font-bold font-headline text-lg mb-6 uppercase tracking-widest">
                OCELOT GLOBAL
              </div>
              <p className="text-on-surface-variant text-[10px] leading-relaxed uppercase tracking-[0.15em]">
                Empowering the future of decentralized intelligence through the mastery of sovereign energy surpluses. Industrial-scale infrastructure for institutional mandates.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <p className="text-primary font-bold text-[10px] tracking-widest uppercase">Platform</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">Portal</a>
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">Documentation</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-primary font-bold text-[10px] tracking-widest uppercase">Legal</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">Privacy</a>
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">Terms</a>
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">Risk Disclosure</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-primary font-bold text-[10px] tracking-widest uppercase">Company</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">Leadership</a>
                  <a href="#" className="text-on-surface-variant text-[10px] uppercase hover:text-secondary transition-colors">Newsroom</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 space-y-8">
            <div className="text-[10px] text-on-surface-variant leading-loose uppercase tracking-widest max-w-5xl">
              <p className="mb-4">IMPORTANT DISCLOSURES: THE INFORMATION PROVIDED HEREIN IS FOR INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE AN OFFER TO SELL OR A SOLICITATION OF AN OFFER TO BUY ANY SECURITIES. ANY SUCH OFFERING WILL BE MADE ONLY BY MEANS OF A CONFIDENTIAL PRIVATE PLACEMENT MEMORANDUM (PPM) AND RELATED SUBSCRIPTION DOCUMENTS.</p>
              <p>PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS. INVESTING IN CRYPTOCURRENCY MINING AND INFRASTRUCTURE ASSETS INVOLVES A HIGH DEGREE OF RISK, INCLUDING THE POTENTIAL LOSS OF ENTIRE CAPITAL. FOREIGN INVESTMENTS IN EMERGING MARKETS LIKE PARAGUAY CARRY UNIQUE RISKS INCLUDING POLITICAL VOLATILITY, CURRENCY FLUCTUATIONS, AND REGULATORY CHANGES.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-secondary font-bold text-[10px] tracking-[0.4em]">© 2026 OCELOT GLOBAL. ALL RIGHTS RESERVED.</p>
              <div className="flex items-center gap-6 text-on-surface-variant">
                <Globe size={16} />
                <span className="text-[10px] tracking-widest uppercase">Global Multi-Asset Group</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
