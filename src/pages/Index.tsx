import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/933a7f48-4517-484e-b579-48cc6dc2c64d/bucket/82e6b63c-eb02-4c67-8b21-6398f50c25af.jpg';

const CERTS = [
  { title: 'Сертификат 1', src: HERO_IMG },
  { title: 'Сертификат 2', src: HERO_IMG },
  { title: 'Сертификат 3', src: HERO_IMG },
  { title: 'Сертификат 4', src: HERO_IMG },
];

const archetypes = [
  { icon: 'Sparkles', name: 'Маг', word: 'Трансформация', text: 'Превращаем боль в ресурс. Меняем внутреннюю реальность, чтобы изменилась внешняя.' },
  { icon: 'BookOpen', name: 'Мудрец', word: 'Осознанность', text: 'Ищем истину под слоями привычек и страхов. Понимание как ключ к свободе.' },
  { icon: 'Compass', name: 'Искатель', word: 'Путь', text: 'Сопровождаю вас в путешествии к подлинному «я» — за пределы навязанных ролей.' },
];

const services = [
  { icon: 'User', title: 'Индивидуальная терапия', desc: 'Глубинная работа один на один. Тревога, кризисы, поиск смысла.', price: 'от 5 000 ₽' },
  { icon: 'Moon', title: 'Работа с архетипами', desc: 'Юнгианский подход: исследуем внутренние фигуры вашей психики.', price: 'от 6 000 ₽' },
  { icon: 'Heart', title: 'Терапия отношений', desc: 'Возвращаем близость, учимся слышать себя и партнёра.', price: 'от 7 000 ₽' },
  { icon: 'Video', title: 'Онлайн-консультации', desc: 'Сессии из любой точки мира в защищённом пространстве.', price: 'от 5 000 ₽' },
];

const approach = [
  { num: '01', title: 'Встреча', text: 'Знакомимся, исследуем запрос, создаём безопасное пространство доверия.' },
  { num: '02', title: 'Погружение', text: 'Спускаемся к корням. Распознаём паттерны, теневые стороны, ресурсы.' },
  { num: '03', title: 'Трансформация', text: 'Интегрируем новое понимание. Меняем способ быть в мире.' },
  { num: '04', title: 'Путь', text: 'Вы обретаете внутренний компас и идёте дальше самостоятельно.' },
];

const posts = [
  { tag: 'Архетипы', title: 'Тень как источник силы', date: '12 июня', read: '7 мин' },
  { tag: 'Практика', title: 'Зачем нам внутренний Мудрец', date: '4 июня', read: '5 мин' },
  { tag: 'Размышления', title: 'Искатель: жизнь как путешествие', date: '28 мая', read: '9 мин' },
];

const reviews = [
  { name: 'Анна К.', text: 'Анна помогла мне найти то, что я искала годами. Это не терапия — это возвращение к себе.', role: 'Год в терапии' },
  { name: 'Дмитрий В.', text: 'Глубоко, бережно и при этом честно. Впервые перестал бояться смотреть внутрь себя.', role: '6 месяцев' },
  { name: 'Елена С.', text: 'Работа с архетипами раскрыла меня с неожиданной стороны. Чувствую себя цельной.', role: '8 месяцев' },
];

