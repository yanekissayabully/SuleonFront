'use client';

import { motion } from 'framer-motion';
import { Handshake, Car, DollarSign, Phone, Mail, MapPin } from 'lucide-react';
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

export default function TradeInPage() {
  return (
    <div className="bg-white text-stone-800">
      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-blue-100 to-white text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            Обменяй свой авто на новый — легко!
          </h1>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Система Trade-In от Suleon — это быстрый и честный способ заменить ваш автомобиль на новый BYD.
          </p>
        </motion.div>
      </section>

      {/* КАК ЭТО РАБОТАЕТ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl font-semibold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Как это работает?
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              'Оставьте заявку или позвоните',
              'Привозите авто на осмотр',
              'Получаете предложение за ваш авто',
              'Забираете новый BYD с выгодой',
            ].map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-xl bg-stone-50 hover:shadow-md transition flex flex-col items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4 text-xl font-bold">
                  {i + 1}
                </div>
                <p className="text-stone-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ ВЫГОДНО */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl font-semibold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Почему это выгодно?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: DollarSign, text: 'Честная рыночная оценка' },
              { icon: Handshake, text: 'Всё официально и прозрачно' },
              { icon: Car, text: 'Скидка на новый автомобиль' },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-8 h-8 mb-4 text-blue-500 mx-auto" />
                <p className="text-stone-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ЗАЯВКА */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <motion.h2
            className="text-2xl font-semibold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Хотите узнать стоимость вашего авто?
          </motion.h2>
          <p className="text-stone-600 mb-6">
            Просто напишите нам или позвоните — мы бесплатно оценим ваш автомобиль и предложим выгодные условия обмена.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <a
              href="https://wa.me/77071234567"
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
            >
              Написать в WhatsApp
            </a>
            <a
              href="tel:+77071234567"
              className="border border-stone-300 px-6 py-3 rounded-full text-stone-700 hover:bg-stone-100 transition"
            >
              Позвонить
            </a>
          </div>
        </div>
      </section> */}
      <FancyContactForm/>

      {/* КОНТАКТЫ */}
      
    </div>
  );
}
