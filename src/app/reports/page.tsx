'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function HighlightsPage() {
  const platforms = [
    {
      name: 'YouTube',
      href: 'https://youtube.com/@suleon_auto?si=4sAvG9STrLeTKvOL',
      icon: '/icons/youtubeLogo.svg',
      bg: 'bg-red-600',
      description:
        'Обзоры, интервью, тест-драйвы и разбор технологий — каждую неделю новое видео.',
      preview: 'https://www.youtube.com/embed/gJ6w643Etv4',
      orientation: 'horizontal',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/suleonauto',
      icon: '/icons/logoTG.svg',
      bg: 'bg-blue-500',
      description:
        'Самые свежие новости, короткие видео и прямое общение с нашей командой.',
      preview: '/previews/telegram.mp4',
      orientation: 'horizontal',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/suleon.auto/reels/',
      icon: '/icons/instaLogo.svg',
      bg: 'bg-pink-500',
      description:
        'Фото с мероприятий, закулисье, сторис и много визуального контента.',
      preview: '/previews/instagram.mp4',
      orientation: 'vertical',
    },
  ];

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
