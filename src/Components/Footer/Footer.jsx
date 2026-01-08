import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full ">
                <img src={Logo} alt="Trust South Sudan Logo" className=" rounded-full h-10 w-10 " />
              </div>
              <h3 className="text-lg font-semibold text-white ">
                Trust South Sudan
              </h3>
            </div>

            <p className="mt-6 text-sm leading-relaxed">
             Healing the Nation. <br /> Restoring the Promise
            </p>

            <p className="mt-4 text-sm leading-relaxed">
              Together for Reconciliation, Unity, & Sustainable Development
              Transformation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/focus-areas" className="hover:text-white">Focus Areas</Link></li>
              <li><Link to="/impact" className="hover:text-white">Our Impact</Link></li>
              <li><Link to="/contact" className="hover:text-white">Get Involved</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-white">Programs</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>Peace & Reconciliation</li>
              <li>Human Rights</li>
              <li>Legal Aid</li>
              <li>Youth Empowerment</li>
              <li>Women Leadership</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="mt-6 text-sm leading-relaxed">
              Stay updated with our latest news and impact stories
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white hover:bg-green-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm">

          <p>
            © {new Date().getFullYear()} Trust South Sudan. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
