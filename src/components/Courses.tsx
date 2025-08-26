import { BookOpen, Users, Clock } from 'lucide-react';

const Courses = () => {
  const whatsappNumber = '77715804134'; // 📱 Нөмір WhatsApp-қа

  const courses = [
    {
      id: 1,
      title: 'Робототехника негіздері',
      description: 'Arduino және Raspberry Pi қолданып, алғашқы роботтарыңызды жасаңыз',
      duration: '8 апта',
      students: '150+',
      level: 'Бастаушы',
      price: '₸45,000',
      features: ['Arduino программалау', 'Сенсорлармен жұмыс', '3D модельдеу', 'Жоба жасау']
    },
    {
      id: 2,
      title: 'Lego spike Prime',
      description: 'lego spike prime роботтарын құрастыру және программалау жарыстарға дайындау',
      duration: '2 апта',
      students: '20+',
      level: 'Орташа',
      price: '₸75,000',
      features: ['Робот құрастыру', 'Программалау негіздері', 'Жарыстарға дайындық', 'Командалық жұмыс']
    },
    {
      id: 3,
      title: 'Дрон технологиялары',
      description: 'Автономды дрондар жасау және программалау',
      duration: '10 апта',
      students: '80+',
      level: 'Жоғары',
      price: '₸95,000',
      features: ['Дрон құрастыру', 'Автопилот', 'FPV жүйесі', 'Навигация']
    }
  ];

  const getWhatsappLink = (courseTitle: string) => {
    const text = `Мен "${courseTitle}" курсына жазылғым келеді`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="courses" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-['Orbitron']">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Біздің курстар
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Заманауи технологиялар саласында практикалық дағдылар алып, мамандығыңызды дамытыңыз
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Course Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                    {course.level}
                  </span>
                  <div className="text-2xl font-bold text-green-400">
                    {course.price}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Stats */}
              <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students}</span>
                </div>
              </div>

              {/* Course Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-blue-400" />
                  Курста үйренесіз:
                </h4>
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button → WhatsApp */}
              <a
                href={getWhatsappLink(course.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform group-hover:scale-105"
              >
                Курсқа жазылу
              </a>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
