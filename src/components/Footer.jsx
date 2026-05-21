import "../styles/footer.css";

import { Link as ScrollLink } from "react-scroll";

function Footer() {
  return (
    <footer className="footer">

      <h3>Lucía Borghi</h3>

      <div className="footer_links">

        <a href="/">Inicio</a>
        <a href="/sobre-mi">Sobre mí</a>

        {/* MISMO COMPORTAMIENTO QUE NAVBAR */}
        <ScrollLink
          to="therapy"
          smooth={true}
          duration={800}
          offset={-100}
          className="footer_link"
        >
          Terapia
        </ScrollLink>

        <a href="/contacto">Contacto</a>

      </div>

      {/* CRÉDITO DESARROLLADOR */}
      <div className="footer_dev">

        <p>
          Sitio desarrollado por{" "}
          <a
            href="mailto:brunoignacioborghi1@gmail.com"
          >
            Bruno Borghi
          </a>
        </p>

      </div>

      <p className="footer_copy">
        Copyright © 2026
      </p>

    </footer>
  );
}

export default Footer;