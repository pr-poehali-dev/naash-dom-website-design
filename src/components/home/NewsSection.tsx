import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function NewsSection() {
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

  return (
    <section id="news" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Новости и объявления</h2>
            <p className="text-muted-foreground">Актуальная информация для жильцов</p>
          </div>
          <Icon name="Newspaper" size={48} className="text-accent opacity-20" />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={newsFilter === tag ? 'default' : 'outline'}
              size="sm"
              onClick={() => setNewsFilter(tag)}
              className={newsFilter === tag ? 'bg-accent hover:bg-accent/90' : ''}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{item.tag}</Badge>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{item.excerpt}</CardDescription>
                <Button variant="link" className="mt-4 p-0 text-accent">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
