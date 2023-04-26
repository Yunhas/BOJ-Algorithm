const [a,b,c,d,e,f]= require('fs').readFileSync(0).toString().trim().split(" ").map(BigInt)

// BigInt 타입은 일반 숫자 타입과 같이 사용할 수 없다
const y = ((c*d - f*a)/(b*d - e*a))
const x = ((c*e - f*b)/(a*e - d*b))
console.log(parseInt(x),parseInt(y))