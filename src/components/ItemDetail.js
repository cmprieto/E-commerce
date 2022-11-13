import { ItemDetailStyle, Button, P, UL } from "../app/styles";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemDetail = (props) => {
  const userId = useParams();
  let detail = parseInt(userId.id) - 1;
  const [showItemCount, setShowItemCount] = useState(true);

  return (
    <ItemDetailStyle>
      <div>
        {props.itemAPasar[detail] && (
          <img src={props.itemAPasar[detail].foto} alt="foto" width={400}></img>
        )}
        {console.log("ide" + userId.id)}
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
      {showItemCount ? (
        <ItemCount datosqueVienendelHijo={(r) => setShowItemCount(r)} />
      ) : (
        <Link to={process.env.PUBLIC_URL + "/cart"}>
          <Button>Terminar mi compra</Button>
        </Link>
      )}
    </ItemDetailStyle>
  );
};

export default ItemDetail;
