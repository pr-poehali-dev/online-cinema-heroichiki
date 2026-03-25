import { useState } from "react";
import Icon from "@/components/ui/icon";

const GEROY_IMG = "https://cdn.poehali.dev/projects/543c59fa-71e8-40f5-b000-34f0bec8d2ed/files/c52317d4-776b-4501-998a-9582d1594c74.jpg";
const UM_IMG = "https://cdn.poehali.dev/projects/543c59fa-71e8-40f5-b000-34f0bec8d2ed/files/fa423388-1a4a-4bd0-b557-fe88a5dba033.jpg";

const SERIES = [
  {
    id: 1,
    title: "Геройчики",
    rating: "0+",
    seasons: 2,
    totalEpisodes: 26,
    img: GEROY_IMG,
    color: "from-purple-700 to-pink-600",
    accentColor: "bor-pink",
    badge: "🦸",
    desc: "Мальчик Рома очень любит играть, поэтому в его комнате полным-полно разных игрушек. Кого здесь только нет: и загадочный пушистый инопланетянин Бублик, и отважный петух-тянучка Ко-Ко, и благородная ящерица-самурай О-Раш, и милая куколка Пинки, и воинственный плюшевый заяц Генерал Де-Кроль со своими роботами, и, конечно, отважные супергерои Флай и Глория.\n\nВсе эти игрушки обожают игры, веселье, соревнования, приключения и вечеринки. Когда Ромы нет в комнате, они живут собственной увлекательной игрушечной жизнью. Но, если что-то случается с их любимым Ромой, Геройчики тут же бросают свои затеи и делают все возможное, чтобы помочь ему справиться с неприятностями.",
    characters: ["Бублик 👽", "Ко-Ко 🐓", "О-Раш 🦎", "Пинки 🪆", "Генерал Де-Кроль 🐰", "Флай 🦸", "Глория ✨"],
    seasonsData: [
      { season: 1, episodes: 13, color: "from-purple-600 to-blue-600" },
      { season: 2, episodes: 13, color: "from-pink-600 to-purple-600" },
    ],
    episodeLinks: {
      "1-1": "https://vk.com/video_ext.php?oid=-226802088&id=456256649&hd=2",
    },
  },
  {
    id: 2,
    title: "Ум и Хрум",
    rating: "0+",
    seasons: 4,
    totalEpisodes: 13,
    img: UM_IMG,
    color: "from-orange-600 to-yellow-500",
    accentColor: "bor-yellow",
    badge: "😄",
    desc: "Весёлые приключения двух неразлучных друзей — умного и находчивого персонажа и его забавного, но доброго приятеля. В каждой серии герои попадают в смешные ситуации и вместе находят выход из них!",
    characters: ["Ум 🧠", "Хрум 🐾"],
    seasonsData: [
      { season: 1, episodes: 4, color: "from-orange-500 to-yellow-400" },
      { season: 2, episodes: 3, color: "from-yellow-500 to-green-400" },
      { season: 3, episodes: 3, color: "from-green-500 to-cyan-400" },
      { season: 4, episodes: 3, color: "from-cyan-500 to-blue-400" },
    ],
  },
];

