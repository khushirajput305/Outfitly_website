import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white px-6 md:px-20 pt-10 mt-20 text-sm text-gray-700">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        {/* Logo and description */}
        <div className="mb-5">
          <img src={assets.logo1} alt="Company Logo" className="w-32 mb-4" />
          <p className="w-full md:w-2/3 text-gray-600">
            Thank you for visiting! We’re dedicated to bringing you the latest
            in fashion with quality you can trust. Explore our collections and
            reach out anytime – we’re here to make your shopping experience
            seamless and stylish.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-xl font-medium mb-5 text-black">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="/delivery" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-xl font-medium mb-5 text-black">GET IN TOUCH</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-9867567534</li>
            <li>outfitly@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <hr className="my-8 border-gray-300" />
      <p className="text-center text-sm text-gray-500 pb-5">
        &copy; 2025 outfitly.com – All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
