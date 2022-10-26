import {AppThunk} from "../app/store";
import {incrementByAmount} from "./taskSlice";
import {selectCount} from "../selectors/Selectors";

export const incrementIfOdd =
    (amount: number): AppThunk =>
        (dispatch, getState) => {
            const currentValue = selectCount(getState());
            if (currentValue % 2 === 1) {
                dispatch(incrementByAmount(amount));
            }
        };