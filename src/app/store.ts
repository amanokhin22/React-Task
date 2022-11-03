import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import taskSliceReducer from '../redux/taskSlice';
import modalSliceReducer from '../redux/modalSlice';

export const store = configureStore({
    reducer: {
        task:  taskSliceReducer,
        modal: modalSliceReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
