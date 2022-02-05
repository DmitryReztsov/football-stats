import {Dates} from "../interfaces/dates";
import {IMatch} from "../store/match/types";
import {ITeam} from "../store/team/types";
import {STAGES} from "../interfaces/match";

export function formatDate(date: string): string {
  const time = new Date(Date.parse(date));
  const day: number = time.getDate()
  const month: number = time.getMonth()
  const year: number = time.getFullYear()
  return day + 'th' + ' ' + Dates[month] + ' ' + year
}

export function formatStage(stage: string): string {
  return STAGES.get(stage)!;
}

export function getScore<T>(homeGoal: T, awayGoal: T): string {
  if (typeof homeGoal === "number") {
    return homeGoal + ' : ' + awayGoal
  } else {
    return 'No data'
  }
}

export function sortByDate(matches: IMatch [], from: string | null, to: string | null): IMatch [] {
  const fromParsed: number = Date.parse(from || '2020-01-01');
  const toParsed: number = Date.parse(to as string) || Date.now();
  return matches.filter((match) => Date.parse(match.utcDate) >= fromParsed && Date.parse(match.utcDate) <= toParsed)
}

export function sortBySubstr(matches: IMatch [], substr: string): IMatch [] {
  return matches.filter((match) =>
    match.homeTeam.name.toLowerCase().includes(substr.toLowerCase()) || match.awayTeam.name.toLowerCase().includes(substr.toLowerCase()))
}

export function sortTeams (teams: ITeam [], substr: string) : ITeam [] {
  return teams.filter((team) => team.name.toLowerCase().includes(substr.toLowerCase()))
}
