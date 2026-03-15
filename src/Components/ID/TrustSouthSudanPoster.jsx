import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/Id-logo.png";

export default function TrustSouthSudanPoster() {
  return (
    <div className="bg-gray-200 flex justify-center py-6 px-3 print:bg-white">
      
      {/* ================= POSTER ================= */}
      <div
        className="
          w-full 
          max-w-[720px] 
          bg-white 
          shadow-xl 
          border 
          text-[12px] sm:text-[13px] 
          leading-snug 
          font-sans
          print:shadow-none
          print:border-none
        "
      >

        {/* ================= HEADER ================= */}
        <div className="relative bg-white overflow-hidden">

          {/* Top Curved Blue Shape */}
          <div
            className="
              absolute top-0 left-0 w-full
              h-[180px] sm:h-[220px] md:h-[240px]
              bg-[#3c78e9]
              rounded-b-[120px] sm:rounded-b-[160px] md:rounded-b-[180px]
            "
          />

          {/* Header Content */}
          <div
            className="
              relative
              flex
              flex-col sm:flex-row
              items-center
              justify-between
              px-4 sm:px-8 md:px-10
              pt-6 sm:pt-8
              pb-6
              gap-4 sm:gap-0
            "
          >

            {/* Logo */}
            <div className="bg-white rounded-full p-2 shadow-lg">
              <img
                src={logo}
                alt="Trust Logo"
                className="
                  w-[90px] h-[90px]
                  sm:w-[110px] sm:h-[110px]
                  md:w-[120px] md:h-[120px]
                  object-contain rounded-full
                "
              />
            </div>

            {/* Title */}
            <div className="text-center sm:text-right leading-tight">
              <h1
                className="
                  text-[38px] sm:text-[48px] md:text-[60px]
                  font-black
                  tracking-[2px] sm:tracking-[3px] md:tracking-[4px]
                  text-black
                  [text-stroke:1px_white]
                  [-webkit-text-stroke:1px_white]
                "
              >
                TRUST
              </h1>

              <h2
                className="
                  text-[20px] sm:text-[26px] md:text-[34px]
                  font-extrabold
                "
              >
                <span className="text-red-600 underline decoration-2 underline-offset-4">
                  SOUTH
                </span>{" "}
                <span className="text-green-600 underline">
                  SUDAN
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="px-4 sm:px-6 py-5 space-y-5 text-gray-800">

          <Section title="Vision">
            Trust South Sudan envisions a society in which everyone,
            regardless of origin, can live in harmony, exercise their
            fundamental rights, and take an active role in democratic
            administration. We envision a society where everyone contributes
            to a sustainable and successful future, the rule of law is upheld,
            and there is no corruption or tribalism.
          </Section>

          <Section title="Mission">
            <p className="mb-2">
              Trust South Sudan is on a mission to promote peace,
              reconciliation, and sustainable development across our nation by
              engaging individuals and communities in transformative initiatives
              that combat division and foster collaboration.
            </p>

            <ol className="list-decimal pl-5 space-y-1">
              <li>Community Dialogue and Engagement</li>
              <li>Inclusive Education Programs</li>
              <li>Advocacy for Equitable Policies</li>
              <li>Restorative Justice Initiatives</li>
              <li>Sustainable Economic Development</li>
              <li>Environmental Protection and Sustainability</li>
              <li>Monitoring and Evaluation</li>
            </ol>
          </Section>

          <Section title="GOALS AND MANDATE">
            <ol className="list-decimal pl-5 space-y-1">
              <li>Promote Sustainable Peace Building and National Reconciliation</li>
              <li>Strengthen National Unity and Social Cohesion</li>
              <li>Combat Corruption and Promote Good Governance</li>
              <li>Empower Women and Youth as Agents of Peace and Transformation</li>
              <li>Drive Sustainable Development Transformation Linked to Peace</li>
            </ol>
          </Section>

          <h3 className="text-center text-red-600 font-bold text-[16px]">
            Programs
          </h3>

          <Program
            number="1"
            title="Healing the Nation"
            items={[
              "Community peace dialogues & mediation forums",
              "Trauma healing & psychosocial support",
              "Youth peace ambassadors programs",
              "Women as peace agents initiatives",
            ]}
          />

          <Program
            number="2"
            title="Empowering Tomorrow"
            items={[
              "Access to education programs",
              "Vocational & skills training",
              "Youth leadership development",
              "Girls’ education initiatives",
            ]}
          />

          <Program
            number="3"
            title="Women Rise"
            items={[
              "Women leadership participation",
              "Gender-based violence prevention",
            ]}
          />

          <Program
            number="4"
            title="Food for Peace"
            items={[
              "Improve food security, resilient livelihoods and sustainable agriculture in vulnerable communities.",
            ]}
          />

          <Program
            number="5"
            title="Accountable Leaders"
            items={[
              "Leadership & ethical governance training",
              "Human rights promotion",
              "Anti-corruption initiatives",
            ]}
          />

          <Program
            number="6"
            title="Green South Sudan"
            items={[
              "Climate change awareness",
              "Environmental protection",
            ]}
          />

          <Program
            number="7"
            title="Healthy Communities"
            items={[
              "Emergency humanitarian response",
              "Nutrition & food security",
              "WASH programs",
            ]}
          />

          <div>
            <h3 className="text-green-600 font-bold text-[16px]">
              Core Values
            </h3>

            <ol className="list-decimal pl-5 space-y-1">
              <li>Peace and Reconciliation</li>
              <li>Unity in Diversity</li>
              <li>Empowerment of the Community</li>
              <li>Justice and Equality</li>
            </ol>
          </div>
        </div>
{/* ================= FOOTER ================= */}
<div className="
  relative 
  bg-black 
  text-white 
  px-4 sm:px-8 
  py-6 sm:py-5 
  text-[12px] sm:text-[13px] 
  overflow-hidden
">

  <div className="
    flex 
    flex-col 
    md:flex-row 
    justify-between 
    items-center md:items-start
    gap-8 md:gap-6 
    relative z-10
  ">

    {/* Left */}
    <div className="
      space-y-3 
      text-center md:text-left
      w-full md:w-auto
    ">
      <FooterRow icon={FaPhone} text="Zain +211911743465" />
      <FooterRow text="MTN +211927863377" />
      <FooterRow icon={FaEnvelope} text="trustsouthsudan@gmail.com" />
      <FooterRow icon={FaGlobe} text="trust-south-sudan.vercel.app" />
    </div>

    {/* Right */}
    <div className="
      space-y-3 
      text-center md:text-right
      w-full md:w-auto
    ">
      <FooterRow icon={FaMapMarkerAlt} text="Juba South Sudan" />
      <FooterRow text="Gudele West block two" />
    </div>

  </div>

  {/* ================= BOTTOM ANGLED SHAPE ================= */}
  <div
    className="
      absolute
      bottom-[-50px] sm:bottom-[-60px]
      left-[-10%] sm:left-[-2%]
      w-[140%] sm:w-[120%]
      h-[100px] sm:h-[120px]
      bg-green-500
      rotate-[-6deg] sm:rotate-[-7deg]
    "
  />
</div>


      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-red-600 font-bold text-[16px] mb-1">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

function Program({ number, title, items }) {
  return (
    <div className="flex gap-3 mt-3">
      <div className="min-w-[24px] h-[24px] bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
        {number}
      </div>

      <div>
        <h4 className="font-bold text-teal-700">{title}</h4>
        <ul className="list-disc pl-5 space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FooterRow({ icon: Icon, text, right }) {
  return (
    <div className={`flex items-center gap-3 ${right ? "md:justify-end" : ""}`}>
      {Icon && (
        <div className="bg-gray-800 p-2 rounded-full">
          <Icon className="text-white text-xs" />
        </div>
      )}
      <span>{text}</span>
    </div>
  );
}
