import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] ,shippingAddress:{},paymentMethod:''};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //state is the current state of the cart,
    //action is the payload - item to add to the cart
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem._id === existItem._id ? item : cartItem
        );
      } else {
        //were not typing like this because state is imutable
        // state.cartItems = state.cartItems.push(item);
        //instead we make a copy and assigning it to the state
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem._id !== action.payload
      );

      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
      return updateCart(state);
    }
  },
});

export const { addToCart, removeFromCart,saveShippingAddress,savePaymentMethod} = cartSlice.actions;
export default cartSlice.reducer;
