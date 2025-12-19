import { useState, useEffect } from "react";
import { FaDove } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import heroImage3 from "../../assets/peacebuilding.png";
import heroImage1 from "../../assets/togetherforPeace.png";
import heroImage2 from "../../assets/peace.png";

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
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000); // 1 second

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="bg-[#f4f8f5] py-20 lg:py-32 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <FaDove className="text-green-600" />
              Building Peace Together
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Building a{" "}
              <span className="text-[rgb(15,80,28)]">Peaceful</span>
              <br /> &{" "}
              <span className="text-[rgb(123,230,144)]">Sustainable</span>{" "}
              South <br />
              Sudan
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Together for Reconciliation, Unity, & Sustainable Development
              Transformation across South Sudan
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/donate">
              <button className="flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition cursor-pointer hover:bg-green-800">
                <FaHandHoldingHeart className="text-lg" />
                Support Our Mission
              </button>
              </a>

             <a href="/"> <button className="rounded-xl border-2 border-green-700 px-6 py-3 font-semibold cursor-pointer text-green-700 transition hover:bg-[#39e70e] hover:text-white">
                Learn More
              </button>
              </a>
            </div>

            {/* Counters */}
            <div className="mt-10 flex gap-10">
              <div>
                <p className="text-3xl font-bold text-[rgba(15,80,28,0.69)]">
                  <Counter end={10} />+
                </p>
                <p className="text-sm text-gray-500">States Served</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[rgb(114,226,136)]">
                  <Counter end={5} />k+
                </p>
                <p className="text-sm text-gray-500">Lives Impacted</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[rgb(231,100,13)]">
                  <Counter end={15}  />+
                </p>
                <p className="text-sm text-gray-500">Active Programs</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={images[currentIndex]}
              alt="Community unity"
              className="w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
