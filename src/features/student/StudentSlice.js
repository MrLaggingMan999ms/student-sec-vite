import { createSlice } from "@reduxjs/toolkit";
import {data} from "./data";
const initialState = {students: [...data]};

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