import React from 'react';

import style from '../Tasks.module.css';

import Button from '@mui/material/Button';
import {ListPropsType} from '../../types/TaskTypes';
import DeleteIcon from '@mui/icons-material/Delete';
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import {KeepMountedModal} from "../../modal/KeepMountedModal";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {openModal} from "../../redux/modalSlice";
import {selectSubTasksList} from "../../selectors/Selectors";


const TasksList: React.FC<ListPropsType> = ({taskList, onDelete, onToggle}) => {
    const subTaskList = useAppSelector(selectSubTasksList)
    const dispatch = useAppDispatch();

    return (
        <div className={style.allTaskList}>
            <h2>'The main list of tasks'</h2>
            <ul className={style.ul}>
                {
                    taskList.map((task) => <li key={task.id} className={style.li}>
                            <FormGroup>
                                <FormControlLabel onClick={() => onToggle(task)}
                                                  control={<Switch checked={task.completed} size="small"/>}
                                                  label={task.completed ? 'To do' : 'Done'}
                                />
                                <span onClick={() => dispatch(openModal(task.id))}>{task.name}</span>
                                <div>
                                    <Button onClick={() => onDelete(task)}
                                            variant="outlined"
                                            color="error"
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
            <KeepMountedModal subTaskList={subTaskList}/>
        </div>
    )
}

export default TasksList