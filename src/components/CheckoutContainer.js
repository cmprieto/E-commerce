import { Button } from '../app/styles';
import { useEffect, useState } from 'react';
import { getPedidoById, getItemsByPedido } from '../app/api';
import { useCartContext } from "../app/CartContext";
import ItemCheckout from './ItemCheckout';

const CheckoutContainer = () => {
    const { numPedido, finalizarCompra } = useCartContext();
    const [detallePedido, setDetallePedido] = useState([]);
    const numPedidoStr = numPedido.toString();

    useEffect(() => {
        const getPed = async () => {
            const pedidos = await getPedidoById(numPedidoStr);
            setDetallePedido(pedidos)
            console.log('detallePedidoYusefez:', detallePedido);
            queryPedido();
        }
        getPed();
    }, []);


    const queryPedido = () => getPedidoById(numPedidoStr).then((res) => setDetallePedido(res));
    console.log('detallePedido:', detallePedido);


    return (
        <div>
            <Button type="button" onClick={async () => {
                await getItemsByPedido(numPedidoStr);
                queryPedido();
            }}>ver pedido</Button>
            <h3>Tu número de pedido es: {numPedidoStr}</h3>

            {detallePedido.lenght > 0 ? (<ItemCheckout productsDetailed={detallePedido} />) : (<p>no hay datos</p>)}

            <Button type="button" onClick={finalizarCompra}>Salir de la sesión</Button>
        </div>
    )
}

export default CheckoutContainer;