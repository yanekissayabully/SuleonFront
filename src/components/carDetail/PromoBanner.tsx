'use client';

import { motion } from 'framer-motion';

export const PromoBanner = () => {
  const handleClick = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[500px]">
      {/* Фон */}
      <div className="absolute inset-0">
        <img
          src="/last.jpg" // замени на свой путь
          alt="Тест-драйв"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Контент */}
      <div className="relative z-10 flex flex-col justify-end items-center h-full text-center px-4 pb-16">
        <motion.h2
          className="text-white text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Почувствуйте будущее за рулем
        </motion.h2>
        <motion.button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-3 rounded-full shadow-lg transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Записаться на тест-драйв
        </motion.button>
      </div>
    </div>
  );
};
