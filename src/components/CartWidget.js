import React from "react";
import { Icon, CartWidgetStyle } from '../app/styles';
import carritoColor from "../assets/icons/add-to-cart.png";
import { useCartContext } from "../app/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <CartWidgetStyle>
      {totalProducts() !== 0 && <p>{totalProducts()}</p>}
      <Icon src={carritoColor} alt="logo" />
    </CartWidgetStyle>
  );
};

export default CartWidget;
