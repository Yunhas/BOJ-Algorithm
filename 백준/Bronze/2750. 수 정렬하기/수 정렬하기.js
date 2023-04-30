// 입력모듈 "fs" 불러오기
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// 입력 데이터 가공
let N = parseInt(input[0]);
let newInput = [];
for (let i = 1; i <= N; i++) newInput.push(parseInt(input[i]));

// 정렬 함수 구현(오름차 순)
function sort(arr) {
  let tmp = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] > arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
  return arr;
}

// Solution 함수
function Solution(newInput) {
  newInput = sort(newInput);
  console.log(newInput.join("\n"));
}

// Solution 함수 실행
Solution(newInput);