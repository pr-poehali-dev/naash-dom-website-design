import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { getTotalStats } from '@/data/companies';

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
    },
    {
      id: 4,
      title: 'Благоустройство придомовой территории',
      date: '18 октября 2025',
      tag: 'Ремонт',
      excerpt: 'Начаты работы по озеленению и обновлению детских площадок во дворах домов на пр. Мира.'
    },
    {
      id: 5,
      title: 'График уборки снега',
      date: '15 октября 2025',
      tag: 'Важно!',
      excerpt: 'Утверждён график зимней уборки территории. Все подробности в разделе документов.'
    },
    {
      id: 6,
      title: 'Итоги собрания жильцов',
      date: '10 октября 2025',
      tag: 'Собрание',
      excerpt: 'Опубликованы протоколы последнего общего собрания. Приняты решения по капитальному ремонту.'
    }
  ];

  const [newsFilter, setNewsFilter] = useState('Все');
  const allTags = ['Все', ...Array.from(new Set(news.map(item => item.tag)))];
  const filteredNews = newsFilter === 'Все' 
    ? news 
    : news.filter(item => item.tag === newsFilter);

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const [requestForm, setRequestForm] = useState({
    name: '',
    phone: '',
    address: '',
    category: '',
    description: ''
  });

  const handleSubmitRequest = () => {
    if (!requestForm.name || !requestForm.phone || !requestForm.category) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }
    
    console.log('Request submitted:', requestForm);
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.'
    });
    
    setRequestForm({
      name: '',
      phone: '',
      address: '',
      category: '',
      description: ''
    });
  };

  const menuItems = [
    { href: '#about', label: 'О компании', icon: 'Building' },
    { href: '#news', label: 'Новости', icon: 'Newspaper' },
    { href: '#services', label: 'Услуги', icon: 'Briefcase' },
    { href: '#documents', label: 'Документы', icon: 'FileText' },
    { href: '#contacts', label: 'Контакты', icon: 'Phone' }
  ];

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
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden text-white hover:bg-white/20"
                >
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <Icon name="Building2" size={24} className="text-accent" />
                    <span>НАШ ДОМ</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-1 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Icon name={item.icon} size={20} className="text-accent" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  ))}
                </nav>
                <Separator className="my-6" />
                <div className="space-y-3">
                  <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Аварийная служба
                  </Button>
                  <div className="bg-secondary/50 p-4 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Круглосуточно</p>
                    <p className="text-xl font-bold text-accent">8 (812) 555-0100</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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
          <h2 className="text-3xl font-bold mb-8 text-center">О группе компаний</h2>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Группа управляющих компаний "НАШ ДОМ" объединяет {getTotalStats().totalCompanies} профессиональные УК, 
              обслуживающие {getTotalStats().totalHouses} домов и {getTotalStats().totalResidents.toLocaleString()} жильцов по всему Санкт-Петербургу.
            </p>
            <Link to="/companies">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Building2" className="mr-2" size={20} />
                Посмотреть все компании группы
              </Button>
            </Link>
          </div>

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
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={newsFilter === tag ? 'default' : 'outline'}
                size="sm"
                onClick={() => setNewsFilter(tag)}
                className={newsFilter === tag ? 'bg-accent hover:bg-accent/90' : ''}
              >
                {tag === 'Важно!' && <Icon name="AlertCircle" className="mr-1" size={16} />}
                {tag === 'Ремонт' && <Icon name="Wrench" className="mr-1" size={16} />}
                {tag === 'Собрание' && <Icon name="Users" className="mr-1" size={16} />}
                {tag === 'Все' && <Icon name="Grid3x3" className="mr-1" size={16} />}
                {tag}
                {tag !== 'Все' && (
                  <Badge variant="secondary" className="ml-2 px-1.5 py-0 text-xs">
                    {news.filter(item => item.tag === tag).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow animate-fade-in">
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

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <Icon name="FileSearch" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">Новостей в этой категории пока нет</p>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Показано: <span className="font-bold text-accent">{filteredNews.length}</span> из {news.length} новостей
            </p>
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

      <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Оставить заявку</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="MessageSquare" className="mr-2 text-accent" size={28} />
                  Форма обратной связи
                </CardTitle>
                <CardDescription className="text-base">
                  Оставьте заявку, и мы свяжемся с вами в течение 1 часа
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="req-name">ФИО *</Label>
                      <Input
                        id="req-name"
                        placeholder="Иванов Иван Иванович"
                        value={requestForm.name}
                        onChange={(e) => setRequestForm({...requestForm, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="req-phone">Телефон *</Label>
                      <Input
                        id="req-phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={requestForm.phone}
                        onChange={(e) => setRequestForm({...requestForm, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="req-address">Адрес квартиры</Label>
                      <Input
                        id="req-address"
                        placeholder="ул. Ленина, 12, кв. 45"
                        value={requestForm.address}
                        onChange={(e) => setRequestForm({...requestForm, address: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="req-category">Категория заявки *</Label>
                      <Select
                        value={requestForm.category}
                        onValueChange={(value) => setRequestForm({...requestForm, category: value})}
                      >
                        <SelectTrigger id="req-category">
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="repair">Аварийный ремонт</SelectItem>
                          <SelectItem value="maintenance">Плановое обслуживание</SelectItem>
                          <SelectItem value="cleaning">Уборка и благоустройство</SelectItem>
                          <SelectItem value="utilities">Коммунальные услуги</SelectItem>
                          <SelectItem value="documents">Документы и справки</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-full flex flex-col">
                      <Label htmlFor="req-description">Описание проблемы</Label>
                      <Textarea
                        id="req-description"
                        placeholder="Опишите подробно вашу заявку..."
                        className="flex-1 min-h-[200px] resize-none"
                        value={requestForm.description}
                        onChange={(e) => setRequestForm({...requestForm, description: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-accent hover:bg-accent/90" 
                    size="lg"
                    onClick={handleSubmitRequest}
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setRequestForm({
                      name: '',
                      phone: '',
                      address: '',
                      category: '',
                      description: ''
                    })}
                  >
                    <Icon name="RotateCcw" className="mr-2" size={20} />
                    Очистить
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" className="text-accent mt-0.5" size={20} />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium mb-1">Важно знать:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Среднее время обработки заявки — 1 час</li>
                        <li>Аварийные ситуации — звоните 8 (812) 555-0100</li>
                        <li>Мы работаем ежедневно с 9:00 до 21:00</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
        <Toaster />
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