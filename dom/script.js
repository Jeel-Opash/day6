let newbtn=document.createElement("button");
newbtn.innerText ="click";
newbtn.style.color = "white";
newbtn.style.backgroundColor="blue";
document.querySelector("body").prepend(newbtn);

let para=document.querySelector("p");
para.classList.add("newclass");