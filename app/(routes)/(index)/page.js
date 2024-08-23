"use client";

import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import Header from "../../../componets/header";
import Cards from "./componets/cards";

const images = [
  "./Logo-doce.svg",
  "./Logo-drop2.svg",
  "./Logo-galac.svg",
  "./Logo-doce.svg",
  "./Logo-drop2.svg",
  "./Logo-galac.svg",
  "./Logo-drop2.svg",
  "./Logo-galac.svg",
];

export default function Page() {
  

  return (
    <div id="section-header">
      <Header />
      <div id="banner">
        <img src="/Logo.branca.svg" alt="Logomarca" />
        <p className="paragrafo-gupo">
          O Grupo Galacto é uma conglomerado de empresas que <br />
          opera em diferentes setores, englobando diversas filiais <br />
          especializadas em áreas específicas
        </p>
        <div>
          <button className="button-Loja">Veja nossas Lojas </button>
          <button className="button-entrar">
            {" "}
            Entra em contato com nosco{" "}
          </button>
        </div>
      </div>
      <div className="container" id="sobre">
        <img
          className="imagem-retangular"
          src="/Mask group.svg"
          alt="Logomarca"
        />
        <div>
          <h1> Sobre nos </h1>
          <p>
            O Grupo Galacto é uma conglomerado de empresas que <br />
            opera em diferentes setores, englobando diversas filiais
            <br />
            especializadas em áreas específicas
          </p>
          <div id="number">
            <div>
              <h1>11.5M+</h1>
              <p>Produtos vendidos</p>
            </div>
            <div>
              <h1>21.9M</h1>
              <p>clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container Logo">
      <Swiper
      spaceBetween={10}
          slidesPerView={7}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image, index) => (
              <SwiperSlide>
              <img
                    src={image}
                    alt={`Slide ${index}`}
                    style={{ width: "100%" }}
            />
            </SwiperSlide>
                
              
            ))}
          
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
        {/* <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
          
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: 0 }}
            animate={{ x: ["0%", "-50%" ] }}
            
          >
            {items.map((image, index) => (
              <motion.div
                className="item"
                key={index}
                
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ width: "100%" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}
      </div>
      <div className="container titulo">
        <h1>Nossas Lojas</h1>
        <Cards />
      </div>
    </div>
  );
}
