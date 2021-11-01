import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './sass/style.scss';
// import {i18n} from './translate/i18n'
import logo from "./img/logo/logo.png"; 
import Logo from './componets/logo.json';
import Cube from './img/cube.png'
import NotFoundPage from './componets/404-error';
import Nav from './componets/header';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // You can also use <link> for styles
// to const a component u need inset it afert another imports 
import carousel_1 from './img/slider_0.svg';

const Lottie = lazy(() => import('react-lottie')); // for our animations
const Grid = lazy(() => import('./componets/Grid_section'));
AOS.init();

function App() {
  window.addEventListener("load",()=>{for(var e=document.querySelectorAll(".carousel"),l=0;l<e.length;l++)carousel(e[l])});
 
  async function carousel(root){var figure=root.querySelector("figure"),nav=root.querySelector("nav"),images=figure.children,n=images.length,gap=root.dataset.gap||0,bfc="bfc" in root.dataset,theta=(2*Math.PI)/n,currImage=0;setupCarousel(n,parseFloat(getComputedStyle(images[0]).width));window.addEventListener("resize",()=>{setupCarousel(n,parseFloat(getComputedStyle(images[0]).width))})
    setupNavigation();
  
    async function setupCarousel(n,s){var apothem=s/(2*Math.tan(Math.PI/n));figure.style.transformOrigin=`50% 50% ${-apothem}px`;for(var i=0;i<n;i++)images[i].style.padding=`${gap}px`;for(i=1;i<n;i++){images[i].style.transformOrigin=`50% 50% ${-apothem}px`;images[i].style.transform=`rotateY(${i * theta}rad)`}
if(bfc)
for(i=0;i<n;i++)images[i].style.backfaceVisibility="hidden";rotateCarousel(currImage)}
  
async function setupNavigation(){nav.addEventListener("click",onClick,!0);function onClick(e){e.stopPropagation();var t=e.target;if(t.tagName.toUpperCase()!=="BUTTON")return;if(t.classList.contains("next")){currImage++}else{currImage--}
rotateCarousel(currImage)}}
async function rotateCarousel(imageIndex){figure.style.transform=`rotateY(${imageIndex * -theta}rad)`}}
async function setupTabs(){document.querySelectorAll('.tab-btn').forEach(button=>{button.addEventListener('click',()=>{const sidebar=button.parentElement;const tabs=sidebar.parentElement;const tabNumber=button.dataset.forTab;const tabActivate=tabs.querySelector(`.tab-content[data-tab="${tabNumber}"]`)
sidebar.querySelectorAll('.tab-btn').forEach(button=>{button.classList.remove('tab-btn-active')})
tabs.querySelectorAll('.tab-content').forEach(tab=>{tab.classList.remove('tab-content-active')})
button.classList.add('tab-btn-active')
tabActivate.classList.add('tab-content-active')})})}
document.addEventListener('DOMContentLoaded',()=>{setupTabs()})

  const Logo_animation = {
    loop: false,
    autoplay: true, 
    animationData: Logo,
  };
  
  
  return (
    <BrowserRouter>
      <Switch>
    <div className="App">
      
     <section id="pageA">
     <Suspense fallback={<div>Loading ... </div>}>
     <Lottie options={Logo_animation}
                height={520}
                width={530}
                style={{ left:"0", right:"0" }}
                />
     </Suspense>
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
        
        <div className="carousel " id="carousel">
          <figure>
            <img src={carousel_1} alt="carousel" />
            <img src={carousel_1} alt="carousel" />
            <img src={carousel_1} alt="carousel" />
            {/* <img src={carousel_1} alt="carousel" /> */}
          </figure>
          
          <nav>
            <button className="nav prev"/>
            <button className="nav next"/>
          </nav>
          </div>
        
        <div className="container"  id="#suport">
            <h1 className="UX" data-aos="fade-right"> UX/UI Design</h1>
            <p>
              UX Design é Muito Importante Para Garantir o Sucesso Da Sua Empresa!
            </p>
            <button className="btn"> Veja Mais</button>
            <button className="btn-or"> Orçamento</button>
          
          </div>
      </section>
      <section id="pageC">
      <div className="grid_Second">
      <div className="container_left div1">
            <div className="UX" data-aos="fade-left">3D,2D ilustrações</div>
            <p>
              Animações e ilustrações personalizadas  para humanizar o seu negocio em suas mídias sociais.
            </p>
            <button className="btn"> Veja Mais</button>
            <button className="btn-or"> Orçamento</button>
      </div>
      
      <div>
        <div className="div2">
          <div className="carousel" id="carousel">
            <figure>
              <img src={Cube} alt="Cube 3D" />
              <img src={Cube} alt="carousel" />
              <img src={Cube} alt="carousel" />
            </figure>
            
            <nav className="nevsecond">
              <button className="nav prev"/>
              <button className="nav next"/>
            </nav>
          </div>
        </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading ... </div>}>
      <Grid/>
      </Suspense>
      <div className="megafooter" data-aos="fade-up"
     data-aos-duration="3000">

        <nav className="foot_p">
          SOBRE 
          <p className="p-chill">
              Pessoas apaixonadas pelo que fazem e dispostas a ajudá-lo a alcançar o seu sucesso!
            Oferecemos soluções inovadoras para que pessoas tenham a 
            oportunidade de se desenvolver de forma contínua e arrojada. 
            Além de valorizar o cliente através de um atendimento especial e diferenciado.
          </p> 
        </nav>
      </div>
      <div id="footer">
      
        <div>
          <a href="#suport">Suport</a> 
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
    <Nav />
  </div>
  
  
    <Route path="/404" component={NotFoundPage}/>
    <Redirect to="/404" />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
