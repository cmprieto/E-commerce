import React from "react";
import { ItemDetailContainerStyle } from "../app/styles";
import { useEffect, useState } from "react";
//import getProducts from "../services/products";
import ItemDetail from "./ItemDetail";
import { Fragment } from "react";
import { getItems } from '../app/api';

const ItemDetailContainer = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getItems().then((data) => setArticle(data));  //CONEXIONADO CON FIRESTORE
    /* 
    getProducts().then((data) => {
      setArticle(data);
    }); */
  }, []);

  return (
    <Fragment>
      <ItemDetailContainerStyle>
        <ItemDetail itemAPasar={article}></ItemDetail>
      </ItemDetailContainerStyle>
    </Fragment>
  );
};

export default ItemDetailContainer;
