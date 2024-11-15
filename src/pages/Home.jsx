import About from "../components/About";
import Skills from "../components/Skills";
import Awards from "../components/Awards";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="home-page">
      <About />
      <Skills />
      <Awards />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
};

export default Home;