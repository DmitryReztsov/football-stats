import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import Button from "../microcomponents/form/Button";
import Select from "../microcomponents/form/Select";
import InputSearch from "../microcomponents/form/InputSearch";
import InputDate from "../microcomponents/form/InputDate";
import {useDispatch} from "react-redux";
import {setSubstr, setSeason, setDateFrom, setDateTo, setCompetition} from "../../store/search/actions";
import {useTypedSelector} from "../../store/selectors";
import {useSearchParams} from 'react-router-dom';
import {fetchCompetition} from "../../store/competition/actions";

const StyledSearchbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  
  @media ${({theme}) => theme.media.large} {
    flex-direction: column;
    row-gap: 0.5rem;
  }
  
  & > div {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    
    & > input {
      flex: 1 0 auto;
    }
  }
    
  & > input, div, select, button {
    @media ${({theme}) => theme.media.large} {
      width: 80%;
    }
    @media ${({theme}) => theme.media.small} {
      width: 100%;
    }
  }
  
  & > span {
    font-size: 1.2rem;
  }
`

interface ISearchBarProps {
  noDate?: boolean,
  noCompetition?: boolean,
  noSeason?: boolean,
}

const Searchbar: FC<ISearchBarProps> = ({noDate,noCompetition,noSeason}) => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  const {season, substr, dateFrom, dateTo, competition} = useTypedSelector(state => state.search)
  const {competitions} = useTypedSelector(state => state.competition)

  const setSeasonHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setSeason(e.currentTarget.value));
    searchParams.set('season', e.currentTarget.value)
    setSearchParams(searchParams);
  }

  const setSubstrHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

  const setCompetitionHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setCompetition(e.currentTarget.value));
    searchParams.set('competition', e.currentTarget.value)
    setSearchParams(searchParams);
  }

  const submitHandler = (): void => {
    searchParams.set('substr', substr)
    setSearchParams(searchParams);
  }

  const DATE_ARRAY = ['2022','2021','2020','2019','2018','2017','2016','2015'];

  useEffect(() => {
    dispatch(fetchCompetition())
    if (searchParams.has('season')) dispatch(setSeason(searchParams.get('season')!));
    if (searchParams.has('substr')) dispatch(setSubstr(searchParams.get('substr')!));
    if (searchParams.has('dateFrom')) dispatch(setDateFrom(searchParams.get('dateFrom')!));
    if (searchParams.has('dateTo')) dispatch(setDateTo(searchParams.get('dateTo')!));
    if (searchParams.has('competition')) dispatch(setCompetition(searchParams.get('competition')!));
  }, [])

  return (
    <StyledSearchbar>
      {noDate ?
        null
        : <>
          <div>
            <span>From</span>
            <InputDate value={dateFrom} setDate={setDateFromHandler}/>
          </div>
          <div>
            <span>To</span>
            <InputDate value={dateTo} setDate={setDateToHandler}/>
          </div>
        </>
      }
      {noCompetition ?
        null
        :
        <Select value={competition} change={setCompetitionHandler}>
          {competitions.map((comp) => {
            return <option key={comp.id} value={comp.id}>{comp.name}</option>
          })}
        </Select>
      }
      {noSeason ?
        null
        :
        <Select value={season} change={setSeasonHandler}>
          <option value="">All seasons</option>
          {DATE_ARRAY.map((date) => {
            return <option key={date} value={date}>{date}</option>
          })}
        </Select>
      }
      <InputSearch placeholder={'Искать команду'} value={substr} setSubstr={setSubstrHandler}/>
      <Button click={submitHandler}>Search</Button>
    </StyledSearchbar>
  );
};

export default Searchbar;