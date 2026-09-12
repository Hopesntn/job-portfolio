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
      <div className="py-30 md:py-36 max-w-3xl mx-auto text-4xl ">
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
                faciles de usar para el usuario. Por mi camino, <br />
                he colaborado con compañeros de clase en distintas areas como
                backend, frontend y diseno de sistemas. Constantemente exploro
                nuevas tecnologias y recursos para construir aplications mas
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
        <div className="flex gap-3 pt-4 mt-5">
          {isSpanish ? (
            <a
              href={buttonsLink[0]}
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-yellow-400-hover disabled:opacity-50 hover:bg-yellow-400  hover:text-black hover:opacity-90 ">
              Contactame
              <img className="h-5 w-5" src={book} alt="Book logo" />
            </a>
          ) : (
            <a
              href={buttonsLink[0]}
              type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none hover:bg-yellow-400  hover:text-black hover:opacity-90">
              <img className="h-5 w-5" src={book} alt="book logo" />
              Contact
            </a>
          )}
          <a
            href={buttonsLink[1]}
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none hover:bg-yellow-400  hover:text-black hover:opacity-90">
            <img className="h-5 w-5" src={Linkedln} alt="Linkedln Logo" />
            Linkedln
          </a>
          <a
            href={buttonsLink[2]}
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none hover:bg-yellow-400  hover:text-black hover:opacity-90">
            <img className="h-5 w-5" src={githubImage} alt="GitHub logo" />
            Github
          </a>
        </div>

        {isSpanish ? (
          <>
            <div className="flex gap-3 md:mt-20 lg:mt-40">
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
          </>
        ) : (
          <div className="flex gap-3 md:mt-20 lg:mt-40">
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
        )}

        <Projects isSpanish={isSpanish} />
      </div>
    </>
  );
}
