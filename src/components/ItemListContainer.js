import React from "react";
import { Container } from "../app/styles";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
// import getProducts from "../services/products";
import { getItems } from '../app/api';

const ItemListContainer = ({ saludo, datosFiltrados }) => {
  //desestructurado
  const [items, setItems] = useState([]);


  useEffect(() => {
    getItems().then((data) => setItems(data));    // CONEXION CON BD FIRESTORE
    /*   getProducts().then((data) => { setItems(data); });*/
  }, []);

  console.log('datosFirebase', items);

  return (
    <Container>
      <h1>{saludo}</h1>
      {datosFiltrados ? (
        <ItemList valorQuePaso={datosFiltrados} />
      ) : (
        <ItemList valorQuePaso={items} />
      )}
    </Container>
  );
};

export default ItemListContainer;
