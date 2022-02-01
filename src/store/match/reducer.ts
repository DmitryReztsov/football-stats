import {IMatchState, MatchAction, MatchActionTypes} from "./types";

const initialState = {
  matches: [],
  loading: false,
  error: null,
}

export function matchReducer(state: IMatchState = initialState, action: MatchAction) {
  switch (action.type) {
    case MatchActionTypes.FETCH_MATCHES: {
      return {...state, loading: true, error: null}
    }
    case MatchActionTypes.FETCH_MATCHES_SUCCESS: {
      return {...state, loading: false, matches: action.payload.matches}
    }
    case MatchActionTypes.FETCH_MATCHES_ERROR: {
      return {competition: null, matches: [],  loading: false, error: action.payload}
    }
    default : {
      return state
    }
  }
}