var array = [1, 2, 1, 3, 4, 5, 2, 3, 5, 1];
var MyAnswer = {}
var prime={}
for (var i = 0; i < array.length; i++) {
    if (MyAnswer[array[i]] === undefined) {
        MyAnswer[array[i]] = 1

        if(MyAnswer[array[i]]%2==0 && MyAnswer[array[i]%3==0]){
        
            return prime
        }
    }
    
    else {
        MyAnswer[array[i]]++
    }
}

console.log(MyAnswer)
console.log(prime)
