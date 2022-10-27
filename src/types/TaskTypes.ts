export interface Task {
    id: number;
    name: string;
    completed?: boolean;
}

export type partialTask = Partial<Task>

export type createTask = Omit<Task, 'id' | 'completed'>


export interface TaskState {
    taskList: Task[];
    loading: boolean;
}