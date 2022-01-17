export interface ICompetition {
    id: number,
    name: string,
    emblemUrl: string,
    startDate: string,
    endDate: string,
    plan: string,
}

export enum CompetitionActionTypes {
    FETCH_COMPETITION = 'FETCH_COMPETITION',
}

export interface FetchCompetitionAction {
    type: CompetitionActionTypes.FETCH_COMPETITION,
    payload: object
}

export type CompetitionAction = FetchCompetitionAction;