import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Список товаров в корзине
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    toggleCartVisibility(state) {
      state.isVisible = !state.isVisible;
    },

    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += quantity; // Обновляем количество
      }
    },
  },
});

export const { toggleCartVisibility, addItem, removeItem, updateQuantity } = cartSlice.actions;

// Селекторы
export const selectCartItems = (state) => state.cart.items;
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
