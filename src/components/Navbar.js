import React from "react";
import { Btn, Menu, NavBar } from "../app/styles";
import foto from "../assets/img/coderhouse-logo.jpg";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavBar>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img src={foto} alt="logo" width="150" />
        </Link>
        <Menu>
          <NavLink to={process.env.PUBLIC_URL + "/"}>
            <Btn>HOME</Btn>
          </NavLink>
          <NavLink to={process.env.PUBLIC_URL + "/category/fotografia"}>
            <Btn>FOTOGRAFIAS</Btn>
          </NavLink>
          <NavLink to={process.env.PUBLIC_URL + "/category/fotolibros"}>
            <Btn>FOTOLIBROS</Btn>
          </NavLink>
        </Menu>
        <Link to={process.env.PUBLIC_URL + "/cart"} style={{ textDecoration: 'none' }}> {/* elimino underline */}
          <CartWidget />
        </Link>
      </NavBar>
    </div>
  );
};

export default Navbar;
