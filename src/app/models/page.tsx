'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import CarCard from '@/components/CarCard';
import { cars, Car } from '@/data/cars';

const ModelsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // Get unique brands
  const brands = Array.from(new Set(cars.map(car => car.brand))).sort();

  // Filter cars
  const filteredCars = cars.filter(car => {
    const matchesSearch = car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;

    let matchesPrice = true;
    if (priceRange === 'under-20k') {
      matchesPrice = car.price.usd < 20000;
    } else if (priceRange === '20k-30k') {
      matchesPrice = car.price.usd >= 20000 && car.price.usd <= 30000;
    } else if (priceRange === 'over-30k') {
      matchesPrice = car.price.usd > 30000;
    }

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'electric', label: 'Электромобили' },
    { value: 'hybrid', label: 'Гибридные' },
    { value: 'commercial', label: 'Коммерческие' }
  ];

  const priceRanges = [
    { value: 'all', label: 'Любая цена' },
    { value: 'under-20k', label: 'До $20,000' },
    { value: '20k-30k', label: '$20,000 - $30,000' },
    { value: 'over-30k', label: 'Свыше $30,000' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Каталог электромобилей
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите свой идеальный электромобиль из нашего обширного каталога
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Поиск
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Марка или модель..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Категория
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Бренд
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Все бренды</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Цена
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory !== 'all' || selectedBrand !== 'all' || priceRange !== 'all') && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedBrand('all');
                  setPriceRange('all');
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Найдено <span className="font-semibold">{filteredCars.length}</span> автомобилей
            </p>

            {/* Active filters */}
            <div className="flex items-center gap-2">
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {categories.find(c => c.value === selectedCategory)?.label}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-1 hover:text-blue-900"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedBrand !== 'all' && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {selectedBrand}
                  <button
                    onClick={() => setSelectedBrand('all')}
                    className="ml-1 hover:text-blue-900"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </div>
        </motion.div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ничего не найдено
              </h3>
              <p className="text-gray-600 mb-6">
                Попробуйте изменить параметры поиска или сбросить фильтры
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedBrand('all');
                  setPriceRange('all');
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ModelsPage;
