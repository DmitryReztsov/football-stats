import {CompetitionAction, CompetitionActionTypes} from "./types";
import {Dispatch} from "redux";
import axios from "axios";
import {BASEURL, getCompetitionsUrl} from "../../utils/urls";
import {TOKEN} from "../../utils/settings";

export const fetchCompetition = () => {
    return async (dispatch: Dispatch<CompetitionAction>) => {
        try {
            const response = await axios.get(getCompetitionsUrl(BASEURL), {
                headers: {
                    'X-Auth-Token': TOKEN,
                }
            })
            dispatch({type: CompetitionActionTypes.FETCH_COMPETITION, payload: response.data.competitions})
        } catch (e) {
            console.log(e)
        }
    }
}