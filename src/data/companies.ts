export interface ManagementCompany {
  id: string;
  name: string;
  shortName: string;
  description: string;
  logo?: string;
  foundedYear: number;
  licenseNumber: string;
  director: string;
  address: string;
  phone: string;
  email: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  houses: Array<{
    address: string;
    residents: number;
    apartments: number;
    floors: number;
    lat?: number;
    lng?: number;
  }>;
  tariffs: Array<{
    name: string;
    price: string;
    unit: string;
  }>;
  services: string[];
  workingHours: string;
  inn: string;
  kpp: string;
  ogrn: string;
  bankAccount: string;
}

export const managementCompanies: ManagementCompany[] = [
  {
    id: 'uk-nashdom-city',
    name: 'ООО "УК "Наш дом-Сити"',
    shortName: 'НД-Сити',
    description: 'Управляющая компания, обслуживающая жилые комплексы в центральных районах Санкт-Петербурга.',
    foundedYear: 2007,
    licenseNumber: '078-000123-1',
    director: 'Иванов Иван Иванович',
    address: 'Санкт-Петербург, ул. Металлистов, д. 116, корп. 1 лит. А',
    phone: '8 (812) 555-0101',
    email: 'city@nashdom-spb.ru',
    coordinates: { lat: 59.9626, lng: 30.4106 },
    houses: [
      { address: 'ул. Металлистов, д. 116, корп. 1 лит. А', residents: 156, apartments: 84, floors: 9, lat: 59.9626, lng: 30.4106 },
      { address: 'ул. Васенко, д. 12 лит. А', residents: 142, apartments: 76, floors: 9, lat: 59.9724, lng: 30.4197 },
      { address: 'Фермское шоссе, д. 22 корп. 3 лит. А', residents: 198, apartments: 96, floors: 10, lat: 59.9651, lng: 30.4289 },
      { address: 'пр. Кондратьевский, д. 62 корп. 1', residents: 134, apartments: 72, floors: 8, lat: 59.9705, lng: 30.3658 },
      { address: 'пр. Кондратьевский, д. 62 корп. 2', residents: 167, apartments: 90, floors: 9, lat: 59.9707, lng: 30.3661 },
      { address: 'пр. Кондратьевский, д. 64 корп. 1', residents: 189, apartments: 108, floors: 12, lat: 59.9712, lng: 30.3668 },
      { address: 'пр. Кондратьевский, д. 66 корп. 1', residents: 178, apartments: 96, floors: 12, lat: 59.9718, lng: 30.3675 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '25.50', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора',
      'Озеленение территории',
      'Управление общедомовым имуществом'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00',
    inn: '7800123456',
    kpp: '780001001',
    ogrn: '1234567890123',
    bankAccount: '40702810000000000001'
  },
  {
    id: 'uk-nashdom-polyustrovo',
    name: 'ООО "УК "Наш дом-Полюстрово"',
    shortName: 'НД-Полюстрово',
    description: 'Управляющая компания района Полюстрово.',
    foundedYear: 2010,
    licenseNumber: '078-000124-2',
    director: 'Петрова Мария Сергеевна',
    address: 'Санкт-Петербург, пр. Кондратьевский, д. 62 корп. 7',
    phone: '8 (812) 555-0102',
    email: 'polyustrovo@nashdom-spb.ru',
    coordinates: { lat: 59.9720, lng: 30.3680 },
    houses: [
      { address: 'пр. Кондратьевский, д. 62 корп. 7', residents: 245, apartments: 132, floors: 16, lat: 59.9720, lng: 30.3680 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '26.00', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    inn: '7800123457',
    kpp: '780001002',
    ogrn: '1234567890124',
    bankAccount: '40702810000000000002'
  },
  {
    id: 'uk-cityhome',
    name: 'ООО УК "СИТИХОУМ"',
    shortName: 'СИТИХОУМ',
    description: 'Управляющая компания современных жилых комплексов.',
    foundedYear: 2015,
    licenseNumber: '078-000125-3',
    director: 'Сидоров Алексей Викторович',
    address: 'Санкт-Петербург, ул. Одоевского, д. 21 корп. 1 стр. 1',
    phone: '8 (812) 555-0103',
    email: 'info@cityhome-spb.ru',
    coordinates: { lat: 59.9830, lng: 30.2950 },
    houses: [
      { address: 'ул. Одоевского, д. 21 корп. 1 стр. 1', residents: 312, apartments: 168, floors: 18, lat: 59.9830, lng: 30.2950 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '28.00', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора',
      'Охрана и видеонаблюдение',
      'Консьерж-служба'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00',
    inn: '7800123458',
    kpp: '780001003',
    ogrn: '1234567890125',
    bankAccount: '40702810000000000003'
  },
  {
    id: 'uk-ostrov-grad',
    name: 'ООО "УК "Остров-Град"',
    shortName: 'Остров-Град',
    description: 'Управляющая компания, обслуживающая дома на Петроградской стороне и в Сестрорецке.',
    foundedYear: 2012,
    licenseNumber: '078-000126-4',
    director: 'Николаев Николай Николаевич',
    address: 'Санкт-Петербург, ул. Академика Константинова, д. 1 корп. 1 стр. 1',
    phone: '8 (812) 555-0104',
    email: 'info@ostrov-grad.ru',
    coordinates: { lat: 59.9720, lng: 30.3110 },
    houses: [
      { address: 'ул. Академика Константинова, д. 1 корп. 1 стр. 1', residents: 201, apartments: 108, floors: 12, lat: 59.9720, lng: 30.3110 },
      { address: 'пр. Петровский, д. 5 стр. 1', residents: 167, apartments: 90, floors: 9, lat: 59.9680, lng: 30.3090 },
      { address: 'г. Сестрорецк, Приморское шоссе, д. 352 стр. 1', residents: 189, apartments: 102, floors: 10, lat: 60.0950, lng: 29.9650 },
      { address: 'ул. Большая Зеленина, д. 24 стр. 1', residents: 156, apartments: 84, floors: 9, lat: 59.9650, lng: 30.3030 },
      { address: 'ул. Ремесленная, д. 21 стр. 1', residents: 134, apartments: 72, floors: 8, lat: 59.9340, lng: 30.3510 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '27.00', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора',
      'Озеленение территории'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    inn: '7800123459',
    kpp: '780001004',
    ogrn: '1234567890126',
    bankAccount: '40702810000000000004'
  },
  {
    id: 'uk-novoe-kupchino',
    name: 'ООО "УК "Новое Купчино"',
    shortName: 'Новое Купчино',
    description: 'Управляющая компания Фрунзенского района.',
    foundedYear: 2014,
    licenseNumber: '078-000127-5',
    director: 'Кузнецова Елена Андреевна',
    address: 'Санкт-Петербург, ул. Малая Бухарестская, д. 12 стр. 1',
    phone: '8 (812) 555-0105',
    email: 'info@novoe-kupchino.ru',
    coordinates: { lat: 59.8740, lng: 30.3600 },
    houses: [
      { address: 'ул. Малая Бухарестская, д. 12 стр. 1', residents: 223, apartments: 120, floors: 14, lat: 59.8740, lng: 30.3600 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '24.50', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    inn: '7800123460',
    kpp: '780001005',
    ogrn: '1234567890127',
    bankAccount: '40702810000000000005'
  },
  {
    id: 'uk-nashdom-region',
    name: 'ООО «УК «Наш дом – Регион»',
    shortName: 'НД-Регион',
    description: 'Управляющая компания, обслуживающая дома в Мурино и Кудрово, Ленинградская область.',
    foundedYear: 2016,
    licenseNumber: '047-000128-6',
    director: 'Смирнов Дмитрий Олегович',
    address: 'Воронцовский бульвар, 23/11, Мурино, Всеволожский район, Ленинградская область',
    phone: '8 (812) 555-0106',
    email: 'region@nashdom-spb.ru',
    coordinates: { lat: 60.0500, lng: 30.4350 },
    houses: [
      { address: 'Воронцовский бульвар, 23/11, Мурино', residents: 267, apartments: 144, floors: 15, lat: 60.0500, lng: 30.4350 },
      { address: 'Областная ул., 5к1, Кудрово', residents: 289, apartments: 156, floors: 16, lat: 59.9050, lng: 30.5100 },
      { address: 'Областная ул., 5к2, Кудрово', residents: 298, apartments: 160, floors: 16, lat: 59.9055, lng: 30.5105 },
      { address: 'Областная ул., 5к3, Кудрово', residents: 312, apartments: 168, floors: 17, lat: 59.9060, lng: 30.5110 },
      { address: 'Областная ул., 5к5, Кудрово', residents: 234, apartments: 126, floors: 14, lat: 59.9065, lng: 30.5115 },
      { address: 'Областная ул., 5к6, Кудрово', residents: 245, apartments: 132, floors: 14, lat: 59.9070, lng: 30.5120 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '26.50', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора',
      'Детские и спортивные площадки'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00',
    inn: '4703123461',
    kpp: '470301001',
    ogrn: '1234567890128',
    bankAccount: '40702810000000000006'
  },
  {
    id: 'uk-nashdom-kudrovo-grad',
    name: 'ООО «УК «Наш дом-Кудрово Град»',
    shortName: 'НД-Кудрово Град',
    description: 'Управляющая компания жилых комплексов в Кудрово.',
    foundedYear: 2017,
    licenseNumber: '047-000129-7',
    director: 'Васильев Андрей Петрович',
    address: 'пр. Строителей, 2, Кудрово, Заневское городское поселение, Всеволожский район, Ленинградская область',
    phone: '8 (812) 555-0107',
    email: 'kudrovo-grad@nashdom-spb.ru',
    coordinates: { lat: 59.9075, lng: 30.5125 },
    houses: [
      { address: 'пр. Строителей, 2, Кудрово', residents: 278, apartments: 150, floors: 15, lat: 59.9075, lng: 30.5125 },
      { address: 'Ленинградская ул., 9/8, Кудрово', residents: 256, apartments: 138, floors: 14, lat: 59.9080, lng: 30.5130 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '27.50', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора',
      'Охрана и видеонаблюдение'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    inn: '4703123462',
    kpp: '470301002',
    ogrn: '1234567890129',
    bankAccount: '40702810000000000007'
  },
  {
    id: 'uk-kudrovo-dom',
    name: 'ООО «УК «Кудрово-Дом»',
    shortName: 'Кудрово-Дом',
    description: 'Управляющая компания района Кудрово.',
    foundedYear: 2018,
    licenseNumber: '047-000130-8',
    director: 'Морозова Ольга Владимировна',
    address: 'Каштановая аллея, 2, Кудрово, Заневское городское поселение, Всеволожский район, Ленинградская область',
    phone: '8 (812) 555-0108',
    email: 'info@kudrovo-dom.ru',
    coordinates: { lat: 59.9085, lng: 30.5135 },
    houses: [
      { address: 'Каштановая аллея, 2, Кудрово', residents: 290, apartments: 156, floors: 16, lat: 59.9085, lng: 30.5135 },
      { address: 'Областная ул., 9к1, Кудрово', residents: 267, apartments: 144, floors: 15, lat: 59.9090, lng: 30.5140 },
      { address: 'Областная ул., 9к2, Кудрово', residents: 245, apartments: 132, floors: 14, lat: 59.9095, lng: 30.5145 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '26.00', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    inn: '4703123463',
    kpp: '470301003',
    ogrn: '1234567890130',
    bankAccount: '40702810000000000008'
  },
  {
    id: 'uk-kudrovo-service',
    name: 'ООО «УК «Кудрово-Сервис»',
    shortName: 'Кудрово-Сервис',
    description: 'Управляющая компания с акцентом на качественный сервис.',
    foundedYear: 2019,
    licenseNumber: '047-000131-9',
    director: 'Соколов Игорь Михайлович',
    address: 'Областная ул., 3, Кудрово, Заневское городское поселение, Всеволожский район, Ленинградская область',
    phone: '8 (812) 555-0109',
    email: 'service@kudrovo-service.ru',
    coordinates: { lat: 59.9100, lng: 30.5150 },
    houses: [
      { address: 'Областная ул., 3, Кудрово', residents: 312, apartments: 168, floors: 17, lat: 59.9100, lng: 30.5150 },
      { address: 'пр. Строителей, 4, Кудрово', residents: 289, apartments: 156, floors: 16, lat: 59.9105, lng: 30.5155 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '28.50', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора',
      'Консьерж-служба',
      'Детские и спортивные площадки'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00',
    inn: '4703123464',
    kpp: '470301004',
    ogrn: '1234567890131',
    bankAccount: '40702810000000000009'
  },
  {
    id: 'uk-nashdom-kudrovo',
    name: 'ООО «УК «Наш дом-Кудрово»',
    shortName: 'НД-Кудрово',
    description: 'Управляющая компания домов в Кудрово.',
    foundedYear: 2020,
    licenseNumber: '047-000132-10',
    director: 'Федоров Сергей Николаевич',
    address: 'Каштановая аллея, 3, Кудрово, Заневское городское поселение, Всеволожский район, Ленинградская область',
    phone: '8 (812) 555-0110',
    email: 'kudrovo@nashdom-spb.ru',
    coordinates: { lat: 59.9110, lng: 30.5160 },
    houses: [
      { address: 'Каштановая аллея, 3, Кудрово', residents: 301, apartments: 162, floors: 16, lat: 59.9110, lng: 30.5160 },
      { address: 'пр. Строителей, 6, Кудрово', residents: 278, apartments: 150, floors: 15, lat: 59.9115, lng: 30.5165 },
      { address: 'Областная ул., 7, Кудрово', residents: 256, apartments: 138, floors: 14, lat: 59.9120, lng: 30.5170 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '27.00', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора',
      'Озеленение территории'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    inn: '4703123465',
    kpp: '470301005',
    ogrn: '1234567890132',
    bankAccount: '40702810000000000010'
  },
  {
    id: 'uk-nashdom-novoselye',
    name: 'ООО «УК «Наш Дом Новоселье»',
    shortName: 'НД-Новоселье',
    description: 'Управляющая компания городского поселка Новоселье, Ломоносовский район.',
    foundedYear: 2018,
    licenseNumber: '047-000133-11',
    director: 'Павлова Татьяна Сергеевна',
    address: 'Красносельское шоссе, 6, гп Новоселье, Аннинское городское поселение, Ломоносовский район, Ленинградская область',
    phone: '8 (812) 555-0111',
    email: 'novoselye@nashdom-spb.ru',
    coordinates: { lat: 59.7850, lng: 30.1100 },
    houses: [
      { address: 'Красносельское шоссе, 6, гп Новоселье', residents: 189, apartments: 102, floors: 10, lat: 59.7850, lng: 30.1100 },
      { address: 'Красносельское шоссе, 16, гп Новоселье', residents: 167, apartments: 90, floors: 9, lat: 59.7855, lng: 30.1105 },
      { address: 'Питерский пр., 1, гп Новоселье', residents: 201, apartments: 108, floors: 11, lat: 59.7860, lng: 30.1110 },
      { address: 'Питерский пр., 5, гп Новоселье', residents: 178, apartments: 96, floors: 10, lat: 59.7865, lng: 30.1115 },
      { address: 'Питерский пр., 7, гп Новоселье', residents: 156, apartments: 84, floors: 9, lat: 59.7870, lng: 30.1120 },
      { address: 'Питерский пр., 11, гп Новоселье', residents: 134, apartments: 72, floors: 8, lat: 59.7875, lng: 30.1125 },
      { address: 'Невская ул., 1, гп Новоселье', residents: 145, apartments: 78, floors: 9, lat: 59.7880, lng: 30.1130 },
      { address: 'Невская ул., 3, гп Новоселье', residents: 167, apartments: 90, floors: 9, lat: 59.7885, lng: 30.1135 },
      { address: 'Невская ул., 4, гп Новоселье', residents: 178, apartments: 96, floors: 10, lat: 59.7890, lng: 30.1140 },
      { address: 'Невская ул., 5/7, гп Новоселье', residents: 189, apartments: 102, floors: 10, lat: 59.7895, lng: 30.1145 },
      { address: 'Невская ул., 6, гп Новоселье', residents: 156, apartments: 84, floors: 9, lat: 59.7900, lng: 30.1150 },
      { address: 'Невская ул., 10, гп Новоселье', residents: 201, apartments: 108, floors: 11, lat: 59.7905, lng: 30.1155 },
      { address: 'Невская ул., 10/5, гп Новоселье', residents: 134, apartments: 72, floors: 8, lat: 59.7910, lng: 30.1160 },
      { address: 'Адмиралтейская ул., 1, гп Новоселье', residents: 145, apartments: 78, floors: 9, lat: 59.7915, lng: 30.1165 },
      { address: 'Адмиралтейская ул., 3, гп Новоселье', residents: 167, apartments: 90, floors: 9, lat: 59.7920, lng: 30.1170 },
      { address: 'Адмиралтейская ул., 9, гп Новоселье', residents: 178, apartments: 96, floors: 10, lat: 59.7925, lng: 30.1175 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '24.00', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Плановый ремонт и обслуживание',
      'Уборка подъездов и придомовой территории',
      'Вывоз мусора',
      'Озеленение территории',
      'Детские и спортивные площадки'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    inn: '4703123466',
    kpp: '470301006',
    ogrn: '1234567890133',
    bankAccount: '40702810000000000011'
  },
  {
    id: 'uk-usadba',
    name: 'ООО «УК «Усадьба»',
    shortName: 'Усадьба',
    description: 'Управляющая компания коттеджного поселка "Сад времени".',
    foundedYear: 2019,
    licenseNumber: '047-000134-12',
    director: 'Лебедев Максим Александрович',
    address: 'КП «Сад времени», Ленинградская область',
    phone: '8 (812) 555-0112',
    email: 'info@usadba-uk.ru',
    coordinates: { lat: 60.0200, lng: 30.2500 },
    houses: [
      { address: 'КП «Сад времени»', residents: 95, apartments: 45, floors: 2, lat: 60.0200, lng: 30.2500 }
    ],
    tariffs: [
      { name: 'Содержание и ремонт', price: '35.00', unit: 'руб/м²' },
      { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
      { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
      { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
    ],
    services: [
      'Аварийно-диспетчерская служба 24/7',
      'Обслуживание инженерных систем',
      'Уборка территории',
      'Вывоз мусора',
      'Озеленение и благоустройство',
      'Охрана территории'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    inn: '4703123467',
    kpp: '470301007',
    ogrn: '1234567890134',
    bankAccount: '40702810000000000012'
  },
  {
    id: 'uk-city-parking',
    name: 'ООО «Сити Паркинг»',
    shortName: 'Сити Паркинг',
    description: 'Управляющая компания, специализирующаяся на управлении паркингами.',
    foundedYear: 2013,
    licenseNumber: '078-000135-13',
    director: 'Орлов Виктор Павлович',
    address: 'Санкт-Петербург, Кондратьевский пр., 62к7',
    phone: '8 (812) 555-0113',
    email: 'parking@city-parking.ru',
    houses: [
      { address: 'Кондратьевский пр., 62к7, СПб (паркинг)', residents: 0, apartments: 150, floors: 2 },
      { address: 'Зеленогорская ул., 12В, СПб (паркинг)', residents: 0, apartments: 120, floors: 2 },
      { address: 'пр. Металлистов, 116к1, СПб (паркинг)', residents: 0, apartments: 100, floors: 2 },
      { address: 'ул. Васенко, 12Б, СПб (паркинг)', residents: 0, apartments: 80, floors: 1 },
      { address: 'Фермское шоссе, 20к3, СПб (паркинг)', residents: 0, apartments: 90, floors: 2 },
      { address: 'Фермское шоссе, 22к2, СПб (паркинг)', residents: 0, apartments: 110, floors: 2 },
      { address: 'Петровский пр., 5, СПб (паркинг)', residents: 0, apartments: 85, floors: 1 },
      { address: 'Приморское шоссе, 352, Сестрорецк (паркинг)', residents: 0, apartments: 95, floors: 1 },
      { address: 'Большая Зеленина ул., 24, СПб (паркинг)', residents: 0, apartments: 75, floors: 1 }
    ],
    tariffs: [
      { name: 'Машиноместо (охраняемое)', price: '3500.00', unit: 'руб/мес' },
      { name: 'Машиноместо (неохраняемое)', price: '2000.00', unit: 'руб/мес' }
    ],
    services: [
      'Охрана паркингов 24/7',
      'Видеонаблюдение',
      'Уборка территории',
      'Обслуживание инженерных систем',
      'Шлагбаумы и контроль доступа'
    ],
    workingHours: 'Круглосуточно',
    inn: '7800123468',
    kpp: '780001008',
    ogrn: '1234567890135',
    bankAccount: '40702810000000000013'
  }
];

export const getTotalStats = () => {
  const totalHouses = managementCompanies.reduce((sum, company) => sum + company.houses.length, 0);
  const totalResidents = managementCompanies.reduce(
    (sum, company) => sum + company.houses.reduce((houseSum, house) => houseSum + house.residents, 0),
    0
  );
  const totalApartments = managementCompanies.reduce(
    (sum, company) => sum + company.houses.reduce((houseSum, house) => houseSum + house.apartments, 0),
    0
  );
  
  return { totalHouses, totalResidents, totalApartments, totalCompanies: managementCompanies.length };
};