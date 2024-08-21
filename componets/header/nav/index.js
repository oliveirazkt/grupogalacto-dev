import React from 'react'
import './style.css'

export default function Nav() {
  return (
    <nav className="container">
        <a href="#" id="logo">
            <img src="/Logo.svg" alt="Logomarca" />
        </a>
        <ul id="primary-menu">
            <li><a href="#">Sobre nos</a></li>
            <li><a href="#">Lojas</a></li>
            <li><a href="#">Duvidas</a></li>
                    
            <button>Entrar em contato </button>
        </ul>
    </nav>
  )
}
