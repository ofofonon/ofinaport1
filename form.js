window.addEventListener("load", () =>{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () =>{
        document.body.replaceChild("loader");
    })
})

function show(){
    let na=document.getElementById('navnav1');
    let bu=document.getElementById('but2');
    let to=document.getElementById('bars');
    
    na.style.display='block';
   
   
    bu.style.boxShadow='0 9px 5px 0 rgba(0, 0, 0, 0.106), 0 7px 20px 0 rgba(0, 0, 0, 0.106)'
    to.style.fontSize='200%'
    to.style.transition='0.3s'
    bu.style.transition='0.3s'
    to.style.transform='rotate(90deg)'
}

function out(){
    let va=document.getElementById('navnav1');
    let bu=document.getElementById('but2');
    let to=document.getElementById('bars');
    va.style.display='none';
    bu.style.border='none'
    bu.style.boxShadow='none'
    to.style.fontSize='150%'
    to.style.transition='0.3s'
    bu.style.transition='0.3s'
    to.style.transform='rotate(180deg)'

}

function to(){
    let va=document.getElementById('navnav1');
    let bu=document.getElementById('but2');
    let to=document.getElementById('bars');
    va.style.display='none';
    bu.style.border='none'
    bu.style.boxShadow='none'
    to.style.fontSize='150%'
    to.style.transition='0.3s'
    bu.style.transition='0.3s'
    to.style.transform='rotate(180deg)'
}

let navf= document.getElementById('uo').style;
let loa= document.getElementById('load').style;

if(loa.display='none'){
    navf.display='block'
}
else{
    navf.display='none'
}