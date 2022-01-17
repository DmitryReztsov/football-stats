import {LoadingAction, LoadingActionTypes} from "./types";

export function loadingReducer (state: boolean = false, action : LoadingAction) {
    switch (action.type) {
        case LoadingActionTypes.START_LOADING: {
            return true
        }
        case LoadingActionTypes.FINISH_LOADING: {
            return false
        }
        default : {
            return state
        }
    }
}