export default function CartoonPage() {
  const [selectedSeries, setSelectedSeries] = useState<number | null>(null);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [playingEpisode, setPlayingEpisode] = useState<string | null>(null);

  const selected = SERIES.find((s) => s.id === selectedSeries);

  if (selected) {
    const seasonData = selected.seasonsData.find((s) => s.season === selectedSeason);
    const episodeLinks = (selected as typeof selected & { episodeLinks?: Record<string, string> }).episodeLinks ?? {};

    return (
      <div className="animate-fade-in">
        {/* Back + Header */}
        <div
          className="relative overflow-hidden"
          style={{ minHeight: "380px" }}
        >
          <img
            src={selected.img}
            alt={selected.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${selected.color} opacity-70`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 pt-6 pb-8">
            <button
              onClick={() => setSelectedSeries(null)}
              className="flex items-center gap-2 text-white/70 hover:text-white font-bold mb-8 transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад к мультсериалам
            </button>
            <div className="flex flex-col md:flex-row gap-6 items-end">
              <div className="w-36 h-36 rounded-3xl overflow-hidden shadow-2xl shrink-0 border-4 border-white/20">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{selected.badge}</span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold text-sm backdrop-blur">
                    {selected.rating}
                  </span>
                </div>
                <h1 className="font-rubik font-black text-5xl text-white mb-2">{selected.title}</h1>
                <p className="text-white/80 font-semibold">
                  {selected.seasons} сезона • {selected.totalEpisodes} серий
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          {/* Description */}
          <div className="bg-card rounded-3xl p-6 mb-6 border border-border">
            <h2 className="font-rubik font-bold text-xl text-white mb-3">О сериале</h2>
            {selected.desc.split("\n\n").map((para, i) => (
              <p key={i} className="text-white/70 font-semibold leading-relaxed mb-3 last:mb-0">{para}</p>
            ))}
          </div>

          {/* Characters */}
          <div className="bg-card rounded-3xl p-6 mb-6 border border-border">
            <h2 className="font-rubik font-bold text-xl text-white mb-4">Персонажи</h2>
            <div className="flex flex-wrap gap-2">
              {selected.characters.map((char) => (
                <span key={char} className="px-4 py-2 rounded-2xl bg-muted text-white/80 font-semibold text-sm">
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Seasons & Episodes */}
          <div className="bg-card rounded-3xl p-6 border border-border">
            <h2 className="font-rubik font-bold text-xl text-white mb-4">Сезоны и серии</h2>
            <div className="flex gap-2 mb-6 flex-wrap">
              {selected.seasonsData.map((s) => (
                <button
                  key={s.season}
                  onClick={() => { setSelectedSeason(s.season); setPlayingEpisode(null); }}
                  className={`px-5 py-2 rounded-2xl font-rubik font-bold text-sm transition-all duration-200 ${
                    selectedSeason === s.season
                      ? "bg-bor-yellow text-background shadow-lg scale-105"
                      : "bg-muted text-white/70 hover:text-white hover:bg-muted/80"
                  }`}
                >
                  Сезон {s.season}
                </button>
              ))}
            </div>
            {/* Player */}
            {playingEpisode && (
              <div className="mb-6 rounded-3xl overflow-hidden border border-bor-yellow/40 shadow-2xl">
                <div className="bg-black/60 px-4 py-3 flex items-center justify-between">
                  <span className="text-white font-rubik font-bold text-sm">
                    🎬 {selected.title} — Сезон {selectedSeason}, Серия {playingEpisode.split("-")[1]}
                  </span>
                  <button
                    onClick={() => setPlayingEpisode(null)}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <Icon name="X" size={18} />
                  </button>
                </div>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={episodeLinks[playingEpisode]}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {Array.from({ length: seasonData?.episodes ?? 0 }, (_, i) => {
                const key = `${selectedSeason}-${i + 1}`;
                const hasLink = !!episodeLinks[key];
                const isPlaying = playingEpisode === key;
                return (
                  <div
                    key={i}
                    onClick={() => hasLink && setPlayingEpisode(isPlaying ? null : key)}
                    className={`rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-200 border ${
                      isPlaying
                        ? "bg-bor-yellow/15 border-bor-yellow/60 shadow-lg scale-105"
                        : hasLink
                        ? "bg-muted cursor-pointer hover:bg-muted/60 border-border/50 hover:border-bor-yellow/40"
                        : "bg-muted/40 border-border/30 opacity-60 cursor-default"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                      isPlaying ? "bg-bor-yellow/30" : hasLink ? "bg-bor-yellow/10 group-hover:bg-bor-yellow/20" : "bg-white/5"
                    }`}>
                      <Icon
                        name={isPlaying ? "Pause" : "Play"}
                        size={18}
                        className={hasLink ? "text-bor-yellow ml-0.5" : "text-white/20 ml-0.5"}
                      />
                    </div>
                    <div className="text-white font-rubik font-bold text-sm">Серия {i + 1}</div>
                    <div className={`text-xs mt-1 ${hasLink ? "text-bor-green font-semibold" : "text-white/30"}`}>
                      {hasLink ? "Смотреть" : "Скоро"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-rubik font-black text-4xl text-white mb-2 flex items-center gap-3">
          🎬 Мультсериалы
        </h1>
        <p className="text-white/60 font-semibold">Для самых маленьких — весело и безопасно!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERIES.map((series) => (
          <div
            key={series.id}
            onClick={() => { setSelectedSeries(series.id); setSelectedSeason(1); }}
            className="group rounded-3xl overflow-hidden cursor-pointer card-glow transition-all duration-300 bg-card border border-border"
          >
            {/* Cover */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={series.img}
                alt={series.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${series.color} opacity-50`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              {/* Play button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                <Icon name="Play" size={28} className="text-white ml-1" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white font-bold text-xs">
                  {series.rating}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="text-4xl mb-1">{series.badge}</div>
                <h2 className="font-rubik font-black text-3xl text-white">{series.title}</h2>
              </div>
            </div>
            {/* Info */}
            <div className="p-5">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1 text-white/60 text-sm font-semibold">
                  <Icon name="Layers" size={15} />
                  <span>{series.seasons} сезона</span>
                </div>
                <div className="flex items-center gap-1 text-white/60 text-sm font-semibold">
                  <Icon name="Film" size={15} />
                  <span>{series.totalEpisodes} серий</span>
                </div>
              </div>
              <p className="text-white/60 text-sm font-semibold line-clamp-2 leading-relaxed">
                {series.desc.split("\n\n")[0]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {series.characters.slice(0, 4).map((char) => (
                  <span key={char} className="text-xs px-2 py-1 rounded-lg bg-muted text-white/60 font-semibold">
                    {char}
                  </span>
                ))}
                {series.characters.length > 4 && (
                  <span className="text-xs px-2 py-1 rounded-lg bg-muted text-white/40 font-semibold">
                    +{series.characters.length - 4}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation block */}
      <div className="mt-8 rounded-3xl p-6 border border-bor-purple/30 bg-bor-purple/10">
        <h3 className="font-rubik font-bold text-xl text-white mb-2 flex items-center gap-2">
          <Icon name="Sparkles" size={20} className="text-bor-yellow" />
          Умные рекомендации
        </h3>
        <p className="text-white/60 font-semibold text-sm">
          Система запомнит, что ты смотришь, и предложит похожие мультики. Начни смотреть — и мы найдём лучшее специально для тебя!
        </p>
      </div>
    </div>
  );
}