import React from "react";
import { Container } from "../app/styles";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import getProducts from "../services/products";

const ItemListContainer = ({ saludo, datosFiltrados }) => {
  //desestructurado
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <Container>
      <h1>{saludo}</h1>
      {datosFiltrados ? (
        <ItemList valorQuePaso={datosFiltrados} />
      ) : (
        <ItemList valorQuePaso={items} />
      )}
      {/* <ItemList valorQuePaso={datosFiltrados} /> */}
    </Container>
  );
};

export default ItemListContainer;
