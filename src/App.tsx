import { useEffect } from "react";
import About from "./views/About";
import Client from "./views/Client";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Introduction from "./views/Introduction";
import Projects from "./views/Project";
import Skills from "./views/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Client />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
