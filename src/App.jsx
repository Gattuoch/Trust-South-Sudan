import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Home/Navar";
import Footer from "./Components/Footer/Footer";

import Hero from "./Components/Home/Hero";
import Mission from "./Components/Home/Mission";
import Impact from "./Components/Home/Impact";
import About from "./Components/AboutUs/About";
import BackgroundAndLegal from "./Components/AboutUs/BackgroundAndLegal";
import CoreValues from "./Components/AboutUs/CoreValues";
import Programs from "./Components/Programs/Programs";
import OurImpact from "./Components/Impact/OurImpact";
import JoinCommunity from "./Components/Membership/JoinCommunity";
import GetInvolved from "./Components/Membership/GetInvolved";
import News from "./Components/News/News";
import ContactUs from "./Components/ContactUs/ContactUs";
import Donate from "./Components/Donate/Donate";
import DonationHero from "./Components/Donate/DonationHero";
import Login from "./Components/Auth/Login";
import Privacy from "./Components/Privacy/Privacy";
import SuperAdminDashboard from "./Components/SuperAdmin Panel/SuperAdminDashboard/SuperAdminDashboard";
import AdminDashboard from "./Components/AdminPanel/AdminDashboard";
import { isNodeOrChild } from "framer-motion";
import AdminNewsPage from "./Components/AdminPanel/AdminNewsPage";
import AdminJobsPage from "./Components/AdminPanel/AdminJobsPage";
import AdminManagement from "./Components/SuperAdmin Panel/AdminManagement/AdminManagement";
import SuperAdminContentApproval from "./Components/SuperAdmin Panel/AdminManagement/SuperAdminContentApproval";
import Terms from "./Components/Terms/Terms";
import CookiePolicy from "./Components/CookiePolicy";
import TrustSouthSudanCard from "./Components/ID/TrustSouthSudanCard";
import TrustSouthSudanPoster from "./Components/ID/TrustSouthSudanPoster";

function App() {
  const location = useLocation();

  // hide navbar & footer on login page
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/super-admin/dashboard" ||
    location.pathname === "/admin/dashboard" ||
    location.pathname === "/admin/news" ||
    location.pathname === "/admin/jobs" ||
    location.pathname === "/super-admin/admin-management" ||
    location.pathname === "/TrustSouthSudanCard" ||
    location.pathname === "/trust-south-sudan-poster";

  return (
    <>
      {/* Show Navbar only if NOT on login */}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Mission />
              <Impact />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <BackgroundAndLegal />
              <CoreValues />
            </>
          }
        />
        <Route path="/programs" element={<Programs />} />
        <Route path="/impact" element={<OurImpact />} />
        <Route
          path="/membership"
          element={
            <>
              <JoinCommunity />
              <GetInvolved />
            </>
          }
        />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/donate"
          element={
            <>
              <DonationHero />
              <Donate />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route
          path="/super-admin/dashboard"
          element={<SuperAdminDashboard />}
        />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/news" element={<AdminNewsPage />} />
        <Route path="/admin/jobs" element={<AdminJobsPage />} />
        <Route path="/TrustSouthSudanCard" element={<TrustSouthSudanCard />} />
        <Route path="/trust-south-sudan-poster" element={<TrustSouthSudanPoster/>} />
        <Route
          path="/super-admin/admin-management"
          element={<AdminManagement />}
        />
        <Route
          path="/super-admin/content-approval"
          element={<SuperAdminContentApproval />}
        />
      </Routes>

      {/* Show Footer only if NOT on login */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
