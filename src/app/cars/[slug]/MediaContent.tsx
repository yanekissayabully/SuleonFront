"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Car } from "@/data/cars"


export default function MediaContent({ car }: { car: Car }) {
    const fadeInUp = {
      hidden: { opacity: 0, y: 30 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2, // Задержка для каждого следующего элемента
          duration: 0.6,
          ease: "easeOut",
        },
      }),
    };

const blocks: JSX.Element[] = [];


if(car.content){  car.content.forEach((item, index) => {
    // Медиа блок (image/video)
    if (item.type === "image") {
      blocks.push(
        <div
          key={`image-${index}`}
          className="relative aspect-square rounded-xl overflow-hidden bg-gray-100"
        >
          <Image
            src={item.media}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover"
          />
        </div>
      );
    }

    if (item.type === "video") {
      blocks.push(
        <div
          key={`video-${index}`}
          className="relative aspect-square rounded-xl overflow-hidden shadow-md"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={item.media} type="video/mp4" />
            Ваш браузер не поддерживает видео фон.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>
      );
    }

    // Текст блок — если в контенте есть текст
      if (item.title || item.text) {
        blocks.push(
          <div
            key={`text-${index}`}
            className="flex flex-col justify-center p-8 bg-white rounded-xl shadow-md"
          >
            {item.title && (
              <h3 className="text-3xl font-semibold text-gray-900 mb-6 leading-snug">
                {item.title}
              </h3>
            )}
            {item.text && (
              <p className="text-base text-gray-700 leading-relaxed">{item.text}</p>
            )}
          </div>
        );
      }
    }); // <-- Add this to close the forEach callback and block

    


}
const reorderedBlocks = [];
for (let i = 0; i < blocks.length; i += 2) {
  const pair = blocks.slice(i, i + 2);
  if (Math.floor(i / 2) % 2 === 1) {
    pair.reverse(); // реверс каждой второй пары
  }
  reorderedBlocks.push(...pair);
}
    return (<><div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {
          // [
          //   // 1. Фото
          //   <>
          //     <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
          //       <Image
          //         src="/фары.jpg"
          //         alt={`${car.brand} ${car.model}`}
          //         fill
          //         className="object-cover"
          //       />
          //     </div>
          //   </>,
          //   // 2. Текст
          //   <>
          //     <div className="flex flex-col justify-center p-8 bg-white rounded-xl shadow-md">
          //       <h3 className="text-3xl font-semibold text-gray-900 mb-6 leading-snug">
          //         Фары, вдохновлённые отблесками океана
          //       </h3>
          //       <p className="text-base text-gray-700 leading-relaxed">
          //         Двойные U-образные фары BYD Song Plus сверкают, словно
          //         отражение солнца в бескрайних океанских просторах. Их изящные
          //         линии и хрустальные световые полосы создают эффект глубины и
          //         сияния, наполняя взгляд автомобиля живой энергией. Безупречная
          //         текстура и многослойная оптика делают эти фары не просто
          //         элементом дизайна, а настоящим произведением искусства.
          //       </p>
          //     </div>
          //   </>,
          //   // 3. Текст
          //   <>
          //     <div className="flex flex-col justify-center p-8 bg-white rounded-xl shadow-md">
          //       <h3 className="text-3xl font-semibold text-gray-900 mb-6 leading-snug">
          //         Откройте для себя передовые технологии
          //       </h3>
          //       <p className="text-base text-gray-700 leading-relaxed">
          //         BYD Song Plus сочетает передовые технологии и премиальный
          //         комфорт. Электрифицированная платформа доступна в гибридной
          //         версии DM-i и полностью электрическом исполнении EV, чтобы вы
          //         могли выбрать идеальный формат движения. В салоне —
          //         современный интерьер с поворотным 15,6-дюймовым экраном и
          //         качественной отделкой. Безопасность подтверждена 5 звёздами
          //         C-NCAP. Панорамная крыша, двухзонный климат-контроль и
          //         интеллектуальные системы помощи делают каждую поездку
          //         максимально удобной. Вместительный багажник объёмом до 574
          //         литров легко вместит всё необходимое для ваших путешествий.
          //       </p>
          //     </div>
          //   </>,
          //   // 4. Видео
          //   <>
          //     <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
          //       <video
          //         autoPlay
          //         muted
          //         loop
          //         playsInline
          //         className="absolute top-0 left-0 w-full h-full object-cover"
          //       >
          //         <source src="/видосBYD.mp4" type="video/mp4" />
          //         Ваш браузер не поддерживает видео фон.
          //       </video>
          //       <div className="absolute inset-0 bg-black bg-opacity-20" />
          //     </div>
          //   </>,
          //   // 5. Фото
          //   <>
          //     <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
          //       <Image
          //         src="/перед.jpg"
          //         alt={`${car.brand} ${car.model}`}
          //         fill
          //         className="object-cover"
          //       />
          //     </div>
          //   </>,
          //   // 6. Текст
          //   <>
          //     <div className="flex flex-col justify-center p-8 bg-white rounded-xl shadow-md">
          //       <h3 className="text-3xl font-semibold text-gray-900 mb-6 leading-snug">
          //         OCEAN X FACE
          //       </h3>
          //       <p className="text-base text-gray-700 leading-relaxed">
          //         Эволюционное сочетание футуристических линий и морских мотивов
          //         рождает узнаваемый облик BYD Song Plus. Этот образ словно
          //         сошёл со страниц научной фантастики, объединяя мощь океанских
          //         глубин с дерзким взглядом в будущее. Каждый изгиб формирует
          //         характер, в котором гармонично сочетаются энергия природы и
          //         передовые технологии. OCEAN X FACE — это больше, чем дизайн,
          //         это свобода стиля и бескрайние горизонты для воображения.
          //       </p>
          //     </div>
          //   </>,
          // ]
          reorderedBlocks.map((content, i) => (
            <motion.div
              key={i}
              className="relative aspect-square overflow-hidden transition-transform transform rounded-xl"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              whileHover={{
                scale: 1.03,
                y: -10,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              {content}
            </motion.div>
          ))}
          
        </div></>);
}