export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Desarrollador Frontend Movíl",
    company: "Quchara",
    period: "2023 - 2024",
    description: [
      "Desarrollo de aplicación móvil innovadora utilizando React Native y Expo.",
      "Implementación de funcionalidades de usuario y optimización de la experiencia del usuario.",
      "Colaboración en equipo para la resolución de problemas y mejora continua del producto.",
    ],
  },
  {
    title: "Desarrollador Frontend Web",
    company: "Freelance",
    period: "2023 - 2024",
    description: [
      "Creación de sitios web interactivos para negocios locales, incluyendo páginas de peluquería con funcionalidades de agendamiento.",
      "Utilización de React y Next.js para desarrollar interfaces de usuario responsivas y eficientes.",
      "Implementación de soluciones personalizadas para satisfacer las necesidades específicas de los clientes.",
    ],
  },
];
