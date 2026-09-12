import { useState } from "react";
import About from "./About";
import HeroContent from "./HeroContent";
import NavBar from "./NavBar";
import Experience from "./Experience";
export default function App() {
  const [isSpanish, setIsSpanish] = useState(false);
  return (
    <>
      <div className="bg-newBlack">
        <NavBar isSpanish={isSpanish} setIsSpanish={setIsSpanish} />
        <HeroContent isSpanish={isSpanish} />
        <Experience isSpanish={isSpanish}/>
        <About isSpanish={isSpanish}/>
      </div>
    </>
  );
}
