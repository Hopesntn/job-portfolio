import { useEffect, useState } from "react";
import About from "./About";
import HeroContent from "./HeroContent";
import NavBar from "./NavBar";
import MyFooter from "./MyFooter";
export default function App() {
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    document.documentElement.lang = isSpanish ? "es" : "en";
  }, [isSpanish]);
  return (
    <>
      <div className="bg-newBlack">
        <NavBar isSpanish={isSpanish} setIsSpanish={setIsSpanish} />
        <HeroContent isSpanish={isSpanish} />
        <About isSpanish={isSpanish} />
        <MyFooter isSpanish={isSpanish} />
      </div>
    </>
  );
}
