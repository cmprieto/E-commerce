import React from "react";
import { useCartContext } from "../app/CartContext";
import { P } from "../app/styles";
import ItemCart from "../components/ItemCart";


const Cart = () => {
  const { state, removeCart, totalPrice } = useCartContext();
  return (
    <div>
      {state.length > 0 &&
        state.map((product, i) => <ItemCart key={product.id} product={product} />)}
      <P>Precio total: {totalPrice()} €</P>
      <button onClick={removeCart}>Vaciar carrito</button>

    </div>
  );
}

export default Cart;
