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
  images: {
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
  category: 'electric' | 'hybrid' | 'commercial';
}

export const cars: Car[] = [
  {
    id: '1',
    slug: 'byd-song-plus',
    brand: 'BYD',
    model: 'Song Plus',
    year: 2024,
    price: {
      usd: 23200,
      tg: 11872000
    },
    images: {
      main: 'https://ext.same-assets.com/2335176788/2497154989.webp',
      gallery: [
        'https://ext.same-assets.com/2335176788/2497154989.webp',
        'https://ext.same-assets.com/2335176788/675530518.webp',
        'https://ext.same-assets.com/3124690321/2211639939.webp',
        'https://ext.same-assets.com/3124690321/491776432.webp',
        'https://ext.same-assets.com/3124690321/1494461349.webp',
        'https://ext.same-assets.com/3124690321/1225119392.webp'
      ]
    },
    description: 'Электрический кроссовер, который сочетает в себе передовые технологии и комфорт. BYD Song Plus представляет новое поколение электромобилей с впечатляющим запасом хода.',
    specs: {
      engine: 'Электрический',
      battery: '71.7 кВт·ч',
      range: '505 км',
      power: '204 л.с.',
      acceleration: '8.5 сек (0-100 км/ч)',
      maxSpeed: '175 км/ч',
      charging: 'DC 80 кВт',
      driveType: 'Передний привод',
      seating: 5,
      bodyType: 'Кроссовер'
    },
    colors: [
      {
        name: 'Montenegro Black',
        image: 'https://ext.same-assets.com/3124690321/2758742394.webp'
      },
      {
        name: 'Snow White',
        image: 'https://ext.same-assets.com/3124690321/411842236.webp'
      },
      {
        name: 'Time Grey',
        image: 'https://ext.same-assets.com/3124690321/3811582310.webp'
      }
    ],
    video: 'yZs9hw8IjsM?si=yyoXgS0NxO3JMEsiMyGLw9iH43o?si=ZYbac9p-8npYxhXu',
    features: [
      'Электрифицированная платформа — гибридная (DM-i) и полностью электрическая (EV) версии.',
      'Современный интерьер — большой экран 15,6" с поворотом, премиальные материалы отделки.',
      'Высокий уровень безопасности — 6 подушек, электронные ассистенты, 5 звёзд C-NCAP.',
      'Технологии комфорта — панорамная крыша, климат-контроль на 2 зоны, системы помощи при парковке.',
      'Большой багажник — до 574 л объём багажного отделения.',
      'Быстрая зарядка — до 80% за 30 минут на быстрой станции (EV).',
      'Мощный двигатель — суммарная мощность гибрида до 197 л.с., электроверсия — 218 л.с..',
      'Большой запас хода — до 1100 км на гибриде (WLTC) и до 520 км на электроверсии (CLTC).'
    ],
    available: true,
    category: 'electric'
  },
  {
    id: '2',
    slug: 'byd-sea-lion-07',
    brand: 'BYD',
    model: 'Sea Lion 07',
    year: 2024,
    price: {
      usd: 28100,
      tg: 14379000
    },
    images: {
      main: 'https://ext.same-assets.com/2335176788/3966025567.webp',
      gallery: [
        'https://ext.same-assets.com/2335176788/3966025567.webp',
        'https://ext.same-assets.com/2335176788/449288760.webp'
      ]
    },
    description: 'BYD Sea Lion 7 - это премиальный электрический седан, который устанавливает новые стандарты в сегменте.',
    specs: {
      engine: 'Электрический',
      battery: '82.5 кВт·ч',
      range: '650 км',
      power: '230 л.с.',
      acceleration: '7.5 сек (0-100 км/ч)',
      maxSpeed: '190 км/ч',
      charging: 'DC 150 кВт',
      driveType: 'Задний привод',
      seating: 5,
      bodyType: 'Седан'
    },
    colors: [
      {
        name: 'Ocean Blue',
        image: 'https://ext.same-assets.com/2335176788/3966025567.webp'
      }
    ],
    features: [
      'Premium interior',
      'Advanced driver assistance',
      'Fast charging capability',
      'Luxury comfort features'
    ],
    available: true,
    category: 'electric'
  },
  {
    id: '3',
    slug: 'volkswagen-id-unyx',
    brand: 'Volkswagen',
    model: 'ID. UNYX',
    year: 2024,
    price: {
      usd: 24300,
      tg: 12435000
    },
    images: {
      main: 'https://ext.same-assets.com/2335176788/4289580409.webp',
      gallery: [
        'https://ext.same-assets.com/2335176788/4289580409.webp',
        'https://ext.same-assets.com/2335176788/2972472168.webp'
      ]
    },
    description: 'Volkswagen ID. UNYX представляет будущее электромобильности от немецкого производителя.',
    specs: {
      engine: 'Электрический',
      battery: '77 кВт·ч',
      range: '520 км',
      power: '204 л.с.',
      acceleration: '7.9 сек (0-100 км/ч)',
      maxSpeed: '180 км/ч',
      charging: 'DC 135 кВт',
      driveType: 'Задний привод',
      seating: 5,
      bodyType: 'Кроссовер'
    },
    colors: [
      {
        name: 'Glacier White',
        image: 'https://ext.same-assets.com/2335176788/4289580409.webp'
      }
    ],
    features: [
      'ID.Light LED strip',
      'Augmented reality head-up display',
      'Travel Assist',
      'Wireless App-Connect'
    ],
    available: true,
    category: 'electric'
  },
  {
    id: '4',
    slug: 'zeekr-7x',
    brand: 'ZEEKR',
    model: '7X',
    year: 2024,
    price: {
      usd: 34100,
      tg: 17449000
    },
    images: {
      main: 'https://ext.same-assets.com/2335176788/1072199648.webp',
      gallery: [
        'https://ext.same-assets.com/2335176788/1072199648.webp',
        'https://ext.same-assets.com/2335176788/1239706082.webp'
      ]
    },
    description: 'Zeekr 7X - это флагманский электрический кроссовер, который сочетает роскошь и технологии.',
    specs: {
      engine: 'Электрический',
      battery: '100 кВт·ч',
      range: '780 км',
      power: '421 л.с.',
      acceleration: '3.8 сек (0-100 км/ч)',
      maxSpeed: '210 км/ч',
      charging: 'DC 250 кВт',
      driveType: 'Полный привод',
      seating: 5,
      bodyType: 'Кроссовер'
    },
    colors: [
      {
        name: 'Starry Black',
        image: 'https://ext.same-assets.com/2335176788/1072199648.webp'
      }
    ],
    features: [
      'Premium Nappa leather',
      'Air suspension',
      'Ultra-fast charging',
      'Advanced autonomous driving'
    ],
    available: true,
    category: 'electric'
  },
  {
    id: '5',
    slug: 'xiaomi-su7',
    brand: 'Xiaomi',
    model: 'SU7',
    year: 2024,
    price: {
      usd: 33200,
      tg: 16989000
    },
    images: {
      main: 'https://ext.same-assets.com/2335176788/1113055233.svg',
      gallery: [
        'https://ext.same-assets.com/2335176788/1113055233.svg'
      ]
    },
    description: 'Седан - это премиальный C-класс седан от Xiaomi, который объединяет технологии смартфонов с автомобильной индустрией.',
    specs: {
      engine: 'Электрический',
      battery: '101 кВт·ч',
      range: '800 км',
      power: '299 л.с.',
      acceleration: '5.28 сек (0-100 км/ч)',
      maxSpeed: '210 км/ч',
      charging: 'DC 150 кВт',
      driveType: 'Задний привод',
      seating: 5,
      bodyType: 'Седан'
    },
    colors: [
      {
        name: 'Elegant Grey',
        image: 'https://ext.same-assets.com/2335176788/1113055233.svg'
      }
    ],
    features: [
      'Xiaomi ecosystem integration',
      'Advanced infotainment',
      'Smart connectivity',
      'Premium audio system'
    ],
    available: true,
    category: 'electric'
  },
  {
    id: '6',
    slug: 'byd-yuan-up',
    brand: 'BYD',
    model: 'Yuan Up',
    year: 2024,
    price: {
      usd: 16500,
      tg: 8443000
    },
    images: {
      main: 'https://ext.same-assets.com/2335176788/266031571.webp',
      gallery: [
        'https://ext.same-assets.com/2335176788/266031571.webp'
      ]
    },
    description: 'Компактный BYD Yuan Up является отличным выбором для города, предлагая доступность и эффективность.',
    specs: {
      engine: 'Электрический',
      battery: '45.1 кВт·ч',
      range: '345 км',
      power: '177 л.с.',
      acceleration: '9.2 сек (0-100 км/ч)',
      maxSpeed: '130 км/ч',
      charging: 'DC 40 кВт',
      driveType: 'Передний привод',
      seating: 5,
      bodyType: 'Компактный кроссовер'
    },
    colors: [
      {
        name: 'Pearl White',
        image: 'https://ext.same-assets.com/2335176788/266031571.webp'
      }
    ],
    features: [
      'Urban mobility',
      'Efficient charging',
      'Compact design',
      'Modern interior'
    ],
    available: true,
    category: 'electric'
  }
];

export const getCarBySlug = (slug: string): Car | undefined => {
  return cars.find(car => car.slug === slug);
};

export const getCarsByCategory = (category: Car['category']): Car[] => {
  return cars.filter(car => car.category === category);
};

export const getFeaturedCars = (limit = 6): Car[] => {
  return cars.filter(car => car.available).slice(0, limit);
};
