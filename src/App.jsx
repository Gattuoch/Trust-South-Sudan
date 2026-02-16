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
import TrustCard from "./Components/ID/TrustSouthSudanCard";
import TrustIDCard from "./Components/ID/TrustIDCard";
import TrustCertificate from "./Components/ID/TrustCertificate";
import TrustIDCard01 from "./Components/ID/TrustIDCard01";
import TrustIDCard02 from "./Components/ID/TrustIDCard02";
import TrustIDCard03 from "./Components/ID/TrustIDCard03";
import TrustIDCard04 from "./Components/ID/TrustIDCard04";
import TrustIDCard06 from "./Components/ID/TrustIDCard06";
import TrustIDCard07 from "./Components/ID/TrustIDCard07";
import TrustIDCard08 from "./Components/ID/TrustIDCard08";
import TrustIDCard10 from "./Components/ID/TrustIDCard10";
import TrustIDCard11 from "./Components/ID/TrustIDCard11";
import TrustIDCard13 from "./Components/ID/TrustIDCard13";
import TrustIDCard14 from "./Components/ID/TrustIDCard14";

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
    location.pathname === "/trust-south-sudan-poster" ||
    location.pathname === "/id/nyaliep-kuany" ||
    location.pathname === "/id/david-dak" ||
    location.pathname === "/id/david-bidong-nhial"  ||
    location.pathname === "/id/gatwech-chang-dojiok"||
    location.pathname === "/id/banak-bidong" ||
    location.pathname === "/id/maar-naath-koryom" ||
    location.pathname === "/id/nyanhial-gatkuoth-thian" ||
    location.pathname === "/id/peter-gony" ||
    location.pathname === "/id/changkuoth-riek" ||
    location.pathname === "/id/gattuoch-chambang"  ||
    location.pathname === "/id/kayier-yout" ||
    location.pathname === "/id/jal-ruot";

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
        <Route path="/id/nyaliep-kuany" element={
          <> <TrustIDCard/> 
           <TrustCertificate/>
             </>} />
         <Route path="/id/david-dak" element={
          <> <TrustIDCard01/> 
           <TrustCertificate/>
             </>} />
        <Route path="/id/david-bidong-nhial" element={
          <> <TrustIDCard02/> 
           <TrustCertificate/>
             </>} />
        <Route path="/id/gatwech-chang-dojiok" element={
          <> <TrustIDCard03/> 
           <TrustCertificate/>
             </>} />
        <Route path="/id/banak-bidong" element={
          <> <TrustIDCard04/> 
           <TrustCertificate/>
             </>} />    
        <Route path="/id/maar-naath-koryom" element={
          <> <TrustIDCard06/> 
           <TrustCertificate/>
             </>} />
        <Route path="/id/nyanhial-gatkuoth-thian" element={
          <> <TrustIDCard07/> 
           <TrustCertificate/>
             </>} /> 
        <Route path="/id/peter-gony" element={
          <> <TrustIDCard08/> 
           <TrustCertificate/>
             </>} />
         <Route path="/id/changkuoth-riek" element={
          <> <TrustIDCard10/> 
           <TrustCertificate/>
             </>} />
        <Route path="/id/gattuoch-chambang" element={
          <> <TrustIDCard11/> 
           <TrustCertificate/>
             </>} />
        <Route path="/id/kayier-yout" element={
          <> <TrustIDCard13/> 
           <TrustCertificate/>
             </>} /> 
        <Route path="/id/jal-ruot" element={
          <> <TrustIDCard14/> 
           <TrustCertificate/>
             </>} />                            
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
