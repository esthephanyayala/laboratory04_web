
function postTask() {

let postButton = document.getElementById("postTodo");
let texto = document.getElementById("textArea");
texto.value = "";


postButton.addEventListener( "click", ( event ) => {

    event.preventDefault();
   console.log("correcto");


let textoError = document.getElementById("textAreaError");

//create the task
if (texto.value != "" ){
    let div = document.createElement("div");
    div.className = "tasks";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkboxTask"
    let span = document.createElement("span");
    span.className = "spanTexto";
    span.textContent= texto.value;
    let listTodos = document.getElementById("listTodos");


    div.appendChild(checkbox);
    div.appendChild(span);
    listTodos.appendChild(div);
    
}
else {
    textoError.textContent = "please write something";
}

}); //end of event listener postbutton


//mark button
let markButton = document.getElementById("markbtn");

markButton.addEventListener("click", (event) =>{
    event.preventDefault();

    let tasks = document.getElementsByClassName("checkboxTask");

    for(let i = 0; i< tasks.length; i++){
        tasks[i].checked = true;
    }

}); //end of mark button


//clear button
let clearButton = document.getElementById("clearbtn");

clearButton.addEventListener("click", (event) =>{
event.preventDefault();


let tasks = document.getElementsByClassName("checkboxTask");
//console.log(tasks.length);

for (let i = 0; i < tasks.length; i++){
    tasks[i].checked = false;
}

}); //end of event listener clearbutton

//delete button

let deleteButton = document.getElementById("deletebtn");

deleteButton.addEventListener("click", (event) =>{
    event.preventDefault();

    let listTasks = document.getElementsByClassName("tasks");
    listLength = listTasks.length;

    //console.log(listLength);

    for(let i= 0; i < listLength; i++){
        listTasks[0].remove();
    }

}); //end of event listener deleteButton

}// end of function posttask

postTask();