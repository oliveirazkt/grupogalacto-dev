import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion'
import "./cards.css"

const empresas = [
    { logo: "./Logo-drop2.svg", descricao: "Na DropNexus, transformamos suas ideias em negócios lucrativos. Oferecemos tudo o que você precisa para começar e escalar sua loja online sem complicações." },
    { logo: "./Logo-galac.svg", descricao: "Descubra um mundo de praticidade e inovação na Utilidades Premium. Temos tudo para facilitar o seu dia a dia, desde itens para a casa até ferramentas essenciais" },
    { logo: "./Logo-doce.svg", descricao: "Você está prestes a entrar no mundo dos sabores mais irresistíveis! Na Doçura Infinita, cada mordida é uma explosão de felicidade." },
    { logo: "./Logo-drop2.svg", descricao: "Na DropNexus, transformamos suas ideias em negócios lucrativos. Oferecemos tudo o que você precisa para começar e escalar sua loja online sem complicações." },
    { logo: "./Logo-galac.svg", descricao: "Descubra um mundo de praticidade e inovação na Utilidades Premium. Temos tudo para facilitar o seu dia a dia, desde itens para a casa até ferramentas essenciais" },
    { logo: "./Logo-doce.svg", descricao: "Você está prestes a entrar no mundo dos sabores mais irresistíveis! Na Doçura Infinita, cada mordida é uma explosão de felicidade." },

]

export default function Cards() {
    
    const carousel = useRef();
    const [width, setWidth] = useState(0)
    
    useEffect(() => {
      console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
  
    }, [])
  
    return (

    <div className="container Logo">
    <motion.div ref={carousel} className="carousel" whileTap={{ cursor:"grabbing"}}>
      <motion.div
      className="inner"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {empresas.map((e, i) => (
            <motion.div className="item" key={i}>
                <div className="card-item">
                    <img src={e.logo} alt="Texto alt" />
                    <p>
                        {e.descricao}
                    </p>
                </div>
          </motion.div>
        ))}
    </motion.div>
    </motion.div>
  </div>
  )
}