const navLinks = [
  { id: 'about', label: 'Обо мне' },
  { id: 'services', label: 'Услуги' },
  { id: 'approach', label: 'Подход' },
  { id: 'blog', label: 'Блог' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [certOpen, setCertOpen] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="bg-cosmos min-h-screen text-foreground relative">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container flex items-center justify-between h-[68px]">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <Icon name="Sparkle" className="text-gold animate-spin-slow" size={22} />
            <span className="font-display text-xl tracking-wide">Анна Костюрина</span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                {l.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button onClick={() => scrollTo('contacts')} className="hidden sm:flex bg-primary text-primary-foreground hover:opacity-90 rounded-full px-5">
              Записаться
            </Button>
            <button className="md:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden glass border-t border-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-muted-foreground hover:text-gold">
                {l.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative star-field overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="reveal" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold mb-6">
              <span className="w-8 h-px bg-gold" /> Маг · Мудрец · Искатель
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
              Путь к себе <br />
              <span className="gold-gradient italic">через глубину</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mb-9">
              Психотерапия как алхимия души. Превращаю внутренний хаос в источник силы, мудрости и свободы.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('contacts')} className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-7 h-12 text-base gold-glow">
                Начать путь
              </Button>
              <Button onClick={() => scrollTo('approach')} variant="outline" className="border-gold/40 text-foreground hover:bg-secondary rounded-full px-7 h-12 text-base">
                Мой подход
              </Button>
            </div>
          </div>
          <div className="relative reveal" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-3xl" />
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="Анна Костюрина"
                className="relative rounded-[2rem] w-full object-cover object-top aspect-[4/5] border border-gold/25"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-5 py-3 flex items-center justify-between">
                <div>
                  <div className="font-display text-xl">Анна Костюрина</div>
                  <div className="text-xs text-muted-foreground">Психолог · Архетипный подход</div>
                </div>
                <Icon name="Award" className="text-gold" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHETYPES */}
      <section id="about" className="container py-20 md:py-28">
        <div className="text-center mb-14 reveal">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Три архетипа</p>
          <h2 className="font-display text-4xl md:text-5xl">Энергии, в которых я работаю</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {archetypes.map((a, i) => (
            <div key={a.name} className="glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 reveal" style={{ animationDelay: `${0.1 * i}s` }}>
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 animate-glow-pulse">
                <Icon name={a.icon} className="text-gold" size={26} />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">{a.word}</p>
              <h3 className="font-display text-3xl mb-3">{a.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-3xl mt-12 p-8 md:p-12 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center reveal">
          <div>
            <h3 className="font-display text-3xl md:text-4xl mb-4">Обо мне</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Я — практикующий психолог с 12-летним опытом. Работаю в юнгианском и экзистенциальном подходе,
              помогая людям пройти путь от внутреннего разлада к целостности.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Верю, что в каждом из нас живёт Маг, способный к трансформации, Мудрец, знающий ответы,
              и Искатель, готовый идти. Моя задача — помочь вам услышать их голоса.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['12+', 'лет практики'], ['600+', 'клиентов'], ['3', 'метода терапии'], ['∞', 'возможностей']].map(([n, l]) => (
              <div key={l} className="text-center bg-secondary/50 rounded-2xl py-6">
                <div className="font-display text-4xl gold-gradient">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATES */}
        <div className="mt-14 reveal">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Award" className="text-gold" size={24} />
            <h3 className="font-display text-3xl">Сертификаты и дипломы</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CERTS.map((c, i) => (
              <button
                key={i}
                onClick={() => setCertOpen(i)}
                className="glass rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 text-left"
              >
                <div className="aspect-[3/4] overflow-hidden bg-secondary/50 relative">
                  <img src={c.src} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass rounded-xl px-3 py-2 flex items-center gap-2">
                      <Icon name="ZoomIn" className="text-gold" size={16} />
                      <span className="text-xs text-gold">Открыть</span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm text-muted-foreground">{c.title}</p>
                </div>
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
            <Icon name="Info" size={14} />
            Загрузите реальные фото сертификатов — напишите мне, и я обновлю галерею
          </p>
        </div>
      </section>

      {/* LIGHTBOX */}
      {certOpen !== null && (
        <div className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-lg flex items-center justify-center p-4" onClick={() => setCertOpen(null)}>
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setCertOpen(null)} className="absolute -top-4 -right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-gold z-10">
              <Icon name="X" size={20} />
            </button>
            <img src={CERTS[certOpen].src} alt={CERTS[certOpen].title} className="rounded-2xl w-full border border-gold/20" />
            <p className="text-center text-sm text-muted-foreground mt-4">{CERTS[certOpen].title}</p>
          </div>
        </div>
      )}

      {/* SERVICES */}
      <section id="services" className="container py-20 md:py-28">
        <div className="text-center mb-14 reveal">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Услуги</p>
          <h2 className="font-display text-4xl md:text-5xl">Форматы работы</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="glass rounded-2xl p-7 flex gap-5 transition-all duration-500 hover:-translate-y-1 reveal" style={{ animationDelay: `${0.08 * i}s` }}>
              <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Icon name={s.icon} className="text-gold" size={24} />
              </div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <span className="text-gold text-sm whitespace-nowrap">{s.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="container py-20 md:py-28">
        <div className="text-center mb-14 reveal">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Подход</p>
          <h2 className="font-display text-4xl md:text-5xl">Путь трансформации</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {approach.map((a, i) => (
            <div key={a.num} className="relative reveal" style={{ animationDelay: `${0.1 * i}s` }}>
              <div className="font-display text-6xl gold-gradient mb-4 opacity-80">{a.num}</div>
              <h3 className="font-display text-2xl mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.text}</p>
              {i < approach.length - 1 && (
                <Icon name="ArrowRight" className="hidden md:block absolute top-6 -right-3 text-gold/40" size={20} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="container py-12">
        <div className="relative glass rounded-3xl p-10 md:p-16 text-center overflow-hidden star-field reveal">
          <div className="relative z-10">
            <Icon name="Users" className="text-gold mx-auto mb-5" size={40} />
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Закрытое пространство</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Сообщество Искателей</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Приватный круг для моих клиентов: совместные практики, поддержка, обмен опытом
              и закрытые материалы. Место, где путь становится не таким одиноким.
            </p>
            <Button onClick={() => scrollTo('contacts')} className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-8 h-12 gold-glow">
              Попасть в круг
            </Button>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="container py-20 md:py-28">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Блог</p>
            <h2 className="font-display text-4xl md:text-5xl">Размышления о пути</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={p.title} className="glass rounded-2xl p-7 cursor-pointer transition-all duration-500 hover:-translate-y-2 group reveal" style={{ animationDelay: `${0.1 * i}s` }}>
              <span className="text-xs tracking-wide uppercase text-gold">{p.tag}</span>
              <h3 className="font-display text-2xl mt-3 mb-6 group-hover:text-gold transition-colors">{p.title}</h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Icon name="Calendar" size={14} /> {p.date}</span>
                <span className="flex items-center gap-1"><Icon name="Clock" size={14} /> {p.read}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="container py-20 md:py-28">
        <div className="text-center mb-14 reveal">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Отзывы</p>
          <h2 className="font-display text-4xl md:text-5xl">Голоса прошедших путь</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={r.name} className="glass rounded-2xl p-8 reveal" style={{ animationDelay: `${0.1 * i}s` }}>
              <Icon name="Quote" className="text-gold/50 mb-4" size={30} />
              <p className="text-foreground/90 leading-relaxed italic font-display text-lg mb-6">«{r.text}»</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-gold font-display text-lg">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="container py-20 md:py-28">
        <div className="glass rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-12 reveal">
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Контакты</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Начнём ваш путь</h2>
            <p className="text-muted-foreground mb-8">
              Оставьте заявку — я свяжусь с вами, чтобы договориться о первой встрече.
              Первая консультация — знакомство без обязательств.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'Mail', text: 'hello@kostyurina.ru' },
                { icon: 'Phone', text: '+7 (900) 123-45-67' },
                { icon: 'Send', text: '@kostyurina_psy' },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Icon name={c.icon} className="text-gold" size={18} />
                  </div>
                  {c.text}
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full bg-secondary/60 border border-border rounded-xl px-5 h-12 outline-none focus:border-gold/50 transition-colors" placeholder="Ваше имя" />
            <input className="w-full bg-secondary/60 border border-border rounded-xl px-5 h-12 outline-none focus:border-gold/50 transition-colors" placeholder="Телефон или email" />
            <textarea rows={4} className="w-full bg-secondary/60 border border-border rounded-xl px-5 py-3 outline-none focus:border-gold/50 transition-colors resize-none" placeholder="С каким запросом вы приходите?" />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:opacity-90 rounded-xl h-12 text-base gold-glow">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Sparkle" className="text-gold" size={18} />
            <span className="font-display text-lg">Анна Костюрина</span>
          </div>
          <p>© 2026 · Психолог · Маг · Мудрец · Искатель</p>
        </div>
      </footer>
    </div>
  );
}
