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
    id: 'uk-1',
    name: 'УК "НАШ ДОМ Центральная"',
    shortName: 'НД Центральная',
    description: 'Управляющая компания, обслуживающая дома в центральном районе Санкт-Петербурга. Специализируемся на управлении домами исторической застройки.',
    foundedYear: 2010,
    licenseNumber: '078-000123-1',
    director: 'Петров Петр Петрович',
    address: 'Санкт-Петербург, пр. Невский, д. 85, офис 301',
    phone: '8 (812) 555-0100',
    email: 'central@nashdom-spb.ru',
    houses: [
      { address: 'ул. Ленина, 12', residents: 156, apartments: 84, floors: 9, x: 25, y: 30 },
      { address: 'ул. Ленина, 15', residents: 142, apartments: 76, floors: 9, x: 65, y: 25 },
      { address: 'пр. Невский, 120', residents: 198, apartments: 96, floors: 10 },
      { address: 'ул. Садовая, 45', residents: 134, apartments: 72, floors: 8 }
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
    id: 'uk-2',
    name: 'УК "НАШ ДОМ Приморская"',
    shortName: 'НД Приморская',
    description: 'Управляющая компания Приморского района. Обслуживаем современные жилые комплексы и новостройки.',
    foundedYear: 2015,
    licenseNumber: '078-000124-2',
    director: 'Сидорова Анна Ивановна',
    address: 'Санкт-Петербург, пр. Мира, д. 45, офис 102',
    phone: '8 (812) 555-0200',
    email: 'primorskaya@nashdom-spb.ru',
    houses: [
      { address: 'пр. Мира, 8', residents: 189, apartments: 108, floors: 12, x: 40, y: 65 },
      { address: 'пр. Мира, 10', residents: 178, apartments: 96, floors: 12, x: 75, y: 70 },
      { address: 'ул. Морская, 23', residents: 245, apartments: 132, floors: 16 },
      { address: 'ул. Приморская, 67', residents: 312, apartments: 168, floors: 18 }
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
      'Консьерж-служба',
      'Детские и спортивные площадки'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00',
    inn: '7800123457',
    kpp: '780001002',
    ogrn: '1234567890124',
    bankAccount: '40702810000000000002'
  },
  {
    id: 'uk-3',
    name: 'УК "НАШ ДОМ Московская"',
    shortName: 'НД Московская',
    description: 'Управляющая компания Московского района. Работаем с домами разных типов - от хрущевок до современных комплексов.',
    foundedYear: 2012,
    licenseNumber: '078-000125-3',
    director: 'Иванов Сергей Александрович',
    address: 'Санкт-Петербург, Московский пр., д. 145, офис 201',
    phone: '8 (812) 555-0300',
    email: 'moskovskaya@nashdom-spb.ru',
    houses: [
      { address: 'Московский пр., 98', residents: 167, apartments: 90, floors: 9 },
      { address: 'Московский пр., 102', residents: 156, apartments: 84, floors: 9 },
      { address: 'ул. Космонавтов, 34', residents: 223, apartments: 120, floors: 14 },
      { address: 'ул. Варшавская, 12', residents: 145, apartments: 78, floors: 9 },
      { address: 'ул. Победы, 8', residents: 201, apartments: 108, floors: 12 }
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
      'Капитальный ремонт',
      'Озеленение территории'
    ],
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    inn: '7800123458',
    kpp: '780001003',
    ogrn: '1234567890125',
    bankAccount: '40702810000000000003'
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
