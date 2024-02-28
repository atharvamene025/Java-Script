// setTimeout(() => {
//     console.log("Executed after 2000 ms")
//     console.log("Executed after 2000 ms")
//     console.log("Executed after 2000 ms")


// }, 5000);


// const Myinertval=setInterval(()=>{ console.log("Executing after every given time interval")},2000)


// function Stop(){

//         clearInterval(Myinertval)
// }

// setTimeout(setInterval, 5000)
 

console.log("1")
setTimeout(()=> { console.log("2")}, 3000)
console.log("3")
setTimeout(()=> { console.log("4")}, 5000)
console.log("6")
setTimeout(()=> { console.log("7")}, 1000)
setTimeout(()=>{console.log("8")}, 1200)