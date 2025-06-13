"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Award,
  Users,
  Zap,
  Battery,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CarCard from "@/components/CarCard";
import BlogCard from "@/components/BlogCard";
import VideoSection from "@/components/VideoSection";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/Map";
import { getFeaturedCars } from "@/data/cars";
import { getFeaturedBlogPosts } from "@/data/blog";
import LatestThreeBlogs from "@/components/LatestBlogSection";
import BlogSection from "@/components/BlogSection";

const HomePage = () => {
  const featuredCars = getFeaturedCars(6);
  const blogPosts = getFeaturedBlogPosts(3);

  const stats = [
    {
      number: "9",
      label: "лет опыта",
      description: "успешной работы на рынке электромобилей",
    },
    {
      number: "1000+",
      label: "довольных клиентов",
      description: "выбрали наши электромобили",
    },
    { number: "75", label: "моделей", description: "в наличии и под заказ" },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Официальный импортер",
      description:
        "Мы работаем напрямую с производителями, что гарантирует качество и подлинность автомобилей",
    },
    {
      icon: Award,
      title: "Гарантия и сервис",
      description:
        "Полная гарантия на все автомобили и профессиональное сервисное обслуживание",
    },
    {
      icon: Users,
      title: "Опытная команда",
      description:
        "Наши специалисты имеют многолетний опыт работы с электромобилями",
    },
    {
      icon: Zap,
      title: "Быстрая доставка",
      description:
        "Оперативная доставка автомобилей из Китая в кратчайшие сроки",
    },
    {
      icon: Battery,
      title: "Экологичность",
      description:
        "Все наши автомобили экологически чистые и энергоэффективные",
    },
    {
      icon: Wrench,
      title: "Полный сервис",
      description:
        "От выбора до обслуживания - мы сопровождаем вас на всех этапах",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* Background Image */}
{/* Background Video */}
<div className="absolute inset-0 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover opacity-30"
  >
    <source src="/li9.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
</div>


        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Suleon Auto
                <span className="block text-3xl md:text-4xl font-normal text-blue-400 mt-2">
                  Будущее уже здесь
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Более 9 лет мы импортируем лучшие электромобили из Китая.
                Доставка, гарантия и сервис в Казахстане.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-full"
                >
                  <Link href="/models">
                    Посмотреть модели
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-black border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 rounded-full"
                >
                  Тест-драйв
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="text-center md:text-left"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сейчас в тренде
            </h2>
            {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Откройте для себя наш впечатляющий выбор электромобилей из Китая
            </p> */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full">
              <Link href="/models">
                Посмотреть все модели
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection
        title="Узнайте больше о Suleon Auto"
        description="Посмотрите видео о нашей работе и преимуществах электромобилей"
        videoId="ATQa1hLwaMw"
      />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему нас выбирают ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем не просто автомобили, а комплексное решение для
              перехода на электротранспорт
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наш блог
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полезные статьи об электромобилях, технологиях и новостях
              индустрии
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Читать все статьи
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      <BlogSection />

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Готовы к переходу на электромобиль?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Наши эксперты помогут вам выбрать идеальный электромобиль,
                организуют тест-драйв и проконсультируют по всем вопросам.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700">Бесплатная консультация</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700">
                    Тест-драйв в удобное время
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700">Помощь с оформлением</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <LocationMap />
    </div>
  );
};

export default HomePage;
