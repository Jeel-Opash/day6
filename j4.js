//callback fetch data in timeout 
// function sum(a,b,callback){
//     setTimeout(()=>{
//         const result=a+b;
//         callback(result);
//     },2000);
// }
// sum(2,3,(finalresult)=>{
//     console.log(finalresult);
// })


//callback hell (nested callback )
// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 completed");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 completed");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 completed");
//         callback();
//     }, 1000);
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             setTimeout(() => {
//                console.log("All steps completed"); 
//             }, 1000);
            
//         });
//     });
// });

function divide(a,b,callback){
    if(b===0){
        callback(new Error("Cannot divide by zero"),null);
    }else{
        callback(null,a/b);
    }
}

function result(error,result){
    if(error){
        console.log("Error:",error.message);
    }else{
        console.log("Result",result);
    }
}

divide(10,2,result);
divide(10,0,result);


//asyn/await
