import {createSlice, PayloadAction } from '@reduxjs/toolkit'



const initialState = 1;


const isInShop = createSlice({
    name: 'isInShop',
    initialState,
    reducers: {
        shopStatus: (state, action: PayloadAction<number>) => {
            return action.payload;
        },
    },
}
)

export default isInShop.reducer;
export const { shopStatus} = isInShop.actions;