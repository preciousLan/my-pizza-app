import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { product } from '../_types/types';

// CartItem = only the parts you want from product
export type CartItem = Pick<product, "id" | "title" | "price" | "image">;

// Type for the whole cart slice
interface CartState {
    cart: CartItem[];
}

// initial state typed
const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exist = state.cart.find(f => f.id === action.payload.id)

            if (!exist) state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((f) => f.id !== action.payload)
        }
    }
});

// export actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// reducer
export default cartSlice.reducer;
