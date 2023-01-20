import { useState, useEffect } from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'react-typed'
import Aos from "aos";
import "aos/dist/aos.css"
import "./App.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    Aos.init({
      duration: 2000, useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated',
    });
  }, []);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

// #16182c
// #2d2b6d
// #4daee9