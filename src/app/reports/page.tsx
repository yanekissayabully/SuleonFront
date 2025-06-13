'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { getPlatforms, Platform } from '@/lib/api/getPlatforms';

export default function HighlightsPage() {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlatforms()
      .then(setPlatforms)
      .catch((err) => {
        console.error('Ошибка загрузки платформ:', err);
        setPlatforms([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-gray-600">Загрузка...</div>;
  }

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Посмотрите наши отрывки здесь
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Мы публикуем видео, делимся новостями и мнениями на разных платформах. Подпишитесь, чтобы быть в курсе!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {platforms.map((platform) => {
            const isVideoFile = platform.preview.endsWith('.mp4');
            const isVertical = platform.orientation === 'vertical';

            return (
              <div
                key={platform.name}
                className="border rounded-2xl shadow-md p-6 flex flex-col items-start justify-between"
              >
                <div className="flex items-center mb-4">
                  <img src={platform.icon} alt={platform.name} className="w-10 h-10 mr-3" />
                  <h2 className="text-2xl font-semibold">{platform.name}</h2>
                </div>
                <p className="text-gray-700 mb-4 text-left">{platform.description}</p>

                {platform.preview ? (
                  <div
                    className={clsx(
                      'mb-4 overflow-hidden rounded-lg',
                      isVertical ? 'aspect-[9/16] max-w-xs mx-auto' : 'aspect-video w-full'
                    )}
                  >
                    {isVideoFile ? (
                      <video
                        src={platform.preview}
                        controls
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <iframe
                        className="w-full h-full"
                        src={platform.preview}
                        title={`Preview from ${platform.name}`}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400 italic mb-4">
                    Превью недоступно
                  </div>
                )}

                <Link
                  href={platform.href}
                  target="_blank"
                  className={clsx(
                    platform.bg,
                    'text-white px-5 py-2 rounded-xl font-medium flex items-center hover:opacity-90 transition'
                  )}
                >
                  Перейти в {platform.name}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
