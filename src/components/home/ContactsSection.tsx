import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import FadeIn from '@/components/ui/fade-in';

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Контакты</h2>
            <p className="text-muted-foreground">Мы всегда на связи</p>
          </div>
          <Icon name="Phone" size={48} className="text-accent opacity-20" />
        </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="Phone" size={32} className="text-accent mb-2" />
              <CardTitle>Телефон</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold mb-2">8 (812) 555-0100</p>
              <p className="text-sm text-muted-foreground mb-3">Аварийная служба 24/7</p>
              <Button className="w-full bg-accent hover:bg-accent/90">
                <Icon name="Phone" className="mr-2" size={16} />
                Позвонить
              </Button>
            </CardContent>
          </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="Mail" size={32} className="text-accent mb-2" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold mb-2">info@nashdom-spb.ru</p>
              <p className="text-sm text-muted-foreground mb-3">Ответим в течение 24 часов</p>
              <Button className="w-full" variant="outline">
                <Icon name="Mail" className="mr-2" size={16} />
                Написать
              </Button>
            </CardContent>
          </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="MapPin" size={32} className="text-accent mb-2" />
              <CardTitle>Адрес офиса</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold mb-2">Санкт-Петербург</p>
              <p className="text-sm text-muted-foreground mb-3">пр. Невский, д. 85, офис 301</p>
              <Button className="w-full" variant="outline">
                <Icon name="MapPin" className="mr-2" size={16} />
                На карте
              </Button>
            </CardContent>
          </Card>
          </FadeIn>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-accent/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Режим работы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <Icon name="Clock" size={48} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Офис</h3>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-muted-foreground">Сб: 10:00 - 15:00</p>
              </div>
              <div>
                <Icon name="AlertCircle" size={48} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Аварийная служба</h3>
                <p className="text-muted-foreground">Круглосуточно, без выходных</p>
                <p className="text-xl font-bold text-accent mt-2">24/7</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}