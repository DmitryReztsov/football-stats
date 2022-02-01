import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {Title2} from "../../microcomponents/titles/Titles";
import Searchbar from "../../Searchbar/Searchbar";
import MatchList from "../../MatchList/MatchList";
import {useLocation, useParams } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {fetchMatches} from "../../../store/match/actions";
import {useTypedSelector} from "../../../store/selectors";
import CompetitionList from "../../lists/CompetitionList/CompetitionList";


//const StyledCompetitionPage = styled.div``

const CompetitionPage: FC = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {matches, loading, error} = useTypedSelector(state => state.matches)
  const location = useLocation();
  const state = location.state as {name: string};
  const name = state.name;

  useEffect(() => {
    dispatch(fetchMatches(id!))
  },[])

  return (
    <div>
      <Title2 centered>
        {name} schedule
      </Title2>
      <Searchbar/>
      {loading ?
        <img src={'/gifs/loading.gif'} style={{backgroundColor: 'white', display: "block", margin: '0 auto'}}/> :
        error ? <h2>Ууу, ошибка! {error.message}</h2> :
          <MatchList matches={matches}/>
      }
    </div>
  );
};

export default CompetitionPage;