import React from "react";
import { Icon } from "../app/styles";
import carritoColor from "../assets/icons/add-to-cart.png";

const CardWidget = () => {
  return (
    <div>
      <Icon src={carritoColor} alt="logo" />
      {/* corrección: profe: mejor aplicar estilos en styled components e importar img */}
      {/*  <img src={carrito} alt="logo" style={{ width: "2rem" }} /> */}
    </div>
  );
};

export default CardWidget;
