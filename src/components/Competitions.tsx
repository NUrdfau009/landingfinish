// src/components/Competitions.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Trophy, Calendar, MapPin, User2, ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: number;
  title: string;
  date: string;       // ISO немесе жай мәтін
  location: string;   // қала/орын
  place: string;      // мыс: "1 орын"
  author: string;     // мыс: "Қайырбек Нұрдаулет"
  desc: string;
  image: string;      // 큰 слайд суреті
  thumb?: string;     // мини-превью (болмаса image қолданылады)
  link?: string;      // "Толығырақ" батырмасына
};

const slidesData: Slide[] = [
  {
    id: 1,
    title: "AI Innovation Contest 2024",
    date: "10.07.2025",
    location: "Нұр-Сұлтан",
    place: "1 орын",
    author: "Қайырбек Нұрдаулет",
    desc: "Жасанды интеллект саласындағы инновациялық жобалар конкурсында медициналық AI жүйесімен жеңіске жеттік.",
    image: "https://raw.githubusercontent.com/NUrdfau009/foto/main/1.jpg",
    thumb: "https://raw.githubusercontent.com/NUrdfau009/foto/main/1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Robotics Challenge",
    date: "22.05.2025",
    location: "Шымкент",
    place: "2 орын",
    author: "Омар Нұрбек",
    desc: "Автономды навигация және манипуляция тапсырмалары бойынша роботымыз жоғары балл жинады.",
    image: "https://raw.githubusercontent.com/NUrdfau009/foto/main/3.jpg",
    thumb: "https://raw.githubusercontent.com/NUrdfau009/foto/main/3.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Drone Racing Cup",
    date: "03.06.2025",
    location: "Алматы",
    place: "Финалист",
    author: "Мәжіт Сәуірбай",
    desc: "FPV трассасында жоғары жылдамдық пен дәлдік көрсетіп, финалға өттік.",
    image: "https://raw.githubusercontent.com/NUrdfau009/foto/main/4.jpg?auto=compress&cs=tinysrgb&w=1600",
    thumb: "https://raw.githubusercontent.com/NUrdfau009/foto/main/4.jpg?auto=compress&cs=tinysrgb&w=200",
    link: "#"
  },
  {
    id: 4,
    title: "Lego Robotics League",
    date: "18.03.2024",
    location: "Алматы",
    place: "3 орын",
    author: "Команда OQU",
    desc: "Lego Spike Prime негізіндегі тапсырмаларда тұрақты нәтиже көрсетілді.",
    image: "https://raw.githubusercontent.com/NUrdfau009/foto/main/005.jpg",
    thumb: "https://raw.githubusercontent.com/NUrdfau009/foto/main/005.jpg?auto=compress&cs=tinysrgb&w=200",
    link: "#"
  }
];

export default function Competitions() {
  const slides = useMemo(() => slidesData, []);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Автоауыстыру: 3 секунд
  useEffect(() => {
    if (paused) return;
    timerRef.current && window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, slides.length]);

  const go = (dir: -1 | 1) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  const current = slides[index];

  return (
    <section id="competitions" className="relative py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Orbitron'] mb-3">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Қатысқан жарыстар
            </span>
          </h2>
          <p className="text-gray-400">
            Халықаралық және жергілікті робототехника жарыстарындағы жетістіктеріміз
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slide card */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 bg-black/30 shadow-2xl">
            {/* Image */}
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-[340px] sm:h-[420px] object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              {/* meta line */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300 mb-2">
                <span className="inline-flex items-center">
                  <Trophy className="h-4 w-4 text-yellow-400 mr-1.5" />
                  {current.place}
                </span>
                <span className="inline-flex items-center">
                  <Calendar className="h-4 w-4 text-gray-300 mr-1.5" />
                  {current.date}
                </span>
                <span className="inline-flex items-center">
                  <MapPin className="h-4 w-4 text-gray-300 mr-1.5" />
                  {current.location}
                </span>
                <span className="inline-flex items-center">
                  <User2 className="h-4 w-4 text-gray-300 mr-1.5" />
                  {current.author}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {current.title}
              </h3>
              <p className="text-gray-300 max-w-3xl">
                {current.desc}
              </p>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href={current.link ?? "#"}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold transition-colors"
                >
                  Толығырақ
                </a>
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={() => go(-1)}
              aria-label="Алдыңғы"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Келесі"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Thumbs + dots */}
          <div className="mt-5 flex flex-col items-center">
            {/* thumbs */}
            <div className="flex items-center gap-3 mb-3">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setIndex(i)}
                  className={`relative h-14 w-20 rounded-lg overflow-hidden border transition
                    ${i === index ? "border-amber-400 ring-2 ring-amber-400/40" : "border-gray-600/60 hover:border-gray-400/70"}`}
                  aria-label={`${s.title} слайдына өту`}
                >
                  <img
                    src={s.thumb || s.image}
                    alt={s.title}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition 
                    ${i === index ? "bg-amber-400" : "bg-gray-500/60 hover:bg-gray-400/80"}`}
                  aria-label={`Слайд ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
