/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext,useContext } from "react";
import { CartProduct } from "../models/Product";

export const CartContext=createContext({
    cart:[] as CartProduct[],
    addToCart:(product:CartProduct)=>{},
    updateProductQuantity:(id:number,quantity:number)=>{},
    removeFromCart:(id:number)=>{}
});

export const CartProvider=CartContext.Provider;

export default function useCart(){
    return useContext(CartContext)
}