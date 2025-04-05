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
      <div className="bg-gradient-to-t from-black via-emerald-950 to-black">
        <Skills />
        <Awards />
      </div>
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
};

export default Home;
