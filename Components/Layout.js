import NavBar from "./NavBar";
import HomePage from "./Home/Home";
import AboutPage from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer";
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
      <main>{children}</main>
      <section id="Skillssection">
        <Skills />
      </section>
      <section id="Projectssection">
        <Projects />
      </section>
      <section id="Contactsection">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Layout;
