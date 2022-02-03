import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../store/selectors";
import {fetchCompetition} from "../../../store/competition/actions";
import {useDispatch} from "react-redux";
import {Title2} from "../../microcomponents/titles/Titles";
import CompetitionList from "../../lists/CompetitionList/CompetitionList";
import Loading from "../../microcomponents/loading/Loading";

const Competitions: FC = () => {
  const {competitions, loading, error} = useTypedSelector(state => state.competition)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCompetition())
  }, [])


  return (
    <div>
      <Title2 centered>
        Actual competitions
      </Title2>
      {loading ?
        <Loading/> :
        error ? <h2>Ууу, ошибка! {error.message}</h2> :
          <CompetitionList competitions={competitions}/>
      }
    </div>
  );
};

export default Competitions;