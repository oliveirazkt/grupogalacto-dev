import React from 'react'
import './profile.css'

export default function Profile({image, name, biograpy, location, country, photos }) {
  return (
    <div className="container">
        <div id="profile">
          <img src={image} alt="imagem de perfil" />
          <div>
          <h1>{name}</h1>
            <p>
              {biograpy}
            </p>
          </div>
        </div>
        <ul id="info">
          <li>
            <img src="/incos/MapPin.svg" alt="Mapa" />
          <span>
            {location ? location : "Não Informado"}
            </span>
          </li>
          <li>
            <img src="/incos/AirplaneTilt.svg" alt="aviao" />
          <span>
          {country && country >= 1 ? country + " Paises" : "Vamos Querer Viajar ? "}
          </span>
          </li>
          <li>
            <img src="/incos/Image.svg" alt="imagem" />
          <span> 
          {photos && photos >= 1 ? photos + " fotos" : "Vamos Querer fotografar ? "}
            </span>
          </li>
        </ul>
      </div>
  )
}
