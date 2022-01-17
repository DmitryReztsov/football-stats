import {CompetitionAction, CompetitionActionTypes, ICompetition} from "./types";
import {Dispatch} from "redux";
import axios from "axios";
import {BASEURL, getCompetitionsUrl} from "../../utils/urls";
import {TIER, TOKEN} from "../../utils/settings";
import {LoadingActionTypes} from "../loading/types";

export const fetchCompetition = () => {
    return async (dispatch: Dispatch<CompetitionAction>) => {
        try {
            dispatch({type: CompetitionActionTypes.FETCH_COMPETITION})
            const response = await axios.get(getCompetitionsUrl(BASEURL), {
                headers: {
                    'X-Auth-Token': TOKEN,
                }
            })
            const comps = response.data.competitions;
            const competitions: ICompetition[] = [];
            for (let i = 0; i < comps.length; i++) {
                if (comps[i].plan === TIER) {
                    competitions.push({
                        id: comps[i].id,
                        name: comps[i].name,
                        emblemUrl: comps[i].emblemUrl,
                        startDate: comps[i].startDate,
                        endDate: comps[i].endDate,
                    })
                }
            }
            setTimeout(() => {
                dispatch({type: CompetitionActionTypes.FETCH_COMPETITION_SUCCESS, payload: competitions})
            }, 500)

        } catch (e) {
            if (e instanceof Error) {
                dispatch({type: CompetitionActionTypes.FETCH_COMPETITION_ERROR, payload: e})
            }
        }


    }
}