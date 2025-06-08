// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, Phone, MessageCircle } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const mainNavigation = [
//     { name: "Модели", href: "/models" },
//     { name: "Аксессуары", href: "/accessories" },
//     { name: "Зарядные устройства", href: "/chargers" },
//     { name: "Сервис", href: "/service" },
//   ];

//   const dropdownNavigation = [
//     { name: "Гибридные автомобили", href: "/hybrids" },
//     { name: "Коммерческий транспорт", href: "/commercial" },
//     { name: "Блог", href: "/blog" },
//     { name: "О нас", href: "/about" },
//   ];

//   const phoneNumber = "+7 (775) 504 91 24";
//   const whatsappLink = "https://wa.me/77755049124"; // WhatsApp API

//   return (
//     <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
//       {/* Main header */}
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-3">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/icons/suleon.svg"
//               alt="Suleon.auto"
//               width={140}
//               height={40}
//               className="h-12 w-auto object-contain"
//             />
//           </Link>

//           {/* Center navigation for desktop */}
//           <nav className="hidden md:flex items-center gap-8">
//             {mainNavigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-800 hover:text-blue-600 transition-colors font-semibold text-base"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Right side */}
//           <div className="flex items-center gap-4">
//             {/* Phone and WhatsApp for desktop */}
//             <div className="hidden md:flex items-center gap-4">
//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold"
//               >
//                 <Phone className="w-5 h-5" />
//                 {phoneNumber}
//               </a>
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 WhatsApp
//               </a>
//             </div>

//             {/* Only phone and WhatsApp for mobile */}
//             <div className="flex md:hidden items-center gap-4">
//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold"
//               >
//                 <Phone className="w-5 h-5" />
//               </a>
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
//               >
//                 <MessageCircle className="w-5 h-5" />
//               </a>
//             </div>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 focus:outline-none md:hidden"
//             >
//               {isMenuOpen ? (
//                 <X className="h-7 w-7 text-gray-800" />
//               ) : (
//                 <Menu className="h-7 w-7 text-gray-800" />
//               )}
//             </button>

//             {/* Desktop dropdown menu button */}
//             <div className="hidden md:block">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 focus:outline-none"
//               >
//                 {isMenuOpen ? (
//                   <X className="h-7 w-7 text-gray-800" />
//                 ) : (
//                   <Menu className="h-7 w-7 text-gray-800" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dropdown menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white shadow-md border-t border-gray-200 overflow-hidden"
//           >
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col space-y-4">
//                 {/* For mobile show all links */}
//                 <div className="md:hidden">
//                   {mainNavigation.map((item) => (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//                 {/* Dropdown navigation */}
//                 {dropdownNavigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react"; // только нужные иконки


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavigation = [
    { name: "Каталог автомобилей", href: "/models" },
    { name: "Запчасти и Аксессуары", href: "/accessories" },
    { name: "Трейд Ин и выкуп", href: "/tradein" },
    { name: "Сервис", href: "/service" },
  ];

  const dropdownNavigation = [
    { name: "Отзывы", href: "/reports" },
    { name: "Блог и медиа", href: "/blog" },
    { name: "О нас", href: "/about" },
  ];

  const phoneNumber = "+7 (775) 504 91 24";
  const whatsappLink = "https://wa.me/77755049124";
  const telegramLink = "https://t.me/suleonauto";
  const instagramLink = "https://instagram.com/suleon.auto";
  const youtubeLink = "https://www.youtube.com/@suleon_auto"; // твоя ссылка на YouTube


  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/LOGOO.svg"
              alt="Suleon.auto"
              width={120}
              height={40}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center navigation for desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-blue-600 transition-colors font-semibold text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Phone and WhatsApp for desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                {phoneNumber}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors"
              >
                <img src="/icons/whatsapp-line.svg" alt="WhatsApp" width={20} height={20} />
                WhatsApp
              </a>
            </div>

            {/* Only phone and WhatsApp for mobile */}
            <div className="flex md:hidden items-center gap-4">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <img src="/icons/whatsapp-line.svg" alt="WhatsApp" width={20} height={20} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 text-gray-800" />
              ) : (
                <Menu className="h-7 w-7 text-gray-800" />
              )}
            </button>

            {/* Desktop dropdown menu button */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7 text-gray-800" />
                ) : (
                  <Menu className="h-7 w-7 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      <div
        className={`bg-white shadow-md border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {/* For mobile show all links */}
            <div className="md:hidden">
              {mainNavigation.map((item) => (
 <Link
  key={item.name}
  href={item.href}
  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg"
  onClick={() => setIsMenuOpen(false)}
>
  {item.name}
</Link>

              ))}
            </div>
            {/* Dropdown navigation */}
            {dropdownNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Social icons */}
            <div className="flex gap-6 pt-4 border-t border-gray-200">
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src="/icons/logoTG.svg" alt="Telegram" width={24} height={24} />
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src="/icons/instaLOGO.svg" alt="Instagram" width={24} height={24} />
              </a>
<a
    href={youtubeLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <img src="/icons/youtubeLogo.svg" alt="YouTube" width={24} height={24} />
  </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
