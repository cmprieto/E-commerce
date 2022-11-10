import { ItemDetailStyle, P } from "../app/styles";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemDetail = (props) => {
  const userId = useParams();
  let detail = parseInt(userId.id) - 1;
  /*   useEffect(() => {
    ide = parseInt(ident);
  }, []); */

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
          <ul>
            <h2> {props.itemAPasar[detail].title}</h2>
            <P>
              {props.itemAPasar[detail].description} -
              {props.itemAPasar[detail].price}
            </P>
            <h4>stock: {props.itemAPasar[detail].stock}</h4>
          </ul>
        )}
      </div>
      <ItemCount />
    </ItemDetailStyle>
  );
};

export default ItemDetail;
