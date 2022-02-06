import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams, useSearchParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {Title2} from "../../microcomponents/titles/Titles";
import Searchbar from "../../Searchbar/Searchbar";
import MatchList from "../../lists/MatchList/MatchList";
import {fetchMatches} from "../../../store/match/actions";
import {useTypedSelector} from "../../../store/selectors";
import Loading from "../../microcomponents/loading/Loading";
import Button from "../../microcomponents/form/Button";
import {clearSearch} from "../../../store/search/actions";
import ErrorBanner from "../../errors/ErrorBanner";


const StyledCompetitionPage = styled.div`
  & > div {
    margin-top: 1rem;
  }
  & > Button {
    display: block;
    margin: 0.5rem auto 0 auto;
  }
`

const CompetitionPage: FC = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams();
  const {id} = useParams()
  const {matches, loading, error} = useTypedSelector(state => state.matches)
  const [count, setCount] = useState<number>(30)

  // Конструкция с LocalStorage нужна для хранения данных, которые мы
  // забираем после ссылки 
  const location = useLocation();
  const state = location.state as { name: string }
    || {name: localStorage.getItem('name')};
  const {name} = state


  useEffect(() => {
    dispatch(fetchMatches('comp', id, searchParams.get('season')))
  }, [searchParams])

  useEffect(() => {
    if (!searchParams.toString()) {
      dispatch(clearSearch())
    }
    localStorage.setItem('name', name)
  }, [])

  return (
    <StyledCompetitionPage>
      <Title2 centered>
        {name} schedule
      </Title2>
      <Searchbar noCompetition/>
      {loading
        ? <Loading/>
        : error
          ? <ErrorBanner error={error}/>
          : <>
            <MatchList matches={matches} count={count}/>
            <Button click={() => setCount(state => state + 30)}>Show more</Button>
            </>
      }
    </StyledCompetitionPage>
  );
};

export default CompetitionPage;