import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curretUser:null,
    error:null,
    loading:false,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart: (state,action)=>{
            state.loading = true;
        },
        signInSuccess: (state,action)=>{
            state.curretUser = action.payload;
            state.loading=false;
            state.error=false
        },
        signInFailure: (state,action)=>{
            state.error = true;
            state.loading = false;
        }
    }
})

export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;
export default userSlice.reducer;