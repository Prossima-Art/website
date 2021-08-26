import React from 'react';
import './sass/style.scss';
import assent1 from "./img/Asset 21.svg";
import assent2 from "./img/Asset 31.svg";
import assent3 from "./img/Asset 41.svg";
import assent4 from "./img/Asset 71.svg";
import logo from "./img/logo/logo.png";
import Carousel from './componets/carousel';
import Lottie from 'react-lottie';
import animationData from './data.json';


function App() {
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    
    <div className="App">
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#6a82ad" />
    <title>Lane Art Design</title>
    <link rel="icon" href="./img/logo/logo.png" type="image/svg+xml" />
    <link href="style.css" type="text/css" rel="stylesheet" />
    <section id="pageA">
      <div className="topnav">
        <div className="topnav-right row">
          <a className="active" href="#home">
            INICIO
          </a>
          <a href="#">
            CUSTUMISE{" "}
            <em className="subtopnav">
              <br /> Entorno!
            </em>
          </a>
          <a href="#">
            PERSONALISE{" "}
            <em className="subtopnav">
              {" "}
              <br /> Sua imagem!
            </em>
          </a>
          <a href="#">CONTATO</a>
        </div>
      </div>
      <Lottie options={defaultOptions}
              height={400}
              width={400}></Lottie>
    </section>
    <section id="pageB">
      <div className="waterfall">
        <div className="waterfall_drops _1" />
        <div className="waterfall_drops _2" />
        <div className="waterfall_drops _3" />
        <div className="waterfall_drops _4" />
        <div className="waterfall_drops _5" />
        <div className="waterfall_drops _6" />
        <div className="waterfall_drops _7" />
        <div className="waterfall_drops _8" />
        <div className="waterfall_drops _9" />
        <div className="waterfall_drops _10" />
      </div>
      <carousel/>
      ) 
      <Carousel/>
    </section>
    <section id="pageC">
      <div className="grid-container">
        <div>
          <img src={assent1} alt="Prazo de entrega" className="sadtruck"/>
          <p className="p-description">Prazo de entrega</p>
          <p className="p-description-1">Os melhores prazos para você que não quer esperar tanto pelo seu produto</p>
        </div>
        <div>
          <img src={assent2} alt="Prazo de entrega" />
          <p className="p-description">Melhores descontos</p>
          <p className="p-description-1">20% OFF, nas compras acima de 500 reais.</p>
        </div>
        <div>
          <img src={assent3} alt="Prazo de entrega" />
          <p className="p-description">12x sem juros</p>
          <p className="p-description-1">Parcele suas compras em todos os cartões.</p>
        </div>
        <div>
          <img src={assent4} alt="Prazo de entrega" />
          <p className="p-description">Quer mais descontos?</p>
          <p className="p-description-1">Obtenha melhores descontos com pagamentos em criptomoedas.</p>
        </div>
      </div>

      <div className="megafooter">
        <p>
          SOBRE <br />
          Pessoas apaixonadas pelo que fazem e dispostas a ajudá-lo a alcançar o seu
          sucesso! <br />
          Oferecemos soluções inovadoras para que pessoas tenham a <br />
          oportunidade de se desenvolver de forma contínua e arrojada. <br /> Além
          de valorizar o cliente através de um atendimento especial e diferenciado.
        </p>
      </div>
      <div id="footer">
      
        <div>
          <a href="#">Suport</a>
        </div>
        <div>
          <img
            src={logo}
            alt="logo"
            width="120px"
            style={{ marginTop: "-15px" }}
          />
        </div>
        <div>
          <a href="https://github.com/Lane-Art-Design/website">Source Code</a>
        </div>
      </div>
    </section>

  </div>
  );
}

export default App;
