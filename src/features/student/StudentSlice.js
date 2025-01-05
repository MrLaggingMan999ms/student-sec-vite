import { createSlice } from "@reduxjs/toolkit";

const initialState = {students: []};

export const studentSlice = createSlice({  
    name: "student",
    initialState,
    reducers: {
        createStudent: (state, action) => {
            console.log(state, action);
        },
        deleteStudent: (state) => {
            console.log(state);
        },
    }
});

export const { createStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;