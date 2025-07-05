"use client";

import Image from "next/image";
import { RiTelegram2Line } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const sliderImages = [
    {
      src: "/ford/image-copy1.png",
      alt: "Ford Mustang on a scenic road"
    },
    {
      src: "/ford/image-copy2.png",
      alt: "Ford F-150 in the mountains"
    },
    {
      src: "/ford/image-copy3.png",
      alt: "Ford Explorer in the city"
    },
    {
      src: "/ford/image-copy4.png",
      alt: "Ford GT sports car"
    },
    {
      src: "/ford/image-copy5.png",
      alt: "Ford family of vehicles"
    }
  ];


  const handleSubscribe = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative w-full min-h-screen"
      aria-label="Hero car showcase"
    >
      {/* Background Slider (z-index: -10) */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-white/50",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-400"
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
        className="w-full h-full [&_.swiper-pagination]:!bottom-[120px] [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet-active]:!bg-blue-400"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-screen">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                  quality={90}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"
                  aria-hidden="true"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
        <div className="text-white space-y-4 sm:space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block">Your Journey</span>
            <span className="block text-blue-400">Your Car</span>
            <span className="block">Your Way</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
            Discover the perfect Ford vehicle for your lifestyle. Experience
            exceptional performance, innovative technology, and unmatched
            reliability on every drive.
          </p>

          <button
            onClick={handleSubscribe}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 sm:py-3 sm:px-10 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label="Subscribe to our newsletter"
          >
            <span className="flex items-center gap-2 sm:gap-3">
              Subscribe <RiTelegram2Line className="text-xl sm:text-2xl" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
