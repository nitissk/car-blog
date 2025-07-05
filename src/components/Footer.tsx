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

  // Empty check
  if (!email) {
    toast.error("Please enter your email!");
    return;
  }

  // Email format validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    toast.error("Please enter a valid email address!");
    return;
  }

  // Success
  toast.success("Thanks for subscribing!");
  emailRef.current!.value = "";
};


  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/" },
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
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Logo and Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
          <div className="sm:-ml-2 sm:mr-4 flex-shrink-0 mb-4 sm:mb-0 flex justify-center sm:justify-start">
            <Logo />
          </div>

          <div className="flex gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible py-2 scrollbar-hide w-full sm:w-auto justify-center sm:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex-shrink-0 px-1 sm:px-0 text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full mb-16 bg-gray-700/50 p-10 rounded-xl border border-gray-700">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Subscribe to our newsletter to get latest updates and news
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-white placeholder-gray-500 text-lg"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium whitespace-nowrap text-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-10 mb-8">
          <div className="flex justify-center gap-8">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.path}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-2xl"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-lg">
          <p>© {new Date().getFullYear()} EV Drive. All rights reserved.</p>
          <div> Developed by <span className="font-bold text-blue-500"> Nitish</span></div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
