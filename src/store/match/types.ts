export interface IMatch {
  id: number,
  utcDate: string,
  status: string,
  stage: string,
  homeTeam: string,
  awayTeam: string,
  score: string,
}

export interface IMatchState {
  matches: IMatch [] | [],
  loading: boolean,
  error: number | null,
}

export enum MatchActionTypes {
  FETCH_MATCHES = 'FETCH_MATCHES',
  FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS',
  FETCH_MATCHES_ERROR = 'FETCH_MATCHES_ERROR',
}

export interface FetchMatchAction {
  type: MatchActionTypes.FETCH_MATCHES
}

export interface FetchMatchSuccessAction {
  type: MatchActionTypes.FETCH_MATCHES_SUCCESS,
  payload: IMatch []
}

export interface FetchMatchErrorAction {
  type: MatchActionTypes.FETCH_MATCHES_ERROR,
  payload: number,
}


export type MatchAction = FetchMatchAction | FetchMatchSuccessAction | FetchMatchErrorAction;