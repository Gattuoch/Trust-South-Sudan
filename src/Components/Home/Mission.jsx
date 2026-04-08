import { FiTarget } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";

const missions = [
  {
    title: "1. Humanitarian Assistance",
    boldDesc: "To deliver life-saving and life-sustaining humanitarian assistance to vulnerable populations",
    desc: "Trust South Sudan is committed to responding rapidly and effectively to communities affected by conflict, displacement, natural disasters, and extreme poverty..."
  },
  {
    title: "2. Peace Building",
    boldDesc: "To promote sustainable peace building and social cohesion across conflict-affected communities",
    desc: "TSS works to address the root causes of conflict by facilitating dialogue, reconciliation, and community-driven peace processes."
  },
  {
    title: "3. Women & Youth Empowerment",
    boldDesc: "To empower women and youth as key drivers of development and leadership",
    desc: "TSS prioritizes the empowerment of women and youth through leadership training, education, and economic opportunities."
  },
  {
    title: "4. Livelihoods & Resilience",
    boldDesc: "To strengthen community resilience and sustainable livelihoods",
    desc: "Dedicated to improving the economic and social resilience of communities by supporting livelihoods, agriculture, vocational training, and income-generating activities."
  },
  {
    title: "5. Access to Quality Services",
    boldDesc: "To enhance access to quality basic services including protection, education, and health awareness",
    desc: "TSS works to bridge the gap between underserved communities and essential services through awareness campaigns and service linkages."
  },
  {
    title: "6. Governance & Capacity",
    boldDesc: "To strengthen local governance, accountability, and institutional capacity",
    desc: "The organization supports local authorities and community structures to become more transparent, responsive, and effective."
  },
  {
    title: "7. Partnerships",
    boldDesc: "To build strong partnerships for sustainable humanitarian and development impact",
    desc: "TSS actively collaborates with international NGOs, national NGOs, UN agencies, donors, and government institutions to maximize impact."
  }
];

