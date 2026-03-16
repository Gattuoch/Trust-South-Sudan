import { FaHandshake, FaBalanceScale, FaUsers, FaSeedling } from "react-icons/fa";
import { useState, useEffect } from "react";

import heroImage1 from "../../assets/Impact-image1.png";
import heroImage2 from "../../assets/impact3.png";
import heroImage3 from "../../assets/impact-image.png";
import heroImage4 from "../../assets/impact-image4.png";

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

const Impact = () => {
  const images = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-24 px-6 lg:px-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-bold text-white">
          Our Impact in Numbers
        </h2>
        <p className="mt-4 text-lg text-white">
          Transforming lives and communities across South Sudan
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-700">
              <FaHandshake className="text-3xl" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-green-700">
              <Counter end={250} />+
            </h3>
            <p className="mt-2 font-medium text-gray-700">
              Peace Dialogues Facilitated
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
              <FaBalanceScale className="text-3xl" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-emerald-500">
              <Counter end={1200} />+
            </h3>
            <p className="mt-2 font-medium text-gray-700">
              Legal Cases Handled
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <FaUsers className="text-3xl" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-orange-500">
              <Counter end={15000} />+
            </h3>
            <p className="mt-2 font-medium text-gray-700">
              Community Members Reached
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FaSeedling className="text-3xl" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-blue-600">
              <Counter end={85} />+
            </h3>
            <p className="mt-2 font-medium text-gray-700">
              Development Projects Launched
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
