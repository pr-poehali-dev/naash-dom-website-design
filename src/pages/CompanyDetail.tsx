import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { managementCompanies } from '@/data/companies';

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const company = managementCompanies.find(c => c.id === id);
  const [selectedHouse, setSelectedHouse] = useState<number | null>(null);

  if (!company) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Компания не найдена</CardTitle>
            <CardDescription>Управляющая компания с таким ID не существует</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/companies">
              <Button className="w-full">
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Вернуться к списку компаний
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/companies" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              К списку компаний
            </Link>
            <Badge variant="secondary" className="bg-white/20 text-white">
              С {company.foundedYear} года
            </Badge>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
              <p className="text-lg opacity-90">{company.description}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Home" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-accent">{company.houses.length}</p>
                <p className="text-sm text-muted-foreground">домов</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Users" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-accent">
                  {company.houses.reduce((sum, h) => sum + h.residents, 0)}
                </p>
                <p className="text-sm text-muted-foreground">жильцов</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="DoorOpen" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-accent">
                  {company.houses.reduce((sum, h) => sum + h.apartments, 0)}
                </p>
                <p className="text-sm text-muted-foreground">квартир</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Award" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-accent">
                  {new Date().getFullYear() - company.foundedYear}
                </p>
                <p className="text-sm text-muted-foreground">лет опыта</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="info" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="info">Информация</TabsTrigger>
              <TabsTrigger value="houses">Дома</TabsTrigger>
              <TabsTrigger value="tariffs">Тарифы</TabsTrigger>
              <TabsTrigger value="contacts">Контакты</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Briefcase" className="mr-2 text-accent" size={24} />
                      Общая информация
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Директор</p>
                      <p className="font-medium">{company.director}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm text-muted-foreground">Лицензия</p>
                      <p className="font-medium font-mono">{company.licenseNumber}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm text-muted-foreground">Год основания</p>
                      <p className="font-medium">{company.foundedYear}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm text-muted-foreground">Режим работы</p>
                      <p className="font-medium">{company.workingHours}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Wrench" className="mr-2 text-accent" size={24} />
                      Наши услуги
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {company.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="houses" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Дома в управлении</CardTitle>
                  <CardDescription>
                    Всего {company.houses.length} домов, {company.houses.reduce((sum, h) => sum + h.apartments, 0)} квартир
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {company.houses.map((house, index) => (
                      <Card 
                        key={index}
                        className={`hover:shadow-md transition-all cursor-pointer ${selectedHouse === index ? 'ring-2 ring-accent' : ''}`}
                        onClick={() => setSelectedHouse(selectedHouse === index ? null : index)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 flex-1">
                              <Icon name="Building2" className="text-accent" size={24} />
                              <div className="flex-1">
                                <p className="font-medium">{house.address}</p>
                                <div className="flex flex-wrap gap-3 mt-1 text-sm text-muted-foreground">
                                  <span className="flex items-center">
                                    <Icon name="Users" size={14} className="mr-1" />
                                    {house.residents} жильцов
                                  </span>
                                  <span className="flex items-center">
                                    <Icon name="DoorOpen" size={14} className="mr-1" />
                                    {house.apartments} квартир
                                  </span>
                                  <span className="flex items-center">
                                    <Icon name="Layers" size={14} className="mr-1" />
                                    {house.floors} этажей
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Icon 
                              name={selectedHouse === index ? "ChevronUp" : "ChevronDown"} 
                              className="text-muted-foreground" 
                              size={20} 
                            />
                          </div>
                          
                          {selectedHouse === index && (
                            <div className="mt-4 pt-4 border-t animate-fade-in">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-muted-foreground mb-1">Средняя площадь квартиры</p>
                                  <p className="font-medium">65 м²</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground mb-1">Тип дома</p>
                                  <p className="font-medium">Панельный</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground mb-1">Парковка</p>
                                  <p className="font-medium">Гостевая + подземная</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground mb-1">Лифты</p>
                                  <p className="font-medium">2 пассажирских</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tariffs" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Тарифы на услуги</CardTitle>
                  <CardDescription>Актуальные тарифы на 2025 год</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {company.tariffs.map((tariff, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{tariff.name}</span>
                          <span className="text-2xl font-bold text-accent">
                            {tariff.price} <span className="text-sm text-muted-foreground">{tariff.unit}</span>
                          </span>
                        </div>
                        {index < company.tariffs.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Info" size={16} className="inline mr-1" />
                      Тарифы утверждены общим собранием собственников и действуют с 01.01.2025
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contacts" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="MapPin" className="mr-2 text-accent" size={24} />
                      Адрес офиса
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-lg">{company.address}</p>
                    <Separator />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Режим работы</p>
                      <p className="font-medium">{company.workingHours}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Phone" className="mr-2 text-accent" size={24} />
                      Контакты
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                      <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-lg font-bold text-accent hover:opacity-80">
                        {company.phone}
                      </a>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href={`mailto:${company.email}`} className="font-medium text-accent hover:opacity-80">
                        {company.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="FileText" className="mr-2 text-accent" size={24} />
                      Реквизиты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">ИНН</p>
                        <p className="font-mono font-medium">{company.inn}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">КПП</p>
                        <p className="font-mono font-medium">{company.kpp}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ОГРН</p>
                        <p className="font-mono font-medium">{company.ogrn}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Расчетный счет</p>
                        <p className="font-mono font-medium">{company.bankAccount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <Card className="bg-accent border-none text-white shadow-2xl max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-white">
                <Icon name="PhoneCall" className="mr-2 text-white" size={28} />
                Круглосуточная диспетчерская служба
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                При аварийных ситуациях звоните немедленно
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-5xl font-bold mb-2">{company.phone}</p>
                  <p className="text-lg opacity-90">Работаем 24/7 без выходных</p>
                </div>
                <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2025 {company.name}. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CompanyDetail;
