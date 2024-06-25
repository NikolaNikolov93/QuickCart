import { createSlice } from "@reduxjs/toolkit";
import Product from "../../components/productCard/productInterface";

interface ShoppingCartState {
  shoppingCartItems: Product[];
}

const initialState: ShoppingCartState = {
  shoppingCartItems: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToShoopingCart: (state, action) => {
      state.shoppingCartItems.push(action.payload);
    },
    removeFromShoppingCart: (state, action) => {
      state.shoppingCartItems = state.shoppingCartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    resetShoppingCart: (state) => {
      state.shoppingCartItems = initialState.shoppingCartItems;
    },
  },
});

export const { addToShoopingCart, resetShoppingCart, removeFromShoppingCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
