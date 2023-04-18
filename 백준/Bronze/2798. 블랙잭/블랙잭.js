let input= require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")
const [n, m] = input.shift().split(" ").map(Number)
input = input.shift().split(" ").map(Number).sort((a,b)=> a-b)

let result=0
for(let i=0; i<input.length-2; i++){
    for(let j=i+1; j < input.length-1; j++){
        for(let k=j+1; k < input.length; k++){
            let sum = input[i] + input[j] + input[k]
            if(sum > result && sum <= m){
                result = sum
            }
            if(result === m){
                break
            }
        }
    }
}
console.log(result)