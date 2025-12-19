import { motion } from "framer-motion";
import { FaHandshake, FaGavel, FaUsers, FaLeaf } from "react-icons/fa";
import { useState, useEffect } from "react";

import heroImage1 from "../../assets/impact1.png";
import heroImage2 from "../../assets/impact2.png";
import heroImage3 from "../../assets/impact3.png";

const programs = [
  {
    icon: <FaHandshake />,
    title: "Peace & Reconciliation",
    TextColor: "text-green-700",
    BgColor: "bg-green-50",
    Accent: "bg-green-700",
    desc:
      "Facilitating community dialogues, conflict resolution training, and peacebuilding initiatives that address the root causes of conflict.",
    points: [
      "Community peace dialogues with 50+ participants",
      "Conflict resolution training for youth leaders",
      "Peace education in schools and communities",
    ],
  },
  {
    icon: <FaGavel />,
    title: "Human Rights & Legal Aid",
    TextColor: "text-green-700",
    BgColor: "bg-green-50",
    Accent: "bg-green-700",
    desc:
      "Providing legal representation, human rights education, and advocacy for marginalized communities.",
    points: [
      "Legal aid for conflict-affected families",
      "Human rights monitoring and reporting",
      "Legal education workshops for youth",
    ],
  },
  {
    icon: <FaUsers />,
    title: "Youth Empowerment",
    TextColor: "text-orange-600",
    BgColor: "bg-orange-50",
    Accent: "bg-orange-500",
    desc:
      "Equipping young people with skills, leadership training, and opportunities to become change-makers.",
    points: [
      "Leadership and life skills training",
      "Youth peacebuilding workshops",
      "Youth employment and entrepreneurship programs",
    ],
  },
  {
    icon: <FaLeaf />,
    title: "Sustainable Development",
    TextColor: "text-blue-600",
    BgColor: "bg-blue-50",
    Accent: "bg-blue-600",
    desc:
      "Implementing community-based development projects that promote environmental sustainability and economic resilience.",
    points: [
      "Community agriculture and food security projects",
      "Water and sanitation infrastructure development",
      "Renewable energy and environmental education",
    ],
  },
];

// Animations
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Programs = () => {
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // smoother: 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-28 px-6 lg:px-16"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Overlay */}
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
          <h2 className="text-4xl font-bold text-white">
            Our Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Comprehensive initiatives addressing the root causes of conflict and
            building sustainable peace
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition"
            >
              {/* Accent */}
              <div
                className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl ${program.Accent}`}
              />

              {/* Icon */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className={`flex h-14 w-14 items-center justify-center rounded-full ${program.BgColor} ${program.TextColor}`}
              >
                <span className="text-xl">{program.icon}</span>
              </motion.div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {program.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {program.desc}
              </p>

              {/* Points */}
              <ul className="mt-6 space-y-3">
                {program.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span
                      className={`mt-2 h-2 w-2 rounded-full ${program.Accent}`}
                    />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
