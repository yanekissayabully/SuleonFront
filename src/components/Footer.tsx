import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const locations = [
    {
      name: "Алматы (Автосалон)",
      address: "ул. Шахмета Хусаинова, 22",
      hours: "10:00 - 20:00",
      phone: "+7 (775) 504 91 24",
      mapLink: "#",
    },
    // {
    //   name: "River Mall (2-й этаж)",
    //   address: "ул. Генерала Петрова, 12",
    //   hours: "10:00 - 22:00",
    //   phone: "+38 (097) 996 99 44",
    //   mapLink: "#",
    // },
    // {
    //   name: "Днепр (1-й этаж)",
    //   address: "пр. Мира, 17",
    //   hours: "10:00-20:00",
    //   phone: "+38 (093) 996 99 44",
    //   mapLink: "#",
    // },
  ];

  const quickLinks = [
    { name: "Электромобили", href: "/models" },
    { name: "Гибридные автомобили", href: "/hybrids" },
    { name: "Коммерческий транспорт", href: "/commercial" },
    { name: "Зарядные устройства", href: "/chargers" },
    { name: "Сервис Suleon Auto", href: "/service" },
    { name: "Тех. обслуживание", href: "/maintenance" },
    { name: "Блог", href: "/blog" },
    { name: "О нас", href: "/about" },
  ];

  const carBrands = [
    "ZEEKR",
    "BYD",
    "Volkswagen",
    "Nissan",
    "Audi",
    "Honda",
    "BMW",
    "Tesla",
    "Mercedes-Benz",
    "Xiaomi",
    "NIO",
    "Lotus",
    "Polestar",
    "Smart",
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
<Link href="/" className="inline-block mb-6">
  <Image
    src="/icons/LOGOO.svg"
    alt="SuleonAuto"
    width={150}
    height={50}
    className="h-12 w-auto"
  />
</Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Официальный импортер электромобилей из Китая. Более 9 лет опыта,
              1000+ довольных клиентов, 75 моделей в наличии и под заказ.
            </p>
            
<div className="flex items-center gap-4 mt-6">
  {/* WhatsApp */}
  <a
    href="https://wa.me/77755049124"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition"
  >
    <Image src="/icons/whatsapp-line.svg" alt="WhatsApp" width={28} height={28} />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/suleon.auto"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition"
  >
    <Image src="/icons/instaLogo.svg" alt="Instagram" width={28} height={28} />
  </a>

  {/* Telegram */}
  <a
    href="https://t.me/suleonauto"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition"
  >
    <Image src="/icons/logoTG.svg" alt="Telegram" width={28} height={28} />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@suleon_auto"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition"
  >
    <Image src="/icons/youtubeLogo.svg" alt="YouTube" width={28} height={28} />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Brands */}
          {/* <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Бренды</h3>
            <div className="flex flex-wrap gap-2">
              {carBrands.map((brand) => (
                <Link
                  key={brand}
                  href={`/models/${brand.toLowerCase()}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors bg-slate-800 px-3 py-1 rounded"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div> */}

          {/* Locations */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Наши офисы</h3>
            <div className="space-y-6">
              {locations.map((location) => (
                <div key={location.name} className="text-sm">
                  <h4 className="font-medium text-white mb-2">
                    {location.name}
                  </h4>
                  <div className="space-y-1 text-gray-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{location.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="hover:text-white transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Suleon Auto. Все права защищены.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
