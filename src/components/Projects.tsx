import { useState } from 'react';


type Status = 'Аяқталды' | 'Даму үстінде' | 'Жаңа' | 'Басқа';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  status: Status;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 2,
      title: 'Дрон ролін басқару жүйесі',
      description: 'Дрондардың тұрақтылығы мен маневрлілігін арттыруға арналған басқару алгоритмі',
      category: 'Дрон технологиясы',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Даму үстінде'
    },
    {
      id: 3,
      title: 'Telegram parsing бот жаңалықтар ',
      description: 'Жаңалықтарды жинау және талдау үшін Telegram parsing бот',
      category: ' Programming',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshgnMcPwCljawQSFc4r_0NCeNDH7uEdhv3Q&s',
      status: 'Аяқталды'
    },
    {
      id: 5,
      title: 'Робот машинасы',
      description: 'Автономды навигация және кедергілерден аулақ болу мүмкіндігі бар робот көлігі',
      category: 'Робототехника',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_NV5A_FBMBE4n2onJKMi-T5S8Gextps3n1EBmmB1t9XOGi1znPgiJAUQZIz7qkj_KHE&usqp=CAU?auto=compress&cs=tinysrgb&w=600',
      status: 'Даму үстінде'
    },
    {
      id: 5,
      title: 'Мұғалімдерге арналған робототехника инструкторы',
      description: 'Мұғалімдерге робототехника инструксияларын жасауды үйретуге арналған құрал',
      category: 'Робототехника',
      image: 'https://frankfurt2.apollo.olxcdn.com/v1/files/80qklgwm5jf01-KZ/image;s=2400x3000',
      status: 'Даму үстінде'
    },
    {
      id: 5,
      title: 'Дцп ауруына шалдыққан балаларға арналған жаттығу құрылғысы',
      description: 'Дцп дертті балаларға арналған жаттығу құрылғысы',
      category: 'Медициналық құрылғылар',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHJWPVyZvWKwaBFjdRZ3Vz96zZaKl1K80Jw&s',
      status: 'Даму үстінде'
    },
    {
      id: 3,
      title: 'Бизнеске арналған автаматтандырылған чатботтар',
      description: 'Бизнес процестерін оңтайландыруға арналған AI негізіндегі чатботтар',
      category: 'Жасанды интеллект',
      image: 'https://www.marketresearchintellect.com/images/blogs/the-rise-of-ai-chatbots-enhancing-user-experience-across-digital-platforms.webp',
      status: 'Аяқталды'
    }
  ];

  const getStatusColor = (status: Project['status']): string => {
    switch (status) {
      case 'Аяқталды':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'Даму үстінде':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Жаңа':
        return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-['Orbitron']">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Біздің жобалар
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Студенттеріміз мен мұғалімдеріміз жасаған инновациялық технологиялық жобалар портфолиосы
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
