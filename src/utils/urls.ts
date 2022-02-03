
export enum URLS {
  BASEURL = 'https://api.football-data.org/v2/',
  DEFAULT_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
  GET_COMPETITIONS = 'competitions/',
  GET_MATCHES = 'competitions/',
  GET_TEAMS = 'competitions/',
}

export const getUrl = (url: string): string => {
  return URLS.BASEURL + url
}