import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import taskSliceReducer from '../redux/taskSlice';

export const store = configureStore({
    reducer: {
        task: taskSliceReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
