import {CompetitionAction, CompetitionActionTypes} from "./types";


export function competitionReducer (state: any[] = [], action : CompetitionAction) {
    switch (action.type) {
        case CompetitionActionTypes.FETCH_COMPETITION: {
            return action.payload
        }
        default : {
            return state
        }
    }
}