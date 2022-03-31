// Q1=> Write one example explaining 
//how you can write a callback function ?

// A callback function is a function passed into
//  another function as an argument, 
//  which is then invoked inside the
//  outer function to complete some kind of 
//  routine or action.


// console.log("Before...");
// setTimeout(function() {
//     console.log("It took 500ms to get here!");
//     }, 500);
// console.log("After...");

//------------------------------------------------

//"Ques 2  Write callback function to print numbers
// from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 


// function numbers(num,delay) {
//     setTimeout(()=>{
//         console.log(num);
//     },delay)
// }
// numbers('1',1000)
// numbers('2',2000)
// numbers('3',3000)
// numbers('4',4000)
// numbers('5',5000)
// numbers('6',6000)
// numbers('7',7000)

//----------------------------------------------------------------


//ques3   "Write promise function to print numbers
// from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 


// function number(num) {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(num);
//             res('promise resolved')
//         },1000)
//     })
// }
// number('1').then((data)=>{
//     console.log(data)
//     number('2').then((data)=>{
//         console.log(data)
//         number('3').then((data)=>{
//             console.log(data)
//             number('4').then((data)=>{
//                 console.log(data)
//                 number('5').then((data)=>{
//                     console.log(data)
                    
//                 })
//             })
//         })
//     })
// })

// // above data can br replace by promise chain that is below


// number('1').then(()=>  number('2'))
// .then(()=> number('3'))
// .then(()=> number('4'))
// .then(()=> number('5'))
// .then(()=> number('6'))
// .then(()=> number('7'))


//--------------------------------------------------------

//Ques->Create a promise function accepting a
 //argument, if yes is passed to the function then it should go to resolved 
 //state and print Promise Resolved, and if nothing is passed then it should go to reject state and
// catch the error and print Promise Rejected 

// function parameter(num){

// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       if(num%2==0){
//         resolve('this is a even')
//       }  
//       else{
//           reject('this is not even')
//       }
//     },1000)
// })
// }

// parameter(24).then((data)=>{console.log(data)}).catch((data)=>{console.log(data)})
// parameter(25).then((data)=>{console.log(data)}).catch((data)=>{console.log(data)})


//--------------------------------------------------------


//Ques -  Create examples to explain promises function

// let pr= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('the problem is resolved')
//         reject('the problem is rejected')
//     }, 1000);
// })
// pr.then((data)=>{
//     console.log(data);
// })
// pr.catch((result)=>{
//     console.log(result);
// })
// pr.finally((result)=>{
//     console.log(result);
// })

//---------------------------------------------

//ques->  Create examples to explain async await function


// function printLetter(letter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(letter)
//         }, 1000)
//     })
// }

// async function prinAlphabets() {
//     let ans1 = await printLetter('A')
//     console.log(ans1)
 
//     let ans2 = await printLetter('B')
//     console.log(ans2)
//   let ans3 = await printLetter('C')
//     console.log(ans3)
// }
// prinAlphabets()




// // inherited and property


// //q1 Create 2 objects - parent and child.
// // Attach methods to parent and use those methods 
// //in child object using parents prototype

//  let parent={
//     cousre:"fullstack",
//     mode:"online"
// }
// let res;
// let child={
//     name:"akarsh gupta",
//     lives:'kanpur'
// }
// child.__proto__=parent;
// console.log(child.mode);
// let keys=Object.keys(child)
// console.log(keys);
// console.log(child.hasOwnProperty('mode'));
// console.log(child.hasOwnProperty('name'));


// //  Add a method to calculate sum of all elements
// // in Array in array's protype, use that
// // method to calculate sum for multiple arrays





// // q4  Write a JavaScript function to retrieve 
// //all the names of object's own and inherited properties.

// let obj1={
//     music:'listen',
//     plays:function (){
//         console.log("i play vollytball")
//     }}
   

// let obj2={
//     names:'ayush',
//     lives:'kanpur'
// }
// let obj3={
//     names:'aryan',
//     lives:'lucknow'
// }

// obj2.__proto__=obj1

// for(let key in obj2){
//     if(obj2.hasOwnProperty(key)){
//         console.log(key,"own property");
//     }
//     else{
//         console.log(key,"inherited property");
//     }
// }
//
