// import React, { useEffect, useState } from "react";

// import Lottie from "react-lottie";
// import "../sass/style.scss"
// import * as location from "./logo.json";


// const defaultOptions1 = {
//   loop: true,
//   autoplay: true,
//   animationData: location.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };
// const defaultOptions2 = {
//     loop: true,
//     autoplay: true,
//     animationData: location.default,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };


// function PreLoader2() {
//   const [data, setData] = useState([]);
//   const [loading, setloading] = useState(undefined);
//   const [completed, setcompleted] = useState(undefined);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(json);
//           setData(json);
//           setloading(true);

//           setTimeout(() => {
//             setcompleted(true);
//           }, 1000);
//         });
//     }, 2000);
//   }, []);


//   return (
//     <>
//     <div className="loading" id="loading">
//       {!completed ? (
//         <>
//           {!loading ? (
//             <Lottie options={defaultOptions1} height={200} width={200} style={{ margin: "0 auto", display: "flex", alignItems: "center",  top: "50%",
//         }}/>) : (
//             <Lottie options={defaultOptions2} height={200} width={200} />
//           )}
//         </>
//       ) : (
//         <>
//         </>
//       )}
//       </div>
//     </>
//   );
// }

// export default PreLoader2;