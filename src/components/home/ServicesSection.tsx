import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import FadeIn from '@/components/ui/fade-in';

export default function ServicesSection() {
  const services = [
    { name: 'Содержание и ремонт', price: '25.50', unit: 'руб/м²' },
    { name: 'Холодное водоснабжение', price: '38.20', unit: 'руб/м³' },
    { name: 'Горячее водоснабжение', price: '142.80', unit: 'руб/м³' },
    { name: 'Отопление', price: '2150.00', unit: 'руб/Гкал' }
  ];

  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Услуги и тарифы</h2>
            <p className="text-muted-foreground">Полный перечень наших услуг</p>
          </div>
          <Icon name="Briefcase" size={48} className="text-accent opacity-20" />
        </div>
        </FadeIn>

        <Tabs defaultValue="tariffs" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="tariffs">Тарифы</TabsTrigger>
            <TabsTrigger value="services-list">Наши услуги</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tariffs" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-accent mb-1">{service.price}</p>
                    <p className="text-sm text-muted-foreground">{service.unit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="services-list" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="Wrench" size={32} className="text-accent mb-2" />
                  <CardTitle>Техническое обслуживание</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Аварийно-диспетчерская служба 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Плановое обслуживание инженерных систем</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Ремонт и замена оборудования</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Обслуживание лифтов</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Sparkles" size={32} className="text-accent mb-2" />
                  <CardTitle>Благоустройство</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Уборка подъездов и придомовой территории</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Вывоз мусора и ТБО</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Озеленение территории</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Уход за детскими и спортивными площадками</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="FileText" size={32} className="text-accent mb-2" />
                  <CardTitle>Административные услуги</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Управление общедомовым имуществом</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Расчет и начисление платежей</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Организация собраний собственников</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Консультации и информационная поддержка</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Shield" size={32} className="text-accent mb-2" />
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Видеонаблюдение и контроль доступа</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Обслуживание домофонов</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Пожарная безопасность</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="mr-2 text-accent mt-1 flex-shrink-0" size={16} />
                      <span>Охранные системы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}