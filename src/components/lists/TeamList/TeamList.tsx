import React, {FC} from 'react';
import styled from "styled-components";
import {Link, LinkProps} from "react-router-dom";
import {ITeam} from "../../../store/team/types";

interface ITeamList {
  teams: ITeam []
}

const StyledTeamList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 2rem 0;
  @media ${({theme}) => theme.media.small} {
    margin: 1rem 0;
  }
  
  p {
    width: 100%;
    text-align: center;
  }
  
`

interface ITeamCardProps extends LinkProps {
  logo: string,
}

const StyledTeamCard = styled(Link)<ITeamCardProps>`
  flex: 1 0 20%;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 3px 1px #cacaca;
  transition: 0.5s all;
  color: ${({theme}) => theme.colors.black};
  
  @media ${({theme}) => theme.media.small} {
      flex: 1 0 40%;
  }
  
  &:hover {
    box-shadow: 0 6px 10px 3px #cacaca;
    transition: 0.2s all;
  }
  
  & div {
    margin: 0 auto;
    padding: 5rem;
    width: 80%;
    height: 80%;
    background:${({logo}) => `url('${logo}') center no-repeat`};
    background-size: contain;
    
    @media ${({theme}) => theme.media.small} {
      padding: 4rem;
    }
  }
  & p {
    text-align: center;
    padding: 1rem;
    font-size: 1rem;
    
    @media ${({theme}) => theme.media.small} {
      font-size: 1rem;
    }
  }
`

const TeamList: FC<ITeamList> = ({teams}) => (
    <StyledTeamList>
      {teams.length
        ? <>
            {teams.map((team) => (
                  <StyledTeamCard
                    key={team.id}
                    to={`/teams/${team.id}`}
                    logo={team.logo!}
                  >
                    <div/>
                    <p>{team.name}</p>
                  </StyledTeamCard>
            ))}
          </>
        : <p>Teams aren`t found, change filters</p>
      }

    </StyledTeamList>
  );

export default TeamList;