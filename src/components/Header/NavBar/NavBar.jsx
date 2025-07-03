import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo1 from "../../../assets/logo1.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <nav className="navbar">
      <div>
        <img className="logo1" src={logo1} alt="logo de la marca" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/">INICIO</Link>
        </li>
        <li
          className="navbar-item dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span>CATEGORÍAS</span>
          {openDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/categoria/mates">Mates</Link></li>
              <li><Link to="/categoria/termos">Termos</Link></li>
              <li><Link to="/categoria/accesorios">Accesorios</Link></li>
              <li><Link to="/categoria/bombillas">Bombillas</Link></li>
              <li><Link to="/categoria/kit">Kit</Link></li>
            </ul>
          )}
        </li>
        <li className="navbar-item">
          <Link to="/preguntas-frecuentes">PREGUNTAS FRECUENTES</Link>
        </li>
        <li className="navbar-item">
          <Link to="/tips-y-cuidados">TIPS Y CUIDADOS</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contacto">CONTACTO</Link>
        </li>
      </ul>
      <Link to="/carrito">
        <CartWidget />
      </Link>
    </nav>
  );
}

export default NavBar;
