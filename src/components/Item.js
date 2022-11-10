import { ItemStyle, P, Button2, Img } from "../app/styles";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <ItemStyle>
      <P>{props.data.title}</P>
      <Img>
        <img src={props.data.foto} alt="foto" width={200} />
      </Img>
      <Button2>
        <Link to={`/item/${props.data.id}`}>Ver más</Link>
      </Button2>
    </ItemStyle>
  );
};

export default Item;
