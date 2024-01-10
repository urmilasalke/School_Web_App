import { configureStore } from "@reduxjs/toolkit";
import AdmissionReducer from "../reducers/AdmissionReducer";
export const store=configureStore({
    reducer:{
        admission:AdmissionReducer
    }
})
export type MainState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch