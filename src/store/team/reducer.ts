import {ITeamState, TeamAction, TeamActionTypes} from "./types";

const initialState = {
  team: null,
  teams: [],
  loading: false,
  error: null,
}

export function teamReducer(state: ITeamState = initialState, action: TeamAction) {
  switch (action.type) {
    case TeamActionTypes.FETCH_TEAM: {
      return {...state, loading: true, error: null}
    }
    case TeamActionTypes.FETCH_TEAM_SUCCESS: {
      return {...state, loading: false, teams: action.payload}
    }
    case TeamActionTypes.FETCH_PARTICULAR_TEAM_SUCCESS: {
      return {...state, loading: false, team: action.payload}
    }
    case TeamActionTypes.FETCH_TEAM_ERROR: {
      return {teams: [], team: null, loading: false, error: action.payload}
    }
    default : {
      return state
    }
  }
}