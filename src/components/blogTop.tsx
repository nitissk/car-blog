"use client";

import Image from "next/image";
import { RiTelegram2Line } from "react-icons/ri";

export default function HeroSection() {
  const handleSubscribe = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-4 w-20 h-20 sm:top-20 sm:left-10 sm:w-40 sm:h-40 rounded-full bg-blue-500 mix-blend-multiply filter blur-xl sm:blur-3xl"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 sm:bottom-10 sm:right-20 sm:w-60 sm:h-60 rounded-full bg-indigo-500 mix-blend-multiply filter blur-xl sm:blur-3xl"></div>
      </div>

      {/* Main container */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="block">Your Journey</span>
            <span className="block text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Your Car
            </span>
            <span className="block">Your Way</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md sm:max-w-lg md:max-w-xl leading-relaxed">
            Discover the perfect vehicle for your lifestyle. Experience exceptional 
            performance, innovative technology, and unmatched reliability on every drive.
          </p>

          <div className="flex flex-col items-center sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 md:px-10 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 text-sm xs:text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Subscribe to our newsletter"
            >
              <span className="flex items-center gap-2 sm:gap-3">
                Subscribe <RiTelegram2Line className="text-lg sm:text-xl md:text-2xl" />
              </span>
            </button>

            <button className="relative group bg-white hover:bg-gray-50 text-gray-800 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200">
              <span className="flex items-center gap-2 justify-center text-sm xs:text-base sm:text-lg">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

        {/* Image Gallery with blurred edge background */}
        <div className="flex-1 relative w-full lg:w-auto h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] mt-6 lg:mt-0">
          <div className="relative w-full h-full">
            {/* Blurred overlay border behind all images */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="w-full h-full rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] blur-xl sm:blur-2xl bg-white/10" />
            </div>

            {/* Images Layer */}
            <div className="relative z-10 w-full h-full">
              {/* Image 1 - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] z-10 transition-all duration-300 hover:z-40 hover:scale-105 sm:hover:scale-110">
                <Image
                  src="/c1.png"
                  alt="Car Model 1"
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 25vw"
                />
              </div>

              {/* Image 2 - Top Left */}
              <div className="absolute top-0 left-0 w-[55%] h-[55%] z-20 transition-all duration-300 hover:z-40 hover:scale-105 sm:hover:scale-110">
                <Image
                  src="/c2.png"
                  alt="Car Model 2"
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 640px) 55vw, (max-width: 1024px) 28vw, 23vw"
                />
              </div>

              {/* Image 3 - Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] z-30 transition-all duration-300 hover:z-40 hover:scale-105 sm:hover:scale-110">
                <Image
                  src="/c3.png"
                  alt="Car Model 3"
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 35vw, 30vw"
                  priority
                />
              </div>

              {/* Image 4 - Top Right */}
              <div className="absolute top-0 right-0 w-[60%] h-[60%] z-20 transition-all duration-300 hover:z-40 hover:scale-105 sm:hover:scale-110">
                <Image
                  src="/c4.png"
                  alt="Car Model 4"
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 25vw"
                />
              </div>

              {/* Image 5 - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] z-10 transition-all duration-300 hover:z-40 hover:scale-105 sm:hover:scale-110">
                <Image
                  src="/c5.png"
                  alt="Car Model 5"
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 640px) 55vw, (max-width: 1024px) 28vw, 23vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}