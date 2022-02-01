import React, {FC} from 'react';
import styled from "styled-components";
import {IMatch} from "../../store/match/types";

const StyledMatchList = styled.table`
  width: 100%;
  text-align: center;
  
  td,th {
    border: 1px solid gray;
  }
`

interface IMatchListProps {
  matches: IMatch [],
}

const MatchList: FC<IMatchListProps> = ({matches}) => {

  return (
    <StyledMatchList>
      <thead>
      <tr>
        <th>utcDate</th>
        <th>stage</th>
        <th>status</th>
        <th>homeTeam</th>
        <th>score</th>
        <th>awayTeam</th>
      </tr>
      </thead>
      <tbody>
      {matches.map((match) => {
        return <tr key={match.id}>
            <td>{match.utcDate}</td>
            <td>{match.stage}</td>
            <td>{match.status}</td>
            <td>{match.homeTeam}</td>
            <td>{match.score}</td>
            <td>{match.awayTeam}</td>
          </tr>
      })}
      </tbody>
      <tfoot>
      <tr>
        <td>Matches: {matches.length}</td>
      </tr>
      </tfoot>
    </StyledMatchList>
  );
};

export default MatchList;