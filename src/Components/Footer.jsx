import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col items-center gap-8 pb-6">
      {/* Social Icons */}
      <div className="flex items-center gap-8 mt-8">
        <a
          href=""
          aria-label="Instagram"
          className="text-stone-500 hover:text-amber-700 transition-transform duration-300 hover:-translate-y-1"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href=""
          aria-label="Facebook"
          className="text-stone-500 hover:text-amber-700 transition-transform duration-300 hover:-translate-y-1"
        >
          <FaFacebookF size={24} />
        </a>

        <a
          href=""
          aria-label="Twitter"
          className="text-stone-500 hover:text-amber-700 transition-transform duration-300 hover:-translate-y-1"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Footer Text */}
      <div className="text-center">
        <p className="font-serif text-stone-500 text-sm">
          © {new Date().getFullYear()} Royal Chai. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 mt-2 text-xs uppercase tracking-wider text-amber-700/70">
          <span className="cursor-pointer hover:text-amber-900 transition-colors">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-amber-900 transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
