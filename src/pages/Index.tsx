import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Index = () => {
  const [meterReadings, setMeterReadings] = useState({
    coldWater: '',
    hotWater: '',
    electricity: ''
  });

  const handleSubmitReadings = () => {
    console.log('Submitted readings:', meterReadings);
  };

  const news = [
    {
      id: 1,
      title: 'Плановые работы по замене лифтов',
      date: '25 октября 2025',
      tag: 'Ремонт',
      excerpt: 'С 1 ноября начнутся работы по замене лифтового оборудования в домах №12 и №15 по ул. Ленина.'
    },
    {
      id: 2,
      title: 'Общее собрание собственников',
      date: '22 октября 2025',
      tag: 'Собрание',
      excerpt: 'Приглашаем всех собственников на общее собрание 30 октября в 18:00. Повестка: обсуждение тарифов.'
    },
    {
      id: 3,
      title: 'Новые тарифы на 2026 год',
      date: '20 октября 2025',
      tag: 'Важно!',
      excerpt: 'Утверждены новые тарифы на коммунальные услуги. С подробностями можно ознакомиться в разделе документов.'
    }
  ];

  const services = [
    { name: 'Содержание и ремонт', price: '25.50', unit: 'руб/м²' },
    { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
    { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
    { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
  ];

  const houses = [
    { address: 'ул. Ленина, 12', residents: 156, x: 25, y: 30 },
    { address: 'ул. Ленина, 15', residents: 142, x: 65, y: 25 },
    { address: 'пр. Мира, 8', residents: 189, x: 40, y: 65 },
    { address: 'пр. Мира, 10', residents: 178, x: 75, y: 70 }
  ];

  const [selectedHouse, setSelectedHouse] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Building2" size={32} />
              <div>
                <h1 className="text-2xl font-bold">НАШ ДОМ</h1>
                <p className="text-sm opacity-90">Группа управляющих компаний</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="hover:opacity-80 transition-opacity">О компании</a>
              <a href="#news" className="hover:opacity-80 transition-opacity">Новости</a>
              <a href="#services" className="hover:opacity-80 transition-opacity">Услуги</a>
              <a href="#documents" className="hover:opacity-80 transition-opacity">Документы</a>
              <a href="#contacts" className="hover:opacity-80 transition-opacity">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Профессиональное управление вашим домом</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы заботимся о комфорте и безопасности жильцов. Прозрачность, надежность и качество — наши главные принципы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Аварийная служба
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Передать показания
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/c8c82193-b714-4e3a-bfd3-671ec9287262/files/bcfb40f8-6582-42f0-828f-4a59d109a416.jpg" 
                alt="Современный жилой комплекс"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <Card className="bg-accent border-none text-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-white">
                <Icon name="PhoneCall" className="mr-2 text-white" size={28} />
                Срочная диспетчерская служба
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">Работаем круглосуточно без выходных</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-5xl font-bold mb-2">8 (812) 555-0100</p>
                  <p className="text-lg opacity-90">Аварийные ситуации, протечки, отключения</p>
                </div>
                <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить сейчас
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">О нашей компании</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Award" size={40} className="text-accent mb-2" />
                <CardTitle>15+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Профессионально управляем многоквартирными домами с 2010 года
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={40} className="text-accent mb-2" />
                <CardTitle>5000+ жильцов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доверяют нам управление своими домами в Санкт-Петербурге
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="CheckCircle" size={40} className="text-accent mb-2" />
                <CardTitle>100% прозрачность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Полная финансовая отчетность и открытая информация для жильцов
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
              <p className="text-muted-foreground mb-4">
                Создание комфортной и безопасной среды для жизни в многоквартирных домах через профессиональное управление, 
                прозрачность работы и внимательное отношение к каждому жильцу.
              </p>
              <p className="text-muted-foreground">
                Мы используем современные технологии для упрощения взаимодействия с жильцами и повышения качества услуг.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/c8c82193-b714-4e3a-bfd3-671ec9287262/files/adbf1f27-12bb-4289-b6ca-b26554410ea9.jpg" 
                alt="Чистый подъезд"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Новости и объявления</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={item.tag === 'Важно!' ? 'destructive' : 'secondary'}>
                      {item.tag}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                  <Button variant="link" className="px-0 mt-2 text-accent">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Услуги и тарифы</h2>
          
          <Tabs defaultValue="tariffs" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tariffs">Тарифы</TabsTrigger>
              <TabsTrigger value="calculator">Калькулятор</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tariffs">
              <Card>
                <CardHeader>
                  <CardTitle>Актуальные тарифы на 2025 год</CardTitle>
                  <CardDescription>Утверждены протоколом общего собрания от 15.09.2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-xl font-bold text-accent">
                            {service.price} <span className="text-sm text-muted-foreground">{service.unit}</span>
                          </span>
                        </div>
                        {index < services.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="calculator">
              <Card>
                <CardHeader>
                  <CardTitle>Калькулятор коммунальных платежей</CardTitle>
                  <CardDescription>Рассчитайте примерную стоимость услуг</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="area">Площадь квартиры (м²)</Label>
                      <Input id="area" type="number" placeholder="65" />
                    </div>
                    <div>
                      <Label htmlFor="residents">Количество проживающих</Label>
                      <Input id="residents" type="number" placeholder="3" />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Calculator" className="mr-2" size={20} />
                      Рассчитать
                    </Button>
                    <div className="bg-secondary/50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Примерная сумма:</p>
                      <p className="text-3xl font-bold text-accent">8 450 ₽</p>
                      <p className="text-xs text-muted-foreground mt-1">*без учета индивидуального потребления</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Gauge" className="mr-2 text-white" size={24} />
                  Передать показания счетчиков
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="cold" className="text-white/90">Холодная вода (м³)</Label>
                    <Input 
                      id="cold" 
                      type="number" 
                      placeholder="45" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      value={meterReadings.coldWater}
                      onChange={(e) => setMeterReadings({...meterReadings, coldWater: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hot" className="text-white/90">Горячая вода (м³)</Label>
                    <Input 
                      id="hot" 
                      type="number" 
                      placeholder="28" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      value={meterReadings.hotWater}
                      onChange={(e) => setMeterReadings({...meterReadings, hotWater: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="electricity" className="text-white/90">Электричество (кВт·ч)</Label>
                    <Input 
                      id="electricity" 
                      type="number" 
                      placeholder="312" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      value={meterReadings.electricity}
                      onChange={(e) => setMeterReadings({...meterReadings, electricity: e.target.value})}
                    />
                  </div>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90" 
                    size="lg"
                    onClick={handleSubmitReadings}
                  >
                    Отправить показания
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" className="mr-2 text-accent" size={24} />
                  Онлайн оплата
                </CardTitle>
                <CardDescription>Оплатите услуги через интернет-банк</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start h-12" size="lg">
                    <div className="w-6 h-6 bg-green-600 rounded mr-3" />
                    Сбербанк Онлайн
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12" size="lg">
                    <div className="w-6 h-6 bg-yellow-400 rounded mr-3" />
                    Тинькофф
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12" size="lg">
                    <div className="w-6 h-6 bg-blue-600 rounded mr-3" />
                    ВТБ
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12" size="lg">
                    <div className="w-6 h-6 bg-red-600 rounded mr-3" />
                    Альфа-Банк
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="documents" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Документы и отчетность</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Icon name="FileText" size={48} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2">Уставные документы</h3>
                <p className="text-sm text-muted-foreground">Устав, лицензии, свидетельства</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Icon name="LineChart" size={48} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2">Финансовая отчетность</h3>
                <p className="text-sm text-muted-foreground">Годовые и квартальные отчеты</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Icon name="Users" size={48} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2">Протоколы собраний</h3>
                <p className="text-sm text-muted-foreground">Решения общих собраний</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Icon name="ClipboardList" size={48} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2">Договоры</h3>
                <p className="text-sm text-muted-foreground">Договоры на услуги и работы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Дома под нашим управлением</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <Card className="overflow-hidden shadow-xl">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/5">
                  <CardTitle className="flex items-center">
                    <Icon name="Map" className="mr-2 text-accent" size={24} />
                    Интерактивная карта района
                  </CardTitle>
                  <CardDescription>Нажмите на маркер, чтобы увидеть информацию о доме</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e0e0e0" strokeWidth="0.3"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                      
                      <path d="M 10 50 Q 30 40, 50 50 T 90 50" fill="none" stroke="#93c5fd" strokeWidth="2" />
                      <circle cx="15" cy="30" r="3" fill="#86efac" opacity="0.4" />
                      <circle cx="70" cy="65" r="4" fill="#86efac" opacity="0.4" />
                      <circle cx="45" cy="80" r="2.5" fill="#86efac" opacity="0.4" />
                      
                      <TooltipProvider>
                        {houses.map((house, index) => (
                          <Tooltip key={index}>
                            <TooltipTrigger asChild>
                              <g 
                                className="cursor-pointer transition-transform hover:scale-110"
                                onClick={() => setSelectedHouse(index)}
                              >
                                <circle 
                                  cx={house.x} 
                                  cy={house.y} 
                                  r="4" 
                                  fill={selectedHouse === index ? "#ff7e00" : "#0056b3"}
                                  stroke="white"
                                  strokeWidth="0.5"
                                  className="transition-all"
                                />
                                <path
                                  d={`M ${house.x} ${house.y - 4} L ${house.x - 2} ${house.y - 8} L ${house.x + 2} ${house.y - 8} Z`}
                                  fill={selectedHouse === index ? "#ff7e00" : "#0056b3"}
                                  stroke="white"
                                  strokeWidth="0.3"
                                />
                              </g>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="text-sm">
                                <p className="font-bold">{house.address}</p>
                                <p className="text-muted-foreground">{house.residents} жильцов</p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>
                    </svg>
                    
                    {selectedHouse !== null && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <Card className="bg-white/95 backdrop-blur-sm border-accent border-2 animate-fade-in">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Icon name="Building2" className="text-accent" size={32} />
                                <div>
                                  <p className="font-bold text-lg">{houses[selectedHouse].address}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {houses[selectedHouse].residents} жильцов
                                  </p>
                                </div>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => setSelectedHouse(null)}
                              >
                                <Icon name="X" size={20} />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <div className="space-y-3">
                {houses.map((house, index) => (
                  <Card 
                    key={index} 
                    className={`hover:shadow-md transition-all cursor-pointer ${selectedHouse === index ? 'ring-2 ring-accent' : ''}`}
                    onClick={() => setSelectedHouse(index)}
                  >
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="MapPin" className="text-accent" size={24} />
                        <div>
                          <p className="font-medium">{house.address}</p>
                          <p className="text-sm text-muted-foreground">{house.residents} жильцов</p>
                        </div>
                      </div>
                      <Icon name="ChevronRight" className="text-muted-foreground" size={20} />
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg">Всего под управлением</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-bold text-accent">{houses.length}</p>
                      <p className="text-sm text-muted-foreground">домов</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">
                        {houses.reduce((sum, house) => sum + house.residents, 0)}
                      </p>
                      <p className="text-sm text-muted-foreground">жильцов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Контакты и реквизиты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Icon name="MapPin" size={32} className="mb-2" />
                <CardTitle className="text-white">Адрес офиса</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Санкт-Петербург</p>
                <p>пр. Невский, д. 85</p>
                <p className="mt-2 text-sm opacity-80">Пн-Пт: 9:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Icon name="Phone" size={32} className="mb-2" />
                <CardTitle className="text-white">Телефоны</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">8 (812) 555-0100</p>
                <p className="text-sm opacity-80">Диспетчерская (круглосуточно)</p>
                <p className="font-bold text-lg mt-2">8 (812) 555-0101</p>
                <p className="text-sm opacity-80">Бухгалтерия</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Icon name="Mail" size={32} className="mb-2" />
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="break-all">info@nashdom-spb.ru</p>
                <p className="mt-2 break-all text-sm">accounting@nashdom-spb.ru</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">Реквизиты</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="opacity-80">ИНН:</p>
                <p className="font-mono">7800123456</p>
              </div>
              <div>
                <p className="opacity-80">КПП:</p>
                <p className="font-mono">780001001</p>
              </div>
              <div>
                <p className="opacity-80">ОГРН:</p>
                <p className="font-mono">1234567890123</p>
              </div>
              <div>
                <p className="opacity-80">Р/С:</p>
                <p className="font-mono">40702810000000000000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2025 Группа управляющих компаний "НАШ ДОМ". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;