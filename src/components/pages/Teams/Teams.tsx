import React, {FC, useEffect} from 'react';
import {Title2} from "../../microcomponents/titles/Titles";
import Loading from "../../microcomponents/loading/Loading";
import {useTypedSelector} from "../../../store/selectors";
import {useDispatch} from "react-redux";
import {fetchTeam} from "../../../store/team/actions";
import TeamList from "../../lists/TeamList/TeamList";
import Searchbar from "../../Searchbar/Searchbar";

const Teams: FC = () => {

  const {teams, loading, error} = useTypedSelector(state => state.team)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTeam('2001'))
  }, [])

  return (
    <div>
      <Title2 centered>
        Actual teams
      </Title2>
      <Searchbar/>
      {loading ?
        <Loading/> :
        error ? <h2>Ууу, ошибка! {error.message}</h2> :
          <TeamList teams={teams}/>
      }
    </div>
  );
};

export default Teams;