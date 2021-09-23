import React from 'react'

import '../sass/style.scss';
import '../sass/style_mobile.scss';


import Lottie from 'react-lottie';
import pig from '../img/pig.json';
import btc from '../img/BTC.json';
import cart from '../img/cart.json';
import card from '../img/creditcard.json';
// import Logo from '../componets/logo.json';
// import carousel_1 from './img/slider_0.svg';
// import carousel_2 from './img/slider_0.svg';

// right_bar
import Group_1 from '../img/Group_1.svg'
import Group_2 from '../img/Group_2.svg'
import Group_3 from '../img/Group_3.svg'
import Group_4 from '../img/Group_4.svg'


import Linkedin from '../img/linkedin.svg'
import Mail from '../img/mail.svg'
import Github from '../img/github.svg'
import Instagram from '../img/instagram.svg'

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

    
    class Grid extends React.Component {
        
          render(){
              return(
                <>
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

                    <div className="tabs" id="contact">
                    <div className="sidebar">
                        {/* tabs buttons  */}
                        <button className="tab-btn tab-btn-active" data-for-tab={1}>EQUIPE</button>
                        <button className="tab-btn" data-for-tab={2}>CONTATO</button>
                        <button className="tab-btn" data-for-tab={3}>SOCIAL</button>
                    </div>
                    {/* tabs content  */}
                    <div className="content">
                        <div className="tab-content tab-content-active" data-tab={1}>
                        <div class="grid_group ">
                            <div class="div1"> <img src={Group_1} alt="Equipe" /></div>
                            <div class="div2"> <img src={Group_2} alt="Equipe" /></div>
                            <div class="div3"> <img src={Group_3} alt="Equipe" /></div>
                            <div class="div4"> <img src={Group_4} alt="Equipe" /></div>
                        </div>
                        </div>
                        <div className="tab-content" data-tab={2}>
                        <form name="contact" method="POST" data-netlify="true">
                          <p>
                          <label><textarea required name="message" placeholder="Digite sua messagem"></textarea></label> 
                          <p/>
                          </p>
                          <p>
                            <label><input  required type="text" name="name" placeholder="Seu nome" /></label>   
                          </p>
                          <p>
                            <label><input required type="email" name="email" placeholder="Seu E-mail"/></label>
                          </p>
                          <p>
                            <button type="submit"></button>
                          </p>
                        </form>
                        </div>
                        <div className="tab-content" data-tab={3}>
                        <div class="grid_group">
                            <div class="div1 socials" > <a href="https://www.linkedin.com/in/alannelucena?originalSubdomain=br"> <img src={Linkedin} alt="Linkedin" /> </a> </div> 
                            <div class="div2 socials" > <img src={Mail} alt="Mail" /></div> 
                            <div class="div3 socials" > <a href="https://www.instagram.com/laneartdesign/?hl=en"> <img src={Instagram} alt="Instagram" /></a></div> 
                            <div class="div4 socials"><a href="https://github.com/Lane-Art-Design"> <img src={Github} alt="Github" /></a></div> 
                        </div>  
                        </div>
                    </div>
                    </div>

                    </div>

                </>
              )
          }
    }
    export default Grid