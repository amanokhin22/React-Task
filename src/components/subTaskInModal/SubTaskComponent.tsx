import * as React from 'react';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import {useState} from "react";
import {SubTaskType} from "../../types/TaskTypes";
import styles from "../Tasks.module.css";


export const SubTaskComponent: React.FC<SubTaskType> = ({onEditSubTask, subTask}) => {
     const [name, setName] = useState(subTask.name);


    const handleChangeSubTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    };

    const handleAddEditSubTask = (event: React.UIEvent) => {
        event.preventDefault();
        onEditSubTask({...subTask, name});
    }

    return (
                <div>
                    <div>
                        <TextField value={name} onChange={handleChangeSubTask} className={styles.textField}
                                   label="Create new subTask"
                        />
                    </div>

                    <Button size="small" onClick={handleAddEditSubTask} variant="contained" color="success">
                    Add Edit task
                    </Button>
                </div>
    );
}
