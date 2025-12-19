import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Components/Home/Navar'
import Footer from './Components/Footer/Footer';
import Hero from './Components/Home/Hero';
import Mission from './Components/Home/Mission';
import Impact from './Components/Home/Impact';
import About from './Components/AboutUs/About';
import BackgroundAndLegal from './Components/AboutUs/BackgroundAndLegal';
import CoreValues from './Components/AboutUs/CoreValues';
import Programs from './Components/Programs/Programs';
import OurImpact from './Components/Impact/OurImpact';
import JoinCommunity from './Components/Membership/JoinCommunity';
import GetInvolved from './Components/Membership/GetInvolved';
import News from './Components/News/News';
import ContactUs from './Components/ContactUs/ContactUs';
import Donate from './Components/Donate/Donate';
import DonationHero from './Components/Donate/DonationHero';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <> <Hero/> <Mission/> <Impact/> </>
          
      } />
      <Route path="/about" element={
          <> <About/> <BackgroundAndLegal/> <CoreValues/> </>
          
      } />
      <Route path="/programs" element={
          <> <Programs/> </>
          
          
      } />
      <Route path="/impact" element={
          <> <OurImpact/> </>
          
          
      } />
      <Route path="/membership" element={
          <> <JoinCommunity/> <GetInvolved/> </>
          
          
      } />
      <Route path="/news" element={
          <> <News/> </>
          
          
      } />
      <Route path="/contact" element={
          <> <ContactUs/> </>
          
          
      } />
      <Route path="/donate" element={
          <> <DonationHero/> <Donate/> </>
          
          
      } />
        {/* <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/Testimonial" element={<Testimonia />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
