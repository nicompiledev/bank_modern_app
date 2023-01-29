// Se importan los módulos necesarios desde React y desde archivos locales
// Se define un componente funcional Navbar que utiliza los hooks de React useState para mantener el estado de "active" y "toggle".
// En el return, se renderiza un elemento <nav> con clases de estilo que contiene el logo de la aplicación, una lista de enlaces de navegación y un menú hamburguesa (sólo visible en resoluciones pequeñas).
// La lista de enlaces de navegación es generada a partir de una constante navLinks y se marca el elemento activo usando una clase específica.
// La función onClick en cada elemento de la lista establece el estado active al título del elemento.
// El menú hamburguesa es una imagen que cambia entre "menu" y "close" dependiendo del estado de "toggle".
// Se muestra o oculta una lista de enlaces de navegación en un elemento <div> que actúa como un menú desplegable con un estilo similar al de la lista principal.
// Se exporta el componente Navbar como default.

import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  // State to keep track of the active nav link
  const [active, setActive] = useState("Home");

  // State to toggle the mobile side bar
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo */}
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* Desktop navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* Map over the nav links and display each one */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              // Conditionally style the active nav link
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {/* Link to the corresponding section */}
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Toggle button */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Side bar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {/* Map over the nav links and display each one */}
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  // Conditionally style the active nav link
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                {/* Link to the corresponding section */}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;