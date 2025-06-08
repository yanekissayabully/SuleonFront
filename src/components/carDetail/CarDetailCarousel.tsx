'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

interface Slide {
  image: string;
  title: string;
  description: string;
}

export const CarDetailCarousel = ({ slides }: { slides: Slide[] }) => {
  return (
    <div className="w-full py-8">
      <div className="max-w-[1100px] mx-auto"> {/* Ограничение ширины */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full h-[400px]" // Высота меньше
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 md:p-6">
                  <h3 className="text-white text-xl md:text-2xl font-semibold">{slide.title}</h3>
                  <p className="text-white mt-2 text-sm md:text-base">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
