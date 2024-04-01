let multiply = (n1,n2)=>n1*n2;
console.log(multiply(7,9));

function hello(){
    console.log("Hello world");
}
function runTwice(hello){
    hello();
    hello();
}
runTwice(hello)
let button = document.querySelector("button");
button.addEventListener('click',grow)
function grow(){
    setTimeout(()=>{button.style.height="200px",
    button.style.width="200px"},2000);
}
let s=0;
let arr=[1,2,3,4,5,6,7,8,9];
arr.forEach(element =>
    s=s+element);
console.log(s);
function ARRAY(){
    let arr2=arr.map( n=>n*n);
    console.log(arr2);
}
ARRAY();