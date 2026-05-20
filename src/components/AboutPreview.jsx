import "../styles/about.css";

import { Link } from "react-router-dom";

import leaf from "../assets/decorations/leaf.png";

function AboutPreview() {

  return (

    <section className="about_preview">

      <img
        src={leaf}
        alt=""
        className="leaf_decoration"
      />

      <h2>
        Sobre mí
      </h2>

      <p>

        Soy Lucía Borghi, psicóloga clínica y sociocomunitaria dedicada a acompañar procesos emocionales individuales y grupales desde una mirada cercana, humana y profesional.

      </p>

      <p>

        Mi objetivo es brindarte un espacio seguro donde puedas comprender lo que te sucede y encontrar herramientas para sentirte mejor.

      </p>

      <Link to="/sobre-mi">

        Leer más

      </Link>

    </section>

  );

}

export default AboutPreview;