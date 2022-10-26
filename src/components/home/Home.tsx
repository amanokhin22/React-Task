import React from 'react';


import AddTask from "../addText/AddTask";
import TasksList from "../textList/TasksList";


export const Home = () => {
    // const count = useAppSelector(selectCount);
    // const dispatch = useAppDispatch();


    const addTaskHandler = () => {

    }

    return (
        <div>
            <div>
                <AddTask onAddTask={addTaskHandler}/>
            </div>
            <div>
                <TasksList/>
            </div>
        </div>
    );
}
