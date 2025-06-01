type Division = "w" | "d" | "h" | "s" | "ms";
type DivisionLong = "week" | "day" | "hour" | "second" | "millisecond";

// in essence, this is the whole library
const ONE_MS = 1;
const ONE_S = 1000 * ONE_MS;
const ONE_M = 60 * ONE_S;
const ONE_H = 60 * ONE_M;
const ONE_D = 24 * ONE_H;
const ONE_W = 7 * ONE_D;

type TD = {
  [key in (Division | DivisionLong)]: number;
}

interface TOpts {
  timeZone?: string;
  monthDefinition?: "current" | "year-average" | "30-day";
  yearDefinition?: "current" | "year-average" | "365-day";
}

function isLeapYear(year: number): boolean {
  // the gregorian calendar is WEIRD
  // years divisible by 4 are leap years,
  // except for years divisible by 100, unless they are also divisible by 400
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function t(value: number, opts?: TOpts): TD {
  return {
    w: value * ONE_W,
    week: value * ONE_W,
    d: value * ONE_D,
    day: value * ONE_D,
    h: value * ONE_H,
    hour: value * ONE_H,
    s: value * ONE_S,
    second: value * ONE_S,
    ms: value,
    millisecond: value,
  }
}


console.log(t(24).h + t(1).ms);
console.log(t(1).w + t(1).d + t(1).h + t(1).s + t(1).ms);
