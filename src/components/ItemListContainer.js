import React from "react";
import { Container } from "../app/styles";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import getProducts from "../services/products";

const ItemListContainer = ({ saludo }) => {
  //desestructurado
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      /* console.log(data); */
      setItems(data);
    });
  }, []);

  return (
    <Container>
      <h1>{saludo}</h1>
      <ItemCount />
      <ItemList valorQuePaso={items} />
    </Container>
  );
};

export default ItemListContainer;
