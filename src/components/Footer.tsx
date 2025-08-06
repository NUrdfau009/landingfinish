import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-black to-gray-900 pt-20 pb-8">
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-['Orbitron']">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Бізбен байланысыңыз
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Сұрақтарыңыз бар ма? Тегін консультация алыңыз!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Атыңыз"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email мекенжайыңыз"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон нөміріңіз"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300">
                    <option value="">Қызықтыратын курсты таңдаңыз</option>
                    <option value="robotics">Робототехника негіздері</option>
                    <option value="ai">Жасанды интеллект</option>
                    <option value="drone">Дрон технологиялары</option>
                    <option value="iot">IoT жүйелері</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    rows="4"
                    placeholder="Хабарламаңыз"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Хабарлама жіберу</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-6">Байланыс ақпараты</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <Phone className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">+7 (777) 123-4567</p>
                      <p className="text-gray-400 text-sm">Жұмыс күндері 9:00-18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                      <Mail className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">info@robotech.kz</p>
                      <p className="text-gray-400 text-sm">24/7 қолдау көрсету</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                      <MapPin className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Алматы қ., Абая дангылы 150</p>
                      <p className="text-gray-400 text-sm">IT Park, 5-қабат</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-6">Әлеуметтік желілерде</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: 'text-blue-500 hover:text-blue-400' },
                    { icon: Twitter, color: 'text-blue-400 hover:text-blue-300' },
                    { icon: Instagram, color: 'text-pink-500 hover:text-pink-400' },
                    { icon: Youtube, color: 'text-red-500 hover:text-red-400' }
                  ].map((social, idx) => (
                    <button
                      key={idx}
                      className={`p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50`}
                    >
                      <social.icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="relative">
                <Zap className="h-8 w-8 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400 blur-sm opacity-50"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-['Orbitron']">
                RoboTech
              </span>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400">
              <p>&copy; 2025 RoboTech Academy. Барлық құқықтар қорғалған.</p>
            </div>

            {/* Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Құпиялылық', 'Қолдану шарттары', 'Көмек'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;