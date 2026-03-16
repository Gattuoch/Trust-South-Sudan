// =======================
// Imports
// =======================
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaHandshake,
  FaGavel,
  FaUsers,
  FaLeaf,
  FaVenusMars,
  FaHeartbeat,
} from "react-icons/fa";

import heroImage1 from "../../assets/impact1.png";
import heroImage2 from "../../assets/impact2.png";
import heroImage3 from "../../assets/impact3.png";

// =======================
// Animations
// =======================
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// =======================
// Programs Data
// =======================
const programs = [
  {
    icon: FaHandshake,
    title: "Peace Building, Social Cohesion & Community Reconciliation",
    textColor: "text-green-700",
    bgColor: "bg-green-50",
    accent: "bg-green-700",
    desc:
      "To encourage long-term peace, harmony, social cohesion, and reconciliation among South Sudanese communities.",
    points: [
      "Community peace dialogues & mediation forums",
      "Trauma healing & psychosocial support",
      "Youth peace ambassadors programs",
      "Women as peace agents initiatives",
    ],
  },
  {
    icon: FaGavel,
    title: "Good Governance, Accountability & Rule of Law",
    textColor: "text-indigo-700",
    bgColor: "bg-indigo-50",
    accent: "bg-indigo-700",
    desc:
      "To promote transparent leadership, accountable governance, and respect for the rule of law.",
    points: [
      "Civic education & awareness",
      "Leadership & ethical governance training",
      "Human rights promotion",
      "Anti-corruption initiatives",
    ],
  },
  {
    icon: FaUsers,
    title: "Education, Youth Empowerment & Human Capital Development",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50",
    accent: "bg-orange-500",
    desc:
      "To empower children and youth with education, skills, and leadership opportunities.",
    points: [
      "Access to education programs",
      "Vocational & skills training",
      "Youth leadership development",
      "Girls’ education initiatives",
    ],
  },
  {
    icon: FaVenusMars,
    title: "Women, Gender Equality & Social Inclusion",
    textColor: "text-pink-600",
    bgColor: "bg-pink-50",
    accent: "bg-pink-600",
    desc:
      "To ensure the empowerment, protection, and inclusion of women and marginalized groups.",
    points: [
      "Women leadership participation",
      "Gender-based violence prevention",
      "Girls’ education & protection",
      "Economic empowerment for women",
    ],
  },
  {
    icon: FaHeartbeat,
    title: "Health, Humanitarian Support & Community Resilience",
    textColor: "text-red-600",
    bgColor: "bg-red-50",
    accent: "bg-red-600",
    desc:
      "To improve community health systems and humanitarian response capacity.",
    points: [
      "Community health services",
      "Emergency humanitarian response",
      "Nutrition & food security",
      "WASH programs",
    ],
  },
  {
    icon: FaLeaf,
    title: "Environment Protection & Climate Resilience",
    textColor: "text-emerald-700",
    bgColor: "bg-emerald-50",
    accent: "bg-emerald-700",
    desc:
      "To strengthen climate resilience, protect natural resources, and promote sustainability.",
    points: [
      "Climate change awareness",
      "Environmental protection",
      "Climate-resilient agriculture",
      "Disaster risk reduction",
    ],
  },
];

// =======================
// Component
// =======================
const Programs = () => {
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6 lg:py-28 lg:px-16"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Our Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-200">
            Comprehensive initiatives addressing root causes of conflict and
            building sustainable peace
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 sm:mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                variants={card}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition"
              >
                {/* Accent Bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl sm:rounded-t-3xl ${program.accent}`}
                />

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full ${program.bgColor} ${program.textColor}`}
                >
                  <Icon className="text-lg sm:text-xl" />
                </div>

                <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                  {program.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {program.desc}
                </p>

                <ul className="mt-5 sm:mt-6 space-y-3">
                  {program.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
                    >
                      <span
                        className={`mt-2 h-2 w-2 rounded-full ${program.accent}`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
