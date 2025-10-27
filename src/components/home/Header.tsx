import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface MenuItem {
  href: string;
  label: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { href: '#about', label: 'О компании', icon: 'Building' },
  { href: '#news', label: 'Новости', icon: 'Newspaper' },
  { href: '#services', label: 'Услуги', icon: 'Briefcase' },
  { href: '#documents', label: 'Документы', icon: 'FileText' },
  { href: '#contacts', label: 'Контакты', icon: 'Phone' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
  );
}
