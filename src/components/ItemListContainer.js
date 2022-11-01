import React from "react";
import { Container } from "../app/styles";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ saludo }) => {
  //desestructurado
  return (
    <Container>
      <h1>{saludo}</h1>
      <ItemCount />
    </Container>
  );
};

export default ItemListContainer;
