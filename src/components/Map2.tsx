'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';




// .

const location: {
  name: string;
  address: string;
  coords: [number, number];
  phone: string;
  hours: string;
  description: string;
} = {
  name: '​Магазин автотоваров и запчастей для электромобилей',
  address: 'ул. Прокофьева, 244',
  coords: [43.236010, 76.876759],
  phone: '+7 (700) 730 07 08',
  hours: 'Пн-Вс 10:00-19:00',
  description: 'Официальный ​магазин автотоваров и запчастей для электромобилей - Suleon Parts в Алматы',
};

interface MapProps {
  className?: string;
  height?: string;
}

const LocationMap2 = ({ className = '', height = '400px' }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadYandexMap = () => {
      if (typeof window !== 'undefined' && window.ymaps && mapRef.current) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map(mapRef.current!, {
            center: location.coords,
            zoom: 15,
            controls: ['zoomControl', 'geolocationControl'],
          });

          const placemark = new window.ymaps.Placemark(location.coords, {
            balloonContent: `<strong>${location.name}</strong><br>${location.address}`,
          });

          map.geoObjects.add(placemark);
        });
      }
    };

    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.type = 'text/javascript';
      script.onload = loadYandexMap;
      document.head.appendChild(script);
    } else {
      loadYandexMap();
    }
  }, []);

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наш магазин запчастей</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Приобретайте лучшие детали и запчасти у нас!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <MapPin className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700">{location.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-gray-500 flex-shrink-0" />
              <a
                href={`tel:${location.phone.replace(/\s/g, '')}`}
                className="text-lg text-blue-600 hover:text-blue-700 transition-colors"
              >
                {location.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-gray-500 flex-shrink-0" />
              <span className="text-lg text-gray-700">{location.hours}</span>
            </div>
            {location.description && (
              <p className="text-sm text-gray-500 mt-3">{location.description}</p>
            )}
          </div>

          <div>
            <div
              ref={mapRef}
              style={{ width: '100%', height }}
              className="rounded-xl overflow-hidden shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap2;
