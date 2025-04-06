import { useState, useEffect } from "react";
import { Element, Link } from "react-scroll";

const SECTIONS = ["about", "skills", "awards", "projects", "experience", "contact"];

const NavBar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  const isMobile = width <= 768;

  const handleScroll = () => {
    let currentSection = "";
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      if ((section === "about" || section === "skills" || section === "awards") && rect.top <= 100 && rect.bottom >= 10) {
        currentSection = "about";
      }
      else if (rect.top <= 10 && rect.bottom >= 10) {
        currentSection = section;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    // Listen for scroll events to detect which section is active
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const toggleMenu = () => {
    const menu = document.getElementById("toggle-menu");
    menu.name = menu.name === "menu" ? "close" : "menu";
    setMenuStatus(status => !status)
  };

  const closeMenu = () => {
    setMenuStatus(false);
    const menu = document.getElementById("toggle-menu");
    menu.name = "menu";  // Reset the menu icon to 'menu'
  };

  return (
    <header className="bg-black md:px-10 py-3 fixed w-[100vw] z-[1000] md:top-0">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <Link onClick={closeMenu} to="about">
          <button className="text-white rounded-lg font-bold px-1 py-0.5 text-center bg-cyan-500 hover:brightness-50 transition-all duration-150">
            Juan David DV
          </button>
        </Link>
        {(menuStatus || !isMobile) && 
          <div className={`top-[53px] duration-300 z-[1000] md:static absolute md:min-h-fit min-h-80 left-0 top-[-100%] md:w-auto w-full flex items-center px-5`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12">
              <li>
                <Link to="about" onClick={closeMenu} className={`text-white px-2.5 py-1 hover:bg-indigo-500 rounded-lg font-semi-bold transition-all duration-350 cursor-pointer ${activeSection === "about" ? "bg-teal-500" : ""}`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" onClick={closeMenu} className={`text-white px-2.5 py-1 hover:bg-indigo-500 rounded-lg font-semi-bold transition-all duration-350 cursor-pointer ${activeSection === "projects" ? "bg-teal-500" : ""} `}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="experience" onClick={closeMenu}  className={`text-white px-2.5 py-1 hover:bg-indigo-500 rounded-lg font-semi-bold transition-all duration-350 cursor-pointer ${activeSection === "experience" ? "bg-teal-500" : ""}`}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="contact" onClick={closeMenu} className={`text-white px-2.5 py-1 hover:bg-indigo-500 rounded-lg font-semi-bold transition-all duration-350 cursor-pointer ${activeSection === "contact" ? "bg-teal-500" : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>            
          </div>
        }
        <div className="text-white flex items-center ml-7 text-3xl cursor-pointer md:hidden">
          <ion-icon name="menu" id="toggle-menu" onClick={() => toggleMenu()}></ion-icon>
        </div>      
      </nav>
    </header>
  )
};

export default NavBar;
