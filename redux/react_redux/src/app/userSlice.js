import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        number:1,
        isImage:true
    },
    reducers:{
        Plus:(state)=>{
            return({...state,number:state.number+1})
        },
        Minus:(state)=>{
            return ({...state,number:state.number-1})
        },
        Hide:(state)=>{
            return ({...state,isImage:false})
        },
        Show:(state)=>{
            return ({...state,isImage:true})
        },
        Toggle:(state)=>{
            return ({...state,isImage:!state.isImage})
        }

    }
});


export const { Plus, Minus, Hide,Show ,Toggle} = userSlice.actions
export default userSlice.reducer