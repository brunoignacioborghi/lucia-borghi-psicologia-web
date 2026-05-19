import "../styles/services.css";

function Therapy() {
  return (
    <section className="therapy_page">

      <h1>Terapias</h1>

      <div className="services_grid">

        <div className="service_card">
          <h3>Terapia Presencial</h3>
        </div>

        <div className="service_card">
          <h3>Terapia Online</h3>
        </div>

        <div className="service_card">
          <h3>Terapia de Pareja</h3>
        </div>

      </div>

    </section>
  );
}

export default Therapy;