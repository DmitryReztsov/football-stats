import {SearchActionTypes} from "./types";

export const setYear = (year: string) => {
  return {type: SearchActionTypes.SET_YEAR, payload: year}
}

export const setSubstr = (substr: string) => {
  return {type: SearchActionTypes.SET_SUBSTR, payload: substr}
}