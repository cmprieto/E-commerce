import { ItemDetailStyle, Button, P, UL } from "../app/styles";
import ItemCount from "./ItemCount";
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../app/CartContext";
import { getItemById } from '../app/api';


const ItemDetail = () => {
  const userId = useParams();
  console.log('userId', userId.id);
  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem } = useCartContext();
  const [desiredProduct, setDesiredProduct] = useState({});

  // CONSULTA 1 DOCUMENTO CON FIRESTORE

  useEffect(() => {
    getItemById(userId.id).then((data) => setDesiredProduct(data, { id: userId.id }));
  }, []);


  const addItemPedido = (c) => {
    addItem(desiredProduct, c);
    console.log('addItemPedido', desiredProduct);
    // si se cumple la condicion en cartcontext de añadir elemento, añado todo esto al estado global.
  }

  console.log('desiredProduct', desiredProduct);

  return (
    <ItemDetailStyle>
      <div>
        <img src={desiredProduct.foto} alt="foto" width={400} ></img>
      </div>
      <div>
        <UL>
          <h2> {desiredProduct.title}</h2>
          <P>
            {desiredProduct.description} -
            {desiredProduct.price} €
          </P>
          {/* <h4>stock: {desiredProduct.stock}</h4> */}
        </UL>
      </div>
      {
        showItemCount ? (
          <ItemCount
            datosqueVienendelHijo={(r) => setShowItemCount(r)}
            onAdd={(c) => addItemPedido(c)} />
        ) : (
          <Link to={process.env.PUBLIC_URL + "/cart"}>
            <Button>Terminar mi compra</Button>
          </Link>
        )
      }
    </ItemDetailStyle >
  );
};

export default ItemDetail;
