import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import Button from "../microcomponents/form/Button";
import Select from "../microcomponents/form/Select";
import InputSearch from "../microcomponents/form/InputSearch";
import InputDate from "../microcomponents/form/InputDate";
import {useDispatch} from "react-redux";
import {setSubstr, setSeason, setDateFrom, setDateTo} from "../../store/search/actions";
import {useTypedSelector} from "../../store/selectors";
import { useSearchParams } from 'react-router-dom';

const StyledSearchbar = styled.div`
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
  const {season, substr, dateFrom, dateTo} = useTypedSelector(state => state.search)

  const setSeasonHandler = (e: React.ChangeEvent<HTMLSelectElement>) : void => {
    dispatch(setSeason(e.currentTarget.value));
    searchParams.set('season', e.currentTarget.value)
    setSearchParams(searchParams);
  }

  const setSubstrHandler = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    dispatch(setSubstr(e.currentTarget.value));
  }

  const setDateFromHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setDateFrom(e.currentTarget.value));
    searchParams.set('dateFrom', e.currentTarget.value)
    setSearchParams(searchParams);
  }

  const setDateToHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setDateTo(e.currentTarget.value));
    searchParams.set('dateTo', e.currentTarget.value)
    setSearchParams(searchParams);
  }

  const submitHandler = () : void => {
    searchParams.set('substr', substr)
    setSearchParams(searchParams);
  }

  useEffect(()=> {
    if (searchParams.has('season')) dispatch(setSeason(searchParams.get('season')!));
    if (searchParams.has('substr')) dispatch(setSubstr(searchParams.get('substr')!));
    if (searchParams.has('dateFrom')) dispatch(setDateFrom(searchParams.get('dateFrom')!));
    if (searchParams.has('dateTo')) dispatch(setDateTo(searchParams.get('dateTo')!));
  },[])

  return (
    <StyledSearchbar>
      <span>From</span>
      <InputDate value={dateFrom} setDate={setDateFromHandler}/>
      <span>To</span>
      <InputDate value={dateTo} setDate={setDateToHandler}/>
      <Select value={season} setSeason={setSeasonHandler}>
        <option value="">All time</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
      </Select>
      <InputSearch placeholder={'Искать команду'} value={substr} setSubstr={setSubstrHandler}/>
      <Button click={submitHandler}>Поиск</Button>
    </StyledSearchbar>
  );
};

export default Searchbar;