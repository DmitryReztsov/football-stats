
export enum URLS {
  BASEURL = 'https://api.football-data.org/v2/',
  GET_COMPETITIONS = 'competitions/',
  GET_MATCHES = 'competitions/',
}

export const getUrl = (url: string): string => {
  return URLS.BASEURL + url
}