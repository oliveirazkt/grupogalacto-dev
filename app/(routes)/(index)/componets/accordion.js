import React, { useState } from 'react';
import { CaretDown } from "@phosphor-icons/react";
import "./accordion.css";

export default function Accordion() {
  // Estado para controlar qual acordeão está ativo
  const [activeIndex, setActiveIndex] = useState(null);

  // Função para alternar a visibilidade de cada acordeão
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Qual é o horário de funcionamento das nossas lojas?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti voluptatem enim facilis maxime, et iure magnam suscipit consequatur nemo provident dolores temporibus praesentium nisi quae unde nostrum commodi sit.",
    },
    {
      question: "Quais são os principais serviços/produtos oferecidos pelo grupo de empresas?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti voluptatem enim facilis maxime, et iure magnam suscipit consequatur nemo provident dolores temporibus praesentium nisi quae unde nostrum commodi sit.",
    },
    {
      question: "Como posso entrar em contato com o suporte ao cliente?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti voluptatem enim facilis maxime, et iure magnam suscipit consequatur nemo provident dolores temporibus praesentium nisi quae unde nostrum commodi sit.",
    },
    {
      question: "Onde estão localizadas as filiais do grupo de empresas?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti voluptatem enim facilis maxime, et iure magnam suscipit consequatur nemo provident dolores temporibus praesentium nisi quae unde nostrum commodi sit.",
    },
    {
      question: "Como posso fazer uma compra/encomenda?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti voluptatem enim facilis maxime, et iure magnam suscipit consequatur nemo provident dolores temporibus praesentium nisi quae unde nostrum commodi sit.",
    },
  ];

  return (
    <>
      {accordionData.map((item, index) => (
        <div id="accordion" key={index}>
          <a
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <CaretDown
              className={`arrow ${activeIndex === index ? 'open' : ''}`}
              size={32}
              color="#fff"
            />
          </a>
          <div
            className={`accordion-body ${
              activeIndex === index ? 'active' : ''
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
}
