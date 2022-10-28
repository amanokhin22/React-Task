export interface Task {
    id: number;
    name: string;
    completed: boolean;
}

//export type partialTask = Partial<Task>

//export type createTask = Omit<Task, 'id' | 'completed'>


export interface TaskState {
    taskList: Task[];
    loading: boolean;
}

export interface FormPropsType {
    onAddTask: (data: AddTaskDTO) => void;
}

export type AddTaskDTO = Pick<Task, 'name'> // Метод Pick - очередной костыль TS, который равняет путь.
// То есть обязательным будет только внесение инфо-name, а не id или ещё что-то


export interface ListPropsType {
    taskList: Task[];
    onToggle: (task: Task) => void;
    onDelete: (task: Task) => void;
}