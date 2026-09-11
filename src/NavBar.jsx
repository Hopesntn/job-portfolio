import { Globe } from "lucide-react";

export default function navBar({isSpanish, setIsSpanish}) {
  const navItems = [
    {
      title: isSpanish ? "Experiencia" : 'Experience',
      label: isSpanish ? "experiencia" : 'experience',
      url: isSpanish ? "/#experiencia" : "/#experience",
    },
    {
      title: isSpanish ? "Proyectos" : "Projects",
      label: isSpanish ? "proyectos" : "projects",
      url: isSpanish ? "/#proyectos" : "/#projects",
    },
    {
      title: isSpanish ? "Sobre mí" : "About me",
      label: isSpanish ? "sobre-mi" : "about-me",
      url: isSpanish ? "/#sobre-mi" : "/#about-me",
    },
    {
      title: isSpanish ? "Contacto" : "Contact",
      label: isSpanish ? "contacto" : "contact",
      url: isSpanish ? "mailto:fabri.ortiz2005@hotmail.com" : "mailto:fabri.ortiz2005@hotmail.com",
    },
  ];

  
  return (
    <>
      <header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-4">
        <nav class="header-nav flex gap-x-1  py-1.5 text-sm font-medium rounded-full text-gray-600 dark:text-gray-300 justify-center items-center border border-transparent">
          {navItems.map((link) => (
            <a
              class="nav-link relative text-xs sm:text-sm block px-1.5 sm:px-3  sm:py-1.5 rounded-full transition-colors duration-200 hover:text-yellow-500 dark:hover:text-yellow-400"
              aria-label={link.label}
              href={link.url}>
              {link.title}
            </a>
          ))}
          <div className="h-4 w-px bg-neutral-700/80 mx-1" />
          <button
          onClick={() => {
            setIsSpanish(!isSpanish)
          }} 
          className="flex items-center gap-1.5 px-1 py-2.5 rounded-xl text-sm transition-colors duration-200 hover:text-yellow-500 dark:hover:text-yellow-400"
        >
          <Globe className="w-4 h-4 stroke-2" />
          <span className="text-sm"> </span>
        </button>
        </nav>
      </header>
    </>
  );
}
