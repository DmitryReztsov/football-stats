import React, {FC} from 'react';
import styled from "styled-components";
import Button from "../microcomponents/form/Button";
import Select from "../microcomponents/form/Select";
import InputSearch from "../microcomponents/form/InputSearch";
import InputDate from "../microcomponents/form/InputDate";

const StyledSearchbar = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  & > span {
    font-size: 1.2rem;
  }
`

const Searchbar: FC = () => {
  return (
    <StyledSearchbar>
      <span>From</span>
      <InputDate/>
      <span>To</span>
      <InputDate/>
      <Select>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
      </Select>
      <InputSearch/>
      <Button type="submit">Поиск</Button>
    </StyledSearchbar>
  );
};

export default Searchbar;