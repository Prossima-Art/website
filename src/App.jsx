import React from 'react';
// import reactDom from 'react-dom';
import './sass/style.scss';
import logo from "./img/logo/logo.png";
// import Carousel from './componets/carousel';
import Lottie from 'react-lottie';
import pig from './img/pig.json';
import btc from './img/BTC.json';
import cart from './img/cart.json';
import card from './img/creditcard.json';
import Logo from './componets/logo.json';
import carousel_1 from './img/slider_0.svg';
// import carousel_2 from './img/slider_0.svg';

// right_bar
import Group_1 from './img/Group_1.svg'
import Group_2 from './img/Group_2.svg'
import Group_3 from './img/Group_3.svg'
import Group_4 from './img/Group_4.svg'


import Linkedin from './img/linkedin.svg'
import Mail from './img/mail.svg'
import Github from './img/github.svg'
import Instagram from './img/instagram.svg'

import Grid from './componets/Grid_section'

import Header from './componets/header'

function App() {
  window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel");
    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
  });
  
  function carousel(root) {
    var figure = root.querySelector("figure"),
      nav = root.querySelector("nav"),
      images = figure.children,
      n = images.length,
      gap = root.dataset.gap || 0,
      bfc = "bfc" in root.dataset,
      theta = (2 * Math.PI) / n,
      currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
  
    setupNavigation();
  
    function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
  
      for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
  
      rotateCarousel(currImage);
    }
  
    function setupNavigation() {
      nav.addEventListener("click", onClick, true);
  
      function onClick(e) {
        e.stopPropagation();
  
        var t = e.target;
        if (t.tagName.toUpperCase() != "BUTTON") return;
  
        if (t.classList.contains("next")) {
          currImage++;
        } else {
          currImage--;
        }
  
        rotateCarousel(currImage);
      }
    }
  
    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
  }
  // right_content grid

  function setupTabs (){
    document.querySelectorAll('.tab-btn').forEach(button=>{
      button.addEventListener('click',()=>{
        
        
        const sidebar = button.parentElement;
        const tabs = sidebar.parentElement;
        const tabNumber = button.dataset.forTab;
        const tabActivate = tabs.querySelector(`.tab-content[data-tab="${tabNumber}"]`)
        
        sidebar.querySelectorAll('.tab-btn').forEach(button=>{
          button.classList.remove('tab-btn-active')
        })
         tabs.querySelectorAll('.tab-content').forEach(tab=>{
          tab.classList.remove('tab-content-active')
        })
        button.classList.add('tab-btn-active')
        tabActivate.classList.add('tab-content-active')
      })
    })
  }
  
  document.addEventListener('DOMContentLoaded',()=>{
    setupTabs();
  })

  
  return (
    
    <div className="App">
     <section id="pageA">
      <Header/>
    </section>
    <section id="pageB">

    <div className="Container_orcamento">
          <p className="paragraph_1">
          Design Gráfico <br/>      
          Para qualquer tipo de necessidade
          </p>
          <button className="btn_m1"> Orçamento </button>
      </div>
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
      
      <div className="carousel">
        <figure>
          <img src={carousel_1} alt />
          <img src={carousel_1} alt />
          <img src={carousel_1} alt />
        </figure>
        
        <nav>
          <button className="nav prev"/>
          <button className="nav next"/>
        </nav>
      </div>

      {/* <Carousel/> */}
      <div className="container">
          <div className="UX"> UX/UI Design</div>
          <p>
            UX Design é Muito Importante Para Garantir o Sucesso Da Sua Empresa!
          </p>
          <button className="btn"> Veja Mais</button>
          <button className="btn-or"> Orçamento</button>
        </div>
        
      </section>
      <section id="pageC">

      <div className="container_left">
            <div className="UX">3D,2D ilustrações</div>
            <p>
            Animações e ilustrações personalizadas  para humanizar o seu negocio em suas mídias sociais.
            </p>
            <button className="btn"> Veja Mais</button>
            <button className="btn-or"> Orçamento</button>
      </div>
      <Grid/>
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
