import "../styles/testimonials.css";

import person1 from "../assets/testimonials/person1.jpg";
import person2 from "../assets/testimonials/person2.jpg";
import person3 from "../assets/testimonials/person3.jpg";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>Testimonios</h2>

      <div className="testimonial_grid">

        <div className="testimonial">

          <div className="testimonial_top">

            <img src={person1} alt="" />

            <div>
              <h4>Carla Heredia</h4>
              <span>★★★★★</span>
            </div>

          </div>

          <p>
            Excelente profesional, muy cercana y humana.
          </p>

        </div>

        <div className="testimonial">

          <div className="testimonial_top">

            <img src={person2} alt="" />

            <div>
              <h4>Melina Dominguez</h4>
              <span>★★★★★</span>
            </div>

          </div>

          <p>
            Me ayudó muchísimo en mi proceso emocional.
          </p>

        </div>

        <div className="testimonial">

          <div className="testimonial_top">

            <img src={person3} alt="" />

            <div>
              <h4>Verónica Yñiguez</h4>
              <span>★★★★★</span>
            </div>

          </div>

          <p>
            Un espacio seguro y profesional.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;