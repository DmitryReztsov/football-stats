import {ErrorAction, ErrorActionTypes} from "./types";


export function errorReducer (state: Error | null = null, action : ErrorAction) {
    switch (action.type) {
        case ErrorActionTypes.SET_ERROR: {
            return action.payload
        }
        case ErrorActionTypes.CLEAR_ERROR: {
            return null
        }
        default : {
            return state
        }
    }
}