const MissionVision = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* Vision */}
          <div className="group relative rounded-[2rem] bg-white border border-green-50 shadow-lg hover:shadow-2xl transition-all duration-300 p-10 overflow-hidden transform hover:-translate-y-1">
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-green-500 to-green-700" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full blur-3xl group-hover:bg-green-100 transition-colors" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 shadow-inner mb-8">
              <HiOutlineEye className="text-3xl" />
            </div>

            <h3 className="text-3xl font-extrabold text-gray-900 mb-5 tracking-tight">Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Trust South Sudan envisions a peaceful, united, and resilient nation where all people live in dignity, equality, and sustainable prosperity. We aspire to a society built on trust, justice, and inclusive development, where communities are empowered to shape their own future free from conflict, vulnerability, and marginalization.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We see a South Sudan where women, youth, and all citizens actively participate in leadership, peace building, and economic growth, supported by strong and accountable institutions. Through collective effort and shared responsibility, we envision a country that transforms challenges into opportunities and stands as a model of hope, stability, and progress.
            </p>
          </div>

          {/* Mission */}
          <div className="group relative rounded-[2rem] bg-white border border-emerald-50 shadow-lg hover:shadow-2xl transition-all duration-300 p-10 overflow-hidden transform hover:-translate-y-1">
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-emerald-400 to-emerald-600" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner mb-8">
              <FiTarget className="text-3xl" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-5 tracking-tight">Mission</h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Trust South Sudan is guided by seven interconnected mission commitments that define its humanitarian identity, operational focus, and long-term development impact. These missions position the organization as a credible partner for international NGOs, national NGOs, donors, and government stakeholders.
            </p>

            <ul className="space-y-5 text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <div className="flex flex-col">
                  <span><strong>1. Humanitarian Assistance:</strong> To deliver life-saving and life-sustaining humanitarian assistance to vulnerable populations.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <div className="flex flex-col">
                  <span><strong>2. Peace Building:</strong> To promote sustainable peace building and social cohesion across conflict-affected communities.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <div className="flex flex-col">
                  <span><strong>3. Women & Youth Empowerment:</strong> To empower women and youth as key drivers of development and leadership.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <div className="flex flex-col">
                  <span><strong>4. Livelihoods & Resilience:</strong> To strengthen community resilience and sustainable livelihoods.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <div className="flex flex-col">
                  <span><strong>5. Access to Quality Services:</strong> To enhance access to quality basic services including protection, education, and health awareness.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <div className="flex flex-col">
                  <span><strong>6. Governance & Capacity:</strong> To strengthen local governance, accountability, and institutional capacity.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <div className="flex flex-col">
                  <span><strong>7. Partnerships:</strong> To build strong partnerships for sustainable humanitarian and development impact.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Goals & Mandate */}
          <div className="group relative rounded-[2rem] bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 overflow-hidden transform hover:-translate-y-1">
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-400 to-amber-500" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl group-hover:bg-orange-200 transition-colors" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 shadow-inner mb-6">
              <FaQuoteLeft className="text-3xl" />
            </div>

            <h3 className="text-3xl font-extrabold text-gray-900 mb-5 tracking-tight">
              Goals & Mandate
            </h3>

            <div className="space-y-6">
              {/* Goals */}
              <div>
                <h4 className="text-lg font-bold text-orange-600 mb-2">Our Goals</h4>
                <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Promote sustainable peacebuilding and national reconciliation</li>
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Strengthen national unity and social cohesion</li>
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Advance transitional justice, accountability, and healing</li>
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Combat corruption and promote good governance</li>
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Empower women and youth as agents of peace</li>
                </ul>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-lg font-bold text-orange-600 mb-2">Overview</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Trust South Sudan (TSS) is mandated to design and implement programs that save lives, restore dignity, build peace, and promote sustainable development. Our mandate is grounded in legal registration under the RRC and the NGO Act, 2016.
                </p>
              </div>

              {/* Core Purpose */}
              <div>
                <h4 className="text-lg font-bold text-orange-600 mb-2">Core Purpose</h4>
                <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Respond to humanitarian needs</li>
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Promote peace building & cohesion</li>
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Empower women, youth & marginalized</li>
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Strengthen livelihoods & resilience</li>
                  <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Support sustainable development</li>
                </ul>
              </div>

              {/* Strategic Mandate Areas */}
              <div>
                <h4 className="text-lg font-bold text-orange-600 mb-2">Strategic Mandate Areas</h4>
                <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <li>
                    <strong className="text-gray-800">Humanitarian Response:</strong> Timely life-saving assistance for conflict, natural disasters, and food insecurity. Interventions include emergency relief, protection, and basic needs.
                  </li>
                  <li>
                    <strong className="text-gray-800">Peacebuilding & Reconciliation:</strong> Dialogue, mediation, trauma healing, and social cohesion promotion.
                  </li>
                  <li>
                    <strong className="text-gray-800">Women & Youth Empowerment:</strong> Support leadership, engagement, and prevent gender inequality/GBV.
                  </li>
                  <li>
                    <strong className="text-gray-800">Livelihoods & Resilience:</strong> Agriculture, food security, and building resilience to shocks.
                  </li>
                  <li>
                    <strong className="text-gray-800">Governance:</strong> Capacity building for local institutions and promoting accountability.
                  </li>
                </ul>
              </div>

              {/* Legal & Ethical Basis */}
              <div>
                <h4 className="text-lg font-bold text-orange-600 mb-2">Framework & Authority</h4>
                <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                  <li><strong className="text-gray-800">Operational:</strong> Partners with stakeholders aligning with national goals.</li>
                  <li><strong className="text-gray-800">Legal/Ethical:</strong> Guided by national laws, human rights, and internal codes.</li>
                  <li><strong className="text-gray-800">Principles:</strong> Humanity, Neutrality, Impartiality, Independence, Accountability, Transparency.</li>
                  <li><strong className="text-gray-800">Authority:</strong> Implement projects, mobilize resources, form partnerships, and monitor impact.</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
