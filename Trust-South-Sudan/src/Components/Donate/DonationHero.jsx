import { FaHeart } from "react-icons/fa";

const DonationHero = () => {
  return (
    <section className="bg-[#f7f8f3] py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-green-700 font-medium mb-10">
          <FaHeart className="text-sm" />
          <span>Make a Difference Today</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Your Donation Transforms Lives
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Every contribution helps us bring peace, justice, and sustainable
          development to communities across South Sudan
        </p>

      </div>
    </section>
  );
};

export default DonationHero;
