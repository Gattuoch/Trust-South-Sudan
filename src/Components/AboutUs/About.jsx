import { useState, useEffect } from "react";
import trust1 from "../../assets/trust image 1.jpg";
import trust2 from "../../assets/trust image 2.jpg";
import trust3 from "../../assets/trust image 3.jpg";

const About = () => {
  const images = [trust1, trust2, trust3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="bg-white py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

        {/* Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={images[currentIndex]}
            alt="Community unity"
            className="absolute inset-0 w-full h-full rounded-3xl object-cover shadow-xl transition-all duration-700"
          />
        </div>

        {/* Content */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-white text-xs">
              i
            </span>
            About Us
          </span>

          {/* Title */}
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 leading-tight lg:text-5xl">
            Healing the Nation , <br /> Restoring the Promise
          </h2>

          {/* Paragraphs */}
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Trust South Sudan (Together for Reconciliation, Unity, & Sustainable
            Development Transformation) is a registered national non-governmental
            organization committed to fostering peace, promoting human rights,
            and advancing sustainable development across South Sudan.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Founded on principles of transparency, accountability, and inclusive
            participation, we work with marginalized communities, conflict-affected
            populations, youth, women, and local leaders to create lasting change.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
