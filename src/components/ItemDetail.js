import { ItemDetailStyle, P } from "../app/styles";
const ItemDetail = (props) => {
  return (
    <ItemDetailStyle>
      <div>
        {props.itemAPasar[0] && (
          <img src={props.itemAPasar[0].foto} alt="foto" width={300}></img>
        )}
      </div>

      <div>
        {props.itemAPasar[0] && (
          <ul>
            <h2> {props.itemAPasar[0].title}</h2>
            <P> id: {props.itemAPasar[0].id}</P>
            <P>
              {props.itemAPasar[0].description} - {props.itemAPasar[0].price}
            </P>
          </ul>
        )}
      </div>
    </ItemDetailStyle>
  );
};

export default ItemDetail;
