import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


const SecondsCounter = ({counter}) => {
  const num1 = counter % 10
  const num2 = Math.floor (counter / 10) % 10
  const num3 = Math.floor (counter / 100) % 10
  const num4 = Math.floor (counter / 1000) % 10
  const num5 = Math.floor (counter / 10000) % 10
  const num6 = Math.floor (counter / 100000) % 10

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark text-light py-3">
      <div className="d-flex align-items-center mx-2">
        <i className="Contador"></i>
      </div>
        <div
          className="bg-secondary text-light mx-1 d-flex justify-content-center align-items-center"
          style={{ width: "50px", height: "80px", fontSize: "2.5rem", borderRadius: "5px",}}>
            {num6}
        </div>
        <div
          className="bg-secondary text-light mx-1 d-flex justify-content-center align-items-center"
          style={{ width: "50px", height: "80px", fontSize: "2.5rem", borderRadius: "5px",}}>
            {num5}
        </div>
        <div
          className="bg-secondary text-light mx-1 d-flex justify-content-center align-items-center"
          style={{ width: "50px", height: "80px", fontSize: "2.5rem", borderRadius: "5px",}}>
            {num4}
        </div>
        <div
          className="bg-secondary text-light mx-1 d-flex justify-content-center align-items-center"
          style={{ width: "50px", height: "80px", fontSize: "2.5rem", borderRadius: "5px",}}>
            {num3}
        </div>
        <div
          className="bg-secondary text-light mx-1 d-flex justify-content-center align-items-center"
          style={{ width: "50px", height: "80px", fontSize: "2.5rem", borderRadius: "5px",}}>
            {num2}
        </div>
        <div
          className="bg-secondary text-light mx-1 d-flex justify-content-center align-items-center"
          style={{ width: "50px", height: "80px", fontSize: "2.5rem", borderRadius: "5px",}}>
            {num1}
        </div>
    </div>
  );
};

export default SecondsCounter