import "../styles/about.css";

import { Link } from "react-router-dom";

import leaf2 from "../assets/decorations/leaf2.png";
import blob from "../assets/decorations/blob.png";

function AboutPreview() {

  return (

    <section
      className="about_preview"
      id="about"
    >

      <img
        src={blob}
        alt=""
        className="about_blob"
      />

      <img
        src={leaf2}
        alt=""
        className="about_leaf"
      />

      <h2>
        Sobre mí
      </h2>

      <p>
        Soy Lucía Borghi, psicóloga clínica y sociocomunitaria dedicada a acompañar procesos emocionales individuales y grupales desde una mirada cercana, humana y profesional.
      </p>

      <p>
        Mi objetivo es brindarte un espacio seguro donde puedas comprender lo que te sucede, desarrollar mayor claridad sobre tus emociones y encontrar herramientas para sentirte mejor.
      </p>

      <p>
        Trabajo desde la psicoterapia con enfoque gestáltico y también acompaño procesos de orientación vocacional ocupacional.
      </p>

      <Link to="/about">

        Leer más

      </Link>

    </section>

  );

}

export default AboutPreview;