"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  X,
  Heart,
  Plus,
  Fuel,
  Gauge,
  Calendar,
  Users,
  Zap,
  Shield,
  Star,
  ArrowUpDown,
  ChevronDown,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import React from "react";

interface CarSpec {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  fuelType: "Gasoline" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Manual" | "Automatic" | "CVT";
  engine: string;
  power: number;
  torque: number;
  fuelConsumption: number;
  acceleration: number;
  topSpeed: number;
  seats: number;
  bodyType: string;
  drivetrain: string;
  safetyRating: number;
  features: string[];
  pros: string[];
  cons: string[];
}

const mockCars: CarSpec[] = [
  {
    id: "1",
    name: "BMW X5 M50i",
    brand: "BMW",
    model: "X5",
    year: 2024,
    price: 85000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 1250,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "4.4L V8 Twin Turbo",
    power: 523,
    torque: 750,
    fuelConsumption: 11.2,
    acceleration: 4.1,
    topSpeed: 250,
    seats: 5,
    bodyType: "SUV",
    drivetrain: "AWD",
    safetyRating: 5,
    features: [
      "Adaptive Cruise Control",
      "Lane Keeping Assist",
      "Panoramic Roof",
      "Harman Kardon Audio",
      "Wireless Charging",
    ],
    pros: [
      "Exceptional performance",
      "Luxurious interior",
      "Advanced technology",
    ],
    cons: ["High fuel consumption", "Expensive maintenance"],
  },
  {
    id: "2",
    name: "Mercedes-Benz GLE 450",
    brand: "Mercedes-Benz",
    model: "GLE",
    year: 2024,
    price: 78000,
    image:
      "https://images.pexels.com/photos/3608425/pexels-photo-3608425.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 980,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "3.0L I6 Turbo + EQBoost",
    power: 362,
    torque: 500,
    fuelConsumption: 9.8,
    acceleration: 5.6,
    topSpeed: 240,
    seats: 5,
    bodyType: "SUV",
    drivetrain: "AWD",
    safetyRating: 5,
    features: [
      "MBUX System",
      "Air Suspension",
      "360° Camera",
      "Burmester Audio",
      "Keyless Go",
      
      "Harman Kardon Audio",
      "Wireless Charging",
    ],
    pros: [
      "Smooth ride quality",
      "Premium materials",
      "Excellent infotainment",
    ],
    cons: ["Complex electronics", "High depreciation"],
  },
  {
    id: "3",
    name: "Audi Q7 55 TFSI",
    brand: "Audi",
    model: "Q7",
    year: 2024,
    price: 72000,
    image:
      "https://images.pexels.com/photos/3769584/pexels-photo-3769584.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 756,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "3.0L V6 TFSI",
    power: 335,
    torque: 500,
    fuelConsumption: 9.5,
    acceleration: 5.9,
    topSpeed: 250,
    seats: 7,
    bodyType: "SUV",
    drivetrain: "AWD",
    safetyRating: 5,
    features: [
      "Virtual Cockpit",
      "Quattro AWD",
      "Matrix LED Headlights",
      "Bang & Olufsen Audio",
      "3-Zone Climate",
    ],
    pros: [
      "Spacious interior",
      "Advanced driver assistance",
      "Refined handling",
    ],
    cons: ["Expensive options", "Turbo lag"],
  },
  {
    id: "4",
    name: "Tesla Model Y Performance",
    brand: "Tesla",
    model: "Model Y",
    year: 2024,
    price: 67000,
    image:
      "https://images.pexels.com/photos/9157880/pexels-photo-9157880.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 2100,
    fuelType: "Electric",
    transmission: "Automatic",
    engine: "Dual Motor All-Wheel Drive",
    power: 456,
    torque: 660,
    fuelConsumption: 0,
    acceleration: 3.5,
    topSpeed: 250,
    seats: 5,
    bodyType: "SUV",
    drivetrain: "AWD",
    safetyRating: 5,
    features: [
      "Autopilot",
      "Over-the-Air Updates",
      "Supercharging Network",
      '15" Touchscreen',
      "Glass Roof",
    ],
    pros: [
      "Zero emissions",
      "Lightning fast acceleration",
      "Cutting-edge technology",
    ],
    cons: ["Build quality issues", "Limited service network"],
  },
  {
    id: "5",
    name: "Lexus RX 350",
    brand: "Lexus",
    model: "RX",
    year: 2024,
    price: 58000,
    image:
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.4,
    reviews: 890,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "3.5L V6",
    power: 295,
    torque: 370,
    fuelConsumption: 8.9,
    acceleration: 7.2,
    topSpeed: 200,
    seats: 5,
    bodyType: "SUV",
    drivetrain: "AWD",
    safetyRating: 5,
    features: [
      "Lexus Safety System+",
      "Mark Levinson Audio",
      "Heated Seats",
      "Wireless CarPlay",
      "Power Liftgate",
    ],
    pros: [
      "Exceptional reliability",
      "Comfortable ride",
      "Strong resale value",
    ],
    cons: ["Dated infotainment", "CVT transmission feel"],
  },
  {
    id: "6",
    name: "Porsche Cayenne S",
    brand: "Porsche",
    model: "Cayenne",
    year: 2024,
    price: 95000,
    image:
      "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 567,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "2.9L V6 Twin Turbo",
    power: 434,
    torque: 550,
    fuelConsumption: 10.5,
    acceleration: 5.0,
    topSpeed: 265,
    seats: 5,
    bodyType: "SUV",
    drivetrain: "AWD",
    safetyRating: 5,
    features: [
      "Porsche Communication Management",
      "Air Suspension",
      "Sport Chrono Package",
      "Bose Audio",
      "Panoramic Roof",
    ],
    pros: [
      "Outstanding handling",
      "Premium build quality",
      "Sporty performance",
    ],
    cons: ["Expensive options", "Firm ride quality"],
  },
];

