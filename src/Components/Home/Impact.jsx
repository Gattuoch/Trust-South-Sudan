import { FaHandshake, FaBalanceScale, FaUsers, FaSeedling } from "react-icons/fa";
import { useState, useEffect } from "react";

import impact1 from "../../assets/impact1.png";
import impact2 from "../../assets/impact2.png";
import impact3 from "../../assets/impact3.png";
import impact4 from "../../assets/impact4.png";
import impact5 from "../../assets/impact5.png";
import impact6 from "../../assets/impact6.png";

const Counter = ({ end, duration = 2, decimals = 0 }) => {
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

  return decimals === 0 ? Math.floor(count) : count.toFixed(decimals);
};

const Impact = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Section: Counters */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Impact in <span className="text-emerald-600">Numbers</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming lives and communities across South Sudan with sustainable and inclusive initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-24">
          {/* Card 1 */}
          <div className="relative group rounded-3xl bg-white/60 backdrop-blur-md border border-white p-8 shadow-xl shadow-green-900/5 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 w-32 h-32 bg-green-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg shadow-green-500/30">
              <FaHandshake className="text-2xl" />
            </div>
            <h3 className="mt-8 text-5xl font-black text-green-700 font-mono tracking-tighter">
              <Counter end={250} />+
            </h3>
            <p className="mt-3 text-lg font-semibold text-gray-800">
              Peace Dialogues Facilitated
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-3xl bg-white/60 backdrop-blur-md border border-white p-8 shadow-xl shadow-emerald-900/5 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 w-32 h-32 bg-emerald-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400 text-white shadow-lg shadow-emerald-400/30">
              <FaBalanceScale className="text-2xl" />
            </div>
            <h3 className="mt-8 text-5xl font-black text-emerald-600 font-mono tracking-tighter">
              <Counter end={1200} />+
            </h3>
            <p className="mt-3 text-lg font-semibold text-gray-800">
              Legal Cases Handled
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative group rounded-3xl bg-white/60 backdrop-blur-md border border-white p-8 shadow-xl shadow-orange-900/5 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30">
              <FaUsers className="text-2xl" />
            </div>
            <h3 className="mt-8 text-5xl font-black text-orange-500 font-mono tracking-tighter">
              <Counter end={15000} />+
            </h3>
            <p className="mt-3 text-lg font-semibold text-gray-800">
              Community Members Reached
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative group rounded-3xl bg-white/60 backdrop-blur-md border border-white p-8 shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/30">
              <FaSeedling className="text-2xl" />
            </div>
            <h3 className="mt-8 text-5xl font-black text-blue-600 font-mono tracking-tighter">
              <Counter end={85} />+
            </h3>
            <p className="mt-3 text-lg font-semibold text-gray-800">
              Development Projects Launched
            </p>
          </div>
        </div>

        {/* Bottom Section: Photo Grid */}
        <div className="mt-12 text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Faces of Transformation
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses into our on-the-ground work, fostering unity and sustainable growth across communities.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Image 1: Large square, spans 2 rows */}
          <div className="group relative rounded-3xl overflow-hidden shadow-lg md:row-span-2">
            <img src={impact1} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Impact 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold text-lg">Empowering Local Leaders</p>
            </div>
          </div>

          {/* Image 2: Standard box */}
          <div className="group relative rounded-3xl overflow-hidden shadow-lg">
            <img src={impact2} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Impact 2" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold text-lg">Peace Dialogues</p>
            </div>
          </div>

          {/* Image 3: Standard box */}
          <div className="group relative rounded-3xl overflow-hidden shadow-lg">
            <img src={impact3} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Impact 3" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold text-lg">Community Bonding</p>
            </div>
          </div>

          {/* Image 4: Wide box (spans 2 columns if on large screens) */}
          <div className="group relative rounded-3xl overflow-hidden shadow-lg md:col-span-2">
            <img src={impact4} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Impact 4" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold text-lg">Rebuilding Civil Society</p>
            </div>
          </div>

          {/* Image 5: Standard box */}
          <div className="group relative rounded-3xl overflow-hidden shadow-lg">
            <img src={impact5} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Impact 5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold text-lg">Youth Training Programs</p>
            </div>
          </div>

          {/* Image 6: Standard box */}
          <div className="group relative rounded-3xl overflow-hidden shadow-lg md:col-span-3 lg:col-span-1">
            <img src={impact6} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" alt="Impact 6" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold text-lg">Sustainable Agriculture</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Impact;
