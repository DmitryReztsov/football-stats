import React, {FC} from 'react';
import styled from "styled-components";

const StyledSearchbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


const Searchbar: FC = () => {
  return (
    <StyledSearchbar>
      <span>From</span>
      <input type="date"/>
      <span>To</span>
      <input type="date"/>
      <select>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
      </select>
      <input type="search"/>
      <button type="submit">Поиск</button>
    </StyledSearchbar>
  );
};

export default Searchbar;