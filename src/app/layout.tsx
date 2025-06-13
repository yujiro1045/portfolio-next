import type React from "react";
import { Nav } from "./components/nav";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Link } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Juan Medina - Desarrollador Frontend",
  description:
    "Portfolio de Juan Medina, desarrollador frontend especializado en React, Next.js y React Native. Creando experiencias digitales excepcionales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-slate-50 text-secondary-900 antialiased">
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary-200 shadow-soft">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JM</span>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-display font-bold text-secondary-900">
                      Juan Medina
                    </h1>
                    <p className="text-xs text-secondary-500">
                      Frontend Developer
                    </p>
                  </div>
                </div>

                <Nav />
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="bg-white border-t border-secondary-200">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">JM</span>
                    </div>
                    <h3 className="font-display font-bold text-secondary-900">
                      Juan Medina
                    </h3>
                  </div>
                  <p className="text-secondary-600 mb-4 max-w-md">
                    Desarrollador frontend especializado en crear experiencias
                    digitales excepcionales con React, Next.js y React Native.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-secondary-400 hover:text-primary-600 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-secondary-400 hover:text-primary-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-secondary-400 hover:text-primary-600 transition-colors"
                      aria-label="Email"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-4">
                    Navegación
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/"
                        className="text-secondary-600 hover:text-primary-600 transition-colors"
                      >
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/projects"
                        className="text-secondary-600 hover:text-primary-600 transition-colors"
                      >
                        Proyectos
                      </a>
                    </li>
                    <li>
                      <a
                        href="/experience"
                        className="text-secondary-600 hover:text-primary-600 transition-colors"
                      >
                        Experiencia
                      </a>
                    </li>
                    <li>
                      <a
                        href="/aboutMe"
                        className="text-secondary-600 hover:text-primary-600 transition-colors"
                      >
                        Sobre mí
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-4">
                    Contacto
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="mailto:juanmedi730@gmail.com"
                        className="text-secondary-600 hover:text-primary-600 transition-colors"
                      >
                        juanmedi730@gmail.com
                      </a>
                    </li>
                    <li>
                      <span className="text-secondary-600">
                        Disponible para proyectos
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-secondary-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-secondary-500 text-sm">
                  © {new Date().getFullYear()} Juan Medina. Todos los derechos
                  reservados.
                </p>
                <p className="text-secondary-500 text-sm mt-2 md:mt-0">
                  Hecho con ❤️ y Next.js
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
