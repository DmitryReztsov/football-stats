import {ISearchState, SearchAction, SearchActionTypes} from "./types";

const initialState = {
  season: '',
  substr: '',
  dateFrom: '',
  dateTo: '',
  competition: '',
}

export function searchReducer(state: ISearchState = initialState, action: SearchAction) {
  switch (action.type) {
    case SearchActionTypes.SET_SEASON: {
      return {...state, season: action.payload}
    }
    case SearchActionTypes.SET_SUBSTR: {
      return {...state, substr: action.payload}
    }
    case SearchActionTypes.SET_DATE_FROM: {
      return {...state, dateFrom: action.payload}
    }
    case SearchActionTypes.SET_DATE_TO: {
      return {...state, dateTo: action.payload}
    }
    case SearchActionTypes.SET_COMPETITION: {
      return {...state, competition: action.payload}
    }
    case SearchActionTypes.CLEAR_SEARCH: {
      return initialState
    }
    default : {
      return state
    }
  }
}