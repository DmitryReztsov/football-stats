import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {IMatch} from "../../../store/match/types";
import {formatDate, formatStage, formatStatus, sortByDate, sortBySubstr} from '../../../utils/common';
import {useSearchParams} from "react-router-dom";
import TeamLink from "../../microcomponents/links/TeamLink/TeamLink";

const StyledMatchList = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 1.2rem;
  margin-top: 1rem;
  
  thead {
    background-color: ${({theme}) => theme.colors.middle_green};
    
    @media ${({theme}) => theme.media.medium} {
      display: none;
    }
    
    th {
      color: ${({theme}) => theme.colors.white};
    }
  }
  
  tbody {
    td {
      border-bottom: 1px dotted ${({theme}) => theme.colors.middle_green};
      border-right: 1px solid ${({theme}) => theme.colors.white};
      border-left: 1px solid ${({theme}) => theme.colors.white};
      
      @media ${({theme}) => theme.media.medium} {
        border: none;
      }
    }
  }
  
  tfoot {
    td {
    }
  }
  
  tr {
    @media ${({theme}) => theme.media.medium} {
      display: flex;
      flex-direction: column;
      border-bottom: 1px dotted ${({theme}) => theme.colors.middle_green};
      padding: 1rem 0;
    }
    
  }
  
  td,th {
    line-height: 1.5;
    padding: 0.5rem;
    @media ${({theme}) => theme.media.medium} {
      line-height: 1.2;
      padding: 0.25rem;
    }
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

  if (dateFrom || dateTo) matches = sortByDate(matches, dateFrom, dateTo)
  if (substr) matches = sortBySubstr(matches, substr)

  useEffect(() => {

  }, [])

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
        .map((match, index) => {
          if (index <= count - 1) {
            return (
              <tr key={match.id}>
                <td>{formatDate(match.utcDate)}</td>
                <td>{formatStage(match.stage)}</td>
                <td>{formatStatus(match.status)}</td>
                <td>
                  <TeamLink
                    id={match.homeTeam.id}
                  >
                    {match.homeTeam.name}
                  </TeamLink>
                </td>
                <td>{match.score}</td>
                <td>
                  <TeamLink
                    id={match.awayTeam.id}
                  >
                    {match.awayTeam.name}
                  </TeamLink>
                </td>
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