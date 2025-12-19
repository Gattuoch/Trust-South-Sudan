import {
  FaDove,
  FaUsers,
  FaBalanceScale,
  FaLeaf,
  FaEye,
  FaHandsHelping,
  FaHeart,
  FaGavel,
} from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaDove />,
    title: "Peace & Non-violence",
    desc: "Building bridges through dialogue and peaceful resolution",
    bg: "bg-green-50",
    color: "text-green-700",
  },
  {
    icon: <FaUsers />,
    title: "Unity & Cohesion",
    desc: "Strengthening bonds across diverse communities",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    icon: <FaBalanceScale />,
    title: "Human Rights",
    desc: "Protecting dignity and justice for all people",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    desc: "Environmental protection for future generations",
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    icon: <FaEye />,
    title: "Transparency",
    desc: "Accountability in all our actions and decisions",
    bg: "bg-green-50",
    color: "text-green-700",
  },
  {
    icon: <FaHandsHelping />,
    title: "Inclusion",
    desc: "Empowering youth, women, and all marginalized groups",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    icon: <FaHeart />,
    title: "Integrity",
    desc: "Upholding honesty and ethical standards",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: <FaGavel />,
    title: "Justice for All",
    desc: "Equal rights and opportunities for every citizen",
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
];

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CoreValues = () => {
  return (
    <section className="bg-[#fafafa] py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900"
        >
          Our Core Values
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-500"
        >
          Guiding principles that drive our commitment to transforming South Sudan
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
              }}
              className="group rounded-2xl bg-white p-8 shadow-sm transition"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
              >
                <span className="text-2xl">{item.icon}</span>
              </motion.div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-green-700 transition">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
