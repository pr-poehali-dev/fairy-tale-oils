import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const oils = [
    {
      name: 'Лавандовый сон',
      description: 'Масло лаванды для спокойствия и гармонии',
      properties: 'Успокаивает нервную систему, улучшает сон, снимает стресс',
      story: 'Как цветы в саду Иды, лаванда дарит покой и сладкие сны',
      icon: 'Flower2'
    },
    {
      name: 'Розовая нежность',
      description: 'Масло розы для красоты и молодости',
      properties: 'Омолаживает кожу, питает, разглаживает морщины',
      story: 'Роза - королева цветов, хранящая секреты вечной красоты',
      icon: 'Flower'
    },
    {
      name: 'Жасминовое волшебство',
      description: 'Масло жасмина для радости и любви',
      properties: 'Поднимает настроение, афродизиак, освежает',
      story: 'Жасмин распускается в лунном свете, даря магию и счастье',
      icon: 'Sparkles'
    },
    {
      name: 'Мятная свежесть',
      description: 'Масло мяты для бодрости и ясности',
      properties: 'Освежает, тонизирует, улучшает концентрацию',
      story: 'Мята растет у источника жизни, даря силы и энергию',
      icon: 'Leaf'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-accent/10 to-secondary/10">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-primary">
              Цветы Иды
            </h1>
            <div className="flex gap-2 md:gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`px-3 md:px-4 py-2 rounded-full transition-all ${
                  activeSection === 'home'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-primary/10'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`px-3 md:px-4 py-2 rounded-full transition-all ${
                  activeSection === 'about'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-primary/10'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => setActiveSection('properties')}
                className={`px-3 md:px-4 py-2 rounded-full transition-all ${
                  activeSection === 'properties'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-primary/10'
                }`}
              >
                Свойства
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="animate-fade-in">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 animate-scale-in">
                Волшебные масла из сказки
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
                Каждое масло — это цветок из волшебного сада, где когда-то гуляла маленькая Ида. 
                Они хранят древние секреты красоты и здоровья, передающиеся из поколения в поколение.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {oils.map((oil, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform animate-float">
                      <Icon name={oil.icon} size={36} className="text-primary" />
                    </div>
                    <CardTitle className="font-display text-xl">{oil.name}</CardTitle>
                    <CardDescription className="font-body">{oil.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground italic font-body text-center">
                      "{oil.story}"
                    </p>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90 rounded-full">
                      Узнать больше
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-lg font-display"
              >
                <Icon name="ShoppingBag" className="mr-2" size={20} />
                Заказать масла
              </Button>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="animate-fade-in">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 text-center">
                История нашего сада
              </h2>
              
              <Card className="mb-8 border-primary/20 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed font-body text-foreground mb-6">
                      Давным-давно, в далеком королевстве, жила маленькая девочка по имени Ида. 
                      Однажды она узнала удивительную тайну: ночью, когда все спят, цветы в её саду 
                      оживают и устраивают бал.
                    </p>
                    
                    <div className="bg-accent/20 rounded-2xl p-6 md:p-8 mb-6 border-2 border-accent/30">
                      <p className="text-base leading-relaxed font-body text-foreground italic">
                        Розы танцевали в лунном свете, лаванда пела колыбельные, жасмин рассказывал 
                        истории о любви, а мята освежала воздух своим дыханием. Каждый цветок обладал 
                        особым даром и делился им с теми, кто верил в волшебство.
                      </p>
                    </div>
                    
                    <p className="text-lg leading-relaxed font-body text-foreground mb-6">
                      Мы создали наши масла по древним рецептам, которые хранила бабушка Иды. 
                      Каждая капля наполнена магией того самого сада, где цветы танцуют под луной 
                      и дарят людям свои чудесные свойства.
                    </p>
                    
                    <div className="flex items-center justify-center gap-8 mt-8">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="Sparkles" size={32} className="text-primary" />
                        </div>
                        <p className="font-display text-sm">100% натуральные</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="Heart" size={32} className="text-primary" />
                        </div>
                        <p className="font-display text-sm">С любовью</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="Leaf" size={32} className="text-primary" />
                        </div>
                        <p className="font-display text-sm">Экологичные</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'properties' && (
        <section className="animate-fade-in">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">
              Магические свойства масел
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {oils.map((oil, index) => (
                <Card 
                  key={index} 
                  className="border-primary/20 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={oil.icon} size={32} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-display text-2xl mb-2">{oil.name}</CardTitle>
                        <CardDescription className="font-body text-base">{oil.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-accent/10 rounded-xl p-6 mb-4">
                      <h4 className="font-display font-semibold mb-3 text-lg">Целебные свойства:</h4>
                      <p className="font-body text-foreground leading-relaxed">{oil.properties}</p>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-6">
                      <h4 className="font-display font-semibold mb-3 text-lg flex items-center gap-2">
                        <Icon name="BookOpen" size={20} />
                        Из сказки:
                      </h4>
                      <p className="font-body text-foreground italic leading-relaxed">"{oil.story}"</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-full">
                        Купить масло
                      </Button>
                      <Button variant="outline" className="flex-1 border-primary/30 rounded-full hover:bg-primary/5">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-primary/5 border-t border-primary/20 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-xl mb-4 text-primary">Цветы Иды</h3>
              <p className="font-body text-muted-foreground">
                Волшебные масла из сказочного сада
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Контакты</h4>
              <p className="font-body text-muted-foreground mb-2">info@ida-flowers.ru</p>
              <p className="font-body text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <Icon name="Instagram" size={20} className="text-primary" />
                </button>
                <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <Icon name="Facebook" size={20} className="text-primary" />
                </button>
                <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-primary" />
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-primary/20">
            <p className="font-body text-sm text-muted-foreground">
              © 2024 Цветы Иды. Создано с любовью и волшебством ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
