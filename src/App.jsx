import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";

function App() {

  return (
  <BrowserRouter>
    <ScrollToTop /> {/* Add ScrollToTop here */}
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
