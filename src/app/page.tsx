import Link from "next/link";
import { Button } from "./components/ui/Button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 max-w-2xl animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                👋 ¡Hola! Soy desarrollador frontend
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-secondary-900 leading-tight mb-6">
                Juan Medina
                <span className="block text-primary-600">Mendoza</span>
              </h1>
              <p className="text-xl text-secondary-600 leading-relaxed mb-8">
                Desarrollador frontend especializado en{" "}
                <span className="font-semibold text-primary-600">React</span>,
                <span className="font-semibold text-primary-600"> Next.js</span>{" "}
                y
                <span className="font-semibold text-primary-600">
                  {" "}
                  React Native
                </span>
                . Creo experiencias digitales excepcionales con más de 2 años de
                experiencia.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white shadow-colored group"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  Ver mis proyectos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-secondary-300 text-secondary-700 hover:bg-secondary-50"
              >
                <Link href="/about" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Descargar CV
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-secondary-500 text-sm">Sígueme:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 text-secondary-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 text-secondary-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 text-secondary-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image/Illustration */}
          <div className="flex-1 max-w-md animate-float">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full shadow-large mx-auto"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full animate-bounce-gentle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
            Tecnologías que domino
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Trabajo con las tecnologías más modernas para crear aplicaciones web
            y móviles de alta calidad
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "React Native",
            "Tailwind",
            "Node.js",
          ].map((tech, index) => (
            <div
              key={tech}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary-600 font-bold text-sm">
                  {tech.slice(0, 2)}
                </span>
              </div>
              <h3 className="font-semibold text-secondary-800 text-sm">
                {tech}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
