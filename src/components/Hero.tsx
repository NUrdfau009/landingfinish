import { ArrowRight, Cpu, Zap, BrainCircuit as Circuit } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Cpu className="absolute top-1/4 left-20 h-8 w-8 text-blue-400/30 float-animation" style={{ animationDelay: '0s' }} />
        <Circuit className="absolute top-1/3 right-32 h-6 w-6 text-purple-400/30 float-animation" style={{ animationDelay: '1s' }} />
        <Zap className="absolute bottom-1/3 left-1/3 h-10 w-10 text-green-400/30 float-animation" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 font-['Orbitron'] leading-tight">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
              Болашақ
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent glow-text">
              Инженерлерді
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent glow-text">
              Дайындаймыз
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Заманауи робототехника, жасанды интеллект және бағдарламалау саласында
            мамандар дайындау орталығы
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 neon-border">
              <span className="flex items-center space-x-2">
                <span>Курстарды қарау</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <a
                href="tel:+77715804134"
                className="group px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <span>Тегін консультация</span>
              </a>
          </div>

          {/* YouTube Video (робот орнына) */}
          <div className="relative mx-auto max-w-3xl lg:max-w-4xl">
            {/* 16:9 контейнер (плагинсіз) */}
            <div className="relative pt-[56.25%] rounded-3xl overflow-hidden border-4 border-blue-400/50 shadow-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 float-animation">
              <iframe
                // 👇 Осы жердегі VIDEO_ID-ті өз видеоңның ID-не ауыстыр
                src="https://www.youtube.com/embed/gOXc3pEdsEA?autoplay=1&mute=1&loop=1&playlist=gOXc3pEdsEA"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
              {/* Жеңіл жарқыл эффект */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
