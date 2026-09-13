import { useEffect, useState } from "react";

export default function NavBar({ isSpanish, setIsSpanish }) {
  const [activeHash, setActiveHash] = useState(window.location.hash);

  useEffect(() => {
    const updateActiveHash = () => setActiveHash(window.location.hash);

    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, []);

  const navItems = [
    {
      title: isSpanish ? "Proyectos" : "Projects",
      label: isSpanish ? "proyectos" : "projects",
      url: "/#projects",
    },
    // {
    //   title: isSpanish ? "Experiencia" : "Experience",
    //   label: isSpanish ? "experiencia" : "experience",
    //   url: isSpanish ? "/#experiencia" : "/#experience",
    // },
    {
      title: isSpanish ? "Sobre mi" : "About me",
      label: isSpanish ? "sobre-mi" : "about-me",
      url: "/#about-me",
    },
    {
      title: isSpanish ? "Contacto" : "Contact",
      label: isSpanish ? "contacto" : "contact",
      url: isSpanish
        ? "mailto:fabri.ortiz2005@hotmail.com"
        : "mailto:fabri.ortiz2005@hotmail.com",
    },
  ];

  return (
    <>
      <header className="header-nav w-full flex gap-x-1 px-2 py-1.5 text-sm font-medium rounded-full text-gray-600 dark:text-gray-300 justify-center items-center border border-transparent ">
        <nav className="header-nav w-full flex flex-wrap gap-x-1 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 justify-center items-center [clip-path:ellipse(100%_100%_at_50%_0%)]">
          {navItems.map((link) => (
            <a
              key={link.label}
              className={`nav-link relative text-sm sm:text-sm block px-1.5 sm:px-3 sm:py-1.5 rounded-full transition-colors duration-200 hover:text-yellow-500 dark:hover:text-yellow-400 ${
                activeHash === link.url.substring(1) ? "text-yellow-500" : ""
              }`}
              aria-label={link.label}
              href={link.url}>
              {link.title}
            </a>
          ))}
          <div className="h-4 w-px bg-neutral-700/80 mx-1" />
          <button
            onClick={() => {
              setIsSpanish(!isSpanish);
            }}
            
            className="flex items-center gap-1.5 px-1 py-2.5 rounded-xl text-xs sm:text-sm transition-colors duration-200 hover:text-yellow-500 dark:hover:text-yellow-400">
            
            <span className="text-sm">{isSpanish ? "Español" : "English"} </span>
          </button>
        </nav>
      </header>
    </>
  );
}
