import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Content from "./components/Content";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Home />
    </BrowserRouter>
  )
}

export default App
