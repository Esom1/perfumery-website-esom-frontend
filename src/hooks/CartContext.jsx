import React, { createContext, useState, useEffect } from "react";
import axios  from 'axios'
const CartContext = createContext();

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItem")) || [];

export const CartProvider = ({ children }) => {
  const [loggedIn,setLoggedIn] = useState(undefined)
  async function getLoggedIn (){
    const loggedInRes = await axios.get('http://localhost:2020/check/loggedIn')
    setLoggedIn (loggedIn.data)
  }
  const [cartItem, setCartItem] = useState(cartItemsFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    getLoggedIn()
  }, [cartItem]);

  let handleAddToCart = (product) => {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem._id === product._id
    );
    if (productSelected) {
      setCartItem(
        cartItem.map((oneItem) =>
          oneItem._id === product._id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  function handleIncrease(product) {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem._id === product._id
    );
    if (productSelected) {
      setCartItem(
        cartItem.map((oneItem) =>
          oneItem._id === product._id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    }
  }
// 
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  function handleDecrease(product) {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem._id === product._id
    );
    if (productSelected.quantity === 1) {
      setCartItem(cartItem.filter((oneItem) => oneItem._id !== product._id));
    } else {
      setCartItem(
        cartItem.map((dd) =>
          dd._id === product._id
            ? { ...productSelected, quantity: productSelected.quantity - 1 }
            : dd
        )
      );
    }
  }

  function handleRemove(product) {
    setCartItem(cartItem.filter((item)=> item._id !== product._id))
  }

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        handleAddToCart,
        handleIncrease,
        handleDecrease,
        handleRemove,
        totalPrice,
        loggedIn,
        getLoggedIn
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
