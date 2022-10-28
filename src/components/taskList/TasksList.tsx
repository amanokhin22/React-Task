import React from 'react';

import style from '../Tasks.module.css';

import Button from '@mui/material/Button';
import {ListPropsType} from '../../types/TaskTypes';
import DeleteIcon from '@mui/icons-material/Delete';
import {FormControlLabel, FormGroup, Switch} from "@mui/material";


const TasksList: React.FC<ListPropsType> = ({taskList, onDelete, onToggle}) => {

    return (
        <div className={style.allTaskList}>
            <h2>'The main list of tasks'</h2>
            <ul className={style.ul}>
                {
                    taskList.map((task) => <li key={task.id} className={style.li}>
                            <FormGroup>
                                <FormControlLabel onClick={() => onToggle(task)}
                                                  control={<Switch checked={task.completed} size="small"/>}
                                                  label={task.completed ? 'Do' : 'Done'}
                                />
                                <span> {task.name} </span>

                                <div>
                                    <Button onClick={() => onDelete(task)}
                                            variant="outlined"
                                            startIcon={<DeleteIcon/>}
                                            className={style.deleteButton}>
                                        Delete
                                    </Button>
                                </div>
                            </FormGroup>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TasksList