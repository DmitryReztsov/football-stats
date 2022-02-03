export interface ITeam {
  id: number,
  name: string,
  logo: string,
  address: string,
  phone: string,
  website: string,
  email: string,
  founded: number,
}

export interface ITeamState {
  teams: ITeam [] | [],
  loading: boolean,
  error: Error | null,
}

export enum TeamActionTypes {
  FETCH_TEAM = 'FETCH_TEAM',
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

export interface FetchTeamErrorAction {
  type: TeamActionTypes.FETCH_TEAM_ERROR,
  payload: Error,
}


export type TeamAction = FetchTeamAction | FetchTeamSuccessAction | FetchTeamErrorAction;