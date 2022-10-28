import React, {useState} from 'react';

import styles from '../Tasks.module.css'
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {Task} from "../../types/TaskTypes";

export interface FormPropsType {
    onAddTask: (data: AddTaskDTO) => void;
}

export type AddTaskDTO = Pick<Task, 'name'> // Метод Pick - очередной костыль TS, который равняет путь. То есть обязательным будет только внесение инфо-name, а не id или ещё что-то

const AddTask: React.FC<FormPropsType> = ({onAddTask}) => {
  const [name, setName] = useState('')

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
    }

    const handleAddTask = (event: React.UIEvent) => {
      event.preventDefault();
      onAddTask({name});
      setName('')

    }

    return (
        <div>
            <div className={styles.inputWrapper}>
                <TextField value={name} onChange={handleChangeName} className={styles.textField}
                           label="Wright new task"
                />
            </div>
            <div className={styles.sendButton}>
                    <Button disabled={name.length <= 3} onClick={handleAddTask} variant="contained" endIcon={<SendIcon/>}>
                        Send
                    </Button>
            </div>
        </div>
    )
}

export default AddTask