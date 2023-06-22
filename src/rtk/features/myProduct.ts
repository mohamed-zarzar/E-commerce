import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import {ProductType} from "../../data/productData"



export type CartType = {
    product : ProductType,
    quantity : number,
    size:string,
}

type InitialState = {
    isEmpty : boolean,
    buyingProduct: CartType[],
}

const initialState: InitialState = {
    isEmpty : true,
    buyingProduct: [],
}


const myProductSlice = createSlice({
    name: 'myProductSlice',
    initialState,
    reducers: {
        buyingProduct: (state, action: PayloadAction<CartType>) => {
        const findCart = state.buyingProduct.find((cart:CartType)=> cart.product.id === action.payload.product.id)
            if(findCart){
                findCart.quantity += action.payload.quantity;
            } else {
                state.buyingProduct.push({
                    product:action.payload.product,
                    quantity:action.payload.quantity,
                    size:action.payload.size
                });
            }
        },
        // addQuantity:(state, action: PayloadAction<number>) => {
        //     const findCart = state.buyingProduct.find((cart:CartType)=> cart.product.id === action.payload);
        //     if(findCart?.quantity !== findCart?.product.rating.count){
        //         if(findCart) findCart.quantity++;
        //     }
        // },
        deletProduct:(state, action: PayloadAction<number>) => {
            const findCart = state.buyingProduct.find((cart:CartType)=> cart.product.id === action.payload);
            if(findCart){
                state.buyingProduct = state.buyingProduct.filter((cart)=>{
                    if(cart.product.id === findCart.product.id) return false;
                    else return true;
                });
            }
        },
    },
}
)

export default myProductSlice.reducer;
export const { buyingProduct,deletProduct} = myProductSlice.actions;