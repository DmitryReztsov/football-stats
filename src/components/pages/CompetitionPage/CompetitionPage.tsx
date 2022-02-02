import React, {FC, useEffect, useState} from 'react';
import {Title2} from "../../microcomponents/titles/Titles";
import Searchbar from "../../Searchbar/Searchbar";
import MatchList from "../../MatchList/MatchList";
import {useLocation, useParams, useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const {id} = useParams()
  const {matches, loading, error} = useTypedSelector(state => state.matches)
  // const {year, substr} = useTypedSelector(state => state.search)
  const [count, setCount] = useState<number>(30)

  const location = useLocation();
  let state = location.state as {name: string, defaultParams: string}
  || {name: localStorage.getItem('name'),defaultParams: 'season=2021'};
  let name = state.name

  useEffect(() => {
    dispatch(fetchMatches(id!,searchParams.toString() || state.defaultParams))
  },[searchParams])

  useEffect(() => {
    localStorage.setItem('name', name)
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
            <Button getMore={() => setCount(state => state + 30)}>Show more</Button>
          </div>
      }
    </StyledCompetitionPage>
  );
};

export default CompetitionPage;