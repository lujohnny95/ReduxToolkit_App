import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "Johnny",
            email: "lu_johnny@yahoo.com"
        },
        pending: false,
        error: false,
    },
    reducers: {
        // update: (state, action) => {
        //     state.name = action.payload.name;
        //     state.email = action.payload.email;
        // },
        // remove: (state) => (state = {}),

        // addHello: (state, action) => {
        //     state.name = "Hello" + action.payload.name;
        // },
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        updateError: (state) => {
            state.error = true;
            state.pending = false;
        },
    },  
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
