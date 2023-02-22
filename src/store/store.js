import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./features/heroSlicer";

export const store = configureStore({
    reducer: {
        hero: heroReducer,
    },
});
