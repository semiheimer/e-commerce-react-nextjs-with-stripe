import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  cartIsVisible: false,
  notification: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
