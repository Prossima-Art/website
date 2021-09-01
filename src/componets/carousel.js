import React from 'react'
import '../sass/bootstrap.min.css';
import '../sass/carousel.scss';

import image_slider0 from '../img/image_slider0';
// import image_slider1 from '../img/image_slider1';
import image_slider2 from '../img/image_slider2';
import slider_0 from '../img/slider_0.svg';


class Carousel extends React.Component {
      render(){
          return(
            
            <div className="container-fluid">
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* Carousel indicators */}
    <ol className="carousel-indicators my-4" >
      <li data-target="#myCarousel" data-slide-to={0} className="active" />
      <li data-target="#myCarousel" data-slide-to={1} />
      <li data-target="#myCarousel" data-slide-to={2} />
    </ol>
    {/* Wrapper for carousel items */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slider_0} alt="First Slide" />
     
        <div className="container">
          <div className="UX"> UX/UI Design</div>
          <p>
            UX Design é Muito Importante Para Garantir o Sucesso Da Sua Empresa!
          </p>
          <button className="btn"> Veja Mais</button>
          <button className="btn-or"> Orçamento</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={image_slider2} alt="First Slide" />
  
        <div className="container">
          <div className="UX"> 3D Design</div>
          <p>
            Animações personalizadas e modelagem para humanizar o seu negocio em
            suas midias sociais
          </p>
          <button className="btn"> Veja Mais</button>
          <button className="btn-or"> Orçamento</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={image_slider0} alt="First Slide" />
    
        <div className="container">
          <div className="UX"> Ilustrations</div>
          <p>Ilustrações para qualquer tipo de projeto com originalidade</p>
          <button className="btn"> Veja Mais</button>
          <button className="btn-or"> Orçamento</button>
        </div>
      </div>
      {/* Carousel controls */}
      <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <svg
          width={185}
          height={185}
          viewBox="0 0 185 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M115.5 138.283L69.5 92.2832L115.5 46.2832"
            stroke="white"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a className="carousel-control-next" href="#myCarousel" data-slide="next">
        <svg
          width={185}
          height={185}
          viewBox="0 0 185 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69.5 138.283L115.5 92.2832L69.5 46.2832"
            stroke="white"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
</div>

          )
      }
}
export default Carousel