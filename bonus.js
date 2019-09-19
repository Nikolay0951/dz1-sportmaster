const bicycle = 11999;
const ball = 1590;
const shorts = 699;
const socks = 16769;

const bonusStep = 1000;
const bonusSize = 100;

const bonus = Math.floor((bicycle + ball + shorts + socks) / bonusStep) * bonusSize; // Mf - rounding down

console.log("Размер бонуса: " + bonus);