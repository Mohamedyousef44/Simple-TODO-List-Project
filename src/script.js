
let inputMain = document.getElementById('maininput');
let task = document.getElementById('task');
let pendText = document.getElementById('pend');
let taskInputs = document.querySelectorAll(".addtask");





window.onload = function () {
    inputMain.focus();
  };


function addElementsToarray(value){
    let div = document.createElement('div');
    div.setAttribute("class","addtask")
    div.innerHTML = '<input type="text" class="taskinput" readonly> <span class="btnDel">x</span>';
    div.firstChild.value = value;
    

}


// add new task to the plan

let btnadd = document.getElementById('addBtn');
btnadd.addEventListener('click' , ()=>{
    if(inputMain.value !== ""){
    let div = document.createElement('div');
    div.setAttribute("class","addtask")
    div.innerHTML = '<input type="text" class="taskinput" readonly> <span class="btnDel">x</span>';
    div.firstChild.value = inputMain.value;
    task = document.getElementById('task');
    task.appendChild(div);
    inputMain.value = "";
    }
})

// mark any task 
document.addEventListener('click',(e)=>{
    if(e.target.classList == 'taskinput'){
        e.target.classList.toggle('marked');
    }
})



// remove specific task 

document.addEventListener('click',(e)=>{
    if(e.target.classList == 'btnDel'){
        e.target.parentNode.remove();
    }
})


// removing all tasks

let b = document.getElementById('btn');
b.addEventListener('click',function(){
    task.innerHTML = " ";
    inputMain.value = "";
})




