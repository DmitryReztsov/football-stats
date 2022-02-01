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
  competition : string | null,
  matches: IMatch [] | [],
  loading: boolean,
  error: Error | null,
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
  payload: {competition: string, matches: IMatch []}
}

export interface FetchMatchErrorAction {
  type: MatchActionTypes.FETCH_MATCHES_ERROR,
  payload: Error,
}


export type MatchAction = FetchMatchAction | FetchMatchSuccessAction | FetchMatchErrorAction;