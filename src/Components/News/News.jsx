import { FaUsers, FaGavel } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import trust1 from "../../assets/trust image 1.jpg";
import trust2 from "../../assets/trust image 2.jpg";
import trust3 from "../../assets/trust image 3.jpg";

export default function News() {
  return (
    <section className="bg-[#faf9f6] mt-3.5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed about our latest initiatives, achievements, and community stories
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Individual */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-emerald-700 overflow-hidden hover:shadow-xl transition-shadow">
            <img src={trust1} alt="Peace Dialogues" className="w-full h-48 object-cover" />
            <div className="p-8">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-emerald-50 mb-6 -mt-14 relative z-10 shadow-sm border border-emerald-100">
                <LuCalendar className="text-emerald-700 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Peace Dialogues in Juba
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We successfully facilitated a peace dialogue bringing together 50+ participants from different tribal backgrounds in Juba, resulting in a peace agreement and reconciliation efforts.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-700">
                  <p className="text-gray-400">March 15, 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Family */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-emerald-400 overflow-hidden hover:shadow-xl transition-shadow">
            <img src={trust2} alt="Legal Aid Success" className="w-full h-48 object-cover" />
            <div className="p-8">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-emerald-50 mb-6 -mt-14 relative z-10 shadow-sm border border-emerald-100">
                <FaGavel className="text-emerald-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Legal Aid Success
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We provided legal representation and advocacy for 1,200+ conflict-affected families, helping them access justice and protection from human rights violations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-700">
                  <p className="text-gray-400">February 28, 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-orange-500 overflow-hidden hover:shadow-xl transition-shadow">
            <img src={trust3} alt="Youth Leadership Program" className="w-full h-48 object-cover" />
            <div className="p-8">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-orange-50 mb-6 -mt-14 relative z-10 shadow-sm border border-orange-100">
                <FaUsers className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Youth Leadership Program
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We trained 15,000+ youth in leadership, conflict resolution, and life skills, creating a generation of peacebuilders and community leaders.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-700">
                  <p className="text-gray-400">January 10, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
