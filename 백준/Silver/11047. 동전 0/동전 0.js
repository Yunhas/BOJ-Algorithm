let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n")
let k = input[0].split(" ")[1]
let n = input.map(x => +x).filter( x => x <= k)
let answer = 0

for(let i=n.length-1; i>=0; i--){
    answer += parseInt(k / n[i])
    k = k % n[i]
}
console.log(answer)