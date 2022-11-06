import axios from 'axios';
import {AddSubTaskDTO, SubTask} from "../types/TaskTypes";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3001/sub-tasks`,
    headers: {
        "API-KEY": ""
    }
});

export const apiSubTask = {
    async getByTaskId() {
        const res = await axiosInstance.get<SubTask[]>('');
        return res.data
    },

    async create(data: AddSubTaskDTO) {
        await axiosInstance.post('', data);
    },

    async delete(task: SubTask) {
        await axiosInstance.delete(`/${task.id}`);
    },

    async put(task: SubTask) {
        await axiosInstance.put(`/${task.id}`, task);
    },
}

