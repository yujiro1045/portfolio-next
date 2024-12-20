import Link from "next/link";
import { Button } from "./components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-200px)] p-4 lg:p-8 gap-8">
      <div className="max-w-lg w-full lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-left text-neon-pink">
          Front-end Web & Mobile Developer
        </h1>
        <p className="text-lg lg:text-xl text-left text-neon-blue">
          Soy Juan Medina, desarrollador frontend con más de 2 años de
          experiencia creando soluciones web y móviles. Domino tecnologías como
          React, Next.js, y React Native, y tengo un enfoque centrado en la
          optimización de la experiencia del usuario.
        </p>
      </div>
      <div className="flex flex-col items-center lg:items-end space-y-6 w-full lg:w-1/2">
        <h2 className="text-xl lg:text-2xl font-bold text-center lg:text-right text-neon-green">
          Juan Medina Mendoza
        </h2>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-cyber-dark"
          >
            <Link href="/projects">Ver Proyectos</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-cyber-dark"
          >
            <Link href="/aboutMe">Sobre Mí</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
