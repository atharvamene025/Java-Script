// function myFunction(){

//     console.log("Welcome To Apna College");
//     console.log("Welcome To Apna College 2");
// }

// myFunction();

// function myFunction(msg, no){

//     // parameters
//     console.log(msg, no);
// }

// myFunction("atharva", 100) //argument

// function additon(x,y) {
// sum=x+y;
// return sum;
// }

// let value=additon(3,4);
// console.log(value);

// Arrow Function

// const arrowSum=(a, b)=>{
//     return(a+b);
// }

// console.log(arrowSum(10,3));

// function countVovels(str) {
//   let count = 0;
//   for (const char of str) {
//     console.log(char);

//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
// return count;
// }

const Vow = (str) => {
  let count = 0;
  for (const char of str) {
    console.log(char);

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
