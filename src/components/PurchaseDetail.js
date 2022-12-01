import { useCartContext } from '../app/CartContext';
import { PedidoContainer } from '../app/styles';

const PurchaseDetail = () => {
    const { numPedido, removeCart, finalizarCompra } = useCartContext();
    return (
        <PedidoContainer>
            <p>Tu número de pedido es: {numPedido}</p>
            <button type="button" onClick={finalizarCompra}>Resetear pedido</button>
        </PedidoContainer>
    )
}

export default PurchaseDetail;