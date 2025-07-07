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
    <section className="relative w-full h-[75vh] sm:h-[85vh] md:h-screen">
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-white/50",
            bulletActiveClass: "swiper-pagination-bullet-active bg-blue-400"
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          className="w-full h-full"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[75vh] sm:h-[85vh] md:h-screen">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  priority={index === 0}
                  quality={85}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"
                  aria-hidden="true"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-10 flex items-center h-[75vh] sm:h-[85vh] md:h-screen px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-16 pb-20 md:pb-28 lg:pb-32">
        <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="block">Your Journey</span>
            <span className="block text-blue-400">Your Car</span>
            <span className="block">Your Way</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
            Discover the perfect Ford vehicle for your lifestyle. Experience
            exceptional performance, innovative technology, and unmatched
            reliability on every drive.
          </p>

          <button
            onClick={handleSubscribe}
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black text-base sm:text-lg"
            aria-label="Subscribe to our newsletter"
          >
            <span className="flex items-center gap-2 sm:gap-3">
              Subscribe <RiTelegram2Line className="text-xl sm:text-2xl" />
            </span>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6) !important;
          width: 10px;
          height: 10px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #60a5fa !important;
          width: 14px;
          height: 14px;
          border-radius: 50%;
        }
        .swiper-pagination {
          bottom: 60px !important;
          display: flex;
          justify-content: center;
        }
        @media (min-width: 640px) {
          .swiper-pagination {
            bottom: 80px !important;
          }
        }
        @media (min-width: 768px) {
          .swiper-pagination {
            bottom: 100px !important;
          }
        }
        @media (min-width: 1024px) {
          .swiper-pagination {
            bottom: 120px !important;
          }
        }
      `}</style>
    </section>
  );
}