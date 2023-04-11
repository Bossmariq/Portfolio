import NavBar from "./NavBar";
import HomePage from "./Home/Home";
import AboutPage from "./About/About";
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
        <AboutPage />
      </section>
      {children}
      <section id="Skillssection">
        <Skills />
      </section>
      <section id="Projectssection">
        <Projects />
      </section>
    </>
  );
};

export default Layout;
