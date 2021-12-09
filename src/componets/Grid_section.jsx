import React from "react";
// import { collection } from 'firebase/firestore/lite';
// import  "firebase/firestore";
// import db from '../server/index';
// import  collection  from "firebase/firestore";
import '../sass/style.scss';
import '../sass/style_mobile.scss';

// right_grid
import Lottie from 'react-lottie';
import pig from '../img/pig.json';
import btc from '../img/BTC.json';
import cart from '../img/cart.json';
import card from '../img/creditcard.json';

// left_grid
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

 
  
    const Grid =()=> {
        
          
              // const [name,setName] = useState("");
              // const [email,setEmail] = useState("");
              // const [message,setMessage] = useState("");
              // const handleSubmit = (e) => {
              //   e.preventDefault();

              //   FirebaseFirestore.collection(db,'contacts').add({
              //     name:name,
              //     email:email,
              //     message:message
              //   })
              //   .then(() =>{
              //     alert('Message has been submitted 😁')
              //   })
              //   .catch(error => {
              //     alert(error,'try again later 😴')
              //   });
              //   setName("");
              //   setEmail("");
              //   setMessage("");
              // }
              




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

                    <div className="tabs">
                    <div className="sidebar">
                        {/* tabs buttons  */}
                        <button className="tab-btn tab-btn-active" data-for-tab={1}>EQUIPE</button>
                        <button className="tab-btn" id="contact" data-for-tab={2}>CONTATO</button>
                        <button className="tab-btn" data-for-tab={3}>SOCIAL</button>
                    </div>
                    {/* tabs content  */}
                    <div className="content">
                        <div className="tab-content tab-content-active" data-tab={1}>
                        <div className="grid_group ">
                            <div className="div1"> <img src={Group_1} alt="Equipe" /></div>
                            <div className="div2"> <img src={Group_2} alt="Equipe" /></div>
                            <div className="div3"> <img src={Group_3} alt="Equipe" /></div>
                            <div className="div4"> <img src={Group_4} alt="Equipe" /></div>
                        </div>
                        </div>
                        <div className="tab-content" data-tab={2}>
                        <form name="contact" method="POST" data-netlify="true" 
                        // onSubmit={handleSubmit}
                        >
                          <div>
                          <label><textarea required name="message" placeholder="Digite sua messagem" 
                          // value={message}
                          // onChange={(e)=> setMessage(e.target.value)}
                          ></textarea></label> 
                          </div>
                          
                          <div>
                            <label><input  required type="text" name="name" placeholder="Seu nome" 
                            // value={name}
                            // onChange={(e)=> setName(e.target.value)}
                            /></label>   
                            </div>
                          
                          <div>
                            <label><input required type="email"  name="email" placeholder="Seu E-mail" 
                            // value={email}
                            // onChange={(e)=> setEmail(e.target.value)}
                            /></label>
                            </div>
                          
                            <button type="submit" className="btn">Enviar</button>
                          
                        </form>
                        </div>
                        <div className="tab-content" data-tab={3}>
                        <div className="grid_group">
                          {/* <p className="about">
                        Entre em contato com a gente, vamos adorar te ajudar com seus
projetos. Para começarmos é bem fácil, a primeira coisa a fazer é
me contar um pouco sobre sua ideia e necessidade.
</p> */}
                             <div className="div1 socials" > <a href="https://www.linkedin.com/in/alannelucena?originalSubdomain=br"> <img src={Linkedin} alt="Linkedin" /> </a> </div> 
                            <div className="div2 socials" > <img src={Mail} alt="Mail" /></div> 
                            <div className="div3 socials" > <a href="https://www.instagram.com/laneartdesign/?hl=en"> <img src={Instagram} alt="Instagram" /></a></div> 
                            <div className="div4 socials"><a href="https://github.com/Lane-Art-Design"> <img src={Github} alt="Github" /></a></div>  
                        </div>  
                        </div>
                    </div>
                    </div>

                    </div>

                </>
              )
          }
    export default Grid