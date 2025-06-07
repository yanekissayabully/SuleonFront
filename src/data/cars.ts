export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: {
    usd: number;
    tg: number;
  };
  gallery_images: {
    main: string;
    gallery: string[];
  };
  description: string;
  specs: {
    engine: string;
    battery: string;
    range: string;
    power: string;
    acceleration: string;
    maxSpeed: string;
    charging: string;
    driveType: string;
    seating: number;
    bodyType: string;
  };
  colors: {
    name: string;
    image: string;
  }[];
  video?: string;
  features: string[];
  available: boolean;
  category: "electric" | "hybrid" | "commercial";
  content?: { type: string; media: string; title: string; text: string }[]; // Array of content objects with type, media, title, and text (optional)
  slides?: {
    image: string;
    title: string;
    description: string;
  }[]; // Array of slides with image, title, and description (optional)
  imageUrls?: string[]; // Array of image URLs (optional)
  view?: {
    image: string;
    link: string;
  }; // Object with image and link for 360 view (optional)
  last_image?: string; // Last image URL (optional)
}

export const cars: Car[] = [
  {
    id: "1",
    slug: "byd-song-plus",
    brand: "BYD",
    model: "Song Plus",
    year: 2024,
    price: {
      usd: 23200,
      tg: 11872000,
    },
    gallery_images: {
      main: "https://ext.same-assets.com/2335176788/2497154989.webp",
      gallery: [
        "https://ext.same-assets.com/2335176788/2497154989.webp",
        "https://ext.same-assets.com/2335176788/675530518.webp",
        "https://ext.same-assets.com/3124690321/2211639939.webp",
        "https://ext.same-assets.com/3124690321/491776432.webp",
        "https://ext.same-assets.com/3124690321/1494461349.webp",
        "https://ext.same-assets.com/3124690321/1225119392.webp",
      ],
    },
    description:
      "Электрический кроссовер, который сочетает в себе передовые технологии и комфорт. BYD Song Plus представляет новое поколение электромобилей с впечатляющим запасом хода.",
    specs: {
      engine: "Электрический",
      battery: "71.7 кВт·ч",
      range: "505 км",
      power: "204 л.с.",
      acceleration: "8.5 сек (0-100 км/ч)",
      maxSpeed: "175 км/ч",
      charging: "DC 80 кВт",
      driveType: "Передний привод",
      seating: 5,
      bodyType: "Кроссовер",
    },
    colors: [
      {
        name: "Montenegro Black",
        image: "https://ext.same-assets.com/3124690321/2758742394.webp",
      },
      {
        name: "Snow White",
        image: "https://ext.same-assets.com/3124690321/411842236.webp",
      },
      {
        name: "Time Grey",
        image: "https://ext.same-assets.com/3124690321/3811582310.webp",
      },
    ],
    video: "yZs9hw8IjsM?si=yyoXgS0NxO3JMEsiMyGLw9iH43o?si=ZYbac9p-8npYxhXu",
    features: [
      "Электрифицированная платформа — гибридная (DM-i) и полностью электрическая (EV) версии.",
      'Современный интерьер — большой экран 15,6" с поворотом, премиальные материалы отделки.',
      "Высокий уровень безопасности — 6 подушек, электронные ассистенты, 5 звёзд C-NCAP.",
      "Технологии комфорта — панорамная крыша, климат-контроль на 2 зоны, системы помощи при парковке.",
      "Большой багажник — до 574 л объём багажного отделения.",
      "Быстрая зарядка — до 80% за 30 минут на быстрой станции (EV).",
      "Мощный двигатель — суммарная мощность гибрида до 197 л.с., электроверсия — 218 л.с..",
      "Большой запас хода — до 1100 км на гибриде (WLTC) и до 520 км на электроверсии (CLTC).",
    ],
    available: true,
    category: "electric",
    content: [
      {
        type: "image",
        media: "/фары.jpg",
        title: "Фары, вдохновлённые отблесками океана",
        text: `Двойные U-образные фары BYD Song Plus сверкают, словно отражение солнца...`,
      },
      {
        type: "video",
        media: "/видосBYD.mp4",
        title: "Фары, вдохновлённые отблесками океана",
        text: `Двойные U-образные фары BYD Song Plus сверкают, словно отражение солнца...`,
      },
      {
        type: "image",
        media: "/перед.jpg",
        title: "OCEAN X FACE",
        text: `Эволюционное сочетание футуристических линий и морских мотивов рождает...`,
      },
    ],
    slides: [
      {
        image: "/img1.jpg",
        title: "Новый интерьер: Ритм океана",
        description:
          "Откройте для себя новое пространство, наполненное ощущением красоты и свободы. Интерьер созданный для максимального комфорта и наслаждения, отражающий гармонию и свежесть волн океана.",
      },
      {
        image: "/img2.webp",
        title: "Интеллектуальная система BYD",
        description:
          'Система, которая связывает людей, автомобили и жизнь. Просто скажите "Hi BYD".',
      },
      {
        image: "/img3.webp",
        title: "Понорамная крыша",
        description:
          "Панорамная крыша BYD Song Plus предлагает широкий обзор и делает салон более светлым и просторным. Эта особенность добавляет элегантности и комфорта, улучшая общее впечатление от поездки.",
      },
    ],
    imageUrls: [
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvNGM4MmM5ZGM4ZjJhM2IxYzc5OTc5NDJiZjkxYjg2OTIucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvODhiZTEwZmM4NzQ3NGQzYzRkZTAyNjZhMmFiYzU3ZWIucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZjZhNDlkYWFlMDg1NDE2ZGJkNGNmNDk0ODAyNzYxY2UucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZTYyNjA1ZGNkNjczNDgxYTgwZDRhMmYwMDYzMWY0M2IucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZTcxYTlhOWY4Nzc0YTJlMjFkNzczOWUwZTY5MWU5MjUucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvM2FiNzRmOTA1MTdkMDdiZjBmMGRlYmI3Y2ExOTJiNjAucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMzVkMDhjZGRjMTM4OGVhOTg2NDVjZmYwMGI4YmIyM2IucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOWY3YTZjNDljMDY5OTNlZGI0M2EzZWRmM2Q2MGYxOTEucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMDAyYmM5YzQwNjBiODFlZmMwODU5YTU0ZDEzZjMyZDYucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYmMyZTgwNDY4NTI3ODA3OTc0ODE0YzIxNWNiYzk4ZGQucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOGRjMDg5ZjA3NWY1OGFmZWRkYWE3MDM1OTYxNTkyYmYucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYzExNjQ4OTIxNjZlOWVlNTlhMTNiNjE4ODA3ZDYyNTgucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZTU3MjBjN2Y3NjQ5MTJjNTkxMTc1OTI1MmM3NGE0ZjgucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMTVkYWQ3YmZiZjFhOGFiNzgzMjRkMWZkMGM4YjBkOWUucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZTA2OWM2MGU4OGRlYjU4ZGQ5MTk3ODhiZTAwMmM3ODIucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZjBhNGZlZTM0NGM5YzEwODMxMDNhMjliNmExNzE0MDgucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvM2I0MTE2ODcwM2RjYmRmMjA4NDNjNzNjZjIxOTc3YjcucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYTE1NjJlYzZmYWE4YWIyNTgyNmJlMTQ1ZTA3MmZlODUucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMTJhYzg2MjYwNzc2MGFmN2QyMGE2NzVkMTc0MTAzNWMucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvNWEzZjlkMmIxMjE0ODc2YWZiNjM1NjIzODM1MGY2NzcucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYjUwYTUwNWI0YjY5ZmM3YTVjMTVhNmJiOTc1YTBmNzQucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvODI1YjU4MWYwNzdiZDE4MThhOGU2YTgwMzk5ZjdkYTQucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZDFlOWUxNWFjNDI0MjUzZWQ5ZjQzNTZhOGRlYzYxNzIucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYTRmYWQ5NWQ3ODRlODc3YWNiMWQ1MGI5M2Q1Yjc4ZDIucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZWY3MWJiZjM5NjliZTU0OThjNDhkYTM5YzMwZmI3YWUucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOGNhNzgyZDY0ZDNkZDk0MjY3OTlhNDFkM2YzMzcwMDIucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYTVkNjE2ZmMzMGY2NDU1NTI3MmY0YTZmZjk4N2E5YWEucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvN2E2ZmVhMGIwMTY5ODRkZGFjZjI5ZjhjOWQ3NzA3ZDQucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvODA5OGQ5MjllZGU1ODNiYzMxNGZjNzFlNjVlMjMzZGIucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOTU1ZDkzMjI2MmRlZWYzYzcxYTYwZDZmZDIzMjA3MDgucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvMGExYjUxZjdmMTg4ZDQ5YjlhY2EzNjRlZmNjYTdjMWUucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvNGIzMjc4MWMwZTNjYmNhMTIxYmE5NTQ4Zjg0NTQ3MGQucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvYzI1ZDRkM2Q3MDQ5NTIzOTdkMGEwZWYzMGRmZjliODAucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvZWExZDJlMzEwYjZhMzAyOWJlY2FhMWIyNTllZjU0YTUucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvOWM2NGIxZGNiN2Q0MmU4YmJiYjk5N2JiOGJlMzYxNWMucG5nfDEyMDB8ODAwfGE=.webp",
      "https://ncars.com.ua/images/ZGF0YS8zNjAvNDU0MF9jZmNmY2YvM2Q4NmYwNmI",
    ],
    view: {
      image: "/img1.jpg",
      link: "https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=280",
    }
  },
  {
    id: "2",
    slug: "byd-sea-lion-07",
    brand: "BYD",
    model: "Sea Lion 07",
    year: 2024,
    price: {
      usd: 28100,
      tg: 14379000,
    },
    gallery_images: {
      main: "https://ext.same-assets.com/2335176788/3966025567.webp",
      gallery: [
        "https://ext.same-assets.com/2335176788/3966025567.webp",
        "https://ext.same-assets.com/2335176788/449288760.webp",
      ],
    },
    description:
      "BYD Sea Lion 7 - это премиальный электрический седан, который устанавливает новые стандарты в сегменте.",
    specs: {
      engine: "Электрический",
      battery: "82.5 кВт·ч",
      range: "650 км",
      power: "230 л.с.",
      acceleration: "7.5 сек (0-100 км/ч)",
      maxSpeed: "190 км/ч",
      charging: "DC 150 кВт",
      driveType: "Задний привод",
      seating: 5,
      bodyType: "Седан",
    },
    colors: [
      {
        name: "Ocean Blue",
        image: "https://ext.same-assets.com/2335176788/3966025567.webp",
      },
    ],
    features: [
      "Premium interior",
      "Advanced driver assistance",
      "Fast charging capability",
      "Luxury comfort features",
    ],
    available: true,
    category: "electric",
  },
  {
    id: "3",
    slug: "volkswagen-id-unyx",
    brand: "Volkswagen",
    model: "ID. UNYX",
    year: 2024,
    price: {
      usd: 24300,
      tg: 12435000,
    },
    gallery_images: {
      main: "https://ext.same-assets.com/2335176788/4289580409.webp",
      gallery: [
        "https://ext.same-assets.com/2335176788/4289580409.webp",
        "https://ext.same-assets.com/2335176788/2972472168.webp",
      ],
    },
    description:
      "Volkswagen ID. UNYX представляет будущее электромобильности от немецкого производителя.",
    specs: {
      engine: "Электрический",
      battery: "77 кВт·ч",
      range: "520 км",
      power: "204 л.с.",
      acceleration: "7.9 сек (0-100 км/ч)",
      maxSpeed: "180 км/ч",
      charging: "DC 135 кВт",
      driveType: "Задний привод",
      seating: 5,
      bodyType: "Кроссовер",
    },
    colors: [
      {
        name: "Glacier White",
        image: "https://ext.same-assets.com/2335176788/4289580409.webp",
      },
    ],
    features: [
      "ID.Light LED strip",
      "Augmented reality head-up display",
      "Travel Assist",
      "Wireless App-Connect",
    ],
    available: true,
    category: "electric",
  },
  {
    id: "4",
    slug: "zeekr-7x",
    brand: "ZEEKR",
    model: "7X",
    year: 2024,
    price: {
      usd: 34100,
      tg: 17449000,
    },
    gallery_images: {
      main: "https://ext.same-assets.com/2335176788/1072199648.webp",
      gallery: [
        "https://ext.same-assets.com/2335176788/1072199648.webp",
        "https://ext.same-assets.com/2335176788/1239706082.webp",
      ],
    },
    description:
      "Zeekr 7X - это флагманский электрический кроссовер, который сочетает роскошь и технологии.",
    specs: {
      engine: "Электрический",
      battery: "100 кВт·ч",
      range: "780 км",
      power: "421 л.с.",
      acceleration: "3.8 сек (0-100 км/ч)",
      maxSpeed: "210 км/ч",
      charging: "DC 250 кВт",
      driveType: "Полный привод",
      seating: 5,
      bodyType: "Кроссовер",
    },
    colors: [
      {
        name: "Starry Black",
        image: "https://ext.same-assets.com/2335176788/1072199648.webp",
      },
    ],
    features: [
      "Premium Nappa leather",
      "Air suspension",
      "Ultra-fast charging",
      "Advanced autonomous driving",
    ],
    available: true,
    category: "electric",
  },
  {
    id: "5",
    slug: "xiaomi-su7",
    brand: "Xiaomi",
    model: "SU7",
    year: 2024,
    price: {
      usd: 33200,
      tg: 16989000,
    },
    gallery_images: {
      main: "https://ext.same-assets.com/2335176788/1113055233.svg",
      gallery: ["https://ext.same-assets.com/2335176788/1113055233.svg"],
    },
    description:
      "Седан - это премиальный C-класс седан от Xiaomi, который объединяет технологии смартфонов с автомобильной индустрией.",
    specs: {
      engine: "Электрический",
      battery: "101 кВт·ч",
      range: "800 км",
      power: "299 л.с.",
      acceleration: "5.28 сек (0-100 км/ч)",
      maxSpeed: "210 км/ч",
      charging: "DC 150 кВт",
      driveType: "Задний привод",
      seating: 5,
      bodyType: "Седан",
    },
    colors: [
      {
        name: "Elegant Grey",
        image: "https://ext.same-assets.com/2335176788/1113055233.svg",
      },
    ],
    features: [
      "Xiaomi ecosystem integration",
      "Advanced infotainment",
      "Smart connectivity",
      "Premium audio system",
    ],
    available: true,
    category: "electric",
  },
  {
    id: "6",
    slug: "byd-yuan-up",
    brand: "BYD",
    model: "Yuan Up",
    year: 2024,
    price: {
      usd: 16500,
      tg: 8443000,
    },
    gallery_images: {
      main: "https://ext.same-assets.com/2335176788/266031571.webp",
      gallery: ["https://ext.same-assets.com/2335176788/266031571.webp"],
    },
    description:
      "Компактный BYD Yuan Up является отличным выбором для города, предлагая доступность и эффективность.",
    specs: {
      engine: "Электрический",
      battery: "45.1 кВт·ч",
      range: "345 км",
      power: "177 л.с.",
      acceleration: "9.2 сек (0-100 км/ч)",
      maxSpeed: "130 км/ч",
      charging: "DC 40 кВт",
      driveType: "Передний привод",
      seating: 5,
      bodyType: "Компактный кроссовер",
    },
    colors: [
      {
        name: "Pearl White",
        image: "https://ext.same-assets.com/2335176788/266031571.webp",
      },
    ],
    features: [
      "Urban mobility",
      "Efficient charging",
      "Compact design",
      "Modern interior",
    ],
    available: true,
    category: "electric",
  },
];

export const getCarBySlug = (slug: string): Car | undefined => {
  return cars.find((car) => car.slug === slug);
};

export const getCarsByCategory = (category: Car["category"]): Car[] => {
  return cars.filter((car) => car.category === category);
};

export const getFeaturedCars = (limit = 6): Car[] => {
  return cars.filter((car) => car.available).slice(0, limit);
};
