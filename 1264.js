const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(x=> x);


//대소문자가 섞여있으면 소문자나 대문자로 통일 toLowercase, toUppercase()
// \r은 배열로 접근하면 사라진다.
// str.replace(/str1|str2|str3/g, "");
// 배열.incudes(문자열) 가능 !!

let cnt;

for(let el of input){
    el = el.toLowerCase();
    cnt = el.length;
    cnt -= el.replace(/a|e|i|o|u/g,"").length;
    if(el === "#") break;
    console.log(cnt)
    cnt =0;  
}