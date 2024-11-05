import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [menuStatus, setMenuStatus] = useState(null);

  const navLinks = document.querySelector(".nav-links");

  const toggleMenu = () => {
    const menu = document.getElementById("toggle-menu");
    menu.name = menu.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("top-[9%]")
  }

  return (
    <header className="bg-zinc-700 py-3">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <button className="text-white rounded-lg font-bold p-2 text-center bg-orange-500 hover:brightness-125 transition-all duration-150">Juan David DV</button>
        </div>
        <div className="nav-links md:static absolute bg-zinc-700 md:min-h-fit min-h-80 left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12">
            <li>
              <a className="text-white p-1.5 hover:bg-blue-500 rounded-lg font-semi-bold transition-all duration-350" href="#">About</a>
            </li>
            <li>
              <a className="text-white p-1.5 hover:bg-blue-500 rounded-lg font-semi-bold transition-all duration-350" href="#">Projects</a>
            </li>
            <li>
              <a className="text-white p-1.5 hover:bg-blue-500 rounded-lg font-semi-bold transition-all duration-350" href="#">Experience</a>
            </li>
            <li>
              <NavLink to="#" className="text-white p-1.5 hover:bg-blue-500 rounded-lg font-semi-bold transition-all duration-350">
                Contact
              </NavLink>
            </li>
          </ul>            
        </div>
        <div className="text-white flex items-center ml-7 text-3xl cursor-pointer md:hidden">
          <ion-icon name="menu" id="toggle-menu" onClick={() => toggleMenu()}></ion-icon>
        </div>      
      </nav>
    </header>
  )
}

export default NavBar;