import {LoadingAction, LoadingActionTypes} from "./types";
import {Dispatch} from "redux";

export const startLoading = () => {
    return {type: LoadingActionTypes.START_LOADING}
}

export const finishLoading = () => {
    return {type: LoadingActionTypes.FINISH_LOADING}
}