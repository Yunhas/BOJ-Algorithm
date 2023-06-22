function solution(N, stages) {
    let failRate = []
    let answer=[]

    for(let i=0; i < N; i++){
        let len = stages.length
        stages = stages.filter(s => s !== i+1) //해당 스테이지를 제외한 배열
        failRate.push([i+1, (len - stages.length) / len])
    }
    failRate.sort((a,b) => b[1] - a[1]) //처음부터 2차원 배열로 push하면 바로 정렬
  
    for(const fail of failRate){
        answer.push(fail[0])
    }
    return answer
}