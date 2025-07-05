"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
 
export default function TestimonialSection() {
const image1 = "/newT/image.png";

return (
    <section className="w-full bg-gray-900 py-20">
      <div className="max-w-[1280px] h-[360px] mx-auto flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
        {/* Left Section (45%) */}
        <div className="w-full md:w-[45%] h-full flex items-center justify-center p-10 bg-gradient-to-br from-gray-800 to-gray-850">
          <div className="max-w-[380px] flex flex-col gap-6">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-[0.2em]">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Valued Voices <br />About Our Content
            </h2>
            <p className="text-gray-400 text-lg">
              Discover what industry leaders and our community members say about their experience.
            </p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-[60%] my-auto bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

        {/* Right Section (55%) */}
        <div className="w-full md:w-[55%] h-full flex items-center justify-center p-10 relative bg-gray-800">
          <div className="max-w-[500px] flex flex-col gap-8">
            <blockquote className="text-2xl font-light italic text-gray-200 leading-relaxed">
              "The insights provided transformed our approach to automotive technology. The depth of analysis is unmatched in the industry."
            </blockquote>
            
            {/* User Profile */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border-2 border-blue-400/50 overflow-hidden relative">
                <Image
                  src={image1}
                  alt="John Doe profile"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div>
                <h4 className="font-medium text-white text-lg">John Doe</h4>
                <p className="text-sm text-gray-400">CTO, AutoTech Solutions</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-gray-500 text-xs ml-2">New York, USA</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute right-10 bottom-10 flex gap-3">
              <button 
                className="p-3 rounded-full bg-gray-700 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/20"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-white text-sm" />
              </button>
              <button 
                className="p-3 rounded-full bg-gray-700 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/20"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-white text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}