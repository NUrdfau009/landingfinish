import { Award, Code, Cpu, Instagram, Phone } from "lucide-react";

type TeamMember = {
  id: number;
  name: string;
  position: string;
  specialization: string;
  image: string;
  description: string;
  skills: string[];
  achievements: string;
  instagram?: string; // контакт: Instagram сілтеме
  phone?: string;     // контакт: телефон (мыс: +7771xxxxxxx)
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Омар Нұрбек",
    position: "Техникалық директор",
    specialization: "Робототехника және AI",
    image: "https://raw.githubusercontent.com/NUrdfau009/foto/main/nurbek.png",
    description:
      "Робототехника саласында 15 жылдық тәжірибесі бар маман. KAzGU уриверситеті түлегі.",
    skills: ["Python", "ROS", "TensorFlow", "Arduino"],
    achievements: "50+ жоба, 15+ сертификат",
    instagram: "https://instagram.com/nurbektech", // ← осында өз сілтемеңіз
    phone: "+77477781004",                                   // ← осында өз номеріңіз
  },
  {
    id: 2,
    name: "Қайырбек Нұрдәулет",
    position: "AI мамандығы жетекшісі",
    specialization: "Машиналық оқыту және Computer Vision",
    image: "https://raw.githubusercontent.com/NUrdfau009/foto/main/nurik.jpg",
    description:
      "Жасанды интеллект саласындағы зерттеуші. ХДУ университеті 4 - курс студенті  .",
    skills: ["Python", "Deep Learning", "Neural Networks"],
    achievements: "30+ ғылыми мақала, 10+ патент",
    instagram: "https://instagram.com/nurdaulet__kaiyrbek",
    phone: "+77715804134",
  },
  {
    id: 3,
    name: "Мәжіт Сәуірбай",
    position: "Дрон технологиялары маманы",
    specialization: "Автономды жүйелер және IoT",
    image: "https://raw.githubusercontent.com/NUrdfau009/foto/main/sauir.jpg",
    description:
      "Дрон технологиялары мен IoT жүйелері бойынша сарапшы. 3 жылдық  тәжірибе.",
    skills: ["C++", "ArduPilot", "IoT", "Embedded Systems"],
    achievements: "25+ дрон жобасы, 5+ стартап",
    instagram: "https://instagram.com/ssrbuu_",
    phone: "+77075100904",
  },
];

const getSpecializationIcon = (specialization: string) => {
  const s = specialization.toLowerCase();
  if (
    s.includes("ai") ||
    s.includes("machine") ||
    s.includes("машиналық") ||
    s.includes("vision") ||
    s.includes("интеллект")
  ) {
    return Code;
  }
  if (
    s.includes("дрон") ||
    s.includes("drone") ||
    s.includes("iot") ||
    s.includes("автономды")
  ) {
    return Cpu;
  }
  return Award;
};

const Team = () => {
  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-['Orbitron']">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Біздің команда
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Технология саласындағы жетекші мамандар мен зерттеушілердің команда құрамы
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const SpecIcon = getSpecializationIcon(member.specialization);

            return (
              <div
                key={member.id}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Member Photo (gradient ring) */}
                <div className="relative mb-6">
                  <div className="mx-auto w-32 h-32 rounded-full p-[2px] bg-gradient-to-r from-purple-400 to-pink-400">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Specialization Icon */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-black">
                    <SpecIcon className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    {member.specialization}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm">Дағдылары:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Award className="h-4 w-4 mr-2 text-yellow-400" />
                    <span>{member.achievements}</span>
                  </div>
                </div>

                {/* Contacts (Instagram & Phone) */}
                <div className="flex justify-center gap-4 mt-4">
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-pink-300 border border-pink-400/40 rounded-lg hover:bg-pink-500/10 transition"
                      aria-label={`${member.name} — Instagram`}
                      title="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>Instagram</span>
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-2 px-3 py-2 text-blue-300 border border-blue-400/40 rounded-lg hover:bg-blue-500/10 transition"
                      aria-label={`${member.name} — Телефон`}
                      title="Телефон"
                    >
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </a>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-400">Жылдық тәжірибе</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">100+</div>
            <div className="text-gray-400">Аяқталған жобалар</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-400">Дайындалған студенттер</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
