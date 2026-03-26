import { FaHeart, FaHandsHelping, FaBullhorn } from "react-icons/fa";
import trust4 from "../../assets/trust image 4.jpg";
import trust5 from "../../assets/trust image 5.jpg";
import trust6 from "../../assets/trust image 6.jpg";

export default function GetInvolved() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-gray-600">
            Join us in building a peaceful and sustainable future for South
            Sudan
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Donate */}
          <div className="rounded-3xl bg-[#eef6f1] text-center shadow-sm overflow-hidden hover:shadow-lg transition">
            <img src={trust4} alt="Donate" className="w-full h-48 object-cover" />
            <div className="p-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 -mt-16 relative z-10 border-4 border-[#eef6f1]">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your contribution helps us provide legal aid, peace programs, and
                sustainable development initiatives.
              </p>
              <a href="/donate">
                <button className="rounded-xl bg-emerald-700 px-8 py-3 text-white font-semibold hover:bg-emerald-800 transition cursor-pointer">
                  Make a Donation
                </button>
              </a>
            </div>
          </div>

          {/* Volunteer */}
          <div className="rounded-3xl bg-[#f1faf6] text-center shadow-sm overflow-hidden hover:shadow-lg transition">
            <img src={trust5} alt="Volunteer" className="w-full h-48 object-cover" />
            <div className="p-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 -mt-16 relative z-10 border-4 border-[#f1faf6]">
                <FaHandsHelping className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Volunteer
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Share your skills and time to support community programs,
                training sessions, and advocacy efforts.
              </p>
              <button className="rounded-xl bg-emerald-500 px-8 py-3 text-white font-semibold hover:bg-emerald-600 transition cursor-pointer">
                Become a Volunteer
              </button>
            </div>
          </div>

          {/* Advocate */}
          <div className="rounded-3xl bg-[#fff4e8] text-center shadow-sm overflow-hidden hover:shadow-lg transition">
            <img src={trust6} alt="Advocate" className="w-full h-48 object-cover" />
            <div className="p-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 -mt-16 relative z-10 border-4 border-[#fff4e8]">
                <FaBullhorn className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advocate</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Spread awareness about our mission and help amplify the voices of
                marginalized communities.
              </p>
              <button className="rounded-xl bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition cursor-pointer">
                Join Our Advocacy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
