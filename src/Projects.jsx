import proyect_1 from "./assets/proyect_1.webp";

import proyect_2 from "./assets/proyect_3.webp";

import proyect_3 from "./assets/proyect_2.webp";

import c_logo from "./assets/c.svg";
import c__logo from "./assets/c++.svg";

import html_logo from "./assets/html5.svg";
import javascript_logo from "./assets/javascript.svg";
import nextjs_logo from "./assets/nextjs.svg";

import mongo_logo from "./assets/mongodb-icon-dark.svg";

import react_logo from "./assets/react_dark.svg";

import tailwindcss_logo from "./assets/tailwindcss.svg";

import bootstrap_logo from "./assets/bootstrap.svg";

import LinkButton from "./LinkButton";

import GitHub from "./assets/github.svg";

import ExternalLink from "./ExternalLink";

import css from "./assets/css_old.svg"

export default function Proyects({ isSpanish }) {
  const projects_info = [
    {
      title: isSpanish
        ? "Aplication full-stack para la busqueda de libros "
        : "Full-stack book discovery application",
      description: isSpanish
        ? "Usando una API abierta de libros, deja a usuarios registrarse y buscar por libros, ver detalles y mantener una lista de libros favoritos."
        : "Using the open Library API, let registered users search for books, view detailed book information, and maintain a personal favourites list.",
      proyectImg: proyect_1,
      tags: ["NEXT", "JAVASCRIPT", "BOOTSTRAP", "REACT", "HTML", "MONGODB"],
      github: "https://github.com/Hopesntn/web422NAA-project",
      link: "https://web422-naa-project.vercel.app/register",
    },
    {
      title: isSpanish
        ? "Aplication web para servicio de comidas "
        : "Web-application for a meal-kit service",
      description: isSpanish
        ? "Demuestra registro, autenticacion, catalogo de comidas y sessiones basadas en el rol elegido"
        : "It provides registration, authentication, meals catalog browsing, buying cart and session-based role",

      proyectImg: proyect_2,
      tags: ["HTML", "JAVASCRIPT", "TAILWIND", "MONGODB"],
      github: "https://github.com/Hopesntn/WEB322",
      link: "https://web-322-2261-nff-mvc-demo.vercel.app/",
    },
    {
      title: isSpanish
        ? "Videojuego: El destino del nigromante"
        : "Videogame: Fate of the Necromancer",
      description: isSpanish
        ? "Se concentra en aparecer criaturas que persiguen al jugador, el cual debe tirar projectiles a los enemigos que aparecen alrededor del mapa"
        : "Focus on summoning undead creatures that trail around the player and send out projectiles to incoming enemies that spawn around the map",

      proyectImg: proyect_3,
      tags: ["CSS", "C", "C__"],
      github:
        "https://github.com/adityatambe31/GAM-Grp-04/tree/main/Assignment-03",
      link: "",
    },
  ];

  const tags = {
      NEXT: {
        name: "Next.js",
        className: "bg-black text-white",
        icon: nextjs_logo,
      },

      TAILWIND: {
        name: "Tailwind CSS",
        className: "bg-[#003159] text-white",
        icon: tailwindcss_logo,
      },

      REACT: {
        name: "React",
        className: "bg-blue-600 text-white",
        icon: react_logo,
      },

      BOOTSTRAP: {
        name: "Bootstrap",
        className: "bg-purple-600 text-white",
        icon: bootstrap_logo,
      },

      C: {
        name: "C",
        className: "bg-blue-600 text-white",
        icon: c_logo,
      },

      C__: {
        name: "C++",
        className: "bg-blue-600 text-white",
        icon: c__logo,
      },

      MONGODB: {
        name: "MongoDB",
        className: "bg-green-600 text-white",
        icon: mongo_logo,
      },

      HTML: {
        name: "Html",
        className: "bg-orange-500 text-white",
        icon: html_logo,
      },

      JAVASCRIPT: {
        name: "Javascript",
        className: "bg-yellow-400 text-black",
        icon: javascript_logo,
      },
      CSS: {
        name: "CSS",
        className: "bg-blue-600 text-white",
        icon: css
      },
    };

  const PROJECTS = projects_info.map((project) => ({
    ...project,
    tags: project.tags.map((key) => tags[key]).filter(Boolean),
  }));
  return (
    <div className="flex flex-col gap-y-16 mt-8">
      {PROJECTS.map(
        ({ proyectImg, title, description, tags, link, github }) => (
          <article key={title} className="flex flex-col space-x-0 space-y-6 group md:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full md:w-1/2">
              <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition-all duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-[0_20px_60px_-10px_rgba(251,191,36,0.2)] lg:border lg:border-gray-800 lg:hover:border-yellow-400/30 lg:hover:bg-gray-800/50">
                <img
                  alt={title}
                  className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                  loading="lazy"
                  src={proyectImg}
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h3>
              <ul className="flex flex-row flex-wrap mt-3 gap-2">
                {tags.map((tag) => (
                  <li key={tag.name}>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2`}>
                      {tag.icon && <img className="size-4" src={tag.icon} alt="" />}
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-gray-700 dark:text-gray-400 text-pretty text-lg">
                {description}
              </p>
              <footer className="flex items-center mt-4 gap-x-4">
                {github && (
                  <LinkButton href={github}>
                    <img className="size-5" src={GitHub} alt="" />
                    Code
                  </LinkButton>
                )}
                {link && (
                  <LinkButton href={link}>
                    <ExternalLink className="size-4" />
                    Preview
                  </LinkButton>
                )}
              </footer>
            </div>
          </article>
        ),
      )}
    </div>
  );
}
