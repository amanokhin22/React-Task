import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import style from '../Tasks.module.css'

export interface Task {
    userId?: number;
    id: number;
    task: string;
    completed?: boolean;
}

export interface ListPropsType {
    taskList: Task[];
    // onToggle: (task: Task) => void;
    // onDelete: (task: Task) => void;
}


const TasksList: React.FC<ListPropsType> = ({taskList}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={style.allTaskList}>
            <h2>'The main list of tasks'</h2>

                        <Button onClick={handleOpen}>Open Task</Button>
                     {
                         taskList.map((task) =>
                        <Modal key={task.id}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className={style.modalWindow}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Task
                                </Typography>
                                <Typography id="modal-modal-description" className={style.inModal}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>
                         )}
        </div>
    )
}

export default TasksList