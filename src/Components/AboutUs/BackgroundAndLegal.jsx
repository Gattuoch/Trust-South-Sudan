import impact from "../../assets/impact-image2.png";

const BackgroundAndLegal = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 lg:px-16"
      style={{ backgroundImage: `url(${impact})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Our Background & History
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            A journey of commitment to peace and sustainable development
          </p>
        </div>

        {/* Background Box */}
        <div className="mt-16 rounded-3xl bg-emerald-50 px-8 py-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Foundation */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Foundation
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The organization <strong>“Together for Reconciliation, Unity,
                and Sustainable Development Transformation (TRUST SOUTH SUDAN)”</strong>
                was founded in response to pressing socio-political challenges
                in South Sudan, particularly inter-tribal conflict, corruption,
                and human rights violations.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our mission is to foster reconciliation, promote unity among
                diverse ethnic groups, and drive sustainable development
                initiatives that uplift vulnerable communities.
              </p>
            </div>

            {/* Evolution */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Evolution
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We have grown from a grassroots community initiative into a
                nationwide organization operating across all ten states and
                three administrative areas of South Sudan.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our programs now include peacebuilding, reconciliation, human
                rights advocacy, legal aid services, youth empowerment, and
                sustainable development initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Framework */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-white">
            Legal Framework
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            Trust South Sudan operates within the framework of the South Sudan
            Organizations Act, 2016. Sections 5 and 6 of this Act provide the
            legal basis for registration, operation, and accountability of
            non-governmental organizations, underscoring our commitment to
            transparency and adherence to national law.
          </p>
        </div>

        {/* Legal Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Registration */}
          <div className="rounded-3xl bg-emerald-50 p-10">
            <h3 className="text-xl font-semibold text-gray-900">
              Registration
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Officially registered with the Ministry of Justice and operating
              under the legal framework of South Sudan.
            </p>
            {/* <p className="mt-4 text-sm text-gray-500">
              Registration Number: 123456789
            </p> */}
          </div>

          {/* Governance */}
          <div className="rounded-3xl bg-emerald-50 p-10">
            <h3 className="text-xl font-semibold text-gray-900">
              Governance
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Governed by a Board of Directors responsible for strategic
              leadership, oversight, and financial accountability.
            </p>
            <p className="mt-4 text-sm text-gray-500">
             Board of Directors : 5 – 9 Members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundAndLegal;
