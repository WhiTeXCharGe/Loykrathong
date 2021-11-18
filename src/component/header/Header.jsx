import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className = "main">
      <img className="logo " alt="logo" src="./asset/KMUTT_logo.png" />
      <div className="textCenter">
        <div>LOYKRATHONG FESTIVAL</div>
        <Link className="link-kratong" to="/select">
          <button className="button-5" role="button">สร้างกระทง</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Header;