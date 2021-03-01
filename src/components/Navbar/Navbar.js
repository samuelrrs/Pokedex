import React from "react";
import "./style.css";
import Logo from "../../assets/imgs/pokedex.png";

function Navbar() {
  return (
    <div className="Navbar">
      <img src={Logo} alt="logo" className="logo" />
      <input placeholder="Faça sua busca..." />
    </div>
  );
}

export default Navbar;
