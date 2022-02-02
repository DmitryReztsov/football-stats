import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import Button from "../microcomponents/form/Button";
import Select from "../microcomponents/form/Select";
import InputSearch from "../microcomponents/form/InputSearch";
import InputDate from "../microcomponents/form/InputDate";
import {useDispatch} from "react-redux";
import {setYear} from "../../store/search/actions";
import {useTypedSelector} from "../../store/selectors";
import { useSearchParams } from 'react-router-dom';

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
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  const {year} = useTypedSelector(state => state.search)

  const setYearHandler = (e: React.ChangeEvent<HTMLSelectElement>) : void => {
    dispatch(setYear(e.currentTarget.value));
    setSearchParams({season:e.currentTarget.value})
  }

  useEffect(()=> {
    if (searchParams.has(year)) dispatch(setYear(searchParams.get(year)!));
  },[])

  return (
    <StyledSearchbar>
      <span>From</span>
      <InputDate/>
      <span>To</span>
      <InputDate/>
      <Select value={year} setYear={setYearHandler}>
        <option value="">Choose season</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
      </Select>
      <InputSearch placeholder={'Искать команду'}/>
      <Button type="submit">Поиск</Button>
    </StyledSearchbar>
  );
};

export default Searchbar;