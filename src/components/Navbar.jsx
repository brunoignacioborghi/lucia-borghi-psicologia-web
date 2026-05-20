import {
  Link,
  useNavigate,
  useLocation
}

from "react-router-dom";

import {
  Link as ScrollLink
}

from "react-scroll";

import {
  useState
}

from "react";

import "../styles/navbar.css";

import logo from "../assets/LogoLuci.png";

function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const goHome = () => {

    setMenuOpen(false);

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

            <br />

            Lic. Borghi Lucía Ivanna

            <br />

            Psicoterapia y Orientación
            Vocacional y Ocupacional

          </h2>

        </div>

        <button
          className="menu_toggle"

          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          ☰

        </button>

        <div
          className={`nav_links ${
            menuOpen ? "active" : ""
          }`}
        >

          <button
            onClick={() => {

              goHome();

              setMenuOpen(false);

            }}
          >

            Inicio

          </button>

          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            offset={-100}

            style={{ cursor: "pointer" }}

            onClick={() =>
              setMenuOpen(false)
            }
          >

            Sobre mí

          </ScrollLink>

          <ScrollLink
            to="therapy"
            smooth={true}
            duration={800}
            offset={-100}

            style={{ cursor: "pointer" }}

            onClick={() =>
              setMenuOpen(false)
            }
          >

            Terapia

          </ScrollLink>

          <Link
            to="/contacto"

            onClick={() =>
              setMenuOpen(false)
            }
          >

            Contacto

          </Link>

          <Link
            to="/contenido"

            onClick={() =>
              setMenuOpen(false)
            }
          >

            Contenido

          </Link>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;