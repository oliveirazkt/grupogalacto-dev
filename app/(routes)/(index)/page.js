"use client";
import "./style.css";
import Header from "../../../componets/header";

export default function Page() {
  return (
    <div id="section-header">
      <Header />
      <div id="banner">
        <img src="/Logo.branca.svg" alt="Logomarca" />
        <p className="paragrafo-gupo">
          O Grupo Galacto é uma conglomerado de empresas que <br/>
          opera em diferentes setores, englobando diversas filiais <br/>
          especializadas em áreas específicas
        </p>
        <div>
          <button className="button-Loja">Veja nossas Lojas </button>
          <button className="button-entrar"> Entra em contato com nosco </button>
          </div>
      </div>
      <div className="container" id="sobre" >
        <img className="imagem-retangular" src="/Mask group.svg" alt="Logomarca" />
        <div>
          <h1> Sobre nos </h1>  
          <p>
            
            O Grupo Galacto é uma conglomerado de empresas que <br/>
            opera em diferentes setores, englobando diversas filiais<br/>
            especializadas em áreas específicas
          </p>
          <div id="number"> 
            <div>
              <h1>
              11.5M+
              </h1>
              <p>
                Produtos vendidos
              </p>
            </div>
            <div>
              <h1>
              21.9M
              </h1>
              <p>
                clientes  satisfeitos
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="container Logo">
          <img src="/Logo-doce.svg" alt="Logo Doce" />
          <img src="/Logo-drop2.svg" alt="Logo Doce" />
          <img src="/Logo-galac.svg" alt="Logo Doce" />
          <img src="/Logo-doce.svg" alt="Logo Doce" />
          <img src="/Logo-drop2.svg" alt="Logo Doce" />
          <img src="/Logo-doce.svg" alt="Logo Doce" />
          <img src="/Logo-drop2.svg" alt="Logo Doce" />
          <img src="/Logo-galac.svg" alt="Logo Doce" />
          <img src="/Logo-doce.svg" alt="Logo Doce" />
          <img src="/Logo-drop2.svg" alt="Logo Doce" />
      </div>
      <div className="container titulo">
        <h1>
        Nossas  Lojas
        </h1>
        
      </div>
    </div>
  );
}
