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
<div className="mt-24 text-center px-4 bg-white/10 py-12 rounded-3xl">
  <h2 className="text-4xl font-bold text-white">
    Legal Framework
  </h2>

  <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed">
    <span className="font-semibold">TRUST South Sudan</span> (Together for
    Reconciliation, Unity and Sustainable Development Transformation) is a
    national, independent, non-governmental, non-political, and non-religious
    civil society organization, duly established and registered in accordance
    with the laws of the Republic of South Sudan and all applicable NGO and civil
    society regulatory frameworks.
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
       {/* Non-Profit Nature */}
<div className="mt-24 text-center px-4 bg-white/10 py-12 rounded-3xl">
  <h2 className="text-4xl font-bold text-white">
    Non-Profit Nature
  </h2>

  <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed">
    <span className="font-semibold">TRUST South Sudan</span> is established
    exclusively for humanitarian assistance, peacebuilding, human rights
    promotion, reconciliation, unity, and sustainable development transformation
    purposes. The Organization operates strictly on a non-profit basis and shall
    not be conducted for financial gain.
  </p>

  <ul className="mt-6 max-w-3xl mx-auto text-left text-lg text-gray-200 leading-relaxed space-y-3 list-disc list-inside">
    <li>
      No part of the Organization’s net earnings or assets shall benefit any
      member, founder, board member, officer, employee, or affiliate, except as
      reasonable and fair compensation for services rendered in furtherance of
      its lawful operations.
    </li>
    <li>
      All income, grants, donations, assets, and resources of the Organization
      shall be used exclusively to achieve its vision, mission, and objectives.
    </li>
    <li>
      The Organization shall not engage in any activity inconsistent with its
      non-profit status.
    </li>
  </ul>
</div>


      </div>
    </section>
  );
};

export default BackgroundAndLegal;
