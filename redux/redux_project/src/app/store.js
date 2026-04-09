import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./userSlice";
import  contactSlice  from "./contactSlice";

export default configureStore({
    reducer:{
        user:userSlice,
        contact:contactSlice
    }
})