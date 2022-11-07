import * as React from 'react';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import {useState} from "react";
import {SubTaskType} from "../../types/TaskTypes";
import styles from "../Tasks.module.css";
import {Checkbox, List, ListItem} from "@mui/material";
import {putTask} from "../../redux/asyncThunkTask";
import {useAppDispatch} from "../../app/hooks";


export const SubTaskComponent: React.FC<SubTaskType> = ({onEditSubTask, onToggle, subTask}) => {
    const [name, setName] = useState(subTask.name);
    const dispatch = useAppDispatch();

    const handleChangeSubTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    };

    const handleAddEditSubTask = (event: React.UIEvent) => {
        event.preventDefault();
        onEditSubTask({...subTask, name});
    };

    const submit = () => {
        if (name === subTask.name) {
            return;
        }
        if (name.length <= 3) {
            setName(subTask.name)
        } else {
            dispatch(putTask({...subTask, name}))
        }
    };

    const handleEditSubTaskEnter = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            submit();
        }
    };

    const handleEditSubTaskOut = () => {
        submit();
    };

    return (
        <div>
            <div>
                <List>
                    <ListItem alignItems="center">
                        <Checkbox
                            checked={subTask.completed}
                            placeholder={subTask.completed ? 'To do' : 'Done'}
                            onChange={() => onToggle(subTask)}
                            inputProps={{"aria-label": "primary checkbox"}}
                        />
                        <TextField onBlur={handleEditSubTaskOut} onKeyDown={handleEditSubTaskEnter} value={name} onChange={handleChangeSubTask} className={styles.textField}
                                   label="Create new subTask"
                        />
                    </ListItem>
                </List>
            </div>

            <Button size="small" onClick={handleAddEditSubTask} variant="contained" color="success">
                Add Edit task
            </Button>
        </div>
    );
}
