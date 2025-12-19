import { FiTarget } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
;

const MissionVision = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Mission */}
          <div className="relative rounded-2xl bg-[#f2f9f5] p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-700 rounded-l-2xl" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white">
              <FiTarget className="text-xl" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Mission</h3>

            <ul className="mt-4 list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>
                Promote peace, reconciliation, and unity through community
                dialogue and engagement initiatives.
              </li>
              <li>
                Implement inclusive education programs and scholarship support
                for underserved communities.
              </li>
              <li>
                Advocate for equitable, transparent, and accountable policies
                at local and national levels.
              </li>
              <li>
                Facilitate restorative justice initiatives that acknowledge
                past harms and rebuild trust.
              </li>
              <li>
                Support sustainable economic development through entrepreneurship
                and cooperative projects.
              </li>
              <li>
                Promote environmental protection and sustainable resource
                management.
              </li>
              <li>
                Ensure continuous monitoring and evaluation to maximize impact
                and effectiveness.
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="relative rounded-2xl bg-[#f4fbf8] p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#73e2ab] rounded-l-2xl" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#73e2ab] text-white">
              <HiOutlineEye className="text-xl" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Vision</h3>
            <p className="mt-4 text-gray-600">
              Trust South Sudan envisions a society where all individuals, regardless of their background, can
coexist peacefully, enjoy their fundamental rights, and actively participate in democratic
governance. We foresee a community free from corruption and tribalism, where the rule of law
prevails, and every resident contributes to a sustainable and prosperous future. Our aim is to be a
leading catalyst for transformation, inspiring a culture of accountability, unity, and resilience
among community members.
            </p>
          </div>

          {/* Motto */}
          <div className="relative rounded-2xl bg-[#fff6eb] p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-l-2xl" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
              <FaQuoteLeft className="text-xl" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Our Motto</h3>
            <p className="mt-4 text-lg font-medium">
              “Restoring Dignity, Building a Sustainable Future”
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
