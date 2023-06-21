function solution(answers) {
    
    let first = [1, 2, 3, 4, 5] //5개마다 반복 %5
    let second = [2, 1, 2, 3, 2, 4, 2, 5] //8개마다 반복 %8
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] //10개마다 반복 %10
    let cntArr = [0, 0, 0];
    
    for(let i=0; i < answers.length; i++){
        
        if(first[i%5] === answers[i]){
            cntArr[0]++
        }
        if(second[i%8] === answers[i]){
            cntArr[1]++ 
        }
        if(third[i%10] === answers[i]){
            cntArr[2]++
        }
    }
    
    const max = Math.max(...cntArr)
    let answer=[]
    
    for(const idx in cntArr){
        if(cntArr[idx] === max){
            answer.push(Number(idx)+1)
        }
    }   
    return answer
}