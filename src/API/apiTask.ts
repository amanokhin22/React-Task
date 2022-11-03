import axios from 'axios';
import {AddTaskDTO, Task} from "../types/TaskTypes";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3001/tasks`,
    headers: {
        "API-KEY": ""
    }
});

export const apiTask = {
    async getAll() {
        const res = await axiosInstance.get<Task[]>('');
        return res.data
    },

    async create(data: AddTaskDTO) {
        await axiosInstance.post('', data);
    },

    async delete(task: Task) {
        await axiosInstance.delete(`/${task.id}`);
    },

    async put(task: Task) {
        await axiosInstance.put(`/${task.id}`, task);
    },
}

