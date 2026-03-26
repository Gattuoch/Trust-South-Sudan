import { FiTarget } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";

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
            <p className="text-gray-600 leading-relaxed">
              With confidence, Trust South Sudan envisions a society in which everyone, regardless of origin, can live in harmony, exercise their fundamental rights, and take an active role in democratic administration. We envision a society where everyone contributes to a sustainable and successful future, the rule of law is upheld, and there is no corruption or tribalism. Our goal is to lead the way in bringing about change by encouraging a culture of responsibility, solidarity, and fortitude among community members.
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
              Our goal encompasses the aspirations of all South Sudanese citizens and goes
              beyond conventional bounds. It is an appeal for everyone to contribute to the
              reconstruction of our society—one that not only mends the scars of the past
              but also creates a fair foundation for coming generations. As we set out on
              this transformative journey toward reconciliation and development, we extend
              an invitation to local and international partners to collaborate with us.
              Together, we can build a thriving South Sudan with a shared goal and a rich
              cultural legacy.
            </p>

            <p className="text-gray-600 leading-relaxed font-medium mb-6">
              Trust South Sudan is on a mission to promote peace, reconciliation, and
              sustainable development across our nation. Our mission focuses on the following core areas:
            </p>

            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <span><strong>Community Dialogue:</strong> Establishing safe spaces for indigenous tribes to communicate through workshops, forums, and dialogue.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <span><strong>Inclusive Education:</strong> Promoting access to quality education by implementing learning initiatives and scholarships.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <span><strong>Advocacy for Policies:</strong> Advancing policy reforms at local and national levels to address root causes of violence.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <span><strong>Restorative Justice:</strong> Supporting reconciliation by acknowledging past harms and promoting restorative practices.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <span><strong>Sustainable Economy:</strong> Expanding economic opportunities through cooperative enterprises and entrepreneurship support.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-1">•</span>
                <span><strong>Environmental Protection:</strong> Encouraging responsible environmental stewardship through sustainable agriculture.</span>
              </li>
            </ul>
          </div>

          {/* Goals & Mandate */}
          <div className="group relative rounded-[2rem] bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-10 overflow-hidden transform hover:-translate-y-1">
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-400 to-amber-500" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl group-hover:bg-orange-200 transition-colors" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 shadow-inner mb-6">
              <FaQuoteLeft className="text-3xl" />
            </div>

            <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-8">
              GOALS AND MANDATE
            </h3>

            {/* Goals */}
            <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-white p-6 shadow-sm mb-6 transition-all hover:bg-white/80">
              <h4 className="text-xl font-extrabold text-orange-600 mb-4 flex items-center gap-2">Our Goals</h4>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">✔</span> Promote sustainable peacebuilding and national reconciliation</li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">✔</span> Strengthen national unity and social cohesion</li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">✔</span> Advance transitional justice, accountability, and healing</li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">✔</span> Combat corruption and promote good governance</li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">✔</span> Empower women and youth as agents of peace</li>
              </ul>
            </div>

            {/* Mandates */}
            <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-white p-6 shadow-sm transition-all hover:bg-white/80">
              <h4 className="text-xl font-extrabold text-amber-600 mb-4 flex items-center gap-2">Our Mandates</h4>
              <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div> Design and implement conflict-sensitive peacebuilding initiatives that reduce violence and foster long-term reconciliation.</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div> Promote inclusive civic engagement, inter-ethnic dialogue, and social cohesion programs.</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div> Advocate for and support transitional justice mechanisms that restore dignity to victims.</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div> Support anti-corruption advocacy, civic oversight, and governance reforms.</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div> Implement people-centered, conflict-sensitive development programs that improve livelihoods.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
