import {SearchActionTypes} from "./types";

export const setYear = (year: string) => {
  return {type: SearchActionTypes.SET_YEAR, payload: year}
}