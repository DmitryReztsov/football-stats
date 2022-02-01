import React, {FC} from 'react';
import styled from "styled-components";
import {ICompetition} from "../../../store/competition/types";
import {Link} from "react-router-dom";

const StyledCompetitionList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem;
`


const StyledCompetitionCard = styled(Link)`
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
    box-shadow: 0 2px 10px 3px #cacaca;
    transition: 0.2s all;
  }
  
  & div {
    margin: 0 auto;
    padding: 0.5rem;
    width: 10rem;
    height: 10rem;
  }
  & p {
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
  }
`

interface ICompetitionList {
  competitions: ICompetition []
}

const CompetitionList: FC<ICompetitionList> = ({competitions}) => {

  return (
    <StyledCompetitionList>
      {competitions.map((comp) => {
        return (
          <StyledCompetitionCard
            key={comp.id}
            to={`/competitions/${comp.id}`}
          >
            <div style={{background: `url(/assets/${comp.code}.png) center no-repeat`, backgroundSize: 'contain'}}/>
            <p>{comp.name}</p>
          </StyledCompetitionCard>
        )
      })}
    </StyledCompetitionList>
  );
};

export default CompetitionList;

function useNavigate() {
    throw new Error('Function not implemented.');
}
