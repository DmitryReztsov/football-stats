import {Dates} from "../interfaces/dates";

export function formatDate(date: string) : string {
  const time = new Date(Date.parse(date));
  const day: number = time.getDate()
  const month: number = time.getMonth()
  const year: number = time.getFullYear()
  return day + 'th' + ' ' + Dates[month] + ' ' + year
}