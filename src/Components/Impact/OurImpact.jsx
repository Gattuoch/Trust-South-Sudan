import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaHeart,
  FaHandshake,
  FaGraduationCap,
} from "react-icons/fa";

import Building from "../../assets/Building-Bridges.png";
import Empowering from "../../assets/Empowering-Women-Leaders.png";
import Youth from "../../assets/Youth-Leading-Change.png";

/* =======================
   Counter Component
======================= */
const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return Math.floor(count);
};

/* =======================
   Stats Data
======================= */
const stats = [
  {
    icon: <FaMapMarkedAlt />,
    value: 10,
    suffix: "+",
    label: "States & Areas",
    color: "text-green-700",
    bg: "bg-green-50",
  },
  {
    icon: <FaHeart />,
    value: 5000,
    suffix: "+",
    label: "Lives Impacted",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <FaHandshake />,
    value: 200,
    suffix: "+",
    label: "Conflicts Mediated",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <FaGraduationCap />,
    value: 1500,
    suffix: "+",
    label: "Trained Leaders",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

/* =======================
   Stories Data
======================= */
const stories = [
  {
    title: "Empowering Women Leaders",
    desc:
      "Training programs have equipped over 500 women with leadership skills, enabling them to become advocates for peace in their communities.",
    image: Empowering,
    color: "text-green-700",
  },
  {
    title: "Youth Leading Change",
    desc:
      "Young people are driving environmental initiatives, planting thousands of trees and creating sustainable livelihoods for their communities.",
    image: Youth,
    color: "text-emerald-600",
  },
  {
    title: "Building Bridges",
    desc:
      "Peace dialogues have brought together formerly conflicting communities, fostering understanding and cooperation across tribal lines.",
    image: Building,
    color: "text-blue-600",
  },
];

/* =======================
   Animation
======================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* =======================
   Component
======================= */
const OurImpact = () => {
  return (
    <section className="bg-[#fafafa] py-28 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our Impact
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Creating meaningful change across South Sudan
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white p-10 text-center shadow-sm hover:shadow-md transition"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${item.bg} ${item.color}`}
              >
                <span className="text-xl">{item.icon}</span>
              </div>

              <h3 className={`mt-6 text-4xl font-bold ${item.color}`}>
                <Counter end={item.value} />
                {item.suffix}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stories */}
        <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <img
                src={story.image}
                alt={story.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  {story.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {story.desc}
                </p>

                <button
                  className={`mt-6 inline-flex items-center gap-2 font-medium cursor-pointer ${story.color}`}
                >
                  Read Story
                  <span className="text-xl">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurImpact;
