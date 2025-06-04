'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CarDetailCarousel } from '@/components/carDetail/CarDetailCarousel';
import { PromoBanner } from '@/components/carDetail/PromoBanner';
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Share2,
  Heart,
  Play,
  X,
  Zap,
  Battery,
  Gauge,
  Car as CarIcon,
  Users,
  Fuel,
  Calendar,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContactForm from '@/components/ContactForm';
import CarCard from '@/components/CarCard';
import { getCarBySlug, cars, Car } from '@/data/cars';
import Interior360View from '@/components/carDetail/Interior360View';
import Viewer360 from '@/components/carDetail/Viewer360';

interface CarDetailPageProps {
  params: Promise<{ slug: string }>;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Задержка для каждого следующего элемента
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const CarDetailPage = ({ params }: CarDetailPageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get slug from params - use React.use for async params
  const resolvedParams = React.use(params);
  const car = getCarBySlug(resolvedParams.slug);

  if (!car) {
    notFound();
  }

  const relatedCars = cars
    .filter(c => c.id !== car.id && c.brand === car.brand)
    .slice(0, 3);

  const handlePrevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? car.images.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev =>
      prev === car.images.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatPriceUAH = (price: number) => {
    return `${new Intl.NumberFormat('uk-UA').format(price)} ₸`;
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
    bodyType: CarIcon
  };


const imageUrls = [
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvNGM4MmM5ZGM4ZjJhM2IxYzc5OTc5NDJiZjkxYjg2OTIucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvODhiZTEwZmM4NzQ3NGQzYzRkZTAyNjZhMmFiYzU3ZWIucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZjZhNDlkYWFlMDg1NDE2ZGJkNGNmNDk0ODAyNzYxY2UucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZTYyNjA1ZGNkNjczNDgxYTgwZDRhMmYwMDYzMWY0M2IucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZTcxYTlhOWY4Nzc0YTJlMjFkNzczOWUwZTY5MWU5MjUucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvM2FiNzRmOTA1MTdkMDdiZjBmMGRlYmI3Y2ExOTJiNjAucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMzVkMDhjZGRjMTM4OGVhOTg2NDVjZmYwMGI4YmIyM2IucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOWY3YTZjNDljMDY5OTNlZGI0M2EzZWRmM2Q2MGYxOTEucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMDAyYmM5YzQwNjBiODFlZmMwODU5YTU0ZDEzZjMyZDYucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYmMyZTgwNDY4NTI3ODA3OTc0ODE0YzIxNWNiYzk4ZGQucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOGRjMDg5ZjA3NWY1OGFmZWRkYWE3MDM1OTYxNTkyYmYucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYzExNjQ4OTIxNjZlOWVlNTlhMTNiNjE4ODA3ZDYyNTgucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZTU3MjBjN2Y3NjQ5MTJjNTkxMTc1OTI1MmM3NGE0ZjgucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMTVkYWQ3YmZiZjFhOGFiNzgzMjRkMWZkMGM4YjBkOWUucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZTA2OWM2MGU4OGRlYjU4ZGQ5MTk3ODhiZTAwMmM3ODIucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZjBhNGZlZTM0NGM5YzEwODMxMDNhMjliNmExNzE0MDgucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvM2I0MTE2ODcwM2RjYmRmMjA4NDNjNzNjZjIxOTc3YjcucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYTE1NjJlYzZmYWE4YWIyNTgyNmJlMTQ1ZTA3MmZlODUucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMTJhYzg2MjYwNzc2MGFmN2QyMGE2NzVkMTc0MTAzNWMucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvNWEzZjlkMmIxMjE0ODc2YWZiNjM1NjIzODM1MGY2NzcucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYjUwYTUwNWI0YjY5ZmM3YTVjMTVhNmJiOTc1YTBmNzQucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvODI1YjU4MWYwNzdiZDE4MThhOGU2YTgwMzk5ZjdkYTQucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZDFlOWUxNWFjNDI0MjUzZWQ5ZjQzNTZhOGRlYzYxNzIucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYTRmYWQ5NWQ3ODRlODc3YWNiMWQ1MGI5M2Q1Yjc4ZDIucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZWY3MWJiZjM5NjliZTU0OThjNDhkYTM5YzMwZmI3YWUucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOGNhNzgyZDY0ZDNkZDk0MjY3OTlhNDFkM2YzMzcwMDIucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYTVkNjE2ZmMzMGY2NDU1NTI3MmY0YTZmZjk4N2E5YWEucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvN2E2ZmVhMGIwMTY5ODRkZGFjZjI5ZjhjOWQ3NzA3ZDQucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvODA5OGQ5MjllZGU1ODNiYzMxNGZjNzFlNjVlMjMzZGIucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOTU1ZDkzMjI2MmRlZWYzYzcxYTYwZDZmZDIzMjA3MDgucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMGExYjUxZjdmMTg4ZDQ5YjlhY2EzNjRlZmNjYTdjMWUucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvNGIzMjc4MWMwZTNjYmNhMTIxYmE5NTQ4Zjg0NTQ3MGQucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYzI1ZDRkM2Q3MDQ5NTIzOTdkMGEwZWYzMGRmZjliODAucG5nfDEyMDB8ODAwfGE=.webp"
, 
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZWExZDJlMzEwYjZhMzAyOWJlY2FhMWIyNTllZjU0YTUucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOWM2NGIxZGNiN2Q0MmU4YmJiYjk5N2JiOGJlMzYxNWMucG5nfDEyMDB8ODAwfGE=.webp"
,
"https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvM2Q4NmYwNmI"]
  

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/models" className="hover:text-blue-600 transition-colors">Модели</Link>
            <span>/</span>
            <Link href={`/models/${car.brand.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
              {car.brand}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{car.model}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={car.images.gallery[currentImageIndex]}
                alt={`${car.brand} ${car.model}`}
                fill
                className="object-cover"
                priority
              />

              {/* Navigation arrows */}
              {car.images.gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {car.images.gallery.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {car.images.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {car.images.gallery.slice(0, 8).map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-blue-500'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${car.brand} ${car.model} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-blue-600 text-white">
                  {car.category === 'electric' ? 'Электромобиль' :
                   car.category === 'hybrid' ? 'Гибрид' : 'Коммерческий'}
                </Badge>
                <Badge variant={car.available ? 'default' : 'secondary'}>
                  {car.available ? 'В наличии' : 'Под заказ'}
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
                {/* <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Кредит от</div>
                  <div className="text-2xl font-bold text-blue-600">0,01%</div>
                </div> */}
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
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? 'text-red-500 border-red-300' : ''}
              >
                <Heart className={`w-4 h-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                {isFavorite ? 'В избранном' : 'В избранное'}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Поделиться
              </Button>
            </div>

            {/* Color Options */}
            {car.colors && car.colors.length > 1 && (
              <div>
                <h3 className="font-semibold mb-3">Доступные цвета:</h3>
                <div className="flex gap-3">
                  {car.colors.map((color) => (
                    <div
                      key={color.name}
                      className="text-center"
                    >
                      <div className="w-12 h-12 rounded-full border-2 border-gray-200 overflow-hidden mb-2">
                        <Image
                          src={color.image}
                          alt={color.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-600">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>


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
                {Object.entries(car.specs).map(([key, value]) => {
                  const IconComponent = specIcons[key as keyof typeof specIcons] || Settings;
                  const labels = {
                    engine: 'Двигатель',
                    battery: 'Батарея',
                    range: 'Запас хода',
                    power: 'Мощность',
                    acceleration: 'Разгон 0-100 км/ч',
                    maxSpeed: 'Максимальная скорость',
                    charging: 'Зарядка',
                    driveType: 'Привод',
                    seating: 'Количество мест',
                    bodyType: 'Тип кузова'
                  };

                  return (
                    <div key={key} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
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
                  <div key={feature} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="video" className="mt-8">
  {car.video ? (
    <div className="relative">
      {!isVideoPlaying ? (
        <motion.div
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
          onClick={() => setIsVideoPlaying(true)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://img.youtube.com/vi/${car.video}/maxresdefault.jpg)`,
            }}
          >
            {/* затемнение фона */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />

            {/* кнопка play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
              </motion.div>
            </div>

            {/* подписи на видео */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black bg-opacity-50 rounded-lg p-4 text-white">
                <h3 className="font-semibold mb-1">Смотреть видео</h3>
                <p className="text-sm opacity-90">
                  Узнайте больше о наших электромобилях
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${car.video}?autoplay=1&rel=0`}
            title={`${car.brand} ${car.model} Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
          {/* Кнопка закрытия */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
            onClick={() => setIsVideoPlaying(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </motion.div>
      )}
    </div>
  ) : (
    <div className="text-center py-12 text-gray-500">
      Видео для этой модели пока недоступно
    </div>
  )}

  {/* Блок с ссылкой на канал */}
  <div className="text-center mt-8">
    <p className="text-gray-600">
      Посетите наш YouTube канал для просмотра больше видео о электромобилях
    </p>
    <a
      href="https://www.youtube.com/@Suleon_Auto"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-3 text-red-600 hover:text-red-900 transition-colors font-medium"
    >
      Перейти на канал
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </a>
  </div>
</TabsContent>


          </Tabs>
        </div>

        <Viewer360 images={imageUrls} autoPlay={false} speed={110} />


      {/* 360 View */}
      <Interior360View />
        {/* Contact Form */}
        <div className="mt-16" id='contact-form'>
          <ContactForm
            title={`Интересует ${car.brand} ${car.model}?`}
            subtitle="Оставьте заявку, и мы свяжемся с вами для консультации"
          />
        </div>

<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
  {[
    // 1. Фото
    <>
      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
        <Image
          src="/фары.jpg"
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover"
        />
      </div>
    </>,
    // 2. Текст
    <>
      <div className="flex flex-col justify-center p-8 bg-white rounded-xl shadow-md">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6 leading-snug">
          Фары, вдохновлённые отблесками океана
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          Двойные U-образные фары BYD Song Plus сверкают, словно отражение солнца в бескрайних океанских просторах.
          Их изящные линии и хрустальные световые полосы создают эффект глубины и сияния, наполняя взгляд автомобиля
          живой энергией. Безупречная текстура и многослойная оптика делают эти фары не просто элементом дизайна,
          а настоящим произведением искусства.
        </p>
      </div>
    </>,
    // 3. Текст
    <>
      <div className="flex flex-col justify-center p-8 bg-white rounded-xl shadow-md">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6 leading-snug">
          Откройте для себя передовые технологии
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          BYD Song Plus сочетает передовые технологии и премиальный комфорт. Электрифицированная платформа доступна
          в гибридной версии DM-i и полностью электрическом исполнении EV, чтобы вы могли выбрать идеальный формат
          движения. В салоне — современный интерьер с поворотным 15,6-дюймовым экраном и качественной отделкой.
          Безопасность подтверждена 5 звёздами C-NCAP. Панорамная крыша, двухзонный климат-контроль и интеллектуальные
          системы помощи делают каждую поездку максимально удобной. Вместительный багажник объёмом до 574 литров легко
          вместит всё необходимое для ваших путешествий.
        </p>
      </div>
    </>,
    // 4. Видео
    <>
      <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/видосBYD.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео фон.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>
    </>,
    // 5. Фото
    <>
      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
        <Image
          src="/перед.jpg"
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover"
        />
      </div>
    </>,
    // 6. Текст
    <>
      <div className="flex flex-col justify-center p-8 bg-white rounded-xl shadow-md">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6 leading-snug">
          OCEAN X FACE
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          Эволюционное сочетание футуристических линий и морских мотивов рождает узнаваемый облик BYD Song Plus.
          Этот образ словно сошёл со страниц научной фантастики, объединяя мощь океанских глубин с дерзким взглядом
          в будущее. Каждый изгиб формирует характер, в котором гармонично сочетаются энергия природы и передовые
          технологии. OCEAN X FACE — это больше, чем дизайн, это свобода стиля и бескрайние горизонты для воображения.
        </p>
      </div>
    </>,
  ].map((content, i) => (
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
        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.1)'
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      {content}
    </motion.div>
  ))}
</div>

<CarDetailCarousel />
<PromoBanner />


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

export default CarDetailPage;
