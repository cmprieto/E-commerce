import React from "react";
import { Btn, Menu, NavBar } from "../app/styles";
import foto from "../assets/img/coderhouse-logo.png";
import CardWidget from "./CardWidget";

const Navbar = () => {
  return (
    <div>
      <NavBar>
        <img src={foto} alt="logo" width="100" height="100"></img>
        <Menu>
          <Btn>Home</Btn>
          <Btn>Balls</Btn>
          <Btn>Club</Btn>
        </Menu>
        <CardWidget />
      </NavBar>
    </div>
  );
};

export default Navbar;
