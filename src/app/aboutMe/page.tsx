import { Code, Heart, Coffee, Zap, Target, Users } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Frontend Development", level: 95, color: "bg-primary-500" },
    { name: "React & Next.js", level: 90, color: "bg-accent-500" },
    { name: "React Native", level: 85, color: "bg-primary-400" },
    { name: "TypeScript", level: 80, color: "bg-accent-400" },
    { name: "UI/UX Design", level: 75, color: "bg-primary-300" },
  ];

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Código limpio",
      description: "Escribo código mantenible, escalable y bien documentado",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pasión por el detalle",
      description: "Cada pixel importa, cada interacción debe ser perfecta",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Aprendizaje continuo",
      description: "Siempre actualizado con las últimas tecnologías",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trabajo en equipo",
      description: "Colaboro efectivamente con diseñadores y desarrolladores",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
            Sobre Mí
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Conoce más sobre mi historia, mis valores y lo que me motiva como
            desarrollador frontend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Personal Story */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6">
                Mi Historia
              </h2>
              <div className="space-y-4 text-secondary-700 leading-relaxed">
                <p>
                  Soy{" "}
                  <span className="font-semibold text-primary-600">
                    Juan Medina
                  </span>
                  , un desarrollador frontend apasionado con más de 2 años de
                  experiencia creando soluciones web y móviles que marcan la
                  diferencia.
                </p>
                <p>
                  Mi viaje en el desarrollo comenzó con la curiosidad de
                  entender cómo funcionan las aplicaciones que usamos todos los
                  días. Desde entonces, he trabajado con tecnologías como
                  <span className="font-semibold text-primary-600"> React</span>
                  ,
                  <span className="font-semibold text-primary-600">
                    {" "}
                    Next.js
                  </span>{" "}
                  y
                  <span className="font-semibold text-primary-600">
                    {" "}
                    React Native
                  </span>
                  .
                </p>
                <p>
                  He tenido la oportunidad de trabajar en proyectos diversos,
                  desde aplicaciones móviles innovadoras como
                  <span className="font-semibold text-accent-600">
                    {" "}
                    Quchara
                  </span>
                  hasta sitios web interactivos para negocios locales, siempre
                  con un enfoque centrado en la experiencia del usuario.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6">
                Mis Habilidades
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-secondary-800">
                        {skill.name}
                      </span>
                      <span className="text-sm text-secondary-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div
          className="mb-20 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-3xl font-display font-bold text-center text-secondary-900 mb-12">
            Mis Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center text-primary-600">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl shadow-large p-8 text-white text-center">
            <h2 className="text-2xl font-display font-bold mb-6">
              Datos curiosos sobre mí
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Coffee className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold mb-1">∞</div>
                <div className="text-sm opacity-90">Tazas de café al día</div>
              </div>
              <div className="flex flex-col items-center">
                <Target className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">
                  Dedicación a cada proyecto
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-90">Pensando en código</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
