import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenses";


// never forget to export the store instance from the module
export const store = configureStore({
    reducer: {
        expenseItems: expenseReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});