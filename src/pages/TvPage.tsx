import { useState } from "react";
import Icon from "@/components/ui/icon";

type TvTab = "all" | "kids";

const ALL_CHANNELS = [
  { id: 1, name: "Первый канал", category: "Новости", emoji: "📰", color: "bg-blue-600" },
  { id: 2, name: "Россия 1", category: "Развлечения", emoji: "🎭", color: "bg-red-600" },
  { id: 3, name: "НТВ", category: "Новости", emoji: "📡", color: "bg-green-600" },
  { id: 4, name: "ТНТ", category: "Развлечения", emoji: "😂", color: "bg-yellow-500" },
  { id: 5, name: "СТС", category: "Сериалы", emoji: "🎬", color: "bg-orange-500" },
  { id: 6, name: "РЕН ТВ", category: "Документальные", emoji: "🔍", color: "bg-purple-600" },
  { id: 7, name: "Пятый канал", category: "Новости", emoji: "5️⃣", color: "bg-indigo-600" },
  { id: 8, name: "Звезда", category: "Документальные", emoji: "⭐", color: "bg-slate-600" },
  { id: 9, name: "Матч ТВ", category: "Спорт", emoji: "⚽", color: "bg-lime-600" },
  { id: 10, name: "Россия-Культура", category: "Культура", emoji: "🎨", color: "bg-rose-600" },
  { id: 11, name: "Домашний", category: "Семейный", emoji: "🏡", color: "bg-pink-500" },
  { id: 12, name: "Пятница!", category: "Развлечения", emoji: "🎉", color: "bg-cyan-500" },
];

const KIDS_CHANNELS = [
  { id: 101, name: "Карусель", category: "Мультики", emoji: "🎠", color: "bg-yellow-500" },
  { id: 102, name: "Мульт", category: "Мультики", emoji: "🎨", color: "bg-orange-500" },
  { id: 103, name: "Disney", category: "Детские", emoji: "🏰", color: "bg-blue-500" },
  { id: 104, name: "Nickelodeon", category: "Детские", emoji: "🟠", color: "bg-orange-400" },
  { id: 105, name: "Cartoon Network", category: "Мультики", emoji: "📺", color: "bg-purple-500" },
  { id: 106, name: "Телепузики", category: "Малыши", emoji: "🧸", color: "bg-green-500" },
  { id: 107, name: "Детский мир", category: "Малыши", emoji: "🌍", color: "bg-teal-500" },
  { id: 108, name: "Мир детей", category: "Детские", emoji: "👶", color: "bg-pink-500" },
  { id: 109, name: "Super Toons", category: "Мультики", emoji: "🦸", color: "bg-red-500" },
  { id: 110, name: "BabyTV", category: "Малыши", emoji: "🍼", color: "bg-cyan-500" },
  { id: 111, name: "Jim Jam", category: "Малыши", emoji: "🎵", color: "bg-lime-500" },
  { id: 112, name: "Duck TV", category: "Малыши", emoji: "🦆", color: "bg-yellow-400" },
];

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const timeStr = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

function generateSchedule(channelName: string) {
  const shows = [
    ["Утреннее шоу", "Новости"],
    ["Кино для всей семьи", "Сериал"],
    ["Дневные новости", "Программа"],
    ["Ток-шоу", "Развлечение"],
    ["Вечерний эфир", "Новости"],
    ["Художественный фильм", "Кино"],
    ["Ночная программа", "Шоу"],
  ];
  const slots = [];
  let h = 6;
  for (let i = 0; i < 7; i++) {
    const show = shows[i % shows.length];
    const isNow = h <= hours && h + 2 > hours;
    slots.push({
      time: `${h.toString().padStart(2, "0")}:00`,
      title: show[0],
      genre: show[1],
      isNow,
      duration: "2 ч",
    });
    h += 2;
  }
  return slots;
}

function generateKidsSchedule(channelName: string) {
  const shows = [
    ["Синий трактор", "Мультик"],
    ["Маша и Медведь", "Мультфильм"],
    ["Фиксики", "Познавательный"],
    ["Смешарики", "Мультик"],
    ["Лунтик", "Мультфильм"],
    ["Барбоскины", "Мультик"],
    ["Три кота", "Мультфильм"],
  ];
  const slots = [];
  let h = 7;
  for (let i = 0; i < 7; i++) {
    const show = shows[i % shows.length];
    const isNow = h <= hours && h + 2 > hours;
    slots.push({
      time: `${h.toString().padStart(2, "0")}:00`,
      title: show[0],
      genre: show[1],
      isNow,
      duration: "2 ч",
    });
    h += 2;
  }
  return slots;
}

