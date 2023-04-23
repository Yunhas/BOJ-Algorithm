const n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim())
// 분해합 n : 자기 자신 + 각 자릿수 합
let result = 0

let num=1
while(num <= n){
    let i = num
    let sum = 0 // i마다 자릿수 합
    while(num > 0){
        sum += num % 10
        num = parseInt(num/10)
    }
    num = i
    num++

    if( i + sum === n ){
        result = i
        break
    }
}

console.log(result === 0 ? 0 : result)