let bicycle = 11999;
let ball = 1599;
let shorts = 699;
let socks = 169;

let bonusStep = 1000;
let bonusSize = 100;

let bonus = Math.floor((bicycle + ball + shorts + socks)/bonusStep)*bonusSize; // Mf - rounding down

console.log("Размер бонуса: " + bonus);
