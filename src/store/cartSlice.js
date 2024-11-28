import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isVisible: false,
  deliveryMethod: 'pickup',
  deliveryCost: 0,
  totalAmount: 0,
  totalWithDelivery: 0,
  promoCode: '',
  discount: 0,
  formData: { 
    name: '',
    phone: '',
    address: '',
    deliveryTime: '',
    comments: '',
    sticks: false,
    sticksQuantity: 1,
    paymentMethod: 'card',
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },

    addItem(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      updateTotals(state);
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      updateTotals(state);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
      updateTotals(state);
    },

    clearCart(state) {
      state.items = [];
      state.deliveryCost = 0;
      state.totalAmount = 0;
      state.totalWithDelivery = 0;
      state.promoCode = '';
      state.discount = 0;
      state.formData = initialState.formData;
    },

    updateDeliveryMethod(state, action) {
      state.deliveryMethod = action.payload;
      updateTotals(state);
    },

    applyPromoCode(state, action) {
      const promoCode = action.payload;
      state.promoCode = promoCode;

      const promoCodes = {
        'MORSKOY': 0.1,
        'MORSKOY2': 0.2,
      };

      state.discount = promoCodes[promoCode] || 0;
      updateTotals(state);
    },

    updateFormData(state, action) {  
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

function updateTotals(state) {
  const totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  let deliveryCost = 0;

  if (state.deliveryMethod === 'courier') {
    deliveryCost = totalAmount <= 20 ? 2.5 : 1;
  }

  const discountAmount = totalAmount * state.discount;
  const totalWithDelivery = totalAmount - discountAmount + deliveryCost;

  state.totalAmount = totalAmount - discountAmount;
  state.deliveryCost = deliveryCost;
  state.totalWithDelivery = totalWithDelivery;
}

export const {
  toggleCartVisibility,
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  updateDeliveryMethod,
  applyPromoCode,
  updateFormData,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalAmount = (state) => ({
  totalAmount: state.cart.totalAmount,
  deliveryCost: state.cart.deliveryCost,
  totalWithDelivery: state.cart.totalWithDelivery,
});
export const selectPromoCode = (state) => state.cart.promoCode;
export const selectFormData = (state) => state.cart.formData; 

export default cartSlice.reducer;
