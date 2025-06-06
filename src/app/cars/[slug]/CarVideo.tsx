"use client";
import { useState } from "react"
import { Car } from "@/data/cars"
import { Play, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CarVideo({ car }: { car: Car }) {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (<>{car.video ? (
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
                            <Play
                              className="w-8 h-8 text-blue-600 ml-1"
                              fill="currentColor"
                            />
                          </motion.div>
                        </div>

                        {/* подписи на видео */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black bg-opacity-50 rounded-lg p-4 text-white">
                            <h3 className="font-semibold mb-1">
                              Смотреть видео
                            </h3>
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
              )}</>);
}