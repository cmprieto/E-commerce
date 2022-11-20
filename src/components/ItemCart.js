import React from 'react'
import { P2, ContainerCart } from '../app/styles';
import { useCartContext } from "../app/CartContext";

const ItemCart = ({ product }) => {
    const { deleteItem } = useCartContext();

    return (
        <ContainerCart>
            <img src={product.foto} alt="foto" width={180} ></img>
            <P2>Cantidad: {product.cantidad}</P2>
            <P2>Tipo de producto: {product.category}</P2>
            <P2>Título: {product.title}</P2>
            <P2> Descripción: {product.description}</P2>
            <P2>Subtotal: {product.cantidad * product.price} €</P2>
            <button onClick={() => deleteItem(product.id)}>Borrar</button>

        </ContainerCart>
    )
}

export default ItemCart;