import {RootState} from "../app/store";
import {createSelector} from "@reduxjs/toolkit";

export const tasksSelector = (state: RootState) => state.task;

export const selectTasksList = createSelector(tasksSelector, (task) => task.taskList);