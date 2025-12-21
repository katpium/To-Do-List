// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const  CHECK = "fa-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
 
//showing Dates
const options = {weekday: "long", month: "short", day: "numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addTodo(toDo){

    const item =`<li class ="item">
                    <i class ="fa fa-circle-thin co" job ="complete" id ="0"></i>
                    <p class ="text">${toDo}</p>
                    <i class ="fa fa-trash-o de" job ="delete" id ="0"></i>
                    </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position,item);
}

addTodo("drink coffee");