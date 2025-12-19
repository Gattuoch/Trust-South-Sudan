import { useState, useEffect } from "react";
import aboutImg from "../../assets/peacebuildingforall.png"; // replace with your image path
import heroImage3 from "../../assets/impact6.png";
import heroImage1 from "../../assets/impact5.png";
import heroImage2 from "../../assets/peace.png";

const About = () => {
  const images = [heroImage1, heroImage2, heroImage3,aboutImg];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 1000); // 1 second
  
      return () => clearInterval(interval);
    }, []);
  return (
    <section className="bg-white py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

        {/* Image */}
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt="Community unity"
            className="w-full h-full rounded-3xl object-cover"
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
            Building Peace Through Unity
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
