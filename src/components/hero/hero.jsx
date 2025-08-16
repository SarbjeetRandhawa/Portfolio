import React from "react";
import "./hero.scss";

function hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="text">
          <h2>Sarbjeet Singh</h2>
          <h1>Web Developer and UI designer</h1>
          <div className="btns">
            <button>See the Lastest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="./scroll.png" alt="" />
        </div>
      </div>
      <div className="slidingtext">

      </div>
      <div className="imgcontainer">
        <img src="./hero.png" alt="" />
      </div>
    </div>
  );
}

export default hero;
