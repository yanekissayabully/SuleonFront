'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Car } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CarCardProps {
  car: Car;
  className?: string;
}

const CarCard = ({ car, className = '' }: CarCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageSwitch = (index: number) => {
    setCurrentImageIndex(index);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

const formatPriceTenge = (price: number) => {
  return `${new Intl.NumberFormat('ru-RU').format(price)} ₸`;
};


  return (
    <motion.div
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link href={`/cars/${car.slug}`}>
          <Image
            src={car.gallery_images.gallery[currentImageIndex] || car.gallery_images.main}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Color swatches */}
        {car.colors && car.colors.length > 1 && (
          <div className="absolute bottom-4 left-4 flex gap-2">
            {car.colors.slice(0, 3).map((color, index) => (
              <button
                key={`${color.name}-${index}`}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  currentImageIndex === index
                    ? 'border-white scale-110'
                    : 'border-white/50'
                }`}
                onClick={() => handleImageSwitch(index)}
                title={color.name}
              >
                <Image
                  src={color.image}
                  alt={color.name}
                  width={24}
                  height={24}
                  className="w-full h-full rounded-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <Badge
            variant={car.category === 'electric' ? 'default' : 'secondary'}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            {car.category === 'electric' ? 'Электро' :
             car.category === 'hybrid' ? 'Гибрид' : 'Коммерческий'}
          </Badge>
        </div>

        {/* Availability indicator */}
        <div className="absolute top-4 left-4">
          <Badge
            variant={car.available ? 'default' : 'secondary'}
            className={car.available ? 'bg-green-600 text-white' : 'bg-gray-500 text-white'}
          >
            {car.available ? 'В наличии' : 'Под заказ'}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <Link href={`/cars/${car.slug}`}>
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-1">
              {car.brand} {car.model}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm line-clamp-2">
            {car.description}
          </p>
        </div>

        {/* Key specs */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Запас хода:</span>
            <span className="font-medium">{car.specs.range}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Мощность:</span>
            <span className="font-medium">{car.specs.power}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Привод:</span>
            <span className="font-medium">{car.specs.driveType}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Места:</span>
            <span className="font-medium">{car.specs.seating}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(car.price.usd)}
            </div>
            <div className="text-sm text-gray-500">
              {formatPriceTenge(car.price.tg)}
            </div>
          </div>
          {/* <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">от 0,01%</div>
            <div className="text-sm font-medium text-blue-600">в кредит</div>
          </div> */}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button asChild className="flex-1" size="sm">
            <Link href={`/cars/${car.slug}`}>
              Подробнее
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Тест-драйв
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
