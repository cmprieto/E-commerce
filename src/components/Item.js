import { ItemStyle, P, Button, Img } from "../app/styles";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <ItemStyle>
      <P>{props.data.title}</P>
      <Img>
        <img src={props.data.foto} alt="foto" width={200} />
      </Img>
      <Link to={process.env.PUBLIC_URL + `/item/${props.data.id}`}>
        <Button> Ver más</Button>
      </Link>
    </ItemStyle>
  );
};

export default Item;
