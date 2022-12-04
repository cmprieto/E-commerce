import { useCartContext } from '../app/CartContext';
import { PedidoContainer, Button } from '../app/styles';
import { Link } from 'react-router-dom';

const PurchaseDetail = () => {
    const { numPedido, comprador } = useCartContext();
    return (
        <PedidoContainer>
            <Link to={process.env.PUBLIC_URL + "/checkout"}><Button>VER DETALLES PEDIDO</Button></Link>
            <p>Tu número de pedido es: {numPedido}</p>
            <p>Nombre del cliente: {comprador.nombre}</p>
            <p>Teléfono:  {comprador.phone}</p>
            <p> Email: {comprador.mail}</p>
        </PedidoContainer >
    )
}

export default PurchaseDetail;