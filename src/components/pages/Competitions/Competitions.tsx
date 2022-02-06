import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../store/selectors";
import {fetchCompetition} from "../../../store/competition/actions";
import {Title2} from "../../microcomponents/titles/Titles";
import CompetitionList from "../../lists/CompetitionList/CompetitionList";
import Loading from "../../microcomponents/loading/Loading";
import ErrorBanner from "../../errors/ErrorBanner";

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
        error ? <ErrorBanner error={error}/>
        :
          <CompetitionList competitions={competitions}/>
      }
    </div>
  );
};

export default Competitions;