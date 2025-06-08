import Image from 'next/image';

const carTrims = [
  {
    title: "520KM Luxury",
    priceUsd: 22800,
    priceTg: 945060,
    features: [
      "Базовая комплектация",
      "Ёмкость батареи — 71,8 кВт·ч",
      "Запас хода (CLTC) — 520 км",
      "ABS, EBD/CBC, EBA/BA, TCS/ASR, ESP/DSC",
      "Активная система оповещения безопасности",
      "Активные тормоза",
      "Система удержания полосы движения",
    ],
  },
  {
    title: "520KM Premium",
    priceUsd: 24100,
    priceTg: 998945,
    features: [
      "Дополнительные опции к комплектации 520KM Luxury",
      "Руль с подогревом",
      "Беспроводная зарядка мобильного телефона",
      "Электропривод сидений первого ряда с подогревом и вентиляцией",
      "15,6” мультимедиа",
      "Многоцветная внутренняя подсветка салона",
    ],
  },
  {
    title: "605KM Flagship",
    priceUsd: 24800,
    priceTg: 1027960,
    features: [
      "Дополнительные опции к комплектации 520KM Premium",
      "Ёмкость батареи — 87,04 кВт·ч",
      "Запас хода (CLTC) — 605 км",
    ],
  },
];

export default function CarTrimList() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Для предзаказа доступны 3 комплектации</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {carTrims.map((trim, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-sm flex flex-col">
            <Image
              src="https://ncars.com.ua/images/ZGF0YS9Nb2RlbG5peSByeWFkL0JZRC9CWUQgU29uZyBQbHVzL9Cz0LDQu9C10YDQtdGPL9Ct0LrRgdGC0LXRgNGM0LXRgC80IHBhbGUgc21va3kvMS5qcGd8MTIwMHw4MDB8YQ==.webp"
              alt="BYD Song Plus"
              width={300}
              height={200}
              className="object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{trim.title}</h3>
            <div className="text-lg font-bold text-blue-700 mb-1">
              ${trim.priceUsd.toLocaleString()}
            </div>
            <div className="text-gray-500 mb-4">
              {trim.priceTg.toLocaleString()} ₸
            </div>
            <ul className="flex-1 mb-6 space-y-2 text-sm">
              {trim.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-2">Оставить заявку</button>
          </div>
        ))}
      </div>
    </section>
  );
}
