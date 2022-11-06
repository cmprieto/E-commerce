import React from "react";
import { Icon } from "../app/styles";
import carrito from "../assets/icons/cart-outline.svg";

const CardWidget = () => {
  return (
    <div>
      <Icon src={carrito} alt="logo" />
      {/* corrección: profe: mejor aplicar estilos en styled components e importar img */}
      {/*  <img src={carrito} alt="logo" style={{ width: "2rem" }} /> */}
    </div>
  );
};

export default CardWidget;
