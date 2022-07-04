import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/features/CounterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})