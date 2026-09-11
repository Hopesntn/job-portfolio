import { useState } from "react";
import About from "./About";
import HeroContent from "./HeroContent";
import NavBar from "./NavBar";
import PersonalSkills from "./PersonalSkills";
export default function App() {
  const [isSpanish, setIsSpanish] = useState(false);
  return (
    <>
      <div className="bg-newBlack">
        <NavBar isSpanish={isSpanish} setIsSpanish={setIsSpanish} />
        <HeroContent isSpanish={isSpanish} />
        <PersonalSkills isSpanish={isSpanish}/>
        <About isSpanish={isSpanish}/>
      </div>
    </>
  );
}
