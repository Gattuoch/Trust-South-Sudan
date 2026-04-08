import {
  FaHeartbeat,
  FaBalanceScale,
  FaShieldAlt,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaHeartbeat />,
    title: "1. Human Dignity and Humanity",
    desc1:
      "At the heart of Trust South Sudan lies the unwavering commitment to human dignity. Every individual, regardless of their background, ethnicity, gender, or social status, deserves to be treated with respect, compassion, and fairness. The organization places human life and well-being above all else, ensuring that all interventions protect, preserve, and enhance dignity.",
    desc2:
      "In practical terms, this value means prioritizing vulnerable populations in humanitarian response, ensuring respectful service delivery, and designing programs that recognize the worth of every human being. Trust South Sudan believes that sustainable peace and development can only be achieved when humanity is placed at the center of all actions.",
    gradient: "from-rose-500 to-red-600",
    bgLight: "bg-red-50",
    textLight: "text-red-600",
  },
  {
    icon: <FaBalanceScale />,
    title: "2. Neutrality, Impartiality, and Independence",
    desc1:
      "Trust South Sudan strictly adheres to humanitarian principles of neutrality and impartiality, ensuring that assistance is delivered without political, ethnic, religious, or ideological bias. The organization does not take sides in conflicts and remains independent in its decision-making and operational execution.",
    desc2:
      "This value ensures that communities trust the organization equally, regardless of background or affiliation. It also strengthens partnerships with international donors and government stakeholders by guaranteeing that programs are implemented based solely on need, vulnerability, and urgency—not external influence or political interests.",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    textLight: "text-blue-600",
  },
  {
    icon: <FaShieldAlt />,
    title: "3. Accountability and Transparency",
    desc1:
      "Trust South Sudan is fully committed to accountability at all levels—towards beneficiaries, partners, donors, and government institutions. The organization ensures that resources are used efficiently, ethically, and in line with agreed objectives, with clear reporting and monitoring systems in place.",
    desc2:
      "Transparency is demonstrated through open communication, financial integrity, and regular performance reporting. Communities are actively engaged in feedback mechanisms, ensuring that their voices shape programs. This value builds trust, enhances credibility, and strengthens long-term partnerships with stakeholders.",
    gradient: "from-purple-500 to-fuchsia-600",
    bgLight: "bg-purple-50",
    textLight: "text-purple-600",
  },
  {
    icon: <FaUsers />,
    title: "4. Inclusivity and Participation",
    desc1:
      "Trust South Sudan believes that sustainable development cannot be achieved without the meaningful participation of all community members. The organization actively promotes inclusion of women, youth, persons with disabilities, and marginalized groups in decision-making processes and program implementation.",
    desc2:
      "This value ensures that no group is left behind and that all voices are heard in shaping solutions. By promoting participatory approaches, TSS strengthens ownership, enhances relevance, and ensures that interventions reflect the real needs and priorities of communities.",
    gradient: "from-amber-500 to-orange-600",
    bgLight: "bg-orange-50",
    textLight: "text-orange-600",
  },
  {
    icon: <FaLeaf />,
    title: "5. Resilience, Innovation, and Sustainability",
    desc1:
      "Trust South Sudan is committed to building long-term resilience in communities by addressing both immediate needs and underlying causes of vulnerability. The organization promotes innovative, locally driven solutions that empower communities to withstand shocks, recover from crises, and build sustainable futures.",
    desc2:
      "This value emphasizes capacity building, knowledge transfer, and systems strengthening to ensure that development gains are lasting. TSS integrates innovation in programming to improve efficiency and impact, while ensuring that all interventions are environmentally, socially, and economically sustainable.",
    gradient: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    textLight: "text-emerald-600",
  },
];

// Animations
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const CoreValues = () => {
  return (
    <section className="relative bg-gray-50 py-32 px-6 lg:px-16 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-200/20 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[50%] rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[40%] rounded-full bg-orange-200/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Heading */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-bold tracking-wider text-sm mb-4">
            OUR FOUNDATION
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Core Values
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Trust South Sudan is guided by five strong core values that define our
            identity, shape our decisions, and guide all humanitarian, peace building,
            and development interventions.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {values.map((item, index) => {
            const isLast = index === values.length - 1;
            
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -8 }}
                className={`group relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden border border-gray-100/80 ${
                  isLast ? "md:col-span-2 lg:mx-auto lg:w-2/3" : ""
                }`}
              >
                {/* Hover Top Border Graphic */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`} />

                {/* Ambient Internal Glow */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${item.bgLight}`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header Row */}
                  <div className="flex items-center gap-6 mb-8">
                    <div
                      className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out`}
                    >
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <div className="space-y-5 text-gray-600">
                    <p className="text-[15px] leading-relaxed relative">
                      <span className={`absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      {item.desc1}
                    </p>
                    <p className="text-[15px] leading-relaxed relative">
                      <span className={`absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100`} />
                      {item.desc2}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;

