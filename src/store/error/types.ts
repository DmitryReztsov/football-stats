
export enum ErrorActionTypes {
    SET_ERROR = 'SET_ERROR',
    CLEAR_ERROR = 'CLEAR_ERROR'
}

export interface SetErrorAction {
    type: ErrorActionTypes.SET_ERROR,
    payload: Error
}
export interface ClearErrorAction {
    type: ErrorActionTypes.CLEAR_ERROR
}

export type ErrorAction = SetErrorAction | ClearErrorAction;