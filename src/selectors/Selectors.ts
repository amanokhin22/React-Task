import {RootState} from "../app/store";
import {createSelector} from "@reduxjs/toolkit";

export const selectTasks = (state: RootState) => state.task;

export const selectTasksList = createSelector(selectTasks, (task) => task.taskList);