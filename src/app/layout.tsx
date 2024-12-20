import { Nav } from "./components/nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Juan Medina - Desarrollador Frontend",
  description:
    "Portfolio de Juan Medina, desarrollador frontend con experiencia en React, Next.js y React Native",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-cyber-dark text-neon-blue`}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-cyber-light border-b border-neon-purple">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-neon-pink">
                  Mi Portafolio
                </h1>
                <Nav />
              </div>
            </div>
          </header>

          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

          <footer className="bg-cyber-light border-t border-neon-purple py-4">
            <div className="container mx-auto px-4 text-center text-neon-green">
              © {new Date().getFullYear()} Juan Medina. Todos los derechos
              reservados.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
