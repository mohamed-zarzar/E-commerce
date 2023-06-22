import { configureStore } from '@reduxjs/toolkit';

import currentProductSlice from './features/currentProductSlice';
import myProductSlice from "./features/myProduct"



const store = configureStore({
    reducer: {
    buyProduct: myProductSlice,
    currentProduct : currentProductSlice,
    }
  })










  export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch