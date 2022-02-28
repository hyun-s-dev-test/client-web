import { day } from "../constant/calcDay";

export const getDay = (year, month) => {
  const d = day;
  const y = Number(year);
  const m = Number(month);
  const isLeapYear = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? true : false;
  console.log("isLeapYear", isLeapYear, typeof isLeapYear);

  return isLeapYear === true ? { day: d[m] + 1 } : { day: d[m] };
};
