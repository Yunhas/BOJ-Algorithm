function solution(array, commands) {
    let answer = [];
    array = [0, ...array]
       
    for(const [i, j, k] of commands){
        answer.push(array.slice(i,j+1).sort((a,b) => a-b)[k-1])
    }
    return answer;
}