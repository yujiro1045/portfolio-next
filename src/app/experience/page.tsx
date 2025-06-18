import { CalendarIcon, BriefcaseIcon, MapPin, Award } from "lucide-react";
import { experiences } from "../data/experienceItem";

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
            Mi Experiencia
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Un recorrido por mi trayectoria profesional, destacando los
            proyectos y logros más importantes en mi carrera como desarrollador
            frontend.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start gap-8 mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full shadow-medium flex items-center justify-center border-4 border-primary-100">
                    <BriefcaseIcon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8 group">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                        <Award className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-secondary-500">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Remoto</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-secondary-700 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-secondary-100">
                    <h4 className="text-sm font-semibold text-secondary-500 mb-3 uppercase tracking-wide">
                      Tecnologías utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 animate-slide-up">
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-2xl font-display font-bold text-center text-secondary-900 mb-8">
              Logros destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  2+
                </div>
                <div className="text-secondary-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">
                  10+
                </div>
                <div className="text-secondary-600">Proyectos completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  5+
                </div>
                <div className="text-secondary-600">Tecnologías dominadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
