import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import highlightVideo from "../../assets/VID_20260325_145319.mp4";

const VideoHighlight = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="about-video" className="py-24 px-6 lg:px-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-green-100 opacity-50 blur-3xl mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-100 opacity-50 blur-3xl mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">
            Our Work in Action
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Witness the Impact of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Trust South Sudan</span>
          </h3>
          <p className="text-lg text-gray-600">
            See how our initiatives are fostering peace, reconciliation, and sustainable development across our communities. Your support makes this possible.
          </p>
        </div>

        {/* Video Container with Glassmorphism and Elegant styling */}
        <div className="relative mx-auto w-full group perspective-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-white/40 ring-1 ring-black/5 transform transition-transform duration-500 hover:scale-[1.01]">
            <video
              ref={videoRef}
              className="w-full h-auto max-h-[85vh] object-contain"
              onClick={togglePlay}
              controls={isPlaying}
              loop
            >
              <source src={highlightVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play Button Overlay (shown when paused) */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-all duration-300 group-hover:bg-black/30"
                onClick={togglePlay}
              >
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/50 text-white shadow-[0_0_40px_rgba(16,185,129,0.5)] transform transition-transform group-hover:scale-110">
                  <FaPlay className="text-3xl ml-2 drop-shadow-lg" />
                  
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping opacity-75"></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Decorative stats overlay */}
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                100%
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Dedication to</p>
                <p className="font-bold text-gray-900">Peacebuilding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;
