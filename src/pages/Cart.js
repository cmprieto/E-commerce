import React, { Fragment } from "react";
import { useCartContext } from "../app/CartContext";
import { P, ContainerCartStyle } from '../app/styles';
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, removeCart, totalPrice } = useCartContext();
  return (
    <ContainerCartStyle>
      {state.length === 0 && <Link to={process.env.PUBLIC_URL} style={{ textDecoration: 'none', textAlign: "center" }}><h1>Quiero ver el catálogo</h1></Link>}
      {
        state.length > 0 &&
        state.map((product, i) => <ItemCart key={product.id} product={product} />)
      }
      {
        state.length > 0 && <Fragment>
          <P>Precio total: {totalPrice()} €</P>
          <button onClick={removeCart}>Vaciar carrito</button></Fragment>
      }
    </ContainerCartStyle >
  );
}

export default Cart;
