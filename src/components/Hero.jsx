import { motion } from "framer-motion";

import "../styles/hero.css";

import luci from "../assets/LuciFoto.png";

import leaf from "../assets/decorations/leaf.png";
import blob from "../assets/decorations/blob.png";

function Hero() {
  return (
    <section className="hero">

      <img
        src={blob}
        alt=""
        className="hero_blob"
      />

      <motion.div
        className="hero_left"

        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}

        transition={{
          duration: 1
        }}
      >

        <h3>ANIMATE A</h3>

        <h1>
          empezar terapia
        </h1>

        <p>
          Un espacio seguro para conocerte mejor,
          sanar y construir bienestar emocional.
        </p>

        <a href="/contacto">
          Consultar
        </a>

      </motion.div>

      <motion.div
        className="hero_right"

        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}

        transition={{
          duration: 1
        }}
      >

        <img
          src={leaf}
          alt=""
          className="hero_leaf"
        />

        <img
          src={luci}
          alt="Lucia"
          className="hero_main_img"
        />

      </motion.div>

    </section>
  );
}

export default Hero;