import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {SubTask, SubTaskState} from "../types/TaskTypes";
import {deleteSubTask, fetchSubTask, postSubTask, toggleSubTask} from "./asyncThunkSubTask";


const initialState: SubTaskState = {
    subTaskList: [],
    loading: false,
}

export const subTaskSlice = createSlice({
    name: 'subTask',
    initialState,
    reducers: {
        setSubTask(state, action: PayloadAction<SubTask[]>) {
            state.subTaskList = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubTask.fulfilled, (state, action) => {
            state.subTaskList = action.payload;
            state.loading = false;
        });

        builder.addCase(deleteSubTask.fulfilled, (state) => {
            state.loading = false;
        });

        builder.addCase(postSubTask.fulfilled, (state) => {
            state.loading = false;
        });

        builder.addCase(toggleSubTask.fulfilled, (state) => {
            state.loading = false;
        });
    }
})

export const {} = subTaskSlice.actions;

export default subTaskSlice.reducer;
