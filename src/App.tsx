import gsap from "gsap";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProductViewer } from "./components/ProductViewer";
import { ScrollTrigger } from "gsap/all";
import { ShowCase } from "./components/ShowCase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />

      <ShowCase />
    </main>
  );
};

export { App };
