import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';


import AddTask, {AddTaskDTO} from "../addTask/AddTask";
import TasksList from "../taskList/TasksList";
import {selectTasksList} from "../../selectors/Selectors";
import {Task} from "../../types/TaskTypes";
import {deleteTask, fetchTask, postTask, putTask} from "../../redux/asyncThunk";


export const Home: React.FC = () => {
    const taskList = useAppSelector(selectTasksList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTask());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const addTaskHandler = async (data: AddTaskDTO ) => {
        await dispatch(postTask(data))
    }

    const onTasksListDelete = async (task: Task) => {
        await dispatch(deleteTask(task));
    }

    const onTasksListToggle = async (task: Task) => {
        await dispatch(putTask(task));
    }

    return (
        <div>
            <div>
                <AddTask onAddTask={addTaskHandler}/>
            </div>
            <div>
                <TasksList taskList={taskList} onToggle={onTasksListToggle} onDelete={onTasksListDelete}/>
            </div>
        </div>
    );
}
