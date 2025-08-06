import React, { useState } from 'react';
import { ExternalLink, Github, Play, Zap } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Автономды қалалық робот',
      description: 'LIDAR және AI көру жүйесін қолданатын навигациялық робот',
      category: 'Робототехника',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['ROS', 'Python', 'OpenCV', 'TensorFlow'],
      status: 'Аяқталды'
    },
    {
      id: 2,
      title: 'Дрон рояін басқару жүйесі',
      description: 'Бірнеше дронды синхронды басқаруға арналған интеллектуалды жүйе',
      category: 'Дрон технологиясы',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['C++', 'ArduPilot', 'MAVLink', 'QGroundControl'],
      status: 'Даму үстінде'
    },
    {
      id: 3,
      title: 'Медициналық диагностика AI',
      description: 'Медициналық кескіндерді талдауға арналған нейрондық желі',
      category: 'Жасанды интеллект',
      image: 'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['PyTorch', 'FastAPI', 'Docker', 'MongoDB'],
      status: 'Аяқталды'
    },
    {
      id: 4,
      title: 'Ақылды үй автоматикасы',
      description: 'IoT сенсорлар мен машиналық оқытуды біріктірген үй жүйесі',
      category: 'IoT',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'Node.js', 'MQTT', 'React'],
      status: 'Жаңа'
    },
    {
      id: 5,
      title: 'Роботты көшу жүйесі',
      description: 'Бостон Dynamics-тің мысалы бойынша жасалған 4 аяқты робот',
      category: 'Робототехника',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['ROS2', 'Gazebo', 'Solidworks', 'C++'],
      status: 'Даму үстінде'
    },
    {
      id: 6,
      title: 'Блокчейн дрон желісі',
      description: 'Дрондар арасында қауіпсіз деректер алмасуға арналған блокчейн',
      category: 'Блокчейн',
      image: 'https://images.pexels.com/photos/8566574/pexels-photo-8566574.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Solidity', 'Web3.js', 'IPFS', 'Ethereum'],
      status: 'Жаңа'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Аяқталды': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'Даму үстінде': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Жаңа': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
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
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Overlay Icons */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="p-3 bg-blue-500/80 rounded-full hover:bg-blue-500 transition-colors duration-300">
                    <Play className="h-5 w-5 text-white" />
                  </button>
                  <button className="p-3 bg-green-500/80 rounded-full hover:bg-green-500 transition-colors duration-300">
                    <Github className="h-5 w-5 text-white" />
                  </button>
                  <button className="p-3 bg-purple-500/80 rounded-full hover:bg-purple-500 transition-colors duration-300">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </button>
                </div>

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(project.status)}`}>
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

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:from-blue-600/40 hover:to-purple-600/40 hover:border-blue-400/50 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>Толығырақ</span>
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105">
            <Github className="h-5 w-5 mr-2" />
            GitHub-та көру
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;