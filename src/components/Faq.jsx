import { useState } from "react";

function Item({ question, answer }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="faq_item">

      <button onClick={() => setOpen(!open)}>
        {question}
      </button>

      {open && (
        <p>{answer}</p>
      )}

    </div>
  );
}

function Faq() {
  return (
    <section className="faq">

      <h2>Preguntas frecuentes</h2>

      <Item
        question="¿Cómo sé si necesito terapia?"
        answer="La terapia puede ayudarte si sentís ansiedad, angustia o dificultades emocionales."
      />

      <Item
        question="¿Cómo es la primera sesión?"
        answer="Es un espacio para conocernos y entender qué necesitás."
      />

      <Item
        question="¿Cuánto dura cada sesión?"
        answer="Generalmente entre 45 y 60 minutos."
      />

    </section>
  );
}

export default Faq;