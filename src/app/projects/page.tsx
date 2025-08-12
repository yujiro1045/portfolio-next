import Image from "next/image";
import { ExternalLink, Github, Calendar, Tag, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
            Mis Proyectos
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en
            desarrollo frontend, desde aplicaciones web hasta soluciones móviles
            innovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                {Array.isArray(project.image) ? (
                  <div className="flex h-full">
                    {project.image.map((img, imgIndex) => (
                      <div key={imgIndex} className="flex-1 relative">
                        <Image
                          src={img || "/placeholder.svg?height=200&width=300"}
                          alt={`${project.title} imagen ${imgIndex + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={
                      project.image || "/placeholder.svg?height=200&width=400"
                    }
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-secondary-400" />
                  <span className="text-sm text-secondary-500">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver proyecto
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary-500 hover:text-secondary-700 font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-white rounded-2xl shadow-soft p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-secondary-900 mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-secondary-600 mb-6">
              Me encantaría colaborar contigo en tu próximo proyecto. ¡Hablemos!
            </p>
            <a
              href="mailto:juanmedi730@gmail.com"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-colored"
            >
              Contactar
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
