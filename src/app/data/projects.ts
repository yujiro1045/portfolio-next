export interface Project {
  title: string;
  description: string;
  image: string | string[];
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    title: "Quchara",
    description:
      "Aplicación móvil innovadora para compartir y descubrir recetas. Desarrollada con React Native y Expo, ofrece una experiencia de usuario fluida y atractiva.",
    image: "/assets/imgs/quchara.jpeg",
    technologies: ["React Native", "Expo", "Firebase", "typescript"],
    liveLink: "https://quchara.com/",
  },
  {
    title: "Sistema de Agendamiento para Peluquerías",
    description:
      "Plataforma web para peluquerías que permite a los clientes reservar citas en línea. Incluye un panel de administración para gestionar horarios y servicios.",
    image: "/assets/imgs/nailsProject.png",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "typescript"],
  },
  {
    title: "Pokemon App",
    description:
      "Una aplicación interactiva que utiliza la PokeAPI para buscar Pokémon, mostrando sus habilidades en tarjetas informativas, con modos noche y día personalizables..",
    image: "/assets/imgs/pokeApi.png",
    technologies: ["React", "CSS", "Javascript", "typescript"],
    liveLink: "https://pokemons-app-ivory.vercel.app/",
    githubLink: "https://github.com/yujiro1045/pokemons-App",
  },
  {
    title: "Book-App List",
    description:
      "Una aplicacion web la cual te permite seleccionar distintos libros a una lista de lectura personalizada y filtrarlos por medio de sus generos.",
    image: "/assets/imgs/bookAppList.png",
    technologies: ["React", "zustand", "CSS", "jest", "typescript"],
    githubLink: "https://github.com/yujiro1045/book-list-app",
  },
  {
    title: "Teslo-shop",
    description:
      "Creada con Next.js es una pagina de una tienda de ropa de la marca tesla, la cual tiene ropa para hombres, mujeres y niños, cuanto con un carrito de compras y un navbar y sideBar totalmente funcionales.",
    image: "/assets/imgs/teslo-shop.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Docker", "typescript"],
    githubLink: "https://github.com/yujiro1045/Teslo-shop",
  },
  {
    title: "FilmHub",
    description:
      "Esta es una app creada con React-Native expo, la cual es una aplicacion que muestra las peliculas mas populares del momento, contiene un buscador y una pantalla de favoritos en donde pueden guardar sus peliculas favoritas y a la vez eliminarlas de esa lista.",
    image: [
      "/assets/imgs/FilmHub1.jpeg",
      "/assets/imgs/FilmHub3.jpeg",
      "/assets/imgs/FilmHub4.jpeg",
    ],
    technologies: ["React Native", "zustand", "CSS", "typescript"],
    githubLink: "https://github.com/yujiro1045/FilmHub",
  },
  {
    title: "Money Manager App",
    description:
      "Aplicación móvil para gestionar finanzas personales, permitiendo a los usuarios llevar un control de sus gastos e ingresos de manera sencilla y efectiva.",
    image: "/assets/imgs/moneymanagerapp.png",
    technologies: ["React", "Next", "Tailwind", "typescript"],
    githubLink: "https://github.com/yujiro1045/Money-manager-app",
    liveLink: "https://money-manager-app-phi.vercel.app",
  },
];
