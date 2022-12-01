import React, { useState } from "react";
import {
  FormGroup,
  Btn2,
  Contador,
  Input,
  Button,
  Form,
  P,
} from "../app/styles";

const ItemCount = ({ datosqueVienendelHijo, onAdd, stockTienda }) => {
  const [numberItems, setNumberItems] = useState(1);

  //ONCHANGE
  const handleItemCount = (e) => {
    let itemValue = parseInt(e.target.value);
    if (isNaN(itemValue)) {
      alert("Tienes que introducir un número");
      setNumberItems(0);
    } else {
      setNumberItems(itemValue);
    }
  };

  //BOTON -1
  const downValue = (e) => {
    e.preventDefault();
    //TERNARIO >0
    numberItems > 0
      ? setNumberItems(numberItems - 1)
      : alert("valor debe ser positivo");
  };

  //BOTON +1
  const upValue = (e) => {
    e.preventDefault();
    setNumberItems(numberItems + 1);
  };

  // ONSUBMIT

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(`datos enviados ${numberItems}`);
    if (numberItems > stockTienda) {
      alert("no hay suficiente stock");
    }
    else if (numberItems <= stockTienda) {
      datosqueVienendelHijo(false);
      onAdd(numberItems);
    }
  };

  return (
    <FormGroup>
      <Form onSubmit={enviarDatos}>
        <Contador>
          <Btn2 onClick={downValue}>-</Btn2>
          <Input
            type="text"
            value={numberItems}
            name="itemnumber"
            onChange={handleItemCount}
          />
          <Btn2 onClick={upValue}>+</Btn2>
        </Contador>
        {numberItems > stockTienda && <P>stock: {stockTienda}</P>}
        <Button type="submit">Agregar al carrito</Button>
      </Form>
    </FormGroup>
  );
};

export default ItemCount;
