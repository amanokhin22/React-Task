import {RootState} from "../app/store";
import {createSelector} from "@reduxjs/toolkit";

export const selectTasks = (state: RootState) => state.task;

export const selectTasksList = createSelector(selectTasks, (task) => task.taskList);

export const selectModal = (state: RootState) => state.modal;

export const selectIsModalOpen = createSelector(selectModal, (modal) => modal.isOpened);

export const selectModalTaskId = createSelector(selectModal, (modal) => modal.taskId);

export const selectModalTask = createSelector(
    selectTasksList,
    selectModalTaskId,
    (taskList, taskId) => taskList.find(task => task.id === taskId)
)

export const selectSubTasks = (state: RootState) => state.subTask;

export const selectSubTasksList = createSelector(selectSubTasks, (subTask) => subTask.subTaskList);