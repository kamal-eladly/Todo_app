let btnCreate=document.querySelector('header .container >button')
let createBage=document.querySelector('.create')
let closeIcon=document.querySelector('.icon-close')
let closeButton=document.querySelector('.create .container >button')
let addButton=document.querySelector('.create .container .box button')
let cardBox=document.querySelector('header .container .card1')
let cardDelete=document.querySelector('header .container .card1 button')
let box=document.querySelector('header .container .box')
btnCreate.onclick = function (){
    
     createBage.classList.remove('hide')
 }
closeIcon.onclick = function () {
    createBage.classList.add('hide')
}
closeButton.onclick = function () {
    createBage.classList.add('hide')
}

addButton.onclick=function () {
    if(document.querySelector('.create .container .box input').value==""){
        alert('Their Is No Data Entred')
    }
    else{
        
    createBage.classList.add('hide')
    document.querySelector('header .container .card1 span').innerHTML=document.querySelector('.create .container .box input').value
    cardBox.classList.remove('hide')
    box.classList.add('hide')
    
}

}
cardDelete.onclick=function () {
    cardBox.classList.add('hide');
}