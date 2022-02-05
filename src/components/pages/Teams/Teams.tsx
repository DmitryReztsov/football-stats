import React, {FC, useEffect} from 'react';
import {Title2} from "../../microcomponents/titles/Titles";
import Loading from "../../microcomponents/loading/Loading";
import {useTypedSelector} from "../../../store/selectors";
import {useDispatch} from "react-redux";
import {fetchTeam} from "../../../store/team/actions";
import TeamList from "../../lists/TeamList/TeamList";
import Searchbar from "../../Searchbar/Searchbar";
import {useSearchParams} from "react-router-dom";
import {sortTeams} from "../../../utils/common";
import {clearSearch} from "../../../store/search/actions";
import ErrorBanner from "../../errors/ErrorBanner";

const Teams: FC = () => {

  let {teams, loading, error} = useTypedSelector(state => state.team)
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams();

  const substr = searchParams.get('substr')
  const season = searchParams.get('season')
  const competition = searchParams.get('competition')

  if (substr) teams = sortTeams(teams,substr);

  useEffect(() => {
    if (!searchParams.toString()) {
      dispatch(clearSearch())
    }
  },[])

  useEffect(() => {
    dispatch(fetchTeam(competition || '2013', season))
  }, [searchParams])

  return (
    <div>
      <Title2 centered>
        Actual teams
      </Title2>
      <Searchbar noDate/>
      {loading ?
        <Loading/> :
        error ? <ErrorBanner error={error}/>
        :
          <TeamList teams={teams}/>
      }
    </div>
  );
};

export default Teams;