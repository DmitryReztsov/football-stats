import {ISearchState, SearchAction, SearchActionTypes} from "./types";

const initialState = {
  year: '',
  substr: '',
}

export function searchReducer(state: ISearchState = initialState, action: SearchAction) {
  switch (action.type) {
    case SearchActionTypes.SET_YEAR: {
      return {...state, year: action.payload}
    }
    case SearchActionTypes.SET_SUBSTR: {
      return {...state, substr: action.payload}
    }
    default : {
      return state
    }
  }
}