let btnAdd=document.getElementById('btnAdd')
let noData=document.getElementById('noData')
let tasksBox=document.getElementById('tasksBox')
let addInput=document.getElementById('addInput')
let closeBtn=document.getElementById('closeBtn')
let closeIcon=document.getElementById('closeIcon')
let model=document.getElementById('model')
let add=document.getElementById('add')
let alert1=document.getElementById('alert1')
let alertClose=document.getElementById('alertClose')
let darkMood =document.getElementById('darkMood')

let dark=()=>{
    if(darkMood.classList.contains('btn-light')){
        darkMood.classList.remove('btn-light')
        darkMood.classList.add('btn-dark')
        document.body.classList.add('light')
        darkMood.innerText="dark mood"
    }
    else{
        darkMood.classList.add('btn-light')
        darkMood.classList.remove('btn-dark')
        document.body.classList.remove('light')
        darkMood.innerText="light mood"
    }

}
darkMood.addEventListener('click',dark)






let showmodel=()=>{
    model.classList.remove('none')
}
add.addEventListener('click',showmodel)

let hideModel=()=>{
    model.classList.add('none')

}
closeIcon.addEventListener('click',hideModel)
closeBtn.addEventListener('click',hideModel)
let close=()=>{
    alert1.classList.add('none')
}

alertClose.addEventListener('click',close)

let addTask=()=>{

    let data=addInput.value;
    if(data == ""){
        alert('their is no data enterd');
        alert1.classList.remove('none')

    }
    else{

    tasksBox.innerHTML+=`<div style="padding:30px; text-transform:capitalize ;"class="tasks alert alert-info">
    ${data}
    <button class="beleteBtn btn btn-danger float-right">Delete</button>
    <div>`
    addInput.value=""
    noData.classList.add('none')
    alert1.classList.add('none')
    tasksBox.addEventListener('click',function (e) {
        if(e.target.classList.contains('tasks')){
            e.target.classList.toggle('chicked')
        }
    })
    }
    
    
}
btnAdd.addEventListener('click',addTask)

let noelement=()=>{
    if(tasksBox.childElementCount == 0){
        noData.classList.remove('none')
    }
}

document.addEventListener('click',function(e) {
    if(e.target.classList.contains('beleteBtn'))
    e.target.parentElement.remove();
    noelement();
})













