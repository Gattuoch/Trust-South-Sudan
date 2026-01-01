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

<p className="mt-4 text-gray-600 text-sm leading-relaxed">
  Our goal encompasses the aspirations of all South Sudanese citizens and goes
  beyond conventional bounds. It is an appeal for everyone to contribute to the
  reconstruction of our society—one that not only mends the scars of the past
  but also creates a fair foundation for coming generations. As we set out on
  this transformative journey toward reconciliation and development, we extend
  an invitation to local and international partners to collaborate with us.
  Together, we can build a thriving South Sudan with a shared goal and a rich
  cultural legacy.
</p>

<p className="mt-4 text-gray-600 text-sm leading-relaxed">
  Trust South Sudan is on a mission to promote peace, reconciliation, and
  sustainable development across our nation by engaging individuals and
  communities in transformative initiatives that combat division and foster
  collaboration. Our mission focuses on the following core areas:
</p>

<ul className="mt-4 list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">
  <li>
    <strong>Community Dialogue and Engagement:</strong> Establishing safe spaces
    for indigenous tribes to communicate through workshops, forums, and dialogue
    sessions that encourage open discussion, mutual understanding, and
    cooperative problem-solving.
  </li>

  <li>
    <strong>Inclusive Education Programs:</strong> Promoting access to quality
    education by implementing inclusive learning initiatives and scholarship
    programs for students from underprivileged families.
  </li>

  <li>
    <strong>Advocacy for Equitable Policies:</strong> Advancing policy reforms at
    local and national levels to address the root causes of violence and
    corruption, while promoting social justice, accountability, and transparency
    through collaboration with civil society and government institutions.
  </li>

  <li>
    <strong>Restorative Justice Initiatives:</strong> Supporting reconciliation
    by acknowledging past harms and promoting restorative justice practices that
    rebuild trust and enable communities to move forward together.
  </li>

  <li>
    <strong>Sustainable Economic Development:</strong> Expanding economic
    opportunities through cooperative enterprises and entrepreneurship support,
    including initiatives that connect farmers to markets for fair pricing and
    stable income.
  </li>

  <li>
    <strong>Environmental Protection and Sustainability:</strong> Encouraging
    responsible environmental stewardship through sustainable agriculture,
    natural resource conservation, and food security initiatives.
  </li>

  <li>
    <strong>Monitoring and Evaluation:</strong> Continuously assessing and
    improving our programs through feedback, evaluation, and adaptive learning
    to maximize impact and effectiveness.
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
              With the confidence, Trust South Sudan envisions a society in which everyone, regardless of origin, can live in harmony, exercise their fundamental rights, and take an active role in democratic administration. We envision a society where everyone contributes to a sustainable and successful future, the rule of law is upheld, and there is no corruption or tribalism. Our goal is to lead the way in bringing about change by encouraging a culture of responsibility, solidarity, and fortitude among community members.

            </p>
          </div>

          {/* Motto */}
          <div className="relative rounded-2xl bg-[#fff6eb] p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-l-2xl" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
              <FaQuoteLeft className="text-xl" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Our Mandate</h3>

<p className="mt-4 text-gray-600 text-sm leading-relaxed">
  Together for Reconciliation, Unity and Sustainable Development (TRUST SOUTH
  SUDAN) is a non-partisan, non-profit, and people-centered organization
  established in response to prolonged social fragmentation, systemic
  corruption, tribalism, political exclusion, and persistent violations of
  fundamental human rights in the Republic of South Sudan.
</p>

<ul className="mt-4 list-disc pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">
  <li>
    Promote national reconciliation, inclusive unity, and sustainable
    development by addressing the root causes of conflict through peacebuilding,
    restorative justice, civic empowerment, institutional accountability, and
    rights-based development interventions, in line with the Constitution of the
    Republic of South Sudan and international legal frameworks.
  </li>

  <li>
    Foster truth-telling, inter-communal dialogue, and reconciliation processes
    that restore dignity to victims, strengthen social cohesion, and rebuild
    trust between citizens and public institutions, while rejecting all forms of
    discrimination.
  </li>

  <li>
    Advocate for transparent governance, anti-corruption reforms, equitable
    resource distribution, and community-driven development, recognizing that
    sustainable peace depends on social justice and economic inclusion.
  </li>

  <li>
    Prioritize the empowerment of youth, women, survivors of conflict, and
    marginalized communities as active agents of transformation rather than
    passive beneficiaries.
  </li>

  <li>
    Operate independently and impartially, serving as a bridge between
    communities, civil society, state institutions, regional bodies, and
    international partners to contribute to a peaceful, united, just, and
    prosperous South Sudan for present and future generations.
  </li>
</ul>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
