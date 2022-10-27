import React from "react";
import { Container } from "../app/styles";

const ItemListContainer = ({ saludo }) => {
  //desestructurado
  return (
    <Container>
      <h1>{saludo}</h1>
    </Container>
  );
};

export default ItemListContainer;
