
export enum LoadingActionTypes {
    START_LOADING = 'START_LOADING',
    FINISH_LOADING = 'FINISH_LOADING'
}

export interface StartLoadingAction {
    type: LoadingActionTypes.START_LOADING
}
export interface FinishLoadingAction {
    type: LoadingActionTypes.FINISH_LOADING
}

export type LoadingAction = StartLoadingAction | FinishLoadingAction;