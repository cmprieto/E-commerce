import { ItemStyle, P } from "../app/styles";

const Item = (props) => {
  return (
    <ItemStyle>
      <P>
        {props.data.id} - {props.data.title} - {props.data.description}
      </P>
    </ItemStyle>
  );
};

export default Item;
