import React from "react";
import { Btn, Menu, NavBar } from "../app/styles";
import foto from "../assets/img/coderhouse-logo.jpg";

import CardWidget from "./CardWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavBar>
        <Link to="/">
          <img src={foto} alt="logo" width="150" />
        </Link>
        <Menu>
          <NavLink to="/">
            <Btn>HOME</Btn>
          </NavLink>
          <NavLink to="/category/fotografia">
            <Btn>FOTOGRAFIAS</Btn>
          </NavLink>
          <NavLink to="/category/libros">
            <Btn>FOTOLIBROS</Btn>
          </NavLink>
        </Menu>
        <Link to="/cart">
          <CardWidget />
        </Link>
      </NavBar>
    </div>
  );
};

export default Navbar;
