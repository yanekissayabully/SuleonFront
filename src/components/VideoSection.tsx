"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoSectionProps {
  title: string;
  description?: string;
  videoId: string; // YouTube video ID
  thumbnailUrl?: string;
  className?: string;
}

const VideoSection = ({
  title,
  description,
  videoId,
  thumbnailUrl,
  className = "",
}: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnail = thumbnailUrl || defaultThumbnail;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="relative">
            {!isPlaying ? (
              <motion.div
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={handlePlay}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />

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
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />

                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                  onClick={handleClose}
                >
                  <X className="w-4 h-4" />
                </Button>
              </motion.div>
            )}
          </div>

          {/* Additional info */}
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
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
