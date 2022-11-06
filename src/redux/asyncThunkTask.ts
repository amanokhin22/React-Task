import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiTask} from "../API/apiTask";
import {AddTaskDTO, Task} from "../types/TaskTypes";


export const fetchTask = createAsyncThunk(
    'task/fetchTasks',
    async () => await apiTask.getAll()
);

export const deleteTask = createAsyncThunk(
    'task/deleteTask',
    async (task: Task, {dispatch}) => {
        await apiTask.delete(task);
        await dispatch(fetchTask());
    }
);

export const postTask = createAsyncThunk(
    'task/postTask',
    async (data: AddTaskDTO, {dispatch}) => {
        await apiTask.create(data);
        await dispatch(fetchTask());
    }
);

export const toggleTask = createAsyncThunk(
    'task/toggleTask',
    async (task: Task, {dispatch}) => {
        await apiTask.put({...task, completed: !task.completed});
        await dispatch(fetchTask());
    }
);

export const putTask = createAsyncThunk(
    'task/putTask',
    async (task: Task, {dispatch}) => {
        await apiTask.put(task);
        await dispatch(fetchTask());
    }
);

