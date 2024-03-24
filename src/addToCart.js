import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [], // array to store the items in the cart
  
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { item , quantity} = action.payload;
      state.items.push({ ...item, quantity });
  },

    removeItemFromCart(state, action) {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove.id);
   
    },

    
  },
});


export const { addItemToCart, removeItemFromCart, updateItemQuantity } = cartSlice.actions;


export default cartSlice.reducer;
