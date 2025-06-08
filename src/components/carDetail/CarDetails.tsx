// CarDetails.tsx
import { Phone } from "lucide-react";
import QuickActions from "@/app/cars/[slug]/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CarDetailsProps {
  car: any;
  formatPrice: (price: number) => string;
  formatPriceUAH: (price: number) => string;
}

const CarDetails = ({ car, formatPrice, formatPriceUAH }: CarDetailsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Badge className="bg-blue-600 text-white">
            {car.category === "electric"
              ? "Электромобиль"
              : car.category === "hybrid"
              ? "Гибрид"
              : "Коммерческий"}
          </Badge>
          <Badge variant={car.available ? "default" : "secondary"}>
            {car.available ? "В наличии" : "Под заказ"}
          </Badge>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {car.brand} {car.model}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          {car.description}
        </p>
      </div>

      {/* Price */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-3xl font-bold text-gray-900">
              {formatPrice(car.price.usd)}
            </div>
            <div className="text-lg text-gray-600">
              {formatPriceUAH(car.price.tg)}
            </div>
          </div>
        </div>

<div className="flex flex-wrap gap-2">
  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1 min-w-[120px]">
    <Phone className="w-4 h-4 mr-2" />
    Позвонить
  </Button>
  <div className="flex gap-2 flex-1">
    <Button variant="outline" size="sm" className="flex-1">
      Тест-драйв
    </Button>
    <Button variant="outline" size="sm" className="flex-1">
      Трейд-Ин
    </Button>
  </div>
</div>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Color Options */}
      {car.colors && car.colors.length >= 1 && (
        <div>
          <h3 className="font-semibold mb-3">Возможные цвета:</h3>
          <div className="flex gap-3">
            {car.colors.map((color: any) => (
              <div key={color.name} className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 overflow-hidden mb-2">
                  <Image
                    src={color.image}
                    alt={color.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-gray-600">{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
