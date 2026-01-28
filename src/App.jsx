import React from "react";
import Logo from "./Components/Logo";
import HeroSection from "./Components/Hero";
import ComingSoonBadge from "./Components/ComingSoonBadge";
import EmailSignup from "./Components/EmailSignup";
import Footer from "./Components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-amber-50 relative overflow-hidden">
      
      {/* Background Shapes */}

      {/* Top */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 480"
        className="absolute -top-20 lg:-top-25 -left-25 w-70 h-70 pointer-events-none opacity-20"
        fill="#F59E0B"
      >
        <path
          className="rotating-flower"
          d="M360 289.7c43.4 0 86.9-16.6 120-49.7a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120Z"
          // fill="# #925f07"
        ></path>
      </svg>

      {/* bottom */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 480"
        className="absolute -bottom-50 -right-40 lg:-bottom-25 lg:-right-25 w-100 h-100 pointer-events-none opacity-20"
        fill="#F59E0B"
      >
        <path
          className="rotating-flower"
          d="M360 289.7c43.4 0 86.9-16.6 120-49.7a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120Z"
          // fill="# #925f07"
        ></path>
      </svg>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-10 min-h-screen">
        {/* Logo */}
        <div className="mb-10">
          <Logo />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-10 flex-grow justify-center">
          <ComingSoonBadge />
          <HeroSection />
          <EmailSignup />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
