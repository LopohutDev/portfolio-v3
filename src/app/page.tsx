import Image from "next/image";
import MainHeader from "./components/LandingPage/MainHeader";
import AboutMe from "./components/LandingPage/AboutMe";
import Portfolio from "./components/LandingPage/portfolio";
import Services from "./components/LandingPage/Services";
import ContactMe from "./components/LandingPage/ContactMe";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <MainHeader />
      <AboutMe />
      <Portfolio />
      <Services />
      <ContactMe />
    </div>
  );
}
