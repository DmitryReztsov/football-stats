export const BASEURL = 'https://api.football-data.org/v2/';

export const getCompetitionsUrl = (base : string) : string => {
    return base + 'competitions/'
}