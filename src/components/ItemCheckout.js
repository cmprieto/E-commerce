import React from 'react'
import { P2, ContainerItemCart, TextItemCart, P2Bold, InfoItemCart } from '../app/styles';


const ItemCheckout = (props) => {

    return (
        <ContainerItemCart>
            <InfoItemCart>
                <img src={props.productsDetailed.foto} alt="foto" width={180} ></img>
                <TextItemCart>
                    <P2Bold>{props.productsDetailed.title}</P2Bold>
                    <P2Bold>{props.productsDetailed.description}</P2Bold>
                </TextItemCart>
            </InfoItemCart>
            <P2>cantidad: {props.productsDetailed.cantidad}</P2>
            <P2>subtotal: {props.productsDetailed.cantidad * props.productsDetailed.price} €</P2>

        </ContainerItemCart>
    )
}
export default ItemCheckout;