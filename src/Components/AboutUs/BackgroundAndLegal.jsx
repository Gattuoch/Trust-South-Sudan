import impact from "../../assets/impact-image2.png";
import { motion } from "framer-motion";
import { FaCheckCircle, FaGlobeAfrica, FaUniversity, FaGavel, FaLightbulb, FaShieldAlt } from "react-icons/fa";

// Animations
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const BackgroundAndLegal = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 lg:px-16 overflow-hidden"
      style={{ backgroundImage: `url(${impact})` }}
    >
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-teal-900/80 to-black/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-emerald-400/30 bg-emerald-500/20 text-emerald-300 font-bold tracking-widest text-sm mb-6 backdrop-blur-md">
            WHO WE ARE
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-xl">
            Background & Organizational Rationale
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-emerald-100/90 font-light leading-relaxed">
            The context and deeply rooted purpose behind Trust South Sudan
          </p>
        </motion.div>

        {/* Background & Rationale Glass Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative rounded-[2.5rem] bg-white/95 backdrop-blur-2xl p-10 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/20 mb-32"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none rounded-r-[2.5rem]" />

          <div className="grid gap-16 lg:grid-cols-2 relative z-10">
            
            {/* I. Background */}
            <motion.div variants={itemVariants} className="group flex flex-col h-full">
              <div className="flex items-center gap-5 mb-8 border-b-2 border-emerald-100 pb-6 relative">
                <div className="absolute bottom-[-2px] left-0 w-24 h-[2px] bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <FaGlobeAfrica className="text-2xl" />
                </div>
                <h3 className="text-3xl font-black text-emerald-900 tracking-tight">
                  Background
                </h3>
              </div>
              
              <div className="space-y-5 text-gray-700 text-[15.5px] leading-relaxed">
                <p>
                  South Sudan continues to face complex humanitarian, socio-economic, and governance challenges arising from prolonged conflict, displacement, institutional fragility, and climate-related shocks. Communities—particularly women, youth, and marginalized groups—remain highly vulnerable, with limited access to essential services, justice systems, and sustainable livelihoods.
                </p>
                <p>
                  It is within this context that <strong className="text-emerald-700 font-extrabold px-1 bg-emerald-50 rounded">Trust South Sudan (TSS)</strong> was established as a locally rooted, non-partisan humanitarian and development organization committed to transforming communities through trust-building, resilience strengthening, and inclusive development.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50/30 rounded-2xl border-l-[6px] border-emerald-500 shadow-sm relative overflow-hidden group-hover:shadow-md transition-shadow">
                  <div className="absolute -right-6 -bottom-6 text-emerald-500/10 rotate-12">
                     <FaLightbulb size={120} />
                  </div>
                  <p className="text-emerald-900 font-medium italic relative z-10">
                    TSS was founded on the belief that sustainable peace and development must be locally driven, supported by strong partnerships, and guided by international best practices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* II. Organizational Rationale */}
            <motion.div variants={itemVariants} className="group flex flex-col h-full">
              <div className="flex items-center gap-5 mb-8 border-b-2 border-teal-100 pb-6 relative">
                <div className="absolute bottom-[-2px] left-0 w-24 h-[2px] bg-teal-500 transition-all duration-500 group-hover:w-full" />
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-700 text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h3 className="text-3xl font-black text-teal-900 tracking-tight">
                  Organizational Rationale
                </h3>
              </div>
              
              <p className="text-gray-900 font-bold text-lg mb-6 tracking-tight">
                Trust South Sudan was created to respond to critical gaps in:
              </p>
              
              <ul className="space-y-4 mb-10 text-[15.5px]">
                {[
                  "Community-led peace building mechanisms",
                  "Inclusive governance and accountability systems",
                  "Gender-responsive programming",
                  "Locally driven humanitarian response",
                  "Long-term resilience and recovery initiatives"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:border-teal-300 hover:shadow-md transition-all cursor-default"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                      <FaCheckCircle className="text-sm" />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed text-[15.5px]">
                  TSS recognizes that while international actors play a vital role, <strong className="text-teal-700 bg-teal-50 px-1 rounded">local organizations are essential</strong> for sustainable impact, as they possess deep contextual understanding, cultural legitimacy, and continuous presence.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* LEGAL STATUS OF TSS */}
        <motion.div
           initial="hidden"
           whileInView="show"
           variants={containerVariants}
           viewport={{ once: true, margin: "-50px" }}
           className="relative"
        >
          <motion.div variants={itemVariants} className="text-center mb-16 relative z-10 w-full overflow-hidden">
             {/* Dynamic Heading Text Mask */}
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-100 to-white uppercase tracking-tight mb-8">
              LEGAL STATUS & COMPLIANCE
            </h2>
            <p className="max-w-4xl mx-auto text-xl text-emerald-50/90 leading-relaxed font-light backdrop-blur-md bg-black/20 p-8 rounded-3xl border border-white/10 shadow-2xl">
              <strong className="text-emerald-300 font-bold">Trust South Sudan</strong> is legally
              registered as a national NGO under the Relief and Rehabilitation Commission (RRC) and operates in absolute compliance with the NGO Act, 2016. 
              We adhere to all statutory requirements, uphold elite governance systems, and align deeply with national priorities.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2 relative z-10">
            
            {/* IV. Registration Authority */}
            <motion.div variants={itemVariants} className="group rounded-[2rem] bg-white/10 backdrop-blur-xl p-10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/20 transform transition-all duration-500 hover:bg-white/15 hover:-translate-y-2">
              <div className="flex items-center gap-5 mb-8 border-b border-emerald-500/30 pb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <FaUniversity className="text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight drop-shadow">
                  Registration Authority
                </h3>
              </div>
              
              <p className="text-emerald-100 font-medium text-lg mb-4">
                TSS is officially registered with the:
              </p>
              
              <div className="bg-gradient-to-br from-emerald-600/40 to-emerald-900/60 border border-emerald-400/30 p-6 rounded-2xl shadow-inner mb-8 transform group-hover:scale-[1.02] transition-transform">
                <span className="font-black text-white text-xl block mb-1 drop-shadow-md">
                  Relief and Rehabilitation Commission (RRC)
                </span>
                <span className="text-emerald-200 font-medium text-sm">
                  The statutory government body responsible for regulating NGOs in South Sudan.
                </span>
              </div>
              
              <div className="pt-6 border-t border-emerald-500/30">
                <p className="text-emerald-300 font-bold mb-5 tracking-wide text-sm uppercase">
                  This registration provides TSS with:
                </p>
                <div className="space-y-4">
                  {[
                    "Legal recognition to operate nationwide",
                    "Authority to implement humanitarian & development programs",
                    "Eligibility to partner with INGOs, UN agencies, and donors"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-black/20 rounded-xl border border-white/5 hover:border-emerald-500/50 transition-colors">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 font-bold">
                        {i + 1}
                      </div>
                      <span className="text-white font-medium text-[15px]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* V. Legal Framework */}
            <motion.div variants={itemVariants} className="group rounded-[2rem] bg-white/10 backdrop-blur-xl p-10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/20 transform transition-all duration-500 hover:bg-white/15 hover:-translate-y-2 flex flex-col">
              <div className="flex items-center gap-5 mb-8 border-b border-teal-500/30 pb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/20 border border-teal-400/40 text-teal-300 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <FaGavel className="text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight drop-shadow">
                  Legal Framework
                </h3>
              </div>

              <p className="text-teal-100 font-medium text-lg mb-4">
                Trust South Sudan operates in full compliance with:
              </p>
              
              <div className="relative bg-gradient-to-br from-teal-500 to-emerald-700 text-white p-6 rounded-2xl shadow-xl mb-8 flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-all">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-20 blur group-hover:opacity-40 transition-opacity" />
                <span className="relative z-10 font-black text-2xl tracking-widest text-center">
                  THE NGO ACT, 2016
                </span>
              </div>
              
              <p className="text-teal-100 leading-relaxed mb-6 font-medium text-[15px]">
                This supreme law governs the establishment and operation of NGOs in South Sudan, ensuring our organization deeply commits to:
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Legal Transparency",
                  "National Development",
                  "Strict Accountability",
                  "Public Interest Protection"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-black/30 p-3 rounded-xl border border-white/5 hover:bg-teal-900/40 transition-colors cursor-default">
                     <FaCheckCircle className="text-teal-400 flex-shrink-0" />
                     <span className="text-white text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-6 border-t border-teal-500/30">
                <p className="text-teal-300 font-bold mb-5 tracking-wide text-sm uppercase">
                  Statutory Compliance
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-teal-900/50 border border-teal-500/40 rounded-lg text-teal-100 text-sm font-semibold">RRC Directives</span>
                  <span className="px-4 py-2 bg-teal-900/50 border border-teal-500/40 rounded-lg text-teal-100 text-sm font-semibold">National Labor & Tax Laws</span>
                  <span className="px-4 py-2 bg-teal-900/50 border border-teal-500/40 rounded-lg text-teal-100 text-sm font-semibold">Int'l Humanitarian Standards</span>
                </div>
              </div>
            </motion.div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BackgroundAndLegal;
