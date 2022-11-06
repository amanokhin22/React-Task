import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';


import AddTask from "../addTask/AddTask";
import TasksList from "../taskList/TasksList";
import {selectTasksList} from "../../selectors/Selectors";
import {AddTaskDTO, Task} from "../../types/TaskTypes";
import {deleteTask, fetchTask, postTask, toggleTask} from "../../redux/asyncThunkTask";
import {fetchSubTasks} from "../../redux/asyncThunkSubTask";


export const Home: React.FC = () => {
    const taskList = useAppSelector(selectTasksList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTask());
        dispatch(fetchSubTasks())
        //dispatch(fetchSubTasks())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const addTaskHandler = async (data: AddTaskDTO) => {
        await dispatch(postTask(data))
    }

    const onTasksListDelete = async (task: Task) => {
        await dispatch(deleteTask(task));
    }

    const onTasksListToggle = async (task: Task) => {
        await dispatch(toggleTask(task));
    }

    return (
        <div>
            <div>
                <AddTask onAddTask={addTaskHandler}/>
            </div>
            <div>
                <TasksList taskList={taskList} onToggle={onTasksListToggle} onDelete={onTasksListDelete} />
            </div>
        </div>
    );
}
