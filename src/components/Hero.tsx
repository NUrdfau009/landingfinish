import React from 'react';
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
        <Cpu className="absolute top-1/4 left-20 h-8 w-8 text-blue-400/30 float-animation" style={{animationDelay: '0s'}} />
        <Circuit className="absolute top-1/3 right-32 h-6 w-6 text-purple-400/30 float-animation" style={{animationDelay: '1s'}} />
        <Zap className="absolute bottom-1/3 left-1/3 h-10 w-10 text-green-400/30 float-animation" style={{animationDelay: '2s'}} />
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
            Заманауи робототехника, жасанды интеллект және инновациялық технологиялар саласында 
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
            
            <button className="group px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              <span>Тегін консультация</span>
            </button>
          </div>

          {/* Robot Illustration Placeholder */}
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/30 float-animation">
              {/* Robot Body */}
              <div className="relative mx-auto w-48 h-64 bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl border-2 border-blue-400/50 overflow-hidden">
                {/* Robot Head */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full border-2 border-blue-300 shadow-lg">
                  {/* Eyes */}
                  <div className="absolute top-6 left-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-6 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  {/* Antenna */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-blue-300"></div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Robot Arms */}
                <div className="absolute top-12 -left-6 w-12 h-8 bg-gray-600 rounded-lg border border-blue-400/30"></div>
                <div className="absolute top-12 -right-6 w-12 h-8 bg-gray-600 rounded-lg border border-blue-400/30"></div>
                
                {/* Chest Panel */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-black/50 rounded-lg border border-green-400/50">
                  <div className="grid grid-cols-3 gap-1 p-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400/70 rounded-sm animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                    ))}
                  </div>
                </div>
                
                {/* Robot Legs */}
                <div className="absolute -bottom-4 left-6 w-8 h-16 bg-gray-700 rounded-b-lg border border-blue-400/30"></div>
                <div className="absolute -bottom-4 right-6 w-8 h-16 bg-gray-700 rounded-b-lg border border-blue-400/30"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;