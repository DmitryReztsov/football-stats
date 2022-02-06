export enum URLS {
  BASE_URL = 'https://api.football-data.org/v2',
  DEFAULT_LOGO = '/error/no_image_available.svg.png',
  COMPETITIONS = '/competitions',
  MATCHES = '/matches',
  TEAMS = '/teams',
}

export const getUrlForMatches = (type: string, id?: string): string => {
  switch (type) {
    case 'comp': {
      return `${URLS.COMPETITIONS}/${id}${URLS.MATCHES}`
    }
    case 'team': {
      return `${URLS.TEAMS}/${id}${URLS.MATCHES}`
    }
    case 'today': {
      return URLS.MATCHES
    }
    default:
      return ''
  }
}

export const getUrl = (url: string): string => URLS.BASE_URL + url