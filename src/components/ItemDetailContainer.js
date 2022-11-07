import React from "react";
import { ItemDetailContainerStyle, P } from "../app/styles";
import { useEffect, useState } from "react";
import getProducts from "../services/products";
import ItemDetail from "./ItemDetail";
import { Fragment } from "react";

const ItemDetailContainer = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      /* console.log(data); */
      setArticle(data);
    });
  }, []);
  return (
    <Fragment>
      <ItemDetailContainerStyle>
        <P>ItemDetailContainer</P>
        <ItemDetail itemAPasar={article}></ItemDetail>
      </ItemDetailContainerStyle>
    </Fragment>
  );
};

export default ItemDetailContainer;
