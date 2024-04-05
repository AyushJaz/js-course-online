let addToBag=document.getElementsByClassName("add-to-bag");
let userSection=document.getElementById("after");
let bagItem=0;
if(bagItem===0){
    userSection.style.display="none";
}
for(let i=0;i<addToBag.length;i++)
{
    addToBag[i].addEventListener("click",()=>{
        bagItem++;
        userSection.style.display="block";
        userSection.innerText=bagItem;
        console.log(bagItem);
    })
}