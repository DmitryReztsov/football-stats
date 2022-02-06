import React, {FC} from 'react';
import styled from "styled-components";
import {Link, LinkProps} from "react-router-dom";
import {ICompetition} from "../../../store/competition/types";
import {transition} from "../../../styles/fragments";

interface ICompetitionList {
  competitions: ICompetition []
}

const StyledCompetitionList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 2rem 0;
  @media ${({theme}) => theme.media.small} {
    margin: 1rem 0;
  }
`

interface ICompetitionCardProps extends LinkProps {
  code: string,
}

const StyledCompetitionCard = styled(Link)<ICompetitionCardProps>`
  flex: 1 0 23%;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 3px 1px #cacaca;
  ${transition};
  color: ${({theme}) => theme.colors.black};
  
  @media ${({theme}) => theme.media.medium} {
      flex: 1 0 40%;
  }
  
  
  &:hover {
    box-shadow: 0 6px 10px 3px #cacaca;
    ${transition};
  }
  
  & div {
    margin: 0 auto;
    padding: 5rem;
    width: 80%;
    height: 80%;
    background:${({code}) => `url('/assets/${code}.png') center no-repeat`};
    background-size: contain;
    
    @media ${({theme}) => theme.media.small} {
      padding: 4rem;
    }
  }
  & p {
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
    
    @media ${({theme}) => theme.media.small} {
      font-size: 1rem;
    }
  }
`

const CompetitionList: FC<ICompetitionList> = ({competitions}) => (
    <StyledCompetitionList>
      {/* Здесь я использовал передачу стейта при переходе по ссылке для уменьшения кол-ва запросов*/}
      {competitions.map((comp) => (
          <StyledCompetitionCard
            key={comp.id}
            to={`/competitions/${comp.id}`}
            state={{name: comp.name}}
            code={comp.code}
          >
            <div/>
            <p>{comp.name}</p>
          </StyledCompetitionCard>
        ))}
    </StyledCompetitionList>
  );

export default CompetitionList;
