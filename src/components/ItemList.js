import React from "react";
import Item from "./Item";
import { ItemListStyle } from "../app/styles";

const ItemList = (props) => {
  return (
    <div>
      <ItemListStyle>
        {props.valorQuePaso.map((item, i) => (
          <Item data={item} key={i} />
        ))}
      </ItemListStyle>
    </div>
  );
};

export default ItemList;
