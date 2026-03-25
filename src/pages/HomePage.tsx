import { Page } from "@/App";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HERO_IMG = "https://cdn.poehali.dev/projects/543c59fa-71e8-40f5-b000-34f0bec8d2ed/files/683663e1-228d-408e-a832-f1375e104d2d.jpg";
const GEROY_IMG = "https://cdn.poehali.dev/projects/543c59fa-71e8-40f5-b000-34f0bec8d2ed/files/c52317d4-776b-4501-998a-9582d1594c74.jpg";
const UM_IMG = "https://cdn.poehali.dev/projects/543c59fa-71e8-40f5-b000-34f0bec8d2ed/files/fa423388-1a4a-4bd0-b557-fe88a5dba033.jpg";

const featured = [
  {
    id: 1,
    title: "Геройчики",
    subtitle: "2 сезона • 26 серий • 0+",
    desc: "Игрушки мальчика Ромы живут своей тайной жизнью и всегда готовы помочь!",
    img: GEROY_IMG,
    color: "from-purple-600 to-pink-500",
    badge: "🦸 Супергерои",
    page: "cartoons" as Page,
  },
  {
    id: 2,
    title: "Ум и Хрум",
    subtitle: "4 сезона • 13 серий • 0+",
    desc: "Весёлые приключения двух неразлучных друзей в каждой серии!",
    img: UM_IMG,
    color: "from-orange-500 to-yellow-400",
    badge: "😄 Комедия",
    page: "cartoons" as Page,
  },
];

const stats = [
  { icon: "Film", value: "2", label: "Мультсериала", color: "text-bor-purple", bg: "bg-bor-purple/20" },
  { icon: "Tv", value: "20 000", label: "ТВ-каналов", color: "text-bor-cyan", bg: "bg-bor-cyan/20" },
  { icon: "Baby", value: "20 000", label: "Детских каналов", color: "text-bor-pink", bg: "bg-bor-pink/20" },
  { icon: "Star", value: "0+", label: "Для малышей", color: "text-bor-yellow", bg: "bg-bor-yellow/20" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(80,20,160,0.9) 0%, rgba(200,40,120,0.7) 50%, rgba(15,8,35,0.95) 100%)"
          }}
        />
        {/* Floating decorations */}
        <div className="absolute top-16 right-20 text-5xl bounce-slow opacity-60">⭐</div>
        <div className="absolute top-32 right-48 text-3xl wiggle opacity-50">🎉</div>
        <div className="absolute bottom-20 right-32 text-4xl float opacity-40">🚀</div>
        <div className="absolute top-20 left-1/2 text-2xl bounce-slow opacity-30" style={{ animationDelay: "1s" }}>🌈</div>

        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bor-yellow/20 border border-bor-yellow/40 text-bor-yellow font-bold text-sm mb-6">
              <span>✨</span>
              <span>Добро пожаловать в кинотеатр БОР!</span>
            </div>
            <h1 className="font-rubik font-black text-5xl md:text-7xl text-white leading-tight mb-4">
              Смотри <span className="text-bor-yellow">любимые</span>
              <br />
              <span className="bor-gradient bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                мультики!
              </span>
            </h1>
            <p className="text-white/80 text-lg font-semibold mb-8 max-w-md">
              Мультсериалы, тысячи ТВ-каналов и программа передач на сегодня — всё в одном месте!
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate("cartoons")}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-rubik font-bold text-base text-background shadow-xl hover:scale-105 transition-all duration-200"
                style={{ background: "linear-gradient(135deg, hsl(45,100%,55%), hsl(25,100%,60%))" }}
              >
                <Icon name="Play" size={20} />
                Смотреть мультики
              </button>
              <button
                onClick={() => onNavigate("tv")}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-rubik font-bold text-base text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                <Icon name="Tv" size={20} />
                ТВ-каналы
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-3xl p-5 flex flex-col items-center text-center card-glow transition-all duration-300`}>
              <div className={`${stat.color} mb-2`}>
                <Icon name={stat.icon} size={28} fallback="Star" />
              </div>
              <div className={`font-rubik font-black text-2xl ${stat.color}`}>{stat.value}</div>
              <div className="text-white/70 text-sm font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cartoons */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-rubik font-black text-2xl text-white flex items-center gap-2">
            🎬 <span>Мультсериалы</span>
          </h2>
          <button
            onClick={() => onNavigate("cartoons")}
            className="text-bor-yellow font-bold text-sm hover:text-bor-orange transition-colors flex items-center gap-1"
          >
            Все сериалы
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.page)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer card-glow transition-all duration-300"
              style={{ minHeight: "280px" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-bold mb-3">
                  {item.badge}
                </span>
                <h3 className="font-rubik font-black text-3xl text-white mb-1">{item.title}</h3>
                <p className="text-bor-yellow font-bold text-sm mb-2">{item.subtitle}</p>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Play" size={20} className="text-white ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TV promo */}
      <section className="container mx-auto px-4 py-6 pb-16">
        <div
          className="rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, hsl(var(--bor-cyan)/0.3), hsl(var(--bor-purple)/0.3))", border: "1px solid rgba(0,200,180,0.3)" }}
        >
          <div className="absolute top-4 right-8 text-4xl float opacity-30">📡</div>
          <div className="absolute bottom-4 right-20 text-3xl bounce-slow opacity-20">🌐</div>
          <div>
            <h2 className="font-rubik font-black text-3xl text-white mb-2">
              📺 20 000 ТВ-каналов
            </h2>
            <p className="text-white/70 font-semibold text-base max-w-md">
              Включая 20 000 детских каналов со всего мира. Программа передач на сегодня — прямо сейчас!
            </p>
          </div>
          <button
            onClick={() => onNavigate("tv")}
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-2xl font-rubik font-bold text-base text-background hover:scale-105 transition-all duration-200 shadow-xl"
            style={{ background: "linear-gradient(135deg, hsl(var(--bor-cyan)), hsl(var(--bor-green)))" }}
          >
            <Icon name="Tv" size={20} />
            Смотреть ТВ
          </button>
        </div>
      </section>
    </div>
  );
}