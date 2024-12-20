import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

export default function Proyectos() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-neon-pink">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-card shadow-lg rounded-lg overflow-hidden text-black transform transition duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="flex space-x-4 p-4">
              {Array.isArray(project.image) ? (
                <div className="flex">
                  {project.image.map((img, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={img}
                      alt={`${project.title} imagen ${imgIndex + 1}`}
                      width={350 / project.image.length}
                      height={200}
                      className="object-cover"
                    />
                  ))}
                </div>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={350}
                  height={200}
                  className="w-full object-center h-48"
                />
              )}
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Ver proyecto
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    <Github className="w-4 h-4 mr-1" /> Código fuente
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
