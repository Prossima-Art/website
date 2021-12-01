import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Logo from './logo.json';
import App from "../App";
import styled from 'styled-components';

const Div = styled.div`
    background: linear-gradient(300deg,#4b87b5,#b03754);
    background-size: 120% 120%;
    animation: gradient-animation 1.5s ease infinite;
    width:100vw;
    height:100vh;

@keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
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
  }, [data]);

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