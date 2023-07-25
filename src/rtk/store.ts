import { configureStore } from '@reduxjs/toolkit';

import currentProductSlice from './features/currentProductSlice';
import myProductSlice from "./features/myProduct"
import  isInShop  from './features/isInShop';



const store = configureStore({
    reducer: {
    buyProduct: myProductSlice,
    currentProduct : currentProductSlice,
    IsInShopPage : isInShop,
    }
  })










  export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch