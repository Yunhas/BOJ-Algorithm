function solution(s) {
    
    let numToWord = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
       	"four" :4,
        "five" : 5,
      	"six" : 6,
     	"seven" : 7,
     	"eight" :8, 
        "nine" : 9,
    }
    
    for(const word in numToWord){
        if(s.includes(word)){
            s = s.replaceAll(word,numToWord[word])
        }
    }
    return Number(s);
}