import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  cartStatus: false, //necessary for sending or receving cart to server
  subTotalPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    resetCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.subTotalPrice;
      state.cartStatus = true;
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.subTotalPrice = action.payload.subTotalPrice;
    },
    addItemToCartWithQuantity(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.cartStatus = true;
      if (!existingItem) {
        state.totalQuantity += newItem.quantity;
        state.subTotalPrice += newItem.quantity * newItem.price;
        newItem.totalPrice = newItem.quantity * newItem.price;
        state.items.push(newItem);
      } else if (existingItem.quantity !== newItem.quantity) {
        state.totalQuantity =
          state.totalQuantity - existingItem.quantity + newItem.quantity;
        state.subTotalPrice +=
          newItem.quantity * existingItem.price - existingItem.totalPrice;
        existingItem.quantity = newItem.quantity;
        existingItem.totalPrice = newItem.quantity * newItem.price;
      }
    },

    removeItemToCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (!existingItem) return state;
      else {
        state.cartStatus = true;
        state.totalQuantity -= existingItem.quantity;
        state.subTotalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
