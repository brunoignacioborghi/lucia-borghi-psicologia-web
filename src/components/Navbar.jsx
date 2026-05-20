import { Link, useNavigate, useLocation } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";

import "../styles/navbar.css";

import logo from "../assets/LogoLuci.png";

function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  const goHome = () => {

    if (location.pathname !== "/") {

      navigate("/");

      setTimeout(() => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }, 100);

    } else {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }

  };

  return (
    <nav className="navbar">

      <div className="navbar_container">

        <div
          className="logo_container"
          onClick={goHome}
        >

          <img src={logo} alt="" />

          <h2>
            ENCONTRARSE
            Lic. Borghi Lucía Ivanna
            Psicoterapia y Orientación Vocacional y Ocupacional

          </h2>

        </div>

        <div className="nav_links">

          <button onClick={goHome}>
            Inicio
          </button>

         <>
  <ScrollLink
    to="about"
    smooth={true}
    duration={800}
    offset={-100}
    style={{ cursor: "pointer" }}
  >
    Sobre mí
  </ScrollLink>

  <ScrollLink
    to="therapy"
    smooth={true}
    duration={800}
    offset={-100}
    style={{ cursor: "pointer" }}
  >
    Terapia
  </ScrollLink>
</>

          <Link to="/contacto">
            Contacto
          </Link>

          <Link to="/contenido">
            Contenido
            </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;