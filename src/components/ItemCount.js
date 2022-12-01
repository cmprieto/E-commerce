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

const ItemCount = ({ datosqueVienendelHijo, onAdd }) => {
  const [numberItems, setNumberItems] = useState(1);
  const [stock, setStock] = useState(24);

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
    let newStock = stock - numberItems;
    console.log(`datos enviados ${numberItems}`);
    numberItems > stock ? alert("no hay suficiente stock") : setStock(newStock);
    datosqueVienendelHijo(false);
    onAdd(numberItems);
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
        {numberItems > stock && <P>stock: {stock}</P>}
        <Button type="submit">Agregar al carrito</Button>
      </Form>
    </FormGroup>
  );
};

export default ItemCount;
