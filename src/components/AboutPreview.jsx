import "../styles/about.css";

import leaf from "../assets/decorations/leaf.png";

function AboutPreview() {
  return (
    <section className="about_preview" id="about">

      <img
        src={leaf}
        alt=""
        className="leaf_decoration"
      />

      <h2>Sobre mí</h2>

      <p>
        Soy Lucía Borghi, psicóloga clínica y sociocomunitaria dedicada a acompañar procesos emocionales individuales y grupales desde una mirada cercana, humana y profesional. 
      </p>

      <p>
        Mi objetivo es brindarte un espacio seguro donde puedas comprender lo que te sucede, desarrollar mayor claridad sobre tus emociones y encontrar herramientas para sentirte mejor. 
      </p>

      <a href="/sobre-mi">
        Leer más
      </a>

    </section>
  );
}

export default AboutPreview;