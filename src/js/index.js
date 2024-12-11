//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let num1= 0

setInterval(function () {
    num1++; // Incrementa el primer dígito
  
    // Renderiza la aplicación con el valor actualizado
    ReactDOM.createRoot(document.getElementById("app")).render(
      <SecondsCounter counter={num1} />
    );
  }, 1000); // Intervalo de 1 segundo