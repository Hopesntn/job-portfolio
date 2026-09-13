import githubImage from "./assets/github.svg";
import Linkedln from "./assets/linkedin.svg";
import book from "./assets/book.webp";
import Projects from "./Projects";

export default function HeroContent({ isSpanish }) {
  const buttonsLink = [
    "mailto:fabri.ortiz2005@hotmail.com",

    "https://www.linkedin.com/in/fabricio-alejandro-ortiz-fiallos/",

    "https://github.com/Hopesntn",
  ];

  return (
    <>
      <div className="w-full max-w-3xl mx-auto px-4 py-16 text-4xl md:py-36">
        {isSpanish && (
          <>
            <span>
              <p className="pb-4">Hey, soy Fabricio Ortiz</p>

              <p className="text-lg">
                Software developer{" "}
                <span className="text-yellow-400">
                  con un año de experiencia aprendiendo y construyendo
                  aplicaciones
                </span>{" "}
                fáciles de usar para el usuario. Por mi camino, <br />
                he colaborado con compañeros de clase en distintas áreas como
                backend, frontend y diseño de sistemas. Constantemente exploro
                nuevas tecnologías y recursos para construir aplicaciones más
                fluidas y escalables.
              </p>
            </span>
          </>
        )}

        {!isSpanish && (
          <>
            <span>
              <p className="pb-4">Hey, I'm Fabricio Ortiz</p>
              <p className="text-lg">
                Software developer{" "}
                <span className="text-yellow-400">
                  with 1 year of experience learning and building user-friendly
                  applications.
                </span>{" "}
                Throughout my journey. I've collaborated with classmates across
                diverse areas like backend, frontend and system design. I
                constantly explore new technologies and resources to build
                smooth and scalable apps.
              </p>
            </span>
          </>
        )}
        <div className="flex flex-wrap gap-3 pt-4 mt-5">
          {isSpanish ? (
            <a
              href={buttonsLink[0]}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-yellow-400-hover disabled:opacity-50 hover:bg-yellow-400  hover:text-black hover:opacity-90 ">
              Contactame
              <img className="h-5 w-5" src={book} alt="Book logo" />
            </a>
          ) : (
            <a
              href={buttonsLink[0]}
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none hover:bg-yellow-400  hover:text-black hover:opacity-90">
              <img className="h-5 w-5" src={book} alt="book logo" />
              Contact
            </a>
          )}
          <a
            href={buttonsLink[1]}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none hover:bg-yellow-400  hover:text-black hover:opacity-90">
            <img className="h-5 w-5" src={Linkedln} alt="Linkedln Logo" />
              LinkedIn
          </a>
          <a
            href={buttonsLink[2]}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none hover:bg-yellow-400  hover:text-black hover:opacity-90">
            <img className="h-5 w-5" src={githubImage} alt="GitHub logo" />
            Github
          </a>
        </div>

        {isSpanish ? (
          <>
            <section id="projects">
              <div className="flex gap-3 mt-16 md:mt-20 lg:mt-40">
              <svg
                className="mt-11 size-7"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 12h.01"></path>
                <path d="M12 12h.01"></path>
                <path d="M9 12h.01"></path>
                <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"></path>
                <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"></path>
              </svg>
              <h1 className="mt-10 text-3xl">Proyectos</h1>
            </div>
            </section>
          </>
        ) : (
          <section id="projects">
            <div className="flex gap-3 mt-16 md:mt-20 lg:mt-40">
              <svg
                className="mt-11 size-7"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 12h.01"></path>
                <path d="M12 12h.01"></path>
                <path d="M9 12h.01"></path>
                <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"></path>
                <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"></path>
              </svg>
              <h1 className="mt-10 text-3xl">Projects</h1>
            </div>
          </section>
        )}

        <Projects isSpanish={isSpanish} />
      </div>
    </>
  );
}
