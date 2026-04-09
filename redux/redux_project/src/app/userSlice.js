import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const userget = createAsyncThunk('userget', async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    return res.data;
})

export const userinsert = createAsyncThunk('userinsert', async (object) => {
    const res = await axios.post(`http://localhost:3000/user`, object);
    return res;
})

export const userdelete = createAsyncThunk('userdelete', async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    return res;
})

export const userupdate = createAsyncThunk('userupdate', async (object) => {
    const res = await axios.patch(`http://localhost:3000/user/${object.id}`, object);
    return res;
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        status:""
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(userget.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userget.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // 3. Set the state items to the data from the payload
                state.user = action.payload;
            })
            .addCase(userget.rejected, (state) => {
                state.status = 'failed';
            });
    }
});




export const {  } = userSlice.actions
export default userSlice.reducer