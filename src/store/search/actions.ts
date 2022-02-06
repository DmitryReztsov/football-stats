import {SearchActionTypes} from "./types";

export const setSeason = (season: string) => ({type: SearchActionTypes.SET_SEASON, payload: season})

export const setSubstr = (substr: string) => ({type: SearchActionTypes.SET_SUBSTR, payload: substr})

export const setDateFrom = (dateFrom: string) => ({type: SearchActionTypes.SET_DATE_FROM, payload: dateFrom})

export const setDateTo = (dateTo: string) => ({type: SearchActionTypes.SET_DATE_TO, payload: dateTo})

export const setCompetition = (competition: string) => ({type: SearchActionTypes.SET_COMPETITION, payload: competition})

export const clearSearch = () => ({type: SearchActionTypes.CLEAR_SEARCH})

