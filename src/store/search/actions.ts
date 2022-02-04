import {SearchActionTypes} from "./types";

export const setSeason = (season: string) => {
  return {type: SearchActionTypes.SET_SEASON, payload: season}
}

export const setSubstr = (substr: string) => {
  return {type: SearchActionTypes.SET_SUBSTR, payload: substr}
}

export const setDateFrom = (dateFrom: string) => {
  return {type: SearchActionTypes.SET_DATE_FROM, payload: dateFrom}
}

export const setDateTo = (dateTo: string) => {
  return {type: SearchActionTypes.SET_DATE_TO, payload: dateTo}
}

export const setCompetition = (competition: string) => {
  return {type: SearchActionTypes.SET_COMPETITION, payload: competition}
}

export const clearSearch = () => {
  return {type: SearchActionTypes.CLEAR_SEARCH}
}

