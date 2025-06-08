"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Car } from "@/data/cars";

export default function MediaContent({ car }: { car: Car }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const blocks: JSX.Element[] = [];

  if (car.content) {
    car.content.forEach((item, index) => {
      if (item.type === "image") {
        blocks.push(
          <div
            key={`image-${index}`}
            className="relative aspect-[16/9] max-w-[560px] mx-auto rounded-md overflow-hidden bg-gray-100 shadow-sm"
          >
            <Image
              src={item.media}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        );
      }

      if (item.type === "video") {
        blocks.push(
          <div
            key={`video-${index}`}
            className="relative aspect-[16/9] max-w-[560px] mx-auto rounded-md overflow-hidden shadow-sm"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src={item.media} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10" />
          </div>
        );
      }

      if (item.title || item.text) {
        blocks.push(
          <div
            key={`text-${index}`}
            className="flex flex-col justify-center p-5 md:p-6 max-w-[520px] mx-auto bg-white rounded-md shadow-sm"
          >
            {item.title && (
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
            )}
            {item.text && (
              <p className="text-base md:text-lg text-gray-700 leading-relaxed md:leading-normal">
                {item.text}
              </p>
            )}
          </div>
        );
      }
    });
  }

  // Реверс каждой второй пары для шахматного порядка
  const reorderedBlocks = [];
  for (let i = 0; i < blocks.length; i += 2) {
    const pair = blocks.slice(i, i + 2);
    if (Math.floor(i / 2) % 2 === 1) {
      pair.reverse();
    }
    reorderedBlocks.push(...pair);
  }

  return (
    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      {reorderedBlocks.map((content, i) => (
        <motion.div
          key={i}
          className="relative overflow-hidden rounded-md"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={i}
          whileHover={{
            scale: 1.02,
            y: -3,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.08)",
          }}
        >
          {content}
        </motion.div>
      ))}
    </div>
  );
}
