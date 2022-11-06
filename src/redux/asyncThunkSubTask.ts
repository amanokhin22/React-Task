import {createAsyncThunk} from "@reduxjs/toolkit";
import {AddSubTaskDTO, SubTask} from "../types/TaskTypes";
import {apiSubTask} from "../API/apiSubTask";


export const fetchSubTasks = createAsyncThunk(
    'task/fetchSubTasks',
    async () => await apiSubTask.getByTaskId()
);

export const deleteSubTask = createAsyncThunk(
    'task/deleteSubTask',
    async (subTask: SubTask, {dispatch}) => {
        await apiSubTask.delete(subTask);
        await dispatch(fetchSubTasks());
    }
);

export const postSubTask = createAsyncThunk(
    'task/postSubTask',
    async (data: AddSubTaskDTO, {dispatch}) => {
        await apiSubTask.create(data);
        await dispatch(fetchSubTasks());
    }
);

export const patchSubTask = createAsyncThunk(
    'task/postSubTask',
    async (data: SubTask, {dispatch}) => {
        await apiSubTask.put(data);
        await dispatch(fetchSubTasks());
    }
);


export const toggleSubTask = createAsyncThunk(
    'task/toggleSubTask',
    async (subTask: SubTask, {dispatch}) => {
        await apiSubTask.put({...subTask, completed: !subTask.completed});
        await dispatch(fetchSubTasks());
    }
);

