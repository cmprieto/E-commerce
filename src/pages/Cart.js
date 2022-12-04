import React from "react";
import { useState } from "react";
import { useCartContext } from "../app/CartContext";
import { P, ContainerCartStyle, Button, ContainerShop, FlexContainer } from '../app/styles';
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import PurchaseDetail from "../components/PurchaseDetail";

const Cart = () => {
  const { state, removeCart, totalPrice, numPedido } = useCartContext();
  return (
    <ContainerCartStyle>
      {state.length === 0 && <Link to={process.env.PUBLIC_URL} style={{ textDecoration: 'none', textAlign: "center" }}><h1>Quiero ver el catálogo</h1></Link>}
      {
        state.length > 0 &&
        state.map((product, id) => <ItemCart key={id} product={product} />)
      }
      {
        state.length > 0 &&
        <FlexContainer>
          <ContainerShop>
            <Button type="button" onClick={removeCart}>Vaciar carrito</Button>
          </ContainerShop>
          <ContainerShop>
            <P>Precio total: {totalPrice()} €</P>
          </ContainerShop>
        </FlexContainer >
      }

      {
        state.length > 0 &&
        <div>
          <ClientForm />
        </div>
      }
      {numPedido !== '' && <PurchaseDetail />}

    </ContainerCartStyle >
  );
}

export default Cart;
