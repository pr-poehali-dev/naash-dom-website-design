import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
                Аварийная служба 24/7
              </Button>
              <Link to="/companies">
                <Button size="lg" variant="outline">
                  Наши компании
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Icon name="Clock" size={40} className="text-accent mb-3" />
              <h3 className="font-bold text-xl mb-2">24/7</h3>
              <p className="text-sm text-muted-foreground">Диспетчерская служба</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Icon name="Users" size={40} className="text-accent mb-3" />
              <h3 className="font-bold text-xl mb-2">5000+</h3>
              <p className="text-sm text-muted-foreground">Довольных жильцов</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Icon name="Home" size={40} className="text-accent mb-3" />
              <h3 className="font-bold text-xl mb-2">50+</h3>
              <p className="text-sm text-muted-foreground">Домов под управлением</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Icon name="Award" size={40} className="text-accent mb-3" />
              <h3 className="font-bold text-xl mb-2">15 лет</h3>
              <p className="text-sm text-muted-foreground">Опыта работы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
