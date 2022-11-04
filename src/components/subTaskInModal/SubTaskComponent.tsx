import * as React from 'react';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import {useState} from "react";
import {SubTaskType} from "../../types/TaskTypes";
import styles from "../Tasks.module.css";



export const SubTaskComponent: React.FC<SubTaskType> = ({onAddSubTask}) => {
    // const subTaskList = useAppSelector(selectSubTasksList);
    // const subTask: SubTask = useAppSelector(selectModalTask)!;
     const [sub, setSub] = useState('');
    // const dispatch = useAppDispatch();
    //
    //
    // const submit = () => {
    //     if (sub === subTask.name) {
    //         return;
    //     }
    //     if (sub.length <= 3) {
    //         setSub(subTask.name)
    //     } else {
    //         dispatch(putTask({...subTask, sub}))
    //     }
    // };
    //
    // const handleAddEditTask = (event: React.UIEvent) => {
    //     event.preventDefault();
    //     submit();
    // };

    const handleChangeSubTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSub(event.target.value)
    };

    const handleAddEditSubTask = (event: React.UIEvent) => {
        event.preventDefault();
        onAddSubTask({name});
        setSub('')
    }

    return (
                <div>
                    <div>
                        <TextField value={sub} onChange={handleChangeSubTask} className={styles.textField}
                                   label="Create new subTask"
                        />
                    </div>

                    <Button size="small" onClick={handleAddEditSubTask} variant="contained" color="success">
                    Add Edit task
                    </Button>
                </div>
    );
}
