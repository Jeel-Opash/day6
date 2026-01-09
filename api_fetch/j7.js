//fetch Api
// let promise=-fetch(URL,[option])
const URL="https://cat-fact.herokuapp.com/";
const factpara=document.getElementById("#fact");
const btn=document.querySelector("#btn");
// let getdata=async()=>{
//     console.log("fetching a data...");
//     let res=await fetch(URL);
//     console.log(res);
//     let data =await res.json();
//     factpara.innerText = data[0].text;
// };

function getdata(){
    fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        factpara.innerText = data[2].text;
    })
}
btn.addEventListener("click",getdata);


//req and res
//AJAX ,JSON,json()