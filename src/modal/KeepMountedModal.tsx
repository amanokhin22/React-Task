import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectIsModalOpen, selectModalTask} from "../selectors/Selectors";
import {closeModal} from "../redux/modalSlice";
import {useEffect, useState} from "react";
import {TextareaAutosize} from "@mui/material";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const KeepMountedModal: React.FC = () => {

    const isOpen = useAppSelector(selectIsModalOpen);
    const task = useAppSelector(selectModalTask);
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');

    useEffect(() => {
        setName(task ? task.name : '')
    }, [task])

    const handleClose = () => dispatch(closeModal());

    return (
        <Modal
            keepMounted
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{mt: 2}}>
                    {task && task.name}
                </Typography>
                <TextareaAutosize value={name}/>
            </Box>
        </Modal>
    );
}
