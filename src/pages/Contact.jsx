import { motion } from "framer-motion";

import "../styles/contact.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import leaf from "../assets/decorations/leaf2.png";
import blob from "../assets/decorations/blob.png";

function Contact() {
  return (
    <motion.section
      className="contact_page"

      initial={{
        opacity: 0,
        y: 50
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      exit={{
        opacity: 0,
        y: -50
      }}

      transition={{
        duration: 0.7
      }}
    >

      <img
        src={blob}
        alt=""
        className="contact_blob"
      />

      <img
        src={leaf}
        alt=""
        className="contact_leaf"
      />

      <div className="contact_info">

        <span className="contact_subtitle">
          animate a dar el primer paso
        </span>

        <h1>
          podés comunicarte 👇
        </h1>

        <div className="contact_item">
          <FaWhatsapp />
          <p>+54 9 351 2626614</p>
        </div>

        <div className="contact_item">
          <FaEnvelope />
          <p>luciapsicologia@gmail.com</p>
        </div>

        <div className="contact_item">
          <FaInstagram />
          <p>@luciaborghi</p>
        </div>

        <div className="contact_item map_item">

        <FaMapMarkerAlt />

        <div>

            <p>
            El Recodo 1561,
            Córdoba Capital
            </p>

            <div className="map_container">

            <iframe
                title="map"

                src="https://www.google.com/maps?q=El+Recodo+1561+Cordoba&output=embed"

                loading="lazy"
            ></iframe>

            </div>

        </div>

        </div>

      </div>

      <form className="contact_form">

        <h2>
          si te quedó alguna duda
          dejame tu mensaje!
        </h2>

        <div className="double_input">

          <input
            type="text"
            placeholder="Nombre"
          />

          <input
            type="text"
            placeholder="Apellido"
          />

        </div>

        <input
          type="email"
          placeholder="Correo electrónico"
        />

        <textarea
          placeholder="Comentario o mensaje"
        ></textarea>

        <button>
          ENVIAR
        </button>

      </form>

    </motion.section>
  );
}

export default Contact;