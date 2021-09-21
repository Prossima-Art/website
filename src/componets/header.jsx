import React from 'react'
import '../sass/bootstrap.min.css';
import '../sass/head.scss';
import '../sass/style.scss';
import Lottie from 'react-lottie';
import Logo from '../componets/logo.json';
import image_slider0 from '../img/image_slider0';
// import image_slider1 from '../img/image_slider1';
import image_slider2 from '../img/image_slider2';
import slider_0 from '../img/slider_0.svg';


class Header extends React.Component {
      render(){

  const Logo_animation = {
    loop: false,
    autoplay: true, 
    animationData: Logo,
  };
          return(
            <>

            <div className="topnav">
                <div className="topnav-right row">
                <a className="active" href="#home">
                    INICIO
                </a>
                <a href="#">
                    PERSONALISE{" "}
                    <em className="subtopnav">
                    Sua imagem!
                    </em>
                </a>
                <a href="#pageC">
                    ANIME{" "}
                    <em className="subtopnav">
                    {" "}
                    <br /> Suas ideias!
                    </em>
                </a>
                <a href="#">CONTATO</a>
                </div>
            </div>

             <Lottie options={Logo_animation}
                height={720}
                width={720}
                style={{ position: "absolute" }}
                />
            </>
          )
      }
}
export default Header