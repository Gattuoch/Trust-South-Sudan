import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaHeart,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";

import Building from "../../assets/Building-Bridges.png";
import Empowering from "../../assets/Empowering-Women-Leaders.png";
import Youth from "../../assets/Youth-Leading-Change.png";
import Sensitization from "../../assets/Sensitization.png";
import VulnerableGroups from "../../assets/VulnerableGroups.png";
import FutureImpact from "../../assets/future-impact.png";
import YouthUnity from "../../assets/Youth-unity.png";
import Peace from "../../assets/Peace.png";
import Achievements from "../../assets/Achievements.png";

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
    value: 8,
    suffix: "+",
    label: "Counties Reached",
    color: "text-green-700",
    bg: "bg-green-50",
  },
  {
    icon: <FaHeart />,
    value: 3000,
    suffix: "+",
    label: "Lives Positively Impacted",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <FaHandshake />,
    value: 120,
    suffix: "+",
    label: "Peace Dialogues Facilitated",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <FaUsers />,
    value: 900,
    suffix: "+",
    label: "Youth & Community Leaders Engaged",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

/* =======================
   Stories / Impact Areas
======================= */
const stories = [
  {
    title: "Previous Achievements",
    desc:
      "Despite ongoing conflict, fragility, and social mistrust in South Sudan, TRUST South Sudan has demonstrated its ability to deliver tangible, community-led, and peace-focused outcomes that positively impact lives and strengthen social cohesion.",
    image: Achievements,
    color: "text-green-700",
  },
  {
    title: "Peace & Reconciliation",
    desc:
      "Facilitated community peace forums involving conflicting youth groups, traditional leaders, women, and religious leaders in selected counties—reducing tensions, restoring dialogue, and rebuilding trust among divided communities.",
    image: Peace,
    color: "text-emerald-600",
  },
  {
    title: "Youth Unity & Leadership Empowerment",
    desc:
      "Organized youth leadership and cultural exchange initiatives that brought together young people from different ethnic backgrounds to participate in joint social and development activities, fostering unity and a shared national identity.",
    image: YouthUnity,
    color: "text-blue-600",
  },
  {
    title: "Support to Vulnerable Groups",
    desc:
      "Implemented small-scale livelihood and psychosocial support programs empowering vulnerable women, widows, internally displaced persons, and conflict-affected youth—enhancing resilience, dignity, and social stability.",
    image: VulnerableGroups ,
    color: "text-orange-500",
  },
  {
    title: "Community Sensitization & Awareness",
    desc:
      "Conducted civic education and awareness campaigns on peacebuilding, coexistence, genocide prevention, and social cohesion, strengthening informed participation and community responsibility.",
    image: Sensitization,
    color: "text-purple-600",
  },
  {
    title: "Future Impact & Expansion",
    desc:
      "With stronger partnerships and sufficient funding, TRUST South Sudan aims to expand reconciliation programs, promote national unity beyond tribal lines, strengthen livelihoods, support governance, and advance climate resilience for long-term national recovery.",
    image: FutureImpact,
    color: "text-teal-600",
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
            Peacebuilding, unity, and sustainable development in action
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
        <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
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

                <span
                  className={`mt-6 inline-flex items-center gap-2 font-medium ${story.color}`}
                >
                  Learn More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurImpact;
