import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {IMatch} from "../../../store/match/types";
import {formatDate, sortByDate, sortBySubstr} from '../../../utils/common';
import {useSearchParams} from "react-router-dom";
import {ITeam} from "../../../store/team/types";

const StyledMatchList = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 1.2rem;
  
  thead {
    background-color: ${({theme}) => theme.colors.middle_green};
    
    th {
      padding: 0.5rem;
      color: ${({theme}) => theme.colors.white};
      line-height: 1.5;
    }
  }
  
  tbody {
    td {
      padding: 0.5rem;
      line-height: 1.5;
      border-bottom: 1px dotted ${({theme}) => theme.colors.middle_green};
      border-right: 1px solid ${({theme}) => theme.colors.white};
      border-left: 1px solid ${({theme}) => theme.colors.white};
    }
  }
  
  tfoot {
    td {
      padding: 0.5rem;
      line-height: 1.5;
    }
  }
  
  tr {
  }
`

interface IMatchListProps {
  matches: IMatch [],
  count: number
}

const MatchList: FC<IMatchListProps> = ({matches, count}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const substr = searchParams.get('substr');
  const dateFrom = searchParams.get('dateFrom');
  const dateTo = searchParams.get('dateTo');

  if (dateFrom || dateTo) matches = sortByDate(matches,dateFrom,dateTo)
  if (substr) matches = sortBySubstr(matches,substr)

  useEffect(()=> {

  },[])

  return (
    <StyledMatchList>
      <thead>
        <tr>
          <th>Date</th>
          <th>Stage</th>
          <th>Status</th>
          <th>Home team</th>
          <th>Score</th>
          <th>Away team</th>
        </tr>
      </thead>
      <tbody>
      {matches
        .map((match,index) => {
        if (index <= count - 1) {
          return(
          <tr key={match.id}>
            <td>{formatDate(match.utcDate)}</td>
            <td>{match.stage}</td>
            <td>{match.status}</td>
            <td>{match.homeTeam}</td>
            <td>{match.score}</td>
            <td>{match.awayTeam}</td>
          </tr>)
        }
      })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={6}>{matches.length ? 'Matches: ' + matches.length : 'Matches not found, change filters'}</td>
        </tr>
      </tfoot>
    </StyledMatchList>
  );
};

export default MatchList;