import { configureStore, createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    // { id: 0, title: "White and Black", count: 2 },
    // { id: 2, title: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, actions) {
      console.log(state);
      state[actions.payload].count += 1;
    },
    addCart(state, actions) {
      state.push(actions.payload);
    },
  },
});

export let { addCount, addCart } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
