import Link from "next/link";
import React from "react";
import { FaCar } from "react-icons/fa";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <FaCar size={58} color="blue" />
      <span className="text-4xl font-bold text-white ml-2">
        <span className="text-white">EV </span>Drive
      </span>
    </Link>
  );
};

export default Logo;
