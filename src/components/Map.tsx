// 'use client'

// import dynamic from 'next/dynamic';
// import { useState, useEffect } from 'react';
// import { useMap } from 'react-leaflet';
// import { MapPin, Phone, Clock } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';

// // Dynamically import Leaflet components
// const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false });
// const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false });
// const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false });
// const Popup = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false });

// interface Location {
//   id: string;
//   name: string;
//   address: string;
//   coords: [number, number];
//   phone: string;
//   hours: string;
//   description?: string;
// }

// const locations: Location[] = [/* твои офисы */];

// function ChangeView({ center }: { center: [number, number] }) {
//   const map = useMap();
//   useEffect(() => {
//     map.setView(center);
//   }, [center, map]);
//   return null;
// }

// interface MapProps {
//   className?: string;
//   height?: string;
// }

// const LocationMap = ({ className = '', height = '400px' }: MapProps) => {
//   const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

//   const handleLocationSelect = (location: Location) => {
//     setSelectedLocation(location);
//   };

//   return (
//     <section className={`py-16 bg-gray-50 ${className}`}>
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши офисы</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Приглашаем вас посетить один из наших офисов для личной консультации и тест-драйва
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-1 space-y-4">
//             {locations.map((location) => (
//               <motion.div
//                 key={location.id}
//                 className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
//                   selectedLocation.id === location.id
//                     ? 'border-blue-500 bg-blue-50'
//                     : 'border-gray-200 bg-white hover:border-gray-300'
//                 }`}
//                 onClick={() => handleLocationSelect(location)}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <h3 className="font-semibold text-gray-900 mb-3">{location.name}</h3>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex items-start gap-2">
//                     <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
//                     <span className="text-gray-600">{location.address}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
//                     <a
//                       href={`tel:${location.phone.replace(/\s/g, '')}`}
//                       className="text-blue-600 hover:text-blue-700 transition-colors"
//                     >
//                       {location.phone}
//                     </a>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
//                     <span className="text-gray-600">{location.hours}</span>
//                   </div>
//                 </div>
//                 {location.description && (
//                   <p className="text-xs text-gray-500 mt-3">{location.description}</p>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           <div className="lg:col-span-2">
//             <div className="rounded-xl overflow-hidden shadow-lg" style={{ height }}>
//               {/* 👇 Проверка на window и показ карты только на клиенте */}
//               {typeof window !== 'undefined' && selectedLocation &&(
//                 <MapContainer
//                   center={selectedLocation.coords}
//                   zoom={13}
//                   style={{ height: '100%', width: '100%' }}
//                   scrollWheelZoom={false}
//                   attributionControl={false}
//                 >
//                   <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                   />
//                   <ChangeView center={selectedLocation.coords} />
//                   {locations.map((location) => (
//                     <Marker key={location.id} position={location.coords}>
//                       <Popup>
//                         <strong>{location.name}</strong>
//                         <br />
//                         {location.address}
//                       </Popup>
//                     </Marker>
//                   ))}
//                 </MapContainer>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LocationMap;



'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

// 👇 Чтобы TS не ругался на window.ymaps
declare global {
  interface Window {
    ymaps: any;
  }
}

const location = {
  name: 'Офис Suleon Auto',
  address: 'ул. Шахмета Хусаинова, 22',
  coords: [43.238011, 76.888937],
  phone: '+7 (775) 504 91 24',
  hours: 'Пн-Вс 10:00-20:00',
  description: 'Официальный офис Suleon Auto в Алматы',
};

interface MapProps {
  className?: string;
  height?: string;
}

const LocationMap = ({ className = '', height = '400px' }: MapProps) => {
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наш офис</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Заезжайте к нам на тест-драйв и консультацию!
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

export default LocationMap;
