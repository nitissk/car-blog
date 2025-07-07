"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = () => {
    const email = emailRef.current?.value.trim();

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    toast.success("Thanks for subscribing!");
    emailRef.current!.value = "";
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram />, path: "#" },
    { name: "Twitter", icon: <FaTwitter />, path: "#" },
    { name: "Facebook", icon: <FaFacebook />, path: "#" },
    { name: "GitHub", icon: <FaGithub />, path: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, path: "#" },
  ];

  return (
    <footer className="w-full bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Logo and Navigation */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between mb-12">
          <div className="flex-shrink-0 mb-6 sm:mb-0">
            <Logo />
          </div>

          {/* Custom breakpoint at 750px */}
          <div className="w-full sm:w-auto">
            <style jsx>{`
              @media (max-width: 750px) {
                .nav-container {
                  flex-direction: column;
                }
                .nav-line {
                  justify-content: center;
                  margin-bottom: 0.5rem;
                }
              }
            `}</style>
            
            <div className="nav-container flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 min-[750px]:gap-6 lg:gap-8">
              {/* All items in single container that wraps at 750px */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-base sm:text-lg font-medium whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full mb-12 bg-gray-700/50 p-6 sm:p-8 lg:p-10 rounded-xl border border-gray-700">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug text-center lg:text-left">
              Subscribe to our newsletter to get latest updates and news
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                className="px-4 sm:px-5 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-white placeholder-gray-500 text-base sm:text-lg"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors duration-200 font-medium whitespace-nowrap text-base sm:text-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-8 sm:pt-10 mb-8">
          <div className="flex justify-center gap-6 sm:gap-8">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.path}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xl sm:text-2xl"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-base sm:text-lg">
          <p>© {new Date().getFullYear()} EV Drive. All rights reserved.</p>
          <div>
            Developed by{" "}
            <span className="font-bold text-blue-500">Nitish</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;