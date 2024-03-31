import React from "react";
import "./style.css";
import myCv from "../../image/CV-Costinel_Malaiasi.pdf"

function CV() {
  return (
    <div className="cv">
      <embed src={myCv} type="application/pdf" width="100%" height="600px" />
    </div>
  );
}

export default CV;