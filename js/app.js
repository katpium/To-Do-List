// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const  CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
 
let LIST;
let id;
let data = localStorage.getItem("TODO");

if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}else{
    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function(item){
        addTodo(item.name, item.id, item.done, item.trash)
    });
}

//Clear button
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

//showing Dates
const options = {weekday: "long", month: "short", day: "numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addTodo(toDo, id, done, trash){

    if(trash){
        return;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done? LINE_THROUGH : "";

    const item =`<li class ="item">
                    <i class ="fa ${DONE} co" job ="complete" id ="${id}"></i>
                    <p class ="text ${LINE}">${toDo}</p>
                    <i class ="fa fa-trash-o de" job ="delete" id ="${id}"></i>
                    </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position,item);
}

document.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        const toDo = input.value;
        if(toDo){
            addTodo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            //add to local storage 
            localStorage.setItem("TODO", JSON.stringify(LIST));
        }
        input.value = "";
    }
})

//COMPLETE FUNCTION
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done? false : true;
}

function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

document.addEventListener("click", function (event){
    const element = event.target;
    const elementJob = element.getAttribute("job");

    if(!elementJob){
        return;
    }

    if(elementJob === "complete"){
        completeToDo(element);
    } else if (elementJob === "delete"){
        removeTodo(element);
    }
    //add to local storage 
    localStorage.setItem("TODO", JSON.stringify(LIST));
});
