'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Interior360View() {
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
      <div className="max-w-7xl px-6">
        <h2 className="text-2xl font-semibold mb-4">Интерьер 360º</h2>
      </div>
      <div className="relative">
        <Image
          // src="/images/byd-sealion07/zorobzor.jpeg"
          src="/img1.jpg"
          alt="Электромобиль BYD Sea Lion 07 360"
          title="Электромобиль BYD Sea Lion 07 360"
          width={1920}
          height={1070}
          className="w-full h-auto"
        />
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:scale-105 transition-transform"
        >
          <Image
            src="/icons/icons-360.png"
            alt="360"
            title="360"
            width={80}
            height={60}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden w-full max-w-5xl h-[80vh] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
            //   src="https://momento360.com/e/u/your-embed-id"
              src="https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=280"
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
