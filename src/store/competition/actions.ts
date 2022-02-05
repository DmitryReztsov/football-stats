import {CompetitionAction, CompetitionActionTypes, ICompetition} from "./types";
import {Dispatch} from "redux";
import axios from "axios";
import {getUrl, URLS} from "../../utils/urls";
import {TIER, TOKEN} from "../../utils/settings";

export const fetchCompetition = () => {
  return async (dispatch: Dispatch<CompetitionAction>) => {
    try {
      dispatch({type: CompetitionActionTypes.FETCH_COMPETITION})
      const response = await axios.get(getUrl(URLS.COMPETITIONS), {
        headers: {
          'X-Auth-Token': TOKEN,
        }
      })

      const competitionArray = response.data.competitions;
      const competitions: ICompetition[] = [];
      for (let i = 0; i < competitionArray.length; i++) {
        if (competitionArray[i].plan === TIER) {
          competitions.push({
            id: competitionArray[i].id,
            name: competitionArray[i].name,
            code: competitionArray[i].code,
            startDate: competitionArray[i].startDate,
            endDate: competitionArray[i].endDate,
          })
        }
      }
      setTimeout(() => {
        dispatch({type: CompetitionActionTypes.FETCH_COMPETITION_SUCCESS, payload: competitions})
      }, 500)

    } catch (e: any) {
      if (e.message === 'Network Error') {
        dispatch({type: CompetitionActionTypes.FETCH_COMPETITION_ERROR, payload: 429});
      }
      dispatch({type: CompetitionActionTypes.FETCH_COMPETITION_ERROR, payload: e.response.status});
    }
  }
}