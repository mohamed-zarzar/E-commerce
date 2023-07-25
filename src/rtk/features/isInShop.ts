import {createSlice, PayloadAction } from '@reduxjs/toolkit'



const initialState = false;


const isInShop = createSlice({
    name: 'isInShop',
    initialState,
    reducers: {
        shopStatus: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        },
    },
}
)

export default isInShop.reducer;
export const { shopStatus} = isInShop.actions;