import { ItemDetailStyle, Button, P, UL } from "../app/styles";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../app/CartContext";

const ItemDetail = (props) => {
  const userId = useParams();
  let detail = parseInt(userId.id) - 1;
  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem } = useCartContext();

  console.log(props.itemAPasar[detail]);

  const addItemPedido = (c) => {
    addItem(props.itemAPasar[detail], c)
    console.log(props.itemAPasar[detail]);
    // si se cumple la condicion en cartcontext de añadir elemento, añado todo esto al estado global.
  }

  return (
    <ItemDetailStyle>
      <div>
        {props.itemAPasar[detail] && (
          <img src={props.itemAPasar[detail].foto} alt="foto" width={400} ></img>
        )}
      </div>
      <div>
        {props.itemAPasar[detail] && (
          <UL>
            <h2> {props.itemAPasar[detail].title}</h2>
            <P>
              {props.itemAPasar[detail].description} -
              {props.itemAPasar[detail].price}
            </P>
            <h4>stock: {props.itemAPasar[detail].stock}</h4>
          </UL>
        )}
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
