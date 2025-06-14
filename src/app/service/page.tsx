'use client';

import { motion } from 'framer-motion';
import {
  Wrench,
  ShieldCheck,
  TimerReset,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import LocationMap2 from '@/components/Map2';
import FancyContactForm from '@/components/ui/SimpleForm';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function ServicePage() {
  return (
    <div className="bg-white text-stone-800">
      {/* HERO */}
      <section className="py-20 bg-white text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            Сервис и обслуживание
          </h1>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Официальный сервисный центр для автомобилей BYD и электрокаров. Быстро, надёжно, с гарантией.
          </p>
        </motion.div>
      </section>

      {/* УСЛУГИ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl font-semibold text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Что входит в наш сервис?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wrench, text: 'Плановое ТО и замена расходников' },
              { icon: ShieldCheck, text: 'Гарантийное и постгарантийное обслуживание' },
              { icon: TimerReset, text: 'Диагностика, настройка электроники' },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-8 h-8 mb-4 text-rose-500" />
                <p className="text-stone-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ МЫ */}
      <section className="py-16 bg-stone-50">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold mb-6">Почему выбирают нас?</h2>
          <p className="max-w-2xl mx-auto text-stone-700">
            Мы — официальный центр, сертифицированный под автомобили BYD и другие электрокары.
            Используем оригинальные запчасти, современное оборудование и строго соблюдаем стандарты производителя.
          </p>
        </motion.div>
      </section>

      <FancyContactForm/>
      {/* КАРТА */}
      <LocationMap2/>
    </div>
  );
}
