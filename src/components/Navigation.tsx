import { Page } from "@/App";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { id: Page; label: string; icon: string; emoji: string }[] = [
  { id: "home", label: "Главная", icon: "Home", emoji: "🏠" },
  { id: "cartoons", label: "Мультсериалы", icon: "Film", emoji: "🎬" },
  { id: "tv", label: "ТВ-каналы", icon: "Tv", emoji: "📺" },
];

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10"
      style={{ background: "rgba(15, 8, 35, 0.92)" }}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-2xl bor-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
            <span className="text-white font-rubik font-black text-lg leading-none">Б</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-rubik font-black text-xl text-white tracking-tight">БОР</span>
            <span className="text-xs text-bor-yellow font-semibold tracking-wide" style={{ fontSize: "9px" }}>КИНОТЕАТР</span>
          </div>
        </button>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                currentPage === item.id
                  ? "nav-item-active shadow-lg scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="hidden sm:block">{item.emoji}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Search button */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white">
          <Icon name="Search" size={18} />
          <span className="hidden sm:block text-sm font-semibold">Поиск</span>
        </button>
      </div>
    </header>
  );
}
