import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Logo from './logo.json';
import App from "../App";
import styled from 'styled-components';

const Div = styled.div`
background:#222222;
background: linear-gradient( to right, rgb(143, 142, 141) 0%, rgb(237, 235, 233) 50%, rgb(143, 142, 141) 100%) 0 0 /  200% 100%   rgb(243, 242, 241);
animation: linearAnim 2.25s infinite linear;
width:100vw;
height:100vh;

@keyframes linearAnim {
    100% {
      background-position: -100% 0;
    }
  }

`;

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: Logo,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: Logo,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function PreLoader() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1200);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
        <Div>
          {!loading ? (
            <Lottie options={defaultOptions1}
            
            height={200} width={300} />
          ) : (
            <Lottie options={defaultOptions2} height={200} width={300} />
          )}
          </Div>
        </>
      ) : (
        <>
          <App></App>
        </>
      )}
    </>
  );
}

export default PreLoader;