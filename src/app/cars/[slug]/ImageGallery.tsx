"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryTabs = [
  { key: "exterior", label: "Экстерьер" },
  { key: "interior", label: "Интерьер" },
  { key: "promo", label: "Промо" },
  { key: "video", label: "Видео" },
];

interface GalleryImage {
  image: string;
  image_type: "exterior" | "interior" | "promo" | "video";
}

interface Car {
  gallery_images: GalleryImage[];
}

export default function ImageGallery({ car }: { car: Car }) {
  const [currentTab, setCurrentTab] = useState<"exterior" | "interior" | "promo" | "video">("exterior");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = car.gallery_images
    ?.filter((img) => img.image_type === currentTab)
    .map((img) => img.image)
    .filter((img) => img) || [];

  if (!images.length) {
    return <div className="text-gray-500 text-center py-8">Нет изображений для выбранного раздела</div>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTabChange = (tab: "exterior" | "interior" | "promo" | "video") => {
    setCurrentTab(tab);
    setCurrentImageIndex(0);
  };

  return (
    <div className="space-y-4">
      {/* Компактные кнопки табов */}
      <div className="flex flex-wrap gap-1.5">
        {galleryTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabChange(tab.key as any)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              currentTab === tab.key
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Основное изображение */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
        {images[currentImageIndex] ? (
          <Image
            src={images[currentImageIndex]}
            alt={`Фото ${currentTab}`}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500 text-sm">
            Изображение отсутствует
          </div>
        )}

        {/* Навигация стрелками */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition-all"
              aria-label="Предыдущее изображение"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition-all"
              aria-label="Следующее изображение"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </>
        )}

        {/* Индикатор текущего изображения */}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white px-1.5 py-0.5 rounded-full text-xs">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}
      </div>

      {/* Превью изображений */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-1.5">
          {images.slice(0, 8).map((image, index) => (
            <button
              key={`${image}-${index}`}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative aspect-square rounded-md overflow-hidden border transition-all ${
                currentImageIndex === index
                  ? "border-blue-500"
                  : "border-transparent hover:border-gray-300"
              }`}
              aria-label={`Просмотр изображения ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Превью ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}