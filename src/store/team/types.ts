export interface ITeam {
  id: number,
  name: string,
  logo?: string,
  address?: string,
  phone?: string,
  website?: string,
  email?: string,
  founded?: number,
}

export interface ITeamState {
  team: ITeam | null,
  teams: ITeam [] | [],
  loading: boolean,
  error: number | null,
}

export enum TeamActionTypes {
  FETCH_TEAM = 'FETCH_TEAM',
  FETCH_PARTICULAR_TEAM_SUCCESS = 'FETCH_PARTICULAR_TEAM_SUCCESS',
  FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS',
  FETCH_TEAM_ERROR = 'FETCH_TEAM_ERROR',
}

export interface FetchTeamAction {
  type: TeamActionTypes.FETCH_TEAM
}

export interface FetchTeamSuccessAction {
  type: TeamActionTypes.FETCH_TEAM_SUCCESS,
  payload: ITeam []
}
export interface FetchParticularTeamSuccessAction {
  type: TeamActionTypes.FETCH_PARTICULAR_TEAM_SUCCESS,
  payload: ITeam
}

export interface FetchTeamErrorAction {
  type: TeamActionTypes.FETCH_TEAM_ERROR,
  payload: number,
}


export type TeamAction = FetchTeamAction | FetchTeamSuccessAction | FetchTeamErrorAction | FetchParticularTeamSuccessAction;