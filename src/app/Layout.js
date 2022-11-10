import React from "react";
import Navbar from "../components/Navbar";
import { GlobalStyle } from "./styles";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
