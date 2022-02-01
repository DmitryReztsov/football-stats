import {Dispatch} from "redux";
import axios from "axios";
import {getUrl, URLS} from "../../utils/urls";
import {TIER, TOKEN} from "../../utils/settings";
import {IMatch, MatchAction, MatchActionTypes} from "./types";

export const fetchMatches = () => {
  return async (dispatch: Dispatch<MatchAction>) => {
    try {
      dispatch({type: MatchActionTypes.FETCH_MATCHES})
      const response = await axios.get(getUrl(URLS.GET_COMPETITIONS), {
        headers: {
          'X-Auth-Token': TOKEN,
        }
      })
      const competitionArray = response.data.competitions;
      const competitions: IMatch[] = [];
      // for (let i = 0; i < competitionArray.length; i++) {
      //   if (competitionArray[i].plan === TIER) {
      //     competitions.push({
      //       id: competitionArray[i].id,
      //       name: competitionArray[i].name,
      //       code: competitionArray[i].code,
      //       startDate: competitionArray[i].startDate,
      //       endDate: competitionArray[i].endDate,
      //     })
      //   }
      // }
      // setTimeout(() => {
      //   dispatch({type: MatchActionTypes.FETCH_MATCHES_SUCCESS, payload: competitions})
      // }, 500)

    } catch (e) {
      if (e instanceof Error) {
        dispatch({type: MatchActionTypes.FETCH_MATCHES_ERROR, payload: e})
      }
    }


  }
}