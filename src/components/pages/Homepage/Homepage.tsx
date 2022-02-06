import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {Title2} from "../../microcomponents/titles/Titles";
import Loading from "../../microcomponents/loading/Loading";
import ErrorBanner from "../../errors/ErrorBanner";
import MatchList from "../../lists/MatchList/MatchList";
import {useTypedSelector} from "../../../store/selectors";
import {fetchMatches} from "../../../store/match/actions";

const StyledHomePage = styled.div`
  p {
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0 auto;
    width: 75%;
    line-height: 2rem;
  }
`

const Homepage: FC = () => {
  const dispatch = useDispatch()
  const {matches, loading, error} = useTypedSelector(state => state.matches)
  const count = matches.length;

  useEffect(() => {
    dispatch(fetchMatches('today'))
  },[])

  return (
    <StyledHomePage>
      <Title2 centered>
        Welcome to Football Stats!
      </Title2>
      <p>This is a small App, which can show you information about leagues, current matches and other
        statistics
      </p>
      <Title2 centered>
        Today matches
      </Title2>
      {loading ?
        <Loading/> :
        error ?
          <ErrorBanner error={error}/>
          :
          <MatchList matches={matches} count={count}/>
      }
    </StyledHomePage>
  );
};

export default Homepage;