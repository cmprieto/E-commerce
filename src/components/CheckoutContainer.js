import { Button, P2Bold, PedidoContainer, CatalogoContainer } from '../app/styles';
import { useEffect, useState } from 'react';
import { getPedidoById } from '../app/api';
import { useCartContext } from "../app/CartContext";
import ItemCheckout from './ItemCheckout';
import { Link } from 'react-router-dom';

const CheckoutContainer = () => {
    const { numPedido, finalizarCompra, state } = useCartContext();
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

            <PedidoContainer><P2Bold>Tu número de pedido es: {numPedidoStr}</P2Bold></PedidoContainer>

            {detallePedido.pedido ? <PedidoContainer>
                <p>Nombre del cliente: {detallePedido.cliente.nombre}</p>
                <p>Teléfono: {detallePedido.cliente.phone}</p>
                <p>Email: {detallePedido.cliente.mail}</p></PedidoContainer> : null}

            {detallePedido.pedido ? (detallePedido.pedido.map((detallePedido, id) => <ItemCheckout key={id} productsDetailed={detallePedido} />)) : (<p>no hay datos</p>)}

            <Button type="button" onClick={finalizarCompra}>Salir de la sesión</Button>

            {state.length === 0 && <CatalogoContainer><Link to={process.env.PUBLIC_URL}><h1>Volver a comprar</h1></Link></CatalogoContainer>}
        </div >
    )
}

export default CheckoutContainer;