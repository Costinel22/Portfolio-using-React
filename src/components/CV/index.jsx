import React from "react";
import "./style.css";
import myCv from "../../image/CV-Costinel_Malaiasi.pdf"

function CV() {
  const openCv = () => {
    window.open(myCv);
  };
  return (
    <div className="cv">
      <button onClick={openCv}>Open CV</button>;
      <a href={myCv} target="_blank">Open PDF</a>
    </div>
  );
}

export default CV;
