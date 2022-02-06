import {CompetitionAction, CompetitionActionTypes, ICompetitionState} from "./types";

const initialState = {
  competitions: [],
  loading: false,
  error: null,
}

export function competitionReducer(state: ICompetitionState = initialState, action: CompetitionAction) {
  switch (action.type) {
    case CompetitionActionTypes.FETCH_COMPETITION: {
      return {...state, loading: true, error: null}
    }
    case CompetitionActionTypes.FETCH_COMPETITION_SUCCESS: {
      return {...state, loading: false, competitions: action.payload}
    }
    case CompetitionActionTypes.FETCH_COMPETITION_ERROR: {
      return {competitions: [], loading: false, error: action.payload}
    }
    default : {
      return state
    }
  }
}