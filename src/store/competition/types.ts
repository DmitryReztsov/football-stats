export enum CompetitionActionTypes {
    FETCH_COMPETITION = 'FETCH_COMPETITION',
}

export interface FetchCompetitionAction {
    type: CompetitionActionTypes.FETCH_COMPETITION,
    payload: object
}

export type CompetitionAction = FetchCompetitionAction;