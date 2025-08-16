import React from "react";
import "./navbar.scss";
import Sidebar from "../sidebar/sidebar";

function navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Sarbjeet Singh</span>
        <div className="Social">
          <a href="#">
            <img src="Linkdin.png" alt="" />
          </a>
          <a href="#">
            <img src="Github.png" alt="" />
          </a>
          <a href="#">
            <img src="instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
