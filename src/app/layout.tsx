import type { Metadata, Viewport } from 'next'; // 👈 Добавь Viewport сюда
import { Inter } from 'next/font/google';
import './globals.css';
import ClientBody from './ClientBody';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// ✅ ОТДЕЛЬНЫЙ viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'LuxAuto - Электромобили из Китая | Официальный импортер',
  description: 'Каталог новых электрокаров из Китая. Китайские электромобили c доставкой в Украину. Тест драйв. В наличии и под заказ от импортера LuxAuto.',
  keywords: 'электромобили, электрокары, китайские автомобили, BYD, ZEEKR, Xiaomi, LuxAuto, электротранспорт',
  openGraph: {
    title: 'LuxAuto - Электромобили из Китая',
    description: 'Официальный импортер электромобилей из Китая. Более 9 лет опыта, 75 моделей в наличии.',
    url: 'https://LuxAuto-dealership.netlify.app',
    siteName: 'LuxAuto',
    images: [
      {
        url: 'https://ext.same-assets.com/2335176788/3621060504.jpeg',
        width: 1200,
        height: 630,
        alt: 'LuxAuto - Электромобили из Китая',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuxAuto - Электромобили из Китая',
    description: 'Официальный импортер электромобилей из Китая. Более 9 лет опыта, 75 моделей в наличии.',
    images: ['https://ext.same-assets.com/2335176788/3621060504.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
