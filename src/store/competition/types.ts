export interface ICompetition {
    id: number,
    name: string,
    emblemUrl: string,
    startDate: string,
    endDate: string,
}

export interface ICompetitionState {
    competitions: ICompetition [] | [],
    loading: boolean,
    error: Error | null,
}

export enum CompetitionActionTypes {
    FETCH_COMPETITION = 'FETCH_COMPETITION',
    FETCH_COMPETITION_SUCCESS = 'FETCH_COMPETITION_SUCCESS',
    FETCH_COMPETITION_ERROR = 'FETCH_COMPETITION_ERROR',
}

export interface FetchCompetitionAction {
    type: CompetitionActionTypes.FETCH_COMPETITION
}

export interface FetchCompetitionSuccessAction {
    type: CompetitionActionTypes.FETCH_COMPETITION_SUCCESS,
    payload: ICompetition []
}

export interface FetchCompetitionErrorAction {
    type: CompetitionActionTypes.FETCH_COMPETITION_ERROR,
    payload: Error,
}



export type CompetitionAction = FetchCompetitionAction | FetchCompetitionSuccessAction | FetchCompetitionErrorAction;