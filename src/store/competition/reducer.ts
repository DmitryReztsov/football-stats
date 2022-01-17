import {CompetitionAction, CompetitionActionTypes, ICompetition} from "./types";


export function competitionReducer (state: ICompetition[] = [], action : CompetitionAction) {
    switch (action.type) {
        case CompetitionActionTypes.FETCH_COMPETITION: {
            return action.payload
        }
        default : {
            return state
        }
    }
}