export default function CarComparison() {
  const [selectedCars, setSelectedCars] = useState<string[]>(["1", "2"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [fuelFilter, setFuelFilter] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [sortBy, setSortBy] = useState("price");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const filteredCars = useMemo(() => {
    return mockCars
      .filter((car) => {
        const matchesSearch =
          car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = brandFilter === "all" || car.brand === brandFilter;
        const matchesFuel = fuelFilter === "all" || car.fuelType === fuelFilter;
        const matchesPrice =
          car.price >= priceRange.min && car.price <= priceRange.max;

        return matchesSearch && matchesBrand && matchesFuel && matchesPrice;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price":
            return a.price - b.price;
          case "rating":
            return b.rating - a.rating;
          case "power":
            return b.power - a.power;
          case "name":
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
  }, [searchTerm, brandFilter, fuelFilter, priceRange, sortBy]);

  const selectedCarData = selectedCars
    .map((id) => mockCars.find((car) => car.id === id))
    .filter(Boolean);

  const handleCarSelect = (carId: string) => {
    if (selectedCars.includes(carId)) {
      setSelectedCars(selectedCars.filter((id) => id !== carId));
    } else if (selectedCars.length < 4) {
      setSelectedCars([...selectedCars, carId]);
    }
  };

  const toggleFavorite = (carId: string) => {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentCarIndex < selectedCarData.length - 1) {
      setCurrentCarIndex(currentCarIndex + 1);
    }
    if (isRightSwipe && currentCarIndex > 0) {
      setCurrentCarIndex(currentCarIndex - 1);
    }
  };

  const nextCar = () => {
    if (currentCarIndex < selectedCarData.length - 1) {
      setCurrentCarIndex(currentCarIndex + 1);
    }
  };

  const prevCar = () => {
    if (currentCarIndex > 0) {
      setCurrentCarIndex(currentCarIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
            Сравнение автомобилей
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Сравните характеристики, цены и особенности автомобилей
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center gap-2 h-10 border-gray-300 hover:bg-gray-50"
          >
            <Filter className="h-4 w-4" />
            Фильтры
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>

        {/* Filters */}
        <div className={`mb-4 sm:mb-6 ${showFilters || "hidden lg:block"}`}>
          <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-3 sm:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Поиск
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Поиск автомобилей..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-9 sm:h-10 text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Марка
                </label>
                <Select value={brandFilter} onValueChange={setBrandFilter}>
                  <SelectTrigger className="h-9 sm:h-10 text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Все марки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все марки</SelectItem>
                    <SelectItem value="BMW">BMW</SelectItem>
                    <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
                    <SelectItem value="Audi">Audi</SelectItem>
                    <SelectItem value="Tesla">Tesla</SelectItem>
                    <SelectItem value="Lexus">Lexus</SelectItem>
                    <SelectItem value="Porsche">Porsche</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Тип топлива
                </label>
                <Select value={fuelFilter} onValueChange={setFuelFilter}>
                  <SelectTrigger className="h-9 sm:h-10 text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Все типы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="Gasoline">Бензин</SelectItem>
                    <SelectItem value="Electric">Электро</SelectItem>
                    <SelectItem value="Hybrid">Гибрид</SelectItem>
                    <SelectItem value="Diesel">Дизель</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Сортировка
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-9 sm:h-10 text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">По цене</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="power">По мощности</SelectItem>
                    <SelectItem value="name">По названию</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Car Selection Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-3 sm:p-4 lg:sticky lg:top-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  Доступные автомобили
                </h3>
                <span className="text-xs sm:text-sm text-gray-500">
                  Выберите до 4
                </span>
              </div>
              <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 lg:max-h-screen overflow-y-auto">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className={`border rounded-lg p-2 sm:p-3 cursor-pointer transition-all hover:shadow-sm ${
                      selectedCars.includes(car.id)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => handleCarSelect(car.id)}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-12 sm:w-16 h-9 sm:h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-xs sm:text-sm text-gray-900 truncate">
                          {car.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                          ${car.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">
                            {car.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(car.id);
                          }}
                          className="p-1 h-auto hover:bg-gray-100"
                        >
                          <Heart
                            className={`h-3 sm:h-4 w-3 sm:w-4 ${
                              favorites.includes(car.id)
                                ? "fill-red-500 text-red-500"
                                : "text-gray-400"
                            }`}
                          />
                        </Button>
                        <Checkbox
                          checked={selectedCars.includes(car.id)}
                          onCheckedChange={() => handleCarSelect(car.id)}
                          className="h-4 w-4"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison Content */}
          <div className="flex-1">
            {selectedCarData.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-8 sm:p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Plus className="h-12 sm:h-16 w-12 sm:w-16 mx-auto mb-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                  Автомобили не выбраны
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Выберите автомобили из списка для сравнения
                </p>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {/* Desktop Car Headers */}
<div className="hidden lg:block mb-6">
  <div
    className="grid gap-4"
    style={{
      gridTemplateColumns: `250px repeat(${selectedCarData.length}, 1fr)`,
    }}
  >
    {/* Пустая первая ячейка под "Параметр" */}
    <div></div>

    {selectedCarData.map((car) =>
      car ? (
        <div
          key={car.id}
          className="bg-white border border-gray-300 rounded-lg shadow-sm flex flex-col relative overflow-hidden"
        >
          {/* Удалить */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setSelectedCars(selectedCars.filter((id) => id !== car.id))
            }
            className="absolute top-2 right-2 p-1 h-auto text-gray-400 hover:text-gray-600 hover:bg-gray-100 z-10"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Фото */}
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-32 object-cover rounded-t-lg"
          />

          {/* Контент */}
          <div className="p-3">
            <h3 className="font-bold text-base mb-1 text-gray-900 text-center">
              {car.name}
            </h3>

            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium ml-1">{car.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({car.reviews})</span>
            </div>

            <p className="text-xl font-bold text-blue-600 text-center mb-2">
              ${car.price.toLocaleString()}
            </p>

            <div className="flex justify-center flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="text-xs bg-gray-100 text-gray-700 border-gray-300"
              >
                {car.fuelType === "Gasoline"
                  ? "Бензин"
                  : car.fuelType === "Electric"
                  ? "Электро"
                  : car.fuelType === "Hybrid"
                  ? "Гибрид"
                  : "Дизель"}
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs bg-gray-100 text-gray-700 border-gray-300"
              >
                {car.year}
              </Badge>
            </div>
          </div>
        </div>
      ) : null
    )}
  </div>
</div>


                

                {/* Specifications Table */}
                <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
                  <div className="p-3 sm:p-4 border-b border-gray-200">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 flex items-center gap-2">
                      <Gauge className="h-4 sm:h-5 w-4 sm:w-5" />
                      Технические характеристики
                    </h3>
                  </div>
                  <div className="p-3 sm:p-4">
                    {/* Desktop Table */}
<div className="hidden lg:block">
  <div
    className="grid border border-gray-300 rounded-lg overflow-hidden"
    style={{
      gridTemplateColumns: `250px repeat(${selectedCarData.length}, 1fr)`,
    }}
  >
    {/* Header Row */}
    <div className="bg-white p-3 font-semibold text-sm text-gray-800 border-b border-gray-300">
      Параметр
    </div>
    {selectedCarData.map((car) => (
      <div
        key={car?.id}
        className="bg-white p-3 font-semibold text-sm text-center text-gray-800 border-b border-gray-300"
      >
        {car?.name}
      </div>
    ))}

    {/* Характеристики */}
    {[
      { label: "Двигатель", key: "engine", icon: Zap },
      { label: "Мощность (л.с.)", key: "power", icon: Gauge },
      { label: "Крутящий момент (Нм)", key: "torque", icon: ArrowUpDown },
      { label: "Разгон 0-100 км/ч (с)", key: "acceleration", icon: Zap },
      { label: "Макс. скорость (км/ч)", key: "topSpeed", icon: Gauge },
      { label: "Расход (л/100км)", key: "fuelConsumption", icon: Fuel },
      { label: "Коробка передач", key: "transmission", icon: Gauge },
      { label: "Привод", key: "drivetrain", icon: Gauge },
      { label: "Мест", key: "seats", icon: Users },
      { label: "Тип кузова", key: "bodyType", icon: Gauge },
      { label: "Безопасность", key: "safetyRating", icon: Shield },
    ].map((spec, index) => (
      <React.Fragment key={spec.key}>
        <div
          className={`py-3 px-4 flex items-center gap-2 text-sm font-medium text-gray-700 ${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          } border-b border-gray-200`}
        >
          <spec.icon className="h-4 w-4 text-gray-500" />
          {spec.label}
        </div>
        {selectedCarData.map((car) => {
          const val = car?.[spec.key as keyof CarSpec];
          let display = val;

          if (spec.key === "safetyRating") display = `${val}/5 ⭐`;
          if (spec.key === "transmission") {
            display =
              val === "Automatic"
                ? "Автомат"
                : val === "Manual"
                ? "Механика"
                : "CVT";
          }
          if (spec.key === "drivetrain") {
            display =
              val === "AWD"
                ? "Полный"
                : val === "FWD"
                ? "Передний"
                : "Задний";
          }

          return (
            <div
              key={car?.id + spec.key}
              className={`py-3 px-4 text-sm text-center text-gray-900 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } border-b border-gray-200`}
            >
              {display ?? "–"}
            </div>
          );
        })}
      </React.Fragment>
    ))}

    {/* Особенности */}
    {Array.from(new Set(selectedCarData.flatMap((c) => c?.features || []))).map((feature, i) => (
      <React.Fragment key={feature}>
        <div className="py-3 px-4 text-sm font-medium text-gray-700 bg-blue-50 border-b border-blue-100">
          {feature}
        </div>
        {selectedCarData.map((car) => {
          const hasFeature = car?.features.includes(feature);
          return (
            <div
              key={car?.id + feature}
              className="py-3 px-4 text-sm text-center border-b border-blue-100"
            >
              <span className={`font-semibold ${hasFeature ? "text-green-600" : "text-gray-400"}`}>
                {hasFeature ? "✓" : "–"}
              </span>
            </div>
          );
        })}
      </React.Fragment>
    ))}
  </div>
</div>


                    {/* Mobile Horizontal Comparison Table (Specs + Features) */}
<div className="lg:hidden">
  <div className="overflow-x-auto">
    <div
      className="grid"
      style={{
        gridTemplateColumns: `180px repeat(${selectedCarData.length}, minmax(200px, 1fr))`,
        minWidth: `${180 + selectedCarData.length * 220}px`,
      }}
    >
      {/* Header Row */}
      <div className="bg-white p-2 font-semibold text-sm text-gray-800 border-b border-gray-300">
        Параметр
      </div>
      {selectedCarData.map((car) => (
        <div
          key={car?.id}
          className="bg-white p-2 font-semibold text-sm text-center text-gray-800 border-b border-gray-300"
        >
          {car?.name}
        </div>
      ))}

      {/* Technical Specs */}
      {[
        { label: "Двигатель", key: "engine", icon: Zap },
        { label: "Мощность (л.с.)", key: "power", icon: Gauge },
        { label: "Крутящий момент (Нм)", key: "torque", icon: ArrowUpDown },
        { label: "Разгон 0-100 км/ч (с)", key: "acceleration", icon: Zap },
        { label: "Макс. скорость (км/ч)", key: "topSpeed", icon: Gauge },
        { label: "Расход (л/100км)", key: "fuelConsumption", icon: Fuel },
        { label: "Коробка передач", key: "transmission", icon: Gauge },
        { label: "Привод", key: "drivetrain", icon: Gauge },
        { label: "Мест", key: "seats", icon: Users },
        { label: "Тип кузова", key: "bodyType", icon: Gauge },
        { label: "Безопасность", key: "safetyRating", icon: Shield },
      ].map((spec, i) => (
        <React.Fragment key={spec.key}>
          <div className="py-2 px-3 flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 border-b border-gray-200">
            <spec.icon className="h-4 w-4 text-gray-500" />
            {spec.label}
          </div>
          {selectedCarData.map((car) => {
            const val = car?.[spec.key as keyof CarSpec];
            let display = val;

            if (spec.key === "safetyRating") display = `${val}/5 ⭐`;
            if (spec.key === "transmission") {
              display =
                val === "Automatic"
                  ? "Автомат"
                  : val === "Manual"
                  ? "Механика"
                  : "CVT";
            }
            if (spec.key === "drivetrain") {
              display =
                val === "AWD"
                  ? "Полный"
                  : val === "FWD"
                  ? "Передний"
                  : "Задний";
            }

            return (
              <div
                key={car?.id + spec.key}
                className={`py-2 px-3 text-sm text-center text-gray-900 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b border-gray-200`}
              >
                {display ?? "–"}
              </div>
            );
          })}
        </React.Fragment>
      ))}

      {/* Features */}
      {Array.from(new Set(selectedCarData.flatMap((c) => c?.features || []))).map((feature, i) => (
        <React.Fragment key={feature}>
          <div className="py-2 px-3 text-sm font-medium text-gray-700 bg-blue-50 border-b border-blue-100">
            {feature}
          </div>
          {selectedCarData.map((car) => {
            const hasFeature = car?.features.includes(feature);
            return (
              <div
                key={car?.id + feature}
                className="py-2 px-3 text-sm text-center border-b border-blue-100"
              >
                <span className={`font-semibold ${hasFeature ? "text-green-600" : "text-gray-400"}`}>
                  {hasFeature ? "✓" : "–"}
                </span>
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  </div>
</div>


                    


                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
