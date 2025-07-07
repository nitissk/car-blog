"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const scrollToBottom = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="w-full h-20 bg-gray-800 text-gray-300 z-50 shadow-md left-0">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <div className="md:order-none">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-white font-medium hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={scrollToBottom}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-sm lg:text-base"
          >
            Subscribe
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible bg-black/30 backdrop-blur-sm" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-72 sm:w-80 bg-gray-800 shadow-xl transform transition-all duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 h-full flex flex-col">
          <button
            className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex-1 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-300 hover:text-white hover:bg-gray-700 py-3 px-4 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 mt-auto border-t border-gray-700">
            <button
              onClick={scrollToBottom}
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-center font-medium transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;