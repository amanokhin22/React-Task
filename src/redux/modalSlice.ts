import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';


export interface ModalState {
    isOpened: boolean;
    taskId?: number;
}

const initialState: ModalState = {
    isOpened: false,
    taskId: 0,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<number>) {
            state.taskId = action.payload
            state.isOpened = true
        },
        closeModal(state) {
            state.taskId = 0
            state.isOpened = false
        },
    },
})

export const {openModal, closeModal} = modalSlice.actions;


export default modalSlice.reducer;
