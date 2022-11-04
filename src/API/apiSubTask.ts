import axios from 'axios';
import {AddTaskDTO, SubTask} from "../types/TaskTypes";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3001/SubTasks`,
    headers: {
        "API-KEY": ""
    }
});

export const apiSubTask = {
    async getAll() {
        const res = await axiosInstance.get<SubTask[]>('');
        return res.data
    },

    async create(data: AddTaskDTO) {
        await axiosInstance.post('', data);
    },

    async delete(task: SubTask) {
        await axiosInstance.delete(`/${task.id}`);
    },

    async put(task: SubTask) {
        await axiosInstance.put(`/${task.id}`, task);
    },
}

