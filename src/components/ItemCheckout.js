import React from 'react'
import { P2, ContainerItemCart, TextItemCart, P2Bold, InfoItemCart } from '../app/styles';


const ItemCheckout = ({ productsDetailed }) => {

    return (
        <ContainerItemCart>
            <InfoItemCart>

                <img src={productsDetailed.foto} alt="foto" width={180} ></img>
                <TextItemCart>
                    <P2Bold>{productsDetailed.title}</P2Bold>
                    <P2Bold>{productsDetailed.description}</P2Bold>
                </TextItemCart>
            </InfoItemCart>
            <P2>cantidad: {productsDetailed.cantidad}</P2>
            <P2>subtotal: {productsDetailed.cantidad * productsDetailed.price} €</P2>

        </ContainerItemCart>
    )
}
export default ItemCheckout;