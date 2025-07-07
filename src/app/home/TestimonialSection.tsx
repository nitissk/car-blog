"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialSection() {
  const image1 = "/newT/image.png";

  return (
    <section className="w-full bg-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden shadow-2xl min-h-[320px] sm:min-h-[360px]">
        {/* Text Content Section */}
        <div className="w-full md:w-[45%] flex items-center justify-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-gray-800 to-gray-850">
          <div className="max-w-[380px] flex flex-col gap-4 sm:gap-6">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-[0.2em]">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Valued Voices <br className="hidden sm:block" />About Our Content
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Discover what industry leaders and our community members say about their experience.
            </p>
          </div>
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block w-[1px] h-[60%] my-auto bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

        {/* Testimonial Content */}
        <div className="w-full md:w-[55%] flex items-center justify-center p-6 sm:p-8 md:p-10 relative bg-gray-800">
          <div className="max-w-[500px] w-full flex flex-col gap-6 sm:gap-8">
            <blockquote className="text-xl sm:text-2xl font-light italic text-gray-200 leading-relaxed">
              &quot;The insights provided transformed our approach to automotive technology. The depth of analysis is unmatched in the industry.&quot;
            </blockquote>
            
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-blue-400/50 overflow-hidden relative flex-shrink-0">
                <Image
                  src={image1}
                  alt="John Doe profile"
                  fill
                  className="object-cover"
                  quality={100}
                  sizes="(max-width: 640px) 48px, 56px"
                />
              </div>
              <div>
                <h4 className="font-medium text-white text-base sm:text-lg">John Doe</h4>
                <p className="text-sm text-gray-400">CTO, AutoTech Solutions</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 text-xs sm:text-sm">★★★★★</span>
                  <span className="text-gray-500 text-xs ml-2">New York, USA</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-3 mt-4 sm:absolute sm:right-8 sm:bottom-8">
              <button 
                className="p-2 sm:p-3 rounded-full bg-gray-700 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/20"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-white text-xs sm:text-sm" />
              </button>
              <button 
                className="p-2 sm:p-3 rounded-full bg-gray-700 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/20"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-white text-xs sm:text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}