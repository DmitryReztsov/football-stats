import {Dispatch} from "redux";
import axios from "axios";
import {getUrl, URLS} from "../../utils/urls";
import {TIER, TOKEN} from "../../utils/settings";
import {ITeam, TeamAction, TeamActionTypes} from "./types";

export const fetchTeam = (id: string, season: string | null) => {
  return async (dispatch: Dispatch<TeamAction>) => {
    try {
      dispatch({type: TeamActionTypes.FETCH_TEAM})
      const response = await axios.get(getUrl(URLS.COMPETITIONS + '/' + id + URLS.TEAMS + (season ? '?season=' + season : '')), {
        headers: {
          'X-Auth-Token': TOKEN,
        }
      })
      const teamArray = response.data.teams;
      const teams: ITeam[] = [];
      for (let i = 0; i < teamArray.length; i++) {
          teams.push({
            id: teamArray[i].id,
            name: teamArray[i].name,
            logo: teamArray[i].crestUrl || URLS.DEFAULT_LOGO,
            address: teamArray[i].address,
            phone: teamArray[i].phone,
            website: teamArray[i].website,
            email: teamArray[i].email,
            founded: teamArray[i].founded,
          })
      }
      setTimeout(() => {
        dispatch({type: TeamActionTypes.FETCH_TEAM_SUCCESS, payload: teams})
      }, 500)

    } catch (e) {
      if (e instanceof Error) {
        dispatch({type: TeamActionTypes.FETCH_TEAM_ERROR, payload: e})
      }
    }


  }
}