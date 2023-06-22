import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../data/productData';


const initialState: ProductType = {
    id:0,
    title: "",
    img:"",
    price: 0,
    count:0,
    evaluation: 1,
    status : "normal",
    type: "",
}


const currentProductSlice = createSlice({
    name: 'currentProduct',
    initialState,
    reducers: {
        addCurrentProduct: (state, action: PayloadAction<ProductType>) => {
            return action.payload;
        },
    },
}
)

export default currentProductSlice.reducer;
export const { addCurrentProduct} = currentProductSlice.actions;