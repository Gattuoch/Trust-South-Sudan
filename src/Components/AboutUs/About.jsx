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
        {/* Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={images[currentIndex]}
            alt="Community unity"
            className="absolute inset-0 w-full h-full rounded-3xl object-cover shadow-xl transition-all duration-700"
          />
        </div>

      </div>

      {/* Vision Section */}
      <div className="mx-auto max-w-7xl mt-24">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-700 text-white text-xs">
              v
            </span>
            Our Vision
          </span>
        </div>
        
        {/* Title */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 leading-tight lg:text-4xl">
          A Resilient and Unified Nation
        </h2>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed">
              Trust South Sudan envisions a resilient and unified nation where peace, justice, and equal opportunity define the lives of all citizens. We aspire to transform a society long affected by conflict, tribal divisions, and nepotism into one where diversity is embraced as a source of strength, and where institutions operate with transparency, accountability, and fairness. Our vision is to see communities living in harmony, with restored trust in one another and in the systems that govern them.
            </p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed">
              We picture a future where individuals are valued for their skills, integrity, and contributions rather than their ethnic identity or personal connections. For example, a nation where a qualified young graduate secures employment based on merit—not favoritism—and where leaders are chosen for their competence and commitment to public service. Trust South Sudan aims to inspire this transformation by fostering a culture of inclusion, ethical leadership, and shared national identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
