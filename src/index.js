import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';   
import PreLoader from './componets/Pre_load';
// here i put preloder before App.jsx
ReactDOM.render(
  <React.StrictMode>
    <PreLoader />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
