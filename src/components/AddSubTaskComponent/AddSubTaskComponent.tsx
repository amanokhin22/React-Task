import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './addSubTaskComponent.module.css'
import {putTask} from "../../redux/asyncThunkTask";
import {SubTaskType} from "../../types/TaskTypes";
import {useState} from "react";
import {useAppDispatch} from "../../app/hooks";

export const AddSubTaskComponent: React.FC<SubTaskType> = ({onEditSubTask, subTask, onToggle}) => {
    // const [name, setName] = useState(subTask.name);
    // const dispatch = useAppDispatch();
    //
    // const submit = () => {
    //     if (name === subTask.name) {
    //         return;
    //     }
    //     if (name.length <= 3) {
    //         setName(subTask.name)
    //     } else {
    //         dispatch(putTask({...subTask, name}))
    //     }
    // };
    //
    // const handleEditSubTaskEnter = (event: React.KeyboardEvent) => {
    //     if (event.key === "Enter") {
    //         submit();
    //     }
    // };
    //
    // const handleEditSubTaskOut = () => {
    //     submit();
    // };

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control className={styles.input}
                              placeholder="Create new SubTask"
                              aria-label="Create new SubTask"
                              aria-describedby="basic-addon2"
                              // onBlur={handleEditSubTaskOut}
                              // onKeyDown={handleEditSubTaskEnter}
                />
                <Button className={styles.button} variant="outline-secondary" id="button-addon2">
                    Add SubTask
                </Button>
            </InputGroup>
        </div>
    )
}