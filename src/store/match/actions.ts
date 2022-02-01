import {Dispatch} from "redux";
import axios from "axios";
import {getUrl, URLS} from "../../utils/urls";
import {TOKEN} from "../../utils/settings";
import {IMatch, MatchAction, MatchActionTypes} from "./types";

export const fetchMatches = (id: string) => {
  return async (dispatch: Dispatch<MatchAction>) => {
    try {
      dispatch({type: MatchActionTypes.FETCH_MATCHES})
      const response = await axios.get(getUrl(URLS.GET_MATCHES + id + '/matches'), {
        headers: {
          'X-Auth-Token': TOKEN,
        }
      })
      const competition = response.data.competition.name
      const matchesArray = response.data.matches;

      const matches: IMatch[] = [];
      for (let i = 0; i < matchesArray.length; i++) {
        matches.push({
          id: matchesArray[i].id,
          utcDate: matchesArray[i].utcDate,
          status:  matchesArray[i].status,
          stage:  matchesArray[i].stage,
          homeTeam:  matchesArray[i].homeTeam.name,
          awayTeam:  matchesArray[i].awayTeam.name,
          score:  `${matchesArray[i].score.fullTime.homeTeam}` + ' : ' + `${matchesArray[i].score.fullTime.awayTeam}`,
        })
      }
      setTimeout(() => {
        dispatch({type: MatchActionTypes.FETCH_MATCHES_SUCCESS, payload: {competition, matches}})
      }, 500)

    } catch (e) {
      if (e instanceof Error) {
        dispatch({type: MatchActionTypes.FETCH_MATCHES_ERROR, payload: e})
      }
    }


  }
}