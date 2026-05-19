import "../styles/about.css";

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

      <h2>Sobre mí</h2>

      <p>
        Soy Lucía Borghi, psicóloga dedicada a acompañar
        procesos emocionales desde una mirada cercana,
        humana y profesional.
      </p>

      <p>
        Mi objetivo es brindarte un espacio seguro donde
        puedas comprender lo que te sucede y encontrar
        herramientas para sentirte mejor.
      </p>

      <a href="/sobre-mi">
        Leer más
      </a>

    </section>
  );
}

export default AboutPreview;