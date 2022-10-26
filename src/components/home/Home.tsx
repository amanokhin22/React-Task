import React from 'react';
import {useAppSelector} from '../../app/hooks';


import AddTask from "../addText/AddTask";
import TasksList from "../textList/TasksList";
import {selectTasksList} from "../../selectors/Selectors";


export const Home: React.FC = () => {
    const taskList = useAppSelector(selectTasksList);
    //const dispatch = useAppDispatch();


    const addTaskHandler = () => {

    }

    // const onTasksListDelete = (task: Task) => {
    //
    // }
    //
    // const onTasksListToggle = (task: Task) => {
    //
    // }

    return (
        <div>
            <div>
                <AddTask onAddTask={addTaskHandler}/>
            </div>
            <div>
                <TasksList taskList={taskList} />
            </div>
        </div>
    );
}
