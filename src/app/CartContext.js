import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
export const useCartContext = () => useContext(AppContext);

const Provider = ({ children }) => {
  const [state, setState] = useState([]);
  console.log('carrito: ', state);



  // HELPERS
  const addItem = (item, newQuantity) => {
    const newCart = state.filter(prod => prod.id !== item.id);
    newCart.push({ ...item, cantidad: newQuantity })
    setState(newCart);
    /*   setState([...state, { ...item, cantidad: newQuantity }]); */
  };

  const removeCart = () => setState([]);

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

  return (
    <AppContext.Provider
      value={{ state, setState, addItem, removeCart, deleteItem, totalPrice, totalProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
