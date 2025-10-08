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
      icon: 'Flower2',
      gradient: 'from-purple-200 via-purple-100 to-pink-100',
      image: 'https://images.unsplash.com/photo-1611251157398-e81a7c4e6b4d?w=400&h=400&fit=crop'
    },
    {
      name: 'Розовая нежность',
      description: 'Масло розы для красоты и молодости',
      properties: 'Омолаживает кожу, питает, разглаживает морщины',
      story: 'Роза - королева цветов, хранящая секреты вечной красоты',
      icon: 'Flower',
      gradient: 'from-pink-200 via-rose-100 to-orange-100',
      image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&h=400&fit=crop'
    },
    {
      name: 'Жасминовое волшебство',
      description: 'Масло жасмина для радости и любви',
      properties: 'Поднимает настроение, афродизиак, освежает',
      story: 'Жасмин распускается в лунном свете, даря магию и счастье',
      icon: 'Sparkles',
      gradient: 'from-yellow-100 via-amber-50 to-orange-100',
      image: 'https://images.unsplash.com/photo-1615282642825-bbe8a4c6e4fb?w=400&h=400&fit=crop'
    },
    {
      name: 'Мятная свежесть',
      description: 'Масло мяты для бодрости и ясности',
      properties: 'Освежает, тонизирует, улучшает концентрацию',
      story: 'Мята растет у источника жизни, даря силы и энергию',
      icon: 'Leaf',
      gradient: 'from-green-200 via-emerald-100 to-teal-100',
      image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&h=400&fit=crop'
    },
    {
      name: 'Эвкалиптовое дыхание',
      description: 'Масло эвкалипта для легкости и здоровья',
      properties: 'Очищает дыхательные пути, антисептик, укрепляет иммунитет',
      story: 'Эвкалипт — хранитель чистого воздуха и здорового дыхания',
      icon: 'Wind',
      gradient: 'from-teal-200 via-cyan-100 to-blue-100',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop'
    },
    {
      name: 'Лимонная радость',
      description: 'Масло лимона для энергии и оптимизма',
      properties: 'Тонизирует, очищает, поднимает настроение',
      story: 'Лимон дарит солнечный свет даже в пасмурный день',
      icon: 'Sun',
      gradient: 'from-yellow-200 via-yellow-100 to-lime-100',
      image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&h=400&fit=crop'
    },
    {
      name: 'Иланг-иланг мечты',
      description: 'Масло иланг-иланга для страсти и романтики',
      properties: 'Афродизиак, снимает тревогу, пробуждает чувства',
      story: 'Иланг-иланг цветет в райском саду, где рождаются мечты',
      icon: 'Heart',
      gradient: 'from-violet-200 via-fuchsia-100 to-pink-100',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=400&fit=crop'
    },
    {
      name: 'Чайное дерево защиты',
      description: 'Масло чайного дерева для очищения',
      properties: 'Антибактериальное, заживляет, защищает кожу',
      story: 'Чайное дерево — страж здоровья и чистоты',
      icon: 'Shield',
      gradient: 'from-emerald-200 via-green-100 to-lime-100',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&h=400&fit=crop'
    },
    {
      name: 'Герань гармонии',
      description: 'Масло герани для баланса и красоты',
      properties: 'Балансирует гормоны, улучшает состояние кожи, успокаивает',
      story: 'Герань цветет на подоконнике Иды, охраняя дом от печали',
      icon: 'Flower',
      gradient: 'from-rose-200 via-pink-100 to-red-100',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop'
    },
    {
      name: 'Пачули тайны',
      description: 'Масло пачули для глубины и чувственности',
      properties: 'Афродизиак, успокаивает, улучшает настроение',
      story: 'Пачули хранит древние тайны восточных садов',
      icon: 'Moon',
      gradient: 'from-amber-200 via-orange-100 to-yellow-100',
      image: 'https://images.unsplash.com/photo-1508062878650-88b52897f298?w=400&h=400&fit=crop'
    },
    {
      name: 'Сандал умиротворения',
      description: 'Масло сандала для медитации и покоя',
      properties: 'Успокаивает ум, способствует медитации, афродизиак',
      story: 'Сандал растет в священных рощах, где время течет медленно',
      icon: 'TreePine',
      gradient: 'from-stone-200 via-neutral-100 to-amber-100',
      image: 'https://images.unsplash.com/photo-1615361200098-e7d309f6e6f7?w=400&h=400&fit=crop'
    },
    {
      name: 'Ромашка нежности',
      description: 'Масло ромашки для детей и чувствительной кожи',
      properties: 'Успокаивает кожу, снимает раздражение, помогает при бессоннице',
      story: 'Ромашка — самый добрый цветок в саду Иды',
      icon: 'Sun',
      gradient: 'from-yellow-100 via-amber-50 to-white',
      image: 'https://images.unsplash.com/photo-1563136865-def69f663c0b?w=400&h=400&fit=crop'
    },
    {
      name: 'Бергамот счастья',
      description: 'Масло бергамота для радости и уверенности',
      properties: 'Антидепрессант, тонизирует, поднимает настроение',
      story: 'Бергамот дарит солнечную радость даже в хмурые дни',
      icon: 'Sparkles',
      gradient: 'from-lime-200 via-green-100 to-yellow-100',
      image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&h=400&fit=crop'
    },
    {
      name: 'Нероли благодати',
      description: 'Масло нероли для умиротворения души',
      properties: 'Снимает стресс, афродизиак, улучшает сон',
      story: 'Нероли — цветок апельсинового дерева, аромат невест',
      icon: 'Cherry',
      gradient: 'from-orange-100 via-peach-50 to-white',
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=400&fit=crop'
    },
    {
      name: 'Кедр силы',
      description: 'Масло кедра для уверенности и защиты',
      properties: 'Укрепляет нервную систему, антисептик, заземляет',
      story: 'Кедр — могучее дерево, дарящее силу и стойкость',
      icon: 'TreePine',
      gradient: 'from-green-300 via-teal-100 to-emerald-100',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=400&fit=crop'
    },
    {
      name: 'Корица огня',
      description: 'Масло корицы для тепла и страсти',
      properties: 'Согревает, афродизиак, тонизирует, улучшает кровообращение',
      story: 'Корица — пряный огонь, разжигающий страсть и жизненную силу',
      icon: 'Flame',
      gradient: 'from-red-200 via-orange-100 to-amber-100',
      image: 'https://images.unsplash.com/photo-1627662235549-e8c2e2c22b09?w=400&h=400&fit=crop'
    },
    {
      name: 'Грейпфрут бодрости',
      description: 'Масло грейпфрута для энергии и стройности',
      properties: 'Тонизирует, помогает похудеть, освежает',
      story: 'Грейпфрут дарит утреннюю бодрость и легкость',
      icon: 'Zap',
      gradient: 'from-pink-200 via-orange-100 to-yellow-100',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop'
    },
    {
      name: 'Можжевельник очищения',
      description: 'Масло можжевельника для детокса',
      properties: 'Очищает организм, выводит токсины, дезинфицирует',
      story: 'Можжевельник — хранитель чистоты тела и духа',
      icon: 'Droplets',
      gradient: 'from-blue-200 via-teal-100 to-green-100',
      image: 'https://images.unsplash.com/photo-1542396601-dca920ea2807?w=400&h=400&fit=crop'
    },
    {
      name: 'Пихта леса',
      description: 'Масло пихты для дыхания и иммунитета',
      properties: 'Помогает при простуде, очищает воздух, укрепляет иммунитет',
      story: 'Пихта приносит свежесть дремучего леса в ваш дом',
      icon: 'TreePine',
      gradient: 'from-emerald-200 via-green-100 to-teal-100',
      image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=400&h=400&fit=crop'
    },
    {
      name: 'Ветивер заземления',
      description: 'Масло ветивера для стабильности',
      properties: 'Заземляет, успокаивает, помогает при стрессе',
      story: 'Ветивер уходит корнями глубоко в землю, даря устойчивость',
      icon: 'Anchor',
      gradient: 'from-stone-300 via-neutral-200 to-slate-100',
      image: 'https://images.unsplash.com/photo-1591018653367-1fe170ab6dae?w=400&h=400&fit=crop'
    },
    {
      name: 'Базилик ясности',
      description: 'Масло базилика для концентрации',
      properties: 'Улучшает память, снимает усталость, проясняет ум',
      story: 'Базилик рос на кухне Иды, даря ясность мыслей',
      icon: 'Brain',
      gradient: 'from-green-200 via-lime-100 to-yellow-100',
      image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&h=400&fit=crop'
    },
    {
      name: 'Фенхель пищеварения',
      description: 'Масло фенхеля для здорового живота',
      properties: 'Улучшает пищеварение, снимает спазмы, очищает',
      story: 'Фенхель — друг желудка и помощник в очищении',
      icon: 'Soup',
      gradient: 'from-lime-200 via-green-100 to-emerald-100',
      image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&h=400&fit=crop'
    },
    {
      name: 'Мелисса утешения',
      description: 'Масло мелиссы для сердца и нервов',
      properties: 'Успокаивает сердце, снимает тревогу, помогает при депрессии',
      story: 'Мелисса — лимонный бальзам для усталой души',
      icon: 'HeartPulse',
      gradient: 'from-yellow-100 via-lime-50 to-green-100',
      image: 'https://images.unsplash.com/photo-1609126448414-d30924652979?w=400&h=400&fit=crop'
    },
    {
      name: 'Шалфей мудрости',
      description: 'Масло шалфея для женского здоровья',
      properties: 'Балансирует гормоны, антисептик, снимает воспаления',
      story: 'Шалфей — мудрый целитель женских недугов',
      icon: 'BookOpen',
      gradient: 'from-purple-200 via-violet-100 to-indigo-100',
      image: 'https://images.unsplash.com/photo-1629375925753-5c6d64f7eed1?w=400&h=400&fit=crop'
    },
    {
      name: 'Тимьян храбрости',
      description: 'Масло тимьяна для силы духа',
      properties: 'Укрепляет иммунитет, антисептик, придает бодрость',
      story: 'Тимьян дарит храбрость и стойкость в трудные времена',
      icon: 'Sword',
      gradient: 'from-red-200 via-pink-100 to-purple-100',
      image: 'https://images.unsplash.com/photo-1612363148424-f7d4f2c10665?w=400&h=400&fit=crop'
    },
    {
      name: 'Майоран покоя',
      description: 'Масло майорана для глубокого расслабления',
      properties: 'Снимает мышечное напряжение, успокаивает, помогает уснуть',
      story: 'Майоран убаюкивает и дарит глубокий покой',
      icon: 'BedDouble',
      gradient: 'from-gray-200 via-slate-100 to-zinc-100',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop'
    },
    {
      name: 'Петитгрейн обновления',
      description: 'Масло петитгрейна для свежести',
      properties: 'Освежает, снимает стресс, тонизирует кожу',
      story: 'Петитгрейн — молодые листья апельсина, символ обновления',
      icon: 'RefreshCw',
      gradient: 'from-green-200 via-lime-100 to-yellow-100',
      image: 'https://images.unsplash.com/photo-1613647116129-13dc7f665c4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Мирра священная',
      description: 'Масло мирры для духовности',
      properties: 'Заживляет, антисептик, способствует медитации',
      story: 'Мирра — священная смола, дар древних королей',
      icon: 'Church',
      gradient: 'from-amber-300 via-orange-200 to-red-100',
      image: 'https://images.unsplash.com/photo-1604600659542-f7035a4a9c1d?w=400&h=400&fit=crop'
    },
    {
      name: 'Ладан молитвы',
      description: 'Масло ладана для возвышения души',
      properties: 'Успокаивает, способствует медитации, омолаживает кожу',
      story: 'Ладан возносит молитвы к небесам',
      icon: 'Flame',
      gradient: 'from-sky-200 via-blue-100 to-indigo-100',
      image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=400&h=400&fit=crop'
    },
    {
      name: 'Розмарин памяти',
      description: 'Масло розмарина для ясного ума',
      properties: 'Улучшает память, стимулирует кровообращение, бодрит',
      story: 'Розмарин — символ памяти и верности',
      icon: 'Library',
      gradient: 'from-teal-200 via-cyan-100 to-blue-100',
      image: 'https://images.unsplash.com/photo-1595850759747-0bb2c87ef1fa?w=400&h=400&fit=crop'
    },
    {
      name: 'Гвоздика страсти',
      description: 'Масло гвоздики для огня и силы',
      properties: 'Согревает, обезболивает, афродизиак, антисептик',
      story: 'Гвоздика — пряный огонь страсти и силы',
      icon: 'Sparkle',
      gradient: 'from-red-300 via-rose-200 to-pink-100',
      image: 'https://images.unsplash.com/photo-1632053002308-0e3fde544f3e?w=400&h=400&fit=crop'
    },
    {
      name: 'Имбирь тепла',
      description: 'Масло имбиря для согревания',
      properties: 'Согревает, улучшает пищеварение, снимает тошноту',
      story: 'Имбирь дарит согревающее тепло и жизненную силу',
      icon: 'Thermometer',
      gradient: 'from-orange-300 via-amber-200 to-yellow-100',
      image: 'https://images.unsplash.com/photo-1599912027162-c5b8f5935edd?w=400&h=400&fit=crop'
    },
    {
      name: 'Мандарин детства',
      description: 'Масло мандарина для радости и игры',
      properties: 'Успокаивает детей, поднимает настроение, помогает уснуть',
      story: 'Мандарин пахнет новогодним праздником и детской радостью',
      icon: 'Baby',
      gradient: 'from-orange-200 via-yellow-100 to-amber-100',
      image: 'https://images.unsplash.com/photo-1587049332474-5405800f57de?w=400&h=400&fit=crop'
    },
    {
      name: 'Ваниль сладости',
      description: 'Масло ванили для уюта и комфорта',
      properties: 'Успокаивает, афродизиак, создает уют',
      story: 'Ваниль — сладкий аромат домашнего тепла',
      icon: 'Home',
      gradient: 'from-amber-100 via-yellow-50 to-orange-50',
      image: 'https://images.unsplash.com/photo-1596040704871-aba8e72403e3?w=400&h=400&fit=crop'
    },
    {
      name: 'Кипарис вечности',
      description: 'Масло кипариса для принятия перемен',
      properties: 'Помогает при переходных периодах, успокаивает, укрепляет',
      story: 'Кипарис — дерево вечности, помогающее отпустить прошлое',
      icon: 'Hourglass',
      gradient: 'from-emerald-300 via-teal-200 to-cyan-100',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop'
    },
    {
      name: 'Нард преданности',
      description: 'Масло нарда для верности',
      properties: 'Успокаивает, помогает при бессоннице, афродизиак',
      story: 'Нард — древнее масло преданности и верности',
      icon: 'Infinity',
      gradient: 'from-purple-300 via-violet-200 to-pink-100',
      image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=400&h=400&fit=crop'
    },
    {
      name: 'Апельсин радости',
      description: 'Масло апельсина для хорошего настроения',
      properties: 'Поднимает настроение, снимает тревогу, освежает',
      story: 'Апельсин — солнечный фрукт, дарящий радость',
      icon: 'Smile',
      gradient: 'from-orange-300 via-yellow-200 to-amber-100',
      image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400&h=400&fit=crop'
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
              <button
                onClick={() => setActiveSection('recipes')}
                className={`px-3 md:px-4 py-2 rounded-full transition-all ${
                  activeSection === 'recipes'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-primary/10'
                }`}
              >
                Рецепты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="animate-fade-in">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1464320099070-750c1c08f7e1?w=1600&h=900&fit=crop"
                alt="Волшебные цветы"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative container mx-auto px-4 py-24 md:py-32">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 animate-scale-in drop-shadow-sm">
                  Волшебные масла из сказки
                </h2>
                <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed drop-shadow-sm">
                  Каждое масло — это цветок из волшебного сада, где когда-то гуляла маленькая Ида. 
                  Они хранят древние секреты красоты и здоровья, передающиеся из поколения в поколение.
                </p>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {oils.map((oil, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 overflow-hidden bg-white"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`h-48 bg-gradient-to-br ${oil.gradient} relative overflow-hidden`}>
                    <img 
                      src={oil.image} 
                      alt={oil.name}
                      className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg animate-float">
                      <Icon name={oil.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <CardHeader className="text-center pt-8">
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
              
              <div className="mb-8 relative overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=600&fit=crop"
                  alt="Сказочный сад"
                  className="w-full h-64 md:h-80 object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              </div>

              <Card className="mb-8 border-primary/20 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed font-body text-foreground mb-6">
                      Давным-давно, в далеком королевстве, жила маленькая девочка по имени Ида. 
                      В полнолуние она случайно заглянула в окно и увидела невероятное: цветы в её саду 
                      ожили и устроили таинственный бал под серебристым светом луны.
                    </p>
                    
                    <div className="bg-accent/20 rounded-2xl p-6 md:p-8 mb-6 border-2 border-accent/30 relative">
                      <div className="absolute top-4 right-4 opacity-20">
                        <Icon name="Moon" size={48} className="text-primary" />
                      </div>
                      <p className="text-base leading-relaxed font-body text-foreground italic mb-4">
                        Розы в алых платьях кружились в вальсе с загадочными тенями, лаванда пела 
                        колыбельные о забытых временах, жасмин шептал истории запретной любви... 
                        А в центре сада, окутанная лунным сиянием, стояла Королева Цветов.
                      </p>
                      <p className="text-base leading-relaxed font-body text-foreground italic">
                        Она открыла Иде великую тайну: каждый цветок хранит в себе частицу древней магии 
                        и дарит её тем, кто способен видеть красоту сердцем. Но эту тайну нельзя было 
                        рассказывать никому... кроме тех, кто сам готов поверить в чудеса.
                      </p>
                    </div>
                    
                    <p className="text-lg leading-relaxed font-body text-foreground mb-6">
                      Спустя много лет, когда Ида стала взрослой, она встретила таинственного 
                      странника, который знал секреты её сада. Он научил её собирать эссенцию цветов 
                      под светом полной луны, сохраняя их волшебные свойства в драгоценных маслах.
                    </p>
                    
                    <p className="text-lg leading-relaxed font-body text-foreground mb-6">
                      Говорят, что в каждой капле нашего масла живёт дух того самого сада — 
                      загадочный, романтичный, наполненный древней магией. И если вы закроете глаза, 
                      вы сможете услышать музыку ночного бала и почувствовать прикосновение лунного света...
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

      {activeSection === 'recipes' && (
        <section className="animate-fade-in">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-center">
              Волшебные рецепты
            </h2>
            <p className="text-center text-lg text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
              Создайте домашнюю косметику, которую использовала сама Ида и её бабушка
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Icon name="Sparkles" size={24} className="text-purple-600" />
                    </div>
                    <CardTitle className="font-display text-2xl">Ночной крем красоты</CardTitle>
                  </div>
                  <CardDescription className="font-body text-base">Для молодости и сияния кожи</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-accent/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Package" size={18} />
                        Ингредиенты:
                      </h4>
                      <ul className="space-y-2 font-body text-sm">
                        <li>• 2 ст.л. масла ши</li>
                        <li>• 1 ст.л. масла жожоба</li>
                        <li>• 3 капли масла розы</li>
                        <li>• 2 капли масла лаванды</li>
                        <li>• 1 капля масла нероли</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Wand2" size={18} />
                        Приготовление:
                      </h4>
                      <ol className="space-y-2 font-body text-sm list-decimal list-inside">
                        <li>Растопите масло ши на водяной бане</li>
                        <li>Добавьте масло жожоба, перемешайте</li>
                        <li>Остудите до комнатной температуры</li>
                        <li>Добавьте эфирные масла</li>
                        <li>Взбейте миксером до кремовой текстуры</li>
                      </ol>
                    </div>
                    <p className="text-xs italic text-muted-foreground font-body">
                      ✨ Наносите на лицо перед сном, как делала Королева Цветов
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon name="Droplets" size={24} className="text-green-600" />
                    </div>
                    <CardTitle className="font-display text-2xl">Масло для массажа</CardTitle>
                  </div>
                  <CardDescription className="font-body text-base">Расслабляющее и романтичное</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-accent/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Package" size={18} />
                        Ингредиенты:
                      </h4>
                      <ul className="space-y-2 font-body text-sm">
                        <li>• 50 мл миндального масла</li>
                        <li>• 4 капли масла иланг-иланга</li>
                        <li>• 3 капли масла сандала</li>
                        <li>• 2 капли масла жасмина</li>
                        <li>• 1 капля масла пачули</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Wand2" size={18} />
                        Приготовление:
                      </h4>
                      <ol className="space-y-2 font-body text-sm list-decimal list-inside">
                        <li>Налейте миндальное масло в тёмную бутылку</li>
                        <li>Добавьте эфирные масла по порядку</li>
                        <li>Плотно закройте и встряхните</li>
                        <li>Оставьте на сутки для созревания</li>
                      </ol>
                    </div>
                    <p className="text-xs italic text-muted-foreground font-body">
                      ✨ Идеально для романтического вечера при свечах
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Icon name="Sun" size={24} className="text-yellow-600" />
                    </div>
                    <CardTitle className="font-display text-2xl">Скраб для тела</CardTitle>
                  </div>
                  <CardDescription className="font-body text-base">Освежающий и тонизирующий</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-accent/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Package" size={18} />
                        Ингредиенты:
                      </h4>
                      <ul className="space-y-2 font-body text-sm">
                        <li>• 1 стакан морской соли</li>
                        <li>• 1/2 стакана оливкового масла</li>
                        <li>• 5 капель масла грейпфрута</li>
                        <li>• 3 капли масла лимона</li>
                        <li>• 2 капли масла мяты</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Wand2" size={18} />
                        Приготовление:
                      </h4>
                      <ol className="space-y-2 font-body text-sm list-decimal list-inside">
                        <li>Смешайте соль и оливковое масло</li>
                        <li>Добавьте эфирные масла</li>
                        <li>Тщательно перемешайте</li>
                        <li>Храните в стеклянной банке</li>
                      </ol>
                    </div>
                    <p className="text-xs italic text-muted-foreground font-body">
                      ✨ Используйте 2-3 раза в неделю для гладкой кожи
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Icon name="Heart" size={24} className="text-pink-600" />
                    </div>
                    <CardTitle className="font-display text-2xl">Бальзам для губ</CardTitle>
                  </div>
                  <CardDescription className="font-body text-base">Питательный и ароматный</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-accent/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Package" size={18} />
                        Ингредиенты:
                      </h4>
                      <ul className="space-y-2 font-body text-sm">
                        <li>• 1 ст.л. пчелиного воска</li>
                        <li>• 2 ст.л. масла кокоса</li>
                        <li>• 1 ст.л. масла какао</li>
                        <li>• 2 капли масла мяты</li>
                        <li>• 1 капля масла ванили</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Wand2" size={18} />
                        Приготовление:
                      </h4>
                      <ol className="space-y-2 font-body text-sm list-decimal list-inside">
                        <li>Растопите воск и масла на водяной бане</li>
                        <li>Снимите с огня и остудите немного</li>
                        <li>Добавьте эфирные масла</li>
                        <li>Разлейте по баночкам</li>
                        <li>Дайте застыть 2-3 часа</li>
                      </ol>
                    </div>
                    <p className="text-xs italic text-muted-foreground font-body">
                      ✨ Секрет нежных губ Иды круглый год
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Icon name="Bath" size={24} className="text-blue-600" />
                    </div>
                    <CardTitle className="font-display text-2xl">Соль для ванны</CardTitle>
                  </div>
                  <CardDescription className="font-body text-base">Для релаксации и сна</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-accent/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Package" size={18} />
                        Ингредиенты:
                      </h4>
                      <ul className="space-y-2 font-body text-sm">
                        <li>• 2 стакана морской соли</li>
                        <li>• 1/2 стакана английской соли</li>
                        <li>• 8 капель масла лаванды</li>
                        <li>• 4 капли масла ромашки</li>
                        <li>• 2 капли масла майорана</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Wand2" size={18} />
                        Приготовление:
                      </h4>
                      <ol className="space-y-2 font-body text-sm list-decimal list-inside">
                        <li>Смешайте оба вида соли в миске</li>
                        <li>Добавьте эфирные масла по каплям</li>
                        <li>Тщательно перемешайте ложкой</li>
                        <li>Храните в герметичной банке</li>
                      </ol>
                    </div>
                    <p className="text-xs italic text-muted-foreground font-body">
                      ✨ Добавьте 3-4 ст.л. в тёплую ванну перед сном
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <Icon name="Waves" size={24} className="text-teal-600" />
                    </div>
                    <CardTitle className="font-display text-2xl">Масло для волос</CardTitle>
                  </div>
                  <CardDescription className="font-body text-base">Для блеска и укрепления</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-accent/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Package" size={18} />
                        Ингредиенты:
                      </h4>
                      <ul className="space-y-2 font-body text-sm">
                        <li>• 30 мл масла арганы</li>
                        <li>• 20 мл масла кокоса</li>
                        <li>• 4 капли масла розмарина</li>
                        <li>• 3 капли масла кедра</li>
                        <li>• 2 капли масла иланг-иланга</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-4">
                      <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Wand2" size={18} />
                        Приготовление:
                      </h4>
                      <ol className="space-y-2 font-body text-sm list-decimal list-inside">
                        <li>Смешайте базовые масла во флаконе</li>
                        <li>Добавьте эфирные масла</li>
                        <li>Встряхните перед каждым использованием</li>
                        <li>Нанесите на влажные волосы на 30 минут</li>
                      </ol>
                    </div>
                    <p className="text-xs italic text-muted-foreground font-body">
                      ✨ Волосы Иды сияли благодаря этому рецепту
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="AlertCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-3">Важные советы</h3>
                      <ul className="space-y-2 font-body text-sm text-muted-foreground">
                        <li>• Всегда делайте тест на аллергию перед применением</li>
                        <li>• Храните косметику в тёмном прохладном месте</li>
                        <li>• Используйте только качественные эфирные масла</li>
                        <li>• Беременным и детям проконсультируйтесь с врачом</li>
                        <li>• Срок хранения домашней косметики — 1-2 месяца</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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