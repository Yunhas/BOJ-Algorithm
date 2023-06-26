function solution(s){
    var answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    let cnt=0;
    const str = s.toLowerCase(); //원본 s가 바뀌진 않음
    console.log(str);
    
    for(let n of str){
        if(n === 'p'){
            cnt +=1;
        }else if(n === "y"){
            cnt -=1;
        }
    }
    

    return cnt === 0 ? true : false;
}