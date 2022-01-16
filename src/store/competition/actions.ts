import {CompetitionAction, CompetitionActionTypes} from "./types";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchCompetition = () => {
    return async (dispatch: Dispatch<CompetitionAction>) => {
        const url = 'https://api.football-data.org/v2/competitions';
        try {
            const response = await axios.get(url, {
                headers: {
                    'X-Auth-Token': '1d03ffda47574379b2496f1d6e897afd',
                }
            })
            dispatch({type: CompetitionActionTypes.FETCH_COMPETITION, payload: response.data.competitions})
        } catch (e) {
            console.log(e)
        }
    }
}