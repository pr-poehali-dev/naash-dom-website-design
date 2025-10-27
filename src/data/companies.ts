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
  houses: Array<{
    address: string;
    residents: number;
    apartments: number;
    floors: number;
    x?: number;
    y?: number;
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
    houses: [
      { address: 'ул. Металлистов, д. 116, корп. 1 лит. А', residents: 156, apartments: 84, floors: 9 },
      { address: 'ул. Васенко, д. 12 лит. А', residents: 142, apartments: 76, floors: 9 },
      { address: 'Фермское шоссе, д. 22 корп. 3 лит. А', residents: 198, apartments: 96, floors: 10 },
      { address: 'пр. Кондратьевский, д. 62 корп. 1', residents: 134, apartments: 72, floors: 8 },
      { address: 'пр. Кондратьевский, д. 62 корп. 2', residents: 167, apartments: 90, floors: 9 },
      { address: 'пр. Кондратьевский, д. 64 корп. 1', residents: 189, apartments: 108, floors: 12 },
      { address: 'пр. Кондратьевский, д. 66 корп. 1', residents: 178, apartments: 96, floors: 12 }
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
    houses: [
      { address: 'пр. Кондратьевский, д. 62 корп. 7', residents: 245, apartments: 132, floors: 16 }
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
    houses: [
      { address: 'ул. Одоевского, д. 21 корп. 1 стр. 1', residents: 312, apartments: 168, floors: 18 }
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
    houses: [
      { address: 'ул. Академика Константинова, д. 1 корп. 1 стр. 1', residents: 201, apartments: 108, floors: 12 },
      { address: 'пр. Петровский, д. 5 стр. 1', residents: 167, apartments: 90, floors: 9 },
      { address: 'г. Сестрорецк, Приморское шоссе, д. 352 стр. 1', residents: 189, apartments: 102, floors: 10 },
      { address: 'ул. Большая Зеленина, д. 24 стр. 1', residents: 156, apartments: 84, floors: 9 },
      { address: 'ул. Ремесленная, д. 21 стр. 1', residents: 134, apartments: 72, floors: 8 }
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
    houses: [
      { address: 'ул. Малая Бухарестская, д. 12 стр. 1', residents: 223, apartments: 120, floors: 14 }
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
    houses: [
      { address: 'Воронцовский бульвар, 23/11, Мурино', residents: 267, apartments: 144, floors: 15 },
      { address: 'Областная ул., 5к1, Кудрово', residents: 289, apartments: 156, floors: 16 },
      { address: 'Областная ул., 5к2, Кудрово', residents: 298, apartments: 160, floors: 16 },
      { address: 'Областная ул., 5к3, Кудрово', residents: 312, apartments: 168, floors: 17 },
      { address: 'Областная ул., 5к5, Кудрово', residents: 234, apartments: 126, floors: 14 },
      { address: 'Областная ул., 5к6, Кудрово', residents: 245, apartments: 132, floors: 14 }
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
    houses: [
      { address: 'пр. Строителей, 2, Кудрово', residents: 278, apartments: 150, floors: 15 },
      { address: 'Ленинградская ул., 9/8, Кудрово', residents: 256, apartments: 138, floors: 14 }
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
    houses: [
      { address: 'Каштановая аллея, 2, Кудрово', residents: 290, apartments: 156, floors: 16 },
      { address: 'Областная ул., 9к1, Кудрово', residents: 267, apartments: 144, floors: 15 },
      { address: 'Областная ул., 9к2, Кудрово', residents: 245, apartments: 132, floors: 14 }
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
    houses: [
      { address: 'Областная ул., 3, Кудрово', residents: 312, apartments: 168, floors: 17 },
      { address: 'пр. Строителей, 4, Кудрово', residents: 289, apartments: 156, floors: 16 }
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
    houses: [
      { address: 'Каштановая аллея, 3, Кудрово', residents: 301, apartments: 162, floors: 16 },
      { address: 'пр. Строителей, 6, Кудрово', residents: 278, apartments: 150, floors: 15 },
      { address: 'Областная ул., 7, Кудрово', residents: 256, apartments: 138, floors: 14 }
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
    houses: [
      { address: 'Красносельское шоссе, 6, гп Новоселье', residents: 189, apartments: 102, floors: 10 },
      { address: 'Красносельское шоссе, 16, гп Новоселье', residents: 167, apartments: 90, floors: 9 },
      { address: 'Питерский пр., 1, гп Новоселье', residents: 201, apartments: 108, floors: 11 },
      { address: 'Питерский пр., 5, гп Новоселье', residents: 178, apartments: 96, floors: 10 },
      { address: 'Питерский пр., 7, гп Новоселье', residents: 156, apartments: 84, floors: 9 },
      { address: 'Питерский пр., 11, гп Новоселье', residents: 134, apartments: 72, floors: 8 },
      { address: 'Невская ул., 1, гп Новоселье', residents: 145, apartments: 78, floors: 9 },
      { address: 'Невская ул., 3, гп Новоселье', residents: 167, apartments: 90, floors: 9 },
      { address: 'Невская ул., 4, гп Новоселье', residents: 178, apartments: 96, floors: 10 },
      { address: 'Невская ул., 5/7, гп Новоселье', residents: 189, apartments: 102, floors: 10 },
      { address: 'Невская ул., 6, гп Новоселье', residents: 156, apartments: 84, floors: 9 },
      { address: 'Невская ул., 10, гп Новоселье', residents: 201, apartments: 108, floors: 11 },
      { address: 'Невская ул., 10/5, гп Новоселье', residents: 134, apartments: 72, floors: 8 },
      { address: 'Адмиралтейская ул., 1, гп Новоселье', residents: 145, apartments: 78, floors: 9 },
      { address: 'Адмиралтейская ул., 3, гп Новоселье', residents: 167, apartments: 90, floors: 9 },
      { address: 'Адмиралтейская ул., 9, гп Новоселье', residents: 178, apartments: 96, floors: 10 }
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
    houses: [
      { address: 'КП «Сад времени»', residents: 95, apartments: 45, floors: 2 }
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
