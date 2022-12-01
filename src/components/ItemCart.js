import React from 'react'
import { P2, ContainerItemCart, TextItemCart, P2Bold, InfoItemCart } from '../app/styles';
import { useCartContext } from "../app/CartContext";
import { Icon2 } from '../app/styles';
import xbutton from '../assets/icons/xbutton.png'

const ItemCart = ({ product }) => {
    const { deleteItem } = useCartContext();

    return (
        <ContainerItemCart>
            <InfoItemCart>
                <Icon2 src={xbutton} alt="logo" onClick={() => deleteItem(product.id)} />
                <img src={product.foto} alt="foto" width={180} ></img>

                <TextItemCart>
                    <P2Bold>título: {product.title}</P2Bold>
                    <P2Bold> descripción: {product.description}</P2Bold>


                </TextItemCart>
            </InfoItemCart>
            <P2>cantidad: {product.cantidad}</P2>
            <P2>subtotal: {product.cantidad * product.price} €</P2>

        </ContainerItemCart>
    )
}

export default ItemCart;