// components/CarDetail/CarDetailCarousel.tsx

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

const slides: Slide[] = [
  {
    image: '/img1.jpg',
    title: 'Новый интерьер: Ритм океана',
    description: 'Откройте для себя новое пространство, наполненное ощущением красоты и свободы. Интерьер созданный для максимального комфорта и наслаждения, отражающий гармонию и свежесть волн океана.',
  },
  {
    image: '/img2.webp',
    title: 'Интеллектуальная система BYD',
    description: 'Система, которая связывает людей, автомобили и жизнь. Просто скажите "Hi BYD".',
  },
  {
    image: '/img3.webp',
    title: 'Понорамная крыша',
    description: 'Панорамная крыша BYD Song Plus предлагает широкий обзор и делает салон более светлым и просторным. Эта особенность добавляет элегантности и комфорта, улучшая общее впечатление от поездки.',
  },
];

export const CarDetailCarousel = () => {
  return (
    <div className="w-full py-12">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-semibold">{slide.title}</h3>
                <p className="text-white mt-2">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
