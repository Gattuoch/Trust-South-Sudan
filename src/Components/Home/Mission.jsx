import { FiTarget, FiCheckCircle } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="bg-slate-50/50 py-16 px-4 lg:px-10" id="mission-vision">
      <div className="mx-auto max-w-[1440px]">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Vision */}
          <div className="group relative rounded-[1.5rem] bg-white border border-green-100 shadow-md hover:shadow-lg transition-all duration-500 p-5 sm:p-7 overflow-hidden flex flex-col h-full hover:-translate-y-1">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-green-400 to-green-600" />
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-green-50/80 rounded-full blur-3xl group-hover:bg-green-100 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col mb-5">
                <div className="flex items-center justify-between w-full mb-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Vision</h3>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 text-green-600 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <HiOutlineEye className="text-2xl" />
                    </div>
                </div>
                <div className="w-12 h-1 bg-green-500 rounded-full"></div>
            </div>
            
            <div className="relative z-10 flex-grow">
              <ul className="grid gap-2.5">
                {[
                  "Trust South Sudan envisions a resilient and unified nation where peace, justice, and equal opportunity define the lives of all citizens.",
                  "We aspire to transform a society long affected by conflict, tribal divisions, and nepotism into one where diversity is embraced as a source of strength, and where institutions operate with transparency, accountability, and fairness.",
                  "Our vision is to see communities living in harmony, with restored trust in one another and in the systems that govern them.",
                  "We picture a future where individuals are valued for their skills, integrity, and contributions rather than their ethnic identity or personal connections.",
                  "For example, a nation where a qualified young graduate secures employment based on merit—not favoritism—and where leaders are chosen for their competence and commitment to public service.",
                  "Trust South Sudan aims to inspire this transformation by fostering a culture of inclusion, ethical leadership, and shared national identity."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start p-3 rounded-xl bg-gradient-to-br from-gray-50/50 to-transparent hover:from-green-50/50 hover:to-transparent transition-all border border-gray-50 hover:border-green-200 group/item hover:shadow-sm">
                    <div className="mt-0.5 bg-green-100 text-green-600 rounded-full p-1 group-hover/item:bg-green-500 group-hover/item:text-white transition-colors duration-300 flex-shrink-0">
                      <FiCheckCircle className="text-[10px] font-bold" />
                    </div>
                    <span className="text-sm text-gray-700 leading-snug font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative rounded-[1.5rem] bg-white border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-500 p-5 sm:p-7 overflow-hidden flex flex-col h-full hover:-translate-y-1">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-emerald-400 to-emerald-600" />
            <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-emerald-50/80 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col mb-5">
                <div className="flex items-center justify-between w-full mb-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Mission</h3>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-600 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                        <FiTarget className="text-2xl" />
                    </div>
                </div>
                <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4 relative z-10 flex-grow">
              <div className="p-4 rounded-xl bg-emerald-50/60 border-l-4 border-emerald-500 text-gray-800 text-sm leading-snug space-y-3 shadow-sm font-medium">
                <p>
                  The mission of Trust South Sudan is to rebuild trust, promote social cohesion, and advance sustainable peace by addressing the underlying causes of conflict, tribalism, and nepotism. We are dedicated to empowering individuals and communities through education, advocacy, and inclusive programs that strengthen unity, accountability, and equal participation in development processes.
                </p>
                <p>
                  To bring this mission to life, Trust South Sudan implements initiatives that encourage dialogue, collaboration, and community-driven solutions. For instance, we organize peace forums that bring together youth from historically divided communities to engage in open discussions, leadership training, and joint projects such as small businesses or community services.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2">Core Commitments</h4>
                <ul className="grid gap-2">
                  {[
                    { title: "Humanitarian Assistance", desc: "To deliver life-saving and life-sustaining humanitarian assistance to vulnerable populations." },
                    { title: "Peace Building", desc: "To promote sustainable peace building and social cohesion across conflict-affected communities." },
                    { title: "Women & Youth Empowerment", desc: "To empower women and youth as key drivers of development and leadership." },
                    { title: "Livelihoods & Resilience", desc: "To strengthen community resilience and sustainable livelihoods." },
                    { title: "Access to Quality Services", desc: "To enhance access to quality basic services including protection, education, and health awareness." },
                    { title: "Governance & Capacity", desc: "To strengthen local governance, accountability, and institutional capacity." },
                    { title: "Partnerships", desc: "To build strong partnerships for sustainable humanitarian and development impact." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/40 transition-all shadow-sm group/item">
                      <div className="mt-0.5 bg-emerald-100 text-emerald-600 rounded-lg p-1.5 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-colors duration-300 flex-shrink-0">
                        <FiCheckCircle className="text-[10px] font-bold" />
                      </div>
                      <div className="leading-tight">
                          <strong className="text-gray-900 block mb-0.5 text-[13px]">{idx + 1}. {item.title}</strong>
                          <span className="text-xs text-gray-600 block font-medium">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Goals & Mandate */}
          <div className="group relative rounded-[1.5rem] bg-gradient-to-br from-orange-50/80 to-amber-50/40 border border-orange-100 shadow-md hover:shadow-lg transition-all duration-500 p-5 sm:p-7 overflow-hidden flex flex-col h-full hover:-translate-y-1">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-orange-400 to-amber-500" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-100/60 rounded-full blur-3xl group-hover:bg-orange-200/50 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col mb-5">
                <div className="flex items-center justify-between w-full mb-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">Goals &<br/>Mandate</h3>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 text-orange-500 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 flex-shrink-0">
                      <FaQuoteLeft className="text-xl" />
                    </div>
                </div>
                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            </div>

            <div className="space-y-5 relative z-10 flex-grow">
              
              {/* Overview */}
              <div className="p-4 rounded-xl bg-white/70 border border-orange-100/80 shadow-sm backdrop-blur-md">
                <p className="text-sm text-gray-800 leading-snug font-semibold">
                  Trust South Sudan (TSS) is mandated to design and implement programs that save lives, restore dignity, build peace, and promote sustainable development. Our mandate is grounded in legal registration under the RRC and the NGO Act, 2016.
                </p>
              </div>

              {/* Goals */}
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Our Goals
                </h4>
                <ul className="grid gap-2">
                  {[
                    "Promote sustainable peacebuilding and national reconciliation",
                    "Strengthen national unity and social cohesion",
                    "Advance transitional justice, accountability, and healing",
                    "Combat corruption and promote good governance",
                    "Empower women and youth as agents of peace"
                  ].map((goal, idx) => (
                    <li key={idx} className="flex gap-2.5 items-center p-2.5 rounded-xl hover:bg-orange-100/50 transition-colors group/item shadow-sm border border-transparent hover:border-orange-100 bg-white/40 backdrop-blur-sm">
                      <div className="bg-orange-100 p-1.5 rounded-lg text-orange-500 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors flex-shrink-0">
                          <FiCheckCircle className="text-[10px] font-bold" />
                      </div>
                      <span className="text-xs font-semibold text-gray-800 group-hover/item:text-orange-950 transition-colors leading-tight">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Purpose */}
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Core Purpose
                </h4>
                <ul className="grid gap-2 grid-cols-1 xl:grid-cols-2">
                  {[
                    "Respond to humanitarian needs",
                    "Promote peace building",
                    "Empower marginalized",
                    "Strengthen resilience",
                    "Support development"
                  ].map((purpose, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-xs font-semibold text-gray-700 bg-white/60 p-2.5 rounded-lg border border-orange-100/70 shadow-sm hover:border-orange-200 transition-all">
                      <FiCheckCircle className="text-orange-500 flex-shrink-0 text-[10px]" />
                      <span>{purpose}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategic Mandate Areas */}
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Strategic Areas
                </h4>
                <ul className="space-y-2 text-xs text-gray-700 leading-tight bg-white/70 p-4 rounded-xl border border-orange-100/80 shadow-sm backdrop-blur-md font-medium">
                    <li className="border-b border-orange-100 pb-2 relative"><span className="absolute -left-2 top-1.5 w-1 h-1 rounded-full bg-orange-400"></span><strong className="text-orange-950">Humanitarian Response:</strong> Timely life-saving assistance for conflict, natural disasters.</li>
                    <li className="border-b border-orange-100 pb-2 relative"><span className="absolute -left-2 top-1.5 w-1 h-1 rounded-full bg-orange-400"></span><strong className="text-orange-950">Peacebuilding:</strong> Dialogue, mediation, trauma healing, and social cohesion.</li>
                    <li className="border-b border-orange-100 pb-2 relative"><span className="absolute -left-2 top-1.5 w-1 h-1 rounded-full bg-orange-400"></span><strong className="text-orange-950">Women & Youth:</strong> Support leadership, engagement, and prevent gender inequality.</li>
                    <li className="border-b border-orange-100 pb-2 relative"><span className="absolute -left-2 top-1.5 w-1 h-1 rounded-full bg-orange-400"></span><strong className="text-orange-950">Livelihoods:</strong> Agriculture, food security, and building resilience to shocks.</li>
                    <li className="relative"><span className="absolute -left-2 top-1.5 w-1 h-1 rounded-full bg-orange-400"></span><strong className="text-orange-950">Governance:</strong> Capacity building for local institutions.</li>
                </ul>
              </div>

              {/* Framework & Authority */}
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Framework & Authority
                </h4>
                <ul className="space-y-2 text-xs text-gray-700 leading-tight bg-white/70 p-4 rounded-xl border border-orange-100/80 shadow-sm backdrop-blur-md font-medium">
                    <li className="border-b border-orange-100 pb-2 relative"><span className="absolute -left-2 top-1.5 w-1 h-1 rounded-full bg-orange-400"></span><strong className="text-orange-950">Operational:</strong> Partners with stakeholders aligning with national goals.</li>
                    <li className="border-b border-orange-100 pb-2 relative"><span className="absolute -left-2 top-1.5 w-1 h-1 rounded-full bg-orange-400"></span><strong className="text-orange-950">Legal/Ethical:</strong> Guided by national laws, human rights, and internal codes.</li>
                    <li className="border-b border-orange-100 pb-2 relative"><span className="absolute -left-2 top-1.5 w-1 h-1 rounded-full bg-orange-400"></span><strong className="text-orange-950">Principles:</strong> Humanity, Neutrality, Impartiality, Independence, Accountability, Transparency.</li>
                    <li className="relative"><span className="absolute -left-2 top-1.5 w-1 h-1 rounded-full bg-orange-400"></span><strong className="text-orange-950">Authority:</strong> Implement projects, mobilize resources, form partnerships, and monitor impact.</li>
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
