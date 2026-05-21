import "../styles/footer.css";

import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

function Footer() {

  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "brunoignacioborghi1@gmail.com";
  const whatsapp = "https://wa.me/543512626619";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <footer className="footer">

        <h3>Lucía Borghi</h3>

        <div className="footer_links">

          <a href="/">Inicio</a>
          <a href="/sobre-mi">Sobre mí</a>

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

        {/* CRÉDITO DEV */}
        <div className="footer_dev">

          <p>
            Sitio desarrollado por{" "}
            <span
              className="dev_name"
              onClick={() => setOpen(true)}
            >
              BrunoB
            </span>
          </p>

        </div>

        <p className="footer_copy">
          Copyright © 2026
        </p>

      </footer>

      {/* MODAL */}
      {open && (
        <div className="modal_overlay" onClick={() => setOpen(false)}>

          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <h4>Contacto del desarrollador</h4>

            <p className="email_text">{email}</p>

            <button onClick={copyEmail}>
              {copied ? "Copiado ✔" : "Copiar mail"}
            </button>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp_btn"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
                alt="WhatsApp"
              />
              WhatsApp
            </a>

          </div>

        </div>
      )}
    </>
  );
}

export default Footer;