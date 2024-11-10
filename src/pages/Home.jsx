import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="home-page">
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

export default Home;