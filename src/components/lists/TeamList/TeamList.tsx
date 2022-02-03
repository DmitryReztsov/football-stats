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
  margin: 2rem;
`

interface ITeamCardProps extends LinkProps {
  logo: string,
}

const StyledTeamCard = styled(Link)<ITeamCardProps>`
  flex: 0 0 18%;
  padding: 3px;
  margin: 3px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 3px 1px #cacaca;
  transition: 0.5s all;
  color: ${({theme}) => theme.colors.black};
  
  
  &:hover {
    box-shadow: 0 6px 10px 3px #cacaca;
    transition: 0.2s all;
  }
  
  & div {
    margin: 0 auto;
    padding: 0.5rem;
    width: 4rem;
    height: 4rem;
    background:${({logo}) => `url('${logo}') center no-repeat`};
    background-size: contain;
  }
  & p {
    text-align: center;
    padding: 1rem;
    font-size: 1rem;
  }
`

const TeamList: FC<ITeamList> = ({teams}) => {

  return (
    <StyledTeamList>
      {teams.map((team) => {
        return (
          <StyledTeamCard
            key={team.id}
            to={`/teams/${team.id}/matches`}
            state={{name: team.name}}
            logo={team.logo}
          >
            <div/>
            <p>{team.name}</p>
          </StyledTeamCard>
        )
      })}
    </StyledTeamList>
  );
};

export default TeamList;