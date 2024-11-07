import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Experience from "./pages/Experience"
import Content from "./components/About";

function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
