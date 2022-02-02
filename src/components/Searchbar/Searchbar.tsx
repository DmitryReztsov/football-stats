import React, {FC} from 'react';
import styled from "styled-components";

const StyledSearchbar = styled.form`
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
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
      </select>
      <input type="search"/>
      <button type="submit">Поиск</button>
    </StyledSearchbar>
  );
};

export default Searchbar;