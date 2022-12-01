import React from "react";
import { ItemDetailContainerStyle } from "../app/styles";
import ItemDetail from "./ItemDetail";
import { Fragment } from "react";


const ItemDetailContainer = () => {

  return (
    <Fragment>
      <ItemDetailContainerStyle>
        <ItemDetail ></ItemDetail>
      </ItemDetailContainerStyle>
    </Fragment>
  );
};

export default ItemDetailContainer;
