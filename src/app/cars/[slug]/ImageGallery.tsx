"use client";

import { useState } from "react"
import Image from 'next/image';
import { Car } from "@/data/cars"
import { ArrowLeft, ArrowRight } from "lucide-react";



export default function ImageGallery({ car }: { car: Car }) {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);


      const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? car.images.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === car.images.gallery.length - 1 ? 0 : prev + 1
    );
  };


    return (
        <>
        {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={car.images.gallery[currentImageIndex]}
                alt={`${car.brand} ${car.model}`}
                fill
                className="object-cover"
                priority
              />

              {/* Navigation arrows */}
              {car.images.gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {car.images.gallery.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {car.images.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {car.images.gallery.slice(0, 8).map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-blue-500"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${car.brand} ${car.model} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div></>
    );
}