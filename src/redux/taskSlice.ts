import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskState} from '../types/TaskTypes';
import {deleteTask, fetchTask, postTask, putTask} from "./asyncThunk";


const initialState: TaskState = {
    taskList: [],
    loading: false
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTaskList(state, action: PayloadAction<Task[]>) {
            state.taskList = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTask.pending, (state) => {
            state.loading = true; //Ожидание загрузки
        });

        builder.addCase(fetchTask.fulfilled, (state, action) => {
            state.taskList = action.payload;//Если всё норм пришло
            state.loading = false;// чтобы загрузчик-ожидание не грузились, но для этого нужно создать компонент-загрузчик

        });
        builder.addCase(fetchTask.rejected, (state) => {
            state.taskList = [];// Если ошибки пришли
            state.loading = false; // чтобы загрузчик-ожидание не грузились
        });


        builder.addCase(deleteTask.pending, (state) => {
            state.loading = true
        });
        builder.addCase(deleteTask.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteTask.rejected, (state) => {
            state.taskList = [];
            state.loading = false
        });


        builder.addCase(postTask.pending, (state) => {
            state.loading = true
        });
        builder.addCase(postTask.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(postTask.rejected, (state) => {
            state.taskList = [];
            state.loading = false
        });


        builder.addCase(putTask.pending, (state) => {
            state.loading = true
        });
        builder.addCase(putTask.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(putTask.rejected, (state) => {
            state.taskList = [];
            state.loading = false
        });
    }
})

export const {} = taskSlice.actions;


export default taskSlice.reducer;
