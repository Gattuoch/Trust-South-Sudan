import { useState, useEffect } from "react";
import { FaDove, FaPlayCircle } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import heroVideo from "../../assets/VID_20260325_145504.mp4";

// Counter Component
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

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-32 px-6 lg:px-16 bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-1000"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="max-w-2xl transform transition-all duration-1000 translate-y-0 opacity-100">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-green-300 shadow-lg mb-6 hover:bg-white/20 transition-all cursor-default">
            <FaDove className="text-green-400" />
            <span className="tracking-wide uppercase text-xs">Building Peace Together</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-2xl mb-6">
            Building a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Peaceful</span>
            <br /> &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Sustainable</span>{" "}
            <br />
            South Sudan
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-lg md:text-xl text-gray-300 font-light leading-relaxed drop-shadow-md">
            Together for Reconciliation, Unity, & Sustainable Development
            Transformation across South Sudan. Join our mission to create a lasting impact.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5 items-center">
            <a href="/donate" className="group">
              <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                <FaHandHoldingHeart className="text-xl group-hover:animate-bounce" />
                Support Our Mission
              </button>
            </a>

            <a href="#about-video" className="group cursor-pointer">
              <button className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-green-700 hover:scale-105">
                <FaPlayCircle className="text-xl group-hover:text-green-600 transition-colors" />
                Watch Full Video
              </button>
            </a>
          </div>

          {/* Stats / Counters - Modern Glassmorphism styling */}
          <div className="mt-16 grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full max-w-2xl">
            <div className="flex flex-col">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
                <Counter end={10} />+
              </p>
              <p className="text-sm font-medium text-gray-400 mt-1 uppercase tracking-wider">States Served</p>
            </div>

            <div className="flex flex-col border-l border-white/10 pl-6">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                <Counter end={5} />k+
              </p>
              <p className="text-sm font-medium text-gray-400 mt-1 uppercase tracking-wider">Lives Impacted</p>
            </div>

            <div className="flex flex-col border-l border-white/10 pl-6">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">
                <Counter end={15} />+
              </p>
              <p className="text-sm font-medium text-gray-400 mt-1 uppercase tracking-wider">Active Programs</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