export default function TvPage() {
  const [activeTab, setActiveTab] = useState<TvTab>("all");
  const [selectedChannel, setSelectedChannel] = useState<(typeof ALL_CHANNELS)[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const channels = activeTab === "all" ? ALL_CHANNELS : KIDS_CHANNELS;
  const totalCount = activeTab === "all" ? "20 000" : "20 000";

  const filteredChannels = channels.filter(
    (ch) =>
      ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedChannel) {
    const schedule =
      activeTab === "kids"
        ? generateKidsSchedule(selectedChannel.name)
        : generateSchedule(selectedChannel.name);

    return (
      <div className="animate-fade-in">
        <div className="bg-card border-b border-border px-4 py-4">
          <div className="container mx-auto">
            <button
              onClick={() => setSelectedChannel(null)}
              className="flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors mb-4"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад к каналам
            </button>
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl ${selectedChannel.color} flex items-center justify-center text-3xl shadow-lg`}>
                {selectedChannel.emoji}
              </div>
              <div>
                <h1 className="font-rubik font-black text-3xl text-white">{selectedChannel.name}</h1>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-white/60 font-semibold text-sm">{selectedChannel.category}</span>
                  <span className="flex items-center gap-1 text-bor-green font-bold text-sm">
                    <span className="w-2 h-2 rounded-full bg-bor-green inline-block"></span>
                    В эфире
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-rubik font-bold text-xl text-white">📋 Программа на сегодня</h2>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-bor-yellow/10 border border-bor-yellow/30">
              <Icon name="Clock" size={16} className="text-bor-yellow" />
              <span className="text-bor-yellow font-bold text-sm">{timeStr} сейчас</span>
            </div>
          </div>

          <div className="space-y-3">
            {schedule.map((slot, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-4 flex items-center gap-4 border transition-all duration-200 ${
                  slot.isNow
                    ? "bg-bor-yellow/10 border-bor-yellow/40 shadow-lg"
                    : "bg-card border-border hover:border-border/80"
                }`}
              >
                <div className={`w-16 text-center font-rubik font-bold text-sm ${slot.isNow ? "text-bor-yellow" : "text-white/50"}`}>
                  {slot.time}
                </div>
                {slot.isNow && (
                  <div className="w-2 h-2 rounded-full bg-bor-yellow animate-pulse shrink-0" />
                )}
                <div className="flex-1">
                  <div className={`font-rubik font-bold text-base ${slot.isNow ? "text-white" : "text-white/80"}`}>
                    {slot.title}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-white/40 text-xs font-semibold">{slot.genre}</span>
                    <span className="text-white/30 text-xs">•</span>
                    <span className="text-white/40 text-xs font-semibold">{slot.duration}</span>
                  </div>
                </div>
                {slot.isNow && (
                  <span className="px-3 py-1 rounded-full bg-bor-yellow text-background text-xs font-bold shrink-0">
                    СЕЙЧАС
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-muted/50 border border-border p-5 text-center">
            <p className="text-white/40 font-semibold text-sm">
              Показаны примерные данные. Точная программа канала появится после настройки трансляции.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-rubik font-black text-4xl text-white mb-2">📺 ТВ-каналы</h1>
        <p className="text-white/60 font-semibold">
          Более <span className="text-bor-yellow font-bold">20 000</span> каналов по всему миру
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-5">
        <button
          onClick={() => { setActiveTab("all"); setSelectedChannel(null); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-rubik font-bold text-sm transition-all duration-200 ${
            activeTab === "all"
              ? "bg-bor-yellow text-background shadow-lg"
              : "bg-card text-white/70 hover:text-white border border-border"
          }`}
        >
          🌐 Все каналы
          <span className={`px-2 py-0.5 rounded-full text-xs font-black ${activeTab === "all" ? "bg-background/20 text-background" : "bg-muted text-white/50"}`}>
            20K
          </span>
        </button>
        <button
          onClick={() => { setActiveTab("kids"); setSelectedChannel(null); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-rubik font-bold text-sm transition-all duration-200 ${
            activeTab === "kids"
              ? "bg-bor-pink text-white shadow-lg"
              : "bg-card text-white/70 hover:text-white border border-border"
          }`}
        >
          👶 Детские
          <span className={`px-2 py-0.5 rounded-full text-xs font-black ${activeTab === "kids" ? "bg-white/20 text-white" : "bg-muted text-white/50"}`}>
            20K
          </span>
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
        <input
          type="text"
          placeholder="Найти канал..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-card border border-border rounded-2xl pl-11 pr-4 py-3 text-white font-semibold placeholder:text-white/30 outline-none focus:border-bor-yellow/50 transition-colors"
        />
      </div>

      {/* Channel grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
        {filteredChannels.map((channel) => (
          <div
            key={channel.id}
            onClick={() => setSelectedChannel(channel)}
            className="group rounded-2xl bg-card border border-border p-4 flex flex-col items-center text-center cursor-pointer hover:border-bor-yellow/40 card-glow transition-all duration-200"
          >
            <div className={`w-12 h-12 rounded-2xl ${channel.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
              {channel.emoji}
            </div>
            <div className="text-white font-rubik font-bold text-sm leading-tight mb-1">{channel.name}</div>
            <div className="text-white/40 text-xs font-semibold">{channel.category}</div>
            <div className="mt-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-bor-green animate-pulse"></span>
              <span className="text-bor-green text-xs font-bold">В эфире</span>
            </div>
          </div>
        ))}
      </div>

      {/* Load more hint */}
      <div className="rounded-3xl p-8 text-center border border-border/50 bg-card">
        <div className="text-5xl mb-3">📡</div>
        <h3 className="font-rubik font-bold text-xl text-white mb-2">
          + ещё {activeTab === "all" ? "19 988" : "19 988"} каналов
        </h3>
        <p className="text-white/50 font-semibold text-sm mb-4">
          Показаны популярные каналы. Полный каталог {totalCount} каналов с программой передач будет доступен после подключения трансляций.
        </p>
        <button className="px-6 py-3 rounded-2xl font-rubik font-bold text-sm text-background"
          style={{ background: "linear-gradient(135deg, hsl(var(--bor-yellow)), hsl(var(--bor-orange)))" }}
        >
          Загрузить ещё
        </button>
      </div>
    </div>
  );
}
