import React, { createContext, useState,useContext } from "react";

export const CartContext=createContext();

export const useCart=()=>{
    const cart=useContext(CartContext);
    return cart;
}

export const CartProvider=(props)=>{
    const [cart, setCart] = useState([]);
    return <CartContext.Provider value={{cart,setCart}}>{props.children}</CartContext.Provider>
}

