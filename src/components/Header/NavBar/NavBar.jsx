import "./NavBar.css";
import logo1 from "../../../assets/logo1.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
        <div>
            <img className="logo1" src={logo1} alt="logo de la marca" />
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="#">INICIO</a>
          </li>
          <li className="navbar-item">
            <a href="#">PRODUCTOS</a>
          </li>
          <li className="navbar-item">
            <a href="#">PREGUNTAS FRECUENTES</a>
          </li>
          <li className="navbar-item">
            <a href="#">TIPS Y CUIDADOS</a>
          </li>
          <li className="navbar-item">
            <a href="#">CONTACTO</a>
          </li>
        </ul>

        <CartWidget/>
    </nav>
  )
}

export default NavBar