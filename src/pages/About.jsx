import "../styles/about.css";

import luci from "../assets/LuciFoto.png";

function About() {
  return (
    <section className="about_page">

      <img src={luci} alt="Lucia" />

      <div>

        <h1>Sobre mí</h1>

        <p>
          Soy Lucía Borghi, psicóloga enfocada en el
          acompañamiento emocional y terapéutico.
        </p>

        <p>
          Trabajo desde una mirada humana, cercana y profesional,
          brindando herramientas para promover bienestar y crecimiento personal.
        </p>

      </div>

    </section>
  );
}

export default About;