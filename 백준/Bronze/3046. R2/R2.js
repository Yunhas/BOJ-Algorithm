const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let result = input[1] * 2 - input[0];
console.log(result)