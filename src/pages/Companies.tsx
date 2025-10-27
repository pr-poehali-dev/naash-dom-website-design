import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { managementCompanies, getTotalStats } from '@/data/companies';

const Companies = () => {
  const stats = getTotalStats();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            На главную
          </Link>
          <h1 className="text-4xl font-bold mb-3">Управляющие компании группы</h1>
          <p className="text-lg opacity-90">Профессиональное управление недвижимостью в Санкт-Петербурге</p>
        </div>
      </header>

      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Building2" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-accent">{stats.totalCompanies}</p>
                <p className="text-sm text-muted-foreground">управляющих компаний</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Home" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-accent">{stats.totalHouses}</p>
                <p className="text-sm text-muted-foreground">домов в управлении</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Users" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-accent">{stats.totalResidents.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">жильцов</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="DoorOpen" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-accent">{stats.totalApartments}</p>
                <p className="text-sm text-muted-foreground">квартир</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши управляющие компании</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {managementCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{company.shortName}</CardTitle>
                      <CardDescription className="text-sm">{company.name}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {company.foundedYear}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {company.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Icon name="Home" size={16} className="text-accent mr-2" />
                      <span className="font-medium">{company.houses.length} домов</span>
                      <span className="text-muted-foreground ml-1">
                        ({company.houses.reduce((sum, h) => sum + h.residents, 0)} жильцов)
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="MapPin" size={16} className="text-accent mr-2" />
                      <span className="text-muted-foreground line-clamp-1">{company.address}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Phone" size={16} className="text-accent mr-2" />
                      <span className="font-medium">{company.phone}</span>
                    </div>
                  </div>

                  <Link to={`/company/${company.id}`}>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Преимущества группы компаний "НАШ ДОМ"</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={24} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Надёжность</h3>
                    <p className="text-sm text-muted-foreground">
                      Все компании группы имеют действующие лицензии и полное страхование
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={24} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Оперативность</h3>
                    <p className="text-sm text-muted-foreground">
                      Аварийные службы работают 24/7 во всех районах присутствия
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="LineChart" size={24} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Прозрачность</h3>
                    <p className="text-sm text-muted-foreground">
                      Полная финансовая отчётность доступна онлайн для всех жильцов
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Award" size={24} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Опыт</h3>
                    <p className="text-sm text-muted-foreground">
                      Более 15 лет на рынке управления многоквартирными домами
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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

export default Companies;
