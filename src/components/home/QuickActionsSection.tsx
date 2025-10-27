import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import FadeIn from '@/components/ui/fade-in';

export default function QuickActionsSection() {
  const { toast } = useToast();
  const [meterReadings, setMeterReadings] = useState({
    coldWater: '',
    hotWater: '',
    electricity: ''
  });

  const [requestForm, setRequestForm] = useState({
    name: '',
    phone: '',
    address: '',
    category: '',
    description: ''
  });

  const handleSubmitReadings = () => {
    console.log('Submitted readings:', meterReadings);
  };

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

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">Быстрые действия</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Gauge" className="mr-2 text-accent" />
                Передать показания счётчиков
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="coldWater">Холодная вода (м³)</Label>
                <Input 
                  id="coldWater" 
                  type="number" 
                  placeholder="0000"
                  value={meterReadings.coldWater}
                  onChange={(e) => setMeterReadings({...meterReadings, coldWater: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="hotWater">Горячая вода (м³)</Label>
                <Input 
                  id="hotWater" 
                  type="number" 
                  placeholder="0000"
                  value={meterReadings.hotWater}
                  onChange={(e) => setMeterReadings({...meterReadings, hotWater: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="electricity">Электричество (кВт⋅ч)</Label>
                <Input 
                  id="electricity" 
                  type="number" 
                  placeholder="0000"
                  value={meterReadings.electricity}
                  onChange={(e) => setMeterReadings({...meterReadings, electricity: e.target.value})}
                />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90" onClick={handleSubmitReadings}>
                Отправить показания
              </Button>
            </CardContent>
          </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="AlertCircle" className="mr-2 text-accent" />
                Оставить заявку
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="request-name">Ваше имя *</Label>
                <Input 
                  id="request-name" 
                  placeholder="Иван Иванов"
                  value={requestForm.name}
                  onChange={(e) => setRequestForm({...requestForm, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="request-phone">Телефон *</Label>
                <Input 
                  id="request-phone" 
                  placeholder="+7 (999) 123-45-67"
                  value={requestForm.phone}
                  onChange={(e) => setRequestForm({...requestForm, phone: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="request-address">Адрес</Label>
                <Input 
                  id="request-address" 
                  placeholder="ул. Ленина, д. 12, кв. 34"
                  value={requestForm.address}
                  onChange={(e) => setRequestForm({...requestForm, address: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="request-category">Категория *</Label>
                <Select value={requestForm.category} onValueChange={(value) => setRequestForm({...requestForm, category: value})}>
                  <SelectTrigger id="request-category">
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="repair">Ремонт</SelectItem>
                    <SelectItem value="plumbing">Сантехника</SelectItem>
                    <SelectItem value="electricity">Электрика</SelectItem>
                    <SelectItem value="heating">Отопление</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="request-description">Описание проблемы</Label>
                <Textarea 
                  id="request-description" 
                  placeholder="Опишите проблему..."
                  value={requestForm.description}
                  onChange={(e) => setRequestForm({...requestForm, description: e.target.value})}
                />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90" onClick={handleSubmitRequest}>
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}