import React, {useState} from 'react';

import styles from '../Tasks.module.css'
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export interface FormPropsType {
    onAddTask: (data: AddTaskDTO) => void;
}

export interface AddTaskDTO {
    task: string;
}

const AddTask: React.FC<FormPropsType> = ({onAddTask}) => {
  const [task, setTask] = useState('')

    const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTask(event.target.value)
    }

    const handleClick = (event: React.UIEvent) => {
      event.preventDefault();
      onAddTask({task});
      setTask('')

    }

    return (
        <div className={styles.box}>
            <div>
                <TextField value={task} onChange={handleChangeTask} className={styles.textField}
                           label="Wright new task"
                />
            </div>
            <div className={styles.sendButton}>
                    <Button disabled={task.length <= 3} onClick={handleClick} variant="contained" endIcon={<SendIcon/>}>
                        Send
                    </Button>
            </div>
        </div>
    )
}

export default AddTask