import "../styles/services.css";

import therapy1 from "../assets/services/therapy1.jpg";
import therapy2 from "../assets/services/therapy2.jpg";
import therapy3 from "../assets/services/therapy3.jpg";

function ServicesPreview() {
  return (
    <section
      className="services"
      id="therapy"
    >

      <h2>Terapias</h2>

      <div className="services_grid">

        <div className="service_card">

          <img src={therapy1} alt="" />

          <div className="service_content">

            <h3>Terapia Presencial</h3>

            <p>
              Un espacio cálido, confidencial y cercano.
            </p>

          </div>

        </div>

        <div className="service_card">

          <img src={therapy2} alt="" />

          <div className="service_content">

            <h3>Terapia Online</h3>

            <p>
              Sesiones desde cualquier lugar.
            </p>

          </div>

        </div>

        <div className="service_card">

          <img src={therapy3} alt="" />

          <div className="service_content">

            <h3>Terapia de Pareja</h3>

            <p>
              Comunicación y acompañamiento emocional.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;