import { createContext, useContext, useState } from "react";
import { updateTimestamp } from './api';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const AppContext = createContext();
export const useCartContext = () => useContext(AppContext);

const Provider = ({ children }) => {

  const [state, setState] = useState([]);
  const [comprador, setComprador] = useState({ nombre: '', phone: '', mail: '' });
  const [numPedido, setNumPedido] = useState('');
  console.log('carrito: ', state);

  // HELPERS
  const addItem = (item, newQuantity) => {
    const newCart = state.filter(prod => prod.id !== item.id);
    newCart.push({ ...item, cantidad: newQuantity }); // NO ME DISCRIMINA LOS REPETIDOS
    setState(newCart);
    /*   setState([...state, { ...item, cantidad: newQuantity }]); */
  };

  const removeCart = () => setState([]);

  const finalizarCompra = () => {
    removeCart();
    setNumPedido('');
  }

  /*   const isInCart = (id) => {
      return Cart.find(product => product.id === id) ? true : false;
    } */

  const deleteItem = (id) => {
    setState(state.filter(product => product.id !== id));
  }

  const totalPrice = () => {
    return state.reduce((prev, act) => prev + act.cantidad * act.price, 0);
  }

  const totalProducts = () => (
    state.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)
  );

  const terminarCompra = () => {
    const precioTotal = totalPrice();
    const cliente = comprador;
    const pedido = { pedido: state, cliente, precioTotal, date: updateTimestamp() }
    console.log('pedido', pedido);

    // ENVIA DATOS A FIRESTORE
    const colRef = collection(db, 'pedidos');
    addDoc(colRef, pedido).then((res) => setNumPedido(res.id));   // addDoc -> ID DE PEDIDO
    // RESETEO CARRITO
    /*  setState([]); */
    setComprador({ nombre: '', phone: '', mail: '' });
  }

  return (
    <AppContext.Provider
      value={{ state, setState, addItem, removeCart, deleteItem, totalPrice, totalProducts, terminarCompra, comprador, setComprador, numPedido, setNumPedido, finalizarCompra }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
