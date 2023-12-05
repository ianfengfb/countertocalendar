import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterActions";
import authReducer from "./authActions";



const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});


export default store;

