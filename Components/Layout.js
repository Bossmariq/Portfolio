import NavBar from "./NavBar";
import HomePage from "./Home/Home";
import About from "./About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <section id="Homesection">
        <HomePage />
      </section>
      <section id="Aboutsection">
        <About />
      </section>
      <section id="Skillssection">
        <Skills />
      </section>
      <section id="Projectssection">
        <Projects />
      </section>
      {children}
    </>
  );
};

export default Layout;
