import "../styles/about.css";

import luci from "../assets/LuciFoto.png";

function About() {
  return (
    <section className="about_page">

      <img src={luci} alt="Lucia" />

      <div>

        <h1>Sobre mí</h1>

        <p>
          Soy Lucía Borghi, psicóloga clínica y sociocomunitaria dedicada a acompañar procesos emocionales individuales y grupales desde una mirada cercana, humana y profesional.  
Mi objetivo es brindarte un espacio seguro donde puedas comprender lo que te sucede, desarrollar mayor claridad sobre tus emociones y encontrar herramientas para sentirte mejor. 

        </p>

        <p>
          Trabajo desde la psicoterapia con enfoque gestáltico y también acompaño procesos de orientación vocacional ocupacional.
Entiendo la terapia como un espacio de escucha, registro y construcción personal, donde cada proceso es único y merece ser acompañado respetando los tiempos, necesidades y singularidad de cada persona.
Busco ofrecer un acompañamiento basado en la empatía, la presencia y el vínculo terapéutico, favoreciendo el autoconocimiento, el desarrollo de recursos personales y la posibilidad de construir formas más saludables y auténticas de habitar la vida cotidiana.

        </p>

      </div>

    </section>
  );
}

export default About;