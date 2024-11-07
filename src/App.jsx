import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Experience from "./pages/Experience"
import Contact from "./pages/Contact";

function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
