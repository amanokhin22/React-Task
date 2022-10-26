import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {Task} from "../components/textList/TasksList";

export interface TaskState {
  taskList: Task[];
  loading: boolean;
}

const initialState: TaskState = {
  taskList: [],
  loading: false
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTodoList(state, action: PayloadAction<Task[]>) {
      state.taskList = action.payload
    },
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.value += action.payload;
//       })
//       .addCase(incrementAsync.rejected, (state) => {
//         state.status = 'failed';
//       });
   },
 });

export const {  } = taskSlice.actions;



export default taskSlice.reducer;
