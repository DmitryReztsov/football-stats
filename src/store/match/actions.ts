import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";
import {getUrl, getUrlForMatches, URLS} from "../../utils/urls";
import {TOKEN} from "../../utils/settings";
import {IMatch, MatchAction, MatchActionTypes} from "./types";
import {getScore} from "../../utils/common";
import {CompetitionActionTypes} from "../competition/types";


export const fetchMatches = (id: string, type: string, params?: string | null) => {
  return async (dispatch: Dispatch<MatchAction>) => {
    try {
      dispatch({type: MatchActionTypes.FETCH_MATCHES})
      const url = getUrl(getUrlForMatches(type,id) + (params ? `?season=${params}` : ''))
      const response = await axios.get(url, {
        headers: {
          'X-Auth-Token': TOKEN,
        }
      })

      const matchesArray = response.data.matches;

      const matches: IMatch[] = [];
      for (let i = 0; i < matchesArray.length; i++) {
        matches.push({
          id: matchesArray[i].id,
          utcDate: matchesArray[i].utcDate,
          status:  matchesArray[i].status,
          stage:  matchesArray[i].stage,
          homeTeam:  matchesArray[i].homeTeam,
          awayTeam:  matchesArray[i].awayTeam,
          score: getScore(matchesArray[i].score.fullTime.homeTeam,matchesArray[i].score.fullTime.awayTeam),
        })
      }
      setTimeout(() => {
        dispatch({type: MatchActionTypes.FETCH_MATCHES_SUCCESS, payload: matches})
      }, 500)

    } catch (e: any) {
      if (e.message === 'Network Error') {
        dispatch({type: MatchActionTypes.FETCH_MATCHES_ERROR, payload: 429});
      }
      dispatch({type: MatchActionTypes.FETCH_MATCHES_ERROR, payload: e.response.status});
    }
  }
}