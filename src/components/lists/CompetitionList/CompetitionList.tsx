import React, {FC} from 'react';
import styled from "styled-components";
import {ICompetition} from "../../../store/competition/types";
import {Link, LinkProps} from "react-router-dom";

interface ICompetitionList {
  competitions: ICompetition []
}

const StyledCompetitionList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem;
`

interface ICompetitionCardProps extends LinkProps {
  code: string,
}

const StyledCompetitionCard = styled(Link)<ICompetitionCardProps>`
  flex: 0 1 22%;
  padding: 5px;
  margin: 5px;
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
    width: 10rem;
    height: 10rem;
    background:${({code}) => `url('/assets/${code}.png') center no-repeat`};
    background-size: contain;
  }
  & p {
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
  }
`

const CompetitionList: FC<ICompetitionList> = ({competitions}) => {

  return (
    <StyledCompetitionList>
      {competitions.map((comp) => {
        return (
          <StyledCompetitionCard
            key={comp.id}
            to={`/competitions/${comp.id}`}
            state={{name: comp.name, defaultParams:'season=2021'}}
            code={comp.code}
          >
            <div/>
            <p>{comp.name}</p>
          </StyledCompetitionCard>
        )
      })}
    </StyledCompetitionList>
  );
};

export default CompetitionList;
