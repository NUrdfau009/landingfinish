import { Mail, Phone, MapPin, Instagram, Youtube, Zap, MessageCircle, FileText } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = '77715804134'; // халықаралық формат: +7 -> 7
  const whatsappText = encodeURIComponent('Сәлем! Маған курс туралы ақпарат беріңізші.');
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const googleFormsHref =
    'https://docs.google.com/forms/d/e/1FAIpQLSf9XYOAN859mDdnyGMxD_gAUdmnE_OR3fG6V-cG96tic6vWnQ/viewform?usp=sharing&ouid=116669363265032095940';

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-black to-gray-900 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-['Orbitron']">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Бізбен байланысыңыз
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Ең жылдам байланыс үшін WhatsApp-қа жазыңыз немесе Google Forms арқылы өтінім қалдырыңыз.
            </p>
          </div>

          {/* Екі батырма: WhatsApp және Google Forms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-green-500/40 bg-green-500/10 text-green-300 hover:bg-green-500/20 hover:border-green-400/60 transition-all duration-300 hover:scale-[1.02]"
              aria-label="WhatsApp-та жазу"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp-та жазу: +7 (771) 580-4134</span>
            </a>

            <a
              href={googleFormsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-blue-500/40 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-[1.02]"
              aria-label="Google Forms арқылы өтінім беру"
            >
              <FileText className="h-5 w-5" />
              <span>Google Forms арқылы өтінім беру</span>
            </a>
          </div>

          {/* Байланыс ақпараты */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Байланыс ақпараты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <Phone className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">+7 (771) 580-4134</p>
                    <p className="text-gray-400 text-sm">Жұмыс күндері 9:00–18:00</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <Mail className="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">kaiurbekovv@gmail.com</p>
                    <p className="text-gray-400 text-sm">24/7 қолдау көрсету</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <MapPin className="h-5 w-5 text-purple-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Шымкент қ., Терешкова 14a</p>
                    <p className="text-gray-400 text-sm">IT Park, 3-қабат</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Әлеуметтік желілер */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Әлеуметтік желілерде</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/oqulab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-pink-500 hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>

                <a
                  href="https://youtube.com/@nurbektech?si=Zrd-u6AphOjqPwk9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-red-500 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50"
                >
                  <Youtube className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Төменгі блок */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="relative">
                <Zap className="h-8 w-8 text-blue-400" aria-hidden="true" />
                <div className="absolute inset-0 bg-blue-400 blur-sm opacity-50"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-['Orbitron']">
                OQUlab
              </span>
            </div>

            <div className="text-center text-gray-400">
              <p>&copy; 2025 OQUlab Academy. Барлық құқықтар қорғалған.</p>
            </div>

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
