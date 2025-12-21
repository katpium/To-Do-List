// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById(".list");
const input = document.getElementById("input");

const  CHECK = "fa-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
 
//showing Dates
const options = {weekday: "long", month: "short", day: "numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);