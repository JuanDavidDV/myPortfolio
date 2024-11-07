import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience"
import Contact from "./pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";

function App() {

  return (
  <BrowserRouter>
    <ScrollToTop /> {/* Add ScrollToTop here */}
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
