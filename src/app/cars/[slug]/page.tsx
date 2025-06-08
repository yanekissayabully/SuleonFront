import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CarDetailCarousel } from "@/components/carDetail/CarDetailCarousel";
import { PromoBanner } from "@/components/carDetail/PromoBanner";
import {
  Phone,
  Zap,
  Battery,
  Gauge,
  Car as CarIcon,
  Users,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/ContactForm";
import CarCard from "@/components/CarCard";
import { getCarBySlug, cars } from "@/data/cars";
import Interior360View from "@/components/carDetail/Interior360View";
import Viewer360 from "@/components/carDetail/Viewer360";
import { fetchCarBySlug } from '@/services/api'
import ImageGallery from "./ImageGallery";
import CarVideo from "./CarVideo";
import QuickActions from "./QuickActions";
import MediaContent from "./MediaContent";
import { get } from "http";
import HeroCar from "@/components/HeroCar";



interface CarDetailPageProps {
  params: { slug: string };
}



export default async function CarDetailPage({ params }: CarDetailPageProps) {
  // const car = getCarBySlug(params.slug);
  const car = await fetchCarBySlug(params.slug);

  

  if (!car) {
    notFound();
  }

  const relatedCars = cars
    .filter((c) => c.id !== car.id && c.brand === car.brand)
    .slice(0, 3);


  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatPriceUAH = (price: number) => {
    return `${new Intl.NumberFormat("uk-UA").format(price)} ₸`;
  };

  const specIcons = {
    engine: Settings,
    battery: Battery,
    range: Zap,
    power: Gauge,
    acceleration: CarIcon,
    maxSpeed: Gauge,
    charging: Battery,
    driveType: CarIcon,
    seating: Users,
    bodyType: CarIcon,
  };



  return (
    
    <div className="min-h-screen bg-white">
            <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link
              href="/models"
              className="hover:text-blue-600 transition-colors"
            >
              Модели
            </Link>
            <span>/</span>
            <Link
              href={`/models/${car.brand.toLowerCase()}`}
              className="hover:text-blue-600 transition-colors"
            >
              {car.brand}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{car.model}</span>
          </nav>
        </div>
      </div>
      
      <HeroCar car={car} />
      


      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {car.gallery_images && <ImageGallery car={car} />}


          {/* Car Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-blue-600 text-white">
                  {car.category === "electric"
                    ? "Электромобиль"
                    : car.category === "hybrid"
                    ? "Гибрид"
                    : "Коммерческий"}
                </Badge>
                <Badge variant={car.available ? "default" : "secondary"}>
                  {car.available ? "В наличии" : "Под заказ"}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {car.brand} {car.model}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                {car.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {formatPrice(car.price.usd)}
                  </div>
                  <div className="text-lg text-gray-600">
                    {formatPriceUAH(car.price.tg)}
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
                <Button variant="outline" size="lg">
                  Тест-драйв
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
                  <QuickActions />

            {/* Color Options */}
            {car.colors && car.colors.length >= 1 && (
              <div>
                <h3 className="font-semibold mb-3">Возможные цвета:</h3>
                <div className="flex gap-3">
                  {car.colors.map((color) => (
                    <div key={color.name} className="text-center">
                      <div className="w-12 h-12 rounded-full border-2 border-gray-200 overflow-hidden mb-2">
                        <Image
                          src={color.image}
                          alt={color.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
                    {/* НОВЫЕ табы для 360º обзор */}
<div className="mt-16">
  <Tabs defaultValue="exterior" className="w-full">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="exterior">360º Внешний Вид</TabsTrigger>
      <TabsTrigger value="interior">360º Интерьер</TabsTrigger>
    </TabsList>

    <TabsContent value="exterior" className="mt-8">
      {car.imageUrls && (
        <Viewer360 images={car.imageUrls} autoPlay={false} speed={110} />
      )}
    </TabsContent>

    <TabsContent value="interior" className="mt-8">
      {car.view && (
        <Interior360View
          image={car.view.image}
          link={car.view.link}
        />
      )}
    </TabsContent>
  </Tabs>
</div>
        {/* Tabs Section */}
        <div className="mt-16">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specs">Характеристики</TabsTrigger>
              <TabsTrigger value="features">Особенности</TabsTrigger>
              <TabsTrigger value="video">Видео</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                { car.specs && Object.entries(car.specs).map(([key, value]) => {
                  const IconComponent =
                    specIcons[key as keyof typeof specIcons] || Settings;
                  const labels = {
                    engine: "Двигатель",
                    battery: "Батарея",
                    range: "Запас хода",
                    power: "Мощность",
                    acceleration: "Разгон 0-100 км/ч",
                    maxSpeed: "Максимальная скорость",
                    charging: "Зарядка",
                    driveType: "Привод",
                    seating: "Количество мест",
                    bodyType: "Тип кузова",
                  };

                  return (
                    <div
                      key={key}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {labels[key as keyof typeof labels]}
                        </div>
                        <div className="text-gray-600">{value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="video" className="mt-8">
              {/* Video */}
              <CarVideo car={car} />

              {/* Блок с ссылкой на канал */}
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Посетите наш YouTube канал для просмотра больше видео о
                  электромобилях
                </p>
                <a
                  href="https://www.youtube.com/@Suleon_Auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-red-600 hover:text-red-900 transition-colors font-medium"
                >
                  Перейти на канал
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* {car.imageUrls && <Viewer360 images={car.imageUrls} autoPlay={false} speed={110} />}

        {car.view && <Interior360View
          image = {car.view.image} link={car.view.link}
        />} */}
        {/* НОВЫЕ табы для 360º обзор */}



        {/* Contact Form */}
        <div className="mt-16" id="contact-form">
          <ContactForm
            title={`Интересует ${car.brand} ${car.model}?`}
            subtitle="Оставьте заявку, и мы свяжемся с вами для консультации"
          />
        </div>

        <MediaContent car={car} />

        {car.slides && <CarDetailCarousel slides={car.slides} />}
        <PromoBanner lastImage={car.last_image}/>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Похожие модели {car.brand}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCars.map((relatedCar) => (
                <CarCard key={relatedCar.id} car={relatedCar} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

