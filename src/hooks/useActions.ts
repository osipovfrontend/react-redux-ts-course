import { useDispatch } from "react-redux"
import { AnyAction, bindActionCreators } from "redux"
import ActionCreators from '../store/action-creator/';
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/reducers";

export const useActions = () => {
    const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
    return bindActionCreators(ActionCreators, dispatch)
}