import React, {FC} from 'react';
import styled from "styled-components";

const StyledMatchList = styled.table`
  width: 100%;
  text-align: center;
  
  td,th {
    border: 1px solid gray;
  }
`

const MatchList: FC = () => {
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
        <tr>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Matches: x</td>
        </tr>
      </tfoot>
    </StyledMatchList>
  );
};

export default MatchList;