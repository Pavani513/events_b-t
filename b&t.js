const hoverDiv =document.getElementById("hoverDiv");
hoverDiv.addEventListener('mouseover',()=>{
    hoverDiv.style.backgroundColor="red";
});

const hoverP =document.getElementById("hoverP");
hoverP.addEventListener('mouseout',()=> {
    hoverP.style.backgroundColor="blue";
});

const G=document.getElementById("grand");
GParent.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("grand parent clikced");
})

const P=document.getElementById("parent");
P.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log(" parent clikced");
})

const C=document.getElementById("child");

C.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child clikced");
})



const GParent=document.getElementById("grand");
GParent.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("grand parent clikced");
},false)

const Par=document.getElementById("parent");
Par.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log(" parent clikced");
},false)

const Chi=document.getElementById("child");

Chi.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child clikced");
},false)

const Grand=document.getElementById("grand");
Grand.addEventListener("click",(e)=>{
    console.log("grand parent clikced");
},true)

const Paren=document.getElementById("parent");
Paren.addEventListener("click",(e)=>{
    console.log(" parent clikced");
},true)

const Children=document.getElementById("child");

Children.addEventListener("click",(e)=>{
    console.log("child clikced");
},true)

const GrandParent=document.getElementById("grand");
GrandParent.addEventListener("click",(e)=>{
    console.log("grand parent clikced");
},true)

const Pav=document.getElementById("parent");
Pav.addEventListener("click",(e)=>{
    console.log(" parent clikced");
},false)

const Chil=document.getElementById("child");

Chil.addEventListener("click",(e)=>{
    console.log("child clikced");
},true)