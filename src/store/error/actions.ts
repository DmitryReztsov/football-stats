import {ErrorActionTypes} from "./types";

export const setError = (error: Error) => {
  return {type: ErrorActionTypes.SET_ERROR, payload: error}
}

export const clearError = () => {
  return {type: ErrorActionTypes.CLEAR_ERROR}
}