"use client";

import Image from "next/image";
import Title from "../Globals/Title";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 2.2,
  },
  992: {
    slidesPerView: 4,
  },
};

export default function Trust() {
  return (
    <section className="py-10 pb-0 lg:py-20 lg:pb-20">
      <div className="container">
        <Title
          text="Trusted By The World Leading Organizations"
          classes="md:mb-10"
        />

        <div className="hidden grid-cols-4 gap-3 sm:gap-5 lg:grid">
          {Array.from(Array(4), (_, i) => (
            <div key={i} className="relative flex items-center justify-center">
              <Image
                width={110}
                height={30}
                className="h-[30px] !w-[60px] object-contain lg:!w-[110px]"
                src={`/sections/trust/${i + 1}.svg`}
                alt="trusted-company"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <Swiper
          className="mySwiper lg:!hidden"
          spaceBetween={10}
          breakpoints={breakpoints}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: true,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={true}
        >
          {Array.from(Array(4), (_, i) => (
            <SwiperSlide key={i}>
              <Image
                width={110}
                height={30}
                className="mx-auto h-[50px] !w-[60px] object-contain lg:!w-[110px]"
                src={`/sections/trust/${i + 1}.svg`}
                alt="trusted-company"
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
