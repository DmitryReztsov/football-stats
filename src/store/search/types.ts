export interface ISearchState {
  year: string
  substr: string,
}
export enum SearchActionTypes  {
    SET_YEAR = 'SET_YEAR',
    SET_SUBSTR = 'SET_SUBSTR',
}


export interface YearSearchAction {
  type: SearchActionTypes.SET_YEAR,
  payload: string,
}

export interface SubstrSearchAction {
  type: SearchActionTypes.SET_SUBSTR,
  payload: string
}



export type SearchAction = YearSearchAction | SubstrSearchAction