let num = require("fs").readFileSync("dev/stdin").toString().trim().split("-")

for (const i in num) {
    if (num[i].includes("+")) {
        num[i] = num[i].split("+").map(x => Number(x)).reduce((a, c) => a + c)
    } else {
        num[i] = Number(num[i])
    }
}
console.log(num.reduce((a, c) => a - c))