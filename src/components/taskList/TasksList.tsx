import React from 'react';

import style from '../Tasks.module.css';

import Button from '@mui/material/Button';
import {Task} from '../../types/TaskTypes';
import DeleteIcon from '@mui/icons-material/Delete';


export interface ListPropsType {
    taskList: Task[];
    onToggle: (task: Task) => void;
    onDelete: (task: Task) => void;
}

const TasksList: React.FC<ListPropsType> = ({taskList, onDelete, onToggle}) => {

    return (
        <div className={style.allTaskList}>
            <h2 className={style.h2}>'The main list of tasks'</h2>
            <ul className={style.ul}>
                {
                    taskList.map((task) => <li key={task.id} className={style.li}>
                            <label>
                                <input type={'checkbox'}
                                       className={style.text}/>

                                <span> { task.name } </span>

                                <div>
                                    <Button onClick={() => onToggle(task)} className={style.doneButton} variant="outlined">
                                        {task.completed ? 'Back' : 'Done'}
                                    </Button>
                                    <Button onClick={() => onDelete(task)} className={style.deleteButton}
                                            variant="outlined"
                                            startIcon={<DeleteIcon/>}>
                                        Delete
                                    </Button>
                                </div>
                            </label>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TasksList