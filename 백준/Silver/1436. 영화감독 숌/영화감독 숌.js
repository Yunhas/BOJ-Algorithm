let n = parseInt(require('fs').readFileSync('/dev/stdin').toString())
let number = 665

while(n>0){
    number++
    if(number.toString().includes("666")){
        n--
    }
}
console.log(number)