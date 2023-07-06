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
      console.log(state.products);
    },

    removeItemFromCart(state, action) {
      const deletedProduct = action.payload;
      // const existProduct = state.products.find(
      //   (product) =>
      //     product._id === deletedProduct._id &&
      //     product.color === deletedProduct.color &&
      //     product.size === deletedProduct.size
      // );

      const existProduct = state.products.find(
        (product) =>
          product._id === deletedProduct._id &&
          product.color === deletedProduct.color &&
          product.size === deletedProduct.size
      );

      if (existProduct.quantity === 1) {
        state.total -= existProduct.price;
        state.quantity -= 1;
        state.products = state.products.filter(
          (product) =>
            product._id !== existProduct._id ||
            product.color !== existProduct.color ||
            product.size !== existProduct.size
        );
      } else {
        state.total -= existProduct.price;
        existProduct.quantity -= 1;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions; // انت ديماً بتنسي دول
export default cartSlice.reducer; // انت ديماً بتنسي دول
