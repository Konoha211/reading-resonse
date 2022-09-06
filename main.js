document.addEventListener('DOMContentLoaded', function(){
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let a = document.querySelector("#one").value;
    let blank1= document.querySelector("#blank1");
    blank1.innerHTML = a;
})
})