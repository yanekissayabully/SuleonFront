'use client';

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Wrench, PackageSearch, Truck, Sparkles } from "lucide-react";
import LocationMap2 from "@/components/Map2";
import FancyContactForm from "@/components/ui/SimpleForm";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function SparePartsPage() {
  return (
    <div className="bg-white text-stone-800">
      {/* HERO */}
      <section
  className="relative h-[400px] md:h-[500px] bg-black text-white"
  style={{
    backgroundImage: `url('/li9.jpg')`, // Залей фотку в public/images
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-black/60" /> {/* затемнение */}

  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }}
    className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Запчасти и аксессуары</h1>
    <p className="text-lg max-w-xl text-white/90">
      Оригинальные комплектующие для вашего авто. Профессионально. Быстро. С гарантией.
    </p>
  </motion.div>
</section>


      {/* ПРЕИМУЩЕСТВА */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center mb-12"
          >
            Почему выбирают нас?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wrench, text: "Только оригинальные детали" },
              { icon: PackageSearch, text: "Подбор по VIN и модели" },
              { icon: Truck, text: "Быстрая доставка по всему РК" },
              { icon: Sparkles, text: "Аксессуары для комфорта" },
              { icon: Phone, text: "Поддержка и консультации" },
              { icon: Mail, text: "Гарантия на все комплектующие" },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-stone-50 shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-8 h-8 mb-4 text-blue-600" />
                <p className="text-stone-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* КАК ЗАКАЗАТЬ */}
      <section className="bg-gray-50 py-20">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
    {/* Текстовая часть */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-4">Как заказать запчасть?</h2>
      <ol className="list-decimal pl-5 space-y-3 text-stone-700 mb-6">
        <li>Свяжитесь с нами по телефону или WhatsApp</li>
        <li>Укажите модель авто или VIN-код</li>
        <li>Мы подберем нужные детали</li>
        <li>Вы получите заказ с доставкой или самовывозом</li>
      </ol>

      {/* Упоминание сайта */}
      <p className="text-stone-700 mb-4">
        У нас есть отдельный сайт, где вы можете самостоятельно подобрать и заказать нужные детали.
      </p>

      {/* Кнопки */}
                <div className="flex flex-wrap gap-3">


            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/77007300708"
              target="_blank"
              className="flex-1 min-w-[160px] flex items-center justify-center gap-2 bg-[#25D366] text-white px-3 py-3 rounded-full hover:shadow-lg transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L4 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.instagram.com/suleon.parts"
              target="_blank"
              className="flex-1 min-w-[160px] flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-3 rounded-full hover:shadow-lg transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
              Instagram
            </motion.a>
                        <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://have.kz/?fbclid=PAZXh0bgNhZW0CMTEAAadLT2SFr9WYlQ8aity5hmm8qkIssM54z5YOsbMHt39FbrgqvSERYH-8GOkjFQ_aem_Ul4PnzF8TdxDCEQL1gpPNAv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-3 rounded-full hover:shadow-lg transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Сайт запчастей
            </motion.a>
          </div>
    </motion.div>

    {/* Картинка */}
    <motion.div
      className="overflow-hidden rounded-xl shadow-md"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img
        src="/li9.jpg"
        alt="Автозапчасти"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
</section>


      {/* КОНТАКТЫ */}
      {/* <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-2xl font-semibold mb-6">Контактная информация</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-2 text-rose-500" />
              <p>г. Алматы, ул. Кабдолова 1/2</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-2 text-rose-500" />
              <a href="tel:+77071234567" className="hover:underline">+7 (707) 123-45-67</a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-2 text-rose-500" />
              <a href="mailto:info@suleon.kz" className="hover:underline">info@suleon.kz</a>
            </div>
          </div>
        </motion.div>
      </section> */}

      <FancyContactForm/>
      {/* КАРТА */}
      <LocationMap2/>

    </div>
  );
}
