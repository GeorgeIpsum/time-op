type Division = "w" | "d" | "h" | "s" | "ms";

const ONE_MS = 1;
const ONE_S = 1000 * ONE_MS;
const ONE_M = 60 * ONE_S;
const ONE_H = 60 * ONE_M;
const ONE_D = 24 * ONE_H;
const ONE_W = 7 * ONE_D;

type TD = {
  [key in Division]: number;
}

function t(value: number): TD {
  return {
    w: value * ONE_W,
    d: value * ONE_D,
    h: value * ONE_H,
    s: value * ONE_S,
    ms: value
  }
}


// 24ms + 1h
// This will return 360024ms (1 hour + 24 milliseconds)
console.log(t(24).h + t(1).ms);
