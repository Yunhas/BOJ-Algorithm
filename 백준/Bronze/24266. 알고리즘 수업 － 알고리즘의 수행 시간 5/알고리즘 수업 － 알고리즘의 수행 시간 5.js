const input= require('fs').readFileSync('/dev/stdin').toString().trim()
const num = BigInt(input) //큰 정수값 처리
//루프 3번 반복
console.log((num*num*num).toString())
console.log(3)