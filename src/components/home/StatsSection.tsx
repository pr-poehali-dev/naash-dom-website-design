import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FadeIn from '@/components/ui/fade-in';

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ГРУППА УПРАВЛЯЮЩИХ КОМПАНИЙ "НАШ ДОМ"</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Группа управляющих компаний, оказывающая услуги по управлению многоквартирными домами 
              в Санкт-Петербурге и Ленинградской области
            </p>
            <Link to="/companies">
              <Button size="lg" className="mt-6 bg-accent hover:bg-accent/90">
                <Icon name="Building2" className="mr-2" size={20} />
                Посмотреть все компании группы
              </Button>
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <FadeIn delay={0.1}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Maximize2" size={40} className="text-accent mb-2" />
                <CardTitle className="text-3xl font-bold text-accent">1 млн м²</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Обслуживаемой площади
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Building2" size={40} className="text-accent mb-2" />
                <CardTitle className="text-3xl font-bold text-accent">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Многоквартирных домов
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Car" size={40} className="text-accent mb-2" />
                <CardTitle className="text-3xl font-bold text-accent">13</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Паркингов в управлении
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Award" size={40} className="text-accent mb-2" />
                <CardTitle className="text-3xl font-bold text-accent">18 лет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Оказываем услуги нашим жильцам
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}