import { useCartContext } from '../app/CartContext';
import { PedidoContainer, Button } from '../app/styles';

const PurchaseDetail = () => {
    const { numPedido, finalizarCompra } = useCartContext();
    return (
        <PedidoContainer>
            <p>Tu número de pedido es: {numPedido}</p>
            <Button type="button" onClick={finalizarCompra}>Salir de la sesión</Button>
        </PedidoContainer>
    )
}

export default PurchaseDetail;