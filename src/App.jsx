import React from 'react';
// import reactDom from 'react-dom';
import './sass/style.scss';
import logo from "./img/logo/logo.png";
import Carousel from './componets/carousel';
import Lottie from 'react-lottie';
import pig from './img/pig.json';
import btc from './img/BTC.json';
import cart from './img/cart.json';
import card from './img/creditcard.json';

function App() {
  const animaton_pig = {
    loop: true,
    autoplay: true, 
    animationData: pig,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const animaton_btc_eth = {
    loop: true,
    autoplay: true, 
    animationData: btc,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const animaton_cart = {
    loop: true,
    autoplay: true, 
    animationData: cart,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const animaton_card = {
    loop: true,
    autoplay: true, 
    animationData: card,
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
          <a href="#pageC">
            PERSONALISE{" "}
            <em className="subtopnav">
              {" "}
              <br /> Sua imagem!
            </em>
          </a>
          <a href="#">CONTATO</a>
        </div>
      </div>
        <div className="Container_orcamento">
          <p className="paragraph_1">
          Design Gráfico <br/>      
          Para qualquer tipo de necessidade
          </p>
          <button className="btn_m1"> Orçamento </button>
      </div>
        {/* <Lottie options={defaultOptions}
                height={400}
                width={400}></Lottie> */}
        
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
        <div className="waterfall_drops _10"/>
      </div>
      
      <Carousel/>
    </section>
    <section id="pageC">
      <div className="container_grid">
        <div className="flexbox">
          <div className="item">
            <div className="content">
              <Lottie options={animaton_cart}
                height={120}
                width={120}
                />
            
            <p className="p-description">Prazo de entrega</p>
            <p className="p-description-1">Os melhores prazos para você que não quer esperar tanto pelo seu produto</p>
            </div>
          </div>
          <div className="item">
            <div className="content">
            <Lottie options={animaton_pig}
                height={120}
                width={120}
                />
            <p className="p-description">Melhores descontos</p>
            <p className="p-description-1">20% OFF, nas compras acima de 500 reais.</p> 
            </div>
          </div>
          <div className="item">
            <div className="content">
            <Lottie options={animaton_card}
                height={120}
                width={120}
                />
            <p className="p-description">12x sem <br/> juros</p>
            <p className="p-description-1">Parcele suas compras em todos os cartões.</p>
            </div>
          </div>
          <div className="item">
            <div className="content">
            <Lottie options={animaton_btc_eth}
                height={125}
                width={125}
                />
            <p className="p-description">Quer mais descontos?</p>
            <p className="p-description-1">Obtenha melhores descontos com pagamentos em criptomoedas.</p>
            </div>
          </div>
        </div>
                <div class="flexbox_right container_rigt">
           <ul>
              <li class="one">
                <a href="#">Equipe</a></li>
              <li class="two">
                <a href="#social">Social</a></li>
              <li class="three">
                <a href="#">Contato</a></li>
            <hr />
          </ul>
        </div>
      </div>
      <div className="megafooter">
        <p className="foot_p">
          SOBRE <br />
          <p className="p-chill">
Pessoas apaixonadas pelo que fazem e dispostas a ajudá-lo a alcançar o seu sucesso!
 Oferecemos soluções inovadoras para que pessoas tenham a 
oportunidade de se desenvolver de forma contínua e arrojada. 
Além de valorizar o cliente através de um atendimento especial e diferenciado.
          </p> 
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
          <a href="https://github.com/Lane-Art-Design/website"> Source Code </a>
        </div>
      </div>
    </section>

  </div>
  );
}

export default App;
