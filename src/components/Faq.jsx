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
        question="¿Cómo son las sesiones?"
        answer="Las sesiones tienen una duración aproximada de 45 minutos a 1 hora.
La frecuencia puede ser semanal, quincenal o mensual, dependiendo de las necesidades, objetivos y posibilidades de cada persona. El proceso terapéutico se construye de manera personalizada, buscando que el espacio sea accesible y adecuado para cada situación.
Las sesiones pueden realizarse de forma presencial o virtual. 
"
      />

    </section>
  );
}

export default Faq;