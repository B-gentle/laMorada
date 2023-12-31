import {
  createSlice
} from '@reduxjs/toolkit'
import { updateCart } from '../../utils/cartUtils';

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {
  cartItems: []
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const itemExist = state.cartItems.find((itemInCart) => itemInCart._id === item._id);

      if(itemExist) {
        state.cartItems = state.cartItems.map((cartItem) => cartItem._id === itemExist._id ? item : cartItem)
      }else{
        state.cartItems = [...state.cartItems, item]
      }

     return updateCart(state)
    }
  }
});

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer