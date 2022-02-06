import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import styled from "styled-components";
import {useTypedSelector} from "../../../store/selectors";
import {fetchMatches} from "../../../store/match/actions";
import {clearSearch} from "../../../store/search/actions";
import {Title2} from "../../microcomponents/titles/Titles";
import Searchbar from "../../Searchbar/Searchbar";
import Loading from "../../microcomponents/loading/Loading";
import MatchList from "../../lists/MatchList/MatchList";
import Button from "../../microcomponents/form/Button";
import ErrorBanner from "../../errors/ErrorBanner";
import {fetchParticularTeam} from "../../../store/team/actions";

const StyledTeamPage = styled.div`
  & > div {
    margin-top: 1rem;
  }
  & > Button {
    display: block;
    margin: 0.5rem auto 0 auto;
  }
`

const StyledTeamContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 2rem 0;
  
  @media ${({theme}) => theme.media.medium} {
    flex-direction: column;
    padding: 0.5rem 0 1rem 0;
  }
`

const StyledTeamLogoContainer = styled.div`
  flex: 0 1 50%;
  display: flex;
  justify-content: flex-end;
  
  @media ${({theme}) => theme.media.medium} {
      justify-content: center;
  }
  
  img {
    width: 12rem;
    height: 12rem;
    margin: 0 3rem 0 0;
    
    @media ${({theme}) => theme.media.medium} {
      margin: 0;
      width: 6rem;
      height: 6rem;
    }
  }
  
`

const StyledTeamInfoContainer = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.3rem;
  
  & h2 {
    padding-left: 0rem;
  }
  
  @media ${({theme}) => theme.media.medium} {
      justify-content: center;
      align-items: center;
      text-align: center;
  }
  
  & > a {
    color: ${({theme}) => theme.colors.dark_green};
    border-bottom: 1px solid ${({theme}) => theme.colors.dark_green};
    &:visited {
      color: ${({theme}) => theme.colors.dark_green};
    }
    &:hover,active {
      color: ${({theme}) => theme.colors.light_green};
      border-bottom: 1px solid ${({theme}) => theme.colors.light_green};
    }
  }
`

const TeamPage: FC = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams();
  const {id} = useParams()
  const {matches, loading, error} = useTypedSelector(state => state.matches)
  const {team} = useTypedSelector(state => state.team)
  const [count, setCount] = useState<number>(30)

  useEffect(() => {
    dispatch(fetchMatches('team', id))
  }, [searchParams,id])

  useEffect(() => {
    if (!searchParams.toString()) {
      dispatch(clearSearch())
    }
    dispatch(fetchParticularTeam(id!))
  }, [id])

  return (
    <StyledTeamPage>
      {loading ?
        null :
        error ? null
        :
        <StyledTeamContainer>
          <StyledTeamLogoContainer>
            <img src={team?.logo} alt="team_logo"/>
          </StyledTeamLogoContainer>
          <StyledTeamInfoContainer>
            <Title2>
              {team?.name}
            </Title2>
            <p>Founded in {team?.founded}</p>
            <p>{team?.address}</p>
            <p>{team?.phone}</p>
            <p>{team?.email}</p>
            <a href={team?.website}>Website</a>
          </StyledTeamInfoContainer>
        </StyledTeamContainer>
      }


      <Searchbar noSeason noCompetition/>
      {loading ?
        <Loading/> :
        error ? <ErrorBanner error={error}/>
        :
          <>
            <MatchList matches={matches} count={count}/>
            <Button click={() => setCount(state => state + 30)}>Show more</Button>
          </>
      }
    </StyledTeamPage>
  );
};

export default TeamPage;