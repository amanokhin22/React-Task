import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectIsModalOpen, selectModalTask} from '../../selectors/Selectors';
import {closeModal} from '../../redux/modalSlice';
import {useEffect, useState} from 'react';
import {FormControl, TextareaAutosize} from '@mui/material';
import {STListPropsType, SubTask, Task} from '../../types/TaskTypes';
import styles from './Modal.module.css'
import {putTask} from "../../redux/asyncThunkTask";
import {SubTaskComponent} from "../subTaskInModal/SubTaskComponent";
import {patchSubTask, toggleSubTask} from "../../redux/asyncThunkSubTask";
import {AddSubTaskComponent} from "../AddSubTaskComponent/AddSubTaskComponent";


export const KeepMountedModal: React.FC<STListPropsType> = ({subTaskList}) => {

    const isOpen = useAppSelector(selectIsModalOpen);
    const task: Task = useAppSelector(selectModalTask)!;
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');

    useEffect(() => {
        setName(task ? task.name : '')
    }, [task])

    const handleEditModal = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setName(event.target.value)
    }

    const submit = () => {
        if (name === task.name) {
            return;
        }
        if (name.length <= 3) {
            setName(task.name)
        } else {
            dispatch(putTask({...task, name}))
        }
    };

    const handleAddEditTaskEnter = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            submit();
        }
    };

    const handleAddEditTaskOut = () => {
        submit();
    };

    const handleClose = () => dispatch(closeModal());

    const editSubTaskComponent = (data: SubTask) => {
        dispatch(patchSubTask(data))
    }
    const onSubTaskToggle = async (data: SubTask) => {
        dispatch(toggleSubTask(data))
    }

    return (
        <div>
            <Modal
                keepMounted
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box className={styles.boxNeedMoreLongNameOfTheStyleBecauseTheMaterial}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{mt: 2}}>
                        {task && task.name}
                    </Typography>
                    <FormControl>

                        <TextareaAutosize onBlur={handleAddEditTaskOut} onKeyDown={handleAddEditTaskEnter}
                                          value={name} onChange={handleEditModal}
                                          className={styles.textarea} autoFocus={true}/>
                    </FormControl>

                    <ul className={styles.ulBox}>
                        {
                            subTaskList.map((subTask) => <li key={subTask.id}>
                                <SubTaskComponent onToggle={onSubTaskToggle} subTask={subTask}
                                                  onEditSubTask={editSubTaskComponent}/>
                            </li>)
                        }
                        <li>
                            <AddSubTaskComponent />
                        </li>
                    </ul>
                </Box>
            </Modal>
        </div>
    );
}
