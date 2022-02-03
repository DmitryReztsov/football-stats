export interface ISearchState {
  year: string
  substr: string,
  dateFrom: string,
  dateTo: string,
}
export enum SearchActionTypes  {
    SET_YEAR = 'SET_YEAR',
    SET_SUBSTR = 'SET_SUBSTR',
    SET_DATE_FROM = 'SET_DATE_FROM',
    SET_DATE_TO = 'SET_DATE_TO',
    CLEAR_SEARCH = 'CLEAR_SEARCH',
}


export interface YearSearchAction {
  type: SearchActionTypes.SET_YEAR,
  payload: string,
}

export interface SubstrSearchAction {
  type: SearchActionTypes.SET_SUBSTR,
  payload: string
}

export interface DateFromSearchAction {
  type: SearchActionTypes.SET_DATE_FROM,
  payload: string
}

export interface DateToSearchAction {
  type: SearchActionTypes.SET_DATE_TO,
  payload: string
}

export interface ClearSearchAction {
  type: SearchActionTypes.CLEAR_SEARCH
}



export type SearchAction = YearSearchAction | SubstrSearchAction | ClearSearchAction | DateFromSearchAction | DateToSearchAction;