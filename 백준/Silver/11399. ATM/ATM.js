let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n")

// 큰 숫자를 적게 더할수록 합이 작아지므로, 오름차순 정렬
let p = input[1].split(" ").map(x => +x).sort((a, b) => a - b)
let hour = 0
let answer = 0

for (const i of p) {
    hour += i
    answer += hour
}
console.log(answer)