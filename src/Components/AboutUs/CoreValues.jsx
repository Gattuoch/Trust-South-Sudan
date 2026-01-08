import {
  FaDove,
  FaUsers,
  FaHeart,
  FaGavel,
  FaBalanceScale,
  FaHandsHelping,
  FaVenusMars,
} from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaDove />,
    title: "Peace and Reconciliation",
    desc: "Our goal is to promote peaceful coexistence, reduce conflict, and heal broken relationships. We believe sustainable development begins with lasting peace.",
    points: [
      "Encouraging healing, forgiveness, and reconciliation",
      "Facilitating dialogue between opposing groups",
      "Supporting psychosocial assistance and trauma recovery",
      "Promoting peaceful negotiations and reconciliation practices",
    ],
    example:
      "For example, the organization rebuilds unity and trust through mediation, dialogue forums, and community-led peace initiatives.",
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    icon: <FaUsers />,
    title: "Unity in Diversity",
    desc: "South Sudan is home to many tribes, cultures, dialects, and political beliefs. This diversity is not a source of division, but a foundation of national strength.",
    points: [
      "Accepting and valuing every ethnic group",
      "Encouraging national identity over tribal allegiance",
      "Promoting cooperation among communities",
      "Reducing prejudice and animosity between tribes",
    ],
    example:
      "For instance, the organization ensures representation of Dinka, Nuer, Shilluk, Bari, Equatorians, women, youth, and persons with disabilities in leadership roles.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    icon: <FaHeart />,
    title: "Integrity and Transparency",
    desc: "We believe trust is built when leaders act honestly, ethically, and transparently.",
    points: [
      "Responsible and transparent financial management",
      "Open communication with donors and beneficiaries",
      "Leadership free from hidden decisions",
      "Ethical conduct at all times",
    ],
    example:
      "For example, financial and program reports are openly shared with donors, government bodies, and communities.",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: <FaBalanceScale />,
    title: "Human Dignity and Respect",
    desc: "Every human being deserves dignity and respect regardless of background, ethnicity, or belief.",
    points: [
      "Defending and promoting human rights",
      "Respecting cultural traditions",
      "Supporting conflict survivors to live with dignity",
      "Opposing discrimination and abuse",
    ],
    example:
      "For instance, the organization provides compassionate support to widows, orphans, displaced persons, and conflict victims.",
    bg: "bg-purple-50",
    color: "text-purple-600",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Empowerment",
    desc: "Real and lasting change happens when communities take ownership of their own development.",
    points: [
      "Building local leadership capacity",
      "Supporting community-led initiatives",
      "Encouraging participation in decision-making",
      "Strengthening grassroots resilience",
    ],
    example:
      "For example, young leaders are trained to manage peace initiatives rather than relying on external actors.",
    bg: "bg-yellow-50",
    color: "text-yellow-600",
  },
  {
    icon: <FaGavel />,
    title: "Justice and Equality",
    desc: "We promote social justice, fairness, and equal opportunity for all.",
    points: [
      "Ensuring equitable access to services",
      "Supporting marginalized groups",
      "Promoting equality in leadership and employment",
      "Combating injustice, inequality, and corruption",
    ],
    example:
      "For instance, women and youth are guaranteed equal access to leadership roles and programs.",
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    icon: <FaVenusMars />,
    title: "Gender Equality and Inclusivity",
    desc: "Women, youth, the elderly, and persons with disabilities are actively involved in all organizational activities.",
    points: [
      "Empowerment of women",
      "Youth leadership development",
      "Inclusion of persons with disabilities",
      "Equal participation in peace and development",
    ],
    example:
      "For example, women co-chair peace dialogues and youth lead community development programs.",
    bg: "bg-pink-50",
    color: "text-pink-600",
  },
];

// Animations
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
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
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-gray-900"
        >
          Our Core Values
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-lg text-gray-500"
        >
          Guiding principles that drive reconciliation, unity, and sustainable development
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
              }}
              className="rounded-2xl bg-white p-8 shadow-sm transition text-left"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <ul className="mt-4 list-disc list-inside text-sm text-gray-600 space-y-2">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <p className="mt-4 text-sm italic text-gray-500">
                {item.example}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
