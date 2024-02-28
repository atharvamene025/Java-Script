// function Additon(value1,value2){

//     var count=0;
//         for(var i=value1;i<=value2;i++){
//             if(i%2==1){

//                 count+=i
//             }
//         }
//         console.log(count)
// }

// Additon(2,27)

// Q find pair of additon of two number with givrn target

// var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
// var target = 6

// function FindTargetValues(array,target){

//     for(i=0;i<=array.length-1;i++){

//             for(j=array[i];j<array.length;j++){

//                 if(array[i]+array[j]==target){

//                     console.log(array[i],array[j])
//                 }
//             }


//         }
//     }


// FindTargetValues(array,target )



var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
var target = 12


 function Targetvalues(array,target){

for(i=0;i<=array.length;i++)

    for(j=i+1;j<array.length;j++){

        if(array[i]+array[j]==target){

            console.log(array[i],array[j])
        }


    }

 }
 console.log(Targetvalues(array,target))