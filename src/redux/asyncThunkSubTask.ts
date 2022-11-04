import {createAsyncThunk} from "@reduxjs/toolkit";
import {AddTaskDTO, SubTask} from "../types/TaskTypes";
import {apiSubTask} from "../API/apiSubTask";


export const fetchSubTask = createAsyncThunk(
    'task/fetchSubTasks',
    async () => await apiSubTask.getAll()
);

export const deleteSubTask = createAsyncThunk(
    'task/deleteSubTask',
    async (subTask: SubTask, {dispatch}) => {
        await apiSubTask.delete(subTask);
        await dispatch(fetchSubTask());
    }
);

export const postSubTask = createAsyncThunk(
    'task/postSubTask',
    async (data: AddTaskDTO, {dispatch}) => {
        await apiSubTask.create(data);
        await dispatch(fetchSubTask());
    }
);

export const toggleSubTask = createAsyncThunk(
    'task/toggleSubTask',
    async (subTask: SubTask, {dispatch}) => {
        await apiSubTask.put({...subTask, completed: !subTask.completed});
        await dispatch(fetchSubTask());
    }
);

