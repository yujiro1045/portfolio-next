"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/experience", label: "Experiencia" },
  { href: "/aboutMe", label: "Sobre mí" },
];

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="relative">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-neon-yellow"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={cn(
              "absolute left-0 right-0 top-full z-20 bg-cyber-light md:relative md:top-0 md:bg-transparent md:flex md:items-center",
              isOpen ? "block" : "hidden md:block"
            )}
          >
            <ul className="flex flex-col md:flex-row md:space-x-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 md:px-3 md:py-2 rounded-md transition-colors duration-200",
                      pathname === item.href
                        ? "bg-neon-purple text-cyber-dark"
                        : "text-neon-blue hover:bg-neon-blue hover:text-cyber-dark"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
