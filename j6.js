//Promise  :   .then(),.catch
// function asyncFun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("print");
//             resolve("success");
//         }, 3000);
//     });
// }
// function asyncFun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("print");
//             resolve("success");
//         }, 3000);
//     });
// }
// let p1=asyncFun1();
// p1.then((res)=>{
//     console.log(res);
//     let p2=asyncFun2();
//     p2.then((res)=>{
//         console.log(res);
//     })
// });



//Async-Await
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("run the api");
//             resolve(200);
//         },3000);
//     });
// }

// async function mainapi(){
//     await api(1);
//     await api(2);
//     await api(3);

// }

// mainapi();




// try & catch
// try {
//   let res = 10 / 2;
//   if (!isFinite(res)) {
//     throw new Error("cannot");
//   }
// } catch (error) {
//   console.error("error :", error.message);
// } finally {
//   console.log("execution");
// }


let n = "heell jeel";

for (let i = 0; i < n.length; i++) {
    if (i === 1) {
        console.log(n[i].toUpperCase());
    }

    if (n[i] === " " && n[i + 1]) {
        console.log(n[i + 1].toUpperCase());
    }
}