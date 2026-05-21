import "../styles/testimonials.css";

import Foto1 from "../assets/testimonials/Foto1.jpg";
import Foto2 from "../assets/testimonials/Foto2.jpg";
import Foto3 from "../assets/testimonials/Foto3.jpg";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>Reseñas</h2>

      <div className="testimonial_grid">

        {/* Bianca */}
        <div className="testimonial">

          <div className="testimonial_top">

            <img src={Foto3} alt="Bianca Venticinque" />

            <div>
              <h4>Bianca Venticinque</h4>
              <span>★★★★★</span>
              <small>Local Guide · 15 reseñas · 8 fotos</small>
            </div>

          </div>

          <p>Excelente profesional</p>

        </div>

        {/* Leonel */}
        <div className="testimonial">

          <div className="testimonial_top">

            <img src={Foto1} alt="Leonel Nievas" />

            <div>
              <h4>Leonel Nievas</h4>
              <span>★★★★★</span>
              <small>1 reseña · 2 fotos · recién</small>
            </div>

          </div>

          <p>
            Excelente profesional, en cada una de las sesiones se nota empatía y compromiso con el paciente.
            Estoy muy agradecido por el espacio seguro que me brinda.
          </p>

        </div>

        {/* Jazantogabo */}
        <div className="testimonial">

          <div className="testimonial_top">

            <img src={Foto2} alt="jazantogabo" />

            <div>
              <h4>jazantogabo</h4>
              <span>★★★★★</span>
              <small>Nueva</small>
            </div>

          </div>

          <p>
            Es excelente, muy empática, siempre atenta a cada detalle en las sesiones 🫶🏼
            me ayudó muchísimo!!
          </p>

        </div>

      </div>

      <div className="google_button_wrapper">

        <a
          href="https://www.google.com/maps/place/Psicolog%C3%ADa+-+Lic.+Borghi+Luc%C3%ADa/@-31.4114278,-64.208064,585m/data=!3m1!1e3!4m6!3m5!1s0x943299cb28194e31:0x1fe01d19e3e1be2c!8m2!3d-31.4114324!4d-64.2054891!16s%2Fg%2F11ychj_1cq?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="google_button"
        >
          Ver todas las reseñas en Google Maps
        </a>

      </div>

    </section>
  );
}

export default Testimonials;