import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {

  const location = useLocation();
  const isAbout = location.pathname === "/";
  const isProjects = location.pathname === "/projects";
  const isExperience = location.pathname === "/experience";
  const isContact = location.pathname === "/contact";

  const [menuStatus, setMenuStatus] = useState(null);

    const toggleMenu = () => {
    const menu = document.getElementById("toggle-menu");
    menu.name = menu.name === "menu" ? "close" : "menu";
      if(menu.name === "close") {
        setMenuStatus("top-[53px]");
      } else {
        setMenuStatus(null);
      }
  };

  const closeMenu = () => {
    setMenuStatus(null);
    const menu = document.getElementById("toggle-menu");
    menu.name = "menu";  // Reset the menu icon to 'menu'
  };

  return (
    <header className="bg-zinc-600 py-3">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <Link onClick={closeMenu} to="/">
          <button className="text-white rounded-lg font-bold px-1 py-0.5 text-center bg-orange-500 hover:brightness-125 transition-all duration-150">
            Juan David DV
          </button>
        </Link>
        <div className={`${menuStatus} duration-300 md:static absolute bg-zinc-600 md:min-h-fit min-h-80 left-0 top-[-100%] md:w-auto w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12">
            <li>
              <Link to="/" onClick={closeMenu} className={`text-white px-2.5 py-1 hover:bg-blue-500 rounded-lg font-semi-bold transition-all duration-350 ${isAbout ? "bg-blue-500 rounded-lg font-bold" : ""}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu} className={`text-white px-2.5 py-1 hover:bg-blue-500 rounded-lg font-semi-bold transition-all duration-350 ${isProjects ? "bg-blue-500 rounded-lg font-bold" : ""}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={closeMenu} className={`text-white px-2.5 py-1 hover:bg-blue-500 rounded-lg font-semi-bold transition-all duration-350 ${isExperience ? "bg-blue-500 rounded-lg font-bold" : "" }`}>Experience</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu} className={`text-white px-2.5 py-1 hover:bg-blue-500 rounded-lg font-semi-bold transition-all duration-350 ${isContact ? "bg-blue-500 rounded-lg font-bold" : ""}`}>
                Contact
              </Link>
            </li>
          </ul>            
        </div>
        <div className="text-white flex items-center ml-7 text-3xl cursor-pointer md:hidden">
          <ion-icon name="menu" id="toggle-menu" onClick={() => toggleMenu()}></ion-icon>
        </div>      
      </nav>
    </header>
  )
};

export default NavBar;