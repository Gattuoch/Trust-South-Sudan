import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaDove,
  FaTint,
  FaFemale,
  FaUsers,
  FaChartLine,
  FaCogs,
  FaClipboardCheck,
  FaCheckCircle
} from "react-icons/fa";

/* =======================
   Impact Data
======================= */
const impactData = [
  {
    title: "Livelihood Support",
    icon: <FaBriefcase />,
    gradient: "from-emerald-400 to-teal-600",
    shadow: "shadow-teal-200/50",
    textColor: "text-teal-700",
    points: [
      "Provide vocational skills training (tailoring, agriculture, small business)",
      "Distribute start-up kits and small grants",
      "Support farmer groups with seeds and tools",
    ],
  },
  {
    title: "Peace building & Social Cohesion",
    icon: <FaDove />,
    gradient: "from-blue-400 to-indigo-600",
    shadow: "shadow-blue-200/50",
    textColor: "text-blue-700",
    points: [
      "Facilitate community dialogue sessions",
      "Train youth and local leaders in conflict resolution",
      "Establish community peace committees",
    ],
  },
  {
    title: "WASH & Health Interventions",
    icon: <FaTint />,
    gradient: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-200/50",
    textColor: "text-cyan-700",
    points: [
      "Rehabilitate boreholes and water points",
      "Conduct hygiene promotion campaigns",
      "Train community health volunteers",
    ],
  },
  {
    title: "Women & Youth Empowerment",
    icon: <FaFemale />,
    gradient: "from-pink-400 to-rose-500",
    shadow: "shadow-pink-200/50",
    textColor: "text-pink-700",
    points: [
      "Establish safe spaces for women and girls",
      "Deliver life skills and leadership training",
      "Support gender-based violence (GBV) awareness and prevention",
    ],
  },
  {
    title: "Target Beneficiaries",
    icon: <FaUsers />,
    gradient: "from-orange-400 to-amber-500",
    shadow: "shadow-orange-200/50",
    textColor: "text-orange-700",
    points: [
      "Vulnerable households (internally displaced persons and host communities)",
      "Women and girls",
      "Unemployed youth",
      "Community leaders and local structures",
      "Estimated Reach: 10,000+ direct beneficiaries",
    ],
  },
  {
    title: "Expected Results",
    icon: <FaChartLine />,
    gradient: "from-violet-400 to-purple-600",
    shadow: "shadow-violet-200/50",
    textColor: "text-violet-700",
    points: [
      "Increased household income and food security",
      "Reduced interconnected conflicts",
      "Improved access to clean water and hygiene practices",
      "Enhanced protection and empowerment of women and youth",
    ],
  },
  {
    title: "Implementation Strategy",
    icon: <FaCogs />,
    gradient: "from-yellow-400 to-orange-500",
    shadow: "shadow-yellow-200/50",
    textColor: "text-yellow-700",
    points: [
      "Work closely with local authorities and community leaders",
      "Use participatory approaches to ensure community ownership",
      "Coordinate with clusters and partners such as UNICEF, World Food Programme, and United Nations Development Programmed",
    ],
  },
  {
    title: "Monitoring & Evaluation",
    icon: <FaClipboardCheck />,
    gradient: "from-indigo-400 to-blue-700",
    shadow: "shadow-indigo-200/50",
    textColor: "text-indigo-700",
    points: [
      "Baseline and end line assessments",
      "Regular field monitoring visits & feedback mechanisms",
      "Monthly and quarterly progress reports",
      "Key indicators: Reach 5000 beneficiaries, 70% income increase, reduced conflicts, access to clean water",
    ],
  },
];

/* =======================
   Animation
======================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =======================
   Component
======================= */
const OurImpact = () => {
  return (
    <section className="relative bg-slate-50 py-28 px-6 lg:px-16 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-10 left-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob"></div>
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-blue-700 uppercase">
              Proven Results
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 mb-8 leading-tight">
            Our Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Trust South Sudan has successfully delivered community-based humanitarian and peace
            building programs reaching over <strong className="font-semibold text-blue-600">10,000 beneficiaries</strong> across conflict-affected areas.
            With strong local networks and proven results in women Rise, livelihoods, and protection,
            we are well-positioned to partner with international and national NGOs to scale impact
            across South Sudan.
          </p>
        </motion.div>

        {/* Strategies / Impact Areas */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {impactData.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg ${item.shadow} mb-8 transform group-hover:rotate-6 transition-transform duration-300`}
                >
                  <span className="text-3xl drop-shadow-sm">{item.icon}</span>
                </div>

                <div className="flex items-center gap-3 mb-5 flex-grow-0">
                  <span className="text-4xl font-black text-gray-100 select-none">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <ul className="space-y-4 flex-grow relative">
                  {/* Decorative line on the left */}
                  <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent"></div>
                  
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm leading-relaxed relative">
                      <FaCheckCircle className={`mt-1 mr-3 flex-shrink-0 bg-white rounded-full relative z-10 ${item.textColor}`} />
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurImpact;