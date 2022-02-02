import React, {FC, useEffect, useState} from 'react';
import {Title2} from "../../microcomponents/titles/Titles";
import Searchbar from "../../Searchbar/Searchbar";
import MatchList from "../../MatchList/MatchList";
import {useLocation, useParams } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {fetchMatches} from "../../../store/match/actions";
import {useTypedSelector} from "../../../store/selectors";
import Loading from "../../microcomponents/loading/Loading";
import Button from "../../microcomponents/form/Button";
import styled from "styled-components";


const StyledCompetitionPage = styled.div`
  & > div {
    margin-top: 1rem;
  }
  & > Button {
    display: block;
    margin: 0 auto;
  }
`

const CompetitionPage: FC = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {matches, loading, error} = useTypedSelector(state => state.matches)
  const [count, setCount] = useState<number>(30)

  const location = useLocation();
  const state = location.state as {name: string};
  const name = state.name;

  useEffect(() => {
    dispatch(fetchMatches(id!))
  },[])

  return (
    <StyledCompetitionPage>
      <Title2 centered>
        {name} schedule
      </Title2>
      <Searchbar/>
      {loading ?
        <Loading/> :
        error ? <h2>Ууу, ошибка! {error.message}</h2> :
          <div>
            <MatchList matches={matches} count={count}/>
            <Button onClick={() => setCount(state => state + 30)}>Show more</Button>
          </div>
      }
    </StyledCompetitionPage>
  );
};

export default CompetitionPage;