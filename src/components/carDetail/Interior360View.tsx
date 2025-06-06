'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Interior360ViewProps = {
  image: string;
  link: string;
};

export default function Interior360View({ image, link }: Interior360ViewProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="my-8">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Превью изображение */}
        <Image
          src={image}
          alt="360 интерьер"
          title="360 интерьер"
          width={1920}
          height={1070}
          className="w-full h-auto rounded-lg shadow-md"
        />
        {/* Кнопка с иконкой */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Image
            src="/icons/icons-360.png"
            alt="360"
            title="360"
            width={64}
            height={64}
          />
        </button>
      </div>

      {/* Модалка */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white rounded-xl overflow-hidden w-full max-w-6xl mx-4 h-[80vh] shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Крестик закрытия */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* iFrame */}
            <iframe
              src={link}
              className="w-full h-full pointer-events-auto"
              width="100%"
              height="100%"
              sandbox="allow-same-origin allow-scripts"
              allowFullScreen
              title="360-градусный обзор интерьера"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
