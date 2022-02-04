export enum URLS {
  BASE_URL = 'https://api.football-data.org/v2',
  DEFAULT_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
  COMPETITIONS = '/competitions',
  MATCHES = '/matches',
  TEAMS = '/teams',
}

export const getUrlForMatches = (type: string, id: string): string => {
  switch (type) {
    case 'comp': {
      return URLS.COMPETITIONS + '/' + id + URLS.MATCHES
    }
    case 'team': {
      return URLS.TEAMS + '/' + id + URLS.MATCHES
    }
    default:
      return ''
  }
}

export const getUrl = (url: string): string => {
  return URLS.BASE_URL + url
}