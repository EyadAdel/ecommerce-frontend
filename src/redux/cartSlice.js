import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newProduct = action.payload;
      const existProduct = state.products.find(
        (product) =>
          product._id === newProduct._id &&
          product.color === newProduct.color &&
          product.size === newProduct.size
      );
      if (!existProduct) {
        state.products.push(action.payload);
        state.quantity += 1;
        state.total += action.payload.price * action.payload.quantity;
      } else {
        existProduct.quantity += 1;
        existProduct.total += newProduct.quantity * newProduct.price;
        state.total += action.payload.price;
      }
    },

    removeItemFromCart(state, action) {
      const newProduct = action.payload;
      const existProduct = state.products.find(
        (product) => product._id === newProduct._id
      );

      if (existProduct.quantity === 1) {
        state.total -= action.payload.price;
        state.quantity -= 1;
        state.products = state.products.filter(
          (item) => item._id !== existProduct._id
        );
      } else {
        state.total -= action.payload.price;
        existProduct.quantity -= 1;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions; // انت ديماً بتنسي دول
export default cartSlice.reducer; // انت ديماً بتنسي دول
